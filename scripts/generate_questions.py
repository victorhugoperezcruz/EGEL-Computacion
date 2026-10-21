#!/usr/bin/env python3
"""
Script para extraer texto de archivos PDF y PPT en 'scripts/raw_books/', dividirlo en
fragmentos (chunks) lógicos con muestreo inteligente para libros extensos, y generar
preguntas estilo examen CENEVAL EGEL de Ingeniería en Computación utilizando el SDK
de Google GenAI (gemini-1.5-pro).

Guarda el resultado de cada documento en un archivo JSON independiente en 'src/data/'.
"""

import argparse
import json
import logging
import os
import re
import struct
import sys
import time
from pathlib import Path
from typing import List, Literal, Optional

import fitz  # PyMuPDF
from dotenv import load_dotenv
from pydantic import BaseModel, Field, ValidationError

# Configurar logging
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
    datefmt="%Y-%m-%d %H:%M:%S",
)
logger = logging.getLogger(__name__)


# =====================================================================
# Esquemas Pydantic para garantizar salida JSON estricta
# =====================================================================

class OpcionPregunta(BaseModel):
    id: Literal["A", "B", "C", "D"] = Field(
        description="Identificador de la opción ('A', 'B', 'C' o 'D')."
    )
    texto: str = Field(
        description="Texto completo de la opción de respuesta."
    )


class PreguntaEGEL(BaseModel):
    id: str = Field(
        description="Identificador único de la pregunta."
    )
    area: str = Field(
        description="Área del examen EGEL de Ingeniería en Computación (Implementación de Hardware, Implementación de Software o Implementación de Redes)."
    )
    subarea: str = Field(
        description="Subárea específica del examen EGEL relacionada con el reactivo."
    )
    pregunta: str = Field(
        description="Planteamiento del caso práctico o pregunta estilo CENEVAL EGEL."
    )
    opciones: List[OpcionPregunta] = Field(
        min_length=4,
        max_length=4,
        description="Arreglo de exactamente 4 objetos con 'id' (A, B, C, D) y 'texto'.",
    )
    respuesta_correcta: Literal["A", "B", "C", "D"] = Field(
        description="ID de la opción correcta ('A', 'B', " "'C' o 'D')."
    )
    explicacion: str = Field(
        description="Justificación técnica detallada de por qué la respuesta es correcta y por qué los distractores son incorrectos."
    )


class LotePreguntasEGEL(BaseModel):
    preguntas: List[PreguntaEGEL] = Field(
        description="Lista de preguntas generadas a partir del fragmento de texto."
    )


# =====================================================================
# Extracción de Texto (PDF con PyMuPDF y PPT binario PowerPoint)
# =====================================================================

def limpiar_texto(texto: str) -> str:
    """Limpia caracteres de control y normaliza saltos de línea y espacios."""
    texto = texto.replace("\r", "\n").replace("\x0b", "\n")
    # Eliminar guiones de corte de palabra al final de línea
    texto = re.sub(r"(\w+)-\s*\n\s*(\w+)", r"\1\2", texto)
    # Normalizar múltiples espacios/tabs a un solo espacio
    texto = re.sub(r"[ \t]+", " ", texto)
    # Normalizar más de 2 saltos de línea seguidos a doble salto (párrafo)
    texto = re.sub(r"\n{3,}", "\n\n", texto)
    return texto.strip()


def extraer_texto_pdf(pdf_path: Path, min_chars_por_pagina: int = 80) -> List[str]:
    """
    Extrae el texto página por página usando PyMuPDF (fitz).
    Omite páginas vacías o con muy poco texto (portadas, separadores).
    """
    paginas_texto: List[str] = []
    try:
        with fitz.open(pdf_path) as doc:
            logger.info(f"Abriendo PDF '{pdf_path.name}' ({len(doc)} páginas)...")
            for num_pagina, pagina in enumerate(doc, start=1):
                texto_pagina = pagina.get_text("text")
                texto_limpio = limpiar_texto(texto_pagina)
                if len(texto_limpio) >= min_chars_por_pagina:
                    paginas_texto.append(texto_limpio)
                else:
                    logger.debug(
                        f"Página {num_pagina} omitida por bajo contenido ({len(texto_limpio)} caracteres)."
                    )
    except Exception as e:
        logger.error(f"Error al leer el archivo PDF '{pdf_path.name}': {e}")
        raise

    return paginas_texto


PATRONES_RUIDO_PPT = (
    "body text",
    "second level",
    "third level",
    "todos los derechos reservados",
    "all rights reserved",
    "presentation_id",
    "title of course",
    "slideLayout",
)


def extraer_texto_ppt(ppt_path: Path) -> List[str]:
    """
    Extrae texto de presentaciones PowerPoint (.ppt binario 97-2003) leyendo
    los registros TextBytesAtom (0x0FA8) y TextCharsAtom (0x0FA0).
    """
    logger.info(f"Abriendo presentación PPT '{ppt_path.name}'...")
    data = ppt_path.read_bytes()
    bloques: List[str] = []

    # Extraer TextBytesAtom (0x0FA8 -> \xa8\x0f en little-endian)
    for match in re.finditer(b"\xa8\x0f", data):
        pos = match.end()
        if pos + 4 > len(data):
            continue
        length = struct.unpack_from("<I", data, pos)[0]
        if 15 <= length <= 8192 and pos + 4 + length <= len(data):
            raw_bytes = data[pos + 4 : pos + 4 + length]
            texto = raw_bytes.decode("cp1252", errors="ignore")
            texto = limpiar_texto(texto)
            if len(texto) >= 15 and not any(p in texto.lower() for p in PATRONES_RUIDO_PPT):
                bloques.append(texto)

    # Extraer TextCharsAtom (0x0FA0 -> \xa0\x0f en little-endian, UTF-16LE)
    for match in re.finditer(b"\xa0\x0f", data):
        pos = match.end()
        if pos + 4 > len(data):
            continue
        length = struct.unpack_from("<I", data, pos)[0]
        if 20 <= length <= 16384 and length % 2 == 0 and pos + 4 + length <= len(data):
            raw_bytes = data[pos + 4 : pos + 4 + length]
            texto = raw_bytes.decode("utf-16le", errors="ignore")
            texto = limpiar_texto(texto)
            if len(texto) >= 15 and not any(p in texto.lower() for p in PATRONES_RUIDO_PPT):
                bloques.append(texto)

    return bloques


# =====================================================================
# División en Fragmentos (Chunking) y Muestreo Inteligente
# =====================================================================

def dividir_en_chunks_logicos(
    paginas: List[str],
    tamano_max_chunk: int = 12000,
    solapamiento: int = 800,
    min_chars_chunk: int = 350,
) -> List[str]:
    """
    Divide el texto extraído en fragmentos (chunks) lógicos respetando
    límites de párrafos y oraciones para no saturar el contexto de la IA.
    """
    texto_completo = "\n\n".join(paginas)
    parrafos = [p.strip() for p in texto_completo.split("\n\n") if p.strip()]

    chunks: List[str] = []
    chunk_actual: List[str] = []
    longitud_actual = 0

    for parrafo in parrafos:
        longitud_parrafo = len(parrafo)

        if longitud_parrafo > tamano_max_chunk:
            oraciones = re.split(r"(?<=[.!?])\s+", parrafo)
            for oracion in oraciones:
                if longitud_actual + len(oracion) + 1 > tamano_max_chunk and chunk_actual:
                    texto_chunk = "\n\n".join(chunk_actual).strip()
                    if len(texto_chunk) >= min_chars_chunk:
                        chunks.append(texto_chunk)
                    texto_solapado = texto_chunk[-solapamiento:] if solapamiento > 0 else ""
                    chunk_actual = [texto_solapado] if texto_solapado else []
                    longitud_actual = len(texto_solapado)

                chunk_actual.append(oracion)
                longitud_actual += len(oracion) + 1
            continue

        if longitud_actual + longitud_parrafo + 2 > tamano_max_chunk and chunk_actual:
            texto_chunk = "\n\n".join(chunk_actual).strip()
            if len(texto_chunk) >= min_chars_chunk:
                chunks.append(texto_chunk)

            nuevo_chunk: List[str] = []
            longitud_solapada = 0
            for p_previo in reversed(chunk_actual):
                if longitud_solapada + len(p_previo) <= solapamiento:
                    nuevo_chunk.insert(0, p_previo)
                    longitud_solapada += len(p_previo) + 2
                else:
                    break

            chunk_actual = nuevo_chunk
            longitud_actual = longitud_solapada

        chunk_actual.append(parrafo)
        longitud_actual += longitud_parrafo + 2

    if chunk_actual:
        texto_chunk = "\n\n".join(chunk_actual).strip()
        if len(texto_chunk) >= min_chars_chunk:
            chunks.append(texto_chunk)

    return chunks


PALABRAS_CLAVE_ALTO_VALOR = (
    "puntos clave",
    "resumen",
    "arquitectura",
    "requerimientos",
    "requisitos",
    "pruebas",
    "verificación",
    "validación",
    "protocolo",
    "diseño",
    "tiempo real",
    "microcontrolador",
    "subred",
    "enrutamiento",
    "algoritmo",
    "mantenimiento",
    "calidad",
    "seguridad",
)


def seleccionar_chunks_inteligente(chunks: List[str], max_chunks: int = 12) -> List[str]:
    """
    Para libros muy extensos (ej. Sommerville de 691 páginas), divide el libro
    en `max_chunks` segmentos equitativos y elige dentro de cada segmento el
    fragmento con mayor densidad conceptual/resumen. Así cubre todo el libro
    sin agotar la cuota de la API.
    """
    if len(chunks) <= max_chunks:
        return chunks

    logger.info(
        f"Activando Muestreo Inteligente: seleccionando los {max_chunks} fragmentos "
        f"de mayor valor técnico de un total de {len(chunks)} fragmentos..."
    )

    seleccionados: List[str] = []
    tamano_segmento = len(chunks) / max_chunks

    for i in range(max_chunks):
        inicio = int(round(i * tamano_segmento))
        fin = int(round((i + 1) * tamano_segmento))
        sub_lote = chunks[inicio:max(inicio + 1, fin)]

        # Puntuar cada chunk según densidad de palabras clave de ingeniería/resúmenes
        mejor_chunk = max(
            sub_lote,
            key=lambda c: sum(c.lower().count(kw) * 3 for kw in PALABRAS_CLAVE_ALTO_VALOR)
            + (15 if "puntos clave" in c.lower() else 0),
        )
        seleccionados.append(mejor_chunk)

    return seleccionados


# =====================================================================
# Integración con el SDK de Google GenAI (gemini-1.5-pro)
# =====================================================================

SYSTEM_PROMPT = """Eres un experto diseñador de reactivos para el Examen General para el Egreso de la Licenciatura (EGEL Plus) en Ingeniería en Computación de CENEVAL.

Tu tarea es analizar el fragmento de texto técnico proporcionado y generar preguntas de opción múltiple con nivel de aplicación, análisis o resolución de casos prácticos propios del examen EGEL.

Reglas estrictas:
1. Cada reactivo debe evaluar conceptos técnicos reales presentes en el fragmento (evita preguntas triviales sobre el índice, autor, número de página o prefacio). Si el fragmento es únicamente un índice o bibliografía sin contenido técnico evaluable, devuelve una lista vacía de preguntas.
2. Plantea escenarios o casos prácticos claros en el campo "pregunta".
3. Clasifica cada reactivo en el "area" y "subarea" correspondientes del EGEL de Ingeniería en Computación:
   - Área: "Implementación de Hardware" (Subáreas: "Arquitectura de computadoras y diseño digital", "Sistemas embebidos y tiempo real", "Electrónica y microcontroladores")
   - Área: "Implementación de Software" (Subáreas: "Ingeniería de requerimientos y arquitectura", "Ciclos de vida y construcción de software", "Verificación, validación y pruebas", "Calidad y gestión de software")
   - Área: "Implementación de Redes" (Subáreas: "Modelos OSI/TCP-IP y protocolos", "Direccionamiento IPv4 y enrutamiento", "Ethernet, capa de enlace y cableado", "Configuración y administración de redes")
4. Incluye exactamente 4 opciones en "opciones" con los ids "A", "B", "C" y "D". Solo una opción debe ser inequívocamente correcta y los 3 distractores deben ser plausibles.
5. El campo "respuesta_correcta" debe ser únicamente "A", "B", "C" o "D".
6. El campo "explicacion" debe explicar claramente el fundamento técnico de la respuesta correcta y por qué las demás opciones no son correctas.
7. Responde ÚNICAMENTE con un objeto JSON válido que cumpla con el esquema solicitado."""


def construir_prompt_usuario(
    texto_chunk: str,
    preguntas_por_chunk: int,
    prefijo_id: str,
    indice_chunk: int,
) -> str:
    return f"""Genera entre 1 y {preguntas_por_chunk} preguntas estilo examen EGEL de Ingeniería en Computación basadas en el siguiente fragmento técnico.

Usa identificadores secuenciales con el formato "{prefijo_id}_c{indice_chunk}_q1", "{prefijo_id}_c{indice_chunk}_q2", etc.

Esquema JSON esperado:
{{
  "preguntas": [
    {{
      "id": "{prefijo_id}_c{indice_chunk}_q1",
      "area": "Implementación de Software",
      "subarea": "Ingeniería de requerimientos y arquitectura",
      "pregunta": "Enunciado del reactivo o caso práctico...",
      "opciones": [
        {{"id": "A", "texto": "Opción A"}},
        {{"id": "B", "texto": "Opción B"}},
        {{"id": "C", "texto": "Opción C"}},
        {{"id": "D", "texto": "Opción D"}}
      ],
      "respuesta_correcta": "A",
      "explicacion": "Explicación detallada..."
    }}
  ]
}}

--- INICIO DEL FRAGMENTO ---
{texto_chunk}
--- FIN DEL FRAGMENTO ---"""


class GeneradorPreguntasGenAI:
    """
    Cliente envoltorio compatible con el SDK oficial `google-genai`
    y `google-generativeai` usando el modelo `gemini-1.5-pro`.
    """

    def __init__(self, api_key: str, model_name: str = "gemini-1.5-pro"):
        self.api_key = api_key
        self.model_name = model_name
        self.sdk_mode: Optional[str] = None
        self.client = None
        self.legacy_model = None

        try:
            from google import genai
            from google.genai import types

            self._genai = genai
            self._types = types
            self.client = genai.Client(api_key=self.api_key)
            self.sdk_mode = "google-genai"
            logger.info(f"SDK 'google-genai' inicializado con el modelo '{self.model_name}'.")
            return
        except ImportError:
            pass

        try:
            import google.generativeai as genai_legacy

            self._genai_legacy = genai_legacy
            genai_legacy.configure(api_key=self.api_key)
            self.legacy_model = genai_legacy.GenerativeModel(
                model_name=self.model_name,
                system_instruction=SYSTEM_PROMPT,
            )
            self.sdk_mode = "google-generativeai"
            logger.info(f"SDK 'google-generativeai' inicializado con el modelo '{self.model_name}'.")
            return
        except ImportError:
            raise RuntimeError(
                "No se encontró el SDK de Google GenAI. Instálalo ejecutando:\n"
                "  pip install -r scripts/requirements.txt"
            )

    def _invocar_modelo(self, prompt_usuario: str) -> str:
        if self.sdk_mode == "google-genai":
            config = self._types.GenerateContentConfig(
                system_instruction=SYSTEM_PROMPT,
                temperature=0.3,
                response_mime_type="application/json",
                response_schema=LotePreguntasEGEL,
            )
            response = self.client.models.generate_content(
                model=self.model_name,
                contents=prompt_usuario,
                config=config,
            )
            return response.text or ""
        else:
            generation_config = self._genai_legacy.GenerationConfig(
                temperature=0.3,
                response_mime_type="application/json",
                response_schema=LotePreguntasEGEL,
            )
            response = self.legacy_model.generate_content(
                prompt_usuario,
                generation_config=generation_config,
            )
            return response.text or ""

    @staticmethod
    def _extraer_json_limpio(respuesta_texto: str) -> dict:
        texto = respuesta_texto.strip()
        if texto.startswith("```"):
            texto = re.sub(r"^```(?:json)?\s*", "", texto, flags=re.IGNORECASE)
            texto = re.sub(r"\s*```$", "", texto)
        datos = json.loads(texto)
        if isinstance(datos, list):
            return {"preguntas": datos}
        return datos

    def generar_preguntas_chunk(
        self,
        texto_chunk: str,
        preguntas_por_chunk: int,
        prefijo_id: str,
        indice_chunk: int,
        max_reintentos: int = 4,
        espera_base: float = 5.0,
    ) -> List[dict]:
        prompt = construir_prompt_usuario(
            texto_chunk=texto_chunk,
            preguntas_por_chunk=preguntas_por_chunk,
            prefijo_id=prefijo_id,
            indice_chunk=indice_chunk,
        )

        for intento in range(1, max_reintentos + 1):
            try:
                respuesta_cruda = self._invocar_modelo(prompt)
                if not respuesta_cruda:
                    raise ValueError("La API devolvió una respuesta vacía.")

                datos_json = self._extraer_json_limpio(respuesta_cruda)
                lote_validado = LotePreguntasEGEL.model_validate(datos_json)

                return [pregunta.model_dump() for pregunta in lote_validado.preguntas]

            except (json.JSONDecodeError, ValidationError, ValueError) as err_validacion:
                logger.warning(
                    f"[Chunk {indice_chunk}] Error de validación JSON "
                    f"(intento {intento}/{max_reintentos}): {err_validacion}"
                )
                if intento == max_reintentos:
                    logger.error(
                        f"[Chunk {indice_chunk}] Se agotaron los reintentos por validación JSON."
                    )
                    return []
                time.sleep(espera_base * intento)

            except Exception as err_api:
                mensaje_error = str(err_api)
                es_cuota = any(
                    codigo in mensaje_error.lower()
                    for codigo in ("429", "resource_exhausted", "quota", "rate limit", "too many requests")
                )
                tiempo_espera = espera_base * (2 ** (intento - 1))
                if es_cuota:
                    tiempo_espera = max(tiempo_espera, 30.0 * intento)

                logger.warning(
                    f"[Chunk {indice_chunk}] Error en la API de Gemini "
                    f"(intento {intento}/{max_reintentos}): {mensaje_error}. "
                    f"Reintentando en {tiempo_espera:.1f}s..."
                )

                if intento == max_reintentos:
                    logger.error(
                        f"[Chunk {indice_chunk}] Se agotaron los {max_reintentos} reintentos."
                    )
                    return []

                time.sleep(tiempo_espera)

        return []


# =====================================================================
# Utilidades de Nombres y Guardado de Archivos
# =====================================================================

def generar_slug_archivo(nombre_archivo: str) -> str:
    base = Path(nombre_archivo).stem.lower()
    reemplazos = str.maketrans("áéíóúüñ", "aeiouun")
    base = base.translate(reemplazos)
    base = re.sub(r"[^a-z0-9]+", "_", base)
    return base.strip("_") or "documento"


def guardar_json(ruta_salida: Path, preguntas: List[dict]) -> None:
    ruta_salida.parent.mkdir(parents=True, exist_ok=True)
    with open(ruta_salida, "w", encoding="utf-8") as archivo:
        json.dump(preguntas, archivo, ensure_ascii=False, indent=2)


# =====================================================================
# Flujo Principal de Procesamiento
# =====================================================================

def procesar_documento(
    doc_path: Path,
    output_dir: Path,
    generador: GeneradorPreguntasGenAI,
    tamano_chunk: int,
    solapamiento: int,
    preguntas_por_chunk: int,
    pausa_entre_peticiones: float,
    max_reintentos: int,
    max_chunks_muestreo: int = 12,
    sobrescribir: bool = False,
) -> None:
    slug = generar_slug_archivo(doc_path.name)
    ruta_salida = output_dir / f"{slug}.json"

    if ruta_salida.exists() and not sobrescribir:
        logger.info(
            f"El archivo de salida '{ruta_salida.name}' ya existe en src/data/. "
            f"Usa --overwrite si deseas regenerarlo. Saltando '{doc_path.name}'."
        )
        return

    sufijo = doc_path.suffix.lower()
    if sufijo == ".pdf":
        paginas = extraer_texto_pdf(doc_path)
    elif sufijo == ".ppt":
        paginas = extraer_texto_ppt(doc_path)
    else:
        logger.warning(f"Formato no soportado: {doc_path.name}")
        return

    if not paginas:
        logger.warning(f"No se pudo extraer texto útil de '{doc_path.name}'.")
        return

    chunks = dividir_en_chunks_logicos(
        paginas=paginas,
        tamano_max_chunk=tamano_chunk,
        solapamiento=solapamiento,
    )

    if not chunks:
        logger.warning(f"No se generaron fragmentos válidos para '{doc_path.name}'.")
        return

    # Aplicar Muestreo Inteligente si el libro tiene muchos fragmentos (ej. Sommerville)
    if max_chunks_muestreo > 0 and len(chunks) > max_chunks_muestreo:
        chunks = seleccionar_chunks_inteligente(chunks, max_chunks=max_chunks_muestreo)

    logger.info(
        f"'{doc_path.name}': {len(chunks)} fragmentos lógicos seleccionados para procesar."
    )

    todas_las_preguntas: List[dict] = []
    contador_global = 1

    for idx, chunk in enumerate(chunks, start=1):
        logger.info(
            f"[{doc_path.name}] Procesando fragmento {idx}/{len(chunks)} "
            f"({len(chunk)} caracteres)..."
        )

        preguntas_chunk = generador.generar_preguntas_chunk(
            texto_chunk=chunk,
            preguntas_por_chunk=preguntas_por_chunk,
            prefijo_id=slug,
            indice_chunk=idx,
            max_reintentos=max_reintentos,
        )

        for pregunta in preguntas_chunk:
            pregunta["id"] = f"{slug}_{contador_global:03d}"
            contador_global += 1
            todas_las_preguntas.append(pregunta)

        logger.info(
            f"[{doc_path.name}] Fragmento {idx}/{len(chunks)} completado: "
            f"{len(preguntas_chunk)} preguntas (Acumulado: {len(todas_las_preguntas)})."
        )

        if todas_las_preguntas:
            guardar_json(ruta_salida, todas_las_preguntas)

        if idx < len(chunks) and pausa_entre_peticiones > 0:
            time.sleep(pausa_entre_peticiones)

    guardar_json(ruta_salida, todas_las_preguntas)
    logger.info(
        f"Finalizado '{doc_path.name}'. Se guardaron {len(todas_las_preguntas)} preguntas en '{ruta_salida}'."
    )


def parse_args() -> argparse.Namespace:
    base_dir = Path(__file__).resolve().parent.parent
    default_input = base_dir / "scripts" / "raw_books"
    default_output = base_dir / "src" / "data"

    parser = argparse.ArgumentParser(
        description="Generador de preguntas tipo EGEL Ingeniería en Computación (PDF + PPT con Muestreo Inteligente)."
    )
    parser.add_argument(
        "--input-dir",
        type=Path,
        default=default_input,
        help="Carpeta con los archivos PDF y PPT de entrada.",
    )
    parser.add_argument(
        "--output-dir",
        type=Path,
        default=default_output,
        help="Carpeta donde se guardarán los JSON generados (src/data/).",
    )
    parser.add_argument(
        "--model",
        type=str,
        default="gemini-1.5-pro",
        help="Modelo de Google GenAI a utilizar (por defecto: gemini-1.5-pro).",
    )
    parser.add_argument(
        "--chunk-size",
        type=int,
        default=12000,
        help="Tamaño máximo en caracteres por cada fragmento (por defecto: 12000).",
    )
    parser.add_argument(
        "--chunk-overlap",
        type=int,
        default=800,
        help="Caracteres de solapamiento entre fragmentos (por defecto: 800).",
    )
    parser.add_argument(
        "--questions-per-chunk",
        type=int,
        default=3,
        help="Cantidad máxima de preguntas por fragmento (por defecto: 3).",
    )
    parser.add_argument(
        "--delay",
        type=float,
        default=4.0,
        help="Pausa en segundos entre peticiones a la API (por defecto: 4.0).",
    )
    parser.add_argument(
        "--retries",
        type=int,
        default=4,
        help="Número máximo de reintentos ante fallos de la API (por defecto: 4).",
    )
    parser.add_argument(
        "--max-chunks",
        type=int,
        default=12,
        help="Máximo de fragmentos por libro mediante Muestreo Inteligente (por defecto: 12).",
    )
    parser.add_argument(
        "--include-ppt",
        action="store_true",
        default=True,
        help="Incluir también presentaciones .ppt de la carpeta raw_books (activado por defecto).",
    )
    parser.add_argument(
        "--pdf",
        type=str,
        default=None,
        help="Nombre de un archivo específico a procesar dentro de input-dir.",
    )
    parser.add_argument(
        "--overwrite",
        action="store_true",
        help="Sobrescribir los archivos JSON en src/data/ si ya existen.",
    )
    return parser.parse_args()


def main() -> int:
    load_dotenv()
    args = parse_args()

    api_key = os.getenv("GEMINI_API_KEY") or os.getenv("GOOGLE_API_KEY")
    if not api_key:
        logger.error(
            "No se encontró la variable de entorno GEMINI_API_KEY (o GOOGLE_API_KEY).\n"
            "Configúrala en un archivo .env o en tu terminal:\n"
            "  $env:GEMINI_API_KEY='tu_api_key'"
        )
        return 1

    input_dir: Path = args.input_dir
    output_dir: Path = args.output_dir

    if not input_dir.exists() or not input_dir.is_dir():
        logger.error(f"El directorio de entrada no existe: {input_dir}")
        return 1

    output_dir.mkdir(parents=True, exist_ok=True)

    if args.pdf:
        doc_especifico = input_dir / args.pdf
        if not doc_especifico.exists():
            logger.error(f"No se encontró el archivo especificado: {doc_especifico}")
            return 1
        archivos = [doc_especifico]
    else:
        archivos = sorted(input_dir.glob("*.pdf"))
        if args.include_ppt:
            archivos.extend(sorted(input_dir.glob("*.ppt")))

    if not archivos:
        logger.warning(f"No se encontraron archivos compatibles dentro de '{input_dir}'.")
        return 0

    logger.info(f"Se encontraron {len(archivos)} documento(s) para procesar.")

    try:
        generador = GeneradorPreguntasGenAI(api_key=api_key, model_name=args.model)
    except Exception as e:
        logger.error(f"Error al inicializar el cliente de Google GenAI: {e}")
        return 1

    for idx_doc, doc_path in enumerate(archivos, start=1):
        logger.info("=" * 70)
        logger.info(f"Procesando ({idx_doc}/{len(archivos)}): {doc_path.name}")
        logger.info("=" * 70)
        try:
            procesar_documento(
                doc_path=doc_path,
                output_dir=output_dir,
                generador=generador,
                tamano_chunk=args.chunk_size,
                solapamiento=args.chunk_overlap,
                preguntas_por_chunk=args.questions_per_chunk,
                pausa_entre_peticiones=args.delay,
                max_reintentos=args.retries,
                max_chunks_muestreo=args.max_chunks,
                sobrescribir=args.overwrite,
            )
        except Exception as e:
            logger.error(f"Fallo inesperado procesando '{doc_path.name}': {e}")
            continue

    logger.info("Proceso finalizado exitosamente.")
    return 0


if __name__ == "__main__":
    sys.exit(main())

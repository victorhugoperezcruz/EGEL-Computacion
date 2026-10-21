# 🎓 EGEL Pro — Ingeniería en Computación (EGEL-ICOMPU)

**EGEL Pro** es una plataforma web interactiva construida con **React 19 + Vite 8 + Tailwind CSS** diseñada para el estudio intensivo, fundamentación teórica y simulación del **Examen General para el Egreso de la Licenciatura en Ingeniería en Computación (CENEVAL EGEL Plus ICOMPU)**.

---

## ✨ Características Principales

- 📚 **Banco de 643 Reactivos Activos**:
  - Carga dinámica y deduplicación automática de bancos de preguntas (`src/data/*.json` y `src/data/MoreQuestions/*.json`).
  - Casos prácticos explicados paso a paso y lecturas de comprensión con párrafos numerados.
  - Sesiones configurables de **35, 45 o 60 reactivos** por lección.
- 📖 **Flujo de Estudio en 2 Fases (Lectura Previa → Cuestionario)**:
  - **Fase 1 (Lectura Previa)**: Guía teórica completa de la subárea antes de iniciar los reactivos, con seguimiento de lectura, tablas comparativas, fórmulas y tips de examen.
  - **Fase 2 (Cuestionario de Comprobación)**: Evaluación interactiva con soporte de atajos de teclado (`A-D` / `1-4` y `Enter`), acceso al documento de lectura previa en cualquier momento y un cajón deslizable de **Apunte Rápido** con fórmulas y teoría en vivo.
- 🔀 **Mezcla Inteligente de Opciones (`A, B, C, D`)**:
  - Los textos de las opciones se barajan aleatoriamente en cada intento para evitar la memorización posicional, manteniendo siempre el orden alfabético estricto de los incisos (`A`, `B`, `C`, `D`).
- 🧠 **Enciclopedia Teórica 100 % CENEVAL**:
  - Cobertura exhaustiva de las **11 subáreas oficiales**, con buscador global en tiempo real, coincidencias cruzadas entre subáreas, **23 tablas comparativas**, **56 bloques de fórmulas/comandos**, bibliografía oficial y catálogo de reactivos resueltos.
- 🎯 **Centro de Refuerzo de Fallos y Entrenamiento Adaptativo**:
  - Sin límite de vidas: enfoque de estudio continuo donde los errores se reencolan en la sesión hasta dominarlos y se priorizan automáticamente según tu tasa de acierto histórica.
- ⏱️ **Simulador de Examen Cronometrado**:
  - Simulacros configurables de **35, 70, 140 o 250 reactivos** sin pistas, con desglose de resultados por área y dictamen oficial CENEVAL:
    - **Testimonio de Desempeño Sobresaliente (TDS)**: `≥ 85%`
    - **Testimonio de Desempeño Satisfactorio (DS)**: `≥ 70%`
    - **Aún no satisfactorio**: `< 70%`
- 💾 **Persistencia Total en `localStorage`**:
  - Guardado automático de progreso histórico (`egel_pro_progress_v3`) y de la sesión o simulacro activo (`egel_pro_active_session_v3`). Puedes recargar la página o cerrar el navegador y retomar exactamente en la pregunta donde te quedaste.

---

## 🗂️ Cobertura Temática Oficial (Áreas y Subáreas)

| Área | Código | Subárea Oficial |
| :--- | :---: | :--- |
| **Área 1: Implementación de Hardware** | `1.1` | Circuitos eléctricos y electrónica |
| **Área 1: Implementación de Hardware** | `1.2` | Arquitectura de computadoras y diseño digital |
| **Área 1: Implementación de Hardware** | `1.3` | Sistemas embebidos y tiempo real |
| **Área 1: Implementación de Hardware** | `1.4` | Automatización y control |
| **Área 2: Implementación de Redes** | `2.1` | Diseño y direccionamiento de redes |
| **Área 2: Implementación de Redes** | `2.2` | Administración y configuración de redes |
| **Área 2: Implementación de Redes** | `2.3` | Seguridad en redes |
| **Área 3: Implementación de Software** | `3.1` | Ingeniería de software y calidad |
| **Área 3: Implementación de Software** | `3.2` | Programación, estructuras de datos y algoritmos |
| **Área 3: Implementación de Software** | `3.3` | Bases de datos y manejo de datos |
| **Área 4: Habilidades Transversales** | `4.1` | Comprensión Lectora |

---

## 🛠️ Stack Tecnológico

- **Frontend**: [React 19](https://react.dev/) + [Vite 8](https://vite.dev/)
- **Estilos y UI**: [Tailwind CSS 3](https://tailwindcss.com/), [Lucide React](https://lucide.dev/) (iconografía), `canvas-confetti`
- **Tipografía**: *Plus Jakarta Sans* (interfaz y lectura) + *JetBrains Mono* (código, direccionamiento IP y fórmulas)
- **Scripts de Generación de Bancos (Opcional - Python)**: `PyMuPDF` (`fitz`), `google-genai` y `python-dotenv`

---

## 🚀 Instalación y Uso Local

### Prerrequisitos
- **Node.js** `>= 18.x` y **npm**

### 1. Clonar el repositorio e instalar dependencias
```bash
git clone <URL_DEL_REPOSITORIO>
cd EGEL
npm install
```

### 2. Iniciar el servidor de desarrollo
```bash
npm run dev
```
Abre en tu navegador la ruta indicada en la terminal (por defecto `http://localhost:5173`).

### 3. Compilar para producción
```bash
npm run build
npm run preview
```

---

## 📁 Estructura del Proyecto

```text
EGEL/
├── index.html                        # Configuración de fuentes y contenedor raíz
├── package.json                      # Dependencias y scripts (dev, build, lint, preview)
├── scripts/                          # Herramientas en Python para extracción y generación de reactivos
│   ├── generate_questions.py         # Extractor de PDFs/PPTs + generación con Gemini API
│   ├── build_expanded_bank.py        # Constructor y validador del banco expandido de reactivos
│   └── requirements.txt              # Dependencias de Python (pymupdf, google-genai, python-dotenv)
└── src/
    ├── main.jsx                      # Punto de entrada de React
    ├── index.css                     # Estilos base y utilidades de Tailwind CSS
    ├── App.jsx                       # Motor principal: vistas, sesiones, simulacros y persistencia
    ├── theoryData.js                 # Enciclopedia teórica exhaustiva (THEORY_GUIDE) de las 11 subáreas
    └── data/
        ├── *.json                    # Bancos de reactivos base (~158 preguntas)
        └── MoreQuestions/            # Bancos especializados por subárea y comprensión lectora (~485 preguntas)
```

---

## 🧩 Formato de los Bancos de Preguntas (`JSON`)

Si deseas añadir nuevos reactivos en `src/data/`, utiliza la siguiente estructura estándar:

```json
{
  "id": "sub11_001",
  "area": "Implementación de Hardware",
  "subarea": "1.1 Circuitos eléctricos y electrónica",
  "pregunta": "Enunciado del caso práctico o reactivo...",
  "opciones": [
    { "id": "A", "texto": "Primera opción" },
    { "id": "B", "texto": "Segunda opción" },
    { "id": "C", "texto": "Tercera opción" },
    { "id": "D", "texto": "Cuarta opción" }
  ],
  "respuesta_correcta": "B",
  "explicacion": "Justificación técnica detallada de por qué la opción es correcta..."
}
```

> **Nota**: Asegúrate de que los campos `area` y `subarea` coincidan exactamente con la tabla de **Cobertura Temática Oficial** para que la plataforma los clasifique automáticamente en su módulo correspondiente.

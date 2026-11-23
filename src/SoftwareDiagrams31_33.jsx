import React from 'react';

/**
 * Diagramas SVG técnicos verificados para el Área 3 (Implementación de Software):
 * Subáreas 3.1 (Ingeniería de Software), 3.2 (Programación, SO y Estructuras de Datos)
 * y 3.3 (Bases de Datos y Algoritmos en Grafos).
 */

export function SdlcScrumTddDiagram() {
  return (
    <svg viewBox="0 0 820 250" className="w-full h-auto" role="img" aria-label="Modelos SDLC Cascada, Espiral, Scrum, TDD y Requerimientos IEEE 830">
      <rect width="820" height="250" rx="14" fill="#FAF7F2" />

      {/* Panel 1: Modelos SDLC */}
      <g transform="translate(12, 12)">
        <rect width="394" height="226" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="374" height="24" rx="6" fill="#0F766E" />
        <text x="197" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="800">SELECCIÓN DE MODELO DE CICLO DE VIDA (SDLC) EN EXAMEN</text>

        <rect x="14" y="42" width="366" height="40" rx="6" fill="#FAF7F2" stroke="#D8D0C0" />
        <text x="22" y="57" fill="#1C1917" fontSize="8.8" fontWeight="800">1. Cascada (Waterfall): Requerimientos → Diseño → Código → Pruebas</text>
        <text x="22" y="72" fill="#57534E" fontSize="8.2">Elegir SOLO cuando los requerimientos son 100% fijos y estables desde el inicio.</text>

        <rect x="14" y="88" width="366" height="44" rx="6" fill="#FFFBEB" stroke="#D97706" />
        <text x="22" y="104" fill="#92400E" fontSize="9" fontWeight="800">2. Modelo en Espiral (Barry Boehm — Orientado a RIESGOS):</text>
        <text x="22" y="120" fill="#78350F" fontSize="8.3" fontWeight="700">4 cuadrantes por vuelta • Evalúa y mitiga riesgos con prototipos en cada ciclo.</text>

        <rect x="14" y="138" width="366" height="40" rx="6" fill="#F0FDFA" stroke="#0F766E" />
        <text x="22" y="153" fill="#134E4A" fontSize="8.8" fontWeight="800">3. Incremental vs. Ágil Scrum (Sprints de 1 a 4 semanas):</text>
        <text x="22" y="168" fill="#57534E" fontSize="8.2">Product Owner (prioriza Backlog) • Scrum Master (facilita) • Developers.</text>

        <rect x="14" y="184" width="366" height="32" rx="6" fill="#EEF2FF" stroke="#4338CA" />
        <text x="197" y="204" textAnchor="middle" fill="#312E81" fontSize="8.6" fontWeight="800">
          Ciclo TDD (XP): 1. RED (Prueba falla) → 2. GREEN (Pasa) → 3. REFACTOR
        </text>
      </g>

      {/* Panel 2: Ingeniería de Requerimientos SRS IEEE 830 */}
      <g transform="translate(416, 12)">
        <rect width="392" height="226" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="372" height="24" rx="6" fill="#B45309" />
        <text x="196" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="800">REQUERIMIENTOS (SRS IEEE 830), MoSCoW Y TRAZABILIDAD</text>

        <rect x="14" y="42" width="364" height="58" rx="6" fill="#F0FDFA" stroke="#0F766E" />
        <text x="22" y="58" fill="#134E4A" fontSize="9" fontWeight="800">Funcionales vs. No Funcionales (Atributos de Calidad):</text>
        <text x="22" y="73" fill="#1C1917" fontSize="8.2">• <tspan fontWeight="800">Funcional:</tspan> Qué hace el sistema (ej. emitir factura PDF, calcular IVA).</text>
        <text x="22" y="88" fill="#0F766E" fontSize="8.2" fontWeight="700">• <tspan fontWeight="800">No Funcional:</tspan> Rendimiento (&lt;200 ms), Disponibilidad (99.99%), Seguridad.</text>

        <rect x="14" y="106" width="364" height="52" rx="6" fill="#FFFBEB" stroke="#F59E0B" />
        <text x="22" y="122" fill="#92400E" fontSize="9" fontWeight="800">Plantilla de Historia de Usuario y Priorización MoSCoW:</text>
        <text x="22" y="137" fill="#1C1917" fontSize="8.2" fontFamily="monospace" fontWeight="700">&quot;Como &lt;rol&gt;, quiero &lt;acción&gt; para &lt;beneficio de negocio&gt;&quot;</text>
        <text x="22" y="150" fill="#57534E" fontSize="8">MoSCoW: Must have (Vital) • Should • Could • Won&apos;t have this time.</text>

        <rect x="14" y="164" width="364" height="50" rx="6" fill="#FAF7F2" stroke="#D8D0C0" />
        <text x="22" y="180" fill="#1C1917" fontSize="8.8" fontWeight="800">• Matriz de Trazabilidad de Requerimientos (RTM):</text>
        <text x="22" y="196" fill="#57534E" fontSize="8.2">Vincula bidireccionalmente: Requerimiento ↔ Módulo de Diseño ↔ Caso de Prueba.</text>
      </g>
    </svg>
  );
}

export function UmlAndArchitectureStylesDiagram() {
  return (
    <svg viewBox="0 0 820 255" className="w-full h-auto" role="img" aria-label="Relaciones UML Clases y Casos de Uso y Estilos Arquitectónicos de Software">
      <rect width="820" height="255" rx="14" fill="#FAF7F2" />

      {/* Panel 1: Relaciones en UML */}
      <g transform="translate(12, 12)">
        <rect width="415" height="231" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="395" height="24" rx="6" fill="#4338CA" />
        <text x="207" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="800">MODELADO UML: RELACIONES DE CLASES, CASOS DE USO Y NODOS</text>

        {/* Composición vs Agregación */}
        <rect x="14" y="42" width="387" height="44" rx="6" fill="#EEF2FF" stroke="#4338CA" />
        <polygon points="28,64 38,57 48,64 38,71" fill="#1C1917" stroke="#1C1917" strokeWidth="1.5" />
        <line x1="48" y1="64" x2="72" y2="64" stroke="#1C1917" strokeWidth="2" />
        <text x="80" y="59" fill="#312E81" fontSize="8.8" fontWeight="800">Composición (Rombo NEGRO lleno — Todo/Parte Fuerte):</text>
        <text x="80" y="74" fill="#57534E" fontSize="8.2">Si se destruye el contenedor, se destruyen sus partes (ej. Factura → Líneas).</text>

        <rect x="14" y="92" width="387" height="44" rx="6" fill="#F0FDFA" stroke="#0F766E" />
        <polygon points="28,114 38,107 48,114 38,121" fill="#FFFFFF" stroke="#0F766E" strokeWidth="2" />
        <line x1="48" y1="114" x2="72" y2="114" stroke="#0F766E" strokeWidth="2" />
        <text x="80" y="109" fill="#134E4A" fontSize="8.8" fontWeight="800">Agregación (Rombo BLANCO vacío — Todo/Parte Débil):</text>
        <text x="80" y="124" fill="#57534E" fontSize="8.2">La parte puede existir independientemente del todo (ej. Curso → Alumno).</text>

        <rect x="14" y="142" width="387" height="42" rx="6" fill="#FFFBEB" stroke="#D97706" />
        <text x="22" y="158" fill="#92400E" fontSize="8.8" fontWeight="800">• Casos de Uso:  &lt;&lt;include&gt;&gt; (Obligatorio siempre)  vs.  &lt;&lt;extend&gt;&gt; (Opcional)</text>
        <text x="22" y="173" fill="#57534E" fontSize="8.2">• Herencia (Generalización): Flecha triangular vacía (relación &quot;es-un&quot;).</text>

        <rect x="14" y="190" width="387" height="31" rx="6" fill="#FAF7F2" stroke="#D8D0C0" />
        <text x="22" y="209" fill="#1C1917" fontSize="8.4" fontWeight="800">• Diagrama de Despliegue: Único que muestra Nodos físicos de Hardware (Servidores).</text>
      </g>

      {/* Panel 2: Estilos Arquitectónicos (Sommerville) */}
      <g transform="translate(437, 12)">
        <rect width="371" height="231" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="351" height="24" rx="6" fill="#292524" />
        <text x="185" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="800">ESTILOS ARQUITECTÓNICOS (SOMMERVILLE)</text>

        {[
          { y: 42, t: '1. Arquitectura en Capas (Layered):', d: 'Presentación (UI) → Lógica de Negocio → Acceso a Datos → BD.', bg: '#F0FDFA', bd: '#0F766E', fg: '#134E4A' },
          { y: 86, t: '2. Microservicios vs. Monolito:', d: 'Servicios autónomos con su propia BD y despliegue independiente.', bg: '#FFFBEB', bd: '#D97706', fg: '#92400E' },
          { y: 130, t: '3. Centrada en Datos / Repositorio:', d: 'Subsistemas comparten una única base de datos o pizarra central.', bg: '#EEF2FF', bd: '#4338CA', fg: '#312E81' },
          { y: 174, t: '4. Tuberías y Filtros (Pipe & Filter):', d: 'Flujo secuencial donde cada Filtro transforma datos (ej. Compilador).', bg: '#FAF7F2', bd: '#78716C', fg: '#1C1917' },
        ].map((st, i) => (
          <g key={i} transform={`translate(14, ${st.y})`}>
            <rect width="343" height="38" rx="6" fill={st.bg} stroke={st.bd} strokeWidth="1.3" />
            <text x="10" y="15" fill={st.fg} fontSize="8.8" fontWeight="800">{st.t}</text>
            <text x="10" y="29" fill="#57534E" fontSize="8.1">{st.d}</text>
          </g>
        ))}
      </g>
    </svg>
  );
}

export function SoftwareTestingMcCabeMaintenanceDiagram() {
  return (
    <svg viewBox="0 0 820 255" className="w-full h-auto" role="img" aria-label="Niveles de prueba, Complejidad Ciclomática de McCabe y los 4 tipos de mantenimiento ISO 14764">
      <rect width="820" height="255" rx="14" fill="#FAF7F2" />

      {/* Panel 1: Niveles de Prueba y McCabe */}
      <g transform="translate(12, 12)">
        <rect width="415" height="231" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="395" height="24" rx="6" fill="#0F766E" />
        <text x="207" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="800">NIVELES DE PRUEBA Y COMPLEJIDAD CICLOMÁTICA DE McCABE</text>

        {/* Escalera de pruebas */}
        <rect x="14" y="42" width="387" height="62" rx="6" fill="#F0FDFA" stroke="#0F766E" />
        <text x="22" y="58" fill="#134E4A" fontSize="8.8" fontWeight="800">1. Unitarias (Aisladas con Mocks/Stubs) → 2. Integración → 3. Sistema → 4. UAT</text>
        <text x="22" y="74" fill="#115E59" fontSize="8.2">• <tspan fontWeight="800">Mocks / Stubs:</tspan> Simulan BD o APIs externas en pruebas unitarias rápidas.</text>
        <text x="22" y="89" fill="#115E59" fontSize="8.2">• <tspan fontWeight="800">Pruebas de Regresión:</tspan> Verificar que un cambio nuevo no rompió lo que ya funcionaba.</text>
        <text x="22" y="101" fill="#57534E" fontSize="7.9">• Equivocación humana = Error → En el código = Defecto (Bug) → Al ejecutar = Fallo.</text>

        {/* Caja Blanca McCabe vs Caja Negra */}
        <rect x="14" y="112" width="387" height="108" rx="7" fill="#FFFBEB" stroke="#D97706" />
        <text x="22" y="129" fill="#92400E" fontSize="9.2" fontWeight="800">Caja Blanca (Estructura interna) — Complejidad Ciclomática V(G):</text>
        <rect x="22" y="137" width="371" height="28" rx="5" fill="#1C1917" />
        <text x="207" y="155" textAnchor="middle" fill="#FDE68A" fontSize="10" fontFamily="monospace" fontWeight="800">
          V(G) = E - N + 2     |     V(G) = P + 1  (P = decisiones if/while/for)
        </text>
        <text x="22" y="182" fill="#1C1917" fontSize="8.3" fontWeight="700">• Indica el número mínimo de caminos independientes a probar (V(G) ≤ 10 es simple).</text>
        <text x="22" y="198" fill="#57534E" fontSize="8.2">• Caja Negra (Sin ver código): Partición de Equivalencia y Análisis de Valores Límite.</text>
        <text x="22" y="212" fill="#4338CA" fontSize="8.2" fontWeight="700">• Refactorización: Limpia código interno SIN cambiar su comportamiento externo.</text>
      </g>

      {/* Panel 2: Los 4 Tipos de Mantenimiento ISO/IEC 14764 */}
      <g transform="translate(437, 12)">
        <rect width="371" height="231" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="351" height="24" rx="6" fill="#B45309" />
        <text x="185" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="800">LOS 4 TIPOS DE MANTENIMIENTO (ISO/IEC 14764)</text>

        {[
          { y: 42, t: '1. CORRECTIVO (Reparar Bugs / Fallos):', d: 'Corregir errores reportados por usuarios en operación.', bg: '#FEE2E2', bd: '#DC2626', fg: '#991B1B' },
          { y: 86, t: '2. ADAPTATIVO (Nuevo Entorno / Leyes):', d: 'Migrar a nuevo SO, motor SQL, nube o reforma fiscal SAT.', bg: '#FFFBEB', bd: '#D97706', fg: '#92400E' },
          { y: 130, t: '3. PERFECTIVO (Nuevas Funciones / Mejora):', d: 'Añadir nuevos módulos para el usuario u optimizar velocidad.', bg: '#F0FDFA', bd: '#0F766E', fg: '#134E4A' },
          { y: 174, t: '4. PREVENTIVO (Evitar Fallos Futuros):', d: 'Refactorizar deuda técnica y actualizar librerías a tiempo.', bg: '#EEF2FF', bd: '#4338CA', fg: '#312E81' },
        ].map((m, i) => (
          <g key={i} transform={`translate(14, ${m.y})`}>
            <rect width="343" height="38" rx="6" fill={m.bg} stroke={m.bd} strokeWidth="1.4" />
            <text x="10" y="15" fill={m.fg} fontSize="8.8" fontWeight="800">{m.t}</text>
            <text x="10" y="29" fill="#44403C" fontSize="8.2">{m.d}</text>
          </g>
        ))}
      </g>
    </svg>
  );
}

export function CompilerMemoryStackHeapDiagram() {
  return (
    <svg viewBox="0 0 820 250" className="w-full h-auto" role="img" aria-label="Fases de un compilador, Linker, memoria Stack vs Heap, Valgrind y ensamblador x86">
      <rect width="820" height="250" rx="14" fill="#FAF7F2" />

      {/* Arriba: Tubería de las 6 fases del Compilador + Linker */}
      <g transform="translate(12, 12)">
        <rect width="796" height="94" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <text x="16" y="21" fill="#1C1917" fontSize="10" fontWeight="800">
          FASES DEL COMPILADOR Y ENLAZADOR (LINKER) — A DIFERENCIA DEL INTÉRPRETE (QUE EJECUTA LÍNEA POR LÍNEA)
        </text>

        {[
          { x: 14, t: '1. Léxico', s: 'Tokens (Scanner)' },
          { x: 126, t: '2. Sintáctico', s: 'BNF → Árbol AST' },
          { x: 238, t: '3. Semántico', s: 'Tipos y Símbolos' },
          { x: 350, t: '4. Cód. Interm.', s: '3 Direcciones' },
          { x: 462, t: '5. Optimización', s: 'Mejora bucles' },
          { x: 574, t: '6. Cód. Objeto', s: 'Archivo .o / .obj' },
          { x: 686, t: '7. LINKER', s: 'Une libs → .exe' },
        ].map((ph, i) => (
          <g key={i}>
            <rect
              x={ph.x}
              y="32"
              width="98"
              height="48"
              rx="6"
              fill={i === 6 ? '#134E4A' : i === 1 ? '#FEF3C7' : '#F0FDFA'}
              stroke={i === 6 ? '#0F766E' : i === 1 ? '#D97706' : '#0F766E'}
              strokeWidth="1.5"
            />
            <text x={ph.x + 49} y="51" textAnchor="middle" fill={i === 6 ? '#FFFFFF' : '#1C1917'} fontSize="8.8" fontWeight="800">{ph.t}</text>
            <text x={ph.x + 49} y="66" textAnchor="middle" fill={i === 6 ? '#99F6E4' : '#57534E'} fontSize="7.8" fontWeight="700">{ph.s}</text>
          </g>
        ))}
      </g>

      {/* Abajo Izquierda: Stack vs Heap y Valgrind */}
      <g transform="translate(12, 114)">
        <rect width="415" height="124" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <text x="14" y="20" fill="#1C1917" fontSize="9.8" fontWeight="800">GESTIÓN DE MEMORIA EN EJECUCIÓN: STACK vs. HEAP Y VALGRIND</text>

        <rect x="14" y="29" width="188" height="83" rx="6" fill="#F0FDFA" stroke="#0F766E" />
        <text x="108" y="45" textAnchor="middle" fill="#134E4A" fontSize="9" fontWeight="800">PILA (STACK — LIFO Automática)</text>
        <text x="22" y="61" fill="#57534E" fontSize="8.1">• Variables locales y parámetros.</text>
        <text x="22" y="75" fill="#57534E" fontSize="8.1">• Se libera sola al salir de la función.</text>
        <text x="22" y="89" fill="#0F766E" fontSize="8.1" fontWeight="700">• Variable static: vive en seg. Datos</text>
        <text x="28" y="101" fill="#0F766E" fontSize="8">conservando su valor entre llamadas.</text>

        <rect x="212" y="29" width="189" height="83" rx="6" fill="#FFFBEB" stroke="#D97706" />
        <text x="306" y="45" textAnchor="middle" fill="#92400E" fontSize="9" fontWeight="800">MONTÍCULO (HEAP — Dinámica)</text>
        <text x="220" y="61" fill="#57534E" fontSize="8.1">• Reserva manual: malloc() / new.</text>
        <text x="220" y="75" fill="#57534E" fontSize="8.1">• Liberación manual: free() / delete.</text>
        <text x="220" y="89" fill="#DC2626" fontSize="8.2" fontWeight="800">• Olvidar free() → Memory Leak</text>
        <text x="220" y="102" fill="#312E81" fontSize="8.2" fontWeight="800">• Se detecta con: VALGRIND</text>
      </g>

      {/* Abajo Derecha: POO y Ensamblador x86 */}
      <g transform="translate(437, 114)">
        <rect width="371" height="124" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="14" y="12" width="343" height="44" rx="6" fill="#EEF2FF" stroke="#4338CA" />
        <text x="22" y="28" fill="#312E81" fontSize="8.8" fontWeight="800">POO: Encapsulamiento (private) • Herencia (es-un) • Polimorfismo</text>
        <text x="22" y="43" fill="#57534E" fontSize="8.1">Sobrecarga (Overloading: misma clase, distinta firma) vs. Sobreescritura (Overriding).</text>

        <rect x="14" y="64" width="343" height="48" rx="6" fill="#1C1917" />
        <text x="22" y="81" fill="#FDE68A" fontSize="8.6" fontFamily="monospace" fontWeight="800">Ensamblador x86: MOV dst, src  |  CMP A, B (resta A - B)</text>
        <text x="22" y="98" fill="#A7F3D0" fontSize="8.5" fontFamily="monospace" fontWeight="700">Si A == B → Bandera Zero ZF = 1 → JZ / JMPZ salta a etiqueta</text>
      </g>
    </svg>
  );
}

export function OsSchedulingDeadlockDataStructuresDiagram() {
  return (
    <svg viewBox="0 0 820 265" className="w-full h-auto" role="img" aria-label="Planificación de CPU, las 4 condiciones de Coffman para Deadlock y Estructuras de Datos">
      <rect width="820" height="265" rx="14" fill="#FAF7F2" />

      {/* Panel 1: Procesos vs Hilos y Planificación de CPU */}
      <g transform="translate(12, 12)">
        <rect width="262" height="241" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="242" height="24" rx="6" fill="#0F766E" />
        <text x="131" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="9.8" fontWeight="800">PROCESOS vs. HILOS Y PLANIFICACIÓN CPU</text>

        <rect x="12" y="42" width="238" height="50" rx="6" fill="#F0FDFA" stroke="#0F766E" />
        <text x="20" y="57" fill="#134E4A" fontSize="8.6" fontWeight="800">• Proceso (PCB aislado) vs. Hilo (Thread):</text>
        <text x="20" y="71" fill="#57534E" fontSize="8">Los hilos comparten Código/Datos/Heap pero cada</text>
        <text x="20" y="83" fill="#0F766E" fontSize="8" fontWeight="700">uno tiene su propio PC y Stack • Comando Linux: ps</text>

        <rect x="12" y="98" width="238" height="40" rx="6" fill="#FAF7F2" stroke="#D8D0C0" />
        <text x="20" y="113" fill="#1C1917" fontSize="8.6" fontWeight="800">1. FCFS / FIFO (No apropiativo):</text>
        <text x="20" y="128" fill="#57534E" fontSize="8.1">Por orden de llegada; sufre &quot;efecto convoy&quot;.</text>

        <rect x="12" y="144" width="238" height="42" rx="6" fill="#FFFBEB" stroke="#D97706" />
        <text x="20" y="159" fill="#92400E" fontSize="8.6" fontWeight="800">2. SJF (Shortest Job First — ÓPTIMO):</text>
        <text x="20" y="174" fill="#78350F" fontSize="8.1" fontWeight="700">Garantiza el MENOR tiempo de espera promedio.</text>

        <rect x="12" y="192" width="238" height="39" rx="6" fill="#EEF2FF" stroke="#4338CA" />
        <text x="20" y="207" fill="#312E81" fontSize="8.6" fontWeight="800">3. Round Robin (Turno Rotatorio):</text>
        <text x="20" y="221" fill="#4338CA" fontSize="8.1" fontWeight="700">Apropiativo con tajada de tiempo fija (Quantum).</text>
      </g>

      {/* Panel 2: Concurrencia y las 4 Condiciones de Coffman (Deadlock) */}
      <g transform="translate(284, 12)">
        <rect width="256" height="241" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="236" height="24" rx="6" fill="#991B1B" />
        <text x="128" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="9.8" fontWeight="800">DEADLOCK: 4 CONDICIONES DE COFFMAN</text>

        {[
          { y: 42, n: '1. Exclusión Mutua', d: 'Recurso no compartible (1 proceso a la vez).' },
          { y: 77, n: '2. Retención y Espera (Hold & Wait)', d: 'Retiene un recurso mientras solicita otro.' },
          { y: 112, n: '3. No Apropiación (No Preemption)', d: 'No se quita por fuerza; solo liberación voluntaria.' },
          { y: 147, n: '4. Espera Circular (P1 → P2 → P1)', d: 'Cadena cerrada de espera entre procesos.' },
        ].map((c, i) => (
          <g key={i} transform={`translate(12, ${c.y})`}>
            <rect width="232" height="30" rx="5" fill="#FEE2E2" stroke="#DC2626" />
            <text x="8" y="13" fill="#991B1B" fontSize="8.4" fontWeight="800">{c.n}</text>
            <text x="8" y="25" fill="#44403C" fontSize="7.8">{c.d}</text>
          </g>
        ))}

        <rect x="12" y="184" width="232" height="47" rx="6" fill="#F0FDFA" stroke="#0F766E" />
        <text x="128" y="200" textAnchor="middle" fill="#134E4A" fontSize="8.4" fontWeight="800">Sincronización de Sección Crítica:</text>
        <text x="128" y="214" textAnchor="middle" fill="#57534E" fontSize="8">Mutex (lock/unlock) • Semáforo (wait P / signal V)</text>
        <text x="128" y="225" textAnchor="middle" fill="#0F766E" fontSize="7.8" fontWeight="700">Algoritmo de Peterson (flag y turn en software)</text>
      </g>

      {/* Panel 3: Estructuras de Datos y Complejidad Big-O */}
      <g transform="translate(550, 12)">
        <rect width="258" height="241" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="238" height="24" rx="6" fill="#4338CA" />
        <text x="129" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="9.8" fontWeight="800">ESTRUCTURAS Y ALGORITMOS BIG-O</text>

        <rect x="12" y="42" width="234" height="44" rx="6" fill="#EEF2FF" stroke="#4338CA" />
        <text x="20" y="57" fill="#312E81" fontSize="8.6" fontWeight="800">• Pila (Stack LIFO) → Usada en DFS y Recursión</text>
        <text x="20" y="73" fill="#0F766E" fontSize="8.6" fontWeight="800">• Cola (Queue FIFO) → Usada en BFS (Anchura)</text>

        <rect x="12" y="92" width="234" height="44" rx="6" fill="#F0FDFA" stroke="#0F766E" />
        <text x="20" y="107" fill="#134E4A" fontSize="8.6" fontWeight="800">• Tabla Hash: Búsqueda promedio O(1)</text>
        <text x="20" y="123" fill="#115E59" fontSize="8.3" fontWeight="700">• Búsqueda Binaria: O(log n) → Exige ORDENADO</text>

        <rect x="12" y="142" width="234" height="42" rx="6" fill="#FFFBEB" stroke="#D97706" />
        <text x="20" y="157" fill="#92400E" fontSize="8.6" fontWeight="800">• Árbol BST (In-Order ordena; peor caso O(n))</text>
        <text x="20" y="172" fill="#78350F" fontSize="8.2" fontWeight="700">• Árbol AVL: Autobalanceado → O(log n) siempre</text>

        <rect x="12" y="190" width="234" height="41" rx="6" fill="#FAF7F2" stroke="#D8D0C0" />
        <text x="20" y="205" fill="#1C1917" fontSize="8.4" fontWeight="800">• MergeSort y HeapSort: O(n log n) GARANTIZADO</text>
        <text x="20" y="220" fill="#57534E" fontSize="8">• QuickSort: O(n log n) prom. / O(n²) peor pivote</text>
      </g>
    </svg>
  );
}

export function RelationalNormalizationSqlDiagram() {
  return (
    <svg viewBox="0 0 820 265" className="w-full h-auto" role="img" aria-label="Formas Normales 1FN a BCNF, WHERE vs HAVING, JOINs e Índices B-Tree vs Bitmap">
      <rect width="820" height="265" rx="14" fill="#FAF7F2" />

      {/* Panel 1: Escalera de Normalización 1FN a BCNF */}
      <g transform="translate(12, 12)">
        <rect width="265" height="241" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="245" height="24" rx="6" fill="#0F766E" />
        <text x="132" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="9.8" fontWeight="800">NORMALIZACIÓN (1FN → 2FN → 3FN → BCNF)</text>

        {[
          { y: 42, t: '1FN — Atomicidad de Atributos', d: 'Prohíbe celdas multivaluadas o listas (Tel1, Tel2).', bg: '#F0FDFA', bd: '#0F766E', fg: '#134E4A' },
          { y: 83, t: '2FN — Sin Dependencias Parciales', d: 'Todo no-llave depende de la PK compuesta COMPLETA.', bg: '#FFFBEB', bd: '#D97706', fg: '#92400E' },
          { y: 124, t: '3FN — Sin Dependencias Transitivas', d: 'Ningún atributo no-llave depende de otro no-llave.', bg: '#EEF2FF', bd: '#4338CA', fg: '#312E81' },
          { y: 165, t: 'BCNF — Determinante es Superllave', d: 'En toda X → Y, X debe ser siempre llave candidata.', bg: '#FCE7F3', bd: '#BE185D', fg: '#831843' },
        ].map((fn, i) => (
          <g key={i} transform={`translate(12, ${fn.y})`}>
            <rect width="241" height="35" rx="5" fill={fn.bg} stroke={fn.bd} strokeWidth="1.3" />
            <text x="8" y="14" fill={fn.fg} fontSize="8.6" fontWeight="800">{fn.t}</text>
            <text x="8" y="27" fill="#44403C" fontSize="7.9">{fn.d}</text>
          </g>
        ))}

        <text x="132" y="216" textAnchor="middle" fill="#1C1917" fontSize="8.2" fontWeight="800">• Relación N:M → Se rompe con Tabla Intermedia</text>
        <text x="132" y="229" textAnchor="middle" fill="#57534E" fontSize="7.9">• Tupla = Fila (Cardinalidad) | Atributo = Columna (Grado)</text>
      </g>

      {/* Panel 2: SQL WHERE vs HAVING y JOINs */}
      <g transform="translate(287, 12)">
        <rect width="265" height="241" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="245" height="24" rx="6" fill="#B45309" />
        <text x="132" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="9.8" fontWeight="800">REGLAS SQL: WHERE vs. HAVING Y JOINs</text>

        <rect x="12" y="42" width="241" height="84" rx="6" fill="#FFFBEB" stroke="#F59E0B" />
        <text x="132" y="58" textAnchor="middle" fill="#92400E" fontSize="9" fontWeight="800">DIFERENCIA CRÍTICA EN EXAMEN:</text>
        <text x="20" y="75" fill="#1C1917" fontSize="8.3">• <tspan fontWeight="800" fill="#0F766E">WHERE:</tspan> Filtra filas individuales ANTES de agrupar.</text>
        <text x="26" y="88" fill="#DC2626" fontSize="8" fontWeight="700">(PROHIBIDO poner COUNT/AVG/SUM en WHERE).</text>
        <text x="20" y="104" fill="#1C1917" fontSize="8.3">• <tspan fontWeight="800" fill="#B45309">HAVING:</tspan> Filtra grupos DESPUÉS de GROUP BY</text>
        <text x="26" y="117" fill="#134E4A" fontSize="8" fontFamily="monospace" fontWeight="700">GROUP BY depto HAVING AVG(sueldo) &gt; 20000</text>

        {/* Diagramas de Venn INNER vs LEFT JOIN */}
        <rect x="12" y="134" width="241" height="96" rx="6" fill="#FAF7F2" stroke="#D8D0C0" />
        <circle cx="52" cy="166" r="18" fill="#E0E7FF" stroke="#4338CA" strokeWidth="1.5" />
        <circle cx="72" cy="166" r="18" fill="#E0E7FF" stroke="#4338CA" strokeWidth="1.5" />
        <path d="M 62 151 A 18 18 0 0 1 62 181 A 18 18 0 0 1 62 151" fill="#4338CA" />
        <text x="104" y="162" fill="#312E81" fontSize="8.5" fontWeight="800">INNER JOIN: Solo coincidencias A ∩ B</text>
        <text x="104" y="177" fill="#0F766E" fontSize="8.5" fontWeight="800">LEFT JOIN: Todo A + coincidencias B</text>
        <text x="20" y="201" fill="#57534E" fontSize="8">• DDL: CREATE, ALTER, DROP | DML: SELECT, INSERT, UPDATE</text>
        <text x="20" y="216" fill="#57534E" fontSize="8">• VISTA (CREATE VIEW): Tabla virtual para seguridad/consulta</text>
      </g>

      {/* Panel 3: ACID, Índices B-Tree vs Bitmap y JSON */}
      <g transform="translate(562, 12)">
        <rect width="246" height="241" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="226" height="24" rx="6" fill="#4338CA" />
        <text x="123" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="9.8" fontWeight="800">ACID, B-TREE vs. BITMAP Y JSON</text>

        <rect x="12" y="42" width="222" height="62" rx="6" fill="#EEF2FF" stroke="#4338CA" />
        <text x="20" y="57" fill="#312E81" fontSize="8.8" fontWeight="800">Transacciones ACID:</text>
        <text x="20" y="71" fill="#1C1917" fontSize="8">• <tspan fontWeight="800">A</tspan>tomicidad: Todo o Nada (COMMIT/ROLLBACK)</text>
        <text x="20" y="84" fill="#1C1917" fontSize="8">• <tspan fontWeight="800">C</tspan>onsistencia • <tspan fontWeight="800">A</tspan>islamiento (Locks/MVCC)</text>
        <text x="20" y="97" fill="#1C1917" fontSize="8">• <tspan fontWeight="800">D</tspan>urabilidad: Persiste tras apagón (Redo Log)</text>

        <rect x="12" y="112" width="222" height="68" rx="6" fill="#F0FDFA" stroke="#0F766E" />
        <text x="20" y="128" fill="#134E4A" fontSize="8.8" fontWeight="800">Índice B-Tree vs. Índice Bitmap:</text>
        <text x="20" y="143" fill="#0F766E" fontSize="8.1" fontWeight="700">• B-Tree O(log n): Alta cardinalidad y rangos</text>
        <text x="26" y="155" fill="#57534E" fontSize="7.8">(RFC, fechas, montos, BETWEEN, &lt;, &gt;).</text>
        <text x="20" y="170" fill="#B45309" fontSize="8.1" fontWeight="700">• Bitmap: Baja cardinalidad (Booleano, Género).</text>

        <rect x="12" y="188" width="222" height="42" rx="6" fill="#FAF7F2" stroke="#D8D0C0" />
        <text x="123" y="205" textAnchor="middle" fill="#1C1917" fontSize="8.5" fontWeight="800">Documentos JSON y XML en Memoria:</text>
        <text x="123" y="220" textAnchor="middle" fill="#4338CA" fontSize="8.3" fontWeight="800">Se representan como un ÁRBOL (Tree)</text>
      </g>
    </svg>
  );
}

export function GraphAlgorithmsDijkstraMstDiagram() {
  return (
    <svg viewBox="0 0 820 250" className="w-full h-auto" role="img" aria-label="Algoritmos en grafos: Dijkstra, Floyd-Warshall y Árbol de Expansión Mínima Kruskal y Prim">
      <rect width="820" height="250" rx="14" fill="#FAF7F2" />

      {/* Panel 1: Dijkstra (Un origen) */}
      <g transform="translate(12, 12)">
        <rect width="260" height="226" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="240" height="24" rx="6" fill="#0F766E" />
        <text x="130" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="800">1. DIJKSTRA (CAMINO MÁS CORTO)</text>

        {/* Grafo origen A -> D */}
        <line x1="50" y1="86" x2="130" y2="56" stroke="#0F766E" strokeWidth="3" />
        <line x1="130" y1="56" x2="210" y2="86" stroke="#0F766E" strokeWidth="3" />
        <line x1="50" y1="86" x2="130" y2="116" stroke="#D6D3D1" strokeWidth="2" />
        <line x1="130" y1="116" x2="210" y2="86" stroke="#D6D3D1" strokeWidth="2" />

        <text x="84" y="63" fill="#0F766E" fontSize="9" fontWeight="800">+2</text>
        <text x="176" y="63" fill="#0F766E" fontSize="9" fontWeight="800">+3</text>
        <text x="84" y="114" fill="#78716C" fontSize="8.5">+9</text>

        <circle cx="50" cy="86" r="14" fill="#134E4A" />
        <text x="50" y="90" textAnchor="middle" fill="#FFFFFF" fontSize="8.5" fontWeight="800">Orig</text>
        <circle cx="130" cy="56" r="13" fill="#CCFBF1" stroke="#0F766E" strokeWidth="2" />
        <text x="130" y="60" textAnchor="middle" fill="#134E4A" fontSize="8.5" fontWeight="800">B</text>
        <circle cx="130" cy="116" r="13" fill="#F5F5F4" stroke="#78716C" strokeWidth="1.5" />
        <text x="130" y="120" textAnchor="middle" fill="#44403C" fontSize="8.5" fontWeight="800">C</text>
        <circle cx="210" cy="86" r="14" fill="#FEF3C7" stroke="#B45309" strokeWidth="2" />
        <text x="210" y="90" textAnchor="middle" fill="#78350F" fontSize="8.5" fontWeight="800">Dest</text>

        <rect x="14" y="140" width="232" height="74" rx="6" fill="#F0FDFA" stroke="#0F766E" />
        <text x="130" y="157" textAnchor="middle" fill="#134E4A" fontSize="9" fontWeight="800">Un Solo Origen → Todos los Nodos</text>
        <text x="130" y="173" textAnchor="middle" fill="#115E59" fontSize="8.3" fontWeight="700">• Estrategia Voraz (Greedy) con Min-Heap</text>
        <text x="130" y="188" textAnchor="middle" fill="#DC2626" fontSize="8.3" fontWeight="800">• Exige pesos NO negativos (peso ≥ 0)</text>
        <text x="130" y="203" textAnchor="middle" fill="#57534E" fontSize="8">Complejidad: O((V + E) log V)</text>
      </g>

      {/* Panel 2: Floyd-Warshall (Todos los pares) */}
      <g transform="translate(282, 12)">
        <rect width="256" height="226" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="236" height="24" rx="6" fill="#4338CA" />
        <text x="128" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="800">2. FLOYD-WARSHALL (TODOS A TODOS)</text>

        <rect x="18" y="46" width="220" height="82" rx="6" fill="#EEF2FF" stroke="#4338CA" />
        <text x="128" y="64" textAnchor="middle" fill="#312E81" fontSize="9" fontWeight="800">Matriz de Distancias Mínimas D[i][j]</text>
        <text x="128" y="82" textAnchor="middle" fill="#4338CA" fontSize="8.6" fontFamily="monospace" fontWeight="700">D[i][j] = min(D[i][j], D[i][k] + D[k][j])</text>
        <text x="128" y="102" textAnchor="middle" fill="#57534E" fontSize="8.2">Calcula la ruta más corta entre TODOS</text>
        <text x="128" y="115" textAnchor="middle" fill="#57534E" fontSize="8.2">los pares de nodos simultáneamente.</text>

        <rect x="14" y="140" width="228" height="74" rx="6" fill="#FAF7F2" stroke="#D8D0C0" />
        <text x="128" y="157" textAnchor="middle" fill="#312E81" fontSize="9" fontWeight="800">Programación Dinámica en Matriz</text>
        <text x="128" y="173" textAnchor="middle" fill="#4338CA" fontSize="8.4" fontWeight="800">• Complejidad: O(V³) (3 bucles anidados)</text>
        <text x="128" y="188" textAnchor="middle" fill="#57534E" fontSize="8.2">• Detectar ciclos en grafo: usar DFS (Pila)</text>
        <text x="128" y="203" textAnchor="middle" fill="#57534E" fontSize="8.2">• Menos saltos sin peso: usar BFS (Cola)</text>
      </g>

      {/* Panel 3: Árbol de Expansión Mínima MST (Kruskal y Prim) */}
      <g transform="translate(548, 12)">
        <rect width="260" height="226" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="240" height="24" rx="6" fill="#B45309" />
        <text x="130" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="800">3. ÁRBOL EXPANSIÓN MÍNIMA (MST)</text>

        <rect x="14" y="44" width="232" height="50" rx="6" fill="#FFFBEB" stroke="#F59E0B" />
        <text x="130" y="61" textAnchor="middle" fill="#92400E" fontSize="9.2" fontWeight="800">Conecta V nodos con (V - 1) aristas</text>
        <text x="130" y="76" textAnchor="middle" fill="#78350F" fontSize="8.3" fontWeight="700">al MENOR costo total y CERO ciclos</text>
        <text x="130" y="88" textAnchor="middle" fill="#57534E" fontSize="7.9">(Ej. Cablear campus con fibra al menor costo)</text>

        <rect x="14" y="102" width="232" height="52" rx="6" fill="#F0FDFA" stroke="#0F766E" />
        <text x="22" y="119" fill="#134E4A" fontSize="9" fontWeight="800">• Algoritmo de KRUSKAL (Por Aristas):</text>
        <text x="22" y="134" fill="#57534E" fontSize="8.2">Ordena todas las aristas de menor a mayor</text>
        <text x="22" y="146" fill="#0F766E" fontSize="8.2" fontWeight="700">peso y las une si no forman ciclo (Union-Find).</text>

        <rect x="14" y="162" width="232" height="52" rx="6" fill="#FAF7F2" stroke="#D8D0C0" />
        <text x="22" y="179" fill="#1C1917" fontSize="9" fontWeight="800">• Algoritmo de PRIM (Por Nodos):</text>
        <text x="22" y="194" fill="#57534E" fontSize="8.2">Crece un árbol continuo desde un nodo inicial</text>
        <text x="22" y="206" fill="#B45309" fontSize="8.2" fontWeight="700">eligiendo la arista vecina más barata.</text>
      </g>
    </svg>
  );
}

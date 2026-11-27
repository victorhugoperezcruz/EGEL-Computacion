import React from 'react';

/**
 * Diagramas SVG visuales de alta retención para el Área 3 (Implementación de Software):
 * Subárea 3.1 (Ingeniería de Software), Subárea 3.2 (Programación, SO, Estructuras de Datos y Big-O)
 * y Subárea 3.3 (Bases de Datos, SQL JOINs, ACID, Índices y Algoritmos en Grafos).
 */

export function SdlcScrumTddDiagram() {
  return (
    <svg viewBox="0 0 820 265" className="w-full h-auto" role="img" aria-label="Diagramas visuales de modelos SDLC Cascada, Espiral, Scrum y ciclo TDD">
      <rect width="820" height="265" rx="14" fill="#FAF7F2" />

      {/* 1. CASCADA (Escalera descendente) */}
      <g transform="translate(12, 12)">
        <rect width="190" height="241" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="170" height="24" rx="6" fill="#44403C" />
        <text x="95" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="800">1. CASCADA (FIJO)</text>

        {[
          { x: 16, y: 46, t: '1. Requisitos', c: '#E7E5E4' },
          { x: 36, y: 78, t: '2. Diseño', c: '#D6D3D1' },
          { x: 56, y: 110, t: '3. Código', c: '#A8A29E' },
          { x: 76, y: 142, t: '4. Pruebas', c: '#78716C' },
        ].map((s, i) => (
          <g key={i}>
            <rect x={s.x} y={s.y} width="96" height="24" rx="5" fill={s.c} stroke="#44403C" strokeWidth="1.3" />
            <text x={s.x + 48} y={s.y + 15} textAnchor="middle" fill={i >= 2 ? '#FFFFFF' : '#1C1917'} fontSize="8.6" fontWeight="800">{s.t}</text>
            {i < 3 && (
              <path d={`M ${s.x + 70} ${s.y + 24} L ${s.x + 70} ${s.y + 32}`} stroke="#44403C" strokeWidth="2" />
            )}
          </g>
        ))}

        <rect x="14" y="182" width="162" height="46" rx="7" fill="#FAF7F2" stroke="#D8D0C0" />
        <text x="95" y="199" textAnchor="middle" fill="#1C1917" fontSize="8.5" fontWeight="900">Secuencial y rígido</text>
        <text x="95" y="216" textAnchor="middle" fill="#57534E" fontSize="8">Solo si requisitos = 100% fijos</text>
      </g>

      {/* 2. ESPIRAL (4 cuadrantes de Riesgos) */}
      <g transform="translate(214, 12)">
        <rect width="190" height="241" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="170" height="24" rx="6" fill="#B45309" />
        <text x="95" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="800">2. ESPIRAL (RIESGOS)</text>

        {/* Ejes 4 cuadrantes */}
        <line x1="95" y1="46" x2="95" y2="168" stroke="#D8D0C0" strokeWidth="1.5" strokeDasharray="3 2" />
        <line x1="22" y1="107" x2="168" y2="107" stroke="#D8D0C0" strokeWidth="1.5" strokeDasharray="3 2" />

        {/* Espiral */}
        <path
          d="M 95 107 C 95 92, 115 92, 115 107 C 115 128, 70 128, 70 107 C 70 76, 134 76, 134 107 C 134 146, 52 146, 52 107 C 52 60, 150 60, 150 107"
          fill="none"
          stroke="#D97706"
          strokeWidth="2.6"
        />
        <polygon points="150,111 145,102 155,102" fill="#D97706" />

        <text x="52" y="56" textAnchor="middle" fill="#78350F" fontSize="7.5" fontWeight="800">1. Objetivos</text>
        <text x="140" y="56" textAnchor="middle" fill="#DC2626" fontSize="7.8" fontWeight="900">2. RIESGOS</text>
        <text x="140" y="164" textAnchor="middle" fill="#0F766E" fontSize="7.5" fontWeight="800">3. Prototipo</text>
        <text x="52" y="164" textAnchor="middle" fill="#4338CA" fontSize="7.5" fontWeight="800">4. Planificar</text>

        <rect x="14" y="182" width="162" height="46" rx="7" fill="#FFFBEB" stroke="#F59E0B" />
        <text x="95" y="199" textAnchor="middle" fill="#92400E" fontSize="8.5" fontWeight="900">Barry Boehm (Evolutivo)</text>
        <text x="95" y="216" textAnchor="middle" fill="#78350F" fontSize="8">Proyectos críticos / alto riesgo</text>
      </g>

      {/* 3. SCRUM (Ciclo Sprint) */}
      <g transform="translate(416, 12)">
        <rect width="190" height="241" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="170" height="24" rx="6" fill="#0F766E" />
        <text x="95" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="800">3. ÁGIL SCRUM</text>

        <rect x="16" y="48" width="54" height="54" rx="6" fill="#CCFBF1" stroke="#0F766E" strokeWidth="1.5" />
        <text x="43" y="68" textAnchor="middle" fill="#134E4A" fontSize="8" fontWeight="900">Backlog</text>
        <text x="43" y="82" textAnchor="middle" fill="#0F766E" fontSize="7.2" fontWeight="700">Prioriza</text>
        <text x="43" y="93" textAnchor="middle" fill="#134E4A" fontSize="7.5" fontWeight="900">PO</text>

        <line x1="70" y1="75" x2="92" y2="75" stroke="#0F766E" strokeWidth="2.2" />
        <polygon points="94,75 87,71 87,79" fill="#0F766E" />

        {/* Círculo Sprint */}
        <circle cx="132" cy="75" r="34" fill="#F0FDFA" stroke="#0F766E" strokeWidth="3" strokeDasharray="16 4" />
        <text x="132" y="71" textAnchor="middle" fill="#134E4A" fontSize="9.2" fontWeight="900">SPRINT</text>
        <text x="132" y="84" textAnchor="middle" fill="#0F766E" fontSize="7.6" fontWeight="800">1–4 sem</text>
        <text x="132" y="96" textAnchor="middle" fill="#57534E" fontSize="7">Daily 15m</text>

        {/* Roles */}
        <rect x="14" y="122" width="162" height="50" rx="7" fill="#FAF7F2" stroke="#D8D0C0" />
        <text x="95" y="137" textAnchor="middle" fill="#134E4A" fontSize="8" fontWeight="900">PO = Dueño del Backlog</text>
        <text x="95" y="150" textAnchor="middle" fill="#0F766E" fontSize="8" fontWeight="800">SM = Quita impedimentos</text>
        <text x="95" y="163" textAnchor="middle" fill="#44403C" fontSize="8">Devs = Construyen Incremento</text>

        <rect x="14" y="182" width="162" height="46" rx="7" fill="#F0FDFA" stroke="#0F766E" />
        <text x="95" y="198" textAnchor="middle" fill="#134E4A" fontSize="8.2" fontWeight="900">MoSCoW: M-S-C-W</text>
        <text x="95" y="214" textAnchor="middle" fill="#57534E" fontSize="7.6">Must • Should • Could • Won&apos;t</text>
      </g>

      {/* 4. CICLO TDD (Red -> Green -> Refactor) */}
      <g transform="translate(618, 12)">
        <rect width="190" height="241" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="170" height="24" rx="6" fill="#4338CA" />
        <text x="95" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="800">4. CICLO TDD (XP)</text>

        {/* Triángulo cíclico RED -> GREEN -> REFACTOR */}
        <circle cx="95" cy="70" r="24" fill="#FEE2E2" stroke="#DC2626" strokeWidth="2.5" />
        <text x="95" y="68" textAnchor="middle" fill="#991B1B" fontSize="8.8" fontWeight="900">1. RED</text>
        <text x="95" y="80" textAnchor="middle" fill="#7F1D1D" fontSize="7">Falla test</text>

        <circle cx="144" cy="144" r="24" fill="#DCFCE7" stroke="#16A34A" strokeWidth="2.5" />
        <text x="144" y="142" textAnchor="middle" fill="#14532D" fontSize="8.4" fontWeight="900">2. GREEN</text>
        <text x="144" y="154" textAnchor="middle" fill="#166534" fontSize="7">Pasa test</text>

        <circle cx="46" cy="144" r="24" fill="#EEF2FF" stroke="#4338CA" strokeWidth="2.5" />
        <text x="46" y="142" textAnchor="middle" fill="#312E81" fontSize="8" fontWeight="900">3. REFACT</text>
        <text x="46" y="154" textAnchor="middle" fill="#4338CA" fontSize="7">Limpia</text>

        {/* Flechas del ciclo */}
        <path d="M 116 84 L 136 118" stroke="#16A34A" strokeWidth="2.2" />
        <polygon points="138,121 130,115 138,112" fill="#16A34A" />
        <path d="M 118 148 L 74 148" stroke="#4338CA" strokeWidth="2.2" />
        <polygon points="71,148 79,144 79,152" fill="#4338CA" />
        <path d="M 55 119 L 75 86" stroke="#DC2626" strokeWidth="2.2" />
        <polygon points="77,83 69,89 77,92" fill="#DC2626" />

        <rect x="14" y="182" width="162" height="46" rx="7" fill="#EEF2FF" stroke="#6366F1" />
        <text x="95" y="198" textAnchor="middle" fill="#312E81" fontSize="8.3" fontWeight="900">RTM: Trazabilidad</text>
        <text x="95" y="214" textAnchor="middle" fill="#57534E" fontSize="7.6">Req ↔ Código ↔ Prueba</text>
      </g>
    </svg>
  );
}

export function UmlAndArchitectureStylesDiagram() {
  return (
    <svg viewBox="0 0 820 265" className="w-full h-auto" role="img" aria-label="Relaciones visuales UML con rombos y flechas, y esquemas de arquitecturas de software">
      <rect width="820" height="265" rx="14" fill="#FAF7F2" />

      {/* IZQUIERDA: SÍMBOLOS VISUALES UML */}
      <g transform="translate(12, 12)">
        <rect width="415" height="241" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="395" height="24" rx="6" fill="#4338CA" />
        <text x="207" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="800">RELACIONES VISUALES UML (SÍMBOLOS DE EXAMEN)</text>

        {/* 1. Composición */}
        <g transform="translate(14, 42)">
          <rect width="387" height="42" rx="7" fill="#EEF2FF" stroke="#4338CA" strokeWidth="1.4" />
          <rect x="10" y="10" width="58" height="22" rx="4" fill="#312E81" />
          <text x="39" y="24" textAnchor="middle" fill="#FFF" fontSize="8" fontWeight="800">Factura</text>
          <polygon points="68,21 78,14 88,21 78,28" fill="#1C1917" stroke="#1C1917" strokeWidth="1.5" />
          <line x1="88" y1="21" x2="112" y2="21" stroke="#1C1917" strokeWidth="2.2" />
          <rect x="112" y="10" width="54" height="22" rx="4" fill="#FFFFFF" stroke="#312E81" strokeWidth="1.5" />
          <text x="139" y="24" textAnchor="middle" fill="#312E81" fontSize="8" fontWeight="800">Línea</text>
          <text x="176" y="18" fill="#312E81" fontSize="8.8" fontWeight="900">Composición (Rombo NEGRO)</text>
          <text x="176" y="32" fill="#57534E" fontSize="7.9">Fuerte: si muere Factura, muere Línea</text>
        </g>

        {/* 2. Agregación */}
        <g transform="translate(14, 90)">
          <rect width="387" height="42" rx="7" fill="#F0FDFA" stroke="#0F766E" strokeWidth="1.4" />
          <rect x="10" y="10" width="58" height="22" rx="4" fill="#0F766E" />
          <text x="39" y="24" textAnchor="middle" fill="#FFF" fontSize="8" fontWeight="800">Curso</text>
          <polygon points="68,21 78,14 88,21 78,28" fill="#FFFFFF" stroke="#0F766E" strokeWidth="2" />
          <line x1="88" y1="21" x2="112" y2="21" stroke="#0F766E" strokeWidth="2.2" />
          <rect x="112" y="10" width="54" height="22" rx="4" fill="#FFFFFF" stroke="#0F766E" strokeWidth="1.5" />
          <text x="139" y="24" textAnchor="middle" fill="#134E4A" fontSize="8" fontWeight="800">Alumno</text>
          <text x="176" y="18" fill="#134E4A" fontSize="8.8" fontWeight="900">Agregación (Rombo BLANCO)</text>
          <text x="176" y="32" fill="#57534E" fontSize="7.9">Débil: Alumno vive sin el Curso</text>
        </g>

        {/* 3. Herencia */}
        <g transform="translate(14, 138)">
          <rect width="387" height="42" rx="7" fill="#FFFBEB" stroke="#D97706" strokeWidth="1.4" />
          <rect x="10" y="10" width="58" height="22" rx="4" fill="#FFFFFF" stroke="#B45309" strokeWidth="1.5" />
          <text x="39" y="24" textAnchor="middle" fill="#78350F" fontSize="8" fontWeight="800">Perro</text>
          <line x1="68" y1="21" x2="98" y2="21" stroke="#B45309" strokeWidth="2.2" />
          <polygon points="112,21 98,14 98,28" fill="#FFFFFF" stroke="#B45309" strokeWidth="2" />
          <rect x="112" y="10" width="54" height="22" rx="4" fill="#B45309" />
          <text x="139" y="24" textAnchor="middle" fill="#FFF" fontSize="8" fontWeight="800">Animal</text>
          <text x="176" y="18" fill="#92400E" fontSize="8.8" fontWeight="900">Herencia (Triángulo hueco)</text>
          <text x="176" y="32" fill="#57534E" fontSize="7.9">Relación “es-un” (Generalización)</text>
        </g>

        {/* 4. Casos de uso + Despliegue */}
        <g transform="translate(14, 186)">
          <rect width="206" height="44" rx="7" fill="#FAF7F2" stroke="#D8D0C0" />
          <text x="103" y="18" textAnchor="middle" fill="#0F766E" fontSize="8.4" fontWeight="900">&lt;&lt;include&gt;&gt; = Obligatorio ✓</text>
          <text x="103" y="34" textAnchor="middle" fill="#B45309" fontSize="8.4" fontWeight="900">&lt;&lt;extend&gt;&gt; = Opcional (?)</text>

          <rect x="214" width="173" height="44" rx="7" fill="#134E4A" />
          <text x="300" y="18" textAnchor="middle" fill="#FDE68A" fontSize="8.4" fontWeight="900">🧊 Despliegue (Nodos)</text>
          <text x="300" y="34" textAnchor="middle" fill="#CCFBF1" fontSize="7.8">Muestra Hardware físico</text>
        </g>
      </g>

      {/* DERECHA: 4 MINI-DIAGRAMAS DE ARQUITECTURA */}
      <g transform="translate(437, 12)">
        <rect width="371" height="241" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="351" height="24" rx="6" fill="#292524" />
        <text x="185" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="800">4 ESTILOS ARQUITECTÓNICOS VISUALES</text>

        {/* 1. Capas */}
        <g transform="translate(14, 42)">
          <rect width="166" height="90" rx="8" fill="#F0FDFA" stroke="#0F766E" strokeWidth="1.4" />
          <text x="83" y="16" textAnchor="middle" fill="#134E4A" fontSize="8.8" fontWeight="900">1. En Capas (Layered)</text>
          <rect x="24" y="23" width="118" height="16" rx="4" fill="#0F766E" />
          <text x="83" y="34" textAnchor="middle" fill="#FFF" fontSize="7.8" fontWeight="800">UI / Presentación</text>
          <rect x="24" y="43" width="118" height="16" rx="4" fill="#14B8A6" />
          <text x="83" y="54" textAnchor="middle" fill="#FFF" fontSize="7.8" fontWeight="800">Lógica de Negocio</text>
          <rect x="24" y="63" width="118" height="16" rx="4" fill="#134E4A" />
          <text x="83" y="74" textAnchor="middle" fill="#99F6E4" fontSize="7.8" fontWeight="800">Acceso a Datos / BD</text>
        </g>

        {/* 2. Microservicios */}
        <g transform="translate(190, 42)">
          <rect width="166" height="90" rx="8" fill="#FFFBEB" stroke="#D97706" strokeWidth="1.4" />
          <text x="83" y="16" textAnchor="middle" fill="#92400E" fontSize="8.8" fontWeight="900">2. Microservicios</text>
          {[20, 68, 116].map((x, i) => (
            <g key={i}>
              <rect x={x} y="26" width="34" height="24" rx="5" fill="#D97706" />
              <text x={x + 17} y="41" textAnchor="middle" fill="#FFF" fontSize="7.5" fontWeight="800">MS{i + 1}</text>
              <ellipse cx={x + 17} cy="64" rx="13" ry="6" fill="#FEF3C7" stroke="#B45309" strokeWidth="1.4" />
              <text x={x + 17} y="66.5" textAnchor="middle" fill="#78350F" fontSize="6.6" fontWeight="900">BD</text>
            </g>
          ))}
          <text x="83" y="83" textAnchor="middle" fill="#78350F" fontSize="7.6" fontWeight="800">Autónomos + BD propia</text>
        </g>

        {/* 3. Repositorio */}
        <g transform="translate(14, 140)">
          <rect width="166" height="90" rx="8" fill="#EEF2FF" stroke="#4338CA" strokeWidth="1.4" />
          <text x="83" y="16" textAnchor="middle" fill="#312E81" fontSize="8.8" fontWeight="900">3. Repositorio Central</text>
          <ellipse cx="83" cy="52" rx="28" ry="13" fill="#4338CA" />
          <text x="83" y="55" textAnchor="middle" fill="#FFF" fontSize="8" fontWeight="900">BD Central</text>
          <circle cx="28" cy="36" r="10" fill="#FFFFFF" stroke="#4338CA" strokeWidth="1.5" />
          <text x="28" y="39" textAnchor="middle" fill="#312E81" fontSize="7" fontWeight="800">M1</text>
          <circle cx="138" cy="36" r="10" fill="#FFFFFF" stroke="#4338CA" strokeWidth="1.5" />
          <text x="138" y="39" textAnchor="middle" fill="#312E81" fontSize="7" fontWeight="800">M2</text>
          <line x1="38" y1="40" x2="58" y2="48" stroke="#4338CA" strokeWidth="1.8" />
          <line x1="128" y1="40" x2="108" y2="48" stroke="#4338CA" strokeWidth="1.8" />
          <text x="83" y="82" textAnchor="middle" fill="#4338CA" fontSize="7.6" fontWeight="800">Todos comparten 1 BD</text>
        </g>

        {/* 4. Pipe & Filter */}
        <g transform="translate(190, 140)">
          <rect width="166" height="90" rx="8" fill="#FAF7F2" stroke="#78716C" strokeWidth="1.4" />
          <text x="83" y="16" textAnchor="middle" fill="#1C1917" fontSize="8.8" fontWeight="900">4. Pipe &amp; Filter</text>
          <rect x="12" y="38" width="38" height="24" rx="5" fill="#44403C" />
          <text x="31" y="53" textAnchor="middle" fill="#FFF" fontSize="7.5" fontWeight="800">F1</text>
          <line x1="50" y1="50" x2="64" y2="50" stroke="#0F766E" strokeWidth="2.5" />
          <rect x="64" y="38" width="38" height="24" rx="5" fill="#0F766E" />
          <text x="83" y="53" textAnchor="middle" fill="#FFF" fontSize="7.5" fontWeight="800">F2</text>
          <line x1="102" y1="50" x2="116" y2="50" stroke="#0F766E" strokeWidth="2.5" />
          <rect x="116" y="38" width="38" height="24" rx="5" fill="#44403C" />
          <text x="135" y="53" textAnchor="middle" fill="#FFF" fontSize="7.5" fontWeight="800">F3</text>
          <text x="83" y="82" textAnchor="middle" fill="#57534E" fontSize="7.6" fontWeight="800">Flujo secuencial (Compilador)</text>
        </g>
      </g>
    </svg>
  );
}

export function SoftwareTestingMcCabeMaintenanceDiagram() {
  return (
    <svg viewBox="0 0 820 265" className="w-full h-auto" role="img" aria-label="Pirámide de pruebas, grafo de Complejidad Ciclomática de McCabe y 4 cuadrantes de mantenimiento">
      <rect width="820" height="265" rx="14" fill="#FAF7F2" />

      {/* Panel 1: Pirámide de Pruebas */}
      <g transform="translate(12, 12)">
        <rect width="236" height="241" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="216" height="24" rx="6" fill="#0F766E" />
        <text x="118" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="800">PIRÁMIDE DE PRUEBAS</text>

        {/* Escalones pirámide */}
        <polygon points="118,46 82,84 154,84" fill="#FEF3C7" stroke="#D97706" strokeWidth="1.6" />
        <text x="118" y="75" textAnchor="middle" fill="#92400E" fontSize="8.2" fontWeight="900">4. UAT</text>

        <polygon points="82,88 154,88 176,120 60,120" fill="#E0E7FF" stroke="#4338CA" strokeWidth="1.6" />
        <text x="118" y="108" textAnchor="middle" fill="#312E81" fontSize="8.5" fontWeight="900">3. Sistema</text>

        <polygon points="60,124 176,124 198,156 38,156" fill="#CCFBF1" stroke="#0F766E" strokeWidth="1.6" />
        <text x="118" y="144" textAnchor="middle" fill="#134E4A" fontSize="8.5" fontWeight="900">2. Integración</text>

        <polygon points="38,160 198,160 218,194 18,194" fill="#0F766E" />
        <text x="118" y="181" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="900">1. Unitarias (Mocks)</text>

        <rect x="14" y="202" width="208" height="28" rx="6" fill="#FAF7F2" stroke="#D8D0C0" />
        <text x="118" y="219" textAnchor="middle" fill="#1C1917" fontSize="7.9" fontWeight="800">Regresión: re-probar tras cambio</text>
      </g>

      {/* Panel 2: Grafo visual de McCabe V(G) */}
      <g transform="translate(258, 12)">
        <rect width="268" height="241" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="248" height="24" rx="6" fill="#4338CA" />
        <text x="134" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="800">CAJA BLANCA: GRAFO McCABE</text>

        {/* Grafo de flujo real con 1 decisión (if) -> V(G) = 2 */}
        <circle cx="134" cy="56" r="13" fill="#4338CA" />
        <text x="134" y="60" textAnchor="middle" fill="#FFF" fontSize="8" fontWeight="900">if?</text>

        <line x1="122" y1="64" x2="72" y2="96" stroke="#0F766E" strokeWidth="2.4" />
        <line x1="146" y1="64" x2="196" y2="96" stroke="#D97706" strokeWidth="2.4" />
        <text x="82" y="77" fill="#0F766E" fontSize="7.8" fontWeight="900">Sí</text>
        <text x="182" y="77" fill="#D97706" fontSize="7.8" fontWeight="900">No</text>

        <circle cx="68" cy="104" r="11" fill="#CCFBF1" stroke="#0F766E" strokeWidth="2" />
        <text x="68" y="107" textAnchor="middle" fill="#134E4A" fontSize="8" fontWeight="800">A</text>
        <circle cx="200" cy="104" r="11" fill="#FEF3C7" stroke="#D97706" strokeWidth="2" />
        <text x="200" y="107" textAnchor="middle" fill="#92400E" fontSize="8" fontWeight="800">B</text>

        <line x1="76" y1="113" x2="124" y2="140" stroke="#0F766E" strokeWidth="2.4" />
        <line x1="192" y1="113" x2="144" y2="140" stroke="#D97706" strokeWidth="2.4" />

        <circle cx="134" cy="144" r="12" fill="#292524" />
        <text x="134" y="147" textAnchor="middle" fill="#FFF" fontSize="7.5" fontWeight="800">Fin</text>

        {/* Fórmula */}
        <rect x="14" y="164" width="240" height="32" rx="6" fill="#1C1917" />
        <text x="134" y="184" textAnchor="middle" fill="#FDE68A" fontSize="9.5" fontFamily="monospace" fontWeight="900">V(G) = E - N + 2 = P + 1</text>

        <text x="134" y="211" textAnchor="middle" fill="#312E81" fontSize="8.1" fontWeight="800">Ej: 1 if (P=1) → V(G) = 2 caminos</text>
        <text x="134" y="226" textAnchor="middle" fill="#57534E" fontSize="7.8">Caja Negra: Equivalencia y Valores Límite</text>
      </g>

      {/* Panel 3: 4 Cuadrantes de Mantenimiento */}
      <g transform="translate(536, 12)">
        <rect width="272" height="241" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="252" height="24" rx="6" fill="#B45309" />
        <text x="136" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="800">4 MANTENIMIENTOS “C-A-P-P”</text>

        {[
          { x: 14, y: 44, ic: '🔧', t: 'CORRECTIVO', d: 'Arregla bugs', bg: '#FEE2E2', bd: '#DC2626', fg: '#991B1B' },
          { x: 140, y: 44, ic: '🔄', t: 'ADAPTATIVO', d: 'Nuevo SO / Ley', bg: '#FFFBEB', bd: '#D97706', fg: '#92400E' },
          { x: 14, y: 140, ic: '🚀', t: 'PERFECTIVO', d: 'Nueva función', bg: '#F0FDFA', bd: '#0F766E', fg: '#134E4A' },
          { x: 140, y: 140, ic: '🛡️', t: 'PREVENTIVO', d: 'Refactorizar', bg: '#EEF2FF', bd: '#4338CA', fg: '#312E81' },
        ].map((m, i) => (
          <g key={i} transform={`translate(${m.x}, ${m.y})`}>
            <rect width="118" height="86" rx="9" fill={m.bg} stroke={m.bd} strokeWidth="1.6" />
            <text x="59" y="30" textAnchor="middle" fontSize="18">{m.ic}</text>
            <text x="59" y="53" textAnchor="middle" fill={m.fg} fontSize="8.8" fontWeight="900">{m.t}</text>
            <text x="59" y="70" textAnchor="middle" fill="#44403C" fontSize="8.2" fontWeight="700">{m.d}</text>
          </g>
        ))}
      </g>
    </svg>
  );
}

export function CompilerMemoryStackHeapDiagram() {
  return (
    <svg viewBox="0 0 820 265" className="w-full h-auto" role="img" aria-label="Tubería visual del compilador, mapa de memoria RAM Stack vs Heap con Valgrind y ensamblador x86">
      <rect width="820" height="265" rx="14" fill="#FAF7F2" />

      {/* ARRIBA: Tubería visual del Compilador */}
      <g transform="translate(12, 12)">
        <rect width="796" height="92" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <text x="16" y="21" fill="#1C1917" fontSize="10" fontWeight="800">
          TUBERÍA DEL COMPILADOR (TODO ANTES DE EJECUTAR) vs. INTÉRPRETE (LÍNEA POR LÍNEA)
        </text>

        {[
          { x: 14, t: '1. Léxico', s: 'Tokens', bg: '#F0FDFA', bd: '#0F766E' },
          { x: 126, t: '2. Sintáctico', s: 'BNF → AST 🌳', bg: '#FEF3C7', bd: '#D97706' },
          { x: 238, t: '3. Semántico', s: 'Tipos', bg: '#F0FDFA', bd: '#0F766E' },
          { x: 350, t: '4. Intermedio', s: '3 Dir.', bg: '#F0FDFA', bd: '#0F766E' },
          { x: 462, t: '5. Optim.', s: 'Bucles', bg: '#F0FDFA', bd: '#0F766E' },
          { x: 574, t: '6. Objeto', s: 'archivo .o', bg: '#EEF2FF', bd: '#4338CA' },
          { x: 686, t: '7. LINKER', s: 'Libs → .exe', bg: '#134E4A', bd: '#0F766E', dark: true },
        ].map((ph, i) => (
          <g key={i}>
            <rect x={ph.x} y="32" width="96" height="46" rx="7" fill={ph.bg} stroke={ph.bd} strokeWidth="1.6" />
            <text x={ph.x + 48} y="51" textAnchor="middle" fill={ph.dark ? '#FFFFFF' : '#1C1917'} fontSize="8.8" fontWeight="900">{ph.t}</text>
            <text x={ph.x + 48} y="66" textAnchor="middle" fill={ph.dark ? '#99F6E4' : '#57534E'} fontSize="7.8" fontWeight="700">{ph.s}</text>
            {i < 6 && (
              <>
                <line x1={ph.x + 96} y1="55" x2={ph.x + 109} y2="55" stroke="#44403C" strokeWidth="2" />
                <polygon points={`${ph.x + 111},55 ${ph.x + 105},51 ${ph.x + 105},59`} fill="#44403C" />
              </>
            )}
          </g>
        ))}
      </g>

      {/* ABAJO IZQUIERDA: Mapa Visual de Memoria RAM (Stack ↓ vs Heap ↑) */}
      <g transform="translate(12, 114)">
        <rect width="415" height="139" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <text x="14" y="21" fill="#1C1917" fontSize="9.8" fontWeight="800">MAPA DE MEMORIA RAM: STACK ↓ vs. HEAP ↑</text>

        {/* Barra vertical de RAM */}
        <rect x="16" y="32" width="122" height="32" rx="5" fill="#CCFBF1" stroke="#0F766E" strokeWidth="1.6" />
        <text x="77" y="46" textAnchor="middle" fill="#134E4A" fontSize="8.6" fontWeight="900">STACK ↓ (LIFO)</text>
        <text x="77" y="58" textAnchor="middle" fill="#0F766E" fontSize="7.2" fontWeight="700">Locales (automático)</text>

        <rect x="16" y="68" width="122" height="32" rx="5" fill="#FEF3C7" stroke="#D97706" strokeWidth="1.6" />
        <text x="77" y="82" textAnchor="middle" fill="#92400E" fontSize="8.6" fontWeight="900">HEAP ↑ (Dinámico)</text>
        <text x="77" y="94" textAnchor="middle" fill="#B45309" fontSize="7.2" fontWeight="700">malloc() / new</text>

        <rect x="16" y="104" width="122" height="24" rx="5" fill="#E0E7FF" stroke="#4338CA" strokeWidth="1.4" />
        <text x="77" y="119" textAnchor="middle" fill="#312E81" fontSize="7.8" fontWeight="800">Datos (static) + Código</text>

        {/* Notas clave al lado */}
        <rect x="150" y="32" width="252" height="44" rx="7" fill="#FEE2E2" stroke="#DC2626" />
        <text x="276" y="49" textAnchor="middle" fill="#991B1B" fontSize="8.8" fontWeight="900">⚠️ malloc() sin free() = Memory Leak</text>
        <text x="276" y="65" textAnchor="middle" fill="#7F1D1D" fontSize="8.2" fontWeight="800">🔍 Se detecta con: VALGRIND</text>

        <rect x="150" y="84" width="252" height="44" rx="7" fill="#F0FDFA" stroke="#0F766E" />
        <text x="276" y="101" textAnchor="middle" fill="#134E4A" fontSize="8.5" fontWeight="900">static = conserva su valor entre llamadas</text>
        <text x="276" y="117" textAnchor="middle" fill="#57534E" fontSize="8">Stack se libera solo al retornar la función</text>
      </g>

      {/* ABAJO DERECHA: POO y Ensamblador x86 */}
      <g transform="translate(437, 114)">
        <rect width="371" height="139" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="14" y="14" width="343" height="52" rx="7" fill="#EEF2FF" stroke="#4338CA" strokeWidth="1.4" />
        <text x="185" y="31" textAnchor="middle" fill="#312E81" fontSize="9" fontWeight="900">POO: 4 Pilares + Polimorfismo</text>
        <text x="185" y="46" textAnchor="middle" fill="#4338CA" fontSize="8.1" fontWeight="800">Overloading (misma clase, distinta firma)</text>
        <text x="185" y="59" textAnchor="middle" fill="#57534E" fontSize="8">Overriding (subclase redefine método del padre)</text>

        <rect x="14" y="74" width="343" height="54" rx="7" fill="#1C1917" />
        <text x="24" y="92" fill="#FDE68A" fontSize="8.6" fontFamily="monospace" fontWeight="900">x86: MOV dst, src  |  CMP A, B (resta A-B)</text>
        <text x="24" y="112" fill="#A7F3D0" fontSize="8.6" fontFamily="monospace" fontWeight="800">Si A == B → ZF = 1 → JZ / JMPZ salta ✓</text>
      </g>
    </svg>
  );
}

export function OsSchedulingDeadlockDataStructuresDiagram() {
  return (
    <svg viewBox="0 0 820 265" className="w-full h-auto" role="img" aria-label="Diagramas Gantt de planificación CPU FCFS, SJF, Round Robin y ciclo visual Deadlock de Coffman">
      <rect width="820" height="265" rx="14" fill="#FAF7F2" />

      {/* IZQUIERDA: Diagramas Gantt reales de CPU Scheduling */}
      <g transform="translate(12, 12)">
        <rect width="415" height="241" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="395" height="24" rx="6" fill="#0F766E" />
        <text x="207" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="800">PLANIFICACIÓN DE CPU (DIAGRAMAS DE GANTT)</text>

        {/* 1. FCFS */}
        <text x="16" y="52" fill="#1C1917" fontSize="8.8" fontWeight="900">1. FCFS / FIFO (Orden de llegada — Efecto Convoy 🐢):</text>
        <rect x="16" y="58" width="230" height="24" rx="4" fill="#FEE2E2" stroke="#DC2626" strokeWidth="1.4" />
        <text x="131" y="73" textAnchor="middle" fill="#991B1B" fontSize="8.5" fontWeight="900">P1 (largo: 20 ms)</text>
        <rect x="248" y="58" width="54" height="24" rx="4" fill="#CCFBF1" stroke="#0F766E" />
        <text x="275" y="73" textAnchor="middle" fill="#134E4A" fontSize="8" fontWeight="800">P2</text>
        <rect x="304" y="58" width="54" height="24" rx="4" fill="#E0E7FF" stroke="#4338CA" />
        <text x="331" y="73" textAnchor="middle" fill="#312E81" fontSize="8" fontWeight="800">P3</text>

        {/* 2. SJF */}
        <text x="16" y="102" fill="#92400E" fontSize="8.8" fontWeight="900">2. SJF (Shortest Job First — 🏆 MENOR espera promedio):</text>
        <rect x="16" y="108" width="54" height="24" rx="4" fill="#CCFBF1" stroke="#0F766E" strokeWidth="1.5" />
        <text x="43" y="123" textAnchor="middle" fill="#134E4A" fontSize="8.2" fontWeight="900">P2 ✓</text>
        <rect x="72" y="108" width="54" height="24" rx="4" fill="#E0E7FF" stroke="#4338CA" strokeWidth="1.5" />
        <text x="99" y="123" textAnchor="middle" fill="#312E81" fontSize="8.2" fontWeight="900">P3 ✓</text>
        <rect x="128" y="108" width="230" height="24" rx="4" fill="#FEF3C7" stroke="#D97706" strokeWidth="1.4" />
        <text x="243" y="123" textAnchor="middle" fill="#92400E" fontSize="8.5" fontWeight="800">P1 (al final)</text>

        {/* 3. Round Robin */}
        <text x="16" y="152" fill="#312E81" fontSize="8.8" fontWeight="900">3. Round Robin (Apropiativo — Tajadas iguales QUANTUM):</text>
        {[
          { x: 16, t: 'P1', bg: '#FEE2E2', fg: '#991B1B' },
          { x: 74, t: 'P2', bg: '#CCFBF1', fg: '#134E4A' },
          { x: 132, t: 'P3', bg: '#E0E7FF', fg: '#312E81' },
          { x: 190, t: 'P1', bg: '#FEE2E2', fg: '#991B1B' },
          { x: 248, t: 'P1', bg: '#FEE2E2', fg: '#991B1B' },
          { x: 306, t: 'P1', bg: '#FEE2E2', fg: '#991B1B' },
        ].map((q, i) => (
          <g key={i}>
            <rect x={q.x} y="158" width="54" height="24" rx="4" fill={q.bg} stroke="#4338CA" strokeWidth="1.2" />
            <text x={q.x + 27} y="173" textAnchor="middle" fill={q.fg} fontSize="8.2" fontWeight="900">{q.t}</text>
          </g>
        ))}

        {/* Proceso vs Hilo */}
        <rect x="14" y="192" width="387" height="38" rx="7" fill="#F0FDFA" stroke="#0F766E" />
        <text x="207" y="208" textAnchor="middle" fill="#134E4A" fontSize="8.4" fontWeight="900">Hilos (Threads): comparten Heap/Código, cada uno tiene su Stack y PC</text>
        <text x="207" y="222" textAnchor="middle" fill="#57534E" fontSize="8">Comando Linux para ver procesos/PIDs: ps aux</text>
      </g>

      {/* DERECHA: Grafo Visual de Deadlock (Espera Circular + 4 Coffman) */}
      <g transform="translate(437, 12)">
        <rect width="371" height="241" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="351" height="24" rx="6" fill="#991B1B" />
        <text x="185" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="800">DEADLOCK: CICLO VISUAL Y 4 COFFMAN</text>

        {/* Grafo de Asignación de Recursos (Ciclo P1 <-> R1/R2 <-> P2) */}
        <circle cx="96" cy="96" r="20" fill="#FEE2E2" stroke="#DC2626" strokeWidth="2.2" />
        <text x="96" y="100" textAnchor="middle" fill="#991B1B" fontSize="10" fontWeight="900">P1</text>

        <circle cx="274" cy="96" r="20" fill="#FEE2E2" stroke="#DC2626" strokeWidth="2.2" />
        <text x="274" y="100" textAnchor="middle" fill="#991B1B" fontSize="10" fontWeight="900">P2</text>

        <rect x="163" y="44" width="44" height="26" rx="5" fill="#1C1917" />
        <text x="185" y="60" textAnchor="middle" fill="#FDE68A" fontSize="8.8" fontWeight="900">🔒 R1</text>

        <rect x="163" y="122" width="44" height="26" rx="5" fill="#1C1917" />
        <text x="185" y="138" textAnchor="middle" fill="#FDE68A" fontSize="8.8" fontWeight="900">🔒 R2</text>

        {/* Flechas del ciclo */}
        <line x1="163" y1="57" x2="114" y2="82" stroke="#0F766E" strokeWidth="2.2" />
        <text x="122" y="64" fill="#0F766E" fontSize="7.4" fontWeight="800">Tiene</text>
        <line x1="114" y1="108" x2="161" y2="132" stroke="#DC2626" strokeWidth="2.2" strokeDasharray="4 2" />
        <text x="120" y="132" fill="#DC2626" fontSize="7.4" fontWeight="900">Espera</text>

        <line x1="207" y1="135" x2="256" y2="110" stroke="#0F766E" strokeWidth="2.2" />
        <text x="248" y="133" fill="#0F766E" fontSize="7.4" fontWeight="800">Tiene</text>
        <line x1="256" y1="82" x2="209" y2="57" stroke="#DC2626" strokeWidth="2.2" strokeDasharray="4 2" />
        <text x="248" y="64" fill="#DC2626" fontSize="7.4" fontWeight="900">Espera</text>

        {/* 4 Chips Coffman */}
        <rect x="14" y="158" width="168" height="24" rx="5" fill="#FEE2E2" stroke="#DC2626" />
        <text x="98" y="173" textAnchor="middle" fill="#991B1B" fontSize="8" fontWeight="900">1. Exclusión Mutua</text>

        <rect x="188" y="158" width="168" height="24" rx="5" fill="#FEE2E2" stroke="#DC2626" />
        <text x="272" y="173" textAnchor="middle" fill="#991B1B" fontSize="8" fontWeight="900">2. Retención y Espera</text>

        <rect x="14" y="188" width="168" height="24" rx="5" fill="#FEE2E2" stroke="#DC2626" />
        <text x="98" y="203" textAnchor="middle" fill="#991B1B" fontSize="8" fontWeight="900">3. No Apropiación</text>

        <rect x="188" y="188" width="168" height="24" rx="5" fill="#FEE2E2" stroke="#DC2626" />
        <text x="272" y="203" textAnchor="middle" fill="#991B1B" fontSize="8" fontWeight="900">4. Espera Circular ↻</text>

        <text x="185" y="230" textAnchor="middle" fill="#0F766E" fontSize="8" fontWeight="900">Sincronización: Mutex (lock/unlock) • Semáforo (P/V) • Peterson</text>
      </g>
    </svg>
  );
}

export function DataStructuresVisualDiagram() {
  return (
    <svg viewBox="0 0 820 265" className="w-full h-auto" role="img" aria-label="Diagramas visuales de Pila LIFO, Cola FIFO, Lista Enlazada y Montículo Binario Heap">
      <rect width="820" height="265" rx="14" fill="#FAF7F2" />

      {/* 1. PILA (STACK - LIFO) */}
      <g transform="translate(12, 12)">
        <rect width="190" height="241" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="170" height="24" rx="6" fill="#4338CA" />
        <text x="95" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="800">1. PILA (STACK • LIFO)</text>

        {/* Flechas Push / Pop arriba */}
        <text x="48" y="54" textAnchor="middle" fill="#0F766E" fontSize="8" fontWeight="900">push ↓</text>
        <text x="142" y="54" textAnchor="middle" fill="#DC2626" fontSize="8" fontWeight="900">↑ pop</text>

        {/* Cubeta abierta arriba */}
        <path d="M 46 64 L 46 168 L 144 168 L 144 64" fill="none" stroke="#312E81" strokeWidth="3" />
        <rect x="54" y="72" width="82" height="26" rx="5" fill="#4338CA" />
        <text x="95" y="89" textAnchor="middle" fill="#FFFFFF" fontSize="9.5" fontWeight="900">30 (TOPE)</text>
        <rect x="54" y="104" width="82" height="26" rx="5" fill="#A5B4FC" />
        <text x="95" y="121" textAnchor="middle" fill="#312E81" fontSize="9.5" fontWeight="800">20</text>
        <rect x="54" y="136" width="82" height="26" rx="5" fill="#E0E7FF" />
        <text x="95" y="153" textAnchor="middle" fill="#312E81" fontSize="9.5" fontWeight="800">10 (Base)</text>

        <rect x="14" y="180" width="162" height="48" rx="7" fill="#EEF2FF" stroke="#6366F1" />
        <text x="95" y="197" textAnchor="middle" fill="#312E81" fontSize="8.5" fontWeight="900">Último entra, 1° sale</text>
        <text x="95" y="214" textAnchor="middle" fill="#4338CA" fontSize="8.2" fontWeight="800">Uso: DFS • Recursión • Undo</text>
      </g>

      {/* 2. COLA (QUEUE - FIFO) */}
      <g transform="translate(214, 12)">
        <rect width="190" height="241" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="170" height="24" rx="6" fill="#0F766E" />
        <text x="95" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="800">2. COLA (QUEUE • FIFO)</text>

        <text x="40" y="76" textAnchor="middle" fill="#0F766E" fontSize="8" fontWeight="900">entra →</text>
        <text x="152" y="76" textAnchor="middle" fill="#DC2626" fontSize="8" fontWeight="900">→ sale</text>

        {/* Tubo horizontal */}
        <line x1="20" y1="88" x2="170" y2="88" stroke="#134E4A" strokeWidth="3" />
        <line x1="20" y1="132" x2="170" y2="132" stroke="#134E4A" strokeWidth="3" />

        <rect x="24" y="94" width="42" height="32" rx="5" fill="#CCFBF1" stroke="#0F766E" />
        <text x="45" y="114" textAnchor="middle" fill="#134E4A" fontSize="9.5" fontWeight="800">C</text>
        <rect x="74" y="94" width="42" height="32" rx="5" fill="#5EEAD4" stroke="#0F766E" />
        <text x="95" y="114" textAnchor="middle" fill="#134E4A" fontSize="9.5" fontWeight="800">B</text>
        <rect x="124" y="94" width="42" height="32" rx="5" fill="#0F766E" />
        <text x="145" y="114" textAnchor="middle" fill="#FFFFFF" fontSize="9.5" fontWeight="900">A (1°)</text>

        <text x="95" y="156" textAnchor="middle" fill="#0F766E" fontSize="8.2" fontWeight="800">enqueue / dequeue = O(1)</text>

        <rect x="14" y="180" width="162" height="48" rx="7" fill="#F0FDFA" stroke="#0F766E" />
        <text x="95" y="197" textAnchor="middle" fill="#134E4A" fontSize="8.5" fontWeight="900">Primero entra, 1° sale</text>
        <text x="95" y="214" textAnchor="middle" fill="#0F766E" fontSize="8.2" fontWeight="800">Uso: BFS • Buffers • CPU</text>
      </g>

      {/* 3. LISTA ENLAZADA */}
      <g transform="translate(416, 12)">
        <rect width="190" height="241" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="170" height="24" rx="6" fill="#B45309" />
        <text x="95" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="800">3. LISTA ENLAZADA</text>

        {/* Nodos con punteros */}
        {[
          { x: 16, y: 66, v: '10' },
          { x: 16, y: 108, v: '20' },
          { x: 16, y: 150, v: '30' },
        ].map((n, i) => (
          <g key={i} transform={`translate(${n.x}, ${n.y})`}>
            <rect width="62" height="26" rx="5" fill="#FEF3C7" stroke="#B45309" strokeWidth="1.6" />
            <text x="31" y="17" textAnchor="middle" fill="#78350F" fontSize="9" fontWeight="900">{n.v}</text>
            <rect x="62" width="28" height="26" rx="4" fill="#B45309" />
            <text x="76" y="17" textAnchor="middle" fill="#FFF" fontSize="8.5" fontWeight="900">{i < 2 ? '•' : '∅'}</text>
            {i < 2 && (
              <path d="M 90 13 L 116 13 L 116 32 L 45 32 L 45 41" fill="none" stroke="#B45309" strokeWidth="1.8" />
            )}
          </g>
        ))}

        <text x="145" y="82" textAnchor="middle" fill="#92400E" fontSize="7.8" fontWeight="900">Head</text>
        <text x="145" y="166" textAnchor="middle" fill="#DC2626" fontSize="7.8" fontWeight="900">NULL</text>

        <rect x="14" y="186" width="162" height="42" rx="7" fill="#FFFBEB" stroke="#F59E0B" />
        <text x="95" y="203" textAnchor="middle" fill="#92400E" fontSize="8.2" fontWeight="900">Insertar con ptr: O(1)</text>
        <text x="95" y="219" textAnchor="middle" fill="#78350F" fontSize="8">Acceso por índice: O(n)</text>
      </g>

      {/* 4. BINARY HEAP (Cola de Prioridad) */}
      <g transform="translate(618, 12)">
        <rect width="190" height="241" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="170" height="24" rx="6" fill="#BE185D" />
        <text x="95" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="800">4. MIN-HEAP (PRIORIDAD)</text>

        {/* Árbol Heap */}
        <line x1="95" y1="68" x2="54" y2="112" stroke="#BE185D" strokeWidth="2.2" />
        <line x1="95" y1="68" x2="136" y2="112" stroke="#BE185D" strokeWidth="2.2" />
        <line x1="54" y1="112" x2="34" y2="152" stroke="#BE185D" strokeWidth="2" />
        <line x1="54" y1="112" x2="74" y2="152" stroke="#BE185D" strokeWidth="2" />

        <circle cx="95" cy="66" r="16" fill="#BE185D" />
        <text x="95" y="70" textAnchor="middle" fill="#FFF" fontSize="10" fontWeight="900">5</text>
        <text x="144" y="64" fill="#BE185D" fontSize="7.5" fontWeight="900">← Mín O(1)</text>

        <circle cx="54" cy="112" r="14" fill="#FCE7F3" stroke="#BE185D" strokeWidth="1.8" />
        <text x="54" y="116" textAnchor="middle" fill="#831843" fontSize="9" fontWeight="900">12</text>
        <circle cx="136" cy="112" r="14" fill="#FCE7F3" stroke="#BE185D" strokeWidth="1.8" />
        <text x="136" y="116" textAnchor="middle" fill="#831843" fontSize="9" fontWeight="900">18</text>

        <circle cx="34" cy="152" r="12" fill="#FFF1F2" stroke="#BE185D" strokeWidth="1.5" />
        <text x="34" y="156" textAnchor="middle" fill="#831843" fontSize="8.2" fontWeight="800">25</text>
        <circle cx="74" cy="152" r="12" fill="#FFF1F2" stroke="#BE185D" strokeWidth="1.5" />
        <text x="74" y="156" textAnchor="middle" fill="#831843" fontSize="8.2" fontWeight="800">30</text>

        <rect x="14" y="180" width="162" height="48" rx="7" fill="#FCE7F3" stroke="#BE185D" />
        <text x="95" y="197" textAnchor="middle" fill="#831843" fontSize="8.4" fontWeight="900">Extraer raíz: O(log n)</text>
        <text x="95" y="214" textAnchor="middle" fill="#9D174D" fontSize="8" fontWeight="700">Uso: Dijkstra y HeapSort</text>
      </g>
    </svg>
  );
}

export function TreesHashBigODiagram() {
  return (
    <svg viewBox="0 0 820 265" className="w-full h-auto" role="img" aria-label="Tabla Hash visual O(1), comparación Árbol BST degenerado vs AVL balanceado y gráfica de curvas Big-O">
      <rect width="820" height="265" rx="14" fill="#FAF7F2" />

      {/* Panel 1: Tabla Hash O(1) */}
      <g transform="translate(12, 12)">
        <rect width="246" height="241" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="226" height="24" rx="6" fill="#0F766E" />
        <text x="123" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="800">TABLA HASH → O(1) PROM.</text>

        <rect x="14" y="52" width="54" height="26" rx="5" fill="#FEF3C7" stroke="#D97706" strokeWidth="1.5" />
        <text x="41" y="69" textAnchor="middle" fill="#92400E" fontSize="8.5" fontWeight="900">&quot;Ana&quot;</text>

        <line x1="68" y1="65" x2="90" y2="65" stroke="#0F766E" strokeWidth="2" />
        <rect x="92" y="48" width="46" height="34" rx="6" fill="#134E4A" />
        <text x="115" y="68" textAnchor="middle" fill="#99F6E4" fontSize="8.5" fontFamily="monospace" fontWeight="900">h(k)</text>
        <line x1="138" y1="65" x2="156" y2="96" stroke="#0F766E" strokeWidth="2.2" />

        {/* Cubetas array */}
        {[0, 1, 2, 3].map((idx) => (
          <g key={idx} transform={`translate(158, ${46 + idx * 28})`}>
            <rect width="22" height="23" rx="3" fill="#F5F5F4" stroke="#78716C" />
            <text x="11" y="15" textAnchor="middle" fill="#44403C" fontSize="8" fontFamily="monospace" fontWeight="800">{idx}</text>
            <rect x="24" width="50" height="23" rx="3" fill={idx === 2 ? '#CCFBF1' : '#FFFFFF'} stroke={idx === 2 ? '#0F766E' : '#D8D0C0'} strokeWidth="1.4" />
            <text x="49" y="15" textAnchor="middle" fill={idx === 2 ? '#134E4A' : '#A8A29E'} fontSize="8" fontWeight="900">{idx === 2 ? 'Ana ✓' : '—'}</text>
          </g>
        ))}

        <rect x="14" y="172" width="218" height="58" rx="7" fill="#F0FDFA" stroke="#0F766E" />
        <text x="123" y="189" textAnchor="middle" fill="#134E4A" fontSize="8.6" fontWeight="900">Acceso directo por clave = O(1)</text>
        <text x="123" y="205" textAnchor="middle" fill="#57534E" fontSize="7.9">Colisiones: Encadenamiento / Sondeo</text>
        <text x="123" y="220" textAnchor="middle" fill="#4338CA" fontSize="8" fontWeight="800">Binaria: O(log n) → Exige ORDENADO</text>
      </g>

      {/* Panel 2: BST Degenerado O(n) vs AVL Balanceado O(log n) */}
      <g transform="translate(268, 12)">
        <rect width="268" height="241" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="248" height="24" rx="6" fill="#B45309" />
        <text x="134" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="800">BST DEGENERADO vs. AVL BALANCEADO</text>

        {/* Izq: BST Degenerado */}
        <rect x="12" y="42" width="112" height="128" rx="7" fill="#FEF2F2" stroke="#DC2626" strokeWidth="1.3" />
        <text x="68" y="57" textAnchor="middle" fill="#991B1B" fontSize="8.3" fontWeight="900">BST Malo: O(n) ✗</text>
        <line x1="42" y1="74" x2="66" y2="100" stroke="#DC2626" strokeWidth="2" />
        <line x1="66" y1="100" x2="90" y2="126" stroke="#DC2626" strokeWidth="2" />
        <line x1="90" y1="126" x2="108" y2="152" stroke="#DC2626" strokeWidth="2" />
        {[{ x: 42, y: 74, v: '1' }, { x: 66, y: 100, v: '2' }, { x: 90, y: 126, v: '3' }, { x: 108, y: 152, v: '4' }].map((n) => (
          <g key={n.v}>
            <circle cx={n.x} cy={n.y} r="10" fill="#FEE2E2" stroke="#DC2626" strokeWidth="1.6" />
            <text x={n.x} y={n.y + 3} textAnchor="middle" fill="#991B1B" fontSize="8" fontWeight="900">{n.v}</text>
          </g>
        ))}

        {/* Der: AVL Balanceado */}
        <rect x="132" y="42" width="124" height="128" rx="7" fill="#F0FDFA" stroke="#0F766E" strokeWidth="1.5" />
        <text x="194" y="57" textAnchor="middle" fill="#134E4A" fontSize="8.3" fontWeight="900">AVL: O(log n) ✓</text>
        <line x1="194" y1="84" x2="162" y2="122" stroke="#0F766E" strokeWidth="2.2" />
        <line x1="194" y1="84" x2="226" y2="122" stroke="#0F766E" strokeWidth="2.2" />
        <circle cx="194" cy="84" r="13" fill="#0F766E" />
        <text x="194" y="88" textAnchor="middle" fill="#FFF" fontSize="9" fontWeight="900">2</text>
        <circle cx="162" cy="122" r="12" fill="#CCFBF1" stroke="#0F766E" strokeWidth="1.8" />
        <text x="162" y="126" textAnchor="middle" fill="#134E4A" fontSize="8.8" fontWeight="900">1</text>
        <circle cx="226" cy="122" r="12" fill="#CCFBF1" stroke="#0F766E" strokeWidth="1.8" />
        <text x="226" y="126" textAnchor="middle" fill="#134E4A" fontSize="8.8" fontWeight="900">3</text>
        <text x="194" y="156" textAnchor="middle" fill="#0F766E" fontSize="7.6" fontWeight="800">Rotaciones automáticas</text>

        <rect x="12" y="178" width="244" height="52" rx="7" fill="#FFFBEB" stroke="#F59E0B" />
        <text x="134" y="196" textAnchor="middle" fill="#92400E" fontSize="8.6" fontWeight="900">Regla BST: Izq &lt; Raíz &lt; Der</text>
        <text x="134" y="213" textAnchor="middle" fill="#78350F" fontSize="8.2" fontWeight="800">Recorrido In-Order → sale ORDENADO</text>
      </g>

      {/* Panel 3: Gráfica real de Curvas Big-O */}
      <g transform="translate(546, 12)">
        <rect width="262" height="241" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="242" height="24" rx="6" fill="#4338CA" />
        <text x="131" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="800">CURVAS DE COMPLEJIDAD BIG-O</text>

        {/* Ejes X/Y */}
        <line x1="28" y1="46" x2="28" y2="168" stroke="#44403C" strokeWidth="2" />
        <line x1="28" y1="168" x2="236" y2="168" stroke="#44403C" strokeWidth="2" />
        <text x="18" y="54" fill="#57534E" fontSize="7.5" fontWeight="800">T</text>
        <text x="232" y="180" fill="#57534E" fontSize="7.5" fontWeight="800">n</text>

        {/* O(n²) Roja empinada */}
        <path d="M 30 166 Q 75 155, 112 48" fill="none" stroke="#DC2626" strokeWidth="2.5" />
        <text x="116" y="56" fill="#DC2626" fontSize="8.2" fontWeight="900">O(n²) Burbuja</text>

        {/* O(n log n) Naranja */}
        <path d="M 30 166 Q 110 135, 195 68" fill="none" stroke="#D97706" strokeWidth="2.5" />
        <text x="172" y="88" fill="#B45309" fontSize="8" fontWeight="900">O(n log n)</text>

        {/* O(n) Azul */}
        <line x1="30" y1="166" x2="210" y2="112" stroke="#4338CA" strokeWidth="2.2" />
        <text x="213" y="115" fill="#4338CA" fontSize="8" fontWeight="900">O(n)</text>

        {/* O(log n) Teal */}
        <path d="M 30 166 Q 90 144, 210 140" fill="none" stroke="#0F766E" strokeWidth="2.4" />
        <text x="190" y="136" fill="#0F766E" fontSize="8" fontWeight="900">O(log n)</text>

        {/* O(1) Verde plana */}
        <line x1="30" y1="160" x2="210" y2="160" stroke="#16A34A" strokeWidth="2.4" />
        <text x="213" y="162" fill="#16A34A" fontSize="8" fontWeight="900">O(1)</text>

        <rect x="14" y="184" width="234" height="46" rx="7" fill="#EEF2FF" stroke="#6366F1" />
        <text x="131" y="201" textAnchor="middle" fill="#312E81" fontSize="8.3" fontWeight="900">MergeSort / HeapSort = O(n log n) SIEMPRE</text>
        <text x="131" y="218" textAnchor="middle" fill="#DC2626" fontSize="7.9" fontWeight="800">QuickSort: prom O(n log n) / peor O(n²)</text>
      </g>
    </svg>
  );
}

export function RelationalNormalizationSqlDiagram() {
  return (
    <svg viewBox="0 0 820 265" className="w-full h-auto" role="img" aria-label="Transformación visual paso a paso de Normalización 1FN, 2FN, 3FN y resolución de relación N:M">
      <rect width="820" height="265" rx="14" fill="#FAF7F2" />

      {/* 1FN Visual */}
      <g transform="translate(12, 12)">
        <rect width="260" height="241" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="240" height="24" rx="6" fill="#0F766E" />
        <text x="130" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="800">1FN: ATOMICIDAD (1 VALOR)</text>

        {/* Antes Malo */}
        <rect x="14" y="42" width="232" height="54" rx="7" fill="#FEE2E2" stroke="#DC2626" />
        <text x="130" y="57" textAnchor="middle" fill="#991B1B" fontSize="8.4" fontWeight="900">✗ MAL (Celda con lista):</text>
        <rect x="24" y="65" width="76" height="22" rx="3" fill="#FFF" stroke="#DC2626" />
        <text x="62" y="79" textAnchor="middle" fill="#1C1917" fontSize="8" fontWeight="800">Ana</text>
        <rect x="102" y="65" width="134" height="22" rx="3" fill="#FCA5A5" stroke="#DC2626" />
        <text x="169" y="79" textAnchor="middle" fill="#7F1D1D" fontSize="8" fontWeight="900">551-11, 552-22 ✗</text>

        <text x="130" y="111" textAnchor="middle" fill="#0F766E" fontSize="12" fontWeight="900">↓</text>

        {/* Después Bueno */}
        <rect x="14" y="118" width="232" height="72" rx="7" fill="#F0FDFA" stroke="#0F766E" strokeWidth="1.5" />
        <text x="130" y="133" textAnchor="middle" fill="#134E4A" fontSize="8.4" fontWeight="900">✓ BIEN (1 dato por celda):</text>
        <rect x="24" y="140" width="76" height="19" rx="3" fill="#FFF" stroke="#0F766E" />
        <text x="62" y="153" textAnchor="middle" fill="#1C1917" fontSize="7.8" fontWeight="800">Ana</text>
        <rect x="102" y="140" width="134" height="19" rx="3" fill="#CCFBF1" stroke="#0F766E" />
        <text x="169" y="153" textAnchor="middle" fill="#134E4A" fontSize="7.8" fontWeight="900">551-11 ✓</text>
        <rect x="24" y="163" width="76" height="19" rx="3" fill="#FFF" stroke="#0F766E" />
        <text x="62" y="176" textAnchor="middle" fill="#1C1917" fontSize="7.8" fontWeight="800">Ana</text>
        <rect x="102" y="163" width="134" height="19" rx="3" fill="#CCFBF1" stroke="#0F766E" />
        <text x="169" y="176" textAnchor="middle" fill="#134E4A" fontSize="7.8" fontWeight="900">552-22 ✓</text>

        <text x="130" y="210" textAnchor="middle" fill="#1C1917" fontSize="8" fontWeight="800">Tupla = Fila (Cardinalidad)</text>
        <text x="130" y="226" textAnchor="middle" fill="#57534E" fontSize="8">Atributo = Columna (Grado)</text>
      </g>

      {/* 2FN Visual */}
      <g transform="translate(282, 12)">
        <rect width="256" height="241" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="236" height="24" rx="6" fill="#B45309" />
        <text x="128" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="800">2FN: SIN DEP. PARCIALES</text>

        {/* Esquema PK compuesta */}
        <rect x="14" y="44" width="228" height="72" rx="7" fill="#FFFBEB" stroke="#F59E0B" />
        <text x="128" y="60" textAnchor="middle" fill="#92400E" fontSize="8.3" fontWeight="900">PK Compuesta (Solo 1 mitad apunta ✗):</text>
        <rect x="22" y="68" width="62" height="22" rx="4" fill="#B45309" />
        <text x="53" y="82" textAnchor="middle" fill="#FFF" fontSize="7.5" fontWeight="900">🔑 Pedido</text>
        <rect x="88" y="68" width="60" height="22" rx="4" fill="#B45309" />
        <text x="118" y="82" textAnchor="middle" fill="#FFF" fontSize="7.5" fontWeight="900">🔑 Prod</text>
        <path d="M 118 90 Q 158 112, 198 90" fill="none" stroke="#DC2626" strokeWidth="2.2" />
        <rect x="164" y="68" width="70" height="22" rx="4" fill="#FEE2E2" stroke="#DC2626" />
        <text x="199" y="82" textAnchor="middle" fill="#991B1B" fontSize="7.3" fontWeight="900">Nom_Prod</text>

        <text x="128" y="132" textAnchor="middle" fill="#0F766E" fontSize="8.4" fontWeight="900">✓ Solución: Separar tabla Productos</text>

        {/* Relación N:M con Tabla Intermedia */}
        <rect x="14" y="144" width="228" height="86" rx="7" fill="#FAF7F2" stroke="#D8D0C0" />
        <text x="128" y="160" textAnchor="middle" fill="#1C1917" fontSize="8.5" fontWeight="900">Romper Relación N:M (Tabla Puente):</text>
        <rect x="20" y="172" width="54" height="28" rx="5" fill="#E0E7FF" stroke="#4338CA" />
        <text x="47" y="189" textAnchor="middle" fill="#312E81" fontSize="7.6" fontWeight="900">Alumno</text>
        <line x1="74" y1="186" x2="90" y2="186" stroke="#4338CA" strokeWidth="2" />
        <rect x="90" y="168" width="76" height="36" rx="5" fill="#0F766E" />
        <text x="128" y="184" textAnchor="middle" fill="#FFF" fontSize="7.6" fontWeight="900">Inscripción</text>
        <text x="128" y="196" textAnchor="middle" fill="#99F6E4" fontSize="6.8">FK1 + FK2</text>
        <line x1="166" y1="186" x2="182" y2="186" stroke="#4338CA" strokeWidth="2" />
        <rect x="182" y="172" width="54" height="28" rx="5" fill="#E0E7FF" stroke="#4338CA" />
        <text x="209" y="189" textAnchor="middle" fill="#312E81" fontSize="7.6" fontWeight="900">Curso</text>
        <text x="128" y="220" textAnchor="middle" fill="#57534E" fontSize="7.6">PK: NOT NULL + UNIQUE | FK: Integridad</text>
      </g>

      {/* 3FN y BCNF Visual */}
      <g transform="translate(548, 12)">
        <rect width="260" height="241" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="240" height="24" rx="6" fill="#4338CA" />
        <text x="130" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="800">3FN: SIN TRANSITIVAS (A→B→C)</text>

        {/* Cadena transitiva */}
        <rect x="14" y="44" width="232" height="72" rx="7" fill="#EEF2FF" stroke="#4338CA" />
        <text x="130" y="60" textAnchor="middle" fill="#312E81" fontSize="8.3" fontWeight="900">✗ Dependencia Transitiva (No-PK → No-PK):</text>
        <rect x="20" y="72" width="58" height="24" rx="4" fill="#4338CA" />
        <text x="49" y="87" textAnchor="middle" fill="#FFF" fontSize="7.5" fontWeight="900">🔑 Emp</text>
        <text x="86" y="87" textAnchor="middle" fill="#4338CA" fontSize="10" fontWeight="900">→</text>
        <rect x="94" y="72" width="60" height="24" rx="4" fill="#FEF3C7" stroke="#D97706" />
        <text x="124" y="87" textAnchor="middle" fill="#92400E" fontSize="7.5" fontWeight="900">IdDepto</text>
        <text x="162" y="87" textAnchor="middle" fill="#DC2626" fontSize="10" fontWeight="900">→</text>
        <rect x="170" y="72" width="68" height="24" rx="4" fill="#FEE2E2" stroke="#DC2626" />
        <text x="204" y="87" textAnchor="middle" fill="#991B1B" fontSize="7.2" fontWeight="900">NomDepto</text>

        <text x="130" y="132" textAnchor="middle" fill="#0F766E" fontSize="8.4" fontWeight="900">✓ Separar tabla Deptos(IdDepto, NomDepto)</text>

        {/* BCNF */}
        <rect x="14" y="146" width="232" height="84" rx="7" fill="#FCE7F3" stroke="#BE185D" strokeWidth="1.4" />
        <text x="130" y="165" textAnchor="middle" fill="#831843" fontSize="9.2" fontWeight="900">BCNF (Boyce-Codd / 3.5FN)</text>
        <rect x="44" y="175" width="172" height="22" rx="5" fill="#BE185D" />
        <text x="130" y="189" textAnchor="middle" fill="#FFFFFF" fontSize="8.6" fontFamily="monospace" fontWeight="900">Si X → Y, X = Superllave</text>
        <text x="130" y="216" textAnchor="middle" fill="#9D174D" fontSize="7.8" fontWeight="700">Versión más estricta de 3FN</text>
      </g>
    </svg>
  );
}

export function SqlJoinsWhereHavingDiagram() {
  return (
    <svg viewBox="0 0 820 265" className="w-full h-auto" role="img" aria-label="Flujo visual de ejecución SQL WHERE vs HAVING y 4 diagramas de Venn para SQL JOINs">
      <rect width="820" height="265" rx="14" fill="#FAF7F2" />

      {/* ARRIBA: Pipeline Visual WHERE vs HAVING */}
      <g transform="translate(12, 12)">
        <rect width="796" height="100" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <text x="16" y="21" fill="#1C1917" fontSize="10" fontWeight="800">
          FLUJO REAL DE UNA CONSULTA SQL: WHERE (FILTRA FILAS) vs. HAVING (FILTRA GRUPOS COUNT/AVG)
        </text>

        {[
          { x: 16, t: '1. FROM/JOIN', s: 'Une tablas', bg: '#F5F5F4', bd: '#78716C', fg: '#1C1917' },
          { x: 172, t: '2. WHERE', s: 'Filtra FILAS ✗AVG', bg: '#DCFCE7', bd: '#16A34A', fg: '#14532D' },
          { x: 328, t: '3. GROUP BY', s: 'Arma cubetas', bg: '#E0E7FF', bd: '#4338CA', fg: '#312E81' },
          { x: 484, t: '4. HAVING', s: 'Filtra GRUPOS ✓AVG', bg: '#FEF3C7', bd: '#D97706', fg: '#92400E' },
          { x: 640, t: '5. SELECT/ORD', s: 'Muestra + Ordena', bg: '#134E4A', bd: '#0F766E', fg: '#FFFFFF', dark: true },
        ].map((st, i) => (
          <g key={i}>
            <rect x={st.x} y="34" width="136" height="50" rx="8" fill={st.bg} stroke={st.bd} strokeWidth="1.8" />
            <text x={st.x + 68} y="54" textAnchor="middle" fill={st.fg} fontSize="9.2" fontWeight="900">{st.t}</text>
            <text x={st.x + 68} y="71" textAnchor="middle" fill={st.dark ? '#99F6E4' : '#44403C'} fontSize="8" fontWeight="800">{st.s}</text>
            {i < 4 && (
              <>
                <line x1={st.x + 136} y1="59" x2={st.x + 152} y2="59" stroke="#44403C" strokeWidth="2.2" />
                <polygon points={`${st.x + 155},59 ${st.x + 148},55 ${st.x + 148},63`} fill="#44403C" />
              </>
            )}
          </g>
        ))}
      </g>

      {/* ABAJO: 4 DIAGRAMAS DE VENN DE JOINS + SUBLENGUAJES */}
      <g transform="translate(12, 122)">
        <rect width="796" height="131" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <text x="16" y="20" fill="#1C1917" fontSize="10" fontWeight="800">
          DIAGRAMAS DE VENN DE SQL JOINs (A ⋈ B) • DDL (CREATE/DROP) • DML (SELECT/INSERT/UPDATE/DELETE)
        </text>

        {/* 1. INNER JOIN */}
        <g transform="translate(16, 30)">
          <rect width="182" height="88" rx="8" fill="#EEF2FF" stroke="#4338CA" strokeWidth="1.4" />
          <circle cx="75" cy="40" r="22" fill="#FFFFFF" stroke="#4338CA" strokeWidth="1.8" />
          <circle cx="105" cy="40" r="22" fill="#FFFFFF" stroke="#4338CA" strokeWidth="1.8" />
          <path d="M 90 23 A 22 22 0 0 1 90 57 A 22 22 0 0 1 90 23" fill="#4338CA" />
          <text x="91" y="77" textAnchor="middle" fill="#312E81" fontSize="8.8" fontWeight="900">INNER: Solo A ∩ B</text>
        </g>

        {/* 2. LEFT JOIN */}
        <g transform="translate(210, 30)">
          <rect width="182" height="88" rx="8" fill="#F0FDFA" stroke="#0F766E" strokeWidth="1.4" />
          <circle cx="75" cy="40" r="22" fill="#0F766E" stroke="#134E4A" strokeWidth="1.8" />
          <circle cx="105" cy="40" r="22" fill="#FFFFFF" fillOpacity="0.45" stroke="#134E4A" strokeWidth="1.8" />
          <text x="91" y="77" textAnchor="middle" fill="#134E4A" fontSize="8.8" fontWeight="900">LEFT: Todo A + B (NULL)</text>
        </g>

        {/* 3. RIGHT JOIN */}
        <g transform="translate(404, 30)">
          <rect width="182" height="88" rx="8" fill="#FFFBEB" stroke="#D97706" strokeWidth="1.4" />
          <circle cx="75" cy="40" r="22" fill="#FFFFFF" stroke="#B45309" strokeWidth="1.8" />
          <circle cx="105" cy="40" r="22" fill="#D97706" fillOpacity="0.85" stroke="#B45309" strokeWidth="1.8" />
          <text x="91" y="77" textAnchor="middle" fill="#92400E" fontSize="8.8" fontWeight="900">RIGHT: Todo B + A (NULL)</text>
        </g>

        {/* 4. FULL OUTER JOIN + VIEW */}
        <g transform="translate(598, 30)">
          <rect width="182" height="88" rx="8" fill="#FCE7F3" stroke="#BE185D" strokeWidth="1.4" />
          <circle cx="75" cy="40" r="22" fill="#BE185D" fillOpacity="0.7" stroke="#831843" strokeWidth="1.8" />
          <circle cx="105" cy="40" r="22" fill="#BE185D" fillOpacity="0.7" stroke="#831843" strokeWidth="1.8" />
          <text x="91" y="77" textAnchor="middle" fill="#831843" fontSize="8.6" fontWeight="900">FULL: Todo A ∪ B</text>
        </g>
      </g>
    </svg>
  );
}

export function AcidIndexesJsonTreeDiagram() {
  return (
    <svg viewBox="0 0 820 265" className="w-full h-auto" role="img" aria-label="Flujo visual de transacción ACID, índices B-Tree vs Bitmap y árbol DOM de JSON/XML">
      <rect width="820" height="265" rx="14" fill="#FAF7F2" />

      {/* Panel 1: Transacción ACID Visual */}
      <g transform="translate(12, 12)">
        <rect width="268" height="241" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="248" height="24" rx="6" fill="#4338CA" />
        <text x="134" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="800">TRANSACCIÓN ACID (TODO O NADA)</text>

        <rect x="16" y="44" width="96" height="36" rx="6" fill="#FEE2E2" stroke="#DC2626" />
        <text x="64" y="60" textAnchor="middle" fill="#991B1B" fontSize="8.5" fontWeight="900">Cuenta A</text>
        <text x="64" y="73" textAnchor="middle" fill="#7F1D1D" fontSize="8" fontWeight="800">− $500</text>

        <line x1="114" y1="62" x2="152" y2="62" stroke="#4338CA" strokeWidth="2.5" />
        <polygon points="154,62 146,58 146,66" fill="#4338CA" />

        <rect x="156" y="44" width="96" height="36" rx="6" fill="#DCFCE7" stroke="#16A34A" />
        <text x="204" y="60" textAnchor="middle" fill="#14532D" fontSize="8.5" fontWeight="900">Cuenta B</text>
        <text x="204" y="73" textAnchor="middle" fill="#166534" fontSize="8" fontWeight="800">+ $500</text>

        <rect x="16" y="88" width="114" height="24" rx="5" fill="#16A34A" />
        <text x="73" y="103" textAnchor="middle" fill="#FFF" fontSize="8.3" fontWeight="900">✓ Éxito: COMMIT</text>
        <rect x="138" y="88" width="114" height="24" rx="5" fill="#DC2626" />
        <text x="195" y="103" textAnchor="middle" fill="#FFF" fontSize="8.3" fontWeight="900">✗ Fallo: ROLLBACK</text>

        {/* 4 pills ACID */}
        {[
          { y: 120, l: 'A', t: 'Atomicidad: Todo o Nada' },
          { y: 149, l: 'C', t: 'Consistencia: Reglas PK/FK' },
          { y: 178, l: 'I', t: 'Aislamiento: Locks / MVCC' },
          { y: 207, l: 'D', t: 'Durabilidad: Redo Log 💾' },
        ].map((a) => (
          <g key={a.l} transform={`translate(16, ${a.y})`}>
            <rect width="236" height="23" rx="5" fill="#EEF2FF" stroke="#6366F1" />
            <circle cx="13" cy="11.5" r="8.5" fill="#4338CA" />
            <text x="13" y="14.5" textAnchor="middle" fill="#FFF" fontSize="8.5" fontWeight="900">{a.l}</text>
            <text x="28" y="15" fill="#1C1917" fontSize="8.2" fontWeight="800">{a.t}</text>
          </g>
        ))}
      </g>

      {/* Panel 2: B-Tree vs Bitmap Visual */}
      <g transform="translate(290, 12)">
        <rect width="268" height="241" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="248" height="24" rx="6" fill="#0F766E" />
        <text x="134" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="800">ÍNDICES: B-TREE vs. BITMAP</text>

        {/* B-Tree gráfico */}
        <rect x="12" y="42" width="244" height="96" rx="8" fill="#F0FDFA" stroke="#0F766E" strokeWidth="1.5" />
        <text x="134" y="57" textAnchor="middle" fill="#134E4A" fontSize="8.8" fontWeight="900">1. B-Tree O(log n) — Alta Cardinalidad</text>
        <rect x="96" y="64" width="76" height="19" rx="4" fill="#0F766E" />
        <text x="134" y="77" textAnchor="middle" fill="#FFF" fontSize="8" fontFamily="monospace" fontWeight="900">20 | 50</text>
        <line x1="112" y1="83" x2="54" y2="98" stroke="#0F766E" strokeWidth="1.8" />
        <line x1="134" y1="83" x2="134" y2="98" stroke="#0F766E" strokeWidth="1.8" />
        <line x1="156" y1="83" x2="214" y2="98" stroke="#0F766E" strokeWidth="1.8" />
        <rect x="26" y="98" width="56" height="17" rx="3" fill="#CCFBF1" stroke="#0F766E" />
        <text x="54" y="110" textAnchor="middle" fill="#134E4A" fontSize="7.4" fontFamily="monospace" fontWeight="800">&lt;20</text>
        <rect x="106" y="98" width="56" height="17" rx="3" fill="#CCFBF1" stroke="#0F766E" />
        <text x="134" y="110" textAnchor="middle" fill="#134E4A" fontSize="7.4" fontFamily="monospace" fontWeight="800">20..50</text>
        <rect x="186" y="98" width="56" height="17" rx="3" fill="#CCFBF1" stroke="#0F766E" />
        <text x="214" y="110" textAnchor="middle" fill="#134E4A" fontSize="7.4" fontFamily="monospace" fontWeight="800">&gt;50</text>
        <text x="134" y="131" textAnchor="middle" fill="#0F766E" fontSize="7.8" fontWeight="800">Ideal: RFC, Fechas, BETWEEN, &lt;, &gt;</text>

        {/* Bitmap gráfico */}
        <rect x="12" y="146" width="244" height="84" rx="8" fill="#FFFBEB" stroke="#D97706" strokeWidth="1.5" />
        <text x="134" y="162" textAnchor="middle" fill="#92400E" fontSize="8.8" fontWeight="900">2. Bitmap — Baja Cardinalidad (Bits)</text>
        <text x="24" y="182" fill="#78350F" fontSize="8" fontFamily="monospace" fontWeight="800">Sí: [ 1 | 0 | 1 | 1 | 0 ]</text>
        <text x="24" y="198" fill="#78350F" fontSize="8" fontFamily="monospace" fontWeight="800">No: [ 0 | 1 | 0 | 0 | 1 ]</text>
        <text x="134" y="219" textAnchor="middle" fill="#B45309" fontSize="7.8" fontWeight="800">Ideal: Booleano, Género, Data Warehouse</text>
      </g>

      {/* Panel 3: JSON / XML como Árbol Visual */}
      <g transform="translate(568, 12)">
        <rect width="240" height="241" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="220" height="24" rx="6" fill="#292524" />
        <text x="120" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="800">JSON / XML = ÁRBOL (TREE)</text>

        {/* Árbol DOM visual */}
        <rect x="78" y="48" width="84" height="26" rx="6" fill="#4338CA" />
        <text x="120" y="65" textAnchor="middle" fill="#FFF" fontSize="8.5" fontFamily="monospace" fontWeight="900">{`{ user }`}</text>

        <line x1="100" y1="74" x2="62" y2="108" stroke="#4338CA" strokeWidth="2" />
        <line x1="140" y1="74" x2="178" y2="108" stroke="#4338CA" strokeWidth="2" />

        <rect x="20" y="108" width="84" height="26" rx="6" fill="#CCFBF1" stroke="#0F766E" strokeWidth="1.5" />
        <text x="62" y="124" textAnchor="middle" fill="#134E4A" fontSize="8" fontFamily="monospace" fontWeight="800">name:&quot;Ana&quot;</text>

        <rect x="136" y="108" width="84" height="26" rx="6" fill="#FEF3C7" stroke="#D97706" strokeWidth="1.5" />
        <text x="178" y="124" textAnchor="middle" fill="#92400E" fontSize="8" fontFamily="monospace" fontWeight="800">roles: []</text>

        <line x1="162" y1="134" x2="144" y2="162" stroke="#D97706" strokeWidth="1.8" />
        <line x1="194" y1="134" x2="206" y2="162" stroke="#D97706" strokeWidth="1.8" />
        <rect x="116" y="162" width="52" height="20" rx="4" fill="#FFFBEB" stroke="#D97706" />
        <text x="142" y="175" textAnchor="middle" fill="#78350F" fontSize="7.4" fontFamily="monospace" fontWeight="800">&quot;admin&quot;</text>
        <rect x="174" y="162" width="52" height="20" rx="4" fill="#FFFBEB" stroke="#D97706" />
        <text x="200" y="175" textAnchor="middle" fill="#78350F" fontSize="7.4" fontFamily="monospace" fontWeight="800">&quot;dev&quot;</text>

        <rect x="14" y="192" width="212" height="38" rx="7" fill="#FAF7F2" stroke="#D8D0C0" />
        <text x="120" y="208" textAnchor="middle" fill="#1C1917" fontSize="8.2" fontWeight="900">Datos semiestructurados (NoSQL)</text>
        <text x="120" y="222" textAnchor="middle" fill="#4338CA" fontSize="8" fontWeight="800">En memoria → Estructura de ÁRBOL</text>
      </g>
    </svg>
  );
}

export function GraphAlgorithmsDijkstraMstDiagram() {
  return (
    <svg viewBox="0 0 820 265" className="w-full h-auto" role="img" aria-label="Grafos visuales de Dijkstra, Matriz Floyd-Warshall y Árbol de Expansión Mínima Kruskal y Prim">
      <rect width="820" height="265" rx="14" fill="#FAF7F2" />

      {/* Panel 1: Dijkstra (Un origen -> todos) */}
      <g transform="translate(12, 12)">
        <rect width="260" height="241" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="240" height="24" rx="6" fill="#0F766E" />
        <text x="130" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="800">1. DIJKSTRA (1 ORIGEN)</text>

        <line x1="48" y1="90" x2="130" y2="56" stroke="#0F766E" strokeWidth="3.2" />
        <line x1="130" y1="56" x2="212" y2="90" stroke="#0F766E" strokeWidth="3.2" />
        <line x1="48" y1="90" x2="130" y2="124" stroke="#D6D3D1" strokeWidth="2" strokeDasharray="4 2" />
        <line x1="130" y1="124" x2="212" y2="90" stroke="#D6D3D1" strokeWidth="2" strokeDasharray="4 2" />

        <text x="82" y="64" fill="#0F766E" fontSize="9.5" fontWeight="900">+2</text>
        <text x="176" y="64" fill="#0F766E" fontSize="9.5" fontWeight="900">+3</text>
        <text x="82" y="122" fill="#78716C" fontSize="8.5">+9</text>

        <circle cx="48" cy="90" r="15" fill="#134E4A" />
        <text x="48" y="94" textAnchor="middle" fill="#FFFFFF" fontSize="8.5" fontWeight="900">Orig</text>
        <circle cx="130" cy="56" r="13" fill="#CCFBF1" stroke="#0F766E" strokeWidth="2" />
        <text x="130" y="60" textAnchor="middle" fill="#134E4A" fontSize="8.5" fontWeight="900">B</text>
        <circle cx="130" cy="124" r="13" fill="#F5F5F4" stroke="#78716C" strokeWidth="1.5" />
        <text x="130" y="128" textAnchor="middle" fill="#44403C" fontSize="8.5" fontWeight="800">C</text>
        <circle cx="212" cy="90" r="15" fill="#FEF3C7" stroke="#B45309" strokeWidth="2" />
        <text x="212" y="94" textAnchor="middle" fill="#78350F" fontSize="8.5" fontWeight="900">Dest</text>

        <rect x="14" y="150" width="232" height="78" rx="7" fill="#F0FDFA" stroke="#0F766E" />
        <text x="130" y="168" textAnchor="middle" fill="#134E4A" fontSize="8.8" fontWeight="900">Ruta más corta: 2 + 3 = 5 ✓</text>
        <text x="130" y="185" textAnchor="middle" fill="#115E59" fontSize="8.2" fontWeight="800">• Voraz (Greedy) con Min-Heap</text>
        <text x="130" y="201" textAnchor="middle" fill="#DC2626" fontSize="8.3" fontWeight="900">• Exige pesos ≥ 0 (NO negativos)</text>
        <text x="130" y="217" textAnchor="middle" fill="#57534E" fontSize="7.9">O((V + E) log V)</text>
      </g>

      {/* Panel 2: Floyd-Warshall (Matriz Todos a Todos) */}
      <g transform="translate(282, 12)">
        <rect width="256" height="241" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="236" height="24" rx="6" fill="#4338CA" />
        <text x="128" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="800">2. FLOYD-WARSHALL (TODOS)</text>

        {/* Matriz visual 3x3 */}
        <g transform="translate(46, 46)">
          {['A', 'B', 'C'].map((lbl, i) => (
            <g key={lbl}>
              <text x={36 + i * 44} y="12" textAnchor="middle" fill="#312E81" fontSize="8.5" fontWeight="900">{lbl}</text>
              <text x="8" y={32 + i * 26} textAnchor="middle" fill="#312E81" fontSize="8.5" fontWeight="900">{lbl}</text>
            </g>
          ))}
          {[
            ['0', '2', '5'],
            ['2', '0', '3'],
            ['5', '3', '0'],
          ].map((row, r) =>
            row.map((val, c) => (
              <g key={`${r}-${c}`} transform={`translate(${18 + c * 44}, ${18 + r * 26})`}>
                <rect width="38" height="22" rx="4" fill={r === c ? '#E0E7FF' : '#EEF2FF'} stroke="#4338CA" strokeWidth="1.2" />
                <text x="19" y="14.5" textAnchor="middle" fill="#312E81" fontSize="8.8" fontFamily="monospace" fontWeight="900">{val}</text>
              </g>
            ))
          )}
        </g>

        <rect x="14" y="150" width="228" height="78" rx="7" fill="#EEF2FF" stroke="#6366F1" />
        <text x="128" y="168" textAnchor="middle" fill="#312E81" fontSize="8.8" fontWeight="900">Todos los pares a la vez</text>
        <text x="128" y="185" textAnchor="middle" fill="#4338CA" fontSize="8.4" fontWeight="900">• Programación Dinámica: O(V³)</text>
        <text x="128" y="201" textAnchor="middle" fill="#57534E" fontSize="8">• Ciclos en grafo → DFS (Pila)</text>
        <text x="128" y="217" textAnchor="middle" fill="#57534E" fontSize="8">• Sin pesos (menos saltos) → BFS</text>
      </g>

      {/* Panel 3: MST Grafo Real (Kruskal vs Prim) */}
      <g transform="translate(548, 12)">
        <rect width="260" height="241" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="240" height="24" rx="6" fill="#B45309" />
        <text x="130" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="800">3. MST: KRUSKAL Y PRIM</text>

        {/* Grafo MST visual: 4 nodos conectados con V-1 = 3 aristas baratas, descartando la cara */}
        <line x1="56" y1="64" x2="204" y2="64" stroke="#D97706" strokeWidth="3.2" />
        <line x1="56" y1="64" x2="56" y2="122" stroke="#D97706" strokeWidth="3.2" />
        <line x1="204" y1="64" x2="204" y2="122" stroke="#D97706" strokeWidth="3.2" />
        <line x1="56" y1="122" x2="204" y2="122" stroke="#DC2626" strokeWidth="1.8" strokeDasharray="4 3" />

        <text x="130" y="57" textAnchor="middle" fill="#B45309" fontSize="8.5" fontWeight="900">1 ✓</text>
        <text x="42" y="96" textAnchor="middle" fill="#B45309" fontSize="8.5" fontWeight="900">2 ✓</text>
        <text x="218" y="96" textAnchor="middle" fill="#B45309" fontSize="8.5" fontWeight="900">3 ✓</text>
        <text x="130" y="136" textAnchor="middle" fill="#DC2626" fontSize="8" fontWeight="900">9 ✗ (ciclo)</text>

        {[{ x: 56, y: 64, l: '1' }, { x: 204, y: 64, l: '2' }, { x: 56, y: 122, l: '3' }, { x: 204, y: 122, l: '4' }].map((n) => (
          <g key={n.l}>
            <circle cx={n.x} cy={n.y} r="11" fill="#FEF3C7" stroke="#B45309" strokeWidth="2" />
            <text x={n.x} y={n.y + 3.5} textAnchor="middle" fill="#78350F" fontSize="8.5" fontWeight="900">{n.l}</text>
          </g>
        ))}

        <rect x="14" y="150" width="232" height="78" rx="7" fill="#FFFBEB" stroke="#F59E0B" />
        <text x="130" y="168" textAnchor="middle" fill="#92400E" fontSize="8.8" fontWeight="900">V nodos → (V − 1) aristas, 0 ciclos</text>
        <text x="130" y="186" textAnchor="middle" fill="#0F766E" fontSize="8.3" fontWeight="900">• KRUSKAL: Ordena ARISTAS (Union-Find)</text>
        <text x="130" y="203" textAnchor="middle" fill="#B45309" fontSize="8.3" fontWeight="900">• PRIM: Crece por NODOS vecinos</text>
        <text x="130" y="219" textAnchor="middle" fill="#57534E" fontSize="7.8">Ej. Cablear campus al menor costo</text>
      </g>
    </svg>
  );
}

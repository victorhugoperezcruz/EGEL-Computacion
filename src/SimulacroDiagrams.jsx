import React from 'react';

/**
 * Diagramas SVG exclusivos para reactivos del Simulacro EGEL-PLUS ICOMPU.
 * Diseñados SIN SPOILERS: ilustran fielmente el planteamiento técnico del problema
 * (circuitos, bloques, topologías, árboles, grafos y UML) tal como en el examen real.
 */

const svgBase = 'w-full max-w-[540px] h-auto mx-auto block select-none';

const DIAGRAM_REGISTRY = {
  // ==================== ÁREA 1: HARDWARE ====================
  'rc-lowpass-filter': {
    caption: 'Figura: Circuito RC pasivo de primer orden',
    render: () => (
      <svg viewBox="0 0 460 190" className={svgBase} role="img" aria-label="Filtro RC">
        <rect x="8" y="8" width="444" height="174" rx="12" fill="#FAF7F2" stroke="#E5DEC9" />
        {/* Entrada Vin */}
        <circle cx="54" cy="66" r="5" fill="#FFFFFF" stroke="#1C1917" strokeWidth="2" />
        <text x="26" y="70" fontSize="13" fontWeight="700" fill="#1C1917">Vin</text>
        <line x1="59" y1="66" x2="120" y2="66" stroke="#1C1917" strokeWidth="2.2" />
        {/* Resistor zigzag */}
        <polyline
          points="120,66 130,54 142,78 154,54 166,78 178,54 190,78 200,66"
          fill="none"
          stroke="#D95D39"
          strokeWidth="2.4"
          strokeLinejoin="round"
        />
        <text x="160" y="42" textAnchor="middle" fontSize="12" fontWeight="700" fill="#9A3412">
          R = 1.59 kΩ
        </text>
        {/* Nodo salida */}
        <line x1="200" y1="66" x2="365" y2="66" stroke="#1C1917" strokeWidth="2.2" />
        <circle cx="282" cy="66" r="4" fill="#1C1917" />
        <circle cx="370" cy="66" r="5" fill="#FFFFFF" stroke="#1C1917" strokeWidth="2" />
        <text x="384" y="70" fontSize="13" fontWeight="700" fill="#1C1917">Vout</text>
        {/* Rama Capacitor */}
        <line x1="282" y1="66" x2="282" y2="100" stroke="#1C1917" strokeWidth="2.2" />
        <line x1="262" y1="100" x2="302" y2="100" stroke="#4338CA" strokeWidth="3" />
        <line x1="262" y1="112" x2="302" y2="112" stroke="#4338CA" strokeWidth="3" />
        <text x="312" y="110" fontSize="12" fontWeight="700" fill="#3730A3">C = 100 nF</text>
        <line x1="282" y1="112" x2="282" y2="146" stroke="#1C1917" strokeWidth="2.2" />
        {/* Línea GND */}
        <line x1="59" y1="146" x2="365" y2="146" stroke="#1C1917" strokeWidth="2.2" />
        <circle cx="54" cy="146" r="5" fill="#FFFFFF" stroke="#1C1917" strokeWidth="2" />
        <circle cx="370" cy="146" r="5" fill="#FFFFFF" stroke="#1C1917" strokeWidth="2" />
        {/* Símbolo tierra */}
        <line x1="282" y1="146" x2="282" y2="158" stroke="#1C1917" strokeWidth="2" />
        <line x1="268" y1="158" x2="296" y2="158" stroke="#1C1917" strokeWidth="2" />
        <line x1="273" y1="164" x2="291" y2="164" stroke="#1C1917" strokeWidth="2" />
        <line x1="278" y1="170" x2="286" y2="170" stroke="#1C1917" strokeWidth="2" />
      </svg>
    ),
  },

  'cpu-blocks-blank': {
    caption: 'Figura: Composición funcional interna de la CPU',
    render: () => (
      <svg viewBox="0 0 460 210" className={svgBase} role="img" aria-label="Bloques de la CPU">
        <rect x="8" y="8" width="444" height="194" rx="12" fill="#FAF7F2" stroke="#E5DEC9" />
        <rect x="44" y="34" width="150" height="58" rx="10" fill="#FFFFFF" stroke="#D95D39" strokeWidth="2" strokeDasharray="6 3" />
        <text x="119" y="59" textAnchor="middle" fontSize="13" fontWeight="800" fill="#D95D39">Espacio 1 (?)</text>
        <text x="119" y="77" textAnchor="middle" fontSize="11" fill="#57534E">Operaciones aritm./lógicas</text>

        <text x="230" y="71" textAnchor="middle" fontSize="24" fontWeight="900" fill="#1C1917">+</text>

        <rect x="266" y="34" width="150" height="58" rx="10" fill="#FFFFFF" stroke="#4338CA" strokeWidth="2" strokeDasharray="6 3" />
        <text x="341" y="59" textAnchor="middle" fontSize="13" fontWeight="800" fill="#4338CA">Espacio 2 (?)</text>
        <text x="341" y="77" textAnchor="middle" fontSize="11" fill="#57534E">Decodificación y control</text>

        {/* Flecha hacia abajo */}
        <line x1="230" y1="100" x2="230" y2="128" stroke="#1C1917" strokeWidth="2.5" />
        <polygon points="223,124 237,124 230,136" fill="#1C1917" />

        <rect x="110" y="138" width="240" height="48" rx="10" fill="#1C1917" />
        <text x="230" y="167" textAnchor="middle" fontSize="14" fontWeight="800" fill="#FFFFFF">
          Central Processing Unit (CPU)
        </text>
      </svg>
    ),
  },

  'usb-token-packet': {
    caption: 'Figura: Estructura de un paquete tipo Token en el bus USB',
    render: () => (
      <svg viewBox="0 0 500 135" className={svgBase} role="img" aria-label="Paquete Token USB">
        <rect x="6" y="6" width="488" height="123" rx="12" fill="#FAF7F2" stroke="#E5DEC9" />
        {[
          { x: 24, w: 80, label: 'SYNC', sub: '8 bits', fill: '#EFEAE0', stroke: '#A8A29E', text: '#44403C' },
          { x: 104, w: 94, label: 'PID', sub: '8 bits (?)', fill: '#FEF3C7', stroke: '#D97706', text: '#92400E' },
          { x: 198, w: 96, label: 'ADDR', sub: '7 bits (?)', fill: '#E0E7FF', stroke: '#4F46E5', text: '#3730A3' },
          { x: 294, w: 96, label: 'ENDP', sub: '4 bits (?)', fill: '#CCFBF1', stroke: '#0D9488', text: '#115E59' },
          { x: 390, w: 86, label: 'CRC5', sub: '5 bits', fill: '#EFEAE0', stroke: '#A8A29E', text: '#44403C' },
        ].map((b) => (
          <g key={b.label}>
            <rect x={b.x} y="34" width={b.w} height="54" fill={b.fill} stroke={b.stroke} strokeWidth="2" />
            <text x={b.x + b.w / 2} y="59" textAnchor="middle" fontSize="14" fontWeight="800" fill={b.text}>
              {b.label}
            </text>
            <text x={b.x + b.w / 2} y="77" textAnchor="middle" fontSize="10.5" fontWeight="600" fill="#57534E">
              {b.sub}
            </text>
          </g>
        ))}
        <text x="250" y="114" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="#57534E">
          Orden de transmisión en el bus (LSB primero) ➔
        </text>
      </svg>
    ),
  },

  'san-storage-blank': {
    caption: 'Figura: Interconexión de servidores con almacenamiento dedicado a nivel de bloque',
    render: () => (
      <svg viewBox="0 0 500 205" className={svgBase} role="img" aria-label="Red de almacenamiento">
        <rect x="6" y="6" width="488" height="193" rx="12" fill="#FAF7F2" stroke="#E5DEC9" />
        {/* Servidores izquierda */}
        {[34, 88, 142].map((y, i) => (
          <g key={i}>
            <rect x="26" y={y} width="106" height="34" rx="7" fill="#FFFFFF" stroke="#57534E" strokeWidth="1.8" />
            <text x="79" y={y + 21} textAnchor="middle" fontSize="11.5" fontWeight="700" fill="#1C1917">
              Servidor {i + 1}
            </text>
            <line x1="132" y1={y + 17} x2="188" y2="104" stroke="#4338CA" strokeWidth="1.8" />
          </g>
        ))}
        {/* Bloque central en blanco */}
        <rect x="188" y="64" width="124" height="80" rx="12" fill="#FFFFFF" stroke="#D95D39" strokeWidth="2.4" strokeDasharray="6 3" />
        <text x="250" y="99" textAnchor="middle" fontSize="15" fontWeight="900" fill="#D95D39">¿ ? ? ?</text>
        <text x="250" y="119" textAnchor="middle" fontSize="10.5" fontWeight="600" fill="#57534E">
          Fibre Channel / iSCSI
        </text>
        {/* Almacenamiento derecha */}
        {[34, 88, 142].map((y, i) => (
          <g key={i}>
            <line x1="312" y1="104" x2="368" y2={y + 17} stroke="#0F766E" strokeWidth="1.8" />
            <rect x="368" y={y} width="106" height="34" rx="7" fill="#FFFFFF" stroke="#0F766E" strokeWidth="1.8" />
            <text x="421" y={y + 21} textAnchor="middle" fontSize="11" fontWeight="700" fill="#115E59">
              Arreglo Disco {i + 1}
            </text>
          </g>
        ))}
      </svg>
    ),
  },

  'computer-io-memory-blank': {
    caption: 'Figura: Diagrama funcional general de una computadora',
    render: () => (
      <svg viewBox="0 0 510 215" className={svgBase} role="img" aria-label="Diagrama funcional computadora">
        <rect x="6" y="6" width="498" height="203" rx="12" fill="#FAF7F2" stroke="#E5DEC9" />
        {/* Entrada */}
        <rect x="20" y="34" width="110" height="48" rx="8" fill="#FFFFFF" stroke="#57534E" strokeWidth="1.8" />
        <text x="75" y="55" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="#1C1917">Unidad de</text>
        <text x="75" y="71" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="#1C1917">Entrada</text>

        <line x1="130" y1="58" x2="180" y2="58" stroke="#1C1917" strokeWidth="2.2" />
        <polygon points="175,53 185,58 175,63" fill="#1C1917" />

        {/* Espacio 1 */}
        <rect x="186" y="28" width="138" height="60" rx="10" fill="#FFF7ED" stroke="#D95D39" strokeWidth="2.2" strokeDasharray="6 3" />
        <text x="255" y="63" textAnchor="middle" fontSize="13.5" fontWeight="900" fill="#D95D39">1. ________</text>

        <line x1="324" y1="58" x2="374" y2="58" stroke="#1C1917" strokeWidth="2.2" />
        <polygon points="369,53 379,58 369,63" fill="#1C1917" />

        {/* Salida */}
        <rect x="380" y="34" width="110" height="48" rx="8" fill="#FFFFFF" stroke="#57534E" strokeWidth="1.8" />
        <text x="435" y="55" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="#1C1917">Unidad de</text>
        <text x="435" y="71" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="#1C1917">Salida</text>

        {/* Conexión bidireccional a Memoria */}
        <line x1="255" y1="88" x2="255" y2="122" stroke="#4338CA" strokeWidth="2.2" />
        <polygon points="250,94 260,94 255,86" fill="#4338CA" />
        <polygon points="250,118 260,118 255,126" fill="#4338CA" />

        {/* Espacio 2 y 3 */}
        <rect x="74" y="128" width="166" height="58" rx="10" fill="#EEF2FF" stroke="#4338CA" strokeWidth="2" strokeDasharray="6 3" />
        <text x="157" y="153" textAnchor="middle" fontSize="12.5" fontWeight="800" fill="#3730A3">2. ________</text>
        <text x="157" y="172" textAnchor="middle" fontSize="10.5" fill="#4338CA">(Volátil / Acceso rápido)</text>

        <line x1="240" y1="157" x2="270" y2="157" stroke="#0F766E" strokeWidth="2" />

        <rect x="270" y="128" width="166" height="58" rx="10" fill="#F0FDFA" stroke="#0F766E" strokeWidth="2" strokeDasharray="6 3" />
        <text x="353" y="153" textAnchor="middle" fontSize="12.5" fontWeight="800" fill="#115E59">3. ________</text>
        <text x="353" y="172" textAnchor="middle" fontSize="10.5" fill="#0F766E">(No volátil / Largo plazo)</text>
      </svg>
    ),
  },

  'closed-loop-feedback': {
    caption: 'Figura: Sistema de control en lazo cerrado con realimentación unitaria negativa',
    render: () => (
      <svg viewBox="0 0 480 175" className={svgBase} role="img" aria-label="Lazo cerrado">
        <rect x="6" y="6" width="468" height="163" rx="12" fill="#FAF7F2" stroke="#E5DEC9" />
        {/* Entrada R(s) */}
        <text x="24" y="67" fontSize="13" fontWeight="800" fill="#1C1917">R(s)</text>
        <line x1="56" y1="62" x2="108" y2="62" stroke="#1C1917" strokeWidth="2.2" />
        <polygon points="103,57 113,62 103,67" fill="#1C1917" />
        {/* Punto suma */}
        <circle cx="128" cy="62" r="15" fill="#FFFFFF" stroke="#1C1917" strokeWidth="2" />
        <text x="116" y="54" fontSize="11" fontWeight="800" fill="#0F766E">+</text>
        <text x="134" y="88" fontSize="13" fontWeight="900" fill="#BE123C">−</text>
        {/* Flecha a G(s) */}
        <line x1="143" y1="62" x2="196" y2="62" stroke="#1C1917" strokeWidth="2.2" />
        <polygon points="191,57 201,62 191,67" fill="#1C1917" />
        {/* Bloque G(s) */}
        <rect x="202" y="36" width="136" height="52" rx="10" fill="#FFFFFF" stroke="#4338CA" strokeWidth="2.2" />
        <text x="270" y="66" textAnchor="middle" fontSize="13.5" fontWeight="800" fill="#3730A3">
          G(s) = 10 / (s + 2)
        </text>
        {/* Salida Y(s) */}
        <line x1="338" y1="62" x2="420" y2="62" stroke="#1C1917" strokeWidth="2.2" />
        <polygon points="415,57 425,62 415,67" fill="#1C1917" />
        <text x="432" y="67" fontSize="13" fontWeight="800" fill="#1C1917">Y(s)</text>
        {/* Lazo de realimentación H(s)=1 */}
        <circle cx="384" cy="62" r="4" fill="#1C1917" />
        <polyline points="384,62 384,132 128,132 128,77" fill="none" stroke="#1C1917" strokeWidth="2" />
        <polygon points="123,83 133,83 128,75" fill="#1C1917" />
        <rect x="228" y="116" width="84" height="30" rx="7" fill="#FEF3C7" stroke="#D97706" strokeWidth="1.8" />
        <text x="270" y="135" textAnchor="middle" fontSize="12" fontWeight="800" fill="#92400E">H(s) = 1</text>
      </svg>
    ),
  },

  // ==================== ÁREA 2: REDES ====================
  'network-topologies-4': {
    caption: 'Figura: Representación esquemática de las 4 topologías referidas (1 a 4)',
    render: () => (
      <svg viewBox="0 0 520 155" className={svgBase} role="img" aria-label="Topologías de red">
        <rect x="6" y="6" width="508" height="143" rx="12" fill="#FAF7F2" stroke="#E5DEC9" />
        {/* 1. Malla total */}
        <g transform="translate(22, 18)">
          <rect x="0" y="0" width="110" height="118" rx="8" fill="#FFFFFF" stroke="#E5DEC9" />
          <text x="10" y="18" fontSize="12" fontWeight="800" fill="#4338CA">1.</text>
          {[
            [55, 30], [88, 56], [76, 95], [34, 95], [22, 56],
          ].map((p1, i, arr) =>
            arr.slice(i + 1).map((p2, j) => (
              <line key={`${i}-${j}`} x1={p1[0]} y1={p1[1]} x2={p2[0]} y2={p2[1]} stroke="#6366F1" strokeWidth="1.4" />
            ))
          )}
          {[[55, 30], [88, 56], [76, 95], [34, 95], [22, 56]].map(([cx, cy], idx) => (
            <circle key={idx} cx={cx} cy={cy} r="5.5" fill="#FFFFFF" stroke="#1C1917" strokeWidth="1.8" />
          ))}
        </g>

        {/* 2. Estrella */}
        <g transform="translate(144, 18)">
          <rect x="0" y="0" width="110" height="118" rx="8" fill="#FFFFFF" stroke="#E5DEC9" />
          <text x="10" y="18" fontSize="12" fontWeight="800" fill="#4338CA">2.</text>
          {[[55, 28], [90, 56], [78, 96], [32, 96], [20, 56]].map(([cx, cy], idx) => (
            <g key={idx}>
              <line x1="55" y1="64" x2={cx} y2={cy} stroke="#0D9488" strokeWidth="1.8" />
              <circle cx={cx} cy={cy} r="5.5" fill="#FFFFFF" stroke="#1C1917" strokeWidth="1.8" />
            </g>
          ))}
          <circle cx="55" cy="64" r="7" fill="#0D9488" stroke="#1C1917" strokeWidth="1.6" />
        </g>

        {/* 3. Anillo */}
        <g transform="translate(266, 18)">
          <rect x="0" y="0" width="110" height="118" rx="8" fill="#FFFFFF" stroke="#E5DEC9" />
          <text x="10" y="18" fontSize="12" fontWeight="800" fill="#4338CA">3.</text>
          <polygon points="55,30 88,56 76,95 34,95 22,56" fill="none" stroke="#D95D39" strokeWidth="2" />
          {[[55, 30], [88, 56], [76, 95], [34, 95], [22, 56]].map(([cx, cy], idx) => (
            <circle key={idx} cx={cx} cy={cy} r="5.5" fill="#FFFFFF" stroke="#1C1917" strokeWidth="1.8" />
          ))}
        </g>

        {/* 4. Bus */}
        <g transform="translate(388, 18)">
          <rect x="0" y="0" width="110" height="118" rx="8" fill="#FFFFFF" stroke="#E5DEC9" />
          <text x="10" y="18" fontSize="12" fontWeight="800" fill="#4338CA">4.</text>
          <line x1="14" y1="84" x2="96" y2="84" stroke="#1C1917" strokeWidth="3" />
          <rect x="10" y="79" width="6" height="10" fill="#D95D39" />
          <rect x="94" y="79" width="6" height="10" fill="#D95D39" />
          {[24, 44, 65, 85].map((x, idx) => (
            <g key={idx}>
              <line x1={x} y1="54" x2={x} y2="84" stroke="#57534E" strokeWidth="1.8" />
              <circle cx={x} cy="48" r="5.5" fill="#FFFFFF" stroke="#1C1917" strokeWidth="1.8" />
            </g>
          ))}
        </g>
      </svg>
    ),
  },

  'collision-broadcast-domains': {
    caption: 'Figura: Topología de Router, Switches y Hub para conteo de dominios',
    render: () => (
      <svg viewBox="0 0 520 220" className={svgBase} role="img" aria-label="Dominios de colisión y broadcast">
        <rect x="6" y="6" width="508" height="208" rx="12" fill="#FAF7F2" stroke="#E5DEC9" />
        {/* Router */}
        <ellipse cx="260" cy="40" rx="36" ry="18" fill="#4338CA" stroke="#1E1B4B" strokeWidth="2" />
        <text x="260" y="44" textAnchor="middle" fontSize="12" fontWeight="800" fill="#FFFFFF">Router</text>
        {/* Enlaces a Switches */}
        <line x1="228" y1="48" x2="140" y2="90" stroke="#1C1917" strokeWidth="2" />
        <text x="168" y="65" fontSize="10.5" fontWeight="700" fill="#4338CA">F0/0</text>
        <line x1="292" y1="48" x2="395" y2="90" stroke="#1C1917" strokeWidth="2" />
        <text x="348" y="65" fontSize="10.5" fontWeight="700" fill="#4338CA">F0/1</text>

        {/* Switch 1 */}
        <rect x="86" y="90" width="108" height="30" rx="6" fill="#0F766E" />
        <text x="140" y="109" textAnchor="middle" fontSize="11.5" fontWeight="800" fill="#FFFFFF">Switch 1</text>
        {/* 3 PCs en Switch 1 */}
        {[34, 72, 110].map((x, i) => (
          <g key={i}>
            <line x1={x} y1="168" x2="122" y2="120" stroke="#57534E" strokeWidth="1.6" />
            <rect x={x - 14} y="168" width="28" height="22" rx="4" fill="#FFFFFF" stroke="#1C1917" strokeWidth="1.6" />
            <text x={x} y="183" textAnchor="middle" fontSize="9.5" fontWeight="700">PC{i + 1}</text>
          </g>
        ))}
        {/* Hub conectado a Switch 1 */}
        <line x1="164" y1="120" x2="215" y2="144" stroke="#D95D39" strokeWidth="2" />
        <rect x="176" y="144" width="78" height="22" rx="5" fill="#FEF3C7" stroke="#D97706" strokeWidth="1.8" />
        <text x="215" y="159" textAnchor="middle" fontSize="10.5" fontWeight="800" fill="#92400E">Hub (4 PCs)</text>
        {[184, 204, 224, 244].map((x, i) => (
          <g key={i}>
            <line x1={x} y1="166" x2={x} y2="188" stroke="#D97706" strokeWidth="1.5" />
            <circle cx={x} cy="193" r="6" fill="#FFFFFF" stroke="#92400E" strokeWidth="1.5" />
          </g>
        ))}

        {/* Switch 2 */}
        <rect x="341" y="90" width="108" height="30" rx="6" fill="#0F766E" />
        <text x="395" y="109" textAnchor="middle" fontSize="11.5" fontWeight="800" fill="#FFFFFF">Switch 2</text>
        {[323, 359, 395, 431, 467].map((x, i) => (
          <g key={i}>
            <line x1={x} y1="168" x2="395" y2="120" stroke="#57534E" strokeWidth="1.6" />
            <rect x={x - 14} y="168" width="28" height="22" rx="4" fill="#FFFFFF" stroke="#1C1917" strokeWidth="1.6" />
            <text x={x} y="183" textAnchor="middle" fontSize="9.5" fontWeight="700">PC{i + 1}</text>
          </g>
        ))}
      </svg>
    ),
  },

  'frame-relay-eigrp': {
    caption: 'Figura: Topología Hub-and-Spoke Frame Relay NBMA con EIGRP AS 1',
    render: () => (
      <svg viewBox="0 0 500 225" className={svgBase} role="img" aria-label="Frame Relay Hub and Spoke">
        <rect x="6" y="6" width="488" height="213" rx="12" fill="#FAF7F2" stroke="#E5DEC9" />
        {/* RTA Hub */}
        <ellipse cx="250" cy="44" rx="42" ry="20" fill="#4338CA" stroke="#1E1B4B" strokeWidth="2" />
        <text x="250" y="43" textAnchor="middle" fontSize="12" fontWeight="800" fill="#FFFFFF">RTA</text>
        <text x="250" y="56" textAnchor="middle" fontSize="9.5" fill="#E0E7FF">(Hub)</text>
        <text x="250" y="80" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="#1C1917">S0/0 multipunto</text>

        {/* Nube Frame Relay */}
        <rect x="176" y="92" width="148" height="44" rx="22" fill="#E0E7FF" stroke="#4F46E5" strokeWidth="2" />
        <text x="250" y="112" textAnchor="middle" fontSize="12" fontWeight="800" fill="#312E81">Frame Relay</text>
        <text x="250" y="127" textAnchor="middle" fontSize="10" fontWeight="700" fill="#4338CA">NBMA • EIGRP AS 1</text>
        <line x1="250" y1="64" x2="250" y2="92" stroke="#1C1917" strokeWidth="2.2" />

        {/* RTB Spoke */}
        <line x1="205" y1="134" x2="115" y2="168" stroke="#1C1917" strokeWidth="2.2" />
        <ellipse cx="98" cy="182" rx="42" ry="20" fill="#0F766E" stroke="#134E4A" strokeWidth="2" />
        <text x="98" y="181" textAnchor="middle" fontSize="12" fontWeight="800" fill="#FFFFFF">RTB</text>
        <text x="98" y="194" textAnchor="middle" fontSize="9.5" fill="#CCFBF1">(Spoke)</text>

        {/* RTC Spoke */}
        <line x1="295" y1="134" x2="385" y2="168" stroke="#1C1917" strokeWidth="2.2" />
        <ellipse cx="402" cy="182" rx="42" ry="20" fill="#0F766E" stroke="#134E4A" strokeWidth="2" />
        <text x="402" y="181" textAnchor="middle" fontSize="12" fontWeight="800" fill="#FFFFFF">RTC</text>
        <text x="402" y="194" textAnchor="middle" fontSize="9.5" fill="#CCFBF1">(Spoke)</text>

        {/* Rutas faltantes entre RTB y RTC */}
        <line x1="146" y1="184" x2="354" y2="184" stroke="#E11D48" strokeWidth="2" strokeDasharray="5 4" />
        <rect x="190" y="170" width="120" height="24" rx="6" fill="#FFE4E6" stroke="#E11D48" />
        <text x="250" y="186" textAnchor="middle" fontSize="10.5" fontWeight="800" fill="#9F1239">
          ✕ Sin rutas mutuas
        </text>
      </svg>
    ),
  },

  'stp-triangle': {
    caption: 'Figura: Triángulo redundante ejecutando STP en VLAN 10',
    render: () => (
      <svg viewBox="0 0 480 215" className={svgBase} role="img" aria-label="Triángulo STP">
        <rect x="6" y="6" width="468" height="203" rx="12" fill="#FAF7F2" stroke="#E5DEC9" />
        <line x1="240" y1="56" x2="116" y2="152" stroke="#57534E" strokeWidth="2.4" />
        <line x1="240" y1="56" x2="364" y2="152" stroke="#57534E" strokeWidth="2.4" />
        <line x1="116" y1="168" x2="364" y2="168" stroke="#57534E" strokeWidth="2.4" />

        {/* SW-A */}
        <rect x="164" y="22" width="152" height="52" rx="9" fill="#FFFFFF" stroke="#4338CA" strokeWidth="2" />
        <text x="240" y="42" textAnchor="middle" fontSize="12.5" fontWeight="800" fill="#1C1917">SW-A</text>
        <text x="240" y="57" textAnchor="middle" fontSize="10.5" fill="#4338CA">Pri: 32768</text>
        <text x="240" y="70" textAnchor="middle" fontSize="9.5" fontFamily="monospace" fill="#57534E">000A.1111.2222</text>

        {/* SW-B */}
        <rect x="30" y="138" width="152" height="52" rx="9" fill="#FFFFFF" stroke="#0F766E" strokeWidth="2" />
        <text x="106" y="158" textAnchor="middle" fontSize="12.5" fontWeight="800" fill="#1C1917">SW-B</text>
        <text x="106" y="173" textAnchor="middle" fontSize="10.5" fill="#0F766E">Pri: 24576</text>
        <text x="106" y="186" textAnchor="middle" fontSize="9.5" fontFamily="monospace" fill="#57534E">000B.9999.8888</text>

        {/* SW-C */}
        <rect x="298" y="138" width="152" height="52" rx="9" fill="#FFFFFF" stroke="#D95D39" strokeWidth="2" />
        <text x="374" y="158" textAnchor="middle" fontSize="12.5" fontWeight="800" fill="#1C1917">SW-C</text>
        <text x="374" y="173" textAnchor="middle" fontSize="10.5" fill="#D95D39">Pri: 24576</text>
        <text x="374" y="186" textAnchor="middle" fontSize="9.5" fontFamily="monospace" fill="#57534E">000A.5555.4444</text>
      </svg>
    ),
  },

  'ospf-multiarea': {
    caption: 'Figura: Posición de R-Edge en la topología OSPF multiárea',
    render: () => (
      <svg viewBox="0 0 500 175" className={svgBase} role="img" aria-label="OSPF Multiárea">
        <rect x="6" y="6" width="488" height="163" rx="12" fill="#FAF7F2" stroke="#E5DEC9" />
        {/* Área 0 */}
        <rect x="22" y="34" width="142" height="106" rx="14" fill="#E0E7FF" stroke="#4F46E5" strokeWidth="1.8" />
        <text x="93" y="60" textAnchor="middle" fontSize="12.5" fontWeight="800" fill="#312E81">Área 0</text>
        <text x="93" y="76" textAnchor="middle" fontSize="10.5" fill="#4338CA">(Backbone)</text>

        {/* Área 10 */}
        <rect x="200" y="34" width="136" height="106" rx="14" fill="#CCFBF1" stroke="#0D9488" strokeWidth="1.8" />
        <text x="268" y="60" textAnchor="middle" fontSize="12.5" fontWeight="800" fill="#115E59">Área 10</text>
        <text x="268" y="76" textAnchor="middle" fontSize="10.5" fill="#0F766E">(Sucursal)</text>

        {/* R-Edge */}
        <ellipse cx="182" cy="108" rx="38" ry="20" fill="#D95D39" stroke="#7C2D12" strokeWidth="2" />
        <text x="182" y="112" textAnchor="middle" fontSize="11.5" fontWeight="800" fill="#FFFFFF">R-Edge</text>

        {/* Red externa */}
        <line x1="220" y1="108" x2="366" y2="108" stroke="#1C1917" strokeWidth="2.2" strokeDasharray="5 3" />
        <rect x="366" y="64" width="114" height="72" rx="14" fill="#FEF3C7" stroke="#D97706" strokeWidth="1.8" />
        <text x="423" y="95" textAnchor="middle" fontSize="11.5" fontWeight="800" fill="#92400E">Red Externa</text>
        <text x="423" y="113" textAnchor="middle" fontSize="10" fill="#78350F">(No-OSPF / Estática)</text>
      </svg>
    ),
  },

  'firewall-dmz-3zones': {
    caption: 'Figura: Firewall perimetral de tres interfaces (WAN, DMZ y LAN)',
    render: () => (
      <svg viewBox="0 0 500 185" className={svgBase} role="img" aria-label="Firewall 3 zonas">
        <rect x="6" y="6" width="488" height="173" rx="12" fill="#FAF7F2" stroke="#E5DEC9" />
        {/* WAN */}
        <rect x="22" y="68" width="110" height="54" rx="12" fill="#FFE4E6" stroke="#E11D48" strokeWidth="1.8" />
        <text x="77" y="92" textAnchor="middle" fontSize="12" fontWeight="800" fill="#9F1239">WAN</text>
        <text x="77" y="108" textAnchor="middle" fontSize="10" fill="#BE123C">(Internet)</text>

        <line x1="132" y1="95" x2="196" y2="95" stroke="#1C1917" strokeWidth="2.2" />

        {/* Firewall */}
        <rect x="196" y="64" width="104" height="62" rx="10" fill="#1C1917" />
        <text x="248" y="92" textAnchor="middle" fontSize="12.5" fontWeight="800" fill="#FFFFFF">Firewall</text>
        <text x="248" y="109" textAnchor="middle" fontSize="10" fill="#FDE68A">Perimetral</text>

        {/* DMZ arriba derecha */}
        <line x1="300" y1="80" x2="366" y2="52" stroke="#D97706" strokeWidth="2.2" />
        <rect x="366" y="24" width="112" height="52" rx="10" fill="#FEF3C7" stroke="#D97706" strokeWidth="1.8" />
        <text x="422" y="47" textAnchor="middle" fontSize="12" fontWeight="800" fill="#92400E">DMZ</text>
        <text x="422" y="63" textAnchor="middle" fontSize="10" fill="#78350F">Zona intermedia</text>

        {/* LAN abajo derecha */}
        <line x1="300" y1="110" x2="366" y2="136" stroke="#0F766E" strokeWidth="2.2" />
        <rect x="366" y="110" width="112" height="52" rx="10" fill="#CCFBF1" stroke="#0F766E" strokeWidth="1.8" />
        <text x="422" y="133" textAnchor="middle" fontSize="12" fontWeight="800" fill="#115E59">LAN Interna</text>
        <text x="422" y="149" textAnchor="middle" fontSize="10" fill="#0F766E">Red privada</text>
      </svg>
    ),
  },

  // ==================== ÁREA 3: SOFTWARE Y ALGORITMOS ====================
  'uml-state-order': {
    caption: 'Figura: Diagrama UML del ciclo de vida de un pedido',
    render: () => (
      <svg viewBox="0 0 520 175" className={svgBase} role="img" aria-label="Diagrama UML de estados">
        <rect x="6" y="6" width="508" height="163" rx="12" fill="#FAF7F2" stroke="#E5DEC9" />
        {/* Estado inicial */}
        <circle cx="28" cy="72" r="8" fill="#1C1917" />
        <line x1="36" y1="72" x2="64" y2="72" stroke="#1C1917" strokeWidth="2" />
        <polygon points="59,68 67,72 59,76" fill="#1C1917" />

        {/* Pendiente */}
        <rect x="68" y="54" width="84" height="36" rx="10" fill="#FFFFFF" stroke="#4338CA" strokeWidth="2" />
        <text x="110" y="76" textAnchor="middle" fontSize="11.5" fontWeight="800" fill="#1C1917">Pendiente</text>

        <line x1="152" y1="72" x2="196" y2="72" stroke="#1C1917" strokeWidth="1.8" />
        <polygon points="191,68 199,72 191,76" fill="#1C1917" />
        <text x="174" y="63" textAnchor="middle" fontSize="9" fontWeight="700" fill="#57534E">[pago OK]</text>

        {/* Pagado */}
        <rect x="200" y="54" width="76" height="36" rx="10" fill="#FFFFFF" stroke="#4338CA" strokeWidth="2" />
        <text x="238" y="76" textAnchor="middle" fontSize="11.5" fontWeight="800" fill="#1C1917">Pagado</text>

        <line x1="276" y1="72" x2="316" y2="72" stroke="#1C1917" strokeWidth="1.8" />
        <polygon points="311,68 319,72 311,76" fill="#1C1917" />
        <text x="296" y="63" textAnchor="middle" fontSize="9" fontWeight="700" fill="#57534E">guía</text>

        {/* Enviado */}
        <rect x="320" y="54" width="76" height="36" rx="10" fill="#FFFFFF" stroke="#4338CA" strokeWidth="2" />
        <text x="358" y="76" textAnchor="middle" fontSize="11.5" fontWeight="800" fill="#1C1917">Enviado</text>

        <line x1="396" y1="72" x2="424" y2="72" stroke="#1C1917" strokeWidth="1.8" />
        <polygon points="419,68 427,72 419,76" fill="#1C1917" />

        {/* Entregado */}
        <rect x="428" y="54" width="76" height="36" rx="10" fill="#CCFBF1" stroke="#0F766E" strokeWidth="2" />
        <text x="466" y="76" textAnchor="middle" fontSize="11" fontWeight="800" fill="#115E59">Entregado</text>

        {/* Rama Cancelado */}
        <polyline points="110,90 110,134 218,134" fill="none" stroke="#BE123C" strokeWidth="1.8" />
        <polygon points="213,130 221,134 213,138" fill="#BE123C" />
        <text x="155" y="128" fontSize="9" fontWeight="700" fill="#BE123C">[cancelar]</text>
        <rect x="222" y="116" width="90" height="34" rx="10" fill="#FFE4E6" stroke="#BE123C" strokeWidth="1.8" />
        <text x="267" y="137" textAnchor="middle" fontSize="11" fontWeight="800" fill="#9F1239">Cancelado</text>

        {/* Estado final */}
        <line x1="312" y1="133" x2="454" y2="133" stroke="#1C1917" strokeWidth="1.8" />
        <line x1="466" y1="90" x2="466" y2="120" stroke="#1C1917" strokeWidth="1.8" />
        <circle cx="466" cy="133" r="10" fill="#FFFFFF" stroke="#1C1917" strokeWidth="2" />
        <circle cx="466" cy="133" r="5.5" fill="#1C1917" />
      </svg>
    ),
  },

  'bst-traversal-50': {
    caption: 'Figura: Árbol Binario de Búsqueda (BST) para recorrido en Posorden',
    render: () => (
      <svg viewBox="0 0 460 225" className={svgBase} role="img" aria-label="Árbol BST raíz 50">
        <rect x="6" y="6" width="448" height="213" rx="12" fill="#FAF7F2" stroke="#E5DEC9" />
        {/* Aristas */}
        {[
          [230, 38, 136, 88],
          [230, 38, 336, 88],
          [136, 88, 86, 138],
          [136, 88, 186, 138],
          [86, 138, 52, 188],
          [86, 138, 120, 188],
          [336, 88, 290, 138],
          [336, 88, 382, 138],
        ].map(([x1, y1, x2, y2], idx) => (
          <line key={idx} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#57534E" strokeWidth="2" />
        ))}
        {/* Nodos */}
        {[
          { x: 230, y: 38, v: '50' },
          { x: 136, y: 88, v: '30' },
          { x: 336, y: 88, v: '70' },
          { x: 86, y: 138, v: '20' },
          { x: 186, y: 138, v: '40', hl: true },
          { x: 290, y: 138, v: '60' },
          { x: 382, y: 138, v: '80' },
          { x: 52, y: 188, v: '10' },
          { x: 120, y: 188, v: '25' },
        ].map((n) => (
          <g key={n.v}>
            <circle
              cx={n.x}
              cy={n.y}
              r="18"
              fill={n.hl ? '#FEF3C7' : '#FFFFFF'}
              stroke={n.hl ? '#D95D39' : '#1C1917'}
              strokeWidth={n.hl ? '2.6' : '2'}
            />
            <text
              x={n.x}
              y={n.y + 5}
              textAnchor="middle"
              fontSize="13"
              fontWeight="800"
              fill={n.hl ? '#9A3412' : '#1C1917'}
            >
              {n.v}
            </text>
          </g>
        ))}
      </svg>
    ),
  },

  'dfs-graph-trace': {
    caption: 'Figura: Grafo dirigido y orden de exploración de los vértices (1º a 6º)',
    render: () => (
      <svg viewBox="0 0 440 205" className={svgBase} role="img" aria-label="Traza de exploración de grafo">
        <rect x="6" y="6" width="428" height="193" rx="12" fill="#FAF7F2" stroke="#E5DEC9" />
        {[
          [220, 44, 130, 102],
          [220, 44, 310, 102],
          [130, 102, 82, 164],
          [130, 102, 178, 164],
          [310, 102, 310, 164],
        ].map(([x1, y1, x2, y2], idx) => (
          <line key={idx} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#57534E" strokeWidth="2" />
        ))}
        {[
          { x: 220, y: 44, v: 'A', ord: '1º' },
          { x: 130, y: 102, v: 'B', ord: '2º' },
          { x: 82, y: 164, v: 'D', ord: '3º' },
          { x: 178, y: 164, v: 'E', ord: '4º' },
          { x: 310, y: 102, v: 'C', ord: '5º' },
          { x: 310, y: 164, v: 'F', ord: '6º' },
        ].map((n) => (
          <g key={n.v}>
            <circle cx={n.x} cy={n.y} r="19" fill="#FFFFFF" stroke="#4338CA" strokeWidth="2.2" />
            <text x={n.x} y={n.y + 5} textAnchor="middle" fontSize="13.5" fontWeight="800" fill="#1C1917">
              {n.v}
            </text>
            <rect x={n.x + 14} y={n.y - 22} width="24" height="16" rx="5" fill="#FEF3C7" stroke="#D97706" />
            <text x={n.x + 26} y={n.y - 10} textAnchor="middle" fontSize="10" fontWeight="800" fill="#92400E">
              {n.ord}
            </text>
          </g>
        ))}
      </svg>
    ),
  },

  'bellman-ford-relax': {
    caption: 'Figura: Relajación iterativa de aristas en un grafo dirigido con peso negativo',
    render: () => (
      <svg viewBox="0 0 480 185" className={svgBase} role="img" aria-label="Relajación con pesos negativos">
        <rect x="6" y="6" width="468" height="173" rx="12" fill="#FAF7F2" stroke="#E5DEC9" />
        {[
          { y: 46, vals: ['0', '∞', '∞', '∞'], step: 'Init' },
          { y: 98, vals: ['0', '−3', '∞', '∞'], step: 'It. 1' },
          { y: 150, vals: ['0', '−3', '−2', '−1'], step: 'It. 3' },
        ].map((row) => (
          <g key={row.step}>
            <text x="26" y={row.y + 4} fontSize="11" fontWeight="800" fill="#57534E">{row.step}</text>
            {[
              { x: 96, n: 'A', w: '−3' },
              { x: 196, n: 'B', w: '+1' },
              { x: 296, n: 'C', w: '+1' },
              { x: 396, n: 'D', w: null },
            ].map((node, i) => (
              <g key={node.n}>
                {node.w && (
                  <>
                    <line x1={node.x + 16} y1={row.y} x2={node.x + 80} y2={row.y} stroke="#1C1917" strokeWidth="1.8" />
                    <polygon points={`${node.x + 75},${row.y - 4} ${node.x + 82},${row.y} ${node.x + 75},${row.y + 4}`} fill="#1C1917" />
                    <text x={node.x + 48} y={row.y - 7} textAnchor="middle" fontSize="11" fontWeight="800" fill={node.w === '−3' ? '#BE123C' : '#0F766E'}>
                      {node.w}
                    </text>
                  </>
                )}
                <circle cx={node.x} cy={row.y} r="15" fill="#FFFFFF" stroke="#1C1917" strokeWidth="1.8" />
                <text x={node.x} y={row.y + 4} textAnchor="middle" fontSize="12" fontWeight="800" fill="#1C1917">{node.n}</text>
                <text x={node.x} y={row.y + 27} textAnchor="middle" fontSize="10.5" fontWeight="800" fill="#4338CA">
                  {row.vals[i]}
                </text>
              </g>
            ))}
          </g>
        ))}
      </svg>
    ),
  },

  'deadlock-resource-graph': {
    caption: 'Figura: Grafo de asignación de recursos entre P1 y P2',
    render: () => (
      <svg viewBox="0 0 460 175" className={svgBase} role="img" aria-label="Grafo de asignación de recursos">
        <rect x="6" y="6" width="448" height="163" rx="12" fill="#FAF7F2" stroke="#E5DEC9" />
        {/* P1 */}
        <circle cx="110" cy="88" r="28" fill="#E0E7FF" stroke="#4338CA" strokeWidth="2.2" />
        <text x="110" y="93" textAnchor="middle" fontSize="14" fontWeight="800" fill="#312E81">P1</text>
        {/* P2 */}
        <circle cx="350" cy="88" r="28" fill="#E0E7FF" stroke="#4338CA" strokeWidth="2.2" />
        <text x="350" y="93" textAnchor="middle" fontSize="14" fontWeight="800" fill="#312E81">P2</text>
        {/* Impresora arriba */}
        <rect x="182" y="22" width="96" height="36" rx="8" fill="#FFFFFF" stroke="#0F766E" strokeWidth="2" />
        <text x="230" y="45" textAnchor="middle" fontSize="12" fontWeight="800" fill="#115E59">Impresora</text>
        {/* Escáner abajo */}
        <rect x="182" y="118" width="96" height="36" rx="8" fill="#FFFFFF" stroke="#D95D39" strokeWidth="2" />
        <text x="230" y="141" textAnchor="middle" fontSize="12" fontWeight="800" fill="#9A3412">Escáner</text>

        {/* Impresora -> P1 (retenido) */}
        <line x1="182" y1="40" x2="132" y2="68" stroke="#0F766E" strokeWidth="2.2" />
        <polygon points="135,61 128,70 140,69" fill="#0F766E" />
        <text x="135" y="44" fontSize="10" fontWeight="700" fill="#0F766E">asigna</text>

        {/* P1 -> Escáner (solicita) */}
        <line x1="132" y1="108" x2="180" y2="134" stroke="#BE123C" strokeWidth="2.2" strokeDasharray="4 3" />
        <polygon points="173,136 183,136 178,127" fill="#BE123C" />
        <text x="128" y="138" fontSize="10" fontWeight="700" fill="#BE123C">solicita</text>

        {/* Escáner -> P2 (retenido) */}
        <line x1="278" y1="134" x2="328" y2="108" stroke="#0F766E" strokeWidth="2.2" />
        <polygon points="325,115 332,106 320,107" fill="#0F766E" />
        <text x="315" y="138" fontSize="10" fontWeight="700" fill="#0F766E">asigna</text>

        {/* P2 -> Impresora (solicita) */}
        <line x1="328" y1="68" x2="280" y2="40" stroke="#BE123C" strokeWidth="2.2" strokeDasharray="4 3" />
        <polygon points="287,39 277,39 282,48" fill="#BE123C" />
        <text x="318" y="44" fontSize="10" fontWeight="700" fill="#BE123C">solicita</text>
      </svg>
    ),
  },

  'avl-rr-imbalance': {
    caption: 'Figura: Árbol AVL tras insertar la secuencia 10, 20, 30',
    render: () => (
      <svg viewBox="0 0 420 190" className={svgBase} role="img" aria-label="Desbalanceo AVL">
        <rect x="6" y="6" width="408" height="178" rx="12" fill="#FAF7F2" stroke="#E5DEC9" />
        <line x1="140" y1="42" x2="210" y2="96" stroke="#1C1917" strokeWidth="2.2" />
        <line x1="210" y1="96" x2="280" y2="150" stroke="#1C1917" strokeWidth="2.2" />

        <circle cx="140" cy="42" r="20" fill="#FFE4E6" stroke="#BE123C" strokeWidth="2.4" />
        <text x="140" y="47" textAnchor="middle" fontSize="13.5" fontWeight="800" fill="#9F1239">10</text>
        <text x="86" y="46" fontSize="11" fontWeight="800" fill="#BE123C">FE = −2</text>

        <circle cx="210" cy="96" r="20" fill="#FEF3C7" stroke="#D97706" strokeWidth="2.2" />
        <text x="210" y="101" textAnchor="middle" fontSize="13.5" fontWeight="800" fill="#92400E">20</text>
        <text x="154" y="100" fontSize="11" fontWeight="800" fill="#B45309">FE = −1</text>

        <circle cx="280" cy="150" r="20" fill="#FFFFFF" stroke="#1C1917" strokeWidth="2" />
        <text x="280" y="155" textAnchor="middle" fontSize="13.5" fontWeight="800" fill="#1C1917">30</text>
        <text x="332" y="154" fontSize="11" fontWeight="700" fill="#57534E">FE = 0</text>
      </svg>
    ),
  },

  'mst-kruskal-graph': {
    caption: 'Figura: Red ponderada de 4 sucursales para cálculo de MST',
    render: () => (
      <svg viewBox="0 0 440 190" className={svgBase} role="img" aria-label="Grafo ponderado MST">
        <rect x="6" y="6" width="428" height="178" rx="12" fill="#FAF7F2" stroke="#E5DEC9" />
        {/* Aristas */}
        <line x1="120" y1="50" x2="320" y2="50" stroke="#57534E" strokeWidth="2.2" />
        <line x1="120" y1="50" x2="120" y2="146" stroke="#57534E" strokeWidth="2.2" />
        <line x1="320" y1="50" x2="120" y2="146" stroke="#57534E" strokeWidth="2.2" />
        <line x1="320" y1="50" x2="320" y2="146" stroke="#57534E" strokeWidth="2.2" />
        <line x1="120" y1="146" x2="320" y2="146" stroke="#57534E" strokeWidth="2.2" />

        {/* Pesos */}
        {[
          { x: 220, y: 40, w: '4' },
          { x: 102, y: 102, w: '1' },
          { x: 220, y: 92, w: '2' },
          { x: 338, y: 102, w: '5' },
          { x: 220, y: 164, w: '3' },
        ].map((e, i) => (
          <g key={i}>
            <rect x={e.x - 11} y={e.y - 12} width="22" height="18" rx="5" fill="#FEF3C7" stroke="#D97706" />
            <text x={e.x} y={e.y + 1} textAnchor="middle" fontSize="11.5" fontWeight="800" fill="#92400E">{e.w}</text>
          </g>
        ))}

        {/* Vértices */}
        {[
          { x: 120, y: 50, n: 'A' },
          { x: 320, y: 50, n: 'B' },
          { x: 120, y: 146, n: 'C' },
          { x: 320, y: 146, n: 'D' },
        ].map((v) => (
          <g key={v.n}>
            <circle cx={v.x} cy={v.y} r="19" fill="#FFFFFF" stroke="#4338CA" strokeWidth="2.4" />
            <text x={v.x} y={v.y + 5} textAnchor="middle" fontSize="14" fontWeight="800" fill="#1C1917">{v.n}</text>
          </g>
        ))}
      </svg>
    ),
  },

  // ==================== 17 DIAGRAMAS ADICIONALES (SIN SPOILERS) ====================
  'mosfet-relay-driver': {
    caption: 'Figura: Etapa de potencia con MOSFET canal N accionando bobina de relevador de 12 V',
    render: () => (
      <svg viewBox="0 0 460 215" className={svgBase} role="img" aria-label="MOSFET con relevador">
        <rect x="6" y="6" width="448" height="203" rx="12" fill="#FAF7F2" stroke="#E5DEC9" />
        {/* +12V rail */}
        <line x1="150" y1="28" x2="310" y2="28" stroke="#BE123C" strokeWidth="2.5" />
        <text x="230" y="22" textAnchor="middle" fontSize="12" fontWeight="800" fill="#BE123C">+12 V DC</text>
        {/* Bobina del relevador */}
        <line x1="200" y1="28" x2="200" y2="50" stroke="#1C1917" strokeWidth="2.2" />
        <rect x="172" y="50" width="56" height="54" rx="6" fill="#FFFFFF" stroke="#4338CA" strokeWidth="2.2" />
        <text x="200" y="75" textAnchor="middle" fontSize="11" fontWeight="800" fill="#312E81">Bobina</text>
        <text x="200" y="90" textAnchor="middle" fontSize="10" fill="#4338CA">Relevador</text>
        <line x1="200" y1="104" x2="200" y2="128" stroke="#1C1917" strokeWidth="2.2" />
        {/* Espacio faltante en paralelo */}
        <polyline points="200,38 286,38 286,58" fill="none" stroke="#D95D39" strokeWidth="1.8" strokeDasharray="4 3" />
        <rect x="252" y="58" width="70" height="38" rx="7" fill="#FFF7ED" stroke="#D95D39" strokeWidth="2" strokeDasharray="5 3" />
        <text x="287" y="81" textAnchor="middle" fontSize="12" fontWeight="900" fill="#D95D39">¿ ? ? ?</text>
        <polyline points="286,96 286,116 200,116" fill="none" stroke="#D95D39" strokeWidth="1.8" strokeDasharray="4 3" />
        {/* MOSFET bloque */}
        <rect x="158" y="128" width="84" height="44" rx="8" fill="#E0E7FF" stroke="#4338CA" strokeWidth="2" />
        <text x="200" y="148" textAnchor="middle" fontSize="11.5" fontWeight="800" fill="#1E1B4B">MOSFET</text>
        <text x="200" y="163" textAnchor="middle" fontSize="10" fill="#4338CA">Canal N (D/S)</text>
        {/* Gate */}
        <line x1="88" y1="150" x2="158" y2="150" stroke="#0F766E" strokeWidth="2.2" />
        <text x="58" y="154" textAnchor="middle" fontSize="11" fontWeight="800" fill="#0F766E">Control</text>
        {/* GND */}
        <line x1="200" y1="172" x2="200" y2="190" stroke="#1C1917" strokeWidth="2.2" />
        <line x1="186" y1="190" x2="214" y2="190" stroke="#1C1917" strokeWidth="2.2" />
        <line x1="191" y1="196" x2="209" y2="196" stroke="#1C1917" strokeWidth="2" />
      </svg>
    ),
  },

  'wheatstone-opamp': {
    caption: 'Figura: Puente de Wheatstone acoplado a amplificador de instrumentación con ruido en modo común',
    render: () => (
      <svg viewBox="0 0 500 190" className={svgBase} role="img" aria-label="Puente de Wheatstone y Op-Amp">
        <rect x="6" y="6" width="488" height="178" rx="12" fill="#FAF7F2" stroke="#E5DEC9" />
        {/* Rombo Wheatstone */}
        <polygon points="118,32 178,94 118,156 58,94" fill="#FFFFFF" stroke="#1C1917" strokeWidth="2" />
        <text x="80" y="60" fontSize="10.5" fontWeight="700" fill="#44403C">R1</text>
        <text x="148" y="60" fontSize="10.5" fontWeight="700" fill="#44403C">R2</text>
        <text x="80" y="136" fontSize="10.5" fontWeight="700" fill="#44403C">R3</text>
        <text x="148" y="136" fontSize="10.5" fontWeight="700" fill="#D95D39">Rx</text>
        <text x="118" y="24" textAnchor="middle" fontSize="10.5" fontWeight="800" fill="#BE123C">+Vexc</text>
        <text x="118" y="174" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="#57534E">GND</text>
        {/* Líneas diferenciales con ruido */}
        <line x1="178" y1="94" x2="288" y2="74" stroke="#4338CA" strokeWidth="2" />
        <line x1="58" y1="94" x2="58" y2="114" stroke="#4338CA" strokeWidth="1.8" />
        <polyline points="58,114 288,114" fill="none" stroke="#4338CA" strokeWidth="2" />
        <rect x="196" y="83" width="80" height="22" rx="6" fill="#FEF3C7" stroke="#D97706" />
        <text x="236" y="98" textAnchor="middle" fontSize="10" fontWeight="800" fill="#92400E">Ruido EMI</text>
        {/* Triángulo Op-Amp */}
        <polygon points="288,52 288,136 382,94" fill="#E0E7FF" stroke="#4338CA" strokeWidth="2.2" />
        <text x="300" y="80" fontSize="13" fontWeight="900" fill="#1E1B4B">+</text>
        <text x="300" y="118" fontSize="14" fontWeight="900" fill="#1E1B4B">−</text>
        <text x="330" y="98" textAnchor="middle" fontSize="10" fontWeight="800" fill="#312E81">In-Amp</text>
        {/* Salida */}
        <line x1="382" y1="94" x2="438" y2="94" stroke="#0F766E" strokeWidth="2.4" />
        <polygon points="433,89 443,94 433,99" fill="#0F766E" />
        <text x="466" y="98" textAnchor="middle" fontSize="12" fontWeight="800" fill="#0F766E">Vout</text>
      </svg>
    ),
  },

  'linear-psu-stages': {
    caption: 'Figura: Bloques secuenciales de una fuente de alimentación lineal regulada',
    render: () => (
      <svg viewBox="0 0 520 130" className={svgBase} role="img" aria-label="Etapas fuente lineal">
        <rect x="6" y="6" width="508" height="118" rx="12" fill="#FAF7F2" stroke="#E5DEC9" />
        {[
          { x: 18, t: '1. Transf.', s: 'Red AC', c: '#4338CA', bg: '#EEF2FF' },
          { x: 142, t: '2. Puente', s: 'Diodos', c: '#D95D39', bg: '#FFF7ED' },
          { x: 266, t: '3. Filtro', s: 'Capacitor', c: '#0F766E', bg: '#F0FDFA' },
          { x: 390, t: '4. Regulador', s: '78xx / LDO', c: '#7C2D12', bg: '#FEF3C7' },
        ].map((b, i) => (
          <g key={b.t}>
            <rect x={b.x} y="34" width="106" height="58" rx="9" fill={b.bg} stroke={b.c} strokeWidth="2" />
            <text x={b.x + 53} y="59" textAnchor="middle" fontSize="11.5" fontWeight="800" fill="#1C1917">{b.t}</text>
            <text x={b.x + 53} y="76" textAnchor="middle" fontSize="10" fontWeight="700" fill={b.c}>{b.s}</text>
            {i < 3 && (
              <>
                <line x1={b.x + 106} y1="63" x2={b.x + 124} y2="63" stroke="#1C1917" strokeWidth="2" />
                <polygon points={`${b.x + 119},59 ${b.x + 127},63 ${b.x + 119},67`} fill="#1C1917" />
              </>
            )}
          </g>
        ))}
      </svg>
    ),
  },

  'risc-pipeline-blank': {
    caption: 'Figura: Cauce segmentado (pipeline) de 5 etapas de un procesador RISC',
    render: () => (
      <svg viewBox="0 0 510 130" className={svgBase} role="img" aria-label="Pipeline RISC 5 etapas">
        <rect x="6" y="6" width="498" height="118" rx="12" fill="#FAF7F2" stroke="#E5DEC9" />
        {[0, 1, 2, 3, 4].map((i) => {
          const x = 18 + i * 96;
          return (
            <g key={i}>
              <rect x={x} y="34" width="80" height="56" rx="9" fill="#FFFFFF" stroke="#4338CA" strokeWidth="2" strokeDasharray="5 3" />
              <text x={x + 40} y="58" textAnchor="middle" fontSize="11.5" fontWeight="800" fill="#4338CA">
                Etapa {i + 1}
              </text>
              <text x={x + 40} y="75" textAnchor="middle" fontSize="12" fontWeight="900" fill="#D95D39">
                [ ? ]
              </text>
              <text x={x + 40} y="108" textAnchor="middle" fontSize="10" fontWeight="700" fill="#57534E">
                Ciclo T{i + 1}
              </text>
              {i < 4 && (
                <>
                  <line x1={x + 80} y1="62" x2={x + 95} y2="62" stroke="#1C1917" strokeWidth="2" />
                  <polygon points={`${x + 91},58 ${x + 98},62 ${x + 91},66`} fill="#1C1917" />
                </>
              )}
            </g>
          );
        })}
      </svg>
    ),
  },

  'isa95-pyramid': {
    caption: 'Figura: Niveles 0 a 3 de la pirámide de automatización industrial ISA-95',
    render: () => (
      <svg viewBox="0 0 460 195" className={svgBase} role="img" aria-label="Pirámide ISA-95">
        <rect x="6" y="6" width="448" height="183" rx="12" fill="#FAF7F2" stroke="#E5DEC9" />
        <polygon points="230,22 288,60 172,60" fill="#E0E7FF" stroke="#4338CA" strokeWidth="2" />
        <text x="230" y="51" textAnchor="middle" fontSize="10.5" fontWeight="800" fill="#312E81">Nivel 3 (MES)</text>

        <polygon points="172,64 288,64 330,100 130,100" fill="#CCFBF1" stroke="#0F766E" strokeWidth="2" />
        <text x="230" y="87" textAnchor="middle" fontSize="11" fontWeight="800" fill="#115E59">Nivel 2 — Supervisión</text>

        <polygon points="130,104 330,104 372,140 88,140" fill="#FEF3C7" stroke="#D97706" strokeWidth="2" />
        <text x="230" y="127" textAnchor="middle" fontSize="11" fontWeight="800" fill="#92400E">Nivel 1 — Control</text>

        <polygon points="88,144 372,144 414,178 46,178" fill="#FFE4E6" stroke="#BE123C" strokeWidth="2" />
        <text x="230" y="166" textAnchor="middle" fontSize="11" fontWeight="800" fill="#9F1239">Nivel 0 — Proceso / Campo</text>
      </svg>
    ),
  },

  's-plane-poles': {
    caption: 'Figura: Ubicación de los polos en el plano complejo s (s1 = −4, s2,3 = −1 ± 2j)',
    render: () => (
      <svg viewBox="0 0 440 205" className={svgBase} role="img" aria-label="Polos en plano complejo s">
        <rect x="6" y="6" width="428" height="193" rx="12" fill="#FAF7F2" stroke="#E5DEC9" />
        {/* Semiplano izquierdo sombreado sutil */}
        <rect x="24" y="20" width="266" height="164" fill="#F0FDFA" />
        {/* Ejes */}
        <line x1="24" y1="102" x2="410" y2="102" stroke="#1C1917" strokeWidth="2" />
        <line x1="290" y1="20" x2="290" y2="184" stroke="#1C1917" strokeWidth="2" />
        <text x="404" y="95" textAnchor="end" fontSize="11" fontWeight="800" fill="#1C1917">Re(s)</text>
        <text x="298" y="32" fontSize="11" fontWeight="800" fill="#1C1917">Im(s)</text>
        {/* Marcas */}
        <line x1="242" y1="97" x2="242" y2="107" stroke="#57534E" strokeWidth="1.5" />
        <text x="242" y="120" textAnchor="middle" fontSize="10" fontWeight="700" fill="#57534E">−1</text>
        <line x1="98" y1="97" x2="98" y2="107" stroke="#57534E" strokeWidth="1.5" />
        <text x="98" y="120" textAnchor="middle" fontSize="10" fontWeight="700" fill="#57534E">−4</text>
        <text x="304" y="58" fontSize="10" fontWeight="700" fill="#57534E">+2j</text>
        <text x="304" y="152" fontSize="10" fontWeight="700" fill="#57534E">−2j</text>
        {/* Guías */}
        <line x1="242" y1="54" x2="242" y2="150" stroke="#94A3B8" strokeWidth="1.2" strokeDasharray="3 3" />
        <line x1="242" y1="54" x2="290" y2="54" stroke="#94A3B8" strokeWidth="1.2" strokeDasharray="3 3" />
        <line x1="242" y1="150" x2="290" y2="150" stroke="#94A3B8" strokeWidth="1.2" strokeDasharray="3 3" />
        {/* Polos X */}
        {[[98, 102, 's1'], [242, 54, 's2'], [242, 150, 's3']].map(([x, y, lbl]) => (
          <g key={lbl}>
            <line x1={x - 6} y1={y - 6} x2={x + 6} y2={y + 6} stroke="#D95D39" strokeWidth="2.8" />
            <line x1={x + 6} y1={y - 6} x2={x - 6} y2={y + 6} stroke="#D95D39" strokeWidth="2.8" />
            <text x={x - 16} y={y - 10} fontSize="11" fontWeight="800" fill="#9A3412">{lbl}</text>
          </g>
        ))}
      </svg>
    ),
  },

  'vlsm-block-map': {
    caption: 'Figura: Esquema de subdivisión VLSM del bloque 172.16.40.0/22 en orden descendente',
    render: () => (
      <svg viewBox="0 0 510 130" className={svgBase} role="img" aria-label="Mapa VLSM">
        <rect x="6" y="6" width="498" height="118" rx="12" fill="#FAF7F2" stroke="#E5DEC9" />
        <text x="255" y="28" textAnchor="middle" fontSize="12" fontWeight="800" fill="#1C1917">
          Bloque raíz: 172.16.40.0/22 (1024 direcciones)
        </text>
        <rect x="20" y="42" width="175" height="58" fill="#E0E7FF" stroke="#4338CA" strokeWidth="2" />
        <text x="107" y="67" textAnchor="middle" fontSize="11.5" fontWeight="800" fill="#312E81">Depto A</text>
        <text x="107" y="84" textAnchor="middle" fontSize="10" fill="#4338CA">200 hosts</text>

        <rect x="195" y="42" width="115" height="58" fill="#CCFBF1" stroke="#0F766E" strokeWidth="2" />
        <text x="252" y="67" textAnchor="middle" fontSize="11.5" fontWeight="800" fill="#115E59">Depto B</text>
        <text x="252" y="84" textAnchor="middle" fontSize="10" fill="#0F766E">110 hosts</text>

        <rect x="310" y="42" width="76" height="58" fill="#FEF3C7" stroke="#D97706" strokeWidth="2" />
        <text x="348" y="67" textAnchor="middle" fontSize="11" fontWeight="800" fill="#92400E">Depto C</text>
        <text x="348" y="84" textAnchor="middle" fontSize="10" fill="#B45309">25 hosts</text>

        <rect x="386" y="42" width="104" height="58" fill="#FFF7ED" stroke="#D95D39" strokeWidth="2.2" strokeDasharray="5 3" />
        <text x="438" y="66" textAnchor="middle" fontSize="11" fontWeight="800" fill="#D95D39">WAN (2 hosts)</text>
        <text x="438" y="84" textAnchor="middle" fontSize="11" fontWeight="900" fill="#9A3412">¿Red / Prefijo?</text>
      </svg>
    ),
  },

  'campus-3tier-arch': {
    caption: 'Figura: Diseño jerárquico de campus de tres capas',
    render: () => (
      <svg viewBox="0 0 460 190" className={svgBase} role="img" aria-label="Diseño jerárquico 3 capas">
        <rect x="6" y="6" width="448" height="178" rx="12" fill="#FAF7F2" stroke="#E5DEC9" />
        {/* Core */}
        <rect x="140" y="22" width="180" height="38" rx="8" fill="#E0E7FF" stroke="#4338CA" strokeWidth="2" />
        <text x="230" y="45" textAnchor="middle" fontSize="12" fontWeight="800" fill="#312E81">Capa de Núcleo (Core)</text>
        {/* Distribución */}
        <line x1="185" y1="60" x2="145" y2="82" stroke="#57534E" strokeWidth="2" />
        <line x1="275" y1="60" x2="315" y2="82" stroke="#57534E" strokeWidth="2" />
        <rect x="70" y="82" width="320" height="38" rx="8" fill="#FEF3C7" stroke="#D97706" strokeWidth="2" />
        <text x="230" y="105" textAnchor="middle" fontSize="12" fontWeight="800" fill="#92400E">Capa de Distribución</text>
        {/* Acceso */}
        <line x1="120" y1="120" x2="120" y2="140" stroke="#57534E" strokeWidth="2" />
        <line x1="230" y1="120" x2="230" y2="140" stroke="#57534E" strokeWidth="2" />
        <line x1="340" y1="120" x2="340" y2="140" stroke="#57534E" strokeWidth="2" />
        <rect x="30" y="140" width="400" height="34" rx="8" fill="#CCFBF1" stroke="#0F766E" strokeWidth="2" />
        <text x="230" y="161" textAnchor="middle" fontSize="12" fontWeight="800" fill="#115E59">Capa de Acceso (Usuarios finales)</text>
      </svg>
    ),
  },

  'tcp-3way-blank': {
    caption: 'Figura: Secuencia temporal del establecimiento de sesión TCP (3 vías)',
    render: () => (
      <svg viewBox="0 0 440 190" className={svgBase} role="img" aria-label="Handshake TCP">
        <rect x="6" y="6" width="428" height="178" rx="12" fill="#FAF7F2" stroke="#E5DEC9" />
        <rect x="52" y="20" width="96" height="30" rx="7" fill="#4338CA" />
        <text x="100" y="39" textAnchor="middle" fontSize="12" fontWeight="800" fill="#FFFFFF">Cliente</text>
        <rect x="292" y="20" width="96" height="30" rx="7" fill="#0F766E" />
        <text x="340" y="39" textAnchor="middle" fontSize="12" fontWeight="800" fill="#FFFFFF">Servidor</text>

        <line x1="100" y1="50" x2="100" y2="170" stroke="#4338CA" strokeWidth="2" strokeDasharray="4 3" />
        <line x1="340" y1="50" x2="340" y2="170" stroke="#0F766E" strokeWidth="2" strokeDasharray="4 3" />

        {/* Flecha 1 */}
        <line x1="100" y1="74" x2="334" y2="94" stroke="#1C1917" strokeWidth="2.2" />
        <polygon points="328,89 338,94 328,98" fill="#1C1917" />
        <text x="220" y="76" textAnchor="middle" fontSize="11" fontWeight="800" fill="#D95D39">Paso 1 (?)</text>

        {/* Flecha 2 */}
        <line x1="340" y1="108" x2="106" y2="128" stroke="#1C1917" strokeWidth="2.2" />
        <polygon points="112,123 102,128 112,132" fill="#1C1917" />
        <text x="220" y="110" textAnchor="middle" fontSize="11" fontWeight="800" fill="#D95D39">Paso 2 (?)</text>

        {/* Flecha 3 */}
        <line x1="100" y1="142" x2="334" y2="162" stroke="#1C1917" strokeWidth="2.2" />
        <polygon points="328,157 338,162 328,166" fill="#1C1917" />
        <text x="220" y="144" textAnchor="middle" fontSize="11" fontWeight="800" fill="#D95D39">Paso 3 (?)</text>
      </svg>
    ),
  },

  'trunk-8021q-mismatch': {
    caption: 'Figura: Enlace troncal IEEE 802.1Q con discrepancia de VLAN nativa',
    render: () => (
      <svg viewBox="0 0 480 140" className={svgBase} role="img" aria-label="Trunk 802.1Q mismatch">
        <rect x="6" y="6" width="468" height="128" rx="12" fill="#FAF7F2" stroke="#E5DEC9" />
        <rect x="24" y="40" width="128" height="60" rx="9" fill="#0F766E" />
        <text x="88" y="66" textAnchor="middle" fontSize="13" fontWeight="800" fill="#FFFFFF">SW1</text>
        <text x="88" y="84" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="#CCFBF1">Native VLAN: 99</text>

        <line x1="152" y1="70" x2="328" y2="70" stroke="#BE123C" strokeWidth="3" strokeDasharray="6 4" />
        <rect x="180" y="48" width="120" height="42" rx="8" fill="#FFE4E6" stroke="#BE123C" strokeWidth="1.8" />
        <text x="240" y="67" textAnchor="middle" fontSize="10.5" fontWeight="800" fill="#9F1239">Trunk 802.1Q</text>
        <text x="240" y="81" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="#BE123C">⚠ MISMATCH</text>

        <rect x="328" y="40" width="128" height="60" rx="9" fill="#4338CA" />
        <text x="392" y="66" textAnchor="middle" fontSize="13" fontWeight="800" fill="#FFFFFF">SW2</text>
        <text x="392" y="84" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="#E0E7FF">Native VLAN: 1</text>
      </svg>
    ),
  },

  'router-on-a-stick': {
    caption: 'Figura: Topología Router-on-a-Stick con subinterfaces Gig0/0.20 y Gig0/0.30',
    render: () => (
      <svg viewBox="0 0 460 195" className={svgBase} role="img" aria-label="Router on a Stick">
        <rect x="6" y="6" width="448" height="183" rx="12" fill="#FAF7F2" stroke="#E5DEC9" />
        <ellipse cx="230" cy="40" rx="54" ry="20" fill="#4338CA" stroke="#1E1B4B" strokeWidth="2" />
        <text x="230" y="44" textAnchor="middle" fontSize="12" fontWeight="800" fill="#FFFFFF">Router</text>
        <text x="352" y="34" textAnchor="middle" fontSize="10" fontWeight="800" fill="#BE123C">Gig0/0.20 (down)</text>
        <text x="352" y="49" textAnchor="middle" fontSize="10" fontWeight="800" fill="#BE123C">Gig0/0.30 (down)</text>

        <line x1="230" y1="60" x2="230" y2="104" stroke="#1C1917" strokeWidth="2.4" />
        <text x="172" y="86" textAnchor="middle" fontSize="10" fontWeight="700" fill="#4338CA">Trunk 802.1Q</text>

        <rect x="166" y="104" width="128" height="32" rx="7" fill="#0F766E" />
        <text x="230" y="124" textAnchor="middle" fontSize="12" fontWeight="800" fill="#FFFFFF">Switch L2</text>

        <line x1="196" y1="136" x2="124" y2="156" stroke="#57534E" strokeWidth="2" />
        <line x1="264" y1="136" x2="336" y2="156" stroke="#57534E" strokeWidth="2" />

        <rect x="64" y="156" width="120" height="24" rx="6" fill="#E0E7FF" stroke="#4338CA" />
        <text x="124" y="172" textAnchor="middle" fontSize="11" fontWeight="800" fill="#312E81">VLAN 20</text>
        <rect x="276" y="156" width="120" height="24" rx="6" fill="#FEF3C7" stroke="#D97706" />
        <text x="336" y="172" textAnchor="middle" fontSize="11" fontWeight="800" fill="#92400E">VLAN 30</text>
      </svg>
    ),
  },

  'dfd-symbols-blank': {
    caption: 'Figura: Flujo de información en facturación electrónica (símbolos Yourdon-DeMarco por identificar)',
    render: () => (
      <svg viewBox="0 0 500 165" className={svgBase} role="img" aria-label="DFD símbolos en blanco">
        <rect x="6" y="6" width="488" height="153" rx="12" fill="#FAF7F2" stroke="#E5DEC9" />
        <rect x="22" y="54" width="128" height="56" rx="8" fill="#FFFFFF" stroke="#D95D39" strokeWidth="2" strokeDasharray="5 3" />
        <text x="86" y="78" textAnchor="middle" fontSize="11" fontWeight="800" fill="#D95D39">(1) Símbolo ¿?</text>
        <text x="86" y="96" textAnchor="middle" fontSize="10" fill="#57534E">Cálculo impuestos</text>

        <line x1="150" y1="82" x2="186" y2="82" stroke="#1C1917" strokeWidth="2" />
        <polygon points="181,78 189,82 181,86" fill="#1C1917" />

        <rect x="190" y="54" width="126" height="56" rx="8" fill="#FFFFFF" stroke="#4338CA" strokeWidth="2" strokeDasharray="5 3" />
        <text x="253" y="78" textAnchor="middle" fontSize="11" fontWeight="800" fill="#4338CA">(2) Símbolo ¿?</text>
        <text x="253" y="96" textAnchor="middle" fontSize="10" fill="#57534E">Archivo clientes</text>

        <line x1="316" y1="82" x2="352" y2="82" stroke="#1C1917" strokeWidth="2" />
        <polygon points="347,78 355,82 347,86" fill="#1C1917" />

        <rect x="356" y="54" width="122" height="56" rx="8" fill="#FFFFFF" stroke="#0F766E" strokeWidth="2" strokeDasharray="5 3" />
        <text x="417" y="78" textAnchor="middle" fontSize="11" fontWeight="800" fill="#0F766E">(3) Símbolo ¿?</text>
        <text x="417" y="96" textAnchor="middle" fontSize="10" fill="#57534E">SAT (Externo)</text>
      </svg>
    ),
  },

  'is-hierarchy-pyramid': {
    caption: 'Figura: Pirámide jerárquica de Sistemas de Información en la organización',
    render: () => (
      <svg viewBox="0 0 460 195" className={svgBase} role="img" aria-label="Pirámide Sistemas de Información">
        <rect x="6" y="6" width="448" height="183" rx="12" fill="#FAF7F2" stroke="#E5DEC9" />
        <polygon points="230,20 292,58 168,58" fill="#E0E7FF" stroke="#4338CA" strokeWidth="2" />
        <text x="230" y="49" textAnchor="middle" fontSize="10.5" fontWeight="800" fill="#312E81">4. Estratégico (?)</text>

        <polygon points="168,62 292,62 334,98 126,98" fill="#CCFBF1" stroke="#0F766E" strokeWidth="2" />
        <text x="230" y="85" textAnchor="middle" fontSize="11" fontWeight="800" fill="#115E59">3. Administrativo / Gerencial (?)</text>

        <polygon points="126,102 334,102 376,138 84,138" fill="#FEF3C7" stroke="#D97706" strokeWidth="2" />
        <text x="230" y="125" textAnchor="middle" fontSize="11" fontWeight="800" fill="#92400E">2. Conocimiento (?)</text>

        <polygon points="84,142 376,142 418,178 42,178" fill="#FFE4E6" stroke="#BE123C" strokeWidth="2" />
        <text x="230" y="165" textAnchor="middle" fontSize="11" fontWeight="800" fill="#9F1239">1. Operativo (?)</text>
      </svg>
    ),
  },

  'uml-usecase-bank': {
    caption: 'Figura: Diagrama de Casos de Uso UML (relaciones obligatoria y opcional por identificar)',
    render: () => (
      <svg viewBox="0 0 500 185" className={svgBase} role="img" aria-label="Casos de uso UML">
        <rect x="6" y="6" width="488" height="173" rx="12" fill="#FAF7F2" stroke="#E5DEC9" />
        {/* Actor */}
        <circle cx="48" cy="70" r="10" fill="#FFFFFF" stroke="#1C1917" strokeWidth="2" />
        <line x1="48" y1="80" x2="48" y2="112" stroke="#1C1917" strokeWidth="2" />
        <line x1="34" y1="92" x2="62" y2="92" stroke="#1C1917" strokeWidth="2" />
        <line x1="48" y1="112" x2="36" y2="130" stroke="#1C1917" strokeWidth="2" />
        <line x1="48" y1="112" x2="60" y2="130" stroke="#1C1917" strokeWidth="2" />
        <text x="48" y="146" textAnchor="middle" fontSize="10.5" fontWeight="800" fill="#1C1917">Cliente</text>

        <line x1="66" y1="94" x2="114" y2="94" stroke="#1C1917" strokeWidth="1.8" />

        {/* Caso base */}
        <ellipse cx="182" cy="94" rx="68" ry="26" fill="#E0E7FF" stroke="#4338CA" strokeWidth="2" />
        <text x="182" y="91" textAnchor="middle" fontSize="11" fontWeight="800" fill="#312E81">Transferir</text>
        <text x="182" y="105" textAnchor="middle" fontSize="11" fontWeight="800" fill="#312E81">fondos</text>

        {/* Flecha obligatoria hacia Autenticar */}
        <line x1="244" y1="80" x2="340" y2="54" stroke="#0F766E" strokeWidth="2" strokeDasharray="5 3" />
        <polygon points="333,52 343,53 336,60" fill="#0F766E" />
        <text x="292" y="54" textAnchor="middle" fontSize="10" fontWeight="800" fill="#0F766E">« ? siempre »</text>
        <ellipse cx="412" cy="50" rx="68" ry="24" fill="#CCFBF1" stroke="#0F766E" strokeWidth="2" />
        <text x="412" y="47" textAnchor="middle" fontSize="10.5" fontWeight="800" fill="#115E59">Autenticar</text>
        <text x="412" y="60" textAnchor="middle" fontSize="10.5" fontWeight="800" fill="#115E59">con token</text>

        {/* Flecha opcional desde Imprimir PDF */}
        <line x1="342" y1="136" x2="246" y2="108" stroke="#D95D39" strokeWidth="2" strokeDasharray="5 3" />
        <polygon points="253,106 243,107 250,114" fill="#D95D39" />
        <text x="292" y="140" textAnchor="middle" fontSize="10" fontWeight="800" fill="#D95D39">« ? opcional »</text>
        <ellipse cx="412" cy="140" rx="68" ry="24" fill="#FEF3C7" stroke="#D97706" strokeWidth="2" />
        <text x="412" y="137" textAnchor="middle" fontSize="10.5" fontWeight="800" fill="#92400E">Imprimir</text>
        <text x="412" y="150" textAnchor="middle" fontSize="10.5" fontWeight="800" fill="#92400E">comprobante</text>
      </svg>
    ),
  },

  'lru-page-frames': {
    caption: 'Figura: Cadena de referencias de página y 3 marcos físicos inicialmente vacíos (LRU)',
    render: () => (
      <svg viewBox="0 0 480 155" className={svgBase} role="img" aria-label="Marcos de memoria LRU">
        <rect x="6" y="6" width="468" height="143" rx="12" fill="#FAF7F2" stroke="#E5DEC9" />
        <text x="24" y="34" fontSize="11.5" fontWeight="800" fill="#57534E">Referencias:</text>
        {['7', '0', '1', '2', '0', '3'].map((p, i) => (
          <g key={i}>
            <rect x={118 + i * 54} y="16" width="38" height="28" rx="6" fill="#E0E7FF" stroke="#4338CA" strokeWidth="1.8" />
            <text x={137 + i * 54} y="35" textAnchor="middle" fontSize="13" fontWeight="800" fill="#312E81">{p}</text>
          </g>
        ))}
        {/* 3 Marcos */}
        {['Marco 1', 'Marco 2', 'Marco 3'].map((m, r) => (
          <g key={m}>
            <text x="24" y={74 + r * 28} fontSize="11" fontWeight="700" fill="#1C1917">{m}</text>
            {[0, 1, 2, 3, 4, 5].map((c) => (
              <rect
                key={c}
                x={118 + c * 54}
                y={56 + r * 28}
                width="38"
                height="24"
                rx="4"
                fill="#FFFFFF"
                stroke="#D6CFC2"
                strokeWidth="1.5"
              />
            ))}
          </g>
        ))}
      </svg>
    ),
  },

  'backup-timeline-diff': {
    caption: 'Figura: Calendario de respaldos (Full domingo + Diferenciales lun-mié) y falla el jueves',
    render: () => (
      <svg viewBox="0 0 510 135" className={svgBase} role="img" aria-label="Línea de tiempo respaldos">
        <rect x="6" y="6" width="498" height="123" rx="12" fill="#FAF7F2" stroke="#E5DEC9" />
        <line x1="42" y1="68" x2="468" y2="68" stroke="#57534E" strokeWidth="2.5" />
        {[
          { x: 58, d: 'Dom', t: 'FULL', bg: '#CCFBF1', st: '#0F766E', tx: '#115E59' },
          { x: 156, d: 'Lun', t: 'Dif #1', bg: '#E0E7FF', st: '#4338CA', tx: '#312E81' },
          { x: 254, d: 'Mar', t: 'Dif #2', bg: '#E0E7FF', st: '#4338CA', tx: '#312E81' },
          { x: 352, d: 'Mié', t: 'Dif #3', bg: '#E0E7FF', st: '#4338CA', tx: '#312E81' },
          { x: 450, d: 'Jue', t: 'FALLA', bg: '#FFE4E6', st: '#BE123C', tx: '#9F1239' },
        ].map((n) => (
          <g key={n.d}>
            <rect x={n.x - 38} y="42" width="76" height="50" rx="9" fill={n.bg} stroke={n.st} strokeWidth="2" />
            <text x={n.x} y="63" textAnchor="middle" fontSize="11" fontWeight="800" fill="#1C1917">{n.d}</text>
            <text x={n.x} y="80" textAnchor="middle" fontSize="11" fontWeight="900" fill={n.tx}>{n.t}</text>
          </g>
        ))}
      </svg>
    ),
  },

  'ansi-sparc-3levels': {
    caption: 'Figura: Arquitectura de tres niveles ANSI/SPARC para sistemas de bases de datos',
    render: () => (
      <svg viewBox="0 0 460 195" className={svgBase} role="img" aria-label="Arquitectura ANSI SPARC">
        <rect x="6" y="6" width="448" height="183" rx="12" fill="#FAF7F2" stroke="#E5DEC9" />
        {[
          { y: 20, n: '1. Nivel ________', desc: 'Vistas personalizadas por grupo de usuarios', c: '#4338CA', bg: '#EEF2FF' },
          { y: 78, n: '2. Nivel ________', desc: 'Estructura lógica global independiente del hardware', c: '#0F766E', bg: '#F0FDFA' },
          { y: 136, n: '3. Nivel ________', desc: 'Almacenamiento físico de registros e índices en disco', c: '#D95D39', bg: '#FFF7ED' },
        ].map((lvl, i) => (
          <g key={i}>
            <rect x="46" y={lvl.y} width="368" height="44" rx="9" fill={lvl.bg} stroke={lvl.c} strokeWidth="2" strokeDasharray="5 3" />
            <text x="230" y={lvl.y + 19} textAnchor="middle" fontSize="12" fontWeight="800" fill={lvl.c}>{lvl.n}</text>
            <text x="230" y={lvl.y + 35} textAnchor="middle" fontSize="10.5" fill="#44403C">{lvl.desc}</text>
          </g>
        ))}
      </svg>
    ),
  },
};

export function SimulacroDiagram({ diagramId }) {
  if (!diagramId) return null;
  const entry = DIAGRAM_REGISTRY[diagramId];
  if (!entry) return null;

  return (
    <figure className="my-4 bg-white border border-[#E5DEC9] rounded-2xl p-3 sm:p-4 shadow-sm">
      <div className="overflow-x-auto">{entry.render()}</div>
      {entry.caption && (
        <figcaption className="text-[11px] font-semibold text-stone-500 text-center mt-2">
          {entry.caption}
        </figcaption>
      )}
    </figure>
  );
}

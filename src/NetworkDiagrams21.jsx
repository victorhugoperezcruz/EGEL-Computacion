import React from 'react';

/**
 * Diagramas SVG visuales de alta retención para la Subárea 2.1: Diseño y direccionamiento de redes.
 * Diseñados con gráficos esquemáticos, iconos, flujos y claves visuales (no tablas de puro texto).
 */

export function TopologiesDiagram() {
  return (
    <svg viewBox="0 0 820 265" className="w-full h-auto" role="img" aria-label="Topologías físicas y lógicas de red">
      <rect width="820" height="265" rx="14" fill="#FAF7F2" />

      {/* 1. Estrella (Star) */}
      <g transform="translate(12, 12)">
        <rect width="190" height="241" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="170" height="24" rx="6" fill="#0F766E" />
        <text x="95" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="800">1. ESTRELLA (STAR)</text>

        <line x1="95" y1="115" x2="40" y2="62" stroke="#0F766E" strokeWidth="2.2" />
        <line x1="95" y1="115" x2="150" y2="62" stroke="#0F766E" strokeWidth="2.2" />
        <line x1="95" y1="115" x2="40" y2="168" stroke="#0F766E" strokeWidth="2.2" />
        <line x1="95" y1="115" x2="150" y2="168" stroke="#DC2626" strokeWidth="2.2" strokeDasharray="4 3" />

        <rect x="65" y="99" width="60" height="32" rx="6" fill="#134E4A" stroke="#0F766E" strokeWidth="2" />
        <text x="95" y="114" textAnchor="middle" fill="#FFFFFF" fontSize="9.5" fontWeight="800">SWITCH L2</text>
        <text x="95" y="125" textAnchor="middle" fill="#99F6E4" fontSize="7.5" fontWeight="700">Nodo Central</text>

        {[
          { x: 40, y: 62, label: 'PC 1', ok: true },
          { x: 150, y: 62, label: 'PC 2', ok: true },
          { x: 40, y: 168, label: 'PC 3', ok: true },
          { x: 150, y: 168, label: 'PC 4', ok: false },
        ].map((n, i) => (
          <g key={i}>
            <circle cx={n.x} cy={n.y} r="15" fill={n.ok ? '#CCFBF1' : '#FEE2E2'} stroke={n.ok ? '#0F766E' : '#DC2626'} strokeWidth="2" />
            <text x={n.x} y={n.y + 3} textAnchor="middle" fill="#1C1917" fontSize="9" fontWeight="800">{n.label}</text>
          </g>
        ))}
        <text x="128" y="146" fill="#DC2626" fontSize="8" fontWeight="800">✗ Fallo aislado</text>

        <text x="95" y="204" textAnchor="middle" fill="#1C1917" fontSize="9.5" fontWeight="800">Estándar en LAN moderna</text>
        <text x="95" y="218" textAnchor="middle" fill="#57534E" fontSize="8.5">Si cae 1 cable no afecta al resto.</text>
        <text x="95" y="230" textAnchor="middle" fill="#B45309" fontSize="8.5" fontWeight="700">Switch = Punto único de fallo</text>
      </g>

      {/* 2. Malla Completa (Full Mesh) */}
      <g transform="translate(214, 12)">
        <rect width="190" height="241" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="170" height="24" rx="6" fill="#B45309" />
        <text x="95" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="800">2. MALLA COMPLETA</text>

        <line x1="45" y1="66" x2="145" y2="66" stroke="#D97706" strokeWidth="2" />
        <line x1="45" y1="162" x2="145" y2="162" stroke="#D97706" strokeWidth="2" />
        <line x1="45" y1="66" x2="45" y2="162" stroke="#D97706" strokeWidth="2" />
        <line x1="145" y1="66" x2="145" y2="162" stroke="#D97706" strokeWidth="2" />
        <line x1="45" y1="66" x2="145" y2="162" stroke="#D97706" strokeWidth="2" />
        <line x1="145" y1="66" x2="45" y2="162" stroke="#D97706" strokeWidth="2" />

        {[
          { x: 45, y: 66, label: 'R1' },
          { x: 145, y: 66, label: 'R2' },
          { x: 45, y: 162, label: 'R3' },
          { x: 145, y: 162, label: 'R4' },
        ].map((n, i) => (
          <g key={i}>
            <circle cx={n.x} cy={n.y} r="15" fill="#FEF3C7" stroke="#B45309" strokeWidth="2" />
            <text x={n.x} y={n.y + 3} textAnchor="middle" fill="#78350F" fontSize="9.5" fontWeight="800">{n.label}</text>
          </g>
        ))}

        <rect x="24" y="185" width="142" height="20" rx="5" fill="#FFFBEB" stroke="#F59E0B" />
        <text x="95" y="198" textAnchor="middle" fill="#92400E" fontSize="9.5" fontWeight="800">Enlaces = N·(N - 1) / 2</text>
        <text x="95" y="216" textAnchor="middle" fill="#57534E" fontSize="8.5">Ej: N=4 → 6 enlaces | N=5 → 10</text>
        <text x="95" y="230" textAnchor="middle" fill="#0F766E" fontSize="8.5" fontWeight="700">Máxima redundancia (Core WAN)</text>
      </g>

      {/* 3. Bus */}
      <g transform="translate(416, 12)">
        <rect width="190" height="241" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="170" height="24" rx="6" fill="#44403C" />
        <text x="95" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="800">3. TOPOLOGÍA EN BUS</text>

        <line x1="25" y1="115" x2="165" y2="115" stroke="#1C1917" strokeWidth="4" />
        <rect x="17" y="107" width="8" height="16" fill="#DC2626" />
        <rect x="165" y="107" width="8" height="16" fill="#DC2626" />
        <text x="95" y="108" textAnchor="middle" fill="#78716C" fontSize="8" fontWeight="700">Coaxial Común + Terminadores</text>

        <line x1="48" y1="115" x2="48" y2="72" stroke="#44403C" strokeWidth="2" />
        <line x1="95" y1="115" x2="95" y2="158" stroke="#44403C" strokeWidth="2" />
        <line x1="142" y1="115" x2="142" y2="72" stroke="#44403C" strokeWidth="2" />

        {[
          { x: 48, y: 60, label: 'H1' },
          { x: 95, y: 170, label: 'H2' },
          { x: 142, y: 60, label: 'H3' },
        ].map((n, i) => (
          <g key={i}>
            <circle cx={n.x} cy={n.y} r="13" fill="#F5F5F4" stroke="#44403C" strokeWidth="2" />
            <text x={n.x} y={n.y + 3} textAnchor="middle" fill="#1C1917" fontSize="9" fontWeight="800">{n.label}</text>
          </g>
        ))}

        <text x="95" y="204" textAnchor="middle" fill="#1C1917" fontSize="9.5" fontWeight="800">Medio Físico Compartido</text>
        <text x="95" y="218" textAnchor="middle" fill="#57534E" fontSize="8.5">1 solo dominio de colisión.</text>
        <text x="95" y="230" textAnchor="middle" fill="#DC2626" fontSize="8.5" fontWeight="700">Corte en troncal tumba la red</text>
      </g>

      {/* 4. Anillo (Ring) */}
      <g transform="translate(618, 12)">
        <rect width="190" height="241" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="170" height="24" rx="6" fill="#4338CA" />
        <text x="95" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="800">4. ANILLO (TOKEN RING)</text>

        <circle cx="95" cy="115" r="46" fill="none" stroke="#4338CA" strokeWidth="2.5" strokeDasharray="6 3" />
        <text x="95" y="114" textAnchor="middle" fill="#4338CA" fontSize="9" fontWeight="800">Paso de Testigo</text>
        <text x="95" y="125" textAnchor="middle" fill="#6366F1" fontSize="8" fontWeight="700">(Token ↻)</text>

        {[
          { x: 95, y: 69, label: 'N1' },
          { x: 141, y: 115, label: 'N2' },
          { x: 95, y: 161, label: 'N3' },
          { x: 49, y: 115, label: 'N4' },
        ].map((n, i) => (
          <g key={i}>
            <circle cx={n.x} cy={n.y} r="13" fill="#EEF2FF" stroke="#4338CA" strokeWidth="2" />
            <text x={n.x} y={n.y + 3} textAnchor="middle" fill="#312E81" fontSize="9" fontWeight="800">{n.label}</text>
          </g>
        ))}

        <text x="95" y="204" textAnchor="middle" fill="#1C1917" fontSize="9.5" fontWeight="800">Bucle Cerrado Secuencial</text>
        <text x="95" y="218" textAnchor="middle" fill="#57534E" fontSize="8.5">Transmite quien posee el Token.</text>
        <text x="95" y="230" textAnchor="middle" fill="#4338CA" fontSize="8.5" fontWeight="700">FDDI / SONET usan doble anillo</text>
      </g>
    </svg>
  );
}

export function CiscoThreeTierDiagram() {
  return (
    <svg viewBox="0 0 820 285" className="w-full h-auto" role="img" aria-label="Diseño jerárquico de 3 capas de Cisco: Acceso, Distribución y Núcleo">
      <rect width="820" height="285" rx="14" fill="#FAF7F2" />

      {/* CAPA 3: NÚCLEO (CORE) */}
      <rect x="16" y="14" width="788" height="76" rx="10" fill="#FFFBEB" stroke="#F59E0B" strokeWidth="1.5" />
      <rect x="28" y="24" width="165" height="56" rx="8" fill="#B45309" />
      <text x="110" y="47" textAnchor="middle" fill="#FFFFFF" fontSize="11.5" fontWeight="800">N — NÚCLEO (CORE)</text>
      <text x="110" y="63" textAnchor="middle" fill="#FEF3C7" fontSize="9" fontWeight="700">Autopista 100 Gbps</text>

      <rect x="228" y="28" width="112" height="46" rx="8" fill="#FFFFFF" stroke="#B45309" strokeWidth="2" />
      <text x="284" y="48" textAnchor="middle" fill="#78350F" fontSize="10" fontWeight="800">Core A</text>
      <text x="284" y="62" textAnchor="middle" fill="#B45309" fontSize="8.5" fontWeight="700">⚡ Fibra 100G</text>

      <line x1="340" y1="51" x2="412" y2="51" stroke="#D97706" strokeWidth="4" />
      <text x="376" y="43" textAnchor="middle" fill="#92400E" fontSize="8" fontWeight="800">Redundante</text>

      <rect x="412" y="28" width="112" height="46" rx="8" fill="#FFFFFF" stroke="#B45309" strokeWidth="2" />
      <text x="468" y="48" textAnchor="middle" fill="#78350F" fontSize="10" fontWeight="800">Core B</text>
      <text x="468" y="62" textAnchor="middle" fill="#B45309" fontSize="8.5" fontWeight="700">⚡ Fibra 100G</text>

      {/* Chips visuales Core */}
      <rect x="548" y="26" width="240" height="22" rx="6" fill="#FEF3C7" stroke="#D97706" />
      <text x="668" y="41" textAnchor="middle" fill="#78350F" fontSize="9.2" fontWeight="800">⚡ Solo velocidad máxima (baja latencia)</text>
      <rect x="548" y="54" width="240" height="22" rx="6" fill="#FEE2E2" stroke="#DC2626" />
      <text x="668" y="69" textAnchor="middle" fill="#991B1B" fontSize="9.2" fontWeight="800">✗ Prohibido poner ACLs lentas aquí</text>

      {/* Enlaces cruzados redundantes Core -> Dist */}
      <line x1="284" y1="74" x2="265" y2="118" stroke="#0F766E" strokeWidth="2.2" />
      <line x1="284" y1="74" x2="488" y2="118" stroke="#0F766E" strokeWidth="2.2" />
      <line x1="468" y1="74" x2="265" y2="118" stroke="#0F766E" strokeWidth="2.2" />
      <line x1="468" y1="74" x2="488" y2="118" stroke="#0F766E" strokeWidth="2.2" />

      {/* CAPA 2: DISTRIBUCIÓN */}
      <rect x="16" y="105" width="788" height="76" rx="10" fill="#F0FDFA" stroke="#14B8A6" strokeWidth="1.5" />
      <rect x="28" y="115" width="165" height="56" rx="8" fill="#0F766E" />
      <text x="110" y="138" textAnchor="middle" fill="#FFFFFF" fontSize="11.5" fontWeight="800">D — DISTRIBUCIÓN</text>
      <text x="110" y="154" textAnchor="middle" fill="#CCFBF1" fontSize="9" fontWeight="700">Políticas y Ruteo L3</text>

      <rect x="214" y="118" width="102" height="48" rx="8" fill="#FFFFFF" stroke="#0F766E" strokeWidth="2" />
      <text x="265" y="138" textAnchor="middle" fill="#134E4A" fontSize="9.5" fontWeight="800">Switch L3-1</text>
      <text x="265" y="153" textAnchor="middle" fill="#0F766E" fontSize="8" fontWeight="700">🛡️ ACLs • QoS</text>

      <line x1="316" y1="142" x2="436" y2="142" stroke="#0F766E" strokeWidth="2.5" strokeDasharray="5 3" />
      <text x="376" y="135" textAnchor="middle" fill="#134E4A" fontSize="8.5" fontWeight="800">HSRP / VRRP</text>

      <rect x="436" y="118" width="102" height="48" rx="8" fill="#FFFFFF" stroke="#0F766E" strokeWidth="2" />
      <text x="487" y="138" textAnchor="middle" fill="#134E4A" fontSize="9.5" fontWeight="800">Switch L3-2</text>
      <text x="487" y="153" textAnchor="middle" fill="#0F766E" fontSize="8" fontWeight="700">🔀 Inter-VLAN</text>

      {/* Chips visuales Distribución */}
      <rect x="548" y="117" width="116" height="24" rx="6" fill="#CCFBF1" stroke="#0F766E" />
      <text x="606" y="133" textAnchor="middle" fill="#134E4A" fontSize="9" fontWeight="800">🔀 Ruteo Inter-VLAN</text>
      <rect x="672" y="117" width="116" height="24" rx="6" fill="#CCFBF1" stroke="#0F766E" />
      <text x="730" y="133" textAnchor="middle" fill="#134E4A" fontSize="9" fontWeight="800">🛡️ ACLs + QoS</text>
      <rect x="548" y="147" width="240" height="22" rx="6" fill="#FFFFFF" stroke="#14B8A6" />
      <text x="668" y="162" textAnchor="middle" fill="#115E59" fontSize="8.8" fontWeight="800">Gateway Redundante (HSRP / VRRP)</text>

      {/* Enlaces Dist -> Acceso */}
      <line x1="265" y1="166" x2="255" y2="210" stroke="#44403C" strokeWidth="2" />
      <line x1="265" y1="166" x2="376" y2="210" stroke="#44403C" strokeWidth="2" />
      <line x1="487" y1="166" x2="376" y2="210" stroke="#44403C" strokeWidth="2" />
      <line x1="487" y1="166" x2="495" y2="210" stroke="#44403C" strokeWidth="2" />

      {/* CAPA 1: ACCESO */}
      <rect x="16" y="196" width="788" height="76" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
      <rect x="28" y="206" width="165" height="56" rx="8" fill="#292524" />
      <text x="110" y="229" textAnchor="middle" fill="#FFFFFF" fontSize="11.5" fontWeight="800">A — ACCESO</text>
      <text x="110" y="245" textAnchor="middle" fill="#D6D3D1" fontSize="9" fontWeight="700">Borde de Usuarios</text>

      {[
        { x: 208, title: 'SW L2-1', sub: '💻 PCs (VLAN 10)' },
        { x: 326, title: 'SW L2-2', sub: '📞 VoIP (PoE)' },
        { x: 444, title: 'SW L2-3', sub: '📡 Wi-Fi APs' },
      ].map((sw, i) => (
        <g key={i}>
          <rect x={sw.x} y="210" width="104" height="46" rx="7" fill="#F5F5F4" stroke="#44403C" strokeWidth="1.8" />
          <text x={sw.x + 52} y="229" textAnchor="middle" fill="#1C1917" fontSize="9.5" fontWeight="800">{sw.title}</text>
          <text x={sw.x + 52} y="244" textAnchor="middle" fill="#0F766E" fontSize="8" fontWeight="700">{sw.sub}</text>
        </g>
      ))}

      <rect x="562" y="209" width="226" height="22" rx="6" fill="#F5F5F4" stroke="#78716C" />
      <text x="675" y="224" textAnchor="middle" fill="#1C1917" fontSize="8.8" fontWeight="800">🔌 VLANs + Port Security + PoE</text>
      <rect x="562" y="237" width="226" height="22" rx="6" fill="#FEF3C7" stroke="#D97706" />
      <text x="675" y="252" textAnchor="middle" fill="#92400E" fontSize="8.8" fontWeight="800">Truco: “A-D-N” (Acceso→Dist→Núcleo)</text>
    </svg>
  );
}

export function OsiTcpIpPduDiagram() {
  const layers = [
    { n: '7', letter: 'A', mnem: 'Avión', name: 'Aplicación', pdu: 'Datos', device: '🌐 HTTP / DNS / DHCP', bg: '#FEF3C7', bd: '#D97706', txt: '#78350F' },
    { n: '6', letter: 'P', mnem: 'Propio', name: 'Presentación', pdu: 'Datos', device: '🔐 TLS / UTF-8 / JPEG', bg: '#FEF3C7', bd: '#D97706', txt: '#78350F' },
    { n: '5', letter: 'S', mnem: 'Su', name: 'Sesión', pdu: 'Datos', device: '🤝 Sockets / RPC', bg: '#FEF3C7', bd: '#D97706', txt: '#78350F' },
    { n: '4', letter: 'T', mnem: 'Tiene', name: 'Transporte', pdu: 'Segmento', device: '🚢 TCP / UDP (Puertos)', bg: '#CCFBF1', bd: '#0F766E', txt: '#134E4A' },
    { n: '3', letter: 'R', mnem: 'Rico', name: 'Red', pdu: 'Paquete', device: '🧭 Router (IP / OSPF)', bg: '#E0E7FF', bd: '#4338CA', txt: '#312E81' },
    { n: '2', letter: 'E', mnem: 'Es', name: 'Enlace', pdu: 'Trama', device: '🔀 Switch (MAC / VLAN)', bg: '#FCE7F3', bd: '#BE185D', txt: '#831843' },
    { n: '1', letter: 'F', mnem: 'Felipe', name: 'Física', pdu: 'Bits 0/1', device: '⚡ Cable / Fibra / Hub', bg: '#F5F5F4', bd: '#57534E', txt: '#1C1917' },
  ];

  return (
    <svg viewBox="0 0 820 335" className="w-full h-auto" role="img" aria-label="Modelo OSI visual con mnemotecnia Felipe Es Rico Tiene Su Propio Avión, encapsulación matryoshka y dispositivos">
      <rect width="820" height="335" rx="14" fill="#FAF7F2" />

      {/* Encabezados */}
      <text x="48" y="22" textAnchor="middle" fill="#B45309" fontSize="9.5" fontWeight="800">↑ TRUCO</text>
      <text x="160" y="22" textAnchor="middle" fill="#1C1917" fontSize="10" fontWeight="800">TORRE OSI (7 → 1)</text>
      <text x="430" y="22" textAnchor="middle" fill="#0F766E" fontSize="10" fontWeight="800">ENCAPSULACIÓN VISUAL (PDU: Da-Se-Pa-Tra-Bi)</text>
      <text x="720" y="22" textAnchor="middle" fill="#4338CA" fontSize="10" fontWeight="800">EQUIPO / TCP-IP</text>

      {/* Flecha vertical de mnemotecnia de abajo hacia arriba */}
      <line x1="16" y1="252" x2="16" y2="42" stroke="#D97706" strokeWidth="2.5" />
      <polygon points="16,36 11,45 21,45" fill="#D97706" />

      {layers.map((l, idx) => {
        const y = 32 + idx * 34;
        return (
          <g key={l.n}>
            {/* Mnemotecnia a la izquierda */}
            <rect x="26" y={y + 2} width="54" height="26" rx="6" fill="#FFFBEB" stroke="#F59E0B" strokeWidth="1.2" />
            <text x="53" y={y + 18} textAnchor="middle" fill="#92400E" fontSize="9" fontWeight="800">
              {l.mnem}
            </text>

            {/* Capa OSI */}
            <rect x="86" y={y + 2} width="144" height="26" rx="6" fill={l.bg} stroke={l.bd} strokeWidth="1.6" />
            <circle cx="101" cy={y + 15} r="9.5" fill={l.bd} />
            <text x="101" y={y + 18.5} textAnchor="middle" fill="#FFFFFF" fontSize="9.5" fontWeight="900">{l.n}</text>
            <text x="116" y={y + 19} fill={l.txt} fontSize="10" fontWeight="800">{l.name}</text>

            {/* Dispositivo / Protocolo */}
            <rect x="630" y={y + 2} width="134" height="26" rx="6" fill="#FFFFFF" stroke={l.bd} strokeWidth="1.2" />
            <text x="697" y={y + 18} textAnchor="middle" fill="#1C1917" fontSize="8.6" fontWeight="700">{l.device}</text>
          </g>
        );
      })}

      {/* CORCHETES TCP/IP a la derecha */}
      <g>
        <rect x="770" y="34" width="38" height="94" rx="6" fill="#FEF3C7" stroke="#D97706" strokeWidth="1.4" />
        <text x="789" y="84" textAnchor="middle" fill="#78350F" fontSize="8.5" fontWeight="800" transform="rotate(-90 789 84)">APLICACIÓN</text>

        <rect x="770" y="136" width="38" height="26" rx="6" fill="#CCFBF1" stroke="#0F766E" strokeWidth="1.4" />
        <text x="789" y="152" textAnchor="middle" fill="#134E4A" fontSize="7.8" fontWeight="800">TRAN</text>

        <rect x="770" y="170" width="38" height="26" rx="6" fill="#E0E7FF" stroke="#4338CA" strokeWidth="1.4" />
        <text x="789" y="186" textAnchor="middle" fill="#312E81" fontSize="7.8" fontWeight="800">INET</text>

        <rect x="770" y="204" width="38" height="60" rx="6" fill="#FCE7F3" stroke="#BE185D" strokeWidth="1.4" />
        <text x="789" y="236" textAnchor="middle" fill="#831843" fontSize="8" fontWeight="800" transform="rotate(-90 789 236)">ACCESO</text>
      </g>

      {/* CENTRO: ENCAPSULACIÓN PROGRESIVA VISUAL (MUÑECAS RUSAS) */}
      {/* Capas 7-5: Bloque de Datos */}
      <rect x="360" y="42" width="140" height="76" rx="10" fill="#FEF3C7" stroke="#D97706" strokeWidth="2" />
      <text x="430" y="74" textAnchor="middle" fill="#78350F" fontSize="12" fontWeight="900">DATOS</text>
      <text x="430" y="92" textAnchor="middle" fill="#92400E" fontSize="8.5" fontWeight="700">(Capas 7, 6 y 5)</text>
      <line x1="430" y1="118" x2="430" y2="132" stroke="#0F766E" strokeWidth="2.2" />
      <polygon points="430,134 425,127 435,127" fill="#0F766E" />

      {/* Capa 4: Segmento = [TCP/UDP | DATOS] */}
      <g transform="translate(318, 136)">
        <rect width="62" height="26" rx="5" fill="#0F766E" />
        <text x="31" y="16" textAnchor="middle" fill="#FFFFFF" fontSize="8.5" fontWeight="800">TCP/UDP</text>
        <rect x="64" width="140" height="26" rx="5" fill="#FEF3C7" stroke="#D97706" strokeWidth="1.4" />
        <text x="134" y="16" textAnchor="middle" fill="#78350F" fontSize="8.8" fontWeight="800">DATOS</text>
        <text x="-8" y="16" textAnchor="end" fill="#0F766E" fontSize="8.8" fontWeight="900">Segmento →</text>
      </g>

      {/* Capa 3: Paquete = [IP | TCP | DATOS] */}
      <g transform="translate(278, 170)">
        <rect width="46" height="26" rx="5" fill="#4338CA" />
        <text x="23" y="16" textAnchor="middle" fill="#FFFFFF" fontSize="8.5" fontWeight="800">IP</text>
        <rect x="48" width="56" height="26" rx="5" fill="#CCFBF1" stroke="#0F766E" strokeWidth="1.2" />
        <text x="76" y="16" textAnchor="middle" fill="#134E4A" fontSize="8" fontWeight="800">TCP</text>
        <rect x="106" width="138" height="26" rx="5" fill="#FEF3C7" stroke="#D97706" strokeWidth="1.2" />
        <text x="175" y="16" textAnchor="middle" fill="#78350F" fontSize="8.5" fontWeight="800">DATOS (MTU 1500B)</text>
        <text x="252" y="16" fill="#4338CA" fontSize="8.8" fontWeight="900">← Paquete</text>
      </g>

      {/* Capa 2: Trama = [MAC | IP | TCP | DATOS | FCS] */}
      <g transform="translate(242, 204)">
        <rect width="52" height="26" rx="5" fill="#BE185D" />
        <text x="26" y="16" textAnchor="middle" fill="#FFFFFF" fontSize="8.2" fontWeight="800">MAC</text>
        <rect x="54" width="38" height="26" rx="5" fill="#E0E7FF" stroke="#4338CA" strokeWidth="1.2" />
        <text x="73" y="16" textAnchor="middle" fill="#312E81" fontSize="8" fontWeight="800">IP</text>
        <rect x="94" width="44" height="26" rx="5" fill="#CCFBF1" stroke="#0F766E" strokeWidth="1.2" />
        <text x="116" y="16" textAnchor="middle" fill="#134E4A" fontSize="8" fontWeight="800">TCP</text>
        <rect x="140" width="114" height="26" rx="5" fill="#FEF3C7" stroke="#D97706" strokeWidth="1.2" />
        <text x="197" y="16" textAnchor="middle" fill="#78350F" fontSize="8.2" fontWeight="800">DATOS</text>
        <rect x="256" width="54" height="26" rx="5" fill="#DC2626" />
        <text x="283" y="16" textAnchor="middle" fill="#FFFFFF" fontSize="8.2" fontWeight="800">FCS/CRC</text>
        <text x="318" y="16" fill="#BE185D" fontSize="8.8" fontWeight="900">← Trama</text>
      </g>

      {/* Capa 1: Onda cuadrada de Bits 0 y 1 */}
      <g transform="translate(242, 238)">
        <rect width="378" height="26" rx="6" fill="#1C1917" />
        <polyline
          points="16,20 34,20 34,7 58,7 58,20 76,20 76,7 110,7 110,20 134,20 134,7 156,7 156,20 184,20 184,7 206,7 206,20 230,20"
          fill="none"
          stroke="#34D399"
          strokeWidth="2.2"
        />
        <text x="248" y="17" fill="#A7F3D0" fontSize="9.5" fontFamily="monospace" fontWeight="800">0101101010 → BITS</text>
      </g>

      {/* Banner inferior de Mnemotecnia */}
      <rect x="14" y="278" width="792" height="44" rx="10" fill="#134E4A" />
      <text x="410" y="297" textAnchor="middle" fill="#FDE68A" fontSize="10.5" fontWeight="900">
        MNEMOTECNIA CAPAS (1 → 7): “Felipe Es Rico, Tiene Su Propio Avión”
      </text>
      <text x="410" y="313" textAnchor="middle" fill="#CCFBF1" fontSize="9.2" fontWeight="700">
        PDUs (7 → 1): “Da - Se - Pa - Tra - Bi” (Datos → Segmento → Paquete → Trama → Bits)
      </text>
    </svg>
  );
}

export function StructuredCablingFiberDiagram() {
  return (
    <svg viewBox="0 0 820 275" className="w-full h-auto" role="img" aria-label="Cableado estructurado 100 metros, pinout visual de cables UTP y rayos de luz en fibra óptica">
      <rect width="820" height="275" rx="14" fill="#FAF7F2" />

      {/* ARRIBA: Canal horizontal 100m */}
      <g transform="translate(14, 12)">
        <rect width="792" height="98" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <text x="16" y="21" fill="#1C1917" fontSize="10.2" fontWeight="800">
          REGLA DE ORO ANSI/TIA-568: COBRE UTP MÁXIMO = 100 METROS (90 m rígido + 10 m patch cords)
        </text>

        <rect x="18" y="32" width="128" height="54" rx="7" fill="#134E4A" />
        <text x="82" y="51" textAnchor="middle" fill="#FFFFFF" fontSize="9.5" fontWeight="800">Rack 19&quot; (1U=1.75&quot;)</text>
        <text x="82" y="66" textAnchor="middle" fill="#99F6E4" fontSize="8.5" fontWeight="700">⚡ Switch PoE</text>
        <text x="82" y="79" textAnchor="middle" fill="#CCFBF1" fontSize="7.5">af: 15W | at: 30W</text>

        <line x1="146" y1="59" x2="206" y2="59" stroke="#F59E0B" strokeWidth="4" />
        <text x="176" y="49" textAnchor="middle" fill="#B45309" fontSize="8.2" fontWeight="800">≤ 5 m</text>

        <rect x="206" y="39" width="70" height="40" rx="6" fill="#44403C" />
        <text x="241" y="57" textAnchor="middle" fill="#FFFFFF" fontSize="8.5" fontWeight="800">Patch</text>
        <text x="241" y="70" textAnchor="middle" fill="#D6D3D1" fontSize="8">Panel</text>

        <line x1="276" y1="59" x2="546" y2="59" stroke="#0F766E" strokeWidth="6" />
        <rect x="330" y="34" width="164" height="20" rx="5" fill="#CCFBF1" stroke="#0F766E" />
        <text x="412" y="48" textAnchor="middle" fill="#134E4A" fontSize="9.5" fontWeight="900">Horizontal Rígido ≤ 90 m</text>
        <text x="412" y="79" textAnchor="middle" fill="#57534E" fontSize="8.4" fontWeight="700">Cat5e: 1G • Cat6: 1G/10G(55m) • Cat6A: 10G(100m)</text>

        <rect x="546" y="39" width="66" height="40" rx="6" fill="#44403C" />
        <text x="579" y="57" textAnchor="middle" fill="#FFFFFF" fontSize="8.5" fontWeight="800">Jack</text>
        <text x="579" y="70" textAnchor="middle" fill="#D6D3D1" fontSize="8">RJ-45</text>

        <line x1="612" y1="59" x2="672" y2="59" stroke="#F59E0B" strokeWidth="4" />
        <text x="642" y="49" textAnchor="middle" fill="#B45309" fontSize="8.2" fontWeight="800">≤ 5 m</text>

        <rect x="672" y="34" width="106" height="50" rx="7" fill="#FEF3C7" stroke="#D97706" strokeWidth="1.8" />
        <text x="725" y="55" textAnchor="middle" fill="#78350F" fontSize="9.5" fontWeight="800">💻 PC / 📞 VoIP</text>
        <text x="725" y="71" textAnchor="middle" fill="#DC2626" fontSize="8" fontWeight="800">&gt;100m = Atenúa</text>
      </g>

      {/* ABAJO IZQUIERDA: Pinout visual de los 3 cables UTP */}
      <g transform="translate(14, 120)">
        <rect width="388" height="143" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="368" height="22" rx="6" fill="#292524" />
        <text x="194" y="25" textAnchor="middle" fill="#FFFFFF" fontSize="9.5" fontWeight="800">3 TIPOS DE CABLE UTP (CONEXIÓN VISUAL DE PINES)</text>

        {/* 1. Directo */}
        <g transform="translate(14, 40)">
          <rect width="112" height="92" rx="7" fill="#F0FDFA" stroke="#0F766E" strokeWidth="1.4" />
          <text x="56" y="15" textAnchor="middle" fill="#134E4A" fontSize="8.8" fontWeight="900">1. DIRECTO</text>
          <text x="56" y="26" textAnchor="middle" fill="#0F766E" fontSize="7.5" fontWeight="700">T568B ══ T568B</text>
          <rect x="10" y="34" width="24" height="32" rx="3" fill="#134E4A" />
          <text x="22" y="53" textAnchor="middle" fill="#FFF" fontSize="7.5" fontWeight="800">PC</text>
          <rect x="78" y="34" width="24" height="32" rx="3" fill="#0F766E" />
          <text x="90" y="53" textAnchor="middle" fill="#FFF" fontSize="7.5" fontWeight="800">SW</text>
          <line x1="34" y1="41" x2="78" y2="41" stroke="#0F766E" strokeWidth="2" />
          <line x1="34" y1="50" x2="78" y2="50" stroke="#0F766E" strokeWidth="2" />
          <line x1="34" y1="59" x2="78" y2="59" stroke="#0F766E" strokeWidth="2" />
          <text x="56" y="81" textAnchor="middle" fill="#1C1917" fontSize="7.8" fontWeight="800">Equipos DISTINTOS</text>
        </g>

        {/* 2. Cruzado */}
        <g transform="translate(138, 40)">
          <rect width="112" height="92" rx="7" fill="#FFFBEB" stroke="#D97706" strokeWidth="1.4" />
          <text x="56" y="15" textAnchor="middle" fill="#92400E" fontSize="8.8" fontWeight="900">2. CRUZADO</text>
          <text x="56" y="26" textAnchor="middle" fill="#B45309" fontSize="7.5" fontWeight="700">T568A ✕ T568B</text>
          <rect x="10" y="34" width="24" height="32" rx="3" fill="#B45309" />
          <text x="22" y="53" textAnchor="middle" fill="#FFF" fontSize="7.5" fontWeight="800">SW</text>
          <rect x="78" y="34" width="24" height="32" rx="3" fill="#B45309" />
          <text x="90" y="53" textAnchor="middle" fill="#FFF" fontSize="7.5" fontWeight="800">SW</text>
          {/* Pines cruzados 1-2 <-> 3-6 */}
          <line x1="34" y1="40" x2="78" y2="60" stroke="#D97706" strokeWidth="2.2" />
          <line x1="34" y1="60" x2="78" y2="40" stroke="#DC2626" strokeWidth="2.2" />
          <text x="56" y="81" textAnchor="middle" fill="#1C1917" fontSize="7.8" fontWeight="800">Equipos IGUALES</text>
        </g>

        {/* 3. Consola Rollover */}
        <g transform="translate(262, 40)">
          <rect width="112" height="92" rx="7" fill="#EEF2FF" stroke="#4338CA" strokeWidth="1.4" />
          <text x="56" y="15" textAnchor="middle" fill="#312E81" fontSize="8.8" fontWeight="900">3. CONSOLA</text>
          <text x="56" y="26" textAnchor="middle" fill="#4338CA" fontSize="7.5" fontWeight="700">Rollover (1↔8)</text>
          <rect x="10" y="34" width="24" height="32" rx="3" fill="#4338CA" />
          <text x="22" y="53" textAnchor="middle" fill="#FFF" fontSize="7.2" fontWeight="800">PC</text>
          <rect x="78" y="34" width="24" height="32" rx="3" fill="#312E81" />
          <text x="90" y="53" textAnchor="middle" fill="#FFF" fontSize="7" fontWeight="800">IOS</text>
          <line x1="34" y1="39" x2="78" y2="61" stroke="#4338CA" strokeWidth="1.8" strokeDasharray="3 2" />
          <line x1="34" y1="50" x2="78" y2="50" stroke="#6366F1" strokeWidth="1.8" />
          <line x1="34" y1="61" x2="78" y2="39" stroke="#4338CA" strokeWidth="1.8" strokeDasharray="3 2" />
          <text x="56" y="81" textAnchor="middle" fill="#1C1917" fontSize="7.8" fontWeight="800">Admin Puerto Console</text>
        </g>
      </g>

      {/* ABAJO DERECHA: Rayos de luz en Fibra Óptica */}
      <g transform="translate(414, 120)">
        <rect width="392" height="143" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="372" height="22" rx="6" fill="#0F766E" />
        <text x="196" y="25" textAnchor="middle" fill="#FFFFFF" fontSize="9.5" fontWeight="800">FIBRA ÓPTICA: PROPAGACIÓN DE LUZ (100% INMUNE A EMI)</text>

        {/* Multimodo: tubo grueso con rayos rebotando */}
        <g transform="translate(14, 40)">
          <rect width="364" height="44" rx="7" fill="#FFFBEB" stroke="#F59E0B" strokeWidth="1.4" />
          {/* Tubo MMF */}
          <rect x="10" y="9" width="132" height="26" rx="13" fill="#FEF3C7" stroke="#B45309" strokeWidth="2" />
          <polyline points="18,22 42,12 70,32 98,12 126,32 136,22" fill="none" stroke="#DC2626" strokeWidth="1.8" />
          <polyline points="18,22 48,32 82,12 114,32 136,22" fill="none" stroke="#D97706" strokeWidth="1.8" />
          <text x="154" y="19" fill="#78350F" fontSize="9.2" fontWeight="900">MULTIMODO (MMF • 50/62.5 μm)</text>
          <text x="154" y="34" fill="#57534E" fontSize="8.3" fontWeight="700">LED • Múltiples rebotes → 300–550 m</text>
        </g>

        {/* Monomodo: tubo fino con 1 solo láser recto */}
        <g transform="translate(14, 91)">
          <rect width="364" height="44" rx="7" fill="#F0FDFA" stroke="#0F766E" strokeWidth="1.4" />
          {/* Tubo SMF */}
          <rect x="10" y="15" width="132" height="14" rx="7" fill="#CCFBF1" stroke="#0F766E" strokeWidth="2" />
          <line x1="16" y1="22" x2="136" y2="22" stroke="#0F766E" strokeWidth="2.8" />
          <polygon points="138,22 130,18 130,26" fill="#0F766E" />
          <text x="154" y="19" fill="#134E4A" fontSize="9.2" fontWeight="900">MONOMODO (SMF • 9 μm)</text>
          <text x="154" y="34" fill="#0F766E" fontSize="8.3" fontWeight="800">Láser recto (1 haz) → 10 a 100 km WAN</text>
        </g>
      </g>
    </svg>
  );
}

export function LanSwitchingVlanStpDiagram() {
  return (
    <svg viewBox="0 0 820 275" className="w-full h-auto" role="img" aria-label="Dominios visuales de colisión y broadcast en Hub, Switch y Router, VLAN 802.1Q y STP">
      <rect width="820" height="275" rx="14" fill="#FAF7F2" />

      {/* PANEL 1: DOMINIOS VISUALES (HUB vs SWITCH vs ROUTER) */}
      <g transform="translate(12, 12)">
        <rect width="268" height="251" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="248" height="24" rx="6" fill="#292524" />
        <text x="134" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="800">DOMINIOS: HUB vs SWITCH vs ROUTER</text>

        {/* 1. HUB: 1 nube roja que encierra todo */}
        <g transform="translate(12, 42)">
          <rect width="244" height="62" rx="8" fill="#FEF2F2" stroke="#DC2626" strokeWidth="1.5" strokeDasharray="4 2" />
          <rect x="12" y="19" width="44" height="24" rx="4" fill="#DC2626" />
          <text x="34" y="34" textAnchor="middle" fill="#FFF" fontSize="8.5" fontWeight="800">HUB</text>
          <line x1="56" y1="25" x2="86" y2="16" stroke="#DC2626" strokeWidth="1.8" />
          <line x1="56" y1="31" x2="86" y2="31" stroke="#DC2626" strokeWidth="1.8" />
          <line x1="56" y1="37" x2="86" y2="46" stroke="#DC2626" strokeWidth="1.8" />
          <circle cx="92" cy="16" r="6" fill="#FCA5A5" stroke="#991B1B" />
          <circle cx="92" cy="31" r="6" fill="#FCA5A5" stroke="#991B1B" />
          <circle cx="92" cy="46" r="6" fill="#FCA5A5" stroke="#991B1B" />
          <text x="110" y="24" fill="#991B1B" fontSize="8.8" fontWeight="900">Capa 1 (Tonto)</text>
          <text x="110" y="38" fill="#7F1D1D" fontSize="8.2" fontWeight="700">💥 1 Colisión (todos chocan)</text>
          <text x="110" y="51" fill="#7F1D1D" fontSize="8.2">📢 1 Broadcast</text>
        </g>

        {/* 2. SWITCH: cada cable tiene su burbuja verde, todo dentro de 1 broadcast */}
        <g transform="translate(12, 111)">
          <rect width="244" height="64" rx="8" fill="#FFFBEB" stroke="#D97706" strokeWidth="1.5" strokeDasharray="4 2" />
          <rect x="12" y="20" width="46" height="24" rx="4" fill="#0F766E" />
          <text x="35" y="35" textAnchor="middle" fill="#FFF" fontSize="8" fontWeight="800">SWITCH</text>
          {/* Burbujas individuales de colisión */}
          <ellipse cx="77" cy="16" rx="18" ry="7" fill="#CCFBF1" stroke="#0F766E" strokeWidth="1.2" />
          <ellipse cx="77" cy="32" rx="18" ry="7" fill="#CCFBF1" stroke="#0F766E" strokeWidth="1.2" />
          <ellipse cx="77" cy="48" rx="18" ry="7" fill="#CCFBF1" stroke="#0F766E" strokeWidth="1.2" />
          <line x1="58" y1="24" x2="90" y2="16" stroke="#0F766E" strokeWidth="1.5" />
          <line x1="58" y1="32" x2="90" y2="32" stroke="#0F766E" strokeWidth="1.5" />
          <line x1="58" y1="40" x2="90" y2="48" stroke="#0F766E" strokeWidth="1.5" />
          <text x="104" y="23" fill="#134E4A" fontSize="8.8" fontWeight="900">Capa 2 (Tabla MAC)</text>
          <text x="104" y="38" fill="#0F766E" fontSize="8.2" fontWeight="800">✓ 1 Colisión POR PUERTO</text>
          <text x="104" y="52" fill="#92400E" fontSize="8.1">📢 1 Broadcast (salvo VLAN)</text>
        </g>

        {/* 3. ROUTER: 2 nubes separadas */}
        <g transform="translate(12, 182)">
          <rect width="244" height="58" rx="8" fill="#F0FDFA" stroke="#0F766E" strokeWidth="1.5" />
          <ellipse cx="30" cy="29" rx="18" ry="16" fill="#E0E7FF" stroke="#4338CA" strokeDasharray="3 2" />
          <text x="30" y="32" textAnchor="middle" fill="#312E81" fontSize="7.2" fontWeight="800">LAN 1</text>
          <circle cx="66" cy="29" r="14" fill="#4338CA" />
          <text x="66" y="32" textAnchor="middle" fill="#FFF" fontSize="8" fontWeight="900">R1</text>
          <ellipse cx="102" cy="29" rx="18" ry="16" fill="#FEF3C7" stroke="#D97706" strokeDasharray="3 2" />
          <text x="102" y="32" textAnchor="middle" fill="#92400E" fontSize="7.2" fontWeight="800">LAN 2</text>
          <text x="128" y="24" fill="#312E81" fontSize="8.8" fontWeight="900">Router (Capa 3)</text>
          <text x="128" y="39" fill="#0F766E" fontSize="8.2" fontWeight="800">✓ SEPARA Broadcast</text>
          <text x="128" y="51" fill="#57534E" fontSize="7.8">Bloquea FF:FF:FF:FF:FF:FF</text>
        </g>
      </g>

      {/* PANEL 2: VLANs Y TRUNK 802.1Q VISUAL */}
      <g transform="translate(290, 12)">
        <rect width="256" height="251" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="236" height="24" rx="6" fill="#0F766E" />
        <text x="128" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="800">VLANs Y TRUNK IEEE 802.1Q</text>

        {/* Switches */}
        <rect x="14" y="64" width="54" height="36" rx="6" fill="#134E4A" />
        <text x="41" y="85" textAnchor="middle" fill="#FFF" fontSize="9" fontWeight="800">SW-1</text>
        <rect x="188" y="64" width="54" height="36" rx="6" fill="#134E4A" />
        <text x="215" y="85" textAnchor="middle" fill="#FFF" fontSize="9" fontWeight="800">SW-2</text>

        {/* Tubo Trunk con etiquetas de colores viajando */}
        <rect x="68" y="70" width="120" height="24" rx="12" fill="#FEF3C7" stroke="#D97706" strokeWidth="2" />
        <rect x="76" y="75" width="46" height="14" rx="4" fill="#4338CA" />
        <text x="99" y="85" textAnchor="middle" fill="#FFF" fontSize="7.5" fontWeight="800">Tag V10</text>
        <rect x="128" y="75" width="48" height="14" rx="4" fill="#D97706" />
        <text x="152" y="85" textAnchor="middle" fill="#FFF" fontSize="7.5" fontWeight="800">Tag V20</text>
        <text x="128" y="56" textAnchor="middle" fill="#92400E" fontSize="8.8" fontWeight="900">1 solo cable TRUNK (Tag 4 Bytes)</text>

        {/* PCs conectados a VLAN 10 (azul) y VLAN 20 (naranja) */}
        <line x1="28" y1="100" x2="28" y2="128" stroke="#4338CA" strokeWidth="2" />
        <line x1="54" y1="100" x2="54" y2="128" stroke="#D97706" strokeWidth="2" />
        <circle cx="28" cy="138" r="12" fill="#E0E7FF" stroke="#4338CA" strokeWidth="2" />
        <text x="28" y="141" textAnchor="middle" fill="#312E81" fontSize="7.5" fontWeight="900">V10</text>
        <circle cx="54" cy="138" r="12" fill="#FEF3C7" stroke="#D97706" strokeWidth="2" />
        <text x="54" y="141" textAnchor="middle" fill="#92400E" fontSize="7.5" fontWeight="900">V20</text>

        <line x1="202" y1="100" x2="202" y2="128" stroke="#4338CA" strokeWidth="2" />
        <line x1="228" y1="100" x2="228" y2="128" stroke="#D97706" strokeWidth="2" />
        <circle cx="202" cy="138" r="12" fill="#E0E7FF" stroke="#4338CA" strokeWidth="2" />
        <text x="202" y="141" textAnchor="middle" fill="#312E81" fontSize="7.5" fontWeight="900">V10</text>
        <circle cx="228" cy="138" r="12" fill="#FEF3C7" stroke="#D97706" strokeWidth="2" />
        <text x="228" y="141" textAnchor="middle" fill="#92400E" fontSize="7.5" fontWeight="900">V20</text>

        <rect x="14" y="164" width="228" height="75" rx="8" fill="#FAF7F2" stroke="#D8D0C0" />
        <text x="128" y="182" textAnchor="middle" fill="#1C1917" fontSize="8.8" fontWeight="900">✓ Aísla Broadcast por departamento</text>
        <text x="128" y="198" textAnchor="middle" fill="#0F766E" fontSize="8.3" fontWeight="700">• 12 bits VLAN ID → hasta 4094 VLANs</text>
        <text x="128" y="214" textAnchor="middle" fill="#57534E" fontSize="8.2">• VLAN Nativa = viaja SIN etiqueta</text>
        <text x="128" y="230" textAnchor="middle" fill="#B45309" fontSize="8.2" fontWeight="800">• Wi-Fi 802.11 usa CSMA/CA (Evita)</text>
      </g>

      {/* PANEL 3: STP Y ETHERCHANNEL */}
      <g transform="translate(556, 12)">
        <rect width="252" height="251" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="232" height="24" rx="6" fill="#4338CA" />
        <text x="126" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="800">STP (802.1D/w) Y ETHERCHANNEL</text>

        {/* Triángulo STP */}
        <line x1="126" y1="68" x2="58" y2="132" stroke="#0F766E" strokeWidth="2.8" />
        <line x1="126" y1="68" x2="194" y2="132" stroke="#0F766E" strokeWidth="2.8" />
        <line x1="58" y1="132" x2="194" y2="132" stroke="#DC2626" strokeWidth="2.4" strokeDasharray="5 3" />

        <rect x="80" y="44" width="92" height="28" rx="6" fill="#FEF3C7" stroke="#B45309" strokeWidth="2" />
        <text x="126" y="61" textAnchor="middle" fill="#78350F" fontSize="8.8" fontWeight="900">👑 Root Bridge</text>

        <rect x="24" y="120" width="60" height="24" rx="5" fill="#EEF2FF" stroke="#4338CA" strokeWidth="1.6" />
        <text x="54" y="135" textAnchor="middle" fill="#312E81" fontSize="8.5" fontWeight="800">SW-B</text>

        <rect x="168" y="120" width="60" height="24" rx="5" fill="#EEF2FF" stroke="#4338CA" strokeWidth="1.6" />
        <text x="198" y="135" textAnchor="middle" fill="#312E81" fontSize="8.5" fontWeight="800">SW-C</text>

        <circle cx="146" cy="132" r="11" fill="#DC2626" />
        <text x="146" y="135" textAnchor="middle" fill="#FFFFFF" fontSize="7.8" fontWeight="900">BLK</text>
        <text x="126" y="159" textAnchor="middle" fill="#991B1B" fontSize="8.3" fontWeight="800">STP corta bucle → sin tormenta Broadcast</text>

        {/* EtherChannel */}
        <rect x="14" y="170" width="224" height="69" rx="8" fill="#F0FDFA" stroke="#0F766E" strokeWidth="1.5" />
        <text x="126" y="186" textAnchor="middle" fill="#134E4A" fontSize="9" fontWeight="900">EtherChannel (LACP 802.3ad)</text>
        <rect x="26" y="196" width="32" height="22" rx="4" fill="#134E4A" />
        <text x="42" y="210" textAnchor="middle" fill="#FFF" fontSize="7.5" fontWeight="800">SW1</text>
        <rect x="194" y="196" width="32" height="22" rx="4" fill="#134E4A" />
        <text x="210" y="210" textAnchor="middle" fill="#FFF" fontSize="7.5" fontWeight="800">SW2</text>
        <line x1="58" y1="201" x2="194" y2="201" stroke="#0F766E" strokeWidth="2.2" />
        <line x1="58" y1="207" x2="194" y2="207" stroke="#0F766E" strokeWidth="2.2" />
        <line x1="58" y1="213" x2="194" y2="213" stroke="#0F766E" strokeWidth="2.2" />
        <ellipse cx="126" cy="207" rx="20" ry="10" fill="none" stroke="#D97706" strokeWidth="2.5" />
        <text x="126" y="232" textAnchor="middle" fill="#115E59" fontSize="8" fontWeight="800">Une 2–8 cables = 1 canal lógico veloz</text>
      </g>
    </svg>
  );
}

export function IpSubnettingRoutingDiagram() {
  return (
    <svg viewBox="0 0 820 275" className="w-full h-auto" role="img" aria-label="Regla visual de Subnetting IPv4, flujo IPv6 SLAAC y grafos de RIP, OSPF y BGP">
      <rect width="820" height="275" rx="14" fill="#FAF7F2" />

      {/* PANEL 1: SUBNETTING IPv4 VISUAL */}
      <g transform="translate(12, 12)">
        <rect width="262" height="251" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="242" height="24" rx="6" fill="#0F766E" />
        <text x="131" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="800">SUBNETTING IPv4 (32 BITS)</text>

        {/* Regla de 32 bits */}
        <rect x="14" y="42" width="154" height="26" rx="5" fill="#0F766E" />
        <text x="91" y="59" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="800">Red (/P bits)</text>
        <rect x="170" y="42" width="78" height="26" rx="5" fill="#F59E0B" />
        <text x="209" y="59" textAnchor="middle" fill="#1C1917" fontSize="9" fontWeight="900">Host (h)</text>

        {/* Fórmula destacada */}
        <rect x="14" y="75" width="234" height="34" rx="7" fill="#FFFBEB" stroke="#F59E0B" strokeWidth="1.5" />
        <text x="131" y="92" textAnchor="middle" fill="#92400E" fontSize="10.2" fontWeight="900">Hosts Útiles = 2^h − 2</text>
        <text x="131" y="104" textAnchor="middle" fill="#78350F" fontSize="7.6" fontWeight="700">(-1 Red y -1 Broadcast)</text>

        {/* Escala visual de cortes de subred */}
        <text x="16" y="124" fill="#1C1917" fontSize="8.5" fontWeight="800">Cortes clave en examen (VLSM):</text>
        <rect x="14" y="130" width="234" height="18" rx="4" fill="#CCFBF1" stroke="#0F766E" />
        <text x="131" y="142" textAnchor="middle" fill="#134E4A" fontSize="8.2" fontWeight="800">/24 → 254 hosts (LAN completa)</text>

        <rect x="14" y="152" width="145" height="18" rx="4" fill="#E0E7FF" stroke="#4338CA" />
        <text x="86" y="164" textAnchor="middle" fill="#312E81" fontSize="8.2" fontWeight="800">/26 → 62 hosts</text>
        <rect x="163" y="152" width="85" height="18" rx="4" fill="#FEF3C7" stroke="#D97706" />
        <text x="205" y="164" textAnchor="middle" fill="#92400E" fontSize="8.2" fontWeight="900">/30 → 2 WAN</text>

        {/* Privadas RFC 1918 */}
        <rect x="14" y="179" width="234" height="60" rx="7" fill="#FAF7F2" stroke="#D8D0C0" />
        <text x="131" y="194" textAnchor="middle" fill="#1C1917" fontSize="8.5" fontWeight="900">Privadas RFC 1918 (+ NAT/PAT):</text>
        <rect x="20" y="200" width="66" height="16" rx="4" fill="#FFFFFF" stroke="#0F766E" />
        <text x="53" y="211" textAnchor="middle" fill="#134E4A" fontSize="7.6" fontFamily="monospace" fontWeight="800">10.0.0.0/8</text>
        <rect x="92" y="200" width="76" height="16" rx="4" fill="#FFFFFF" stroke="#0F766E" />
        <text x="130" y="211" textAnchor="middle" fill="#134E4A" fontSize="7.4" fontFamily="monospace" fontWeight="800">172.16/12</text>
        <rect x="174" y="200" width="68" height="16" rx="4" fill="#FFFFFF" stroke="#0F766E" />
        <text x="208" y="211" textAnchor="middle" fill="#134E4A" fontSize="7.4" fontFamily="monospace" fontWeight="800">192.168/16</text>
        <text x="131" y="232" textAnchor="middle" fill="#4338CA" fontSize="8" fontFamily="monospace" fontWeight="800">Loopback: 127.0.0.1 | Default: 0.0.0.0/0</text>
      </g>

      {/* PANEL 2: IPv6 SLAAC VISUAL */}
      <g transform="translate(284, 12)">
        <rect width="252" height="251" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="232" height="24" rx="6" fill="#4338CA" />
        <text x="126" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="800">IPv6 (128 BITS) Y SLAAC</text>

        <rect x="14" y="42" width="224" height="32" rx="6" fill="#EEF2FF" stroke="#6366F1" />
        <text x="126" y="55" textAnchor="middle" fill="#312E81" fontSize="8.5" fontWeight="800">8 grupos Hex (4× más largo que IPv4)</text>
        <text x="126" y="68" textAnchor="middle" fill="#4338CA" fontSize="8" fontFamily="monospace" fontWeight="800">2001:db8:85a3::8a2e:370:7334</text>

        {/* Flujo RS -> RA */}
        <rect x="16" y="88" width="66" height="44" rx="7" fill="#F5F5F4" stroke="#44403C" strokeWidth="1.6" />
        <text x="49" y="107" textAnchor="middle" fill="#1C1917" fontSize="9" fontWeight="800">💻 Host</text>
        <text x="49" y="122" textAnchor="middle" fill="#0F766E" fontSize="7.6" fontFamily="monospace" fontWeight="800">fe80::/10</text>

        <rect x="170" y="88" width="66" height="44" rx="7" fill="#134E4A" />
        <text x="203" y="107" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="800">🧭 Router</text>
        <text x="203" y="122" textAnchor="middle" fill="#99F6E4" fontSize="7.6" fontFamily="monospace" fontWeight="800">Prefijo /64</text>

        <line x1="84" y1="100" x2="166" y2="100" stroke="#D97706" strokeWidth="2.4" />
        <polygon points="168,100 160,96 160,104" fill="#D97706" />
        <text x="126" y="94" textAnchor="middle" fill="#92400E" fontSize="8.2" fontWeight="900">1. ICMPv6 RS</text>

        <line x1="168" y1="120" x2="86" y2="120" stroke="#0F766E" strokeWidth="2.4" />
        <polygon points="84,120 92,116 92,124" fill="#0F766E" />
        <text x="126" y="135" textAnchor="middle" fill="#0F766E" fontSize="8.2" fontWeight="900">2. ICMPv6 RA (/64)</text>

        {/* Resultado visual SLAAC */}
        <rect x="14" y="150" width="224" height="88" rx="8" fill="#F0FDFA" stroke="#0F766E" strokeWidth="1.4" />
        <text x="126" y="168" textAnchor="middle" fill="#134E4A" fontSize="9.2" fontWeight="900">⚡ SLAAC = Autoconfiguración</text>
        <text x="126" y="185" textAnchor="middle" fill="#0F766E" fontSize="8.6" fontWeight="800">✓ NO necesita servidor DHCP</text>
        <text x="126" y="202" textAnchor="middle" fill="#57534E" fontSize="8.3">✗ Sin Broadcast (usa Multicast)</text>
        <rect x="52" y="211" width="148" height="19" rx="5" fill="#4338CA" />
        <text x="126" y="224" textAnchor="middle" fill="#FFFFFF" fontSize="8.4" fontFamily="monospace" fontWeight="800">Ruta Default IPv6: ::/0</text>
      </g>

      {/* PANEL 3: GRAFOS VISUALES DE RIP, OSPF Y BGP */}
      <g transform="translate(546, 12)">
        <rect width="262" height="251" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="242" height="24" rx="6" fill="#B45309" />
        <text x="131" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="800">RUTEO: RIP vs OSPF vs BGP</text>

        {/* 1. RIP: Conteo de saltos */}
        <g transform="translate(12, 42)">
          <rect width="238" height="60" rx="7" fill="#FFFBEB" stroke="#F59E0B" strokeWidth="1.4" />
          <text x="10" y="15" fill="#92400E" fontSize="8.8" fontWeight="900">1. RIPv2 (Vector Distancia • DA 120)</text>
          <circle cx="28" cy="39" r="10" fill="#FEF3C7" stroke="#B45309" strokeWidth="1.8" />
          <text x="28" y="42" textAnchor="middle" fill="#78350F" fontSize="7.5" fontWeight="900">R1</text>
          <line x1="38" y1="39" x2="72" y2="39" stroke="#B45309" strokeWidth="2" />
          <text x="55" y="34" textAnchor="middle" fill="#B45309" fontSize="7.2" fontWeight="800">+1</text>
          <circle cx="82" cy="39" r="10" fill="#FEF3C7" stroke="#B45309" strokeWidth="1.8" />
          <text x="82" y="42" textAnchor="middle" fill="#78350F" fontSize="7.5" fontWeight="900">R2</text>
          <line x1="92" y1="39" x2="124" y2="39" stroke="#B45309" strokeWidth="2" />
          <text x="108" y="34" textAnchor="middle" fill="#B45309" fontSize="7.2" fontWeight="800">+2</text>
          <circle cx="134" cy="39" r="10" fill="#FEF3C7" stroke="#B45309" strokeWidth="1.8" />
          <text x="134" y="42" textAnchor="middle" fill="#78350F" fontSize="7.5" fontWeight="900">R3</text>
          <text x="152" y="36" fill="#78350F" fontSize="8.2" fontWeight="800">Máx 15 saltos</text>
          <text x="152" y="49" fill="#57534E" fontSize="7.6">Bellman-Ford</text>
        </g>

        {/* 2. OSPF: Grafo Dijkstra elige enlace 10G sobre 10M */}
        <g transform="translate(12, 109)">
          <rect width="238" height="66" rx="7" fill="#F0FDFA" stroke="#0F766E" strokeWidth="1.4" />
          <text x="10" y="15" fill="#134E4A" fontSize="8.8" fontWeight="900">2. OSPF (Estado Enlace • DA 110)</text>
          {/* Ruta lenta arriba */}
          <line x1="28" y1="42" x2="82" y2="26" stroke="#A8A29E" strokeWidth="1.5" strokeDasharray="3 2" />
          <line x1="82" y1="26" x2="136" y2="42" stroke="#A8A29E" strokeWidth="1.5" strokeDasharray="3 2" />
          <text x="82" y="23" textAnchor="middle" fill="#78716C" fontSize="7">10M (lento)</text>
          {/* Ruta rápida abajo (Dijkstra) */}
          <line x1="28" y1="42" x2="82" y2="56" stroke="#0F766E" strokeWidth="3" />
          <line x1="82" y1="56" x2="136" y2="42" stroke="#0F766E" strokeWidth="3" />
          <text x="82" y="64" textAnchor="middle" fill="#0F766E" fontSize="7.4" fontWeight="900">✓ 10G (Dijkstra)</text>
          <circle cx="28" cy="42" r="9" fill="#0F766E" />
          <text x="28" y="45" textAnchor="middle" fill="#FFF" fontSize="7.2" fontWeight="800">A</text>
          <circle cx="136" cy="42" r="9" fill="#0F766E" />
          <text x="136" y="45" textAnchor="middle" fill="#FFF" fontSize="7.2" fontWeight="800">B</text>
          <text x="152" y="38" fill="#134E4A" fontSize="8.2" fontWeight="800">Mapa LSDB</text>
          <text x="152" y="51" fill="#0F766E" fontSize="7.8" fontWeight="700">Costo = Ancho B.</text>
        </g>

        {/* 3. BGP: Dos nubes AS conectadas */}
        <g transform="translate(12, 182)">
          <rect width="238" height="58" rx="7" fill="#EEF2FF" stroke="#4338CA" strokeWidth="1.4" />
          <text x="10" y="15" fill="#312E81" fontSize="8.8" fontWeight="900">3. BGP (EGP Internet • TCP 179)</text>
          <ellipse cx="46" cy="39" rx="30" ry="13" fill="#FFFFFF" stroke="#4338CA" strokeWidth="1.8" />
          <text x="46" y="42" textAnchor="middle" fill="#312E81" fontSize="8" fontWeight="900">AS 100</text>
          <line x1="76" y1="39" x2="128" y2="39" stroke="#4338CA" strokeWidth="2.5" />
          <text x="102" y="34" textAnchor="middle" fill="#4338CA" fontSize="7.4" fontWeight="900">TCP 179</text>
          <ellipse cx="158" cy="39" rx="30" ry="13" fill="#FFFFFF" stroke="#4338CA" strokeWidth="1.8" />
          <text x="158" y="42" textAnchor="middle" fill="#312E81" fontSize="8" fontWeight="900">AS 200</text>
          <text x="196" y="38" fill="#312E81" fontSize="7.8" fontWeight="800">Une ISPs</text>
          <text x="196" y="49" fill="#4338CA" fontSize="7.4" fontWeight="700">Globales</text>
        </g>
      </g>
    </svg>
  );
}

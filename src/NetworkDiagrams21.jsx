import React from 'react';

/**
 * Diagramas SVG técnicos verificados para la Subárea 2.1: Diseño y direccionamiento de redes.
 * Cada diagrama está vinculado a un único concepto para evitar duplicados al navegar por una sección.
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
    <svg viewBox="0 0 820 285" className="w-full h-auto" role="img" aria-label="Diseño jerárquico de 3 capas de Cisco">
      <rect width="820" height="285" rx="14" fill="#FAF7F2" />

      {/* CAPA 3: NÚCLEO (CORE) */}
      <rect x="16" y="14" width="788" height="76" rx="10" fill="#FFFBEB" stroke="#F59E0B" strokeWidth="1.5" />
      <rect x="28" y="24" width="175" height="56" rx="8" fill="#B45309" />
      <text x="115" y="47" textAnchor="middle" fill="#FFFFFF" fontSize="11.5" fontWeight="800">3. CAPA DE NÚCLEO</text>
      <text x="115" y="63" textAnchor="middle" fill="#FEF3C7" fontSize="9.5" fontWeight="700">(Core / Backbone)</text>

      <rect x="235" y="28" width="115" height="46" rx="8" fill="#FFFFFF" stroke="#B45309" strokeWidth="2" />
      <text x="292" y="48" textAnchor="middle" fill="#78350F" fontSize="10" fontWeight="800">Core Switch A</text>
      <text x="292" y="62" textAnchor="middle" fill="#B45309" fontSize="8.5" fontWeight="700">10 / 40 / 100 Gbps</text>

      <line x1="350" y1="51" x2="415" y2="51" stroke="#D97706" strokeWidth="3.5" />
      <text x="382" y="44" textAnchor="middle" fill="#92400E" fontSize="8" fontWeight="800">Redundante</text>

      <rect x="415" y="28" width="115" height="46" rx="8" fill="#FFFFFF" stroke="#B45309" strokeWidth="2" />
      <text x="472" y="48" textAnchor="middle" fill="#78350F" fontSize="10" fontWeight="800">Core Switch B</text>
      <text x="472" y="62" textAnchor="middle" fill="#B45309" fontSize="8.5" fontWeight="700">10 / 40 / 100 Gbps</text>

      <text x="555" y="45" fill="#78350F" fontSize="10" fontWeight="800">• Conmutación ultrarrápida</text>
      <text x="555" y="62" fill="#57534E" fontSize="9.5">• Sin filtros ACL pesados (baja latencia)</text>

      <line x1="292" y1="74" x2="265" y2="118" stroke="#0F766E" strokeWidth="2" />
      <line x1="292" y1="74" x2="495" y2="118" stroke="#0F766E" strokeWidth="2" />
      <line x1="472" y1="74" x2="265" y2="118" stroke="#0F766E" strokeWidth="2" />
      <line x1="472" y1="74" x2="495" y2="118" stroke="#0F766E" strokeWidth="2" />

      {/* CAPA 2: DISTRIBUCIÓN */}
      <rect x="16" y="105" width="788" height="76" rx="10" fill="#F0FDFA" stroke="#14B8A6" strokeWidth="1.5" />
      <rect x="28" y="115" width="175" height="56" rx="8" fill="#0F766E" />
      <text x="115" y="138" textAnchor="middle" fill="#FFFFFF" fontSize="11.5" fontWeight="800">2. DISTRIBUCIÓN</text>
      <text x="115" y="154" textAnchor="middle" fill="#CCFBF1" fontSize="9.5" fontWeight="700">(Agregación / Políticas)</text>

      <rect x="218" y="118" width="105" height="48" rx="8" fill="#FFFFFF" stroke="#0F766E" strokeWidth="2" />
      <text x="270" y="138" textAnchor="middle" fill="#134E4A" fontSize="9.5" fontWeight="800">Switch L3 Dist-1</text>
      <text x="270" y="153" textAnchor="middle" fill="#0F766E" fontSize="8" fontWeight="700">ACLs • QoS • SVI</text>

      <line x1="323" y1="142" x2="440" y2="142" stroke="#0F766E" strokeWidth="2.5" strokeDasharray="5 3" />
      <text x="381" y="136" textAnchor="middle" fill="#134E4A" fontSize="8.5" fontWeight="800">HSRP / VRRP + LACP</text>

      <rect x="440" y="118" width="105" height="48" rx="8" fill="#FFFFFF" stroke="#0F766E" strokeWidth="2" />
      <text x="492" y="138" textAnchor="middle" fill="#134E4A" fontSize="9.5" fontWeight="800">Switch L3 Dist-2</text>
      <text x="492" y="153" textAnchor="middle" fill="#0F766E" fontSize="8" fontWeight="700">Ruta Inter-VLAN</text>

      <text x="560" y="134" fill="#134E4A" fontSize="10" fontWeight="800">• Enrutamiento Inter-VLAN (Capa 3)</text>
      <text x="560" y="149" fill="#57534E" fontSize="9.5">• Listas de Control de Acceso (ACLs) y QoS</text>
      <text x="560" y="164" fill="#57534E" fontSize="9.5">• Redundancia de gateway (HSRP / VRRP)</text>

      <line x1="270" y1="166" x2="250" y2="210" stroke="#44403C" strokeWidth="2" />
      <line x1="270" y1="166" x2="380" y2="210" stroke="#44403C" strokeWidth="2" />
      <line x1="492" y1="166" x2="380" y2="210" stroke="#44403C" strokeWidth="2" />
      <line x1="492" y1="166" x2="510" y2="210" stroke="#44403C" strokeWidth="2" />

      {/* CAPA 1: ACCESO */}
      <rect x="16" y="196" width="788" height="76" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
      <rect x="28" y="206" width="175" height="56" rx="8" fill="#292524" />
      <text x="115" y="229" textAnchor="middle" fill="#FFFFFF" fontSize="11.5" fontWeight="800">1. CAPA DE ACCESO</text>
      <text x="115" y="245" textAnchor="middle" fill="#D6D3D1" fontSize="9.5" fontWeight="700">(Borde de Usuarios Finales)</text>

      {[
        { x: 215, title: 'Switch L2 Acc-1', sub: 'VLAN 10 • PCs' },
        { x: 340, title: 'Switch L2 Acc-2', sub: 'VLAN 20 • PoE VoIP' },
        { x: 465, title: 'Switch L2 Acc-3', sub: 'Port Security • APs' },
      ].map((sw, i) => (
        <g key={i}>
          <rect x={sw.x} y="210" width="108" height="46" rx="7" fill="#F5F5F4" stroke="#44403C" strokeWidth="1.8" />
          <text x={sw.x + 54} y="229" textAnchor="middle" fill="#1C1917" fontSize="9.5" fontWeight="800">{sw.title}</text>
          <text x={sw.x + 54} y="244" textAnchor="middle" fill="#0F766E" fontSize="8" fontWeight="700">{sw.sub}</text>
        </g>
      ))}

      <text x="590" y="224" fill="#1C1917" fontSize="10" fontWeight="800">• Switches Capa 2 y VLANs</text>
      <text x="590" y="239" fill="#57534E" fontSize="9.5">• Port Security (limita MACs)</text>
      <text x="590" y="254" fill="#57534E" fontSize="9.5">• Alimentación PoE (802.3af/at/bt)</text>
    </svg>
  );
}

export function OsiTcpIpPduDiagram() {
  const layers = [
    { n: '7', name: 'Aplicación', pdu: 'Datos (Data)', proto: 'HTTP, HTTPS, DNS, DHCP, SSH, SMTP, SNMP', tcp: 'Aplicación', color: '#FEF3C7', border: '#D97706' },
    { n: '6', name: 'Presentación', pdu: 'Datos (Data)', proto: 'TLS/SSL, UTF-8, ASCII, JPEG, Compresión', tcp: '(Capas 5 a 7)', color: '#FEF3C7', border: '#D97706' },
    { n: '5', name: 'Sesión', pdu: 'Datos (Data)', proto: 'NetBIOS, RPC, Sockets, Control de diálogo', tcp: '', color: '#FEF3C7', border: '#D97706' },
    { n: '4', name: 'Transporte', pdu: 'Segmento (TCP) / Datagrama (UDP)', proto: 'TCP (Confiable) / UDP (Baja latencia) • Puertos', tcp: 'Transporte', color: '#CCFBF1', border: '#0F766E' },
    { n: '3', name: 'Red', pdu: 'Paquete (Packet)', proto: 'IPv4, IPv6, ICMP, OSPF, RIP, BGP • Routers', tcp: 'Internet', color: '#E0E7FF', border: '#4338CA' },
    { n: '2', name: 'Enlace de Datos', pdu: 'Trama (Frame)', proto: 'Ethernet 802.3, Wi-Fi 802.11, MAC 48b, FCS/CRC', tcp: 'Acceso a la Red', color: '#FCE7F3', border: '#BE185D' },
    { n: '1', name: 'Física', pdu: 'Bits (0 / 1)', proto: 'UTP Cat6, Fibra Óptica, Hubs, SFP (Señal física)', tcp: '(Capas 1 y 2)', color: '#F5F5F4', border: '#57534E' },
  ];

  return (
    <svg viewBox="0 0 820 330" className="w-full h-auto" role="img" aria-label="Modelo OSI de 7 capas, PDUs, TCP/IP y encapsulación">
      <rect width="820" height="330" rx="14" fill="#FAF7F2" />

      <text x="115" y="24" textAnchor="middle" fill="#1C1917" fontSize="10.5" fontWeight="800">MODELO OSI (7 CAPAS)</text>
      <text x="320" y="24" textAnchor="middle" fill="#0F766E" fontSize="10.5" fontWeight="800">PDU EXACTA (EXAMEN)</text>
      <text x="555" y="24" textAnchor="middle" fill="#1C1917" fontSize="10.5" fontWeight="800">PROTOCOLOS / DISPOSITIVOS CLAVE</text>
      <text x="750" y="24" textAnchor="middle" fill="#4338CA" fontSize="10.5" fontWeight="800">MODELO TCP/IP</text>

      {layers.map((l, idx) => {
        const y = 34 + idx * 33;
        return (
          <g key={l.n} transform={`translate(14, ${y})`}>
            <rect x="0" y="0" width="200" height="28" rx="6" fill={l.color} stroke={l.border} strokeWidth="1.5" />
            <text x="14" y="18" fill="#1C1917" fontSize="10.5" fontWeight="800">Capa {l.n} — {l.name}</text>

            <rect x="208" y="0" width="198" height="28" rx="6" fill="#FFFFFF" stroke={l.border} strokeWidth="1.5" />
            <text x="307" y="18" textAnchor="middle" fill="#1C1917" fontSize="9.5" fontWeight="800">{l.pdu}</text>

            <rect x="414" y="0" width="256" height="28" rx="6" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.2" />
            <text x="424" y="18" fill="#44403C" fontSize="9" fontWeight="600">{l.proto}</text>

            <rect x="678" y="0" width="114" height="28" rx="6" fill={l.color} stroke={l.border} strokeWidth="1.2" />
            <text x="735" y="18" textAnchor="middle" fill="#1C1917" fontSize="9.5" fontWeight="800">{l.tcp}</text>
          </g>
        );
      })}

      <g transform="translate(14, 272)">
        <rect width="792" height="46" rx="8" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <text x="14" y="17" fill="#1C1917" fontSize="9.5" fontWeight="800">
          ENCAPSULACIÓN EN TRAMA ETHERNET (MTU Estándar = 1500 Bytes de Paquete L3 | Jumbo Frame = 9000 B):
        </text>

        <rect x="14" y="23" width="135" height="17" rx="4" fill="#FCE7F3" stroke="#BE185D" />
        <text x="81" y="35" textAnchor="middle" fill="#831843" fontSize="8.5" fontWeight="800">L2 Header (MAC + 802.1Q)</text>

        <rect x="155" y="23" width="125" height="17" rx="4" fill="#E0E7FF" stroke="#4338CA" />
        <text x="217" y="35" textAnchor="middle" fill="#312E81" fontSize="8.5" fontWeight="800">L3 Header IP (IPv4/v6)</text>

        <rect x="286" y="23" width="135" height="17" rx="4" fill="#CCFBF1" stroke="#0F766E" />
        <text x="353" y="35" textAnchor="middle" fill="#134E4A" fontSize="8.5" fontWeight="800">L4 Header TCP/UDP (Puertos)</text>

        <rect x="427" y="23" width="215" height="17" rx="4" fill="#FEF3C7" stroke="#D97706" />
        <text x="534" y="35" textAnchor="middle" fill="#78350F" fontSize="8.5" fontWeight="800">Datos de Aplicación (Capas 5–7)</text>

        <rect x="648" y="23" width="130" height="17" rx="4" fill="#FEE2E2" stroke="#DC2626" />
        <text x="713" y="35" textAnchor="middle" fill="#991B1B" fontSize="8.5" fontWeight="800">Cola FCS / CRC-32 (4 B)</text>
      </g>
    </svg>
  );
}

export function StructuredCablingFiberDiagram() {
  return (
    <svg viewBox="0 0 820 250" className="w-full h-auto" role="img" aria-label="Cableado estructurado TIA/EIA-568, tipos de cable UTP y fibra óptica">
      <rect width="820" height="250" rx="14" fill="#FAF7F2" />

      <g transform="translate(14, 12)">
        <rect width="792" height="98" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <text x="16" y="22" fill="#1C1917" fontSize="10.5" fontWeight="800">
          CANAL HORIZONTAL ANSI/TIA/EIA-568 — LONGITUD MÁXIMA TOTAL EN COBRE UTP = 100 METROS (90 m + 10 m)
        </text>

        <rect x="18" y="34" width="135" height="50" rx="7" fill="#134E4A" />
        <text x="85" y="53" textAnchor="middle" fill="#FFFFFF" fontSize="9.5" fontWeight="800">Rack 19&quot; (1U = 1.75&quot;)</text>
        <text x="85" y="67" textAnchor="middle" fill="#99F6E4" fontSize="8.5" fontWeight="700">Switch PoE (48 VDC)</text>
        <text x="85" y="78" textAnchor="middle" fill="#CCFBF1" fontSize="7.5">802.3af (15.4W) / at (30W)</text>

        <line x1="153" y1="59" x2="215" y2="59" stroke="#F59E0B" strokeWidth="3.5" />
        <text x="184" y="49" textAnchor="middle" fill="#B45309" fontSize="8.5" fontWeight="800">Patch Cord</text>

        <rect x="215" y="40" width="70" height="38" rx="5" fill="#44403C" />
        <text x="250" y="57" textAnchor="middle" fill="#FFFFFF" fontSize="8.5" fontWeight="800">Patch Panel</text>
        <text x="250" y="69" textAnchor="middle" fill="#D6D3D1" fontSize="7.5">IDF / MDF</text>

        <line x1="285" y1="59" x2="545" y2="59" stroke="#0F766E" strokeWidth="5" />
        <rect x="330" y="36" width="170" height="19" rx="4" fill="#CCFBF1" stroke="#0F766E" />
        <text x="415" y="49" textAnchor="middle" fill="#134E4A" fontSize="9.5" fontWeight="800">Cable Horizontal Rígido ≤ 90 m</text>
        <text x="415" y="77" textAnchor="middle" fill="#57534E" fontSize="8.5" fontWeight="700">Cat 5e (1G/100MHz) • Cat 6 (250MHz) • Cat 6A (10G 100m/500MHz)</text>

        <rect x="545" y="40" width="66" height="38" rx="5" fill="#44403C" />
        <text x="578" y="57" textAnchor="middle" fill="#FFFFFF" fontSize="8.5" fontWeight="800">Jack RJ-45</text>
        <text x="578" y="69" textAnchor="middle" fill="#D6D3D1" fontSize="7.5">Roseta Pared</text>

        <line x1="611" y1="59" x2="675" y2="59" stroke="#F59E0B" strokeWidth="3.5" />
        <text x="643" y="49" textAnchor="middle" fill="#B45309" fontSize="8" fontWeight="800">Patch (≤10m tot)</text>

        <rect x="675" y="36" width="102" height="46" rx="7" fill="#FEF3C7" stroke="#D97706" strokeWidth="1.5" />
        <text x="726" y="56" textAnchor="middle" fill="#78350F" fontSize="9.5" fontWeight="800">PC / VoIP / AP</text>
        <text x="726" y="70" textAnchor="middle" fill="#B45309" fontSize="8" fontWeight="700">&gt;100 m = Atenuación</text>
      </g>

      <g transform="translate(14, 120)">
        <rect width="388" height="118" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <text x="14" y="21" fill="#1C1917" fontSize="10" fontWeight="800">TIPOS DE CABLE UTP RJ-45 (8 PINES / 4 PARES)</text>

        <rect x="14" y="30" width="360" height="24" rx="5" fill="#F0FDFA" stroke="#14B8A6" />
        <text x="22" y="46" fill="#134E4A" fontSize="9" fontWeight="800">1. Directo (T568B ↔ T568B):</text>
        <text x="165" y="46" fill="#44403C" fontSize="8.8">Equipos distintos (PC↔Switch, Router↔Switch)</text>

        <rect x="14" y="58" width="360" height="24" rx="5" fill="#FFFBEB" stroke="#F59E0B" />
        <text x="22" y="74" fill="#92400E" fontSize="9" fontWeight="800">2. Cruzado (T568A ↔ T568B):</text>
        <text x="168" y="74" fill="#44403C" fontSize="8.8">Cruza TX(1-2)↔RX(3-6) • Equipos iguales</text>

        <rect x="14" y="86" width="360" height="24" rx="5" fill="#EEF2FF" stroke="#6366F1" />
        <text x="22" y="102" fill="#312E81" fontSize="9" fontWeight="800">3. Consola / Rollover (1↔8..8↔1):</text>
        <text x="188" y="102" fill="#44403C" fontSize="8.8">Serial PC a puerto Console Cisco</text>
      </g>

      <g transform="translate(414, 120)">
        <rect width="392" height="118" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <text x="14" y="21" fill="#1C1917" fontSize="10" fontWeight="800">FIBRA ÓPTICA (INMUNE A EMI/RFI) Y TRANSCEPTORES SFP</text>

        <rect x="14" y="30" width="364" height="38" rx="6" fill="#FFFBEB" stroke="#F59E0B" />
        <circle cx="36" cy="49" r="12" fill="#FDE68A" stroke="#B45309" strokeWidth="2" />
        <circle cx="36" cy="49" r="6" fill="#D97706" />
        <text x="58" y="45" fill="#78350F" fontSize="9.5" fontWeight="800">Multimodo (MMF — Núcleo ancho 50 / 62.5 μm)</text>
        <text x="58" y="59" fill="#57534E" fontSize="8.5">Fuente LED/VCSEL • Dispersión modal • Campus/DataCenter (300–550 m)</text>

        <rect x="14" y="73" width="364" height="38" rx="6" fill="#F0FDFA" stroke="#14B8A6" />
        <circle cx="36" cy="92" r="12" fill="#CCFBF1" stroke="#0F766E" strokeWidth="2" />
        <circle cx="36" cy="92" r="2" fill="#0F766E" />
        <text x="58" y="88" fill="#134E4A" fontSize="9.5" fontWeight="800">Monomodo (SMF — Núcleo ultradelgado 9 μm)</text>
        <text x="58" y="102" fill="#57534E" fontSize="8.5">Láser 1 solo haz sin dispersión • Largo alcance WAN (10 a 100 km)</text>
      </g>
    </svg>
  );
}

export function LanSwitchingVlanStpDiagram() {
  return (
    <svg viewBox="0 0 820 265" className="w-full h-auto" role="img" aria-label="Dominios de colisión y broadcast, VLAN 802.1Q, STP y EtherChannel">
      <rect width="820" height="265" rx="14" fill="#FAF7F2" />

      <g transform="translate(12, 12)">
        <rect width="258" height="241" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="238" height="24" rx="6" fill="#292524" />
        <text x="129" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="10.5" fontWeight="800">DOMINIOS: HUB vs SWITCH vs ROUTER</text>

        <rect x="12" y="44" width="234" height="55" rx="7" fill="#FEE2E2" stroke="#DC2626" />
        <text x="22" y="61" fill="#991B1B" fontSize="9.5" fontWeight="800">1. Hub (Concentrador Capa 1):</text>
        <text x="22" y="75" fill="#7F1D1D" fontSize="8.5">• 1 solo Dominio de Colisión (CSMA/CD)</text>
        <text x="22" y="88" fill="#7F1D1D" fontSize="8.5">• 1 solo Dominio de Broadcast</text>

        <rect x="12" y="108" width="234" height="58" rx="7" fill="#CCFBF1" stroke="#0F766E" />
        <text x="22" y="125" fill="#134E4A" fontSize="9.5" fontWeight="800">2. Switch / Bridge (Capa 2 — Tabla CAM):</text>
        <text x="22" y="139" fill="#115E59" fontSize="8.5" fontWeight="700">• Cada puerto = 1 Dominio de Colisión</text>
        <text x="22" y="153" fill="#115E59" fontSize="8.5">• 1 Dominio de Broadcast (salvo que uses VLAN)</text>

        <rect x="12" y="175" width="234" height="56" rx="7" fill="#FEF3C7" stroke="#D97706" />
        <text x="22" y="192" fill="#78350F" fontSize="9.5" fontWeight="800">3. Router (Capa 3) / VLAN:</text>
        <text x="22" y="206" fill="#92400E" fontSize="8.5" fontWeight="700">• Divide y aísla Dominios de Broadcast</text>
        <text x="22" y="220" fill="#92400E" fontSize="8.5">• No reenvía difusiones FF:FF:FF:FF:FF:FF</text>
      </g>

      <g transform="translate(281, 12)">
        <rect width="258" height="241" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="238" height="24" rx="6" fill="#0F766E" />
        <text x="129" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="10.5" fontWeight="800">VLANs Y TRUNK IEEE 802.1Q</text>

        <rect x="16" y="78" width="64" height="44" rx="6" fill="#134E4A" />
        <text x="48" y="98" textAnchor="middle" fill="#FFFFFF" fontSize="9.5" fontWeight="800">SW-1</text>
        <text x="48" y="111" textAnchor="middle" fill="#99F6E4" fontSize="7.5">VLAN 10, 20</text>

        <rect x="178" y="78" width="64" height="44" rx="6" fill="#134E4A" />
        <text x="210" y="98" textAnchor="middle" fill="#FFFFFF" fontSize="9.5" fontWeight="800">SW-2</text>
        <text x="210" y="111" textAnchor="middle" fill="#99F6E4" fontSize="7.5">VLAN 10, 20</text>

        <line x1="80" y1="100" x2="178" y2="100" stroke="#D97706" strokeWidth="4" />
        <rect x="86" y="52" width="86" height="20" rx="4" fill="#FEF3C7" stroke="#D97706" />
        <text x="129" y="65" textAnchor="middle" fill="#92400E" fontSize="8.5" fontWeight="800">TRUNK 802.1Q</text>

        <rect x="14" y="138" width="230" height="92" rx="7" fill="#FAF7F2" stroke="#D8D0C0" />
        <text x="129" y="155" textAnchor="middle" fill="#1C1917" fontSize="9" fontWeight="800">Etiqueta (Tag) IEEE 802.1Q = 4 Bytes</text>
        <text x="129" y="171" textAnchor="middle" fill="#0F766E" fontSize="8.5" fontWeight="700">Transporta múltiples VLANs por 1 cable</text>
        <text x="129" y="187" textAnchor="middle" fill="#57534E" fontSize="8.2">• Inserta VLAN ID (12 bits → 4094 VLANs)</text>
        <text x="129" y="201" textAnchor="middle" fill="#57534E" fontSize="8.2">• La VLAN Nativa viaja SIN etiquetar</text>
        <text x="129" y="216" textAnchor="middle" fill="#B45309" fontSize="8.2" fontWeight="700">• Wi-Fi 802.11 usa CSMA/CA (Evitación)</text>
      </g>

      <g transform="translate(550, 12)">
        <rect width="258" height="241" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="238" height="24" rx="6" fill="#4338CA" />
        <text x="129" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="10.5" fontWeight="800">STP (802.1D/w) Y ETHERCHANNEL</text>

        <line x1="129" y1="62" x2="62" y2="128" stroke="#0F766E" strokeWidth="2.5" />
        <line x1="129" y1="62" x2="196" y2="128" stroke="#0F766E" strokeWidth="2.5" />
        <line x1="62" y1="128" x2="196" y2="128" stroke="#DC2626" strokeWidth="2.2" strokeDasharray="5 3" />

        <rect x="89" y="44" width="80" height="26" rx="6" fill="#FEF3C7" stroke="#B45309" strokeWidth="1.8" />
        <text x="129" y="60" textAnchor="middle" fill="#78350F" fontSize="8.8" fontWeight="800">Root Bridge</text>

        <rect x="26" y="116" width="64" height="24" rx="5" fill="#EEF2FF" stroke="#4338CA" strokeWidth="1.5" />
        <text x="58" y="131" textAnchor="middle" fill="#312E81" fontSize="8.5" fontWeight="800">Switch B</text>

        <rect x="168" y="116" width="64" height="24" rx="5" fill="#EEF2FF" stroke="#4338CA" strokeWidth="1.5" />
        <text x="200" y="131" textAnchor="middle" fill="#312E81" fontSize="8.5" fontWeight="800">Switch C</text>

        <circle cx="152" cy="128" r="9" fill="#DC2626" />
        <text x="152" y="131" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="800">BLK</text>
        <text x="129" y="153" textAnchor="middle" fill="#991B1B" fontSize="8.2" fontWeight="700">STP bloquea puerto redundante (evita tormenta)</text>

        <rect x="14" y="164" width="230" height="66" rx="7" fill="#F0FDFA" stroke="#0F766E" />
        <text x="129" y="180" textAnchor="middle" fill="#134E4A" fontSize="9.2" fontWeight="800">EtherChannel (LACP 802.3ad / PAgP)</text>
        <line x1="45" y1="192" x2="213" y2="192" stroke="#0F766E" strokeWidth="2" />
        <line x1="45" y1="198" x2="213" y2="198" stroke="#0F766E" strokeWidth="2" />
        <ellipse cx="129" cy="195" rx="22" ry="8" fill="none" stroke="#B45309" strokeWidth="2" />
        <text x="129" y="217" textAnchor="middle" fill="#115E59" fontSize="8.2" fontWeight="700">Agrupa 2–8 enlaces físicos en 1 canal lógico</text>
      </g>
    </svg>
  );
}

export function IpSubnettingRoutingDiagram() {
  return (
    <svg viewBox="0 0 820 265" className="w-full h-auto" role="img" aria-label="Direccionamiento IPv4, Subnetting VLSM, IPv6 SLAAC y protocolos de enrutamiento">
      <rect width="820" height="265" rx="14" fill="#FAF7F2" />

      <g transform="translate(12, 12)">
        <rect width="260" height="241" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="240" height="24" rx="6" fill="#0F766E" />
        <text x="130" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="10.5" fontWeight="800">SUBNETTING IPv4 (32 BITS) Y VLSM</text>

        <rect x="14" y="44" width="152" height="24" rx="4" fill="#CCFBF1" stroke="#0F766E" />
        <text x="90" y="60" textAnchor="middle" fill="#134E4A" fontSize="9" fontWeight="800">Prefijo de Red (/P bits en 1)</text>
        <rect x="168" y="44" width="78" height="24" rx="4" fill="#FEF3C7" stroke="#D97706" />
        <text x="207" y="60" textAnchor="middle" fill="#78350F" fontSize="9" fontWeight="800">Host (h)</text>

        <rect x="14" y="76" width="232" height="44" rx="6" fill="#FFFBEB" stroke="#F59E0B" />
        <text x="130" y="93" textAnchor="middle" fill="#92400E" fontSize="10" fontWeight="800">Hosts Útiles = 2^h - 2   (h = 32 - P)</text>
        <text x="130" y="109" textAnchor="middle" fill="#57534E" fontSize="8.2">Se restan 2: Red (bits host=0) y Broadcast (bits=1)</text>

        <text x="18" y="138" fill="#1C1917" fontSize="9" fontWeight="800">• Enlace WAN punto a punto óptimo:</text>
        <text x="26" y="152" fill="#0F766E" fontSize="8.8" fontWeight="700">/30 (255.255.255.252) → 2² - 2 = 2 IPs útiles</text>

        <text x="18" y="172" fill="#1C1917" fontSize="9" fontWeight="800">• Bloques Privados RFC 1918 (+ NAT/PAT):</text>
        <text x="26" y="187" fill="#44403C" fontSize="8.5" fontFamily="monospace" fontWeight="700">10.0.0.0/8 | 172.16.0.0/12 | 192.168.0.0/16</text>

        <text x="18" y="207" fill="#1C1917" fontSize="9" fontWeight="800">• Diagnóstico local (Loopback):</text>
        <text x="26" y="222" fill="#4338CA" fontSize="8.8" fontFamily="monospace" fontWeight="700">127.0.0.1 (bloque 127.0.0.0/8)</text>
      </g>

      <g transform="translate(282, 12)">
        <rect width="256" height="241" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="236" height="24" rx="6" fill="#4338CA" />
        <text x="128" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="10.5" fontWeight="800">IPv6 (128 BITS HEX) Y SLAAC</text>

        <rect x="14" y="42" width="228" height="34" rx="6" fill="#EEF2FF" stroke="#6366F1" />
        <text x="128" y="56" textAnchor="middle" fill="#312E81" fontSize="8.8" fontWeight="800">8 grupos hexadecimales (4× IPv4)</text>
        <text x="128" y="69" textAnchor="middle" fill="#4338CA" fontSize="8.2" fontFamily="monospace" fontWeight="700">2001:0db8:85a3::8a2e:0370:7334</text>

        <rect x="16" y="92" width="68" height="36" rx="6" fill="#F5F5F4" stroke="#44403C" strokeWidth="1.5" />
        <text x="50" y="108" textAnchor="middle" fill="#1C1917" fontSize="9" fontWeight="800">Host IPv6</text>
        <text x="50" y="120" textAnchor="middle" fill="#0F766E" fontSize="7.5" fontWeight="700">fe80::/10</text>

        <rect x="172" y="92" width="68" height="36" rx="6" fill="#134E4A" />
        <text x="206" y="108" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="800">Router</text>
        <text x="206" y="120" textAnchor="middle" fill="#99F6E4" fontSize="7.5">Prefijo /64</text>

        <line x1="86" y1="102" x2="170" y2="102" stroke="#B45309" strokeWidth="2" />
        <polygon points="170,102 163,98 163,106" fill="#B45309" />
        <text x="128" y="96" textAnchor="middle" fill="#92400E" fontSize="8" fontWeight="800">1. ICMPv6 RS</text>

        <line x1="170" y1="118" x2="86" y2="118" stroke="#0F766E" strokeWidth="2" />
        <polygon points="86,118 93,114 93,122" fill="#0F766E" />
        <text x="128" y="131" textAnchor="middle" fill="#0F766E" fontSize="8" fontWeight="800">2. ICMPv6 RA (/64)</text>

        <rect x="14" y="142" width="228" height="86" rx="6" fill="#FAF7F2" stroke="#D8D0C0" />
        <text x="128" y="159" textAnchor="middle" fill="#1C1917" fontSize="9" fontWeight="800">Autoconfiguración SLAAC (Sin Estado)</text>
        <text x="128" y="174" textAnchor="middle" fill="#57534E" fontSize="8.2">• El host forma su IPv6 global con el RA</text>
        <text x="128" y="188" textAnchor="middle" fill="#0F766E" fontSize="8.2" fontWeight="700">• NO necesita servidor DHCP</text>
        <text x="128" y="203" textAnchor="middle" fill="#57534E" fontSize="8.2">• No usa Broadcast (usa Multicast / Anycast)</text>
        <text x="128" y="218" textAnchor="middle" fill="#4338CA" fontSize="8.2" fontWeight="700">• Ruta por defecto IPv6: ::/0</text>
      </g>

      <g transform="translate(548, 12)">
        <rect width="260" height="241" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="240" height="24" rx="6" fill="#B45309" />
        <text x="130" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="10.5" fontWeight="800">ENRUTAMIENTO: RIP vs OSPF vs BGP</text>

        <rect x="12" y="42" width="236" height="26" rx="5" fill="#F5F5F4" stroke="#57534E" />
        <text x="130" y="59" textAnchor="middle" fill="#1C1917" fontSize="8.8" fontWeight="800">Ruta por Defecto IPv4: 0.0.0.0/0 (Gateway Last Resort)</text>

        <rect x="12" y="75" width="236" height="48" rx="6" fill="#FFFBEB" stroke="#F59E0B" />
        <text x="20" y="91" fill="#92400E" fontSize="9.2" fontWeight="800">1. RIPv2 (IGP — Vector Distancia • DA 120)</text>
        <text x="20" y="105" fill="#57534E" fontSize="8.3">• Métrica: Conteo de saltos (máx. 15; 16 = inalcanzable)</text>
        <text x="20" y="117" fill="#57534E" fontSize="8.3">• Algoritmo Bellman-Ford • Convergencia lenta</text>

        <rect x="12" y="129" width="236" height="50" rx="6" fill="#F0FDFA" stroke="#0F766E" />
        <text x="20" y="145" fill="#134E4A" fontSize="9.2" fontWeight="800">2. OSPF (IGP — Estado de Enlace • DA 110)</text>
        <text x="20" y="159" fill="#115E59" fontSize="8.3" fontWeight="700">• Algoritmo Dijkstra (SPF) sobre mapa LSDB (LSA)</text>
        <text x="20" y="172" fill="#57534E" fontSize="8.3">• Métrica: Costo según Ancho de Banda • Áreas</text>

        <rect x="12" y="185" width="236" height="46" rx="6" fill="#EEF2FF" stroke="#4338CA" />
        <text x="20" y="201" fill="#312E81" fontSize="9.2" fontWeight="800">3. BGP (EGP — Vector de Ruta • TCP 179)</text>
        <text x="20" y="215" fill="#4338CA" fontSize="8.3" fontWeight="700">• Interconecta Sistemas Autónomos (AS) en Internet</text>
      </g>
    </svg>
  );
}

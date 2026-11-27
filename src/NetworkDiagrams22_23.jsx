import React from 'react';

/**
 * Diagramas SVG visuales de alta retención para las Subáreas 2.2 (Administración de redes)
 * y 2.3 (Seguridad en redes). Diseñados con flujos gráficos, iconos, flechas y metáforas visuales.
 */

export function DhcpDnsArpDiagram() {
  return (
    <svg viewBox="0 0 820 275" className="w-full h-auto" role="img" aria-label="Flujo visual DHCP DORA, consulta DNS con registros y difusión ARP">
      <rect width="820" height="275" rx="14" fill="#FAF7F2" />

      {/* Panel 1: DHCP Proceso DORA con insignias D-O-R-A */}
      <g transform="translate(12, 12)">
        <rect width="265" height="251" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="245" height="24" rx="6" fill="#0F766E" />
        <text x="132" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="800">DHCP “DORA” • UDP 68 ↔ 67</text>

        <rect x="34" y="42" width="76" height="26" rx="6" fill="#F5F5F4" stroke="#44403C" strokeWidth="1.5" />
        <text x="72" y="58" textAnchor="middle" fill="#1C1917" fontSize="8.5" fontWeight="800">💻 Cliente 68</text>

        <rect x="170" y="42" width="78" height="26" rx="6" fill="#134E4A" />
        <text x="209" y="58" textAnchor="middle" fill="#FFFFFF" fontSize="8.5" fontWeight="800">🖥️ Server 67</text>

        {/* Líneas de vida */}
        <line x1="72" y1="68" x2="72" y2="184" stroke="#D6D3D1" strokeWidth="1.5" strokeDasharray="3 3" />
        <line x1="209" y1="68" x2="209" y2="184" stroke="#D6D3D1" strokeWidth="1.5" strokeDasharray="3 3" />

        {[
          { l: 'D', y: 86, dir: 'R', txt: 'Discover (Broadcast)', c: '#B45309' },
          { l: 'O', y: 114, dir: 'L', txt: 'Offer (Propone IP)', c: '#0F766E' },
          { l: 'R', y: 142, dir: 'R', txt: 'Request (Acepta IP)', c: '#B45309' },
          { l: 'A', y: 170, dir: 'L', txt: 'ACK (Confirmado!)', c: '#0F766E' },
        ].map((step) => (
          <g key={step.l}>
            <circle cx="22" cy={step.y} r="10" fill={step.c} />
            <text x="22" y={step.y + 3.5} textAnchor="middle" fill="#FFF" fontSize="9.5" fontWeight="900">{step.l}</text>
            {step.dir === 'R' ? (
              <>
                <line x1="74" y1={step.y} x2="203" y2={step.y} stroke={step.c} strokeWidth="2.2" />
                <polygon points={`206,${step.y} 198,${step.y - 4} 198,${step.y + 4}`} fill={step.c} />
              </>
            ) : (
              <>
                <line x1="206" y1={step.y} x2="77" y2={step.y} stroke={step.c} strokeWidth="2.2" />
                <polygon points={`74,${step.y} 82,${step.y - 4} 82,${step.y + 4}`} fill={step.c} />
              </>
            )}
            <text x="140" y={step.y - 5} textAnchor="middle" fill={step.c} fontSize="8.2" fontWeight="800">{step.txt}</text>
          </g>
        ))}

        <rect x="12" y="192" width="241" height="48" rx="7" fill="#FAF7F2" stroke="#D8D0C0" />
        <text x="132" y="209" textAnchor="middle" fill="#1C1917" fontSize="8.2" fontWeight="800">📌 Reserva DHCP: IP fija por MAC</text>
        <text x="132" y="226" textAnchor="middle" fill="#0F766E" fontSize="8.2" fontWeight="800">🔀 Otra VLAN: ip helper-address</text>
      </g>

      {/* Panel 2: Flujo visual DNS */}
      <g transform="translate(287, 12)">
        <rect width="256" height="251" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="236" height="24" rx="6" fill="#4338CA" />
        <text x="128" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="800">DNS (PUERTO 53): TRADUCTOR WEB</text>

        {/* Mini flujo PC <-> DNS */}
        <rect x="14" y="42" width="66" height="32" rx="6" fill="#F5F5F4" stroke="#44403C" strokeWidth="1.4" />
        <text x="47" y="61" textAnchor="middle" fill="#1C1917" fontSize="8.5" fontWeight="800">💻 PC</text>
        <rect x="176" y="42" width="66" height="32" rx="6" fill="#4338CA" />
        <text x="209" y="57" textAnchor="middle" fill="#FFFFFF" fontSize="8.5" fontWeight="800">📖 DNS</text>
        <text x="209" y="68" textAnchor="middle" fill="#C7D2FE" fontSize="7.2">UDP/TCP 53</text>
        <line x1="82" y1="52" x2="172" y2="52" stroke="#4338CA" strokeWidth="2" />
        <polygon points="174,52 167,48 167,56" fill="#4338CA" />
        <text x="128" y="47" textAnchor="middle" fill="#312E81" fontSize="7.4" fontWeight="800">www.sitio.mx?</text>
        <line x1="172" y1="65" x2="82" y2="65" stroke="#0F766E" strokeWidth="2" />
        <polygon points="80,65 87,61 87,69" fill="#0F766E" />
        <text x="128" y="76" textAnchor="middle" fill="#0F766E" fontSize="7.4" fontWeight="800">93.184.216.34</text>

        {/* Tarjetas visuales de Registros DNS */}
        {[
          { tag: 'A', icon: '🌐', desc: 'Nombre → IPv4 (32b)', x: 14, y: 88 },
          { tag: 'AAAA', icon: '🌐', desc: 'Nombre → IPv6 (128b)', x: 132, y: 88 },
          { tag: 'MX', icon: '📧', desc: 'Servidor de Correo', x: 14, y: 132 },
          { tag: 'CNAME', icon: '🔗', desc: 'Alias de dominio', x: 132, y: 132 },
          { tag: 'PTR', icon: '🔄', desc: 'Inverso: IP → Nombre', x: 14, y: 176 },
          { tag: 'NS', icon: '🏛️', desc: 'DNS Autoritativo', x: 132, y: 176 },
        ].map((r) => (
          <g key={r.tag} transform={`translate(${r.x}, ${r.y})`}>
            <rect width="110" height="36" rx="6" fill="#EEF2FF" stroke="#6366F1" strokeWidth="1.2" />
            <text x="8" y="15" fill="#312E81" fontSize="8.8" fontFamily="monospace" fontWeight="900">{r.icon} {r.tag}</text>
            <text x="8" y="29" fill="#44403C" fontSize="7.6" fontWeight="700">{r.desc}</text>
          </g>
        ))}

        <text x="128" y="236" textAnchor="middle" fill="#57534E" fontSize="8" fontWeight="800">UDP 53: Consultas | TCP 53: Zonas</text>
      </g>

      {/* Panel 3: Difusión Visual ARP (Grito a todos -> Responde solo el dueño) */}
      <g transform="translate(553, 12)">
        <rect width="255" height="251" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="235" height="24" rx="6" fill="#B45309" />
        <text x="127" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="800">ARP: ¿QUIÉN TIENE ESTA IP?</text>

        {/* PC Emisor */}
        <circle cx="44" cy="112" r="20" fill="#FEF3C7" stroke="#B45309" strokeWidth="2" />
        <text x="44" y="110" textAnchor="middle" fill="#78350F" fontSize="8.5" fontWeight="900">PC-A</text>
        <text x="44" y="121" textAnchor="middle" fill="#92400E" fontSize="7">Busca .1</text>

        {/* Broadcast L2 (3 flechas naranjas punteadas a todos) */}
        <line x1="64" y1="100" x2="178" y2="62" stroke="#D97706" strokeWidth="1.8" strokeDasharray="4 2" />
        <line x1="64" y1="112" x2="178" y2="112" stroke="#D97706" strokeWidth="1.8" strokeDasharray="4 2" />
        <line x1="64" y1="124" x2="178" y2="158" stroke="#D97706" strokeWidth="1.8" strokeDasharray="4 2" />
        <rect x="74" y="42" width="102" height="16" rx="4" fill="#FFFBEB" stroke="#F59E0B" />
        <text x="125" y="53" textAnchor="middle" fill="#92400E" fontSize="7.4" fontWeight="900">1. Request FF:FF:FF</text>

        {/* Nodos destino */}
        <circle cx="204" cy="62" r="16" fill="#F5F5F4" stroke="#A8A29E" strokeWidth="1.5" />
        <text x="204" y="65" textAnchor="middle" fill="#78716C" fontSize="7.5" fontWeight="800">PC-B ✗</text>

        <circle cx="204" cy="112" r="16" fill="#F5F5F4" stroke="#A8A29E" strokeWidth="1.5" />
        <text x="204" y="115" textAnchor="middle" fill="#78716C" fontSize="7.5" fontWeight="800">PC-C ✗</text>

        <circle cx="204" cy="162" r="18" fill="#CCFBF1" stroke="#0F766E" strokeWidth="2.2" />
        <text x="204" y="160" textAnchor="middle" fill="#134E4A" fontSize="8" fontWeight="900">.1 ✓</text>
        <text x="204" y="170" textAnchor="middle" fill="#0F766E" fontSize="6.8" fontWeight="800">AA:BB</text>

        {/* Unicast Reply verde solo del dueño */}
        <line x1="184" y1="168" x2="62" y2="132" stroke="#0F766E" strokeWidth="2.6" />
        <polygon points="59,131 68,129 66,137" fill="#0F766E" />
        <rect x="68" y="162" width="108" height="16" rx="4" fill="#CCFBF1" stroke="#0F766E" />
        <text x="122" y="173" textAnchor="middle" fill="#134E4A" fontSize="7.5" fontWeight="900">2. Reply Unicast (MAC)</text>

        <rect x="14" y="192" width="227" height="48" rx="7" fill="#FAF7F2" stroke="#D8D0C0" />
        <text x="127" y="209" textAnchor="middle" fill="#1C1917" fontSize="8.5" fontWeight="900">Caché ARP (IP ↔ MAC 48b)</text>
        <text x="127" y="226" textAnchor="middle" fill="#0F766E" fontSize="8.6" fontFamily="monospace" fontWeight="800">arp -a (ver) | arp -d (borrar)</text>
      </g>
    </svg>
  );
}

export function SnmpSyslogNtpDiagram() {
  const severities = [
    { lvl: '0', name: 'Emergency', w: 220, bg: '#991B1B', fg: '#FFFFFF' },
    { lvl: '1', name: 'Alert', w: 198, bg: '#DC2626', fg: '#FFFFFF' },
    { lvl: '2', name: 'Critical', w: 176, bg: '#EA580C', fg: '#FFFFFF' },
    { lvl: '3', name: 'Error', w: 154, bg: '#D97706', fg: '#FFFFFF' },
    { lvl: '4', name: 'Warning', w: 132, bg: '#F59E0B', fg: '#1C1917' },
    { lvl: '5', name: 'Notice', w: 112, bg: '#5EEAD4', fg: '#134E4A' },
    { lvl: '6', name: 'Info', w: 94, bg: '#A5B4FC', fg: '#312E81' },
    { lvl: '7', name: 'Debug', w: 76, bg: '#D6D3D1', fg: '#1C1917' },
  ];

  return (
    <svg viewBox="0 0 820 275" className="w-full h-auto" role="img" aria-label="Flujo SNMP NMS-Agente, pirámide visual NTP Stratum y termómetro Syslog 0 a 7">
      <rect width="820" height="275" rx="14" fill="#FAF7F2" />

      {/* Izquierda: SNMP + Pirámide NTP */}
      <g transform="translate(12, 12)">
        <rect width="430" height="251" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="410" height="24" rx="6" fill="#0F766E" />
        <text x="215" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="800">SNMP (UDP 161/162) Y PIRÁMIDE NTP (UDP 123)</text>

        {/* NMS vs Agente */}
        <rect x="16" y="44" width="112" height="54" rx="8" fill="#134E4A" />
        <text x="72" y="65" textAnchor="middle" fill="#FFFFFF" fontSize="9.2" fontWeight="800">🖥️ Gestor NMS</text>
        <text x="72" y="80" textAnchor="middle" fill="#99F6E4" fontSize="7.8">Zabbix / PRTG</text>

        <rect x="302" y="44" width="112" height="54" rx="8" fill="#F0FDFA" stroke="#0F766E" strokeWidth="2" />
        <text x="358" y="65" textAnchor="middle" fill="#134E4A" fontSize="9.2" fontWeight="800">🔀 Agente</text>
        <text x="358" y="80" textAnchor="middle" fill="#0F766E" fontSize="7.8" fontWeight="700">MIB (OIDs)</text>

        <line x1="132" y1="58" x2="296" y2="58" stroke="#0F766E" strokeWidth="2.4" />
        <polygon points="299,58 291,54 291,62" fill="#0F766E" />
        <text x="215" y="52" textAnchor="middle" fill="#134E4A" fontSize="8.3" fontWeight="900">Get / Set → UDP 161</text>

        <line x1="296" y1="84" x2="132" y2="84" stroke="#DC2626" strokeWidth="2.4" />
        <polygon points="129,84 137,80 137,88" fill="#DC2626" />
        <text x="215" y="98" textAnchor="middle" fill="#DC2626" fontSize="8.3" fontWeight="900">🚨 Trap (Alerta) ← UDP 162</text>

        {/* Semáforo SNMPv1/v2c vs v3 */}
        <rect x="16" y="108" width="192" height="32" rx="6" fill="#FEE2E2" stroke="#DC2626" />
        <text x="112" y="122" textAnchor="middle" fill="#991B1B" fontSize="8.4" fontWeight="900">🔓 v1 / v2c: Texto Plano</text>
        <text x="112" y="134" textAnchor="middle" fill="#7F1D1D" fontSize="7.5">Community public (Inseguro)</text>

        <rect x="218" y="108" width="196" height="32" rx="6" fill="#DCFCE7" stroke="#16A34A" />
        <text x="316" y="122" textAnchor="middle" fill="#14532D" fontSize="8.4" fontWeight="900">🔒 SNMPv3 (authPriv)</text>
        <text x="316" y="134" textAnchor="middle" fill="#166534" fontSize="7.5">HMAC-SHA + Cifrado AES</text>

        {/* Pirámide Visual NTP */}
        <rect x="16" y="148" width="398" height="92" rx="8" fill="#EEF2FF" stroke="#6366F1" strokeWidth="1.4" />
        <text x="215" y="164" textAnchor="middle" fill="#312E81" fontSize="9" fontWeight="900">⏱️ PIRÁMIDE NTP (UDP 123 — “1-2-3 es la hora”)</text>

        {/* Escalones pirámide */}
        <rect x="150" y="171" width="130" height="19" rx="5" fill="#312E81" />
        <text x="215" y="184" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="800">⚛️ Stratum 0 (Atómico/GPS)</text>
        <rect x="106" y="194" width="218" height="19" rx="5" fill="#4338CA" />
        <text x="215" y="207" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="800">Stratum 1 (Servidor Primario)</text>
        <rect x="52" y="217" width="326" height="18" rx="5" fill="#818CF8" />
        <text x="215" y="229" textAnchor="middle" fill="#FFFFFF" fontSize="7.9" fontWeight="800">Stratum 2..15 (Routers, SIEM y Logs sincronizados)</text>
      </g>

      {/* Derecha: Termómetro Visual Syslog 0 a 7 */}
      <g transform="translate(452, 12)">
        <rect width="356" height="251" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="336" height="24" rx="6" fill="#292524" />
        <text x="178" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="800">SYSLOG (UDP 514): TERMÓMETRO 0 → 7</text>

        <text x="20" y="47" fill="#991B1B" fontSize="8" fontWeight="900">🔥 MÁS CRÍTICO (0)</text>
        <text x="336" y="47" textAnchor="end" fill="#57534E" fontSize="8" fontWeight="800">TCP 6514 = TLS 🔒</text>

        {severities.map((s, idx) => {
          const y = 54 + idx * 22;
          return (
            <g key={s.lvl} transform={`translate(18, ${y})`}>
              <rect width={s.w} height="18" rx="4" fill={s.bg} />
              <text x="8" y="12.5" fill={s.fg} fontSize="8.5" fontFamily="monospace" fontWeight="900">
                {s.lvl} — {s.name}
              </text>
            </g>
          );
        })}

        <text x="20" y="241" fill="#57534E" fontSize="8" fontWeight="800">❄️ MENOS CRÍTICO (7 = Debug) • “0 = Emergencia total”</text>
      </g>
    </svg>
  );
}

export function CliDiagnosticsQosDiagram() {
  return (
    <svg viewBox="0 0 820 265" className="w-full h-auto" role="img" aria-label="Flujo visual de Traceroute incrementando TTL, comandos CLI y embudo QoS">
      <rect width="820" height="265" rx="14" fill="#FAF7F2" />

      {/* Arriba: Mecanismo Visual de Tracert / Traceroute */}
      <g transform="translate(12, 12)">
        <rect width="796" height="114" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <text x="16" y="21" fill="#1C1917" fontSize="10" fontWeight="800">
          ¿CÓMO DESCUBRE LA RUTA TRACERT / TRACEROUTE? (INCREMENTA TTL = 1, 2, 3 → ICMP 11)
        </text>

        <rect x="18" y="38" width="96" height="54" rx="8" fill="#292524" />
        <text x="66" y="59" textAnchor="middle" fill="#FFFFFF" fontSize="9.5" fontWeight="800">💻 Admin PC</text>
        <text x="66" y="75" textAnchor="middle" fill="#FDE68A" fontSize="8" fontFamily="monospace">tracert IP</text>

        {/* Salto 1: TTL=1 */}
        <line x1="116" y1="52" x2="246" y2="52" stroke="#D97706" strokeWidth="2.4" />
        <polygon points="249,52 241,48 241,56" fill="#D97706" />
        <text x="182" y="45" textAnchor="middle" fill="#92400E" fontSize="8.3" fontWeight="900">TTL = 1 →</text>
        <line x1="246" y1="74" x2="119" y2="74" stroke="#DC2626" strokeWidth="2" strokeDasharray="4 2" />
        <polygon points="116,74 124,70 124,78" fill="#DC2626" />
        <text x="182" y="88" textAnchor="middle" fill="#DC2626" fontSize="8" fontWeight="900">← ICMP 11 (Expiró!)</text>

        <circle cx="294" cy="64" r="26" fill="#FEF3C7" stroke="#B45309" strokeWidth="2.2" />
        <text x="294" y="61" textAnchor="middle" fill="#78350F" fontSize="9" fontWeight="900">R1</text>
        <text x="294" y="74" textAnchor="middle" fill="#92400E" fontSize="7.4" fontWeight="700">TTL→0</text>

        {/* Salto 2: TTL=2 */}
        <line x1="322" y1="52" x2="466" y2="52" stroke="#0F766E" strokeWidth="2.4" />
        <polygon points="469,52 461,48 461,56" fill="#0F766E" />
        <text x="395" y="45" textAnchor="middle" fill="#134E4A" fontSize="8.3" fontWeight="900">TTL = 2 →</text>
        <line x1="466" y1="74" x2="325" y2="74" stroke="#DC2626" strokeWidth="2" strokeDasharray="4 2" />
        <polygon points="322,74 330,70 330,78" fill="#DC2626" />
        <text x="395" y="88" textAnchor="middle" fill="#DC2626" fontSize="8" fontWeight="900">← ICMP 11 (Expiró!)</text>

        <circle cx="514" cy="64" r="26" fill="#CCFBF1" stroke="#0F766E" strokeWidth="2.2" />
        <text x="514" y="61" textAnchor="middle" fill="#134E4A" fontSize="9" fontWeight="900">R2</text>
        <text x="514" y="74" textAnchor="middle" fill="#0F766E" fontSize="7.4" fontWeight="700">TTL→0</text>

        {/* Destino final */}
        <line x1="542" y1="64" x2="660" y2="64" stroke="#4338CA" strokeWidth="2.6" />
        <polygon points="663,64 655,60 655,68" fill="#4338CA" />
        <text x="602" y="55" textAnchor="middle" fill="#312E81" fontSize="8.4" fontWeight="900">TTL = 3 ✓</text>

        <rect x="668" y="38" width="112" height="54" rx="8" fill="#EEF2FF" stroke="#4338CA" strokeWidth="2" />
        <text x="724" y="59" textAnchor="middle" fill="#312E81" fontSize="9.2" fontWeight="900">🎯 Destino</text>
        <text x="724" y="75" textAnchor="middle" fill="#4338CA" fontSize="8" fontWeight="800">Echo Reply (RTT)</text>
      </g>

      {/* Abajo: 4 Tarjetas visuales de Comandos CLI */}
      <g transform="translate(12, 136)">
        <rect width="796" height="117" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <text x="16" y="21" fill="#1C1917" fontSize="10" fontWeight="800">
          BRÚJULA RÁPIDA DE COMANDOS CLI (¿QUÉ PREGUNTA RESPONDE CADA UNO?)
        </text>

        {[
          { cmd: 'ping -t <IP>', q: '¿Está vivo?', sub: 'ICMP Echo 8 / Reply 0', bg: '#F0FDFA', bd: '#0F766E', fg: '#134E4A' },
          { cmd: 'nslookup / dig', q: '¿Falla DNS?', sub: 'Ping IP ✓ pero Web ✗', bg: '#EEF2FF', bd: '#4338CA', fg: '#312E81' },
          { cmd: 'netstat -an', q: '¿Qué puertos?', sub: 'LISTENING / ESTABLISHED', bg: '#FFFBEB', bd: '#D97706', fg: '#92400E' },
          { cmd: 'ipconfig /all', q: '¿Mi IP/MAC?', sub: 'Linux: ip addr | route print', bg: '#FCE7F3', bd: '#BE185D', fg: '#831843' },
        ].map((c, i) => (
          <g key={i} transform={`translate(${14 + i * 194}, 32)`}>
            <rect width="184" height="72" rx="8" fill={c.bg} stroke={c.bd} strokeWidth="1.6" />
            <rect x="10" y="9" width="164" height="20" rx="5" fill="#1C1917" />
            <text x="92" y="22.5" textAnchor="middle" fill="#A7F3D0" fontSize="8.8" fontFamily="monospace" fontWeight="800">{c.cmd}</text>
            <text x="92" y="47" textAnchor="middle" fill={c.fg} fontSize="9.8" fontWeight="900">{c.q}</text>
            <text x="92" y="62" textAnchor="middle" fill="#57534E" fontSize="8" fontWeight="700">{c.sub}</text>
          </g>
        ))}
      </g>
    </svg>
  );
}

export function ProtocolsPortsMasterDiagram() {
  const pairs = [
    { bad: '🔓 23 Telnet', good: '🔒 22 SSH', role: 'Consola CLI' },
    { bad: '🔓 20/21 FTP', good: '🔒 22 SFTP', role: 'Archivos' },
    { bad: '🔓 80 HTTP', good: '🔒 443 HTTPS', role: 'Web / API' },
    { bad: '🔓 25 SMTP', good: '🔒 587 TLS', role: 'Envío Correo' },
    { bad: '🔓 110 POP3', good: '🔒 995 POP3S', role: 'Bajar Correo' },
    { bad: '🔓 143 IMAP', good: '🔒 993 IMAPS', role: 'Sinc. Correo' },
    { bad: '🔓 389 LDAP', good: '🔒 636 LDAPS', role: 'Directorio AD' },
  ];

  const infra = [
    { port: '53', name: 'DNS', proto: 'UDP/TCP', color: '#4338CA', bg: '#EEF2FF' },
    { port: '67/68', name: 'DHCP', proto: 'UDP', color: '#0F766E', bg: '#F0FDFA' },
    { port: '69', name: 'TFTP', proto: 'UDP', color: '#B45309', bg: '#FFFBEB' },
    { port: '123', name: 'NTP', proto: 'UDP Reloj', color: '#4338CA', bg: '#EEF2FF' },
    { port: '161/162', name: 'SNMP', proto: 'UDP Trap', color: '#0F766E', bg: '#F0FDFA' },
    { port: '179', name: 'BGP', proto: 'TCP WAN', color: '#BE185D', bg: '#FCE7F3' },
    { port: '445', name: 'SMB', proto: 'TCP Win', color: '#44403C', bg: '#F5F5F4' },
    { port: '514', name: 'Syslog', proto: 'UDP Logs', color: '#B45309', bg: '#FFFBEB' },
    { port: '1812', name: 'RADIUS', proto: 'UDP AAA', color: '#BE185D', bg: '#FCE7F3' },
    { port: '3389', name: 'RDP', proto: 'TCP Win', color: '#0F766E', bg: '#F0FDFA' },
  ];

  return (
    <svg viewBox="0 0 820 275" className="w-full h-auto" role="img" aria-label="Mapa visual de puertos inseguros vs cifrados y fichas de puertos de infraestructura">
      <rect width="820" height="275" rx="14" fill="#FAF7F2" />

      {/* Izquierda: Parejas Inseguro -> Seguro */}
      <g transform="translate(12, 12)">
        <rect width="454" height="251" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="434" height="24" rx="6" fill="#292524" />
        <text x="227" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="800">PAREJAS DE EXAMEN: 🔓 TEXTO PLANO  ──►  🔒 CIFRADO (TLS/SSH)</text>

        {pairs.map((p, i) => {
          const y = 42 + i * 29;
          return (
            <g key={i} transform={`translate(14, ${y})`}>
              <rect width="128" height="23" rx="5" fill="#FEE2E2" stroke="#DC2626" strokeWidth="1.2" />
              <text x="64" y="15" textAnchor="middle" fill="#991B1B" fontSize="8.8" fontFamily="monospace" fontWeight="800">{p.bad}</text>

              <line x1="132" y1="11.5" x2="178" y2="11.5" stroke="#0F766E" strokeWidth="2" />
              <polygon points="181,11.5 174,8 174,15" fill="#0F766E" />

              <rect x="184" width="136" height="23" rx="5" fill="#DCFCE7" stroke="#16A34A" strokeWidth="1.4" />
              <text x="252" y="15" textAnchor="middle" fill="#14532D" fontSize="8.8" fontFamily="monospace" fontWeight="900">{p.good}</text>

              <rect x="328" width="98" height="23" rx="5" fill="#FAF7F2" stroke="#D8D0C0" />
              <text x="377" y="15" textAnchor="middle" fill="#44403C" fontSize="8.4" fontWeight="800">{p.role}</text>
            </g>
          );
        })}
      </g>

      {/* Derecha: Fichas visuales de Puertos de Infraestructura */}
      <g transform="translate(476, 12)">
        <rect width="332" height="251" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="312" height="24" rx="6" fill="#0F766E" />
        <text x="166" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="800">FICHAS RÁPIDAS: INFRAESTRUCTURA</text>

        {infra.map((item, idx) => {
          const col = idx % 2;
          const row = Math.floor(idx / 2);
          const x = 14 + col * 155;
          const y = 42 + row * 40;
          return (
            <g key={item.name} transform={`translate(${x}, ${y})`}>
              <rect width="147" height="33" rx="7" fill={item.bg} stroke={item.color} strokeWidth="1.4" />
              <rect x="6" y="6" width="54" height="21" rx="5" fill={item.color} />
              <text x="33" y="20" textAnchor="middle" fill="#FFFFFF" fontSize="8.5" fontFamily="monospace" fontWeight="900">{item.port}</text>
              <text x="68" y="16" fill="#1C1917" fontSize="9.2" fontWeight="900">{item.name}</text>
              <text x="68" y="28" fill="#57534E" fontSize="7.4" fontWeight="700">{item.proto}</text>
            </g>
          );
        })}
      </g>
    </svg>
  );
}

export function SwitchSviQosNetflowDiagram() {
  return (
    <svg viewBox="0 0 820 265" className="w-full h-auto" role="img" aria-label="Gestión remota de Switch SVI y autopista visual de colas QoS LLQ">
      <rect width="820" height="265" rx="14" fill="#FAF7F2" />

      {/* Izquierda: Ruta Admin -> Gateway -> Switch SVI */}
      <g transform="translate(12, 12)">
        <rect width="405" height="241" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="385" height="24" rx="6" fill="#0F766E" />
        <text x="202" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="800">GESTIÓN REMOTA DE SWITCH L2 (OTRA SUBRED)</text>

        <rect x="16" y="46" width="88" height="46" rx="7" fill="#292524" />
        <text x="60" y="66" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="800">💻 Admin</text>
        <text x="60" y="81" textAnchor="middle" fill="#A7F3D0" fontSize="8" fontFamily="monospace">SSH :22 🔒</text>

        <line x1="104" y1="69" x2="150" y2="69" stroke="#0F766E" strokeWidth="2.8" />
        <polygon points="152,69 144,65 144,73" fill="#0F766E" />

        <rect x="154" y="46" width="96" height="46" rx="7" fill="#FEF3C7" stroke="#B45309" strokeWidth="2" />
        <text x="202" y="65" textAnchor="middle" fill="#78350F" fontSize="9" fontWeight="900">🧭 Gateway</text>
        <text x="202" y="80" textAnchor="middle" fill="#92400E" fontSize="7.8" fontFamily="monospace">192.168.99.1</text>

        <line x1="250" y1="69" x2="292" y2="69" stroke="#0F766E" strokeWidth="2.8" />
        <polygon points="294,69 286,65 286,73" fill="#0F766E" />

        <rect x="296" y="46" width="94" height="46" rx="7" fill="#134E4A" />
        <text x="343" y="65" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="800">🔀 Switch</text>
        <text x="343" y="80" textAnchor="middle" fill="#99F6E4" fontSize="7.8" fontFamily="monospace">SVI VLAN 99</text>

        <rect x="16" y="106" width="374" height="122" rx="8" fill="#1C1917" />
        <text x="26" y="124" fill="#FDE68A" fontSize="8.8" fontWeight="800">4 Comandos Cisco IOS obligatorios:</text>
        <text x="26" y="143" fill="#A7F3D0" fontSize="8.4" fontFamily="monospace">1) interface vlan 99 → ip address ...</text>
        <text x="26" y="161" fill="#93C5FD" fontSize="8.4" fontFamily="monospace">2) ip default-gateway 192.168.99.1</text>
        <text x="26" y="179" fill="#FCA5A5" fontSize="8.4" fontFamily="monospace">3) transport input ssh (Bloquea Telnet)</text>
        <text x="26" y="197" fill="#E9D5FF" fontSize="8.4" fontFamily="monospace">4) copy running-config startup-config</text>
        <text x="26" y="216" fill="#D6D3D1" fontSize="7.8">RAM (volátil) ──► NVRAM (permanente al reiniciar)</text>
      </g>

      {/* Derecha: Autopista Visual de Colas QoS */}
      <g transform="translate(427, 12)">
        <rect width="381" height="241" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="361" height="24" rx="6" fill="#4338CA" />
        <text x="190" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="800">AUTOPISTA QoS (CoS L2 / DSCP L3) Y MONITOREO</text>

        {/* Carril 1 Express VoIP */}
        <rect x="16" y="44" width="235" height="32" rx="6" fill="#DCFCE7" stroke="#16A34A" strokeWidth="1.8" />
        <text x="26" y="59" fill="#14532D" fontSize="8.8" fontWeight="900">🚑 1. LLQ (Prioridad Estricta)</text>
        <text x="26" y="71" fill="#166534" fontSize="7.6" fontWeight="700">VoIP / Video (Cero Jitter)</text>
        <line x1="251" y1="60" x2="294" y2="86" stroke="#16A34A" strokeWidth="3.2" />

        {/* Carril 2 ERP */}
        <rect x="16" y="83" width="235" height="30" rx="6" fill="#FEF3C7" stroke="#D97706" strokeWidth="1.5" />
        <text x="26" y="97" fill="#92400E" fontSize="8.6" fontWeight="800">🚚 2. CBWFQ (Garantizada)</text>
        <text x="26" y="108" fill="#78350F" fontSize="7.5">Apps críticas / ERP / SQL</text>
        <line x1="251" y1="98" x2="294" y2="98" stroke="#D97706" strokeWidth="2.2" />

        {/* Carril 3 Descargas */}
        <rect x="16" y="120" width="235" height="30" rx="6" fill="#F5F5F4" stroke="#78716C" strokeWidth="1.4" />
        <text x="26" y="134" fill="#44403C" fontSize="8.6" fontWeight="800">🐢 3. Best-Effort (Al final)</text>
        <text x="26" y="145" fill="#57534E" fontSize="7.5">Descargas, P2P, Backups</text>
        <line x1="251" y1="135" x2="294" y2="110" stroke="#78716C" strokeWidth="1.6" strokeDasharray="3 2" />

        {/* Embudo de salida WAN */}
        <rect x="296" y="76" width="72" height="44" rx="8" fill="#134E4A" />
        <text x="332" y="95" textAnchor="middle" fill="#FFFFFF" fontSize="8.5" fontWeight="900">Enlace</text>
        <text x="332" y="109" textAnchor="middle" fill="#99F6E4" fontSize="8" fontWeight="800">WAN →</text>

        {/* Wireshark vs NetFlow */}
        <rect x="16" y="162" width="170" height="66" rx="7" fill="#EEF2FF" stroke="#4338CA" strokeWidth="1.4" />
        <text x="101" y="180" textAnchor="middle" fill="#312E81" fontSize="9" fontWeight="900">🦈 Wireshark (SPAN)</text>
        <text x="101" y="196" textAnchor="middle" fill="#44403C" fontSize="8">Captura paquete</text>
        <text x="101" y="210" textAnchor="middle" fill="#4338CA" fontSize="8" fontWeight="800">COMPLETO (Trama)</text>

        <rect x="196" y="162" width="170" height="66" rx="7" fill="#FFFBEB" stroke="#D97706" strokeWidth="1.4" />
        <text x="281" y="180" textAnchor="middle" fill="#92400E" fontSize="9" fontWeight="900">📊 NetFlow / Baseline</text>
        <text x="281" y="196" textAnchor="middle" fill="#44403C" fontSize="8">Estadística de flujos</text>
        <text x="281" y="210" textAnchor="middle" fill="#B45309" fontSize="8" fontWeight="800">y perfil normal</text>
      </g>
    </svg>
  );
}

export function CryptoCiaPkiDiagram() {
  return (
    <svg viewBox="0 0 820 275" className="w-full h-auto" role="img" aria-label="Triángulo visual CIA, llaves simétricas vs asimétricas y diagrama de cifrado y firma digital">
      <rect width="820" height="275" rx="14" fill="#FAF7F2" />

      {/* Panel 1: TRIÁNGULO VISUAL CIA */}
      <g transform="translate(12, 12)">
        <rect width="248" height="251" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="228" height="24" rx="6" fill="#292524" />
        <text x="124" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="800">TRÍADA CIA + NO REPUDIO</text>

        {/* Triángulo */}
        <polygon points="124,62 48,176 200,176" fill="#FAF7F2" stroke="#0F766E" strokeWidth="2.5" />

        {/* Vértice Superior: C */}
        <rect x="64" y="44" width="120" height="36" rx="8" fill="#CCFBF1" stroke="#0F766E" strokeWidth="1.8" />
        <text x="124" y="60" textAnchor="middle" fill="#134E4A" fontSize="9" fontWeight="900">🔒 Confidencialidad</text>
        <text x="124" y="73" textAnchor="middle" fill="#0F766E" fontSize="7.6" fontWeight="700">Cifrado (AES/TLS)</text>

        {/* Vértice Izquierdo: I */}
        <rect x="14" y="156" width="104" height="38" rx="8" fill="#FEF3C7" stroke="#D97706" strokeWidth="1.8" />
        <text x="66" y="172" textAnchor="middle" fill="#92400E" fontSize="8.8" fontWeight="900">#️⃣ Integridad</text>
        <text x="66" y="185" textAnchor="middle" fill="#78350F" fontSize="7.5" fontWeight="700">Hash SHA-256</text>

        {/* Vértice Derecho: A */}
        <rect x="130" y="156" width="104" height="38" rx="8" fill="#E0E7FF" stroke="#4338CA" strokeWidth="1.8" />
        <text x="182" y="172" textAnchor="middle" fill="#312E81" fontSize="8.6" fontWeight="900">⚡ Disponibilidad</text>
        <text x="182" y="185" textAnchor="middle" fill="#4338CA" fontSize="7.4" fontWeight="700">RAID / Anti-DDoS</text>

        {/* Centro: CIA */}
        <circle cx="124" cy="130" r="18" fill="#292524" />
        <text x="124" y="134" textAnchor="middle" fill="#FDE68A" fontSize="10" fontWeight="900">CIA</text>

        {/* Base: No Repudio */}
        <rect x="14" y="204" width="220" height="36" rx="7" fill="#FCE7F3" stroke="#BE185D" strokeWidth="1.4" />
        <text x="124" y="219" textAnchor="middle" fill="#831843" fontSize="8.8" fontWeight="900">✍️ No Repudio (Autoría legal)</text>
        <text x="124" y="232" textAnchor="middle" fill="#9D174D" fontSize="7.6" fontWeight="700">Firma Digital con Clave Privada</text>
      </g>

      {/* Panel 2: SIMÉTRICA (1 LLAVE) vs ASIMÉTRICA (2 LLAVES) */}
      <g transform="translate(270, 12)">
        <rect width="268" height="251" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="248" height="24" rx="6" fill="#0F766E" />
        <text x="134" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="800">1 LLAVE vs. 2 LLAVES</text>

        {/* Simétrica */}
        <rect x="12" y="42" width="244" height="94" rx="8" fill="#F0FDFA" stroke="#0F766E" strokeWidth="1.6" />
        <text x="134" y="59" textAnchor="middle" fill="#134E4A" fontSize="9.4" fontWeight="900">SIMÉTRICA = 1 MISMA LLAVE 🔑</text>
        <rect x="22" y="68" width="54" height="24" rx="5" fill="#134E4A" />
        <text x="49" y="83" textAnchor="middle" fill="#FFF" fontSize="7.8" fontWeight="800">Cifra 🔑</text>
        <line x1="78" y1="80" x2="188" y2="80" stroke="#0F766E" strokeWidth="2.4" />
        <text x="134" y="75" textAnchor="middle" fill="#0F766E" fontSize="8" fontWeight="900">⚡ Ultrarrápido</text>
        <rect x="190" y="68" width="56" height="24" rx="5" fill="#134E4A" />
        <text x="218" y="83" textAnchor="middle" fill="#FFF" fontSize="7.8" fontWeight="800">Abre 🔑</text>
        <rect x="22" y="100" width="110" height="26" rx="5" fill="#DCFCE7" stroke="#16A34A" />
        <text x="77" y="116" textAnchor="middle" fill="#14532D" fontSize="8.5" fontWeight="900">✓ AES (128-256b)</text>
        <rect x="138" y="100" width="108" height="26" rx="5" fill="#FEE2E2" stroke="#DC2626" />
        <text x="192" y="116" textAnchor="middle" fill="#991B1B" fontSize="8.5" fontWeight="900">✗ DES (56b roto)</text>

        {/* Asimétrica */}
        <rect x="12" y="144" width="244" height="95" rx="8" fill="#FFFBEB" stroke="#D97706" strokeWidth="1.6" />
        <text x="134" y="161" textAnchor="middle" fill="#92400E" fontSize="9.4" fontWeight="900">ASIMÉTRICA = PAR 🔓 PÚBLICA / 🔐 PRIVADA</text>
        <rect x="22" y="170" width="106" height="26" rx="5" fill="#EEF2FF" stroke="#4338CA" />
        <text x="75" y="186" textAnchor="middle" fill="#312E81" fontSize="8.3" fontWeight="900">RSA (Primos)</text>
        <rect x="136" y="170" width="110" height="26" rx="5" fill="#EEF2FF" stroke="#4338CA" />
        <text x="191" y="186" textAnchor="middle" fill="#312E81" fontSize="8.3" fontWeight="900">ECC (Clave corta)</text>
        <text x="134" y="213" textAnchor="middle" fill="#57534E" fontSize="8.2" fontWeight="700">🏛️ PKI: CA emite Certificado X.509</text>
        <text x="134" y="229" textAnchor="middle" fill="#4338CA" fontSize="8.1" fontWeight="800">#️⃣ Hash: SHA-256 ✓ (MD5/SHA-1 ✗)</text>
      </g>

      {/* Panel 3: REGLA DE ORO VISUAL (CIFRAR vs FIRMAR) */}
      <g transform="translate(548, 12)">
        <rect width="260" height="251" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="240" height="24" rx="6" fill="#B45309" />
        <text x="130" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="800">REGLA DE ORO ASIMÉTRICA</text>

        {/* Caso A: Cifrar */}
        <rect x="12" y="42" width="236" height="94" rx="8" fill="#F0FDFA" stroke="#0F766E" strokeWidth="1.6" />
        <text x="130" y="59" textAnchor="middle" fill="#134E4A" fontSize="9.2" fontWeight="900">A) CONFIDENCIALIDAD (CIFRAR)</text>
        <circle cx="38" cy="90" r="15" fill="#CCFBF1" stroke="#0F766E" strokeWidth="1.6" />
        <text x="38" y="93" textAnchor="middle" fill="#134E4A" fontSize="7.5" fontWeight="900">Emisor</text>
        <rect x="64" y="76" width="132" height="28" rx="6" fill="#0F766E" />
        <text x="130" y="89" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="900">🔓 PÚBLICA del Receptor</text>
        <text x="130" y="100" textAnchor="middle" fill="#99F6E4" fontSize="7">“Pública para Proteger”</text>
        <circle cx="222" cy="90" r="15" fill="#134E4A" />
        <text x="222" y="93" textAnchor="middle" fill="#FFF" fontSize="7.2" fontWeight="900">Recept</text>
        <text x="130" y="126" textAnchor="middle" fill="#0F766E" fontSize="8" fontWeight="800">Solo Receptor abre con 🔐 su Privada</text>

        {/* Caso B: Firmar */}
        <rect x="12" y="144" width="236" height="95" rx="8" fill="#FFFBEB" stroke="#D97706" strokeWidth="1.6" />
        <text x="130" y="161" textAnchor="middle" fill="#92400E" fontSize="9.2" fontWeight="900">B) FIRMA DIGITAL (NO REPUDIO)</text>
        <circle cx="38" cy="192" r="15" fill="#B45309" />
        <text x="38" y="195" textAnchor="middle" fill="#FFF" fontSize="7.5" fontWeight="900">Emisor</text>
        <rect x="64" y="178" width="132" height="28" rx="6" fill="#B45309" />
        <text x="130" y="191" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="900">🔐 PRIVADA del Emisor</text>
        <text x="130" y="202" textAnchor="middle" fill="#FDE68A" fontSize="7">“Privada para Probar”</text>
        <circle cx="222" cy="192" r="15" fill="#FEF3C7" stroke="#B45309" strokeWidth="1.6" />
        <text x="222" y="195" textAnchor="middle" fill="#78350F" fontSize="7.4" fontWeight="900">Todos</text>
        <text x="130" y="228" textAnchor="middle" fill="#92400E" fontSize="8" fontWeight="800">Cualquiera verifica con 🔓 Pública Emisor</text>
      </g>
    </svg>
  );
}

export function PerimeterDefenseIdsIpsDiagram() {
  return (
    <svg viewBox="0 0 820 270" className="w-full h-auto" role="img" aria-label="Arquitectura perimetral Firewall, DMZ, diferencia visual entre IPS en línea e IDS pasivo">
      <rect width="820" height="270" rx="14" fill="#FAF7F2" />

      {/* Flujo principal En Línea: Internet -> Firewall/NGFW -> IPS (In-Line) -> Switch Core -> LAN */}
      <g transform="translate(12, 12)">
        <rect width="796" height="145" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <text x="16" y="21" fill="#1C1917" fontSize="10.2" fontWeight="800">
          DEFENSA PERIMETRAL: FIREWALL / DMZ • 🛑 IPS (EN LÍNEA = BLOQUEA) vs. 👁️ IDS (PASIVO = ALERTA)
        </text>

        {/* Internet / VPN */}
        <rect x="16" y="42" width="102" height="50" rx="8" fill="#FEE2E2" stroke="#DC2626" strokeWidth="1.8" />
        <text x="67" y="63" textAnchor="middle" fill="#991B1B" fontSize="9.5" fontWeight="800">☁️ INTERNET</text>
        <text x="67" y="77" textAnchor="middle" fill="#7F1D1D" fontSize="7.8">Túnel VPN ESP</text>

        <line x1="118" y1="67" x2="156" y2="67" stroke="#44403C" strokeWidth="2.8" />
        <polygon points="158,67 150,63 150,71" fill="#44403C" />

        {/* Firewall Stateful / NGFW L7 */}
        <rect x="158" y="36" width="132" height="62" rx="8" fill="#B45309" />
        <text x="224" y="56" textAnchor="middle" fill="#FFFFFF" fontSize="9.5" fontWeight="800">🧱 FIREWALL / NGFW</text>
        <text x="224" y="70" textAnchor="middle" fill="#FEF3C7" fontSize="8" fontWeight="700">Stateful L3/L4 + DPI L7</text>
        <text x="224" y="83" textAnchor="middle" fill="#FDE68A" fontSize="7.5">Filtra apps y puertos</text>

        {/* Bajada a DMZ */}
        <line x1="224" y1="98" x2="224" y2="115" stroke="#D97706" strokeWidth="2.2" />
        <rect x="140" y="115" width="168" height="24" rx="5" fill="#FFFBEB" stroke="#F59E0B" strokeWidth="1.5" />
        <text x="224" y="131" textAnchor="middle" fill="#92400E" fontSize="8.3" fontWeight="800">🛡️ DMZ (Web / Mail / Honeypot)</text>

        <line x1="290" y1="67" x2="333" y2="67" stroke="#0F766E" strokeWidth="2.8" />
        <polygon points="335,67 327,63 327,71" fill="#0F766E" />

        {/* IPS En Línea (In-Line) */}
        <rect x="335" y="36" width="155" height="62" rx="8" fill="#0F766E" />
        <text x="412" y="55" textAnchor="middle" fill="#FFFFFF" fontSize="9.8" fontWeight="900">🛑 IPS (PREVENCIÓN)</text>
        <text x="412" y="69" textAnchor="middle" fill="#CCFBF1" fontSize="8.3" fontWeight="800">EN LÍNEA (In-Line)</text>
        <text x="412" y="83" textAnchor="middle" fill="#FDE68A" fontSize="7.8" fontWeight="800">PARA / BLOQUEA (Drop)</text>

        <line x1="490" y1="67" x2="530" y2="67" stroke="#0F766E" strokeWidth="2.8" />
        <polygon points="532,67 524,63 524,71" fill="#0F766E" />

        {/* Switch Interno con puerto SPAN */}
        <rect x="532" y="42" width="112" height="50" rx="8" fill="#134E4A" />
        <text x="588" y="63" textAnchor="middle" fill="#FFFFFF" fontSize="9.2" fontWeight="800">🔀 Switch LAN</text>
        <text x="588" y="77" textAnchor="middle" fill="#99F6E4" fontSize="7.8">Copia SPAN</text>

        {/* Bajada copia pasiva a IDS */}
        <line x1="588" y1="92" x2="588" y2="115" stroke="#4338CA" strokeWidth="2.2" strokeDasharray="4 2" />
        <rect x="480" y="115" width="228" height="24" rx="5" fill="#EEF2FF" stroke="#4338CA" strokeWidth="1.5" />
        <text x="594" y="131" textAnchor="middle" fill="#312E81" fontSize="8.3" fontWeight="900">👁️ IDS (PASIVO): Solo Alerta → SIEM</text>

        <line x1="644" y1="67" x2="678" y2="67" stroke="#0F766E" strokeWidth="2.8" />
        <polygon points="680,67 672,63 672,71" fill="#0F766E" />

        {/* Red Interna LAN */}
        <rect x="680" y="42" width="102" height="50" rx="8" fill="#F0FDFA" stroke="#0F766E" strokeWidth="1.8" />
        <text x="731" y="63" textAnchor="middle" fill="#134E4A" fontSize="9.2" fontWeight="900">🏢 LAN INTERNA</text>
        <text x="731" y="77" textAnchor="middle" fill="#0F766E" fontSize="7.8">Proxy + MFA</text>
      </g>

      {/* Abajo: Matriz Visual Ataque -> Escudo */}
      <g transform="translate(12, 166)">
        <rect width="796" height="92" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <text x="16" y="20" fill="#1C1917" fontSize="10" fontWeight="800">
          ATAQUES LAN / WLAN Y SU ESCUDO EXACTO (EXAMEN EGEL)
        </text>

        {[
          { x: 14, atk: 'MAC Flooding (CAM)', def: '🛡️ Port Security', bg: '#F0FDFA', bd: '#0F766E', fg: '#134E4A' },
          { x: 208, atk: 'Rogue DHCP Pirata', def: '🛡️ DHCP Snooping', bg: '#FFFBEB', bd: '#D97706', fg: '#92400E' },
          { x: 402, atk: 'ARP Spoofing (MITM)', def: '🛡️ Dynamic ARP (DAI)', bg: '#EEF2FF', bd: '#4338CA', fg: '#312E81' },
          { x: 596, atk: 'Deauth Wi-Fi', def: '🛡️ WPA3 + 802.11w', bg: '#FCE7F3', bd: '#BE185D', fg: '#831843' },
        ].map((item, i) => (
          <g key={i} transform={`translate(${item.x}, 28)`}>
            <rect width="186" height="52" rx="7" fill={item.bg} stroke={item.bd} strokeWidth="1.6" />
            <text x="93" y="19" textAnchor="middle" fill="#DC2626" fontSize="8.5" fontWeight="900">✗ {item.atk}</text>
            <text x="93" y="39" textAnchor="middle" fill={item.fg} fontSize="8.8" fontWeight="900">{item.def}</text>
          </g>
        ))}
      </g>
    </svg>
  );
}

export function NetworkAttacksTaxonomyDiagram() {
  return (
    <svg viewBox="0 0 820 275" className="w-full h-auto" role="img" aria-label="Esquemas visuales de ataques DDoS, MITM vs Sniffing, Replay y clasificación de Malware">
      <rect width="820" height="275" rx="14" fill="#FAF7F2" />

      {/* Izquierda: Esquemas gráficos de DDoS, MITM y Replay */}
      <g transform="translate(12, 12)">
        <rect width="415" height="251" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="395" height="24" rx="6" fill="#991B1B" />
        <text x="207" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="800">MECÁNICA VISUAL DE ATAQUES EN RED</text>

        {/* 1. DDoS Botnet */}
        <g transform="translate(14, 42)">
          <rect width="387" height="62" rx="8" fill="#FEF2F2" stroke="#DC2626" strokeWidth="1.4" />
          <circle cx="28" cy="18" r="9" fill="#DC2626" />
          <text x="28" y="21" textAnchor="middle" fill="#FFF" fontSize="7.5" fontWeight="900">Z1</text>
          <circle cx="28" cy="38" r="9" fill="#DC2626" />
          <text x="28" y="41" textAnchor="middle" fill="#FFF" fontSize="7.5" fontWeight="900">Z2</text>
          <circle cx="28" cy="54" r="7" fill="#DC2626" />
          <line x1="39" y1="18" x2="108" y2="31" stroke="#DC2626" strokeWidth="1.8" />
          <line x1="39" y1="38" x2="108" y2="33" stroke="#DC2626" strokeWidth="1.8" />
          <line x1="37" y1="53" x2="108" y2="36" stroke="#DC2626" strokeWidth="1.8" />
          <rect x="112" y="14" width="54" height="34" rx="6" fill="#991B1B" />
          <text x="139" y="30" textAnchor="middle" fill="#FFF" fontSize="8" fontWeight="900">💥 Server</text>
          <text x="139" y="41" textAnchor="middle" fill="#FCA5A5" fontSize="7">CAÍDO</text>
          <text x="178" y="25" fill="#991B1B" fontSize="9.2" fontWeight="900">1. DDoS (Botnet)</text>
          <text x="178" y="40" fill="#7F1D1D" fontSize="8.2">Ataca la DISPONIBILIDAD</text>
          <text x="178" y="53" fill="#57534E" fontSize="7.8">Inundación SYN / UDP Flood</text>
        </g>

        {/* 2. MITM vs Sniffing */}
        <g transform="translate(14, 111)">
          <rect width="387" height="62" rx="8" fill="#FFFBEB" stroke="#D97706" strokeWidth="1.4" />
          <circle cx="28" cy="31" r="13" fill="#CCFBF1" stroke="#0F766E" strokeWidth="1.6" />
          <text x="28" y="34" textAnchor="middle" fill="#134E4A" fontSize="8" fontWeight="900">PC A</text>
          <line x1="41" y1="31" x2="76" y2="31" stroke="#DC2626" strokeWidth="2.2" />
          <circle cx="92" cy="31" r="15" fill="#DC2626" />
          <text x="92" y="34" textAnchor="middle" fill="#FFF" fontSize="8" fontWeight="900">😈</text>
          <line x1="107" y1="31" x2="142" y2="31" stroke="#DC2626" strokeWidth="2.2" />
          <circle cx="155" cy="31" r="13" fill="#CCFBF1" stroke="#0F766E" strokeWidth="1.6" />
          <text x="155" y="34" textAnchor="middle" fill="#134E4A" fontSize="8" fontWeight="900">PC B</text>
          <text x="178" y="23" fill="#92400E" fontSize="9.2" fontWeight="900">2. MITM vs. Sniffing</text>
          <text x="178" y="38" fill="#78350F" fontSize="8.1">MITM: Intercepta y ALTERA</text>
          <text x="178" y="51" fill="#57534E" fontSize="7.9">Sniffing: Solo escucha texto plano</text>
        </g>

        {/* 3. Replay Attack */}
        <g transform="translate(14, 180)">
          <rect width="387" height="59" rx="8" fill="#EEF2FF" stroke="#4338CA" strokeWidth="1.4" />
          <rect x="14" y="16" width="58" height="26" rx="5" fill="#4338CA" />
          <text x="43" y="32" textAnchor="middle" fill="#FFF" fontSize="8" fontWeight="800">🎟️ Token</text>
          <path d="M 80 28 C 102 6, 134 6, 148 26" fill="none" stroke="#DC2626" strokeWidth="2.2" />
          <polygon points="150,29 142,24 149,20" fill="#DC2626" />
          <text x="114" y="45" textAnchor="middle" fill="#DC2626" fontSize="8" fontWeight="900">↻ Reenvía</text>
          <text x="178" y="23" fill="#312E81" fontSize="9.2" fontWeight="900">3. Replay Attack</text>
          <text x="178" y="38" fill="#4338CA" fontSize="8.2" fontWeight="800">Defensa: Timestamp + Nonce</text>
          <text x="178" y="50" fill="#57534E" fontSize="7.6">+ Ing. Social: Phishing / Shoulder Surfing</text>
        </g>
      </g>

      {/* Derecha: Tarjetas visuales de Malware + 0-Day */}
      <g transform="translate(437, 12)">
        <rect width="371" height="251" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="351" height="24" rx="6" fill="#292524" />
        <text x="185" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="800">MALWARE (DIFERENCIA CLAVE) Y ZERO-DAY</text>

        {/* Gusano */}
        <g transform="translate(14, 42)">
          <rect width="343" height="50" rx="8" fill="#FEF3C7" stroke="#D97706" strokeWidth="1.5" />
          <text x="26" y="31" textAnchor="middle" fontSize="18">🐛</text>
          <text x="48" y="21" fill="#92400E" fontSize="9.4" fontWeight="900">GUSANO (Worm) — PC → PC → PC</text>
          <text x="48" y="38" fill="#57534E" fontSize="8.3" fontWeight="700">Se propaga SOLO por la red (sin humano, ej. SMB 445)</text>
        </g>

        {/* Ransomware */}
        <g transform="translate(14, 99)">
          <rect width="343" height="48" rx="8" fill="#FEE2E2" stroke="#DC2626" strokeWidth="1.5" />
          <text x="26" y="30" textAnchor="middle" fontSize="18">🔐</text>
          <text x="48" y="21" fill="#991B1B" fontSize="9.4" fontWeight="900">RANSOMWARE — Cifra + Pide Rescate $</text>
          <text x="48" y="37" fill="#7F1D1D" fontSize="8.3" fontWeight="700">Secuestra archivos/discos (Defensa: Backups offline)</text>
        </g>

        {/* Troyano */}
        <g transform="translate(14, 154)">
          <rect width="343" height="42" rx="8" fill="#F5F5F4" stroke="#57534E" strokeWidth="1.5" />
          <text x="26" y="27" textAnchor="middle" fontSize="17">🐴</text>
          <text x="48" y="19" fill="#1C1917" fontSize="9.2" fontWeight="900">TROYANO (Trojan) — Disfraz + Backdoor</text>
          <text x="48" y="33" fill="#57534E" fontSize="8.1">Parece app legítima, abre puerta trasera oculta</text>
        </g>

        {/* 0-Day y CVE */}
        <g transform="translate(14, 203)">
          <rect width="343" height="37" rx="8" fill="#FCE7F3" stroke="#BE185D" strokeWidth="1.5" />
          <text x="171" y="16" textAnchor="middle" fill="#831843" fontSize="8.8" fontWeight="900">🚨 Zero-Day (0-Day): Falla SIN parche del fabricante aún</text>
          <text x="171" y="30" textAnchor="middle" fill="#9D174D" fontSize="8" fontWeight="700">CVE = ID público oficial de vulnerabilidades (CVE-AAAA-NNNN)</text>
        </g>
      </g>
    </svg>
  );
}

export function Layer2SecurityWpa3VpnDiagram() {
  return (
    <svg viewBox="0 0 820 275" className="w-full h-auto" role="img" aria-label="Escudos de Switch Capa 2, evolución visual Wi-Fi WPA3, túnel IPsec ESP y pipeline de auditoría">
      <rect width="820" height="275" rx="14" fill="#FAF7F2" />

      {/* Panel 1: Switch con 4 Escudos en Puertos */}
      <g transform="translate(12, 12)">
        <rect width="262" height="251" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="242" height="24" rx="6" fill="#0F766E" />
        <text x="131" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="800">4 ESCUDOS EN SWITCH CAPA 2</text>

        {/* Cuerpo del Switch arriba */}
        <rect x="34" y="44" width="194" height="32" rx="7" fill="#134E4A" />
        <text x="131" y="64" textAnchor="middle" fill="#FFFFFF" fontSize="9.5" fontWeight="900">🔀 SWITCH ACCESO L2</text>

        {/* 4 shields */}
        {[
          { y: 88, title: '🛡️ Port Security', sub: 'Limita MACs → Frena MAC Flooding', bg: '#F0FDFA', bd: '#0F766E', fg: '#134E4A' },
          { y: 128, title: '🛡️ DHCP Snooping', sub: 'Trusted ✓ / Untrusted ✗ → Rogue DHCP', bg: '#FFFBEB', bd: '#D97706', fg: '#92400E' },
          { y: 168, title: '🛡️ DAI (ARP Inspection)', sub: 'Valida IP↔MAC → Frena MITM ARP', bg: '#EEF2FF', bd: '#4338CA', fg: '#312E81' },
          { y: 208, title: '🛡️ IEEE 802.1X + RADIUS', sub: 'Pide login antes de abrir el puerto', bg: '#FAF7F2', bd: '#57534E', fg: '#1C1917' },
        ].map((s, i) => (
          <g key={i} transform={`translate(14, ${s.y})`}>
            <rect width="234" height="33" rx="6" fill={s.bg} stroke={s.bd} strokeWidth="1.4" />
            <text x="10" y="14" fill={s.fg} fontSize="8.8" fontWeight="900">{s.title}</text>
            <text x="10" y="27" fill="#44403C" fontSize="7.8" fontWeight="700">{s.sub}</text>
          </g>
        ))}
      </g>

      {/* Panel 2: Evolución Wi-Fi + Túnel IPsec Visual */}
      <g transform="translate(284, 12)">
        <rect width="268" height="251" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="248" height="24" rx="6" fill="#4338CA" />
        <text x="134" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="800">WI-FI WPA3 Y TÚNEL VPN IPSEC</text>

        {/* Barra Evolución Wi-Fi */}
        <text x="14" y="51" fill="#312E81" fontSize="8.8" fontWeight="900">📶 Evolución Seguridad Wi-Fi:</text>
        <rect x="14" y="58" width="66" height="38" rx="6" fill="#FEE2E2" stroke="#DC2626" strokeWidth="1.5" />
        <text x="47" y="75" textAnchor="middle" fill="#991B1B" fontSize="8.8" fontWeight="900">WEP ✗</text>
        <text x="47" y="88" textAnchor="middle" fill="#7F1D1D" fontSize="7.2">RC4 roto</text>

        <text x="87" y="80" textAnchor="middle" fill="#78716C" fontSize="10" fontWeight="900">→</text>

        <rect x="94" y="58" width="72" height="38" rx="6" fill="#FEF3C7" stroke="#D97706" strokeWidth="1.5" />
        <text x="130" y="75" textAnchor="middle" fill="#92400E" fontSize="8.8" fontWeight="900">WPA2</text>
        <text x="130" y="88" textAnchor="middle" fill="#78350F" fontSize="7.2">AES-CCMP</text>

        <text x="173" y="80" textAnchor="middle" fill="#0F766E" fontSize="10" fontWeight="900">→</text>

        <rect x="180" y="58" width="74" height="38" rx="6" fill="#DCFCE7" stroke="#16A34A" strokeWidth="1.8" />
        <text x="217" y="75" textAnchor="middle" fill="#14532D" fontSize="8.8" fontWeight="900">WPA3 ✓</text>
        <text x="217" y="88" textAnchor="middle" fill="#166534" fontSize="7">SAE+802.11w</text>

        {/* Túnel Visual VPN IPsec */}
        <rect x="14" y="108" width="240" height="131" rx="8" fill="#F0FDFA" stroke="#0F766E" strokeWidth="1.5" />
        <text x="134" y="125" textAnchor="middle" fill="#134E4A" fontSize="9.2" fontWeight="900">🔒 TÚNEL VPN IPSEC (CAPA 3)</text>

        {/* Dibujo del tubo cifrado */}
        <rect x="22" y="136" width="44" height="34" rx="5" fill="#134E4A" />
        <text x="44" y="156" textAnchor="middle" fill="#FFF" fontSize="7.8" fontWeight="800">HQ</text>
        <rect x="66" y="142" width="136" height="22" rx="11" fill="#DCFCE7" stroke="#16A34A" strokeWidth="2.2" />
        <text x="134" y="156" textAnchor="middle" fill="#14532D" fontSize="8.2" fontWeight="900">🔐 ESP (Cifrado AES)</text>
        <rect x="202" y="136" width="44" height="34" rx="5" fill="#134E4A" />
        <text x="224" y="156" textAnchor="middle" fill="#FFF" fontSize="7.6" fontWeight="800">Suc.</text>

        <text x="134" y="187" textAnchor="middle" fill="#DC2626" fontSize="8.2" fontWeight="800">• AH: Solo Autentica (NO cifra)</text>
        <text x="134" y="203" textAnchor="middle" fill="#0F766E" fontSize="8.3" fontWeight="900">• ESP: Encapsula + Encripta ✓</text>
        <text x="134" y="220" textAnchor="middle" fill="#312E81" fontSize="8.1" fontWeight="800">• DNSSEC: Firma registros DNS</text>
      </g>

      {/* Panel 3: Pipeline de Auditoría + MFA */}
      <g transform="translate(562, 12)">
        <rect width="246" height="251" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="226" height="24" rx="6" fill="#B45309" />
        <text x="123" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="800">AUDITORÍA Y MFA (3 FACTORES)</text>

        {/* Pipeline 1 -> 2 -> 3 */}
        <rect x="14" y="42" width="218" height="32" rx="6" fill="#1C1917" />
        <text x="24" y="56" fill="#A7F3D0" fontSize="8.8" fontFamily="monospace" fontWeight="900">1. 🔍 Nmap</text>
        <text x="24" y="68" fill="#D6D3D1" fontSize="7.8">Escanea hosts y puertos abiertos</text>

        <text x="123" y="84" textAnchor="middle" fill="#B45309" fontSize="10" fontWeight="900">↓</text>

        <rect x="14" y="88" width="218" height="32" rx="6" fill="#1C1917" />
        <text x="24" y="102" fill="#93C5FD" fontSize="8.8" fontFamily="monospace" fontWeight="900">2. 📋 Nessus / OpenVAS</text>
        <text x="24" y="114" fill="#D6D3D1" fontSize="7.8">Detecta vulnerabilidades (CVEs)</text>

        <text x="123" y="130" textAnchor="middle" fill="#B45309" fontSize="10" fontWeight="900">↓</text>

        <rect x="14" y="134" width="218" height="32" rx="6" fill="#1C1917" />
        <text x="24" y="148" fill="#FCA5A5" fontSize="8.8" fontFamily="monospace" fontWeight="900">3. 🎯 Penetration Testing</text>
        <text x="24" y="160" fill="#D6D3D1" fontSize="7.8">Simula ataque real autorizado</text>

        {/* MFA 3 factores */}
        <rect x="14" y="176" width="218" height="64" rx="8" fill="#FFFBEB" stroke="#F59E0B" strokeWidth="1.5" />
        <text x="123" y="192" textAnchor="middle" fill="#92400E" fontSize="8.8" fontWeight="900">MFA (2+ Factores Distintos)</text>
        <text x="48" y="213" textAnchor="middle" fill="#1C1917" fontSize="8.2" fontWeight="800">🧠 Sabes</text>
        <text x="48" y="226" textAnchor="middle" fill="#57534E" fontSize="7.2">Clave/PIN</text>
        <text x="123" y="213" textAnchor="middle" fill="#1C1917" fontSize="8.2" fontWeight="800">📱 Tienes</text>
        <text x="123" y="226" textAnchor="middle" fill="#57534E" fontSize="7.2">Token/App</text>
        <text x="196" y="213" textAnchor="middle" fill="#1C1917" fontSize="8.2" fontWeight="800">👆 Eres</text>
        <text x="196" y="226" textAnchor="middle" fill="#57534E" fontSize="7.2">Biometría</text>
      </g>
    </svg>
  );
}

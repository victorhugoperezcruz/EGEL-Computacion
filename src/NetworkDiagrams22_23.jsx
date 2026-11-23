import React from 'react';

/**
 * Diagramas SVG técnicos verificados para las Subáreas 2.2 (Administración de redes) y 2.3 (Seguridad en redes).
 * Todos los puertos, protocolos, comandos y arquitecturas coinciden 100% con el temario CENEVAL EGEL-ICOMPU.
 */

export function DhcpDnsArpDiagram() {
  return (
    <svg viewBox="0 0 820 265" className="w-full h-auto" role="img" aria-label="Flujo DHCP DORA, registros DNS y resolución ARP">
      <rect width="820" height="265" rx="14" fill="#FAF7F2" />

      {/* Panel 1: DHCP Proceso DORA */}
      <g transform="translate(12, 12)">
        <rect width="265" height="241" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="245" height="24" rx="6" fill="#0F766E" />
        <text x="132" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="10.2" fontWeight="800">DHCP (DORA) • UDP 68 ↔ UDP 67</text>

        <rect x="16" y="42" width="76" height="26" rx="5" fill="#F5F5F4" stroke="#44403C" strokeWidth="1.5" />
        <text x="54" y="58" textAnchor="middle" fill="#1C1917" fontSize="8.8" fontWeight="800">Cliente (68)</text>

        <rect x="172" y="42" width="76" height="26" rx="5" fill="#134E4A" />
        <text x="210" y="58" textAnchor="middle" fill="#FFFFFF" fontSize="8.8" fontWeight="800">Servidor (67)</text>

        {/* 4 flechas DORA */}
        <line x1="65" y1="84" x2="200" y2="84" stroke="#B45309" strokeWidth="2" />
        <polygon points="200,84 193,80 193,88" fill="#B45309" />
        <text x="132" y="79" textAnchor="middle" fill="#92400E" fontSize="8.5" fontWeight="800">1. DISCOVER (Broadcast)</text>

        <line x1="200" y1="112" x2="65" y2="112" stroke="#0F766E" strokeWidth="2" />
        <polygon points="65,112 72,108 72,116" fill="#0F766E" />
        <text x="132" y="107" textAnchor="middle" fill="#0F766E" fontSize="8.5" fontWeight="800">2. OFFER (Oferta de IP)</text>

        <line x1="65" y1="140" x2="200" y2="140" stroke="#B45309" strokeWidth="2" />
        <polygon points="200,140 193,136 193,144" fill="#B45309" />
        <text x="132" y="135" textAnchor="middle" fill="#92400E" fontSize="8.5" fontWeight="800">3. REQUEST (Solicita IP)</text>

        <line x1="200" y1="168" x2="65" y2="168" stroke="#0F766E" strokeWidth="2" />
        <polygon points="65,168 72,164 72,172" fill="#0F766E" />
        <text x="132" y="163" textAnchor="middle" fill="#0F766E" fontSize="8.5" fontWeight="800">4. ACKNOWLEDGE (ACK + Lease)</text>

        <rect x="12" y="182" width="241" height="48" rx="6" fill="#FAF7F2" stroke="#D8D0C0" />
        <text x="132" y="198" textAnchor="middle" fill="#1C1917" fontSize="8.3" fontWeight="700">• Reserva DHCP: Fija IP por dirección MAC</text>
        <text x="132" y="213" textAnchor="middle" fill="#0F766E" fontSize="8.3" fontWeight="700">• Otra subred: ip helper-address (Relay)</text>
      </g>

      {/* Panel 2: DNS Registros Esenciales */}
      <g transform="translate(287, 12)">
        <rect width="256" height="241" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="236" height="24" rx="6" fill="#4338CA" />
        <text x="128" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="10.2" fontWeight="800">DNS (PUERTO UDP/TCP 53)</text>

        {[
          { tag: 'A', desc: 'Nombre de Dominio → IPv4 (32 bits)' },
          { tag: 'AAAA', desc: 'Nombre de Dominio → IPv6 (128 bits)' },
          { tag: 'CNAME', desc: 'Alias de un dominio a otro canónico' },
          { tag: 'MX', desc: 'Servidor de Correo Electrónico entrante' },
          { tag: 'PTR', desc: 'Búsqueda Inversa (Dirección IP → Nombre)' },
          { tag: 'NS', desc: 'Servidor DNS Autoritativo de la zona' },
        ].map((r, i) => (
          <g key={r.tag} transform={`translate(14, ${42 + i * 28})`}>
            <rect width="48" height="22" rx="4" fill="#EEF2FF" stroke="#4338CA" strokeWidth="1.2" />
            <text x="24" y="15" textAnchor="middle" fill="#312E81" fontSize="8.8" fontWeight="800" fontFamily="monospace">{r.tag}</text>
            <text x="58" y="15" fill="#1C1917" fontSize="8.6" fontWeight="700">{r.desc}</text>
          </g>
        ))}

        <text x="128" y="224" textAnchor="middle" fill="#57534E" fontSize="8.2" fontWeight="700">UDP 53: Consultas | TCP 53: Transferencia Zona</text>
      </g>

      {/* Panel 3: Resolución ARP */}
      <g transform="translate(553, 12)">
        <rect width="255" height="241" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="235" height="24" rx="6" fill="#B45309" />
        <text x="127" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="10.2" fontWeight="800">PROTOCOLO ARP (IP → MAC 48b)</text>

        <rect x="14" y="44" width="227" height="54" rx="6" fill="#FFFBEB" stroke="#F59E0B" />
        <text x="22" y="61" fill="#92400E" fontSize="9" fontWeight="800">1. ARP Request (Broadcast L2):</text>
        <text x="22" y="75" fill="#44403C" fontSize="8.3">Destino MAC: FF:FF:FF:FF:FF:FF</text>
        <text x="22" y="88" fill="#57534E" fontSize="8.3">&quot;¿Quién tiene la IP 192.168.1.1?&quot;</text>

        <rect x="14" y="108" width="227" height="54" rx="6" fill="#F0FDFA" stroke="#0F766E" />
        <text x="22" y="125" fill="#134E4A" fontSize="9" fontWeight="800">2. ARP Reply (Unicast L2):</text>
        <text x="22" y="139" fill="#115E59" fontSize="8.3">Solo responde el dueño de esa IP</text>
        <text x="22" y="152" fill="#57534E" fontSize="8.3">&quot;Soy yo, mi MAC es 00:1A:2B:3C:4D:5E&quot;</text>

        <rect x="14" y="172" width="227" height="57" rx="6" fill="#FAF7F2" stroke="#D8D0C0" />
        <text x="127" y="189" textAnchor="middle" fill="#1C1917" fontSize="8.8" fontWeight="800">Caché ARP Local del Host:</text>
        <text x="127" y="205" textAnchor="middle" fill="#0F766E" fontSize="8.5" fontFamily="monospace" fontWeight="700">arp -a (ver) | arp -d (borrar)</text>
        <text x="127" y="220" textAnchor="middle" fill="#57534E" fontSize="8">Permite armar la trama Ethernet L2</text>
      </g>
    </svg>
  );
}

export function SnmpSyslogNtpDiagram() {
  const severities = [
    { lvl: '0', name: 'Emergency', desc: 'Sistema inutilizable (MÁS CRÍTICO)', bg: '#991B1B', fg: '#FFFFFF' },
    { lvl: '1', name: 'Alert', desc: 'Acción inmediata requerida', bg: '#DC2626', fg: '#FFFFFF' },
    { lvl: '2', name: 'Critical', desc: 'Condiciones críticas', bg: '#EA580C', fg: '#FFFFFF' },
    { lvl: '3', name: 'Error', desc: 'Condiciones de error', bg: '#D97706', fg: '#FFFFFF' },
    { lvl: '4', name: 'Warning', desc: 'Condiciones de advertencia', bg: '#F59E0B', fg: '#1C1917' },
    { lvl: '5', name: 'Notice', desc: 'Evento normal pero significativo', bg: '#CCFBF1', fg: '#134E4A' },
    { lvl: '6', name: 'Informational', desc: 'Mensajes informativos', bg: '#E0E7FF', fg: '#312E81' },
    { lvl: '7', name: 'Debug', desc: 'Depuración detallada (MENOS CRÍTICO)', bg: '#F5F5F4', fg: '#44403C' },
  ];

  return (
    <svg viewBox="0 0 820 270" className="w-full h-auto" role="img" aria-label="Arquitectura SNMP v1/v2c/v3, severidades Syslog 0-7 y NTP Stratum">
      <rect width="820" height="270" rx="14" fill="#FAF7F2" />

      {/* Izquierda: SNMP y NTP */}
      <g transform="translate(12, 12)">
        <rect width="415" height="246" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="395" height="24" rx="6" fill="#0F766E" />
        <text x="207" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="10.5" fontWeight="800">MONITOREO SNMP (UDP 161 / 162) Y SINCRONIZACIÓN NTP</text>

        {/* NMS vs Agente SNMP */}
        <rect x="16" y="46" width="118" height="58" rx="7" fill="#134E4A" />
        <text x="75" y="66" textAnchor="middle" fill="#FFFFFF" fontSize="9.5" fontWeight="800">Gestor NMS</text>
        <text x="75" y="80" textAnchor="middle" fill="#99F6E4" fontSize="8">(Zabbix / PRTG)</text>
        <text x="75" y="93" textAnchor="middle" fill="#CCFBF1" fontSize="7.8">Recibe Traps 162</text>

        <rect x="276" y="46" width="124" height="58" rx="7" fill="#F0FDFA" stroke="#0F766E" strokeWidth="1.8" />
        <text x="338" y="65" textAnchor="middle" fill="#134E4A" fontSize="9.5" fontWeight="800">Agente SNMP</text>
        <text x="338" y="79" textAnchor="middle" fill="#0F766E" fontSize="8" fontWeight="700">Base MIB (OIDs)</text>
        <text x="338" y="92" textAnchor="middle" fill="#57534E" fontSize="7.8">Router / Switch</text>

        <line x1="138" y1="62" x2="272" y2="62" stroke="#0F766E" strokeWidth="2" />
        <polygon points="272,62 265,58 265,66" fill="#0F766E" />
        <text x="205" y="56" textAnchor="middle" fill="#134E4A" fontSize="8.2" fontWeight="800">Get / Set → UDP 161</text>

        <line x1="272" y1="88" x2="138" y2="88" stroke="#DC2626" strokeWidth="2" />
        <polygon points="138,88 145,84 145,92" fill="#DC2626" />
        <text x="205" y="101" textAnchor="middle" fill="#DC2626" fontSize="8.2" fontWeight="800">← SNMP Trap (Alerta UDP 162)</text>

        {/* SNMPv3 vs v1/v2c */}
        <rect x="16" y="114" width="384" height="58" rx="7" fill="#FFFBEB" stroke="#F59E0B" />
        <text x="26" y="131" fill="#92400E" fontSize="9.2" fontWeight="800">• SNMPv1 / v2c:</text>
        <text x="115" y="131" fill="#57534E" fontSize="8.6">Community Strings (public/private) en TEXTO PLANO (inseguro).</text>
        <text x="26" y="148" fill="#0F766E" fontSize="9.2" fontWeight="800">• SNMPv3 (authPriv):</text>
        <text x="140" y="148" fill="#134E4A" fontSize="8.6" fontWeight="700">Autenticación (HMAC-SHA/MD5) + Cifrado AES.</text>
        <text x="26" y="163" fill="#57534E" fontSize="8.2">Obligatorio en examen cuando se solicita monitoreo seguro y confidencial.</text>

        {/* NTP */}
        <rect x="16" y="180" width="384" height="54" rx="7" fill="#EEF2FF" stroke="#6366F1" />
        <text x="26" y="197" fill="#312E81" fontSize="9.2" fontWeight="800">NTP (Network Time Protocol — Puerto UDP 123):</text>
        <text x="26" y="212" fill="#4338CA" fontSize="8.5" fontWeight="700">Jerarquía: Stratum 0 (Reloj Atómico/GPS) → Stratum 1 → Stratum 2..15</text>
        <text x="26" y="226" fill="#57534E" fontSize="8.2">Indispensable para correlacionar bitácoras Syslog/SIEM, Kerberos y TLS.</text>
      </g>

      {/* Derecha: Escala Syslog 0 a 7 */}
      <g transform="translate(437, 12)">
        <rect width="371" height="246" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="351" height="24" rx="6" fill="#292524" />
        <text x="185" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="10.2" fontWeight="800">SYSLOG (UDP 514 / TCP 6514 TLS): NIVELES 0 A 7</text>

        {severities.map((s, idx) => {
          const y = 42 + idx * 24;
          return (
            <g key={s.lvl} transform={`translate(14, ${y})`}>
              <rect width="112" height="20" rx="4" fill={s.bg} />
              <text x="10" y="14" fill={s.fg} fontSize="8.8" fontWeight="800" fontFamily="monospace">
                {s.lvl} — {s.name}
              </text>
              <text x="124" y="14" fill="#1C1917" fontSize="8.6" fontWeight="700">{s.desc}</text>
            </g>
          );
        })}
      </g>
    </svg>
  );
}

export function CliDiagnosticsQosDiagram() {
  return (
    <svg viewBox="0 0 820 265" className="w-full h-auto" role="img" aria-label="Funcionamiento de Traceroute TTL, comandos CLI, gestión de Switch SVI y QoS">
      <rect width="820" height="265" rx="14" fill="#FAF7F2" />

      {/* Arriba: Mecanismo de Tracert / Traceroute y Ping */}
      <g transform="translate(12, 12)">
        <rect width="796" height="106" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <text x="16" y="22" fill="#1C1917" fontSize="10.2" fontWeight="800">
          DIAGNÓSTICO DE RUTA: TRACERT (WIN) / TRACEROUTE (LINUX/IOS) Y PING (ICMP ECHO TIPO 8 / REPLY TIPO 0)
        </text>

        <rect x="18" y="38" width="96" height="44" rx="6" fill="#292524" />
        <text x="66" y="57" textAnchor="middle" fill="#FFFFFF" fontSize="9.5" fontWeight="800">Admin PC</text>
        <text x="66" y="71" textAnchor="middle" fill="#FDE68A" fontSize="8" fontFamily="monospace">ping -t / tracert</text>

        {/* Salto 1: TTL=1 */}
        <line x1="116" y1="50" x2="250" y2="50" stroke="#B45309" strokeWidth="2" />
        <text x="183" y="44" textAnchor="middle" fill="#92400E" fontSize="8.2" fontWeight="800">Envía con TTL = 1</text>
        <line x1="250" y1="68" x2="116" y2="68" stroke="#DC2626" strokeWidth="1.8" strokeDasharray="4 2" />
        <text x="183" y="81" textAnchor="middle" fill="#DC2626" fontSize="8" fontWeight="800">← ICMP 11 Time Exceeded</text>

        <rect x="252" y="38" width="102" height="44" rx="6" fill="#FEF3C7" stroke="#B45309" strokeWidth="1.8" />
        <text x="303" y="56" textAnchor="middle" fill="#78350F" fontSize="9.2" fontWeight="800">Router Salto 1</text>
        <text x="303" y="70" textAnchor="middle" fill="#92400E" fontSize="8">TTL→0 (Revela IP)</text>

        {/* Salto 2: TTL=2 */}
        <line x1="356" y1="50" x2="486" y2="50" stroke="#0F766E" strokeWidth="2" />
        <text x="421" y="44" textAnchor="middle" fill="#134E4A" fontSize="8.2" fontWeight="800">Luego envía TTL = 2</text>
        <line x1="486" y1="68" x2="356" y2="68" stroke="#DC2626" strokeWidth="1.8" strokeDasharray="4 2" />
        <text x="421" y="81" textAnchor="middle" fill="#DC2626" fontSize="8" fontWeight="800">← ICMP 11 Time Exceeded</text>

        <rect x="488" y="38" width="102" height="44" rx="6" fill="#CCFBF1" stroke="#0F766E" strokeWidth="1.8" />
        <text x="539" y="56" textAnchor="middle" fill="#134E4A" fontSize="9.2" fontWeight="800">Router Salto 2</text>
        <text x="539" y="70" textAnchor="middle" fill="#0F766E" fontSize="8">TTL→0 (Revela IP)</text>

        {/* Destino final */}
        <line x1="592" y1="58" x2="674" y2="58" stroke="#4338CA" strokeWidth="2.2" />
        <text x="633" y="49" textAnchor="middle" fill="#312E81" fontSize="8.2" fontWeight="800">TTL = 3</text>

        <rect x="676" y="38" width="104" height="44" rx="6" fill="#EEF2FF" stroke="#4338CA" strokeWidth="1.8" />
        <text x="728" y="56" textAnchor="middle" fill="#312E81" fontSize="9.2" fontWeight="800">Servidor Destino</text>
        <text x="728" y="70" textAnchor="middle" fill="#4338CA" fontSize="8" fontWeight="700">Echo Reply (RTT)</text>
      </g>

      {/* Abajo Izquierda: Gestión de Switch SVI + NVRAM */}
      <g transform="translate(12, 128)">
        <rect width="392" height="125" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <text x="14" y="21" fill="#1C1917" fontSize="10" fontWeight="800">ADMINISTRACIÓN REMOTA DE SWITCH CAPA 2 (OTRA SUBRED)</text>

        <rect x="14" y="30" width="364" height="84" rx="7" fill="#1C1917" />
        <text x="24" y="47" fill="#A7F3D0" fontSize="8.8" fontFamily="monospace" fontWeight="700">Switch(config)# interface vlan 99  /* SVI Admin */</text>
        <text x="24" y="63" fill="#A7F3D0" fontSize="8.8" fontFamily="monospace" fontWeight="700">Switch(config-if)# ip address 192.168.99.2 255.255.255.0</text>
        <text x="24" y="79" fill="#FDE68A" fontSize="8.8" fontFamily="monospace" fontWeight="700">Switch(config)# ip default-gateway 192.168.99.1 /* Obligatorio */</text>
        <text x="24" y="95" fill="#93C5FD" fontSize="8.8" fontFamily="monospace" fontWeight="700">Switch# copy running-config startup-config /* RAM → NVRAM */</text>
        <text x="24" y="109" fill="#D6D3D1" fontSize="8">Acceso seguro: SSH (TCP 22) | Prohibido Telnet (TCP 23 texto plano)</text>
      </g>

      {/* Abajo Derecha: Baseline, Wireshark, NetFlow y QoS */}
      <g transform="translate(416, 128)">
        <rect width="392" height="125" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <text x="14" y="21" fill="#1C1917" fontSize="10" fontWeight="800">ANÁLISIS DE TRÁFICO Y CALIDAD DE SERVICIO (QoS)</text>

        <rect x="14" y="30" width="364" height="40" rx="6" fill="#F0FDFA" stroke="#0F766E" />
        <text x="22" y="45" fill="#134E4A" fontSize="8.8" fontWeight="800">• Wireshark (SPAN / Port Mirroring) vs. NetFlow:</text>
        <text x="22" y="60" fill="#57534E" fontSize="8.2">Wireshark inspecciona paquetes completos; NetFlow mide flujos y consumo.</text>

        <rect x="14" y="76" width="364" height="39" rx="6" fill="#FFFBEB" stroke="#F59E0B" />
        <text x="22" y="91" fill="#92400E" fontSize="8.8" fontWeight="800">• QoS (Marcado CoS 802.1p L2 / DSCP L3 + Cola LLQ):</text>
        <text x="22" y="106" fill="#57534E" fontSize="8.2">Prioridad estricta para VoIP y Videoconferencia (reduce latencia y jitter).</text>
      </g>
    </svg>
  );
}

export function CryptoCiaPkiDiagram() {
  return (
    <svg viewBox="0 0 820 265" className="w-full h-auto" role="img" aria-label="Tríada CIA, Criptografía Simétrica AES vs Asimétrica RSA/ECC y Firma Digital">
      <rect width="820" height="265" rx="14" fill="#FAF7F2" />

      {/* Panel 1: Tríada CIA + No Repudio */}
      <g transform="translate(12, 12)">
        <rect width="250" height="241" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="230" height="24" rx="6" fill="#292524" />
        <text x="125" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="10.2" fontWeight="800">TRÍADA CIA + NO REPUDIO</text>

        <rect x="14" y="44" width="222" height="42" rx="6" fill="#F0FDFA" stroke="#0F766E" />
        <text x="22" y="60" fill="#134E4A" fontSize="9.2" fontWeight="800">1. Confidencialidad (Secreto):</text>
        <text x="22" y="75" fill="#57534E" fontSize="8.3">Cifrado (AES, TLS, IPsec) y Control Acceso.</text>

        <rect x="14" y="93" width="222" height="42" rx="6" fill="#FFFBEB" stroke="#F59E0B" />
        <text x="22" y="109" fill="#92400E" fontSize="9.2" fontWeight="800">2. Integridad (Sin alteración):</text>
        <text x="22" y="124" fill="#57534E" fontSize="8.3">Hash (SHA-256 / SHA-3), HMAC y Firmas.</text>

        <rect x="14" y="142" width="222" height="42" rx="6" fill="#EEF2FF" stroke="#4338CA" />
        <text x="22" y="158" fill="#312E81" fontSize="9.2" fontWeight="800">3. Disponibilidad (Operativo):</text>
        <text x="22" y="173" fill="#57534E" fontSize="8.3">Redundancia, RAID, HSRP, Anti-DDoS.</text>

        <rect x="14" y="191" width="222" height="39" rx="6" fill="#FCE7F3" stroke="#BE185D" />
        <text x="22" y="207" fill="#831843" fontSize="9" fontWeight="800">4. No Repudio (Autoría legal):</text>
        <text x="22" y="221" fill="#57534E" fontSize="8.2">Firma Digital con Clave Privada del emisor.</text>
      </g>

      {/* Panel 2: Simétrica vs Asimétrica */}
      <g transform="translate(272, 12)">
        <rect width="268" height="241" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="248" height="24" rx="6" fill="#0F766E" />
        <text x="134" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="10.2" fontWeight="800">SIMÉTRICA vs. ASIMÉTRICA</text>

        <rect x="12" y="44" width="244" height="86" rx="7" fill="#F0FDFA" stroke="#0F766E" />
        <text x="20" y="61" fill="#134E4A" fontSize="9.3" fontWeight="800">Cifrado Simétrico (1 Misma Clave Secreta):</text>
        <text x="20" y="76" fill="#115E59" fontSize="8.4" fontWeight="700">• Estándar seguro: AES (128 / 192 / 256 bits)</text>
        <text x="20" y="90" fill="#57534E" fontSize="8.3">• Ultrarrápido para tráfico masivo (VPN, WPA2/3)</text>
        <text x="20" y="105" fill="#DC2626" fontSize="8.3" fontWeight="800">• OBSOLETO: DES (clave corta de 56 bits)</text>
        <text x="20" y="119" fill="#57534E" fontSize="8">• 3DES: En retiro progresivo</text>

        <rect x="12" y="139" width="244" height="90" rx="7" fill="#FFFBEB" stroke="#F59E0B" />
        <text x="20" y="156" fill="#92400E" fontSize="9.3" fontWeight="800">Cifrado Asimétrico (Par Pública / Privada):</text>
        <text x="20" y="171" fill="#78350F" fontSize="8.4" fontWeight="700">• RSA (Primos), ECC (Curva Elíptica), DH/ECDHE</text>
        <text x="20" y="186" fill="#57534E" fontSize="8.3">• ECC da igual seguridad que RSA con clave menor</text>
        <text x="20" y="201" fill="#57534E" fontSize="8.3">• PKI: Autoridad CA emite Certificado X.509</text>
        <text x="20" y="216" fill="#4338CA" fontSize="8.2" fontWeight="700">• Hash: SHA-256 (MD5/SHA-1 tienen colisiones)</text>
      </g>

      {/* Panel 3: Regla de Examen Clave Pública vs Privada */}
      <g transform="translate(550, 12)">
        <rect width="258" height="241" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="238" height="24" rx="6" fill="#B45309" />
        <text x="129" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="10.2" fontWeight="800">REGLA DE ORO ASIMÉTRICA (EXAMEN)</text>

        {/* Caso 1: Confidencialidad */}
        <rect x="12" y="44" width="234" height="86" rx="7" fill="#F0FDFA" stroke="#0F766E" strokeWidth="1.5" />
        <text x="129" y="61" textAnchor="middle" fill="#134E4A" fontSize="9.2" fontWeight="800">A) PARA CONFIDENCIALIDAD (CIFRAR)</text>
        <text x="129" y="79" textAnchor="middle" fill="#1C1917" fontSize="8.6">Emisor cifra el mensaje con la:</text>
        <rect x="26" y="86" width="206" height="20" rx="4" fill="#0F766E" />
        <text x="129" y="99" textAnchor="middle" fill="#FFFFFF" fontSize="8.6" fontWeight="800">CLAVE PÚBLICA DEL RECEPTOR</text>
        <text x="129" y="120" textAnchor="middle" fill="#57534E" fontSize="8.2">→ Solo el Receptor descifra con su Privada</text>

        {/* Caso 2: Firma Digital */}
        <rect x="12" y="141" width="234" height="88" rx="7" fill="#FFFBEB" stroke="#D97706" strokeWidth="1.5" />
        <text x="129" y="158" textAnchor="middle" fill="#92400E" fontSize="9.2" fontWeight="800">B) PARA FIRMA DIGITAL (NO REPUDIO)</text>
        <text x="129" y="175" textAnchor="middle" fill="#1C1917" fontSize="8.6">Emisor firma el Hash SHA-256 con su:</text>
        <rect x="26" y="182" width="206" height="20" rx="4" fill="#B45309" />
        <text x="129" y="195" textAnchor="middle" fill="#FFFFFF" fontSize="8.6" fontWeight="800">CLAVE PRIVADA DEL EMISOR</text>
        <text x="129" y="216" textAnchor="middle" fill="#57534E" fontSize="8.2">→ Cualquiera verifica con la Pública del Emisor</text>
      </g>
    </svg>
  );
}

export function PerimeterDefenseIdsIpsDiagram() {
  return (
    <svg viewBox="0 0 820 270" className="w-full h-auto" role="img" aria-label="Arquitectura perimetral Firewall, DMZ, diferencia entre IDS pasivo e IPS en línea y VPN IPsec">
      <rect width="820" height="270" rx="14" fill="#FAF7F2" />

      {/* Flujo principal En Línea: Internet -> Firewall/NGFW -> IPS (In-Line) -> Switch Core -> LAN */}
      <g transform="translate(12, 12)">
        <rect width="796" height="145" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <text x="16" y="21" fill="#1C1917" fontSize="10.2" fontWeight="800">
          ARQUITECTURA DE DEFENSA EN PROFUNDIDAD: FIREWALL / NGFW, DMZ, IPS (EN LÍNEA) vs. IDS (PASIVO)
        </text>

        {/* Internet / VPN */}
        <rect x="16" y="42" width="102" height="50" rx="8" fill="#FEE2E2" stroke="#DC2626" strokeWidth="1.8" />
        <text x="67" y="63" textAnchor="middle" fill="#991B1B" fontSize="9.5" fontWeight="800">INTERNET</text>
        <text x="67" y="77" textAnchor="middle" fill="#7F1D1D" fontSize="7.8">Túnel VPN IPsec ESP</text>

        <line x1="118" y1="67" x2="158" y2="67" stroke="#44403C" strokeWidth="2.5" />

        {/* Firewall Stateful / NGFW L7 */}
        <rect x="158" y="36" width="132" height="62" rx="8" fill="#B45309" />
        <text x="224" y="56" textAnchor="middle" fill="#FFFFFF" fontSize="9.5" fontWeight="800">FIREWALL / NGFW</text>
        <text x="224" y="70" textAnchor="middle" fill="#FEF3C7" fontSize="8" fontWeight="700">Stateful L3/L4 + DPI L7</text>
        <text x="224" y="83" textAnchor="middle" fill="#FDE68A" fontSize="7.5">Filtra tráfico entrante</text>

        {/* Bajada a DMZ */}
        <line x1="224" y1="98" x2="224" y2="115" stroke="#D97706" strokeWidth="2" />
        <rect x="144" y="115" width="160" height="24" rx="5" fill="#FFFBEB" stroke="#F59E0B" strokeWidth="1.5" />
        <text x="224" y="131" textAnchor="middle" fill="#92400E" fontSize="8.3" fontWeight="800">DMZ (Web / Correo / Honeypot)</text>

        <line x1="290" y1="67" x2="335" y2="67" stroke="#0F766E" strokeWidth="2.5" />

        {/* IPS En Línea (In-Line) */}
        <rect x="335" y="36" width="155" height="62" rx="8" fill="#0F766E" />
        <text x="412" y="55" textAnchor="middle" fill="#FFFFFF" fontSize="9.8" fontWeight="800">IPS (PREVENCIÓN)</text>
        <text x="412" y="69" textAnchor="middle" fill="#CCFBF1" fontSize="8.3" fontWeight="800">INSTALADO EN LÍNEA</text>
        <text x="412" y="83" textAnchor="middle" fill="#99F6E4" fontSize="7.8">BLOQUEA / DESCARTA (Drop)</text>

        <line x1="490" y1="67" x2="532" y2="67" stroke="#0F766E" strokeWidth="2.5" />

        {/* Switch Interno con puerto SPAN */}
        <rect x="532" y="42" width="112" height="50" rx="8" fill="#134E4A" />
        <text x="588" y="63" textAnchor="middle" fill="#FFFFFF" fontSize="9.2" fontWeight="800">Switch Core LAN</text>
        <text x="588" y="77" textAnchor="middle" fill="#99F6E4" fontSize="7.8">Puerto Espejo SPAN</text>

        {/* Bajada copia pasiva a IDS */}
        <line x1="588" y1="92" x2="588" y2="115" stroke="#4338CA" strokeWidth="2" strokeDasharray="4 2" />
        <rect x="488" y="115" width="215" height="24" rx="5" fill="#EEF2FF" stroke="#4338CA" strokeWidth="1.5" />
        <text x="595" y="131" textAnchor="middle" fill="#312E81" fontSize="8.3" fontWeight="800">IDS (PASIVO): Solo Alerta → SIEM (No bloquea)</text>

        <line x1="644" y1="67" x2="680" y2="67" stroke="#0F766E" strokeWidth="2.5" />

        {/* Red Interna LAN */}
        <rect x="680" y="42" width="102" height="50" rx="8" fill="#F0FDFA" stroke="#0F766E" strokeWidth="1.8" />
        <text x="731" y="63" textAnchor="middle" fill="#134E4A" fontSize="9.2" fontWeight="800">LAN INTERNA</text>
        <text x="731" y="77" textAnchor="middle" fill="#0F766E" fontSize="7.8">Proxy + MFA</text>
      </g>

      {/* Abajo: Controles Capa 2 Switch, Wi-Fi WPA3 y Auditoría */}
      <g transform="translate(12, 166)">
        <rect width="796" height="92" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <text x="16" y="20" fill="#1C1917" fontSize="10" fontWeight="800">
          MATRIZ VISUAL DE ATAQUES LAN / WLAN Y SU DEFENSA EXACTA EN EXAMEN EGEL
        </text>

        {[
          { x: 14, atk: 'MAC Flooding (Tabla CAM)', def: 'Port Security (Limita MACs)', bg: '#F0FDFA', bd: '#0F766E', fg: '#134E4A' },
          { x: 208, atk: 'Rogue DHCP (DHCP Pirata)', def: 'DHCP Snooping (Trusted)', bg: '#FFFBEB', bd: '#D97706', fg: '#92400E' },
          { x: 402, atk: 'ARP Spoofing / MITM LAN', def: 'Dynamic ARP Inspection (DAI)', bg: '#EEF2FF', bd: '#4338CA', fg: '#312E81' },
          { x: 596, atk: 'Deautenticación Wi-Fi', def: 'WPA3-SAE + IEEE 802.11w PMF', bg: '#FCE7F3', bd: '#BE185D', fg: '#831843' },
        ].map((item, i) => (
          <g key={i} transform={`translate(${item.x}, 28)`}>
            <rect width="186" height="52" rx="6" fill={item.bg} stroke={item.bd} strokeWidth="1.4" />
            <text x="93" y="19" textAnchor="middle" fill="#DC2626" fontSize="8.4" fontWeight="800">✗ {item.atk}</text>
            <text x="93" y="38" textAnchor="middle" fill={item.fg} fontSize="8.5" fontWeight="800">✓ {item.def}</text>
          </g>
        ))}
      </g>
    </svg>
  );
}

export function ProtocolsPortsMasterDiagram() {
  return (
    <svg viewBox="0 0 820 280" className="w-full h-auto" role="img" aria-label="Mapa visual de protocolos y números de puertos TCP y UDP para el examen EGEL">
      <rect width="820" height="280" rx="14" fill="#FAF7F2" />

      {/* Columna 1: Administración Remota y Transferencia de Archivos (Inseguro vs Seguro) */}
      <g transform="translate(12, 12)">
        <rect width="260" height="256" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="240" height="24" rx="6" fill="#0F766E" />
        <text x="130" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="9.8" fontWeight="800">1. ADMIN REMOTA Y ARCHIVOS</text>

        {[
          { port: 'TCP 20 / 21', name: 'FTP (Datos 20 / Control 21)', note: 'Texto plano (Inseguro)', bg: '#FEE2E2', bd: '#DC2626', fg: '#991B1B' },
          { port: 'TCP 22', name: 'SSH / SFTP / SCP', note: 'Consola CLI y archivos CIFRADO', bg: '#F0FDFA', bd: '#0F766E', fg: '#134E4A' },
          { port: 'TCP 23', name: 'Telnet (Consola remota)', note: 'TEXTO PLANO (Prohibido en prod)', bg: '#FEE2E2', bd: '#DC2626', fg: '#991B1B' },
          { port: 'UDP 69', name: 'TFTP (Trivial FTP)', note: 'Sin auth (Backup IOS en LAN)', bg: '#FFFBEB', bd: '#D97706', fg: '#92400E' },
          { port: 'TCP 445', name: 'SMB / CIFS (Windows)', note: 'Carpetas/Impresoras en red', bg: '#EEF2FF', bd: '#4338CA', fg: '#312E81' },
          { port: 'TCP 3389', name: 'RDP (Remote Desktop)', note: 'Escritorio remoto gráfico Win', bg: '#F0FDFA', bd: '#0F766E', fg: '#134E4A' },
        ].map((p, i) => (
          <g key={i} transform={`translate(12, ${40 + i * 35})`}>
            <rect width="236" height="30" rx="5" fill={p.bg} stroke={p.bd} strokeWidth="1.2" />
            <text x="8" y="13" fill={p.fg} fontSize="8.5" fontWeight="800" fontFamily="monospace">{p.port} — {p.name}</text>
            <text x="8" y="25" fill="#44403C" fontSize="7.8" fontWeight="600">{p.note}</text>
          </g>
        ))}
      </g>

      {/* Columna 2: Web y Correo Electrónico (Texto Plano vs TLS/SSL) */}
      <g transform="translate(280, 12)">
        <rect width="260" height="256" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="240" height="24" rx="6" fill="#4338CA" />
        <text x="130" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="9.8" fontWeight="800">2. WEB, CORREO Y DIRECTORIO</text>

        {[
          { port: 'TCP 80 → 443', name: 'HTTP (80) → HTTPS (443)', note: 'Web plano (80) vs Cifrado TLS (443)', bg: '#F0FDFA', bd: '#0F766E', fg: '#134E4A' },
          { port: 'TCP 25 / 587', name: 'SMTP (Envío de Correo)', note: '25 Texto plano | 587/465 con TLS', bg: '#FFFBEB', bd: '#D97706', fg: '#92400E' },
          { port: 'TCP 110 → 995', name: 'POP3 (110) → POP3S (995)', note: 'Descarga correo entrante al cliente', bg: '#EEF2FF', bd: '#4338CA', fg: '#312E81' },
          { port: 'TCP 143 → 993', name: 'IMAP (143) → IMAPS (993)', note: 'Sincroniza correo en el servidor', bg: '#EEF2FF', bd: '#4338CA', fg: '#312E81' },
          { port: '389 → TCP 636', name: 'LDAP (389) → LDAPS (636)', note: 'Directorio Active Directory / OpenLDAP', bg: '#F0FDFA', bd: '#0F766E', fg: '#134E4A' },
          { port: 'TCP/UDP 88', name: 'Kerberos (Tickets Auth)', note: 'Autenticación en Active Directory', bg: '#FAF7F2', bd: '#78716C', fg: '#1C1917' },
        ].map((p, i) => (
          <g key={i} transform={`translate(12, ${40 + i * 35})`}>
            <rect width="236" height="30" rx="5" fill={p.bg} stroke={p.bd} strokeWidth="1.2" />
            <text x="8" y="13" fill={p.fg} fontSize="8.5" fontWeight="800" fontFamily="monospace">{p.port} — {p.name}</text>
            <text x="8" y="25" fill="#44403C" fontSize="7.8" fontWeight="600">{p.note}</text>
          </g>
        ))}
      </g>

      {/* Columna 3: Infraestructura, Monitoreo, Enrutamiento y Seguridad */}
      <g transform="translate(548, 12)">
        <rect width="260" height="256" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="240" height="24" rx="6" fill="#B45309" />
        <text x="130" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="9.8" fontWeight="800">3. RED, MONITOREO Y SEGURIDAD</text>

        {[
          { port: 'UDP/TCP 53', name: 'DNS (Nombres ↔ IP)', note: 'UDP 53 Consultas | TCP 53 Zonas', bg: '#EEF2FF', bd: '#4338CA', fg: '#312E81' },
          { port: 'UDP 67 / 68', name: 'DHCP (Proceso DORA)', note: 'UDP 67 Servidor | UDP 68 Cliente', bg: '#F0FDFA', bd: '#0F766E', fg: '#134E4A' },
          { port: 'UDP 123', name: 'NTP (Reloj Stratum 0–15)', note: 'Sincronización de tiempo para logs', bg: '#FAF7F2', bd: '#78716C', fg: '#1C1917' },
          { port: 'UDP 161 / 162', name: 'SNMP (NMS y MIB/OIDs)', note: '161 Consultas Agente | 162 Traps', bg: '#FFFBEB', bd: '#D97706', fg: '#92400E' },
          { port: 'UDP 514 / 6514', name: 'Syslog (Bitácoras 0 a 7)', note: 'UDP 514 Estándar | TCP 6514 TLS', bg: '#FFFBEB', bd: '#D97706', fg: '#92400E' },
          { port: '179 / 500 / 1812', name: 'BGP / IPsec / RADIUS', note: 'BGP TCP 179 | IKE UDP 500 | RAD 1812', bg: '#FCE7F3', bd: '#BE185D', fg: '#831843' },
        ].map((p, i) => (
          <g key={i} transform={`translate(12, ${40 + i * 35})`}>
            <rect width="236" height="30" rx="5" fill={p.bg} stroke={p.bd} strokeWidth="1.2" />
            <text x="8" y="13" fill={p.fg} fontSize="8.4" fontWeight="800" fontFamily="monospace">{p.port} — {p.name}</text>
            <text x="8" y="25" fill="#44403C" fontSize="7.8" fontWeight="600">{p.note}</text>
          </g>
        ))}
      </g>
    </svg>
  );
}

export function SwitchSviQosNetflowDiagram() {
  return (
    <svg viewBox="0 0 820 255" className="w-full h-auto" role="img" aria-label="Administración remota de Switch SVI, Wireshark SPAN, NetFlow y colas QoS LLQ">
      <rect width="820" height="255" rx="14" fill="#FAF7F2" />

      {/* Panel Izquierdo: Gestión Remota de Switch L2 entre Subredes */}
      <g transform="translate(12, 12)">
        <rect width="405" height="231" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="385" height="24" rx="6" fill="#0F766E" />
        <text x="202" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="10.2" fontWeight="800">GESTIÓN REMOTA DE SWITCH L2 DESDE OTRA SUBRED</text>

        <rect x="16" y="46" width="88" height="44" rx="6" fill="#292524" />
        <text x="60" y="65" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="800">Admin PC</text>
        <text x="60" y="79" textAnchor="middle" fill="#A7F3D0" fontSize="8" fontFamily="monospace">SSH (TCP 22)</text>

        <line x1="104" y1="68" x2="152" y2="68" stroke="#0F766E" strokeWidth="2.5" />

        <rect x="152" y="46" width="96" height="44" rx="6" fill="#FEF3C7" stroke="#B45309" strokeWidth="1.8" />
        <text x="200" y="65" textAnchor="middle" fill="#78350F" fontSize="9" fontWeight="800">Router Gateway</text>
        <text x="200" y="79" textAnchor="middle" fill="#92400E" fontSize="7.8" fontFamily="monospace">192.168.99.1</text>

        <line x1="248" y1="68" x2="292" y2="68" stroke="#0F766E" strokeWidth="2.5" />

        <rect x="292" y="46" width="98" height="44" rx="6" fill="#134E4A" />
        <text x="341" y="65" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="800">Switch Capa 2</text>
        <text x="341" y="79" textAnchor="middle" fill="#99F6E4" fontSize="7.8" fontFamily="monospace">SVI VLAN 99</text>

        <rect x="16" y="102" width="374" height="116" rx="7" fill="#1C1917" />
        <text x="26" y="121" fill="#FDE68A" fontSize="8.8" fontWeight="800">Requisitos obligatorios en Cisco IOS para gestión remota:</text>
        <text x="26" y="139" fill="#A7F3D0" fontSize="8.6" fontFamily="monospace">1) interface vlan 99 → ip address 192.168.99.2 255.255.255.0</text>
        <text x="26" y="156" fill="#93C5FD" fontSize="8.6" fontFamily="monospace">2) ip default-gateway 192.168.99.1 (para salir a otra subred)</text>
        <text x="26" y="173" fill="#FCA5A5" fontSize="8.6" fontFamily="monospace">3) transport input ssh (TCP 22 cifrado; bloquear Telnet TCP 23)</text>
        <text x="26" y="190" fill="#E9D5FF" fontSize="8.6" fontFamily="monospace">4) copy running-config startup-config (RAM → NVRAM fija)</text>
        <text x="26" y="207" fill="#D6D3D1" fontSize="8">• RDP (TCP 3389): Escritorio remoto gráfico para servidores Windows.</text>
      </g>

      {/* Panel Derecho: Baseline, Wireshark, NetFlow y QoS */}
      <g transform="translate(427, 12)">
        <rect width="381" height="231" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="361" height="24" rx="6" fill="#4338CA" />
        <text x="190" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="10.2" fontWeight="800"> BASELINE, WIRESHARK vs. NETFLOW Y COLAS QoS</text>

        <rect x="14" y="42" width="353" height="54" rx="6" fill="#EEF2FF" stroke="#6366F1" />
        <text x="22" y="58" fill="#312E81" fontSize="9.2" fontWeight="800">• Línea Base (Baseline), Wireshark y NetFlow:</text>
        <text x="22" y="73" fill="#44403C" fontSize="8.3">Baseline = perfil de rendimiento normal histórico para detectar anomalías.</text>
        <text x="22" y="87" fill="#4338CA" fontSize="8.3" fontWeight="700">Wireshark (SPAN): captura tramas completas | NetFlow: estadística de flujos.</text>

        <rect x="14" y="104" width="353" height="114" rx="6" fill="#FFFBEB" stroke="#F59E0B" />
        <text x="22" y="121" fill="#92400E" fontSize="9.2" fontWeight="800">• Calidad de Servicio (QoS) — Marcado CoS (L2 802.1p) y DSCP (L3 IP):</text>

        <rect x="24" y="131" width="333" height="24" rx="5" fill="#DCFCE7" stroke="#16A34A" />
        <text x="32" y="147" fill="#14532D" fontSize="8.6" fontWeight="800">Cola 1 — Prioridad Estricta (LLQ): VoIP y Videoconferencia (Sin Jitter)</text>

        <rect x="24" y="160" width="333" height="22" rx="5" fill="#FEF3C7" stroke="#D97706" />
        <text x="32" y="175" fill="#78350F" fontSize="8.5" fontWeight="700">Cola 2 — Garantizada (CBWFQ): Tráfico transaccional / ERP crítico</text>

        <rect x="24" y="187" width="333" height="22" rx="5" fill="#F5F5F4" stroke="#78716C" />
        <text x="32" y="202" fill="#44403C" fontSize="8.5">Cola 3 — Best-Effort (Menor prioridad): Descargas masivas, P2P, Backups</text>
      </g>
    </svg>
  );
}

export function NetworkAttacksTaxonomyDiagram() {
  return (
    <svg viewBox="0 0 820 265" className="w-full h-auto" role="img" aria-label="Mecánica de ataques de red DDoS, MITM, Replay, Malware y Zero-Day CVE">
      <rect width="820" height="265" rx="14" fill="#FAF7F2" />

      {/* Panel 1: DoS/DDoS, MITM, Sniffing y Replay */}
      <g transform="translate(12, 12)">
        <rect width="400" height="241" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="380" height="24" rx="6" fill="#991B1B" />
        <text x="200" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="10.2" fontWeight="800">ATAQUES EN TRÁNSITO: DDoS, MITM, SNIFFING Y REPLAY</text>

        <rect x="14" y="42" width="372" height="44" rx="6" fill="#FEE2E2" stroke="#DC2626" />
        <text x="22" y="58" fill="#991B1B" fontSize="9.2" fontWeight="800">1. DoS / DDoS (Ataque contra la Disponibilidad):</text>
        <text x="22" y="74" fill="#7F1D1D" fontSize="8.3">Inunda con tráfico (SYN/UDP Flood) desde una Botnet de equipos zombis.</text>

        <rect x="14" y="92" width="372" height="44" rx="6" fill="#FFFBEB" stroke="#F59E0B" />
        <text x="22" y="108" fill="#92400E" fontSize="9.2" fontWeight="800">2. Man-in-the-Middle (MITM) vs. Sniffing Pasivo:</text>
        <text x="22" y="124" fill="#57534E" fontSize="8.3">Sniffing solo escucha texto plano; MITM intercepta y altera entre 2 víctimas.</text>

        <rect x="14" y="142" width="372" height="42" rx="6" fill="#EEF2FF" stroke="#4338CA" />
        <text x="22" y="158" fill="#312E81" fontSize="9.2" fontWeight="800">3. Replay Attack (Ataque de Repetición de Sesión):</text>
        <text x="22" y="173" fill="#4338CA" fontSize="8.3" fontWeight="700">Retransmite un token válido capturado • Se mitiga con Timestamps y Nonce.</text>

        <rect x="14" y="190" width="372" height="41" rx="6" fill="#F0FDFA" stroke="#0F766E" />
        <text x="22" y="206" fill="#134E4A" fontSize="9" fontWeight="800">4. Ingeniería Social (Factor Humano):</text>
        <text x="22" y="220" fill="#57534E" fontSize="8.3">Phishing (engaño digital), Spear Phishing (dirigido) y Shoulder Surfing (espiar).</text>
      </g>

      {/* Panel 2: Malware (Gusano vs Ransomware vs Troyano) y 0-Day / CVE */}
      <g transform="translate(422, 12)">
        <rect width="386" height="241" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="366" height="24" rx="6" fill="#292524" />
        <text x="193" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="10.2" fontWeight="800">CLASIFICACIÓN DE MALWARE, ZERO-DAY Y CVE</text>

        <rect x="14" y="42" width="358" height="46" rx="6" fill="#FEF3C7" stroke="#D97706" />
        <text x="22" y="59" fill="#92400E" fontSize="9.3" fontWeight="800">• Gusano (Worm) — Propagación Autónoma en Red:</text>
        <text x="22" y="75" fill="#57534E" fontSize="8.3">Se replica y propaga SOLO por la red (ej. SMB 445) sin intervención humana.</text>

        <rect x="14" y="95" width="358" height="44" rx="6" fill="#FEE2E2" stroke="#DC2626" />
        <text x="22" y="111" fill="#991B1B" fontSize="9.3" fontWeight="800">• Ransomware — Secuestro Criptográfico de Datos:</text>
        <text x="22" y="126" fill="#7F1D1D" fontSize="8.3">Cifra discos/archivos de la víctima y exige rescate económico por la llave.</text>

        <rect x="14" y="146" width="358" height="40" rx="6" fill="#F5F5F4" stroke="#57534E" />
        <text x="22" y="162" fill="#1C1917" fontSize="9.2" fontWeight="800">• Troyano (Trojan):</text>
        <text x="22" y="176" fill="#57534E" fontSize="8.3">Aparenta ser software legítimo pero abre una Puerta Trasera (Backdoor).</text>

        <rect x="14" y="193" width="358" height="38" rx="6" fill="#FCE7F3" stroke="#BE185D" />
        <text x="22" y="208" fill="#831843" fontSize="9" fontWeight="800">• Vulnerabilidad Zero-Day (Día Cero) vs. Catálogo CVE:</text>
        <text x="22" y="222" fill="#57534E" fontSize="8.2">0-Day = sin parche aún del fabricante | CVE = ID público único (CVE-AAAA-NNNN).</text>
      </g>
    </svg>
  );
}

export function Layer2SecurityWpa3VpnDiagram() {
  return (
    <svg viewBox="0 0 820 265" className="w-full h-auto" role="img" aria-label="Seguridad en Switch Capa 2, WPA3-SAE 802.11w, VPN IPsec ESP/AH y herramientas de auditoría">
      <rect width="820" height="265" rx="14" fill="#FAF7F2" />

      {/* Panel 1: Seguridad Switch Capa 2 */}
      <g transform="translate(12, 12)">
        <rect width="265" height="241" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="245" height="24" rx="6" fill="#0F766E" />
        <text x="132" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="10.2" fontWeight="800">DEFENSA EN SWITCH CAPA 2</text>

        <rect x="12" y="42" width="241" height="44" rx="6" fill="#F0FDFA" stroke="#0F766E" />
        <text x="20" y="58" fill="#134E4A" fontSize="9" fontWeight="800">1. Port Security (Limita MACs):</text>
        <text x="20" y="73" fill="#57534E" fontSize="8.2">Mitiga MAC Flooding (Shutdown / Restrict).</text>

        <rect x="12" y="92" width="241" height="44" rx="6" fill="#FFFBEB" stroke="#D97706" />
        <text x="20" y="108" fill="#92400E" fontSize="9" fontWeight="800">2. DHCP Snooping (Trusted/Untrusted):</text>
        <text x="20" y="123" fill="#57534E" fontSize="8.2">Bloquea DHCP Offer pirata (Rogue DHCP).</text>

        <rect x="12" y="142" width="241" height="44" rx="6" fill="#EEF2FF" stroke="#4338CA" />
        <text x="20" y="158" fill="#312E81" fontSize="9" fontWeight="800">3. Dynamic ARP Inspection (DAI):</text>
        <text x="20" y="173" fill="#57534E" fontSize="8.2">Valida ARP con tabla Snooping (frena MITM).</text>

        <rect x="12" y="192" width="241" height="39" rx="6" fill="#FAF7F2" stroke="#78716C" />
        <text x="20" y="207" fill="#1C1917" fontSize="8.8" fontWeight="800">4. IEEE 802.1X (Control por Puerto):</text>
        <text x="20" y="221" fill="#57534E" fontSize="8">Autentica Suplicante vía servidor RADIUS.</text>
      </g>

      {/* Panel 2: Wi-Fi WPA3-SAE y VPN IPsec (AH vs ESP) */}
      <g transform="translate(287, 12)">
        <rect width="265" height="241" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="245" height="24" rx="6" fill="#4338CA" />
        <text x="132" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="10.2" fontWeight="800">WI-FI WPA3 Y TÚNEL VPN IPSEC</text>

        <rect x="12" y="42" width="241" height="88" rx="6" fill="#EEF2FF" stroke="#6366F1" />
        <text x="20" y="58" fill="#312E81" fontSize="9.2" fontWeight="800">Evolución Seguridad Wi-Fi (802.11):</text>
        <text x="20" y="73" fill="#DC2626" fontSize="8.2" fontWeight="700">• WEP (RC4): Obsoleto e inseguro.</text>
        <text x="20" y="88" fill="#57534E" fontSize="8.2">• WPA2 (802.11i): Cifrado fuerte AES-CCMP.</text>
        <text x="20" y="103" fill="#0F766E" fontSize="8.3" fontWeight="800">• WPA3: Protocolo SAE (frena diccionario)</text>
        <text x="20" y="118" fill="#312E81" fontSize="8.2" fontWeight="700">  + IEEE 802.11w (PMF: frena Deauth Wi-Fi).</text>

        <rect x="12" y="138" width="241" height="92" rx="6" fill="#F0FDFA" stroke="#0F766E" />
        <text x="20" y="154" fill="#134E4A" fontSize="9.2" fontWeight="800">VPN IPsec (Capa 3) y DNSSEC:</text>
        <text x="20" y="170" fill="#57534E" fontSize="8.2">• Encabezado AH: Integridad (SIN cifrado).</text>
        <text x="20" y="185" fill="#0F766E" fontSize="8.3" fontWeight="800">• Encabezado ESP: Cifrado AES + Integridad.</text>
        <text x="20" y="200" fill="#57534E" fontSize="8.2">• Modo Túnel: Cifra paquete IP completo.</text>
        <text x="20" y="216" fill="#134E4A" fontSize="8.2" fontWeight="700">• DNSSEC: Firma criptográfica en registros DNS.</text>
      </g>

      {/* Panel 3: Hardening, MFA y Auditoría (Nmap, Nessus, PenTest) */}
      <g transform="translate(562, 12)">
        <rect width="246" height="241" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="226" height="24" rx="6" fill="#B45309" />
        <text x="123" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="10.2" fontWeight="800">AUDITORÍA, HARDENING Y MFA</text>

        <rect x="12" y="42" width="222" height="54" rx="6" fill="#FFFBEB" stroke="#F59E0B" />
        <text x="20" y="58" fill="#92400E" fontSize="9" fontWeight="800">• Hardening y MFA:</text>
        <text x="20" y="72" fill="#57534E" fontSize="8.2">Cerrar puertos, apagar UPnP y Telnet.</text>
        <text x="20" y="86" fill="#78350F" fontSize="8.2" fontWeight="700">MFA: Sabes + Tienes (Token) + Eres (Bio).</text>

        <rect x="12" y="104" width="222" height="126" rx="6" fill="#1C1917" />
        <text x="20" y="122" fill="#FDE68A" fontSize="9" fontWeight="800">Herramientas de Examen EGEL:</text>
        <text x="20" y="142" fill="#A7F3D0" fontSize="8.5" fontFamily="monospace" fontWeight="700">1. Nmap:</text>
        <text x="20" y="155" fill="#D6D3D1" fontSize="8">Descubre hosts y puertos abiertos.</text>
        <text x="20" y="174" fill="#93C5FD" fontSize="8.5" fontFamily="monospace" fontWeight="700">2. Nessus / OpenVAS:</text>
        <text x="20" y="187" fill="#D6D3D1" fontSize="8">Escáner automatizado de CVEs.</text>
        <text x="20" y="206" fill="#FCA5A5" fontSize="8.5" fontFamily="monospace" fontWeight="700">3. Penetration Testing:</text>
        <text x="20" y="219" fill="#D6D3D1" fontSize="8">Simulación autorizada de ataque real.</text>
      </g>
    </svg>
  );
}

import React, { useState, useMemo } from 'react';
import {
  Eye,
  EyeOff,
  CheckCircle2,
  RotateCcw,
  Sparkles,
  BookOpen,
  Lightbulb,
  ChevronLeft,
  ChevronRight,
  Shuffle,
  LayoutGrid,
  RectangleHorizontal,
  Maximize2,
  X,
} from 'lucide-react';
import {
  SignalsNyquistAdcDiagram,
  KirchhoffWheatstoneKelvinDiagram,
  RcFiltersResonanceDiagram,
  PowerSupplyBuckBoostDiagram,
  BjtMosfetOpAmpDiagram,
  DigitalLogicFsmMooreMealyDiagram,
  CpuVonNeumannHarvardDiagram,
  MemoryHierarchyPipelineRaidDiagram,
} from './HardwareDiagrams11_12';
import {
  RtosPriorityInversionDiagram,
  McuMemoryMapFpgaDiagram,
  GpioIsrPwmWdtDiagram,
  UartI2cSpiBusesDiagram,
  ClosedLoopPidControlDiagram,
  IndustrialSensorsPlcScanDiagram,
} from './HardwareDiagrams13_14';
import {
  TopologiesDiagram,
  CiscoThreeTierDiagram,
  OsiTcpIpPduDiagram,
  StructuredCablingFiberDiagram,
  LanSwitchingVlanStpDiagram,
  IpSubnettingRoutingDiagram,
} from './NetworkDiagrams21';
import {
  DhcpDnsArpDiagram,
  SnmpSyslogNtpDiagram,
  CliDiagnosticsQosDiagram,
  ProtocolsPortsMasterDiagram,
  SwitchSviQosNetflowDiagram,
  CryptoCiaPkiDiagram,
  NetworkAttacksTaxonomyDiagram,
  PerimeterDefenseIdsIpsDiagram,
  Layer2SecurityWpa3VpnDiagram,
} from './NetworkDiagrams22_23';
import {
  SdlcScrumTddDiagram,
  UmlAndArchitectureStylesDiagram,
  SoftwareTestingMcCabeMaintenanceDiagram,
  CompilerMemoryStackHeapDiagram,
  OsSchedulingDeadlockDataStructuresDiagram,
  RelationalNormalizationSqlDiagram,
  GraphAlgorithmsDijkstraMstDiagram,
} from './SoftwareDiagrams31_33';

const ALL_NETWORK_DIAGRAMS = [
  // ================= ÁREA 1: IMPLEMENTACIÓN DE HARDWARE =================
  {
    id: 'nyquist-adc-1-1',
    matchTitles: ['Teorema de Muestreo de Nyquist-Shannon'],
    title: 'Teorema de Muestreo de Nyquist-Shannon (fs ≥ 2·fmax) y Resolución ADC (2^N)',
    badge: 'Subárea 1.1 • Muestreo y ADC',
    caption: 'Para evitar Aliasing se exige fs ≥ 2·fmax más un filtro pasa-bajas anti-aliasing. En un ADC, subir ΔN bits multiplica la resolución por 2^(ΔN) (ej. de 10 a 12 bits mejora 2² = 4 veces).',
    Component: SignalsNyquistAdcDiagram,
  },
  {
    id: 'wheatstone-kelvin-1-1',
    matchTitles: ['Puente de Wheatstone y Medición Kelvin a 4 Hilos'],
    title: 'Puente de Wheatstone Equilibrado y Medición Kelvin a 4 Hilos (Miliohmios)',
    badge: 'Subárea 1.1 • Instrumentación',
    caption: 'En equilibrio (Vg = 0 V), Rx = R3·(R2/R1). Para medir resistencias ultrabajas (mΩ) sin que afecte la resistencia de los cables se usa Medición Kelvin a 4 hilos (2 inyectan corriente y 2 miden tensión con Zin → ∞).',
    Component: KirchhoffWheatstoneKelvinDiagram,
  },
  {
    id: 'rc-filters-rlc-1-1',
    matchTitles: ['Filtros Pasivos RC Pasa-Bajas y Pasa-Altas'],
    title: 'Filtros Pasivos RC Pasa-Bajas vs. Pasa-Altas (fc = 1/2πRC) y Resonancia RLC',
    badge: 'Subárea 1.1 • Filtros y Resonancia',
    caption: 'En un circuito RC: salida en el Capacitor = Pasa-Bajas; salida en el Resistor = Pasa-Altas. En resonancia RLC (f0 = 1/[2π√(LC)]), XL = XC y en un RLC serie la impedancia es mínima (Z = R) y la corriente máxima.',
    Component: RcFiltersResonanceDiagram,
  },
  {
    id: 'power-buck-boost-1-1',
    matchTitles: ['Etapas de una Fuente de Alimentación Lineal Regulada'],
    title: 'Las 4 Etapas de una Fuente Lineal (Rizado 120 Hz) y Convertidores DC-DC Buck / Boost',
    badge: 'Subárea 1.1 • Fuentes de Potencia',
    caption: 'En un puente rectificador de onda completa conectado a 60 Hz, la frecuencia de rizado se duplica a 120 Hz. En fuentes conmutadas: Buck reduce voltaje (Vout = D·Vin) y Boost lo eleva (Vout = Vin / [1 - D]).',
    Component: PowerSupplyBuckBoostDiagram,
  },
  {
    id: 'bjt-opamp-1-1',
    matchTitles: ['Configuraciones Clásicas (Seguidor, Inversor y No Inversor)'],
    title: 'Regiones del Transistor BJT (Corte, Activa, Saturación) y Topologías con Op-Amp',
    badge: 'Subárea 1.1 • Transistores y Op-Amps',
    caption: 'Como interruptor digital el BJT conmuta entre Corte (abierto) y Saturación (cerrado). En Op-Amps: Buffer Av = 1; Inversor Av = -Rf/Rin (desfasa 180°); No Inversor Av = 1 + Rf/Rin; Instrumentación ofrece máximo CMRR.',
    Component: BjtMosfetOpAmpDiagram,
  },
  {
    id: 'fsm-moore-mealy-1-2',
    matchTitles: ['Máquinas de Estados Finitos (FSM)'],
    title: 'Mapas de Karnaugh (2^k), Flip-Flops Síncronos (D, JK, T) y FSM Moore vs. Mealy',
    badge: 'Subárea 1.2 • Lógica Secuencial',
    caption: 'En un K-Map agrupar 2^k celdas elimina k variables. El Flip-Flop JK con J=1, K=1 bascula (toggle) y el T divide la frecuencia entre 2. En Moore la salida depende SOLO del estado actual; en Mealy depende del estado y de la entrada actual.',
    Component: DigitalLogicFsmMooreMealyDiagram,
  },
  {
    id: 'cpu-vonneumann-harvard-1-2',
    matchTitles: ['Arquitectura Von Neumann vs. Arquitectura Harvard'],
    title: 'Organización Interna de CPU (ALU, FPU, PC, IR, SP), RISC vs. CISC y Von Neumann vs. Harvard',
    badge: 'Subárea 1.2 • Arquitectura de CPU',
    caption: 'La ISA es el contrato software/hardware (instrucciones/registros) y la Microarquitectura su implementación física. Von Neumann comparte 1 solo bus para código y datos; Harvard separa físicamente memorias y buses de instrucciones y datos.',
    Component: CpuVonNeumannHarvardDiagram,
  },
  {
    id: 'memory-pipeline-raid-1-2',
    matchTitles: ['Niveles de la Jerarquía de Memoria'],
    title: 'Jerarquía de Memoria (L1–L3, MMU/TLB), Pipeline de 5 Etapas (Riesgo RAW) y Niveles RAID',
    badge: 'Subárea 1.2 • Memoria, Pipeline y RAID',
    caption: 'Ante un TLB Miss, la MMU consulta la Tabla de Páginas en RAM. El riesgo verdadero del pipeline es RAW (resuelto con Forwarding) y WAR/WAW se eliminan con Register Renaming. RAID 0 no tolera fallos; RAID 1 espeja al 50%; RAID 5 usa paridad distribuida (N-1).',
    Component: MemoryHierarchyPipelineRaidDiagram,
  },
  {
    id: 'rtos-priority-1-3',
    matchTitles: ['Planificación Apropiativa (Preemptive) e Inversión de Prioridad'],
    title: 'Bare-Metal vs. RTOS, Tiempo Real Duro (Hard Deadline) e Inversión de Prioridad',
    badge: 'Subárea 1.3 • RTOS y Tiempo Real',
    caption: 'En Tiempo Real Duro incumplir un deadline es catastrófico (importa el determinismo). La Inversión de Prioridad en RTOS se resuelve mediante el protocolo de Herencia de Prioridad (Priority Inheritance).',
    Component: RtosPriorityInversionDiagram,
  },
  {
    id: 'mcu-fpga-memory-1-3',
    matchTitles: ['Mapa de Memoria en Microcontroladores'],
    title: 'Mapa de Memoria en Microcontrolador (Flash, Bootloader, SRAM, EEPROM, SFR) y MCU vs. FPGA',
    badge: 'Subárea 1.3 • Arquitectura MCU y FPGA',
    caption: 'Flash guarda el firmware, SRAM la pila y variables volátiles, y EEPROM parámetros no volátiles. A diferencia de la ejecución secuencial del MCU, una FPGA ofrece paralelismo físico real en hardware.',
    Component: McuMemoryMapFpgaDiagram,
  },
  {
    id: 'gpio-isr-pwm-wdt-1-3',
    matchTitles: ['Temporizadores (Timers), Modo Input Capture y Modulación PWM'],
    title: 'GPIO Pull-Up con Antirrebote, Reglas de ISR (volatile), Modulación PWM y Watchdog Timer (WDT)',
    badge: 'Subárea 1.3 • Periféricos e Interrupciones',
    caption: 'Toda variable modificada en una ISR debe declararse volatile y la ISR jamás debe usar delay(). El PWM regula potencia variando el Duty Cycle (Ton/T) y el Watchdog Timer reinicia el MCU si el software se cuelga.',
    Component: GpioIsrPwmWdtDiagram,
  },
  {
    id: 'uart-i2c-spi-1-3',
    matchTitles: ['Bus I2C (Inter-Integrated Circuit)'],
    title: 'Comparativa de Buses Seriales Embebidos: UART (Asíncrono), I2C (2 Hilos + Pull-Up) y SPI (4 Hilos)',
    badge: 'Subárea 1.3 • Buses UART / I2C / SPI',
    caption: 'UART es asíncrono (TX/RX cruzados al mismo Baud Rate). I2C usa 2 hilos (SDA/SCL con Pull-Up) y direcciones de 7 bits (hasta 127 esclavos, Half-Duplex). SPI usa 4 hilos (MOSI, MISO, SCK, SS) y es el más rápido (Full-Duplex).',
    Component: UartI2cSpiBusesDiagram,
  },
  {
    id: 'closed-loop-pid-1-4',
    matchTitles: ['Acciones del Controlador PID'],
    title: 'Lazo Cerrado de Control, Acciones del PID (Kp, Ki, Kd + Anti-Windup) y Amortiguamiento (ζ)',
    badge: 'Subárea 1.4 • Control PID y Estabilidad',
    caption: 'En un PID: Kp acelera la respuesta; Ki elimina por completo el error en estado estacionario (e_ss = 0); Kd amortigua el sobreimpulso pero amplifica el ruido de alta frecuencia. Anti-Windup evita saturar el integrador y la Histéresis evita chattering en On-Off.',
    Component: ClosedLoopPidControlDiagram,
  },
  {
    id: 'sensors-plc-scan-1-4',
    matchTitles: ['Autómata Programable Industrial (PLC)'],
    title: 'Lazo Industrial 4–20 mA (Cero Vivo), Encoders, Ciclo Scan del PLC (Ladder) y Variador VFD',
    badge: 'Subárea 1.4 • Instrumentación y PLC',
    caption: 'El lazo 4–20 mA no se atenúa en cables largos y distingue 0% (4 mA) de cable roto (0 mA). El Encoder Absoluto (Código Gray) no pierde su posición al apagarse. El VFD regula motores trifásicos CA y el PLC ejecuta su Ciclo Scan determinista.',
    Component: IndustrialSensorsPlcScanDiagram,
  },

  // ================= ÁREA 2: IMPLEMENTACIÓN DE REDES =================
  {
    id: 'topologies-2-1',
    matchTitles: ['Topologías Físicas y Lógicas'],
    title: 'Esquema Comparativo: Topologías Estrella, Malla Completa, Bus y Anillo',
    badge: 'Subárea 2.1 • Topologías',
    caption: 'En Estrella el fallo de un cable queda aislado (pero el switch central es punto único de fallo). En Malla Completa existen N(N-1)/2 enlaces con máxima redundancia WAN.',
    Component: TopologiesDiagram,
  },
  {
    id: 'cisco-3-tier-2-1',
    matchTitles: ['Diseño Jerárquico de Tres Capas de Cisco'],
    title: 'Arquitectura Jerárquica de Campus Cisco (Acceso, Distribución y Núcleo)',
    badge: 'Subárea 2.1 • Diseño Cisco 3 Capas',
    caption: 'Acceso conecta dispositivos finales (VLANs, Port Security, PoE); Distribución aplica políticas (ACLs, QoS, enrutamiento L3 Inter-VLAN, HSRP); Núcleo conmuta a máxima velocidad sin filtros pesados.',
    Component: CiscoThreeTierDiagram,
  },
  {
    id: 'osi-tcpip-pdu-2-1',
    matchTitles: ['Las 7 Capas del Modelo OSI'],
    title: 'Modelo OSI (7 Capas) vs. TCP/IP (4 Capas), PDUs Exactas y Encapsulación Ethernet',
    badge: 'Subárea 2.1 • Modelos OSI y PDUs',
    caption: 'Orden descendente de PDUs en examen: Datos (Capas 7-5) → Segmento TCP / Datagrama UDP (Capa 4) → Paquete (Capa 3) → Trama con FCS/CRC-32 (Capa 2) → Bits (Capa 1). MTU Ethernet = 1500 Bytes.',
    Component: OsiTcpIpPduDiagram,
  },
  {
    id: 'cabling-fiber-2-1',
    matchTitles: ['Par Trenzado UTP'],
    title: 'Cableado Estructurado TIA/EIA-568 (Regla 100 m), Tipos de Cable UTP y Fibra Óptica',
    badge: 'Subárea 2.1 • Capa Física',
    caption: 'El enlace horizontal UTP no debe exceder 100 m (90 m rígido + 10 m patch cords). La fibra Multimodo (50/62.5 μm) usa LED/VCSEL para campus y la Monomodo (9 μm) usa láser para largas distancias WAN.',
    Component: StructuredCablingFiberDiagram,
  },
  {
    id: 'lan-vlan-stp-2-1',
    matchTitles: ['Dominios de Colisión y Dominios de Broadcast'],
    title: 'Dominios de Colisión/Broadcast, Trunk IEEE 802.1Q, STP y EtherChannel',
    badge: 'Subárea 2.1 • Conmutación Capa 2',
    caption: 'Cada puerto de un Switch es un dominio de colisión separado; un Router o una VLAN separan dominios de broadcast. El enlace Trunk 802.1Q etiqueta tramas con 4 bytes y STP bloquea bucles físicos.',
    Component: LanSwitchingVlanStpDiagram,
  },
  {
    id: 'ip-subnet-routing-2-1',
    matchTitles: ['Cálculo de Subredes'],
    title: 'Subnetting IPv4 (2^h - 2), Autoconfiguración IPv6 SLAAC y Enrutamiento (RIP / OSPF / BGP)',
    badge: 'Subárea 2.1 • Capa 3 Red',
    caption: 'En IPv4 los hosts útiles son 2^h - 2 (/30 = 2 hosts para enlace WAN). En IPv6 SLAAC autoconfigura la IP mediante Router Advertisement sin DHCP. OSPF usa Dijkstra (estado de enlace) y RIP conteo de saltos.',
    Component: IpSubnettingRoutingDiagram,
  },
  {
    id: 'dhcp-dns-arp-2-2',
    matchTitles: ['DHCP (Dynamic Host Configuration Protocol'],
    title: 'Flujo DHCP (Proceso DORA), Registros DNS (A, AAAA, MX, PTR, CNAME) y Resolución ARP',
    badge: 'Subárea 2.2 • Servicios DHCP / DNS / ARP',
    caption: 'DHCP asigna IP en 4 pasos (Discover → Offer → Request → ACK, UDP 67/68). DNS traduce nombres a IP en el puerto 53. ARP descubre la dirección MAC mediante un ARP Request en broadcast.',
    Component: DhcpDnsArpDiagram,
  },
  {
    id: 'snmp-syslog-ntp-2-2',
    matchTitles: ['SNMP (Simple Network Management Protocol'],
    title: 'Arquitectura SNMP (NMS, Agente, MIB, Traps UDP 161/162), Niveles Syslog (0–7) y Estratos NTP',
    badge: 'Subárea 2.2 • Monitoreo SNMP y Syslog',
    caption: 'SNMPv3 incorpora autenticación y cifrado AES. En Syslog (UDP 514), el nivel 0 (Emergency) es el más crítico y el 7 (Debug) el menos crítico. NTP (UDP 123) sincroniza relojes por estratos.',
    Component: SnmpSyslogNtpDiagram,
  },
  {
    id: 'cli-diag-qos-2-2',
    matchTitles: ['`tracert`'],
    title: 'Mecanismo de Traceroute (TTL + ICMP 11) y Diagnóstico con Ping',
    badge: 'Subárea 2.2 • Diagnóstico CLI',
    caption: 'Tracert incrementa el TTL (1, 2, 3...) recibiendo ICMP Tipo 11 (Time Exceeded) de cada router intermedio para descubrir la ruta salto a salto.',
    Component: CliDiagnosticsQosDiagram,
  },
  {
    id: 'protocols-ports-master-2-2',
    matchTitles: ['Administración Remota Segura'],
    title: 'Mapa Maestro de Protocolos y Números de Puertos TCP / UDP (Texto Plano vs. Cifrado)',
    badge: 'Subárea 2.2 • Mapa de Puertos TCP/UDP',
    caption: 'Puertos clave CENEVAL: FTP (TCP 20/21), SSH/SFTP (TCP 22 cifrado), Telnet (TCP 23 texto plano), SMTP (TCP 25/587), DNS (UDP/TCP 53), DHCP (UDP 67/68), TFTP (UDP 69), HTTP (80) vs HTTPS (443), POP3 (110/995), NTP (UDP 123), IMAP (143/993), SNMP (UDP 161/162), BGP (TCP 179), LDAP (389/636), SMB (TCP 445), Syslog (UDP 514), RADIUS (UDP 1812) y RDP (TCP 3389).',
    Component: ProtocolsPortsMasterDiagram,
  },
  {
    id: 'switch-svi-qos-2-2',
    matchTitles: ['Configuración de Switch Administrable'],
    title: 'Administración Remota de Switch (SVI + Default Gateway), Wireshark vs. NetFlow y Colas QoS',
    badge: 'Subárea 2.2 • Gestión de Switch y QoS',
    caption: 'Para administrar un switch L2 desde otra subred es obligatorio configurar la IP en la SVI (interface vlan) y el ip default-gateway, accediendo por SSH (TCP 22). QoS prioriza VoIP mediante LLQ (CoS/DSCP).',
    Component: SwitchSviQosNetflowDiagram,
  },
  {
    id: 'crypto-cia-pki-2-3',
    matchTitles: ['La Tríada CIA'],
    title: 'Tríada CIA, Criptografía Simétrica (AES vs. DES obsoleto) y Regla de Oro Asimétrica (RSA/ECC)',
    badge: 'Subárea 2.3 • Criptografía y PKI',
    caption: 'AES es el estándar simétrico seguro (DES de 56 bits es obsoleto). En criptografía asimétrica: se cifra con la Clave Pública del receptor (confidencialidad) y se firma con la Clave Privada del emisor (no repudio).',
    Component: CryptoCiaPkiDiagram,
  },
  {
    id: 'attacks-taxonomy-2-3',
    matchTitles: ['Ataques a la Disponibilidad'],
    title: 'Taxonomía de Ataques de Red (DDoS, MITM, Replay), Malware (Gusano vs. Ransomware) y Zero-Day',
    badge: 'Subárea 2.3 • Amenazas y Malware',
    caption: 'Un Gusano (Worm) se replica y propaga solo por la red sin intervención humana; el Ransomware cifra archivos pidiendo rescate. El ataque Replay se mitiga con Timestamps y Nonces.',
    Component: NetworkAttacksTaxonomyDiagram,
  },
  {
    id: 'defense-ids-ips-l2-2-3',
    matchTitles: ['Diferencia Crítica entre IDS'],
    title: 'Arquitectura Perimetral: Firewall / NGFW, DMZ y Diferencia entre IDS (Pasivo) e IPS (En Línea)',
    badge: 'Subárea 2.3 • Defensa Perimetral',
    caption: 'El IPS se instala En Línea (In-Line) y bloquea paquetes maliciosos en tiempo real; el IDS es pasivo (copia SPAN) y solo alerta al SIEM.',
    Component: PerimeterDefenseIdsIpsDiagram,
  },
  {
    id: 'l2-wpa3-vpn-audit-2-3',
    matchTitles: ['Controles de Seguridad en Switches de Capa 2'],
    title: 'Seguridad en Capa 2 (Port Security, DHCP Snooping, DAI), WPA3-SAE (802.11w), VPN IPsec y Auditoría',
    badge: 'Subárea 2.3 • Seguridad LAN, Wi-Fi y VPN',
    caption: 'Port Security mitiga MAC Flooding; DHCP Snooping mitiga Rogue DHCP; DAI mitiga ARP Spoofing. WPA3 usa SAE + 802.11w (PMF). En IPsec, ESP cifra el tráfico (AH no cifra).',
    Component: Layer2SecurityWpa3VpnDiagram,
  },

  // ================= ÁREA 3: IMPLEMENTACIÓN DE SOFTWARE =================
  {
    id: 'sdlc-scrum-tdd-3-1',
    matchTitles: ['Modelos Tradicionales o Predictivos'],
    title: 'Modelos de Ciclo de Vida (Cascada, Espiral por Riesgos, Scrum), Ciclo TDD y SRS IEEE 830',
    badge: 'Subárea 3.1 • SDLC, Ágil y SRS',
    caption: 'El Modelo en Espiral (Boehm) se elige para proyectos complejos con alto riesgo. En Scrum el Product Owner prioriza el Backlog con Historias de Usuario. TDD sigue el ciclo corto Red → Green → Refactor.',
    Component: SdlcScrumTddDiagram,
  },
  {
    id: 'uml-arch-styles-3-1',
    matchTitles: ['Catálogo Completo de Diagramas UML'],
    title: 'Relaciones UML (Composición vs. Agregación, Include vs. Extend, Despliegue) y Estilos Arquitectónicos',
    badge: 'Subárea 3.1 • UML y Arquitectura',
    caption: 'En UML: Composición (rombo negro) implica dependencia fuerte de vida; Agregación (rombo blanco) dependencia débil; <<include>> es obligatorio y <<extend>> opcional; el Diagrama de Despliegue muestra Nodos físicos de hardware.',
    Component: UmlAndArchitectureStylesDiagram,
  },
  {
    id: 'testing-mccabe-maint-3-1',
    matchTitles: ['Pruebas de Caja Negra vs. Caja Blanca y Complejidad Ciclomática de McCabe'],
    title: 'Niveles de Prueba (Mocks), Complejidad Ciclomática de McCabe V(G) y los 4 Tipos de Mantenimiento',
    badge: 'Subárea 3.1 • Pruebas y Mantenimiento',
    caption: 'Las pruebas unitarias aíslan dependencias con Mocks/Stubs. La Complejidad Ciclomática de McCabe es V(G) = E - N + 2 = P + 1. Mantenimiento: Correctivo (bugs), Adaptativo (nuevo SO/ley), Perfectivo (nuevas funciones) y Preventivo (refactorizar).',
    Component: SoftwareTestingMcCabeMaintenanceDiagram,
  },
  {
    id: 'compiler-memory-asm-3-2',
    matchTitles: ['Fases de un Compilador, Gramáticas BNF, AST, Linker e Intérprete'],
    title: 'Las 6 Fases del Compilador + Linker, Memoria Stack vs. Heap (Valgrind) y Ensamblador x86',
    badge: 'Subárea 3.2 • Compiladores y Memoria',
    caption: 'El análisis sintáctico usa gramáticas BNF para construir el árbol AST y el Linker une bibliotecas. Olvidar free() tras malloc() en el Heap causa Memory Leaks (detectados con Valgrind). En ensamblador, CMP activa ZF=1 si son iguales para saltar con JZ/JMPZ.',
    Component: CompilerMemoryStackHeapDiagram,
  },
  {
    id: 'os-deadlock-big-o-3-2',
    matchTitles: ['Interbloqueos (Deadlocks) y las 4 Condiciones Necesarias de Coffman'],
    title: 'Planificación de CPU (SJF vs. Round Robin), 4 Condiciones de Coffman (Deadlock) y Complejidad Big-O',
    badge: 'Subárea 3.2 • SO, Concurrencia y Big-O',
    caption: 'SJF minimiza el tiempo de espera promedio; Round Robin usa Quantum fijo. Un Deadlock exige las 4 condiciones de Coffman. BFS usa Cola (FIFO), DFS usa Pila (LIFO), Búsqueda Binaria O(log n) exige arreglo ordenado, y MergeSort/HeapSort garantizan O(n log n).',
    Component: OsSchedulingDeadlockDataStructuresDiagram,
  },
  {
    id: 'sql-norm-acid-3-3',
    matchTitles: ['Formas Normales (1FN, 2FN, 3FN y BCNF)'],
    title: 'Normalización (1FN a BCNF), WHERE vs. HAVING, JOINs, Transacciones ACID e Índices B-Tree vs. Bitmap',
    badge: 'Subárea 3.3 • Bases de Datos y SQL',
    caption: '1FN exige atomicidad, 2FN elimina dependencias parciales y 3FN elimina dependencias transitivas. En SQL, HAVING filtra grupos después de GROUP BY con funciones de agregación (COUNT/AVG). B-Tree indexa alta cardinalidad/rangos y Bitmap baja cardinalidad.',
    Component: RelationalNormalizationSqlDiagram,
  },
  {
    id: 'graphs-dijkstra-mst-3-3',
    matchTitles: ['Algoritmos de Camino Más Corto (Shortest Path)'],
    title: 'Algoritmos en Grafos: Dijkstra (Un Origen), Floyd-Warshall (Todos los Pares) y MST (Kruskal y Prim)',
    badge: 'Subárea 3.3 • Optimización en Grafos',
    caption: 'Dijkstra calcula la ruta más corta desde 1 origen (pesos ≥ 0); Floyd-Warshall entre todos los pares en O(V³); Kruskal (ordenando aristas) y Prim (desde un nodo) construyen el Árbol de Expansión Mínima (MST) con V - 1 aristas sin ciclos.',
    Component: GraphAlgorithmsDijkstraMstDiagram,
  },
];

function findDiagramForTitle(title) {
  if (!title || typeof title !== 'string') return null;
  const clean = title.trim().toLowerCase();
  return (
    ALL_NETWORK_DIAGRAMS.find((d) =>
      d.matchTitles.some((prefix) => clean.startsWith(prefix.toLowerCase()))
    ) || null
  );
}

function capitalizeFirst(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Divide un párrafo en oraciones o cláusulas independientes respetando paréntesis
 * y abreviaturas comunes para presentarlas como viñetas (bullet points) legibles.
 */
function splitIntoBullets(text) {
  if (!text || typeof text !== 'string') return [];
  const res = [];
  let cur = '';
  let depth = 0;

  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (ch === '(') depth++;
    else if (ch === ')' && depth > 0) depth--;
    cur += ch;

    if (depth === 0 && (ch === '.' || ch === ';') && text[i + 1] === ' ') {
      const trimmed = cur.trim();
      const isAbbrev =
        /(?:ej|vs|etc|aprox|máx|mín|cap|ed|no|fig|\b[A-Z]|\b\d)\.$/.test(
          trimmed
        );
      if (!isAbbrev && trimmed.length > 12) {
        const clean = trimmed.replace(/;$/, '.');
        res.push(capitalizeFirst(clean));
        cur = '';
        i++;
      }
    }
  }

  if (cur.trim()) {
    res.push(capitalizeFirst(cur.trim()));
  }
  return res;
}

/**
 * Parsea un punto teórico plano en una estructura jerárquica rica:
 * - title: Título principal del concepto
 * - subtitleBadge: Etiqueta entre paréntesis del título (ej. "PDU", "Star / Full Mesh")
 * - introBullets: Viñetas introductorias antes de una lista numerada
 * - numberedItems: Sub-puntos numerados 1), 2), 3)... con subTitle, subBadge y subBullets
 * - bullets: Viñetas con sangría para puntos no numerados o notas finales
 */
function parseStructuredPoint(pt) {
  if (!pt || typeof pt !== 'string') {
    return {
      title: '',
      subtitleBadge: '',
      introBullets: [],
      numberedItems: [],
      bullets: [],
    };
  }

  let depth = 0;
  const colons = [];
  for (let i = 0; i < pt.length; i++) {
    if (pt[i] === '(') depth++;
    else if (pt[i] === ')' && depth > 0) depth--;
    else if (pt[i] === ':' && depth === 0) colons.push(i);
  }

  let rawTitle = '';
  let rawBody = pt;
  if (colons.length > 0) {
    const splitIdx = colons[0];
    if (colons.length >= 2) {
      const firstSeg = pt.slice(0, colons[0]).trim();
      const secondSeg = pt.slice(colons[0] + 1, colons[1]).trim();
      if (
        firstSeg.length < 35 &&
        secondSeg.length < 85 &&
        !secondSeg.includes('. ') &&
        !/\b1\)/.test(secondSeg) &&
        !/^(El|La|Los|Las|Un|Una|Consta|Utiliza|Ante|Cuando|Para|De|En|Bus)\b/.test(
          secondSeg
        )
      ) {
        rawTitle = `${firstSeg} — ${secondSeg}`;
        rawBody = pt.slice(colons[1] + 1).trim();
      } else {
        rawTitle = firstSeg;
        rawBody = pt.slice(splitIdx + 1).trim();
      }
    } else {
      rawTitle = pt.slice(0, splitIdx).trim();
      rawBody = pt.slice(splitIdx + 1).trim();
    }
  }

  let title = rawTitle;
  let subtitleBadge = '';
  const badgeMatch = rawTitle.match(/^(.*?)\s*\(([^()]+)\)\s*$/);
  if (
    badgeMatch &&
    badgeMatch[1].trim().length > 5 &&
    badgeMatch[2].trim().length < 60
  ) {
    title = badgeMatch[1].trim();
    subtitleBadge = badgeMatch[2].trim();
  }

  // Detectar marcadores numerados 1) 2) 3) en profundidad de paréntesis 0
  let d = 0;
  const markerPositions = [];
  for (let i = 0; i < rawBody.length; i++) {
    if (rawBody[i] === '(') d++;
    else if (rawBody[i] === ')') {
      if (d > 0) d--;
      else {
        const lookbehind = rawBody.slice(Math.max(0, i - 4), i);
        const mNum = lookbehind.match(/(?:^|[\s:;,.])(\d+)$/);
        if (mNum && rawBody[i + 1] === ' ') {
          const numStr = mNum[1];
          const markerStart = i - numStr.length;
          markerPositions.push({
            num: numStr,
            start: markerStart,
            contentStart: i + 2,
          });
        }
      }
    }
  }

  if (markerPositions.length > 0) {
    const introText = rawBody
      .slice(0, markerPositions[0].start)
      .trim()
      .replace(/[:;,.]+$/, '');
    const introBullets = introText ? splitIntoBullets(introText) : [];
    const numberedItems = [];
    let outroBullets = [];

    for (let k = 0; k < markerPositions.length; k++) {
      const curr = markerPositions[k];
      const nextStart =
        k + 1 < markerPositions.length
          ? markerPositions[k + 1].start
          : rawBody.length;
      let seg = rawBody.slice(curr.contentStart, nextStart).trim();
      seg = seg.replace(/(?:[,;]?\s*y|[,;])\s*$/, '').trim();

      if (k === markerPositions.length - 1) {
        const beforeLast = rawBody.slice(
          Math.max(0, curr.start - 8),
          curr.start
        );
        const isCommaList =
          markerPositions.length >= 2 &&
          /[,;]\s*(?:y\s*)?$|^\s*y\s+$/.test(beforeLast);
        const allSentences = splitIntoBullets(seg);
        if (allSentences.length > 1) {
          if (isCommaList) {
            seg = allSentences[0];
            outroBullets = allSentences.slice(1);
          } else {
            const splitOutroIdx = allSentences.findIndex(
              (s, sIdx) =>
                sIdx > 0 &&
                /^(Posteriormente|A diferencia|Finalmente|Adicionalmente|Por su parte|Artefactos y Eventos|En Gestión de Proyectos|En Métricas de Software|Basta con romper|Con realimentación|En un Op-Amp|Si una impresora|Si el servidor DHCP)/i.test(
                  s
                )
            );
            if (splitOutroIdx !== -1) {
              outroBullets = allSentences.slice(splitOutroIdx);
              seg = allSentences.slice(0, splitOutroIdx).join(' ');
            }
          }
        }
      }

      let subDepth = 0;
      let subColonIdx = -1;
      for (let c = 0; c < seg.length; c++) {
        if (seg[c] === '(') subDepth++;
        else if (seg[c] === ')' && subDepth > 0) subDepth--;
        else if (seg[c] === ':' && subDepth === 0) {
          subColonIdx = c;
          break;
        }
      }

      let subTitle = '';
      let subBadge = '';
      let itemBody = seg;

      if (subColonIdx !== -1 && subColonIdx < 110) {
        const rawSub = seg.slice(0, subColonIdx).trim();
        itemBody = seg.slice(subColonIdx + 1).trim();
        const sbMatch = rawSub.match(/^(.*?)\s*\(([^()]+)\)\s*$/);
        if (sbMatch && sbMatch[1].trim().length > 2) {
          subTitle = sbMatch[1].trim();
          subBadge = sbMatch[2].trim();
        } else {
          subTitle = rawSub;
        }
      } else {
        const cleanSeg = seg.replace(/\.\s*$/, '').trim();
        const openIdx = cleanSeg.indexOf('(');
        if (openIdx > 2 && openIdx < 65) {
          let pd = 0;
          let closeIdx = -1;
          for (let c = openIdx; c < cleanSeg.length; c++) {
            if (cleanSeg[c] === '(') pd++;
            else if (cleanSeg[c] === ')') {
              pd--;
              if (pd === 0) {
                closeIdx = c;
                break;
              }
            }
          }
          if (closeIdx !== -1) {
            const head = cleanSeg.slice(0, openIdx).trim();
            const inside = cleanSeg.slice(openIdx + 1, closeIdx).trim();
            const after = cleanSeg
              .slice(closeIdx + 1)
              .trim()
              .replace(/^[,;:]\s*/, '');
            if (!after) {
              subTitle = head;
              itemBody = inside;
            } else if (inside.length < 55) {
              subTitle = head;
              subBadge = inside;
              itemBody = after;
            }
          }
        }
      }

      const subBullets = splitIntoBullets(itemBody);
      numberedItems.push({ num: curr.num, subTitle, subBadge, subBullets });
    }

    return {
      title,
      subtitleBadge,
      introBullets,
      numberedItems,
      bullets: outroBullets,
    };
  }

  const bullets = splitIntoBullets(rawBody);
  return {
    title,
    subtitleBadge,
    introBullets: [],
    numberedItems: [],
    bullets,
  };
}

/**
 * Renderiza texto enriquecido convirtiendo `código` en chips monoespaciados
 * y resaltando frases clave iniciales para facilitar la lectura rápida.
 */
export function FormattedRichText({ text }) {
  if (!text || typeof text !== 'string') return null;

  // Detectar si la viñeta tiene un prefijo corto seguido de ":" (ej. "Idea central: ...")
  let leadLabel = '';
  let restText = text;

  let depth = 0;
  let colonIdx = -1;
  for (let i = 0; i < Math.min(text.length, 75); i++) {
    if (text[i] === '(') depth++;
    else if (text[i] === ')' && depth > 0) depth--;
    else if (text[i] === ':' && depth === 0) {
      colonIdx = i;
      break;
    }
  }

  if (colonIdx !== -1 && colonIdx > 2) {
    leadLabel = text.slice(0, colonIdx + 1);
    restText = text.slice(colonIdx + 1);
  } else {
    // Resaltar sujeto inicial antes de verbo clave o coma introductoria corta
    const introComma = text.match(
      /^((?:En una conexión en \w+|En cambio|Por el contrario|Por su parte|En el modelo \w+|Bajo el estándar [\w/-]+|En Windows|En sistemas Linux[\w\s]*|Categoría \w+|Clase [A-D]|Lectura \d+|Nivel \w+),?)\s+(.*)$/i
    );
    if (introComma) {
      leadLabel = introComma[1];
      restText = ' ' + introComma[2];
    }
  }

  const renderInlineTokens = (str) => {
    const parts = str.split(/(`[^`]+`)/g);
    return parts.map((part, idx) => {
      if (part.startsWith('`') && part.endsWith('`') && part.length > 2) {
        return (
          <code
            key={idx}
            className="px-1.5 py-0.5 mx-0.5 rounded-md bg-teal-100/90 text-teal-950 font-mono text-[11px] sm:text-xs font-bold border border-teal-300/80"
          >
            {part.slice(1, -1)}
          </code>
        );
      }
      return <React.Fragment key={idx}>{part}</React.Fragment>;
    });
  };

  return (
    <span>
      {leadLabel && (
        <strong className="font-extrabold text-stone-950">
          {renderInlineTokens(leadLabel)}
        </strong>
      )}
      {renderInlineTokens(restText)}
    </span>
  );
}

/**
 * Cuerpo estructurado de un punto teórico (con listas numeradas indentadas,
 * badges, bullet points claros y diagramas SVG técnicos verificados con zoom).
 * Se usa tanto en las tarjetas de lectura como en el reverso de las Flashcards.
 */
export function StructuredPointBody({ parsed, areaStyle }) {
  const { introBullets, numberedItems, bullets, title } = parsed;
  const matchedDiagram = useMemo(() => findDiagramForTitle(title), [title]);
  const [isZoomOpen, setIsZoomOpen] = useState(false);

  const DiagramComp = matchedDiagram?.Component;

  return (
    <div className="space-y-3">
      {/* Viñetas introductorias (si existen antes de 1), 2), 3)) */}
      {introBullets.length > 0 && (
        <ul className="space-y-1.5 pl-1">
          {introBullets.map((b, bIdx) => (
            <li
              key={bIdx}
              className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700 leading-relaxed"
            >
              <span className="text-amber-600 font-black mt-0.5 shrink-0">
                ▸
              </span>
              <div className="flex-1 min-w-0">
                <FormattedRichText text={b} />
              </div>
            </li>
          ))}
        </ul>
      )}

      {/* Sub-elementos numerados 1), 2), 3)... con sangría, badge numérico y viñetas */}
      {numberedItems.length > 0 && (
        <div className="pl-2 sm:pl-4 border-l-2 border-[#DFD7C6] space-y-2.5">
          {numberedItems.map((item, iIdx) => (
            <div
              key={iIdx}
              className="bg-white border border-[#E6DFD1] rounded-xl p-3 sm:p-3.5 shadow-[0_1px_2px_rgba(0,0,0,0.03)]"
            >
              <div className="flex items-start gap-2.5">
                <span
                  className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-mono font-black shrink-0 mt-0.5 border ${
                    areaStyle?.badge ||
                    'bg-amber-100 text-amber-900 border-amber-300'
                  }`}
                >
                  {item.num}
                </span>

                <div className="flex-1 min-w-0 space-y-1.5">
                  {(item.subTitle || item.subBadge) && (
                    <div className="flex flex-wrap items-center gap-1.5">
                      {item.subTitle && (
                        <span className="font-extrabold text-stone-950 text-xs sm:text-sm">
                          <FormattedRichText text={item.subTitle} />
                        </span>
                      )}
                      {item.subBadge && (
                        <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-[#F3EFE6] text-stone-800 border border-[#D8D0C0]">
                          {item.subBadge}
                        </span>
                      )}
                    </div>
                  )}

                  {item.subBullets.length === 1 ? (
                    <div className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                      <FormattedRichText text={item.subBullets[0]} />
                    </div>
                  ) : (
                    <ul className="space-y-1.5 pt-0.5">
                      {item.subBullets.map((sb, sbIdx) => (
                        <li
                          key={sbIdx}
                          className="flex items-start gap-2 text-xs sm:text-sm text-stone-700 leading-relaxed"
                        >
                          <span className="text-amber-600 font-bold mt-0.5 shrink-0">
                            •
                          </span>
                          <div className="flex-1 min-w-0">
                            <FormattedRichText text={sb} />
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Viñetas con sangría y marcador visual para puntos sin numeración o notas de cierre */}
      {bullets.length > 0 && (
        <ul className="space-y-2 pl-1 sm:pl-2">
          {bullets.map((b, bIdx) => (
            <li
              key={bIdx}
              className="bg-white border border-[#E8E2D5] rounded-xl px-3.5 py-2.5 flex items-start gap-2.5 text-xs sm:text-sm text-stone-700 leading-relaxed shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
            >
              <span className="w-5 h-5 rounded-md bg-amber-100/80 border border-amber-300/80 text-amber-900 flex items-center justify-center text-[11px] font-black shrink-0 mt-0.5">
                ▸
              </span>
              <div className="flex-1 min-w-0">
                <FormattedRichText text={b} />
              </div>
            </li>
          ))}
        </ul>
      )}

      {/* Diagrama SVG técnico verificado asociado al concepto */}
      {matchedDiagram && DiagramComp && (
        <div
          onClick={(e) => e.stopPropagation()}
          className="mt-3 bg-white border-2 border-teal-600/30 rounded-2xl p-3 sm:p-4 shadow-sm space-y-2.5"
        >
          <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-[#E5DEC9]">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2 py-0.5 rounded-md bg-teal-800 text-white text-[10px] font-extrabold uppercase tracking-wider">
                {matchedDiagram.badge}
              </span>
              <h5 className="text-xs sm:text-sm font-extrabold text-stone-900">
                {matchedDiagram.title}
              </h5>
            </div>

            <button
              type="button"
              onClick={() => setIsZoomOpen(true)}
              className="px-2.5 py-1 rounded-lg bg-[#FAF7F2] hover:bg-teal-50 text-teal-900 border border-[#D8D0C0] hover:border-teal-400 text-[11px] font-extrabold flex items-center gap-1 transition cursor-pointer shrink-0"
              title="Ampliar diagrama en pantalla completa"
            >
              <Maximize2 className="w-3.5 h-3.5 text-teal-700" />
              <span>Ampliar SVG</span>
            </button>
          </div>

          <div
            onClick={() => setIsZoomOpen(true)}
            className="overflow-x-auto rounded-xl border border-[#E5DEC9] bg-[#FAF7F2] p-1.5 cursor-zoom-in"
            title="Haz clic para ampliar el esquema"
          >
            <div className="min-w-[540px] sm:min-w-0">
              <DiagramComp />
            </div>
          </div>

          {matchedDiagram.caption && (
            <p className="text-[11px] sm:text-xs text-stone-600 leading-relaxed bg-[#FAF7F2] px-3 py-2 rounded-lg border border-[#E5DEC9]">
              <strong className="font-extrabold text-teal-900 mr-1">
                Clave visual EGEL:
              </strong>
              {matchedDiagram.caption}
            </p>
          )}

          {/* Modal Lightbox para ver el Diagrama SVG en Grande */}
          {isZoomOpen && (
            <div
              onClick={() => setIsZoomOpen(false)}
              className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6"
            >
              <div
                onClick={(e) => e.stopPropagation()}
                className="bg-white border-2 border-[#D8D0C0] rounded-2xl max-w-5xl w-full max-h-[92vh] overflow-y-auto p-4 sm:p-6 shadow-2xl space-y-4"
              >
                <div className="flex items-start justify-between gap-3 pb-3 border-b border-[#E5DEC9]">
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded-md bg-teal-800 text-white text-[11px] font-extrabold uppercase tracking-wider mb-1">
                      {matchedDiagram.badge}
                    </span>
                    <h4 className="text-base sm:text-lg font-black text-stone-950">
                      {matchedDiagram.title}
                    </h4>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsZoomOpen(false)}
                    className="p-2 rounded-xl bg-[#F3EFE6] hover:bg-stone-900 text-stone-800 hover:text-white transition cursor-pointer shrink-0"
                    aria-label="Cerrar vista ampliada"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="overflow-x-auto rounded-xl border border-[#E5DEC9] bg-[#FAF7F2] p-2 sm:p-4">
                  <div className="min-w-[640px] sm:min-w-0">
                    <DiagramComp />
                  </div>
                </div>

                {matchedDiagram.caption && (
                  <div className="text-xs sm:text-sm text-stone-700 leading-relaxed bg-teal-50/70 border border-teal-300 rounded-xl p-3.5">
                    <strong className="font-extrabold text-teal-950 mr-1.5">
                      Resumen técnico verificado:
                    </strong>
                    {matchedDiagram.caption}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

/**
 * Tarjeta visual para un concepto dentro del Modo Guía Estructurada.
 */
export function StructuredPointCard({
  pt,
  index,
  pointKey,
  areaStyle,
  isRecallMode,
  isRevealed,
  onToggleReveal,
}) {
  const parsed = useMemo(() => parseStructuredPoint(pt), [pt]);
  const hasDiagram = useMemo(
    () => Boolean(findDiagramForTitle(parsed.title)),
    [parsed.title]
  );
  const showBody = !isRecallMode || isRevealed;

  const itemCountBadge =
    parsed.numberedItems.length > 0
      ? `${parsed.numberedItems.length} puntos desglosados`
      : parsed.bullets.length > 1
      ? `${parsed.bullets.length} ideas clave`
      : null;

  return (
    <div
      className={`rounded-2xl border p-4 sm:p-5 transition-all ${
        showBody
          ? 'bg-[#FAF7F2] border-[#E2DAC9]'
          : 'bg-white border-amber-300 shadow-sm hover:border-amber-400'
      }`}
    >
      {/* Cabecera del Concepto */}
      <div className="flex flex-wrap items-start justify-between gap-2.5 mb-3">
        <div className="flex items-start gap-2.5 flex-1 min-w-0">
          <span className="px-2 py-0.5 rounded-lg bg-stone-900 text-white font-mono text-[11px] font-extrabold shrink-0 mt-0.5">
            #{index + 1}
          </span>
          <div className="flex flex-wrap items-center gap-2 min-w-0">
            <h4 className="font-extrabold text-stone-950 text-sm sm:text-base leading-snug">
              <FormattedRichText text={parsed.title || `Concepto ${index + 1}`} />
            </h4>
            {parsed.subtitleBadge && (
              <span
                className={`text-[11px] font-bold px-2.5 py-0.5 rounded-md border ${
                  areaStyle?.badge ||
                  'bg-amber-100 text-amber-900 border-amber-300'
                }`}
              >
                {parsed.subtitleBadge}
              </span>
            )}
            {hasDiagram && (
              <span className="text-[11px] font-extrabold px-2 py-0.5 rounded-md bg-teal-100 text-teal-900 border border-teal-300">
                Incluye Diagrama SVG
              </span>
            )}
            {itemCountBadge && !showBody && (
              <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-amber-50 text-amber-800 border border-amber-200">
                {itemCountBadge}
              </span>
            )}
          </div>
        </div>

        {onToggleReveal && (
          <button
            type="button"
            onClick={() => onToggleReveal(pointKey)}
            className={`px-2.5 py-1 rounded-lg text-[11px] font-extrabold flex items-center gap-1.5 transition shrink-0 cursor-pointer ${
              isRecallMode
                ? showBody
                  ? 'bg-[#EFEAE0] text-stone-800 border border-[#D8D0C0]'
                  : 'bg-amber-500 hover:bg-amber-600 text-stone-950 shadow-sm'
                : 'bg-white hover:bg-[#EFEAE0] text-stone-600 border border-[#E5DEC9]'
            }`}
            title="Ocultar o revelar este concepto para poner a prueba tu memoria"
          >
            {showBody ? (
              <>
                <EyeOff className="w-3.5 h-3.5" />
                <span>Ocultar</span>
              </>
            ) : (
              <>
                <Eye className="w-3.5 h-3.5" />
                <span>Revelar ({itemCountBadge || 'respuesta'})</span>
              </>
            )}
          </button>
        )}
      </div>

      {/* Contenido Estructurado o Reto Oculto */}
      {showBody ? (
        <StructuredPointBody parsed={parsed} areaStyle={areaStyle} />
      ) : (
        <button
          type="button"
          onClick={() => onToggleReveal && onToggleReveal(pointKey)}
          className="w-full text-left rounded-xl border border-dashed border-amber-400 bg-amber-50/60 hover:bg-amber-100/60 p-4 transition flex items-center justify-between gap-3 cursor-pointer"
        >
          <div className="text-xs sm:text-sm text-amber-950 font-medium">
            <strong className="font-extrabold">Reto de memoria activa:</strong>{' '}
            Intenta recordar{' '}
            {parsed.numberedItems.length > 0
              ? `los ${parsed.numberedItems.length} elementos de este tema`
              : 'los puntos clave de este concepto'}{' '}
            y haz clic aquí para comprobar.
          </div>
          <span className="px-3 py-1.5 rounded-lg bg-amber-500 text-stone-950 font-extrabold text-xs shrink-0 flex items-center gap-1">
            <Eye className="w-3.5 h-3.5" />
            Ver desglose
          </span>
        </button>
      )}
    </div>
  );
}

/**
 * Tablero interactivo de Flashcards que cambia por completo la distribución de la página
 * permitiendo estudiar en Mosaico de Tarjetas Volteables (2 columnas) o en Modo Mazo 1×1.
 */
export function InteractiveFlashcardsDeck({
  guide,
  areaStyle,
  onExitFlashcards,
}) {
  const [categoryFilter, setCategoryFilter] = useState('ALL');
  const [layoutMode, setLayoutMode] = useState('grid'); // 'grid' | 'single'
  const [flippedMap, setFlippedMap] = useState({});
  const [statusMap, setStatusMap] = useState({}); // cardId -> 'mastered' | 'review'
  const [singleIndex, setSingleIndex] = useState(0);
  const [isShuffled, setIsShuffled] = useState(false);

  const allCards = useMemo(() => {
    const deck = [];
    (guide.sections || []).forEach((sec, sIdx) => {
      (sec.points || []).forEach((pt, pIdx) => {
        const parsed = parseStructuredPoint(pt);
        deck.push({
          id: `concept_${guide.subareaCode}_${sIdx}_${pIdx}`,
          type: 'concept',
          typeLabel: 'Concepto Clave',
          blockTitle: sec.title.replace(/^\d+\.\s*/, ''),
          blockNumber: sIdx + 1,
          frontTitle: parsed.title || `Concepto ${pIdx + 1}`,
          frontBadge: parsed.subtitleBadge,
          hintText:
            parsed.numberedItems.length > 0
              ? `Contiene ${parsed.numberedItems.length} elementos numerados para recordar`
              : `Contiene ${parsed.bullets.length} puntos clave`,
          parsed,
        });
      });
    });

    (guide.formulas || []).forEach((f, fIdx) => {
      deck.push({
        id: `formula_${guide.subareaCode}_${fIdx}`,
        type: 'formula',
        typeLabel: 'Fórmula / Comando',
        blockTitle: 'Fórmulas y Reglas Exactas',
        blockNumber: null,
        frontTitle: f.label,
        frontBadge: 'Regla Exacta',
        hintText: 'Recuerda la ecuación, comando o valores exactos',
        formulaCode: f.code,
      });
    });

    (guide.examTips || []).forEach((tip, tIdx) => {
      deck.push({
        id: `tip_${guide.subareaCode}_${tIdx}`,
        type: 'tip',
        typeLabel: 'Tip de Examen CENEVAL',
        blockTitle: 'Punto Clave de Examen',
        blockNumber: null,
        frontTitle: `Pregunta típica de examen #${tIdx + 1}`,
        frontBadge: 'Tip EGEL',
        hintText: `${tip.slice(0, 58)}...`,
        tipText: tip,
      });
    });

    return deck;
  }, [guide]);

  const filteredCards = useMemo(() => {
    let list = allCards;
    if (categoryFilter === 'CONCEPTS') {
      list = allCards.filter((c) => c.type === 'concept');
    } else if (categoryFilter === 'FORMULAS') {
      list = allCards.filter((c) => c.type === 'formula');
    } else if (categoryFilter === 'TIPS') {
      list = allCards.filter((c) => c.type === 'tip');
    } else if (categoryFilter === 'REVIEW') {
      list = allCards.filter((c) => statusMap[c.id] !== 'mastered');
    }

    if (isShuffled) {
      const copy = [...list];
      for (let i = copy.length - 1; i > 0; i--) {
        const j = (i * 7 + 3) % (i + 1);
        [copy[i], copy[j]] = [copy[j], copy[i]];
      }
      return copy;
    }
    return list;
  }, [allCards, categoryFilter, statusMap, isShuffled]);

  const masteredCount = useMemo(
    () => allCards.filter((c) => statusMap[c.id] === 'mastered').length,
    [allCards, statusMap]
  );

  const toggleFlip = (cardId) => {
    setFlippedMap((prev) => ({ ...prev, [cardId]: !prev[cardId] }));
  };

  const flipAll = (val) => {
    const next = {};
    filteredCards.forEach((c) => {
      next[c.id] = val;
    });
    setFlippedMap(next);
  };

  const markCardStatus = (cardId, status, e) => {
    if (e) e.stopPropagation();
    setStatusMap((prev) => ({
      ...prev,
      [cardId]: prev[cardId] === status ? undefined : status,
    }));
  };

  const safeSingleIdx = Math.min(
    singleIndex,
    Math.max(0, filteredCards.length - 1)
  );
  const activeSingleCard = filteredCards[safeSingleIdx];

  const renderCardBack = (card) => {
    if (card.type === 'formula') {
      return (
        <div className="bg-teal-50/90 border-2 border-teal-300 rounded-xl p-4 text-center space-y-2">
          <div className="text-[11px] font-extrabold uppercase tracking-wider text-teal-800">
            Fórmula / Regla Exacta
          </div>
          <code className="block text-xs sm:text-sm font-mono font-extrabold text-teal-950 bg-white border border-teal-200 px-3 py-2.5 rounded-lg break-words">
            {card.formulaCode}
          </code>
        </div>
      );
    }
    if (card.type === 'tip') {
      return (
        <div className="bg-amber-50 border border-amber-300 rounded-xl p-4 text-xs sm:text-sm text-amber-950 leading-relaxed flex items-start gap-2.5">
          <Lightbulb className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div>
            <FormattedRichText text={card.tipText} />
          </div>
        </div>
      );
    }
    return <StructuredPointBody parsed={card.parsed} areaStyle={areaStyle} />;
  };

  return (
    <div className="space-y-5">
      {/* Barra de Control del Tablero de Flashcards */}
      <div className="bg-gradient-to-r from-amber-50 via-white to-teal-50/50 border-2 border-amber-300 rounded-2xl p-4 sm:p-5 shadow-sm space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500 text-stone-950 flex items-center justify-center shadow-sm shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-extrabold text-stone-900">
                  Tablero de Flashcards Interactivas
                </h3>
                <span className="text-xs font-extrabold px-2.5 py-0.5 rounded-full bg-teal-100 text-teal-900 border border-teal-300">
                  {masteredCount} / {allCards.length} dominadas
                </span>
              </div>
              <p className="text-xs text-stone-600 mt-0.5">
                Toca cualquier tarjeta para voltearla y ver su desglose con viñetas. Marca las que ya dominas.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* Selector de Distribución: Mosaico 2 cols vs Tarjeta 1x1 */}
            <div className="flex items-center bg-[#F3EFE6] p-1 rounded-xl border border-[#D8D0C0]">
              <button
                type="button"
                onClick={() => setLayoutMode('grid')}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition cursor-pointer ${
                  layoutMode === 'grid'
                    ? 'bg-stone-900 text-white shadow-sm'
                    : 'text-stone-700 hover:text-stone-950'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>Mosaico</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setLayoutMode('single');
                  setSingleIndex(0);
                }}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition cursor-pointer ${
                  layoutMode === 'single'
                    ? 'bg-stone-900 text-white shadow-sm'
                    : 'text-stone-700 hover:text-stone-950'
                }`}
              >
                <RectangleHorizontal className="w-3.5 h-3.5" />
                <span>Mazo 1×1</span>
              </button>
            </div>

            {onExitFlashcards && (
              <button
                type="button"
                onClick={onExitFlashcards}
                className="px-3 py-2 rounded-xl bg-white hover:bg-[#EFEAE0] text-stone-800 border border-[#D8D0C0] text-xs font-extrabold flex items-center gap-1.5 transition cursor-pointer"
              >
                <BookOpen className="w-3.5 h-3.5 text-teal-700" />
                <span>Volver a Guía Visual</span>
              </button>
            )}
          </div>
        </div>

        {/* Filtros por tipo de tarjeta y acciones rápidas */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-[#E5DEC9]">
          <div className="flex flex-wrap items-center gap-1.5">
            {[
              { id: 'ALL', label: `Todas (${allCards.length})` },
              {
                id: 'CONCEPTS',
                label: `Conceptos (${
                  allCards.filter((c) => c.type === 'concept').length
                })`,
              },
              {
                id: 'FORMULAS',
                label: `Fórmulas (${
                  allCards.filter((c) => c.type === 'formula').length
                })`,
              },
              {
                id: 'TIPS',
                label: `Tips Examen (${
                  allCards.filter((c) => c.type === 'tip').length
                })`,
              },
              {
                id: 'REVIEW',
                label: `Por dominar (${allCards.length - masteredCount})`,
              },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => {
                  setCategoryFilter(tab.id);
                  setSingleIndex(0);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                  categoryFilter === tab.id
                    ? 'bg-amber-500 text-stone-950 shadow-sm'
                    : 'bg-white text-stone-700 hover:bg-[#EFEAE0] border border-[#E5DEC9]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsShuffled((v) => !v)}
              className={`px-2.5 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1 border transition cursor-pointer ${
                isShuffled
                  ? 'bg-indigo-100 text-indigo-900 border-indigo-300'
                  : 'bg-white text-stone-700 hover:bg-[#EFEAE0] border-[#D8D0C0]'
              }`}
            >
              <Shuffle className="w-3.5 h-3.5" />
              <span>{isShuffled ? 'Mezcladas' : 'Mezclar'}</span>
            </button>
            <button
              type="button"
              onClick={() => flipAll(true)}
              className="px-2.5 py-1.5 rounded-lg bg-white hover:bg-[#EFEAE0] text-stone-700 border border-[#D8D0C0] text-xs font-bold flex items-center gap-1 transition cursor-pointer"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Revelar todas</span>
            </button>
            <button
              type="button"
              onClick={() => flipAll(false)}
              className="px-2.5 py-1.5 rounded-lg bg-white hover:bg-[#EFEAE0] text-stone-700 border border-[#D8D0C0] text-xs font-bold flex items-center gap-1 transition cursor-pointer"
            >
              <EyeOff className="w-3.5 h-3.5" />
              <span>Ocultar todas</span>
            </button>
          </div>
        </div>
      </div>

      {filteredCards.length === 0 ? (
        <div className="bg-white border border-[#E5DEC9] rounded-2xl p-8 text-center space-y-3">
          <CheckCircle2 className="w-10 h-10 text-teal-600 mx-auto" />
          <h4 className="text-base font-extrabold text-stone-900">
            ¡Excelente! Ya marcaste todas las tarjetas de este filtro como dominadas.
          </h4>
          <button
            type="button"
            onClick={() => setCategoryFilter('ALL')}
            className="px-4 py-2 rounded-xl bg-stone-900 text-white text-xs font-bold"
          >
            Ver todas las tarjetas
          </button>
        </div>
      ) : layoutMode === 'single' && activeSingleCard ? (
        /* MODO MAZO 1 POR 1 (ENFOQUE GRANDE) */
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="flex items-center justify-between text-xs font-bold text-stone-600 px-1">
            <span>
              Tarjeta {safeSingleIdx + 1} de {filteredCards.length} •{' '}
              <strong className="text-stone-900">
                {activeSingleCard.blockTitle}
              </strong>
            </span>
            <span className="font-mono text-amber-800">
              Haz clic en la tarjeta para voltear
            </span>
          </div>

          <div
            onClick={() => toggleFlip(activeSingleCard.id)}
            className={`rounded-3xl border-2 p-6 sm:p-8 transition-all cursor-pointer shadow-md min-h-[280px] flex flex-col justify-between ${
              flippedMap[activeSingleCard.id]
                ? 'bg-[#FAF7F2] border-teal-500'
                : 'bg-white border-amber-400 hover:border-amber-500'
            }`}
          >
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b border-[#E5DEC9]">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-md bg-amber-100 text-amber-900 border border-amber-300">
                    {activeSingleCard.typeLabel}
                  </span>
                  {activeSingleCard.frontBadge && (
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-[#F3EFE6] text-stone-800 border border-[#D8D0C0]">
                      {activeSingleCard.frontBadge}
                    </span>
                  )}
                </div>

                <span className="text-xs font-extrabold text-teal-800 flex items-center gap-1">
                  {flippedMap[activeSingleCard.id] ? (
                    <>
                      <EyeOff className="w-3.5 h-3.5" /> Ocultar respuesta
                    </>
                  ) : (
                    <>
                      <Eye className="w-3.5 h-3.5" /> Mostrar respuesta
                    </>
                  )}
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-black text-stone-950 leading-snug mb-4">
                <FormattedRichText text={activeSingleCard.frontTitle} />
              </h3>

              {!flippedMap[activeSingleCard.id] ? (
                <div className="my-8 p-6 rounded-2xl bg-amber-50/70 border border-dashed border-amber-300 text-center space-y-2">
                  <div className="text-xs sm:text-sm font-bold text-amber-950">
                    {activeSingleCard.hintText}
                  </div>
                  <div className="text-xs text-stone-500">
                    Piensa tu respuesta y toca cualquier parte de la tarjeta para comprobarla
                  </div>
                </div>
              ) : (
                <div className="mt-4 pt-2">
                  {renderCardBack(activeSingleCard)}
                </div>
              )}
            </div>

            <div
              onClick={(e) => e.stopPropagation()}
              className="flex flex-wrap items-center justify-between gap-3 pt-5 mt-6 border-t border-[#E5DEC9]"
            >
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={(e) =>
                    markCardStatus(activeSingleCard.id, 'mastered', e)
                  }
                  className={`px-3.5 py-2 rounded-xl text-xs font-extrabold flex items-center gap-1.5 transition cursor-pointer ${
                    statusMap[activeSingleCard.id] === 'mastered'
                      ? 'bg-teal-700 text-white shadow-sm'
                      : 'bg-teal-50 hover:bg-teal-100 text-teal-900 border border-teal-300'
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Ya lo domino</span>
                </button>
                <button
                  type="button"
                  onClick={(e) =>
                    markCardStatus(activeSingleCard.id, 'review', e)
                  }
                  className={`px-3.5 py-2 rounded-xl text-xs font-extrabold flex items-center gap-1.5 transition cursor-pointer ${
                    statusMap[activeSingleCard.id] === 'review'
                      ? 'bg-amber-500 text-stone-950 shadow-sm'
                      : 'bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-300'
                  }`}
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Repasar luego</span>
                </button>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  disabled={safeSingleIdx === 0}
                  onClick={() => setSingleIndex((i) => Math.max(0, i - 1))}
                  className="px-3.5 py-2 rounded-xl bg-[#F3EFE6] hover:bg-[#E5DEC9] disabled:opacity-40 text-xs font-bold text-stone-800 flex items-center gap-1 cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" /> Anterior
                </button>
                <button
                  type="button"
                  disabled={safeSingleIdx >= filteredCards.length - 1}
                  onClick={() =>
                    setSingleIndex((i) =>
                      Math.min(filteredCards.length - 1, i + 1)
                    )
                  }
                  className="px-3.5 py-2 rounded-xl bg-stone-900 hover:bg-stone-800 disabled:opacity-40 text-xs font-bold text-white flex items-center gap-1 cursor-pointer"
                >
                  Siguiente <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* MODO MOSAICO DE FLASHCARDS (CUADRÍCULA DE 2 COLUMNAS) */
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredCards.map((card, idx) => {
            const isFlipped = Boolean(flippedMap[card.id]);
            const cardStatus = statusMap[card.id];

            return (
              <div
                key={card.id}
                onClick={() => toggleFlip(card.id)}
                className={`rounded-2xl border-2 p-5 transition-all cursor-pointer flex flex-col justify-between shadow-sm ${
                  isFlipped
                    ? 'bg-[#FAF7F2] border-teal-500 md:col-span-2'
                    : cardStatus === 'mastered'
                    ? 'bg-teal-50/40 border-teal-400 hover:border-teal-600'
                    : cardStatus === 'review'
                    ? 'bg-amber-50/60 border-amber-400 hover:border-amber-600'
                    : 'bg-white border-[#E2DAC9] hover:border-amber-400 hover:shadow-md'
                }`}
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="px-2 py-0.5 rounded-md bg-stone-900 text-white font-mono text-[11px] font-bold">
                        #{idx + 1}
                      </span>
                      <span className="text-[11px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-md bg-amber-100 text-amber-900 border border-amber-300">
                        {card.blockNumber
                          ? `Bloque ${card.blockNumber}`
                          : card.typeLabel}
                      </span>
                      {card.frontBadge && (
                        <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-[#F3EFE6] text-stone-800 border border-[#D8D0C0]">
                          {card.frontBadge}
                        </span>
                      )}
                    </div>

                    <span
                      className={`text-[11px] font-extrabold px-2.5 py-1 rounded-lg flex items-center gap-1 ${
                        isFlipped
                          ? 'bg-stone-200 text-stone-800'
                          : 'bg-amber-500 text-stone-950 shadow-sm'
                      }`}
                    >
                      {isFlipped ? (
                        <>
                          <EyeOff className="w-3 h-3" /> Cerrar tarjeta
                        </>
                      ) : (
                        <>
                          <Eye className="w-3 h-3" /> Voltear tarjeta
                        </>
                      )}
                    </span>
                  </div>

                  <h4 className="text-sm sm:text-base font-extrabold text-stone-950 leading-snug mb-2">
                    <FormattedRichText text={card.frontTitle} />
                  </h4>

                  {!isFlipped ? (
                    <div className="mt-3 p-3 rounded-xl bg-[#FAF7F2] border border-dashed border-[#D8D0C0] flex items-center justify-between gap-2">
                      <span className="text-xs text-stone-600 font-medium">
                        {card.hintText}
                      </span>
                      <span className="text-[11px] font-bold text-amber-800 shrink-0">
                        Toca para ver →
                      </span>
                    </div>
                  ) : (
                    <div className="mt-4 pt-3 border-t border-[#E5DEC9]">
                      {renderCardBack(card)}
                    </div>
                  )}
                </div>

                {/* Botones de dominio en el pie de la tarjeta */}
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center justify-between gap-2 pt-3 mt-4 border-t border-[#EFEAE0]"
                >
                  <span className="text-[11px] text-stone-500 truncate">
                    {card.blockTitle}
                  </span>
                  <div className="flex items-center gap-1.5 shrink-0">
                    <button
                      type="button"
                      onClick={(e) => markCardStatus(card.id, 'mastered', e)}
                      className={`px-2.5 py-1 rounded-lg text-[11px] font-bold flex items-center gap-1 transition cursor-pointer ${
                        cardStatus === 'mastered'
                          ? 'bg-teal-700 text-white'
                          : 'bg-white hover:bg-teal-50 text-teal-800 border border-teal-300'
                      }`}
                    >
                      <CheckCircle2 className="w-3 h-3" />
                      <span>Domino</span>
                    </button>
                    <button
                      type="button"
                      onClick={(e) => markCardStatus(card.id, 'review', e)}
                      className={`px-2.5 py-1 rounded-lg text-[11px] font-bold flex items-center gap-1 transition cursor-pointer ${
                        cardStatus === 'review'
                          ? 'bg-amber-500 text-stone-950'
                          : 'bg-white hover:bg-amber-50 text-amber-900 border border-amber-300'
                      }`}
                    >
                      <RotateCcw className="w-3 h-3" />
                      <span>Repasar</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

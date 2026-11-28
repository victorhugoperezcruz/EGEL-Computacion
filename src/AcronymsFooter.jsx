import React, { useMemo } from 'react';
import { BookMarked } from 'lucide-react';

/**
 * Diccionario maestro de siglas y acrónimos frecuentes del CENEVAL EGEL-PLUS ICOMPU.
 * Sirve como respaldo automático para preguntas del modo estudio y complementa
 * los acrónimos específicos incluidos en el banco exclusivo de simulacro.
 */
const EGEL_ACRONYMS_DICT = {
  // === HARDWARE, ARQUITECTURA, EMBEBIDOS Y CONTROL ===
  BIOS: {
    significado: 'Basic Input/Output System (Sistema Básico de Entrada/Salida)',
    pista: 'Firmware en ROM/Flash que inicializa el hardware y ejecuta el POST al encender.',
  },
  UEFI: {
    significado: 'Unified Extensible Firmware Interface',
    pista: 'Sucesor moderno del BIOS con soporte para discos GPT >2 TB y arranque seguro.',
  },
  CMOS: {
    significado: 'Complementary Metal-Oxide-Semiconductor',
    pista: 'Memoria de ultra bajo consumo alimentada por batería que guarda configuración del BIOS y RTC.',
  },
  POST: {
    significado: 'Power-On Self-Test (Autoprueba al Encender)',
    pista: 'Diagnóstico automático de CPU, RAM y periféricos que ejecuta el BIOS al arrancar.',
  },
  CPU: {
    significado: 'Central Processing Unit (Unidad Central de Procesamiento)',
    pista: 'Integra la ALU, la Unidad de Control (CU) y registros internos.',
  },
  ALU: {
    significado: 'Arithmetic Logic Unit (Unidad Aritmético-Lógica)',
    pista: 'Ejecuta operaciones aritméticas (suma, resta) y lógicas (AND, OR, XOR).',
  },
  CU: {
    significado: 'Control Unit (Unidad de Control)',
    pista: 'Decodifica instrucciones y genera señales de control para coordinar la CPU.',
  },
  PATA: {
    significado: 'Parallel ATA (Advanced Technology Attachment / IDE)',
    pista: 'Interfaz paralela antigua para discos y unidades ópticas configuradas con jumpers Maestro/Esclavo.',
  },
  SATA: {
    significado: 'Serial ATA (Serial Advanced Technology Attachment)',
    pista: 'Interfaz serial punto a punto para discos duros/SSD; no requiere jumpers Maestro/Esclavo.',
  },
  RAM: {
    significado: 'Random Access Memory (Memoria de Acceso Aleatorio)',
    pista: 'Memoria primaria volátil de lectura/escritura donde residen programas en ejecución.',
  },
  ROM: {
    significado: 'Read-Only Memory (Memoria de Solo Lectura)',
    pista: 'Memoria no volátil que conserva el firmware de arranque sin energía.',
  },
  SRAM: {
    significado: 'Static RAM (RAM Estática)',
    pista: 'Usa flip-flops; muy rápida y sin refresco, usada en memorias caché L1/L2/L3.',
  },
  DRAM: {
    significado: 'Dynamic RAM (RAM Dinámica)',
    pista: 'Usa capacitores que requieren refresco periódico; más densa y barata, usada como memoria principal.',
  },
  EEPROM: {
    significado: 'Electrically Erasable Programmable ROM',
    pista: 'Memoria no volátil borrable y reprogramable eléctricamente byte a byte.',
  },
  DMA: {
    significado: 'Direct Memory Access (Acceso Directo a Memoria)',
    pista: 'Permite transferir datos entre periféricos y RAM sin intervención continua de la CPU.',
  },
  RISC: {
    significado: 'Reduced Instruction Set Computer',
    pista: 'Instrucciones simples de longitud fija, arquitectura load/store y pipeline eficiente (ej. ARM).',
  },
  CISC: {
    significado: 'Complex Instruction Set Computer',
    pista: 'Instrucciones complejas de longitud variable que realizan varias operaciones en una sola (ej. x86).',
  },
  FSM: {
    significado: 'Finite State Machine (Máquina de Estados Finitos)',
    pista: 'Moore depende solo del estado actual; Mealy depende del estado actual y las entradas.',
  },
  FPGA: {
    significado: 'Field-Programmable Gate Array',
    pista: 'Circuito integrado con bloques lógicos reconfigurables por hardware (VHDL/Verilog).',
  },
  ADC: {
    significado: 'Analog-to-Digital Converter (Convertidor Analógico-Digital)',
    pista: 'Digitaliza señales continuas; su resolución depende de 2^N niveles y cumple Nyquist (fs ≥ 2·fmax).',
  },
  DAC: {
    significado: 'Digital-to-Analog Converter (Convertidor Digital-Analógico)',
    pista: 'Convierte palabras binarias en voltajes o corrientes analógicas.',
  },
  PWM: {
    significado: 'Pulse Width Modulation (Modulación por Ancho de Pulso)',
    pista: 'Controla potencia promedio variando el ciclo de trabajo (Duty Cycle) de una onda cuadrada.',
  },
  RTOS: {
    significado: 'Real-Time Operating System (Sistema Operativo de Tiempo Real)',
    pista: 'Garantiza determinismo temporal y cumplimiento estricto de plazos (deadlines).',
  },
  ISR: {
    significado: 'Interrupt Service Routine (Rutina de Servicio de Interrupción)',
    pista: 'Función corta que atiende un evento de hardware; debe ser breve y no bloqueante.',
  },
  WDT: {
    significado: 'Watchdog Timer (Temporizador Perro Guardián)',
    pista: 'Reinicia automáticamente el microcontrolador si el firmware se bloquea y deja de refrescarlo.',
  },
  GPIO: {
    significado: 'General Purpose Input/Output (Entrada/Salida de Propósito General)',
    pista: 'Pines digitales configurables por software como entrada o salida.',
  },
  UART: {
    significado: 'Universal Asynchronous Receiver-Transmitter',
    pista: 'Comunicación serial asíncrona sin reloj compartido (TX/RX) basada en baud rate.',
  },
  I2C: {
    significado: 'Inter-Integrated Circuit',
    pista: 'Bus serial síncrono half-duplex de 2 hilos (SDA y SCL) con direccionamiento por 7/10 bits.',
  },
  SPI: {
    significado: 'Serial Peripheral Interface',
    pista: 'Bus serial síncrono full-duplex de alta velocidad con 4 líneas (MOSI, MISO, SCK, SS/CS).',
  },
  USB: {
    significado: 'Universal Serial Bus',
    pista: 'Bus serial maestro-esclavo donde el host controla transferencias hacia Endpoints mediante paquetes con PID.',
  },
  PID: {
    significado: 'Proportional-Integral-Derivative / Packet Identifier (en USB)',
    pista: 'En control: combina acción proporcional, integral y derivativa. En USB: primer campo de todo paquete.',
  },
  PLC: {
    significado: 'Programmable Logic Controller (Controlador Lógico Programable)',
    pista: 'Computadora industrial que ejecuta cíclicamente: leer entradas → programa → actualizar salidas.',
  },
  SCADA: {
    significado: 'Supervisory Control and Data Acquisition',
    pista: 'Sistema de supervisión industrial remota que recopila telemetría y controla procesos.',
  },
  HMI: {
    significado: 'Human-Machine Interface (Interfaz Hombre-Máquina)',
    pista: 'Panel gráfico que permite al operador visualizar variables y comandar maquinaria.',
  },
  BJT: {
    significado: 'Bipolar Junction Transistor (Transistor de Unión Bipolar)',
    pista: 'Controlado por corriente de base (Ib); conmuta entre corte y saturación.',
  },
  MOSFET: {
    significado: 'Metal-Oxide-Semiconductor Field-Effect Transistor',
    pista: 'Controlado por voltaje compuerta-fuente (Vgs) con altísima impedancia de entrada.',
  },
  CMRR: {
    significado: 'Common-Mode Rejection Ratio (Razón de Rechazo en Modo Común)',
    pista: 'Capacidad de un amplificador diferencial/instrumentación de rechazar ruido común en ambas entradas.',
  },
  RAID: {
    significado: 'Redundant Array of Independent Disks',
    pista: 'Combina discos para rendimiento (RAID 0), espejo (RAID 1) o paridad distribuida (RAID 5/6).',
  },
  SAN: {
    significado: 'Storage Area Network (Red de Área de Almacenamiento)',
    pista: 'Red dedicada de alta velocidad que conecta servidores con arreglos de almacenamiento a nivel de bloque.',
  },
  NAS: {
    significado: 'Network-Attached Storage (Almacenamiento Conectado a Red)',
    pista: 'Dispositivo conectado a la LAN que comparte almacenamiento a nivel de archivos (SMB/NFS).',
  },
  // === REDES Y SEGURIDAD ===
  OSI: {
    significado: 'Open Systems Interconnection (Interconexión de Sistemas Abiertos)',
    pista: 'Modelo de 7 capas: Física, Enlace, Red, Transporte, Sesión, Presentación y Aplicación.',
  },
  TCP: {
    significado: 'Transmission Control Protocol (Protocolo de Control de Transmisión)',
    pista: 'Capa 4 orientado a conexión, confiable, con handshake de 3 vías y control de flujo.',
  },
  UDP: {
    significado: 'User Datagram Protocol (Protocolo de Datagramas de Usuario)',
    pista: 'Capa 4 sin conexión, baja latencia y sin retransmisión (usado en DNS, VoIP, DHCP, SNMP).',
  },
  IP: {
    significado: 'Internet Protocol (Protocolo de Internet)',
    pista: 'Capa 3 encargado del direccionamiento lógico y enrutamiento de paquetes.',
  },
  ICMP: {
    significado: 'Internet Control Message Protocol',
    pista: 'Capa 3 usado para diagnóstico y reportes de error (ping y traceroute).',
  },
  IGMP: {
    significado: 'Internet Group Management Protocol',
    pista: 'Capa 3 usado por hosts y routers IPv4 para gestionar membresía en grupos multicast.',
  },
  ARP: {
    significado: 'Address Resolution Protocol (Protocolo de Resolución de Direcciones)',
    pista: 'Resuelve una dirección IPv4 conocida en su dirección física MAC en la LAN.',
  },
  MAC: {
    significado: 'Media Access Control (Control de Acceso al Medio)',
    pista: 'Dirección física de 48 bits (6 bytes hexadecimales) usada en Capa 2 por switches.',
  },
  VLAN: {
    significado: 'Virtual Local Area Network (Red de Área Local Virtual)',
    pista: 'Segmenta dominios de broadcast lógicamente en Capa 2 usando etiquetas IEEE 802.1Q.',
  },
  STP: {
    significado: 'Spanning Tree Protocol (Protocolo de Árbol de Expansión)',
    pista: 'Previene bucles de Capa 2 en redes conmutadas redundantes bloqueando enlaces alternos.',
  },
  CIDR: {
    significado: 'Classless Inter-Domain Routing',
    pista: 'Notación de prefijo (/24, /26) que elimina las clases fijas A/B/C para aprovechar mejor IPv4.',
  },
  VLSM: {
    significado: 'Variable Length Subnet Mask (Máscara de Subred de Longitud Variable)',
    pista: 'Permite asignar máscaras distintas a cada subred según el número exacto de hosts requeridos.',
  },
  EIGRP: {
    significado: 'Enhanced Interior Gateway Routing Protocol',
    pista: 'Protocolo de enrutamiento avanzado (vector distancia/híbrido) que usa el algoritmo DUAL y Split Horizon.',
  },
  OSPF: {
    significado: 'Open Shortest Path First',
    pista: 'Protocolo de estado de enlace (IGP) que usa el algoritmo de Dijkstra (SPF) y métrica de costo.',
  },
  BGP: {
    significado: 'Border Gateway Protocol',
    pista: 'Protocolo de vector de ruta (EGP) que interconecta Sistemas Autónomos (AS) en Internet.',
  },
  RIP: {
    significado: 'Routing Information Protocol',
    pista: 'Protocolo de vector distancia cuya única métrica es el conteo de saltos (máximo 15).',
  },
  HDLC: {
    significado: 'High-Level Data Link Control',
    pista: 'Protocolo síncrono de Capa 2 orientado a bit usado en enlaces seriales WAN.',
  },
  CDP: {
    significado: 'Cisco Discovery Protocol',
    pista: 'Protocolo propietario de Capa 2 para descubrir información de dispositivos Cisco vecinos.',
  },
  DHCP: {
    significado: 'Dynamic Host Configuration Protocol',
    pista: 'Asigna automáticamente IP, máscara, gateway y DNS mediante el ciclo DORA (Discover-Offer-Request-Ack).',
  },
  DNS: {
    significado: 'Domain Name System (Sistema de Nombres de Dominio)',
    pista: 'Traduce nombres de dominio legibles a direcciones IP (puerto 53).',
  },
  NAT: {
    significado: 'Network Address Translation (Traducción de Direcciones de Red)',
    pista: 'Traduce direcciones IP privadas (RFC 1918) a IP públicas para salir a Internet.',
  },
  PAT: {
    significado: 'Port Address Translation (NAT Overload)',
    pista: 'Permite que múltiples hosts privados compartan una sola IP pública diferenciándolos por puerto.',
  },
  HTTP: {
    significado: 'Hypertext Transfer Protocol',
    pista: 'Protocolo de Capa 7 sin estado para transferencia web (puerto 80; HTTPS usa TLS en 443).',
  },
  SSH: {
    significado: 'Secure Shell',
    pista: 'Acceso remoto cifrado por línea de comandos (puerto 22); reemplaza al inseguro Telnet (23).',
  },
  SNMP: {
    significado: 'Simple Network Management Protocol',
    pista: 'Monitorea y gestiona dispositivos de red usando agentes, MIB y traps (puertos UDP 161/162).',
  },
  NTP: {
    significado: 'Network Time Protocol',
    pista: 'Sincroniza los relojes de servidores y equipos de red (puerto UDP 123) para correlación de logs.',
  },
  SMTP: {
    significado: 'Simple Mail Transfer Protocol',
    pista: 'Protocolo de envío y transferencia de correo electrónico entre servidores (puertos 25/587).',
  },
  POP3: {
    significado: 'Post Office Protocol version 3',
    pista: 'Descarga correo electrónico al cliente local (puerto 110; 995 con TLS).',
  },
  IMAP: {
    significado: 'Internet Message Access Protocol',
    pista: 'Sincroniza y gestiona carpetas de correo directamente en el servidor (puerto 143; 993 con TLS).',
  },
  CIFS: {
    significado: 'Common Internet File System',
    pista: 'Dialecto de SMB en Capa 7 para compartir archivos e impresoras en red.',
  },
  ACL: {
    significado: 'Access Control List (Lista de Control de Acceso)',
    pista: 'Reglas secuenciales en routers/firewalls para permitir o denegar tráfico; tienen deny any implícito al final.',
  },
  DMZ: {
    significado: 'Demilitarized Zone (Zona Desmilitarizada)',
    pista: 'Subred perimetral aislada para servidores públicos (web, DNS) que protege la LAN interna.',
  },
  IDS: {
    significado: 'Intrusion Detection System (Sistema de Detección de Intrusos)',
    pista: 'Analiza tráfico de forma pasiva y genera alertas sin bloquear directamente el paquete.',
  },
  IPS: {
    significado: 'Intrusion Prevention System (Sistema de Prevención de Intrusos)',
    pista: 'Opera en línea (inline) para detectar y bloquear ataques automáticamente en tiempo real.',
  },
  VPN: {
    significado: 'Virtual Private Network (Red Privada Virtual)',
    pista: 'Crea un túnel cifrado sobre una red pública (Internet) para proteger confidencialidad e integridad.',
  },
  TLS: {
    significado: 'Transport Layer Security',
    pista: 'Protocolo criptográfico sucesor de SSL que asegura comunicaciones web (HTTPS) y correo.',
  },
  SSL: {
    significado: 'Secure Sockets Layer',
    pista: 'Predecesor obsoleto de TLS para cifrar tráfico en red.',
  },
  PKI: {
    significado: 'Public Key Infrastructure (Infraestructura de Clave Pública)',
    pista: 'Marco de autoridades certificadoras (CA) y certificados digitales X.509 para validar identidades.',
  },
  QoS: {
    significado: 'Quality of Service (Calidad de Servicio)',
    pista: 'Prioriza tráfico sensible a latencia (como voz/video) frente a tráfico de datos masivos.',
  },
  MITM: {
    significado: 'Man-in-the-Middle (Hombre en el Medio)',
    pista: 'Ataque donde un tercero intercepta y posiblemente altera la comunicación entre dos partes.',
  },
  DDoS: {
    significado: 'Distributed Denial of Service (Denegación de Servicio Distribuida)',
    pista: 'Satura la disponibilidad de un servicio usando múltiples sistemas comprometidos (botnet).',
  },
  WPA3: {
    significado: 'Wi-Fi Protected Access 3',
    pista: 'Estándar actual de seguridad inalámbrica con intercambio SAE resistente a fuerza bruta offline.',
  },
  // === SOFTWARE, ALGORITMOS, SO Y BASES DE DATOS ===
  UML: {
    significado: 'Unified Modeling Language (Lenguaje de Modelado Unificado)',
    pista: 'Estándar gráfico para diagramas estructurales (clases, componentes) y de comportamiento (estado, secuencia, casos de uso).',
  },
  DFD: {
    significado: 'Data Flow Diagram (Diagrama de Flujo de Datos)',
    pista: 'Modela cómo fluyen y se transforman los datos de entrada a salida (notación Yourdon-DeMarco / Gane-Sarson).',
  },
  SOA: {
    significado: 'Service-Oriented Architecture (Arquitectura Orientada a Servicios)',
    pista: 'Arquitectura que expone funcionalidades como servicios interoperables, reutilizables y desacoplados.',
  },
  SDLC: {
    significado: 'Software Development Life Cycle (Ciclo de Vida del Desarrollo de Software)',
    pista: 'Fases secuenciales o iterativas: planificación, análisis, diseño, implementación, pruebas y mantenimiento.',
  },
  POO: {
    significado: 'Programación Orientada a Objetos',
    pista: 'Paradigma basado en encapsulamiento, herencia, polimorfismo y abstracción.',
  },
  MVC: {
    significado: 'Model-View-Controller (Modelo-Vista-Controlador)',
    pista: 'Patrón arquitectónico que separa datos/lógica (Modelo), interfaz (Vista) y coordinación de eventos (Controlador).',
  },
  API: {
    significado: 'Application Programming Interface',
    pista: 'Contrato de métodos y endpoints que permite la comunicación entre componentes de software.',
  },
  REST: {
    significado: 'Representational State Transfer',
    pista: 'Estilo arquitectónico sin estado sobre HTTP usando verbos GET, POST, PUT, DELETE.',
  },
  TDD: {
    significado: 'Test-Driven Development (Desarrollo Guiado por Pruebas)',
    pista: 'Ciclo Red-Green-Refactor: primero se escribe la prueba que falla, luego el código mínimo y se refactoriza.',
  },
  TPS: {
    significado: 'Transaction Processing System (Sistema de Procesamiento de Transacciones)',
    pista: 'Nivel operativo: registra transacciones diarias elementales (ventas, nómina, inventario).',
  },
  MIS: {
    significado: 'Management Information System (Sistema de Información Gerencial)',
    pista: 'Nivel administrativo: genera reportes periódicos de supervisión y control para gerentes medios.',
  },
  DSS: {
    significado: 'Decision Support System (Sistema de Soporte a Decisiones)',
    pista: 'Nivel administrativo: apoya decisiones semiestructuradas con modelos y análisis "qué pasaría si".',
  },
  ESS: {
    significado: 'Executive Support System (Sistema de Apoyo a Ejecutivos)',
    pista: 'Nivel estratégico: tableros e indicadores para tendencias y decisiones de largo plazo de directores.',
  },
  KWS: {
    significado: 'Knowledge Work System (Sistema de Trabajo del Conocimiento)',
    pista: 'Nivel conocimiento: apoya a ingenieros, diseñadores e investigadores (ej. herramientas CAD).',
  },
  FCFS: {
    significado: 'First-Come, First-Served (Primero en Llegar, Primero en Ser Atendido)',
    pista: 'Planificación no apropiativa tipo cola FIFO; puede sufrir el efecto convoy.',
  },
  SJF: {
    significado: 'Shortest Job First (Trabajo Más Corto Primero)',
    pista: 'Asigna la CPU al proceso con menor ráfaga estimada; minimiza tiempo promedio de espera.',
  },
  SRTF: {
    significado: 'Shortest Remaining Time First (Menor Tiempo Restante Primero)',
    pista: 'Versión apropiativa (preemptive) de SJF: si llega un proceso más corto, desaloja al actual.',
  },
  FIFO: {
    significado: 'First-In, First-Out (Primero en Entrar, Primero en Salir)',
    pista: 'Comportamiento propio de una Cola (Queue).',
  },
  LIFO: {
    significado: 'Last-In, First-Out (Último en Entrar, Primero en Salir)',
    pista: 'Comportamiento propio de una Pila (Stack).',
  },
  BFS: {
    significado: 'Breadth-First Search (Búsqueda en Anchura)',
    pista: 'Explora por niveles usando una Cola (FIFO); halla la ruta más corta en grafos no ponderados.',
  },
  DFS: {
    significado: 'Depth-First Search (Búsqueda en Profundidad)',
    pista: 'Explora una rama hasta el fondo antes de retroceder usando Pila (LIFO) o recursión.',
  },
  BST: {
    significado: 'Binary Search Tree (Árbol Binario de Búsqueda)',
    pista: 'Subárbol izquierdo < raíz < subárbol derecho; su recorrido Inorden produce elementos ordenados.',
  },
  SQL: {
    significado: 'Structured Query Language (Lenguaje de Consulta Estructurado)',
    pista: 'Estándar para definir (DDL), manipular (DML) y controlar (DCL) bases de datos relacionales.',
  },
  DDL: {
    significado: 'Data Definition Language (Lenguaje de Definición de Datos)',
    pista: 'Comandos de estructura de BD: CREATE, ALTER, DROP, TRUNCATE.',
  },
  DML: {
    significado: 'Data Manipulation Language (Lenguaje de Manipulación de Datos)',
    pista: 'Comandos de datos: SELECT, INSERT, UPDATE, DELETE.',
  },
  DCL: {
    significado: 'Data Control Language (Lenguaje de Control de Datos)',
    pista: 'Comandos de permisos y seguridad: GRANT y REVOKE.',
  },
  ACID: {
    significado: 'Atomicity, Consistency, Isolation, Durability',
    pista: 'Las 4 propiedades que garantizan transacciones confiables en bases de datos relacionales.',
  },
  BCNF: {
    significado: 'Boyce-Codd Normal Form (Forma Normal de Boyce-Codd)',
    pista: 'Versión más estricta de 3FN: todo determinante funcional debe ser una superclave.',
  },
  OLTP: {
    significado: 'Online Transaction Processing',
    pista: 'Bases de datos operativas normalizadas para muchas transacciones cortas concurrentes.',
  },
  OLAP: {
    significado: 'Online Analytical Processing',
    pista: 'Sistemas analíticos (Data Warehouse) optimizados para consultas agregadas históricas.',
  },
  ETL: {
    significado: 'Extract, Transform, Load (Extraer, Transformar y Cargar)',
    pista: 'Proceso para integrar datos de fuentes heterogéneas hacia un Data Warehouse.',
  },
};

function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Extrae y unifica los acrónimos de una pregunta:
 * 1) Prioriza `question.acronimos` (explícitos en el banco de simulacro).
 * 2) Detecta automáticamente acrónimos adicionales del diccionario presentes en
 *    el enunciado, opciones o explicación (útil en el modo estudio y como complemento).
 */
function resolveAcronymsForQuestion(question, maxItems = 6) {
  if (!question) return [];

  const result = [];
  const seen = new Set();

  if (Array.isArray(question.acronimos)) {
    question.acronimos.forEach((item) => {
      if (!item || !item.sigla) return;
      const key = String(item.sigla).trim().toUpperCase();
      if (!key || seen.has(key)) return;
      seen.add(key);
      result.push({
        sigla: String(item.sigla).trim(),
        significado: String(item.significado || '').trim(),
        pista: String(item.pista || '').trim(),
      });
    });
  }

  // Respaldo automático buscando siglas del diccionario maestro en el texto
  if (result.length < maxItems) {
    const combinedText = [
      question.pregunta || '',
      ...(Array.isArray(question.opciones)
        ? question.opciones.map((o) => o.texto || '')
        : []),
      question.explicacion || '',
    ].join(' ');

    for (const [sigla, info] of Object.entries(EGEL_ACRONYMS_DICT)) {
      if (result.length >= maxItems) break;
      if (seen.has(sigla.toUpperCase())) continue;
      const regex = new RegExp(`\\b${escapeRegExp(sigla)}\\b`, 'g');
      if (regex.test(combinedText)) {
        seen.add(sigla.toUpperCase());
        result.push({
          sigla,
          significado: info.significado,
          pista: info.pista,
        });
      }
    }
  }

  return result;
}

export function AcronymsFooter({ question, compact = false }) {
  const items = useMemo(() => resolveAcronymsForQuestion(question, compact ? 4 : 6), [
    question,
    compact,
  ]);

  if (!items || items.length === 0) return null;

  return (
    <div
      className={`rounded-xl border border-indigo-200/90 bg-indigo-50/55 ${
        compact ? 'p-2.5 mt-2' : 'p-3.5 mt-3'
      }`}
    >
      <div className="flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-wider text-indigo-900 mb-2">
        <BookMarked className="w-3.5 h-3.5 text-indigo-700 shrink-0" />
        <span>Glosario de Acrónimos al Pie ({items.length})</span>
      </div>
      <div className={compact ? 'space-y-1.5' : 'grid grid-cols-1 sm:grid-cols-2 gap-2'}>
        {items.map((acr) => (
          <div
            key={acr.sigla}
            className="bg-white/90 border border-indigo-100 rounded-lg px-2.5 py-1.5 text-xs leading-snug"
          >
            <div className="flex flex-wrap items-baseline gap-1.5">
              <span className="font-mono font-extrabold text-[11px] px-1.5 py-0.5 rounded bg-indigo-100 text-indigo-950 border border-indigo-200 shrink-0">
                {acr.sigla}
              </span>
              <span className="font-bold text-stone-900">{acr.significado}</span>
            </div>
            {acr.pista && (
              <p className="text-[11px] text-stone-600 mt-0.5 leading-relaxed">
                {acr.pista}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

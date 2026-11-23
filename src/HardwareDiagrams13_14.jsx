import React from 'react';

/**
 * Diagramas SVG técnicos verificados para las Subáreas 1.3 (Sistemas Embebidos y Tiempo Real)
 * y 1.4 (Automatización y Control).
 */

export function RtosPriorityInversionDiagram() {
  return (
    <svg viewBox="0 0 820 245" className="w-full h-auto" role="img" aria-label="Bare-Metal vs RTOS, Tiempo Real Duro vs Blando e Inversión de Prioridad">
      <rect width="820" height="245" rx="14" fill="#FAF7F2" />

      {/* Panel 1: Bare-Metal vs RTOS y Hard vs Soft Real-Time */}
      <g transform="translate(12, 12)">
        <rect width="390" height="221" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="370" height="24" rx="6" fill="#0F766E" />
        <text x="195" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="800">BARE-METAL vs. RTOS Y DETERMINISMO TEMPORAL</text>

        <rect x="14" y="42" width="362" height="50" rx="6" fill="#FAF7F2" stroke="#D8D0C0" />
        <text x="22" y="58" fill="#1C1917" fontSize="9" fontWeight="800">• Bare-Metal (Super-Loop while(1)) vs. RTOS (FreeRTOS):</text>
        <text x="22" y="73" fill="#57534E" fontSize="8.2">Bare-Metal ejecuta un bucle secuencial + ISR; un RTOS usa un Planificador</text>
        <text x="22" y="85" fill="#0F766E" fontSize="8.2" fontWeight="700">(Scheduler) Apropiativo por prioridades con respuesta determinista.</text>

        <rect x="14" y="100" width="362" height="52" rx="6" fill="#FEE2E2" stroke="#DC2626" />
        <text x="22" y="117" fill="#991B1B" fontSize="9.2" fontWeight="800">1. Tiempo Real Duro (Hard Real-Time — Ej. ABS, Airbag, Marcapasos):</text>
        <text x="22" y="133" fill="#7F1D1D" fontSize="8.3" fontWeight="700">Incumplir un plazo límite (Deadline) causa un FALLO CATASTRÓFICO.</text>
        <text x="22" y="146" fill="#57534E" fontSize="8">Importa el determinismo garantizado, no solo la velocidad promedio.</text>

        <rect x="14" y="160" width="362" height="49" rx="6" fill="#FFFBEB" stroke="#D97706" />
        <text x="22" y="177" fill="#92400E" fontSize="9.2" fontWeight="800">2. Tiempo Real Blando (Soft Real-Time — Ej. Streaming de Video):</text>
        <text x="22" y="193" fill="#57534E" fontSize="8.3">Incumplir ocasionalmente un deadline solo degrada la calidad sin fallo fatal.</text>
      </g>

      {/* Panel 2: Inversión de Prioridad y Herencia de Prioridad */}
      <g transform="translate(412, 12)">
        <rect width="396" height="221" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="376" height="24" rx="6" fill="#B45309" />
        <text x="198" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="800">PROBLEMA DE INVERSIÓN DE PRIORIDAD EN RTOS</text>

        <rect x="14" y="42" width="368" height="106" rx="7" fill="#FFFBEB" stroke="#F59E0B" />
        <text x="24" y="60" fill="#92400E" fontSize="9.2" fontWeight="800">¿Cómo ocurre la Inversión de Prioridad?</text>
        <text x="24" y="78" fill="#1C1917" fontSize="8.4">1) Tarea <tspan fontWeight="800" fill="#0F766E">Baja Prioridad</tspan> toma un recurso compartido (Mutex).</text>
        <text x="24" y="95" fill="#1C1917" fontSize="8.4">2) Tarea <tspan fontWeight="800" fill="#DC2626">Alta Prioridad</tspan> pide el Mutex y queda bloqueada esperando.</text>
        <text x="24" y="112" fill="#1C1917" fontSize="8.4">3) Tarea <tspan fontWeight="800" fill="#B45309">Media Prioridad</tspan> (que no usa el Mutex) expropia a la Baja,</text>
        <text x="34" y="126" fill="#991B1B" fontSize="8.4" fontWeight="700">¡bloqueando indirectamente a la tarea de Alta Prioridad!</text>

        <rect x="14" y="156" width="368" height="53" rx="7" fill="#F0FDFA" stroke="#0F766E" strokeWidth="1.5" />
        <text x="198" y="175" textAnchor="middle" fill="#134E4A" fontSize="9.5" fontWeight="800">✓ SOLUCIÓN EXACTA EN EXAMEN: HERENCIA DE PRIORIDAD</text>
        <text x="198" y="192" textAnchor="middle" fill="#115E59" fontSize="8.3">(Priority Inheritance / Priority Ceiling): La tarea Baja hereda temporalmente</text>
        <text x="198" y="204" textAnchor="middle" fill="#115E59" fontSize="8.3">la prioridad Alta hasta liberar el Mutex para que la Media no la interrumpa.</text>
      </g>
    </svg>
  );
}

export function McuMemoryMapFpgaDiagram() {
  return (
    <svg viewBox="0 0 820 245" className="w-full h-auto" role="img" aria-label="Mapa de memoria de un microcontrolador y comparativa MCU vs FPGA">
      <rect width="820" height="245" rx="14" fill="#FAF7F2" />

      {/* Panel 1: Mapa de Memoria del Microcontrolador */}
      <g transform="translate(12, 12)">
        <rect width="430" height="221" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="410" height="24" rx="6" fill="#292524" />
        <text x="215" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="800">MAPA DE MEMORIA EN MICROCONTROLADOR (Ej. ATmega328P 16 MHz)</text>

        {[
          { y: 42, title: '1. Flash ROM (No Volátil — 32 KB)', desc: 'Guarda el código ejecutable (Firmware) y constantes PROGMEM.', bg: '#F0FDFA', bd: '#0F766E', fg: '#134E4A' },
          { y: 84, title: '2. Bootloader (Sección protegida de Flash)', desc: 'Ejecuta al arrancar; permite cargar firmware por UART/USB sin ICSP.', bg: '#FFFBEB', bd: '#D97706', fg: '#92400E' },
          { y: 126, title: '3. SRAM (Volátil — 2 KB)', desc: 'Variables globales, dinámicas y la Pila (Stack de retorno y locales).', bg: '#EEF2FF', bd: '#4338CA', fg: '#312E81' },
          { y: 168, title: '4. EEPROM (No Volátil — 1 KB) + Registros SFR', desc: 'EEPROM: calibración persistente byte a byte | SFR: control de GPIO/Timers.', bg: '#FCE7F3', bd: '#BE185D', fg: '#831843' },
        ].map((m, i) => (
          <g key={i} transform={`translate(14, ${m.y})`}>
            <rect width="402" height="36" rx="6" fill={m.bg} stroke={m.bd} strokeWidth="1.3" />
            <text x="10" y="15" fill={m.fg} fontSize="9" fontWeight="800">{m.title}</text>
            <text x="10" y="29" fill="#44403C" fontSize="8.2">{m.desc}</text>
          </g>
        ))}
      </g>

      {/* Panel 2: MCU vs FPGA */}
      <g transform="translate(452, 12)">
        <rect width="356" height="221" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="336" height="24" rx="6" fill="#4338CA" />
        <text x="178" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="800">MICROCONTROLADOR (MCU) vs. FPGA</text>

        <rect x="14" y="42" width="328" height="76" rx="7" fill="#FAF7F2" stroke="#D8D0C0" />
        <text x="22" y="60" fill="#1C1917" fontSize="9.3" fontWeight="800">Microcontrolador (AVR / ARM Cortex-M):</text>
        <text x="22" y="76" fill="#57534E" fontSize="8.3">• Hardware interno fijo (CPU + RAM + Periféricos en 1 chip).</text>
        <text x="22" y="91" fill="#B45309" fontSize="8.4" fontWeight="800">• Ejecución SECUENCIAL de instrucciones (C / C++).</text>
        <text x="22" y="106" fill="#57534E" fontSize="8.2">• Bajo costo y bajo consumo para control general.</text>

        <rect x="14" y="126" width="328" height="83" rx="7" fill="#EEF2FF" stroke="#4338CA" strokeWidth="1.5" />
        <text x="22" y="144" fill="#312E81" fontSize="9.3" fontWeight="800">FPGA (Field-Programmable Gate Array):</text>
        <text x="22" y="160" fill="#57534E" fontSize="8.3">• Matriz de bloques lógicos (CLB/LUTs) configurables (VHDL/Verilog).</text>
        <text x="22" y="176" fill="#0F766E" fontSize="8.6" fontWeight="800">• PARALELISMO FÍSICO REAL Y SIMULTÁNEO en hardware.</text>
        <text x="22" y="192" fill="#4338CA" fontSize="8.2" fontWeight="700">• Ideal para procesamiento masivo de señales de alta velocidad.</text>
      </g>
    </svg>
  );
}

export function GpioIsrPwmWdtDiagram() {
  return (
    <svg viewBox="0 0 820 250" className="w-full h-auto" role="img" aria-label="GPIO Pull-Up, Antirrebote, ISR volatile, Modulación PWM y Watchdog Timer">
      <rect width="820" height="250" rx="14" fill="#FAF7F2" />

      {/* Panel 1: GPIO Pull-Up, Debouncing e ISR */}
      <g transform="translate(12, 12)">
        <rect width="394" height="226" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="374" height="24" rx="6" fill="#0F766E" />
        <text x="197" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="800">GPIO PULL-UP, ANTIRREBOTE E INTERRUPCIONES (ISR)</text>

        <rect x="14" y="42" width="366" height="68" rx="6" fill="#F0FDFA" stroke="#0F766E" />
        <text x="22" y="58" fill="#134E4A" fontSize="9.2" fontWeight="800">1. Entrada Digital GPIO (Pull-Up + Antirrebote / Debouncing):</text>
        <text x="22" y="74" fill="#57534E" fontSize="8.3">• Nunca dejar pin flotando: usar <tspan fontWeight="800" fill="#0F766E">INPUT_PULLUP</tspan> (1 abierto, 0 pulsado).</text>
        <text x="22" y="89" fill="#57534E" fontSize="8.3">• Un botón rebota 5–20 ms generando flancos falsos: se filtra con</text>
        <text x="30" y="102" fill="#134E4A" fontSize="8.3" fontWeight="700">filtro RC pasivo (Hardware) o temporizador no bloqueante (Software).</text>

        <rect x="14" y="118" width="366" height="96" rx="6" fill="#FFFBEB" stroke="#D97706" />
        <text x="22" y="135" fill="#92400E" fontSize="9.2" fontWeight="800">2. Reglas de Oro de una Rutina de Interrupción (ISR):</text>
        <text x="22" y="152" fill="#1C1917" fontSize="8.4">• A diferencia de <tspan fontWeight="700">Polling</tspan> (encuesta continua), la ISR despierta al CPU al instante.</text>
        <text x="22" y="168" fill="#DC2626" fontSize="8.5" fontWeight="800">• PROHIBIDO usar retardos bloqueantes (delay) dentro de una ISR.</text>
        <rect x="22" y="177" width="350" height="28" rx="5" fill="#1C1917" />
        <text x="197" y="195" textAnchor="middle" fill="#A7F3D0" fontSize="8.6" fontFamily="monospace" fontWeight="700">
          volatile bool flagEvento = false; /* Obligatorio en ISR */
        </text>
      </g>

      {/* Panel 2: PWM y Watchdog Timer */}
      <g transform="translate(416, 12)">
        <rect width="392" height="226" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="372" height="24" rx="6" fill="#B45309" />
        <text x="196" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="800">MODULACIÓN PWM, INPUT CAPTURE Y WATCHDOG (WDT)</text>

        {/* Onda cuadrada PWM */}
        <rect x="14" y="42" width="364" height="96" rx="6" fill="#FAF7F2" stroke="#D8D0C0" />
        <text x="22" y="58" fill="#1C1917" fontSize="9" fontWeight="800">Señal PWM (Ciclo de Trabajo / Duty Cycle = Ton / T_total × 100%):</text>
        <path d="M 28 96 L 28 68 L 118 68 L 118 96 L 168 96 L 168 68 L 258 68 L 258 96 L 308 96" fill="none" stroke="#0F766E" strokeWidth="3" />
        <text x="73" y="85" textAnchor="middle" fill="#0F766E" fontSize="8.5" fontWeight="800">T_on (Alto)</text>
        <text x="143" y="85" textAnchor="middle" fill="#78716C" fontSize="8">T_off</text>
        <text x="22" y="116" fill="#92400E" fontSize="8.5" fontWeight="800">• V_promedio = Duty_Cycle × V_max (Regula motores DC, LEDs, Servos).</text>
        <text x="22" y="130" fill="#57534E" fontSize="8.2">• Input Capture: Captura el valor del Timer en un flanco para medir periodo.</text>

        <rect x="14" y="146" width="364" height="68" rx="6" fill="#FEE2E2" stroke="#DC2626" />
        <text x="22" y="164" fill="#991B1B" fontSize="9.2" fontWeight="800">Watchdog Timer (WDT — Perro Guardián Autónomo):</text>
        <text x="22" y="180" fill="#7F1D1D" fontSize="8.3">• Contador con oscilador RC propio que el firmware debe reiniciar periódicamente.</text>
        <text x="22" y="196" fill="#991B1B" fontSize="8.4" fontWeight="800">• Si el MCU se cuelga o traba, el WDT desborda y aplica RESET automático.</text>
      </g>
    </svg>
  );
}

export function UartI2cSpiBusesDiagram() {
  return (
    <svg viewBox="0 0 820 255" className="w-full h-auto" role="img" aria-label="Comparativa de esquemas de conexión UART, I2C y SPI">
      <rect width="820" height="255" rx="14" fill="#FAF7F2" />

      {/* 1. UART */}
      <g transform="translate(12, 12)">
        <rect width="258" height="231" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="238" height="24" rx="6" fill="#292524" />
        <text x="129" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="800">1. UART (SERIAL ASÍNCRONO)</text>

        <rect x="18" y="54" width="74" height="44" rx="6" fill="#F5F5F4" stroke="#44403C" strokeWidth="1.5" />
        <text x="55" y="74" textAnchor="middle" fill="#1C1917" fontSize="9" fontWeight="800">Dispositivo A</text>
        <text x="55" y="88" textAnchor="middle" fill="#0F766E" fontSize="8" fontWeight="700">TX / RX</text>

        <rect x="166" y="54" width="74" height="44" rx="6" fill="#F5F5F4" stroke="#44403C" strokeWidth="1.5" />
        <text x="203" y="74" textAnchor="middle" fill="#1C1917" fontSize="9" fontWeight="800">Dispositivo B</text>
        <text x="203" y="88" textAnchor="middle" fill="#0F766E" fontSize="8" fontWeight="700">RX / TX</text>

        <line x1="92" y1="66" x2="166" y2="86" stroke="#0F766E" strokeWidth="2.2" />
        <line x1="92" y1="86" x2="166" y2="66" stroke="#B45309" strokeWidth="2.2" />
        <text x="129" y="56" textAnchor="middle" fill="#134E4A" fontSize="8" fontWeight="800">TX ↔ RX Cruzados</text>

        <rect x="14" y="114" width="230" height="104" rx="6" fill="#FAF7F2" stroke="#D8D0C0" />
        <text x="22" y="132" fill="#1C1917" fontSize="8.6" fontWeight="800">• 2 hilos (TX, RX) + GND • Punto a punto</text>
        <text x="22" y="148" fill="#B45309" fontSize="8.5" fontWeight="800">• SIN línea de reloj (Usa mismo Baud Rate)</text>
        <text x="22" y="164" fill="#57534E" fontSize="8.2">• Trama: Start(0) + 8 bits + Paridad + Stop(1)</text>
        <text x="22" y="180" fill="#57534E" fontSize="8.2">• Full-Duplex • Base de RS-232 y RS-485</text>
        <text x="22" y="196" fill="#4338CA" fontSize="8.2" fontWeight="700">• RS-485: Diferencial multipunto (1200 m)</text>
      </g>

      {/* 2. I2C */}
      <g transform="translate(281, 12)">
        <rect width="258" height="231" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="238" height="24" rx="6" fill="#0F766E" />
        <text x="129" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="800">2. BUS I2C (2 HILOS + PULL-UP)</text>

        <line x1="20" y1="62" x2="238" y2="62" stroke="#0F766E" strokeWidth="2.5" />
        <text x="234" y="56" textAnchor="end" fill="#134E4A" fontSize="8" fontWeight="800">SDA (Datos) + Pull-Up a Vcc</text>
        <line x1="20" y1="80" x2="238" y2="80" stroke="#B45309" strokeWidth="2.5" />
        <text x="234" y="92" textAnchor="end" fill="#92400E" fontSize="8" fontWeight="800">SCL (Reloj Síncrono)</text>

        {[
          { x: 24, t: 'Maestro', s: 'MCU' },
          { x: 98, t: 'Esclavo 1', s: 'Dir 0x68' },
          { x: 172, t: 'Esclavo 2', s: 'Dir 0x76' },
        ].map((n, i) => (
          <g key={i}>
            <rect x={n.x} y="98" width="62" height="30" rx="5" fill={i === 0 ? '#134E4A' : '#F0FDFA'} stroke="#0F766E" strokeWidth="1.4" />
            <text x={n.x + 31} y="111" textAnchor="middle" fill={i === 0 ? '#FFFFFF' : '#134E4A'} fontSize="8.2" fontWeight="800">{n.t}</text>
            <text x={n.x + 31} y="122" textAnchor="middle" fill={i === 0 ? '#99F6E4' : '#0F766E'} fontSize="7.5">{n.s}</text>
          </g>
        ))}

        <rect x="14" y="136" width="230" height="82" rx="6" fill="#FAF7F2" stroke="#D8D0C0" />
        <text x="22" y="153" fill="#134E4A" fontSize="8.6" fontWeight="800">• Solo 2 cables: SDA y SCL (Half-Duplex)</text>
        <text x="22" y="169" fill="#0F766E" fontSize="8.5" fontWeight="800">• Direccionamiento por software: 7 bits</text>
        <text x="28" y="183" fill="#57534E" fontSize="8.2">(hasta 127 esclavos / 128 dirs) o 10 bits</text>
        <text x="22" y="198" fill="#57534E" fontSize="8.2">• Requiere resistencias Pull-Up y bit ACK</text>
        <text x="22" y="211" fill="#57534E" fontSize="8">• Ej. Sensor IMU MPU6050, pantallas OLED</text>
      </g>

      {/* 3. SPI */}
      <g transform="translate(550, 12)">
        <rect width="258" height="231" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="238" height="24" rx="6" fill="#4338CA" />
        <text x="129" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="800">3. BUS SPI (4 HILOS • FULL-DUPLEX)</text>

        <rect x="18" y="48" width="76" height="62" rx="6" fill="#312E81" />
        <text x="56" y="76" textAnchor="middle" fill="#FFFFFF" fontSize="9.2" fontWeight="800">Maestro</text>
        <text x="56" y="90" textAnchor="middle" fill="#C7D2FE" fontSize="8">(MCU)</text>

        <rect x="164" y="48" width="76" height="62" rx="6" fill="#EEF2FF" stroke="#4338CA" strokeWidth="1.5" />
        <text x="202" y="76" textAnchor="middle" fill="#312E81" fontSize="9.2" fontWeight="800">Esclavo</text>
        <text x="202" y="90" textAnchor="middle" fill="#4338CA" fontSize="8">(SD / Flash)</text>

        {[
          { y: 56, label: 'MOSI →' },
          { y: 70, label: '← MISO' },
          { y: 84, label: 'SCK (Reloj) →' },
          { y: 98, label: 'SS / CS (Bajo) →' },
        ].map((l, i) => (
          <g key={i}>
            <line x1="94" y1={l.y} x2="164" y2={l.y} stroke="#4338CA" strokeWidth="1.6" />
            <text x="129" y={l.y - 2} textAnchor="middle" fill="#312E81" fontSize="7.2" fontWeight="800">{l.label}</text>
          </g>
        ))}

        <rect x="14" y="118" width="230" height="100" rx="6" fill="#FAF7F2" stroke="#D8D0C0" />
        <text x="22" y="136" fill="#312E81" fontSize="8.6" fontWeight="800">• 4 líneas: MOSI, MISO, SCK y SS/CS</text>
        <text x="22" y="152" fill="#0F766E" fontSize="8.6" fontWeight="800">• EL MÁS RÁPIDO (&gt;10–50 Mbps)</text>
        <text x="22" y="168" fill="#57534E" fontSize="8.2">• Síncrono y Full-Duplex simultáneo</text>
        <text x="22" y="184" fill="#57534E" fontSize="8.2">• Selección por pin físico CS por esclavo</text>
        <text x="22" y="200" fill="#B45309" fontSize="8.2" fontWeight="700">• HC-SR04: Distancia = (v_sonido × t_eco)/2</text>
      </g>
    </svg>
  );
}

export function ClosedLoopPidControlDiagram() {
  return (
    <svg viewBox="0 0 820 265" className="w-full h-auto" role="img" aria-label="Lazo cerrado de control, controlador PID, Anti-Windup y curvas de amortiguamiento">
      <rect width="820" height="265" rx="14" fill="#FAF7F2" />

      {/* Arriba: Diagrama de Bloques de Lazo Cerrado con PID */}
      <g transform="translate(12, 12)">
        <rect width="796" height="112" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <text x="16" y="21" fill="#1C1917" fontSize="10.2" fontWeight="800">
          DIAGRAMA DE BLOQUES DE CONTROL EN LAZO CERRADO:  e(t) = SP - PV   |   T(s) = G(s) / [ 1 + G(s)·H(s) ]
        </text>

        <text x="24" y="58" fill="#134E4A" fontSize="9.5" fontWeight="800">Setpoint (SP)</text>
        <line x1="94" y1="55" x2="132" y2="55" stroke="#0F766E" strokeWidth="2.5" />

        {/* Sumador comparador */}
        <circle cx="148" cy="55" r="15" fill="#FEF3C7" stroke="#B45309" strokeWidth="2" />
        <text x="143" y="53" fill="#134E4A" fontSize="9" fontWeight="800">+</text>
        <text x="144" y="65" fill="#DC2626" fontSize="10" fontWeight="800">−</text>

        <line x1="163" y1="55" x2="225" y2="55" stroke="#DC2626" strokeWidth="2.5" />
        <text x="194" y="48" textAnchor="middle" fill="#DC2626" fontSize="8.5" fontWeight="800">Error e(t)</text>

        {/* Controlador PID */}
        <rect x="225" y="34" width="175" height="42" rx="7" fill="#0F766E" />
        <text x="312" y="52" textAnchor="middle" fill="#FFFFFF" fontSize="9.5" fontWeight="800">CONTROLADOR PID</text>
        <text x="312" y="67" textAnchor="middle" fill="#CCFBF1" fontSize="8" fontFamily="monospace">Kp·e + Ki·∫e dt + Kd·de/dt</text>

        <line x1="400" y1="55" x2="452" y2="55" stroke="#0F766E" strokeWidth="2.5" />
        <text x="426" y="48" textAnchor="middle" fill="#134E4A" fontSize="8.2" fontWeight="800">u(t)</text>

        {/* Actuador + Planta */}
        <rect x="452" y="34" width="165" height="42" rx="7" fill="#FFFBEB" stroke="#B45309" strokeWidth="1.8" />
        <text x="534" y="52" textAnchor="middle" fill="#78350F" fontSize="9.5" fontWeight="800">Actuador + Planta G(s)</text>
        <text x="534" y="67" textAnchor="middle" fill="#92400E" fontSize="8">Polos Re(s) &lt; 0 = Estable BIBO</text>

        <line x1="617" y1="55" x2="735" y2="55" stroke="#0F766E" strokeWidth="2.5" />
        <text x="742" y="58" fill="#134E4A" fontSize="9.5" fontWeight="800">Salida (PV)</text>

        {/* Lazo de realimentación Sensor H(s) */}
        <line x1="680" y1="55" x2="680" y2="96" stroke="#4338CA" strokeWidth="2" />
        <line x1="680" y1="96" x2="465" y2="96" stroke="#4338CA" strokeWidth="2" />
        <rect x="315" y="82" width="150" height="24" rx="5" fill="#EEF2FF" stroke="#4338CA" strokeWidth="1.5" />
        <text x="390" y="97" textAnchor="middle" fill="#312E81" fontSize="8.5" fontWeight="800">Sensor / Transmisor H(s)</text>
        <line x1="315" y1="96" x2="148" y2="96" stroke="#4338CA" strokeWidth="2" />
        <line x1="148" y1="96" x2="148" y2="70" stroke="#4338CA" strokeWidth="2" />
      </g>

      {/* Abajo Izquierda: Efecto exacto de Kp, Ki, Kd y Anti-Windup */}
      <g transform="translate(12, 134)">
        <rect width="420" height="119" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <text x="14" y="20" fill="#1C1917" fontSize="9.8" fontWeight="800">ACCIONES DEL PID, HISTÉRESIS ON-OFF Y ANTI-WINDUP</text>

        <text x="16" y="39" fill="#0F766E" fontSize="8.6" fontWeight="800">• Proporcional (Kp):</text>
        <text x="114" y="39" fill="#44403C" fontSize="8.3">Acelera respuesta, pero deja error estacionario (offset).</text>

        <text x="16" y="56" fill="#B45309" fontSize="8.6" fontWeight="800">• Integral (Ki):</text>
        <text x="90" y="56" fill="#1C1917" fontSize="8.3" fontWeight="700">ELIMINA el error en estado estacionario (e_ss = 0).</text>

        <text x="16" y="73" fill="#4338CA" fontSize="8.6" fontWeight="800">• Derivativa (Kd):</text>
        <text x="102" y="73" fill="#44403C" fontSize="8.3">Amortigua sobreimpulso, pero amplifica ruido de alta f.</text>

        <text x="16" y="90" fill="#991B1B" fontSize="8.6" fontWeight="800">• Anti-Windup:</text>
        <text x="92" y="90" fill="#44403C" fontSize="8.3">Evita saturación del integrador cuando el actuador llega al 100%.</text>

        <text x="16" y="107" fill="#134E4A" fontSize="8.6" fontWeight="800">• Histéresis On-Off:</text>
        <text x="110" y="107" fill="#44403C" fontSize="8.3">Banda muerta que evita conmutación frenética (chattering).</text>
      </g>

      {/* Abajo Derecha: Regímenes de Amortiguamiento */}
      <g transform="translate(442, 134)">
        <rect width="366" height="119" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <text x="14" y="20" fill="#1C1917" fontSize="9.8" fontWeight="800">RESPUESTA TRANSITORIA DE 2° ORDEN (FACTOR ζ)</text>

        <rect x="14" y="29" width="338" height="25" rx="5" fill="#FFFBEB" stroke="#F59E0B" />
        <text x="22" y="45" fill="#92400E" fontSize="8.5" fontWeight="800">1. Subamortiguado (0 &lt; ζ &lt; 1):</text>
        <text x="168" y="45" fill="#57534E" fontSize="8.2">Rápido pero con Sobreimpulso y oscilación.</text>

        <rect x="14" y="59" width="338" height="25" rx="5" fill="#F0FDFA" stroke="#0F766E" />
        <text x="22" y="75" fill="#134E4A" fontSize="8.5" fontWeight="800">2. Críticamente Amortiguado (ζ = 1):</text>
        <text x="188" y="75" fill="#115E59" fontSize="8.2" fontWeight="700">El más rápido SIN sobreimpulso.</text>

        <rect x="14" y="89" width="338" height="23" rx="5" fill="#FAF7F2" stroke="#D8D0C0" />
        <text x="22" y="104" fill="#44403C" fontSize="8.5" fontWeight="800">3. Sobreamortiguado (ζ &gt; 1):</text>
        <text x="160" y="104" fill="#57534E" fontSize="8.2">Respuesta lenta y sin oscilaciones.</text>
      </g>
    </svg>
  );
}

export function IndustrialSensorsPlcScanDiagram() {
  return (
    <svg viewBox="0 0 820 255" className="w-full h-auto" role="img" aria-label="Lazo de corriente 4-20 mA, Encoders, Ciclo Scan del PLC y Variador VFD">
      <rect width="820" height="255" rx="14" fill="#FAF7F2" />

      {/* Panel 1: Lazo 4-20 mA y Sensores Industriales */}
      <g transform="translate(12, 12)">
        <rect width="400" height="231" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="380" height="24" rx="6" fill="#0F766E" />
        <text x="200" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="800">LAZO DE CORRIENTE 4–20 mA, ENCODERS Y SENSORES</text>

        <rect x="14" y="42" width="372" height="60" rx="6" fill="#F0FDFA" stroke="#0F766E" />
        <text x="22" y="58" fill="#134E4A" fontSize="9.2" fontWeight="800">Estándar Industrial 4–20 mA (&quot;Cero Vivo&quot;):</text>
        <text x="22" y="74" fill="#57534E" fontSize="8.3">• No pierde señal en cables largos (la corriente serie es constante).</text>
        <text x="22" y="89" fill="#0F766E" fontSize="8.4" fontWeight="800">• 4 mA = 0% de medición  |  20 mA = 100%  |  0 mA = Cable roto / Falla.</text>

        <rect x="14" y="110" width="372" height="54" rx="6" fill="#FFFBEB" stroke="#D97706" />
        <text x="22" y="126" fill="#92400E" fontSize="9.2" fontWeight="800">Encoder Incremental vs. Encoder Absoluto (Código Gray):</text>
        <text x="22" y="142" fill="#57534E" fontSize="8.3">• Incremental (pulsos A/B): Pierde la posición al apagarse (requiere Homing).</text>
        <text x="22" y="156" fill="#B45309" fontSize="8.4" fontWeight="800">• Absoluto: Conserva la posición angular exacta tras un corte eléctrico.</text>

        <rect x="14" y="172" width="372" height="48" rx="6" fill="#FAF7F2" stroke="#D8D0C0" />
        <text x="22" y="188" fill="#1C1917" fontSize="8.6" fontWeight="800">• Inductivo: Solo detecta METALES | Capacitivo: Metales y NO metales.</text>
        <text x="22" y="204" fill="#4338CA" fontSize="8.5" fontWeight="700">• RTD Pt100 (100 Ω a 0°C): Más lineal | Termopar (Seebeck): &gt;1000°C.</text>
      </g>

      {/* Panel 2: Ciclo Scan del PLC, VFD y SCADA */}
      <g transform="translate(422, 12)">
        <rect width="386" height="231" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="366" height="24" rx="6" fill="#4338CA" />
        <text x="193" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="800">CICLO SCAN DEL PLC (IEC 61131-3), VFD Y SCADA</text>

        {/* 4 etapas del Scan del PLC */}
        <rect x="14" y="42" width="358" height="106" rx="7" fill="#EEF2FF" stroke="#4338CA" />
        <text x="193" y="59" textAnchor="middle" fill="#312E81" fontSize="9.2" fontWeight="800">Las 4 Etapas Cíclicas del Scan de un PLC:</text>

        {[
          { x: 22, y: 68, t: '1. Diagnóstico', s: 'Autochequeo y Red' },
          { x: 198, y: 68, t: '2. Leer Entradas', s: 'Físicas → Tabla PII' },
          { x: 22, y: 108, t: '3. Ejecutar Ladder', s: 'Lógica IEC 61131-3' },
          { x: 198, y: 108, t: '4. Escribir Salidas', s: 'Tabla PIQ → Físicas' },
        ].map((st, i) => (
          <g key={i}>
            <rect x={st.x} y={st.y} width="162" height="32" rx="5" fill="#FFFFFF" stroke="#4338CA" strokeWidth="1.4" />
            <text x={st.x + 81} y={st.y + 13} textAnchor="middle" fill="#312E81" fontSize="8.5" fontWeight="800">{st.t}</text>
            <text x={st.x + 81} y={st.y + 25} textAnchor="middle" fill="#57534E" fontSize="7.8">{st.s}</text>
          </g>
        ))}

        <rect x="14" y="156" width="358" height="64" rx="6" fill="#FFFBEB" stroke="#F59E0B" />
        <text x="22" y="173" fill="#92400E" fontSize="8.8" fontWeight="800">• Variador de Frecuencia (VFD): Regula velocidad de motor CA trifásico</text>
        <text x="28" y="187" fill="#1C1917" fontSize="8.3" fontFamily="monospace" fontWeight="700">Velocidad síncrona: n_s (RPM) = (120 × f) / Polos</text>
        <text x="22" y="203" fill="#0F766E" fontSize="8.4" fontWeight="700">• SCADA: Supervisión central HMI, alarmas e históricos sobre PLCs (Modbus/OPC).</text>
      </g>
    </svg>
  );
}

import React from 'react';

/**
 * Diagramas SVG técnicos verificados para las Subáreas 1.1 (Circuitos y Electrónica)
 * y 1.2 (Arquitectura de Computadoras y Diseño Digital).
 */

export function SignalsNyquistAdcDiagram() {
  return (
    <svg viewBox="0 0 820 245" className="w-full h-auto" role="img" aria-label="Teorema de Muestreo de Nyquist-Shannon y Cuantización ADC">
      <rect width="820" height="245" rx="14" fill="#FAF7F2" />

      {/* Panel 1: Cadena de Digitalización y Nyquist */}
      <g transform="translate(12, 12)">
        <rect width="405" height="221" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="385" height="24" rx="6" fill="#B45309" />
        <text x="202" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="10.2" fontWeight="800">TEOREMA DE NYQUIST-SHANNON Y FILTRO ANTI-ALIASING</text>

        {/* Bloques en cadena */}
        <rect x="16" y="48" width="98" height="48" rx="7" fill="#FFFBEB" stroke="#D97706" strokeWidth="1.5" />
        <text x="65" y="68" textAnchor="middle" fill="#78350F" fontSize="9" fontWeight="800">Señal Analógica</text>
        <text x="65" y="82" textAnchor="middle" fill="#92400E" fontSize="8">Continua (f_max)</text>

        <line x1="114" y1="72" x2="146" y2="72" stroke="#44403C" strokeWidth="2" />

        <rect x="146" y="48" width="112" height="48" rx="7" fill="#F0FDFA" stroke="#0F766E" strokeWidth="1.8" />
        <text x="202" y="67" textAnchor="middle" fill="#134E4A" fontSize="8.8" fontWeight="800">Filtro Pasa-Bajas</text>
        <text x="202" y="81" textAnchor="middle" fill="#0F766E" fontSize="8" fontWeight="700">(Anti-Aliasing)</text>

        <line x1="258" y1="72" x2="290" y2="72" stroke="#44403C" strokeWidth="2" />

        <rect x="290" y="48" width="98" height="48" rx="7" fill="#134E4A" />
        <text x="339" y="67" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="800">Muestreo ADC</text>
        <text x="339" y="81" textAnchor="middle" fill="#99F6E4" fontSize="8" fontWeight="700">Reloj fs</text>

        <rect x="16" y="108" width="372" height="46" rx="7" fill="#FEF3C7" stroke="#F59E0B" />
        <text x="202" y="127" textAnchor="middle" fill="#92400E" fontSize="11" fontWeight="800">Condición obligatoria:  fs ≥ 2 · f_max</text>
        <text x="202" y="144" textAnchor="middle" fill="#57534E" fontSize="8.4">Frecuencia de Nyquist = fs / 2 • Si fs &lt; 2·f_max ocurre Aliasing (solapamiento)</text>

        <rect x="16" y="162" width="372" height="48" rx="7" fill="#FAF7F2" stroke="#D8D0C0" />
        <text x="24" y="179" fill="#1C1917" fontSize="8.8" fontWeight="800">• Serie de Fourier vs. Transformada Continua:</text>
        <text x="24" y="195" fill="#57534E" fontSize="8.2">Periódica → Serie de Fourier (espectro discreto) | Aperiódica → Transformada (continuo)</text>
      </g>

      {/* Panel 2: Resolución y Cuantización del ADC */}
      <g transform="translate(427, 12)">
        <rect width="381" height="221" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="361" height="24" rx="6" fill="#0F766E" />
        <text x="190" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="10.2" fontWeight="800">CUANTIZACIÓN Y RESOLUCIÓN DE UN ADC DE N BITS</text>

        <rect x="14" y="44" width="353" height="52" rx="7" fill="#F0FDFA" stroke="#0F766E" />
        <text x="190" y="64" textAnchor="middle" fill="#134E4A" fontSize="10.5" fontWeight="800">Niveles = 2^N    |    Escalón LSB = V_ref / 2^N</text>
        <text x="190" y="82" textAnchor="middle" fill="#115E59" fontSize="8.5">Cada bit adicional (+1 bit) DUPLICA el número de niveles y reduce el error a la mitad</text>

        <rect x="14" y="106" width="353" height="104" rx="7" fill="#FFFBEB" stroke="#F59E0B" />
        <text x="24" y="125" fill="#92400E" fontSize="9.5" fontWeight="800">Caso clásico de examen CENEVAL (10 bits → 12 bits):</text>
        <text x="24" y="144" fill="#1C1917" fontSize="8.8" fontFamily="monospace" fontWeight="700">• ADC de 10 bits: 2¹⁰ = 1,024 niveles discretos</text>
        <text x="24" y="162" fill="#1C1917" fontSize="8.8" fontFamily="monospace" fontWeight="700">• ADC de 12 bits: 2¹² = 4,096 niveles discretos</text>
        <rect x="24" y="174" width="333" height="26" rx="5" fill="#0F766E" />
        <text x="190" y="191" textAnchor="middle" fill="#FFFFFF" fontSize="9.2" fontWeight="800">Incremento ΔN = 2 bits → Mejora la resolución por factor 2² = 4</text>
      </g>
    </svg>
  );
}

export function KirchhoffWheatstoneKelvinDiagram() {
  return (
    <svg viewBox="0 0 820 250" className="w-full h-auto" role="img" aria-label="Puente de Wheatstone y Medición Kelvin a 4 hilos">
      <rect width="820" height="250" rx="14" fill="#FAF7F2" />

      {/* Panel 1: Puente de Wheatstone */}
      <g transform="translate(12, 12)">
        <rect width="392" height="226" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="372" height="24" rx="6" fill="#0F766E" />
        <text x="196" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="10.2" fontWeight="800">PUENTE DE WHEATSTONE (SENSORES RTD / GALGAS)</text>

        {/* Diamante del puente */}
        <polygon points="110,50 175,112 110,174 45,112" fill="none" stroke="#134E4A" strokeWidth="2.5" />
        <circle cx="110" cy="112" r="14" fill="#FEF3C7" stroke="#B45309" strokeWidth="2" />
        <text x="110" y="116" textAnchor="middle" fill="#78350F" fontSize="9" fontWeight="800">Vg=0</text>
        <line x1="45" y1="112" x2="96" y2="112" stroke="#B45309" strokeWidth="1.8" />
        <line x1="124" y1="112" x2="175" y2="112" stroke="#B45309" strokeWidth="1.8" />

        <text x="64" y="76" fill="#0F766E" fontSize="9.5" fontWeight="800">R1</text>
        <text x="148" y="76" fill="#0F766E" fontSize="9.5" fontWeight="800">R2</text>
        <text x="64" y="156" fill="#0F766E" fontSize="9.5" fontWeight="800">R3</text>
        <text x="148" y="156" fill="#DC2626" fontSize="9.5" fontWeight="800">Rx (Sensor)</text>

        <rect x="192" y="52" width="186" height="158" rx="8" fill="#F0FDFA" stroke="#0F766E" />
        <text x="285" y="74" textAnchor="middle" fill="#134E4A" fontSize="9.5" fontWeight="800">Condición de Equilibrio:</text>
        <text x="285" y="92" textAnchor="middle" fill="#57534E" fontSize="8.5">Cuando V_diferencial = 0 V:</text>
        <rect x="206" y="102" width="158" height="28" rx="5" fill="#FFFFFF" stroke="#0F766E" strokeWidth="1.5" />
        <text x="285" y="120" textAnchor="middle" fill="#134E4A" fontSize="10.5" fontWeight="800" fontFamily="monospace">Rx = R3 · (R2 / R1)</text>
        <text x="285" y="152" textAnchor="middle" fill="#57534E" fontSize="8.3">Detecta variaciones minúsculas</text>
        <text x="285" y="166" textAnchor="middle" fill="#57534E" fontSize="8.3">de resistencia en galgas y RTD.</text>
        <text x="285" y="186" textAnchor="middle" fill="#0F766E" fontSize="8.3" fontWeight="700">Se amplifica con Op-Amp</text>
        <text x="285" y="198" textAnchor="middle" fill="#0F766E" fontSize="8.3" fontWeight="700">de Instrumentación (alto CMRR)</text>
      </g>

      {/* Panel 2: Medición Kelvin a 4 Hilos */}
      <g transform="translate(414, 12)">
        <rect width="394" height="226" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="374" height="24" rx="6" fill="#B45309" />
        <text x="197" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="10.2" fontWeight="800">MEDICIÓN KELVIN A 4 HILOS (RESISTENCIAS EN mΩ)</text>

        {/* Esquema 4 hilos */}
        <rect x="18" y="54" width="84" height="40" rx="6" fill="#FFFBEB" stroke="#B45309" strokeWidth="1.8" />
        <text x="60" y="72" textAnchor="middle" fill="#78350F" fontSize="9" fontWeight="800">Fuente I</text>
        <text x="60" y="84" textAnchor="middle" fill="#92400E" fontSize="7.8">(2 hilos fuerza)</text>

        <rect x="18" y="114" width="84" height="40" rx="6" fill="#EEF2FF" stroke="#4338CA" strokeWidth="1.8" />
        <text x="60" y="132" textAnchor="middle" fill="#312E81" fontSize="9" fontWeight="800">Voltímetro V</text>
        <text x="60" y="144" textAnchor="middle" fill="#4338CA" fontSize="7.8">(2 hilos sense)</text>

        {/* Cables hacia R_shunt */}
        <line x1="102" y1="66" x2="265" y2="66" stroke="#B45309" strokeWidth="2.5" />
        <line x1="102" y1="142" x2="265" y2="142" stroke="#B45309" strokeWidth="2.5" />
        <line x1="102" y1="124" x2="265" y2="88" stroke="#4338CA" strokeWidth="1.8" strokeDasharray="4 2" />
        <line x1="102" y1="134" x2="265" y2="122" stroke="#4338CA" strokeWidth="1.8" strokeDasharray="4 2" />

        <rect x="265" y="72" width="106" height="62" rx="7" fill="#FEE2E2" stroke="#DC2626" strokeWidth="2" />
        <text x="318" y="99" textAnchor="middle" fill="#991B1B" fontSize="9.5" fontWeight="800">Shunt / Contacto</text>
        <text x="318" y="115" textAnchor="middle" fill="#7F1D1D" fontSize="8.5" fontWeight="700">R muy baja (mΩ)</text>

        <rect x="14" y="164" width="366" height="50" rx="7" fill="#FAF7F2" stroke="#D8D0C0" />
        <text x="24" y="182" fill="#1C1917" fontSize="8.8" fontWeight="800">¿Por qué elimina el error de la resistencia de los cables?</text>
        <text x="24" y="198" fill="#57534E" fontSize="8.3">Como por los 2 cables del voltímetro no circula corriente (Z_in → ∞), no hay caída</text>
        <text x="24" y="209" fill="#0F766E" fontSize="8.3" fontWeight="700">de voltaje en las puntas de prueba y se mide únicamente la caída exacta en la pieza.</text>
      </g>
    </svg>
  );
}

export function RcFiltersResonanceDiagram() {
  return (
    <svg viewBox="0 0 820 250" className="w-full h-auto" role="img" aria-label="Filtros pasivos RC pasa-bajas y pasa-altas y resonancia RLC">
      <rect width="820" height="250" rx="14" fill="#FAF7F2" />

      {/* Panel 1: Filtro Pasa-Bajas */}
      <g transform="translate(12, 12)">
        <rect width="260" height="226" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="240" height="24" rx="6" fill="#0F766E" />
        <text x="130" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="10.2" fontWeight="800">1. FILTRO RC PASA-BAJAS (LPF)</text>

        <rect x="14" y="44" width="232" height="78" rx="7" fill="#F0FDFA" stroke="#0F766E" />
        <text x="130" y="64" textAnchor="middle" fill="#134E4A" fontSize="9.5" fontWeight="800">Vin → [ Resistor R en Serie ] → Vout</text>
        <text x="130" y="84" textAnchor="middle" fill="#0F766E" fontSize="9.5" fontWeight="800">Salida Vout tomada en el CAPACITOR C</text>
        <text x="130" y="105" textAnchor="middle" fill="#57534E" fontSize="8.3">En DC (f=0): X_C → ∞ (C abierto, pasa Vin)</text>
        <text x="130" y="117" textAnchor="middle" fill="#57534E" fontSize="8.3">En alta f: X_C → 0 (C deriva ruido HF a tierra)</text>

        <rect x="14" y="132" width="232" height="82" rx="7" fill="#FAF7F2" stroke="#D8D0C0" />
        <text x="130" y="151" textAnchor="middle" fill="#1C1917" fontSize="9.2" fontWeight="800">Frecuencia de Corte (-3 dB, X_C = R):</text>
        <text x="130" y="171" textAnchor="middle" fill="#0F766E" fontSize="10.5" fontWeight="800" fontFamily="monospace">fc = 1 / (2π · R · C)</text>
        <text x="130" y="191" textAnchor="middle" fill="#57534E" fontSize="8.2">Constante de tiempo: τ = R · C</text>
        <text x="130" y="205" textAnchor="middle" fill="#B45309" fontSize="8.2" fontWeight="700">1τ = 63.2% carga | 5τ = &gt;99.3% cargado</text>
      </g>

      {/* Panel 2: Filtro Pasa-Altas */}
      <g transform="translate(282, 12)">
        <rect width="256" height="226" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="236" height="24" rx="6" fill="#B45309" />
        <text x="128" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="10.2" fontWeight="800">2. FILTRO RC PASA-ALTAS (HPF)</text>

        <rect x="14" y="44" width="228" height="78" rx="7" fill="#FFFBEB" stroke="#D97706" />
        <text x="128" y="64" textAnchor="middle" fill="#78350F" fontSize="9.5" fontWeight="800">Vin → [ Capacitor C en Serie ] → Vout</text>
        <text x="128" y="84" textAnchor="middle" fill="#B45309" fontSize="9.5" fontWeight="800">Salida Vout tomada en el RESISTOR R</text>
        <text x="128" y="105" textAnchor="middle" fill="#57534E" fontSize="8.3">En DC (f=0): El capacitor bloquea CD (Vout=0)</text>
        <text x="128" y="117" textAnchor="middle" fill="#57534E" fontSize="8.3">En alta f: X_C → 0 (pasa la señal de alta f)</text>

        <rect x="14" y="132" width="228" height="82" rx="7" fill="#FAF7F2" stroke="#D8D0C0" />
        <text x="128" y="151" textAnchor="middle" fill="#1C1917" fontSize="9.2" fontWeight="800">Desfase e Impedancia Fasorial:</text>
        <text x="128" y="169" textAnchor="middle" fill="#4338CA" fontSize="8.8" fontFamily="monospace" fontWeight="700">Z_C = 1/(jωC) = -j/(ωC)</text>
        <text x="128" y="185" textAnchor="middle" fill="#57534E" fontSize="8.2">• En Capacitor: Corriente adelanta 90° a V</text>
        <text x="128" y="201" textAnchor="middle" fill="#57534E" fontSize="8.2">• En Inductor (Z_L = jωL): V adelanta 90° a I</text>
      </g>

      {/* Panel 3: Resonancia RLC */}
      <g transform="translate(548, 12)">
        <rect width="260" height="226" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="240" height="24" rx="6" fill="#4338CA" />
        <text x="130" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="10.2" fontWeight="800">3. RESONANCIA ELÉCTRICA RLC</text>

        <rect x="14" y="44" width="232" height="68" rx="7" fill="#EEF2FF" stroke="#4338CA" />
        <text x="130" y="63" textAnchor="middle" fill="#312E81" fontSize="9.2" fontWeight="800">Ocurre cuando X_L = X_C (se cancelan):</text>
        <text x="130" y="84" textAnchor="middle" fill="#4338CA" fontSize="10.5" fontWeight="800" fontFamily="monospace">f0 = 1 / [ 2π · √(L · C) ]</text>
        <text x="130" y="102" textAnchor="middle" fill="#57534E" fontSize="8.3">Constante de tiempo inductiva: τ = L / R</text>

        <rect x="14" y="122" width="232" height="92" rx="7" fill="#FAF7F2" stroke="#D8D0C0" />
        <text x="22" y="141" fill="#1C1917" fontSize="8.8" fontWeight="800">• En RLC Serie en resonancia:</text>
        <text x="22" y="156" fill="#0F766E" fontSize="8.4" fontWeight="700">Impedancia mínima Z = R → Corriente MÁXIMA.</text>
        <text x="22" y="174" fill="#1C1917" fontSize="8.8" fontWeight="800">• Factor de Calidad Selectivo:</text>
        <text x="22" y="189" fill="#57534E" fontSize="8.4">Q = f0 / BW (Q alto = ancho de banda estrecho).</text>
        <text x="22" y="204" fill="#57534E" fontSize="8.2">• En CD (f=0): Inductor = Corto | Capacitor = Abierto.</text>
      </g>
    </svg>
  );
}

export function PowerSupplyBuckBoostDiagram() {
  return (
    <svg viewBox="0 0 820 245" className="w-full h-auto" role="img" aria-label="Etapas de una fuente lineal regulada y convertidores conmutados DC-DC Buck y Boost">
      <rect width="820" height="245" rx="14" fill="#FAF7F2" />

      {/* Arriba: 4 etapas de la Fuente Lineal */}
      <g transform="translate(12, 12)">
        <rect width="796" height="106" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <text x="16" y="22" fill="#1C1917" fontSize="10.2" fontWeight="800">
          LAS 4 ETAPAS SECUENCIALES DE UNA FUENTE DE ALIMENTACIÓN LINEAL REGULADA (CA → CD CONSTANTE)
        </text>

        {[
          { x: 16, num: '1. Transformador', sub1: 'V2/V1 = N2/N1', sub2: 'Aislamiento galvánico (60 Hz)', bg: '#F5F5F4', bd: '#57534E' },
          { x: 214, num: '2. Puente Rectificador', sub1: '4 Diodos (Onda Completa)', sub2: 'f_ripple = 2·f_red = 120 Hz', bg: '#FFFBEB', bd: '#D97706' },
          { x: 412, num: '3. Filtro Capacitivo', sub1: 'Capacitor en Paralelo', sub2: 'Aplana rizado V_rip = I/(f·C)', bg: '#F0FDFA', bd: '#0F766E' },
          { x: 610, num: '4. Regulador Tensión', sub1: 'Zener (Inversa) / 78XX', sub2: 'Voltaje CD fijo de salida', bg: '#EEF2FF', bd: '#4338CA' },
        ].map((st, i) => (
          <g key={i}>
            <rect x={st.x} y="34" width="170" height="58" rx="7" fill={st.bg} stroke={st.bd} strokeWidth="1.6" />
            <text x={st.x + 85} y="53" textAnchor="middle" fill="#1C1917" fontSize="9.3" fontWeight="800">{st.num}</text>
            <text x={st.x + 85} y="68" textAnchor="middle" fill="#0F766E" fontSize="8.5" fontWeight="800">{st.sub1}</text>
            <text x={st.x + 85} y="82" textAnchor="middle" fill="#57534E" fontSize="8">{st.sub2}</text>
            {i < 3 && (
              <line x1={st.x + 170} y1="63" x2={st.x + 198} y2="63" stroke="#1C1917" strokeWidth="2.5" />
            )}
          </g>
        ))}
      </g>

      {/* Abajo: Buck vs Boost y Diodos */}
      <g transform="translate(12, 128)">
        <rect width="796" height="105" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <text x="16" y="21" fill="#1C1917" fontSize="10" fontWeight="800">
          CONVERTIDORES CONMUTADOS DC-DC (ALTA EFICIENCIA 85%–95% CON PWM) Y UMBRALES DE DIODOS
        </text>

        <rect x="16" y="30" width="248" height="63" rx="7" fill="#F0FDFA" stroke="#0F766E" />
        <text x="140" y="48" textAnchor="middle" fill="#134E4A" fontSize="9.5" fontWeight="800">Convertidor BUCK (Reductor / Step-Down)</text>
        <text x="140" y="66" textAnchor="middle" fill="#0F766E" fontSize="10.2" fontWeight="800" fontFamily="monospace">Vout = D · Vin   (Vout &lt; Vin)</text>
        <text x="140" y="82" textAnchor="middle" fill="#57534E" fontSize="8">D = Ciclo de trabajo PWM (0 a 1)</text>

        <rect x="274" y="30" width="248" height="63" rx="7" fill="#FFFBEB" stroke="#D97706" />
        <text x="398" y="48" textAnchor="middle" fill="#92400E" fontSize="9.5" fontWeight="800">Convertidor BOOST (Elevador / Step-Up)</text>
        <text x="398" y="66" textAnchor="middle" fill="#B45309" fontSize="10.2" fontWeight="800" fontFamily="monospace">Vout = Vin / (1 - D)   (Vout &gt; Vin)</text>
        <text x="398" y="82" textAnchor="middle" fill="#57534E" fontSize="8">Almacena energía magnética en inductor L</text>

        <rect x="532" y="30" width="248" height="63" rx="7" fill="#FAF7F2" stroke="#D8D0C0" />
        <text x="656" y="47" textAnchor="middle" fill="#1C1917" fontSize="9" fontWeight="800">Barrera Directa de Diodos y Sensores:</text>
        <text x="656" y="63" textAnchor="middle" fill="#4338CA" fontSize="8.4" fontWeight="700">Silicio ≈ 0.7 V | Germanio ≈ 0.3 V | Schottky ≈ 0.2 V</text>
        <text x="656" y="79" textAnchor="middle" fill="#57534E" fontSize="8">NTC baja R con calor | LDR baja R con luz</text>
      </g>
    </svg>
  );
}

export function BjtMosfetOpAmpDiagram() {
  return (
    <svg viewBox="0 0 820 265" className="w-full h-auto" role="img" aria-label="Regiones del transistor BJT y configuraciones de Amplificadores Operacionales">
      <rect width="820" height="265" rx="14" fill="#FAF7F2" />

      {/* Panel Izquierdo: Regiones del BJT y MOSFET */}
      <g transform="translate(12, 12)">
        <rect width="380" height="241" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="360" height="24" rx="6" fill="#292524" />
        <text x="190" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="10.2" fontWeight="800">TRANSISTOR BJT (CONTROL POR Ib) Y MOSFET (Vgs)</text>

        <rect x="14" y="42" width="352" height="44" rx="6" fill="#FEE2E2" stroke="#DC2626" />
        <text x="22" y="58" fill="#991B1B" fontSize="9.2" fontWeight="800">1. Región de CORTE (Uniones BE y CB en Inversa):</text>
        <text x="22" y="74" fill="#7F1D1D" fontSize="8.3">Ib = 0, Ic ≈ 0, Vce = Vcc → Interruptor ABIERTO (Estado OFF).</text>

        <rect x="14" y="92" width="352" height="44" rx="6" fill="#FFFBEB" stroke="#D97706" />
        <text x="22" y="108" fill="#92400E" fontSize="9.2" fontWeight="800">2. Región ACTIVA DIRECTA (BE Directa 0.7V / CB Inversa):</text>
        <text x="22" y="124" fill="#57534E" fontSize="8.3">Ic = β · Ib → Opera como AMPLIFICADOR LINEAL analógico.</text>

        <rect x="14" y="142" width="352" height="44" rx="6" fill="#F0FDFA" stroke="#0F766E" />
        <text x="22" y="158" fill="#134E4A" fontSize="9.2" fontWeight="800">3. Región de SATURACIÓN (Ambas uniones en Directa):</text>
        <text x="22" y="174" fill="#115E59" fontSize="8.3" fontWeight="700">Vce(sat) ≈ 0.2 V → Interruptor CERRADO (Estado ON para cargas).</text>

        <rect x="14" y="192" width="352" height="39" rx="6" fill="#EEF2FF" stroke="#4338CA" />
        <text x="22" y="208" fill="#312E81" fontSize="8.8" fontWeight="800">• MOSFET de Enriquecimiento (Compuerta aislada SiO2):</text>
        <text x="22" y="222" fill="#57534E" fontSize="8.2">Corriente Ig ≈ 0 A • Conduce cuando Vgs &gt; Vth con Rds(on) de mΩ.</text>
      </g>

      {/* Panel Derecho: Topologías de Op-Amp */}
      <g transform="translate(402, 12)">
        <rect width="406" height="241" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="386" height="24" rx="6" fill="#0F766E" />
        <text x="203" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="10.2" fontWeight="800">AMPLIFICADORES OPERACIONALES (Zin → ∞, Zout → 0, V+ = V-)</text>

        <rect x="14" y="42" width="378" height="42" rx="6" fill="#FAF7F2" stroke="#D8D0C0" />
        <text x="22" y="58" fill="#1C1917" fontSize="9.2" fontWeight="800">1. Seguidor de Voltaje (Buffer):  Av = 1   (Vout = Vin)</text>
        <text x="22" y="73" fill="#57534E" fontSize="8.3">Acoplador de impedancias ideal (evita atenuar sensores de alta impedancia).</text>

        <rect x="14" y="90" width="378" height="44" rx="6" fill="#FFFBEB" stroke="#F59E0B" />
        <text x="22" y="106" fill="#92400E" fontSize="9.2" fontWeight="800" fontFamily="monospace">2. Amplificador Inversor:  Av = - Rf / Rin</text>
        <text x="22" y="122" fill="#57534E" fontSize="8.3">Señal entra por V- (con V+ a tierra virtual) • Invierte fase 180°.</text>

        <rect x="14" y="140" width="378" height="44" rx="6" fill="#F0FDFA" stroke="#0F766E" />
        <text x="22" y="156" fill="#134E4A" fontSize="9.2" fontWeight="800" fontFamily="monospace">3. Amplificador No Inversor:  Av = 1 + (Rf / Rin)</text>
        <text x="22" y="172" fill="#57534E" fontSize="8.3">Señal entra directo a V+ • No invierte fase y la ganancia siempre es ≥ 1.</text>

        <rect x="14" y="190" width="378" height="41" rx="6" fill="#EEF2FF" stroke="#4338CA" />
        <text x="22" y="206" fill="#312E81" fontSize="9" fontWeight="800">4. Amplificador de Instrumentación (3 Op-Amps):</text>
        <text x="22" y="221" fill="#4338CA" fontSize="8.3" fontWeight="700">Altísimo CMRR (&gt;100 dB): rechaza ruido común de 60 Hz en puentes y ECG.</text>
      </g>
    </svg>
  );
}

export function DigitalLogicFsmMooreMealyDiagram() {
  return (
    <svg viewBox="0 0 820 255" className="w-full h-auto" role="img" aria-label="Mapas de Karnaugh, Flip-Flops y Máquinas de Estado Moore vs Mealy">
      <rect width="820" height="255" rx="14" fill="#FAF7F2" />

      {/* Panel 1: Combinacionales y K-Map */}
      <g transform="translate(12, 12)">
        <rect width="260" height="231" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="240" height="24" rx="6" fill="#292524" />
        <text x="130" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="800">ÁLGEBRA BOOLEANA, K-MAP Y MUX</text>

        <rect x="12" y="42" width="236" height="44" rx="6" fill="#FFFBEB" stroke="#D97706" />
        <text x="20" y="58" fill="#92400E" fontSize="8.8" fontWeight="800">• Complemento a 2 (N bits con signo):</text>
        <text x="20" y="74" fill="#1C1917" fontSize="8.5" fontFamily="monospace" fontWeight="700">Rango: [-2^(N-1), +2^(N-1) - 1]</text>

        <rect x="12" y="92" width="236" height="44" rx="6" fill="#F0FDFA" stroke="#0F766E" />
        <text x="20" y="108" fill="#134E4A" fontSize="8.8" fontWeight="800">• Mapa de Karnaugh (Código Gray):</text>
        <text x="20" y="124" fill="#115E59" fontSize="8.3" fontWeight="700">Grupo de 2^k celdas elimina k variables.</text>

        <rect x="12" y="142" width="236" height="40" rx="6" fill="#EEF2FF" stroke="#4338CA" />
        <text x="20" y="157" fill="#312E81" fontSize="8.8" fontWeight="800">• Compuertas Universales (De Morgan):</text>
        <text x="20" y="172" fill="#57534E" fontSize="8.2">NAND y NOR construyen cualquier circuito.</text>

        <rect x="12" y="188" width="236" height="33" rx="6" fill="#FAF7F2" stroke="#D8D0C0" />
        <text x="20" y="208" fill="#1C1917" fontSize="8.5" fontWeight="700">• MUX 2^n : 1 usa n bits de selección.</text>
      </g>

      {/* Panel 2: Flip-Flops Síncronos por Flanco */}
      <g transform="translate(282, 12)">
        <rect width="256" height="231" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="236" height="24" rx="6" fill="#0F766E" />
        <text x="128" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="800">LATCH (NIVEL) vs. FLIP-FLOP (FLANCO)</text>

        <rect x="12" y="42" width="232" height="54" rx="6" fill="#F0FDFA" stroke="#0F766E" />
        <text x="20" y="58" fill="#134E4A" fontSize="9" fontWeight="800">1. Flip-Flop D (Data / Registros):</text>
        <text x="20" y="73" fill="#115E59" fontSize="8.5" fontFamily="monospace" fontWeight="700">Q(t+1) = D  (en flanco de reloj ↑)</text>
        <text x="20" y="87" fill="#57534E" fontSize="8">Base de registros de CPU y memoria estática.</text>

        <rect x="12" y="102" width="232" height="58" rx="6" fill="#FFFBEB" stroke="#D97706" />
        <text x="20" y="118" fill="#92400E" fontSize="9" fontWeight="800">2. Flip-Flop JK (Sin estado inválido):</text>
        <text x="20" y="133" fill="#57534E" fontSize="8.2">0,0 = Mantiene | 0,1 = Reset(0) | 1,0 = Set(1)</text>
        <text x="20" y="148" fill="#B45309" fontSize="8.4" fontWeight="800">J=1, K=1 → Conmuta / Invierte Q&apos;(t)</text>

        <rect x="12" y="166" width="232" height="54" rx="6" fill="#EEF2FF" stroke="#4338CA" />
        <text x="20" y="182" fill="#312E81" fontSize="9" fontWeight="800">3. Flip-Flop T (Toggle / Contadores):</text>
        <text x="20" y="197" fill="#4338CA" fontSize="8.3" fontWeight="700">Con T=1 divide la frecuencia del reloj ÷ 2.</text>
        <text x="20" y="211" fill="#57534E" fontSize="8">Un contador de N etapas cuenta 0 a 2^N - 1.</text>
      </g>

      {/* Panel 3: Máquina de Moore vs Mealy */}
      <g transform="translate(548, 12)">
        <rect width="260" height="231" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="240" height="24" rx="6" fill="#4338CA" />
        <text x="130" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="800">FSM: MÁQUINA DE MOORE vs. MEALY</text>

        <rect x="12" y="44" width="236" height="84" rx="7" fill="#F0FDFA" stroke="#0F766E" strokeWidth="1.5" />
        <text x="130" y="62" textAnchor="middle" fill="#134E4A" fontSize="9.5" fontWeight="800">MÁQUINA DE MOORE</text>
        <text x="130" y="79" textAnchor="middle" fill="#1C1917" fontSize="8.5">La Salida depende ÚNICAMENTE del:</text>
        <rect x="40" y="86" width="180" height="20" rx="4" fill="#0F766E" />
        <text x="130" y="100" textAnchor="middle" fill="#FFFFFF" fontSize="8.8" fontWeight="800">ESTADO ACTUAL</text>
        <text x="130" y="120" textAnchor="middle" fill="#57534E" fontSize="8">Salidas síncronas seguras frente a glitches.</text>

        <rect x="12" y="136" width="236" height="84" rx="7" fill="#FFFBEB" stroke="#D97706" strokeWidth="1.5" />
        <text x="130" y="154" textAnchor="middle" fill="#92400E" fontSize="9.5" fontWeight="800">MÁQUINA DE MEALY</text>
        <text x="130" y="171" textAnchor="middle" fill="#1C1917" fontSize="8.5">La Salida depende simultáneamente de:</text>
        <rect x="24" y="178" width="212" height="20" rx="4" fill="#B45309" />
        <text x="130" y="192" textAnchor="middle" fill="#FFFFFF" fontSize="8.6" fontWeight="800">ESTADO ACTUAL + ENTRADA ACTUAL</text>
        <text x="130" y="212" textAnchor="middle" fill="#57534E" fontSize="8">Reacciona en el mismo ciclo (menos estados).</text>
      </g>
    </svg>
  );
}

export function CpuVonNeumannHarvardDiagram() {
  return (
    <svg viewBox="0 0 820 255" className="w-full h-auto" role="img" aria-label="Registros internos de CPU, ISA vs Microarquitectura y Von Neumann vs Harvard">
      <rect width="820" height="255" rx="14" fill="#FAF7F2" />

      {/* Panel 1: Registros Internos de la CPU e ISA vs Microarquitectura */}
      <g transform="translate(12, 12)">
        <rect width="405" height="231" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="385" height="24" rx="6" fill="#0F766E" />
        <text x="202" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="10.2" fontWeight="800">ORGANIZACIÓN INTERNA DE CPU E ISA vs. MICROARQUITECTURA</text>

        <rect x="14" y="42" width="182" height="106" rx="7" fill="#F0FDFA" stroke="#0F766E" />
        <text x="105" y="59" textAnchor="middle" fill="#134E4A" fontSize="9.2" fontWeight="800">Unidades de Ejecución:</text>
        <text x="22" y="76" fill="#1C1917" fontSize="8.4">• <tspan fontWeight="800">ALU:</tspan> Enteros y Lógica + Flags</text>
        <text x="22" y="92" fill="#1C1917" fontSize="8.4">• <tspan fontWeight="800">FPU:</tspan> Coma flotante IEEE 754</text>
        <text x="22" y="108" fill="#1C1917" fontSize="8.4">• <tspan fontWeight="800">UC:</tspan> Decodifica Opcode y control</text>
        <text x="22" y="124" fill="#1C1917" fontSize="8.4">• <tspan fontWeight="800">AGU:</tspan> Calcula direcciones efectivas</text>

        <rect x="206" y="42" width="185" height="106" rx="7" fill="#FFFBEB" stroke="#D97706" />
        <text x="298" y="59" textAnchor="middle" fill="#92400E" fontSize="9.2" fontWeight="800">Registros Dedicados:</text>
        <text x="214" y="75" fill="#1C1917" fontSize="8.3">• <tspan fontWeight="800">PC:</tspan> Dir. de siguiente instrucción</text>
        <text x="214" y="90" fill="#1C1917" fontSize="8.3">• <tspan fontWeight="800">IR:</tspan> Instrucción actual en ejecución</text>
        <text x="214" y="105" fill="#1C1917" fontSize="8.3">• <tspan fontWeight="800">MAR:</tspan> Dirección hacia Bus Dir.</text>
        <text x="214" y="120" fill="#1C1917" fontSize="8.3">• <tspan fontWeight="800">MDR:</tspan> Dato hacia/desde Bus Datos</text>
        <text x="214" y="135" fill="#1C1917" fontSize="8.3">• <tspan fontWeight="800">SP:</tspan> Puntero al tope de Pila (Stack)</text>

        <rect x="14" y="156" width="377" height="65" rx="7" fill="#EEF2FF" stroke="#4338CA" />
        <text x="22" y="173" fill="#312E81" fontSize="8.8" fontWeight="800">• ISA (Repertorio de instrucciones, tipos, registros visibles) vs. Microarquitectura (Caché, Pipeline).</text>
        <text x="22" y="189" fill="#4338CA" fontSize="8.5" fontWeight="700">• RISC (ARM/RISC-V): Instrucciones fijas 1 ciclo, Load-Store | CISC (x86): Longitud variable.</text>
        <text x="22" y="205" fill="#57534E" fontSize="8.3">• Modo de direccionamiento más rápido: Inmediato (la constante viaja dentro de la instrucción).</text>
      </g>

      {/* Panel 2: Von Neumann vs Harvard */}
      <g transform="translate(427, 12)">
        <rect width="381" height="231" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="361" height="24" rx="6" fill="#B45309" />
        <text x="190" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="10.2" fontWeight="800">VON NEUMANN vs. HARVARD Y BUSES DEL SISTEMA</text>

        {/* Von Neumann */}
        <rect x="14" y="42" width="353" height="68" rx="7" fill="#FFFBEB" stroke="#F59E0B" />
        <text x="22" y="59" fill="#92400E" fontSize="9.2" fontWeight="800">1. Arquitectura Von Neumann (Memoria y Bus Único):</text>
        <rect x="22" y="68" width="76" height="30" rx="5" fill="#292524" />
        <text x="60" y="87" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="800">CPU</text>
        <line x1="98" y1="83" x2="210" y2="83" stroke="#DC2626" strokeWidth="3.5" />
        <text x="154" y="76" textAnchor="middle" fill="#991B1B" fontSize="8" fontWeight="800">1 Bus Compartido</text>
        <rect x="210" y="68" width="145" height="30" rx="5" fill="#FEF3C7" stroke="#B45309" strokeWidth="1.5" />
        <text x="282" y="87" textAnchor="middle" fill="#78350F" fontSize="8.5" fontWeight="800">Memoria (Código + Datos)</text>

        {/* Harvard */}
        <rect x="14" y="118" width="353" height="103" rx="7" fill="#F0FDFA" stroke="#0F766E" />
        <text x="22" y="135" fill="#134E4A" fontSize="9.2" fontWeight="800">2. Arquitectura Harvard (Memorias y Buses Físicamente Separados):</text>
        <rect x="22" y="148" width="82" height="36" rx="5" fill="#CCFBF1" stroke="#0F766E" strokeWidth="1.5" />
        <text x="63" y="164" textAnchor="middle" fill="#134E4A" fontSize="8.3" fontWeight="800">Mem. Programa</text>
        <text x="63" y="176" textAnchor="middle" fill="#0F766E" fontSize="7.5">(Instrucciones)</text>

        <line x1="104" y1="166" x2="152" y2="166" stroke="#0F766E" strokeWidth="2.5" />
        <rect x="152" y="148" width="74" height="36" rx="5" fill="#134E4A" />
        <text x="189" y="170" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="800">CPU / DSP</text>
        <line x1="226" y1="166" x2="274" y2="166" stroke="#4338CA" strokeWidth="2.5" />

        <rect x="274" y="148" width="82" height="36" rx="5" fill="#EEF2FF" stroke="#4338CA" strokeWidth="1.5" />
        <text x="315" y="164" textAnchor="middle" fill="#312E81" fontSize="8.3" fontWeight="800">Mem. Datos</text>
        <text x="315" y="176" textAnchor="middle" fill="#4338CA" fontSize="7.5">(RAM Variables)</text>

        <text x="190" y="202" textAnchor="middle" fill="#115E59" fontSize="8.3" fontWeight="700">Acceso simultáneo a instrucción y dato en 1 ciclo • Bus Dir. N líneas → 2^N posiciones</text>
        <text x="190" y="214" textAnchor="middle" fill="#57534E" fontSize="8">PCIe: Enlaces serie punto a punto (lanes x1..x16) | AMBA (AXI/AHB/APB): Bus interno SoC ARM</text>
      </g>
    </svg>
  );
}

export function MemoryHierarchyPipelineRaidDiagram() {
  return (
    <svg viewBox="0 0 820 265" className="w-full h-auto" role="img" aria-label="Jerarquía de memoria caché, MMU TLB, RAID y Pipeline con riesgos RAW">
      <rect width="820" height="265" rx="14" fill="#FAF7F2" />

      {/* Panel 1: Pirámide de Memoria + MMU/TLB */}
      <g transform="translate(12, 12)">
        <rect width="265" height="241" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="245" height="24" rx="6" fill="#0F766E" />
        <text x="132" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="800">JERARQUÍA DE MEMORIA Y MMU / TLB</text>

        {[
          { y: 40, w: 110, label: 'Registros CPU (<1 ciclo)', bg: '#FEF3C7', bd: '#B45309' },
          { y: 64, w: 145, label: 'Caché L1 (L1i / L1d ~2 ciclos)', bg: '#CCFBF1', bd: '#0F766E' },
          { y: 88, w: 180, label: 'Caché L2 → L3 (Compartida)', bg: '#E0E7FF', bd: '#4338CA' },
          { y: 112, w: 215, label: 'RAM Principal (DDR4 1.2V < DDR3 1.5V)', bg: '#FCE7F3', bd: '#BE185D' },
          { y: 136, w: 241, label: 'Almacenamiento (SSD NVMe / HDD)', bg: '#F5F5F4', bd: '#57534E' },
        ].map((lv, i) => (
          <g key={i}>
            <rect x={132 - lv.w / 2} y={lv.y} width={lv.w} height="20" rx="4" fill={lv.bg} stroke={lv.bd} strokeWidth="1.3" />
            <text x="132" y={lv.y + 13.5} textAnchor="middle" fill="#1C1917" fontSize="8.1" fontWeight="800">{lv.label}</text>
          </g>
        ))}

        <rect x="12" y="164" width="241" height="67" rx="6" fill="#FAF7F2" stroke="#D8D0C0" />
        <text x="132" y="180" textAnchor="middle" fill="#134E4A" fontSize="8.8" fontWeight="800">Traducción Memoria Virtual (MMU + TLB):</text>
        <text x="132" y="195" textAnchor="middle" fill="#1C1917" fontSize="8.2">Dir. Virtual → <tspan fontWeight="800" fill="#0F766E">TLB (Caché rápida)</tspan> → Dir. Física</text>
        <text x="132" y="210" textAnchor="middle" fill="#B45309" fontSize="8.2" fontWeight="700">Si hay TLB Miss → Consulta Tabla de Páginas en RAM</text>
        <text x="132" y="223" textAnchor="middle" fill="#57534E" fontSize="7.8">Si no está en RAM → Page Fault (carga de Swap/Disco)</text>
      </g>

      {/* Panel 2: Pipeline 5 Etapas y Riesgos */}
      <g transform="translate(287, 12)">
        <rect width="265" height="241" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="245" height="24" rx="6" fill="#4338CA" />
        <text x="132" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="800">PIPELINE (5 ETAPAS) Y RIESGOS</text>

        {/* 5 etapas IF ID EX MEM WB */}
        {[
          { x: 14, t: '1. IF', s: 'Fetch' },
          { x: 62, t: '2. ID', s: 'Decode' },
          { x: 110, t: '3. EX', s: 'Execute' },
          { x: 158, t: '4. MEM', s: 'Memory' },
          { x: 206, t: '5. WB', s: 'WriteB' },
        ].map((st, i) => (
          <g key={i}>
            <rect x={st.x} y="42" width="44" height="36" rx="5" fill="#EEF2FF" stroke="#4338CA" strokeWidth="1.5" />
            <text x={st.x + 22} y="57" textAnchor="middle" fill="#312E81" fontSize="8.8" fontWeight="800">{st.t}</text>
            <text x={st.x + 22} y="70" textAnchor="middle" fill="#4338CA" fontSize="7.5">{st.s}</text>
          </g>
        ))}

        <rect x="12" y="86" width="241" height="52" rx="6" fill="#FFFBEB" stroke="#D97706" />
        <text x="20" y="102" fill="#92400E" fontSize="8.8" fontWeight="800">• Riesgo de Datos Verdadero — RAW:</text>
        <text x="20" y="117" fill="#1C1917" fontSize="8.2">Read After Write (leer registro aún no escrito).</text>
        <text x="20" y="131" fill="#0F766E" fontSize="8.3" fontWeight="800">✓ Solución: Forwarding / Bypassing (o Stall).</text>

        <rect x="12" y="144" width="241" height="44" rx="6" fill="#F0FDFA" stroke="#0F766E" />
        <text x="20" y="160" fill="#134E4A" fontSize="8.8" fontWeight="800">• Riesgos Falsos — WAR y WAW:</text>
        <text x="20" y="176" fill="#115E59" fontSize="8.3" fontWeight="700">✓ Solución: Register Renaming (Renombramiento).</text>

        <rect x="12" y="194" width="241" height="37" rx="6" fill="#FAF7F2" stroke="#D8D0C0" />
        <text x="20" y="210" fill="#1C1917" fontSize="8.4" fontWeight="800">• DMA: Transfiere E/S ↔ RAM sin usar la CPU.</text>
        <text x="20" y="223" fill="#57534E" fontSize="8">• DVFS: Potencia ∝ C · V² · f (ahorro cuadrático).</text>
      </g>

      {/* Panel 3: Niveles RAID 0, 1 y 5 */}
      <g transform="translate(562, 12)">
        <rect width="246" height="241" rx="10" fill="#FFFFFF" stroke="#D8D0C0" strokeWidth="1.5" />
        <rect x="10" y="10" width="226" height="24" rx="6" fill="#B45309" />
        <text x="123" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="800">ARREGLOS DE DISCOS RAID</text>

        <rect x="12" y="42" width="222" height="58" rx="6" fill="#FEE2E2" stroke="#DC2626" />
        <text x="20" y="58" fill="#991B1B" fontSize="9.2" fontWeight="800">RAID 0 — Striping (Mín. 2 discos):</text>
        <text x="20" y="73" fill="#7F1D1D" fontSize="8.2">• Máxima velocidad y 100% capacidad.</text>
        <text x="20" y="88" fill="#DC2626" fontSize="8.3" fontWeight="800">• CERO tolerancia a fallos (si cae 1 pierde todo).</text>

        <rect x="12" y="107" width="222" height="58" rx="6" fill="#FFFBEB" stroke="#D97706" />
        <text x="20" y="123" fill="#92400E" fontSize="9.2" fontWeight="800">RAID 1 — Mirroring / Espejo (2 discos):</text>
        <text x="20" y="138" fill="#57534E" fontSize="8.2">• Copia exacta en ambos discos (alta disp.).</text>
        <text x="20" y="153" fill="#B45309" fontSize="8.3" fontWeight="700">• Tolera fallo de 1 disco • Capacidad útil = 50%.</text>

        <rect x="12" y="172" width="222" height="58" rx="6" fill="#F0FDFA" stroke="#0F766E" />
        <text x="20" y="188" fill="#134E4A" fontSize="9.2" fontWeight="800">RAID 5 — Paridad Distribuida (≥3 discos):</text>
        <text x="20" y="203" fill="#57534E" fontSize="8.2">• Datos + Paridad XOR repartida en todos.</text>
        <text x="20" y="218" fill="#0F766E" fontSize="8.3" fontWeight="800">• Tolera fallo de 1 disco • Útil = (N - 1) discos.</text>
      </g>
    </svg>
  );
}

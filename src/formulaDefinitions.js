/**
 * CATÁLOGO EXHAUSTIVO DE FÓRMULAS FORMATEADAS Y GLOSARIO DE VARIABLES — EGEL ICOMPU
 * ----------------------------------------------------------------------------------
 * Contiene la representación matemática estructurada (fracciones visuales, subíndices,
 * superíndices, raíces, integrales y sumatorias), el significado exacto de cada variable
 * con sus unidades en el Sistema Internacional, y la guía de identificación ("Match")
 * para asociar inmediatamente cada fórmula con los reactivos del examen CENEVAL.
 */

export const FORMULA_CATALOG_HW = {
  '1.1': [
    {
      id: 'hw11_nyquist_adc',
      label: 'Teorema de Muestreo de Nyquist-Shannon y Resolución de un ADC',
      code: 'fs ≥ 2 · fmax   |   Niveles = 2^N   |   LSB = Vref / 2^N   |   Factor de mejora = 2^(ΔN)',
      category: 'Digitalización y Adquisición (ADC)',
      matchTitles: [
        'Teorema de Muestreo de Nyquist-Shannon',
        'Cuantización y Resolución de un Convertidor Analógico-Digital (ADC)',
      ],
      equations: [
        {
          title: 'Condición de Nyquist (Sin Aliasing)',
          lhs: 'f_s',
          op: '≥',
          rhs: '2 · f_max',
        },
        {
          title: 'Frecuencia de Nyquist',
          lhs: 'f_Nyquist',
          op: '=',
          fraction: { num: 'f_s', den: '2' },
        },
        {
          title: 'Niveles Discretos de Cuantización',
          lhs: 'Niveles',
          op: '=',
          rhs: '2^N',
        },
        {
          title: 'Resolución o Peso del Bit Menos Significativo (LSB)',
          lhs: 'LSB',
          op: '=',
          fraction: { num: 'V_ref', den: '2^N' },
        },
        {
          title: 'Factor de Mejora al Aumentar Bits',
          lhs: 'Mejora',
          op: '=',
          rhs: '2^(ΔN) = 2^(N_nuevo - N_anterior)',
        },
      ],
      variables: [
        {
          symbol: 'f_s',
          name: 'Frecuencia de muestreo (Sampling Rate)',
          meaning: 'Cantidad de muestras por segundo que toma el convertidor ADC de la señal continua.',
          unit: 'Hz o muestras/s (SPS)',
        },
        {
          symbol: 'f_max',
          name: 'Frecuencia máxima de la señal analógica',
          meaning: 'Componente armónica de mayor frecuencia presente en la señal de entrada que se desea digitalizar.',
          unit: 'Hz (Hertz)',
        },
        {
          symbol: 'f_Nyquist',
          name: 'Frecuencia o límite de Nyquist',
          meaning: 'Frecuencia máxima absoluta (fs / 2) que puede reconstruirse sin solapamiento espectral (aliasing).',
          unit: 'Hz (Hertz)',
        },
        {
          symbol: 'N',
          name: 'Resolución en bits del ADC',
          meaning: 'Número de bits que entrega la palabra digital del convertidor (ej. 8, 10, 12 o 16 bits).',
          unit: 'Bits (adimensional)',
        },
        {
          symbol: 'V_ref',
          name: 'Voltaje de referencia (Rango de escala completa)',
          meaning: 'Tensión máxima analógica que el ADC puede medir (ej. 3.3 V o 5 V). Si el rango es bilateral, Vref = Vmax - Vmin.',
          unit: 'Voltios [V]',
        },
        {
          symbol: 'LSB',
          name: 'Valor del Bit Menos Significativo (Tamaño de escalón)',
          meaning: 'Cambio mínimo de voltaje analógico detectable entre dos códigos digitales consecutivos.',
          unit: 'Voltios [V] o milivoltios [mV]',
        },
        {
          symbol: 'ΔN',
          name: 'Incremento de bits del ADC',
          meaning: 'Diferencia de bits al actualizar un ADC (ej. pasar de 8 a 12 bits → ΔN = 4 → mejora 2⁴ = 16 veces).',
          unit: 'Bits',
        },
      ],
      examMatch:
        'Haz match cuando la pregunta mencione "muestreo sin aliasing" (divide fs entre 2 para hallar fmax, o multiplica fmax por 2 para hallar fs), "resolución en mV de un ADC de 8 bits con 0–5 V" (5 / 256 = 19.53 mV) o "cuántas veces mejora un ADC al pasar de 10 a 12 bits" (2² = 4 veces; de 8 a 12 bits = 2⁴ = 16 veces).',
    },
    {
      id: 'hw11_ohm_power_conductance',
      label: 'Ley de Ohm, Disipación de Potencia Eléctrica (Efecto Joule) y Conductancia',
      code: 'V = I · R   |   I = V / R   |   R = V / I   |   P = V · I = I² · R = V² / R   |   G = 1 / R',
      category: 'Leyes Fundamentales CD',
      matchTitles: [
        'Magnitudes Eléctricas Fundamentales',
        'Ley de Ohm y Disipación de Potencia (Efecto Joule)',
      ],
      equations: [
        {
          title: 'Ley de Ohm (Tensión, Corriente y Resistencia)',
          lhs: 'V = I · R',
          op: '⇔',
          fraction: { num: 'V', den: 'R' },
          lhsPrefix: 'I =',
        },
        {
          title: 'Despeje de Resistencia Limitadora',
          lhs: 'R',
          op: '=',
          fraction: { num: 'V_fuente - V_carga', den: 'I' },
        },
        {
          title: 'Potencia Eléctrica Disipada (Efecto Joule)',
          lhs: 'P',
          op: '=',
          rhs: 'V · I = I² · R =',
          trailingFraction: { num: 'V²', den: 'R' },
        },
        {
          title: 'Conductancia Eléctrica (Inverso de la Resistencia)',
          lhs: 'G',
          op: '=',
          fraction: { num: '1', den: 'R' },
        },
      ],
      variables: [
        {
          symbol: 'V',
          name: 'Voltaje, Tensión o Diferencia de Potencial',
          meaning: 'Energía por unidad de carga aplicada entre las terminales del componente (se mide con voltímetro en paralelo).',
          unit: 'Voltios [V]',
        },
        {
          symbol: 'I',
          name: 'Corriente o Intensidad Eléctrica',
          meaning: 'Flujo de carga eléctrica por unidad de tiempo que atraviesa al componente (se mide con amperímetro en serie).',
          unit: 'Amperios [A] o miliamperios [mA]',
        },
        {
          symbol: 'R',
          name: 'Resistencia Eléctrica',
          meaning: 'Oposición física del material al paso de la corriente eléctrica.',
          unit: 'Ohmios [Ω] o kiloohmios [kΩ]',
        },
        {
          symbol: 'P',
          name: 'Potencia Eléctrica Disipada',
          meaning: 'Energía transformada en calor por unidad de tiempo en el resistor.',
          unit: 'Watts o Vatios [W]',
        },
        {
          symbol: 'G',
          name: 'Conductancia Eléctrica',
          meaning: 'Facilidad que ofrece un material al paso de la corriente eléctrica (recíproco exacto de R).',
          unit: 'Siemens [S] (1 S = 1 Ω⁻¹)',
        },
      ],
      examMatch:
        'Haz match en problemas de cálculo de corriente (ej. 10 Ω y 20 Ω en serie con 30 V → I = 30 / 30 = 1 A), resistencia para LED (caída de 3 V a 10 mA → R = 3 V / 0.01 A = 300 Ω), potencia en resistores en paralelo (P = V²/R o I²·R) y unidad de la conductancia G = 1/R (Siemens [S]).',
    },
    {
      id: 'hw11_series_parallel_kirchhoff',
      label: 'Leyes de Kirchhoff (LCK / LVK) y Reducción de Resistencias en Serie y Paralelo',
      code: '∑ I_entran = ∑ I_salen (LCK)   |   ∑ V_malla = 0 (LVK)   |   R_serie = R1 + R2   |   R_paralelo = (R1 · R2) / (R1 + R2)',
      category: 'Análisis de Redes y Kirchhoff',
      matchTitles: [
        'Reducción en Serie y en Paralelo',
        'Leyes de Kirchhoff (LCK y LVK)',
        'Análisis Nodal vs. Análisis de Mallas',
      ],
      equations: [
        {
          title: '1ª Ley de Kirchhoff — Corrientes en un Nodo (LCK / KCL)',
          lhs: '∑ I_entran',
          op: '=',
          rhs: '∑ I_salen   ⇔   ∑ I_nodo = 0',
        },
        {
          title: '2ª Ley de Kirchhoff — Voltajes en un Lazo Cerrado (LVK / KVL)',
          lhs: '∑ V_malla',
          op: '=',
          rhs: '0',
        },
        {
          title: 'Resistencia Equivalente en Serie (Misma Corriente)',
          lhs: 'R_eq(serie)',
          op: '=',
          rhs: 'R_1 + R_2 + ⋯ + R_n',
        },
        {
          title: 'Resistencia Equivalente en Paralelo (Mismo Voltaje)',
          lhs: 'R_eq(paralelo)',
          op: '=',
          fraction: { num: 'R_1 · R_2', den: 'R_1 + R_2' },
        },
      ],
      variables: [
        {
          symbol: 'I_entran, I_salen',
          name: 'Corrientes concurrentes en un nodo',
          meaning: 'Por conservación de la carga eléctrica, toda corriente que llega a una unión de cables debe salir de ella.',
          unit: 'Amperios [A]',
        },
        {
          symbol: 'V_malla',
          name: 'Elevaciones y caídas de tensión en una trayectoria cerrada',
          meaning: 'Por conservación de la energía, la suma algebraica de voltajes al recorrer un lazo completo es cero.',
          unit: 'Voltios [V]',
        },
        {
          symbol: 'R_eq(serie)',
          name: 'Resistencia total o equivalente en conexión serie',
          meaning: 'Suma directa de los resistores conectados uno tras otro en un mismo camino sin bifurcaciones.',
          unit: 'Ohmios [Ω]',
        },
        {
          symbol: 'R_eq(paralelo)',
          name: 'Resistencia total o equivalente en conexión paralelo',
          meaning: 'Inverso de la suma de conductancias (1/Req = 1/R1 + 1/R2). Siempre es menor que la menor resistencia conectada.',
          unit: 'Ohmios [Ω]',
        },
        {
          symbol: 'N - 1',
          name: 'Número de ecuaciones en Análisis Nodal',
          meaning: 'Si un circuito tiene N nodos, se elige 1 nodo de referencia (Tierra) y se plantean N - 1 ecuaciones con LCK.',
          unit: 'Ecuaciones',
        },
      ],
      examMatch:
        'Recuerda: LCK (KCL) habla de CORRIENTES en un NODO (conservación de carga); LVK (KVL) habla de TENSIONES en una MALLA o lazo cerrado (conservación de energía). Si dos resistores iguales R están en paralelo, Req = R / 2.',
    },
    {
      id: 'hw11_dividers_wheatstone',
      label: 'Divisor de Voltaje, Divisor de Corriente y Puente de Wheatstone en Equilibrio',
      code: 'Vx = Vin · [ Rx / (R1 + R2) ]   |   I1 = Itotal · [ R2 / (R1 + R2) ]   |   Rx = R3 · (R2 / R1)',
      category: 'Divisores e Instrumentación',
      matchTitles: [
        'Puente de Wheatstone y Medición Kelvin a 4 Hilos',
      ],
      equations: [
        {
          title: 'Divisor de Voltaje (Resistores en Serie)',
          lhs: 'V_x',
          op: '=',
          rhs: 'V_in ·',
          trailingFraction: { num: 'R_x', den: 'R_1 + R_2' },
        },
        {
          title: 'Divisor de Corriente (2 Resistores en Paralelo)',
          lhs: 'I_1',
          op: '=',
          rhs: 'I_total ·',
          trailingFraction: { num: 'R_2', den: 'R_1 + R_2' },
        },
        {
          title: 'Puente de Wheatstone Equilibrado (V_G = 0 V)',
          lhs: 'R_x',
          op: '=',
          rhs: 'R_3 ·',
          trailingFraction: { num: 'R_2', den: 'R_1' },
        },
      ],
      variables: [
        {
          symbol: 'V_x',
          name: 'Voltaje en la resistencia de interés Rx',
          meaning: 'Fracción del voltaje de entrada que cae sobre el resistor Rx dentro de una cadena en serie.',
          unit: 'Voltios [V]',
        },
        {
          symbol: 'V_in',
          name: 'Voltaje total de alimentación',
          meaning: 'Tensión total aplicada a los extremos de la rama serie.',
          unit: 'Voltios [V]',
        },
        {
          symbol: 'R_x',
          name: 'Resistencia donde se mide V_x (o resistencia incógnita en Wheatstone)',
          meaning: 'En el divisor de voltaje va en el numerador; en el puente de Wheatstone es el sensor (galga/RTD) a determinar.',
          unit: 'Ohmios [Ω]',
        },
        {
          symbol: 'I_1, I_total',
          name: 'Corriente de la rama 1 y Corriente total entrante',
          meaning: '¡Ojo en el divisor de corriente! Para hallar I1 en la rama R1, en el numerador se multiplica por la resistencia OPUESTA (R2).',
          unit: 'Amperios [A]',
        },
        {
          symbol: 'R_1, R_2, R_3',
          name: 'Resistencias de referencia calibradas del Puente de Wheatstone',
          meaning: 'R1 y R2 forman la rama de relación fija; R3 es el potenciómetro patrón ajustado hasta que el galvanómetro marca 0 V.',
          unit: 'Ohmios [Ω]',
        },
      ],
      examMatch:
        'En divisor de voltaje: el numerador es la MISMA resistencia donde mides el voltaje (ej. R1=2 kΩ, R2=3 kΩ con 10 V → V_R2 = 10 · 3/(2+3) = 6 V). En divisor de corriente de 2 ramas: el numerador es la resistencia CONTRARIA.',
    },
    {
      id: 'hw11_time_constants_rc_rl',
      label: 'Constantes de Tiempo Transitorias (τ) y Energía en Capacitores e Inductores',
      code: 'τ (RC) = R · C   |   τ (RL) = L / R   |   i_C(t) = C · (dv/dt)   |   v_L(t) = L · (di/dt)   |   E_C = ½·C·V²   |   E_L = ½·L·I²',
      category: 'Régimen Transitorio RC y RL',
      matchTitles: [
        'Capacitor (Condensador) y Constante de Tiempo RC',
        'Inductor (Bobina) y Constante de Tiempo RL',
      ],
      equations: [
        {
          title: 'Constante de Tiempo Capacitiva (Circuito RC)',
          lhs: 'τ_RC',
          op: '=',
          rhs: 'R · C',
        },
        {
          title: 'Constante de Tiempo Inductiva (Circuito RL)',
          lhs: 'τ_RL',
          op: '=',
          fraction: { num: 'L', den: 'R' },
        },
        {
          title: 'Ley Dinámica del Capacitor y del Inductor',
          lhs: 'i_C = C ·',
          op: '',
          fraction: { num: 'dV', den: 'dt' },
          rhsSuffix: '   ;   v_L = L · (dI / dt)',
        },
        {
          title: 'Energía Almacenada (Campo Eléctrico vs. Magnético)',
          lhs: 'E_C = ½ · C · V²',
          op: '|',
          rhs: 'E_L = ½ · L · I²',
        },
      ],
      variables: [
        {
          symbol: 'τ (Tau)',
          name: 'Constante de tiempo del circuito',
          meaning: 'Tiempo que tarda el capacitor o inductor en alcanzar el 63.2% de su carga final (en 5τ alcanza >99.3%, estado estacionario).',
          unit: 'Segundos [s] o milisegundos [ms]',
        },
        {
          symbol: 'R',
          name: 'Resistencia equivalente de Thevenin vista por C o L',
          meaning: 'Limita la corriente de carga/descarga. En RC multiplica a C; en RL divide a L.',
          unit: 'Ohmios [Ω]',
        },
        {
          symbol: 'C',
          name: 'Capacitancia del condensador',
          meaning: 'Capacidad de almacenar carga en un campo eléctrico (Q = C·V). En CD estacionaria se comporta como circuito abierto.',
          unit: 'Faradios [F], μF o nF',
        },
        {
          symbol: 'L',
          name: 'Inductancia de la bobina',
          meaning: 'Oposición a cambios bruscos de corriente almacenando energía en un campo magnético. En CD estacionaria es un cortocircuito.',
          unit: 'Henrios [H] o milihenrios [mH]',
        },
        {
          symbol: 'E_C, E_L',
          name: 'Energía almacenada en el elemento reactivo',
          meaning: 'En un oscilador LC ideal, la energía se intercambia continuamente entre E_C (capacitor) y E_L (inductor).',
          unit: 'Joules [J]',
        },
      ],
      examMatch:
        '¡No confundas τ_RC con τ_RL! En RC se MULTIPLICAN (τ = R·C: si R se duplica y C cae a la mitad, τ no cambia). En RL se DIVIDEN (τ = L/R: si L = 10 mH = 0.01 H y R = 10 Ω, entonces τ = 0.01 / 10 = 0.001 s = 1 ms).',
    },
    {
      id: 'hw11_phasors_filters_resonance',
      label: 'Impedancia Compleja, Frecuencia de Corte RC (-3 dB), Resonancia RLC y Factor Q',
      code: 'Z_C = 1 / (jωC)   |   Z_L = jωL   |   fc = 1 / (2π · R · C)   |   f0 = 1 / (2π · √(L · C))   |   Q = f0 / BW',
      category: 'Filtros Pasivos y Resonancia CA',
      matchTitles: [
        'Impedancia Compleja en el Dominio Fasorial (CA)',
        'Filtros Pasivos RC Pasa-Bajas y Pasa-Altas',
        'Resonancia en Circuitos RLC, Factor de Calidad Q y Osciladores LC',
      ],
      equations: [
        {
          title: 'Impedancia Compleja del Capacitor e Inductor',
          lhs: 'Z_C',
          op: '=',
          fraction: { num: '1', den: 'j · ω · C' },
          rhsSuffix: '   ;   Z_L = j · ω · L',
        },
        {
          title: 'Frecuencia de Corte (-3 dB) en Filtro Pasivo RC',
          lhs: 'f_c',
          op: '=',
          fraction: { num: '1', den: '2π · R · C' },
        },
        {
          title: 'Frecuencia de Resonancia en Circuito RLC (X_L = X_C)',
          lhs: 'f_0',
          op: '=',
          fraction: { num: '1', den: '2π · √(L · C)' },
        },
        {
          title: 'Factor de Calidad (Selectividad de Resonancia)',
          lhs: 'Q',
          op: '=',
          fraction: { num: 'f_0', den: 'BW' },
        },
      ],
      variables: [
        {
          symbol: 'Z_C, Z_L',
          name: 'Impedancias fasoriales capacitiva e inductiva',
          meaning: 'Oposición compleja en CA. A frecuencia 0 Hz (CD), |Z_C| → ∞ (abierto) y |Z_L| = 0 (corto). A alta frecuencia, |Z_C| → 0.',
          unit: 'Ohmios [Ω]',
        },
        {
          symbol: 'ω',
          name: 'Frecuencia angular',
          meaning: 'Velocidad angular de la señal senoidal: ω = 2π·f. j = √(-1) representa un desfase de 90°.',
          unit: 'rad/s',
        },
        {
          symbol: 'f_c',
          name: 'Frecuencia de corte o de media potencia (-3 dB)',
          meaning: 'Frecuencia donde X_C = R, la ganancia cae al 70.7% (1/√2) y la potencia cae a la mitad. Si C o R aumentan, fc disminuye.',
          unit: 'Hertz [Hz]',
        },
        {
          symbol: 'f_0',
          name: 'Frecuencia de resonancia natural RLC',
          meaning: 'Frecuencia exacta donde la reactancia inductiva iguala a la capacitiva (X_L = X_C) anulándose entre sí (en RLC serie Z = R mínima).',
          unit: 'Hertz [Hz]',
        },
        {
          symbol: 'Q',
          name: 'Factor de Calidad del circuito resonante',
          meaning: 'Mide qué tan agudo o selectivo es el filtro resonante: razón entre la frecuencia central f0 y el ancho de banda BW.',
          unit: 'Adimensional',
        },
        {
          symbol: 'BW',
          name: 'Ancho de Banda (Bandwidth a -3 dB)',
          meaning: 'Rango de frecuencias (f_superior - f_inferior) que el circuito resonante deja pasar con atenuación menor a 3 dB.',
          unit: 'Hertz [Hz]',
        },
      ],
      examMatch:
        'Tres preguntas clásicas de examen: 1) Impedancia fasorial de un capacitor = 1/(jωC); 2) Frecuencia de resonancia RLC serie = 1/(2π·√(L·C)); 3) Factor de calidad Q = f0 / BW. Si en un filtro RC aumentas C, como C está en el denominador, fc DISMINUYE.',
    },
    {
      id: 'hw11_transformer_rectifier_buck_boost',
      label: 'Transformador Ideal, Frecuencia de Rizado y Convertidores Conmutados Buck / Boost',
      code: 'V2 / V1 = N2 / N1 = I1 / I2   |   f_ripple(onda completa) = 2 · f_red   |   Buck: Vout = D · Vin   |   Boost: Vout = Vin / (1 - D)',
      category: 'Fuentes de Poder y Electrónica de Potencia',
      matchTitles: [
        'Rectificadores de Media Onda y Onda Completa',
        'Etapas de una Fuente de Alimentación Lineal Regulada',
        'Convertidores Conmutados DC-DC (Buck y Boost) y Disipación Térmica',
      ],
      equations: [
        {
          title: 'Relación de Transformación Ideal (Voltaje y Espiras)',
          lhs: 'V_2',
          op: '=',
          rhs: 'V_1 ·',
          trailingFraction: { num: 'N_2', den: 'N_1' },
        },
        {
          title: 'Frecuencia y Voltaje de Rizado (Puente de Onda Completa)',
          lhs: 'f_ripple = 2 · f_red',
          op: '|',
          rhs: 'V_ripple ≈',
          trailingFraction: { num: 'I_carga', den: 'f_ripple · C' },
        },
        {
          title: 'Convertidor DC-DC Buck (Reductor / Step-Down)',
          lhs: 'V_out',
          op: '=',
          rhs: 'D · V_in',
        },
        {
          title: 'Convertidor DC-DC Boost (Elevador / Step-Up)',
          lhs: 'V_out',
          op: '=',
          fraction: { num: 'V_in', den: '1 - D' },
        },
      ],
      variables: [
        {
          symbol: 'V_1, V_2',
          name: 'Voltajes en devanado Primario (entrada) y Secundario (salida)',
          meaning: 'Tensiones eficaces (RMS) de corriente alterna en las bobinas del transformador.',
          unit: 'Voltios CA [V_rms]',
        },
        {
          symbol: 'N_1, N_2',
          name: 'Número de vueltas (espiras) en Primario y Secundario',
          meaning: 'Si N1:N2 = 2:1 (reductor), el voltaje secundario V2 es la mitad del primario V1 (ej. 240 V → 120 V).',
          unit: 'Espiras / Vueltas',
        },
        {
          symbol: 'f_red, f_ripple',
          name: 'Frecuencia de línea CA y Frecuencia del rizado rectificado',
          meaning: 'En media onda (1 diodo), f_ripple = f_red (60 Hz). En puente de onda completa (4 diodos), f_ripple = 2·f_red (120 Hz).',
          unit: 'Hertz [Hz]',
        },
        {
          symbol: 'C',
          name: 'Capacitor electrolítico de filtrado',
          meaning: 'Al estar en el denominador de V_ripple, aumentar la capacitancia C reduce drásticamente el rizado de la fuente.',
          unit: 'Faradios [F] o μF',
        },
        {
          symbol: 'D',
          name: 'Ciclo de Trabajo (Duty Cycle) de conmutación PWM',
          meaning: 'Proporción del periodo en que el transistor conmutador está cerrado (0 ≤ D < 1; ej. 50% → D = 0.5).',
          unit: 'Adimensional (0 a 1) o %',
        },
        {
          symbol: 'V_in, V_out',
          name: 'Voltaje CD de entrada y Voltaje CD regulado de salida',
          meaning: 'En Buck siempre V_out < V_in. En Boost siempre V_out > V_in.',
          unit: 'Voltios CD [V]',
        },
      ],
      examMatch:
        'Si te dan N1:N2 = 2:1 con V1 = 240 V → V2 = 240 · (1/2) = 120 V. Si preguntan qué hace un convertidor Buck → reduce la tensión DC. Si preguntan cómo bajar el rizado → aumentar el capacitor C o usar puente de onda completa (duplica f_ripple a 2·f_red).',
    },
    {
      id: 'hw11_bjt_opamp_gains',
      label: 'Transistor BJT y Ganancia de Amplificadores Operacionales (Seguidor, Inversor y No Inversor)',
      code: 'Ic = β · Ib   |   Buffer: Av = 1   |   Inversor: Av = - Rf / Rin   |   No Inversor: Av = 1 + (Rf / Rin)   |   SR = (dVout / dt)_max',
      category: 'Transistores y Amplificadores Operacionales',
      matchTitles: [
        'Regiones de Operación del Transistor BJT (NPN / PNP)',
        'Modelo del Amplificador Operacional Ideal vs. Real',
        'Configuraciones Clásicas (Seguidor, Inversor y No Inversor)',
        'Amplificador de Instrumentación',
      ],
      equations: [
        {
          title: 'Amplificación de Corriente en BJT (Región Activa)',
          lhs: 'I_C',
          op: '=',
          rhs: 'β · I_B   ;   V_CE(sat) ≈ 0.2 V',
        },
        {
          title: 'Ganancia del Amplificador Inversor (Desfase 180°)',
          lhs: 'A_v',
          op: '=',
          fraction: { num: 'V_out', den: 'V_in' },
          rhsSuffix: '=',
          trailingFraction: { num: '- R_f', den: 'R_in' },
        },
        {
          title: 'Ganancia del Amplificador No Inversor (Sin Desfase)',
          lhs: 'A_v',
          op: '=',
          rhs: '1 +',
          trailingFraction: { num: 'R_f', den: 'R_in' },
        },
        {
          title: 'Seguidor de Tensión (Buffer) y Slew Rate Real',
          lhs: 'A_v(buffer) = 1',
          op: '|',
          rhs: 'SR =',
          trailingFraction: { num: 'ΔV_out(máx)', den: 'Δt' },
        },
      ],
      variables: [
        {
          symbol: 'I_C, I_B, β',
          name: 'Corriente de Colector, Corriente de Base y Ganancia β (hFE)',
          meaning: 'En región activa I_C = β·I_B. En corte I_C = 0 A (abierto). En saturación el BJT actúa como interruptor cerrado con V_CE(sat) ≈ 0.2 V.',
          unit: 'Amperios [A] / β adimensional',
        },
        {
          symbol: 'A_v',
          name: 'Ganancia de voltaje en lazo cerrado',
          meaning: 'Relación entre la tensión de salida y la de entrada (V_out / V_in). Si es negativa indica inversión de fase de 180°.',
          unit: 'Adimensional (V/V)',
        },
        {
          symbol: 'R_f',
          name: 'Resistencia de realimentación (Feedback Resistor)',
          meaning: 'Resistor conectado entre la salida del Op-Amp (V_out) y la entrada inversora (V-) para establecer realimentación negativa.',
          unit: 'Ohmios [Ω] o kΩ',
        },
        {
          symbol: 'R_in',
          name: 'Resistencia de entrada a la terminal inversora',
          meaning: 'Si R_f = R_in en un amplificador inversor, la ganancia es exactamente A_v = -1.',
          unit: 'Ohmios [Ω] o kΩ',
        },
        {
          symbol: 'SR',
          name: 'Slew Rate (Velocidad de respuesta máxima)',
          meaning: 'Parámetro de un Op-Amp REAL (no ideal) que indica la tasa máxima de cambio del voltaje de salida en el tiempo.',
          unit: 'V/μs (Voltios por microsegundo)',
        },
      ],
      examMatch:
        'En examen: 1) Seguidor (Buffer) tiene ganancia Av = 1, Zin → ∞ y Zout → 0 (aísla fuente de carga); 2) Inversor con Rf = Rin tiene ganancia Av = -1; 3) No inversor siempre tiene ganancia ≥ 1 (1 + Rf/Rin); 4) Slew Rate es la limitación del Op-Amp REAL.',
    },
  ],

  '1.2': [
    {
      id: 'hw12_boole_demorgan_kmap',
      label: 'Teoremas de De Morgan, Álgebra de Boole y Simplificación en Mapas de Karnaugh',
      code: "(A · B)' = A' + B'   |   (A + B)' = A' · B'   |   A·B + A·B' = A   |   Grupo de 2^k celdas elimina k variables",
      category: 'Diseño Lógico Combinacional',
      matchTitles: [
        'Teoremas de De Morgan y Compuertas Universales',
        'Simplificación con Mapas de Karnaugh (K-Map)',
        'Bloques Combinacionales Esenciales',
      ],
      equations: [
        {
          title: '1ª y 2ª Ley de De Morgan (NAND y NOR)',
          lhs: '(A · B)\' = A\' + B\'',
          op: '|',
          rhs: '(A + B)\' = A\' · B\'',
        },
        {
          title: 'Factorización y Complemento Booleano',
          lhs: 'A · B + A · B\'',
          op: '=',
          rhs: 'A · (B + B\') = A · 1 = A',
        },
        {
          title: 'Eliminación de Variables en Mapa de Karnaugh',
          lhs: 'Variables_eliminadas',
          op: '=',
          rhs: 'k = log_2(Celdas_agrupadas)',
        },
        {
          title: 'Literales Restantes en el Término Producto',
          lhs: 'Literales_término',
          op: '=',
          rhs: 'N_variables - k',
        },
      ],
      variables: [
        {
          symbol: 'A, B, A\', B\'',
          name: 'Variables booleanas y sus complementos (NOT)',
          meaning: 'Toman valores lógicos 0 o 1. El apóstrofo (\') o barra superior indica negación lógica.',
          unit: 'Bit lógico (0 o 1)',
        },
        {
          symbol: '2^k',
          name: 'Tamaño del grupo de celdas adyacentes en Karnaugh',
          meaning: 'Cantidad de unos agrupados en potencia de 2 (1, 2, 4, 8 o 16 celdas contiguas).',
          unit: 'Celdas',
        },
        {
          symbol: 'k',
          name: 'Número de variables eliminadas por el grupo',
          meaning: 'Ej. agrupar 8 celdas (8 = 2³) elimina k = 3 variables.',
          unit: 'Variables',
        },
        {
          symbol: 'N_variables',
          name: 'Total de variables de entrada de la función booleana',
          meaning: 'En un mapa de 4 variables (A,B,C,D), si agrupas 8 celdas (k=3), quedan 4 - 3 = 1 sola literal en el término.',
          unit: 'Variables / Literales',
        },
      ],
      examMatch:
        'Si el reactivo dice: "En un mapa de Karnaugh de 4 variables se agrupan 8 celdas adyacentes", calcula 8 = 2³ → se eliminan k = 3 variables y queda 4 - 3 = 1 literal.',
    },
    {
      id: 'hw12_twos_complement_mux_adders',
      label: 'Rango en Complemento a 2, Multiplexores (2^n:1), Sumador Completo y Flip-Flops',
      code: 'Rango C2 = [ -2^(N-1) , +2^(N-1) - 1 ]   |   Entradas MUX = 2^n   |   S = A ⊕ B ⊕ Cin   |   Estados Contador = 2^N',
      category: 'Aritmética Binaria y Secuenciales',
      matchTitles: [
        'Representación en Complemento a 2',
        'Tipos de Flip-Flops (D, T, JK y SR)',
        'Registros y Contadores',
      ],
      equations: [
        {
          title: 'Valor Negativo y Rango en Complemento a 2 (N bits)',
          lhs: '-X_C2 = (~X) + 1',
          op: '|',
          rhs: 'Rango: -2^(N-1)  a  +2^(N-1) - 1',
        },
        {
          title: 'Relación de Entradas y Selección en Multiplexor (MUX)',
          lhs: 'Entradas_MUX',
          op: '=',
          rhs: '2^n   ⇔   n = log_2(Entradas)',
        },
        {
          title: 'Sumador Completo (Full Adder de 1 etapa)',
          lhs: 'S = A ⊕ B ⊕ C_in',
          op: '|',
          rhs: 'C_out = (A · B) + C_in · (A ⊕ B)',
        },
        {
          title: 'División de Frecuencia en Contador / Flip-Flops Tipo T',
          lhs: 'f_salida',
          op: '=',
          fraction: { num: 'f_reloj', den: '2^N' },
        },
      ],
      variables: [
        {
          symbol: 'N',
          name: 'Número de bits de la palabra o contador',
          meaning: 'En 8 bits, el rango en Complemento a 2 va de -2⁷ = -128 hasta +2⁷ - 1 = +127. En un contador de N Flip-Flops hay 2^N estados.',
          unit: 'Bits / Etapas',
        },
        {
          symbol: '~X',
          name: 'Complemento a 1 (Inversión bit a bit)',
          meaning: 'Cambiar todos los 0 por 1 y todos los 1 por 0 antes de sumar 1 para obtener el Complemento a 2.',
          unit: 'Palabra binaria',
        },
        {
          symbol: 'n',
          name: 'Número de líneas de selección del Multiplexor',
          meaning: 'Bits de control (S0, S1, S2...) que eligen cuál de las 2^n entradas pasa a la salida única (ej. n=3 líneas → MUX 8 a 1).',
          unit: 'Bits de selección',
        },
        {
          symbol: 'A, B, C_in, C_out',
          name: 'Bits sumandos y Acarreos de entrada/salida',
          meaning: 'El Full Adder suma 3 bits (A, B y el acarreo previo C_in) entregando Suma S y acarreo C_out hacia la siguiente etapa.',
          unit: 'Bits (0 o 1)',
        },
      ],
      examMatch:
        'Para hallar el Complemento a 2 de -45 en 8 bits: +45 = 00101101 → invierte bits (11010010) → suma 1 = 11010011. Si piden seleccionar 1 de 8 entradas con 3 líneas de selección → Multiplexor 8 a 1.',
    },
    {
      id: 'hw12_addressing_bus_capacity',
      label: 'Capacidad de Direccionamiento Físico por Bus de Direcciones y Bus de Datos',
      code: 'Posiciones = 2^N   |   Capacidad Total = 2^N × M (bits) = 2^N × (M / 8) Bytes',
      category: 'Arquitectura y Buses de Memoria',
      matchTitles: [
        'Buses del Sistema (Datos, Direcciones y Control)',
        'Arquitecturas RISC vs. CISC y 32 vs. 64 bits',
      ],
      equations: [
        {
          title: 'Número Máximo de Posiciones (Celdas) Direccionables',
          lhs: 'Posiciones',
          op: '=',
          rhs: '2^N',
        },
        {
          title: 'Capacidad Total de Memoria Física',
          lhs: 'Capacidad_total',
          op: '=',
          rhs: '2^N × M',
        },
      ],
      variables: [
        {
          symbol: 'N',
          name: 'Ancho del Bus de Direcciones (Address Bus)',
          meaning: 'Cantidad de líneas físicas de dirección que salen de la CPU. Determina cuántas celdas únicas puede direccionar (ej. N = 16 bits → 2¹⁶ = 65,536 posiciones = 64 KB).',
          unit: 'Bits (líneas de dirección)',
        },
        {
          symbol: 'M',
          name: 'Ancho del Bus de Datos (Data Bus / Tamaño de palabra)',
          meaning: 'Cantidad de bits almacenados en cada posición o transferidos simultáneamente en un ciclo (ej. M = 8 bits = 1 Byte).',
          unit: 'Bits o Bytes (1 Byte = 8 bits)',
        },
        {
          symbol: 'Posiciones',
          name: 'Espacio de direccionamiento directo',
          meaning: 'En 16 bits = 64 K posiciones; en 20 bits = 1 M (1,048,576); en 32 bits = 4 G (4 GB); en 64 bits = 16 Exabytes.',
          unit: 'Direcciones únicas',
        },
      ],
      examMatch:
        '¡Trampa frecuente! Si la pregunta da "bus de direcciones de 16 bits y bus de datos de 8 bits" y pregunta cuántas POSICIONES direcciona, solo usa el bus de direcciones: 2¹⁶ = 65,536 posiciones (64 KB). No uses 2⁸.',
    },
    {
      id: 'hw12_cpu_performance_amat_cmos',
      label: 'Ecuación de Rendimiento de CPU, Tiempo Medio de Acceso a Memoria (AMAT), Potencia CMOS y RAID',
      code: 'T_CPU = (IC × CPI) / f_clk   |   AMAT = T_hit + (Tasa_miss × Penalización_miss)   |   P_dinámica ∝ C · V² · f   |   Capacidad RAID 5 = (N - 1) discos',
      category: 'Rendimiento de CPU, Caché y Almacenamiento',
      matchTitles: [
        'Funcionamiento y Mapeo de la Memoria Caché',
        'Pipelining (Segmentación del Camino de Datos)',
        'Multicore, Hyper-Threading (SMT), SMP, DVFS y Benchmarks',
        'Arreglos Redundantes de Discos Independientes (RAID)',
      ],
      equations: [
        {
          title: 'Tiempo de Ejecución de un Programa en CPU',
          lhs: 'T_CPU',
          op: '=',
          rhs: 'IC × CPI × T_clk =',
          trailingFraction: { num: 'IC × CPI', den: 'f_clk' },
        },
        {
          title: 'Tiempo Promedio de Acceso a Memoria (AMAT)',
          lhs: 'AMAT',
          op: '=',
          rhs: 'T_Hit + (Tasa_Miss × T_Penalización)',
        },
        {
          title: 'Potencia Dinámica de un Procesador CMOS (Regulación DVFS)',
          lhs: 'P_dinámica',
          op: '∝',
          rhs: 'C_carga · V_dd² · f_clk',
        },
        {
          title: 'Capacidad Útil de Almacenamiento en Niveles RAID',
          lhs: 'RAID 0: N · D',
          op: '|',
          rhs: 'RAID 1: (N / 2) · D   |   RAID 5: (N - 1) · D',
        },
      ],
      variables: [
        {
          symbol: 'T_CPU',
          name: 'Tiempo total de ejecución de CPU',
          meaning: 'Segundos reales que tarda el procesador en ejecutar un programa completo.',
          unit: 'Segundos [s]',
        },
        {
          symbol: 'IC',
          name: 'Recuento de Instrucciones (Instruction Count)',
          meaning: 'Número total de instrucciones máquina ejecutadas dinámicamente por el programa (depende del algoritmo, compilador e ISA).',
          unit: 'Instrucciones',
        },
        {
          symbol: 'CPI',
          name: 'Ciclos Promedio por Instrucción (Cycles Per Instruction)',
          meaning: 'Promedio de pulsos de reloj que toma cada instrucción. El Pipelining ideal busca acercar el CPI a 1.',
          unit: 'Ciclos / Instrucción',
        },
        {
          symbol: 'f_clk, T_clk',
          name: 'Frecuencia de reloj y Periodo de reloj (T_clk = 1 / f_clk)',
          meaning: 'Velocidad de oscilación del reloj del procesador, limitada por el tiempo de propagación crítico de las etapas.',
          unit: 'Hz (MHz / GHz) y segundos [ns]',
        },
        {
          symbol: 'T_Hit, Tasa_Miss, T_Penalización',
          name: 'Parámetros de desempeño de la Memoria Caché',
          meaning: 'T_Hit = tiempo de lectura en caché (ej. L1); Tasa_Miss = fracción de accesos que fallan (1 - Tasa_Hit); T_Penalización = tiempo extra para traer el bloque desde RAM.',
          unit: 'Nanosegundos [ns] o ciclos',
        },
        {
          symbol: 'V_dd, f_clk (en DVFS)',
          name: 'Voltaje de alimentación del núcleo y frecuencia de operación',
          meaning: 'En DVFS, bajar el voltaje V_dd reduce el consumo de potencia de forma CUADRÁTICA (V²) y bajar la frecuencia lo reduce linealmente.',
          unit: 'Voltios [V] y Hertz [Hz]',
        },
        {
          symbol: 'N, D (en RAID)',
          name: 'Número de discos (N) y Capacidad por disco (D)',
          meaning: 'RAID 0 aprovecha el 100% (sin tolerancia a fallos); RAID 1 espeja al 50%; RAID 5 dedica el equivalente a 1 disco para paridad distribuida (N - 1 útiles).',
          unit: 'Discos / Terabytes [TB]',
        },
      ],
      examMatch:
        'Recuerda: el Pipeline mejora el rendimiento reduciendo el CPI efectivo (mayor throughput por solapamiento), y la técnica que reduce dinámicamente V y f para ahorrar potencia P ∝ C·V²·f se llama DVFS.',
    },
  ],

  '1.3': [
    {
      id: 'hw13_pwm_duty_cycle',
      label: 'Modulación por Ancho de Pulso (PWM): Ciclo de Trabajo (Duty Cycle) y Voltaje Promedio',
      code: 'D (%) = (T_on / T_total) × 100   |   T_total = T_on + T_off = 1 / f_PWM   |   V_prom = (D / 100) · V_max',
      category: 'Periféricos de Control y Potencia',
      matchTitles: [
        'Temporizadores (Timers), Modo Input Capture y Modulación PWM',
      ],
      equations: [
        {
          title: 'Ciclo de Trabajo (Duty Cycle) en Porcentaje',
          lhs: 'D (%)',
          op: '=',
          fraction: { num: 'T_on', den: 'T_total' },
          rhsSuffix: '× 100',
        },
        {
          title: 'Periodo Total y Frecuencia de la Señal PWM',
          lhs: 'T_total',
          op: '=',
          rhs: 'T_on + T_off =',
          trailingFraction: { num: '1', den: 'f_PWM' },
        },
        {
          title: 'Voltaje Promedio Efectivo Entregado a la Carga',
          lhs: 'V_prom',
          op: '=',
          fraction: { num: 'T_on', den: 'T_total' },
          rhsSuffix: '· V_CC = D · V_CC',
        },
      ],
      variables: [
        {
          symbol: 'D',
          name: 'Ciclo de Trabajo (Duty Cycle)',
          meaning: 'Proporción o porcentaje del periodo en que la señal digital cuadrada permanece en estado ALTO (1 lógico).',
          unit: 'Porcentaje [%] o fracción (0 a 1)',
        },
        {
          symbol: 'T_on',
          name: 'Tiempo en alto (Ancho de pulso activo)',
          meaning: 'Duración dentro de cada ciclo durante la cual el pin PWM entrega tensión máxima V_CC.',
          unit: 'Segundos [ms o μs]',
        },
        {
          symbol: 'T_off',
          name: 'Tiempo en bajo (Inactivo)',
          meaning: 'Duración dentro de cada ciclo durante la cual el pin PWM está en 0 V.',
          unit: 'Segundos [ms o μs]',
        },
        {
          symbol: 'T_total, f_PWM',
          name: 'Periodo total y Frecuencia de la portadora PWM',
          meaning: 'En PWM el periodo T_total se mantiene constante mientras solo se varía la anchura T_on.',
          unit: 'Segundos [s] y Hertz [Hz]',
        },
        {
          symbol: 'V_prom, V_CC',
          name: 'Voltaje promedio efectivo y Voltaje lógico alto del MCU',
          meaning: 'Regula la velocidad de motores DC o brillo de LEDs (ej. con V_CC = 5 V y D = 60%, el motor recibe V_prom = 3 V).',
          unit: 'Voltios [V]',
        },
      ],
      examMatch:
        'Si la pregunta define "Proporción de tiempo que la señal está en nivel alto respecto al periodo" o pide "controlar potencia/velocidad de un motor DC desde una salida digital", la respuesta siempre es Duty Cycle / PWM.',
    },
    {
      id: 'hw13_timers_prescaler_adc',
      label: 'Temporizadores (Timers) con Preescalador y Conversión de Lectura ADC en Microcontroladores',
      code: 'f_timer = f_CPU / Prescaler   |   T_overflow = [ Prescaler × (2^N - Precarga) ] / f_CPU   |   V_in = [ Lectura_ADC / (2^N - 1) ] · V_ref',
      category: 'Timers, Reloj de MCU y Conversión ADC',
      matchTitles: [
        'Microcontrolador AVR (ATmega328P / Arduino UNO) y ARM Cortex-M',
        'Polling (Encuesta) vs. Interrupciones Externas y Diseño de ISR',
      ],
      equations: [
        {
          title: 'Frecuencia de Incremento del Timer (Con Divisor Prescaler)',
          lhs: 'f_timer',
          op: '=',
          fraction: { num: 'f_CPU', den: 'Prescaler' },
        },
        {
          title: 'Tiempo hasta el Desbordamiento (Overflow) de un Timer de N bits',
          lhs: 'T_overflow',
          op: '=',
          fraction: { num: 'Prescaler × (2^N - Valor_precarga)', den: 'f_CPU' },
        },
        {
          title: 'Reconstrucción del Voltaje Medido a partir del Código Digital ADC',
          lhs: 'V_medido',
          op: '=',
          fraction: { num: 'Código_ADC', den: '2^N - 1' },
          rhsSuffix: '· V_ref',
        },
      ],
      variables: [
        {
          symbol: 'f_CPU',
          name: 'Frecuencia del reloj principal del microcontrolador',
          meaning: 'Velocidad del oscilador de cristal o interno (en Arduino UNO / ATmega328P el valor típico estándar es f_CPU = 16 MHz).',
          unit: 'Hertz [MHz]',
        },
        {
          symbol: 'Prescaler',
          name: 'Factor divisor de frecuencia del temporizador',
          meaning: 'Divisor por hardware (1, 8, 64, 256, 1024) que desacelera el reloj f_CPU para poder medir intervalos de tiempo más largos.',
          unit: 'Adimensional',
        },
        {
          symbol: 'N',
          name: 'Anchura en bits del contador Timer o del ADC',
          meaning: 'Un Timer de 8 bits cuenta hasta 2⁸ = 256 (0 a 255); uno de 16 bits cuenta hasta 2¹⁶ = 65,536. El ADC del ATmega328P es de N = 10 bits (0 a 1023).',
          unit: 'Bits',
        },
        {
          symbol: 'Valor_precarga',
          name: 'Valor inicial cargado en el registro del contador (TCNTx)',
          meaning: 'Permite ajustar el número exacto de cuentas restantes antes del desbordamiento para lograr un periodo exacto.',
          unit: 'Cuentas',
        },
        {
          symbol: 'Código_ADC',
          name: 'Valor entero entregado por el registro del ADC',
          meaning: 'Entero entre 0 y 2^N - 1 proporcional a la tensión analógica presente en el pin.',
          unit: 'Cuentas digitales',
        },
      ],
      examMatch:
        'Dato obligatorio para examen: La frecuencia de reloj típica del Arduino UNO (ATmega328P) es 16 MHz, y para medir periodos o anchos de pulso exactos con el hardware se usa el Timer en modo Input Capture.',
    },
    {
      id: 'hw13_ultrasonic_i2c_rtos_rms',
      label: 'Distancia con Sensor Ultrasónico (HC-SR04), Direccionamiento I2C y Planificabilidad RTOS (RMS)',
      code: 'd = (v_sonido · t_eco) / 2   |   Esclavos I2C (7 bits) = 2^7 - 1 = 127   |   U = ∑ (C_i / T_i) ≤ n · (2^(1/n) - 1)',
      category: 'Sensores Embebidos, Buses y Tiempo Real',
      matchTitles: [
        'Tiempo Real Duro (Hard Real-Time) vs. Tiempo Real Blando (Soft Real-Time)',
        'Bus I2C (Inter-Integrated Circuit)',
        'Integración de Sensores Clásicos y Ethernet Embebido',
      ],
      equations: [
        {
          title: 'Distancia por Tiempo de Vuelo Acústico (Sensor Ultrasónico HC-SR04)',
          lhs: 'd',
          op: '=',
          fraction: { num: 'v_sonido × t_eco', den: '2' },
        },
        {
          title: 'Capacidad de Direccionamiento de Esclavos en Bus I2C (7 bits)',
          lhs: 'N_esclavos',
          op: '=',
          rhs: '2^7 - 1 = 128 - 1 = 127 dispositivos',
        },
        {
          title: 'Factor de Utilización de CPU y Cota de Liu-Layland en RTOS (RMS)',
          lhs: 'U',
          op: '=',
          rhs: '∑ (C_i / T_i) ≤ n · (2^(1/n) - 1)',
        },
      ],
      variables: [
        {
          symbol: 'd',
          name: 'Distancia desde el sensor hasta el obstáculo o nivel de líquido',
          meaning: 'Se divide entre 2 porque la onda ultrasónica recorre el camino de IDA y de VUELTA (eco).',
          unit: 'Metros [m] o centímetros [cm]',
        },
        {
          symbol: 'v_sonido',
          name: 'Velocidad de propagación del sonido en el aire',
          meaning: 'A 20 °C equivale aproximadamente a 343 m/s (o 0.0343 cm/μs).',
          unit: 'm/s o cm/μs',
        },
        {
          symbol: 't_eco',
          name: 'Tiempo de vuelo de ida y vuelta del pulso ultrasónico',
          meaning: 'Duración del pulso en alto en el pin Echo medida por el Timer del microcontrolador.',
          unit: 'Segundos [s] o microsegundos [μs]',
        },
        {
          symbol: 'C_i, T_i',
          name: 'Tiempo de cómputo (WCET) y Periodo de la tarea i en el RTOS',
          meaning: 'C_i es el tiempo máximo que tarda la tarea i en ejecutarse; T_i es cada cuánto tiempo se repite (su deadline).',
          unit: 'Milisegundos [ms]',
        },
        {
          symbol: 'U, n',
          name: 'Fracción de uso de CPU (U) y Número de tareas periódicas (n)',
          meaning: 'Para que un sistema de Tiempo Real Duro garantice cumplir todos sus deadlines bajo Rate Monotonic, U no debe rebasar la cota.',
          unit: 'Adimensional (U ≤ 1)',
        },
      ],
      examMatch:
        'En preguntas de I2C: usa 2 líneas (SDA y SCL) y con direcciones de 7 bits permite conectar teóricamente hasta 127 dispositivos esclavos. En ultrasonido (HC-SR04 o nivel de tanque): mide el tiempo de vuelo del eco y divide entre 2.',
    },
  ],

  '1.4': [
    {
      id: 'hw14_closed_loop_pid_transfer',
      label: 'Señal de Error, Ecuación del Controlador PID y Función de Transferencia en Lazo Cerrado',
      code: 'e(t) = SP(t) - PV(t)   |   u(t) = Kp·e(t) + Ki·∫e(t)dt + Kd·[de(t)/dt]   |   T(s) = Y(s)/R(s) = G(s) / [ 1 + G(s)·H(s) ]',
      category: 'Control Automático y Lazo Cerrado',
      matchTitles: [
        'Lazo Abierto vs. Lazo Cerrado (Retroalimentado)',
        'Sistemas LTI (Lineales e Invariantes en el Tiempo) y Estabilidad BIBO',
        'Acciones del Controlador PID (Proporcional, Integral y Derivativo)',
      ],
      equations: [
        {
          title: 'Señal de Error Instantáneo en el Comparador',
          lhs: 'e(t)',
          op: '=',
          rhs: 'SP(t) - PV(t) = r(t) - y(t)',
        },
        {
          title: 'Ley de Control PID en el Dominio del Tiempo',
          lhs: 'u(t)',
          op: '=',
          rhs: 'K_p · e(t) + K_i · ∫ e(t) dt + K_d ·',
          trailingFraction: { num: 'de(t)', den: 'dt' },
        },
        {
          title: 'Función de Transferencia de Lazo Cerrado (Retroalimentación Negativa)',
          lhs: 'T(s)',
          op: '=',
          fraction: { num: 'Y(s)', den: 'R(s)' },
          rhsSuffix: '=',
          trailingFraction: { num: 'G(s)', den: '1 + G(s) · H(s)' },
        },
        {
          title: 'Condición de Estabilidad BIBO en el Plano Complejo s',
          lhs: 'Re(p_i)',
          op: '<',
          rhs: '0   (Todos los polos en el semiplano izquierdo)',
        },
      ],
      variables: [
        {
          symbol: 'e(t)',
          name: 'Señal de error de control',
          meaning: 'Diferencia entre el valor deseado y el valor real medido. El objetivo del lazo cerrado es llevar e(t) → 0.',
          unit: 'Misma unidad de la variable física',
        },
        {
          symbol: 'SP(t) o r(t)',
          name: 'Setpoint (Valor de referencia o consigna)',
          meaning: 'Valor objetivo deseado al que debe llegar el proceso (ej. 180 °C en un horno o 1500 RPM).',
          unit: 'Unidad de proceso (°C, bar, RPM, m)',
        },
        {
          symbol: 'PV(t) o y(t)',
          name: 'Variable de Proceso (Process Variable)',
          meaning: 'Valor real actual de la salida de la planta medido y retroalimentado por el sensor/transmisor.',
          unit: 'Unidad de proceso',
        },
        {
          symbol: 'u(t)',
          name: 'Señal de control o Variable Manipulada (MV)',
          meaning: 'Orden enviada por el controlador hacia el actuador (ej. porcentaje de apertura de válvula o ciclo PWM).',
          unit: 'V, mA o % (0–100%)',
        },
        {
          symbol: 'K_p',
          name: 'Ganancia Proporcional',
          meaning: 'Multiplica al error actual. Acelera la respuesta, pero un Kp muy alto provoca oscilaciones e inestabilidad, y por sí solo deja error estacionario (offset).',
          unit: 'Adimensional o %/unidad',
        },
        {
          symbol: 'K_i',
          name: 'Ganancia Integral (K_i = K_p / T_i)',
          meaning: 'Multiplica a la integral (suma acumulada) del error. Su función clave es ELIMINAR el error en estado estacionario (offset = 0).',
          unit: 's⁻¹',
        },
        {
          symbol: 'K_d',
          name: 'Ganancia Derivativa (K_d = K_p · T_d)',
          meaning: 'Multiplica a la derivada (tasa de cambio) del error. Anticipa cambios rápidos y amortigua el sobreimpulso, pero AMPLIFICA el ruido de alta frecuencia.',
          unit: 'Segundos [s]',
        },
        {
          symbol: 'G(s), H(s)',
          name: 'Función de transferencia directa (Planta+Controlador) y del Sensor',
          meaning: 'Modelos en el dominio de Laplace s de los bloques del sistema LTI. Las raíces de 1 + G(s)H(s) = 0 son los polos del lazo cerrado.',
          unit: 'Dominio complejo s',
        },
      ],
      examMatch:
        'Asociación directa para examen: 1) Acción Integral (Ki) → corrige el error sostenido / offset en estado estacionario; 2) Acción Derivativa (Kd) → reacciona a cambios rápidos pero aumenta sensibilidad al ruido; 3) Kp muy alto → tendencia a oscilación e inestabilidad; 4) Anti-windup → evita saturación del integrador cuando el actuador llega a su tope.',
    },
    {
      id: 'hw14_hysteresis_4_20ma_vfd_motor',
      label: 'Banda de Histéresis On-Off, Lazo Industrial 4–20 mA y Velocidad Síncrona de Motor CA (VFD)',
      code: 'H = U_apagado - U_encendido   |   I (mA) = 4 + 16 × [ (PV - PV_min) / (PV_max - PV_min) ]   |   n_s (RPM) = (120 · f) / P',
      category: 'Instrumentación Industrial y Actuadores',
      matchTitles: [
        'Control Todo o Nada (On-Off) con Histéresis (Banda Diferencial)',
        'Estándar de Transmisión en Corriente 4-20 mA y Diagramas P&ID',
        'Actuadores: Válvulas, Motores Paso a Paso y Variadores de Frecuencia (VFD)',
      ],
      equations: [
        {
          title: 'Ventana de Histéresis (Banda Muerta en Control On-Off)',
          lhs: 'ΔH',
          op: '=',
          rhs: 'Umbral_superior - Umbral_inferior',
        },
        {
          title: 'Escalamiento Lineal del Lazo de Corriente Industrial 4–20 mA',
          lhs: 'I_salida',
          op: '=',
          rhs: '4 mA + 16 mA ×',
          trailingFraction: { num: 'PV - PV_mín', den: 'PV_máx - PV_mín' },
        },
        {
          title: 'Velocidad Síncrona de un Motor Trifásico CA (Controlado por VFD)',
          lhs: 'n_s',
          op: '=',
          fraction: { num: '120 × f', den: 'P' },
        },
      ],
      variables: [
        {
          symbol: 'ΔH',
          name: 'Ancho de la banda de histéresis',
          meaning: 'Separación entre los puntos de encendido y apagado para evitar conmutaciones rápidas destructivas (chattering) por ruido cerca del setpoint.',
          unit: 'Unidad de la variable (°C, bar)',
        },
        {
          symbol: 'I_salida',
          name: 'Corriente transmitida por el lazo industrial',
          meaning: '4 mA representa el 0% de la medición ("cero vivo"); 12 mA el 50%; 20 mA el 100%. Una lectura de 0 mA indica rotura de cable o falla de fuente.',
          unit: 'Miliamperios [mA]',
        },
        {
          symbol: 'PV, PV_mín, PV_máx',
          name: 'Valor medido y límites inferior/superior de calibración del sensor (Span)',
          meaning: 'Rango físico calibrado en el transmisor (ej. un sensor de 0 a 100 °C que mide 50 °C entrega 4 + 16×(50/100) = 12 mA).',
          unit: 'Unidad física (°C, PSI, m)',
        },
        {
          symbol: 'n_s',
          name: 'Velocidad síncrona de rotación del campo magnético del motor CA',
          meaning: 'Velocidad de giro en revoluciones por minuto del motor trifásico.',
          unit: 'RPM (Revoluciones por minuto)',
        },
        {
          symbol: 'f',
          name: 'Frecuencia eléctrica generada por el Variador de Frecuencia (VFD)',
          meaning: 'Al variar f (ej. de 10 Hz a 60 Hz) con el VFD, se modifica de forma directamente proporcional la velocidad n_s del motor.',
          unit: 'Hertz [Hz]',
        },
        {
          symbol: 'P',
          name: 'Número de polos magnéticos del estator del motor',
          meaning: 'Número par de polos del motor (ej. 2, 4 o 6 polos). Con f = 60 Hz y P = 4 polos, n_s = (120 × 60) / 4 = 1800 RPM.',
          unit: 'Polos (número entero par)',
        },
      ],
      examMatch:
        'Recuerda: 1) El Variador de Frecuencia (VFD) controla la velocidad del motor trifásico modificando la frecuencia f (n_s = 120·f/P); 2) El lazo 4–20 mA no pierde señal en cables largos y detecta cable roto (0 mA); 3) La histéresis es la diferencia entre umbrales de encendido y apagado.',
    },
  ],
};

export const FORMULA_CATALOG_OTHER_AREAS = {
  '2.1': [
    {
      id: 'net21_ipv4_subnetting_vlsm',
      label: 'Cálculo de Subredes IPv4, Hosts Utilizables (CIDR / VLSM) y Espacio IPv6',
      code: 'h = 32 - P   |   IPs Totales = 2^h   |   Hosts Útiles = 2^h - 2   |   Subredes = 2^b   |   IPv6 = 2^128 direcciones',
      category: 'Direccionamiento IPv4 / IPv6 y VLSM',
      matchTitles: [
        'Cálculo de Subredes (Subnetting) y VLSM (Máscara de Subred de Longitud Variable)',
        'Arquitectura IPv6 y Autoconfiguración SLAAC',
      ],
      equations: [
        {
          title: 'Bits de Host Restantes a partir del Prefijo CIDR (/P)',
          lhs: 'h',
          op: '=',
          rhs: '32 - P',
        },
        {
          title: 'Número de Hosts Asignables (Útiles) por Subred IPv4',
          lhs: 'Hosts_útiles',
          op: '=',
          rhs: '2^h - 2 = 2^(32 - P) - 2',
        },
        {
          title: 'Número de Subredes Creadas al Pedir Prestados b Bits',
          lhs: 'N_subredes',
          op: '=',
          rhs: '2^b',
        },
        {
          title: 'Salto de Bloque (Incremento entre Subredes en el Octeto Activo)',
          lhs: 'Salto',
          op: '=',
          rhs: '256 - Valor_octeto_máscara',
        },
      ],
      variables: [
        {
          symbol: 'P (/P)',
          name: 'Prefijo de red CIDR (Longitud de máscara)',
          meaning: 'Cantidad de bits encendidos en 1 en la máscara de subred (ej. /24 = 255.255.255.0; /30 = 255.255.255.252).',
          unit: 'Bits de red (0 a 32)',
        },
        {
          symbol: 'h',
          name: 'Bits destinados a identificar Hosts',
          meaning: 'Bits en 0 a la derecha de la máscara (ej. en /26 quedan h = 32 - 26 = 6 bits para hosts).',
          unit: 'Bits de host',
        },
        {
          symbol: '- 2',
          name: 'Las 2 direcciones reservadas en toda subred IPv4',
          meaning: 'Siempre se restan 2 IPs: la primera (bits de host en 0) es la Dirección de Red y la última (bits de host en 1) es la Dirección de Broadcast.',
          unit: '2 direcciones IP',
        },
        {
          symbol: 'b',
          name: 'Bits prestados de la porción de host para crear subredes',
          meaning: 'Si partes de una red /24 y pasas a /27, tomaste prestados b = 27 - 24 = 3 bits → obtienes 2³ = 8 subredes.',
          unit: 'Bits prestados',
        },
      ],
      examMatch:
        'Valores que debes saber de memoria para el examen: /24 = 254 hosts; /25 = 126 hosts; /26 = 62 hosts; /27 = 30 hosts; /28 = 14 hosts; /29 = 6 hosts; /30 = 2 hosts (ideal para enlace WAN punto a punto entre 2 routers).',
    },
    {
      id: 'net21_mesh_topology_rack_cabling',
      label: 'Enlaces en Topología Malla Completa (Full Mesh), Regla de 100 m UTP y Unidades de Rack (U)',
      code: 'Enlaces_Malla = [ N · (N - 1) ] / 2   |   L_máx(UTP) = 90 m + 10 m = 100 m   |   1U = 1.75 in = 44.45 mm',
      category: 'Topologías y Cableado Estructurado',
      matchTitles: [
        'Topologías Físicas y Lógicas',
        'Par Trenzado UTP (Cat5e, Cat6, Cat6A) y Regla de los 100 Metros',
        'Infraestructura de Cuarto de Telecomunicaciones, Racks (Unidades U) y PoE',
      ],
      equations: [
        {
          title: 'Enlaces Físicos Punto a Punto en Topología Malla Completa',
          lhs: 'Enlaces_Full_Mesh',
          op: '=',
          fraction: { num: 'N · (N - 1)', den: '2' },
        },
        {
          title: 'Longitud Máxima del Canal Horizontal UTP (ANSI/TIA/EIA-568)',
          lhs: 'L_canal',
          op: '=',
          rhs: 'L_permanente (90 m) + L_patch_cords (10 m) = 100 m',
        },
        {
          title: 'Altura de Equipos en Bastidor Estándar (EIA-310 de 19")',
          lhs: 'H_equipo',
          op: '=',
          rhs: 'N_unidades × 1.75 pulgadas   (1U = 44.45 mm)',
        },
      ],
      variables: [
        {
          symbol: 'N',
          name: 'Número total de nodos o routers interconectados',
          meaning: 'Cantidad de dispositivos en la red en malla (ej. para conectar N = 5 sitios en Malla Completa se requieren 5×4 / 2 = 10 enlaces WAN).',
          unit: 'Nodos / Routers',
        },
        {
          symbol: 'L_permanente, L_patch_cords',
          name: 'Tramo de cable rígido en muro y cables de parcheo flexibles',
          meaning: 'Superar los 100 m totales en cobre UTP provoca atenuación severa y pérdida de tramas.',
          unit: 'Metros [m]',
        },
        {
          symbol: '1U (Unidad de Rack)',
          name: 'Unidad estándar de altura vertical en bastidores de 19 pulgadas',
          meaning: 'Equivale exactamente a 1.75 pulgadas (44.45 mm). Un switch suele ocupar 1U y un servidor de rack 2U o 4U.',
          unit: 'Unidades U (mm / in)',
        },
      ],
      examMatch:
        'Si preguntan qué topología interconecta todos los nodos directamente entre sí ofreciendo la máxima redundancia → Malla Completa con N(N-1)/2 enlaces. Si preguntan la distancia máxima del cableado UTP horizontal → 100 metros.',
    },
    {
      id: 'net21_routing_ospf_default_rfc1918',
      label: 'Métrica de Costo OSPF, Ruta por Defecto (IPv4 / IPv6) y Rangos Privados RFC 1918',
      code: 'Costo_OSPF = BW_ref / BW_interfaz   |   Default IPv4: 0.0.0.0/0   |   Default IPv6: ::/0   |   RFC 1918: 10/8, 172.16/12, 192.168/16',
      category: 'Enrutamiento Capa 3',
      matchTitles: [
        'Estructura de IPv4, Clases y Direcciones Privadas (RFC 1918)',
        'Tabla de Enrutamiento, Ruta por Defecto y Protocolos de Enrutamiento (IGP vs. EGP)',
      ],
      equations: [
        {
          title: 'Cálculo de Métrica (Costo) de Enlace en Protocolo OSPF',
          lhs: 'Costo_OSPF',
          op: '=',
          fraction: { num: 'BW_referencia (10^8 bps)', den: 'BW_interfaz (bps)' },
        },
        {
          title: 'Ruta por Defecto (Gateway of Last Resort)',
          lhs: 'IPv4: 0.0.0.0 / 0',
          op: '|',
          rhs: 'IPv6: :: / 0',
        },
      ],
      variables: [
        {
          symbol: 'Costo_OSPF',
          name: 'Métrica acumulada por el algoritmo de Dijkstra (SPF) en OSPF',
          meaning: 'A mayor ancho de banda del enlace, menor es el costo OSPF y más preferida es la ruta (a diferencia de RIP que solo cuenta saltos hasta 15).',
          unit: 'Costo adimensional',
        },
        {
          symbol: 'BW_referencia, BW_interfaz',
          name: 'Ancho de banda de referencia (100 Mbps por defecto) y velocidad del enlace',
          meaning: 'Cociente que pondera la velocidad física de la interfaz.',
          unit: 'bps o Mbps',
        },
        {
          symbol: '0.0.0.0/0 y ::/0',
          name: 'Comodín de Ruta Predeterminada en IPv4 e IPv6',
          meaning: 'Coincide con cualquier dirección IP destino que no tenga una ruta más específica en la tabla de enrutamiento (salida hacia Internet).',
          unit: 'Prefijo IP',
        },
      ],
      examMatch:
        'Cuando el reactivo pide configurar la ruta hacia Internet o hacia cualquier red desconocida, la respuesta es la Ruta por Defecto 0.0.0.0/0 (máscara 0.0.0.0). Si pide el protocolo que calcula rutas según el ancho de banda con Dijkstra → OSPF.',
    },
  ],

  '2.2': [
    {
      id: 'net22_dhcp_syslog_tracert_ios',
      label: 'Secuencia DORA (DHCP), Escala de Severidad Syslog (0–7), Mecanismo TTL en Tracert y Guardado IOS',
      code: 'DHCP: Discover → Offer → Request → ACK   |   Syslog: 0 (Emergency) a 7 (Debug)   |   Tracert: TTL = 1, 2, 3... (ICMP 11)   |   copy running-config startup-config',
      category: 'Servicios, Monitoreo y Diagnóstico CLI',
      matchTitles: [
        'DHCP (Dynamic Host Configuration Protocol — Puertos UDP 67 Servidor / UDP 68 Cliente)',
        'Syslog (System Logging Protocol — Puerto UDP 514 / TCP 6514 TLS)',
        '`tracert` (Windows) / `traceroute` (Linux y Cisco IOS)',
        'Configuración de Switch Administrable (VLAN de Administración y Default Gateway)',
      ],
      equations: [
        {
          title: 'Flujo de 4 Mensajes para Concesión de IP en DHCP (UDP 67 / 68)',
          lhs: 'DORA',
          op: '=',
          rhs: '1. Discover (Broadcast) → 2. Offer → 3. Request → 4. ACK',
        },
        {
          title: 'Escala de Severidad de Alertas en Syslog (UDP 514)',
          lhs: 'Nivel_Syslog',
          op: '∈',
          rhs: '[ 0 = Emergency (Máxima criticidad) , … , 7 = Debug (Mínima) ]',
        },
        {
          title: 'Condición de Descubrimiento de Salto en Traceroute / Tracert',
          lhs: 'TTL_recibido - 1',
          op: '=',
          rhs: '0  ⇒  Router devuelve ICMP Tipo 11 (Time Exceeded)',
        },
      ],
      variables: [
        {
          symbol: 'D, O, R, A',
          name: 'Las 4 fases de negociación entre Cliente DHCP (UDP 68) y Servidor DHCP (UDP 67)',
          meaning: 'Discover: cliente busca servidor; Offer: servidor ofrece IP; Request: cliente solicita esa IP; ACK: servidor confirma concesión (Lease).',
          unit: 'Mensajes UDP',
        },
        {
          symbol: 'Nivel 0 a 7 (Syslog)',
          name: 'Código numérico de gravedad del evento registrado',
          meaning: '0: Emergency, 1: Alert, 2: Critical, 3: Error, 4: Warning, 5: Notice, 6: Informational, 7: Debug. ¡Entre MENOR es el número, MÁS grave es la alerta!',
          unit: 'Entero (0 a 7)',
        },
        {
          symbol: 'TTL (Time To Live)',
          name: 'Contador de tiempo de vida / límite de saltos en el encabezado IP',
          meaning: 'Cada router que atraviesa el paquete resta 1 al TTL. Tracert envía paquetes con TTL=1, luego TTL=2, TTL=3... para identificar cada router del camino.',
          unit: 'Saltos (1 a 255)',
        },
        {
          symbol: 'running-config / startup-config',
          name: 'Configuración activa en RAM vs. Configuración persistente en NVRAM',
          meaning: 'En Cisco IOS, si no ejecutas copy running-config startup-config, todos los cambios se pierden al apagar el equipo.',
          unit: 'Archivos de configuración IOS',
        },
      ],
      examMatch:
        'Para administrar remotamente un switch L2 desde otra subred: debes asignar IP a la interfaz VLAN de administración (SVI), configurar su ip default-gateway y usar SSH (TCP 22). Para listar todos los routers por los que pasa un paquete → tracert / traceroute.',
    },
  ],

  '2.3': [
    {
      id: 'net23_risk_crypto_asymmetric_cia',
      label: 'Ecuación de Riesgo Informático, Operaciones de Criptografía Asimétrica y Seguridad Wi-Fi',
      code: 'Riesgo = Probabilidad (Amenaza × Vulnerabilidad) × Impacto   |   Cifrar = K_pública(Receptor)   |   Firmar = K_privada(Emisor)',
      category: 'Criptografía y Gestión de Seguridad',
      matchTitles: [
        'La Tríada CIA (Confidencialidad, Integridad y Disponibilidad) y el No Repudio',
        'Criptografía Asimétrica (Clave Pública y Clave Privada)',
        'Seguridad en Redes Inalámbricas (WEP vs. WPA2 vs. WPA3) y tramas 802.11w',
      ],
      equations: [
        {
          title: 'Fórmula Fundamental de Gestión del Riesgo de Seguridad',
          lhs: 'Riesgo',
          op: '=',
          rhs: '(Amenaza × Vulnerabilidad) × Impacto_en_Activo',
        },
        {
          title: 'Cifrado Asimétrico para Confidencialidad (RSA / ECC)',
          lhs: 'Texto_Cifrado',
          op: '=',
          rhs: 'E( Mensaje , K_pública_Receptor )',
        },
        {
          title: 'Firma Digital para Autenticidad, Integridad y No Repudio',
          lhs: 'Firma_Digital',
          op: '=',
          rhs: 'Sign( Hash(Mensaje) , K_privada_Emisor )',
        },
      ],
      variables: [
        {
          symbol: 'Amenaza',
          name: 'Agente o evento externo con potencial de causar daño',
          meaning: 'Ej. un ciberdelincuente, un gusano informático (Worm), un ataque DDoS o un desastre natural.',
          unit: 'Factor externo',
        },
        {
          symbol: 'Vulnerabilidad',
          name: 'Debilidad o fallo interno de un sistema o protocolo',
          meaning: 'Ej. un puerto abierto sin parche (catalogado en CVE o Zero-Day), usar DES de 56 bits o contraseñas por defecto.',
          unit: 'Debilidad interna',
        },
        {
          symbol: 'Impacto',
          name: 'Magnitud del daño financiero, operativo o legal sobre el activo',
          meaning: 'Consecuencia si la amenaza explota exitosamente la vulnerabilidad.',
          unit: 'Nivel de severidad / Costo',
        },
        {
          symbol: 'K_pública_Receptor',
          name: 'Clave pública del destinatario del mensaje',
          meaning: 'Cualquiera la conoce y la usa para CIFRAR un mensaje confidencial; solo el receptor puede descifrarlo con su clave privada.',
          unit: 'Llave RSA / ECC (ej. 2048/256 bits)',
        },
        {
          symbol: 'K_privada_Emisor',
          name: 'Clave privada secreta del autor del documento',
          meaning: 'Solo el autor la posee y la usa para FIRMAR el hash de un documento; cualquiera verifica la firma con la clave pública del emisor.',
          unit: 'Llave privada secreta',
        },
      ],
      examMatch:
        'No confundas: para CONFIDENCIALIDAD cifras con la clave PÚBLICA del receptor; para FIRMA DIGITAL (no repudio) firmas con tu propia clave PRIVADA. En cifrado simétrico: DES (56 bits) es obsoleto; el estándar actual seguro es AES (128/256 bits).',
    },
  ],

  '3.1': [
    {
      id: 'sw31_mccabe_cyclomatic_complexity',
      label: 'Complejidad Ciclomática de McCabe V(G) para Pruebas de Caja Blanca',
      code: 'V(G) = E - N + 2   |   V(G) = P + 1   |   V(G) = R_regiones',
      category: 'Pruebas de Caja Blanca y Calidad',
      matchTitles: [
        'Pruebas de Caja Negra vs. Caja Blanca y Complejidad Ciclomática de McCabe',
      ],
      equations: [
        {
          title: 'Fórmula Topológica del Grafo de Flujo de Control',
          lhs: 'V(G)',
          op: '=',
          rhs: 'E - N + 2',
        },
        {
          title: 'Fórmula Rápida por Nodos Predicado (Decisiones Lógicas)',
          lhs: 'V(G)',
          op: '=',
          rhs: 'P + 1',
        },
      ],
      variables: [
        {
          symbol: 'V(G)',
          name: 'Complejidad Ciclomática de McCabe del módulo',
          meaning: 'Indica el número exacto de caminos linealmente independientes que existen en el código y, por tanto, el número MÍNIMO de casos de prueba de Caja Blanca necesarios para lograr 100% de cobertura de ramas.',
          unit: 'Caminos independientes (ideal ≤ 10)',
        },
        {
          symbol: 'E',
          name: 'Número de Aristas (Edges) en el grafo de flujo',
          meaning: 'Flechas que representan el flujo de control entre bloques de instrucciones.',
          unit: 'Aristas',
        },
        {
          symbol: 'N',
          name: 'Número de Nodos (Nodes) en el grafo de flujo',
          meaning: 'Círculos que representan sentencias o bloques secuenciales de código.',
          unit: 'Nodos',
        },
        {
          symbol: 'P',
          name: 'Número de Nodos Predicado (Decisiones condicionales binarias)',
          meaning: 'Cantidad de puntos de bifurcación lógica en el código: sentencias if, while, for, do-while, cada case de un switch y operadores lógicos && / ||.',
          unit: 'Decisiones condicionales',
        },
      ],
      examMatch:
        'Para resolver cualquier reactivo de McCabe en 5 segundos: cuenta cuántos condicionales (if, while, for) tiene la función (ese es P) y súmale 1: V(G) = P + 1. Si te dan aristas E y nodos N del grafo, aplica V(G) = E - N + 2.',
    },
    {
      id: 'sw31_metrics_halstead_availability',
      label: 'Disponibilidad del Sistema (MTBF / MTTR), Densidad de Defectos y Métricas de Halstead',
      code: 'Disponibilidad = [ MTBF / (MTBF + MTTR) ] × 100%   |   Densidad = Defectos / KLOC   |   N = N1 + N2   |   V = N · log2(n1 + n2)',
      category: 'Métricas de Software y Fiabilidad',
      matchTitles: [
        'Estándares de Calidad ISO/IEC 9126 e ISO/IEC 25010, Métricas, PMBOK y Tipos de Mantenimiento',
      ],
      equations: [
        {
          title: 'Porcentaje de Disponibilidad Operativa (Uptime)',
          lhs: 'Disponibilidad',
          op: '=',
          fraction: { num: 'MTBF', den: 'MTBF + MTTR' },
          rhsSuffix: '× 100%',
        },
        {
          title: 'Densidad de Defectos por Miles de Líneas de Código',
          lhs: 'Densidad_Defectos',
          op: '=',
          fraction: { num: 'Total_Defectos', den: 'KLOC' },
        },
        {
          title: 'Longitud (N) y Volumen (V) de Ciencia del Software de Halstead',
          lhs: 'N = N_1 + N_2',
          op: '|',
          rhs: 'V = N · log_2(n_1 + n_2)',
        },
      ],
      variables: [
        {
          symbol: 'MTBF',
          name: 'Tiempo Medio Entre Fallos (Mean Time Between Failures)',
          meaning: 'Promedio de horas que el sistema opera continuamente de forma correcta antes de que ocurra una caída.',
          unit: 'Horas [h]',
        },
        {
          symbol: 'MTTR',
          name: 'Tiempo Medio de Reparación o Recuperación (Mean Time To Repair)',
          meaning: 'Promedio de horas o minutos que toma diagnosticar, reparar y poner nuevamente en línea el sistema tras un fallo.',
          unit: 'Horas [h] o minutos [min]',
        },
        {
          symbol: 'KLOC',
          name: 'Miles de Líneas de Código Fuente (Thousands of Lines of Code)',
          meaning: 'Medida de tamaño físico del código (1 KLOC = 1,000 líneas de código ejecutables sin contar comentarios).',
          unit: 'Miles de líneas',
        },
        {
          symbol: 'n_1, n_2, N_1, N_2',
          name: 'Contadores léxicos de Operadores y Operandos en Halstead',
          meaning: 'n1 = operadores únicos (ej. +, =, if); n2 = operandos únicos (variables/constantes distintas); N1 = total de apariciones de operadores; N2 = total de apariciones de operandos.',
          unit: 'Tokens del código',
        },
      ],
      examMatch:
        'No confundas las métricas: Halstead cuenta operadores y operandos del código; KLOC cuenta líneas físicas; Puntos de Función (Function Points) estima el tamaño funcional desde los requerimientos (entradas, salidas, consultas, archivos) sin depender del lenguaje.',
    },
  ],

  '3.2': [
    {
      id: 'sw32_big_o_search_sorting_trees',
      label: 'Complejidad Temporal Big-O: Búsqueda Binaria, Tablas Hash, Árboles AVL y Ordenamiento',
      code: 'Pasos_Binaria = ⌊log2(n)⌋ + 1   |   Factor_Equilibrio(AVL) = h_izq - h_der ∈ {-1, 0, +1}   |   MergeSort / HeapSort = O(n · log2 n)',
      category: 'Análisis de Algoritmos y Estructuras de Datos',
      matchTitles: [
        'Tablas Hash, Árboles Binarios de Búsqueda (BST) y Árboles Balanceados (AVL)',
        'Algoritmos de Búsqueda (Lineal vs. Binaria) y de Ordenamiento',
      ],
      equations: [
        {
          title: 'Número Máximo de Comparaciones en Búsqueda Binaria (Arreglo Ordenado)',
          lhs: 'Comparaciones_máx',
          op: '=',
          rhs: '⌈log_2(n)⌉   ⇒   Complejidad O(log n)',
        },
        {
          title: 'Factor de Equilibrio en cada Nodo de un Árbol Autobalanceado AVL',
          lhs: 'FE(nodo)',
          op: '=',
          rhs: 'Altura(Subárbol_Izq) - Altura(Subárbol_Der) ∈ {-1, 0, +1}',
        },
        {
          title: 'Cota Óptima de Ordenamiento por Comparación (MergeSort / HeapSort)',
          lhs: 'T(n)',
          op: '=',
          rhs: 'O(n · log_2 n)   vs.   Burbuja / Inserción: O(n²)',
        },
      ],
      variables: [
        {
          symbol: 'n',
          name: 'Tamaño de la entrada (Número de elementos en la estructura)',
          meaning: 'Cantidad de registros, nodos o elementos a buscar u ordenar (ej. en búsqueda binaria con n = 1,024 elementos ordenados, bastan log₂(1024) = 10 pasos).',
          unit: 'Elementos',
        },
        {
          symbol: 'O(1), O(log n), O(n), O(n log n), O(n²)',
          name: 'Jerarquía de crecimiento asintótico Big-O (de más rápido a más lento)',
          meaning: 'O(1) Constante (Tabla Hash) < O(log n) Logarítmica (Búsqueda Binaria / AVL) < O(n) Lineal (Búsqueda secuencial) < O(n log n) Cuasilineal (MergeSort) < O(n²) Cuadrática (Burbuja / Peor caso QuickSort).',
          unit: 'Operaciones elementales',
        },
        {
          symbol: 'FE(nodo)',
          name: 'Factor de Equilibrio en un Árbol Binario de Búsqueda AVL',
          meaning: 'Si tras insertar o borrar un nodo |FE| ≥ 2, el árbol ejecuta una rotación simple o doble para restaurar la altura O(log n).',
          unit: 'Niveles de altura (-1, 0, +1)',
        },
      ],
      examMatch:
        'Reglas de match directo: 1) Búsqueda Binaria es O(log n) pero exige arreglo ORDENADO; 2) Tabla Hash busca en O(1) promedio; 3) BFS usa COLA (FIFO) y DFS usa PILA (LIFO); 4) MergeSort y HeapSort garantizan O(n log n) siempre.',
    },
    {
      id: 'sw32_os_scheduling_asm_coffman',
      label: 'Tiempos de Planificación de CPU (SJF / Round Robin), Ensamblador x86 y Condiciones de Coffman',
      code: 'T_retorno = T_finalización - T_llegada   |   T_espera = T_retorno - T_ráfaga_CPU   |   CMP a, b → ZF = 1 si (a - b == 0)',
      category: 'Sistemas Operativos, Concurrencia y Ensamblador',
      matchTitles: [
        'Errores de Compilación vs. Tiempo de Ejecución y Lenguaje Ensamblador Básico (x86)',
        'Algoritmos de Planificación de CPU (Scheduling)',
        'Interbloqueos (Deadlocks) y las 4 Condiciones Necesarias de Coffman',
      ],
      equations: [
        {
          title: 'Tiempo de Retorno (Turnaround Time) de un Proceso',
          lhs: 'T_retorno',
          op: '=',
          rhs: 'T_finalización - T_llegada',
        },
        {
          title: 'Tiempo de Espera en Cola Ready (Minimizado por el Algoritmo SJF)',
          lhs: 'T_espera',
          op: '=',
          rhs: 'T_retorno - T_ráfaga_CPU',
        },
        {
          title: 'Comparación y Salto Condicional en Ensamblador x86',
          lhs: 'CMP A, B',
          op: '⇒',
          rhs: 'Calcula (A - B): si A == B activa bandera ZF = 1  →  JZ / JMPZ salta',
        },
      ],
      variables: [
        {
          symbol: 'T_ráfaga_CPU',
          name: 'Tiempo de ráfaga de CPU (Burst Time)',
          meaning: 'Tiempo efectivo de procesador que necesita un proceso para completar su cálculo. El algoritmo SJF ordena los procesos de menor a mayor T_ráfaga_CPU.',
          unit: 'Milisegundos [ms]',
        },
        {
          symbol: 'T_espera',
          name: 'Tiempo de espera en la cola de listos (Waiting Time)',
          meaning: 'Tiempo total que el proceso permanece en estado Ready esperando a que el Scheduler le asigne la CPU.',
          unit: 'Milisegundos [ms]',
        },
        {
          symbol: 'Quantum (q)',
          name: 'Rebanada o tajada fija de tiempo en Round Robin',
          meaning: 'Tiempo máximo continuo que un proceso puede usar la CPU antes de ser expropiado y enviado al final de la cola FIFO.',
          unit: 'Milisegundos [ms]',
        },
        {
          symbol: 'ZF (Zero Flag)',
          name: 'Bandera de Cero en el registro de estado de la ALU',
          meaning: 'Se pone en 1 lógico cuando el resultado de una operación aritmética o de la resta implícita CMP A, B es exactamente 0 (es decir, cuando A y B son iguales).',
          unit: 'Bit (0 o 1)',
        },
      ],
      examMatch:
        'En ensamblador: MOV copia datos, CMP compara restando operandos y activa ZF=1 si son iguales, JMP salta sin condición y JZ/JMPZ salta si ZF=1. En SO: SJF minimiza el tiempo de espera promedio y Round Robin usa Quantum.',
    },
  ],

  '3.3': [
    {
      id: 'sw33_sql_relational_graphs_mst',
      label: 'Grado y Cardinalidad Relacional, Orden de Evaluación SQL y Algoritmos en Grafos (MST y Rutas)',
      code: 'Grado = N_columnas   |   Cardinalidad = N_filas   |   Aristas_MST = V - 1   |   Dijkstra: O((V+E) log V) con pesos ≥ 0   |   Floyd-Warshall: O(V³)',
      category: 'Bases de Datos Relacionales y Optimización en Grafos',
      matchTitles: [
        'Terminología Formal del Modelo Relacional',
        'Consultas `SELECT`, `DISTINCT`, Funciones de Agregación y Diferencia Crítica entre `WHERE` y `HAVING`',
        'Algoritmos de Camino Más Corto (Shortest Path)',
        'Algoritmos de Árbol de Expansión Mínima (MST — Minimum Spanning Tree: Kruskal y Prim)',
      ],
      equations: [
        {
          title: 'Dimensiones de una Relación (Tabla) en el Modelo Relacional',
          lhs: 'Grado = N° de Atributos (Columnas)',
          op: '|',
          rhs: 'Cardinalidad = N° de Tuplas (Filas)',
        },
        {
          title: 'Orden de Ejecución Lógica de una Consulta SQL con Agrupación',
          lhs: 'FROM / JOIN → WHERE (filas)',
          op: '→',
          rhs: 'GROUP BY → HAVING (grupos: COUNT/AVG/SUM) → SELECT → ORDER BY',
        },
        {
          title: 'Número Exacto de Aristas en un Árbol de Expansión Mínima (MST: Kruskal / Prim)',
          lhs: 'E_MST',
          op: '=',
          rhs: 'V - 1   (Conecta los V nodos sin ningún ciclo y con peso total mínimo)',
        },
        {
          title: 'Complejidad de Caminos Más Cortos: Un Origen (Dijkstra) vs. Todos los Pares (Floyd-Warshall)',
          lhs: 'Dijkstra: O((V + E) log V) [w_ij ≥ 0]',
          op: '|',
          rhs: 'Floyd-Warshall: O(V³)',
        },
      ],
      variables: [
        {
          symbol: 'V',
          name: 'Número de Vértices (Nodos) del grafo',
          meaning: 'Representan ciudades, routers, almacenes o puntos de una red que deben interconectarse.',
          unit: 'Vértices / Nodos',
        },
        {
          symbol: 'E',
          name: 'Número de Aristas (Enlaces) del grafo',
          meaning: 'Conexiones existentes entre pares de nodos, cada una con un peso o costo w_ij.',
          unit: 'Aristas / Enlaces',
        },
        {
          symbol: 'E_MST = V - 1',
          name: 'Aristas seleccionadas por los algoritmos de Kruskal o Prim',
          meaning: 'Para conectar V nodos (ej. 10 edificios con fibra óptica) al menor costo total sin ciclos, el árbol resultante siempre tendrá exactamente V - 1 (ej. 9) enlaces.',
          unit: 'Aristas del árbol',
        },
        {
          symbol: 'w_ij ≥ 0',
          name: 'Peso o costo no negativo de la arista entre el nodo i y el nodo j',
          meaning: 'Requisito obligatorio para que el algoritmo voraz de Dijkstra garantice la ruta más corta exacta desde 1 nodo origen.',
          unit: 'Distancia, latencia o costo',
        },
        {
          symbol: 'WHERE vs. HAVING',
          name: 'Cláusulas de filtrado en SQL antes y después de agrupar',
          meaning: 'WHERE filtra tuplas individuales antes de GROUP BY; HAVING filtra grupos formados por GROUP BY permitiendo funciones de agregación (COUNT, SUM, AVG, MAX, MIN).',
          unit: 'Predicados booleanos SQL',
        },
      ],
      examMatch:
        'Si el reactivo pide: 1) Ruta más corta desde UN nodo origen → Dijkstra; 2) Ruta más corta entre TODOS los pares de nodos → Floyd-Warshall; 3) Conectar todos los nodos al costo mínimo total sin ciclos → Kruskal (por aristas) o Prim (por nodos) con V - 1 aristas; 4) Filtrar por AVG() o COUNT() en SQL → HAVING.',
    },
  ],

  '4.1': [
    {
      id: 'tr41_reading_logic_inference',
      label: 'Ecuaciones Lógicas de Comprensión Lectora: Idea Central, Inferencia y Paráfrasis',
      code: 'Idea_Central = Tema + Tesis_Autor   |   Inferencia = Premisa_Explícita + Deducción_Lógica   |   Paráfrasis = Causa_Original + Efecto_Original (con sinónimos)',
      category: 'Análisis Discursivo y Lógica Textual',
      matchTitles: [
        'Texto Argumentativo / Ensayo de Opinión (ej. "Energías limpias vs. energías fósiles", "Las redes sociales")',
        '2. Interpretar Información (Nivel Inferencial)',
      ],
      equations: [
        {
          title: 'Construcción de la Idea Central Global del Texto',
          lhs: 'Idea_Central',
          op: '=',
          rhs: 'Tema_Global + Postura_o_Explicación_Principal_del_Autor',
        },
        {
          title: 'Condición de Inferencia Válida (Sin Sobreinterpretación)',
          lhs: 'Inferencia_Válida',
          op: '=',
          rhs: 'Evidencia_Explícita_en_Párrafo [n] + Implicación_Lógica_Necesaria',
        },
        {
          title: 'Equivalencia Semántica en una Paráfrasis Correcta',
          lhs: 'Paráfrasis',
          op: '≡',
          rhs: 'Misma_Causa + Mismo_Efecto (expresados con léxico distinto, sin juicios externos)',
        },
      ],
      variables: [
        {
          symbol: 'Tema_Global',
          name: 'Asunto o fenómeno general del que habla todo el texto',
          meaning: 'Responde a "¿De qué trata la lectura de principio a fin?" (ej. el sistema de comunicación de los perritos de la pradera).',
          unit: 'Sintagma nominal',
        },
        {
          symbol: 'Tesis_Autor',
          name: 'Afirmación o postura central que el autor demuestra',
          meaning: 'Responde a "¿Qué sostiene el autor sobre ese tema?" (ej. que los animales poseen lenguaje con estructura gramatical compleja).',
          unit: 'Proposición principal',
        },
        {
          symbol: 'Párrafo [n]',
          name: 'Referencia textual numerada entre corchetes en la lectura',
          meaning: 'Ubica la premisa exacta en el texto para no confundir una idea secundaria local con la tesis global.',
          unit: 'Índice de párrafo [1]..[N]',
        },
      ],
      examMatch:
        'Para acertar siempre en Comprensión Lectora: descarta cualquier inciso que 1) solo mencione un ejemplo aislado de un párrafo cuando te piden la idea central, 2) agregue calificativos absolutos no dichos por el autor ("jamás", "único", "imposible") o 3) invierta la relación causa-efecto en una paráfrasis.',
    },
  ],
};

export const ALL_FORMULA_CATALOG = {
  ...FORMULA_CATALOG_HW,
  ...FORMULA_CATALOG_OTHER_AREAS,
};

/**
 * Obtiene la lista completa de fórmulas enriquecidas (con ecuaciones formateadas y variables)
 * para una subárea dada (ej. '1.1', '1.2', '2.1', etc.).
 * Si la guía teórica tiene fórmulas adicionales no mapeadas por ID, las integra automáticamente.
 */
export function getEnrichedFormulasForSubarea(subareaCode, rawFormulas = []) {
  const catalogList = ALL_FORMULA_CATALOG[subareaCode] || [];
  if (catalogList.length > 0) {
    return catalogList;
  }
  return rawFormulas.map((f, idx) => ({
    id: `raw_${subareaCode}_${idx}`,
    label: f.label,
    code: f.code,
    category: `Subárea ${subareaCode}`,
    equations: (f.code || '')
      .split(/\s+\|\s+/)
      .filter(Boolean)
      .map((part, pIdx) => {
        const eqIdx = part.indexOf('=');
        if (eqIdx !== -1) {
          return {
            title: pIdx === 0 ? f.label : `Expresión ${pIdx + 1}`,
            lhs: part.slice(0, eqIdx).trim(),
            op: '=',
            rhs: part.slice(eqIdx + 1).trim(),
          };
        }
        return {
          title: f.label,
          lhs: part.trim(),
          op: '',
          rhs: '',
        };
      }),
    variables: [],
    examMatch: '',
  }));
}

/**
 * Busca si un punto teórico específico (por su título) tiene fórmulas enriquecidas asociadas
 * para mostrarlas incrustadas dentro de la tarjeta del concepto.
 */
export function findFormulasForTitle(conceptTitle) {
  if (!conceptTitle || typeof conceptTitle !== 'string') return [];
  const cleanTitle = conceptTitle.trim().toLowerCase();
  const allFormulas = Object.values(ALL_FORMULA_CATALOG).flat();
  return allFormulas.filter(
    (item) =>
      Array.isArray(item.matchTitles) &&
      item.matchTitles.some((mt) => cleanTitle.startsWith(mt.toLowerCase()))
  );
}


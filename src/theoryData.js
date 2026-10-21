/**
 * ENCICLOPEDIA TEÓRICA EXHAUSTIVA Y FUNDAMENTOS VERIFICADOS — EGEL INGENIERÍA EN COMPUTACIÓN
 * -----------------------------------------------------------------------------------------
 * Cobertura 100% del temario CENEVAL EGEL-ICOMPU sin fugas de información.
 * Basada directamente en:
 *  1. El acervo bibliográfico del proyecto (scripts/raw_books/):
 *     - Resumen Diseño Lógico, Electrónica A y B, Arquitectura de Computadoras (Resumen Sistemas Digitales.pdf)
 *     - Nadal — Sistemas Embebidos (libro_sistemas_embebidos_nadal.pdf)
 *     - Cisco CCNA Exploration Network Capítulos 1 al 11 (.ppt)
 *     - Ian Sommerville — Ingeniería del Software y Resúmenes de Construcción 1-3 (.pdf)
 *  2. Los 643 reactivos oficiales y de simulación integrados en src/data/ y src/data/MoreQuestions/.
 */

export const THEORY_GUIDE = [
  // =========================================================================
  // ÁREA 1: IMPLEMENTACIÓN DE HARDWARE
  // =========================================================================
  {
    subareaCode: '1.1',
    subareaName: '1.1 Circuitos eléctricos y electrónica',
    area: 'Implementación de Hardware',
    sources: [
      'Resumen Diseño Lógico, Electrónica A y B, Arquitectura de Computadoras (scripts/raw_books/Resumen Sistemas Digitales.pdf)',
      'Boylestad, R. L. & Nashelsky, L. — Electrónica: Teoría de Circuitos y Dispositivos Electrónicos (11a Ed.)',
      'Nilsson, J. W. & Riedel, S. — Circuitos Eléctricos (10a Ed.)',
      'Sedra, A. S. & Smith, K. C. — Circuitos Microelectrónicos',
    ],
    summary:
      'Abarca el análisis matemático y físico de señales continuas y discretas, leyes fundamentales de circuitos en corriente directa (CD) y corriente alterna (CA), respuesta transitoria y en frecuencia de redes pasivas (RC, RL, RLC), instrumentación de precisión, física de semiconductores, fuentes de alimentación lineales y conmutadas (DC-DC), conmutación y amplificación con transistores BJT/MOSFET y diseño con amplificadores operacionales.',
    keyTopics: [
      'Señales Analógicas y Digitales',
      'Serie y Transformada de Fourier',
      'Teorema de Nyquist y Cuantización ADC',
      'Ley de Ohm, Potencia y Divisor de Voltaje/Corriente',
      'Leyes de Kirchhoff (LCK/LVK), Análisis Nodal y Mallas',
      'Puente de Wheatstone y Medición Kelvin 4 Hilos',
      'Circuitos RC, RL, RLC, Fasores y Resonancia',
      'Filtros Pasivos Pasa-Bajas y Pasa-Altas',
      'Semiconductores, Diodos, Rectificadores y Zener',
      'Fuentes Lineales vs. Conmutadas (Buck / Boost)',
      'Transistores BJT y MOSFET (Corte, Activa, Saturación)',
      'Amplificadores Operacionales (Ideal, Inversor, No Inversor, Instrumentación)',
    ],
    sections: [
      {
        title: '1. Naturaleza de las Señales, Análisis de Fourier y Digitalización (Muestreo y Cuantización)',
        description:
          'Todo sistema electrónico procesa información representada como variaciones de voltaje o corriente en el tiempo. Comprender el paso del dominio continuo (analógico) al dominio discreto (digital) y su representación espectral en frecuencia es indispensable para el diseño de sistemas de adquisición de datos.',
        points: [
          'Señal Analógica vs. Señal Digital: Una señal analógica es continua tanto en el tiempo como en la amplitud, pudiendo tomar infinitos valores reales dentro de un intervalo físico (ej. temperatura ambiental, presión acústica, tensión senoidal de la red eléctrica). En cambio, una señal digital es discreta en el tiempo (muestreada) y discreta en amplitud (cuantizada en niveles finitos), operando típicamente con dos estados lógicos: 0 lógico (baja tensión, ej. 0 V) y 1 lógico (alta tensión, ej. 3.3 V en LVCMOS o 5 V en lógica TTL).',
          'Magnitudes Eléctricas Fundamentales: El Voltaje o tensión (V, medido en Voltios con un voltímetro en paralelo) es el trabajo por unidad de carga necesario para mover electrones entre dos puntos. La Corriente eléctrica (I = dq/dt, medida en Amperios con un amperímetro en serie) es el flujo neto de carga por unidad de tiempo. La Resistencia (R, medida en Ohmios Ω) es la oposición física del material a dicho flujo. En Corriente Directa (CD/DC) el flujo es unidireccional y constante; en Corriente Alterna (CA/AC) la magnitud y polaridad se invierten periódicamente (típicamente una onda senoidal de 60 Hz).',
          'Serie de Fourier vs. Transformada Continua de Fourier: La Serie de Fourier descompone cualquier señal periódica en una suma infinita de senos y cosenos (armónicos múltiplos enteros de la frecuencia fundamental f0 = 1/T), generando un espectro discreto de líneas de frecuencia. Por el contrario, cuando la señal es no periódica (aperiódica o transitoria, como un pulso único), su periodo tiende a infinito (T → ∞) y se utiliza la Transformada Continua de Fourier, la cual representa la señal mediante un espectro continuo de densidad de frecuencias.',
          'Teorema de Muestreo de Nyquist-Shannon: Para reconstruir exactamente una señal analógica limitada en banda sin pérdida de información ni solapamiento espectral (aliasing), la frecuencia de muestreo (fs) debe ser estrictamente mayor o igual al doble de la componente de frecuencia máxima (fmax) presente en la señal original: fs ≥ 2·fmax. La mitad de la frecuencia de muestreo (fs/2) se denomina frecuencia de Nyquist; si existen componentes superiores a fs/2, debe colocarse un filtro analógico pasa-bajas (filtro anti-aliasing) antes del convertidor ADC.',
          'Cuantización y Resolución de un Convertidor Analógico-Digital (ADC): Un ADC de N bits divide su voltaje de referencia (Vref) en 2^N niveles discretos. El tamaño del escalón mínimo detectable (peso del bit menos significativo o LSB) es LSB = Vref / 2^N. Si se incrementa la resolución de un ADC en ΔN bits (por ejemplo, pasar de 10 bits a 12 bits, donde ΔN = 2), el número de niveles se multiplica por 2^ΔN = 2² = 4, reduciendo el error de cuantización a la cuarta parte y mejorando la resolución exactamente por un factor de 4.',
        ],
      },
      {
        title: '2. Leyes Fundamentales en CD, Métodos Sistemáticos de Análisis e Instrumentación de Precisión',
        description:
          'El análisis de redes resistivas lineales se fundamenta en la conservación de la carga y de la energía. La elección correcta entre el método de nodos y el de mallas reduce drásticamente el número de ecuaciones simultáneas a resolver.',
        points: [
          'Ley de Ohm y Disipación de Potencia (Efecto Joule): La caída de tensión en un resistor lineal es directamente proporcional a la corriente que lo atraviesa (V = I·R). La potencia eléctrica instantánea absorbida y disipada en forma de calor es P = V·I = I²·R = V²/R (medida en Watts). Al seleccionar una resistencia física, su potencia nominal (ej. 1/4 W, 1/2 W, 1 W) debe superar con margen de seguridad (típicamente el doble) la potencia real calculada.',
          'Reducción en Serie y en Paralelo: En una conexión en Serie, todos los componentes son atravesados por la misma corriente (Itotal = I1 = I2), las resistencias se suman (Req = R1 + R2 + ... + Rn) y el voltaje se reparte proporcionalmente (Divisor de Voltaje: Vx = Vin · Rx / Req). En una conexión en Paralelo, todos los elementos comparten el mismo voltaje en sus terminales (Vtotal = V1 = V2), las conductancias se suman (1/Req = 1/R1 + 1/R2) y la corriente se divide inversamente proporcional a las resistencias (Divisor de Corriente: I1 = Itotal · R2 / (R1 + R2)). La resistencia equivalente en paralelo siempre es menor que la menor de las resistencias conectadas.',
          'Leyes de Kirchhoff (LCK y LVK): La Ley de Corrientes de Kirchhoff (LCK o KCL, primera ley) se basa en la conservación de la carga eléctrica en un nodo: la suma algebraica de las corrientes que entran a cualquier nodo es igual a la suma de las corrientes que salen (∑I_entran = ∑I_salen). La Ley de Voltajes de Kirchhoff (LVK o KVL, segunda ley) se basa en la conservación de la energía: la suma algebraica de todas las elevaciones y caídas de tensión alrededor de cualquier trayectoria o lazo cerrado (malla) es igual a cero (∑V = 0).',
          'Análisis Nodal vs. Análisis de Mallas: El Método de Voltajes de Nodo aplica LCK en cada nodo de no referencia para hallar las tensiones nodales respecto a tierra; requiere (N - 1) ecuaciones, siendo el método óptimo cuando el circuito tiene muchos nodos o fuentes de corriente en paralelo. El Método de Corrientes de Malla aplica LVK en cada lazo independiente para hallar las corrientes circulantes; es preferible cuando predominan fuentes de tensión en serie y pocos lazos.',
          'Fuentes Ideales e Independientes vs. Dependientes: Una fuente ideal de voltaje mantiene su tensión constante sin importar la corriente demandada (resistencia interna Rint = 0 Ω; para anularla en el Teorema de Superposición o Thevenin se reemplaza por un cortocircuito). Una fuente ideal de corriente suministra una corriente fija sin importar el voltaje en sus terminales (resistencia interna Rint → ∞; para anularla se reemplaza por un circuito abierto). Las fuentes dependientes (controladas por voltaje o corriente en otra parte del circuito: VCVS, VCCS, CCVS, CCCS) son esenciales para modelar transistores y amplificadores operacionales.',
          'Puente de Wheatstone y Medición Kelvin a 4 Hilos: El Puente de Wheatstone utiliza cuatro resistencias en configuración de diamante excitadas por una fuente; cuando el voltaje diferencial entre las ramas centrales es exactamente 0 V (puente equilibrado), se cumple Rx = R3 · (R2 / R1), permitiendo medir cambios minúsculos de resistencia en sensores (galgas extensiométricas, RTD) con altísima precisión. Para medir resistencias extremadamente bajas (en el rango de miliohmios mΩ, como shunts de corriente o contactos), se emplea la medición Kelvin a 4 hilos: dos cables inyectan la corriente de prueba y otros dos cables independientes miden la caída de tensión directamente sobre la pieza; como por los cables del voltímetro no circula corriente apreciable (Zin → ∞), se elimina por completo el error introducido por la resistencia de los cables y puntas de prueba.',
        ],
      },
      {
        title: '3. Circuitos RC, RL y RLC: Régimen Transitorio, Dominio Fasorial, Filtros Pasivos y Resonancia',
        description:
          'Los capacitores e inductores son elementos reactivos dinámicos capaces de almacenar energía. Su comportamiento depende de la tasa de cambio de la señal en el tiempo (dV/dt o dI/dt) y, en corriente alterna, de la frecuencia angular ω = 2πf.',
        points: [
          'Capacitor (Condensador) y Constante de Tiempo RC: Almacena energía en un campo eléctrico entre sus placas (E = ½·C·V²) y su corriente obedece i(t) = C·(dv/dt). Por ello, el voltaje en un capacitor no puede cambiar instantáneamente. En CD estacionaria (t → ∞, f = 0 Hz) actúa como un circuito abierto. La constante de tiempo capacitiva es τ = R·C (en segundos); en 1τ el capacitor se carga al 63.2% de su valor final y en 5τ se considera prácticamente cargado (>99.3%). Si R se duplica y C se reduce a la mitad, τ = (2R)·(C/2) = R·C permanece constante.',
          'Inductor (Bobina) y Constante de Tiempo RL: Almacena energía en un campo magnético (E = ½·L·I²) y su tensión inducida obedece la Ley de Faraday-Lenz v(t) = L·(di/dt). Por ello, la corriente en un inductor no puede cambiar instantáneamente (se opone a cambios bruscos de corriente). En CD estacionaria (t → ∞, f = 0 Hz) actúa como un cortocircuito ideal. Su constante de tiempo inductiva es τ = L / R.',
          'Impedancia Compleja en el Dominio Fasorial (CA): Al excitar un circuito lineal con señales senoidales de frecuencia angular ω = 2πf, las ecuaciones diferenciales se transforman en ecuaciones algebraicas complejas mediante fasores. La impedancia de un resistor es puramente real (Z_R = R, desfase 0°). La impedancia de un capacitor es imaginaria negativa: Z_C = 1 / (jωC) = -j / (ωC), con reactancia capacitiva X_C = 1/(2πfC); en él la corriente adelanta al voltaje en 90°. La impedancia de un inductor es imaginaria positiva: Z_L = jωL, con reactancia inductiva X_L = 2πfL; en él el voltaje adelanta a la corriente en 90°.',
          'Filtros Pasivos RC Pasa-Bajas y Pasa-Altas: En una red RC serie, la frecuencia de corte a -3 dB (donde la potencia cae a la mitad y |Vout/Vin| = 1/√2 ≈ 0.707, porque X_C = R) es fc = 1 / (2π·R·C). Si la tensión de salida se toma en paralelo al capacitor, el circuito es un Filtro Pasa-Bajas (a bajas frecuencias X_C → ∞ y deja pasar la señal; a altas frecuencias X_C → 0 y deriva el ruido a tierra). Si la salida se toma en paralelo a la resistencia, es un Filtro Pasa-Altas (el capacitor en serie bloquea la componente continua de 0 Hz y deja pasar señales de alta frecuencia).',
          'Resonancia en Circuitos RLC, Factor de Calidad Q y Osciladores LC: En un circuito RLC (serie o paralelo), la resonancia eléctrica ocurre a la frecuencia f0 = 1 / (2π·√(L·C)), instante exacto en que las reactancias inductiva y capacitiva se igualan en magnitud (X_L = X_C) y se cancelan mutuamente. En un RLC serie en resonancia, la impedancia total es mínima y puramente resistiva (Z = R), provocando que la corriente sea máxima. En un tanque LC paralelo ideal, se produce una oscilación continua por el intercambio periódico de energía entre el campo eléctrico del capacitor y el campo magnético del inductor. El Factor de Calidad (Q = f0 / BW) mide la selectividad del circuito resonante: un Q alto implica un ancho de banda (BW) muy estrecho y menor pérdida de energía por ciclo.',
        ],
      },
      {
        title: '4. Física de Semiconductores, Diodos, Fuentes de Alimentación Lineales y Convertidores Conmutados DC-DC',
        description:
          'Los dispositivos electrónicos de estado sólido se basan en materiales semiconductores (principalmente Silicio) dopados con impurezas trivalentes (tipo P, huecos) o pentavalentes (tipo N, electrones).',
        points: [
          'Efecto de la Temperatura en Semiconductores y Sensores Pasivos: En los metales y en la región de conducción extrínseca de alta corriente de muchos dispositivos semiconductores (como el canal de un MOSFET de potencia), el aumento de temperatura incrementa las vibraciones de la red cristalina (dispersión por fonones), lo que reduce la movilidad de los portadores de carga. Por otro lado, los termistores NTC (Negative Temperature Coefficient) disminuyen exponencialmente su resistencia al subir la temperatura por generación térmica de pares electrón-hueco, mientras que las fotorresistencias (LDR) disminuyen su resistencia al incidir fotones de luz.',
          'Diodo de Unión PN (Ideal vs. Real): Permite la circulación de corriente en un solo sentido (de Ánodo a Cátodo). En el modelo ideal actúa como un interruptor cerrado perfecto en polarización directa (caída de 0 V) y abierto en inversa. En el modelo real de Silicio, requiere superar la barrera de potencial de aproximadamente 0.7 V (0.3 V en Germanio y 0.2–0.4 V en un diodo Schottky de conmutación rápida) para conducir exponencialmente.',
          'Rectificadores de Media Onda y Onda Completa: El rectificador de media onda emplea un solo diodo y aprovecha únicamente un semiciclo de la señal CA, por lo que la frecuencia del rizado (ripple) a la salida es igual a la frecuencia de línea (f_ripple = f_red, ej. 60 Hz). El rectificador de onda completa en puente de Graetz (4 diodos) invierte el semiciclo negativo, duplicando la frecuencia del rizado (f_ripple = 2·f_red, ej. 120 Hz), lo que facilita enormemente el filtrado y duplica el voltaje promedio de CD.',
          'Etapas de una Fuente de Alimentación Lineal Regulada: Consta secuencialmente de 4 bloques: 1) Transformador reductor (reduce la tensión CA de red según la relación de espiras V2 = V1 · (N2/N1) y provee aislamiento galvánico), 2) Puente Rectificador (convierte CA bidireccional en CD pulsante), 3) Filtro Capacitivo en paralelo (un capacitor electrolítico de gran valor almacena carga en los picos y la entrega en los valles, reduciendo drásticamente el voltaje de rizado V_ripple = I_carga / (f_ripple · C)), y 4) Regulador de Tensión (diodo Zener polarizado en su región de ruptura inversa controlada Vz o circuito integrado lineal como la serie 78XX, que mantiene la salida constante ante variaciones de carga o de línea).',
          'Convertidores Conmutados DC-DC (Buck y Boost) y Disipación Térmica: A diferencia de los reguladores lineales (que disipan el exceso de potencia como calor P = (Vin - Vout)·I), las fuentes conmutadas conmutan un transistor a alta frecuencia junto con un inductor, un diodo y un capacitor con eficiencias del 85% al 95%. El convertidor Buck (reductor o step-down) entrega un voltaje de salida menor al de entrada (Vout = D · Vin, donde D es el ciclo de trabajo PWM). El convertidor Boost (elevador o step-up) almacena energía magnética en el inductor y la suma a la fuente para entregar un voltaje de salida mayor al de entrada (Vout = Vin / (1 - D)). En etapas de potencia siempre se instalan disipadores térmicos de aluminio con pasta térmica para reducir la resistencia térmica unión-ambiente (RθJA) y evitar la destrucción del semiconductor por avalancha térmica.',
        ],
      },
      {
        title: '5. Transistores BJT y MOSFET: Regiones de Operación, Conmutación Digital y Amplificación',
        description:
          'Los transistores son los bloques constructivos de toda la electrónica analógica y digital. El BJT (Bipolar Junction Transistor) es un dispositivo controlado por corriente de base (Ib), mientras que el MOSFET (Metal-Oxide-Semiconductor FET) es controlado por voltaje en la compuerta (Vgs) con impedancia de entrada prácticamente infinita.',
        points: [
          'Regiones de Operación del Transistor BJT (NPN / PNP): 1) Región de Corte: Ambas uniones están en inversa (Ib = 0, Ic = 0); el transistor se comporta como un interruptor abierto entre colector y emisor (Vce = Vcc). 2) Región Activa Directa (Lineal): Unión base-emisor en directa (Vbe ≈ 0.7 V) y colector-base en inversa; la corriente de colector es proporcional a la de base (Ic = β · Ib), operando como amplificador lineal de señales analógicas. 3) Región de Saturación: Ambas uniones están polarizadas en directa (Ib > Ic_max / β); el transistor actúa como un interruptor cerrado con una caída mínima entre colector y emisor Vce(sat) ≈ 0.1 V a 0.3 V.',
          'El Transistor como Interruptor Digital (Driver de Cargas): Para accionar relevadores, motores, solenoides o LEDs de potencia desde un pin de microcontrolador o compuerta TTL (5 V), el transistor debe conmutar exclusivamente entre Corte (apagado) y Saturación (encendido). Nunca debe permanecer estáticamente en la región activa cuando maneja cargas digitales de potencia, ya que el producto simultáneo de alto voltaje Vce y alta corriente Ic generaría una disipación térmica masiva (P = Vce · Ic).',
          'Transistores MOSFET de Enriquecimiento: Al tener la compuerta (Gate) aislada por una capa de dióxido de silicio (SiO2), la corriente de entrada en DC es nula (Ig ≈ 0 A). Cuando Vgs supera el voltaje umbral (Vth), se induce el canal conductor entre Drenador (Drain) y Fuente (Source), presentando en saturación óhmica (región triodo) una resistencia de encendido extremadamente baja (Rds(on) de pocos miliohmios), ideal para puentes H y fuentes conmutadas.',
        ],
      },
      {
        title: '6. Amplificadores Operacionales (Op-Amp) y Acondicionamiento de Señal',
        description:
          'El amplificador operacional es un amplificador diferencial de acoplamiento directo de muy alta ganancia que, al emplear realimentación negativa (conectando la salida a la entrada inversora), permite que su respuesta dependa únicamente de componentes pasivos externos de precisión.',
        points: [
          'Modelo del Amplificador Operacional Ideal vs. Real: El Op-Amp ideal posee: 1) Impedancia de entrada infinita (Zin → ∞, por lo que las corrientes de entrada son cero: I+ = I- = 0 A), 2) Impedancia de salida nula (Zout = 0 Ω, puede entregar corriente sin caída de tensión interna), 3) Ganancia de tensión en lazo abierto infinita (A_OL → ∞) y 4) Ancho de banda infinito. Con realimentación negativa se cumple el principio de cortocircuito virtual (V+ = V-). En un Op-Amp real existen limitaciones críticas: el Slew Rate (SR = dVout/dt_max, en V/μs, que limita la velocidad máxima de cambio de la salida sin distorsión triangular) y el CMRR (Common-Mode Rejection Ratio, capacidad de rechazar señales idénticas en ambas entradas).',
          'Efectos de la Realimentación Negativa: Al realimentar una fracción de la salida hacia la entrada inversora (V-), se estabiliza la ganancia frente a variaciones térmicas o de fabricación, se incrementa drásticamente el ancho de banda útil (producto Ganancia × Ancho de Banda constante: GBP = Av · BW), se reduce la distorsión no lineal, se aumenta la impedancia de entrada (en topología no inversora) y se disminuye la impedancia de salida.',
          'Configuraciones Clásicas (Seguidor, Inversor y No Inversor): 1) Seguidor de Voltaje (Buffer): La salida se conecta directamente a V- y la señal entra por V+; su ganancia es unitaria (Av = 1, Vout = Vin) y se utiliza para acoplamiento de impedancias (evitar que una etapa cargue y atenúe a un sensor de alta impedancia). 2) Amplificador Inversor: La señal entra a través de Rin hacia V- (con V+ a tierra); su ganancia es Av = -Rf / Rin (desfasa 180° la señal). 3) Amplificador No Inversor: La señal entra directamente a V+; su ganancia es siempre mayor o igual a 1: Av = 1 + (Rf / Rin), sin invertir la fase.',
          'Amplificador de Instrumentación: Circuito compuesto típicamente por 3 amplificadores operacionales (dos seguidores/no-inversores acoplados en la etapa de entrada y un restador diferencial en la salida). Destaca por poseer una impedancia de entrada altísima y un CMRR extremadamente elevado (>90–120 dB), siendo el estándar industrial para amplificar señales diferenciales de pocos milivoltios provenientes de puentes de Wheatstone o electrodos biomédicos (ECG/EEG) inmersos en fuerte ruido electromagnético de modo común (60 Hz).',
        ],
      },
    ],
    tables: [
      {
        title: 'Comparativa de Regiones de Operación del Transistor BJT (NPN)',
        headers: ['Región', 'Unión Base-Emisor (BE)', 'Unión Colector-Base (CB)', 'Comportamiento / Aplicación Principal'],
        rows: [
          ['Corte', 'Polarización Inversa (< 0.7 V)', 'Polarización Inversa', 'Interruptor Abierto (Ic ≈ 0 A, Vce = Vcc). Estado lógico OFF.'],
          ['Activa Directa', 'Polarización Directa (≈ 0.7 V)', 'Polarización Inversa', 'Amplificador Lineal de corriente (Ic = β · Ib).'],
          ['Saturación', 'Polarización Directa (≈ 0.7 V)', 'Polarización Directa', 'Interruptor Cerrado (Vce(sat) ≈ 0.2 V, Ic = máxima por carga). Estado ON.'],
        ],
      },
      {
        title: 'Configuraciones Fundamentales con Amplificadores Operacionales',
        headers: ['Topología', 'Ecuación de Salida (Vout)', 'Ganancia (Av)', 'Característica Clave en Examen'],
        rows: [
          ['Seguidor de Tensión (Buffer)', 'Vout = Vin', 'Av = 1', 'Zin → ∞ y Zout → 0. Acoplador de impedancias sin caída de voltaje.'],
          ['Amplificador Inversor', 'Vout = - (Rf / Rin) · Vin', 'Av = - Rf / Rin', 'Invierte la polaridad (desfase de 180°). Tierra virtual en el nodo V-.'],
          ['Amplificador No Inversor', 'Vout = [1 + (Rf / Rin)] · Vin', 'Av = 1 + (Rf / Rin)', 'No invierte la fase. La ganancia siempre es mayor o igual a la unidad.'],
          ['Amplificador Diferencial / Instrumentación', 'Vout = Ad · (V2 - V1)', 'Ad = 1 + (2R1 / Rg)', 'Rechaza el ruido común a ambos cables (alto CMRR). Ideal para sensores.'],
        ],
      },
    ],
    formulas: [
      { label: 'Teorema de Muestreo de Nyquist y Resolución ADC', code: 'fs ≥ 2 · fmax   |   Niveles = 2^N   |   LSB = Vref / 2^N' },
      { label: 'Ley de Ohm y Potencia Eléctrica', code: 'V = I · R   |   P = V · I = I² · R = V² / R' },
      { label: 'Resistencias en Serie y Paralelo (2 ramas)', code: 'R_serie = R1 + R2   |   R_paralelo = (R1 · R2) / (R1 + R2)' },
      { label: 'Divisor de Voltaje y Divisor de Corriente', code: 'Vx = Vin · [ Rx / (R1 + R2) ]   |   I1 = Itotal · [ R2 / (R1 + R2) ]' },
      { label: 'Equilibrio del Puente de Wheatstone', code: 'Rx = R3 · (R2 / R1)  cuando V_diferencial = 0 V' },
      { label: 'Constante de Tiempo RC y RL', code: 'τ_RC = R · C   |   τ_RL = L / R   (Carga al 63.2% en 1τ y >99% en 5τ)' },
      { label: 'Impedancias Fasoriales y Frecuencia de Corte RC (-3 dB)', code: 'Z_C = 1 / (jωC)   |   Z_L = jωL   |   fc = 1 / (2π · R · C)' },
      { label: 'Frecuencia de Resonancia RLC (Serie / Paralelo)', code: 'f0 = 1 / (2π · √(L · C))   donde X_L = X_C' },
      { label: 'Relación de Transformador Ideal y Frecuencia de Rizado', code: 'V2 / V1 = N2 / N1 = I1 / I2   |   f_media_onda = f_red   |   f_onda_completa = 2 · f_red' },
      { label: 'Convertidores Conmutados DC-DC (Buck y Boost)', code: 'Buck (Reductor): Vout = D · Vin   |   Boost (Elevador): Vout = Vin / (1 - D)' },
      { label: 'Ganancia Op-Amp Inversor y No Inversor', code: 'Av_inv = - Rf / Rin   |   Av_no_inv = 1 + (Rf / Rin)' },
    ],
    examTips: [
      'Si pasas de un ADC de 10 bits a uno de 12 bits, aumentas 2 bits (ΔN = 2), por lo que la resolución mejora por un factor de 2² = 4 (no un 20%).',
      'Para medir resistencias ultra-pequeñas (miliohmios) sin que la resistencia de los cables altere la lectura, la respuesta siempre es Medición Kelvin a 4 hilos.',
      'En un filtro RC simple: salida en el Capacitor = Pasa-Bajas; salida en el Resistor = Pasa-Altas.',
      'En un rectificador de puente completo conectado a una línea de 60 Hz, la frecuencia de la componente de rizado (ripple) a la salida es el doble: 120 Hz.',
      'El método de análisis nodal es el más eficiente cuando existen muchos nodos interconectados y fuentes de corriente, ya que reduce el sistema a (N - 1) ecuaciones.',
    ],
  },

  {
    subareaCode: '1.2',
    subareaName: '1.2 Arquitectura de computadoras y diseño digital',
    area: 'Implementación de Hardware',
    sources: [
      'Resumen Diseño Lógico, Electrónica A y B, Arquitectura de Computadoras (scripts/raw_books/Resumen Sistemas Digitales.pdf)',
      'Mano, M. M. & Ciletti, M. D. — Diseño Digital (5a Ed.)',
      'Hennessy, J. L. & Patterson, D. A. — Arquitectura de Computadoras: Un Enfoque Cuantitativo',
      'Stallings, W. — Organización y Arquitectura de Computadores (10a Ed.)',
    ],
    summary:
      'Estudia la representación numérica en binario/complemento a 2, el álgebra de Boole, el diseño de circuitos combinacionales y secuenciales (Flip-Flops, registros, contadores y máquinas de estados Moore/Mealy), así como la microarquitectura del procesador (ALU, FPU, registros, modos de direccionamiento, ISA RISC vs. CISC, segmentación/pipelining, riesgos RAW/WAR/WAW, jerarquía de memoria caché L1-L3, memoria virtual MMU/TLB, buses, interrupciones, DMA y multiprocesamiento).',
    keyTopics: [
      'Álgebra de Boole, De Morgan y Mapas de Karnaugh',
      'Complemento a 2 y Aritmética Binaria',
      'Circuitos Combinacionales (Sumador, MUX, DEMUX, Decodificador)',
      'Circuitos Secuenciales (Latches, Flip-Flops D, JK, T y FSM Moore/Mealy)',
      'Organización de CPU (ALU, FPU, UC, PC, IR, MAR, MDR, SP)',
      'ISA vs. Microarquitectura y RISC vs. CISC',
      'Arquitectura Von Neumann vs. Harvard y Buses (PCIe, AMBA)',
      'Jerarquía de Memoria (Registros, Caché L1/L2/L3, DDR3/DDR4, RAID)',
      'Políticas de Mapeo de Caché, MMU, Paginación y TLB',
      'Pipeline, Riesgos (RAW/WAR/WAW, Control) y Predicción de Saltos',
      'Interrupciones (IRQ, PIC), DMA, RTC, DVFS, Multicore, SMT y SMP',
    ],
    sections: [
      {
        title: '1. Sistemas Numéricos, Álgebra de Boole y Circuitos Lógicos Combinacionales',
        description:
          'Los circuitos digitales procesan información binaria mediante compuertas lógicas. En un circuito combinacional puro, las salidas en cualquier instante dependen única y exclusivamente de la combinación presente en sus entradas (carecen de retroalimentación y de memoria).',
        points: [
          'Representación en Complemento a 2: Es el estándar universal en las ALU para representar números enteros con signo, ya que permite realizar restas utilizando el mismo circuito sumador binario (A - B = A + (-B)) y posee una única representación para el cero. Se calcula invirtiendo todos los bits del número positivo (Complemento a 1) y sumando 1 al bit menos significativo (LSB). Con N bits se representa el rango [-2^(N-1), +2^(N-1) - 1] (ej. en 8 bits: de -128 a +127).',
          'Teoremas de De Morgan y Compuertas Universales: Las leyes de De Morgan establecen que la negación de un producto es la suma de las negaciones ((A·B)\' = A\' + B\') y la negación de una suma es el producto de las negaciones ((A+B)\' = A\'·B\'). Gracias a ello, las compuertas NAND y NOR son funcionalmente completas (universales): cualquier circuito booleano o procesador completo puede construirse empleando únicamente compuertas NAND o únicamente compuertas NOR.',
          'Simplificación con Mapas de Karnaugh (K-Map): Método gráfico basado en el código Gray (donde celdas adyacentes difieren en un solo bit). Al agrupar potencias de dos (1, 2, 4, 8, 16 celdas adyacentes, incluyendo los bordes envolventes), un grupo de 2^k celdas elimina exactamente k variables (las que cambian de estado dentro del grupo) y conserva las variables que permanecen fijas, obteniendo la expresión mínima en Suma de Productos (SOP) o Producto de Sumas (POS).',
          'Bloques Combinacionales Esenciales: 1) Semisumador (Half Adder): Suma 2 bits (A y B) generando Suma (S = A ⊕ B) y Acarreo de salida (Cout = A·B). 2) Sumador Completo (Full Adder): Suma 3 bits (A, B y el acarreo previo Cin). 3) Multiplexor (MUX): Selector de datos que dirige 1 de sus 2^n líneas de entrada hacia una única salida según el valor binario de n líneas de selección (ej. un MUX 8:1 requiere 3 bits de selección). 4) Demultiplexor (DEMUX): Realiza la operación inversa, encaminando 1 entrada hacia 1 de 2^n salidas. 5) Decodificador (Decoder n a 2^n): Activa una única salida correspondiente al código binario de entrada (usado para selección de chips CS en memorias).',
        ],
      },
      {
        title: '2. Circuitos Secuenciales: Latches, Flip-Flops, Registros, Contadores y FSM',
        description:
          'Los circuitos secuenciales incorporan caminos de retroalimentación para almacenar información binaria (estado interno). Su salida depende tanto de las entradas actuales como del estado anterior.',
        points: [
          'Latch (Cerrojo Asíncrono/Por Nivel) vs. Flip-Flop (Síncrono por Flanco): Un Latch (como el SR o el D transparente) es sensible al nivel de la señal de habilitación (mientras Enable = 1, los cambios en la entrada pasan a la salida). Un Flip-Flop es un dispositivo biestable sincrónico disparado exclusivamente en el instante de transición del reloj (flanco de subida ↑ o flanco de bajada ↓), garantizando inmunidad al ruido entre pulsos de reloj.',
          'Tipos de Flip-Flops (D, T, JK y SR): 1) Flip-Flop D (Data/Delay): Captura el valor de la entrada D en el flanco de reloj (Q(t+1) = D); es la celda base de los registros de la CPU y memorias estáticas. 2) Flip-Flop JK: Es el más versátil y elimina el estado inválido del SR (cuando J=0, K=0 mantiene el estado previo; J=0, K=1 pone Q=0 Reset; J=1, K=0 pone Q=1 Set; y cuando J=1, K=1 conmuta/invierte el estado actual Q(t+1) = Q\'(t)). 3) Flip-Flop T (Toggle): Invierte su salida en cada pulso de reloj si T=1 y la conserva si T=0, por lo que divide la frecuencia del reloj exactamente entre 2 en cada etapa.',
          'Registros y Contadores: Un Registro es un arreglo de N Flip-Flops tipo D con reloj común que almacena una palabra de N bits o realiza desplazamientos seriales/paralelos (Shift Registers). Un Contador de N etapas cuenta desde 0 hasta 2^N - 1 (2^N estados posibles) y divide la frecuencia del reloj de entrada por 2^N en su bit más significativo.',
          'Máquinas de Estados Finitos (FSM): Modelo de control secuencial. En una Máquina de Moore, las salidas dependen única y exclusivamente del estado actual (las salidas son síncronas y más seguras frente a glitches en las entradas). En una Máquina de Mealy, las salidas dependen tanto del estado actual como de las entradas actuales (reacciona en el mismo ciclo de reloj y suele requerir menos estados que Moore).',
        ],
      },
      {
        title: '3. Organización Interna del Procesador (CPU), ISA vs. Microarquitectura y RISC vs. CISC',
        description:
          'El procesador ejecuta programas siguiendo el ciclo de instrucción (Fetch → Decode → Execute → Memory → Write-Back). Es fundamental distinguir entre la arquitectura visible al programador (ISA) y su implementación física (Microarquitectura).',
        points: [
          'Unidades Funcionales de la CPU: 1) ALU (Arithmetic Logic Unit): Ejecuta operaciones aritméticas de enteros (suma, resta, incremento) y lógicas bit a bit (AND, OR, XOR, NOT, desplazamientos) actualizando el registro de banderas (Flags: Zero Z, Carry C, Sign/Negative N, Overflow V). 2) FPU (Floating-Point Unit): Coprocesador o unidad especializada en aritmética de números reales en coma flotante bajo el estándar IEEE 754. 3) Unidad de Control (UC): Decodifica el código de operación (opcode) y genera las señales de control temporizadas para el camino de datos (datapath). 4) Unidad de Generación de Direcciones (AGU): Calcula direcciones efectivas de memoria en paralelo (ej. Base + Índice × Escala + Desplazamiento).',
          'Registros Especializados del Procesador: 1) PC (Program Counter / Instruction Pointer): Contiene la dirección de memoria de la siguiente instrucción que será leída (se auto-incrementa tras cada Fetch o cambia en un salto). 2) IR (Instruction Register): Almacena el código binario de la instrucción que se está decodificando y ejecutando actualmente. 3) MAR (Memory Address Register): Retiene la dirección física que se coloca en el Bus de Direcciones. 4) MDR / MBR (Memory Data/Buffer Register): Almacena el dato que viaja hacia o desde el Bus de Datos. 5) SP (Stack Pointer): Apunta siempre al tope actual de la Pila (Stack) en RAM para llamadas a subrutinas (CALL/RET) y guardado de contexto en interrupciones.',
          'ISA (Instruction Set Architecture) vs. Microarquitectura: La ISA es el contrato o interfaz entre el software y el hardware (define el repertorio de instrucciones como MOV, ADD, CMP, JMP, los tipos de datos, los registros visibles y los modos de direccionamiento). La Microarquitectura es cómo se implementa físicamente esa ISA en silicio (tamaño de caché, número de etapas de pipeline, predictores de saltos, ejecución fuera de orden). Dos procesadores (ej. Intel Core y AMD Ryzen) pueden compartir la misma ISA (x86-64) pero tener microarquitecturas completamente distintas.',
          'Arquitecturas RISC vs. CISC y 32 vs. 64 bits: Un procesador RISC (Reduced Instruction Set Computer, ej. ARM, RISC-V, MIPS) utiliza instrucciones simples de longitud fija (ej. 32 bits) que se ejecutan en un solo ciclo de reloj, arquitectura Load-Store (solo las instrucciones LOAD y STORE acceden a memoria; las demás operan exclusivamente entre su gran banco de registros). Un procesador CISC (Complex Instruction Set Computer, ej. x86) posee instrucciones complejas de longitud variable que pueden operar directamente sobre memoria y tomar múltiples ciclos. Un procesador de 64 bits frente a uno de 32 bits duplica el ancho de sus registros internos y del camino de datos, y amplía el direccionamiento virtual de 4 GB (2³² bytes) hasta un límite teórico de 16 Exabytes (2⁶⁴ bytes).',
          'Modos de Direccionamiento: 1) Inmediato: El operando constante forma parte de la propia instrucción (ej. MOV R1, #5; es el más rápido al no requerir acceso adicional). 2) Directo (Absoluto): La instrucción contiene la dirección efectiva de memoria donde está el dato. 3) Indirecto por Registro: Un registro contiene la dirección de memoria (puntero) donde reside el operando. 4) Indexado / Base + Desplazamiento: Suma un registro base más un desplazamiento constante o índice, ideal para recorrer arreglos y estructuras.',
        ],
      },
      {
        title: '4. Arquitecturas Von Neumann vs. Harvard y Buses del Sistema',
        description:
          'La forma en que el procesador se interconecta con la memoria principal y los periféricos determina el ancho de banda máximo del sistema.',
        points: [
          'Arquitectura Von Neumann vs. Arquitectura Harvard: En Von Neumann existe una única memoria principal y un único bus compartido para almacenar y transferir tanto instrucciones de programa como datos; esto origina el "cuello de botella de Von Neumann", pues la CPU no puede leer una instrucción y leer/escribir un dato simultáneamente. En la Arquitectura Harvard existen memorias y buses físicamente separados para instrucciones (Programa) y para datos, permitiendo el acceso concurrente en un mismo ciclo de reloj (muy común en microcontroladores AVR, PIC, DSP y en las cachés L1 divididas L1i/L1d de los procesadores modernos).',
          'Buses del Sistema (Datos, Direcciones y Control): 1) Bus de Direcciones (Unidireccional, de CPU/DMA hacia Memoria/E-S): Su número de líneas N determina la capacidad máxima de memoria física direccionable (2^N posiciones). 2) Bus de Datos (Bidireccional): Transporta los datos e instrucciones entre módulos; su ancho (8, 16, 32, 64 bits) define cuántos bits se transfieren en paralelo por ciclo. 3) Bus de Control: Transporta señales de sincronización y mando (Read, Write, IRQ, Bus Grant, Clock, Reset).',
          'Buses Síncronos vs. Asíncronos, PCIe y AMBA: Un bus síncrono coordina todas las transferencias mediante una señal de reloj común (rápido, pero limitado por la longitud física y la velocidad del dispositivo más lento); un bus asíncrono utiliza señales de protocolo de apretón de manos (handshaking Request/Acknowledge) sin reloj compartido, adaptándose a periféricos de distintas velocidades. En computadoras modernas, PCI Express (PCIe) emplea enlaces serie punto a punto full-duplex de alta velocidad (carriles o lanes x1, x4, x16), mientras que dentro de un System-on-Chip (SoC ARM) el estándar de interconexión interna de bloques es el bus AMBA (AXI, AHB, APB).',
        ],
      },
      {
        title: '5. Jerarquía de Memoria, Organización de Caché, Memoria Virtual (MMU/TLB) y RAID',
        description:
          'Dado que los procesadores son mucho más rápidos que la memoria DRAM principal, se organiza una jerarquía piramidal que explota el Principio de Localidad Temporal (un dato recién usado volverá a usarse pronto) y Localidad Espacial (se accederá pronto a direcciones contiguas).',
        points: [
          'Niveles de la Jerarquía de Memoria: De menor capacidad / menor latencia / mayor costo por bit hacia mayor capacidad / mayor latencia: 1) Registros internos de la CPU (< 1 ciclo), 2) Memoria Caché L1 (integrada en el núcleo, dividida en L1i de instrucciones y L1d de datos, ~1-4 ciclos), 3) Caché L2 (dedicada o por clúster, ~10 ciclos), 4) Caché L3 (más grande, más lenta que L1/L2 y compartida entre todos los núcleos del procesador, ~30-50 ciclos), 5) Memoria Principal RAM (DRAM síncrona: DDR4 opera a menor voltaje 1.2 V y mayor tasa de transferencia que DDR3 a 1.5 V), y 6) Almacenamiento Secundario no volátil (NVMe SSD, SATA SSD, HDD magnético).',
          'Funcionamiento y Mapeo de la Memoria Caché: Cuando la CPU solicita una dirección y el bloque se encuentra en caché se produce un Cache Hit (acierto); si no está, ocurre un Cache Miss (fallo) y debe traerse el bloque (línea de caché) desde el nivel inferior. Políticas de emplazamiento: 1) Mapeo Directo: Cada bloque de RAM solo puede ubicarse en una única línea fija de caché (Índice = Bloque mod N_líneas); es simple y rápido pero sufre fallos de conflicto si dos direcciones activas comparten el mismo índice. 2) Mapeo Totalmente Asociativo: Un bloque de RAM puede colocarse en cualquier línea libre de la caché; requiere comparadores en paralelo para todas las etiquetas (costoso en hardware). 3) Mapeo Asociativo por Conjuntos (k-way Set-Associative): Divide la caché en conjuntos de k vías (ej. 4-way o 8-way); combina la velocidad del mapeo directo con la baja tasa de conflictos del asociativo.',
          'Memoria Virtual, MMU y TLB: La Memoria Virtual permite ejecutar programas cuyo espacio de direcciones supera la RAM física instalada y aísla la memoria entre procesos mediante Paginación (división en páginas de tamaño fijo, ej. 4 KB). La MMU (Memory Management Unit) traduce en hardware cada dirección lógica/virtual generada por la CPU en una dirección física de RAM consultando la Tabla de Páginas. Para no acceder a la RAM en cada traducción, la MMU incluye el TLB (Translation Lookaside Buffer), una caché asociativa ultrarrápida de traducciones recientes. Si ocurre un TLB Miss, el hardware o el SO debe recorrer la tabla de páginas en RAM (Page Walk); si la página tampoco está en RAM física, se genera una excepción de Fallo de Página (Page Fault) para cargarla desde el disco (Swap).',
          'Arreglos Redundantes de Discos Independientes (RAID): 1) RAID 0 (Striping): Divide los datos en bloques distribuidos entre 2 o más discos; ofrece el máximo rendimiento de lectura/escritura y 100% de la capacidad suma, pero CERO tolerancia a fallos (si un disco falla, se pierde toda la información). 2) RAID 1 (Mirroring / Espejo): Duplica exactamente los datos en dos discos; ofrece alta disponibilidad (puede fallar un disco sin pérdida) a costa de aprovechar solo el 50% de la capacidad total. 3) RAID 5 (Striping con Paridad Distribuida): Requiere mínimo 3 discos; distribuye bloques de datos y bloques de paridad XOR entre todos los discos, tolerando la caída de 1 disco completo con excelente equilibrio entre capacidad (N-1 discos útiles), seguridad y velocidad de lectura.',
        ],
      },
      {
        title: '6. Segmentación (Pipelining), Riesgos (Hazards), Interrupciones, DMA y Multiprocesamiento',
        description:
          'El rendimiento moderno se logra solapando la ejecución de múltiples instrucciones (ILP) y ejecutando múltiples hilos en paralelo (TLP), apoyados por mecanismos eficientes de Entrada/Salida.',
        points: [
          'Pipelining (Segmentación del Camino de Datos): Divide la ejecución de las instrucciones en etapas secuenciales (clásicamente 5 etapas: IF Fetch, ID Decode, EX Execute, MEM Memory, WB Write-Back) separadas por registros intermedios. Aunque la latencia individual de una instrucción no disminuye, el rendimiento (throughput) se multiplica acercándose idealmente a CPI = 1 (una instrucción completada por ciclo de reloj).',
          'Riesgos del Pipeline (Hazards) y Soluciones: 1) Riesgo Estructural: Dos instrucciones en distintas etapas intentan usar el mismo recurso físico al mismo tiempo (ej. memoria unificada Von Neumann); se resuelve duplicando recursos (caché L1 separada). 2) Riesgos de Datos: Ocurren por dependencias entre registros. El verdadero riesgo es RAW (Read After Write: una instrucción necesita leer un registro que la instrucción anterior aún no ha escrito en WB), el cual se mitiga mediante Forwarding / Bypassing (cortocircuitar el resultado directamente desde la salida de la ALU a la entrada de la siguiente instrucción) o insertando burbujas (Stalls) en caso de Load-Use. Los falsos riesgos WAR (Write After Read, antidependencia) y WAW (Write After Write, dependencia de salida) ocurren en ejecución fuera de orden y se eliminan por completo mediante Renombramiento de Registros (Register Renaming). 3) Riesgos de Control (Branch Hazards): Causados por saltos condicionales que alteran el flujo del PC; se mitigan con Predicción Dinámica de Saltos (Branch Prediction). Si el predictor se equivoca (Branch Misprediction), se debe vaciar el pipeline (Flush) descartando las instrucciones especulativas y sufriendo una penalización de varios ciclos.',
          'Interrupciones (IRQ), Controlador PIC, DMA y RTC: Una Interrupción (IRQ) es una señal asíncrona de hardware (o síncrona de software/excepción) que suspende temporalmente el programa actual, guarda el PC y banderas en el Stack y salta a la Rutina de Servicio de Interrupción (ISR) a través de la Tabla de Vectores de Interrupción. El tiempo transcurrido desde que se activa la línea IRQ hasta que inicia la primera instrucción de la ISR se denomina Latencia de Interrupción. El controlador PIC / APIC arbitra y prioriza múltiples fuentes de interrupción. Para transferencias masivas (disco, red, audio), el controlador DMA (Direct Memory Access) toma el control del bus y transfiere bloques directamente entre el periférico y la RAM sin intervención de la CPU, interrumpiéndola solo al finalizar el bloque completo. El RTC (Real-Time Clock) es un circuito de ultra bajo consumo con cristal de 32.768 kHz y batería propia que mantiene la fecha y hora incluso con el equipo apagado.',
          'Multicore, Hyper-Threading (SMT), SMP, DVFS y Benchmarks: Un procesador Multicore integra múltiples núcleos físicos independientes en un mismo chip. El Hyper-Threading o SMT (Simultaneous Multithreading) duplica el estado arquitectónico (registros y PC) dentro de un mismo núcleo físico para presentar 2 hilos lógicos al SO, aprovechando unidades de ejecución ociosas. En una arquitectura SMP (Symmetric Multiprocessing), todos los procesadores/núcleos son idénticos y comparten el mismo espacio de memoria principal y E/S a través de un bus o interconexión con coherencia de caché (protocolo MESI). La técnica DVFS (Dynamic Voltage and Frequency Scaling) reduce dinámicamente el voltaje y la frecuencia de reloj cuando la carga es baja para ahorrar potencia dinámica (P ∝ C · V² · f). Para evaluar objetivamente el rendimiento de la CPU se utilizan suites estandarizadas como SPEC CPU.',
        ],
      },
    ],
    tables: [
      {
        title: 'Tabla de Verdad y Comportamiento de los Flip-Flops Síncronos',
        headers: ['Tipo de Flip-Flop', 'Entradas de Control', 'Estado Siguiente Q(t+1)', 'Descripción Operativa y Aplicación'],
        rows: [
          ['Flip-Flop D', 'D = 0  |  D = 1', 'Q(t+1) = D', 'Almacena el bit presente en D al llegar el flanco de reloj. Base de registros.'],
          ['Flip-Flop T', 'T = 0  |  T = 1', 'T=0: Q(t)  |  T=1: Q\'(t)', 'Con T=1 bascula (invierte su estado) en cada reloj. Divisor de frecuencia entre 2.'],
          ['Flip-Flop JK', 'J=0, K=0', 'Q(t+1) = Q(t)', 'Memoria: conserva sin cambios el bit almacenado previamente.'],
          ['Flip-Flop JK', 'J=0, K=1  |  J=1, K=0', '0 (Reset)  |  1 (Set)', 'Pone la salida en 0 lógico (Reset) o en 1 lógico (Set).'],
          ['Flip-Flop JK', 'J=1, K=1', 'Q(t+1) = Q\'(t)', 'Modo Toggle (conmutación): invierte el estado actual sin indeterminación.'],
        ],
      },
      {
        title: 'Comparativa Arquitectónica: Procesadores RISC vs. CISC',
        headers: ['Atributo', 'Arquitectura RISC (ARM, RISC-V, MIPS)', 'Arquitectura CISC (x86 / x86-64)'],
        rows: [
          ['Formato de Instrucción', 'Longitud fija (ej. 32 bits) y formato regular.', 'Longitud variable (de 1 a 15 bytes) y decodificación compleja.'],
          ['Ciclos por Instrucción', 'Ejecución típica en 1 solo ciclo de reloj (pipeline uniforme).', 'Instrucciones multi-ciclo (decodificadas internamente en micro-operaciones).'],
          ['Acceso a Memoria', 'Arquitectura Load-Store: solo LOAD y STORE acceden a RAM.', 'Las instrucciones aritméticas pueden operar directamente sobre operandos en RAM.'],
          ['Banco de Registros', 'Amplio número de registros de propósito general (16 a 32+).', 'Menor cantidad de registros arquitectónicos clásicos; control microprogramado.'],
        ],
      },
      {
        title: 'Comparativa de Niveles RAID en Almacenamiento',
        headers: ['Nivel RAID', 'Mecanismo Técnico', 'Mínimo de Discos', 'Tolerancia a Fallos y Capacidad Útil'],
        rows: [
          ['RAID 0', 'Striping (división por bloques sin paridad)', '2 discos', '0 discos (si falla 1 se pierde todo). Capacidad = 100% (N discos). Máxima velocidad.'],
          ['RAID 1', 'Mirroring (espejo exacto)', '2 discos', 'Soporta fallo de 1 disco. Capacidad útil = 50% (N/2). Alta seguridad.'],
          ['RAID 5', 'Striping con Paridad Distribuida', '3 discos', 'Soporta fallo de 1 disco cualquiera. Capacidad útil = (N - 1) discos.'],
          ['RAID 10 (1+0)', 'Espejos combinados en Striping', '4 discos', 'Soporta fallo de al menos 1 disco por par espejo. Alto rendimiento y redundancia.'],
        ],
      },
    ],
    formulas: [
      { label: 'Leyes de De Morgan', code: "(A · B)' = A' + B'   |   (A + B)' = A' · B'" },
      { label: 'Rango en Complemento a 2 (N bits)', code: 'De  -2^(N-1)  hasta  +2^(N-1) - 1   (Ej. 8 bits: -128 a +127)' },
      { label: 'Simplificación en Mapa de Karnaugh', code: 'Agrupar 2^k celdas adyacentes elimina k variables del término' },
      { label: 'Capacidad de Direccionamiento Físico', code: 'Posiciones = 2^(Líneas_Bus_Direcciones)   |   Capacidad_Total = 2^N × Ancho_Bus_Datos' },
      { label: 'Ecuación Fundamental de Rendimiento de CPU', code: 'T_CPU = Instrucciones (IC) × CPI × T_ciclo = (IC × CPI) / Frecuencia_Reloj' },
      { label: 'Tiempo Medio de Acceso a Memoria (AMAT)', code: 'AMAT = T_Hit + (Tasa_Miss × Penalización_Miss)' },
      { label: 'Potencia Dinámica CMOS (DVFS)', code: 'P_dinámica ∝ C · V² · f   (Reducir el voltaje V reduce cuadráticamente el consumo)' },
    ],
    examTips: [
      'No confundas ISA con Microarquitectura: si la pregunta habla de instrucciones como MOV, JMP, registros visibles o modos de direccionamiento, es ISA; si habla de tamaño de caché, predictor de saltos o etapas del pipeline, es Microarquitectura.',
      'El riesgo de datos verdadero es RAW (Read After Write) y se soluciona con Forwarding (adelantamiento de datos). Los riesgos falsos WAR y WAW se solucionan con Register Renaming (renombramiento de registros).',
      'En la jerarquía de memoria: Caché L1 es la más rápida y pequeña; Caché L3 es más grande, más lenta que L1/L2 y compartida por todos los núcleos.',
      'Cuando ocurre un fallo en el TLB (TLB Miss), la MMU debe consultar la Tabla de Páginas en memoria RAM para obtener la dirección física antes de acceder al dato.',
      'En una Máquina de Moore la salida depende SOLO del estado actual; en una Máquina de Mealy depende del estado actual Y de la entrada actual.',
    ],
  },

  {
    subareaCode: '1.3',
    subareaName: '1.3 Sistemas embebidos y tiempo real',
    area: 'Implementación de Hardware',
    sources: [
      'Nadal — Sistemas Embebidos (scripts/raw_books/libro_sistemas_embebidos_nadal.pdf)',
      'Resumen Sistemas Digitales (scripts/raw_books/Resumen Sistemas Digitales.pdf)',
      'Valvano, J. W. — Embedded Systems: Real-Time Operating Systems for ARM Cortex-M Microcontrollers',
      'Mazidi, M. A. — The AVR Microcontroller and Embedded Systems',
    ],
    summary:
      'Estudia la arquitectura de microcontroladores (AVR ATmega328P, ARM Cortex-M) y dispositivos lógicos programables (FPGA), su organización de memoria (Flash, SRAM, EEPROM, Bootloader, SFR), periféricos integrados (GPIO, interrupciones externas, Timers, Input Capture, PWM, ADC/DAC, Watchdog Timer), buses de comunicación embebida (UART, I2C, SPI, Ethernet embebido) y el diseño de sistemas de tiempo real (Bare-Metal vs. RTOS, planificación apropiativa, determinismo, deadlines e inversión de prioridad).',
    keyTopics: [
      'Sistemas Embebidos (Nadal) y Bare-Metal vs. RTOS',
      'Tiempo Real Duro (Hard) vs. Blando (Soft) y Determinismo',
      'Planificación Apropiativa e Inversión de Prioridad',
      'Arquitecturas MCU (AVR ATmega328P 16 MHz, ARM Cortex-M) vs. FPGA',
      'Memorias en MCU: Flash, Bootloader, SRAM (Stack), EEPROM y SFR',
      'GPIO, Pull-Up/Pull-Down y Antirrebote (Debouncing)',
      'Polling vs. Interrupciones (ISR corta y calificador volatile)',
      'Timers, Input Capture, PWM y Watchdog Timer (WDT)',
      'Protocolos Seriales: UART, I2C (7/10 bits) y SPI (Full-Duplex)',
      'Sensores Embebidos (HC-SR04, IMU MPU6050, Encoders) y Ethernet Embebido',
    ],
    sections: [
      {
        title: '1. Fundamentos de Sistemas Embebidos, Bare-Metal vs. RTOS y Sistemas de Tiempo Real',
        description:
          'De acuerdo con el libro de Sistemas Embebidos (Nadal), un sistema embebido es un sistema de computación diseñado para realizar una o pocas funciones dedicadas, frecuentemente con restricciones estrictas de consumo energético, tamaño de memoria, costo y tiempo de respuesta determinista.',
        points: [
          'Arquitectura Bare-Metal (Super-Loop) vs. RTOS: En un diseño Bare-Metal sin sistema operativo, el firmware se estructura alrededor de un ciclo infinito principal (`while(1)` o `loop()`) que ejecuta tareas secuencialmente apoyado por rutinas de interrupción (ISR); es ideal para aplicaciones pequeñas, pero si una tarea tarda demasiado bloquea al resto. Un RTOS (Real-Time Operating System, como FreeRTOS o Zephyr) incorpora un Kernel con un planificador (Scheduler) apropiativo basado en prioridades que divide el software en tareas/hilos independientes, garantizando que la tarea crítica de mayor prioridad tome el control de la CPU de forma inmediata y determinista.',
          'Tiempo Real Duro (Hard Real-Time) vs. Tiempo Real Blando (Soft Real-Time): Un sistema de Tiempo Real NO se define simplemente por ser "muy rápido", sino por ser determinista (predecible en el tiempo). En un sistema de Tiempo Real Duro (ej. disparo de bolsa de aire automotriz, frenos ABS, marcapasos, control de vuelo), incumplir un plazo límite (deadline) aunque sea por milisegundos constituye un fallo catastrófico del sistema. En un sistema de Tiempo Real Blando (ej. transmisión de video o actualización de una pantalla), incumplir ocasionalmente un deadline solo degrada la calidad del servicio sin consecuencias fatales.',
          'Planificación Apropiativa (Preemptive) e Inversión de Prioridad: En un RTOS apropiativo, cuando una tarea de alta prioridad pasa al estado Ready (por ejemplo, tras una interrupción o semáforo), el kernel suspende inmediatamente (preempts) a la tarea de menor prioridad en ejecución y realiza un cambio de contexto. Un problema clásico de concurrencia en RTOS es la Inversión de Prioridad: ocurre cuando una tarea de Baja prioridad retiene un recurso compartido (Mutex) que necesita una tarea de Alta prioridad, y simultáneamente una tarea de Media prioridad (que no usa ese recurso) expropia a la de Baja prioridad, bloqueando indirectamente a la tarea de Alta prioridad por tiempo indefinido. Se soluciona mediante el protocolo de Herencia de Prioridad (Priority Inheritance) o Techo de Prioridad (Priority Ceiling).',
        ],
      },
      {
        title: '2. Microcontroladores (AVR, ARM Cortex-M), FPGA y Organización de Memoria',
        description:
          'A diferencia de un microprocesador (que requiere chips externos de RAM, ROM y periféricos en una tarjeta madre), un Microcontrolador (MCU) integra en un solo circuito integrado monolítico la CPU, memorias volátiles/no volátiles y periféricos de E/S.',
        points: [
          'Microcontrolador AVR (ATmega328P / Arduino UNO) y ARM Cortex-M: La placa Arduino UNO se basa en el microcontrolador de 8 bits ATmega328P (arquitectura Harvard RISC de Atmel/Microchip), operando con un cristal externo de 16 MHz, 32 KB de memoria Flash, 2 KB de SRAM y 1 KB de EEPROM, disponible en encapsulado DIP (inserción THT) o SMD (montaje superficial). Para aplicaciones de 32 bits de mayor cómputo y bajo consumo se utilizan procesadores ARM Cortex-M (ej. STM32, ESP32, NXP), que incluyen controlador de interrupciones anidadas NVIC y buses internos AMBA.',
          'Microcontrolador (MCU) vs. FPGA (Field-Programmable Gate Array): Un microcontrolador tiene un hardware interno fijo y ejecuta instrucciones de software de manera secuencial (una tras otra en la CPU). Una FPGA es un dispositivo semiconductor compuesto por una matriz de bloques lógicos configurables (CLB/LUTs), flip-flops e interconexiones programables mediante lenguajes de descripción de hardware (VHDL o Verilog); en una FPGA se sintetiza hardware digital a medida donde múltiples procesos operan con paralelismo físico real y simultáneo en el mismo ciclo de reloj.',
          'Mapa de Memoria en Microcontroladores (Flash, Bootloader, SRAM, EEPROM y SFR): 1) Memoria Flash (No volátil): Almacena el código del programa (firmware) y constantes (`PROGMEM`); conserva su contenido al apagar el sistema. 2) Bootloader: Pequeño programa residente en una sección protegida de la Flash que se ejecuta al encender o reiniciar el MCU, permitiendo actualizar el firmware por puerto serial/USB/OTA sin necesidad de un programador ICSP/JTAG externo. 3) SRAM (Volátil): Almacena las variables globales, dinámicas y la Pila (Stack, que guarda direcciones de retorno y variables locales, creciendo hacia abajo o arriba según la arquitectura; un desbordamiento o Stack Overflow corrompe la RAM). 4) EEPROM (No volátil, borrable eléctricamente byte a byte): Ideal para guardar parámetros de configuración o calibración que deben persistir tras cortes de energía (soporta ~100,000 a 1,000,000 de ciclos de escritura). 5) SFR (Special Function Registers): Registros mapeados en memoria mediante los cuales la CPU configura y controla directamente los periféricos (puertos GPIO, Timers, ADC, UART).',
        ],
      },
      {
        title: '3. Puertos GPIO, Antirrebote, Interrupciones (ISR) vs. Polling, Timers, PWM y Watchdog',
        description:
          'La interacción en tiempo real con el mundo físico depende del uso correcto de los periféricos internos de temporización, conversión y captura de eventos.',
        points: [
          'GPIO, Resistencias Pull-Up / Pull-Down y Antirrebote (Debouncing): Los pines GPIO (General Purpose Input/Output) se configuran mediante registros de dirección (ej. `DDRx` en AVR). Cuando se conecta un botón mecánico a una entrada digital, el pin nunca debe dejarse "flotando" (alta impedancia), pues captaría ruido electromagnético generando lecturas aleatorias; se debe activar la resistencia interna `INPUT_PULLUP` (que mantiene el pin en 1 lógico cuando el botón está abierto y pasa a 0 lógico al cerrarlo a tierra) o usar una pull-down externa. Además, las láminas metálicas de un pulsador rebotan físicamente durante 5 a 20 ms al presionarse, produciendo múltiples flancos falsos; esto se corrige con un filtro RC pasivo (antirrebote por hardware) o validando la estabilidad de la señal tras un retardo no bloqueante por temporizador (antirrebote por software).',
          'Polling (Encuesta) vs. Interrupciones Externas y Diseño de ISR: En el método de Polling, la CPU verifica continuamente dentro de un bucle el estado de una bandera o pin, desperdiciando ciclos de procesador y energía. Con Interrupciones, la CPU puede ejecutar otras tareas o entrar en modo de bajo consumo (Sleep Mode), despertando instantáneamente solo cuando el periférico dispara el evento. Reglas de oro para una ISR (Interrupt Service Routine): 1) Debe ser extremadamente corta y rápida, 2) Nunca debe contener retardos bloqueantes (`delay()`) ni bucles infinitos, y 3) Toda variable global modificada dentro de una ISR y leída en el programa principal debe declararse con el calificador `volatile` en C/C++ para impedir que el compilador la optimice asumiendo que su valor nunca cambia por sí solo.',
          'Temporizadores (Timers), Modo Input Capture y Modulación PWM: Un Timer es un contador digital por hardware incrementado por el reloj del sistema dividido por un preescalador (Prescaler). En modo Input Capture (Captura de Entrada), al ocurrir un flanco en un pin externo, el hardware copia instantáneamente el valor actual del Timer en un registro de captura, permitiendo medir con precisión de microsegundos el periodo, frecuencia o ancho de pulso de una señal. El módulo PWM (Pulse Width Modulation) genera una onda cuadrada periódica de frecuencia fija variando su Ciclo de Trabajo (Duty Cycle = Ton / T_total × 100%) para controlar la potencia promedio entregada a motores DC, el brillo de LEDs o la posición de servomotores.',
          'Watchdog Timer (WDT / Perro Guardián): Es un temporizador de seguridad autónomo con su propio oscilador RC interno independiente. El software en funcionamiento normal debe reiniciar ("alimentar" o "patear") periódicamente el contador del WDT antes de que expire. Si el microcontrolador se cuelga por un fallo de software, interferencia electromagnética o bloqueo infinito, el WDT llega al desbordamiento (timeout) y fuerza un Reset automático del sistema para recuperar la operación sin intervención humana.',
        ],
      },
      {
        title: '4. Buses de Comunicación Serial Embebida (UART, I2C, SPI), Sensores y Ethernet Embebido',
        description:
          'Los microcontroladores se comunican con sensores digitales, memorias externas, pantallas y otros procesadores a través de buses seriales síncronos y asíncronos.',
        points: [
          'UART (Universal Asynchronous Receiver-Transmitter): Comunicación serial punto a punto asíncrona (no comparte línea de reloj) que utiliza 2 hilos cruzados: TX (Transmisión) y RX (Recepción). Ambos extremos deben configurarse exactamente a la misma velocidad en baudios (Baud Rate, ej. 9600 o 115200 bps). La trama inicia con un bit de arranque (Start bit = 0), seguido de 8 bits de datos, un bit opcional de paridad y 1 o 2 bits de parada (Stop bits = 1). Estándares industriales como RS-232 (punto a punto) y RS-485 (diferencial multipunto inmune al ruido hasta 1200 m) operan sobre tramas UART.',
          'Bus I2C (Inter-Integrated Circuit): Bus serial síncrono half-duplex de solo 2 hilos creado por Philips/NXP: SDA (Serial Data) y SCL (Serial Clock), ambos en configuración de colector/drenador abierto que requieren resistencias Pull-Up hacia Vcc. Soporta múltiples maestros y múltiples esclavos en los mismos dos cables mediante direccionamiento por software incluido al inicio de cada trama: con direcciones estándar de 7 bits permite direccionar hasta 128 direcciones teóricas (112 libres y hasta 127 esclavos teóricos excluyendo broadcast, siendo 7 y 10 bits los modos oficiales del estándar). Cada byte transmitido se confirma con un bit ACK/NACK del receptor.',
          'Bus SPI (Serial Peripheral Interface): Bus serial síncrono full-duplex de alta velocidad que utiliza 4 líneas: MOSI (Master Out Slave In), MISO (Master In Slave Out), SCK (Serial Clock generado por el maestro) y una línea dedicada SS / CS (Slave Select / Chip Select activa en bajo) por cada esclavo conectado. Al no requerir direccionamiento en la trama ni bits de confirmación ACK y transmitir/recibir simultáneamente, SPI alcanza velocidades mucho mayores que I2C (decenas de Mbps), ideal para tarjetas SD, pantallas TFT y memorias Flash externas.',
          'Integración de Sensores Clásicos y Ethernet Embebido: 1) Sensor ultrasónico HC-SR04: Mide distancia emitiendo un pulso ultrasónico de 40 kHz tras un disparo en `Trig` y midiendo con un Timer el ancho del pulso en `Echo` (Distancia = Velocidad_sonido × Tiempo_vuelo / 2). 2) IMU MPU6050: Combina acelerómetro y giroscopio MEMS de 6 ejes comunicándose por I2C. 3) Ethernet Embebido / IoT: Para que un microcontrolador sirva páginas web o telemetría en una red LAN, requiere un controlador MAC + transceptor físico PHY Ethernet (integrado o externo por SPI como W5500/ENC28J60), una pila ligera TCP/IP (como lwIP) y un servidor HTTP embebido.',
        ],
      },
    ],
    tables: [
      {
        title: 'Comparativa Técnica de Protocolos de Comunicación en Sistemas Embebidos',
        headers: ['Característica', 'UART (Serial Asíncrono)', 'I2C (Inter-Integrated Circuit)', 'SPI (Serial Peripheral Interface)'],
        rows: [
          ['Sincronización', 'Asíncrono (sin reloj compartido; usa Baud Rate)', 'Síncrono (reloj compartido en línea SCL)', 'Síncrono (reloj compartido en línea SCK)'],
          ['Líneas Físicas', '2 hilos (TX, RX) + GND', '2 hilos (SDA, SCL) con Pull-Up + GND', '4 hilos (MOSI, MISO, SCK, SS/CS) + GND'],
          ['Modo de Transmisión', 'Full-Duplex (punto a punto)', 'Half-Duplex (bidireccional por turnos en SDA)', 'Full-Duplex (transmite por MOSI y recibe por MISO a la vez)'],
          ['Selección de Esclavos', 'No aplica (1 a 1; en RS-485 se hace por trama)', 'Por dirección de software de 7 bits (o 10 bits)', 'Por línea física dedicada CS/SS activa en bajo por esclavo'],
          ['Velocidad Típica', 'Baja / Media (9.6 kbps a 1–3 Mbps)', 'Media (100 kbps Estándar, 400 kbps Fast, 3.4 Mbps High)', 'Muy Alta (10 Mbps a >50 Mbps)'],
        ],
      },
      {
        title: 'Tipos de Memoria dentro de un Microcontrolador (MCU)',
        headers: ['Tipo de Memoria', 'Volatilidad', 'Propósito Principal en el Sistema Embebido'],
        rows: [
          ['Flash ROM', 'No Volátil', 'Almacena el firmware ejecutable (código de programa), tablas constantes y el Bootloader.'],
          ['SRAM', 'Volátil (se borra al apagar)', 'Almacena variables globales/locales en ejecución, buffers de datos, el Heap y el Stack (Pila).'],
          ['EEPROM', 'No Volátil (borrable por byte)', 'Guarda parámetros de calibración, configuraciones de usuario y contadores históricos.'],
          ['Registros SFR', 'Volátil (mapeados en bus)', 'Controlan y leen el estado de los periféricos de hardware (GPIO, Timers, ADC, UART, I2C).'],
        ],
      },
    ],
    formulas: [
      { label: 'Ciclo de Trabajo (Duty Cycle) en PWM y Voltaje Promedio', code: 'Duty (%) = (T_on / T_periodo) × 100   |   V_avg = Duty × V_high' },
      { label: 'Frecuencia de Desbordamiento de un Timer de N bits', code: 'f_timer = f_cpu / [ Prescaler × (2^N - Valor_Precarga) ]' },
      { label: 'Niveles de Cuantización y Voltaje medida en ADC', code: 'Niveles = 2^N   |   V_medido = (Lectura_ADC / (2^N - 1)) × V_ref' },
      { label: 'Distancia con Sensor Ultrasónico (Tiempo de Vuelo)', code: 'd = (v_sonido × t_echo) / 2   (donde v_sonido ≈ 343 m/s = 0.0343 cm/μs)' },
      { label: 'Condición de Planificabilidad RMS (Liu & Layland)', code: 'U = ∑ (Ci / Ti) ≤ n · (2^(1/n) - 1)   (Carga de CPU para cumplir todos los deadlines)' },
    ],
    examTips: [
      'Recuerda siempre: en C/C++ para sistemas embebidos, cualquier variable compartida entre una ISR y el `main()` debe llevar la palabra reservada `volatile`.',
      'Una rutina de interrupción (ISR) jamás debe usar retardos bloqueantes (`delay`) ni funciones lentas; debe levantar una bandera o enviar un evento a una cola del RTOS y salir rápido.',
      'El protocolo I2C usa solo 2 cables (SDA y SCL) y direcciona esclavos con 7 bits (hasta 127 dispositivos) o 10 bits. SPI usa 4 cables (MOSI, MISO, SCK, SS) y es el más rápido (Full-Duplex).',
      'Si el microcontrolador se bloquea por ruido eléctrico y necesitas que se reinicie solo, el periférico responsable es el Watchdog Timer (WDT).',
      'La ventaja decisiva de una FPGA frente a un microcontrolador es el paralelismo real en hardware (ejecución simultánea en compuertas lógicas configurables).',
    ],
  },

  {
    subareaCode: '1.4',
    subareaName: '1.4 Automatización y control',
    area: 'Implementación de Hardware',
    sources: [
      'Nadal — Sistemas Embebidos: Control, Sensores y Actuadores (scripts/raw_books/libro_sistemas_embebidos_nadal.pdf)',
      'Ogata, K. — Ingeniería de Control Moderna (5a Ed.)',
      'Bolton, W. — Mecatrónica: Sistemas de Control Electrónico en la Ingeniería Mecánica y Eléctrica',
      'Norma Internacional IEC 61131-3 (Autómatas Programables PLC) e ISA-5.1 (Diagramas P&ID)',
    ],
    summary:
      'Comprende la teoría de sistemas de control en lazo abierto y lazo cerrado (sistemas LTI, estabilidad BIBO, regímenes de amortiguamiento y tiempo muerto), estrategias de control industrial (On-Off con histéresis, PID con Anti-windup, sintonización Ziegler-Nichols, Feedforward y Cascada), instrumentación industrial (sensores RTD, termopares, galgas, piezoeléctricos, inductivos, capacitivos, ópticos, Hall, encoders incrementales vs. absolutos, lazo 4-20 mA y diagramas P&ID) y automatización con actuadores, variadores VFD, PLC (ciclo Scan y Ladder) y sistemas SCADA.',
    keyTopics: [
      'Lazo Abierto vs. Lazo Cerrado y Sistemas LTI',
      'Estabilidad BIBO, Amortiguamiento y Tiempo Muerto',
      'Control On-Off con Histéresis (Banda Muerta)',
      'Controlador PID (Kp, Ki, Kd), Anti-Windup y Ziegler-Nichols',
      'Control Feedforward (Anticipativo) y Control en Cascada',
      'Sensores Industriales (RTD Pt100, Termopar, Galgas, Inductivos, Hall)',
      'Encoders Incrementales vs. Absolutos',
      'Transmisión 4-20 mA, Linealización y Diagramas P&ID (ISA-5.1)',
      'Actuadores, Motores Paso a Paso, VFD y Diseño Failsafe',
      'PLC (Ciclo Scan, Lenguaje Ladder IEC 61131-3) y Sistemas SCADA',
    ],
    sections: [
      {
        title: '1. Sistemas de Control LTI, Lazo Abierto vs. Lazo Cerrado, Amortiguamiento y Estabilidad',
        description:
          'Un sistema de control regula el comportamiento de una planta o proceso físico para que la Variable de Proceso medida (PV) iguale a la Referencia o valor deseado (Setpoint, SP) a pesar de las perturbaciones externas.',
        points: [
          'Lazo Abierto vs. Lazo Cerrado (Retroalimentado): En un sistema de Lazo Abierto la acción de control se calcula sin medir la salida real (no hay sensor que retroalimente el resultado; ej. un horno de microondas programado solo por tiempo); es sensible a perturbaciones y cambios en la planta. En un sistema de Lazo Cerrado existe un sensor/transmisor que mide continuamente la salida (PV) y la resta de la referencia (SP) en un comparador para obtener la señal de error e(t) = SP - PV; esta retroalimentación negativa rechaza perturbaciones, estabiliza procesos inestables y reduce la sensibilidad a variaciones de parámetros.',
          'Sistemas LTI (Lineales e Invariantes en el Tiempo) y Estabilidad BIBO: Un sistema es Lineal si cumple el principio de superposición y homogeneidad, y es Invariante en el Tiempo si sus parámetros físicos no cambian con el reloj, permitiendo modelarlo mediante su Función de Transferencia G(s) = Y(s)/U(s) en el dominio de Laplace. Un sistema cumple Estabilidad BIBO (Bounded-Input, Bounded-Output) si para toda entrada acotada produce siempre una salida acotada, lo cual ocurre si y solo si todos los polos de su función de transferencia en lazo cerrado se ubican estrictamente en el semiplano izquierdo del plano complejo s (parte real negativa: Re(s) < 0).',
          'Tipos de Respuesta Transitoria de Segundo Orden (Factor de Amortiguamiento ζ): Ante un cambio escalón en la referencia: 1) Respuesta Subamortiguada (0 < ζ < 1): Es rápida pero presenta sobreimpulso (overshoot) y oscilaciones decrecientes antes de estabilizarse. 2) Respuesta Críticamente Amortiguada (ζ = 1): Alcanza el valor de régimen en el menor tiempo posible sin presentar ningún sobreimpulso ni oscilación (ideal en robótica de precisión y posicionamiento). 3) Respuesta Sobreamortiguada (ζ > 1): Es lenta y sin oscilaciones, tardando mucho más en llegar al setpoint.',
          'Tiempo Muerto (Dead Time / Retardo de Transporte) y Diseño Failsafe: El Tiempo Muerto es el retardo puro que transcurre desde que el actuador modifica la variable manipulada hasta que el sensor comienza a detectar el primer cambio en la variable de proceso (común en transporte por tuberías o bandas). Es un enemigo crítico de la estabilidad porque introduce desfase negativo creciente con la frecuencia. Por su parte, la filosofía de diseño Failsafe (A prueba de fallos) garantiza que ante un corte de energía eléctrica, pérdida de presión neumática o rotura de cable de señal, el actuador adopte automáticamente el estado físicamente más seguro para la planta y los operadores (ej. una válvula de enfriamiento se abre por resorte Fail-Open, mientras una válvula de combustible se cierra por resorte Fail-Close).',
        ],
      },
      {
        title: '2. Estrategias de Control: On-Off con Histéresis, PID, Anti-Windup, Feedforward y Cascada',
        description:
          'Desde la regulación térmica básica hasta el control de procesos químicos complejos, la selección del algoritmo de control determina la precisión estacionaria y la robustez dinámica.',
        points: [
          'Control Todo o Nada (On-Off) con Histéresis (Banda Diferencial): El actuador solo tiene dos posiciones: 100% encendido o 0% apagado. Si conmutara en un único punto exacto (ej. 50.0 °C), el ruido de medición provocaría conmutaciones ultrarrápidas continuas (chattering) que destruirían prematuramente los relevadores, contactores o válvulas. Al añadir una ventana de Histéresis (ej. encender a 49 °C y apagar a 51 °C), se establece una banda muerta que reduce la frecuencia de conmutación y protege la vida útil del actuador.',
          'Acciones del Controlador PID (Proporcional, Integral y Derivativo): 1) Acción Proporcional (P, término Kp · e(t)): Produce una salida proporcional al error actual; aumenta la velocidad de respuesta, pero por sí sola deja un error en estado estacionario (offset) en plantas sin integrador natural. 2) Acción Integral (I, término Ki · ∫e(t)dt): Acumula el error en el tiempo; su función primordial es eliminar por completo el error en estado estacionario (llevándolo exactamente a cero), aunque reduce el margen de fase y puede aumentar el sobreimpulso. 3) Acción Derivativa (D, término Kd · de(t)/dt): Reacciona a la velocidad de cambio del error (anticipa la tendencia futura), introduciendo amortiguamiento que reduce el sobreimpulso y mejora la estabilidad, pero es altamente sensible al ruido de alta frecuencia del sensor (lo amplifica, por lo que nunca se usa sola y requiere filtro pasa-bajas).',
          'Saturación Integral (Integral Windup) y Mecanismo Anti-Windup: Cuando el actuador alcanza su límite físico máximo (ej. válvula abierta al 100% o PWM al 100%) y el error persiste, el término integral sigue acumulando un valor gigantesco ("windup"). Cuando la variable por fin cruza el setpoint, el integrador tarda mucho en descargarse, provocando un sobreimpulso enorme y pérdida temporal de control. El esquema Anti-Windup detiene o congela la integración (clamping) o descarga el integrador (back-calculation) en cuanto detecta que el actuador se ha saturado.',
          'Sintonización de Ziegler-Nichols, Control Feedforward y Control en Cascada: 1) El método heurístico de Ziegler-Nichols permite hallar los parámetros Kp, Ti y Td ya sea en lazo abierto (curva de reacción en forma de S con retardo L y constante T) o en lazo cerrado (aumentando solo Kp hasta alcanzar la ganancia crítica Ku donde la salida oscila de forma sostenida con periodo crítico Pu). 2) El Control Feedforward (Prealimentación o Anticipativo) mide directamente la perturbación de entrada antes de que afecte al proceso y aplica una corrección preventiva inmediata (se combina con Feedback). 3) El Control en Cascada utiliza dos controladores anidados: un controlador Primario (Maestro, lazo externo lento, ej. temperatura de un reactor) cuya salida calcula y ajusta dinámicamente el Setpoint de un controlador Secundario (Esclavo, lazo interno rápido, ej. caudal o presión de la chaqueta de vapor), corrigiendo perturbaciones internas antes de que afecten a la variable principal.',
        ],
      },
      {
        title: '3. Instrumentación Industrial: Sensores, Encoders, Lazo 4-20 mA y Diagramas P&ID',
        description:
          'Un transductor convierte una magnitud física en otra; un transmisor industrial acondiciona, linealiza y estandariza esa señal para enviarla sin degradación hacia el controlador.',
        points: [
          'Sensores de Temperatura, Presión y Fuerza: 1) RTD (Resistance Temperature Detector, ej. Pt100 de platino con 100 Ω a 0 °C): Varía su resistencia de forma altamente lineal y precisa con la temperatura (coeficiente positivo). 2) Termopar (Thermocouple): Unión de dos metales distintos que genera un pequeño voltaje (milivoltios) por efecto Seebeck; soporta temperaturas extremas (>1000 °C) pero requiere compensación de unión fría y linealización. 3) Galga Extensiométrica (Strain Gauge): Lámina conductora cuya resistencia eléctrica cambia al deformarse mecánicamente; montada en un puente de Wheatstone es la base de las celdas de carga (peso/fuerza) y sensores de presión. 4) Transductor Piezoeléctrico: Cristal (cuarzo/cerámica) que genera carga eléctrica al sufrir esfuerzos mecánicos dinámicos (ideal para vibraciones, impactos y ultrasonido, pero no mide fuerzas estáticas constantes).',
          'Sensores de Proximidad y Posición (Inductivos, Capacitivos, Ópticos, Hall y Ultrasónicos): 1) Sensor Inductivo: Genera un campo electromagnético de alta frecuencia en su bobina frontal; detecta exclusivamente objetos metálicos sin contacto físico al inducirse corrientes parásitas (Eddy currents). 2) Sensor Capacitivo: Detecta cambios en la constante dieléctrica, por lo que detecta tanto materiales metálicos como no metálicos (plásticos, madera, líquidos, granos a través de paredes no metálicas). 3) Sensor de Efecto Hall: Mide campos magnéticos (usado para detectar imanes en ejes, velocidad de ruedas o corriente eléctrica sin contacto). 4) Sensor Óptico / Fotoeléctrico: Usa un emisor infrarrojo/láser y un fototransistor (barrera, réflex o difuso) para detección rápida a mayor distancia.',
          'Encoders Rotativos: Incrementales vs. Absolutos: Un Encoder Incremental genera trenes de pulsos cuadrados (canales A y B desfasados 90° en cuadratura para detectar sentido de giro, más pulso índice Z); mide desplazamiento relativo, por lo que si se corta la energía eléctrica pierde su posición y requiere una rutina de búsqueda de origen (Homing) al encender. Un Encoder Absoluto posee un disco codificado (típicamente en Código Gray para que solo cambie 1 bit entre posiciones contiguas) que entrega una palabra digital única para cada ángulo exacto del eje; al recuperar la energía conoce inmediatamente la posición exacta del mecanismo sin moverse.',
          'Estándar de Transmisión en Corriente 4-20 mA y Diagramas P&ID: En ambientes industriales se prefiere transmitir señales analógicas mediante un lazo de corriente de 4 a 20 mA en lugar de voltaje (0-10 V) por dos razones críticas: 1) La corriente es la misma en todo el lazo serie sin importar la caída de tensión por la resistencia de cables de cientos de metros, y 2) El "cero vivo" en 4 mA permite distinguir entre el valor mínimo de la variable física (0% = 4 mA) y una falla por rotura de cable o desconexión del transmisor (0 mA). Finalmente, los Diagramas P&ID (Piping and Instrumentation Diagrams, norma ISA-5.1) representan las tuberías, equipos, válvulas y lazos de instrumentación mediante círculos con letras normalizadas (ej. TT = Transmisor de Temperatura, TIC = Controlador Indicador de Temperatura, FY = Relé/Conversor de Flujo).',
        ],
      },
      {
        title: '4. Actuadores Industriales, Variadores VFD, PLC (Ciclo Scan y Ladder) y Sistemas SCADA',
        description:
          'En la pirámide de automatización industrial, los PLC ejecutan el control determinista a nivel de campo/celda, mientras que los sistemas SCADA supervisan la planta a nivel superior.',
        points: [
          'Actuadores: Válvulas, Motores Paso a Paso y Variadores de Frecuencia (VFD): 1) Las electroválvulas (todo/nada) y válvulas proporcionales neumáticas/hidráulicas regulan el caudal de fluidos. 2) El Motor Paso a Paso (Stepper) divide la rotación en pasos angulares discretos exactos al energizar secuencialmente sus bobinas, permitiendo posicionamiento preciso en lazo abierto (impresoras 3D, CNC ligeros). 3) Para controlar de forma continua y eficiente la velocidad y el par de un motor eléctrico de inducción trifásico de CA, se utiliza un Variador de Frecuencia (VFD / Inversor), el cual rectifica la red a un bus CD y genera mediante IGBT modulados por PWM una salida CA de frecuencia y voltaje variables (relación V/f constante o control vectorial).',
          'Autómata Programable Industrial (PLC) y su Ciclo de Operación (Scan Cycle): Un PLC está diseñado para operar 24/7 en ambientes hostiles (vibración, polvo, ruido eléctrico, temperaturas extremas). Consta de fuente, CPU, memoria y módulos de Entradas Digitales (DI, ej. 24 VDC para botones/finales de carrera), Salidas Digitales (DO, a relevador o transistor para contactores/lámparas), Entradas Analógicas (AI, 4-20 mA / 0-10 V) y Salidas Analógicas (AO). El PLC ejecuta cíclica y determinísticamente 4 etapas llamadas Ciclo Scan: 1) Diagnóstico interno y comunicaciones, 2) Lectura física de todas las entradas hacia la tabla de imagen de entradas (PII), 3) Ejecución secuencial del programa de usuario (ej. Diagrama de Escalera / Ladder, Bloques de Funciones FBD o Texto Estructurado ST bajo la norma IEC 61131-3), y 4) Escritura simultánea de la tabla de imagen de salidas (PIQ) hacia los módulos físicos de salida.',
          'Sistemas SCADA (Supervisory Control And Data Acquisition): Es una arquitectura de software y comunicaciones ubicada por encima de los PLC/RTU (usando protocolos industriales como Modbus TCP/RTU, Profinet, EtherNet/IP u OPC UA) que permite supervisar en tiempo real múltiples procesos distribuidos geográficamente desde una sala de control central, ofreciendo interfaces gráficas HMI, gestión de alarmas, tendencias históricas y adquisición de datos en bases de datos industriales.',
        ],
      },
    ],
    tables: [
      {
        title: 'Efecto de las Tres Acciones de un Controlador PID sobre la Respuesta del Sistema',
        headers: ['Acción / Parámetro', 'Ecuación en el Tiempo', 'Efecto Principal en el Lazo de Control', 'Limitación / Precaución en Examen'],
        rows: [
          ['Proporcional (Kp)', 'u_P(t) = Kp · e(t)', 'Acelera el tiempo de subida y reduce el error, pero no lo anula.', 'Un Kp excesivo vuelve subamortiguado o inestable al sistema; deja error estacionario (offset).'],
          ['Integral (Ki)', 'u_I(t) = Ki · ∫ e(t) dt', 'Elimina por completo el error en estado estacionario (e_ss = 0).', 'Aumenta el sobreimpulso y puede causar saturación (Integral Windup) si el actuador llega al tope.'],
          ['Derivativa (Kd)', 'u_D(t) = Kd · [de(t) / dt]', 'Anticipa la tendencia del error, amortigua oscilaciones y reduce sobreimpulso.', 'Amplifica severamente el ruido de alta frecuencia en la medición del sensor.'],
        ],
      },
      {
        title: 'Guía Rápida de Selección de Sensores Industriales',
        headers: ['Sensor / Transductor', 'Principio Físico', 'Qué Detecta o Mide', 'Característica Distintiva CENEVAL'],
        rows: [
          ['RTD (Pt100)', 'Termorresistivo metálico (Platino)', 'Temperatura (-200 a 850 °C)', '100 Ω a 0 °C; el más lineal, estable y preciso en rango industrial medio.'],
          ['Galga Extensiométrica', 'Piezorresistivo (deformación)', 'Fuerza, peso y presión', 'Se conecta en Puente de Wheatstone (celdas de carga).'],
          ['Proximidad Inductivo', 'Corrientes de Foucault (Eddy)', 'Presencia de objetos a corta distancia', 'Detecta EXCLUSIVAMENTE objetos metálicos sin contacto.'],
          ['Proximidad Capacitivo', 'Variación del dieléctrico', 'Nivel de líquidos, plásticos, granos, metales', 'Detecta materiales metálicos y NO metálicos (incluso a través de plástico/vidrio).'],
          ['Encoder Absoluto', 'Disco óptico/magnético en Código Gray', 'Posición angular exacta de un eje', 'NO pierde la posición al cortarse la energía eléctrica (a diferencia del incremental).'],
        ],
      },
    ],
    formulas: [
      { label: 'Señal de Error en Lazo Cerrado', code: 'e(t) = SP(t) - PV(t)   (Setpoint menos Variable de Proceso medida)' },
      { label: 'Ecuación Completa del Controlador PID Ideal', code: 'u(t) = Kp · e(t) + Ki · ∫ e(t)dt + Kd · [de(t) / dt]' },
      { label: 'Función de Transferencia en Lazo Cerrado (Retroalimentación Negativa)', code: 'T(s) = Y(s) / R(s) = [ G(s) ] / [ 1 + G(s) · H(s) ]' },
      { label: 'Conversión Lineal del Lazo de Corriente 4–20 mA', code: 'I(mA) = 4 mA + 16 mA × [ (PV - PV_min) / (PV_max - PV_min) ]' },
      { label: 'Velocidad Síncrona de un Motor de CA Trifásico (Control VFD)', code: 'n_s (RPM) = (120 × f) / P   (donde f = frecuencia en Hz, P = número de polos)' },
    ],
    examTips: [
      'Si un reactivo menciona que un contactor o válvula se enciende y apaga frenéticamente alrededor del punto de consigna en un control On-Off, la solución siempre es agregar Histéresis (banda muerta).',
      'La acción Integral (Ki) elimina el error en estado estacionario; la acción Derivativa (Kd) amortigua el sobreimpulso pero amplifica el ruido de alta frecuencia.',
      'Si el actuador llega al 100% y el término integral se satura causando un gran sobreimpulso posterior, se corrige implementando Anti-Windup.',
      'Si al apagarse la máquina no se debe perder la posición angular exacta del brazo robótico o eje sin hacer Homing, se debe elegir un Encoder Absoluto.',
      'Para regular la velocidad de un motor de inducción trifásico en una banda transportadora o bomba, el equipo correcto es un Variador de Frecuencia (VFD).',
    ],
  },

  // =========================================================================
  // ÁREA 2: REDES DE COMPUTADORAS
  // =========================================================================
  {
    subareaCode: '2.1',
    subareaName: '2.1 Diseño y direccionamiento de redes',
    area: 'Implementación de Redes',
    sources: [
      'Cisco Systems — CCNA Exploration Network: Capítulos 1 al 11 (scripts/raw_books/Exploration Network Cap 1–11.ppt)',
      'Tanenbaum, A. S. & Wetherall, D. J. — Redes de Computadoras (5a Ed.)',
      'Kurose, J. F. & Ross, K. W. — Redes de Computadoras: Un Enfoque Descendente',
      'Estándares IEEE 802.3 (Ethernet), IEEE 802.11 (Wi-Fi), IEEE 802.1Q (VLAN Trunking), IEEE 802.1D/w (STP) y EIA/TIA-568',
    ],
    summary:
      'Estudia las arquitecturas de red (modelos OSI de 7 capas y TCP/IP de 4 capas, encapsulación y PDUs), topologías físicas y diseño jerárquico empresarial de 3 capas Cisco (Acceso, Distribución y Núcleo), medios de transmisión y cableado estructurado (UTP Cat5e/Cat6, fibra óptica monomodo/multimodo, transceptores SFP, PoE, racks y tipos de cable directo/cruzado/consola), conmutación LAN/WLAN (Ethernet CSMA/CD, Wi-Fi CSMA/CA, VLANs, Trunk 802.1Q, STP, EtherChannel, CRC/FCS), direccionamiento IPv4/IPv6 (clases, RFC 1918, Subnetting, VLSM, CIDR, ruta por defecto, NAT/PAT, SLAAC) y protocolos de enrutamiento dinámico (OSPF, RIP, EIGRP, BGP).',
    keyTopics: [
      'Topologías Físicas/Lógicas (Estrella, Malla Completa, Anillo, Bus)',
      'Diseño Jerárquico Cisco de 3 Capas (Acceso, Distribución, Núcleo)',
      'Modelo OSI (7 Capas), TCP/IP, Encapsulación, PDUs y MTU',
      'Medios Físicos: UTP Cat5e/Cat6 (100 m), Fibra Monomodo/Multimodo y SFP',
      'Cableado Estructurado: Racks (Unidades U), PoE 802.3af/at y Cables Directo/Cruzado/Consola',
      'Ethernet IEEE 802.3 (CSMA/CD) vs. Wi-Fi IEEE 802.11 (CSMA/CA)',
      'Conmutación Capa 2: Switch vs. Bridge/Hub, VLANs, Trunk 802.1Q, STP y EtherChannel',
      'Control de Errores en Enlace: Bit de Paridad y CRC / FCS',
      'Direccionamiento IPv4, Rangos Privados RFC 1918, Subnetting, VLSM y NAT/PAT',
      'IPv6 (128 bits, Hexadecimal) y Autoconfiguración SLAAC',
      'Enrutamiento: Ruta por Defecto (0.0.0.0/0), Vector Distancia (RIP) vs. Estado de Enlace (OSPF) y BGP',
    ],
    sections: [
      {
        title: '1. Topologías de Red y Modelo de Diseño Jerárquico de 3 Capas (Cisco)',
        description:
          'El diseño físico y lógico de una red determina su escalabilidad, tolerancia a fallos, costo de cableado y facilidad de aislamiento de problemas.',
        points: [
          'Topologías Físicas y Lógicas: 1) Estrella (Star): Todos los nodos finales se conectan mediante enlaces punto a punto hacia un conmutador central (Switch); es el estándar en LAN modernas porque si falla el cable de un host no afecta al resto, aunque el switch central es un punto único de fallo si no se redunda. 2) Malla Completa (Full Mesh): Todos los nodos están interconectados directamente entre sí mediante N·(N - 1)/2 enlaces; ofrece la máxima redundancia y disponibilidad ante caídas de enlaces (ideal en el núcleo WAN o routers críticos), aunque su costo crece cuadráticamente. 3) Bus y Anillo: Topologías históricas donde todos los nodos comparten un cable coaxial común (Bus) o un bucle cerrado de testigos (Token Ring).',
          'Diseño Jerárquico de Tres Capas de Cisco (Acceso, Distribución y Núcleo/Core): Para diseñar redes de campus escalables y modulares, la infraestructura se divide en 3 niveles: 1) Capa de Acceso: Es el borde donde se conectan los dispositivos finales de los usuarios (PCs, teléfonos IP, cámaras, APs Wi-Fi); implementa switches Capa 2, segmentación en VLANs, Seguridad de Puerto (Port Security) y alimentación PoE. 2) Capa de Distribución (Agregación): Agrega múltiples switches de acceso, aplica políticas de control de tráfico (ACLs), Calidad de Servicio (QoS), enrutamiento inter-VLAN en switches multicapa (Capa 3) y redundancia de primer salto (HSRP/VRRP). 3) Capa de Núcleo (Core / Backbone): Es la columna vertebral de alta velocidad; su único objetivo es conmutar y enrutar paquetes a la máxima velocidad posible con enlaces redundantes (10/40/100 Gbps) sin aplicar filtros pesados que introduzcan latencia.',
        ],
      },
      {
        title: '2. Modelos de Referencia OSI (7 Capas) y TCP/IP, Encapsulación, PDUs y Métricas de Rendimiento',
        description:
          'Los modelos en capas dividen el complejo proceso de comunicación en funciones modulares independientes. Al transmitir datos hacia la red ocurre la Encapsulación (cada capa agrega su encabezado de control) y al recibirlos ocurre la Desencapsulación.',
        points: [
          'Las 7 Capas del Modelo OSI y sus Unidades de Datos de Protocolo (PDU): 1) Capa 7 — Aplicación (PDU: Datos): Interfaz directa con el software de usuario (HTTP, HTTPS, DNS, DHCP, SSH, FTP, SMTP, SNMP). 2) Capa 6 — Presentación (PDU: Datos): Formato, codificación de caracteres (ASCII, UTF-8), compresión y cifrado de datos (TLS/SSL, JPEG, JSON). 3) Capa 5 — Sesión (PDU: Datos): Establecimiento, mantenimiento y cierre de sesiones de diálogo entre aplicaciones (NetBIOS, RPC). 4) Capa 4 — Transporte (PDU: Segmento en TCP / Datagrama en UDP): Comunicación extremo a extremo entre procesos mediante números de Puerto, control de flujo (ventana deslizante), secuenciamiento y retransmisión confiable (TCP) o envío sin conexión de baja latencia (UDP). 5) Capa 3 — Red (PDU: Paquete): Direccionamiento lógico jerárquico (IPv4, IPv6, ICMP) y determinación de la mejor ruta a través de routers. 6) Capa 2 — Enlace de Datos (PDU: Trama / Frame): Direccionamiento físico en la red local mediante direcciones MAC de 48 bits (subcapas LLC y MAC), control de acceso al medio y detección de errores por cola FCS/CRC a través de switches y tarjetas NIC. 7) Capa 1 — Física (PDU: Bits): Transmisión de señales eléctricas, ópticas o de radiofrecuencia por el medio físico (cables, conectores, hubs, repetidores, transceptores).',
          'MTU (Maximum Transmission Unit) y Fragmentación: La MTU es el tamaño máximo en bytes del paquete de Capa 3 (carga útil de la trama) que puede transmitirse sin fragmentarse sobre un medio dado; en Ethernet estándar IEEE 802.3 la MTU por defecto es de 1500 bytes (o hasta 9000 bytes activando Jumbo Frames en redes de almacenamiento SAN).',
          'Ancho de Banda (Bandwidth) vs. Throughput (Rendimiento Real) y Latencia: El Ancho de Banda es la capacidad máxima teórica del canal físico (medida en bps, Mbps o Gbps). El Throughput es la tasa real efectiva de transferencia de datos medida en un instante dado (siempre menor al ancho de banda debido a sobrecarga de encabezados, colisiones, congestión y retransmisiones). La Latencia (Delay) es el tiempo total que tarda un paquete en viajar del origen al destino (suma de retardos de procesamiento, cola, serialización y propagación), y el Jitter es la variación en el tiempo de llegada de los paquetes (crítico en voz sobre IP VoIP y videoconferencia).',
        ],
      },
      {
        title: '3. Medios de Transmisión, Cableado Estructurado (TIA/EIA-568), Fibra Óptica y PoE',
        description:
          'La Capa Física define las especificaciones mecánicas y eléctricas de los cables, fibras, conectores y bastidores del cuarto de telecomunicaciones.',
        points: [
          'Par Trenzado UTP (Cat5e, Cat6, Cat6A) y Regla de los 100 Metros: El cable UTP (Unshielded Twisted Pair) trenza sus 4 pares de hilos de cobre para cancelar la diafonía (crosstalk) y la interferencia electromagnética externa. Bajo el estándar ANSI/TIA/EIA-568, la longitud máxima de un enlace horizontal de cobre permanente es de 100 metros (90 metros de cable horizontal rígido del panel de parcheo al jack de pared + 10 metros combinados de patch cords flexibles); superar los 100 m degrada la señal por atenuación. Categoría 5e soporta hasta 1 Gbps (1000BASE-T a 100 MHz); Categoría 6 soporta 1 Gbps a 100 m y hasta 10 Gbps en distancias cortas (55 m, 250 MHz); Categoría 6A soporta 10 Gbps (10GBASE-T) los 100 metros completos (500 MHz).',
          'Tipos de Cable UTP (Directo, Cruzado y Consola/Rollover): 1) Cable Directo (Straight-through, ambos extremos T568A o ambos T568B): Conecta dispositivos de distinta capa o función (PC a Switch, Router a Switch, AP a Switch). 2) Cable Cruzado (Crossover, un extremo T568A y el otro T568B): Cruza los pares de transmisión (pines 1-2) con los de recepción (pines 3-6) para conectar directamente dispositivos iguales (Switch a Switch, Router a Router, PC a PC), aunque hoy la función Auto-MDIX lo adapta automáticamente. 3) Cable de Consola (Rollover): Invierte el orden completo de los 8 pines (1 al 8, 2 al 7...) para conectar el puerto serial RS-232/USB de una PC al puerto de administración Console de un router o switch Cisco.',
          'Fibra Óptica (Monomodo vs. Multimodo) y Transceptores SFP: Transmite pulsos de luz a través de un núcleo de vidrio de sílice, siendo 100% inmune a interferencias electromagnéticas (EMI/RFI) y descargas eléctricas. 1) Fibra Multimodo (MMF, núcleo ancho de 50 o 62.5 μm): Usa fuentes LED o láser VCSEL económicos; la luz viaja por múltiples trayectorias (dispersión modal), cubriendo distancias de hasta 300–550 m en enlaces de edificios o centros de datos. 2) Fibra Monomodo (SMF, núcleo ultradelgado de 9 μm): Usa diodos láser de un solo modo de propagación sin dispersión modal, alcanzando desde 10 km hasta más de 80–100 km (enlaces metropolitanos y troncales WAN). Los módulos SFP / SFP+ (Small Form-factor Pluggable) son transceptores intercambiables en caliente que se insertan en switches y routers para adaptar puertos de fibra o cobre.',
          'Infraestructura de Cuarto de Telecomunicaciones, Racks (Unidades U) y PoE: Los equipos activos y paneles de parcheo (Patch Panels) se montan en bastidores (Racks) estándar de 19 pulgadas de ancho cuya altura vertical se mide en Unidades de Rack (1U = 1.75 pulgadas = 44.45 mm; ej. un switch compacto suele medir 1U y un servidor 2U o 4U). La tecnología PoE (Power over Ethernet, estándares IEEE 802.3af hasta 15.4 W, 802.3at PoE+ hasta 30 W y 802.3bt PoE++ hasta 60-90 W) inyecta alimentación de corriente continua (48 VDC) sobre los mismos pares del cable UTP junto con los datos, permitiendo encender teléfonos VoIP, cámaras IP y puntos de acceso Wi-Fi en techos sin instalar tomas eléctricas de CA.',
        ],
      },
      {
        title: '4. Tecnologías LAN/WLAN: Ethernet, Wi-Fi, Conmutación Capa 2, VLANs, STP y EtherChannel',
        description:
          'En la Capa de Enlace de Datos, las redes cableadas e inalámbricas emplean mecanismos distintos para arbitrar el acceso al medio compartido y segmentar dominios de difusión.',
        points: [
          'Ethernet IEEE 802.3 (CSMA/CD) vs. Wi-Fi IEEE 802.11 (CSMA/CA): En redes Ethernet half-duplex históricas se utilizaba CSMA/CD (Carrier Sense Multiple Access with Collision Detection): las estaciones escuchan el cable y, si dos transmiten a la vez, detectan el pico de voltaje de la colisión, envían una señal Jam y esperan un tiempo aleatorio (Backoff exponencial binario). Con switches modernos en modo Full-Duplex ya no existen colisiones. Por el contrario, en redes inalámbricas Wi-Fi (IEEE 802.11) una antena no puede transmitir y escuchar en la misma frecuencia al mismo tiempo para detectar colisiones en el aire ni solucionar el problema del nodo oculto, por lo que utiliza CSMA/CA (Collision Avoidance / Prevención de Colisiones) apoyado en tramas de confirmación obligatoria ACK y reserva opcional RTS/CTS. Para ampliar la cobertura física de una red inalámbrica existente se utilizan Repetidores / Puntos de Acceso (AP) en modo extensor o malla.',
          'Dominios de Colisión y Dominios de Broadcast (Hub vs. Bridge/Switch vs. Router): 1) Un Hub (Concentrador de Capa 1) regenera los bits por todos sus puertos; todos sus puertos pertenecen a 1 solo dominio de colisión y 1 solo dominio de broadcast. 2) Un Bridge (Puente) o Switch de Capa 2 aprende las direcciones MAC de origen en su tabla CAM (MAC Address Table) y reenvía tramas unicast únicamente por el puerto destino: cada puerto de un switch constituye un dominio de colisión independiente (microsegmentación), pero por defecto todos los puertos siguen en el mismo dominio de broadcast. 3) Un Router (Capa 3) o una VLAN dividen y aíslan los dominios de broadcast (los routers no reenvían tramas de difusión L2 `FF:FF:FF:FF:FF:FF`).',
          'VLANs (Redes de Área Local Virtuales) y Enlaces Troncales IEEE 802.1Q: Una VLAN segmenta lógicamente un switch físico en múltiples dominios de broadcast aislados por departamento o función (ej. VLAN 10 Ventas, VLAN 20 Ingeniería, VLAN 99 Administración), mejorando la seguridad y el rendimiento sin importar la ubicación física del cable. Para transportar el tráfico de múltiples VLANs simultáneamente a través de un único enlace físico entre dos switches o hacia un router ("Router-on-a-Stick"), el puerto debe configurarse en modo Trunk (Troncal) bajo el estándar IEEE 802.1Q, el cual inserta una etiqueta (Tag) de 4 bytes en el encabezado de la trama Ethernet indicando el VLAN ID (excepto para la VLAN Nativa, que viaja sin etiquetar).',
          'STP (Spanning Tree Protocol) y EtherChannel (LACP / PAgP): Cuando se conectan cables redundantes entre switches de Capa 2 sin control, se forman bucles físicos que provocan tormentas de broadcast infinitas, tramas duplicadas e inestabilidad de la tabla MAC. El protocolo STP (IEEE 802.1D y Rapid STP 802.1w) elige un Puente Raíz (Root Bridge, el de menor Bridge ID = Prioridad + MAC) y bloquea lógicamente los puertos redundantes para garantizar una topología lógica libre de bucles, reactivándolos automáticamente si cae el enlace principal. Por su parte, EtherChannel (estándar abierto LACP IEEE 802.3ad o propietario Cisco PAgP) agrupa de 2 a 8 enlaces físicos paralelos entre dos switches en un único enlace lógico agregado (Port-Channel), sumando el ancho de banda y ofreciendo balanceo de carga y redundancia sin que STP bloquee los cables.',
          'Detección de Errores en Capa 2 (Bit de Paridad y CRC / FCS): El método más simple es el Bit de Paridad (par o impar), que añade 1 bit para que el número total de unos sea par o impar (solo detecta errores de un número impar de bits). En tramas Ethernet y Wi-Fi se utiliza el campo FCS (Frame Check Sequence) de 32 bits al final de la trama, calculado mediante un polinomio de Redundancia Cíclica (CRC-32): el receptor recalcula el CRC sobre la trama recibida y, si no coincide con el FCS, descarta silenciosamente la trama corrupta.',
        ],
      },
      {
        title: '5. Direccionamiento IPv4 e IPv6, Subnetting, VLSM, NAT/PAT y Enrutamiento Dinámico',
        description:
          'La Capa de Red (Capa 3) proporciona direccionamiento jerárquico independiente del hardware para encaminar paquetes entre redes distintas.',
        points: [
          'Estructura de IPv4, Clases y Direcciones Privadas (RFC 1918): Una dirección IPv4 tiene 32 bits divididos en 4 octetos separados por puntos (notación decimal punteada). Históricamente se dividió en Clase A (`1.0.0.0` a `126.255.255.255`, máscara `/8`), Clase B (`128.0.0.0` a `191.255.255.255`, `/16`), Clase C (`192.0.0.0` a `223.255.255.255`, `/24`), Clase D (`224.0.0.0` a `239.255.255.255` para Multicast) y `127.0.0.0/8` reservada para diagnóstico de bucle invertido local (`127.0.0.1` Loopback). Los bloques de direcciones IPv4 Privadas (RFC 1918, no enrutables en Internet público) son: `10.0.0.0/8`, `172.16.0.0/12` (`172.16.0.0` – `172.31.255.255`) y `192.168.0.0/16`. Para salir a Internet requieren traducción NAT / PAT (Port Address Translation / NAT Overload) en el router de borde.',
          'Cálculo de Subredes (Subnetting) y VLSM (Máscara de Subred de Longitud Variable): Si una máscara tiene prefijo `/P` (donde P son los bits de red en 1), quedan `h = 32 - P` bits para hosts. El número total de direcciones del bloque es `2^h` y el número de hosts asignables a interfaces es exactamente `2^h - 2` (se restan siempre 2 direcciones: la primera, con todos los bits de host en 0, es la Dirección de Red; la última, con todos los bits de host en 1, es la Dirección de Broadcast). Con VLSM se subdivide una red asignando máscaras a la medida de cada subred (ordenando siempre de mayor a menor cantidad de hosts requeridos) para evitar el desperdicio de direcciones; por ejemplo, un enlace punto a punto entre dos routers solo necesita 2 IPs útiles, por lo que su máscara óptima es `/30` (`255.255.255.252`, que da `2² - 2 = 2` hosts útiles).',
          'Arquitectura IPv6 y Autoconfiguración SLAAC: Diseñado para resolver el agotamiento de IPv4, IPv6 utiliza direcciones de 128 bits (cuatro veces la longitud de IPv4, con 2^128 ≈ 3.4 × 10³⁸ direcciones) representadas en 8 grupos de 4 dígitos hexadecimales separados por dos puntos (ej. `2001:0db8:85a3::8a2e:0370:7334`). Elimina el broadcast (reemplazado por Multicast y Anycast), simplifica el encabezado a 40 bytes fijos y permite la autoconfiguración sin estado SLAAC (Stateless Address Autoconfiguration): cuando un host IPv6 se conecta a la red, genera su dirección Link-Local (`fe80::/10`), envía un mensaje ICMPv6 Router Solicitation (RS) y el router responde con un Router Advertisement (RA) entregándole el prefijo global `/64` para que el propio host forme su dirección IPv6 global sin requerir un servidor DHCP.',
          'Tabla de Enrutamiento, Ruta por Defecto y Protocolos de Enrutamiento (IGP vs. EGP): Los routers reenvían paquetes buscando en su tabla de enrutamiento la coincidencia de prefijo más larga (Longest Prefix Match). Cuando un paquete va dirigido a una red remota desconocida (como cualquier sitio en Internet), el router utiliza la Ruta por Defecto (Gateway of Last Resort), representada en IPv4 como `0.0.0.0/0` (con máscara `0.0.0.0`) y en IPv6 como `::/0`. Los protocolos de enrutamiento dinámico se clasifican en: 1) Vector Distancia (ej. RIP / RIPv2): Calcula la ruta según el número de saltos (máximo 15 saltos; 16 = inalcanzable) enviando tablas a sus vecinos; tiene convergencia lenta. 2) Estado de Enlace (Link-State, ej. OSPF e IS-IS): Cada router construye un mapa topológico completo del área (LSDB) mediante paquetes LSA y ejecuta el algoritmo de Dijkstra (SPF) calculando el costo en función del ancho de banda; ofrece convergencia ultrarrápida y jerarquía multi-área. 3) Vector de Ruta Exterior (EGP, ej. BGP — Border Gateway Protocol, puerto TCP 179): Es el protocolo estándar que interconecta Sistemas Autónomos (AS) de proveedores ISP y forma el núcleo de Internet.',
        ],
      },
    ],
    tables: [
      {
        title: 'Las 7 Capas del Modelo OSI: PDU, Protocolos y Dispositivos Asociados',
        headers: ['Capa OSI', 'PDU (Unidad de Datos)', 'Protocolos y Estándares Clave', 'Dispositivos y Direccionamiento'],
        rows: [
          ['7. Aplicación', 'Datos (Data)', 'HTTP, HTTPS, DNS, DHCP, SSH, FTP, SMTP, SNMP, NTP', 'Gateways de aplicación, Firewalls L7 / WAF, Nombres DNS'],
          ['6. Presentación', 'Datos (Data)', 'TLS/SSL, UTF-8, ASCII, MIME, JPEG, MPEG, Compresión', 'Traductores de formato y motores criptográficos'],
          ['5. Sesión', 'Datos (Data)', 'NetBIOS, RPC, Sockets, SIP (control de llamada)', 'Control de diálogos y puntos de sincronización'],
          ['4. Transporte', 'Segmento (TCP) / Datagrama (UDP)', 'TCP (confiable, orientado a conexión) y UDP (sin conexión)', 'Puertos lógicos (0 a 65535), Balanceadores L4'],
          ['3. Red', 'Paquete (Packet)', 'IPv4, IPv6, ICMP, IPSec, OSPF, RIP, EIGRP, BGP', 'Routers, Switches Multicapa (L3) — Direcciones IP lógicas'],
          ['2. Enlace de Datos', 'Trama (Frame)', 'Ethernet 802.3, Wi-Fi 802.11, VLAN 802.1Q, STP, PPP, ARP', 'Switches L2, Bridges, Tarjetas NIC — Direcciones MAC (48 bits)'],
          ['1. Física', 'Bits (Señal física)', '1000BASE-T, 10GBASE-SR, TIA-568, RS-232, Fibra, PoE', 'Cables UTP/Fibra, Hubs, Repetidores, Transceptores SFP'],
        ],
      },
      {
        title: 'Tabla Maestra de Subredes IPv4 CIDR / VLSM (Último Octeto)',
        headers: ['Prefijo CIDR', 'Máscara Decimal', 'Bits de Host (h)', 'Total IPs (2^h)', 'Hosts Útiles (2^h - 2)', 'Uso Típico en Diseño de Red'],
        rows: [
          ['/24', '255.255.255.0', '8 bits', '256', '254 hosts', 'LAN estándar de departamento o piso completo.'],
          ['/25', '255.255.255.128', '7 bits', '128', '126 hosts', 'División de una red /24 en 2 subredes medianas.'],
          ['/26', '255.255.255.192', '6 bits', '64', '62 hosts', 'Subred para laboratorios o áreas de ~50 equipos.'],
          ['/27', '255.255.255.224', '5 bits', '32', '30 hosts', 'Subred para oficinas pequeñas o segmento de servidores.'],
          ['/28', '255.255.255.240', '4 bits', '16', '14 hosts', 'Segmento DMZ pequeño o gestión de equipos.'],
          ['/29', '255.255.255.248', '3 bits', '8', '6 hosts', 'Granja pequeña de routers redundantes (HSRP/VRRP).'],
          ['/30', '255.255.255.252', '2 bits', '4', '2 hosts', 'Enlace WAN punto a punto entre 2 routers (ahorro máximo).'],
        ],
      },
      {
        title: 'Comparativa de Protocolos de Enrutamiento Dinámico',
        headers: ['Protocolo', 'Clasificación / Algoritmo', 'Métrica Utilizada', 'Distancia Administrativa (Cisco) y Uso'],
        rows: [
          ['RIPv2', 'IGP — Vector Distancia (Bellman-Ford)', 'Conteo de saltos (máx. 15 saltos)', 'DA = 120. Redes pequeñas; convergencia lenta.'],
          ['OSPF', 'IGP — Estado de Enlace (Dijkstra SPF)', 'Costo (inversamente proporcional al Ancho de Banda)', 'DA = 110. Estándar abierto empresarial; convergente y jerárquico.'],
          ['EIGRP', 'IGP — Vector Distancia Avanzado (DUAL)', 'Compuesta (Ancho de banda y Retardo por defecto)', 'DA = 90 (interno). Convergencia instantánea mediante rutas factibles.'],
          ['BGP', 'EGP — Vector de Ruta (Path Vector)', 'Atributos de política (AS-Path, Local Pref, MED)', 'DA = 20 (eBGP). Enrutamiento global de Internet entre Sistemas Autónomos.'],
        ],
      },
      {
        title: 'Estándares IEEE 802.x Indispensables en Redes LAN / WLAN',
        headers: ['Estándar IEEE', 'Nombre / Tecnología', 'Función Técnica Exacta'],
        rows: [
          ['IEEE 802.3', 'Ethernet (CSMA/CD)', 'Redes LAN cableadas en cobre (10/100/1000BASE-T) y fibra óptica.'],
          ['IEEE 802.3ad (802.1AX)', 'LACP (EtherChannel)', 'Agregación abierta de múltiples enlaces físicos en un solo canal lógico.'],
          ['IEEE 802.3af / at / bt', 'PoE / PoE+ / PoE++', 'Alimentación eléctrica por cable UTP (15.4 W en af, 30 W en at, 60-90 W en bt).'],
          ['IEEE 802.1Q', 'VLAN Trunking', 'Etiquetado de 4 bytes para transportar múltiples VLANs por un enlace troncal.'],
          ['IEEE 802.1D / 802.1w', 'STP / Rapid STP (RSTP)', 'Prevención de bucles de Capa 2 entre switches bloqueando puertos redundantes.'],
          ['IEEE 802.1X', 'Port-Based Network Access', 'Autenticación de dispositivos en puertos de switch/Wi-Fi mediante servidor RADIUS.'],
          ['IEEE 802.11 a/b/g/n/ac/ax', 'Wi-Fi (CSMA/CA)', 'Redes inalámbricas WLAN en bandas de 2.4 GHz, 5 GHz y 6 GHz (Wi-Fi 4/5/6).'],
          ['IEEE 802.11i / 802.11w', 'WPA2 / PMF (Tramas Protegidas)', 'Seguridad inalámbrica con cifrado AES-CCMP y protección contra Deautenticación.'],
        ],
      },
    ],
    formulas: [
      { label: 'Hosts Utilizables y Subredes en IPv4', code: 'Hosts_útiles = 2^h - 2   (donde h = 32 - Prefijo_CIDR)   |   Subredes = 2^bits_prestados' },
      { label: 'Enlaces Físicos en Topología Malla Completa (Full Mesh)', code: 'Enlaces = [ N · (N - 1) ] / 2   (donde N = número de nodos/routers)' },
      { label: 'Ruta por Defecto (Default Route) en IPv4 e IPv6', code: 'IPv4: 0.0.0.0 / 0 (máscara 0.0.0.0)   |   IPv6: :: / 0' },
      { label: 'Rangos Privados IPv4 (RFC 1918)', code: '10.0.0.0/8   |   172.16.0.0/12 (172.16–172.31)   |   192.168.0.0/16' },
      { label: 'Altura de Unidad de Rack Estándar (EIA-310)', code: '1U = 1.75 pulgadas = 44.45 mm   (Ancho estándar de bastidor = 19 pulgadas)' },
    ],
    examTips: [
      'Recuerda el orden exacto de las PDUs de arriba hacia abajo: Datos (Capas 7-5) → Segmento/Datagrama (Capa 4 Transporte) → Paquete (Capa 3 Red) → Trama (Capa 2 Enlace) → Bits (Capa 1 Física).',
      'En Ethernet se usa CSMA/CD (detección de colisiones en cobre); en Wi-Fi (IEEE 802.11) se usa CSMA/CA (prevención de colisiones en aire).',
      'Si te piden conectar múltiples VLANs entre dos switches usando un solo cable físico, debes configurar un enlace Troncal (Trunk) con etiquetado IEEE 802.1Q.',
      'El protocolo OSPF es de Estado de Enlace y calcula la ruta más corta usando el algoritmo de Dijkstra en función del ancho de banda; RIP es de Vector Distancia y usa conteo de saltos.',
      'En IPv6, el mecanismo que permite a un host autoconfigurar su propia dirección IP sin necesitar un servidor DHCP se llama SLAAC (mediante mensajes Router Advertisement).',
    ],
  },

  {
    subareaCode: '2.2',
    subareaName: '2.2 Administración y configuración de redes',
    area: 'Implementación de Redes',
    sources: [
      'Cisco Systems — CCNA Exploration Network: Configuración, Diagnóstico y Servicios (scripts/raw_books/Exploration Network Cap 1–11.ppt)',
      'Subramanian, M. — Network Management: Principles and Practice',
      'Forouzan, B. A. — Transmisión de Datos y Redes de Comunicaciones',
      'RFC 2131 (DHCP), RFC 1035 (DNS), RFC 3411-3418 (SNMPv3), RFC 5424 (Syslog) y RFC 5905 (NTP)',
    ],
    summary:
      'Abarca la operación, monitoreo, diagnóstico y configuración de servicios e infraestructura de red: protocolos y puertos bien conocidos (DHCP, DNS, SNMP v1/v2c/v3, Syslog, NTP, ARP, HTTP/HTTPS, SSH, Telnet, FTP, SMTP, RDP, ICMP), comandos esenciales de diagnóstico en sistemas operativos Windows, Linux y Cisco IOS (`ping`, `tracert`/`traceroute`, `ipconfig`, `ip addr`/`ifconfig`, `route print`, `netstat`, `arp`, `nslookup`, Wireshark), configuración de VLAN de administración y Default Gateway en switches, establecimiento de línea base de red (Baseline), NetFlow y políticas de Calidad de Servicio (QoS).',
    keyTopics: [
      'Protocolo DHCP (Proceso DORA, Reservas por MAC y Relay Agent)',
      'Sistema de Nombres de Dominio DNS (Registros A, AAAA, MX, CNAME, PTR, NS)',
      'Monitoreo con SNMP (NMS, Agente, MIB, Traps y Seguridad en SNMPv3)',
      'Registro de Eventos Syslog (Niveles 0 Emergency a 7 Debug) y Sincronización NTP',
      'Tabla Completa de Puertos TCP/UDP (SSH 22, Telnet 23, DNS 53, HTTP 80, HTTPS 443, RDP 3389)',
      'Resolución ARP (IP a MAC) y Mensajes de Diagnóstico ICMP (Echo / Time Exceeded)',
      'Comandos de Red en Windows y Linux (ping, tracert, ipconfig, netstat, arp, route, nslookup)',
      'Administración de Switches/Routers (VLAN de Administración, Default Gateway, running/startup-config)',
      'Línea Base de Red (Network Baseline), Analizadores de Paquetes (Wireshark), NetFlow y QoS',
    ],
    sections: [
      {
        title: '1. Servicios Fundamentales de Infraestructura: DHCP, DNS y ARP',
        description:
          'Para que cualquier host pueda comunicarse en una red empresarial sin configuración manual propensa a errores, intervienen de forma coordinada DHCP (asignación de parámetros IP), DNS (resolución de nombres a IP) y ARP (resolución de IP a dirección física MAC).',
        points: [
          'DHCP (Dynamic Host Configuration Protocol — Puertos UDP 67 Servidor / UDP 68 Cliente): Asigna dinámicamente dirección IP, máscara de subred, puerta de enlace predeterminada (Default Gateway) y servidores DNS mediante el proceso de 4 pasos DORA: 1) DHCP Discover (difusión del cliente buscando servidor), 2) DHCP Offer (oferta de concesión del servidor), 3) DHCP Request (solicitud formal de la IP ofrecida) y 4) DHCP Acknowledge (confirmación y tiempo de concesión o Lease Time). Si una impresora o servidor requiere recibir siempre exactamente la misma IP dinámica, se configura una Reserva DHCP vinculada a su dirección física MAC. Si el servidor DHCP está en otra subred o VLAN, el router debe configurarse con `ip helper-address` (DHCP Relay Agent) para reenviar los broadcasts como unicast.',
          'DNS (Domain Name System — Puerto UDP/TCP 53): Base de datos distribuida y jerárquica que traduce nombres de dominio legibles (ej. `www.ceneval.edu.mx`) en direcciones IP numéricas. Utiliza UDP 53 para consultas rápidas estándar y TCP 53 para transferencias de zona entre servidores o respuestas mayores a 512 bytes. Tipos de registros de recursos DNS esenciales para el examen: 1) Registro `A`: Asocia un nombre de host con una dirección IPv4 de 32 bits. 2) Registro `AAAA` (Quad-A): Asocia un nombre de host con una dirección IPv6 de 128 bits. 3) Registro `CNAME` (Canonical Name): Crea un alias que apunta de un nombre de dominio a otro nombre canónico. 4) Registro `MX` (Mail Exchange): Especifica el servidor de correo electrónico responsable de recibir mensajes para ese dominio. 5) Registro `PTR` (Pointer): Realiza la búsqueda inversa (de dirección IP a nombre de dominio). 6) Registro `NS` (Name Server): Indica los servidores DNS autoritativos de la zona.',
          'ARP (Address Resolution Protocol) y Caché ARP: Cuando un host conoce la dirección IPv4 de destino dentro de su misma subred (o la IP de su Default Gateway) pero desconoce su dirección física MAC de 48 bits necesaria para armar la trama Ethernet de Capa 2, envía una solicitud ARP Request en difusión (`FF:FF:FF:FF:FF:FF`) preguntando "¿Quién tiene esta IP?". Solo el nodo dueño de esa IP responde con un ARP Reply unicast indicando su dirección MAC, la cual se almacena temporalmente en la tabla o caché ARP de la estación.',
        ],
      },
      {
        title: '2. Protocolos de Gestión, Monitoreo y Operación: SNMP (v1/v2c/v3), Syslog y NTP',
        description:
          'La administración proactiva de una red empresarial se apoya en tres pilares estandarizados: monitoreo de estado y métricas (SNMP), recolección centralizada de bitácoras (Syslog) y sincronización exacta de tiempo (NTP).',
        points: [
          'SNMP (Simple Network Management Protocol — Puertos UDP 161 Agente / UDP 162 Traps): Permite supervisar y gestionar routers, switches, servidores, impresoras y UPS. Consta de tres elementos: 1) Gestor NMS (Network Management System): Consola central (ej. Zabbix, Nagios, PRTG, SolarWinds) que consulta a los equipos. 2) Agente SNMP: Proceso ligero que corre dentro del dispositivo administrado. 3) MIB (Management Information Base): Base de datos jerárquica de variables identificadas por OIDs (como uso de CPU, temperatura, tráfico por interfaz o estado de puertos). El NMS consulta al agente en el puerto UDP 161 (`Get`, `GetNext`, `GetBulk`, `Set`), pero cuando ocurre una emergencia súbita (ej. se cae un enlace o sube la temperatura), el propio Agente envía asíncronamente una alerta no solicitada llamada SNMP Trap (o Inform) hacia el NMS en el puerto UDP 162.',
          'Evolución de Versiones SNMP y por qué elegir SNMPv3: SNMPv1 y SNMPv2c utilizan "cadenas de comunidad" (Community Strings como `public` para solo lectura y `private` para lectura/escritura) que viajan en texto plano sin cifrar por la red, siendo vulnerables a interceptación. SNMPv3 es el estándar obligatorio en entornos seguros porque incorpora tres niveles de seguridad (`noAuthNoPriv`, `authNoPriv` y `authPriv`) que proveen Autenticación criptográfica del usuario (HMAC-SHA / MD5 para verificar identidad e integridad) y Cifrado de la carga útil (AES / DES para garantizar confidencialidad total de los paquetes de gestión).',
          'Syslog (System Logging Protocol — Puerto UDP 514 / TCP 6514 TLS): Estándar para que routers, switches, firewalls y servidores envíen en tiempo real sus mensajes de eventos y auditoría hacia un servidor recolector central. Clasifica cada mensaje en 8 niveles de severidad numérica del 0 (más crítico) al 7 (menos crítico): `0 Emergency` (sistema inutilizable), `1 Alert` (acción inmediata requerida), `2 Critical` (condición crítica), `3 Error` (condición de error), `4 Warning` (advertencia), `5 Notice` (evento normal pero significativo), `6 Informational` (mensaje informativo) y `7 Debug` (mensajes detallados de depuración).',
          'NTP (Network Time Protocol — Puerto UDP 123): Sincroniza los relojes de todos los dispositivos de la red con una fuente de tiempo atómica o GPS organizada en niveles jerárquicos llamados Estratos (`Stratum 0` es el reloj atómico de referencia, `Stratum 1` el servidor conectado directamente a él, `Stratum 2` el que se sincroniza con el 1, hasta `Stratum 15`). Contar con NTP sincronizado al milisegundo es indispensable para correlacionar bitácoras de seguridad (Syslog/SIEM) entre distintos equipos durante una auditoría forense y para validar certificados digitales TLS y tickets Kerberos.',
        ],
      },
      {
        title: '3. Herramientas y Comandos de Diagnóstico en Windows, Linux y Cisco IOS',
        description:
          'El examen EGEL evalúa frecuentemente qué comando exacto de línea de comandos (CLI) debe ejecutar el administrador para diagnosticar un fallo específico en una estación o servidor.',
        points: [
          '`ping` (Packet Internet Groper — Protocolo ICMP Echo Request tipo 8 / Echo Reply tipo 0): Verifica la conectividad básica en Capa 3 (IP) hacia un host o gateway midiendo el tiempo de ida y vuelta (RTT) y el porcentaje de pérdida de paquetes. En Windows, la opción `ping -t <IP>` envía paquetes de manera continua e ininterrumpida hasta que el administrador presiona `Ctrl + C`, ideal para monitorear en vivo cuándo se restablece un enlace o detectar microcortes.',
          '`tracert` (Windows) / `traceroute` (Linux y Cisco IOS): Descubre y muestra la ruta exacta salto por salto (cada router intermedio) que siguen los paquetes hasta llegar al destino, midiendo la latencia de cada tramo. Funciona manipulando inteligentemente el campo TTL (Time To Live) del encabezado IP: envía el primer grupo de paquetes con `TTL = 1`; el primer router lo decrementa a 0, descarta el paquete y devuelve un mensaje ICMP `Time Exceeded` (Tiempo Excedido, tipo 11), revelando su IP. Luego envía con `TTL = 2`, `TTL = 3`, sucesivamente hasta alcanzar el destino.',
          '`ipconfig` (Windows) vs. `ip addr` / `ifconfig` (Linux): En Windows, `ipconfig` muestra la dirección IP, máscara y puerta de enlace; `ipconfig /all` despliega información detallada incluyendo la dirección física MAC, servidores DNS, servidor DHCP y fecha de concesión; `ipconfig /release` libera la concesión DHCP actual (dejando la IP en 0.0.0.0); `ipconfig /renew` solicita una nueva dirección IP al servidor DHCP; e `ipconfig /flushdns` vacía la caché local de resolución DNS. En sistemas Linux modernos estas funciones de visualización y configuración de interfaces de red se realizan con el comando `ip addr` (o `ip a` de la suite `iproute2`) y el clásico `ifconfig`.',
          '`netstat` (Network Statistics) y `ss`: Muestra las conexiones de red activas (TCP y UDP), las tablas de enrutamiento y estadísticas de interfaces. El comando `netstat -an` (o `netstat -ano` para incluir el PID del proceso) lista en formato numérico todas las conexiones activas y todos los puertos locales que están abiertos en estado `LISTENING` (escuchando) o `ESTABLISHED`, siendo clave para detectar servicios no autorizados o puertas traseras.',
          '`arp -a` / `arp -d` y `route print` / `ip route`: El comando `arp -a` muestra la tabla de caché ARP actual (asociaciones IP ↔ Dirección MAC aprendidas en la red local), mientras que `arp -d` elimina entradas para forzar una nueva resolución ARP (útil tras cambiar una tarjeta de red o mitigar envenenamiento ARP). Por su parte, `route print` (en Windows) o `ip route` / `netstat -r` (en Linux) muestra la tabla de enrutamiento local del host, permitiendo verificar cuál es la puerta de enlace predeterminada (`0.0.0.0`) y las rutas estáticas configuradas.',
          '`nslookup` y `dig` (Diagnóstico de Resolución DNS): Cuando un usuario puede hacer `ping` a una dirección IP externa (ej. `8.8.8.8`) pero no puede abrir páginas web por su nombre de dominio, el fallo reside en el servicio DNS. Los comandos `nslookup <dominio>` (Windows/Linux) y `dig <dominio>` permiten consultar directamente al servidor DNS para verificar qué dirección IP o registro (`MX`, `NS`, `TXT`) está devolviendo.',
        ],
      },
      {
        title: '4. Gestión de Equipos Activos, Línea Base (Baseline), Analizadores de Protocolos y QoS',
        description:
          'Una administración profesional combina el acceso remoto seguro a los equipos con el análisis de tráfico y la priorización de servicios sensibles a la latencia.',
        points: [
          'Administración Remota Segura: SSH (Puerto TCP 22) vs. Telnet (Puerto TCP 23) y RDP (Puerto TCP 3389): Telnet permite abrir una sesión de consola remota en un switch o router, pero transmite el usuario, la contraseña y todos los comandos en texto plano sin cifrar, por lo que debe deshabilitarse en producción (`transport input ssh`). SSH (Secure Shell, TCP 22) proporciona acceso a la CLI con cifrado fuerte de extremo a extremo. Para administración gráfica de servidores Windows se emplea RDP (Remote Desktop Protocol, TCP 3389).',
          'Configuración de Switch Administrable (VLAN de Administración y Default Gateway): Aunque un switch de Capa 2 conmuta tramas basándose solo en direcciones MAC y no necesita dirección IP para mover tráfico de usuarios, sí requiere que se configure una dirección IP en su interfaz virtual de VLAN de Administración (SVI, ej. `interface vlan 99`) para poder administrarlo remotamente por SSH o monitorearlo con SNMP. Además, para poder conectarse a ese switch desde una subred distinta a través de un router, es indispensable configurar en el switch el comando `ip default-gateway <IP_del_router>`. En Cisco IOS, la configuración activa en RAM es `running-config` y debe guardarse en NVRAM con `copy running-config startup-config` (o `write memory`) para no perderse al reiniciar.',
          'Línea Base de Red (Network Baseline), Wireshark y NetFlow: La Línea Base (Baseline) es la medición documentada del comportamiento y rendimiento normal de la red (utilización promedio de ancho de banda, latencia típica, uso de CPU/RAM en horas pico y valle) a lo largo del tiempo; sirve como punto de referencia objetivo para detectar anomalías, degradaciones o ataques. Para inspeccionar el contenido detallado de los encabezados y carga útil de cada trama/paquete capturado en una interfaz (en modo promiscuo o mediante un puerto espejo Port Mirroring / SPAN en el switch) se utiliza un analizador de protocolos como Wireshark. Para estadísticas de flujos de tráfico (quién habla con quién, qué puertos y cuántos bytes consumen) sin capturar toda la carga útil se emplea Cisco NetFlow (o sFlow/IPFIX).',
          'Calidad de Servicio (QoS — Quality of Service): Cuando un enlace experimenta congestión, todos los paquetes competirían por igual (Best-Effort) causando cortes en llamadas de voz o video. QoS clasifica y marca los paquetes (usando el campo CoS en Capa 2 802.1p o DSCP en el encabezado IP de Capa 3) para aplicar colas de prioridad estricta (LLQ — Low Latency Queuing) al tráfico sensible al retardo y al jitter (VoIP y videoconferencia), garantizando su entrega oportuna por encima de descargas masivas de archivos o respaldos.',
        ],
      },
    ],
    tables: [
      {
        title: 'Tabla Maestra de Protocolos, Números de Puertos TCP/UDP y Funciones para el Examen EGEL',
        headers: ['Protocolo / Servicio', 'Número de Puerto y Transporte', 'Función Principal y Seguridad en la Red'],
        rows: [
          ['FTP (File Transfer Protocol)', 'TCP 20 (Datos) y TCP 21 (Control)', 'Transferencia de archivos autenticada (texto plano; usar SFTP en TCP 22 o FTPS en 990).'],
          ['SSH (Secure Shell) / SFTP / SCP', 'TCP 22', 'Administración remota de línea de comandos (CLI) y transferencia de archivos CIFRADA.'],
          ['Telnet', 'TCP 23', 'Consola remota heredada en TEXTO PLANO (inseguro; vulnerable a captura con Wireshark).'],
          ['SMTP (Simple Mail Transfer)', 'TCP 25 (Texto) / TCP 587 y 465 (TLS)', 'Envío y transferencia de correo electrónico saliente entre cliente y servidores.'],
          ['TACACS+', 'TCP 49', 'Protocolo AAA de Cisco para administración centralizada de routers y switches (cifra todo el paquete).'],
          ['DNS (Domain Name System)', 'UDP 53 (Consultas) / TCP 53 (Zonas)', 'Traducción de nombres de dominio (FQDN) a direcciones IPv4 (A) e IPv6 (AAAA).'],
          ['DHCP', 'UDP 67 (Servidor) / UDP 68 (Cliente)', 'Asignación dinámica automática de IP, máscara, gateway y DNS (proceso DORA).'],
          ['TFTP (Trivial FTP)', 'UDP 69', 'Transferencia ligera sin autenticación usada para respaldar IOS e imágenes de arranque en LAN.'],
          ['HTTP', 'TCP 80', 'Transferencia de hipertexto web sin cifrar (texto plano).'],
          ['Kerberos', 'TCP / UDP 88', 'Protocolo de autenticación por tickets criptográficos en dominios Active Directory.'],
          ['POP3 / POP3S', 'TCP 110 (Plano) / TCP 995 (TLS)', 'Descarga de correo electrónico entrante desde el servidor hacia el cliente local.'],
          ['NTP (Network Time Protocol)', 'UDP 123', 'Sincronización jerárquica (Stratum 0 a 15) de relojes de red para correlación de logs.'],
          ['IMAP / IMAPS', 'TCP 143 (Plano) / TCP 993 (TLS)', 'Gestión y lectura de correo electrónico sincronizado directamente en el servidor.'],
          ['SNMP', 'UDP 161 (Agente) / UDP 162 (Traps)', 'Monitoreo y gestión de dispositivos de red (MIB/OIDs). SNMPv3 añade cifrado y autenticación.'],
          ['BGP (Border Gateway Protocol)', 'TCP 179', 'Protocolo de enrutamiento exterior (EGP) entre Sistemas Autónomos de Internet.'],
          ['LDAP / LDAPS', 'TCP/UDP 389 (Plano) / TCP 636 (TLS)', 'Consulta y modificación de servicios de directorio (Active Directory / OpenLDAP).'],
          ['HTTPS (HTTP over TLS/SSL)', 'TCP 443', 'Navegación web y APIs REST seguras con cifrado TLS y certificados digitales X.509.'],
          ['SMB / CIFS (Server Message Block)', 'TCP 445', 'Carpetas e impresoras compartidas en redes Windows (objetivo frecuente de gusanos/ransomware).'],
          ['IPsec IKE / NAT-Traversal', 'UDP 500 (IKE) y UDP 4500 (NAT-T)', 'Negociación de asociaciones de seguridad y llaves para túneles VPN IPsec.'],
          ['Syslog', 'UDP 514 (Estándar) / TCP 6514 (TLS)', 'Envío centralizado de bitácoras y alertas de sistema (severidades 0 Emergency a 7 Debug).'],
          ['RADIUS (AAA)', 'UDP 1812 (Auth) y UDP 1813 (Acct)', 'Autenticación, Autorización y Contabilidad centralizada para Wi-Fi Empresarial y 802.1X.'],
          ['RDP (Remote Desktop Protocol)', 'TCP 3389', 'Escritorio remoto gráfico para administración de clientes y servidores Windows.'],
        ],
      },
      {
        title: 'Referencia Rápida de Comandos de Diagnóstico (Windows, Linux y Cisco IOS)',
        headers: ['Comando', 'Plataforma', 'Qué Diagnostica, Configura o Muestra Exactamente'],
        rows: [
          ['ping / ping -t <IP>', 'Win / Linux / IOS', 'Comprueba conectividad IP (ICMP Echo) y mide RTT; `-t` en Windows envía paquetes sin parar.'],
          ['tracert / traceroute', 'Win / Linux / IOS', 'Muestra la lista de routers (saltos) hasta el destino incrementando el valor del campo TTL.'],
          ['ipconfig /all | /release | /renew', 'Windows', 'Muestra IP, MAC, DNS y DHCP (`/all`), libera concesión (`/release`) o solicita nueva IP (`/renew`).'],
          ['ip addr (ip a) / ifconfig', 'Linux', 'Lista y configura las interfaces de red, direcciones IP y direcciones MAC en sistemas Linux/Unix.'],
          ['netstat -an / ss -tuln', 'Win / Linux', 'Lista todas las conexiones TCP/UDP activas y los puertos abiertos en escucha (LISTENING) en números.'],
          ['arp -a  |  arp -d', 'Win / Linux', 'Muestra la tabla caché ARP (`IP ↔ MAC`) actual (`-a`) o borra entradas de la caché (`-d`).'],
          ['route print / ip route', 'Win / Linux', 'Imprime la tabla de enrutamiento local del sistema operativo y la ruta por defecto (`0.0.0.0`).'],
          ['nslookup / dig', 'Win / Linux', 'Consulta directamente al servidor DNS para diagnosticar fallos de resolución de nombres de dominio.'],
          ['show ip interface brief', 'Cisco IOS', 'Resumen rápido de todas las interfaces del router/switch, sus IPs asignadas y estado (`up/up`).'],
          ['show ip route', 'Cisco IOS', 'Muestra la tabla de enrutamiento del router (rutas conectadas `C`, estáticas `S`, `O` OSPF, `D` EIGRP, `S*` default).'],
          ['show vlan brief / show mac address-table', 'Cisco IOS (Switch)', 'Muestra las VLANs creadas con sus puertos asignados y la tabla CAM de direcciones MAC aprendidas.'],
        ],
      },
    ],
    formulas: [
      { label: 'Proceso de Asignación DHCP (4 mensajes)', code: '1. Discover (Broadcast) → 2. Offer → 3. Request → 4. Acknowledge (ACK)' },
      { label: 'Niveles de Severidad Syslog (0 más crítico a 7)', code: '0:Emergency | 1:Alert | 2:Critical | 3:Error | 4:Warning | 5:Notice | 6:Info | 7:Debug' },
      { label: 'Guardado de Configuración en Cisco IOS', code: 'copy running-config startup-config   (Pasa de RAM volátil a NVRAM permanente)' },
      { label: 'Mecanismo de Traceroute / Tracert', code: 'Envía paquetes con TTL = 1, 2, 3...; cada router responde ICMP Tipo 11 (Time Exceeded)' },
    ],
    examTips: [
      'Si una pregunta pide administrar remotamente un switch desde otra subred (otra VLAN), es obligatorio configurar en el switch una IP en su VLAN de administración Y además su `ip default-gateway`.',
      'SNMP usa UDP 161 para consultas normales y UDP 162 para alertas asíncronas (`SNMP Traps`). La versión que ofrece autenticación y cifrado es SNMPv3.',
      'En Syslog, el nivel 0 (`Emergency`) es el más grave de todos, mientras que el nivel 7 (`Debug`) es el menos grave.',
      'Si puedes hacer `ping` a `8.8.8.8` pero no puedes entrar a `google.com`, la conectividad IP funciona perfectamente y el problema está en el DNS (diagnostica con `nslookup`).',
      'Para ver en una máquina qué puertos TCP/UDP están abiertos esperando conexiones (`LISTENING`), el comando correcto es `netstat -an`.',
    ],
  },

  {
    subareaCode: '2.3',
    subareaName: '2.3 Seguridad en redes',
    area: 'Implementación de Redes',
    sources: [
      'Cisco Systems — CCNA Exploration Network y CCNA Security (scripts/raw_books/Exploration Network Cap 1–11.ppt)',
      'Stallings, W. — Criptografía y Seguridad de Redes: Principios y Práctica (7a Ed.)',
      'Estándares ISO/IEC 27001, NIST SP 800-53, IEEE 802.1X, IEEE 802.11i (WPA2/WPA3) e IETF IPsec / TLS 1.3',
    ],
    summary:
      'Estudia los pilares de la seguridad de la información (Tríada CIA: Confidencialidad, Integridad y Disponibilidad, además de Autenticación y No Repudio), criptografía simétrica (AES, 3DES, DES obsoleto) vs. asimétrica (RSA, Diffie-Hellman, ECC), funciones Hash (SHA-256) y PKI, catálogo completo de ciberataques (DoS/DDoS, MITM, Sniffing, Spoofing IP/ARP/DNS, MAC Flooding, Rogue DHCP, Replay, Deautenticación Wi-Fi, Phishing, Shoulder Surfing, Malware: Gusanos, Ransomware, Troyanos, vulnerabilidades 0-day y CVE), y arquitecturas de defensa en profundidad (Firewalls L3/L4/NGFW L7, Proxy, IDS vs. IPS, SIEM, Honeypots, VPN IPsec/TLS, WPA2-AES y WPA3-SAE, Port Security, 802.1X, DHCP Snooping, DAI, DNSSEC, Hardening, MFA, Nmap, Nessus y Pentesting).',
    keyTopics: [
      'Tríada CIA (Confidencialidad, Integridad, Disponibilidad) y No Repudio',
      'Criptografía Simétrica (AES vs. DES obsoleto) y Asimétrica (RSA, ECC, DH)',
      'Funciones Hash (SHA-256), Firmas Digitales y Certificados PKI (X.509)',
      'Ataques de Red: DoS/DDoS, MITM, Sniffing, Replay y Fuerza Bruta',
      'Ataques en Capa 2 y Servicios: MAC Flooding (CAM), ARP Spoofing, Rogue DHCP y DNS Poisoning',
      'Ingeniería Social (Phishing, Shoulder Surfing), Malware (Gusanos, Ransomware, Troyanos), 0-Day y CVE',
      'Defensa Perimetral: Firewall Stateful vs. NGFW (Capa 7), Proxy, DMZ y Honeypot',
      'Monitoreo Activo/Pasivo: IDS (Detección) vs. IPS (Prevención en Línea) y SIEM',
      'Seguridad en Switch Capa 2: Port Security, 802.1X, DHCP Snooping y Dynamic ARP Inspection (DAI)',
      'Seguridad Inalámbrica (WPA3-SAE, WPA2-AES vs. WEP), VPN IPsec, DNSSEC, MFA, Hardening y Auditoría (Nmap, Nessus, Pentest)',
    ],
    sections: [
      {
        title: '1. Principios de Seguridad (Tríada CIA), Criptografía Simétrica, Asimétrica, Hash y PKI',
        description:
          'Todo control de seguridad informática busca preservar tres propiedades fundamentales sobre los activos de información y las comunicaciones.',
        points: [
          'La Tríada CIA (Confidencialidad, Integridad y Disponibilidad) y el No Repudio: 1) Confidencialidad: Garantiza que la información sea accesible únicamente para las personas o sistemas autorizados (se implementa mediante Cifrado y Control de Acceso). 2) Integridad: Asegura que los datos no hayan sido alterados, modificados ni destruidos de manera no autorizada durante su almacenamiento o tránsito (se implementa mediante funciones Hash criptográficas, HMAC y Firmas Digitales). 3) Disponibilidad: Garantiza que los sistemas y datos estén operativos y accesibles cuando los usuarios legítimos los requieran (se protege mediante redundancia, alta disponibilidad, balanceo de carga, respaldos y mitigación anti-DDoS). Adicionalmente, el No Repudio impide que el emisor niegue haber enviado un mensaje (logrado mediante Firma Digital con clave privada).',
          'Criptografía Simétrica (Clave Privada Compartida): Utiliza exactamente la misma clave secreta tanto para cifrar como para descifrar la información. Es extremadamente rápida y eficiente en hardware, por lo que se usa para cifrar grandes volúmenes de datos y tráfico en tiempo real (VPNs, HTTPS, Wi-Fi, discos duros). El estándar mundial actual es AES (Advanced Encryption Standard, con claves de 128, 192 o 256 bits). También existe 3DES (Triple DES, en retiro), mientras que el antiguo algoritmo DES es completamente inseguro y obsoleto debido a que su clave de solo 56 bits puede romperse en pocas horas por fuerza bruta.',
          'Criptografía Asimétrica (Clave Pública y Clave Privada): Utiliza un par de claves matemáticamente vinculadas: una Clave Pública (que se comparte abiertamente con todo el mundo) y una Clave Privada (que el propietario guarda en estricto secreto). Es computacionalmente más lenta que la simétrica. Algoritmos principales: RSA (basado en la factorización de números primos grandes), ECC (Criptografía de Curva Elíptica, que ofrece la misma seguridad que RSA con claves mucho más cortas, ideal para móviles e IoT) y Diffie-Hellman (DH / ECDHE, que permite a dos partes acordar una clave simétrica secreta compartida a través de un canal inseguro). Regla clave: 1) Para Confidencialidad, el emisor cifra con la Clave Pública del receptor (solo el receptor puede descifrar con su Clave Privada). 2) Para Firma Digital (Autenticidad, Integridad y No Repudio), el emisor firma el hash del documento con su propia Clave Privada y cualquiera lo verifica con la Clave Pública del emisor.',
          'Funciones Hash Criptográficas y Certificados Digitales (PKI): Una función Hash (como SHA-256 o SHA-3; MD5 y SHA-1 son vulnerables a colisiones) es una función unidireccional e irreversible que toma una entrada de cualquier longitud y produce una huella digital de longitud fija; cambiar un solo bit del archivo original cambia radicalmente el hash resultante (efecto avalancha). La Infraestructura de Clave Pública (PKI) emplea Autoridades Certificadoras (CA) de confianza que emiten Certificados Digitales X.509 para vincular de forma verificable la identidad de un servidor o entidad con su Clave Pública.',
        ],
      },
      {
        title: '2. Amenazas, Vulnerabilidades (0-Day / CVE), Malware y Ataques en Red (Capas 2 a 7)',
        description:
          'Para seleccionar la contramedida exacta en el examen EGEL, es indispensable distinguir la mecánica técnica de cada ataque.',
        points: [
          'Ataques a la Disponibilidad, Interceptación y Repetición: 1) DoS (Denial of Service) y DDoS (Distributed DoS): Buscan agotar el ancho de banda, la memoria o la CPU de un servidor o router inundándolo con tráfico espurio (ej. SYN Flood, UDP/ICMP Flood); en un DDoS el ataque se lanza simultáneamente desde miles de equipos zombis comprometidos (Botnet). 2) Sniffing (Escucha pasiva): Captura de paquetes que viajan en texto plano por la red (contraseñas en HTTP, Telnet o FTP) usando analizadores como Wireshark. 3) Man-in-the-Middle (MITM / Hombre en el Medio): El atacante se interpone activamente entre dos víctimas interceptando, leyendo y modificando los mensajes sin que ambas partes lo noten. 4) Replay Attack (Ataque de Repetición): El atacante captura un mensaje o token de autenticación válido y lo retransmite posteriormente para suplantar la sesión (se mitiga con números de secuencia, marcas de tiempo timestamps y retos únicos Nonce). 5) Fuerza Bruta y Diccionario: Prueba automatizada de millones de combinaciones de contraseñas o claves.',
          'Ataques Específicos a la Infraestructura LAN (Capa 2) y Servicios: 1) MAC Flooding (Inundación de tabla CAM): El atacante envía miles de tramas con direcciones MAC de origen falsas aleatorias hasta llenar la memoria de la tabla CAM del switch; al llenarse, algunos switches entran en modo "Fail-Open" y comienzan a reenviar todo el tráfico por todos los puertos como si fueran un Hub, permitiendo el sniffing. 2) ARP Spoofing / ARP Poisoning: El atacante envía respuestas ARP falsas asociando su propia dirección MAC con la IP del Default Gateway, logrando un ataque MITM en la LAN. 3) Rogue DHCP (Servidor DHCP Falso): Un atacante conecta un servidor DHCP pirata en la LAN que responde antes que el legítimo, entregando a los usuarios una puerta de enlace y un DNS controlados por el atacante. 4) DNS Poisoning / DNS Spoofing: Corrompe la caché de un servidor DNS o suplanta respuestas para redirigir un nombre de dominio legítimo (ej. el de un banco) hacia la dirección IP de un servidor malicioso.',
          'Ataques Inalámbricos, Ingeniería Social, Malware y Vulnerabilidades: 1) Ataque de Deautenticación Wi-Fi: El atacante envía tramas de gestión 802.11 `Deauth` falsificadas con la MAC del cliente o del AP para desconectar forzosamente a los usuarios (frecuente para capturar el 4-way handshake WPA2 o forzar la conexión a un AP gemelo malicioso Evil Twin). 2) Ingeniería Social: Manipulación psicológica del factor humano; incluye Phishing (correos/sitios fraudulentos para robar credenciales), Spear Phishing (dirigido a un objetivo específico) y Shoulder Surfing (espiar físicamente por encima del hombro mientras alguien teclea su contraseña o PIN). 3) Tipos de Malware: Un Gusano (Worm) es un programa malicioso autónomo que se replica y propaga automáticamente a través de la red explotando vulnerabilidades sin requerir intervención del usuario ni infectar otro archivo anfitrión; el Ransomware cifra los archivos del disco o del servidor exigiendo un rescate económico por la clave de descifrado; un Troyano (Trojan) se disfraza de software legítimo para abrir una puerta trasera (Backdoor). 4) Vulnerabilidad Zero-Day (Día Cero) y CVE: Un ataque 0-Day explota una vulnerabilidad recién descubierta para la cual el fabricante aún no ha publicado un parche oficial (0 días de protección). Cuando las vulnerabilidades se documentan públicamente, se catalogan con un identificador único mundial en el diccionario CVE (Common Vulnerabilities and Exposures, ej. `CVE-2024-XXXX`).',
        ],
      },
      {
        title: '3. Arquitecturas de Defensa Perimetral: Firewalls, NGFW, Proxy, IDS vs. IPS, SIEM y Honeypots',
        description:
          'La seguridad moderna aplica Defensa en Profundidad (múltiples capas de controles preventivos, detectivos y correctivos).',
        points: [
          'Evolución de los Firewalls (Filtrado de Paquetes, Stateful y NGFW de Capa 7): 1) Firewall de Filtrado de Paquetes (Stateless, Capas 3/4): Evalúa cada paquete de forma aislada mediante Listas de Control de Acceso (ACLs) verificando IP origen/destino, protocolo y puerto TCP/UDP, sin recordar si el paquete pertenece a una conexión previa. 2) Firewall de Inspección de Estado (Stateful Inspection): Mantiene una tabla de estado de las conexiones activas (ej. el saludo de 3 vías TCP), permitiendo la entrada únicamente de paquetes que responden a conexiones iniciadas legítimamente desde adentro. 3) Firewall de Nueva Generación (NGFW — Next-Generation Firewall): Opera hasta la Capa 7 (Aplicación); además de ser Stateful, realiza Inspección Profunda de Paquetes (DPI), identifica y controla aplicaciones específicas (ej. permitir HTTPS corporativo pero bloquear BitTorrent o juegos aunque usen el puerto 443), integra prevención de intrusiones (IPS) e identidad de usuarios.',
          'Servidor Proxy y Zona Desmilitarizada (DMZ): Un Proxy actúa como intermediario para las peticiones de los clientes (ej. navegación web HTTP/HTTPS): oculta la dirección IP interna de los usuarios, filtra URLs maliciosas, inspecciona contenido y almacena páginas en caché. Una DMZ es una subred perimetral aislada entre la red interna LAN y el Internet externo donde se colocan los servidores públicos (Web, Correo, DNS público) para que, si uno es comprometido, el atacante no tenga acceso directo a la red interna.',
          'Diferencia Crítica entre IDS (Detección) e IPS (Prevención): 1) IDS (Intrusion Detection System, ej. Snort o Suricata en modo pasivo): Se conecta fuera de la línea directa de tráfico mediante una copia del tráfico (puerto espejo SPAN o Network TAP); analiza los paquetes buscando firmas de ataques conocidos o anomalías estadísticas y genera alertas al administrador, pero NO bloquea por sí mismo el paquete malicioso en tránsito. 2) IPS (Intrusion Prevention System): Se instala directamente en línea (In-Line) en el camino del tráfico; analiza los paquetes en tiempo real y tiene la capacidad activa de descartar (Drop) inmediatamente los paquetes maliciosos, cerrar la conexión TCP o bloquear la IP atacante antes de que llegue al objetivo.',
          'SIEM (Security Information and Event Management) y Honeypots: Un sistema SIEM recolecta, normaliza y correlaciona en tiempo real los registros de eventos (logs de Syslog, Firewalls, IDS/IPS, Active Directory, servidores y endpoints) en una consola central para detectar patrones complejos de ataques, emitir alertas tempranas y facilitar el análisis forense. Un Honeypot (Tarro de Miel) es un servidor o sistema señuelo diseñado deliberadamente para parecer vulnerable, aislado y altamente monitoreado, cuyo propósito es atraer a los atacantes para desviarlos de los sistemas reales y estudiar sus técnicas, tácticas y procedimientos (TTPs).',
        ],
      },
      {
        title: '4. Seguridad en Capa 2, Redes Inalámbricas (WPA2/WPA3), VPN IPsec, DNSSEC, Hardening y Auditoría',
        description:
          'Proteger únicamente el perímetro externo es insuficiente si la red local (Switch L2 y Wi-Fi) carece de controles de acceso y validación.',
        points: [
          'Controles de Seguridad en Switches de Capa 2 (Mitigación de Ataques LAN): 1) Port Security (Seguridad de Puerto): Limita el número máximo de direcciones MAC permitidas en un puerto físico de acceso (o fija direcciones MAC estáticas/Sticky); si se conecta un equipo no autorizado o se intenta un ataque de MAC Flooding, el puerto aplica una acción de violación (`Shutdown / err-disabled`, `Restrict` o `Protect`), mitigando por completo el agotamiento de la tabla CAM. 2) IEEE 802.1X (Control de Acceso Basado en Puertos): Exige que cualquier dispositivo (Suplicante) se autentique ante un servidor central RADIUS/TACACS+ a través del switch o AP (Autenticador) antes de habilitar el tráfico en el puerto. 3) DHCP Snooping: Divide los puertos del switch en Confiables (`Trusted`, donde está el servidor DHCP real o el uplink) y No Confiables (`Untrusted`, donde están los usuarios), bloqueando cualquier mensaje `DHCP Offer/ACK` proveniente de puertos no confiables (elimina el ataque Rogue DHCP) y construyendo una tabla de enlace (`DHCP Snooping Binding Table`: MAC + IP + VLAN + Puerto). 4) DAI (Dynamic ARP Inspection): Utiliza la tabla de DHCP Snooping para validar cada paquete ARP en la red; si un host intenta enviar un ARP Reply con una IP que no le fue asignada legítimamente, DAI descarta el paquete, neutralizando el ARP Spoofing / MITM.',
          'Seguridad en Redes Inalámbricas (WEP vs. WPA2 vs. WPA3) y tramas 802.11w: El protocolo antiguo WEP (Wired Equivalent Privacy, RC4) es totalmente inseguro y se rompe en minutos. WPA2 (IEEE 802.11i) introdujo el cifrado fuerte AES en modo CCMP; sin embargo, en su modo personal (WPA2-PSK) es vulnerable a ataques de diccionario offline si se captura el 4-way handshake. El estándar actual WPA3 reemplaza PSK por el protocolo criptográfico SAE (Simultaneous Authentication of Equals, basado en Diffie-Hellman Dragonfly), que brinda secreto perfecto hacia adelante (Forward Secrecy) y resiste ataques de diccionario offline, además de imponer el estándar IEEE 802.11w (PMF — Protected Management Frames), que cifra y autentica las tramas de gestión para impedir los ataques de Deautenticación Wi-Fi.',
          'VPN con IPsec / TLS y Seguridad DNS con DNSSEC: Una VPN (Virtual Private Network) crea un túnel cifrado privado a través de una red pública insegura como Internet. El conjunto de protocolos IPsec opera en la Capa 3 (Red) ofreciendo dos encabezados principales: AH (Authentication Header, que provee integridad y autenticación pero NO cifrado) y ESP (Encapsulating Security Payload, que provee Confidencialidad mediante cifrado AES junto con integridad y autenticación), operando en Modo Transporte (cifra solo la carga útil del paquete IP) o Modo Túnel (cifra todo el paquete IP original y le agrega un nuevo encabezado IP, usado para VPN Site-to-Site entre sucursales). Por su parte, DNSSEC (Domain Name System Security Extensions) añade firmas digitales criptográficas (registros RRSIG, DNSKEY, DS) a los registros DNS para garantizar su autenticidad e integridad y evitar el ataque de DNS Spoofing / Cache Poisoning.',
          'Hardening (Bastionado), MFA y Auditoría de Seguridad (Nmap, Nessus y Pentesting): 1) Hardening: Proceso de reducir la superficie de ataque de un servidor, router o sistema operativo desinstalando servicios innecesarios, cerrando puertos no utilizados, cambiando credenciales por defecto, aplicando parches y deshabilitando protocolos riesgosos como UPnP (Universal Plug and Play, que permite a programas abrir puertos automáticamente en el router sin autorización), Telnet o SNMPv1/v2c. 2) MFA (Multi-Factor Authentication): Exige combinar dos o más factores de distinta naturaleza: algo que sabes (contraseña/PIN), algo que tienes (token físico, llave FIDO2, app autenticadora TOTP) y algo que eres (biometría: huella o rostro). 3) Herramientas de Auditoría y Pruebas de Penetración (Pen Testing): `Nmap` es el escáner de red estándar para descubrir hosts activos, puertos abiertos y versiones de servicios; `Nessus` (o OpenVAS) es un escáner automatizado de vulnerabilidades que compara los servicios detectados contra bases de datos CVE; y una Prueba de Penetración (Pen Test) es una evaluación autorizada donde especialistas simulan un ataque real controlado para explotar vulnerabilidades y demostrar el impacto real en el negocio antes de que lo haga un atacante.',
        ],
      },
    ],
    tables: [
      {
        title: 'Matriz de Ataques de Red y su Contramedida Exacta para el Examen EGEL',
        headers: ['Ataque o Amenaza', 'Capa / Objetivo', 'Mecanismo del Ataque', 'Control o Defensa Exacta que lo Mitiga'],
        rows: [
          ['MAC Flooding', 'Capa 2 (Switch)', 'Inunda con MACs falsas para desbordar la tabla CAM del switch.', 'Port Security (limitar número máximo de MACs por puerto).'],
          ['Rogue DHCP', 'Capa 2 / 7 (DHCP)', 'Un servidor DHCP pirata entrega gateway y DNS falsos en la LAN.', 'DHCP Snooping (puertos Untrusted bloquean DHCP Offer/ACK).'],
          ['ARP Spoofing / Poisoning', 'Capa 2 (ARP)', 'Envía respuestas ARP falsas para suplantar la MAC del Gateway (MITM).', 'Dynamic ARP Inspection (DAI) apoyado en DHCP Snooping.'],
          ['DNS Cache Poisoning', 'Capa 7 (DNS)', 'Inyecta respuestas DNS falsas para redirigir dominios a IPs maliciosas.', 'DNSSEC (firmas criptográficas de registros DNS).'],
          ['Deautenticación Wi-Fi', 'Capa 2 WLAN (802.11)', 'Envía tramas Deauth falsificadas para desconectar clientes del AP.', 'WPA3 con IEEE 802.11w (Protected Management Frames - PMF).'],
          ['Sniffing de Credenciales', 'Capas 2 a 7', 'Captura tráfico en texto plano (Telnet, HTTP, FTP, SNMPv1/v2c).', 'Protocolos cifrados: SSH (22), HTTPS/TLS (443), SFTP, SNMPv3, VPN IPsec.'],
          ['Replay Attack (Repetición)', 'Sesión / Autenticación', 'Captura un paquete válido de autenticación y lo reenvía después.', 'Timestamps (marcas de tiempo), números de secuencia y Nonces únicos.'],
          ['Fuerza Bruta / Phishing', 'Autenticación / Usuario', 'Adivinación masiva de claves o robo de contraseñas mediante engaño.', 'Autenticación Multifactor (MFA), bloqueo de cuenta y concientización.'],
        ],
      },
      {
        title: 'Comparativa de Algoritmos Criptográficos y Controles Perimetrales',
        headers: ['Categoría', 'Tecnología / Algoritmo', 'Tipo / Clave', 'Estado Actual y Uso en Examen'],
        rows: [
          ['Cifrado Simétrico', 'AES (128 / 192 / 256 bits)', 'Misma clave secreta', 'Estándar seguro actual para VPN, Wi-Fi (WPA2/WPA3) y almacenamiento.'],
          ['Cifrado Simétrico', 'DES (56 bits)', 'Misma clave secreta', 'OBSOLETO e inseguro por longitud de clave corta (vulnerable a fuerza bruta).'],
          ['Cifrado Asimétrico', 'RSA / ECC (Curva Elíptica)', 'Par Clave Pública / Privada', 'Intercambio de claves, Firmas Digitales y certificados TLS/PKI.'],
          ['Función Hash', 'SHA-256 / SHA-3', 'Unidireccional (sin clave)', 'Verificación de Integridad y huellas digitales (MD5/SHA-1 obsoletos).'],
          ['Detección Pasiva', 'IDS (Intrusion Detection)', 'Copia de tráfico (SPAN/TAP)', 'Solo detecta y alerta al administrador; NO bloquea paquetes en línea.'],
          ['Prevención Activa', 'IPS (Intrusion Prevention)', 'Instalado En Línea (In-Line)', 'Detecta y BLOQUEA/DESCARTA activamente los paquetes maliciosos en tiempo real.'],
        ],
      },
    ],
    formulas: [
      { label: 'Pilares de la Seguridad (Tríada CIA)', code: 'Confidencialidad (Cifrado) + Integridad (Hash/Firma) + Disponibilidad (Redundancia/Anti-DDoS)' },
      { label: 'Regla de Criptografía Asimétrica (Confidencialidad vs. Firma)', code: 'Cifrar mensaje: Clave Pública del Receptor  |  Firmar documento: Clave Privada del Emisor' },
      { label: 'Fórmula de Gestión del Riesgo Informático', code: 'Riesgo = Probabilidad (Amenaza × Vulnerabilidad) × Impacto en el Activo' },
      { label: 'Seguridad Wi-Fi Evolución', code: 'WEP (RC4, Inseguro) → WPA (TKIP) → WPA2 (AES-CCMP) → WPA3 (SAE + AES-GCMP + 802.11w)' },
    ],
    examTips: [
      'Diferencia clave en el examen: el IDS es pasivo (solo detecta y genera alertas copiando el tráfico), mientras que el IPS es activo y está en línea (descarta/bloquea el paquete malicioso al instante).',
      'Si el atacante llena la tabla de direcciones MAC de un switch, es un ataque de MAC Flooding y se previene con Port Security.',
      'El malware que tiene la capacidad de replicarse y propagarse por sí solo a través de la red sin intervención humana es el Gusano (Worm); el que cifra archivos y pide rescate es el Ransomware.',
      'El algoritmo DES está obsoleto porque su clave de 56 bits es demasiado corta; su reemplazo seguro es AES.',
      'Para descubrir puertos abiertos en una red se usa `Nmap`; para escanear vulnerabilidades conocidas (CVE) se usa `Nessus`; para simular un ataque real autorizado se realiza un `Penetration Testing (Pen Test)`.',
    ],
  },

  // =========================================================================
  // ÁREA 3: IMPLEMENTACIÓN DE SOFTWARE
  // =========================================================================
  {
    subareaCode: '3.1',
    subareaName: '3.1 Ingeniería de software y calidad',
    area: 'Implementación de Software',
    sources: [
      'Sommerville, I. — Ingeniería del Software, 7a / 9a Edición (scripts/raw_books/Ingenieria_del_Software_Sommerville.pdf)',
      'Resúmenes de Construcción de Software 1, 2 y 3 (scripts/raw_books/Resumen construccion 1.pdf, 2.pdf y 3.pdf)',
      'Pressman, R. S. — Ingeniería del Software: Un Enfoque Práctico',
      'Estándares IEEE 830 / ISO 29148 (SRS), ISO/IEC 9126 e ISO/IEC 25010 (Calidad), PMBOK (PMI) y Guía Oficial de Scrum',
    ],
    summary:
      'Estudia los modelos de ciclo de vida del software (Cascada, Incremental, Espiral orientado a riesgos, Prototipado) y metodologías ágiles (Scrum, XP, TDD), ingeniería de requerimientos (Stakeholders, Documento de Visión, SRS IEEE 830, funcionales vs. no funcionales, priorización MoSCoW y Matriz de Trazabilidad), modelado UML y BPMN, herramientas CASE, estilos arquitectónicos (Capas, Repositorio, Cliente-Servidor, Microservicios, Pipe & Filter), principios de construcción, refactorización, deuda técnica, CI/CD, verificación vs. validación, niveles de prueba (Unitarias con Mocks, Integración Top-Down/Bottom-Up, Sistema, Regresión y Aceptación UAT), Caja Negra vs. Caja Blanca (Complejidad Ciclomática de McCabe), normas ISO 9126/25010, métricas (LDC, Puntos de Función, Halstead), gestión de proyectos PMBOK y los 4 tipos de mantenimiento.',
    keyTopics: [
      'Modelos SDLC: Cascada, Incremental, Espiral (Riesgos) y Prototipado',
      'Metodologías Ágiles: Scrum (Roles, Sprints, Backlog, Historias de Usuario), XP y TDD',
      'Ingeniería de Requerimientos: SRS (IEEE 830), Funcionales vs. No Funcionales, MoSCoW y Trazabilidad',
      'Modelado UML (Casos de Uso, Clases, Secuencia, Actividades, Estados, Componentes, Despliegue) y BPMN',
      'Estilos y Patrones Arquitectónicos (Capas, Repositorio, Cliente-Servidor, Microservicios, Pipe & Filter)',
      'Construcción de Software (Resúmenes 1–3), Refactorización, Deuda Técnica y CI/CD',
      'Verificación vs. Validación, Error vs. Defecto vs. Fallo y Revisiones Estáticas',
      'Niveles de Prueba (Unitarias con Mocks/Stubs, Integración, Sistema, Regresión y Aceptación UAT)',
      'Pruebas de Caja Negra (Partición Equivalente, Valores Límite) vs. Caja Blanca (Complejidad de McCabe)',
      'Calidad ISO/IEC 9126 y 25010, Métricas (KLOC, Puntos de Función, Halstead), PMBOK y Mantenimiento',
    ],
    sections: [
      {
        title: '1. Modelos de Ciclo de Vida del Software (SDLC) y Metodologías Ágiles (Scrum, XP y TDD)',
        description:
          'De acuerdo con Ian Sommerville, un proceso de software es un conjunto estructurado de actividades necesarias para especificar, diseñar, implementar, validar y evolucionar un sistema de software.',
        points: [
          'Modelos Tradicionales o Predictivos: 1) Modelo en Cascada (Waterfall): Secuencial y rígido (Requerimientos → Diseño → Implementación → Pruebas → Mantenimiento); requiere que todos los requisitos estén 100% claros y estables desde el inicio, siendo inadecuado cuando el cliente cambia de opinión frecuentemente. 2) Desarrollo Incremental: Divide el sistema en incrementos funcionales; los primeros incrementos entregan la funcionalidad más crítica para que el usuario la utilice de inmediato mientras se construyen los demás. 3) Modelo en Espiral (Barry Boehm): Modelo evolutivo impulsado explícitamente por el Análisis y Gestión de Riesgos; cada vuelta de la espiral consta de 4 cuadrantes (Determinar objetivos → Identificar y resolver riesgos con prototipos → Desarrollar y verificar → Planificar la siguiente iteración), siendo el indicado para sistemas grandes, complejos y de alto riesgo técnico o financiero. 4) Prototipado: Construye rápidamente una versión preliminar para clarificar requerimientos confusos o validar interfaces con el usuario.',
          'Marco de Trabajo Ágil Scrum (Roles, Artefactos y Eventos): Diseñado para entornos con requerimientos cambiantes mediante iteraciones de duración fija llamadas Sprints (de 1 a 4 semanas). Roles: 1) Product Owner (Dueño del Producto): Representa al negocio/cliente, define la visión y es el único responsable de gestionar y ordenar el Product Backlog maximizando el valor entregado. 2) Scrum Master: Líder servicial que asegura que el equipo entienda y aplique Scrum, eliminando impedimentos externos. 3) Developers (Equipo de Desarrollo): Equipo multifuncional y autoorganizado que construye el incremento "Terminado" (Definition of Done). Artefactos y Eventos: El Product Backlog contiene las Épicas (funcionalidades grandes) desglosadas en Historias de Usuario redactadas bajo la plantilla estándar: `"Como <rol>, quiero <acción/funcionalidad> para <beneficio/valor de negocio>"`. El Sprint inicia con el Sprint Planning, se monitorea a diario en el Daily Scrum (15 minutos), entrega un Incremento revisado en la Sprint Review y mejora el proceso del equipo en la Sprint Retrospective.',
          'Programación Extrema (XP) y Desarrollo Guiado por Pruebas (TDD): XP promueve prácticas de ingeniería rigurosas como Programación en Parejas (Pair Programming), propiedad colectiva del código, diseño simple e Integración Continua. Su práctica estrella es TDD (Test-Driven Development), que sigue el ciclo corto de 3 pasos llamado Red-Green-Refactor: 1) Red: Escribir primero una prueba unitaria automatizada que falla porque la función aún no existe, 2) Green: Escribir el código mínimo necesario para que la prueba pase exitosamente, y 3) Refactor: Limpiar y mejorar la estructura del código manteniendo todas las pruebas en verde.',
        ],
      },
      {
        title: '2. Ingeniería de Requerimientos: Elicitación, SRS (IEEE 830), MoSCoW y Matriz de Trazabilidad',
        description:
          'Los requerimientos establecen qué servicios debe proporcionar el sistema y bajo qué restricciones operativas debe funcionar.',
        points: [
          'Stakeholders, Documento de Visión y Especificación SRS (IEEE 830 / ISO 29148): Los Stakeholders (Interesados) son todas las personas u organizaciones afectadas directa o indirectamente por el sistema (usuarios finales, clientes, gerentes, auditores, reguladores, desarrolladores). Al inicio del proyecto se elabora el Documento de Visión (alcance de alto nivel y objetivos de negocio) y posteriormente la Especificación de Requerimientos de Software (SRS, estándar IEEE 830), que constituye el acuerdo técnico detallado; todo buen requerimiento en el SRS debe ser completo, consistente, verificable (medible), no ambiguo y rastreable.',
          'Requerimientos Funcionales vs. No Funcionales (Atributos de Calidad): 1) Requerimientos Funcionales: Describen detalladamente qué debe hacer el sistema, sus entradas, procesamientos, cálculos y salidas ante acciones del usuario (ej. *"El sistema debe generar una factura en formato PDF al confirmar el pago"*). 2) Requerimientos No Funcionales: Imponen restricciones o cualidades de calidad sobre cómo debe comportarse el sistema en su conjunto: rendimiento y tiempo de respuesta (ej. *"responder consultas en menos de 200 ms"*), disponibilidad (ej. *"99.99% de uptime anual"*), seguridad, escalabilidad, portabilidad, usabilidad y cumplimiento normativo. Suelen ser más críticos que los funcionales individuales porque afectan a toda la arquitectura.',
          'Priorización MoSCoW y Matriz de Trazabilidad de Requerimientos (RTM): Para negociar el alcance de una entrega con tiempo y presupuesto limitados se aplica la técnica MoSCoW: `M — Must have` (Indispensables para que el sistema sea viable y legal), `S — Should have` (Importantes pero con solución temporal si faltan), `C — Could have` (Deseables si sobra tiempo/recursos) y `W — Won\'t have (this time)` (Descartados para la versión actual). Por su parte, la Matriz de Trazabilidad de Requerimientos (RTM) es una tabla bidireccional que vincula cada requerimiento de negocio con sus módulos de diseño, archivos de código fuente y casos de prueba (Test Cases), garantizando que ningún requisito quede sin programar ni probar y permitiendo evaluar el impacto de cualquier cambio.',
        ],
      },
      {
        title: '3. Modelado con UML, BPMN, Herramientas CASE y Estilos Arquitectónicos de Software',
        description:
          'El modelado visual abstrae la complejidad del sistema desde múltiples vistas (funcional, estructural, dinámica y física).',
        points: [
          'Catálogo Completo de Diagramas UML (Unified Modeling Language) y BPMN: Diagramas Estructurales (Estáticos): 1) Diagrama de Clases: Muestra las clases del sistema, sus atributos, métodos, visibilidad (`+` público, `-` privado, `#` protegido) y relaciones estáticas: Asociación, Agregación (rombo blanco: relación todo-parte débil donde la parte puede existir sin el todo), Composición (rombo negro relleno: relación todo-parte fuerte donde si se destruye el contenedor se destruyen sus partes), Herencia/Generalización (flecha triangular vacía) y Dependencia. 2) Diagrama de Componentes: Muestra la organización y dependencias entre módulos de software, librerías e interfaces (`lollipops/sockets`). 3) Diagrama de Despliegue (Deployment): Representa la arquitectura física en tiempo de ejecución, mostrando los Nodos de hardware (servidores, contenedores, dispositivos móviles), protocolos de red y qué artefactos ejecutables residen en cada nodo. Diagramas de Comportamiento (Dinámicos): 4) Diagrama de Casos de Uso: Modela la interacción entre Actores externos y el sistema; usa relaciones `<<include>>` (comportamiento obligatorio que siempre se ejecuta, ej. Validar Saldo al Retirar) y `<<extend>>` (comportamiento opcional o condicional bajo cierto punto de extensión). 5) Diagrama de Secuencia: Enfatiza el orden temporal cronológico de los mensajes intercambiados entre objetos a lo largo de sus líneas de vida verticales. 6) Diagrama de Colaboración (Comunicación): Muestra la misma información de interacción que el de secuencia pero enfatizando los vínculos estructurales numerados entre objetos. 7) Diagrama de Actividades: Modela flujos de trabajo paso a paso, decisiones y concurrencia mediante carriles (Swimlanes). 8) Diagrama de Máquina de Estados: Muestra los estados por los que pasa un objeto durante su vida y las transiciones disparadas por eventos. Adicionalmente, para modelar procesos de negocio organizacionales entre departamentos se emplea el estándar BPMN (Business Process Model and Notation) y para automatizar el ciclo de modelado y generación de código se usan herramientas CASE (Computer-Aided Software Engineering).',
          'Estilos y Patrones Arquitectónicos (Sommerville): 1) Arquitectura en Capas (Layered): Organiza el sistema en niveles jerárquicos (ej. Presentación/UI → Lógica de Negocio/Aplicación → Acceso a Datos/Persistencia → Base de Datos), donde cada capa solo consume servicios de la capa inmediata inferior; facilita el mantenimiento y la portabilidad. 2) Arquitectura centrada en Datos / Repositorio (y Pizarra): Todos los subsistemas comparten e intercambian información a través de una única base de datos o repositorio central (ideal para IDEs, compiladores y sistemas bancarios). 3) Arquitectura Cliente-Servidor y N-Capas: Separa a los consumidores de servicios (Clientes) de los proveedores centralizados (Servidores a través de HTTP/REST o RPC). 4) Arquitectura de Microservicios: Descompone la aplicación en servicios pequeños, autónomos e independientes (cada uno con su propia base de datos y desplegable en contenedores por separado), mejorando la escalabilidad horizontal y el aislamiento de fallos frente a un Monolito. 5) Tuberías y Filtros (Pipe and Filter): Cada componente (Filtro) transforma un flujo de datos de entrada y lo envía por un conducto (Pipe) al siguiente filtro (clásico en compiladores, procesamiento de señales y comandos Unix).',
        ],
      },
      {
        title: '4. Construcción, Calidad (ISO 9126 / 25010), Niveles de Prueba, McCabe, Métricas y Mantenimiento',
        description:
          'De acuerdo con los Resúmenes de Construcción de Software (1, 2 y 3) y Sommerville, la calidad no se improvisa al final: se construye mediante estándares de codificación, revisiones estáticas y pruebas sistemáticas.',
        points: [
          'Principios Fundamentales de Construcción, Refactorización, Deuda Técnica y CI/CD: Los 4 principios de construcción de software (Resumen 1) son: 1) Minimizar la complejidad (escribir código simple y legible para humanos), 2) Anticipar el cambio (bajo acoplamiento y alta cohesión), 3) Construir para la verificación (facilitar pruebas automatizadas y aserciones), y 4) Aplicar estándares (convenciones de nombres, formato y seguridad). La Refactorización (Refactoring) consiste en reestructurar y limpiar el diseño interno del código existente para mejorar su legibilidad y mantenibilidad SIN alterar en absoluto su comportamiento externo observable. La Deuda Técnica es el costo implícito de retrabajo futuro causado por elegir una solución rápida y deficiente hoy en lugar de un diseño limpio. Con Integración Continua (CI/CD), cada vez que un desarrollador sube cambios al repositorio (`git push`), un servidor automatizado compila el proyecto, ejecuta el análisis estático (linters/SonarQube) y corre toda la batería de pruebas unitarias para detectar defectos de inmediato.',
          'Diferencia entre Error, Defecto (Bug/Fault) y Fallo (Failure), y Verificación vs. Validación (V&V): Un Error (Mistake) es la equivocación humana cometida por el programador o analista; ese error introduce un Defecto (Fault / Bug) estático en el código fuente o documento; cuando el programa se ejecuta y pasa por ese defecto produciendo un comportamiento incorrecto visible para el usuario, ocurre un Fallo (Failure). Según Barry Boehm: 1) Verificación ("¿Estamos construyendo el producto correctamente?"): Comprueba que el software cumpla con su especificación técnica SRS (incluye revisiones estáticas, inspecciones de código o Walkthroughs sin ejecutar el programa, y pruebas). 2) Validación ("¿Estamos construyendo el producto correcto?"): Comprueba que el software satisfaga las necesidades y expectativas reales del cliente/usuario en su entorno operativo.',
          'Niveles de Prueba del Software: 1) Pruebas Unitarias (Unit Testing): Prueban de forma aislada la unidad más pequeña de código (una función, método o clase); para aislarla de dependencias lentas o externas (como bases de datos reales, pasarelas de pago o APIs de terceros) se utilizan objetos simulados llamados Mocks, Stubs o Fakes. 2) Pruebas de Integración: Verifican la interacción y el paso de datos entre varios módulos combinados (estrategias Top-Down usando Stubs o Bottom-Up usando Drivers). 3) Pruebas de Sistema: Evalúan el sistema completo integrado (incluyendo pruebas de rendimiento, carga, estrés y seguridad). 4) Pruebas de Regresión: Consisten en volver a ejecutar las pruebas existentes después de una modificación, corrección de bug o refactorización para garantizar que los cambios nuevos no hayan roto funcionalidades que antes operaban bien. 5) Pruebas de Aceptación del Usuario (UAT — User Acceptance Testing, Alfa y Beta): Realizadas por el cliente o usuarios finales para validar y aprobar formalmente el sistema antes de su puesta en producción.',
          'Pruebas de Caja Negra vs. Caja Blanca y Complejidad Ciclomática de McCabe: 1) Pruebas de Caja Negra (Funcionales): Evalúan las entradas y salidas del sistema basándose en la especificación sin conocer ni mirar el código fuente interno; sus técnicas principales son Partición de Equivalencia y Análisis de Valores Límite (probar justo en las fronteras de un rango, ej. 0, 1, 99, 100). 2) Pruebas de Caja Blanca (Estructurales): Analizan la estructura lógica interna del código fuente (cobertura de sentencias, ramas y caminos). Su métrica fundamental es la Complejidad Ciclomática de McCabe `V(G)`, que mide cuantitativamente la complejidad lógica de un módulo y determina el número mínimo de caminos linealmente independientes que deben probarse para cubrir todas las aristas del grafo de flujo de control: `V(G) = E - N + 2` (donde E son aristas y N son nodos) o de forma directa `V(G) = P + 1` (donde P es el número de nodos predicado o decisiones condicionales `if`, `while`, `for`, `case`, `&&`, `||`). Un `V(G) ≤ 10` indica un módulo simple y mantenible.',
          'Estándares de Calidad ISO/IEC 9126 e ISO/IEC 25010, Métricas, PMBOK y Tipos de Mantenimiento: Las normas ISO/IEC 9126 y su sucesora ISO/IEC 25010 definen las características de calidad del producto de software: Funcionalidad (Adecuación funcional), Fiabilidad (Madurez, Tolerancia a fallos, Recuperabilidad), Usabilidad, Eficiencia de Desempeño (tiempo y recursos), Mantenibilidad (Modularidad, Reusabilidad, Analizabilidad, Modificabilidad, Capacidad de ser probado), Portabilidad (Adaptabilidad, Instalabilidad), Compatibilidad y Seguridad. En Métricas de Software: las Líneas de Código (LOC / KLOC) y la Densidad de Defectos (`Defectos / KLOC`) miden tamaño y calidad posconstrucción; los Puntos de Función (Function Points) estiman el tamaño funcional y el esfuerzo del proyecto desde la etapa de requerimientos (contando Entradas Externas, Salidas Externas, Consultas, Archivos Lógicos Internos e Interfaces) independientemente del lenguaje de programación; y las Métricas de Ciencia del Software de Halstead calculan el volumen, dificultad y esfuerzo a partir del número de operadores y operandos únicos y totales. En Gestión de Proyectos (PMBOK), el documento formal que autoriza el inicio de un proyecto y otorga autoridad al Director del Proyecto (Project Manager) es el Acta de Constitución del Proyecto (Project Charter). Finalmente, existen 4 tipos de Mantenimiento de Software (ISO/IEC 14764): 1) Correctivo (reparar defectos o fallos reportados en operación), 2) Adaptativo (modificar el sistema para que siga funcionando en un nuevo entorno: nuevo SO, nueva base de datos, nueva ley fiscal o hardware), 3) Perfectivo (añadir nuevas funcionalidades solicitadas por el usuario o mejorar el rendimiento), y 4) Preventivo (refactorizar y actualizar el código para prevenir fallos futuros y mejorar su mantenibilidad).',
        ],
      },
    ],
    tables: [
      {
        title: 'Comparativa de Modelos de Ciclo de Vida del Software (SDLC)',
        headers: ['Modelo SDLC', 'Característica Principal', 'Cuándo Elegirlo en un Caso Práctico EGEL'],
        rows: [
          ['Cascada (Waterfall)', 'Fases estrictamente secuenciales; documentación exhaustiva.', 'Requerimientos 100% fijos, conocidos y estables desde el inicio (ej. normativos).'],
          ['Incremental', 'Entregas parciales operativas priorizadas por valor.', 'Cuando el cliente necesita usar las funciones principales rápido mientras se desarrolla el resto.'],
          ['Espiral (Boehm)', 'Iterativo guiado por Análisis de Riesgos y prototipos en cada ciclo.', 'Proyectos grandes, críticos, innovadores o con altos riesgos técnicos y financieros.'],
          ['Ágil (Scrum / XP)', 'Sprints cortos (1–4 semanas), adaptación continua y entrega frecuente.', 'Entornos dinámicos donde los requerimientos evolucionan y se requiere feedback constante.'],
        ],
      },
      {
        title: 'Clasificación de los 4 Tipos de Mantenimiento de Software (ISO/IEC 14764)',
        headers: ['Tipo de Mantenimiento', 'Objetivo Técnico', 'Ejemplo Clásico en Preguntas CENEVAL'],
        rows: [
          ['1. Correctivo', 'Corregir defectos (bugs) o fallos detectados en producción.', 'Solucionar un cierre inesperado o un cálculo erróneo de descuentos reportado por usuarios.'],
          ['2. Adaptativo', 'Adaptar el software a cambios en el entorno externo o normativo.', 'Migrar el sistema a una nueva versión de Windows/Linux, nuevo motor SQL o reforma fiscal del SAT.'],
          ['3. Perfectivo', 'Agregar nuevas funciones de negocio o optimizar el rendimiento.', 'Añadir un nuevo módulo de reportes gráficos o acelerar el tiempo de búsqueda de productos.'],
          ['4. Preventivo', 'Reestructurar internamente (refactorizar) para evitar fallos futuros.', 'Limpiar código duplicado, actualizar librerías obsoletas antes de que fallen o reducir deuda técnica.'],
        ],
      },
    ],
    formulas: [
      { label: 'Complejidad Ciclomática de McCabe (Caja Blanca)', code: 'V(G) = E - N + 2   |   V(G) = P + 1   (donde P = número de decisiones if/while/for/case)' },
      { label: 'Plantilla Estándar de Historia de Usuario (Ágil)', code: '"Como <rol de usuario>, quiero <funcionalidad/acción> para <beneficio/valor de negocio>"' },
      { label: 'Ciclo de Desarrollo Guiado por Pruebas (TDD)', code: '1. Red (Prueba falla) → 2. Green (Código mínimo que pasa) → 3. Refactor (Limpiar código)' },
      { label: 'Densidad de Defectos y Disponibilidad del Sistema', code: 'Densidad = Defectos / KLOC   |   Disponibilidad = MTBF / (MTBF + MTTR) × 100%' },
      { label: 'Métricas de Halstead (Longitud y Volumen)', code: 'N = N1 + N2 (Operadores + Operandos totales)   |   V = N · log2(n1 + n2)' },
    ],
    examTips: [
      'Si el caso práctico menciona un proyecto grande con alta incertidumbre donde es prioritario evaluar y mitigar riesgos en cada iteración, la respuesta siempre es el Modelo en Espiral.',
      'No confundas los tipos de mantenimiento: arreglar un bug es Correctivo; migrar de sistema operativo, base de datos o ley fiscal es Adaptativo; agregar una nueva función para el usuario es Perfectivo; refactorizar código interno para el futuro es Preventivo.',
      'En pruebas unitarias, cuando necesitas probar una clase sin conectarte a la base de datos o API externa real, se utilizan objetos simulados llamados Mocks o Stubs.',
      'Para calcular rápido la Complejidad Ciclomática de McCabe `V(G)` en un fragmento de código: cuenta cuántas decisiones (`if`, `while`, `for`, `case`) hay y súmale 1 (`V(G) = P + 1`).',
      'En UML: el Diagrama de Despliegue es el único que muestra los nodos físicos de hardware (servidores) donde se instalan los componentes; en Casos de Uso, `<<include>>` es obligatorio y `<<extend>>` es opcional.',
    ],
  },

  {
    subareaCode: '3.2',
    subareaName: '3.2 Programación, estructuras de datos y algoritmos',
    area: 'Implementación de Software',
    sources: [
      'Resúmenes de Construcción de Software 1, 2 y 3 (scripts/raw_books/Resumen construccion 1.pdf, 2.pdf y 3.pdf)',
      'Cormen, T. H., Leiserson, C. E., Rivest, R. L. & Stein, C. — Introduction to Algorithms (CLRS)',
      'Aho, A. V., Lam, M. S., Sethi, R. & Ullman, J. D. — Compiladores: Principios, Técnicas y Herramientas (Libro del Dragón)',
      'Silberschatz, A., Galvin, P. B. & Gagne, G. — Fundamentos de Sistemas Operativos (10a Ed.)',
    ],
    summary:
      'Abarca los paradigmas de programación (estructurada vs. POO: encapsulamiento, herencia, polimorfismo, abstracción y sobrecarga), diseño de compiladores e intérpretes (análisis léxico, sintáctico con gramáticas BNF y AST, semántico, optimización, generación de código y Linker), gestión de memoria en bajo nivel (Stack vs. Heap, punteros, `malloc`/`free`, fugas de memoria y Valgrind, variables `static`, ensamblador x86 básico `MOV`, `CMP`, `JMP`, `JZ`), sistemas operativos y concurrencia (Kernel, procesos vs. hilos, planificación FIFO/SJF/Round Robin, sección crítica, condiciones de carrera, algoritmo de Peterson, Mutex, Semáforos, Deadlock y las 4 condiciones de Coffman, paginación/segmentación/Swap y comando `ps`) y estructuras de datos y algoritmos fundamentales.',
    keyTopics: [
      'POO: Encapsulamiento, Herencia, Polimorfismo, Abstracción y Sobrecarga',
      'Fases del Compilador (Léxico, Sintáctico BNF/AST, Semántico, Código), Intérprete y Linker',
      'Gestión de Memoria: Stack vs. Heap (`malloc`/`free`), Memory Leaks (Valgrind) y `static`',
      'Lenguaje Ensamblador Básico (`MOV`, `CMP`, `JMP`, `JZ`/`JMPZ` y bandera Zero)',
      'Sistemas Operativos: Kernel, Procesos vs. Hilos (Threads) y Comando `ps`',
      'Planificación de CPU: FCFS (FIFO), SJF (Shortest Job First) y Round Robin (Quantum)',
      'Concurrencia: Sección Crítica, Condición de Carrera, Algoritmo de Peterson, Mutex y Semáforos',
      'Interbloqueos (Deadlocks) y las 4 Condiciones Necesarias de Coffman',
      'Memoria Virtual en SO: Paginación, Segmentación y Espacio de Intercambio (Swap)',
      'Estructuras de Datos Lineales y No Lineales (Pilas LIFO, Colas FIFO, Heaps, Hash, BST, AVL, Grafos)',
      'Algoritmos de Búsqueda (Lineal vs. Binaria) y Ordenamiento (QuickSort, MergeSort, HeapSort)',
    ],
    sections: [
      {
        title: '1. Paradigmas de Programación (Estructurada vs. POO) y Pilares Orientados a Objetos',
        description:
          'Mientras la programación imperativa/estructurada (como C) divide el programa en procedimientos que operan sobre estructuras de datos globales o pasadas por referencia, la Programación Orientada a Objetos (POO: C++, Java, C#, Python) modela el sistema como una colección de objetos que encapsulan estado (atributos) y comportamiento (métodos).',
        points: [
          'Los 4 Pilares Fundamentales de la POO: 1) Encapsulamiento (Ocultamiento de Información): Agrupa los datos y los métodos que operan sobre ellos dentro de una misma clase y restringe el acceso directo a los atributos internos declarándolos privados (`private`), exponiendo únicamente una interfaz controlada de métodos públicos (`getters/setters` o métodos de negocio) para proteger las invariantes del objeto. 2) Abstracción: Consiste en identificar las características y comportamientos esenciales de una entidad del mundo real ignorando los detalles irrelevantes para el contexto (mediante Clases Abstractas e Interfaces). 3) Herencia: Mecanismo por el cual una subclase (clase derivada o hija) hereda los atributos y métodos de una superclase (clase base o padre), promoviendo la reutilización de código bajo una relación jerárquica `"es-un" (is-a)`. 4) Polimorfismo: Capacidad de que objetos de diferentes subclases respondan de manera distinta y específica a la misma llamada de método o interfaz común.',
          'Polimorfismo Estático (Sobrecarga) vs. Polimorfismo Dinámico (Sobreescritura): 1) Sobrecarga de Métodos y de Operadores (Overloading — Polimorfismo en tiempo de compilación): Permite definir múltiples métodos con el mismo nombre dentro de la misma clase siempre que difieran en el número o tipo de sus parámetros (su firma), o redefinir operadores (como `+` o `==` en C++/Python) para que operen sobre objetos definidos por el usuario. 2) Sobreescritura de Métodos (Overriding — Polimorfismo en tiempo de ejecución / Enlace tardío): Una subclase proporciona su propia implementación especializada de un método virtual ya definido en su clase padre.',
        ],
      },
      {
        title: '2. Compiladores, Intérpretes, Enlazadores (Linker), Gestión de Memoria y Ensamblador',
        description:
          'Comprender cómo el código fuente de alto nivel se transforma en código máquina ejecutable y cómo se administra la memoria en tiempo de ejecución es esencial para depurar fallos críticos.',
        points: [
          'Fases de un Compilador, Gramáticas BNF, AST, Linker e Intérprete: Un Compilador traduce todo el programa fuente a código objeto/máquina antes de su ejecución a través de 6 fases secuenciales: 1) Análisis Léxico (Scanner / Lexer): Lee el flujo de caracteres y los agrupa en unidades con significado llamadas Tokens (palabras reservadas, identificadores, literales, operadores), eliminando comentarios y espacios. 2) Análisis Sintáctico (Parser): Verifica que la secuencia de tokens cumpla las reglas gramaticales del lenguaje (definidas formalmente mediante la notación BNF — Backus-Naur Form o gramáticas libres de contexto) y construye el Árbol Sintáctico Abstracto (AST — Abstract Syntax Tree). 3) Análisis Semántico: Comprueba la coherencia de significado usando la Tabla de Símbolos (verificación de tipos de datos, que las variables estén declaradas antes de usarse y que las funciones reciban los argumentos correctos). 4) Generación de Código Intermedio (ej. código de tres direcciones). 5) Optimización de Código (elimina código muerto y optimiza bucles). 6) Generación de Código Objeto/Máquina. Posteriormente, el Enlazador (Linker) combina uno o varios archivos de código objeto (`.o` / `.obj`) junto con las bibliotecas externas para producir el archivo ejecutable final. A diferencia del compilador, un Intérprete lee, analiza y ejecuta el código fuente línea por línea en tiempo real sin generar un ejecutable nativo previo.',
          'Gestión de Memoria: Pila (Stack) vs. Montículo (Heap), Punteros, `malloc`/`free`, Valgrind y `static`: El espacio de memoria de un proceso se divide en: 1) Segmento de Código (Text), 2) Segmento de Datos (variables globales y variables con el calificador `static`, las cuales conservan su valor en memoria durante toda la ejecución del programa a través de múltiples llamadas a la función), 3) Stack (Pila): Memoria automática LIFO ultrarrápida donde se alojan las variables locales y parámetros de funciones (se liberan solas al retornar la función), y 4) Heap (Montículo): Memoria dinámica gestionada manualmente por el programador en tiempo de ejecución mediante punteros (en C con `malloc()`, `calloc()`, `realloc()` para reservar y `free()` para liberar; en C++ con `new` y `delete`). Si un programa reserva memoria en el Heap con `malloc()` y pierde la referencia sin llamar a `free()`, ocurre una Fuga de Memoria (Memory Leak) que agota gradualmente la RAM del sistema; la herramienta estándar en Linux/C/C++ para perfilar y detectar Memory Leaks y accesos inválidos a memoria es `Valgrind`.',
          'Errores de Compilación vs. Tiempo de Ejecución y Lenguaje Ensamblador Básico (x86): Los errores de sintaxis o de tipos estáticos son atrapados por el compilador antes de ejecutar; en cambio, los errores en tiempo de ejecución (Runtime Errors, como división entre cero, desreferenciar un puntero nulo `NULL` o caída de red) ocurren con el programa en marcha y deben controlarse mediante bloques de Manejo de Excepciones (`try - catch - finally`). A nivel de lenguaje ensamblador x86: la instrucción `MOV destino, origen` copia un dato entre registros o memoria; `CMP op1, op2` resta implícitamente `op1 - op2` sin guardar el resultado pero actualizando las banderas de estado (si ambos operandos son iguales, el resultado es cero y se activa la bandera Zero `ZF = 1`); `JMP etiqueta` realiza un salto incondicional; y `JZ` / `JE` (o `JMPZ` — Jump if Zero / Jump if Equal) realiza un salto condicional únicamente si la bandera Zero está activa (`ZF = 1`).',
        ],
      },
      {
        title: '3. Sistemas Operativos: Procesos vs. Hilos, Planificación de CPU, Concurrencia y Deadlocks',
        description:
          'El Kernel (Núcleo) del Sistema Operativo opera en modo privilegiado para administrar el hardware, planificar el uso de la CPU, sincronizar procesos concurrentes y gestionar la memoria virtual y el sistema de archivos.',
        points: [
          'Procesos vs. Hilos (Threads) y Monitoreo en SO: Un Proceso es un programa en ejecución que posee su propio bloque de control (PCB) y su propio espacio de direcciones de memoria aislado e independiente; la comunicación entre procesos (IPC) requiere mecanismos como pipes, colas de mensajes o memoria compartida. Un Hilo (Thread) es la unidad básica de utilización de CPU ("proceso ligero"); múltiples hilos dentro de un mismo proceso comparten el mismo espacio de direcciones de memoria global (Código, Datos y Heap), pero cada hilo posee su propio contador de programa (PC), sus propios registros y su propia Pila (Stack), haciendo que la creación y el cambio de contexto entre hilos sea mucho más rápido que entre procesos. En sistemas Unix/Linux, el comando estándar de consola para listar los procesos activos y sus identificadores (PID) es `ps` (ej. `ps aux` o `top`).',
          'Algoritmos de Planificación de CPU (Scheduling): El Planificador de corto plazo decide qué proceso de la cola de listos (Ready Queue) pasa a ejecutarse en la CPU: 1) FCFS / FIFO (First-Come, First-Served): No apropiativo; atiende los procesos en el estricto orden de llegada (sufre del "efecto convoy" si un proceso muy largo llega primero). 2) SJF (Shortest Job First): Ejecuta primero el proceso con la ráfaga de CPU más corta; es matemáticamente óptimo porque garantiza el menor tiempo de espera promedio mínimo, aunque puede causar inanición (starvation) a procesos largos. 3) Round Robin (Turno Rotatorio): Apropiativo diseñado para sistemas de tiempo compartido; asigna a cada proceso una fracción fija de tiempo llamada Quantum (ej. 10–100 ms); si el proceso no termina en su quantum, es expropiado y enviado al final de la cola.',
          'Concurrencia: Sección Crítica, Condición de Carrera, Algoritmo de Peterson, Mutex y Semáforos: Una Condición de Carrera (Race Condition) ocurre cuando dos o más hilos/procesos acceden y modifican concurrentemente un dato compartido (Sección Crítica) y el resultado final depende del orden impredecible en que se intercalan sus instrucciones. Para evitarlo se requiere Exclusión Mutua: garantizar que a lo sumo un solo hilo ejecute su sección crítica a la vez. Soluciones: 1) Algoritmo de Peterson: Solución clásica basada en software para exclusión mutua entre dos procesos usando variables de turno e interés (`flag` y `turn`). 2) Mutex (Mutual Exclusion Lock): Cerrojo binario con propietario para proteger secciones críticas (`lock()` al entrar y `unlock()` al salir). 3) Semáforo (Dijkstra): Variable entera protegida que admite dos operaciones atómicas indivisibles: `wait()` (o `P()`, decrementa el valor y bloquea si es menor a cero) y `signal()` (o `V()`, incrementa el valor y despierta a un proceso en espera); puede ser binario (0 o 1) o contador (para controlar el acceso a un pool de N recursos idénticos).',
          'Interbloqueos (Deadlocks) y las 4 Condiciones Necesarias de Coffman: Un Deadlock es un bloqueo permanente en el que un conjunto de procesos queda esperando indefinidamente recursos que están retenidos por otros procesos del mismo conjunto. Para que ocurra un interbloqueo deben cumplirse simultáneamente las 4 condiciones de Coffman: 1) Exclusión Mutua (al menos un recurso no es compartible), 2) Retención y Espera / Hold and Wait (un proceso retiene al menos un recurso mientras solicita y espera otros), 3) No Apropiación / No Preemption (los recursos no pueden quitarse por la fuerza; solo los libera voluntariamente quien los retiene), y 4) Espera Circular (existe una cadena cerrada P0 → P1 → ... → Pn → P0 donde cada proceso espera un recurso retenido por el siguiente). Basta con romper cualquiera de estas 4 condiciones (por ejemplo, imponiendo un orden global estricto de adquisición de recursos para romper la Espera Circular) para prevenir por completo los interbloqueos.',
        ],
      },
      {
        title: '4. Estructuras de Datos (Lineales, Árboles, Hash, Grafos) y Algoritmos de Búsqueda y Ordenamiento',
        description:
          'La elección adecuada de una estructura de datos y su algoritmo asociado determina la eficiencia temporal y espacial `O(f(n))` de cualquier solución de software.',
        points: [
          'Estructuras Lineales (Pilas, Colas y Listas Enlazadas) y Colas de Prioridad (Heaps): 1) Pila (Stack — LIFO: Last-In, First-Out): El último elemento en entrar es el primero en salir (`push` y `pop` en `O(1)`); se usa en evaluación de expresiones, recursión, historial "Deshacer" (Undo) y en el recorrido en Profundidad (DFS — Depth-First Search). 2) Cola (Queue — FIFO: First-In, First-Out): El primer elemento en entrar es el primero en salir (`enqueue` y `dequeue` en `O(1)`); se usa en buffers de impresión, planificación de tareas y en el recorrido en Anchura (BFS — Breadth-First Search). 3) Lista Enlazada (Linked List): Nodos dinámicos con punteros; permite inserción y borrado en `O(1)` teniendo la referencia al nodo, pero el acceso aleatorio por posición es secuencial `O(n)`. 4) Cola de Prioridad / Montículo Binario (Binary Heap): Árbol binario casi completo (Max-Heap o Min-Heap) donde extraer el elemento de mayor/menor prioridad toma `O(log n)` y consultarlo toma `O(1)`.',
          'Tablas Hash, Árboles Binarios de Búsqueda (BST) y Árboles Balanceados (AVL): 1) Tabla Hash (Diccionario / Mapa): Aplica una función hash a una clave para calcular directamente el índice en un arreglo, logrando inserción, borrado y búsqueda en tiempo constante promedio `O(1)` (resolviendo colisiones mediante encadenamiento separado o direccionamiento abierto; en el peor caso degenerado es `O(n)`). 2) Árbol Binario de Búsqueda (BST): Para todo nodo, las claves del subárbol izquierdo son menores y las del subárbol derecho son mayores; su recorrido In-Order imprime los elementos ordenados ascendentemente. Si se insertan datos ya ordenados en un BST simple, se degenera en una lista enlazada con búsqueda `O(n)`. 3) Árbol AVL (y Rojo-Negro): Es un BST autobalanceado donde la diferencia de altura (factor de equilibrio) entre el subárbol izquierdo y derecho de cualquier nodo es a lo sumo 1 (`-1, 0, +1`); mediante rotaciones simples y dobles garantiza estrictamente que la búsqueda, inserción y eliminación sean `O(log n)` incluso en el peor caso.',
          'Algoritmos de Búsqueda (Lineal vs. Binaria) y de Ordenamiento: 1) Búsqueda Lineal (Secuencial): Recorre elemento por elemento en `O(n)` sin requerir que el arreglo esté ordenado. 2) Búsqueda Binaria (Dicotómica): Requiere obligatoriamente que el arreglo esté previamente ordenado; compara con el elemento central y descarta la mitad del espacio de búsqueda en cada paso, logrando complejidad logarítmica `O(log n)`. 3) Algoritmos de Ordenamiento Simples `O(n²)`: Burbuja (Bubble Sort), Selección (Selection Sort) e Inserción (Insertion Sort, eficiente `O(n)` en arreglos pequeños o casi ordenados). 4) Algoritmos de Ordenamiento Eficientes `O(n log n)`: `MergeSort` (Divide y Vencerás estable que garantiza `O(n log n)` en mejor, promedio y peor caso, usando `O(n)` de memoria auxiliar), `HeapSort` (`O(n log n)` garantizado en todos los casos y `O(1)` en memoria in-place) y `QuickSort` (basado en partición por pivote; es el más rápido en la práctica con `O(n log n)` en caso promedio y `O(log n)` en pila, aunque su peor caso con pivotes mal elegidos es `O(n²)`).',
        ],
      },
    ],
    tables: [
      {
        title: 'Complejidad Temporal Big-O de Estructuras de Datos y Algoritmos de Ordenamiento',
        headers: ['Estructura o Algoritmo', 'Caso Promedio', 'Peor Caso', 'Propiedad Clave para el Examen EGEL'],
        rows: [
          ['Tabla Hash (Hash Map)', 'Búsqueda / Inserción: O(1)', 'O(n) (colisiones)', 'El acceso promedio más rápido por clave exacta; no mantiene orden.'],
          ['Búsqueda Binaria', 'O(log n)', 'O(log n)', 'Exige como requisito indispensable que el arreglo esté ORDENADO.'],
          ['Árbol BST (Sin balancear)', 'O(log n)', 'O(n) (degenerado)', 'Si se insertan datos ordenados se vuelve una lista lineal O(n).'],
          ['Árbol AVL / Rojo-Negro / B-Tree', 'O(log n)', 'O(log n) garantizado', 'Autobalanceado mediante rotaciones; garantiza O(log n) siempre.'],
          ['QuickSort (Rápido)', 'O(n log n)', 'O(n²) (mal pivote)', 'In-place (O(log n) pila); muy rápido en caché en el caso promedio.'],
          ['MergeSort (Mezcla)', 'O(n log n)', 'O(n log n) garantizado', 'Estable y predecible; requiere O(n) de memoria adicional para mezclar.'],
          ['HeapSort (Montículo)', 'O(n log n)', 'O(n log n) garantizado', 'Usa un Max-Heap in-place (O(1) memoria extra); no es estable.'],
        ],
      },
      {
        title: 'Comparativa de Algoritmos de Planificación de Procesos en el Sistema Operativo',
        headers: ['Algoritmo', 'Tipo', 'Criterio de Selección', 'Ventaja y Desventaja Principal'],
        rows: [
          ['FCFS / FIFO', 'No Apropiativo', 'Orden de llegada a la cola Ready', 'Simple y justo, pero sufre "efecto convoy" si llega primero un proceso largo.'],
          ['SJF (Shortest Job First)', 'No Apropiativo / SRTF', 'Menor ráfaga de CPU estimada', 'Óptimo: minimiza el tiempo de espera promedio; riesgo de inanición (starvation).'],
          ['Round Robin (RR)', 'Apropiativo', 'Quantum de tiempo fijo rotatorio', 'Excelente tiempo de respuesta interactivo; un quantum muy pequeño eleva el overhead.'],
          ['Por Prioridades', 'Apropiativo / No Aprop.', 'Nivel numérico de prioridad', 'Atiende tareas críticas primero; se usa Aging (envejecimiento) contra la inanición.'],
        ],
      },
    ],
    formulas: [
      { label: 'Búsqueda Lineal vs. Búsqueda Binaria', code: 'Lineal: O(n) (sin orden)   |   Binaria: O(log2 n) (requiere arreglo ordenado; ej. 1024 elem = 10 pasos)' },
      { label: 'Recorridos en Grafos y Árboles (Estructura Auxiliar)', code: 'BFS (Anchura / Nivel por nivel) → Usa COLA (FIFO)   |   DFS (Profundidad / Ciclos) → Usa PILA (LIFO / Recursión)' },
      { label: 'Las 4 Condiciones de Coffman para un Deadlock', code: '1. Exclusión Mutua  +  2. Retención y Espera  +  3. No Apropiación  +  4. Espera Circular' },
      { label: 'Instrucciones Clave de Ensamblador x86', code: 'MOV dst, src (Copiar)  |  CMP a, b (Comparar a-b)  |  JMP (Salto incond.)  |  JZ / JMPZ (Salto si ZF=1)' },
    ],
    examTips: [
      'Recuerda esta asociación directa: BFS (recorrido en anchura y ruta más corta en grafos no ponderados) utiliza una COLA (FIFO); DFS (recorrido en profundidad y detección de ciclos en un grafo) utiliza una PILA (LIFO / recursividad).',
      'Si el problema pide garantizar un tiempo de ordenamiento `O(n log n)` incluso en el peor de los casos sin caer nunca en `O(n²)`, elige `MergeSort` o `HeapSort`.',
      'Para encontrar fugas de memoria (`Memory Leaks`) cuando se olvida usar `free()` después de `malloc()` en C/C++, la herramienta específica es `Valgrind`.',
      'En concurrencia de Sistemas Operativos, el algoritmo de planificación que ofrece el menor tiempo de espera promedio es `SJF (Shortest Job First)`, y el que reparte el CPU en tajadas de tiempo iguales (Quantum) es `Round Robin`.',
      'En ensamblador, `CMP` compara dos operandos y si son iguales prende la bandera Zero (`ZF=1`); inmediatamente después `JZ` o `JMPZ` salta a la etiqueta indicada si esa bandera Zero está activa.',
    ],
  },

  {
    subareaCode: '3.3',
    subareaName: '3.3 Bases de datos y manejo de datos',
    area: 'Implementación de Software',
    sources: [
      'Silberschatz, A., Korth, H. F. & Sudarshan, S. — Fundamentos de Bases de Datos (6a / 7a Ed.)',
      'Elmasri, R. & Navathe, S. B. — Fundamentos de Sistemas de Bases de Datos',
      'Cormen, T. H. (CLRS) — Algoritmos en Grafos y Estructuras para Manejo de Datos (Subárea 3.3)',
    ],
    summary:
      'Comprende el diseño conceptual y lógico del Modelo Relacional (entidades, atributos, tuplas, grado y cardinalidad, llaves primarias PK y foráneas FK, integridad de entidad y referencial, relaciones 1:1, 1:N y N:M con tabla pivote), teoría de la Normalización (1FN, 2FN, 3FN y Forma Normal de Boyce-Codd BCNF), dominio completo del lenguaje SQL (DDL, DML, DCL, TCL, agregaciones `COUNT/SUM/AVG`, diferencia entre `WHERE` y `HAVING`, `DISTINCT`, `JOINs`, subconsultas, `UNION/INTERSECT` y Vistas), procesamiento de transacciones ACID, control de concurrencia y bloqueos, estructuras de indexación (`B-Tree` vs. `Bitmap`), representación jerárquica de documentos semiestructurados (JSON/XML como árboles) y algoritmos avanzados de optimización en grafos para manejo de datos (Dijkstra, Floyd-Warshall, Kruskal y Prim).',
    keyTopics: [
      'Modelo Relacional: Tuplas, Cardinalidad, Grado, PK, FK e Integridad Referencial',
      'Relaciones 1:1, 1:N y Resolución de Muchos a Muchos (N:M) con Tabla Intermedia',
      'Normalización Paso a Paso: 1FN (Atomicidad), 2FN (Parciales), 3FN (Transitivas) y BCNF',
      'SQL Completo: DDL (`CREATE`, `ALTER`, `DROP`) y DML (`SELECT`, `INSERT`, `UPDATE`, `DELETE`)',
      'Cláusulas SQL: `DISTINCT`, `WHERE` vs. `HAVING`, `GROUP BY`, `ORDER BY` y Agregación (`COUNT`, `SUM`, `AVG`)',
      'Uniones (`INNER JOIN`, `LEFT/RIGHT JOIN`), Conjuntos (`UNION`, `INTERSECT`) y Vistas (`CREATE VIEW`)',
      'Transacciones ACID (Atomicidad, Consistencia, Aislamiento, Durabilidad) y Concurrencia (Locks / MVCC)',
      'Indexación Física: Índices B-Tree (`O(log n)` y rangos) vs. Índices Bitmap (Baja cardinalidad)',
      'Datos Semiestructurados (JSON / XML representados en memoria como Árboles Jerárquicos)',
      'Algoritmos en Grafos Ponderados: Caminos Mínimos (Dijkstra y Floyd-Warshall) y MST (Kruskal y Prim)',
    ],
    sections: [
      {
        title: '1. Modelo Entidad-Relación, Modelo Relacional, Integridad y Normalización (1FN a BCNF)',
        description:
          'El modelo relacional (propuesto por Edgar F. Codd) organiza los datos en relaciones (tablas) compuestas por filas y columnas, eliminando anomalías de inserción, actualización y borrado mediante la normalización.',
        points: [
          'Terminología Formal del Modelo Relacional: 1) Relación: Una tabla. 2) Tupla: Una fila o registro horizontal de la tabla. 3) Atributo: Una columna o campo vertical. 4) Dominio: El conjunto de valores atómicos permitidos para un atributo (su tipo de dato y restricciones). 5) Grado (Degree): El número de atributos (columnas) que tiene una tabla. 6) Cardinalidad (Cardinality): En el contexto de una tabla relacional es el número total de tuplas (filas/registros) que contiene en un momento dado; en el contexto de un diagrama Entidad-Relación (E-R), la cardinalidad expresa cuántas instancias de una entidad se asocian con cuántas de otra (`1:1`, `1:N` o `N:M`).',
          'Llave Primaria (PK), Llave Foránea (FK) y Reglas de Integridad: 1) Llave Primaria (Primary Key — PK): Atributo o conjunto mínimo de atributos que identifica de manera única a cada tupla dentro de una tabla; por la Regla de Integridad de Entidad, ningún componente de una PK puede contener valores nulos (`NOT NULL`) ni repetidos (`UNIQUE`). 2) Llave Foránea (Foreign Key — FK): Atributo en una tabla hija que hace referencia a la Llave Primaria de una tabla padre. Por la Regla de Integridad Referencial, el valor de una FK debe coincidir obligatoriamente con un valor existente en la PK de la tabla referenciada (o ser nulo si la relación es opcional), impidiendo la existencia de registros huérfanos (con acciones como `ON DELETE RESTRICT`, `CASCADE` o `SET NULL`). 3) Resolución de Relaciones Muchos a Muchos (`N:M`): En una base de datos relacional física no se puede implementar directamente una relación `N:M` entre dos tablas; siempre debe romperse creando una tercera Tabla Intermedia (tabla puente, asociativa o de detalle, ej. `Inscripciones` o `Detalle_Venta`) cuya llave primaria compuesta suele formarse por las llaves foráneas de ambas tablas originales.',
          'Formas Normales (1FN, 2FN, 3FN y BCNF): El proceso de normalización descompone tablas sin pérdida de información para erradicar la redundancia: 1) Primera Forma Normal (1FN): Exige que todos los atributos sean atómicos (indivisibles); prohíbe grupos repetitivos, arreglos o múltiples valores dentro de una misma celda. 2) Segunda Forma Normal (2FN): Está en 1FN y además elimina las Dependencias Funcionales Parciales: todo atributo que no sea llave debe depender funcionalmente de la Llave Primaria COMPLETA y no solo de una parte de ella (aplica cuando la tabla tiene una PK compuesta por 2 o más columnas). 3) Tercera Forma Normal (3FN): Está en 2FN y además elimina las Dependencias Funcionales Transitivas: ningún atributo que no sea llave puede depender de otro atributo que tampoco sea llave (ej. si `ID_Empleado → ID_Departamento → Nombre_Departamento`, el `Nombre_Departamento` debe separarse a su propia tabla `Departamentos`). 4) Forma Normal de Boyce-Codd (BCNF / 3.5FN): Versión más estricta de la 3FN donde para toda dependencia funcional no trivial `X → Y`, el determinante `X` debe ser siempre una Superllave (llave candidata).',
        ],
      },
      {
        title: '2. Lenguaje Estructurado de Consultas (SQL): DDL, DML, Agregaciones, JOINs y Vistas',
        description:
          'El examen EGEL evalúa tanto la lectura como la construcción exacta de sentencias SQL estándar (ANSI SQL).',
        points: [
          'Sublenguajes de SQL (DDL, DML, DCL y TCL): 1) DDL (Data Definition Language): Define y modifica la estructura del esquema de la base de datos: `CREATE TABLE`, `ALTER TABLE` (agregar/modificar columnas o restricciones), `DROP TABLE` (elimina la tabla y su estructura por completo) y `TRUNCATE TABLE` (vacía todas las filas rápidamente). 2) DML (Data Manipulation Language): Consulta y manipula los datos dentro de las tablas: `SELECT` (consultar), `INSERT INTO ... VALUES` (insertar nuevas filas), `UPDATE tabla SET col = valor WHERE condición` (actualizar filas existentes; ¡olvidar el `WHERE` actualiza toda la tabla!) y `DELETE FROM tabla WHERE condición` (eliminar filas). 3) DCL (Data Control Language): Controla permisos de seguridad (`GRANT` y `REVOKE`). 4) TCL (Transaction Control Language): Gestiona transacciones (`BEGIN`, `COMMIT` y `ROLLBACK`).',
          'Consultas `SELECT`, `DISTINCT`, Funciones de Agregación y Diferencia Crítica entre `WHERE` y `HAVING`: La cláusula `SELECT DISTINCT columna` elimina las filas duplicadas del conjunto de resultados, devolviendo únicamente valores únicos. Las 5 funciones de agregación estándar son: `COUNT(*)` (cuenta filas totales) o `COUNT(col)` (cuenta valores no nulos), `SUM(col)` (suma numérica), `AVG(col)` (promedio aritmético), `MAX(col)` (valor máximo) y `MIN(col)` (valor mínimo). Al agrupar filas con `GROUP BY`, es vital distinguir: la cláusula `WHERE` filtra filas individuales ANTES de agrupar (y NO puede contener funciones de agregación directamente), mientras que la cláusula `HAVING` filtra los grupos ya formados DESPUÉS del `GROUP BY` basándose en el resultado de una función de agregación (ej. `GROUP BY departamento HAVING COUNT(*) > 5` o `HAVING AVG(salario) > 20000`). Finalmente, `ORDER BY col ASC | DESC` ordena la salida final.',
          'Operaciones de Unión (`JOIN`), Conjuntos (`UNION`, `INTERSECT`) y Vistas (`VIEW`): 1) `INNER JOIN`: Devuelve únicamente las filas donde existe coincidencia exacta entre la clave de la tabla A y la tabla B. 2) `LEFT OUTER JOIN` (`LEFT JOIN`): Devuelve todas las filas de la tabla izquierda más las coincidencias de la derecha (rellenando con `NULL` si no hay coincidencia en la derecha). 3) Operadores de Conjunto (requieren que ambos `SELECT` tengan el mismo número de columnas y tipos compatibles): `UNION` combina los resultados de dos consultas eliminando duplicados (`UNION ALL` conserva duplicados) e `INTERSECT` devuelve únicamente las filas que aparecen en ambas consultas simultáneamente. 4) Vista (`CREATE VIEW nombre AS SELECT ...`): Es una tabla virtual almacenada como una consulta predefinida que no duplica físicamente los datos (salvo vistas materializadas); se utiliza para simplificar consultas complejas repetitivas y por seguridad (restringir el acceso de ciertos usuarios a columnas sensibles como sueldos o contraseñas).',
        ],
      },
      {
        title: '3. Transacciones ACID, Concurrencia, Índices (B-Tree vs. Bitmap) y Datos Semiestructurados',
        description:
          'Los Sistemas Gestores de Bases de Datos (SGBD) garantizan que miles de usuarios concurrentes lean y escriban datos a alta velocidad sin corromper la información.',
        points: [
          'Propiedades ACID de las Transacciones: Una transacción es una unidad lógica de trabajo compuesta por una o varias operaciones SQL que debe cumplir las 4 propiedades ACID: 1) Atomicidad (Todo o Nada): O se ejecutan exitosamente todas las operaciones de la transacción (`COMMIT`) o, si ocurre cualquier fallo intermedio, se deshacen absolutamente todos los efectos parciales (`ROLLBACK`), como en una transferencia bancaria. 2) Consistencia: La transacción lleva a la base de datos de un estado válido a otro estado válido, respetando todas las reglas de integridad (PK, FK, `CHECK`, `UNIQUE`). 3) Aislamiento (Isolation): La ejecución concurrente de múltiples transacciones no debe interferir entre sí (controlado mediante niveles de aislamiento: `Read Uncommitted`, `Read Committed`, `Repeatable Read`, `Serializable`, evitando lecturas sucias, lecturas no repetibles y lecturas fantasma mediante bloqueos `Locks` compartidos/exclusivos o control multiversión `MVCC`). 4) Durabilidad: Una vez confirmada la transacción (`COMMIT`), sus cambios persisten de forma permanente (gracias al registro Write-Ahead Logging / Redo Log en disco) incluso si el servidor sufre un apagón eléctrico un milisegundo después.',
          'Estructuras de Indexación: Índices B-Tree (B+Tree) vs. Índices Bitmap: Un índice acelera drásticamente las búsquedas (`SELECT ... WHERE` y `JOIN`) a cambio de ocupar espacio adicional y añadir un pequeño costo al insertar/actualizar. 1) Índice B-Tree / B+Tree: Es el índice predeterminado en casi todos los SGBD relacionales; mantiene las claves ordenadas en un árbol balanceado multicamino logrando búsquedas exactas y búsquedas por rangos (`BETWEEN`, `<`, `>`, `ORDER BY`, `LIKE \'prefijo%\'`) en tiempo logarítmico `O(log n)`; es ideal para columnas de Alta Cardinalidad (muchos valores distintos, como RFC, matrícula, correo, fechas o montos). 2) Índice Bitmap (Mapa de Bits): Representa cada valor distinto de una columna mediante un vector de bits (0 y 1) por fila y resuelve filtros complejos `AND/OR` con operaciones bit a bit ultrarrápidas; es el índice óptimo para almacenes de datos (Data Warehouses) en columnas de Baja Cardinalidad (pocos valores distintos repetidos millones de veces, como `Género`, `Estado_Civil`, `Activo/Inactivo` booleano o `Región`).',
          'Datos Semiestructurados (JSON y XML) y su Estructura en Memoria: Formatos de intercambio y bases de datos documentales NoSQL (como MongoDB) almacenan información en documentos JSON (JavaScript Object Notation) o XML compuestos por pares `clave: valor` y arreglos anidados. Debido a su naturaleza jerárquica de elementos padres e hijos anidados, la estructura de datos natural que utilizan los analizadores (parsers DOM) para representar y recorrer un documento JSON o XML en memoria es un Árbol (Tree).',
        ],
      },
      {
        title: '4. Algoritmos en Grafos para Manejo de Datos y Optimización de Rutas (Dijkstra, Floyd-Warshall, Kruskal y Prim)',
        description:
          'El banco de reactivos de la Subárea 3.3 evalúa explícitamente la selección del algoritmo óptimo sobre grafos ponderados para resolver problemas de ruteo, logística, redes de costos y árboles de expansión.',
        points: [
          'Representación de Grafos y Detección de Ciclos: Un grafo `G = (V, E)` consta de un conjunto de vértices (nodos `V`) y aristas (enlaces `E`), pudiendo ser Dirigido (dígrafo) o No Dirigido, y Ponderado (cada arista tiene un peso, costo o distancia) o No Ponderado. Se representa en memoria mediante una Matriz de Adyacencia (`O(V²)` espacio, consulta de arista en `O(1)`, ideal para grafos densos) o una Lista de Adyacencia (`O(V + E)` espacio, ideal para grafos dispersos). Para detectar si existe un ciclo en un grafo o realizar un ordenamiento topológico de dependencias se utiliza el recorrido en Profundidad (`DFS`).',
          'Algoritmos de Camino Más Corto (Shortest Path): 1) Algoritmo de Dijkstra (Un solo origen — Single-Source Shortest Path): Algoritmo voraz (Greedy) que apoyado en una Cola de Prioridad (Min-Heap) calcula la ruta de costo mínimo desde un nodo origen inicial hacia todos los demás nodos de un grafo ponderado, con la restricción obligatoria de que todos los pesos de las aristas sean NO negativos (`peso ≥ 0`), con complejidad `O((V + E) log V)` (si existen pesos negativos se debe usar Bellman-Ford). 2) Algoritmo de Floyd-Warshall (Todos los pares — All-Pairs Shortest Path): Algoritmo basado en Programación Dinámica con tres bucles anidados (`O(V³)`) que calcula simultáneamente en una matriz las distancias más cortas entre TODOS los pares de nodos del grafo.',
          'Algoritmos de Árbol de Expansión Mínima (MST — Minimum Spanning Tree: Kruskal y Prim): Dado un grafo conexo, no dirigido y ponderado (ej. conectar todas las ciudades o edificios de un campus con fibra óptica o tubería al menor costo total posible sin formar ciclos), un MST conecta los `V` vértices utilizando exactamente `V - 1` aristas con la suma de pesos mínima: 1) Algoritmo de Kruskal: Estrategia voraz centrada en las ARISTAS; ordena todas las aristas del grafo de menor a mayor peso y las va agregando una por una siempre que no formen un ciclo (verificado eficientemente con la estructura Disjoint-Set / Union-Find), con complejidad `O(E log E)`, ideal para grafos dispersos. 2) Algoritmo de Prim: Estrategia voraz centrada en los NODOS; parte de un vértice arbitrario y hace crecer un único árbol conectado eligiendo en cada paso la arista más barata que conecta un nodo ya incluido en el árbol con un nodo externo aún no visitado, usando una cola de prioridad.',
        ],
      },
    ],
    tables: [
      {
        title: 'Guía Definitiva de las Formas Normales en Bases de Datos Relacionales',
        headers: ['Forma Normal', 'Requisito / Qué Elimina Exactamente', 'Cómo Identificar una Violación en un Reactivo EGEL'],
        rows: [
          ['1FN (Primera)', 'Exige Atomicidad de todos los atributos.', 'Una celda guarda varios teléfonos separados por comas o columnas `Tel1, Tel2, Tel3`.'],
          ['2FN (Segunda)', 'Está en 1FN + Elimina Dependencias Parciales.', 'La PK es compuesta `(ID_Pedido, ID_Producto)` y `Nombre_Producto` depende solo de `ID_Producto`.'],
          ['3FN (Tercera)', 'Está en 2FN + Elimina Dependencias Transitivas.', 'Un atributo no-llave depende de otro atributo no-llave (`ID_Alumno → ID_Carrera → Nombre_Carrera`).'],
          ['BCNF (Boyce-Codd)', 'Todo determinante funcional `X → Y` es Superllave.', 'Existe una dependencia donde un atributo no-llave determina parte de una llave candidata.'],
        ],
      },
      {
        title: 'Selección de Algoritmos de Grafos según el Problema Planteado',
        headers: ['Problema a Resolver en el Examen', 'Algoritmo Correcto', 'Técnica / Condición Clave'],
        rows: [
          ['Ruta más corta desde 1 nodo origen hacia los demás (pesos ≥ 0)', 'Algoritmo de Dijkstra', 'Estrategia Voraz (Greedy) con Cola de Prioridad (Min-Heap).'],
          ['Ruta más corta entre TODOS los pares de nodos de una red', 'Algoritmo de Floyd-Warshall', 'Programación Dinámica en matriz `O(V³)`.'],
          ['Conectar todos los nodos al costo mínimo total ordenando aristas', 'Algoritmo de Kruskal (MST)', 'Árbol de Expansión Mínima ordenando aristas de menor a mayor sin ciclos.'],
          ['Conectar todos los nodos al costo mínimo creciendo desde un nodo inicial', 'Algoritmo de Prim (MST)', 'Árbol de Expansión Mínima expandiendo el nodo vecino más cercano.'],
          ['Detectar ciclos en un grafo o explorar caminos profundos / backtracking', 'Búsqueda en Profundidad (DFS)', 'Usa una Pila (LIFO) o recursión; detecta aristas de retroceso (back-edges).'],
          ['Ruta con menor número de saltos en un grafo NO ponderado', 'Búsqueda en Anchura (BFS)', 'Usa una Cola (FIFO) explorando por niveles de distancia.'],
        ],
      },
    ],
    formulas: [
      { label: 'Orden Lógico de Escritura de una Consulta SQL', code: 'SELECT [DISTINCT] cols FROM t1 JOIN t2 ON ... WHERE cond_filas GROUP BY cols HAVING cond_grupos ORDER BY col' },
      { label: 'Regla de Oro: WHERE vs. HAVING en SQL', code: 'WHERE filtra filas individuales ANTES de agrupar  |  HAVING filtra grupos DESPUÉS de GROUP BY (usa COUNT/AVG/SUM)' },
      { label: 'Propiedades ACID de una Transacción', code: 'Atomicidad (COMMIT/ROLLBACK) + Consistencia + Aislamiento (Locks/MVCC) + Durabilidad (Redo Log)' },
      { label: 'Aristas de un Árbol de Expansión Mínima (MST)', code: 'Número de aristas = V - 1   (Conecta V vértices con costo mínimo y CERO ciclos)' },
    ],
    examTips: [
      'Trampa clásica de SQL: si necesitas filtrar usando una función de agregación como `COUNT(*) > 3` o `AVG(sueldo) > 15000`, NUNCA va en el `WHERE`; debe ir obligatoriamente en la cláusula `HAVING` después del `GROUP BY`.',
      'En Normalización: celdas multivaluadas = viola 1FN; atributo que depende solo de la mitad de una PK compuesta = viola 2FN; atributo no-llave que depende de otro atributo no-llave = viola 3FN.',
      'En índices de Bases de Datos: usa `B-Tree` para columnas con muchos valores únicos y búsquedas por rango (`<`, `>`, `BETWEEN`); usa `Bitmap` para columnas booleanas o con muy pocos valores posibles (baja cardinalidad).',
      'En grafos: un origen a todos con pesos positivos = `Dijkstra`; todos los pares contra todos los pares = `Floyd-Warshall`; conectar todos los puntos al costo mínimo sin ciclos = `Kruskal` o `Prim`.',
      'Un documento jerárquico JSON o XML se modela y procesa en memoria mediante una estructura de datos de tipo `Árbol (Tree)`.',
    ],
  },

  // =========================================================================
  // ÁREA 4: HABILIDADES TRANSVERSALES (COMPRENSIÓN LECTORA)
  // =========================================================================
  {
    subareaCode: '4.1',
    subareaName: '4.1 Comprensión Lectora',
    area: 'Habilidades Transversales',
    sources: [
      'CENEVAL — Guía para el Sustentante: Sección Transversal de Lenguaje y Comunicación (Comprensión Lectora)',
      'Acervo de Lecturas Oficiales Integrado en el Proyecto (src/data/MoreQuestions/comprension-lectora.json)',
      'Cassany, D. — Tras las líneas: Sobre la lectura contemporánea',
    ],
    summary:
      'Evalúa la capacidad transversal del ingeniero para analizar, interpretar y evaluar críticamente textos argumentativos, expositivos, literarios y de divulgación científica (incluyendo el análisis completo de las 7 lecturas oficiales del banco: "Musicofilia" de Oliver Sacks, "El lenguaje de los animales" de Eva Meijer, "La cuchara menguante" de Sam Kean, el ensayo argumentativo sobre "Energías Limpias vs. Combustibles Fósiles", "Un mundo feliz" de Aldous Huxley, el texto narrativo "Una cena muy original" y el ensayo sobre "Las redes sociales"). Cubre los tres niveles de lectura exigidos por CENEVAL: Identificación de información explícita, Interpretación (idea central, inferencias, paráfrasis, secuencias y relaciones causa-efecto) y Evaluación crítica de la forma y el contenido (postura y tono del autor, intención comunicativa y recursos retóricos).',
    keyTopics: [
      'Tipologías Textuales: Expositivo, Argumentativo, Divulgación Científica y Literario',
      'Los 3 Niveles de Lectura CENEVAL: Literal (Explícito), Inferencial (Implícito) y Crítico',
      'Identificación de Tesis / Idea Central vs. Argumentos de Apoyo e Ideas Secundarias',
      'Relaciones Lógicas: Causa-Consecuencia, Problema-Solución, Comparación-Contraste y Paráfrasis',
      'Determinación de la Postura y Tono del Autor (Admiración, Crítica, Objetividad, Ironía)',
      'Análisis de las 7 Lecturas del Banco (Musicofilia, Lenguaje Animal, Galio/Mercurio, Energías Limpias, Un Mundo Feliz, Cena Original y Redes Sociales)',
    ],
    sections: [
      {
        title: '1. Tipologías Textuales y Estructura Lógica del Discurso en el Examen CENEVAL',
        description:
          'El primer paso al abordar una lectura en la sección transversal del EGEL es identificar qué tipo de texto es y cuál es su propósito comunicativo dominante.',
        points: [
          'Texto de Divulgación Científica / Expositivo (ej. "Musicofilia", "El lenguaje de los animales", "La cuchara menguante"): Su intención comunicativa es informar, explicar y difundir hallazgos científicos o técnicos a un público general no especializado de manera clara, amena y rigurosa. Se estructura en Introducción (planteamiento del fenómeno), Desarrollo (explicación de experimentos, casos clínicos, datos históricos y ejemplos) y Conclusión (síntesis o alcance del descubrimiento). Utiliza definiciones, analogías, ejemplificaciones y relaciones de causa-efecto.',
          'Texto Argumentativo / Ensayo de Opinión (ej. "Energías limpias vs. energías fósiles", "Las redes sociales"): Su propósito es persuadir, convencer o defender una postura razonada sobre un tema polémico. Sus dos componentes esenciales son: 1) La Tesis (Postura o Idea Central que el autor sostiene y busca demostrar a lo largo del texto) y 2) Los Argumentos (pruebas, datos estadísticos, citas de autoridad, ejemplos o contraejemplos que respaldan la tesis), cerrando con una conclusión o propuesta de acción.',
          'Texto Literario / Narrativo (ej. "Un mundo feliz" de Aldous Huxley, "Una cena muy original"): Relata acciones protagonizadas por personajes dentro de un tiempo y espacio determinados mediante un narrador (omnisciente, protagonista o testigo). Su estructura clásica comprende Planteamiento (situación inicial), Nudo o Desarrollo (conflicto o tensión creciente) y Desenlace (resolución sorpresiva o cierre). En ellos se evalúa la secuencia cronológica de acciones, las motivaciones psicológicas de los personajes y el sentido figurado o metafórico.',
        ],
      },
      {
        title: '2. Los Tres Procesos de Comprensión Lectora Evaluados por CENEVAL',
        description:
          'Cada reactivo de Comprensión Lectora pertenece a una de tres categorías cognitivas. Saber identificar qué pide la pregunta evita caer en distractores.',
        points: [
          '1. Identificar Información Explícita (Nivel Literal): Evalúa la localización precisa de datos, fechas, nombres, definiciones o hechos que aparecen textualmente en un párrafo específico (o expresados mediante sinónimos directos). Regla: verifica siempre el número de párrafo `[1]`, `[2]` citado en la pregunta antes de responder.',
          '2. Interpretar Información (Nivel Inferencial): Exige relacionar distintas partes del texto para deducir información que no está escrita literalmente pero que se desprende lógicamente de las premisas del autor. Incluye: distinguir la Idea Central (que abarca globalmente todo el texto) de las Ideas Secundarias (que solo detallan un párrafo aislado), elegir la Paráfrasis correcta (decir exactamente lo mismo con otras palabras sin añadir opiniones ni mutilar la relación causal), ordenar secuencias de eventos e identificar relaciones de Causa-Consecuencia o Problema-Solución.',
          '3. Evaluar la Forma y el Contenido (Nivel Crítico-Valorativo): Evalúa la capacidad de juzgar la intención comunicativa del autor, su Postura o Actitud frente al tema (ej. de admiración y asombro ante un genio musical, de crítica ante el rezago energético, de advertencia ante la pérdida de privacidad, o neutra/objetiva al exponer un experimento), así como identificar la función de recursos discursivos (por qué el autor usa comillas, preguntas retóricas, citas o analogías).',
        ],
      },
      {
        title: '3. Desglose Analítico de las 7 Lecturas del Banco de Reactivos (Guía de Estudio Directa)',
        description:
          'Resumen ejecutivo de la tesis, estructura e inferencias clave de los 7 textos integrados en el simulador para asegurar el 100% de aciertos en el área transversal.',
        points: [
          'Lectura 1 — "Musicofilia" (Oliver Sacks, sobre el caso de Tony Cicoria): Texto de divulgación neurocientífica que narra el caso real del cirujano ortopédico Tony Cicoria, quien tras ser alcanzado por un rayo en una cabina telefónica y sufrir una experiencia cercana a la muerte, desarrolla una súbita e insaciable pasión por tocar y componer música de piano ("musicofilia"). Puntos clave: la postura del autor es de asombro e interés científico ante la plasticidad y los misterios del cerebro humano; la transformación de Cicoria ocurre como consecuencia directa del impacto del rayo.',
          'Lectura 2 — "El lenguaje de los animales" (Eva Meijer): Texto de divulgación científica que demuestra, a través de los estudios del biólogo Con Slobodchikoff con los perritos de la pradera, que los animales poseen sistemas de comunicación complejos con elementos gramaticales y semánticos (son capaces de describir con precisión el tamaño, color de ropa y velocidad de un intruso humano, e incluso inventar nuevos términos para objetos que nunca habían visto). Idea central: refutar el prejuicio antropocéntrico de que el lenguaje complejo es exclusivo de los seres humanos.',
          'Lectura 3 — "La cuchara menguante" (Sam Kean): Texto de divulgación química que contrasta las propiedades físicas del Mercurio (único metal líquido a temperatura ambiente) y del Galio (metal sólido a temperatura ambiente pero cuyo punto de fusión es de apenas ~29.76 °C / 85 °F, por lo que se derrite al sostenerlo en la mano o al revolver una taza de té caliente, dando origen a la broma clásica de los químicos de fabricar cucharas de galio que "desaparecen"). Propósito: explicar de forma amena y anecdótica las propiedades térmicas de los elementos de la tabla periódica.',
          'Lectura 4 — "Energías limpias vs. combustibles fósiles" (Ensayo argumentativo sobre México): Analiza la transición energética global y critica la política de seguir invirtiendo recursos públicos masivos en refinerías y combustibles fósiles altamente contaminantes (como el combustóleo) en lugar de aprovechar el enorme potencial solar y eólico del país. Tesis del autor: es urgente abandonar la dependencia de los hidrocarburos y transitar hacia energías renovables por razones ambientales, económicas y de salud pública.',
          'Lectura 5 — "Un mundo feliz" (Fragmento de Aldous Huxley): Texto literario distópico donde el Director de Incubación y Acondicionamiento explica a un grupo de estudiantes el "Proceso Bokanovsky" (división artificial de óvulos para producir hasta 96 gemelos idénticos en serie como "instrumentos de estabilidad social") y el acondicionamiento neopavloviano mediante descargas eléctricas y ruidos estridentes aplicados a bebés (casta Delta) para que odien instintivamente los libros y las flores por motivos económicos de consumo.',
          'Lectura 6 — "Una cena muy original" y Lectura 7 — "Las redes sociales": En el relato de la cena, un anfitrión excéntrico pone a prueba los prejuicios de sus invitados sirviendo un banquete cuyos platillos aparentan ser exóticos o alarmantes, revelando al final la naturaleza real de los alimentos. En el ensayo sobre las redes sociales, se expone la dualidad de las plataformas digitales: por un lado facilitan la comunicación instantánea y el acceso a la información, pero por otro conllevan riesgos severos de adicción, ciberacoso, desinformación (fake news) y pérdida de privacidad que exigen un uso crítico y responsable.',
        ],
      },
    ],
    tables: [
      {
        title: 'Estrategia para Resolver Reactivos de Comprensión Lectora en el EGEL',
        headers: ['Tipo de Pregunta CENEVAL', 'Qué Busca Evaluar', 'Cómo Descartar los 2 o 3 Distractores Incorrectos'],
        rows: [
          ['"¿Cuál es la idea central del texto?"', 'Síntesis global de toda la lectura.', 'Descarta opciones que solo mencionan un ejemplo de un solo párrafo (demasiado específicas) o que exageran con palabras absolutas ("nunca", "único").'],
          ['"Del párrafo [X] se infiere que..."', 'Deducción lógica implícita.', 'Descarta opciones que copian literalmente una frase sin deducir nada, o aquellas que inventan suposiciones ajenas al texto.'],
          ['"¿Cuál es la postura del autor?"', 'Actitud o valoración subjetiva/objetiva.', 'Identifica los adjetivos valorativos del autor: si usa datos neutros es expositiva/objetiva; si cuestiona una política es crítica.'],
          ['"Elige la paráfrasis correcta de..."', 'Equivalencia semántica exacta.', 'La opción correcta conserva TANTO la causa COMO el efecto de la cita original usando sinónimos precisos.'],
        ],
      },
    ],
    formulas: [
      { label: 'Fórmula de la Idea Central (Tema + Propósito)', code: 'Idea Central = ¿De qué trata todo el texto? (Tema) + ¿Qué sostiene o explica el autor sobre ello? (Tesis)' },
      { label: 'Fórmula de la Inferencia Válida', code: 'Premisa explícita en el texto + Relación lógica necesaria = Conclusión implícita verdadera (sin inventar datos)' },
      { label: 'Estructura Argumentativa Estándar', code: 'Tesis (Postura que se defiende) + Argumentos (Datos/Citas/Causas) = Conclusión (Propuesta o cierre)' },
    ],
    examTips: [
      'Nunca respondas Comprensión Lectora con tu opinión personal externa: la respuesta correcta siempre está estrictamente respaldada por la evidencia interna de los párrafos de la lectura.',
      'Desconfía de los incisos que usan generalizaciones extremas no escritas por el autor (`"todos"`, `"siempre"`, `"jamás"`, `"es imposible"`).',
      'Cuando te pregunten por la relación entre dos párrafos (ej. el `[2]` y el `[3]`), verifica si el primero plantea una causa o afirmación general y el segundo presenta la consecuencia o el ejemplo concreto que la demuestra.',
    ],
  },
];

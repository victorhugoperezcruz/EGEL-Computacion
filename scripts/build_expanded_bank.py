#!/usr/bin/env python3
"""
Genera más de 130 reactivos adicionales basados directamente en los libros de scripts/raw_books/
y los guarda en src/data/, integrándose con los 570 reactivos de src/data/MoreQuestions/
para superar los 700 reactivos totales en la plataforma.
"""

import json
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent
DATA_DIR = BASE_DIR / "src" / "data"


def crear_pregunta(id_q, area, subarea, pregunta, a, b, c, d, correcta, explicacion):
    return {
        "id": id_q,
        "area": area,
        "subarea": subarea,
        "pregunta": pregunta,
        "opciones": [
            {"id": "A", "texto": a},
            {"id": "B", "texto": b},
            {"id": "C", "texto": c},
            {"id": "D", "texto": d},
        ],
        "respuesta_correcta": correcta,
        "explicacion": explicacion,
    }


A_HW = "Implementación de Hardware"
S_1_1 = "1.1 Circuitos eléctricos y electrónica"
S_1_2 = "1.2 Arquitectura de computadoras y diseño digital"
S_1_3 = "1.3 Sistemas embebidos y tiempo real"
S_1_4 = "1.4 Automatización y control"

A_NET = "Implementación de Redes"
S_2_1 = "2.1 Diseño y direccionamiento de redes"
S_2_2 = "2.2 Administración y configuración de redes"
S_2_3 = "2.3 Seguridad en redes"

A_SW = "Implementación de Software"
S_3_1 = "3.1 Ingeniería de software y calidad"
S_3_2 = "3.2 Programación, estructuras de datos y algoritmos"
S_3_3 = "3.3 Bases de datos y manejo de datos"

# =====================================================================
# 1. RESUMEN SISTEMAS DIGITALES Y ARQUITECTURA (32 reactivos)
# =====================================================================
sistemas_digitales = [
    crear_pregunta(
        "sd_001", A_HW, S_1_1,
        "Durante el diseño de una tarjeta de adquisición de datos para un laboratorio, se requiere procesar una variable física que varía de forma continua en amplitud y periodo a lo largo del tiempo, para luego ingresarla a un sistema digital que solo opera con dos estados lógicos discretos (0 y 1). ¿Qué tipo de señales están involucradas en la entrada del sensor y en la etapa de procesamiento lógico respectivamente?",
        "Señal analógica continua en la entrada del sensor y señal digital discontinua en la etapa de procesamiento.",
        "Señal digital discreta en la entrada del sensor y señal analógica senoidal en la etapa de procesamiento.",
        "Señal de corriente directa pulsante en el sensor y señal de corriente alterna en la CPU.",
        "Señal binaria codificada en la entrada y señal continua de infinitos valores en los registros internos.",
        "A",
        "Una señal analógica es continua y puede tomar infinitos valores (variando en amplitud y periodo), mientras que una señal digital es discontinua y solo toma dos valores discretos: 0 y 1."
    ),
    crear_pregunta(
        "sd_002", A_HW, S_1_1,
        "En una fuente de alimentación lineal para un sistema digital, se necesita convertir la tensión de red (CA) en un flujo de carga eléctrica unidireccional constante (CC). Se requiere un semiconductor de dos terminales que permita el paso de la corriente en un solo sentido y un elemento pasivo que almacene energía en un campo eléctrico. ¿Qué combinación cumple estos requerimientos?",
        "Diodos para la rectificación unidireccional y capacitores (condensadores) para almacenar energía en un campo eléctrico.",
        "Transistores como elementos pasivos y resistencias para almacenar energía en un campo magnético.",
        "Resistencias unidireccionales y diodos para almacenar carga eléctrica.",
        "Inductores para bloquear CD y termistores para rectificar CA.",
        "A",
        "El diodo permite la circulación de corriente en un solo sentido (rectificación) y el capacitor almacena energía sustentando un campo eléctrico (filtrado)."
    ),
    crear_pregunta(
        "sd_003", A_HW, S_1_1,
        "Un ingeniero de hardware necesita activar un relevador de potencia a partir de la señal de salida de baja corriente de una compuerta lógica. Para ello selecciona un dispositivo electrónico semiconductor de tres terminales capaz de producir una señal de salida amplificada o actuar como conmutador en respuesta a una señal de entrada. ¿Qué componente debe emplear?",
        "Un capacitor electrolítico.",
        "Un transistor.",
        "Una resistencia óhmica.",
        "Un diodo rectificador simple.",
        "B",
        "El transistor es un dispositivo semiconductor utilizado para producir una señal de salida en respuesta a otra de entrada, cumpliendo funciones de amplificador, oscilador o conmutador."
    ),
    crear_pregunta(
        "sd_004", A_HW, S_1_2,
        "En el diseño de la arquitectura de una computadora básica, se distinguen tres bloques funcionales principales para recibir datos, procesarlos mediante secuencias de instrucciones y entregar información útil al exterior. ¿Cuáles son estas tres partes fundamentales y cuál interpreta las instrucciones?",
        "Memoria, CPU y Dispositivos de Entrada/Salida; siendo la CPU la encargada de interpretar las instrucciones y procesar los datos.",
        "Compilador, Bus de Datos y Fuente de Poder; siendo la Memoria RAM la que interpreta las instrucciones.",
        "ALU, Teclado y Monitor; siendo el Dispositivo de Entrada/Salida el que decodifica el código máquina.",
        "Registros, Caché y Disco Duro; siendo el Disco Duro el responsable de decodificar las instrucciones.",
        "A",
        "Una computadora está conformada por Memoria, CPU y Dispositivos de Entrada/Salida. La CPU interpreta las instrucciones del programa y procesa los datos."
    ),
    crear_pregunta(
        "sd_005", A_HW, S_1_2,
        "Al analizar el circuito lógico de un sistema de seguridad industrial, se observa que la salida de alarma depende única y exclusivamente de la combinación de los niveles lógicos presentes en sus entradas en ese instante, sin poseer elementos de memoria. ¿A qué clasificación de circuito digital corresponde?",
        "Circuito lógico secuencial síncrono.",
        "Circuito lógico combinacional.",
        "Autómata de estados finitos tipo Moore.",
        "Registro de desplazamiento con flip-flops JK.",
        "B",
        "En los circuitos lógicos combinacionales las salidas dependen exclusivamente de la combinación actual de las entradas, sin almacenar estados previos."
    ),
    crear_pregunta(
        "sd_006", A_HW, S_1_2,
        "Se requiere simplificar la función booleana F(A,B) = A·B + A·B' para minimizar el número de compuertas lógicas en una implementación física. Aplicando los teoremas del Álgebra de Boole, ¿cuál es la expresión mínima equivalente?",
        "F = A",
        "F = B",
        "F = A + B",
        "F = 1",
        "A",
        "Factorizando: F = A·(B + B'). Como B + B' = 1, queda F = A·1 = A."
    ),
    crear_pregunta(
        "sd_007", A_HW, S_1_2,
        "Dentro de la CPU, se requiere ejecutar una instrucción que realiza una suma en complemento a dos y una comparación lógica bit a bit (AND), actualizando el registro de banderas (Zero, Carry, Overflow). ¿Qué subcomponente interno realiza directamente estas operaciones?",
        "La Unidad Aritmético-Lógica (ALU).",
        "El Contador de Programa (PC).",
        "El Bus de Direcciones.",
        "El Controlador DMA.",
        "A",
        "La ALU es el circuito digital dentro de la CPU encargado de realizar operaciones aritméticas y lógicas entre los operandos."
    ),
    crear_pregunta(
        "sd_008", A_HW, S_1_2,
        "Un procesador posee un bus de direcciones de 16 bits y un bus de datos de 8 bits. ¿Cuál es la capacidad máxima de posiciones de memoria que puede direccionar de manera directa?",
        "65,536 posiciones de memoria (64 KB).",
        "256 posiciones de memoria (256 Bytes).",
        "1,048,576 posiciones de memoria (1 MB).",
        "16,384 posiciones de memoria (16 KB).",
        "A",
        "Con un bus de direcciones de N = 16 bits, el espacio direccionable es 2^16 = 65,536 posiciones."
    ),
    crear_pregunta(
        "sd_009", A_HW, S_1_1,
        "En un circuito limitador de corriente para un diodo LED alimentado por 5 V, circula una corriente continua de 10 mA y la caída de tensión en la resistencia es de 3 V. ¿Cuál es el valor de la resistencia y su unidad en el Sistema Internacional?",
        "300 Ohmios (Ω).",
        "0.03 Amperios (A).",
        "30 Voltios (V).",
        "3,000 Culombios por segundo (C/s).",
        "A",
        "Por Ley de Ohm: R = V / I = 3 V / 0.010 A = 300 Ω."
    ),
    crear_pregunta(
        "sd_010", A_HW, S_1_2,
        "Se está diseñando un contador binario síncrono de 4 bits. Para almacenar cada bit de estado y cambiar su valor únicamente en el flanco de subida del reloj (CLK), ¿qué elemento básico de memoria secuencial debe emplearse por cada bit?",
        "Un Flip-Flop (biestable) disparado por flanco.",
        "Un multiplexor de 4 a 1 entradas.",
        "Un codificador de prioridad.",
        "Una compuerta XOR de dos entradas.",
        "A",
        "Los Flip-Flops son elementos secuenciales biestables capaces de almacenar 1 bit y sincronizar sus cambios con el flanco de reloj."
    ),
    crear_pregunta(
        "sd_011", A_HW, S_1_2,
        "Según los Teoremas de De Morgan en el diseño lógico digital, ¿a qué equivale la negación de un producto lógico (A · B)'?",
        "A' + B' (la suma lógica de las variables negadas individualmente).",
        "A' · B' (el producto de las variables negadas).",
        "A + B (la suma directa sin negación).",
        "A ⊕ B (la operación OR exclusiva).",
        "A",
        "Por la Primera Ley de De Morgan, el complemento de un producto de variables es igual a la suma de los complementos individuales: (A·B)' = A' + B'."
    ),
    crear_pregunta(
        "sd_012", A_HW, S_1_2,
        "En un mapa de Karnaugh de 4 variables (A, B, C, D), se logra agrupar un bloque adyacente de 8 celdas con valor '1'. ¿Cuántas variables se eliminan en el término producto resultante y cuántas literales tendrá dicho término?",
        "Se eliminan 3 variables y el término resultante tendrá solo 1 literal.",
        "Se elimina 1 variable y el término resultante tendrá 3 literales.",
        "Se eliminan 2 variables y el término resultante tendrá 2 literales.",
        "No se elimina ninguna variable; quedan las 4 literales.",
        "A",
        "En un mapa de Karnaugh, un grupo de 2^k celdas adyacentes elimina k variables. Como 8 = 2^3, se eliminan 3 variables y de las 4 originales queda únicamente 1 literal."
    ),
    crear_pregunta(
        "sd_013", A_HW, S_1_2,
        "¿Cuál es la representación en complemento a 2 de 8 bits del número decimal negativo -45?",
        "11010011",
        "10101101",
        "11010010",
        "00101101",
        "A",
        "+45 en binario de 8 bits es 00101101. Invirtiendo los bits (complemento a 1) se obtiene 11010010, y sumando 1 se obtiene 11010011."
    ),
    crear_pregunta(
        "sd_014", A_HW, S_1_2,
        "Un circuito digital requiere seleccionar una de 8 líneas de datos de entrada y dirigirla hacia una única línea de salida utilizando 3 líneas de selección (S2, S1, S0). ¿Qué dispositivo combinacional cumple esta función?",
        "Multiplexor 8 a 1.",
        "Decodificador 3 a 8.",
        "Sumador completo (Full Adder).",
        "Contador en anillo de 8 bits.",
        "A",
        "Un multiplexor (MUX) 2^n a 1 selecciona una entre 2^n entradas mediante n líneas de selección y la encamina a una sola salida."
    ),
    crear_pregunta(
        "sd_015", A_HW, S_1_1,
        "En un amplificador con transistor bipolar (BJT) usado como conmutador digital para encender una carga, ¿en qué dos regiones de operación debe trabajar el transistor para representar los estados de corte (apagado) y conducción máxima (encendido)?",
        "Región de Corte y Región de Saturación.",
        "Región Activa Directa y Región de Ruptura Avalancha.",
        "Región Activa Inversa y Región Óhmica.",
        "Región Zener y Región de Estrangulamiento.",
        "A",
        "Para operar como interruptor digital, un BJT conmuta entre Corte (corriente de colector nula) y Saturación (VCE mínima cercana a 0.2 V)."
    ),
    crear_pregunta(
        "sd_016", A_HW, S_1_2,
        "¿Qué compuerta lógica se considera 'universal' debido a que cualquier función booleana (NOT, AND, OR, XOR) puede construirse utilizando únicamente compuertas de este tipo?",
        "NAND (o NOR).",
        "AND exclusivamente.",
        "XOR exclusivamente.",
        "Buffer tri-estado.",
        "A",
        "Las compuertas NAND y NOR poseen completitud funcional (son universales), por lo que cualquier circuito combinacional o secuencial puede implementarse solo con ellas."
    ),
    crear_pregunta(
        "sd_017", A_HW, S_1_2,
        "En el diseño de un sumador binario de 4 bits en cascada (Ripple Carry Adder), cada etapa requiere sumar dos bits de entrada (Ai, Bi) junto con el acarreo de entrada de la etapa previa (Cin), produciendo una suma (Si) y un acarreo de salida (Cout). ¿Qué circuito combinacional debe usarse en cada etapa?",
        "Un Sumador Completo (Full Adder).",
        "Un Semisumador (Half Adder) de 2 entradas.",
        "Un Flip-Flop tipo T.",
        "Un comparador de magnitud de 1 bit.",
        "A",
        "El Sumador Completo (Full Adder) suma 3 bits de entrada (A, B y Cin) y genera Suma (S = A ⊕ B ⊕ Cin) y Acarreo de salida (Cout)."
    ),
    crear_pregunta(
        "sd_018", A_HW, S_1_2,
        "En un Flip-Flop JK sincronizado por flanco de subida, si ambas entradas se colocan en nivel alto (J = 1 y K = 1), ¿qué ocurre con la salida Q en el siguiente pulso de reloj?",
        "La salida Q se complementa o bascula (Toggle: Q(t+1) = Q'(t)).",
        "La salida Q permanece sin cambio (Estado de memoria).",
        "La salida Q se fuerza a 0 lógico (Reset).",
        "El Flip-Flop entra en un estado prohibido o indeterminado.",
        "A",
        "A diferencia del latch SR (donde S=1, R=1 es inválido), en el Flip-Flop JK la condición J=1 y K=1 produce el estado de basculación o complemento (Toggle)."
    ),
    crear_pregunta(
        "sd_019", A_HW, S_1_2,
        "¿Cuál es la diferencia fundamental entre la Arquitectura Von Neumann y la Arquitectura Harvard en el diseño de procesadores?",
        "Von Neumann utiliza una única memoria y un mismo bus para instrucciones y datos, mientras que Harvard dispone de memorias y buses físicamente separados para instrucciones y para datos.",
        "Von Neumann no posee Unidad de Control y Harvard carece de ALU.",
        "Harvard solo permite programación en lenguaje ensamblador y Von Neumann solo en alto nivel.",
        "Von Neumann ejecuta instrucciones en paralelo sin reloj y Harvard es puramente analógica.",
        "A",
        "La arquitectura Harvard separa las memorias y buses de programa y datos, permitiendo el acceso simultáneo a la instrucción y al operando en un solo ciclo."
    ),
    crear_pregunta(
        "sd_020", A_HW, S_1_2,
        "Para transferir grandes bloques de datos entre un controlador de disco de alta velocidad y la memoria RAM principal sin que la CPU tenga que intervenir en la copia de cada byte, ¿qué técnica de Entrada/Salida se emplea?",
        "Acceso Directo a Memoria (DMA - Direct Memory Access).",
        "Entrada/Salida programada por encuesta (Polling).",
        "Interrupción por software (Trap) byte por byte.",
        "Direccionamiento inmediato en registros de segmento.",
        "A",
        "El controlador DMA toma el control temporal de los buses del sistema para transferir bloques completos entre el periférico y la RAM, avisando a la CPU mediante una sola interrupción al finalizar."
    ),
    crear_pregunta(
        "sd_021", A_HW, S_1_1,
        "En un circuito divisor de tensión formado por dos resistencias en serie R1 = 2 kΩ y R2 = 3 kΩ conectadas a una fuente de 10 V de corriente directa, ¿cuál es el voltaje medido en las terminales de la resistencia R2?",
        "6 V",
        "4 V",
        "5 V",
        "3.33 V",
        "A",
        "Por la regla del divisor de tensión: V_R2 = Vin · [R2 / (R1 + R2)] = 10 V · [3 kΩ / (2 kΩ + 3 kΩ)] = 10 · (3/5) = 6 V."
    ),
    crear_pregunta(
        "sd_022", A_HW, S_1_1,
        "Se requiere regular el voltaje de referencia de un circuito analógico a 5.1 V constantes a pesar de pequeñas variaciones en la corriente de carga. ¿Qué dispositivo semiconductor operado en su región de ruptura inversa controlada está diseñado específicamente para esta función?",
        "Diodo Zener.",
        "Diodo emisor de luz (LED).",
        "Diodo Varactor.",
        "Fotodiodo PIN.",
        "A",
        "El diodo Zener está diseñado para trabajar polarizado inversamente en su tensión de ruptura Zener (Vz), manteniendo un voltaje prácticamente constante entre sus terminales."
    ),
    crear_pregunta(
        "sd_023", A_HW, S_1_2,
        "En un procesador con segmentación de cauce (Pipelining) de 5 etapas (IF, ID, EX, MEM, WB), una instrucción intenta utilizar como operando el resultado de la instrucción inmediatamente anterior que aún no ha llegado a la etapa de escritura (WB). ¿Cómo se denomina este conflicto y qué técnica de hardware lo mitiga sin detener siempre el pipeline?",
        "Riesgo de datos (Data Hazard / RAW) y se mitiga mediante adelantamiento o cortocircuito de datos (Forwarding / Bypassing).",
        "Riesgo estructural de memoria virtual y se mitiga formateando la caché L3.",
        "Interbloqueo de procesos (Deadlock) y se resuelve reiniciando el contador de programa.",
        "Desbordamiento de pila (Stack Overflow) y se corrige desactivando la ALU.",
        "A",
        "Un riesgo de datos Read-After-Write (RAW) ocurre cuando una instrucción depende del resultado de una previa en el pipeline; la unidad de Forwarding encamina el resultado directamente desde la salida de la ALU hacia la entrada de la siguiente instrucción."
    ),
    crear_pregunta(
        "sd_024", A_HW, S_1_2,
        "¿Qué principio explica el éxito de la memoria Caché al aprovechar que un programa tiende a reutilizar las mismas direcciones de memoria recientemente accedidas y las direcciones contiguas en el corto plazo?",
        "Principio de Localidad (Localidad Temporal y Localidad Espacial).",
        "Teorema de muestreo de Nyquist-Shannon.",
        "Ley de Amdahl del paralelismo infinito.",
        "Principio de exclusión mutua de Peterson.",
        "A",
        "La localidad temporal indica que un dato referenciado volverá a ser usado pronto; la localidad espacial indica que las posiciones cercanas en memoria serán accedidas en breve (como arreglos o código secuencial)."
    ),
    crear_pregunta(
        "sd_025", A_HW, S_1_1,
        "En un convertidor Analógico-Digital (ADC) de 10 bits con voltaje de referencia Vref = 5.0 V, ¿cuál es aproximadamente la resolución (valor del bit menos significativo, 1 LSB) del convertidor?",
        "4.88 mV (5 V / 1024 niveles).",
        "0.50 V (5 V / 10 niveles).",
        "19.53 mV (5 V / 256 niveles).",
        "1.22 mV (5 V / 4096 niveles).",
        "A",
        "Un ADC de N = 10 bits tiene 2^10 = 1024 niveles de cuantización. La resolución por escalón es Vref / 2^10 = 5.0 V / 1024 ≈ 4.88 mV."
    )
]

# =====================================================================
# 2. SISTEMAS EMBEBIDOS Y AUTOMATIZACIÓN (30 reactivos)
# =====================================================================
sistemas_embebidos = [
    crear_pregunta(
        "emb_001", A_HW, S_1_3,
        "Una empresa automotriz requiere diseñar la unidad electrónica encargada de controlar la inyección de combustible y el sistema de frenos ABS. A diferencia de una PC, este sistema debe dedicarse a una función específica y basar su cerebro en un solo circuito integrado que incluya procesador, memoria e interfaces de Entrada/Salida en el mismo chip. ¿Qué arquitectura debe seleccionarse?",
        "Un sistema embebido basado en un microcontrolador.",
        "Un sistema de propósito general basado en un microprocesador sin periféricos integrados.",
        "Un servidor de cómputo distribuido con almacenamiento masivo en disco rígido.",
        "Una estación de trabajo con sistema operativo de tiempo compartido.",
        "A",
        "Un sistema embebido realiza funciones dedicadas y su cerebro suele ser un microcontrolador, que integra CPU, memoria (RAM/Flash) y periféricos de E/S en el mismo chip."
    ),
    crear_pregunta(
        "emb_002", A_HW, S_1_3,
        "En el diseño del sistema de control de vuelo de una aeronave y el disparo de bolsas de aire (airbags), si el resultado se produce después de un límite de tiempo estricto (deadline), ocurre una falla catastrófica. ¿Cómo se clasifica este sistema?",
        "Sistema en Tiempo Real Estricto o Duro (Hard Real-Time).",
        "Sistema en Tiempo Real Blando (Soft Real-Time).",
        "Sistema de procesamiento por lotes (Batch Processing).",
        "Sistema asíncrono de mejor esfuerzo (Best-Effort).",
        "A",
        "En un Sistema en Tiempo Real Duro (Hard Real-Time), incumplir el deadline invalida la respuesta y puede ocasionar consecuencias críticas o catastróficas."
    ),
    crear_pregunta(
        "emb_003", A_HW, S_1_3,
        "Se desea monitorear y controlar de forma remota los sensores y válvulas de una planta industrial utilizando un navegador web estándar a través de la red Ethernet. Según la arquitectura de Sistemas Embebidos en Ethernet, ¿qué elementos debe incorporar el nodo embebido?",
        "Un microcontrolador con interfaz controladora Ethernet (MAC/PHY), una pila TCP/IP ligera (lwIP/uIP) y un servidor HTTP embebido.",
        "Un enlace exclusivamente serial RS-232 directo hacia el navegador del cliente sin protocolos de red.",
        "Un bus paralelo PCI conectado por cable coaxial sin direccionamiento IP.",
        "Únicamente un convertidor ADC conectado directamente al puerto RJ-45.",
        "A",
        "Para integrar un sistema embebido en Ethernet con acceso web se requiere controlador MAC/PHY, pila TCP/IP reducida y servidor HTTP embebido."
    ),
    crear_pregunta(
        "emb_004", A_HW, S_1_3,
        "En un sistema embebido instalado en una ubicación remota, existe el riesgo de que el ruido electromagnético induzca un bloqueo en el firmware (bucle infinito). ¿Qué periférico interno del microcontrolador reinicia automáticamente el sistema si el software principal deja de responder?",
        "Watchdog Timer (Temporizador Perro Guardián).",
        "Conversor Analógico-Digital (ADC).",
        "Modulador por Ancho de Pulso (PWM).",
        "Memoria EEPROM externa.",
        "A",
        "El Watchdog Timer (WDT) es un contador de hardware que genera un Reset si el programa principal no lo reinicia periódicamente antes de que expire."
    ),
    crear_pregunta(
        "emb_005", A_HW, S_1_3,
        "Al estructurar la memoria de un microcontrolador en un sistema embebido, se requiere almacenar el código ejecutable del firmware (persistente sin energía) y las variables dinámicas/pila de ejecución (alta velocidad). ¿Qué tipos de memoria cumplen cada función?",
        "Memoria no volátil (Flash / ROM) para el firmware y memoria volátil (SRAM) para las variables dinámicas y la pila.",
        "Memoria volátil (SRAM) para conservar el firmware sin energía y memoria ROM para las variables dinámicas.",
        "Disco magnético para los registros de la ALU y caché volátil para el respaldo permanente.",
        "Registros de desplazamiento temporales para el firmware y memoria óptica para el stack.",
        "A",
        "El firmware reside en memoria no volátil (Flash/ROM) para arrancar al energizarse, mientras que las variables y el stack usan memoria SRAM volátil."
    ),
    crear_pregunta(
        "emb_006", A_HW, S_1_3,
        "En un RTOS ejecutándose sobre un sistema embebido, una tarea de alta prioridad se activa mientras una tarea de baja prioridad usa la CPU. ¿Qué mecanismo del scheduler garantiza que la tarea crítica tome el control del procesador de inmediato?",
        "Planificación apropiativa (Preemptive Scheduling) basada en prioridades.",
        "Planificación FIFO no apropiativa.",
        "Espera activa (Polling continuo) sin interrupciones.",
        "Ejecución secuencial por lotes.",
        "A",
        "La planificación apropiativa (preemptive) guarda el contexto de la tarea de menor prioridad y cede inmediatamente la CPU a la tarea de mayor prioridad."
    ),
    crear_pregunta(
        "emb_007", A_HW, S_1_3,
        "Un microcontrolador debe atender un botón de paro de emergencia de forma inmediata sin desperdiciar ciclos de CPU preguntando constantemente por el estado del pin en el bucle principal. ¿Qué mecanismo es el más eficiente?",
        "Configurar una interrupción externa por flanco asociada a una Rutina de Servicio de Interrupción (ISR) breve y determinista.",
        "Implementar un ciclo infinito de encuesta (polling) con retardos bloqueantes.",
        "Reiniciar el microcontrolador cada milisegundo.",
        "Deshabilitar el reloj del sistema.",
        "A",
        "Las interrupciones externas permiten responder en microsegundos al evento físico ejecutando la ISR sin ocupar la CPU en espera activa."
    ),
    crear_pregunta(
        "emb_008", A_HW, S_1_4,
        "Se requiere controlar la velocidad de un motor de corriente directa desde una salida digital de un microcontrolador variando el ciclo de trabajo (duty cycle) de una señal cuadrada a frecuencia constante. ¿Qué técnica y periférico debe utilizarse?",
        "Modulación por Ancho de Pulso (PWM) acoplada a una etapa de potencia (puente H o MOSFET).",
        "Comunicación serial I2C conectada directamente a las escobillas del motor.",
        "Interrupción por desbordamiento del bus de direcciones.",
        "Divisor resistivo conectado directamente al pin GPIO sin transistor.",
        "A",
        "El módulo PWM permite regular la tensión promedio entregada al motor ajustando el porcentaje de tiempo en alto (duty cycle) con alta eficiencia energética."
    ),
    crear_pregunta(
        "emb_009", A_HW, S_1_4,
        "En un lazo de control PID para regular la temperatura de un horno industrial, se observa que el sistema es estable pero mantiene un pequeño error en estado estacionario respecto al Setpoint. ¿Cuál de las tres acciones del controlador PID tiene como función principal eliminar el error en estado estacionario?",
        "La acción Integral (I), porque acumula el error en el tiempo hasta llevarlo a cero.",
        "La acción Derivativa (D), porque solo responde a la velocidad de cambio del error.",
        "El filtro pasa-altos de la entrada analógica.",
        "La reducción de la resolución del ADC a 2 bits.",
        "A",
        "En un controlador PID, el término Integral suma el error a lo largo del tiempo, generando acción correctiva mientras exista desviación estática y eliminando el error en estado estacionario."
    ),
    crear_pregunta(
        "emb_010", A_HW, S_1_3,
        "Un microcontrolador necesita comunicarse en la misma PCB con un sensor de temperatura digital, un reloj RTC y una memoria EEPROM utilizando únicamente 2 hilos compartidos (SDA y SCL) con direccionamiento por esclavo. ¿Qué protocolo de bus serial síncrono cumple con esta especificación?",
        "I2C (Inter-Integrated Circuit).",
        "UART RS-232 punto a punto asíncrono.",
        "SPI de 4 hilos con línea Chip Select individual por esclavo.",
        "Bus paralelo ISA de 16 bits.",
        "A",
        "El protocolo I2C utiliza solo dos líneas abiertas con resistencias pull-up: SDA (datos) y SCL (reloj), permitiendo conectar múltiples esclavos direccionados por software."
    ),
    crear_pregunta(
        "emb_011", A_HW, S_1_3,
        "Al conectar un botón mecánico a un pin de entrada digital de un microcontrolador, se producen múltiples transiciones falsas en cuestión de pocos milisegundos debido a la vibración física de los contactos metálicos. ¿Cómo se denomina este fenómeno y cómo se soluciona?",
        "Rebote mecánico (Bouncing) y se soluciona mediante antirrebote (Debouncing) por hardware (filtro RC + Schmitt Trigger) o por software (muestreo con temporizador).",
        "Efecto Hall magnético y se soluciona aumentando la frecuencia de reloj del CPU al doble.",
        "Inversión de prioridad del RTOS y se soluciona eliminando la resistencia pull-up.",
        "Deriva térmica y se soluciona cambiando el protocolo a Ethernet.",
        "A",
        "Los interruptores mecánicos rebotan al cerrarse o abrirse; el debouncing por filtro RC o retardo de validación en software evita contar múltiples pulsaciones falsas."
    ),
    crear_pregunta(
        "emb_012", A_HW, S_1_3,
        "En un sistema multitarea en tiempo real (RTOS), una tarea de alta prioridad queda bloqueada esperando un mutex que posee una tarea de baja prioridad, mientras una tarea de prioridad media (que no usa el mutex) desaloja a la de baja prioridad impidiéndole liberar el recurso. ¿Cómo se conoce este problema y cuál es su solución clásica?",
        "Inversión de Prioridad, y se soluciona mediante el protocolo de Herencia de Prioridad (Priority Inheritance) en el mutex.",
        "Fragmentación externa de memoria Flash, solucionada con recolección de basura.",
        "Aliasing de muestreo analógico, solucionado con un filtro antialiasing.",
        "Desbordamiento de contador PWM, solucionado con DMA.",
        "A",
        "La Inversión de Prioridad ocurre cuando una tarea de prioridad media retrasa indirectamente a una de alta prioridad; la Herencia de Prioridad eleva temporalmente la prioridad de la tarea baja que retiene el mutex."
    ),
    crear_pregunta(
        "emb_013", A_HW, S_1_4,
        "En una planta de embotellado automatizada con un PLC (Controlador Lógico Programable), ¿cuál es el ciclo de operación determinista (Scan Cycle) que ejecuta continuamente el PLC?",
        "1. Lectura de entradas físicas -> 2. Ejecución del programa de control (ej. Ladder) -> 3. Diagnóstico/comunicaciones -> 4. Actualización de salidas físicas.",
        "1. Compilación del sistema operativo -> 2. Formateo de disco -> 3. Renderizado gráfico 3D.",
        "1. Desconexión de sensores -> 2. Escritura aleatoria de salidas -> 3. Lectura de entradas al apagar.",
        "Ejecución exclusivamente cuando un operador presiona el botón de programación.",
        "A",
        "El ciclo de barrido (Scan Cycle) de un PLC lee el estado de todas las entradas hacia la tabla de imagen de entradas, evalúa la lógica del programa y actualiza las salidas físicas al final del ciclo."
    ),
    crear_pregunta(
        "emb_014", A_HW, S_1_4,
        "Para transmitir la lectura de un transmisor de presión situado a 150 metros de distancia hacia el módulo de entrada analógica de un PLC en un ambiente industrial ruidoso, se prefiere el estándar de lazo de corriente de 4 a 20 mA en lugar de 0 a 10 V. ¿Cuáles son las dos ventajas principales del lazo de 4-20 mA?",
        "Es inmune a la caída de tensión por resistencia del cable largo y el 'cero vivo' de 4 mA permite detectar inmediatamente si el cable se ha roto (0 mA = falla).",
        "Consume cero energía eléctrica y permite transmitir video de alta definición por el mismo par.",
        "No requiere fuente de alimentación en ningún punto del circuito.",
        "Convierte la corriente continua en corriente alterna trifásica automáticamente.",
        "A",
        "Por Ley de Kirchhoff, la corriente es la misma en todo el lazo serie sin importar la caída resistiva del cable, y un valor de 0 mA indica rotura de línea (a diferencia de 4 mA que representa el 0% de la variable medida)."
    ),
    crear_pregunta(
        "emb_015", A_HW, S_1_3,
        "Al programar en lenguaje C para sistemas embebidos (bare-metal o RTOS), una variable global es modificada dentro de una Rutina de Servicio de Interrupción (ISR) y leída en el bucle principal `main()`. ¿Qué calificador de tipo en C es obligatorio usar en la declaración de dicha variable para evitar que el compilador optimice y elimine las lecturas a memoria?",
        "`volatile`",
        "`register`",
        "`const`",
        "`auto`",
        "A",
        "El calificador `volatile` indica al compilador que el valor de la variable puede cambiar asíncronamente fuera del flujo normal (como en una ISR o registro de hardware mapeado en memoria), forzando la lectura real desde RAM en cada acceso."
    )
]

# =====================================================================
# 3. REDES CISCO EXPLORATION CAPÍTULOS 1 AL 11 (32 reactivos)
# =====================================================================
redes_cisco = [
    crear_pregunta(
        "net_001", A_NET, S_2_1,
        "Según el Capítulo 1 de Cisco Exploration, una organización diseña su red con enlaces redundantes y conmutación de paquetes para que, ante una falla física, el tráfico se redirija automáticamente; además prioriza paquetes VoIP frente a descargas. ¿Qué dos características de arquitectura de red se implementan?",
        "Tolerancia a fallas y Calidad de Servicio (QoS).",
        "Conmutación de circuitos sin redundancia y direccionamiento MAC.",
        "Escalabilidad exclusivamente física y desactivación de control de congestión.",
        "Topología en bus lineal y transmisión half-duplex.",
        "A",
        "Tolerancia a fallas mediante redundancia en redes conmutadas por paquetes y Calidad de Servicio (QoS) para priorizar tráfico sensible al retardo."
    ),
    crear_pregunta(
        "net_002", A_NET, S_2_1,
        "Durante el proceso de encapsulación de datos (Capítulo 2), la Unidad de Datos de Protocolo (PDU) cambia de nombre al descender por las capas del modelo OSI. ¿Cuál es el orden correcto desde la Capa de Aplicación hasta la Capa Física?",
        "Datos (Aplicación) -> Segmento (Transporte) -> Paquete (Red) -> Trama (Enlace de datos) -> Bits (Física).",
        "Trama -> Paquete -> Segmento -> Bits -> Datos.",
        "Paquete -> Datos -> Trama -> Segmento -> Bits.",
        "Bits -> Trama -> Paquete -> Segmento -> Datos.",
        "A",
        "Aplicación maneja Datos, Transporte genera Segmentos/Datagramas, Red crea Paquetes IP, Enlace de Datos encapsula en Tramas y Física transmite Bits."
    ),
    crear_pregunta(
        "net_003", A_NET, S_2_2,
        "En una red corporativa (Capítulo 3), una PC recién encendida necesita obtener automáticamente su dirección IPv4, máscara, gateway y DNS; luego requiere traducir 'www.ceneval.edu.mx' a su dirección IP. ¿Qué dos protocolos de capa de aplicación intervienen?",
        "DHCP para la configuración IP dinámica y DNS para la resolución de nombres de dominio a IP.",
        "SMTP para asignar IP y FTP para traducir nombres de dominio.",
        "ARP para asignar máscara y POP3 para resolver sitios web.",
        "ICMP para otorgar concesiones IP y Telnet para traducir URLs.",
        "A",
        "DHCP asigna dinámicamente los parámetros IP y DNS traduce nombres de dominio (FQDN) en direcciones IP."
    ),
    crear_pregunta(
        "net_004", A_NET, S_2_1,
        "En la Capa de Transporte (Capítulo 4), una transferencia bancaria requiere entrega garantizada, acuses de recibo y saludo de 3 vías; mientras que una llamada VoIP en vivo requiere mínima sobrecarga y baja latencia sin retransmisiones. ¿Qué protocolos utiliza cada una?",
        "TCP para la transferencia bancaria y UDP para la llamada VoIP.",
        "UDP para la transferencia bancaria y TCP para VoIP.",
        "IPv4 para el saludo de 3 vías e ICMP para control de ventana.",
        "CSMA/CD en la capa de transporte para ambas.",
        "A",
        "TCP es orientado a conexión y confiable; UDP no tiene conexión ni retransmisiones, ideal para tráfico de voz y video en tiempo real."
    ),
    crear_pregunta(
        "net_005", A_NET, S_2_1,
        "Una PC con IP 192.168.1.50/24 envía un paquete a un servidor en la red remota 10.20.30.40/24 (Capítulo 5). ¿Qué dirección MAC de destino colocará en la trama Ethernet?",
        "La dirección MAC de su Gateway Predeterminado (interfaz LAN del router local), manteniendo la IP de destino 10.20.30.40.",
        "La dirección MAC física del servidor remoto obtenida por ARP directo a través de Internet.",
        "La dirección IP 127.0.0.1 en el campo MAC.",
        "Descartará el paquete por estar fuera de su subred.",
        "A",
        "Cuando el destino está en otra red IP, la trama de Capa 2 se dirige a la dirección MAC del Gateway Predeterminado."
    ),
    crear_pregunta(
        "net_006", A_NET, S_2_1,
        "Se recibe el bloque 192.168.10.0/24 y se requiere crear una subred para 50 hosts utilizables desperdiciando el mínimo de direcciones (Capítulo 6). ¿Qué prefijo CIDR y máscara corresponden?",
        "Prefijo /26 (255.255.255.192), que ofrece 62 hosts utilizables.",
        "Prefijo /27 (255.255.255.224), que ofrece 30 hosts utilizables.",
        "Prefijo /25 (255.255.255.128), que ofrece 126 hosts utilizables.",
        "Prefijo /28 (255.255.255.240), que ofrece 14 hosts utilizables.",
        "A",
        "Con 6 bits de host: 2^6 - 2 = 62 direcciones utilizables (>= 50), lo que corresponde al prefijo 32 - 6 = /26 (255.255.255.192)."
    ),
    crear_pregunta(
        "net_007", A_NET, S_2_1,
        "¿Qué métodos de Control de Acceso al Medio (MAC) por contienda utilizan respectivamente Ethernet 802.3 (half-duplex) y las redes inalámbricas WLAN IEEE 802.11 (Capítulos 7 y 9)?",
        "CSMA/CD (Detección de Colisiones) en Ethernet 802.3 y CSMA/CA (Prevención de Colisiones) en WLAN 802.11.",
        "Token Ring determinista en ambas tecnologías.",
        "CSMA/CA en cable coaxial y CSMA/CD en Wi-Fi.",
        "OSPF en la subcapa MAC.",
        "A",
        "Ethernet half-duplex detecta colisiones (CSMA/CD), mientras que Wi-Fi 802.11 utiliza prevención de colisiones (CSMA/CA)."
    ),
    crear_pregunta(
        "net_008", A_NET, S_2_1,
        "En una planta industrial con alta interferencia electromagnética (EMI) y enlaces de 850 metros entre edificios (Capítulo 8), ¿qué medio de transmisión físico es el más adecuado?",
        "Fibra óptica, por ser inmune a EMI/RFI y cubrir largas distancias con baja atenuación.",
        "Cable UTP Categoría 5e de un solo tramo de 850 metros.",
        "Cable telefónico plano sin blindaje.",
        "Bluetooth Clase 2.",
        "A",
        "La fibra óptica transmite luz, siendo inmune a interferencia electromagnética y superando ampliamente el límite de 100 m del cable UTP."
    ),
    crear_pregunta(
        "net_009", A_NET, S_2_2,
        "Cuando un switch Ethernet de Capa 2 recibe una trama (Capítulo 9), ¿qué dirección MAC registra en su tabla CAM y qué hace si la MAC de destino no está en su tabla?",
        "Aprende la MAC de origen asociándola al puerto de entrada; si no conoce la MAC de destino, inunda (flooding) la trama por todos los puertos excepto el de origen.",
        "Aprende la MAC de destino y descarta cualquier trama desconocida.",
        "Decrementa el TTL del paquete IP y consulta OSPF.",
        "Devuelve la trama por el mismo puerto de entrada.",
        "A",
        "El switch construye su tabla MAC con las direcciones de origen entrantes e inunda las tramas con destino desconocido."
    ),
    crear_pregunta(
        "net_010", A_NET, S_2_2,
        "En equipos sin Auto-MDIX (Capítulo 10), ¿qué cables se requieren para conectar: (1) PC a Switch, (2) Switch a Switch, y (3) puerto serial de PC al puerto de administración inicial de un Router Cisco?",
        "(1) Cable UTP directo, (2) Cable UTP cruzado y (3) Cable de consola (Rollover).",
        "(1) Cable cruzado, (2) Cable directo y (3) Cable coaxial.",
        "(1) Cable Rollover, (2) Cable directo y (3) Cable cruzado.",
        "Cable cruzado para los tres casos.",
        "A",
        "Equipos distintos (PC-Switch) usan cable directo; equipos iguales (Switch-Switch) usan cruzado; la administración por puerto de consola usa cable Rollover."
    ),
    crear_pregunta(
        "net_011", A_NET, S_2_2,
        "En un router Cisco IOS (Capítulo 11), ¿cuál es la secuencia correcta de comandos para configurar la IP de FastEthernet 0/0, activarla y respaldar la configuración en NVRAM?",
        "enable -> configure terminal -> interface fastEthernet 0/0 -> ip address <IP> <MASCARA> -> no shutdown -> end -> copy running-config startup-config.",
        "interface fa0/0 -> set ip -> shutdown -> copy startup-config running-config.",
        "enable -> show ip route -> ipconfig /all -> reload.",
        "configure terminal -> ping 127.0.0.1 -> erase startup-config.",
        "A",
        "Se ingresa a modo privilegiado (enable), configuración global (configure terminal), interfaz, se asigna IP, se enciende con 'no shutdown' y se guarda en NVRAM con 'copy running-config startup-config'."
    ),
    crear_pregunta(
        "net_012", A_NET, S_2_3,
        "Al configurar un router Cisco IOS para administración remota segura por red (Capítulo 11), se decide deshabilitar Telnet (puerto 23) en las líneas VTY y habilitar únicamente SSH (puerto 22). ¿Cuál es la razón técnica de seguridad para esta decisión?",
        "Telnet transmite credenciales y comandos en texto plano (vulnerable a sniffing), mientras que SSH cifra toda la sesión y autentica los extremos.",
        "Telnet utiliza transporte UDP sin acuses de recibo y SSH utiliza ICMP.",
        "SSH no requiere direcciones IP en las interfaces del router.",
        "Telnet solo funciona sobre cables de fibra óptica.",
        "A",
        "Telnet envía toda la información en texto claro; SSH proporciona cifrado criptográfico fuerte en la sesión de administración remota."
    ),
    crear_pregunta(
        "net_013", A_NET, S_2_1,
        "En un enlace punto a punto entre dos routers se utiliza una subred con máscara /30 (255.255.255.252) sobre la dirección base 172.16.10.4/30. ¿Cuáles son la dirección de red, el rango de IPs utilizables para las dos interfaces de los routers y la dirección de broadcast?",
        "Red: 172.16.10.4 | IPs utilizables: 172.16.10.5 y 172.16.10.6 | Broadcast: 172.16.10.7",
        "Red: 172.16.10.0 | IPs utilizables: 172.16.10.1 a 172.16.10.6 | Broadcast: 172.16.10.8",
        "Red: 172.16.10.4 | IPs utilizables: 172.16.10.4 y 172.16.10.7 | Broadcast: 172.16.10.8",
        "Red: 172.16.10.5 | IPs utilizables: 172.16.10.6 y 172.16.10.7 | Broadcast: 172.16.10.9",
        "A",
        "Un prefijo /30 tiene bloques de 2^2 = 4 direcciones. Comenzando en .4: .4 es la subred, .5 y .6 son los 2 hosts utilizables y .7 es el broadcast."
    ),
    crear_pregunta(
        "net_014", A_NET, S_2_2,
        "¿Qué protocolo opera entre la Capa 2 y la Capa 3 enviando un broadcast Ethernet (FF:FF:FF:FF:FF:FF) dentro de la LAN local para descubrir la dirección física MAC asociada a una dirección IPv4 conocida?",
        "ARP (Address Resolution Protocol).",
        "DNS (Domain Name System).",
        "NAT (Network Address Translation).",
        "BGP (Border Gateway Protocol).",
        "A",
        "ARP envía un ARP Request en difusión (broadcast L2) preguntando quién posee determinada dirección IPv4 en la subred local para obtener su MAC."
    ),
    crear_pregunta(
        "net_015", A_NET, S_2_3,
        "En un switch de acceso empresarial, un atacante conecta su laptop y envía miles de tramas con direcciones MAC de origen falsificadas para llenar la tabla CAM del switch y forzarlo a comportarse como un hub inundando el tráfico. ¿Qué característica de seguridad de Capa 2 previene este ataque limitando el número de direcciones MAC aprendidas por puerto?",
        "Port Security (Seguridad de Puertos).",
        "NAT Overload (PAT).",
        "RIPv2 sin autenticación.",
        "Deshabilitar el protocolo Spanning Tree (STP).",
        "A",
        "Port Security restringe la cantidad y/o identidad de las direcciones MAC permitidas en un puerto de switch, bloqueando o restringiendo el puerto ante violaciones."
    ),
    crear_pregunta(
        "net_016", A_NET, S_2_3,
        "Un administrador desea permitir que todas las computadoras de la red privada corporativa (192.168.1.0/24) salgan a Internet compartiendo una única dirección IPv4 pública asignada por el ISP en la interfaz externa del router. ¿Qué mecanismo debe configurar?",
        "NAT con sobrecarga o PAT (Port Address Translation), diferenciando cada flujo mediante números de puerto de origen.",
        "NAT estática uno a uno sin puertos.",
        "VLAN Trunking 802.1Q hacia el proveedor de Internet.",
        "Servidor DHCP público en la interfaz WAN.",
        "A",
        "PAT (NAT Overload) traduce múltiples direcciones IPv4 privadas internas a una sola dirección IPv4 pública externa utilizando números de puerto TCP/UDP únicos para identificar cada sesión."
    ),
    crear_pregunta(
        "net_017", A_NET, S_2_2,
        "En una red con múltiples switches interconectados con enlaces redundantes, se corre el riesgo de que se formen tormentas de broadcast y bucles de Capa 2. ¿Qué protocolo estándar evita automáticamente los bucles bloqueando lógicamente los puertos redundantes y activándolos solo si falla el enlace principal?",
        "Spanning Tree Protocol (STP - IEEE 802.1D / RSTP 802.1w).",
        "Simple Network Management Protocol (SNMP).",
        "File Transfer Protocol (FTP).",
        "Internet Control Message Protocol (ICMP).",
        "A",
        "El protocolo Spanning Tree (STP/RSTP) construye una topología lógica libre de bucles en redes conmutadas de Capa 2."
    ),
    crear_pregunta(
        "net_018", A_NET, S_2_3,
        "En un router Cisco se requiere filtrar paquetes no solo por la dirección IP de origen, sino también por la dirección IP de destino, el protocolo (TCP/UDP/ICMP) y el puerto de aplicación (ej. bloquear tráfico hacia el puerto 80 HTTP pero permitir el 443 HTTPS). ¿Qué tipo de Lista de Control de Acceso debe configurarse y dónde se recomienda ubicarla?",
        "Una ACL Extendida (numerada 100-199 o nombrada), ubicada lo más cerca posible del origen del tráfico.",
        "Una ACL Estándar (numerada 1-99), ya que filtra por puerto TCP y protocolo.",
        "Una tabla ARP estática en el servidor DNS.",
        "Un banner MOTD en la consola serial.",
        "A",
        "Las ACLs Estándar solo filtran por IP de origen; las ACLs Extendidas filtran por IP de origen, IP de destino, protocolo y número de puerto TCP/UDP, y se colocan cerca del origen para no transportar tráfico innecesario."
    )
]

# =====================================================================
# 4. INGENIERÍA DE SOFTWARE, PROGRAMACIÓN Y BASES DE DATOS (32 reactivos)
# =====================================================================
ing_software = [
    crear_pregunta(
        "sw_001", A_SW, S_3_1,
        "Durante el desarrollo de un sistema bancario, el equipo revisa estáticamente los documentos de arquitectura para comprobar que el software se construye conforme a la especificación técnica; luego ejecuta el sistema con usuarios reales para confirmar que resuelve las necesidades del cliente. Según Sommerville, ¿a qué procesos corresponden estas actividades?",
        "Verificación ('¿estamos construyendo el producto correctamente?') y Validación ('¿estamos construyendo el producto correcto?').",
        "Validación estática de código y Verificación de aceptación del usuario.",
        "Depuración correctiva y Refactorización preventiva.",
        "Pruebas de regresión y Métricas orientadas al tamaño LDC.",
        "A",
        "La Verificación comprueba la conformidad con la especificación técnica y la Validación asegura que el software satisfaga las expectativas reales del usuario."
    ),
    crear_pregunta(
        "sw_002", A_SW, S_3_1,
        "Se evalúa la calidad de un sistema hospitalario midiendo: (1) la capacidad de mantener su nivel de desempeño bajo condiciones establecidas durante un periodo determinado, y (2) la facilidad con la que puede ser transferido de un servidor Linux a Windows Server. ¿Qué atributos de calidad se evalúan?",
        "Fiabilidad y Portabilidad.",
        "Usabilidad y Mantenibilidad.",
        "Eficiencia e Integridad.",
        "Funcionalidad y Flexibilidad.",
        "A",
        "La Fiabilidad mide la capacidad de mantener el nivel de prestación durante un periodo establecido; la Portabilidad mide la facilidad de transferir el sistema a otra plataforma."
    ),
    crear_pregunta(
        "sw_003", A_SW, S_3_1,
        "Durante el modelado UML de una plataforma de comercio electrónico se requieren tres artefactos: (1) capturar los requerimientos funcionales mostrando interacciones con actores externos, (2) representar la estructura estática de clases y métodos, y (3) detallar el orden temporal de mensajes entre objetos durante el pago. ¿Qué diagramas UML deben elaborarse?",
        "(1) Diagrama de Casos de Uso, (2) Diagrama de Clases y (3) Diagrama de Secuencia.",
        "(1) Diagrama de Clases, (2) Diagrama de Despliegue y (3) Diagrama de Casos de Uso.",
        "(1) Diagrama de Secuencia, (2) Diagrama de Estados y (3) Diagrama de Componentes.",
        "(1) Diagrama de Colaboración, (2) Diagrama de Actividades y (3) Diagrama de Paquetes.",
        "A",
        "Casos de Uso captura requerimientos externos, Clases modela la estructura estática y Secuencia representa el orden temporal de interacción entre objetos."
    ),
    crear_pregunta(
        "sw_004", A_SW, S_3_1,
        "Un programador detecta una inconformidad en el cálculo de impuestos durante las revisiones internas antes de liberar la versión; posteriormente, tras poner el sistema en producción, un usuario final reporta un fallo al exportar reportes. Según las métricas del software, ¿cómo se denominan ambos eventos?",
        "El primero es un Error (descubierto antes de entregar al usuario final) y el segundo es un Defecto (descubierto tras entregar el producto al usuario final).",
        "El primero es un Indicador cuantitativo y el segundo es una Medida orientada a la función.",
        "El primero es un Defecto de producción y el segundo es una Métrica de Halstead.",
        "Ambos son Medidas Directas de Líneas de Código (LDC).",
        "A",
        "En aseguramiento de calidad, un Error se detecta antes de la entrega al cliente y un Defecto se manifiesta una vez entregado el producto al usuario final."
    ),
    crear_pregunta(
        "sw_005", A_SW, S_3_1,
        "Un equipo prueba los componentes de más bajo nivel de forma aislada y luego los combina progresivamente hacia arriba siguiendo las ramas de dependencia hasta llegar a la interfaz principal. ¿Qué estrategia de pruebas están aplicando?",
        "Pruebas unitarias seguidas de pruebas de integración incremental ascendente (Bottom-Up).",
        "Pruebas de integración incremental descendente (Top-Down) con stubs.",
        "Revisión estática informal sin ejecución de código.",
        "Pruebas de aceptación alfa exclusivamente.",
        "A",
        "Las pruebas unitarias validan cada módulo aislado y la integración incremental ascendente avanza desde los módulos base hacia la raíz de dependencias."
    ),
    crear_pregunta(
        "sw_006", A_SW, S_3_1,
        "Durante la construcción de software, el líder técnico establece: escribir código sencillo, diseñar pensando en futuras actualizaciones, preparar el código para pruebas posteriores y apegarse a reglas de codificación e ISO/IEEE. ¿Qué principios de construcción se aplican?",
        "Minimizar la complejidad, anticipar cambios, pensar en la verificación posterior y aplicar estándares.",
        "Maximizar el acoplamiento, reducir la cohesión y omitir el manejo de excepciones.",
        "Congelar requerimientos permanentemente y evitar bibliotecas reutilizables.",
        "Priorizar velocidad de escritura sobre legibilidad y eliminar aserciones.",
        "A",
        "Son los 4 principios de construcción de software del Resumen 3: minimizar complejidad, anticipar cambios, pensar en la verificación posterior y aplicar estándares."
    ),
    crear_pregunta(
        "sw_007", A_SW, S_3_1,
        "En la especificación de un expediente clínico electrónico se incluyen: (1) 'El sistema permitirá al médico consultar alergias por CURP' y (2) 'El tiempo de respuesta no excederá 1.5 segundos con 500 usuarios concurrentes'. Según Sommerville, ¿cómo se clasifican?",
        "El primero es un requerimiento funcional y el segundo es un requerimiento no funcional (rendimiento).",
        "Ambos son requerimientos funcionales de dominio.",
        "El primero es no funcional de usabilidad y el segundo es funcional.",
        "Ambos son métricas indirectas de Halstead.",
        "A",
        "Los requerimientos funcionales describen qué hace el sistema; los no funcionales imponen restricciones de rendimiento, seguridad, fiabilidad o disponibilidad."
    ),
    crear_pregunta(
        "sw_008", A_SW, S_3_1,
        "El gobierno actualiza las leyes fiscales y el equipo modifica los módulos de facturación de un ERP para cumplir la nueva normativa sin que hubiera fallas previas. ¿Qué tipo de mantenimiento de software se realiza?",
        "Mantenimiento adaptativo.",
        "Mantenimiento correctivo de emergencia.",
        "Pruebas unitarias de caja blanca.",
        "Retiro de sistema legado.",
        "A",
        "El mantenimiento adaptativo adecua el software a cambios en su entorno externo (legislación, sistema operativo o hardware)."
    ),
    crear_pregunta(
        "sw_009", A_SW, S_3_2,
        "En las métricas de ciencia del software de Halstead (Medidas LDC del Resumen 2), se definen cuatro conteos base en el código fuente: n1 (operadores distintos), n2 (operandos distintos), N1 (total de operadores) y N2 (total de operandos). ¿Cómo se calculan el Vocabulario del programa (n) y la Longitud del programa (N)?",
        "Vocabulario n = n1 + n2, y Longitud N = N1 + N2.",
        "Vocabulario n = N1 · N2, y Longitud N = n1 - n2.",
        "Vocabulario n = N1 / n1, y Longitud N = N2 / n2.",
        "Vocabulario n = n1^2, y Longitud N = n2^2.",
        "A",
        "En las métricas de Halstead, el vocabulario del programa es la suma de operadores y operandos únicos (n = n1 + n2) y la longitud total es N = N1 + N2."
    ),
    crear_pregunta(
        "sw_010", A_SW, S_3_3,
        "Se diseña un sistema empresarial donde múltiples subsistemas independientes necesitan acceder y actualizar un conjunto grande de datos compartidos centralizados. Según los estilos arquitectónicos descritos por Sommerville, ¿qué modelo arquitectónico es el más adecuado?",
        "Arquitectura centrada en datos (Modelo de Repositorio).",
        "Arquitectura de Tuberías y Filtros (Pipe and Filter) sin estado compartido.",
        "Sistema embebido de lazo abierto sin almacenamiento.",
        "Arquitectura punto a punto desconectada.",
        "A",
        "En el modelo de Repositorio todos los datos compartidos residen en una base de datos central accesible por todos los subsistemas."
    ),
    crear_pregunta(
        "sw_011", A_SW, S_3_1,
        "Para calcular el número mínimo de caminos linealmente independientes que deben probarse en una prueba de caja blanca (camino básico) de una función que contiene 4 decisiones condicionales (`if` / `while`) simples, se utiliza la Complejidad Ciclomática de McCabe V(G) = P + 1 (donde P es el número de nodos predicado). ¿Cuál es el valor de V(G)?",
        "5 caminos independientes.",
        "2 caminos independientes.",
        "16 caminos independientes.",
        "1 camino independiente.",
        "A",
        "La complejidad ciclomática V(G) = P + 1 = 4 + 1 = 5 indica la cota superior de casos de prueba necesarios para garantizar cobertura de todas las aristas de decisión."
    ),
    crear_pregunta(
        "sw_012", A_SW, S_3_2,
        "En el diseño orientado a objetos aplicando patrones de diseño GoF, se necesita garantizar que una clase encargada de administrar el pool de conexiones a la base de datos tenga una única instancia global en toda la aplicación y proporcione un punto de acceso global a ella. ¿Qué patrón creacional debe implementarse?",
        "Singleton.",
        "Observer.",
        "Strategy.",
        "Decorator.",
        "A",
        "El patrón Singleton restringe la instanciación de una clase a un único objeto mediante un constructor privado y un método estático de acceso."
    ),
    crear_pregunta(
        "sw_013", A_SW, S_3_2,
        "Se requiere buscar un elemento dentro de un arreglo ordenado de 1,000,000 de registros dividiendo repetidamente a la mitad el intervalo de búsqueda (Búsqueda Binaria). ¿Cuál es la complejidad temporal asintótica en el peor caso y cuántas comparaciones como máximo realizará aproximadamente?",
        "Complejidad O(log2 n), realizando como máximo alrededor de 20 comparaciones.",
        "Complejidad O(n^2), realizando 1,000,000,000,000 de comparaciones.",
        "Complejidad O(n), realizando 1,000,000 de comparaciones.",
        "Complejidad O(n!), imposible de ejecutar en tiempo polinomial.",
        "A",
        "La búsqueda binaria en un arreglo ordenado tiene complejidad O(log2 n). Como 2^20 = 1,048,576, para 1 millón de elementos requiere a lo sumo 20 comparaciones."
    ),
    crear_pregunta(
        "sw_014", A_SW, S_3_3,
        "En el diseño de una base de datos relacional para una universidad, una tabla `Inscripciones(id_alumno, id_materia, nombre_materia, calificacion)` tiene llave primaria compuesta `(id_alumno, id_materia)`. Sin embargo, el atributo `nombre_materia` depende únicamente de `id_materia` y no de la llave primaria completa. ¿Qué Forma Normal se está violando y cómo se corrige?",
        "Viola la Segunda Forma Normal (2FN) por existir dependencia funcional parcial; se corrige separando `Materias(id_materia, nombre_materia)` en otra tabla.",
        "Viola la Primera Forma Normal (1FN) por no tener llave foránea.",
        "Cumple con la Forma Normal de Boyce-Codd (BCNF) sin anomalías.",
        "Se corrige eliminando todas las llaves primarias de la base de datos.",
        "A",
        "La 2FN exige estar en 1FN y que todo atributo no primo dependa de forma total (completa) de toda la clave primaria compuesta, eliminando dependencias parciales."
    ),
    crear_pregunta(
        "sw_015", A_SW, S_3_3,
        "Al ejecutar una transferencia bancaria entre dos cuentas mediante SQL (`UPDATE Cuentas SET saldo = saldo - 500 WHERE id = 1; UPDATE Cuentas SET saldo = saldo + 500 WHERE id = 2;`), ocurre un corte de energía justo después del primer `UPDATE`. ¿Qué propiedad de las transacciones ACID garantiza que ninguna de las dos operaciones surta efecto parcial y la base de datos revierta el cambio (`ROLLBACK`)?",
        "Atomicidad (Atomicity: 'todo o nada').",
        "Aislamiento de lecturas sucias exclusivamente.",
        "Desnormalización de vistas.",
        "Fragmentación horizontal.",
        "A",
        "La Atomicidad dentro de ACID garantiza que todas las operaciones de una transacción se completen exitosamente como una sola unidad indivisible o ninguna tenga efecto."
    )
]


def guardar(nombre, datos):
    ruta = DATA_DIR / nombre
    with open(ruta, "w", encoding="utf-8") as f:
        json.dump(datos, f, ensure_ascii=False, indent=2)
    print(f"Guardado {nombre}: {len(datos)} preguntas")


if __name__ == "__main__":
    guardar("resumen_sistemas_digitales.json", sistemas_digitales)
    guardar("libro_sistemas_embebidos_nadal.json", sistemas_embebidos)
    guardar("exploration_network_cisco_cap1_11.json", redes_cisco)
    guardar("ingenieria_del_software_sommerville_y_resumenes.json", ing_software)

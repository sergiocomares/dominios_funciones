/**
 * BANCO DE EJERCICIOS - Dominio de Funciones
 * Define todos los ejercicios disponibles y la lógica de validación
 */

// ============================================
// BANCO DE EJERCICIOS
// ============================================

const ejercicios = [
    {
        id: 1,
        tipo: 'denominador',
        funciones: '1 / (x - 2)',
        titulo: 'Función con Denominador',
        explicacion: 'Función racional simple',
        pasos: [
            'Identificamos que es una fracción.',
            'El denominador es: x - 2',
            'El denominador no puede ser 0.',
            'Resolvemos: x - 2 ≠ 0  →  x ≠ 2',
            'Por lo tanto, el dominio excluye el valor 2.'
        ],
        dominioCorrecto: ['(-∞, 2) ∪ (2, +∞)', 'ℝ - {2}', 'Dominio: ℝ - {2}'],
        pista: 'El denominador no puede ser cero. ¿Para qué valor de x se anula?',
        valoresEspeciales: [
            { x: -2, valido: true },
            { x: 0, valido: true },
            { x: 2, valido: false },
            { x: 5, valido: true }
        ],
        rango: [-4, 6],
        puntoExcluido: 2
    },

    {
        id: 2,
        tipo: 'raiz_par',
        funciones: '√(x - 3)',
        titulo: 'Raíz Cuadrada',
        explicacion: 'La raíz cuadrada requiere argumento no negativo',
        pasos: [
            'Identificamos que es una raíz cuadrada (raíz par).',
            'El argumento (interior) es: x - 3',
            'Las raíces pares requieren: argumento ≥ 0',
            'Resolvemos: x - 3 ≥ 0  →  x ≥ 3',
            'El dominio incluye todos los valores desde 3 en adelante.'
        ],
        dominioCorrecto: ['[3, +∞)', 'Dominio: [3, +∞)', 'x ≥ 3'],
        pista: 'Una raíz cuadrada solo existe cuando lo interior es mayor o igual a cero. ¿Cuándo x - 3 ≥ 0?',
        valoresEspeciales: [
            { x: 0, valido: false },
            { x: 2, valido: false },
            { x: 3, valido: true },
            { x: 5, valido: true }
        ],
        rango: [-2, 8],
        puntoInicio: 3,
        tipoIntervalo: 'cerrado'
    },

    {
        id: 3,
        tipo: 'logaritmo',
        funciones: 'ln(x - 1)',
        titulo: 'Logaritmo Natural',
        explicacion: 'El logaritmo solo existe para valores positivos',
        pasos: [
            'Identificamos que es un logaritmo.',
            'El argumento es: x - 1',
            'Los logaritmos requieren: argumento > 0 (estrictamente positivo)',
            'Resolvemos: x - 1 > 0  →  x > 1',
            'El dominio incluye todos los valores mayores que 1 (sin incluir 1).'
        ],
        dominioCorrecto: ['(1, +∞)', 'Dominio: (1, +∞)', 'x > 1'],
        pista: 'El logaritmo solo existe cuando el interior es ESTRICTAMENTE POSITIVO. ¿Cuándo x - 1 > 0?',
        valoresEspeciales: [
            { x: -1, valido: false },
            { x: 1, valido: false },
            { x: 2, valido: true },
            { x: 4, valido: true }
        ],
        rango: [-2, 6],
        puntoExcluido: 1,
        tipoIntervalo: 'abierto'
    },

    {
        id: 4,
        tipo: 'denominador',
        funciones: '5 / (x + 1)',
        titulo: 'Función Racional - Desplazamiento',
        explicacion: 'Similar al primero pero con desplazamiento',
        pasos: [
            'Es una fracción con denominador: x + 1',
            'El denominador no puede ser 0.',
            'Resolvemos: x + 1 ≠ 0  →  x ≠ -1',
            'El dominio excluye el valor -1.'
        ],
        dominioCorrecto: ['(-∞, -1) ∪ (-1, +∞)', 'ℝ - {-1}'],
        pista: '¿Para qué valor de x el denominador x + 1 se hace cero?',
        valoresEspeciales: [
            { x: -3, valido: true },
            { x: -1, valido: false },
            { x: 0, valido: true },
            { x: 2, valido: true }
        ],
        rango: [-5, 4],
        puntoExcluido: -1
    },

    {
        id: 5,
        tipo: 'raiz_par',
        funciones: '√(2x - 4)',
        titulo: 'Raíz Cuadrada - Segunda Forma',
        explicacion: 'Raíz con coeficiente en la variable',
        pasos: [
            'Es una raíz cuadrada con argumento: 2x - 4',
            'Las raíces pares requieren: argumento ≥ 0',
            'Resolvemos: 2x - 4 ≥ 0',
            'Sumamos 4: 2x ≥ 4',
            'Dividimos entre 2: x ≥ 2',
            'El dominio es desde 2 en adelante.'
        ],
        dominioCorrecto: ['[2, +∞)', 'x ≥ 2', 'Dominio: [2, +∞)'],
        pista: 'Resuelve 2x - 4 ≥ 0. Recuerda: suma 4, luego divide entre 2.',
        valoresEspeciales: [
            { x: 0, valido: false },
            { x: 2, valido: true },
            { x: 3, valido: true },
            { x: 5, valido: true }
        ],
        rango: [-1, 7],
        puntoInicio: 2,
        tipoIntervalo: 'cerrado'
    },

    {
        id: 6,
        tipo: 'logaritmo',
        funciones: 'log(x + 5)',
        titulo: 'Logaritmo en Base 10',
        explicacion: 'Desplazamiento horizontal con logaritmo',
        pasos: [
            'Es un logaritmo con argumento: x + 5',
            'Los logaritmos requieren: argumento > 0',
            'Resolvemos: x + 5 > 0',
            'Restamos 5: x > -5',
            'El dominio es desde -5 (sin incluir) en adelante.'
        ],
        dominioCorrecto: ['(-5, +∞)', 'x > -5', 'Dominio: (-5, +∞)'],
        pista: 'Resuelve x + 5 > 0. El logaritmo solo existe cuando lo interior es MAYOR que 0.',
        valoresEspeciales: [
            { x: -6, valido: false },
            { x: -5, valido: false },
            { x: -4, valido: true },
            { x: 0, valido: true }
        ],
        rango: [-8, 3],
        puntoExcluido: -5,
        tipoIntervalo: 'abierto'
    },

    {
        id: 7,
        tipo: 'combinada',
        funciones: '1 / √(x - 1)',
        titulo: 'Fracción con Raíz en Denominador',
        explicacion: 'Combinación de restricciones: raíz y denominador',
        pasos: [
            'Tenemos: 1 / √(x - 1)',
            'Restricción 1: La raíz (raíz par) requiere: x - 1 ≥ 0  →  x ≥ 1',
            'Restricción 2: El denominador no puede ser 0: √(x - 1) ≠ 0',
            'Esto significa: x - 1 ≠ 0  →  x ≠ 1',
            'Combinando: x ≥ 1 Y x ≠ 1  →  x > 1'
        ],
        dominioCorrecto: ['(1, +∞)', 'x > 1', 'Dominio: (1, +∞)'],
        pista: 'Cuidado: necesitas x ≥ 1 (raíz) pero TAMBIÉN x ≠ 1 (denominador).¿Qué resultado final?',
        valoresEspeciales: [
            { x: 0, valido: false },
            { x: 1, valido: false },
            { x: 2, valido: true },
            { x: 4, valido: true }
        ],
        rango: [-1, 6],
        puntoExcluido: 1,
        tipoIntervalo: 'abierto'
    },

    {
        id: 8,
        tipo: 'combinada',
        funciones: '√(x² - 4)',
        titulo: 'Raíz con Expresión Cuadrática',
        explicacion: 'Argumento de la raíz es un polinomio de grado 2',
        pasos: [
            'Tenemos: √(x² - 4)',
            'Las raíces pares requieren: x² - 4 ≥ 0',
            'Factorizamos: (x - 2)(x + 2) ≥ 0',
            'Los ceros son x = 2 y x = -2',
            'Analizamos signos: es positivo cuando x ≤ -2 o x ≥ 2'
        ],
        dominioCorrecto: ['(-∞, -2] ∪ [2, +∞)', 'x ≤ -2 o x ≥ 2'],
        pista: 'Resuelve x² - 4 ≥ 0. Factoriza y busca dónde el producto es no negativo.',
        valoresEspeciales: [
            { x: -3, valido: true },
            { x: -2, valido: true },
            { x: 0, valido: false },
            { x: 2, valido: true },
            { x: 3, valido: true }
        ],
        rango: [-5, 5],
        puntosExcluidos: [{ desde: -2, hasta: 2, excluir: true }]
    }
];

// ============================================
// FUNCIONES DE VALIDACIÓN
// ============================================

/**
 * Normaliza la respuesta del usuario eliminando espacios y caracteres innecesarios
 * @param {string} respuesta - Respuesta del usuario
 * @returns {string} Respuesta normalizada
 */
function normalizarRespuesta(respuesta) {
    // Elimina espacios
    return respuesta.toLowerCase().trim().replace(/\s+/g, '');
}

/**
 * Comprueba si la respuesta del usuario es correcta
 * @param {string} respuestaUsuario - Respuesta escrita por el usuario
 * @param {array} dominioCorrecto - Array con respuestas válidas
 * @returns {boolean} Si la respuesta es correcta
 */
function validarRespuesta(respuestaUsuario, dominioCorrecto) {
    const normalizada = normalizarRespuesta(respuestaUsuario);
    
    // Comprobamos cada respuesta válida normalizada
    return dominioCorrecto.some(respuesta => {
        const normalizada_correcta = normalizarRespuesta(respuesta);
        return normalizada === normalizada_correcta;
    });
}

/**
 * Obtiene un mensaje de feedback personalizado basado en el tipo de error
 * @param {string} respuestaUsuario - Respuesta del usuario
 * @param {object} ejercicio - Objeto del ejercicio actual
 * @returns {string} Mensaje de feedback
 */
function obtenerMensajeError(respuestaUsuario, ejercicio) {
    const normalizada = normalizarRespuesta(respuestaUsuario);
    
    // Detectar tipos de error comunes
    if (normalizada.includes('∪') || normalizada.includes('union')) {
        if (!normalizada.includes('∞')) {
            return 'Parece que usas unión, pero te falta indicar el infinito. Recuerda: (-∞, a) ∪ (b, +∞)';
        }
    }
    
    if (normalizada.includes(']-') || normalizada.includes('[)')) {
        return 'Revisa los paréntesis/corchetes. [ ] incluyen el valor, ( ) lo excluyen.';
    }
    
    if (normalizada === 'ℝ' || normalizada === 'dominio:ℝ') {
        return 'El dominio no es todos los números reales. Hay al menos una restricción.';
    }
    
    if (!normalizada.includes('+∞') && !normalizada.includes('∞') && normalizada.length > 5) {
        return 'Recuerda incluir el infinito (+∞) en la notación de intervalo.';
    }
    
    // Feedback genérico
    return 'Respuesta incorrecta. Vuelve a revisar los pasos del análisis.';
}

/**
 * Calcula los puntos obtenidos (escalado de 0 a 100)
 * @param {number} numEjercicio - Número del ejercicio resuelto (1-8)
 * @param {boolean} correcto - Si fue correcto
 * @returns {number} Puntos ganados
 */
function calcularPuntos(numEjercicio, correcto) {
    if (!correcto) return 0;
    
    // Ejercicios más complejos dan más puntos
    const puntosBase = {
        1: 10,  // Denominador simple
        2: 12,  // Raíz par
        3: 12,  // Logaritmo
        4: 10,  // Denominador variante
        5: 13,  // Raíz con coeficiente
        6: 13,  // Logaritmo variante
        7: 15,  // Combinada 1
        8: 17   // Combinada 2 (cuadrática)
    };
    
    return puntosBase[numEjercicio] || 10;
}

/**
 * Obtiene un mensaje motivacional basado en la puntuación final
 * @param {number} puntos - Puntos totales
 * @returns {string} Mensaje motivacional
 */
function obtenerMensajeMotivacional(puntos) {
    if (puntos >= 90) {
        return '¡Excelente! 🌟 Dominas perfectamente el concepto de dominio de funciones. ¡Sigue así!';
    } else if (puntos >= 75) {
        return '¡Muy bien! 👏 Tienes una buena comprensión. Repasa los ejercicios complejos para mejorar.';
    } else if (puntos >= 50) {
        return 'Bien 😊 Vamos por buen camino. Repite los ejercicios para asimilar mejor los conceptos.';
    } else {
        return '¡Ánimo! 💪 Aunque hay errores, cada intento es una oportunidad para aprender. Vuelve a intentar.';
    }
}

// ============================================
// GENERADOR DE REPRESENTACIÓN VISUAL (SVG)
// ============================================

/**
 * Genera el SVG de la recta numérica con el dominio destacado
 * @param {object} ejercicio - Objeto del ejercicio
 * @returns {string} SVG como string
 */
function generarSVGRecta(ejercicio) {
    const ancho = 500;
    const alto = 100;
    const margenIzq = 50;
    const margenDer = 30;
    const anchoRecta = ancho - margenIzq - margenDer;
    
    let svg = `<svg width="100%" height="${alto}" viewBox="0 0 ${ancho} ${alto}">`;
    
    // Fondo
    svg += `<rect width="${ancho}" height="${alto}" fill="white"/>`;
    
    const { rango, tipo } = ejercicio;
    const [min, max] = rango;
    const paso = (max - min);
    
    // Escala
    const y = alto / 2;
    
    // Línea base de la recta
    svg += `<line x1="${margenIzq}" y1="${y}" x2="${ancho - margenDer}" y2="${y}" stroke="#333" stroke-width="2"/>`;
    
    // Marcas y números
    for (let i = min; i <= max; i++) {
        if (i % 1 === 0) {  // Solo enteros
            const x = margenIzq + ((i - min) / paso) * anchoRecta;
            svg += `<line x1="${x}" y1="${y - 5}" x2="${x}" y2="${y + 5}" stroke="#333" stroke-width="1"/>`;
            svg += `<text x="${x}" y="${y + 20}" class="numero-recta" text-anchor="middle">${i}</text>`;
        }
    }
    
    // Mostrar el dominio según el tipo
    if (tipo === 'denominador') {
        const punto = ejercicio.puntoExcluido;
        const x = margenIzq + ((punto - min) / paso) * anchoRecta;
        // Línea gris para zona no válida en ese punto
        svg += `<circle cx="${x}" cy="${y}" r="6" class="punto-excluido"/>`;
        // Línea de dominio: todo excepto ese punto
        svg += `<line x1="${margenIzq}" y1="${y - 12}" x2="${x - 10}" y2="${y - 12}" class="linea-dominio" stroke-linecap="round"/>`;
        svg += `<line x1="${x + 10}" y1="${y - 12}" x2="${ancho - margenDer}" y2="${y - 12}" class="linea-dominio" stroke-linecap="round"/>`;
    } else if (tipo === 'raiz_par') {
        const inicio = ejercicio.puntoInicio;
        const x = margenIzq + ((inicio - min) / paso) * anchoRecta;
        svg += `<circle cx="${x}" cy="${y}" r="6" class="punto-incluido"/>`;
        // Línea desde el punto
        svg += `<line x1="${x}" y1="${y - 12}" x2="${ancho - margenDer}" y2="${y - 12}" class="linea-valida" stroke-linecap="round"/>`;
        // Zona no válida a la izquierda
        svg += `<line x1="${margenIzq}" y1="${y - 12}" x2="${x - 10}" y2="${y - 12}" class="linea-invalida" stroke-linecap="round"/>`;
    } else if (tipo === 'logaritmo') {
        const punto = ejercicio.puntoExcluido;
        const x = margenIzq + ((punto - min) / paso) * anchoRecta;
        svg += `<circle cx="${x}" cy="${y}" r="6" class="punto-excluido"/>`;
        // Zona válida desde el punto (sin incluirlo)
        svg += `<line x1="${x + 10}" y1="${y - 12}" x2="${ancho - margenDer}" y2="${y - 12}" class="linea-valida" stroke-linecap="round"/>`;
        // Zona no válida
        svg += `<line x1="${margenIzq}" y1="${y - 12}" x2="${x - 10}" y2="${y - 12}" class="linea-invalida" stroke-linecap="round"/>`;
    }
    
    svg += '</svg>';
    return svg;
}

// Exportar funciones para uso en app.js

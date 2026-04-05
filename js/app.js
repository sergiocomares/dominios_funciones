/**
 * APLICACIÓN PRINCIPAL - Dominio de Funciones
 * Gestiona la interacción, puntajes y flujo de ejercicios
 */

// ============================================
// VARIABLES GLOBALES
// ============================================

let ejercicioActual = 0;        // Índice del ejercicio actual
let puntuacionTotal = 0;        // Puntos acumulados
let ejerciciosCompletados = 0;  // Contador de ejercicios realizados
const totalEjercicios = ejercicios.length;  // Total de ejercicios disponibles
let mostrandoPista = false;     // Control de pista mostrada

// ============================================
// ELEMENTOS DEL DOM
// ============================================

const btnComenzar = document.getElementById('btnComenzar');
const btnComprobar = document.getElementById('btnComprobar');
const btnPista = document.getElementById('btnPista');
const btnSiguiente = document.getElementById('btnSiguiente');
const btnAtras = document.getElementById('btnAtras');
const btnReiniciar = document.getElementById('btnReiniciar');

const inputDominio = document.getElementById('inputDominio');
const feedback = document.getElementById('feedback');
const feedbackContenido = document.getElementById('feedbackContenido');

const seccionIntroduccion = document.getElementById('seccionIntroduccion');
const seccionEjercicios = document.getElementById('seccionEjercicios');
const seccionFinalizacion = document.getElementById('seccionFinalizacion');

const numPuntos = document.getElementById('puntos');
const numEjercicio = document.getElementById('numEjercicio');
const barraRelleno = document.getElementById('barraRelleno');

// ============================================
// INICIALIZACIÓN
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    inicializarEventos();
});

/**
 * Configura todos los eventos de la aplicación
 */
function inicializarEventos() {
    btnComenzar.addEventListener('click', comenzarEjercicios);
    btnComprobar.addEventListener('click', comprobarRespuesta);
    btnPista.addEventListener('click', mostrarPista);
    btnSiguiente.addEventListener('click', siguienteEjercicio);
    btnAtras.addEventListener('click', volverIntroduccion);
    btnReiniciar.addEventListener('click', reiniciarActividad);
    
    // Permitir Enter para comprobar respuesta
    inputDominio.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && seccionEjercicios.style.display !== 'none') {
            comprobarRespuesta();
        }
    });
}

// ============================================
// GESTIÓN DE VISTAS
// ============================================

/**
 * Muestra la sección de introducción y oculta ejercicios
 */
function volverIntroduccion() {
    seccionIntroduccion.style.display = 'block';
    seccionEjercicios.style.display = 'none';
    feedback.style.display = 'none';
    btnSiguiente.style.display = 'none';
}

/**
 * Inicia la sección de ejercicios
 */
function comenzarEjercicios() {
    seccionIntroduccion.style.display = 'none';
    seccionEjercicios.style.display = 'block';
    ejercicioActual = 0;
    puntuacionTotal = 0;
    ejerciciosCompletados = 0;
    cargarEjercicio(0);
}

/**
 * Carga un ejercicio específico
 * @param {number} indice - Índice del ejercicio a cargar
 */
function cargarEjercicio(indice) {
    const ejercicio = ejercicios[indice];
    ejercicioActual = indice;
    mostrandoPista = false;
    
    // Limpiar interfaz
    inputDominio.value = '';
    inputDominio.className = 'input-dominio';
    feedback.style.display = 'none';
    btnSiguiente.style.display = 'none';
    btnComprobar.disabled = false;
    btnPista.disabled = false;
    
    // Actualizar UI del ejercicio
    document.getElementById('tituloEjercicio').textContent = ejercicio.titulo;
    document.getElementById('funcionActual').textContent = ejercicio.funciones;
    
    // Cargar pasos del análisis
    cargarPasosAnalisis(ejercicio.pasos);
    
    // Cargar recta numérica
    cargarRectaNumerica(ejercicio);
    
    // Actualizar progreso
    actualizarProgreso();
    
    // Enfocar input
    setTimeout(() => {
        inputDominio.focus();
    }, 100);
}

/**
 * Carga los pasos del análisis en la interfaz
 * @param {array} pasos - Array de pasos
 */
function cargarPasosAnalisis(pasos) {
    const contenedor = document.getElementById('pasosAnalisis');
    contenedor.innerHTML = '';
    
    pasos.forEach((paso, index) => {
        const elPaso = document.createElement('div');
        elPaso.className = 'paso';
        elPaso.innerHTML = `<strong>Paso ${index + 1}:</strong> ${paso}`;
        contenedor.appendChild(elPaso);
    });
}

/**
 * Carga la representación visual de la recta numérica
 * @param {object} ejercicio - Ejercicio actual
 */
function cargarRectaNumerica(ejercicio) {
    const contenedor = document.getElementById('rectaNumerica');
    const svg = generarSVGRecta(ejercicio);
    contenedor.innerHTML = svg;
}

/**
 * Actualiza la barra de progreso y número de ejercicio
 */
function actualizarProgreso() {
    const progreso = ((ejerciciosCompletados / totalEjercicios) * 100);
    barraRelleno.style.width = progreso + '%';
    
    const siguiente = ejercicioActual + 1;
    numEjercicio.textContent = `Ejercicio ${siguiente} de ${totalEjercicios}`;
}

// ============================================
// VALIDACIÓN Y FEEDBACK
// ============================================

/**
 * Comprueba la respuesta del usuario
 */
function comprobarRespuesta() {
    const respuesta = inputDominio.value.trim();
    
    if (!respuesta) {
        mostrarFeedback('Por favor, escribe tu respuesta en el campo.', 'incorrecto');
        return;
    }
    
    const ejercicio = ejercicios[ejercicioActual];
    const esCorrecto = validarRespuesta(respuesta, ejercicio.dominioCorrecto);
    
    if (esCorrecto) {
        // Respuesta correcta ✓
        mostrarFeedbackCorrecto(ejercicio);
    } else {
        // Respuesta incorrecta ✗
        mostrarFeedbackIncorrecto(respuesta, ejercicio);
    }
}

/**
 * Muestra feedback correcto y suma puntos
 * @param {object} ejercicio - Ejercicio actual
 */
function mostrarFeedbackCorrecto(ejercicio) {
    const puntos = calcularPuntos(ejercicio.id, true);
    puntuacionTotal += puntos;
    ejerciciosCompletados++;
    
    let html = `
        <p><strong>✓ ¡Correcto!</strong></p>
        <p>Ganaste <strong>${puntos} puntos</strong>.</p>
        <p>El dominio de f(x) = ${ejercicio.funciones} es: <strong>${ejercicio.dominioCorrecto[0]}</strong></p>
    `;
    
    mostrarFeedback(html, 'correcto');
    actualizarPuntuacion();
    
    // Mostrar botón siguiente
    btnSiguiente.style.display = 'inline-block';
    btnComprobar.disabled = true;
    btnPista.disabled = true;
    inputDominio.disabled = true;
}

/**
 * Muestra feedback incorrecto
 * @param {string} respuesta - Respuesta del usuario
 * @param {object} ejercicio - Ejercicio actual
 */
function mostrarFeedbackIncorrecto(respuesta, ejercicio) {
    const mensajeError = obtenerMensajeError(respuesta, ejercicio);
    
    let html = `
        <p><strong>✗ Respuesta Incorrecta</strong></p>
        <p>${mensajeError}</p>
        <p><strong>Pista:</strong> ${ejercicio.pista}</p>
        <p class="respuesta-esperada">Respuestas válidas: ${ejercicio.dominioCorrecto.join(' o ')}</p>
    `;
    
    mostrarFeedback(html, 'incorrecto');
    inputDominio.className = 'input-dominio error';
}

/**
 * Muestra la pista del ejercicio
 */
function mostrarPista() {
    const ejercicio = ejercicios[ejercicioActual];
    
    let html = `
        <p><strong>💡 Pista:</strong></p>
        <p>${ejercicio.pista}</p>
        <p class="info-pista">Revisa los pasos de análisis de arriba para resolver el problema.</p>
    `;
    
    mostrarFeedback(html, 'pista');
    btnPista.disabled = true;
    mostrandoPista = true;
}

/**
 * Muestra un mensaje de feedback genérico
 * @param {string} contenido - Contenido HTML del feedback
 * @param {string} tipo - Tipo: 'correcto', 'incorrecto', 'pista'
 */
function mostrarFeedback(contenido, tipo = 'pista') {
    feedbackContenido.innerHTML = contenido;
    feedback.className = `feedback feedback-${tipo}`;
    feedback.style.display = 'block';
    
    // Desplazarse al feedback
    setTimeout(() => {
        feedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
}

// ============================================
// NAVEGACIÓN
// ============================================

/**
 * Carga el siguiente ejercicio
 */
function siguienteEjercicio() {
    if (ejercicioActual < totalEjercicios - 1) {
        cargarEjercicio(ejercicioActual + 1);
    } else {
        // Todos los ejercicios completados
        finalizarActividad();
    }
}

/**
 * Finaliza la actividad y muestra resultados
 */
function finalizarActividad() {
    seccionEjercicios.style.display = 'none';
    seccionFinalizacion.style.display = 'block';
    
    // Mostrar puntuación
    const puntuacionFinal = document.getElementById('puntuacionFinal');
    puntuacionFinal.textContent = `Puntuación Final: ${puntuacionTotal} / ${totalEjercicios * 17}`;
    
    // Mostrar mensaje motivacional
    const mensajeResultado = document.getElementById('mensajeResultado');
    const mensaje = obtenerMensajeMotivacional(puntuacionTotal);
    mensajeResultado.innerHTML = `<p>${mensaje}</p>`;
    
    // Desplazarse al resultado
    seccionFinalizacion.scrollIntoView({ behavior: 'smooth' });
}

/**
 * Reinicia la actividad desde el principio
 */
function reiniciarActividad() {
    seccionFinalizacion.style.display = 'none';
    puntuacionTotal = 0;
    ejerciciosCompletados = 0;
    numPuntos.textContent = '0';
    comenzarEjercicios();
}

// ============================================
// ACTUALIZACIÓN DE PUNTUACIÓN
// ============================================

/**
 * Actualiza el display de puntuación
 */
function actualizarPuntuacion() {
    numPuntos.textContent = puntuacionTotal;
    actualizarProgreso();
}

// ============================================
// MEJORAS DE UX
// ============================================

/**
 * Añade estilos CSS dinámicamente si es necesario
 */
function agregarEstilosCSS() {
    const style = document.createElement('style');
    style.textContent = `
        .input-dominio.error {
            border-color: #e74c3c;
            background-color: #fadbd8;
        }
        
        .input-dominio:disabled {
            background-color: #ecf0f1;
            cursor: not-allowed;
        }
        
        .respuesta-esperada {
            background: #ecf0f1;
            padding: 10px;
            border-radius: 5px;
            margin-top: 10px;
            font-family: monospace;
        }
        
        .info-pista {
            color: #888;
            font-size: 0.9em;
            margin-top: 10px;
        }
        
        button:disabled {
            opacity: 0.6;
            cursor: not-allowed;
        }
    `;
    document.head.appendChild(style);
}

// Agregar estilos al cargar
agregarEstilosCSS();

// ============================================
// FUNCIÓN PARA TUTORIAL INTERACTIVO (OPCIONAL)
// ============================================

/**
 * Muestra un tutorial de ejemplo antes de comenzar los ejercicios
 * OPCIONAL: Descomenta para activar
 */
function mostrarTutorial() {
    alert(`
╔════════════════════════════════════════╗
║    CÓMO ESCRIBIR TU RESPUESTA         ║
╚════════════════════════════════════════╝

Uso de NOTACIÓN DE INTERVALOS:
• (a, b) = intervalo abierto, excluye a y b
• [a, b] = intervalo cerrado, incluye a y b
• (a, b] = intervalo semicerrado
• ∪ = unión de intervalos

Ejemplos válidos:
✓ (-∞, 2) ∪ (2, +∞)      [Todo excepto 2]
✓ ℝ - {2}                [Todos los reales menos 2]
✓ [3, +∞)                [Desde 3 hasta infinito]
✓ (1, +∞)                [Desde 1 (sin incluir) hasta infinito]

Caracteres especiales (puedes copiar):
• ∞  (infinito)
• ∪  (unión)
• ℝ  (números reales)
    `);
}

// Si quieres añadir un botón de ayuda en la introducción, descomentar esto:
// document.addEventListener('DOMContentLoaded', () => {
//     const btnAyuda = document.createElement('button');
//     btnAyuda.textContent = '? Cómo escribir la respuesta';
//     btnAyuda.onclick = mostrarTutorial;
//     document.querySelector('.seccion.introduccion').appendChild(btnAyuda);
// });

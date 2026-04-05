/**
 * GUÍA RÁPIDA DE CUSTOMIZACIÓN
 * Ejemplos para modificar ejercicios y personalizar la actividad
 */

// ============================================
// EJEMPLO 1: CAMBIAR UN EJERCICIO EXISTENTE
// ============================================

/*
EJERCICIO ORIGINAL en js/ejercicios.js (línea ~50):

{
    id: 1,
    tipo: 'denominador',
    funciones: '1 / (x - 2)',
    titulo: 'Función con Denominador',
    // ... resto del objeto
}

CÓMO MODIFICARLO:
1. Abre js/ejercicios.js
2. Encuentra el array 'ejercicios'
3. Busca el objeto con id: 1
4. Cambia los valores:

    NUEVO:
    {
        id: 1,
        tipo: 'denominador',
        funciones: '3 / (x + 5)',          // ← Nueva función
        titulo: 'Función Racional',        // ← Nuevo título
        explicacion: 'Denominador con suma', // ← Nueva explicación
        pasos: [
            'El denominador es: x + 5',
            'Resolvemos: x + 5 ≠ 0 → x ≠ -5',
            'El dominio excluye -5'
        ],
        dominioCorrecto: [
            '(-∞, -5) ∪ (-5, +∞)',
            'ℝ - {-5}',
            'Dominio: ℝ - {-5}'
        ],
        pista: '¿Para qué valor se anula x + 5?',
        valoresEspeciales: [
            { x: -6, valido: true },
            { x: -5, valido: false },  // ← Punto excluido
            { x: 0, valido: true }
        ],
        rango: [-8, 4],
        puntoExcluido: -5              // ← Punto a excluir en la recta
    }
*/

// ============================================
// EJEMPLO 2: AÑADIR UN NUEVO EJERCICIO
// ============================================

/*
PASOS:
1. Abre js/ejercicios.js
2. Ve al final del array 'ejercicios' (después del ejercicio 8)
3. Agrega una coma al ejercicio anterior si no la tiene
4. Copia este nuevo ejercicio:

    {
        id: 9,                          // ← ID único (9, 10, 11...)
        tipo: 'denominador',            // ← Tipo de restricción
        funciones: '2 / (x² - 1)',
        titulo: 'Fracciones con Polinomio',
        explicacion: 'Denominador con factor cuadrático',
        pasos: [
            'El denominador es: x² - 1',
            'Factorizamos: (x - 1)(x + 1)',
            'Los ceros son: x = 1 y x = -1',
            'El dominio excluye ambos valores'
        ],
        dominioCorrecto: [
            '(-∞, -1) ∪ (-1, 1) ∪ (1, +∞)',
            'ℝ - {-1, 1}',
            'Dominio: ℝ - {-1, 1}'
        ],
        pista: 'Factoriza x² - 1 y encuentra sus raíces',
        valoresEspeciales: [
            { x: -2, valido: true },
            { x: -1, valido: false },
            { x: 0, valido: true },
            { x: 1, valido: false },
            { x: 2, valido: true }
        ],
        rango: [-4, 4],
        puntosExcluidos: [-1, 1]
    }

5. Guarda el archivo
6. Abre index.html - ¡verás el nuevo ejercicio automáticamente!
*/

// ============================================
// EJEMPLO 3: CAMBIAR LOS COLORES
// ============================================

/*
UBICACIÓN: css/estilos.css

Busca estas líneas y cambia los colores:

ANTES (Púrpura-Azul):
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    background: #667eea;

DESPUÉS (Verde - Ejemplo):
    background: linear-gradient(135deg, #2ecc71 0%, #27ae60 100%);
    background: #2ecc71;

DESPUÉS (Naranja - Ejemplo):
    background: linear-gradient(135deg, #f39c12 0%, #e67e22 100%);
    background: #f39c12;

CAMBIOS EN VARIAS SECCIONES:
- Línea ~35: .encabezado background
- Línea ~57: .numero-puntos background
- Línea ~62: .barra-relleno background
- Línea ~79: .texto-intro color de borde
- Línea ~90: .card-restriccion:hover color de borde
- Línea ~114: .card-restriccion h3 color
*/

// ============================================
// EJEMPLO 4: CAMBIAR MENSAJES DE TEXTO
// ============================================

/*
ENCABEZADO - index.html (línea 14):
    ANTES: <h1>📊 Estudio del Dominio de Funciones</h1>
    DESPUÉS: <h1>🎓 Encuentra el Dominio de Funciones</h1>

SUBTÍTULO - index.html (línea 15):
    ANTES: <p class="subtitulo">4º ESO - Actividad Interactiva</p>
    DESPUÉS: <p class="subtitulo">Matemáticas - Nivel Avanzado</p>

INTRODUCCIÓN - index.html (línea ~23):
    Busca el párrafo <p class="texto-intro"> y cambia el contenido

MENSAJE FINAL POSITIVO - js/ejercicios.js (función obtenerMensajeMotivacional):
    ANTES:
        if (puntos >= 90) {
            return '¡Excelente! 🌟 Dominas perfectamente...';
        }
    
    DESPUÉS:
        if (puntos >= 90) {
            return '¡Fantastico! ⭐ Eres un experto en dominios...';
        }
*/

// ============================================
// EJEMPLO 5: CAMBIAR PUNTOS DE CADA EJERCICIO
// ============================================

/*
UBICACIÓN: js/ejercicios.js, función calcularPuntos() (línea ~230)

ANTES:
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

DESPUÉS (Ejemplo: todos iguales):
    const puntosBase = {
        1: 12,
        2: 12,
        3: 12,
        4: 12,
        5: 12,
        6: 12,
        7: 12,
        8: 12
    };
    
≈ Total: 96 puntos (máximo)

DESPUÉS (Ejemplo: más difíciles más puntos):
    const puntosBase = {
        1: 5,
        2: 8,
        3: 8,
        4: 8,
        5: 10,
        6: 10,
        7: 15,
        8: 20
    };
    
≈ Total: 84 puntos (máximo)
*/

// ============================================
// EJEMPLO 6: CAMBIAR NÚMERO DE EJERCICIOS
// ============================================

/*
OPCIÓN A: ELIMINAR EJERCICIOS
1. Abre js/ejercicios.js
2. Ve al array 'ejercicios'
3. Simplemente BORRA los objetos que no quieras
4. Ejemplo: Para tener solo 3 ejercicios, mantén id: 1, 2, 3 y borra el resto

OPCIÓN B: AGREGAR MÁS EJERCICIOS
1. Ve al final del array
2. Agrega un nuevo objeto (ver EJEMPLO 2 arriba)
3. El sistema se adapta automáticamente

NOTA IMPORTANTE: El id debe ser único, pero puede no ser consecutivo.
Los números se auto-ajustan en el progreso.
*/

// ============================================
// EJEMPLO 7: CAMBIAR Sistema DE PISTAS
// ============================================

/*
Cada ejercicio tiene una "pista". Cámbiala en js/ejercicios.js:

ANTES (ejercicio 1):
    pista: 'El denominador no puede ser cero. ¿Para qué valor de x se anula?',

DESPUÉS (más específica):
    pista: 'Resuelve x - 2 = 0 para encontrar el valor excluido del dominio',

DESPUÉS (paso a paso):
    pista: 'Paso 1: ¿Cuándo x - 2 = 0? Paso 2: Ese valor NO está en el dominio',
*/

// ============================================
// EJEMPLO 8: PERSONALIZAR FEEDBACK DE ERRORES
// ============================================

/*
UBICACIÓN: js/ejercicios.js, función obtenerMensajeError() (línea ~245)

PUEDES AGREGAR NUEVAS VALIDACIONES:

    // Nuevo: Si olvidó los paréntesis
    if (!normalizada.includes('[') && !normalizada.includes('(')) {
        return 'Recuerda: usa paréntesis ( ) o corchetes [ ] para indicar intervalos.';
    }
    
    // Nuevo: Si escribió mal el símbolo infinito
    if (respuesta.includes('inf') || respuesta.includes('+∞')) {
        return 'Usa el símbolo de infinito: ∞ o +∞';
    }
*/

// ============================================
// EJEMPLO 9: CAMBIAR RANGO DE RECTA NUMÉRICA
// ============================================

/*
En cada ejercicio, el parámetro 'rango' controla qué números se muestran:

    rango: [-4, 6]  // Muestra desde -4 hasta 6

CAMBIAR:
    ANTES: rango: [-4, 6]
    DESPUÉS: rango: [-10, 10]  // Rango más amplio

Úsalo cuando quieras que la recta muestre más o menos números.
*/

// ============================================
// EJEMPLO 10: AYUDA RÁPIDA PARA ERRORES COMUNES
// ============================================

/*
ERROR: "La actividad no carga"
SOLUCIÓN:
1. Asegúrate de abrir INDEX.HTML directamente
2. Verifica que CSS y JS están en sus carpetas (css/ y js/)
3. Comprueba la consola del navegador (F12 → Console)

ERROR: "Los ejercicios no se validan"
SOLUCIÓN:
1. Verifica que 'dominioCorrecto' esté bien escrito en ejercicios.js
2. Prueba con espacios y sin espacios en la respuesta
3. La validación ignora mayúsculas/minúsculas automáticamente

ERROR: "Los botones no funcionan"
SOLUCIÓN:
1. Abre la consola (F12)
2. Busca mensajes de error en rojo
3. Verifica que app.js está bien vinculado en index.html

ERROR: "El diseño se ve raro en móvil"
SOLUCIÓN:
1. Comprueba que no has modificado @media queries en CSS
2. Prueba en Chrome DevTools (F12 → Toggle device toolbar)
*/

// ============================================
// EJEMPLO COMPLETO: MODIFICAR EJERCICIO 2
// ============================================

/*
Quiero cambiar el ejercicio 2 de √(x-3) a √(9-x²)

js/ejercicios.js - Busca id: 2 y cámbia a:

{
    id: 2,
    tipo: 'raiz_par',
    funciones: '√(9 - x²)',
    titulo: 'Raíz Cuadrada - Expresión Cuadrática',
    explicacion: 'Raíz con polinomio en el interior',
    pasos: [
        'Tenemos: √(9 - x²)',
        'Las raíces pares requieren: 9 - x² ≥ 0',
        'Factorizamos: -(x² - 9) = -(x-3)(x+3)',
        'Necesitamos: (x-3)(x+3) ≤ 0',
        'Las raíces son: x = -3 y x = 3',
        'Analizando signos: -3 ≤ x ≤ 3'
    ],
    dominioCorrecto: [
        '[-3, 3]',
        'Dominio: [-3, 3]',
        '-3 <= x <= 3'
    ],
    pista: 'Resuelve 9 - x² ≥ 0. Factoriza y encuentra el intervalo donde es positivo.',
    valoresEspeciales: [
        { x: -4, valido: false },
        { x: -3, valido: true },
        { x: 0, valido: true },
        { x: 3, valido: true },
        { x: 4, valido: false }
    ],
    rango: [-5, 5],
    puntoInicio: -3,
    puntoFin: 3,
    tipoIntervalo: 'cerrado'
}
*/

// ============================================
// PLANTILLA EN BLANCO PARA NUEVO EJERCICIO
// ============================================

/*
Copia esta plantilla para agregar un nuevo ejercicio:

{
    id: X,                                    // ID único
    tipo: 'denominador|raiz_par|logaritmo|combinada',
    funciones: 'ESCRIBE LA FUNCIÓN AQUÍ',
    titulo: 'Título del Ejercicio',
    explicacion: 'Breve descripción',
    pasos: [
        'Paso 1',
        'Paso 2',
        'Paso 3',
        'Paso 4',
        'Paso 5'
    ],
    dominioCorrecto: [
        'Respuesta válida 1',
        'Respuesta válida 2',
        'Respuesta válida 3'
    ],
    pista: 'Ayuda para el alumno',
    valoresEspeciales: [
        { x: número, valido: true/false },
        { x: número, valido: true/false }
    ],
    rango: [min, max],
    puntoExcluido: número (si aplica)
}
*/

// ============================================
// ¡RECUERDA!
// ============================================

/*
✓ Guarda los cambios (Ctrl+S)
✓ Recarga la página en el navegador (F5 o Ctrl+F5)
✓ Prueba cada cambio antes de usarlo en clase
✓ Haz copias de seguridad antes de cambios grandes
✓ Los estudiantes no pueden ver el código (está todo en sus archivos)
✓ ¿Necesitas ayuda? ¡Mira el README.md para más detalles!
*/

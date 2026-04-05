# 📌 CHEAT SHEET - CAMBIOS MÁS COMUNES

Guía ultra-rápida de cambios que harás frecuentemente.

## 🎨 CAMBIAR COLORES

### Archivo: `css/estilos.css`

**Busca y reemplaza TODAS estas líneas:**

```css
#667eea  →  TU_COLOR_1
#764ba2  →  TU_COLOR_2
```

**Paletas listas para copiar/pegar:**

| Nombre | Color 1 | Color 2 |
|--------|---------|---------|
| Púrpura (actual) | #667eea | #764ba2 |
| Verde | #2ecc71 | #27ae60 |
| Azul | #3498db | #2980b9 |
| Naranja | #f39c12 | #e67e22 |
| Rojo | #e74c3c | #c0392b |
| Rosa | #e91e63 | #c2185b |

## 📝 CAMBIAR TEXTOS

### Título y Subtítulo

**Archivo: `index.html` línea ~14-15**

```html
<!-- Línea 14 -->
<h1>📊 Estudio del Dominio de Funciones</h1>

<!-- Línea 15 -->
<p class="subtitulo">4º ESO - Actividad Interactiva</p>
```

### Introducción

**Archivo: `index.html` línea ~23**

```html
<p class="texto-intro">
    El <strong>dominio de una función</strong> es...
</p>
```

### Botones

**Archivo: `index.html` línea ~41**

```html
<button class="boton-principal" id="btnComenzar">Comenzar Ejercicios →</button>
```

## ✏️ AGREGAR/CAMBIAR EJERCICIOS

### Archivo: `js/ejercicios.js`

**Template mínimo:**

```javascript
{
    id: 1,
    tipo: 'denominador',              // o 'raiz_par', 'logaritmo', 'combinada'
    funciones: '1 / (x - 2)',
    titulo: 'Título aquí',
    pasos: ['Paso 1', 'Paso 2', 'Paso 3'],
    dominioCorrecto: ['(-∞, 2) ∪ (2, +∞)', 'ℝ - {2}'],
    pista: 'Ayuda para el alumno',
    valoresEspeciales: [
        { x: -1, valido: true },
        { x: 2, valido: false }
    ],
    rango: [-4, 6],
    puntoExcluido: 2
}
```

**IMPORTANTE:** Todos los campos son necesarios.

## 📊 CAMBIAR PUNTOS

**Archivo: `js/ejercicios.js`**

Función `calcularPuntos()` línea ~240:

```javascript
const puntosBase = {
    1: 10,    // ← Cambia estos números
    2: 12,
    3: 12,
    4: 10,
    5: 13,
    6: 13,
    7: 15,
    8: 17
};
```

**Totales populares:**
- Todos iguales (8×12 = 96): cambiar todos a 12
- Progresivo (10 + incremento): 5, 8, 10, 12, 15, 18, 21, 25
- Simple (todos 10): cambiar todos a 10

## 💬 CAMBIAR MENSAJES

### Correcto

**Archivo: `js/app.js` función `mostrarFeedbackCorrecto()`**

```javascript
let html = `
    <p><strong>✓ ¡Correcto!</strong></p>
    <p>Ganaste <strong>${puntos} puntos</strong>.</p>
    <p>El dominio de f(x) = ${ejercicio.funciones} es: ...</p>
`;
```

### Incorrecto

**Archivo: `js/ejercicios.js` función `obtenerMensajeError()`**

```javascript
function obtenerMensajeError(respuestaUsuario, ejercicio) {
    // Aquí vienen varios if()
    // Cada uno devuelve un mensaje diferente
    return 'Mensaje genérico';
}
```

### Final

**Archivo: `js/ejercicios.js` función `obtenerMensajeMotivacional()`**

```javascript
if (puntos >= 90) {
    return '¡Excelente! 🌟 ...';  // ← Cambiar esto
} else if (puntos >= 75) {
    return '¡Muy bien! 👏 ...';    // ← Cambiar esto
}
```

## 🔧 CAMBIAR ESTILOS GLOBALES

**Archivo: `css/estilos.css`**

### Fuente principal

Línea ~13:
```css
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
```

### Sombra general

Línea ~32:
```css
box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);  /* 0.3 = opacidad 30% */
```

### Radio de esquinas

Línea ~17:
```css
border-radius: 15px;  /* Más grande = más redondeado */
```

### Margen/Padding

Línea ~40 (encabezado):
```css
padding: 40px 20px;  /* Arriba/Abajo, Izq/Der */
```

## 📱 RESPONSIVE (Móvil)

**Archivo: `css/estilos.css` línea ~900+**

```css
@media (max-width: 768px) {
    /* Cambios para tablets */
}

@media (max-width: 480px) {
    /* Cambios para móviles */
}
```

Aquí puedes ajustar tamaños de fuente, espacios, etc. para móviles.

## 🔤 EMOJIS ÚTILES

Copia y pega en títulos, botones, etc.:

| Emoji | Nombre |
|-------|--------|
| 📊 | Gráfico |
| 🎓 | Educación |
| 💡 | Idea/Pista |
| ✓ | Correcto |
| ✗ | Incorrecto |
| ⚠️ | Advertencia |
| 🏆 | Premio/Mejor |
| ⭐ | Estrella |
| 💪 | Fuerza |
| 🎉 | Celebración |
| ➡️ | Flecha derecha |
| ⬅️ | Flecha izquierda |
| 📈 | Progreso |

## 📋 ESTRUCTURA DE TIPOS

**Denominador:**
```javascript
tipo: 'denominador',
puntoExcluido: 2,  // número que se excluye
dominioCorrecto: ['(-∞, 2) ∪ (2, +∞)', 'ℝ - {2}']
```

**Raíz Par:**
```javascript
tipo: 'raiz_par',
puntoInicio: 3,  // desde donde empieza
dominioCorrecto: ['[3, +∞)', 'x ≥ 3']
```

**Logaritmo:**
```javascript
tipo: 'logaritmo',
puntoExcluido: 1,
dominioCorrecto: ['(1, +∞)', 'x > 1']
```

**Combinada:**
```javascript
tipo: 'combinada',
// Combina restricciones de los anteriores
```

## 🔍 FORMATO DE RESPUESTAS

El usuario puede escribir cualquiera de estos:

```
(-∞, 2) ∪ (2, +∞)     ← Intervalos con símbolo ∪
ℝ - {2}               ← Números reales menos un conjunto
x ≠ 2                 ← Expresión algebraica
Dominio: [3, +∞)      ← Con etiqueta
[ 3 , +∞ )            ← Con espacios (se ignoran)
```

**Al añadir ejercicio, asegura que `dominioCorrecto` tiene UN MÍNIMO de 2 formatos.**

## ⏱️ COPIAR-PEGAR RÁPIDO

### Para cambiar rápidamente el gradiente principal:

**En CSS, busca:**
```css
#667eea
#764ba2
```

**Y reemplaza por:**
```css
#2ecc71
#27ae60
```

(Usa Ctrl+H en el editor)

### Para cambiar todos los títulos "Dominio":

**Busca:** `Dominio`
**Reemplaza por:** `Domain` (o lo que quieras)

## 🐛 DEBUG - Cosas que pueden salir mal

| Problema | Solución |
|----------|----------|
| Ejercicios no validan | Verifica `dominioCorrecto` sin faltas |
| Botones grises (deshabilitados) | Recarga la página |
| La recta se ve rara | Asegura que `rango` son 2 números |
| Puntos incorrectos | Verifica `puntosBase` en app.js |
| Falta un ejercicio | Comprueba que tiene `id` único |

## 📌 IDEAS DE CAMBIOS RÁPIDOS

**Para primero de ESO:**
- Cambia todos los ejercicios por casos simples
- Aumenta puntos para motivar
- Reduce dificultad de mensajes

**Para profesor de matemáticas avanzadas:**
- Añade ejercicios complejos (polinomios, exponenciales)
- Reduce el tiempo con puntos por rapidez
- Cambiar colores a tonos más "serios"

**Para actividad de repaso:**
- Mantén los 8 ejercicios
- Aumenta puntos totales (más motivador)
- Añade mensajes personalizados

---

**¿No encuentras lo que buscas?**

Ver estos archivos en orden:
1. **QUICKSTART.md** ← Empieza aquí
2. **GUIA_CUSTOMIZACION.md** ← Ejemplos específicos
3. **README.md** ← Referencia completa
4. **AMPLIACIONES.md** ← Features avanzadas

✅ **¡Ahora ya puedes personalizar la actividad en minutos!**

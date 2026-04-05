# 📐 INTEGRACIÓN LATEX - GUÍA RÁPIDA

Se ha integrado **MathJax** para renderizar todas las fórmulas matemáticas en LaTeX. Las expresiones ahora tienen un aspecto profesional y matemáticamente correcto.

## ✨ ¿Qué Cambió?

### Antes (Sin LaTeX)
```
f(x) = 1 / (x - 2)
√(x - 3)
ln(x - 1)
x ≠ 2
```

### Ahora (Con LaTeX)
```
$$f(x) = \frac{1}{x - 2}$$
$$f(x) = \sqrt{x - 3}$$
$$f(x) = \ln(x - 1)$$
$$x \neq 2$$
```

Mucho más legible y profesional ✅

## 🔧 Cambios Técnicos

### 1. Script agregado en `index.html`
```html
<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
```

### 2. Todas las funciones en `js/ejercicios.js` están en LaTeX
Ejemplo:
```javascript
funciones: 'f(x) = \\frac{1}{x - 2}'
```

### 3. Los pasos del análisis incluyen notación LaTeX
Ejemplo:
```javascript
pasos: [
    'El denominador es: $x - 2$',
    'Resolvemos: $x - 2 \\neq 0$ → $x \\neq 2$'
]
```

### 4. Renderización automática con `MathJax.typesetPromise()`
Se llama después de cargar:
- Funciones del ejercicio
- Pasos del análisis
- Feedback

## 📝 Notación LaTeX Utilizada

### Fracciones
```latex
\frac{numerador}{denominador}
```
Ejemplo: `\frac{1}{x - 2}` → $$\frac{1}{x - 2}$$

### Raíces
```latex
\sqrt{expresion}
\sqrt[n]{expresion}
```
Ejemplo: `\sqrt{x - 3}` → $$\sqrt{x - 3}$$

### Logaritmos
```latex
\ln{x}
\log{x}
```
Ejemplo: `\ln(x - 1)` → $$\ln(x - 1)$$

### Operadores
```latex
\neq    (distinto de)
\geq    (mayor o igual)
\leq    (menor o igual)
\infty  (infinito)
\cup    (unión)
```

### Símbolos Especiales
```latex
\mathbb{R}   (números reales)
\{...\}      (conjunto)
\mid         (tal que)
```

## 🎯 Mejoras Visuales

✅ **Fracciones**: Ahora se ven con barra de fracción clara
✅ **Raíces**: Aparece el símbolo √ correctamente formateado
✅ **Potencias**: Exponentes en superíndice
✅ **Espaciado**: Matemáticamente correcto
✅ **Símbolos**: Todos los operadores aparecen correctamente

## 🔄 Cómo Agregar NUEVAS Funciones (con LaTeX)

Si quieres agregar un nuevo ejercicio en `js/ejercicios.js`:

```javascript
{
    id: 9,
    funciones: 'f(x) = \\frac{2x + 1}{x^2 - 1}',  // ← LaTeX aquí
    pasos: [
        'Paso 1: El denominador es $x^2 - 1$',     // ← LaTeX entre $ $
        'Paso 2: Factorizamos: $(x-1)(x+1)$'
    ]
}
```

### Sintaxis LaTeX en JavaScript
- **Display (centrado)**: `$$...$$ `
- **Inline (en texto)**: `$...$`
- **Escape de barras**: `\\` (en lugar de `\`)

## 🐛 Solución de Problemas

### "No se renderizan las fórmulas"
→ La página necesita Internet para cargar MathJax desde CDN
→ Espera 2-3 segundos a que cargue completamente

### "Veo código LaTeX en lugar de fórmulas"
→ Recarga la página (Ctrl+F5)
→ Verifica la consola (F12) por errores

### "Las fórmulas se ven pequeñas"
→ El CSS ya las escala correctamente
→ Si quieres más grandes, edita `css/estilos.css`:
```css
.formula-grande mjx-container {
    font-size: 2em !important;  /* Cambiar de 1.5em a lo que quieras */
}
```

## 📖 Referencia Rápida de LaTeX

| Símbolo | Código LaTeX | Resultado |
|---------|-------------|-----------|
| Fracción | `\frac{a}{b}` | $$\frac{a}{b}$$ |
| Raíz | `\sqrt{x}` | $$\sqrt{x}$$ |
| Raíz n-ésima | `\sqrt[n]{x}` | $$\sqrt[3]{x}$$ |
| Potencia | `x^2` | $$x^2$$ |
| Subíndice | `x_1` | $$x_1$$ |
| Distinto | `\neq` | $$\neq$$ |
| Mayor igual | `\geq` | $$\geq$$ |
| Menor igual | `\leq` | $$\leq$$ |
| Infinito | `\infty` | $$\infty$$ |
| Unión | `\cup` | $$\cup$$ |
| Ln | `\ln` | $$\ln$$ |
| Log | `\log` | $$\log$$ |
| Reales | `\mathbb{R}` | $$\mathbb{R}$$ |

## 🌐 Más Información

- **MathJax Docs**: https://docs.mathjax.org/
- **LaTeX Tutorial**: https://www.overleaf.com/learn/latex
- **MathJax en CDN**: Funciona completamente offline después de la primera carga

## ✅ Verificación

Puedes verificar que todo funciona correctamente:

1. Abre la actividad en el navegador
2. Las tarjetas de introducción muestran fórmulas formateadas
3. Al cargar cada ejercicio, la función aparece en LaTeX
4. Los pasos incluyen notación matemática
5. El feedback muestra fórmulas correctamente

¡La actividad ahora tiene un aspecto mucho más profesional! 📐✨

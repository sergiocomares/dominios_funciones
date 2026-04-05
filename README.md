# 📊 Dominio de Funciones - Actividad Interactiva para 4º ESO

Una aplicación web interactiva y responsiva para que los alumnos aprendan y practiquen el concepto de dominio de funciones.

## 📁 Estructura del Proyecto

```
dominios_funciones/
├── index.html           # Estructura HTML principal
├── css/
│   └── estilos.css     # Estilos CSS (moderno y responsive)
├── js/
│   ├── ejercicios.js   # Banco de ejercicios y funciones de validación
│   └── app.js          # Lógica principal de la aplicación
└── README.md           # Este archivo
```

## 🚀 Cómo Usar

### 1. **Abrir la Actividad**
   - Simplemente abre `index.html` en cualquier navegador moderno
   - No requiere servidor web ni instalación especial
   - Compatible con móviles, tablets y ordenadores

### 2. **Flujo de la Actividad**
   1. **Introducción**: El alumno lee la teoría sobre dominios
   2. **Ejercicios**: Resuelve 8 ejercicios progresivos
   3. **Validación**: Sistema automático de corrección
   4. **Puntuación**: Acumula puntos según respuestas correctas
   5. **Resultados**: Mensaje final con feedback motivacional

## 🎯 Características Principales

### ✅ Introducción Teórica
- Qué es el dominio de una función
- 3 restricciones principales explicadas con ejemplos visuales
- Tarjetas interactivas con hover effects

### 🧮 8 Ejercicios Progresivos
1. Fracciones simples: `1/(x-2)`
2. Raíces cuadradas: `√(x-3)`
3. Logaritmos: `ln(x-1)`
4. Fracciones con desplazamiento: `5/(x+1)`
5. Raíces con coeficientesα: `√(2x-4)`
6. Logaritmos con desplazamiento: `log(x+5)`
7. Combinada (raíz en denominador): `1/√(x-1)`
8. Raíces cuadráticas: `√(x²-4)`

### 📈 Sistema de Puntuación
- Puntos por ejercicio correctos (10-17 puntos)
- Barra de progreso visual
- Puntuación acumulada

### 💡 Pistas y Feedback Inteligente
- Pista contextualizada para cada ejercicio
- Mensajes de error específico
- Explicaciones en caso de respuesta correcta

### 📊 Visualización en Recta Numérica
- Recta numérica SVG generada dinámicamente
- Muestra qué intervalos pertenecen al dominio
- Puntos incluidos/excluidos indicados visualmente

### 🎨 Diseño Moderno y Responsive
- Gradientes de color atractivos (púrpura azul)
- Completamente adaptado a móviles
- Animaciones suaves
- Accesibilidad mejorada

## 📝 Cómo Modificar para el Profesor

### 1. **Cambiar Ejercicios** (Más Importante)

En `js/ejercicios.js`, modifica el array `ejercicios`:

```javascript
{
    id: 1,
    tipo: 'denominador',           // 'denominador', 'raiz_par', 'logaritmo', 'combinada'
    funciones: '1 / (x - 2)',      // La función a mostrar
    titulo: 'Función con Denominador',
    explicacion: 'Función racional simple',
    pasos: [
        'Paso 1: Identifica el tipo',
        'Paso 2: Encuentra las restricciones',
        // ... más pasos
    ],
    dominioCorrecto: [
        '(-∞, 2) ∪ (2, +∞)',
        'ℝ - {2}',
        'Dominio: ℝ - {2}'
    ],
    pista: 'El denominador no puede ser cero...',
    valoresEspeciales: [],         // Para validación visual
    rango: [-4, 6],               // Rango de la recta numérica
    puntoExcluido: 2              // Para fracciones
}
```

### 2. **Cambiar Textos y Mensajes**

- **Encabezado**: En `index.html`, línea ~14:
  ```html
  <h1>📊 Estudio del Dominio de Funciones</h1>
  ```

- **Teoría introductoria**: En `index.html`, secciones de cards (~50-100)

- **Mensajes finales**: En `js/ejercicios.js`, función `obtenerMensajeMotivacional()`

### 3. **Ajustar Colores y Estilos**

En `css/estilos.css`:

```css
/* Cambiar el gradiente principal (púrpura-azul) */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Cambiar a verde, por ejemplo: */
background: linear-gradient(135deg, #2ecc71 0%, #27ae60 100%);
```

### 4. **Modificar Sistema de Puntuación**

En `js/ejercicios.js`, función `calcularPuntos()`:

```javascript
const puntosBase = {
    1: 10,  // Cambiar estos valores
    2: 12,
    3: 12,
    // ...
};
```

### 5. **Añadir Nuevos Ejercicios**

1. Añade nuevo objeto al array `ejercicios` en `js/ejercicios.js`
2. El sistema se adaptará automáticamente
3. Actualiza la puntuación máxima en el HTML si lo deseas

### 6. **Cambiar Mensajes de Feedback**

En `js/ejercicios.js`, función `obtenerMensajeError()`:

```javascript
if (normalizada.includes('∪') || normalizada.includes('union')) {
    return 'TU MENSAJE PERSONALIZADO AQUÍ';
}
```

## 🔧 Personalización Avanzada

### Añadir un Botón de Ayuda

En `js/app.js`, descomenta las últimas líneas:

```javascript
// Si quieres añadir un botón de ayuda...
```

### Modificar Validación de Respuestas

En `js/ejercicios.js`, función `validarRespuesta()`:

```javascript
function validarRespuesta(respuestaUsuario, dominioCorrecto) {
    // Aquí puedes personalizar la lógica de validación
}
```

## 📚 Ejercicios Incluidos

| # | Tipo | Función | Tema |
|---|------|---------|------|
| 1 | Denominador | 1/(x-2) | Fracciones básicas |
| 2 | Raíz | √(x-3) | Raíces cuadradas |
| 3 | Logaritmo | ln(x-1) | Logaritmos naturales |
| 4 | Denominador | 5/(x+1) | Desplazamiento horizontal |
| 5 | Raíz | √(2x-4) | Raíces con coeficientes |
| 6 | Logaritmo | log(x+5) | Logaritmos base 10 |
| 7 | Combinada | 1/√(x-1) | Múltiples restricciones |
| 8 | Raíz | √(x²-4) | Polinomios cuadráticos |

## ⚙️ Requisitos Técnicos

- **Navegador moderno**: Chrome, Firefox, Safari, Edge
- **JavaScript**: Habilitado
- **Resolución mínima**: 320x480 (móvil)

## 🎓 Sugerencias Didácticas

1. **Antes de la actividad**: Explica la teoría en clase
2. **Durante**: Deja que los alumnos exploren a su ritmo
3. **Feedback**: Usa el sistema de pistas para guiar sin dar la respuesta
4. **Después**: Revisa los errores comunes en clase

## 🐛 Solución de Problemas

### La actividad no funciona
- ✓ Asegúrate de abrir `index.html` directamente (no la carpeta)
- ✓ Los archivos CSS y JS deben estar en sus carpetas respectivas
- ✓ Reinicia el navegador (Ctrl+F5 / Cmd+Shift+R)

### Los ejercicios no se validan correctamente
- ✓ Verifica que las respuestas válidas estén bien escritas en `ejercicios.js`
- ✓ La validación es insensible a mayúsculas/minúsculas
- ✓ Los espacios se ignoran automáticamente

### La recta numérica se ve rara
- ✓ Asegúrate de que el navegador soporta SVG
- ✓ Comprueba la consola (F12) para errores

## 💾 Exportar/Compartir

- Copia toda la carpeta `dominios_funciones` en tu servidor escolar
- Comparte el archivo `index.html` vía Google Drive (sin necesidad de instalación)
- Funciona offline completamente

## 👨‍💻 Notas Técnicas

- **Lenguaje**: HTML5, CSS3, JavaScript Vanilla (sin dependencias)
- **Peso**: ~100KB (sin compresión)
- **Rendimiento**: Carga inmediata
- **Base de datos**: No requiere (todo está en el código)

## 📞 Ayuda y Mejoras

¿Quieres...?
- **Más ejercicios**: Copia el objeto del último ejercicio y modifica
- **Otros temas**: Reutiliza la estructura para otras funciones
- **Gamificación**: Agrega badges 🏆 en la sección de resultados
- **Historial**: Guarda puntuaciones en localStorage

## 📄 Licencia

Uso educativo libre. ¡Comparte con otros profesores!

---

**Autor**: Sistema de Actividades Interactivas
**Versión**: 1.0
**Última actualización**: Abril 2026

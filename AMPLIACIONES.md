# 🚀 AMPLIACIONES Y MEJORAS FUTURAS

Este documento contiene sugerencias para extender la actividad interactiva.

## 📊 Mejoras Técnicas (Intermedio)

### 1. **Guardar Puntuación en localStorage**

En `js/app.js`, añade esto en la función `reiniciarActividad()`:

```javascript
// Guardar puntuación
localStorage.setItem('ultimaPuntuacion', puntuacionTotal);
localStorage.setItem('fechaIntento', new Date().toLocaleDateString());

// Al cargar, mostrar última puntuación
window.addEventListener('load', () => {
    const ultima = localStorage.getItem('ultimaPuntuacion');
    if (ultima) {
        console.log('Última puntuación:', ultima);
    }
});
```

### 2. **Múltiples Intentos por Ejercicio**

Modifica `app.js` para permitir intentos limitados:

```javascript
let intentosRestantes = 3;

function comprobarRespuesta() {
    // ... validación ...
    if (!esCorrecto) {
        intentosRestantes--;
        if (intentosRestantes > 0) {
            mostrarFeedback(`Intenta de nuevo. Te quedan ${intentosRestantes} intentos.`, 'incorrecto');
        } else {
            mostrarFeedback('Se acabaron los intentos. Respuesta correcta: ...', 'incorrecto');
        }
    }
}
```

### 3. **Cronómetro por Ejercicio**

Añade estas funciones en `js/app.js`:

```javascript
let tiempoInicio;
let tiempoTranscurrido = 0;

function iniciarCronometro() {
    tiempoInicio = Date.now();
}

function mostrarTiempo() {
    const ahora = Date.now();
    const segundos = Math.floor((ahora - tiempoInicio) / 1000);
    const minutos = Math.floor(segundos / 60);
    const segs = segundos % 60;
    
    document.getElementById('cronometro').textContent = 
        `${minutos}:${segs.toString().padStart(2, '0')}`;
}
```

### 4. **Historial de Ejercicios Resueltos**

```javascript
let historial = [];

function guardarIntento(ejercicio, respuesta, correcto, puntos) {
    historial.push({
        id: ejercicio.id,
        funcion: ejercicio.funciones,
        respuestaUsuario: respuesta,
        respuestaCorrecta: ejercicio.dominioCorrecto[0],
        correcto: correcto,
        puntos: puntos,
        timestamp: new Date()
    });
}

function mostrarHistorial() {
    console.table(historial);
    // O mostrar en la página
    const html = historial.map(i => 
        `<tr>
            <td>${i.funcion}</td>
            <td>${i.respuestaUsuario}</td>
            <td>${i.correcto ? '✓' : '✗'}</td>
            <td>${i.puntos}</td>
        </tr>`
    ).join('');
    document.getElementById('tablaHistorial').innerHTML = html;
}
```

## 🎮 Gamificación (Avanzado)

### 5. **Sistema de Medallas/Badges**

Crea `js/badges.js`:

```javascript
const badges = [
    { id: 'rapidez', nombre: 'Rápido ⚡', condicion: (s) => s < 30 },
    { id: 'perfeccion', nombre: 'Perfección 💯', condicion: (p) => p === 100 },
    { id: 'persistencia', nombre: 'Persistencia 💪', condicion: (i) => i > 5 },
    { id: 'experto', nombre: 'Experto 🏆', condicion: (p) => p >= 90 }
];

function desbloquearBadges(puntos, tiempo, intentos) {
    badges.forEach(badge => {
        if (badge.condicion(puntos, tiempo, intentos)) {
            mostrarBadge(badge);
        }
    });
}
```

### 6. **Niveles de Dificultad**

En `index.html`, añade selectores de dificultad:

```html
<div class="selector-dificultad">
    <label for="dificultad">Dificultad:</label>
    <select id="dificultad">
        <option value="basico">Básico (ejercicios 1-3)</option>
        <option value="intermedio">Intermedio (ejercicios 4-6)</option>
        <option value="avanzado">Avanzado (ejercicios 7-8)</option>
        <option value="completo" selected>Completo</option>
    </select>
</div>
```

En `js/app.js`:

```javascript
function filtrarEjerciciosPorDificultad(dificultad) {
    const mapeo = {
        basico: [1, 2, 3],
        intermedio: [4, 5, 6],
        avanzado: [7, 8],
        completo: [1, 2, 3, 4, 5, 6, 7, 8]
    };
    
    return ejercicios.filter(e => mapeo[dificultad].includes(e.id));
}
```

## 📚 Contenido Educativo (Fácil)

### 7. **Agregar Videos Explicativos**

En `index.html`, en la sección de introducción:

```html
<div class="videos-explicativos">
    <h3>Videos de Apoyo</h3>
    <iframe width="100%" height="315" 
        src="https://www.youtube.com/embed/VIDEO_ID">
    </iframe>
</div>
```

### 8. **Expandir la Teoría**

En `js/ejercicios.js`, agrega más pasos:

```javascript
pasos: [
    '1. Identificar el tipo de función',
    '2. Escribir la condición de existencia',
    '3. Resolver la inecuación',
    '4. Expresar el resultado en notación de intervalo',
    '5. Verificar con valores prueba'
]
```

### 9. **Tabla de Derivadas/Integrales**

En `index.html`, en la sección de introducción:

```html
<div class="tabla-referencias">
    <h3>Propiedades Útiles</h3>
    <table>
        <tr>
            <td>1/f(x)</td>
            <td>f(x) ≠ 0</td>
        </tr>
        <tr>
            <td>√f(x) (raíz par)</td>
            <td>f(x) ≥ 0</td>
        </tr>
        <!-- ... más filas -->
    </table>
</div>
```

### 10. **Enlace a Wolframalpha**

Modifica la respuesta correcta para incluir un link:

```javascript
dominioCorrecto: ['(-∞, 2) ∪ (2, +∞)'],
enlaceVerificacion: 'https://www.wolframalpha.com/input/?i=domain+1%2F%28x-2%29'
```

En `app.js`:

```javascript
let html = `...
    <a href="${ejercicio.enlaceVerificacion}" target="_blank">
        Verificar en Wolfram Alpha
    </a>`;
```

## 👨‍🏫 Funcionalidades para el Profesor (Avanzado)

### 11. **Panel de Administración**

Crea `admin.html`:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Panel Admin - Dominio de Funciones</title>
</head>
<body>
    <h1>Panel Administrativo</h1>
    
    <section>
        <h2>Ejercicios</h2>
        <button onclick="anadirEjercicio()">+ Nuevo</button>
        <button onclick="editarEjercicio()">✎ Editar</button>
        <button onclick="borrarEjercicio()">✗ Borrar</button>
    </section>
    
    <section>
        <h2>Estudiantes</h2>
        <table id="tablaEstudiantes"></table>
    </section>
    
    <script src="js/admin.js"></script>
</body>
</html>
```

### 12. **Exportar Resultados**

En `js/app.js`:

```javascript
function exportarResultadosCSV() {
    let csv = 'Estudiante,Puntos,Fecha\n';
    historial.forEach(h => {
        csv += `${h.nombre},${h.puntos},${h.fecha}\n`;
    });
    
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'resultados.csv';
    a.click();
}
```

### 13. **Asignar a Grupos de Estudiantes**

```html
<div class="asignacion">
    <label>Asignar a grupo:</label>
    <select id="grupoEstudiantes">
        <option value="">Seleccionar...</option>
        <option value="4ESO-A">4º ESO A</option>
        <option value="4ESO-B">4º ESO B</option>
        <option value="4ESO-C">4º ESO C</option>
    </select>
    <button onclick="asignarActividad()">Asignar</button>
</div>
```

## 📱 Funcionalidades Móviles (Intermedio)

### 14. **Notificaciones Push**

```javascript
if ('Notification' in window) {
    Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
            new Notification('¡Ejercicio resuelto! 🎉', {
                body: 'Ganaste ' + puntos + ' puntos'
            });
        }
    });
}
```

### 15. **Modo Oscuro**

En `css/estilos.css`:

```css
@media (prefers-color-scheme: dark) {
    body {
        background: #1a1a1a;
        color: #ffffff;
    }
    
    .contenedor-principal {
        background: #2d2d2d;
    }
    
    /* ... más estilos oscuros ... */
}
```

Activa con toggle en `app.js`:

```javascript
function activarModoOscuro() {
    document.body.style.filter = 'invert(1)';
    localStorage.setItem('modoOscuro', 'true');
}
```

## 🌍 Internacionalización (Avanzado)

### 16. **Soporte para Múltiples Idiomas**

Crea `js/idiomas.js`:

```javascript
const idiomas = {
    es: {
        titulo: 'Dominio de Funciones',
        comprobar: 'Comprobar Respuesta',
        correcto: '¡Correcto!',
        incorrecto: 'Incorrecto'
    },
    en: {
        titulo: 'Function Domain',
        comprobar: 'Check Answer',
        correcto: 'Correct!',
        incorrecto: 'Incorrect'
    },
    fr: {
        titulo: 'Domaine de Fonction',
        comprobar: 'Vérifier la Réponse',
        correcto: 'Correct!',
        incorrecto: 'Incorrect'
    }
};

function cambiarIdioma(idioma) {
    const texto = idiomas[idioma];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const clave = el.dataset.i18n;
        el.textContent = texto[clave];
    });
}
```

## 🔐 Seguridad y Privacidad

### 17. **Cumplimiento RGPD**

- No guardes datos personales sin consentimiento
- Implementa política de privacidad
- Limpia localStorage después de sesión
- Usa conexiones HTTPS si es en servidor

## 📈 Estadísticas y Análisis

### 18. **Gráficos de Progreso**

Incluye Chart.js:

```html
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
```

```javascript
function crearGraficoProgreso() {
    const ctx = document.getElementById('grafico').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Ej 1', 'Ej 2', 'Ej 3', ...],
            datasets: [{
                label: 'Puntos',
                data: [10, 10, 8, 12, 12, 13, 15, 17],
                borderColor: '#667eea'
            }]
        }
    });
}
```

## 🎨 Diseño y UX

### 19. **Temas Personalizables**

```javascript
const temas = {
    purpura: {
        primario: '#667eea',
        secundario: '#764ba2'
    },
    verde: {
        primario: '#2ecc71',
        secundario: '#27ae60'
    },
    naranja: {
        primario: '#f39c12',
        secundario: '#e67e22'
    }
};

function aplicarTema(nombre) {
    const tema = temas[nombre];
    document.documentElement.style.setProperty('--color-primario', tema.primario);
    document.documentElement.style.setProperty('--color-secundario', tema.secundario);
}
```

### 20. **Animaciones Avanzadas**

Agrega en `css/estilos.css`:

```css
@keyframes pulso {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
}

.boton-comprobar:hover {
    animation: pulso 0.6s infinite;
}
```

---

## 💡 Próximos Pasos Sugeridos

1. **Primero**: Prueba la actividad tal como está
2. **Segundo**: Añade tus propios ejercicios
3. **Tercero**: Implementa la opción #5 (Badges)
4. **Cuarto**: Agrega #18 (Gráficos)
5. **Quinto**: Crea el panel admin (#11)

¡Diviértete personalizando! 🎉

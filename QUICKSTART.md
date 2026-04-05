# ⚡ INICIO RÁPIDO - ASÍ SE USA

## 1️⃣ PRIMER USO (5 minutos)

### Paso 1: Descarga o copia la carpeta
```
Tu carpeta debe tener esta estructura:
dominios_funciones/
├── index.html
├── css/estilos.css
├── js/app.js
├── js/ejercicios.js
└── (archivos .md opcionales)
```

### Paso 2: Abre la actividad
- **Windows**: Haz dobleclick en `index.html`
- **Mac**: Haz dobleclick en `index.html`
- **Tablet/Móvil**: Abre `index.html` desde tu navegador

✅ ¡Listo! La actividad se abre automáticamente

## 2️⃣ CÓMO FUNCIONA PARA EL ALUMNO

1. Lee la **introducción** con las 3 restricciones
2. Clica "Comenzar Ejercicios"
3. Lee la función mostrada
4. Analiza los pasos
5. **Escribe el dominio** en el campo de texto
6. Clica "Comprobar Respuesta"
7. **Feedback automático**:
   - ✅ Si es correcto → suma puntos
   - ❌ Si es incorrecto → muestra error + pista
8. Pasa al siguiente ejercicio
9. Al final → ve tu puntuación total

## 3️⃣ FORMATOS DE RESPUESTA VÁLIDOS

El alumno puede escribir en CUALQUIERA de estos formatos:

```
PARA f(x) = 1/(x-2):
✓ (-∞, 2) ∪ (2, +∞)
✓ ℝ - {2}
✓ Dominio: ℝ - {2}
✓ DOMINIO: ℝ - {2}  (mayúsculas sin efecto)
✓ ( -∞ , 2 ) ∪ ( 2 , +∞ )  (espacios sin efecto)

PARA f(x) = √(x-3):
✓ [3, +∞)
✓ x ≥ 3
✓ [3, infinito)

PARA f(x) = ln(x-1):
✓ (1, +∞)
✓ x > 1
```

## 4️⃣ PUNTUACIÓN Y PROGRESO

```
Total de ejercicios: 8
Puntos por ejercicio: 10-17 (según dificultad)
Puntuación máxima: 100 puntos

Barra de progreso:
- Muestra qué ejercicio estás haciendo
- Se rellena al completar ejercicios correctamente
```

## 5️⃣ PARA MODIFICAR EJERCICIOS (FÁCIL)

### Cambiar UNO que ya existe

**Archivo: `js/ejercicios.js`**

Busca este comentario:
```
// BANCO DE EJERCICIOS
const ejercicios = [
```

Dentro, busca por `id: 1` (o el que quieras cambiar) y modifica:
- `funciones`: la función matemática
- `pasos`: los pasos del análisis
- `dominioCorrecto`: respuestas válidas
- `pista`: la pista para alumnos

**Ejemplo real:**
```javascript
ANTES:
{
    id: 1,
    funciones: '1 / (x - 2)',
    ...
}

DESPUÉS:
{
    id: 1,
    funciones: '3 / (x + 4)',    // ← CAMBIASTE ESTO
    ...
    dominioCorrecto: [
        '(-∞, -4) ∪ (-4, +∞)',    // ← ACTUALIZA ESTO TAMBIÉN
        'ℝ - {-4}'
    ],
    ...
}
```

### Añadir UNO nuevo

**Al final de la lista de ejercicios en `js/ejercicios.js`**, agrega:

```javascript
{
    id: 9,  // ID nuevo
    tipo: 'denominador',  // o 'raiz_par', 'logaritmo'
    funciones: 'TU FUNCIÓN AQUÍ',
    titulo: 'Tu Título',
    explicacion: 'Breve descripción',
    pasos: [
        'Paso 1',
        'Paso 2',
        'Paso 3'
    ],
    dominioCorrecto: [
        'Respuesta correcta 1',
        'Respuesta correcta 2'
    ],
    pista: 'Ayuda para el alumno',
    valoresEspeciales: [
        { x: -2, valido: true },
        { x: 0, valido: true }
    ],
    rango: [-5, 5],
    puntoExcluido: 0  // si es denominador
}
```

**¡El sistema se adapta automáticamente!**

## 6️⃣ CAMBIAR COLORES (MUY FÁCIL)

### Gradiente principal (encabezado, botones)

**Archivo: `css/estilos.css`**

Busca línea ~35:
```css
ANTES:
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

DESPUÉS (verde):
background: linear-gradient(135deg, #2ecc71 0%, #27ae60 100%);

DESPUÉS (naranja):
background: linear-gradient(135deg, #f39c12 0%, #e67e22 100%);

DESPUÉS (rojo):
background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%);
```

Hay 5-6 líneas con este gradiente. Cámbiabas todas para que sea consistente.

## 7️⃣ CAMBIAR TEXTOS (TÍTULO, ETC)

### Título principal

**Archivo: `index.html` línea ~14**

```html
ANTES:
<h1>📊 Estudio del Dominio de Funciones</h1>

DESPUÉS:
<h1>🔍 Encuentra el Dominio de Funciones</h1>
```

### Subtítulo

```html
ANTES:
<p class="subtitulo">4º ESO - Actividad Interactiva</p>

DESPUÉS:
<p class="subtitulo">Matemáticas - Nivel Intermedio</p>
```

### Botón "Comenzar"

Busca en `index.html`:
```html
ANTES:
<button ... id="btnComenzar">Comenzar Ejercicios →</button>

DESPUÉS:
<button ... id="btnComenzar">¡Vamos! Comenzar Desafío →</button>
```

## 8️⃣ SOLUCIÓN RÁPIDA DE PROBLEMAS

### "No se ve bien en móvil"
→ Sistema responsivo automático. Abre en el navegador del móvil nada más.

### "Los ejercicios no validan"
→ Asegúrate de que en `dominioCorrecto` está la respuesta EXACTA (sin faltas)

### "Un botón no funciona"
→ Recarga la página (Ctrl+F5 o Cmd+Shift+R)

### "¿Cómo saben los alumnos qué escribir?"
→ Hay una ayuda: "💡 Formatos válidos: (-∞, 2) ∪ (2, +∞) | ℝ - {2} |..."

### "¿Se guardan las puntuaciones?"
→ Actualmente NO. Están solo en esa sesión del navegador.
(Para guardarlas, ver `AMPLIACIONES.md` → localStorage)

## 9️⃣ USAR CON LOS ALUMNOS

### Opción 1: En clase (Laboratorio/Aula con ordenadores)
1. Abre tú la página en tu PC
2. Proyéctalas por el proyector
3. Dale a cada alumno la carpeta
4. Que abran `index.html` en su navegador
5. Trabajan a su ritmo, tú vas monitoreando

### Opción 2: En casa (Deberes)
1. Comparte la carpeta (Google Drive, email, etc.)
2. Los alumnos abren `index.html`
3. Trabajan cuando quieran
4. Al terminar, ven su puntuación

### Opción 3: En servidor escolar
1. Sube la carpeta a tu servidor Web
2. Comparte el link con los alumnos
3. Acceden desde cualquier navegador

## 🔟 CASOS DE USO TÍPICOS

### Usar en el aula

```
1. Tú explicas la teoría (10 min)
2. Muestras la página en el proyector (5 min)
3. Déjalos practicar (20 min)
4. Revisa dudas comunes (10 min)
5. Análisis de errores (5 min)
```

### Ampliación de lección

```
1. Clase teórica normal
2. "Para practicar más, aquí está esta actividad"
3. Acceso desde cualquier dispositivo
4. Practicidad ilimitada sin presión
```

### Evaluación formativa

```
1. Los alumnos hacen la actividad
2. Tomas nota de errores frecuentes
3. Sin puntuación obligatoria (es práctica)
4. Identifica quién necesita refuerzo
```

## 📋 CHECKLIST ANTES DE USAR CON ALUMNOS

- [ ] He abierto `index.html` y funciona
- [ ] Los 8 ejercicios aparecen bien
- [ ] Los ejercicios que validan correctamente
- [ ] He cambiado lo que quería cambiar
- [ ] Probé en móvil (respuesta bien)
- [ ] He leído la introducción teórica
- [ ] Tengo clara la puntuación máxima
- [ ] He pensado en cómo quiero usarla
- [ ] He hecho una copia de seguridad (importante)
- [ ] ¿Necesito cambiar nada más? (revisar)

## 🆘 AYUDA RÁPIDA

**Archivo INCORRECTO**: que el profesor debe leer según lo que necesita:

| Necesito... | Lee esto |
|---|---|
| Entender la estructura | `README.md` |
| Cambiar ejercicios | `GUIA_CUSTOMIZACION.md` |
| Añadir features nuevas | `AMPLIACIONES.md` |
| Empezar YA | Este archivo (`QUICKSTART.md`) ✓ |

## 🎉 ¡YA ESTÁ!

Ya puedes usar la actividad. 

**Recuerda:**
- ✅ Es completamente funcional
- ✅ Funciona sin internet (offline)
- ✅ Fácil de personalizar
- ✅ Diseño moderno y limpio
- ✅ Responsive (móvil, tablet, PC)

**¿Necesitas ayuda?**
1. Mira `README.md` (teoría completa)
2. Mira `GUIA_CUSTOMIZACION.md` (ejemplos específicos)
3. Abre el código y lee los comentarios (todo está comentado)

---

**¡Que disfruten tus alumnos aprendiendo dominios de funciones!** 🎓✨

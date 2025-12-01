---
title: "html-tag-stripper"
difficulty: "easy"
topics:
  - String
  - Regex
source: "freecodecamp"
series: "daily"
category: "daily"
createdAt: "2025-10-14"
---

# HTML Tag Stripper

## Análisis del Problema

Este problema requiere implementar una función que remueva todas las etiquetas HTML de un string y devuelva únicamente el contenido de texto plano. La función `stripTags()` debe recibir un string HTML válido y retornar solo el texto contenido entre las etiquetas.

### Restricciones Principales

1. **HTML válido**: El input contiene únicamente HTML válido
2. **Etiquetas anidadas**: Las etiquetas HTML pueden estar anidadas a múltiples niveles
3. **Remover atributos**: Se deben remover tanto las etiquetas como sus atributos
4. **Preservar texto**: Solo el texto plano entre las etiquetas debe ser preservado

### Casos de Validación

**Casos básicos:**

- `'<a href="#">Click here</a>'` → `"Click here"`
- `'<p class="center">Hello <b>World</b>!</p>'` → `"Hello World!"`

**Casos con elementos vacíos:**

- `'<img src="cat.jpg" alt="Cat">'` → `""` (sin texto, retorna string vacío)

**Casos con anidamiento:**

- `'<main id="main"><section class="section">section</section><section class="section">section</section></main>'` → `"sectionsection"`

### Consideraciones Técnicas

- **Regex vs Parser**: Dado que el HTML es válido, se puede usar expresiones regulares
- **Anidamiento**: Las regex deben manejar correctamente etiquetas anidadas
- **Atributos**: Los atributos dentro de las etiquetas deben ser removidos completamente
- **Espacios y formato**: El texto resultante debe mantener los espacios naturales

### Complejidad del Problema

Este es un problema de procesamiento de strings con las siguientes características:

- Requiere identificar patrones de apertura y cierre de etiquetas
- Debe manejar anidamiento arbitrario
- Necesita preservar el orden y contenido del texto
- Debe ser eficiente para strings de longitud razonable

## Enfoques Considerados

### 1. Parser HTML Manual

Crear un parser que procese caracter por caracter, identificando aperturas y cierres de etiquetas. Ventajas: control total, manejo de casos edge. Desventajas: código complejo, propenso a errores.

### 2. Uso de Librerías Externas

Utilizar librerías como `cheerio` o `jsdom` para parsear HTML. Ventajas: robusto, maneja casos complejos. Desventajas: dependencias externas, overkill para HTML simple.

### 3. Expresión Regular (Implementado)

Usar regex para identificar y remover patrones de etiquetas HTML. Ventajas: simple, eficiente, sin dependencias. Desventajas: limitado a HTML válido.

### 4. String Manipulation con Loops

Iterar sobre el string y construir un nuevo string omitiendo las partes entre `<` y `>`. Ventajas: simple de entender. Desventajas: menos eficiente que regex.

## Solución Implementada

Se implementó la solución usando expresiones regulares por su simplicidad y eficiencia para este caso específico donde el HTML es válido.

```javascript
function stripTags(html) {
  return html.replace(/<[^>]*>/g, "");
}
```

### Explicación Detallada de la Regex

La expresión regular `/<[^>]*>/g` funciona de la siguiente manera:

#### Componentes de la Regex

1. **`<`** - Carácter literal de apertura de etiqueta
2. **`[^>]*`** - Clase de caracteres negada:
   - `[^>]` significa "cualquier caracter excepto `>`"
   - `*` significa "cero o más ocurrencias"
   - Esto captura todo el contenido dentro de la etiqueta, incluyendo atributos
3. **`>`** - Carácter literal de cierre de etiqueta
4. **`g`** - Flag global que reemplaza todas las ocurrencias, no solo la primera

#### Por qué funciona

- **Captura etiquetas completas**: `<[^>]*>` encuentra cualquier secuencia que comience con `<`, contenga cualquier caracter excepto `>`, y termine con `>`
- **Maneja atributos**: Los atributos dentro de las etiquetas son capturados por `[^>]*`
- **Etiquetas anidadas**: Como el HTML es válido, las etiquetas no se solapan de manera que rompa la regex
- **Elementos self-closing**: Funciona tanto para `<tag>` como para `<tag />`
- **Global**: El flag `g` asegura que se procesen todas las etiquetas en el string

#### Ejemplos de funcionamiento

**`'<a href="#">Click here</a>'`:**

- Encuentra `<a href="#">` y lo reemplaza por `""`
- Encuentra `</a>` y lo reemplaza por `""`
- Resultado: `"Click here"`

**`'<p class="center">Hello <b>World</b>!</p>'`:**

- Encuentra `<p class="center">` → `""`
- Encuentra `<b>` → `""`
- Encuentra `</b>` → `""`
- Encuentra `</p>` → `""`
- Resultado: `"Hello World!"`

**`'<img src="cat.jpg" alt="Cat">'`:**

- Encuentra `<img src="cat.jpg" alt="Cat">` → `""`
- Resultado: `""`

### Limitaciones y Consideraciones

- **HTML válido requerido**: La regex asume que el HTML está bien formado
- **No maneja entidades HTML**: `&lt;`, `&gt;`, etc. se mantienen como texto
- **No preserva estructura**: Solo extrae texto plano, pierde información de estructura
- **Eficiencia**: Muy eficiente para strings razonables

## Complejidad

- **Tiempo**: O(n) - Una sola pasada por el string con replace global
- **Espacio**: O(n) - Creación de un nuevo string resultante

## Casos de Prueba

Se implementaron 4 casos de prueba siguiendo el enfoque TDD:

**Casos básicos:**

1. `'<a href="#">Click here</a>'` → `"Click here"`
2. `'<p class="center">Hello <b>World</b>!</p>'` → `"Hello World!"`

**Casos edge:**

1. `'<img src="cat.jpg" alt="Cat">'` → `""` (elemento sin texto)
2. `'<main id="main"><section class="section">section</section><section class="section">section</section></main>'` → `"sectionsection"` (anidamiento complejo)

## Aprendizajes y Notas

### Expresiones Regulares para HTML

**Patrones útiles para procesamiento HTML:**

```javascript
// Remover todas las etiquetas HTML
/<[^>]*>/g

// Encontrar etiquetas de apertura
/<[^/][^>]*>/g

// Encontrar etiquetas de cierre
/<\/[^>]+>/g

// Extraer contenido de etiquetas específicas
/<tag[^>]*>(.*?)<\/tag>/g
```

### Ventajas de Regex para HTML Simple

- **Simplicidad**: Una línea de código resuelve el problema
- **Performance**: Muy eficiente para casos comunes
- **Legibilidad**: El patrón es fácil de entender una vez explicado
- **Sin dependencias**: Funciona en cualquier entorno JavaScript

### Cuándo usar Regex vs Parser

**Usar Regex cuando:**

- HTML es válido y simple
- No necesitas preservar estructura
- Performance es crítica
- Solo necesitas extraer texto

**Usar Parser cuando:**

- HTML puede ser malformado
- Necesitas preservar estructura/relaciones
- Manejar casos complejos (script, style, etc.)
- Validación avanzada requerida

### Consideraciones de Seguridad

- **XSS Prevention**: Esta función ayuda a prevenir XSS removiendo tags potencialmente peligrosos
- **Input Sanitization**: Útil para limpiar input de usuario antes de mostrar
- **Content Filtering**: Base para sistemas de filtrado de contenido

### Mejoras Posibles

- **Manejo de entidades HTML**: Convertir `&lt;` a `<`, etc.
- **Preservar espacios**: Normalizar espacios en blanco
- **Configurabilidad**: Permitir ciertas etiquetas (whitelist)
- **Atributos seguros**: Mantener atributos seguros como `href` en enlaces
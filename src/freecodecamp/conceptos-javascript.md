# Conceptos y Patrones JavaScript - FreeCodeCamp

## Manipulación de Números

### Conversión de Unidades con Formateo Preciso

**Patrón:** Convertir entre diferentes unidades manteniendo precisión decimal específica.

```javascript
// Conversión Celsius a Fahrenheit con redondeo
function adjustThermostat(currentF, targetC) {
  const targetF = parseFloat((targetC * 1.8 + 32).toFixed(1));
  const difference = (targetF - currentF).toFixed(1);
  return `Heat: ${difference} degrees Fahrenheit`;
}
```

**Cuándo usar:**

- Conversiones entre sistemas de medida
- Necesidad de mantener formato decimal específico
- Comparaciones que requieren precisión controlada

**Técnicas clave:**

- `toFixed(n)` para redondeo y formato consistente
- `parseFloat()` para reconvertir a número después de redondeo
- Orden de operaciones para evitar `Math.abs()`

**Ventajas:**

- Evita problemas de floating-point precision
- Formato de salida predecible y consistente
- Lógica más simple sin `Math.abs()`

## Manipulación de Strings

### Búsqueda de Máximo con Limpieza de Texto

**Patrón:** Encontrar elemento óptimo en array procesando y limpiando cada elemento.

```javascript
// Encontrar palabra más larga ignorando puntuación
function getLongestWord(sentence) {
  const words = sentence.split(" ");
  let longestWord = "";

  for (let word of words) {
    const cleanedWord = word.replace(/\./g, "");
    if (cleanedWord.length > longestWord.length) {
      longestWord = cleanedWord;
    }
  }
  return longestWord;
}
```

**Cuándo usar:**

- Búsqueda de máximo/mínimo con preprocessing
- Limpieza de datos antes de comparación
- Necesidad de ignorar caracteres específicos

**Técnicas clave:**

- `split()` para dividir en elementos procesables
- `replace(/pattern/g, "")` para limpieza con regex global
- Comparación estricta `>` para manejar empates (primer elemento gana)
- Tracking de variable óptima durante iteración

**Ventajas:**

- Una sola pasada O(n) por los datos
- Flexibilidad para diferentes tipos de limpieza
- Manejo automático de casos edge (empates, elementos vacíos)

### Formateo con Slice y Template Literals

**Patrón:** Reformatear strings de longitud fija extrayendo partes específicas con `slice()`.

```javascript
// Formatear número de teléfono
function formatNumber(number) {
  return `+${number.slice(0, 1)} (${number.slice(1, 4)}) ${number.slice(
    4,
    7
  )}-${number.slice(7)}`;
}
```

**Cuándo usar:**

- Strings de longitud fija con formato predefinido
- Necesidad de aplicar un patrón específico
- Extracción de partes específicas por posición

**Ventajas:**

- Código conciso en una línea
- Template literals más legibles que concatenación
- O(1) en tiempo y espacio para longitudes fijas

### Detección de Separadores

**Patrón:** Cuando una entrada puede tener diferentes tipos de separadores, detectar dinámicamente cuál se usa.

```javascript
// Detectar separador (espacio o guion)
const separator = card.includes(" ") ? " " : "-";
```

**Cuándo usar:**

- Entradas con formato variable pero consistente
- Necesidad de preservar el formato original en la salida
- Separadores limitados a opciones conocidas

**Ejemplo del problema Credit Card Masker:**

```javascript
function mask(card) {
  const separator = card.includes(" ") ? " " : "-";
  const groups = card.split(separator);
  const masked = groups.map((group, i) => (i < 3 ? "****" : group));
  return masked.join(separator);
}
```

### Procesamiento por Grupos

**Patrón:** Dividir strings estructurados en grupos lógicos para procesamiento selectivo.

```javascript
// Dividir y procesar grupos
const groups = card.split(separator);
const processed = groups.map((group, index) => {
  // Lógica diferente según la posición del grupo
  return index < 3 ? transform(group) : group;
});
```

**Beneficios:**

- Simplifica lógica compleja
- Mantiene estructura del dato original
- Fácil de entender y mantener

## Arrays Funcionales

### map() con Índice

**Patrón:** Usar el parámetro `index` en `map()` para aplicar transformaciones condicionales.

```javascript
array.map((element, index) => {
  // Transformación basada en la posición
  return index < threshold ? transform(element) : element;
});
```

**Casos de uso:**

- Transformaciones parciales de arrays
- Procesamiento condicional por posición
- Creación de máscaras o filtros selectivos

## Operadores y Expresiones

### Operador Ternario para Configuración

**Patrón:** Usar ternario para configurar variables basadas en condiciones simples.

```javascript
const config = condition ? valueA : valueB;
```

**Ventajas:**

- Conciso para decisiones binarias
- Legible cuando las opciones son claras
- Evita bloques if-else innecesarios

## Patrones de Validación

### Formatos Consistentes

**Patrón:** Aprovechar restricciones conocidas para simplificar validación.

- **Longitud fija:** No validar longitud si siempre es la misma
- **Caracteres limitados:** Solo validar caracteres permitidos si son conocidos
- **Estructura fija:** Confiar en el formato garantizado por el problema

**Ejemplo:** Credit Card Masker asume 16 dígitos + 3 separadores = 19 caracteres siempre.

## Mejores Prácticas

### Nombres Descriptivos

```javascript
// ✅ Bueno
const separator = card.includes(" ") ? " " : "-";
const groups = card.split(separator);
const maskedGroups = groups.map(/* ... */);

// ❌ Evitar
const s = card.includes(" ") ? " " : "-";
const g = card.split(s);
const m = g.map(/* ... */);
```

### Comentarios Estratégicos

```javascript
// Detectar el separador usado (espacio o guion)
const separator = card.includes(" ") ? " " : "-";

// Dividir en grupos de 4 dígitos
const groups = card.split(separator);

// Enmascarar selectivamente
const masked = groups.map((group, i) => (i < 3 ? "****" : group));
```

### Funciones Puras

- **Input consistente → Output consistente**
- **Sin efectos secundarios**
- **Fáciles de testear**

## Errores Comunes a Evitar

### 1. Separadores Mezclados

```javascript
// ❌ Incorrecto - siempre usa guiones
return masked.join("-");

// ✅ Correcto - preserva el separador original
return masked.join(separator);
```

### 2. Índices Fuera de Rango

```javascript
// ❌ Puede causar errores si array es más pequeño
if (groups.length > 3) {
  // lógica compleja
}

// ✅ Aprovecha restricciones conocidas
// Sabemos que siempre hay exactamente 4 grupos
const masked = groups.map((group, i) => (i < 3 ? "****" : group));
```

### 3. Regex Innecesariamente Complejo

```javascript
// ❌ Overkill para este problema
const regex = /^(\d{4})[-\s](\d{4})[-\s](\d{4})[-\s](\d{4})$/;

// ✅ Simple y directo
const separator = card.includes(" ") ? " " : "-";
const groups = card.split(separator);
```

## Reordenamiento y Transformación de Oraciones

### Reordenamiento Condicional con Capitalización

**Patrón:** Reordenar partes de una oración basado en palabras clave, aplicando transformaciones de capitalización.

```javascript
// Reordenar oración estilo "consejo sabio"
function wiseSpeak(sentence) {
  const words = sentence.slice(0, -1).split(" ");
  const punctuation = sentence.slice(-1);
  const keywords = ["have", "must", "are", "will", "can"];
  const foundIndex = words.findIndex((word) => keywords.includes(word));

  const before = words
    .slice(0, foundIndex + 1)
    .join(" ")
    .toLowerCase();
  const after = words.slice(foundIndex + 1).join(" ");
  const newFirstWord = after.charAt(0).toUpperCase() + after.slice(1);

  return `${newFirstWord}, ${before}${punctuation}`;
}
```

**Cuándo usar:**

- Reordenamiento condicional de texto basado en palabras clave
- Transformaciones que requieren capitalización selectiva
- Procesamiento de oraciones con puntuación al final

**Técnicas clave:**

- `slice(0, -1)` y `slice(-1)` para separar contenido y puntuación
- `findIndex()` con `includes()` para búsqueda de primera ocurrencia
- `slice()` para dividir arrays en partes específicas
- `charAt(0).toUpperCase() + slice(1)` para capitalizar primera letra
- Template literals para construcción clara de resultados

**Ventajas:**

- Manejo robusto de diferentes tipos de puntuación
- Preserva orden original de palabras
- Fácil de extender para diferentes reglas de transformación
- Código legible que refleja la lógica de negocio

**Ejemplo de transformación:**

- Input: `"You must speak wisely."`
- Output: `"Speak wisely, you must."`

## Encadenamiento de Métodos para Ordenamiento y Selección

**Patrón:** Procesamiento secuencial de arrays mediante encadenamiento de métodos funcionales para ordenar, filtrar y transformar datos.

```javascript
// Encontrar las N canciones más reproducidas
function getTopSongs(playlist, n = 2) {
  return playlist
    .sort((a, b) => b.plays - a.plays) // Ordenar por plays descendente
    .slice(0, n) // Tomar los primeros N elementos
    .map((song) => song.title); // Extraer solo los títulos
}
```

**Cuándo usar:**

- Procesamiento de datos que requiere múltiples transformaciones secuenciales
- Cuando se necesita ordenar y luego seleccionar un subconjunto
- Transformaciones que combinan filtrado, ordenamiento y mapeo
- Datos tabulares o listas de objetos que necesitan ser procesados

**Técnicas clave:**

- **`sort(comparator)`**: Ordenamiento personalizado con función comparadora

  - `(a, b) => b.prop - a.prop` para orden descendente
  - `(a, b) => a.prop - b.prop` para orden ascendente
  - Para strings: `(a, b) => a.prop.localeCompare(b.prop)`

- **`slice(start, end)`**: Extracción de subarrays

  - `slice(0, n)` para primeros n elementos
  - `slice(-n)` para últimos n elementos
  - `slice(n)` para elementos desde índice n

- **`map(transformer)`**: Transformación de elementos
  - `map(item => item.property)` para extraer propiedades
  - `map(item => ({ ...item, newProp: value }))` para agregar propiedades
  - `map((item, index) => ({ ...item, rank: index + 1 }))` para agregar índices

**Ventajas:**

- **Flujo de datos claro**: Cada método tiene una responsabilidad única
- **Componibilidad**: Fácil combinar diferentes operaciones
- **Legibilidad**: El código expresa la intención paso a paso
- **Eficiencia**: Evita variables intermedias innecesarias
- **Debugging**: Fácil identificar dónde ocurre cada transformación

**Complejidad típica:**

- Temporal: O(n log n) si incluye ordenamiento, O(n) para operaciones lineales
- Espacial: O(1) adicional (no crea copias grandes del array original)

**Ejemplo práctico:**

```javascript
// Datos de entrada
const songs = [
  { title: "Song A", plays: 42 },
  { title: "Song B", plays: 99 },
  { title: "Song C", plays: 75 },
];

// Resultado: ["Song B", "Song C"]
const topSongs = getTopSongs(songs, 2);
```

**Casos de uso comunes:**

- Rankings y leaderboards
- Paginación de resultados ordenados
- Extracción de top N elementos de listas
- Procesamiento de datos tabulares
- Transformaciones ETL simples

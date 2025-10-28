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

### Cálculo de Factoriales con Acumulador Iterativo

**Patrón:** Calcular factoriales usando un bucle iterativo con acumulador, manejando el caso especial de 0! = 1.

```javascript
// Factorial iterativo descendente (implementado)
function factorial(n) {
  if (n === 0) return 1;

  for (let i = n - 1; i > 0; i--) {
    n *= i;
  }

  return n;
}

// Factorial iterativo ascendente (alternativa más legible)
function factorialAscendente(n) {
  if (n === 0) return 1;

  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }

  return result;
}

// Factorial recursivo (elegante pero con limitaciones)
function factorialRecursivo(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorialRecursivo(n - 1);
}
```

**Cuándo usar:**

- Cálculo de factoriales para problemas matemáticos
- Cuando se necesitan factoriales de números moderados (n ≤ 20 en JavaScript)
- Procesamiento de combinaciones y permutaciones
- Cálculos estadísticos que requieren factoriales

**Técnicas clave:**

- **Caso base explícito:** `n === 0` retorna 1 (definición matemática)
- **Bucle descendente:** `for (let i = n - 1; i > 0; i--)` - intuitivo
- **Bucle ascendente:** `for (let i = 1; i <= n; i++)` - más legible
- **Acumulador in-place:** Modificar parámetro como resultado (eficiente)
- **Variable dedicada:** Usar `result` para mejor claridad

**Ventajas:**

- **Eficiencia O(n):** Lineal en el tamaño del input
- **Sin recursión:** Evita problemas de stack overflow
- **Preciso:** Maneja números grandes correctamente en JavaScript
- **Simple:** Lógica matemática directa
- **Reutilizable:** Base para cálculos combinatorios

**Complejidad:**

- **Tiempo:** O(n) - n-1 multiplicaciones
- **Espacio:** O(1) - solo variables primitivas
- **Limitaciones:** n ≤ 20 en JavaScript (21! excede Number.MAX_SAFE_INTEGER)

**Casos de uso comunes:**

- **Combinaciones:** C(n,k) = n! / (k! × (n-k)!)
- **Permutaciones:** P(n,k) = n! / (n-k)!
- **Distribuciones binomiales:** Probabilidades estadísticas
- **Análisis combinatorio:** Conteo de arreglos posibles
- **Problemas de conteo:** Algoritmos que requieren enumeración

**Consideraciones importantes:**

- **Límite de JavaScript:** 20! es el último factorial que cabe en Number
- **Precisión:** Para n > 20, considerar BigInt o librerías especializadas
- **Caso n=0:** Siempre retorna 1 (convención matemática)
- **Números negativos:** No definidos (requerirían validación)
- **Rendimiento:** Para n pequeño, cualquier implementación funciona

**Alternativas cuando NO usar:**

- **n muy grande:** Usar aproximaciones (Stirling) o BigInt
- **Precisión crítica:** Cuando se necesitan decimales exactos
- **Múltiples cálculos:** Considerar memoización para valores repetidos
- **Lenguajes con enteros ilimitados:** Python, Java tienen mejor soporte

**Patrones relacionados:**

- Similar a cálculo de potencias o exponenciales
- Base para algoritmos de combinatoria
- Relacionado con series matemáticas y expansiones
- Extensión natural a funciones gamma (factoriales generalizados)

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

## Formateo de Duración y Tiempo

### Conversión Modular de Segundos

**Patrón:** Convertir segundos totales a formato H:MM:SS usando operaciones matemáticas modulares para extraer horas, minutos y segundos.

```javascript
function format(seconds) {
  // Extraer componentes usando división modular
  const hours = Math.floor(seconds / 3600); // 3600 segundos = 1 hora
  const minutes = Math.floor((seconds % 3600) / 60); // Minutos restantes
  const secs = seconds % 60; // Segundos restantes

  // Formatear con reglas específicas
  const formattedSeconds = secs.toString().padStart(2, "0");

  if (hours > 0) {
    return `${hours}:${minutes
      .toString()
      .padStart(2, "0")}:${formattedSeconds}`;
  } else {
    return `${minutes}:${formattedSeconds}`;
  }
}
```

**Cuándo usar:**

- Conversión de duración en segundos a formato legible
- Formateo de tiempo con reglas específicas de padding
- Cálculos de tiempo que requieren precisión modular

**Técnicas clave:**

- **`Math.floor(división)`**: Extraer parte entera de la división
- **`% (módulo)`**: Obtener resto de la división
- **`.padStart(2, '0')`**: Asegurar formato de 2 dígitos para segundos
- **Condicional para horas**: Solo incluir horas si son > 0

**Ventajas:**

- **Precisión matemática**: Evita problemas de floating-point
- **Eficiencia O(1)**: Operaciones constantes independientemente del tamaño
- **Flexibilidad**: Fácil adaptar para diferentes formatos de tiempo
- **Legibilidad**: Código que refleja claramente la lógica matemática

**Casos especiales manejados:**

- **Sin horas**: `500s → "8:20"` (solo minutos:segundos)
- **Con horas**: `4000s → "1:06:40"` (horas:minutos:segundos)
- **Segundos con padding**: Siempre 2 dígitos (`1s → "0:01"`)
- **Minutos sin padding**: Sin ceros a la izquierda innecesarios

**Relación con otras técnicas:**

- Similar a conversión de unidades (horas ↔ minutos ↔ segundos)
- Complementa formateo de strings con reglas específicas
- Base para cálculos de tiempo más complejos (fechas, zonas horarias)

## Conversión de Unidades con Validación

**Patrón:** Convertir entre diferentes unidades de almacenamiento con validación previa de unidades permitidas.

```javascript
function numberOfVideos(videoSize, videoUnit, driveSize, driveUnit) {
  // Validación defensiva de unidades
  const validVideoUnits = ["B", "KB", "MB", "GB"];
  const validDriveUnits = ["GB", "TB"];

  if (!validVideoUnits.includes(videoUnit)) {
    return "Invalid video unit";
  }

  if (!validDriveUnits.includes(driveUnit)) {
    return "Invalid drive unit";
  }

  // Lookup table para conversiones eficientes
  const unitToBytes = {
    B: 1,
    KB: 1000,
    MB: 1000000,
    GB: 1000000000,
    TB: 1000000000000,
  };

  // Conversión a unidad común
  const videoBytes = videoSize * unitToBytes[videoUnit];
  const driveBytes = driveSize * unitToBytes[driveUnit];

  // Cálculo con garantía de enteros
  return Math.floor(driveBytes / videoBytes);
}
```

**Cuándo usar:**

- Problemas que involucran múltiples unidades de medida
- Necesidad de validar inputs antes de procesar
- Cálculos que requieren unidad común para comparación
- Resultados que deben ser números enteros

**Técnicas clave:**

- **Validación temprana:** Verificar unidades antes de cualquier cálculo
- **Lookup tables:** Objetos como diccionarios para conversiones O(1)
- **Unidad común:** Convertir todo a bytes para simplificar matemáticas
- **Math.floor():** Garantizar resultados enteros en divisiones
- **Mensajes de error específicos:** Ayudar en debugging con contexto claro

**Ventajas:**

- **Robustez:** Manejo explícito de casos de error
- **Mantenibilidad:** Fácil agregar nuevas unidades o validaciones
- **Claridad:** Código que refleja claramente las reglas de negocio
- **Eficiencia:** Conversiones O(1) sin bucles o recursión

**Casos de uso comunes:**

- Conversión de almacenamiento (bytes, KB, MB, GB, TB)
- Validación de unidades monetarias
- Cálculos de tiempo con diferentes unidades
- Conversiones físicas (metros, kilómetros, millas)

**Patrones relacionados:**

- Similar a conversión de divisas con tasas de cambio
- Comparable a normalización de datos antes de procesamiento
- Base para APIs que aceptan múltiples formatos de input

## Generación de Secuencias Matemáticas

### Secuencia de Tribonacci con Casos Base Explícitos

**Patrón:** Generar secuencias matemáticas donde cada elemento es la suma de los n elementos anteriores, manejando casos base de manera explícita para mayor claridad.

```javascript
function tribonacciSequence(startSequence, length) {
  if (length <= 0) return [];
  if (length === 1) return [startSequence[0]];
  if (length === 2) return [startSequence[0], startSequence[1]];
  if (length === 3) return startSequence;

  const result = [...startSequence];

  for (let i = 3; i < length; i++) {
    const nextValue = result[i - 1] + result[i - 2] + result[i - 3];
    result.push(nextValue);
  }

  return result;
}
```

**Cuándo usar:**

- Generación de secuencias de Tribonacci o similares (cada elemento suma los 3 anteriores)
- Algoritmos que requieren diferentes lógicas para longitudes pequeñas vs. grandes
- Problemas donde la claridad de casos edge es más importante que la concisión

**Técnicas clave:**

- **Casos base explícitos:** Manejar longitudes 0, 1, 2, 3 de manera directa
- **Spread operator:** `[...startSequence]` para crear copia superficial mutable
- **Bucle controlado:** `for` con índice para control preciso de cuándo detener generación
- **Acumulación en array:** Construir resultado incrementalmente con `push()`

**Ventajas:**

- **Claridad máxima:** Cada caso edge se maneja de forma obvia
- **Facilidad de debugging:** Fácil identificar qué rama de código se ejecuta
- **Mantenibilidad:** Cambios en lógica de casos base no afectan el bucle principal
- **Eficiencia:** Evita operaciones innecesarias (como slice) para casos comunes

**Complejidad:**

- **Tiempo:** O(n) - lineal en la longitud deseada
- **Espacio:** O(n) - almacena toda la secuencia generada

**Casos edge manejados:**

- `length = 0`: Array vacío (sin elementos)
- `length = 1`: Solo primer elemento del array inicial
- `length = 2`: Primeros dos elementos del array inicial
- `length = 3`: Array inicial completo
- `length > 3`: Generar elementos adicionales sumando los tres anteriores

**Alternativas consideradas:**

- **Slice al final:** `return result.slice(0, length)` más genérico pero menos claro
- **Recursión:** Riesgo de stack overflow para secuencias largas
- **Reducción funcional:** Menos legible para principiantes

**Patrones relacionados:**

- Similar a generación de secuencia Fibonacci pero con 3 términos anteriores
- Comparable a algoritmos de acumulación con condiciones iniciales especiales
- Base para otras secuencias matemáticas (Lucas, Pell, etc.)

### Concatenación de Secuencias Numéricas

**Patrón:** Generar una cadena concatenando números del 1 al n, optimizando para evitar problemas de rendimiento con strings inmutables en JavaScript.

```javascript
function sequence(n) {
  // Usar array para acumulación eficiente
  const result = [];

  for (let i = 1; i <= n; i++) {
    result.push(i.toString());
  }

  return result.join("");
}
```

**Alternativas eficientes:**

```javascript
// Usando Array.from() y map()
function sequence(n) {
  return Array.from({ length: n }, (_, i) => (i + 1).toString()).join("");
}

// Usando spread operator con keys()
function sequence(n) {
  return [...Array(n).keys()].map((i) => (i + 1).toString()).join("");
}
```

**Cuándo usar:**

- Generación de secuencias numéricas concatenadas como strings
- Problemas que requieren conversión de rangos numéricos a strings continuos
- Optimización de rendimiento cuando n puede ser grande

**Técnicas clave:**

- **Array accumulation:** Evitar concatenación directa de strings (O(n²) potencial)
- **join(''):** Concatenación eficiente al final del proceso
- **toString():** Conversión explícita de números a strings
- **Array.from() o spread:** Creación de arrays de longitud n de manera funcional

**Ventajas:**

- **Eficiencia:** O(n) tiempo y espacio vs O(n²) de concatenación directa
- **Claridad:** Código que expresa claramente la intención
- **Flexibilidad:** Fácil adaptar para diferentes formatos de números
- **Memoria eficiente:** Un solo string resultante en lugar de múltiples temporales

**Complejidad:**

- **Tiempo:** O(n) - lineal en n (conversión + join eficientes)
- **Espacio:** O(n) - array temporal + string resultante

**Problema resuelto:** Integer Sequence de FreeCodeCamp

**Patrones relacionados:**

- Similar a construcción de strings grandes con bucles
- Comparable a algoritmos de serialización numérica
- Base para generación de IDs únicos o códigos secuenciales

## Conversión de Formatos de Color

### Parsing RGB y Conversión a Hexadecimal

**Patrón:** Convertir strings de color CSS en formato `rgb(r, g, b)` a su representación hexadecimal `#rrggbb`, extrayendo componentes numéricos y convirtiéndolos con padding apropiado.

```javascript
function rgbToHex(rgb) {
  // Extraer componentes RGB usando parsing manual
  const r = parseInt(rgb.slice(4, rgb.indexOf(",", 4)).trim(), 10);
  const g = parseInt(
    rgb.slice(rgb.indexOf(",", 4) + 1, rgb.lastIndexOf(",")).trim(),
    10
  );
  const b = parseInt(
    rgb.slice(rgb.lastIndexOf(",") + 1, rgb.length - 1).trim(),
    10
  );

  // Función helper para conversión a hex con padding
  const toHex = (num) => {
    const hex = num.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  };

  // Concatenar resultado
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}
```

**Cuándo usar:**

- Conversión entre formatos de color web (RGB ↔ Hex)
- Parsing de strings estructurados con formato predecible
- Necesidad de conversión numérica con formato de ancho fijo
- Procesamiento de colores en aplicaciones web o gráficos

**Técnicas clave:**

- **Parsing con slice + indexOf:** Control preciso para extraer substrings entre delimitadores
- **parseInt() con base 10:** Conversión explícita a decimal desde string
- **toString(16):** Conversión nativa a hexadecimal
- **Padding manual:** Asegurar 2 dígitos agregando "0" cuando necesario
- **Template literals:** Concatenación clara del resultado final

**Ventajas:**

- **Control total:** Manejo preciso de posiciones y delimitadores
- **Sin dependencias:** Solo métodos nativos de JavaScript
- **Predecible:** Siempre produce exactamente 7 caracteres (# + 6 dígitos hex)
- **Robusto:** Maneja espacios en blanco con `trim()`
- **Legible:** Cada paso del algoritmo es claro y separado

**Complejidad:**

- **Tiempo:** O(1) - operaciones constantes para strings de longitud fija
- **Espacio:** O(1) - variables temporales fijas, output siempre mismo tamaño

**Casos edge manejados:**

- **Valores bajos:** `rgb(1, 2, 3)` → `#010203` (padding automático)
- **Valores altos:** `rgb(255, 255, 255)` → `#ffffff` (sin padding)
- **Espacios:** `rgb( 123 , 456 , 789 )` → `#7b2c4d` (trim() maneja espacios)
- **Valores mixtos:** `rgb(1, 11, 111)` → `#010b6f` (padding selectivo)

**Alternativas consideradas:**

- **Split approach:** `rgb.slice(4, -1).split(',').map(v => parseInt(v.trim()))` - más conciso pero crea array
- **Regex parsing:** `/rgb\((\d+),\s*(\d+),\s*(\d+)\)/` - más robusto pero complejo
- **padStart() moderno:** `num.toString(16).padStart(2, '0')` - una línea pero menos compatible

**Patrones relacionados:**

- Similar a parsing de formatos estructurados (URLs, fechas, coordenadas)
- Comparable a conversión entre sistemas numéricos (decimal ↔ hex ↔ binario)
- Base para procesamiento de colores (HSL, HSV, CMYK conversions)
- Relacionado con formateo de ancho fijo (tiempos, coordenadas, IDs)

## Generación de Secuencias y Concatenación

### Concatenación Directa vs Arrays Intermedios

**Patrón:** Generar secuencias de strings concatenándolos directamente vs usando arrays como buffer.

```javascript
// Concatenación directa (simple y eficiente para casos típicos)
function sequence(n) {
  if (n < 1) return "";
  let result = "";
  for (let i = 1; i <= n; i++) {
    result += i.toString();
  }
  return result;
}

// Usando array intermedio (más eficiente para n muy grande)
function sequenceWithArray(n) {
  if (n < 1) return "";
  const numbers = [];
  for (let i = 1; i <= n; i++) {
    numbers.push(i.toString());
  }
  return numbers.join("");
}

// Enfoque funcional moderno
function sequenceFunctional(n) {
  if (n < 1) return "";
  return Array.from({ length: n }, (_, i) => (i + 1).toString()).join("");
}
```

**Cuándo usar cada enfoque:**

**Concatenación directa (`result += ...`):**

- ✅ **Más simple y legible**
- ✅ **Menos código**
- ✅ **Sin memoria adicional**
- ✅ **Perfecto para n pequeño/mediano (1-10000)**
- ❌ **Puede ser ineficiente en lenguajes sin optimización de strings**

**Array intermedio (`push()` + `join("")`):**

- ✅ **Más eficiente en algunos lenguajes para n grande**
- ✅ **Permite modificaciones intermedias**
- ✅ **Aprovecha optimizaciones de arrays**
- ❌ **Usa más memoria (array adicional)**
- ❌ **Más código que escribir**

**Enfoque funcional (`Array.from()` + `map()` + `join("")`):**

- ✅ **Más expresivo y moderno**
- ✅ **Concatena lógica en una línea**
- ✅ **Aprovecha métodos nativos optimizados**
- ❌ **Menos legible para principiantes**
- ❌ **Crea array intermedio igual que el anterior**

**Técnicas clave:**

- **Validación defensiva:** `if (n < 1) return "";` para casos borde
- **Conversión explícita:** `i.toString()` deja claro el tipo
- **Retorno temprano:** Patrón clean code para validaciones
- **Nombres descriptivos:** `result`, `numbers` son autoexplicativos

**Ventajas del patrón:**

- **Flexibilidad:** Se adapta a diferentes requisitos de memoria/rendimiento
- **Escalabilidad:** Maneja desde n=1 hasta n muy grande
- **Legibilidad:** La versión simple es inmediatamente entendible
- **Mantenibilidad:** Fácil de modificar para diferentes formatos

**Casos de uso comunes:**

- Generar IDs secuenciales: `"user001user002user003"`
- Crear rangos de números: `"1-2-3-4-5"` con separadores
- Formatear listas numeradas: `"1. Item 1\n2. Item 2"`
- Construir queries SQL: `"SELECT * FROM table WHERE id IN (1,2,3,4,5)"`

**Consideraciones de rendimiento:**

- Para n < 1000: cualquier enfoque es aceptable
- Para n < 10000: concatenación directa suele ser suficiente
- Para n > 10000: considerar array intermedio según el lenguaje
- Siempre medir con casos reales antes de optimizar

**Patrones relacionados:**

- Similar a construcción de strings JSON o XML
- Comparable a generación de CSV o TSV
- Base para algoritmos de compresión (run-length encoding)
- Relacionado con parsing de streams de datos

## Procesamiento de Texto por Palabras

### Transformación Selectiva de Palabras

**Patrón:** Procesar texto palabra por palabra, aplicando transformaciones selectivas mientras se preserva la estructura general.

```javascript
// Jumbled Text: mantener primera/última letra, ordenar letras intermedias
function jbelmu(text) {
  const words = text.split(" ");
  const jumbledWords = words.map((word) => {
    if (word.length <= 3) return word;
    const firstChar = word.charAt(0);
    const lastChar = word.charAt(word.length - 1);
    const middleChars = word.slice(1, -1).split("").sort().join("");
    return firstChar + middleChars + lastChar;
  });
  return jumbledWords.join(" ");
}

// Versión imperativa alternativa
function jbelmuImperative(text) {
  const words = text.split(" ");
  const result = [];

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (word.length <= 3) {
      result.push(word);
      continue;
    }

    const first = word[0];
    const last = word[word.length - 1];
    const middle = word
      .substring(1, word.length - 1)
      .split("")
      .sort()
      .join("");
    result.push(first + middle + last);
  }

  return result.join(" ");
}
```

**Cuándo usar cada enfoque:**

**Funcional con `map()`:**

- ✅ **Más expresivo y moderno**
- ✅ **Menos código**
- ✅ **Aprovecha métodos funcionales**
- ✅ **Fácil de combinar con otras operaciones**
- ❌ **Puede crear arrays intermedios**

**Imperativo con bucles:**

- ✅ **Más control sobre el proceso**
- ✅ **Mejor para lógica compleja**
- ✅ **Más eficiente en memoria**
- ❌ **Más código que escribir**
- ❌ **Menos composable**

**Técnicas clave:**

- **División por palabras:** `text.split(" ")` - separa unidades procesables
- **Procesamiento individual:** `map()` o bucles para cada palabra
- **Condiciones de borde:** Manejar palabras cortas primero
- **Reensamblado:** `join(" ")` para restaurar formato original
- **Preservación de estructura:** Mantener elementos que no cambian

**Ventajas del patrón:**

- **Modularidad:** Procesar unidades pequeñas (palabras) independientemente
- **Flexibilidad:** Aplicar diferentes transformaciones por palabra
- **Preservación de formato:** Mantener estructura externa del texto
- **Escalabilidad:** Funciona con texto de cualquier longitud
- **Legibilidad:** Lógica clara por palabra

**Casos de uso comunes:**

- **Censura de texto:** Reemplazar palabras específicas
- **Normalización:** Convertir mayúsculas/minúsculas por palabra
- **Análisis lingüístico:** Contar sílabas, identificar tipos de palabra
- **Formateo:** Capitalizar primeras letras, aplicar estilos
- **Compresión:** Acortar palabras largas manteniendo legibilidad
- **Juegos de palabras:** Anagramas, reordenamientos, etc.

**Consideraciones importantes:**

- **Separadores:** `split(" ")` asume espacios simples; considerar `/\s+/` para múltiples espacios
- **Puntuación:** Este patrón no maneja puntuación; considerar expresiones regulares
- **Idiomas:** Funciona bien para idiomas con separación por espacios
- **Rendimiento:** Para texto muy largo, considerar procesamiento por chunks

**Patrones relacionados:**

- Similar a procesamiento de arrays de objetos
- Comparable a parsing de CSV o datos tabulares
- Base para análisis de texto y NLP básico
- Relacionado con transformación de streams de datos
- Extensión natural de algoritmos de mapeo/reducción

## Comparación de Strings y Detección de Anagramas

### Normalización y Comparación de Frecuencias

**Patrón:** Comparar strings ignorando diferencias superficiales (casing, espacios) enfocándose en el contenido esencial (frecuencias de caracteres).

```javascript
// Enfoque con ordenamiento - simple y efectivo
function areAnagrams(str1, str2) {
  const normalize = (str) =>
    str.replace(/\s+/g, "").toLowerCase().split("").sort().join("");
  return normalize(str1) === normalize(str2);
}

// Enfoque con hash map - eficiente para strings largos
function areAnagramsHash(str1, str2) {
  const normalize = (str) => str.replace(/\s+/g, "").toLowerCase();

  const countFreq = (str) => {
    const freq = {};
    for (let char of str) {
      freq[char] = (freq[char] || 0) + 1;
    }
    return freq;
  };

  const freq1 = countFreq(normalize(str1));
  const freq2 = countFreq(normalize(str2));

  const keys1 = Object.keys(freq1);
  if (keys1.length !== Object.keys(freq2).length) return false;

  return keys1.every((key) => freq1[key] === freq2[key]);
}

// Enfoque con array de conteo - optimizado para alfabeto inglés
function areAnagramsArray(str1, str2) {
  const normalize = (str) => str.replace(/\s+/g, "").toLowerCase();

  const countFreq = (str) => {
    const freq = new Array(26).fill(0);
    for (let char of str) {
      const code = char.charCodeAt(0) - 97; // 'a' = 0
      if (code >= 0 && code < 26) freq[code]++;
    }
    return freq;
  };

  const freq1 = countFreq(normalize(str1));
  const freq2 = countFreq(normalize(str2));

  return freq1.every((count, index) => count === freq2[index]);
}
```

**Cuándo usar cada enfoque:**

**Ordenamiento (`sort()`):**

- ✅ **Más simple**: Implementación de 3-4 líneas
- ✅ **Sin estructuras auxiliares**: Solo métodos de string
- ✅ **Funcional**: Composición elegante de métodos
- ✅ **Perfecto para strings cortos**: < 1000 caracteres
- ❌ **O(n log n)**: Más lento para strings largos

**Hash Map (objeto `{}`):**

- ✅ **O(n) tiempo**: Lineal, eficiente para cualquier tamaño
- ✅ **Muy flexible**: Maneja cualquier carácter unicode
- ✅ **Extensible**: Fácil agregar filtros o análisis adicional
- ✅ **Reutilizable**: Los conteos pueden usarse para otras métricas
- ❌ **Más código**: 10-15 líneas vs 3-4 líneas

**Array de Conteo:**

- ✅ **Máximo rendimiento**: Array nativo más rápido
- ✅ **Memoria fija**: Siempre O(1) espacio adicional
- ✅ **Predecible**: Sin sorpresas de rendimiento
- ❌ **Limitado**: Solo alfabeto inglés (a-z)
- ❌ **Frágil**: Requiere validación de caracteres

**Técnicas clave:**

- **Normalización primero**: `replace(/\s+/g, "").toLowerCase()` - elimina diferencias superficiales
- **Frecuencias vs orden**: Contar apariciones vs reordenar caracteres
- **Comparación final**: `===` para strings, `every()` para arrays, bucles para objetos
- **Validación de longitud**: Para hash maps, comparar número de claves primero

**Ventajas del patrón:**

- **Flexibilidad**: Múltiples implementaciones según necesidades
- **Corrección**: Maneja perfectamente casing, espacios y frecuencias
- **Escalabilidad**: Desde prototipos simples hasta producción optimizada
- **Extensibilidad**: Fácil agregar reglas (ignorar puntuación, case-sensitive, etc.)
- **Reutilizable**: La lógica de normalización aplica a muchos problemas

**Casos de uso comunes:**

- **Validación de anagramas**: Problema principal
- **Detección de plagio**: Comparar textos ignorando formato
- **Compresión de texto**: Análisis de frecuencia de caracteres
- **Criptografía**: Análisis de frecuencia en textos cifrados
- **Juegos de palabras**: Generar anagramas, scrambles
- **Búsqueda difusa**: Encontrar textos similares

**Consideraciones importantes:**

- **Longitud de strings**: Para n < 1000, cualquier enfoque funciona
- **Conjunto de caracteres**: Hash map para unicode, array para ASCII limitado
- **Rendimiento crítico**: Array de conteo para máximo speed
- **Legibilidad**: Ordenamiento para código simple y claro
- **Mantenibilidad**: Hash map para código extensible

**Patrones relacionados:**

- Similar a comparación de arrays con elementos en diferente orden
- Comparable a verificación de isomorfismo entre estructuras
- Base para algoritmos de similitud de texto (Levenshtein, etc.)
- Relacionado con hashing y comparación de hashes
- Extensión de algoritmos de conteo de frecuencia

## Búsqueda Eficiente con Hash Map

### Patrón de Complemento Aritmético

**Patrón:** Resolver problemas de "encontrar pares que sumen un target" usando Hash Map para búsqueda O(1) de complementos, convirtiendo problemas O(n²) en O(n).

```javascript
// Targeted Sum: encontrar dos números que sumen target
function findTarget(arr, target) {
  const seen = new Map();

  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i];

    if (seen.has(complement)) {
      // Retornar índices en orden ascendente
      const indices = [seen.get(complement), i].sort((a, b) => a - b);
      return indices;
    }

    seen.set(arr[i], i);
  }

  return "Target not found";
}

// Two Sum original (LeetCode)
function twoSum(nums, target) {
  const seen = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (seen.has(complement)) {
      return [seen.get(complement), i];
    }

    seen.set(nums[i], i);
  }

  return []; // No encontrado
}
```

**Cuándo usar:**

- Problemas que requieren encontrar pares/elementos que cumplan una condición aritmética
- Cuando el array no está ordenado (si está ordenado, usar Two Pointers)
- Necesidad de índices originales o posiciones específicas
- Problemas donde el orden de los elementos importa
- Casos donde puede haber múltiples soluciones válidas

**Técnicas clave:**

- **`target - current = complement`**: La idea fundamental del patrón
- **Una sola pasada**: Construir el Map mientras se busca
- **Lookup O(1)**: Map permite verificación instantánea de complementos
- **Almacenar índices**: Preservar información de posición original
- **Orden ascendente**: `sort()` para índices cuando se requiere orden específico

**Ventajas:**

- **O(n) tiempo**: Una sola iteración lineal
- **O(n) espacio**: Map almacena hasta n elementos
- **Simple de implementar**: Lógica directa y clara
- **Muy flexible**: Adaptable a diferentes requisitos (índices, orden, etc.)
- **Reutilizable**: Patrón aplicable a muchos problemas similares

**Complejidad:**

- **Tiempo:** O(n) - una pasada por el array
- **Espacio:** O(n) - Map con hasta n entradas
- **Mejor que O(n²):** Fuerza bruta sería n×(n-1)/2 comparaciones

**Casos de uso comunes:**

- **Two Sum variants:** Encontrar pares que sumen target
- **Three Sum:** Extensión a tres números (más complejo)
- **Subarray sum:** Encontrar subarrays que sumen target
- **Complement problems:** Números que se complementan de alguna forma
- **Frecuencia-based:** Problemas que requieren lookup rápido

**Ejemplos de aplicación:**

```javascript
// Encontrar si existe par que sume target
function hasPairWithSum(arr, target) {
  const seen = new Set(); // Solo existencia, no índices

  for (let num of arr) {
    const complement = target - num;
    if (seen.has(complement)) return true;
    seen.add(num);
  }

  return false;
}

// Contar pares que sumen target
function countPairsWithSum(arr, target) {
  const seen = new Map();
  let count = 0;

  for (let num of arr) {
    const complement = target - num;
    if (seen.has(complement)) {
      count += seen.get(complement); // Manejar duplicados
    }
    seen.set(num, (seen.get(num) || 0) + 1);
  }

  return count;
}
```

**Consideraciones importantes:**

- **Duplicados:** Si el array puede tener duplicados, usar Map con conteos
- **Múltiples soluciones:** El patrón encuentra la primera solución válida
- **Orden de índices:** Depende del problema si se necesita ordenar
- **Tipos de datos:** Funciona con números, pero adaptable a otros tipos
- **Espacio vs tiempo:** Trade-off aceptable para la mayoría de casos

**Alternativas cuando NO usar:**

- **Array ordenado:** Two Pointers es O(n) tiempo, O(1) espacio
- **Espacio limitado:** Si n es muy grande y memoria es crítica
- **Múltiples lookups:** Si necesitas buscar el mismo array muchas veces
- **Exact match only:** Si no hay relación aritmética entre elementos

**Patrones relacionados:**

- Similar a búsqueda de elementos complementarios en otras estructuras
- Comparable a memoization para subproblemas
- Base para algoritmos de cache y lookup tables
- Relacionado con problemas de frecuencia y conteo
- Extensión natural de algoritmos de búsqueda binaria para arrays no ordenados

**Problemas resueltos con este patrón:**

- **Targeted Sum (FreeCodeCamp):** Adaptación de Two Sum con orden de índices
- **Two Sum (LeetCode):** Problema clásico que originó el patrón
- **Valid Triangle Number:** Contar triángulos válidos
- **4Sum, 3Sum:** Extensiones a más elementos
- **Subarray Sum Equals K:** Variante con rangos de elementos

## Análisis de Dígitos en Números Grandes

### Verificación de Dígitos Específicos en Cuadrados

**Patrón:** Analizar números grandes (cuadrados perfectos) para detectar presencia de dígitos específicos, convirtiendo números a strings para facilitar el análisis carácter por carácter.

```javascript
// 3 Strikes: contar números del 1 al n cuyo cuadrado contiene al menos un '3'
function squaresWithThree(n) {
  let count = 0;

  for (let i = 1; i <= n; i++) {
    let square = i * i;
    // Conversión a string para análisis de dígitos
    if (square.toString().includes("3")) {
      count++;
    }
  }

  return count;
}

// Alternativas para verificación de dígitos
function hasDigit(str, digit) {
  return str.includes(digit); // Más legible
}

function hasDigitIndexOf(str, digit) {
  return str.indexOf(digit) !== -1; // Más explícito
}

function hasDigitRegex(str, digit) {
  return new RegExp(digit).test(str); // Más flexible
}

function hasDigitArithmetic(num, digit) {
  // Sin conversión a string - operaciones aritméticas puras
  let temp = num;
  while (temp > 0) {
    if (temp % 10 === digit) {
      return true;
    }
    temp = Math.floor(temp / 10);
  }
  return false;
}
```

**Cuándo usar:**

- Análisis de propiedades numéricas que requieren inspección de dígitos individuales
- Problemas que involucran números grandes donde la conversión a string es necesaria
- Conteo condicional basado en presencia/ausencia de dígitos específicos
- Validación de números con restricciones en sus dígitos

**Técnicas clave:**

- **Conversión estratégica:** `num.toString()` para acceder a dígitos como caracteres
- **Métodos de búsqueda:** `includes()`, `indexOf()`, regex según necesidades
- **Aritmética modular:** `num % 10` para extraer último dígito sin strings
- **Bucle de extracción:** `Math.floor(num / 10)` para procesar dígito por dígito
- **Acumulador condicional:** `count++` solo cuando se cumple la condición

**Ventajas:**

- **Simplicidad conceptual:** La conversión a string hace el problema intuitivo
- **Flexibilidad máxima:** Fácil cambiar qué dígito buscar o agregar condiciones
- **Legibilidad:** Código que refleja claramente la lógica matemática
- **Eficiencia práctica:** Para n≤10,000, cualquier enfoque es aceptable
- **Extensibilidad:** Fácil agregar múltiples condiciones o análisis complejos

**Complejidad y consideraciones:**

- **Tiempo:** O(n×d) donde d es promedio de dígitos (típicamente O(n))
- **Espacio:** O(1) adicional (strings temporales se reutilizan)
- **Limitaciones:** Para números extremadamente grandes, considerar BigInt
- **Alternativas:** Aritmética pura evita strings pero es más compleja

**Casos de uso comunes:**

- **Números con dígitos prohibidos:** Validar números sin ciertos dígitos
- **Propiedades numéricas:** Contar números con dígitos pares, impares, etc.
- **Análisis de cuadrados:** Estudiar distribución de dígitos en cuadrados perfectos
- **Generación de secuencias:** Crear números con propiedades específicas
- **Validación de entrada:** Verificar formatos numéricos personalizados

**Comparación de métodos de verificación:**

| Método       | Ventajas         | Desventajas     | Mejor para          |
| ------------ | ---------------- | --------------- | ------------------- |
| `includes()` | Simple, legible  | Menos explícito | Búsqueda básica     |
| `indexOf()`  | Retorna posición | Más verbose     | Necesitas índice    |
| `regex`      | Muy flexible     | Overkill simple | Patrones complejos  |
| Aritmético   | Sin strings      | Más complejo    | Rendimiento crítico |

**Patrones relacionados:**

- Similar a análisis de strings pero con números como fuente
- Comparable a parsing de números en diferentes bases
- Base para algoritmos de validación numérica
- Relacionado con propiedades de números (primos, cuadrados, etc.)
- Extensión natural a análisis de dígitos en secuencias matemáticas

**Problemas resueltos con este patrón:**

- **3 Strikes (FreeCodeCamp):** Contar cuadrados con dígito '3'
- **Números sin cero:** Validar números sin dígito cero
- **Dígitos únicos:** Verificar que todos los dígitos sean distintos
- **Suma de dígitos:** Calcular suma de dígitos individuales
- **Números palíndromos:** Verificar simetría de dígitos

### Conteo Condicional con Acumulador

**Patrón:** Recorrer una secuencia aplicando una condición a cada elemento y acumulando el conteo de elementos que cumplen la condición.

```javascript
// Patrón general de conteo condicional
function countConditional(arr, condition) {
  let count = 0;

  for (let item of arr) {
    if (condition(item)) {
      count++;
    }
  }

  return count;
}

// Aplicado a números del 1 al n
function countSquaresWithThree(n) {
  return countConditional(
    Array.from({ length: n }, (_, i) => (i + 1) ** 2),
    (square) => square.toString().includes("3")
  );
}

// Versión imperativa más eficiente
function countSquaresWithThreeImperative(n) {
  let count = 0;

  for (let i = 1; i <= n; i++) {
    const square = i * i;
    if (square.toString().includes("3")) {
      count++;
    }
  }

  return count;
}
```

**Cuándo usar:**

- Necesidad de contar elementos que cumplen una condición específica
- Procesamiento de secuencias donde el resultado es un conteo numérico
- Problemas de enumeración condicional
- Análisis estadístico básico de datasets

**Técnicas clave:**

- **Acumulador inicializado:** `let count = 0` establece estado inicial
- **Condición clara:** `if (condition(item))` separa lógica de decisión
- **Incremento atómico:** `count++` es operación simple y segura
- **Retorno directo:** `return count` sin modificaciones adicionales
- **Funcional vs imperativo:** Elegir según legibilidad vs eficiencia

**Ventajas:**

- **Simplicidad máxima:** Patrón más básico de procesamiento de datos
- **Flexibilidad:** La condición puede ser cualquier función booleana
- **Componibilidad:** Fácil combinar con otros patrones de procesamiento
- **Eficiencia:** O(n) tiempo, procesamiento lineal
- **Reutilizable:** Patrón aplicable a cualquier tipo de secuencia

**Casos de uso comunes:**

- **Estadísticas básicas:** Contar elementos que cumplen criterios
- **Validación de datos:** Contar registros válidos/inválidos
- **Análisis de frecuencia:** Contar ocurrencias de patrones
- **Filtrado numérico:** Contar elementos en rangos específicos
- **Verificación de propiedades:** Contar elementos con características específicas

**Variaciones del patrón:**

```javascript
// Conteo con múltiples condiciones
function countMultipleConditions(arr) {
  let countA = 0,
    countB = 0;

  for (let item of arr) {
    if (conditionA(item)) countA++;
    if (conditionB(item)) countB++;
  }

  return { countA, countB };
}

// Conteo con transformación previa
function countAfterTransform(arr, transform, condition) {
  let count = 0;

  for (let item of arr) {
    const transformed = transform(item);
    if (condition(transformed)) {
      count++;
    }
  }

  return count;
}
```

**Patrones relacionados:**

- Similar a reducción/fold con operación de suma
- Comparable a filtrado seguido de longitud
- Base para algoritmos de agregación estadística
- Relacionado con procesamiento de streams de datos
- Extensión natural de algoritmos de búsqueda y matching

## Cálculos de Tiempo y Ritmo

### Parsing y Conversión de Tiempo en Formato MM:SS

**Patrón:** Parsear strings de tiempo en formato "MM:SS", convertir a segundos para cálculos, y formatear resultados con padding consistente.

```javascript
// Mile Pace: calcular ritmo promedio por milla
function milePace(miles, duration) {
  // Parsing directo del formato MM:SS
  const [minutes, seconds] = duration.split(":").map(Number);

  // Conversión a unidad común (segundos)
  const totalSeconds = minutes * 60 + seconds;

  // Cálculo del promedio
  const paceInSeconds = totalSeconds / miles;

  // Extracción de componentes con redondeo apropiado
  const paceMinutes = Math.floor(paceInSeconds / 60);
  const paceRemainingSeconds = Math.round(paceInSeconds % 60);

  // Formateo con padding para ancho fijo
  return `${String(paceMinutes).padStart(2, "0")}:${String(
    paceRemainingSeconds
  ).padStart(2, "0")}`;
}

// Función helper reutilizable para parsing de tiempo
function parseTimeToSeconds(timeString) {
  const [minutes, seconds] = timeString.split(":").map(Number);
  return minutes * 60 + seconds;
}

// Función helper para formateo de tiempo
function formatSecondsToMMSS(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = Math.round(totalSeconds % 60);
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
    2,
    "0"
  )}`;
}
```

**Cuándo usar:**

- Cálculos que involucran tiempo en formato MM:SS
- Conversiones entre diferentes unidades de tiempo
- Cálculos de promedio o ritmo (pace)
- Formateo consistente de duraciones
- Parsing de inputs de usuario en formato tiempo

**Técnicas clave:**

- **Parsing con split + map:** `duration.split(":").map(Number)` para extraer componentes
- **Unidad común:** Convertir todo a segundos para cálculos simples
- **Redondeo apropiado:** `Math.round()` para segundos (no truncar)
- **Floor para minutos:** `Math.floor()` para parte entera de minutos
- **Padding consistente:** `padStart(2, "0")` para formato MM:SS

**Ventajas:**

- **Flexibilidad:** Maneja cualquier duración razonable
- **Precisión:** Redondeo correcto para tiempos
- **Reutilizable:** Funciones helper aplicables a otros problemas
- **Legible:** Código que refleja lógica matemática clara
- **Robusto:** Maneja números decimales en cálculos

**Complejidad:**

- **Tiempo:** O(1) - operaciones constantes
- **Espacio:** O(1) - variables primitivas

**Casos de uso comunes:**

- **Cálculos de ritmo:** Pace en running/cycling
- **Temporizadores:** Conteo regresivo, cronómetros
- **Estadísticas deportivas:** Tiempos promedio, records
- **Conversión de unidades:** Minutos ↔ segundos ↔ horas
- **Formateo de duración:** Videos, audio, eventos

**Consideraciones importantes:**

- **Formato consistente:** Asume input en "MM:SS" exacto
- **Redondeo vs truncado:** `Math.round()` preserva precisión
- **Números decimales:** JavaScript maneja división con decimales bien
- **Padding automático:** `padStart()` maneja números de 1-2 dígitos
- **Validación:** Para producción, agregar validación de formato

**Patrones relacionados:**

- Similar a parsing de coordenadas o dimensiones
- Comparable a formateo de moneda o porcentajes
- Base para cálculos de velocidad y distancia
- Relacionado con operaciones de fecha/hora
- Extensión natural a formatos HH:MM:SS

**Problemas resueltos con este patrón:**

- **Mile Pace (FreeCodeCamp):** Cálculo de ritmo por milla
- **Time Conversion:** Entre diferentes formatos de tiempo
- **Average Speed:** Velocidad promedio con tiempo y distancia
- **Duration Formatting:** Formateo consistente de duraciones

## Simulación de Sistemas con Estado

### Patrón de Navegador con Historial Bidireccional

**Patrón:** Simular navegación web usando stacks para historial back/forward, manejando casos edge cuando no hay páginas disponibles.

```javascript
class BrowserHistory {
  constructor() {
    this.current = "Home";
    this.backHistory = [];
    this.forwardHistory = [];
  }

  visit(page) {
    this.backHistory.push(this.current);
    this.current = page;
    this.forwardHistory = []; // Limpiar forward history
  }

  back() {
    if (this.backHistory.length > 0) {
      this.forwardHistory.push(this.current);
      this.current = this.backHistory.pop();
    }
  }

  forward() {
    if (this.forwardHistory.length > 0) {
      this.backHistory.push(this.current);
      this.current = this.forwardHistory.pop();
    }
  }

  getCurrentPage() {
    return this.current;
  }
}
```

**Cuándo usar:**

- Simular navegación con historial
- Implementar undo/redo
- Sistemas que necesitan ir atrás y adelante
- Cualquier estado con "posiciones" anteriores y siguientes

**Técnicas clave:**

- **Dos stacks separados** para direcciones opuestas
- **Validación antes de pop()** para evitar errores
- **Limpieza de forward history** al visitar nueva página
- **Encapsulación en clase** para mejor organización

**Ventajas:**

- Modelo mental claro que refleja navegadores reales
- Casos edge manejados correctamente
- Extensible para agregar funcionalidades
- Reutilizable en otros contextos

**Problemas resueltos:** Navigator (FreeCodeCamp), browser history, undo/redo systems.

### Parsing de Comandos Estructurados

**Patrón:** Procesar comandos con formato consistente, extrayendo parámetros usando métodos de string apropiados según el contexto.

```javascript
// Diferentes enfoques para parsing de comandos
function parseCommand(command) {
  // Enfoque 1: slice() - cuando sabes exactamente la posición
  if (command.startsWith("Visit ")) {
    const page = command.slice(6); // "Visit " = 6 caracteres
  }

  // Enfoque 2: replace() - cuando quieres claridad
  if (command.startsWith("Visit ")) {
    const page = command.replace("Visit ", ""); // Explícito qué se remueve
  }

  // Enfoque 3: split() con destructuring - para comandos con múltiples partes
  if (command.startsWith("Go to ")) {
    const [, page, option] = command.split(" ", 3); // ["Go", "to", "page", "option"]
  }

  // Enfoque 4: regex - para parsing complejo
  const visitMatch = command.match(/^Visit (.+)$/);
  if (visitMatch) {
    const page = visitMatch[1];
  }
}
```

**Cuándo usar cada enfoque:**

**`slice(n)`:**

- ✅ **Performance crítica**: Más rápido que `replace()`
- ✅ **Posición fija**: Cuando sabes exactamente dónde está el parámetro
- ❌ **Menos legible**: Puede confundir si no se documenta

**`replace()`**:

- ✅ **Claridad**: Más fácil de entender para reemplazos simples
- ✅ **Funciona con cualquier posición**: No necesitas saber la posición exacta
- ❌ **Levemente menos eficiente**: Por el overhead de crear un nuevo string

**`split()` con destructuring:**

- ✅ **Múltiples parámetros fácilmente**: Extrae varios parámetros en una línea
- ✅ **Claro y legible**: Fácil de entender qué partes se están extrayendo
- ❌ **Crea array intermedio**: Puede ser menos eficiente por la creación de array

**Regex:**

- ✅ **Muy flexible**: Puede manejar patrones complejos de extracción
- ✅ **Exactitud**: Solo extrae si el patrón completo coincide
- ❌ **Complejidad**: Más difícil de entender y mantener
- ❌ **Overkill para casos simples**: Puede ser innecesario si el comando es simple

**Técnicas clave:**

- **Validación de comandos:** Asegurarse de que el comando es válido antes de procesar
- **Manejo de errores:** Qué hacer si el comando no es reconocido
- **Documentación clara:** Especialmente para expresiones regulares complejas

**Ventajas del patrón:**

- **Flexibilidad:** Puede adaptarse a diferentes formatos de comandos
- **Claridad:** Cada enfoque tiene su propósito y es fácil de entender
- **Reutilización:** Funciones de parsing pueden ser reutilizadas en diferentes contextos
- **Extensibilidad:** Nuevos comandos o parámetros pueden ser añadidos fácilmente

**Casos de uso comunes:**

- **Sistemas de comandos:** Donde los usuarios ingresan comandos textuales
- **Parsing de scripts:** Leer y ejecutar scripts escritos por el usuario
- **Sistemas de configuración:** Donde las opciones se pasan como comandos
- **Interfaces de línea de comandos (CLI):** Procesar argumentos y opciones

**Consideraciones importantes:**

- **Seguridad:** Nunca ejecutar comandos sin validar y sanitizar
- **Errores de usuario:** Proveer mensajes de error claros y útiles
- **Documentación:** Mantener documentación actualizada de qué comandos están disponibles y cómo se usan

**Patrones relacionados:**

- Similar a procesamiento de eventos pero con comandos textuales
- Comparable a parsing de archivos de configuración
- Base para intérpretes de lenguajes de programación
- Relacionado con sistemas de plugins o extensiones

**Problemas resueltos con este patrón:**

- **Navigator (FreeCodeCamp):** Simulación completa de navegador con comandos
- **Command Line Parser:** Procesamiento de argumentos de línea de comandos
- **Config File Processor:** Lectura y aplicación de configuraciones desde archivos
- **Script Executor:** Ejecución de scripts con comandos personalizados

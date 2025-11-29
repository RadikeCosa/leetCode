# Conceptos y Algoritmos - Apuntes de LeetCode

Este archivo contiene los conceptos fundamentales de programación y algoritmos que vamos encontrando al resolver problemas de LeetCode.

## 📚 Tabla de Contenidos

### 🔧 Conceptos de Programación

- [Bucles Anidados](#bucles-anidados)
- [Estructuras de Datos Auxiliares](#estructuras-de-datos-auxiliares)
- [Hash Maps / Mapas de Hash](#hash-maps--mapas-de-hash)
- [Frequency Counting](#frequency-counting-conteo-de-frecuencias)
- [Two Pointers](#técnica-de-dos-punteros-two-pointers)
- [Manipulación de Dígitos](#manipulación-de-dígitos)
- [Operaciones Matemáticas con Dígitos](#operaciones-matemáticas-con-dígitos)

#### Búsqueda binaria para conteo de pares exitosos

**Patrón:** Cuando se requiere contar cuántos elementos de un array ordenado cumplen una condición con respecto a otro valor (por ejemplo, cuántos productos son mayores o iguales a un umbral), se puede ordenar el array y usar búsqueda binaria para encontrar el primer índice que cumple la condición. El resultado es la cantidad de elementos desde ese índice hasta el final.

**Ejemplo:**

- Dado un array de pociones y un valor de hechizo, contar cuántas pociones forman un par exitoso (producto >= success).
- Ordenar el array de pociones y, para cada hechizo, buscar el primer índice donde `spell * potion >= success`.
- El número de pares exitosos es `potions.length - índice`.

**Ventajas:**

- Reduce la complejidad de O(n\*m) a O(n log m) para n hechizos y m pociones.
- Evita recorrer todo el array para cada consulta.

**Aplicaciones:**

- Problemas de conteo de pares bajo una condición.
- Preguntas de umbral en arrays ordenados.

### 📊 Análisis de Complejidad

- [Complejidad Temporal O(n²)](#complejidad-temporal-on²)
- [Complejidad Temporal O(n)](#complejidad-temporal-on---una-pasada)
- [Complejidad Temporal O(log n)](#complejidad-temporal-olog-n---logarítmica)

### 🎯 Patrones de Resolución

- [Hash Map para Búsqueda Rápida](#patrón-hash-map-para-búsqueda-rápida)
- [Comparación Optimizada de Strings](#patrón-comparación-optimizada-de-strings)
- [Optimización Greedy de Dígitos](#patrón-optimización-greedy-de-dígitos)
- [Detección de Secuencias en Strings](#patrón-detección-de-secuencias-en-strings)

### 🔧 Técnicas Avanzadas

- [Bit Manipulation](#bit-manipulation-y-potencias-de-dos)
- [Linked Lists](#linked-lists-listas-enlazadas)
- [Sliding Window](#sliding-window-de-tamaño-fijo)
- [Geometría Computacional](#geometría-computacional)
- [Simulación de Procesos de Intercambio](#simulación-de-procesos-de-intercambio)
- [Dynamic Programming](#programación-dinámica)

### 🎯 Casos de Estudio

- [TDD Methodology](#metodología-tdd-red-green-refactor-aplicada)
- [Optimización y Refactoring](#optimización-y-refactoring-de-código)
- [Matrices y Validación](#matrices-y-validación-con-sets)

## 🎯 Resumen Ejecutivo - Patrones Más Utilizados

### Top 5 Técnicas por Frecuencia de Uso

| Ranking   | Técnica               | Aplicación Principal                     | Complejidad Típica    |
| --------- | --------------------- | ---------------------------------------- | --------------------- |
| 🥇 **#1** | **Hash Maps**         | Búsqueda rápida, Two Sum variants        | O(n) time, O(n) space |
| 🥈 **#2** | **Two Pointers**      | Arrays ordenados, eliminación duplicados | O(n) time, O(1) space |
| 🥉 **#3** | **Greedy + Sort**     | Optimización local → global              | O(n log n) time       |
| 📍 **#4** | **Simulación**        | Procesos iterativos con estado           | O(log n) typical      |
| 🎨 **#5** | **String Processing** | Parsing, validación, patrones            | O(n) time             |

### Decisión Rápida - ¿Qué Técnica Usar?

```
¿Necesitas BÚSQUEDA rápida? → Hash Map
¿Tienes ARRAY ORDENADO? → Two Pointers
¿OPTIMIZACIÓN con orden? → Greedy + Sort
¿PROCESO ITERATIVO? → Simulación
¿MANIPULAR strings/números? → String/Math Processing
```

---

## Conceptos de Programación

### Bucles Anidados

**Definición:** Estructura de control que coloca un bucle dentro de otro bucle.

**Cuándo usar:**

- Comparar elementos de dos arrays
- Procesar matrices 2D
- Búsqueda exhaustiva en espacios bidimensionales

**Ejemplo del problema Fruits Into Baskets II:**

```typescript
for (let i = 0; i < fruits.length; i++) {
  // Bucle externo: cada fruta
  for (let j = 0; j < baskets.length; j++) {
    // Bucle interno: cada canasta
    // Comparar fruta[i] con basket[j]
  }
}
```

**Complejidad:** O(n×m) donde n y m son los tamaños de los arrays.

### Estructuras de Datos Auxiliares

**Definición:** Estructuras adicionales que ayudan a resolver un problema manteniendo información de estado.

**Ejemplo - Array de booleanos:**

```typescript
const basketUsed: boolean[] = new Array(baskets.length).fill(false);
```

**Propósito:** Rastrear qué elementos ya han sido procesados o utilizados.

**Ventajas:**

- Acceso en O(1) para verificar estado
- Fácil de implementar y entender
- Memoria eficiente para casos simples

### Variables de Control

**Definición:** Variables que controlan el flujo del algoritmo y mantienen el estado.

**Tipos comunes:**

- **Contadores:** `unplacedCount` para contar elementos no procesados
- **Banderas:** `fruitPlaced` para indicar si se completó una operación
- **Índices:** Variables para recorrer estructuras

### Hash Maps / Mapas de Hash

**Definición:** Estructura de datos fundamental que mapea claves a valores con acceso promedio O(1), esencial para optimizar algoritmos de búsqueda.

#### **Sintaxis en TypeScript:**

```typescript
// Map genérico con tipos explícitos
const seen = new Map<number, number>(); // valor -> índice
const cache = new Map<string, boolean>(); // string -> resultado

// Record para claves simples
const frequency: Record<number, number> = {}; // más conciso
```

#### **Cuándo usar Hash Maps:**

- ✅ **Búsqueda rápida** de elementos previamente vistos
- ✅ **Optimización O(n²) → O(n)** en problemas de búsqueda
- ✅ **Cacheo de resultados** computacionales
- ✅ **Conteo de frecuencias** de elementos
- ✅ **Detección de duplicados** eficiente

#### **Operaciones Fundamentales:**

| Operación             | Complejidad | Uso típico           |
| --------------------- | ----------- | -------------------- |
| `map.set(key, value)` | O(1)        | Insertar/actualizar  |
| `map.has(key)`        | O(1)        | Verificar existencia |
| `map.get(key)`        | O(1)        | Obtener valor        |
| `map.delete(key)`     | O(1)        | Eliminar entrada     |
| `map.size`            | O(1)        | Tamaño actual        |

#### **Ejemplo Completo - Two Sum Pattern:**

```typescript
function twoSum(nums: number[], target: number): number[] {
  const seen = new Map<number, number>(); // valor -> índice

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    // O(1) lookup - clave del patrón
    if (seen.has(complement)) {
      return [seen.get(complement)!, i];
    }

    // O(1) storage para futuras búsquedas
    seen.set(nums[i], i);
  }

  return [];
}
```

#### **Ventajas Clave:**

- 🚀 **Performance**: Convierte algoritmos O(n²) en O(n)
- 🧩 **API clara**: Métodos expresivos y fáciles de usar
- ⚡ **Eficiencia**: Manejo automático de colisiones
- 🔄 **Flexibilidad**: Soporta cualquier tipo como clave/valor

### Frequency Counting (Conteo de Frecuencias)

**Definición:** Técnica para contar las ocurrencias de elementos usando estructuras de datos tipo hash.

**Estructuras comunes:**

```typescript
// Opción 1: Record (más conciso para claves numéricas/string)
const frequencyMap: Record<number, number> = {};

// Opción 2: Map (más versátil, cualquier tipo de clave)
const frequencyMap = new Map<number, number>();
```

**Patrón básico:**

```typescript
// Con Record
frequencyMap[key] = (frequencyMap[key] || 0) + 1;
// Con Nullish Coalescing (ES2020+)
frequencyMap[key] = (frequencyMap[key] ?? 0) + 1;

// Con Map
frequencyMap.set(key, (frequencyMap.get(key) || 0) + 1);
```

**Ejemplo del problema Count Elements With Maximum Frequency:**

```typescript
export function maxFrequencyElements(nums: number[]): number {
  let frequencyMap: Record<number, number> = {};
  let maxFrequency = 0;

  // Primera pasada: construir frecuencias + tracking de máximo
  for (let num of nums) {
    frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    maxFrequency = Math.max(maxFrequency, frequencyMap[num]);
  }

  // Segunda pasada: sumar frecuencias máximas
  let totalCount = 0;
  for (let count of Object.values(frequencyMap)) {
    if (count === maxFrequency) {
      totalCount += count;
    }
  }

  return totalCount;
}
```

**Cuándo usar:**

- Problemas que requieren contar ocurrencias de elementos
- Encontrar elementos más/menos frecuentes
- Agrupar elementos por frecuencia
- Validar distribuciones o patrones

**Complejidad:**

- Tiempo: O(n) para construcción + O(k) para procesamiento (k = elementos únicos)
- Espacio: O(k) donde k ≤ n

### Two-Pass Algorithms con Optimización

**Definición:** Algoritmos que recorren los datos dos veces, pero optimizan cálculos en la primera pasada.

**Patrón de optimización común:**

```typescript
// ❌ Enfoque naive (3 pasadas)
// 1. Construir estructura
// 2. Encontrar valor objetivo (máximo/mínimo)
// 3. Procesar basado en objetivo

// ✅ Enfoque optimizado (2 pasadas)
// 1. Construir estructura + calcular valor objetivo simultáneamente
// 2. Procesar basado en objetivo
```

**Ejemplo - Tracking de máximo durante construcción:**

```typescript
let maxValue = 0;
for (let item of items) {
  processItem(item);
  maxValue = Math.max(maxValue, getCurrentValue(item)); // ¡Optimización!
}
```

**Ventajas:**

- Reduce número de iteraciones
- Mantiene complejidad asintótica óptima
- Código más eficiente sin mayor complejidad

### Record vs Map - Decisiones de Diseño

**Cuándo usar Record:**

```typescript
const freq: Record<number | string, number> = {};
freq[key] = (freq[key] || 0) + 1; // Sintaxis concisa
```

- Claves numéricas o string simples
- Sintaxis más limpia para acceso/modificación
- Menos verboso para operaciones frecuentes
- Familiaridad con objetos JavaScript

**Cuándo usar Map:**

```typescript
const freq = new Map<any, number>();
freq.set(key, (freq.get(key) || 0) + 1);
```

- Claves de tipos complejos (objetos, arrays)
- Necesitas métodos como `.size`, `.keys()`, `.values()`
- Mejor rendimiento para operaciones frecuentes de inserción/eliminación
- Mejor semántica para estructuras de datos

**Para frequency counting:** Ambos funcionan, Record es más conciso para tipos simples.

### Nullish Coalescing (??) vs Logical OR (||)

**Diferencias clave:**

```typescript
// || activa con valores "falsy": null, undefined, 0, "", false, NaN
value = existingValue || defaultValue;

// ?? solo activa con "nullish": null, undefined
value = existingValue ?? defaultValue;
```

**En frequency counting:**

```typescript
// Para este caso, ambos son equivalentes (no manejamos 0 como frecuencia válida)
map[num] = (map[num] || 0) + 1; // Tradicional
map[num] = (map[num] ?? 0) + 1; // Más específico semánticamente
```

**Preferencia:** `??` es más preciso sobre la intención (solo para null/undefined).

### Técnica de Dos Punteros (Two Pointers)

**Definición:** Algoritmo que utiliza dos punteros que se mueven a través de una estructura de datos para resolver problemas de manera eficiente.

**Patrones principales:**

1. **Punteros convergentes:** Se mueven desde extremos opuestos hacia el centro
2. **Punteros paralelos:** Se mueven en la misma dirección con diferentes velocidades
3. **Puntero lento y rápido:** Uno avanza más rápido que el otro

**Cuándo usar:**

- Arrays ordenados para eliminar duplicados
- Búsqueda de pares con suma objetivo
- Problemas de ventana deslizante
- Modificaciones in-place de arrays

**Ejemplo - Remove Duplicates from Sorted Array:**

```typescript
let write = 1; // Puntero para escribir elementos únicos
for (let read = 1; read < nums.length; read++) {
  // Puntero para leer
  if (nums[read] !== nums[read - 1]) {
    nums[write] = nums[read]; // Copiar elemento único
    write++; // Avanzar posición de escritura
  }
}
return write; // Cantidad de elementos únicos
```

**Ventajas:**

- **Eficiencia:** O(n) tiempo vs O(n²) de fuerza bruta
- **Espacio:** O(1) espacio auxiliar
- **Simplicidad:** Código limpio y fácil de entender

**Aplicaciones comunes:**

- Eliminación de duplicados en arrays ordenados
- Merge de arrays ordenados
- Búsqueda de tripletes/pares con suma específica
- Reversión de arrays/strings in-place
- Detección de palindromos

**Complejidad típica:**

- Tiempo: O(n) - una sola pasada
- Espacio: O(1) - solo variables auxiliares

### Two Pointers para Optimización - Container With Most Water

**Definición:** Patrón avanzado de two pointers convergentes donde se mueve el puntero de menor valor para maximizar una función objetivo (área = min(altura) × distancia).

**Problema:** Dado array de alturas, encontrar dos líneas que formen contenedor con máxima agua.

**Solución óptima:**

```typescript
export function maxArea(height: number[]): number {
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;

  while (left < right) {
    const width = right - left;
    const minHeight = Math.min(height[left], height[right]);
    maxArea = Math.max(maxArea, width * minHeight);

    // Movimiento greedy: mover puntero de línea más baja
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
}
```

**¿Por qué funciona el movimiento greedy?**

Si `height[left] < height[right]`:

- Mover `right` no ayuda: ancho disminuye, altura mínima sería `height[left]` (igual o menor)
- Mover `left` busca potencialmente una altura mayor que `height[left]`

**Matemáticamente correcto:**

- Área actual: `min(h[l], h[r]) × (r - l)`
- Después de mover: `min(h[l+1], h[r]) × (r - l - 1)`
- Si `h[l+1] > h[l]`, nueva área podría ser mayor
- Si `h[l+1] ≤ h[l]`, altura mínima no mejora pero ancho disminuye

**Aplicaciones:**

- Problemas de geometría computacional
- Optimización con restricciones de distancia
- Máximo/minimo con productos de factores

**Complejidad:**

- Tiempo: O(n) - una sola pasada convergente
- Espacio: O(1) - variables constantes

### Two Pointers Avanzado - Conteo Múltiple

**Definición:** Técnica avanzada de two pointers que permite contar múltiples combinaciones válidas en una sola iteración, especialmente útil en problemas de tripletas.

**Patrón clave:** Cuando se encuentra una combinación válida en un array ordenado, múltiples elementos adyacentes también pueden ser válidos.

**Ejemplo - Valid Triangle Number:**

```typescript
for (let i = nums.length - 1; i >= 2; i--) {
  let left = 0,
    right = i - 1;

  while (left < right) {
    if (nums[left] + nums[right] > nums[i]) {
      count += right - left; // ¡Múltiples triángulos válidos!
      right--;
    } else {
      left++;
    }
  }
}
```

**¿Por qué funciona el conteo múltiple?**

Si `nums[left] + nums[right] > target`, entonces en un array ordenado:

- `nums[left+1] + nums[right] > target` también (porque `nums[left+1] ≥ nums[left]`)
- `nums[left+2] + nums[right] > target` también
- ... hasta `nums[right-1] + nums[right] > target`
- **Total combinaciones válidas:** `right - left`

**Aplicaciones:**

- Conteo de triángulos válidos (desigualdad triangular)
- 3Sum - conteo de tripletas con suma específica
- Subarray counting problems
- Pair counting con múltiples restricciones

**Ventajas:**

- **Eficiencia:** Evita conteo individual O(n³) → O(n²)
- **Elegancia:** Una sola operación cuenta múltiples casos
- **Generalizable:** Aplica a muchos problemas de conteo en arrays ordenados

**Complejidad:**

- Tiempo: O(n²) - mejor que O(n³) de fuerza bruta
- Espacio: O(1) - solo variables auxiliares

### Desigualdad Triangular

**Definición:** Principio geométrico que establece las condiciones para que tres segmentos puedan formar un triángulo válido.

**Regla:** Para lados `a`, `b`, `c`:

- `a + b > c`
- `a + c > b`
- `b + c > a`

**Optimización con ordenamiento:**

Si ordenamos los lados como `a ≤ b ≤ c`, solo necesitamos verificar `a + b > c`. Las otras dos condiciones se cumplen automáticamente:

- `a + c > b` ✓ (porque `c ≥ b` y `a > 0`)
- `b + c > a` ✓ (porque `b ≥ a` y `c > 0`)

**Implementación eficiente:**

```typescript
nums.sort((a, b) => a - b); // Ordenar primero
// Ahora solo verificar: nums[i] + nums[j] > nums[k] donde i < j < k
```

**Aplicaciones en programación:**

- Validación de triángulos en geometría computacional
- Problemas de conteo combinatorio
- Optimización de verificaciones múltiples

**Ventaja clave:** Reduce 3 comparaciones a 1 sola verificación.

### Sort + Two Pointers - Patrón Híbrido

**Definición:** Combinación de ordenamiento seguido de two pointers para problemas de conteo o búsqueda en tripletas/múltiples elementos.

**Cuándo usar:**

- Problemas que requieren verificar relaciones entre 3+ elementos
- Conteo de combinaciones válidas en arrays
- Problemas geométricos (triángulos, áreas)
- Búsqueda de tripletas con condiciones específicas

**Patrón típico:**

1. **Ordenar** el array: O(n log n)
2. **Fijar uno** de los elementos (bucle externo): O(n)
3. **Two pointers** en el subrango restante: O(n)
4. **Total:** O(n²) - mejor que O(n³) fuerza bruta

**Template de implementación:**

```typescript
function triplePattern(nums: number[]): number {
  nums.sort((a, b) => a - b); // Paso 1: Ordenar
  let count = 0;

  // Paso 2: Fijar elemento (usualmente el más grande)
  for (let i = nums.length - 1; i >= 2; i--) {
    let left = 0,
      right = i - 1;

    // Paso 3: Two pointers
    while (left < right) {
      if (conditionMet(nums[left], nums[right], nums[i])) {
        count += right - left; // Optimización: conteo múltiple
        right--;
      } else {
        left++;
      }
    }
  }
  return count;
}
```

**Ejemplos de aplicación:**

- **3Sum:** Encontrar tripletas que sumen cero
- **Triangle Number:** Contar triángulos válidos
- **3Sum Closest:** Encontrar suma más cercana a target
- **3Sum Smaller:** Contar tripletas con suma menor a target

**Ventajas del patrón:**

- **Eficiencia:** O(n²) vs O(n³) de fuerza bruta
- **Simplicidad:** Código estructurado y predecible
- **Optimización automática:** El ordenamiento permite optimizaciones de conteo
- **Generalizable:** Se adapta a múltiples variaciones del problema

**Microoptimizaciones comunes:**

1. **Espacio:** Modificar array original en lugar de crear copia
2. **Early termination:** Si elementos son 0, terminar anticipadamente
3. **Conteo inteligente:** `count += right - left` en lugar de bucles anidados

### Complejidad Espacial - In-place vs Copy

**Definición:** Decisión de diseño sobre si modificar la entrada original o crear estructuras auxiliares.

**In-place modifications:**

```typescript
nums.sort((a, b) => a - b); // Modifica el array original
// Espacio: O(1) - solo variables auxiliares
```

**Copy approach:**

```typescript
const sortedNums = [...nums].sort((a, b) => a - b); // Crea copia
// Espacio: O(n) - array completo duplicado
```

**Trade-offs:**

| Aspecto          | In-place         | Copy             |
| ---------------- | ---------------- | ---------------- |
| **Espacio**      | O(1)             | O(n)             |
| **Mutabilidad**  | Modifica entrada | Preserva entrada |
| **Performance**  | Mejor            | Peor             |
| **Side effects** | Sí               | No               |

**Cuándo usar cada uno:**

**In-place (preferido para LeetCode):**

- Cuando el problema permite modificar la entrada
- Memory constraints son importantes
- Performance es crítico

**Copy (usar cuando):**

- El array original se necesita después
- Función debe ser pura (sin side effects)
- Debugging requiere comparar antes/después

### Manipulación de Dígitos

**Definición:** Técnicas para extraer, modificar y reconstruir dígitos individuales de números.

**Conversiones típicas:**

```typescript
// Número → Array de dígitos
const digits = num.toString().split("").map(Number);
// Ejemplo: 1234 → [1, 2, 3, 4]

// Array de dígitos → Número
const number = parseInt(digits.join(""), 10);
// Ejemplo: [1, 2, 3, 4] → 1234
```

**Operaciones comunes:**

- **Extraer dígitos:** Convertir a string/array para acceso individual
- **Modificar dígitos:** Cambiar valores específicos en posiciones determinadas
- **Reconstruir número:** Unir dígitos modificados de vuelta a número

**Ejemplo en Maximum 69 Number:**

```typescript
const digits = num.toString().split("").map(Number); // Extraer
for (let i = 0; i < digits.length; i++) {
  if (digits[i] === 6) {
    digits[i] = 9; // Modificar
    break;
  }
}
return parseInt(digits.join(""), 10); // Reconstruir
```

**Aplicaciones:**

- Problemas de maximización/minimización de números
- Palíndromos de números
- Suma de dígitos
- Reverse de números
- Validación de números (credit cards, etc.)

**Complejidad:**

- Tiempo: O(log n) donde n es el número (proporcional a cantidad de dígitos)
- Espacio: O(log n) para almacenar array de dígitos

### Comparación Lexicográfica de Strings

**Definición:** Comparación de strings carácter por carácter siguiendo el orden del diccionario/alfabeto.

**Cómo funciona:**

1. Compara caracteres desde la posición 0
2. En la primera diferencia, el carácter con mayor valor ASCII determina el resultado
3. Si un string es prefijo del otro, el más corto es menor

**Ejemplos prácticos:**

```typescript
"777" > "333"; // true (porque '7' > '3')
"111" > ""; // true (cualquier string no vacío > string vacío)
"abc" > "ab"; // true ("abc" tiene más caracteres)
"apple" < "banana"; // true (porque 'a' === 'a', pero 'p' > 'b' es false)
```

**En strings de dígitos:**

- La comparación lexicográfica mantiene el orden numérico
- `"999" > "888" > "777" > ... > "111" > "000"`
- Esto hace que sea perfecto para encontrar el "máximo" entre strings de dígitos

**Ejemplo en Largest 3-Same-Digit Number:**

```typescript
let best = "";
if (candidate > best) {
  // Comparación lexicográfica automática
  best = candidate;
}
// "777" > "333" → true, entonces best = "777"
```

**Ventajas:**

- Comparación directa sin conversiones numéricas
- Funciona perfectamente para dígitos ordenados
- Sintaxis simple y legible (`string1 > string2`)

**Aplicaciones:**

- Encontrar máximo/mínimo entre strings de dígitos
- Ordenamiento de strings alfanuméricos
- Validación de rangos de strings
- Búsqueda de patrones con orden específico

### Operaciones Matemáticas con Dígitos

**Definición:** Técnicas para extraer, manipular y reconstruir números usando operaciones aritméticas sin convertir a string.

**Operaciones fundamentales:**

```typescript
// Extraer último dígito
const ultimoDigito = numero % 10; // 123 % 10 = 3

// Eliminar último dígito
const sinUltimo = Math.floor(numero / 10); // Math.floor(123 / 10) = 12

// Agregar dígito al final
const nuevo = numero * 10 + digito; // 12 * 10 + 5 = 125

// Contar dígitos
let contador = 0;
let temp = numero;
while (temp > 0) {
  contador++;
  temp = Math.floor(temp / 10);
}
```

**Patrón de reversión numérica:**

```typescript
// Revertir número: 123 → 321
let reverse = 0;
let num = original;
while (num !== 0) {
  reverse = reverse * 10 + (num % 10); // Construir reverso
  num = Math.floor(num / 10); // Eliminar dígito procesado
}
```

**Ejemplo paso a paso (123 → 321):**

- Iter 1: reverse = 0\*10 + 3 = 3, num = 12
- Iter 2: reverse = 3\*10 + 2 = 32, num = 1
- Iter 3: reverse = 32\*10 + 1 = 321, num = 0

**Aplicaciones:**

- Palindrome Number (comparar número con su reverso)
- Reverse Integer (revertir dígitos de un número)
- Sum of Digits (sumar todos los dígitos)
- Number to Words (procesar número dígito por dígito)
- **Add Two Numbers en Linked Lists:** Aritmética con carry (ver sección Linked Lists → Aritmética)

**Ventajas sobre conversión a string:**

- Más eficiente en memoria
- Evita conversiones de tipo
- Operaciones matemáticas directas
- Cumple restricciones de "sin usar strings"

**Complejidad típica:**

- Tiempo: O(log n) donde n es el número (cantidad de dígitos)
- Espacio: O(1) solo variables auxiliares

**Extensión a Estructuras de Datos:**

- Para números muy grandes: usar arrays o linked lists
- Carry propagation en suma de números de múltiples dígitos
- Ver sección "Linked Lists → Aritmética en Linked Lists" para implementaciones detalladas

---

## Algoritmos y Estrategias

### Algoritmo Greedy (Avaro)

**Definición:** Estrategia que toma la decisión óptima local en cada paso, sin considerar las consecuencias futuras.

**Características:**

- Toma decisiones irrevocables
- Busca la solución "más inmediata"
- No siempre garantiza la solución óptima global

**Ejemplo en Fruits Into Baskets II:**

- Siempre elegimos la primera canasta disponible que tenga capacidad suficiente
- No consideramos si esa canasta podría ser mejor para una fruta futura

**Cuándo es efectivo:**

- Cuando la decisión local óptima lleva a la global óptima
- Problemas de asignación con restricciones simples
- Cuando el costo de analizar todas las opciones es prohibitivo

### Simulación Paso a Paso

**Definición:** Implementar directamente las reglas del problema, reproduciéndolas en código.

**Ventajas:**

- Fácil de entender y debuggear
- Refleja exactamente el enunciado del problema
- Menos propenso a errores de lógica

**Proceso:**

1. Identificar cada regla del problema
2. Traducir cada regla a código
3. Mantener el estado necesario entre pasos
4. Ejecutar secuencialmente

### Búsqueda por Complementos

**Definición:** Técnica donde buscamos el "complemento" de un elemento para satisfacer una condición.

**Concepto clave:**

- Si tenemos `x` y necesitamos suma `target`, buscamos `target - x`

**Algoritmo típico:**

1. Para cada elemento, calcular el complemento necesario
2. Verificar si el complemento ya existe (usando hash map)
3. Si existe: problema resuelto
4. Si no: guardar el elemento actual para futuras búsquedas

**Ejemplo en Two Sum:**

```typescript
const complement = target - nums[i];
if (seen.has(complement)) {
  return [seen.get(complement), i]; // ¡Encontrado!
}
seen.set(nums[i], i); // Guardar para el futuro
```

**Aplicaciones:**

- Two Sum, 3Sum, 4Sum
- Problemas de pares que cumplen condiciones
- Búsqueda de elementos relacionados matemáticamente

**Ventaja principal:** Convierte búsqueda O(n) en O(1) usando espacio adicional.

### Ordenamiento como Optimización

**Definición:** Usar el ordenamiento de datos como paso previo para simplificar el algoritmo principal.

**Principio clave:**

- El ordenamiento puede revelar propiedades que simplifican comparaciones posteriores

**Ejemplo en Longest Common Prefix:**

```typescript
let sortedArray = strs.sort(); // Ordenamiento alfabético
let firstString = sortedArray[0];
let lastString = sortedArray[sortedArray.length - 1];
// Solo necesitamos comparar estos dos extremos
```

**¿Por qué funciona?**

- Si el string lexicográficamente menor y mayor comparten un prefijo
- Entonces todos los strings intermedios también lo comparten
- Reduce comparaciones de O(n) strings a solo 2

**Cuándo aplicar:**

- Problemas de comparación entre múltiples elementos
- Búsqueda de propiedades comunes
- Cuando el ordenamiento revela patrones útiles

**Trade-off:**

- **Costo:** O(n log n) por el ordenamiento
- **Beneficio:** Simplifica algoritmo principal significativamente

**Otras aplicaciones:**

- Encontrar medianas
- Detectar duplicados adyacentes
- Problemas de intervalos

### Break Temprano en Bucles

**Definición:** Técnica de terminar un bucle tan pronto como se encuentra la condición deseada o se determina que es imposible continuar.

**Cuándo usar:**

- Cuando encontramos lo que buscamos
- Cuando sabemos que no vale la pena seguir iterando
- Para optimizar casos donde la respuesta se encuentra temprano

**Ejemplo en Longest Common Prefix:**

```typescript
for (let i = 0; i < limit; i++) {
  if (firstString[i] !== lastString[i]) break; // ¡Break temprano!
  commonPrefix += firstString[i];
}
```

**Ejemplo en búsquedas:**

```typescript
for (let i = 0; i < array.length; i++) {
  if (array[i] === target) {
    return i; // Encontrado, no necesitamos seguir
  }
}
```

**Beneficios:**

- Mejora significativa en el caso promedio
- Reduce operaciones innecesarias
- Especialmente útil en strings/arrays grandes

**Patrones comunes:**

- `break` - salir del bucle completamente
- `return` - salir de la función (implica break)
- `continue` - saltar a la siguiente iteración

**Aplicaciones:**

- Comparación de strings carácter por carácter
- Búsqueda lineal con condición de parada
- Validación que puede fallar temprano

### Early Termination con Óptimo Absoluto

**Definición:** Técnica de terminar algoritmo inmediatamente al encontrar el valor óptimo absoluto conocido.

**Cuándo aplicar:**

- Cuando conocemos cuál es el máximo/mínimo teórico posible
- El costo de verificar si encontramos el óptimo es menor que continuar buscando
- En problemas de optimización con límites conocidos

**Ejemplo en Largest 3-Same-Digit Number:**

```typescript
if (candidate === "999") {
  return "999"; // Máximo absoluto posible, no puede haber nada mejor
}
```

**Otros ejemplos:**

```typescript
// Búsqueda de máximo en array de dígitos
if (currentMax === 9) {
  return 9; // No puede haber dígito mayor
}

// Problema de suma objetivo
if (currentSum === target) {
  return true; // Encontramos exactamente lo que buscábamos
}

// Validación de formato
if (isValidFormat && meetsAllCriteria) {
  return result; // Ya cumple todos los requisitos
}
```

**Beneficios:**

- **Eficiencia:** Evita búsquedas innecesarias
- **Predictibilidad:** Mejora el caso promedio de forma garantizada
- **Claridad:** Expresa explícitamente cuándo el problema está resuelto

**Diferencia con Break Temprano regular:**

- **Break regular:** Para cuando encuentra UNA solución válida
- **Óptimo absoluto:** Para cuando encuentra LA MEJOR solución posible

**Aplicaciones:**

- Problemas de maximización con límites conocidos
- Búsqueda de valores en rangos específicos
- Optimización donde conocemos el resultado ideal

### Verificación de Palindromos Numéricos

**Definición:** Algoritmo para determinar si un número se lee igual hacia adelante y hacia atrás usando solo matemáticas.

**Estrategia principal:** Revertir el número matemáticamente y comparar con el original.

**Algoritmo base:**

```typescript
function isPalindrome(x: number): boolean {
  // 1. Descarte rápido de casos obvios
  if (x < 0) return false; // Negativos nunca son palindromos

  // 2. Reversión matemática
  let reverse = 0;
  let num = x;

  while (num !== 0) {
    reverse = reverse * 10 + (num % 10); // Construir reverso
    num = Math.floor(num / 10); // Eliminar último dígito
  }

  // 3. Comparación final
  return reverse === x;
}
```

**Casos de descarte rápido:**

- **Números negativos:** -121 ≠ 121- (nunca palindromos)
- **Números > 0 terminados en 0:** Solo el 0 puede ser palindromo terminando en 0

**Optimización: Reversión parcial (avanzado):**

```typescript
// Solo revertir la mitad para evitar overflow
function isPalindromeOptimized(x: number): boolean {
  if (x < 0 || (x % 10 === 0 && x !== 0)) return false;

  let revertedHalf = 0;
  while (x > revertedHalf) {
    revertedHalf = revertedHalf * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  // Para números pares: x === revertedHalf
  // Para números impares: x === Math.floor(revertedHalf / 10)
  return x === revertedHalf || x === Math.floor(revertedHalf / 10);
}
```

**Ventajas sobre conversión a string:**

- Sin asignación de memoria para strings
- Más eficiente computacionalmente
- Cumple restricciones de "solo matemáticas"

**Aplicaciones:**

- Palindrome Number (LeetCode 9)
- Validación de números con simetría
- Problemas de reversión numérica
- Verificación de patrones en dígitos

### Análisis de Impacto Posicional

**Definición:** Estrategia que considera la importancia relativa de cada posición en una estructura secuencial.

**Principio clave:**

- En números: los dígitos más a la izquierda tienen mayor valor posicional
- En arrays: las posiciones pueden tener diferentes pesos o importancia

**Ejemplo en Maximum 69 Number:**

```typescript
// Impacto de cambiar 6→9 según posición:
// 6999 → 9999 (+3000) - posición más significativa
// 9699 → 9999 (+300)  - segunda posición
// 9969 → 9999 (+30)   - tercera posición
// 9996 → 9999 (+3)    - posición menos significativa

// Algoritmo greedy: cambiar el primer 6 (mayor impacto)
for (let i = 0; i < digits.length; i++) {
  if (digits[i] === 6) {
    digits[i] = 9; // Máximo impacto posicional
    break;
  }
}
```

**Aplicaciones:**

- Maximización/minimización de números por dígitos
- Problemas de intercambio de elementos (Maximum Swap)
- Algoritmos de ordenamiento estable
- Priorización por posición en colas/stacks

---

## Análisis de Complejidad

### Complejidad Temporal O(n²)

**Cuándo aparece:**

- Bucles anidados sobre el mismo conjunto de datos
- Comparar cada elemento con todos los demás
- Algoritmos de búsqueda exhaustiva

**Ejemplo:**

```typescript
for (let i = 0; i < n; i++) {
  // O(n)
  for (let j = 0; j < n; j++) {
    // O(n)
    // Operación O(1)
  }
}
// Total: O(n²)
```

**Cuándo es aceptable:**

- Problemas con n ≤ 1000 aproximadamente
- Cuando la simplicidad es más importante que la eficiencia
- Como primera aproximación antes de optimizar

### Complejidad Temporal O(n) - Una Pasada

**Definición:** Algoritmos que resuelven el problema recorriendo los datos una sola vez.

**Características:**

- Muy eficiente para arrays grandes
- Generalmente usa espacio adicional O(n)
- Patrón común: hash map + una iteración

**Ejemplo en Two Sum:**

```typescript
for (let i = 0; i < nums.length; i++) {
  // O(n)
  const complement = target - nums[i];
  if (seen.has(complement)) {
    // O(1) promedio
    return [seen.get(complement)!, i];
  }
  seen.set(nums[i], i); // O(1) promedio
}
// Total: O(n)
```

**Trade-off típico:**

- **Tiempo:** Mejora de O(n²) a O(n)
- **Espacio:** Aumenta de O(1) a O(n)

**Cuándo preferir:**

- Arrays grandes (n > 1000)
- Cuando el espacio adicional no es limitante
- Cuando el rendimiento es crítico

### Complejidad Temporal O(n log n + m) - Ordenamiento + Procesamiento

**Definición:** Algoritmos que primero ordenan los datos y luego realizan procesamiento adicional.

**Estructura típica:**

```typescript
const sorted = array.sort(); // O(n log n)
// Procesamiento optimizado: O(m)
// Total: O(n log n + m)
```

**Ejemplo en Longest Common Prefix:**

```typescript
let sortedArray = strs.sort(); // O(S * log n) donde S = suma de caracteres
for (let i = 0; i < limit; i++) {
  // O(m) donde m = longitud del prefijo
  if (firstString[i] !== lastString[i]) break;
  commonPrefix += firstString[i];
}
// Total: O(S * log n + m)
```

**Cuándo es efectivo:**

- Cuando el ordenamiento simplifica significativamente el algoritmo principal
- El costo O(n log n) se compensa con la simplificación posterior
- Problemas donde propiedades del ordenamiento son útiles

**Trade-off:**

- **Costo:** O(n log n) inicial por ordenamiento
- **Beneficio:** Algoritmo principal más simple y eficiente
- **Resultado:** Mejor que soluciones O(n²) ingenuas

**Otros ejemplos:**

- Detección de duplicados: O(n log n) vs O(n²)
- Problemas de intervalos: ordenar por inicio/fin
- Búsqueda de medianas

### Complejidad Temporal O(log n) - Logarítmica

**Definición:** Algoritmos cuyo tiempo de ejecución es proporcional al logaritmo del tamaño de entrada.

**Características:**

- Muy eficiente incluso para inputs grandes
- Común en problemas relacionados con dígitos de números
- También aparece en árboles balanceados y búsqueda binaria

**¿Por qué O(log n) en problemas de dígitos?**

- El número de dígitos de un número n es ⌊log₁₀(n)⌋ + 1
- Procesar cada dígito individualmente → O(log n)

**Ejemplo en Maximum 69 Number:**

```typescript
const digits = num.toString().split("").map(Number); // O(log n)
for (let i = 0; i < digits.length; i++) {
  // log n iteraciones
  if (digits[i] === 6) {
    digits[i] = 9;
    break; // O(1) por iteración
  }
}
return parseInt(digits.join(""), 10); // O(log n)
// Total: O(log n)
```

**Otros ejemplos:**

- Reverse Integer: procesar cada dígito
- Palindrome Number: comparar dígitos desde extremos
- Power of Three: división repetida por 3
- Factorial Trailing Zeroes: análisis de factores

**Ventajas:**

- Escala muy bien (log 1,000,000 ≈ 6)
- Prácticamente constante para inputs típicos
- Más eficiente que O(n) para la mayoría de problemas

**Cuándo aparece:**

- Manipulación de dígitos individuales
- Algoritmos de división y conquista
- Búsquedas en estructuras logarítmicas

### Complejidad Espacial Adicional

**Definición:** Memoria extra utilizada además de la entrada.

**En nuestro ejemplo:**

- Array auxiliar: O(n) para el número de canastas
- Variables adicionales: O(1)
- **Total:** O(n)

---

## Patrones de Resolución

### Patrón: Asignación con Restricciones

**Estructura común:**

1. Iterar sobre elementos a asignar
2. Para cada elemento, buscar destino válido
3. Marcar destino como usado
4. Contar asignaciones fallidas

**Aplicaciones:**

- Asignación de recursos limitados
- Problemas de matching
- Distribución con restricciones

### Patrón: Estado Persistente Entre Iteraciones

**Concepto:** Mantener información que afecta iteraciones futuras.

**Implementación:**

- Estructuras auxiliares que no se reinician
- Variables de estado que acumulan información
- Decisiones que afectan opciones futuras

### Patrón: Hash Map para Búsqueda Rápida

**Estructura típica:**

1. Crear hash map vacío
2. Para cada elemento en la entrada:
   - Calcular lo que necesitamos encontrar
   - Verificar si ya existe en el map
   - Si existe: resolver y retornar
   - Si no: agregar elemento actual al map
3. Continuar hasta encontrar solución

**Código base:**

```typescript
const seen = new Map();
for (let i = 0; i < array.length; i++) {
  const needed = calculateNeeded(array[i]);
  if (seen.has(needed)) {
    return [seen.get(needed), i];
  }
  seen.set(array[i], i);
}
```

**Aplicaciones:**

- Two Sum (buscar complemento)
- Encontrar duplicados
- Verificar existencia de elementos relacionados
- Problemas de pares/grupos con condiciones

**Ventaja clave:** Transforma problema O(n²) en O(n) usando espacio O(n).

### Patrón: Comparación Optimizada de Strings

**Problema típico:** Encontrar propiedades comunes entre múltiples strings.

**Estructura del patrón:**

1. **Optimización previa:** Ordenar o preprocesar strings si es beneficioso
2. **Identificar extremos:** Encontrar los strings que definen los límites del problema
3. **Comparación eficiente:** Solo comparar los elementos críticos
4. **Break temprano:** Parar tan pronto como se encuentre una diferencia

**Código base:**

```typescript
function findCommonProperty(strings: string[]): string {
  // 1. Optimización previa
  const sorted = strings.sort();

  // 2. Identificar extremos
  const first = sorted[0];
  const last = sorted[sorted.length - 1];

  // 3. Comparación eficiente
  let result = "";
  const limit = Math.min(first.length, last.length);

  for (let i = 0; i < limit; i++) {
    if (first[i] !== last[i]) break; // 4. Break temprano
    result += first[i];
  }

  return result;
}
```

**Aplicaciones:**

- Longest Common Prefix
- Encontrar caracteres comunes
- Análisis de similitud entre strings
- Problemas de prefijos/sufijos comunes

**Ventaja:** Reduce comparaciones de O(n) elementos a O(2) usando propiedades del ordenamiento.

### Patrón: Optimización Greedy de Dígitos

**Problema típico:** Maximizar/minimizar un número cambiando el mínimo de dígitos.

**Estructura del patrón:**

1. **Convertir** número a formato manipulable (array de dígitos)
2. **Análisis posicional** - identificar qué cambios tienen mayor impacto
3. **Aplicar greedy** - hacer el cambio de mayor beneficio primero
4. **Break temprano** - parar al alcanzar límite de cambios
5. **Reconstruir** número final

**Código base:**

```typescript
function optimizeDigits(num: number): number {
  // 1. Convertir a dígitos
  const digits = num.toString().split("").map(Number);

  // 2. Buscar posición de mayor impacto (greedy)
  for (let i = 0; i < digits.length; i++) {
    if (shouldChange(digits[i])) {
      digits[i] = getOptimalValue(digits[i]); // 3. Aplicar cambio
      break; // 4. Break temprano (máximo un cambio)
    }
  }

  // 5. Reconstruir
  return parseInt(digits.join(""), 10);
}
```

**Ejemplo en Maximum 69 Number:**

```typescript
// shouldChange = (digit === 6)
// getOptimalValue = (6 → 9, maximizar)
// Solo cambiar el primer 6 encontrado (mayor impacto posicional)
```

**Aplicaciones:**

- Maximum 69 Number (cambiar 6→9)
- Maximum Swap (intercambiar dos dígitos)
- Next Greater Element (encontrar siguiente número mayor)
- Minimum Number by Removing K Digits

**Ventajas del patrón:**

- **Eficiencia:** O(log n) en lugar de O(n!) para todas las permutaciones
- **Simplicidad:** Lógica greedy clara y directa
- **Flexibilidad:** Fácil adaptar para diferentes reglas de optimización

### Patrón: Detección de Secuencias en Strings

**Problema típico:** Encontrar subcadenas que cumplan un patrón específico (repetición, suma, condición).

**Estructura del patrón:**

1. **Sliding Window** de tamaño fijo para examinar subcadenas
2. **Validación** rápida de condición en cada ventana
3. **Comparación** para mantener la mejor solución encontrada
4. **Early termination** si se encuentra el óptimo absoluto

**Código base:**

```typescript
function findBestPattern(s: string, windowSize: number): string {
  let best = "";

  for (let i = 0; i <= s.length - windowSize; i++) {
    // Extraer ventana actual
    const window = s.slice(i, i + windowSize);

    // Validar si cumple el patrón
    if (isValidPattern(window)) {
      // Early termination si encontramos el máximo absoluto
      if (isAbsoluteOptimum(window)) {
        return window;
      }

      // Actualizar mejor solución
      if (isBetterThan(window, best)) {
        best = window;
      }
    }
  }

  return best;
}
```

**Ejemplo en Largest 3-Same-Digit Number:**

```typescript
// windowSize = 3
// isValidPattern = (todos los caracteres iguales)
// isBetterThan = (comparación lexicográfica)
// isAbsoluteOptimum = (window === "999")
```

**Aplicaciones:**

- Largest 3-Same-Digit Number (dígitos repetidos)
- Longest Palindromic Substring (palíndromos)
- Substring with Given Sum (suma específica)
- Valid Parentheses Sequences (balance de paréntesis)

**Optimizaciones comunes:**

- **Comparación directa:** Evitar crear substrings para validación
- **Early exit:** Retornar al encontrar máximo teórico
- **Comparación lexicográfica:** Para strings de dígitos ordenados

### Series Aritméticas y Reconocimiento de Patrones

**Definición:** Técnica para identificar patrones matemáticos en problemas que permiten calcular sumas de manera eficiente usando fórmulas cerradas en lugar de iteraciones.

#### Problema: Calculate Money in LeetCode Bank

**Patrón identificado:**

- Semana 1: 1+2+3+4+5+6+7 = 28
- Semana 2: 2+3+4+5+6+7+8 = 35
- Semana 3: 3+4+5+6+7+8+9 = 42
- Patrón: suma = 7 × (semana + 1) / 2 + 21

**Fórmula derivada:**

- Suma de semana k: 7 × (k + 1) / 2 + 21
- Suma total de m semanas completas: m × (7 × (m + 1) / 2 + 21)

**Implementación eficiente:**

```typescript
const completeWeeks = Math.floor(n / 7);
const remainingDays = n % 7;

// Suma de semanas completas usando fórmula cerrada
const completeWeeksSum = completeWeeks * ((7 * (completeWeeks + 1)) / 2 + 21);

// Suma de días restantes con loop simple
let remainingDaysSum = 0;
const baseWeek = completeWeeks + 1;
for (let day = 1; day <= remainingDays; day++) {
  remainingDaysSum += baseWeek + day - 1;
}

return completeWeeksSum + remainingDaysSum;
```

**Complejidad:** O(1) tiempo, O(1) espacio

**Lecciones aprendidas:**

- Reconocimiento de patrones reduce complejidad de O(n) a O(1)
- Fórmulas aritméticas evitan iteraciones costosas
- Combinar fórmulas cerradas con loops simples para casos restantes
- Importancia de debugging de precisión decimal en cálculos enteros

# Conceptos y Algoritmos - Apuntes de LeetCode

Este archivo contiene los conceptos fundamentales de programación y algoritmos que vamos encontrando al resolver problemas de LeetCode.

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

**Definición:** Estructura de datos que mapea claves a valores con acceso promedio O(1).

**En TypeScript:**

```typescript
const seen = new Map<number, number>(); // valor -> índice
```

**Cuándo usar:**

- Búsqueda rápida de elementos previamente vistos
- Almacenar relaciones clave-valor
- Evitar bucles anidados en problemas de búsqueda

**Operaciones principales:**

- `map.set(key, value)` - Insertar/actualizar O(1)
- `map.has(key)` - Verificar existencia O(1)
- `map.get(key)` - Obtener valor O(1)

**Ejemplo del problema Two Sum:**

```typescript
const complement = target - currentNum;
if (seen.has(complement)) {
  return [seen.get(complement)!, i];
}
seen.set(currentNum, i);
```

**Ventajas:**

- Convierte algoritmos O(n²) en O(n)
- API clara y expresiva
- Manejo automático de colisiones

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
  return [seen.get(complement)!, i]; // ¡Encontrado!
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

**Conexión con Greedy:**

- La decisión óptima local (primera posición) garantiza óptimo global
- Evita analizar todas las combinaciones posibles
- Complejidad O(n) en lugar de O(n!) para permutaciones

**Otros contextos:**

- **Strings:** Prefijos tienen mayor peso que sufijos
- **Arrays:** Índices bajos pueden ser prioritarios
- **Matrices:** Esquinas o bordes con importancia especial

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

- Array auxiliar: O(n) donde n es el número de canastas
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

### Patrón: Manipulación Matemática de Números

**Problema típico:** Procesar, validar o transformar números sin convertir a string.

**Estructura del patrón:**

1. **Descarte rápido** de casos triviales o inválidos
2. **Procesamiento dígito por dígito** usando módulo y división
3. **Construcción/validación** del resultado usando operaciones matemáticas
4. **Comparación final** o retorno del resultado procesado

**Código base:**

```typescript
function processNumber(n: number): ResultType {
  // 1. Descarte rápido
  if (hasObviousResult(n)) {
    return quickResult(n);
  }

  // 2. Inicializar variables de procesamiento
  let result = 0;
  let temp = n;

  // 3. Procesar dígito por dígito
  while (temp !== 0) {
    const digit = temp % 10; // Extraer último dígito
    result = buildResult(result, digit); // Construir resultado
    temp = Math.floor(temp / 10); // Eliminar dígito procesado
  }

  // 4. Validación/comparación final
  return validateResult(result, n);
}
```

**Ejemplo en Palindrome Number:**

```typescript
// hasObviousResult = (n < 0)
// buildResult = (reverse * 10 + digit)
// validateResult = (reverse === original)
```

**Operaciones fundamentales reutilizables:**

```typescript
// Patrón de reversión
const reversed = reverseNumber(num);

// Patrón de suma de dígitos
const sum = sumOfDigits(num);

// Patrón de conteo de dígitos
const count = countDigits(num);
```

**Aplicaciones:**

- Palindrome Number (revertir y comparar)
- Reverse Integer (revertir con manejo de overflow)
- Sum of Digits/Digital Root (sumar dígitos iterativamente)
- Happy Number (detectar ciclos en suma de cuadrados)
- Add Digits (reducir a un solo dígito)

**Ventajas del patrón:**

- **Sin conversiones:** Evita overhead de string/array
- **Eficiencia:** O(log n) tiempo, O(1) espacio
- **Flexibilidad:** Fácil adaptar para diferentes transformaciones
- **Claridad:** Expresa intent matemático directamente

---

## Reflexiones para Entrevistas

### Proceso de Análisis

1. **Entender completamente el problema**
2. **Identificar las restricciones**
3. **Elegir estructuras de datos apropiadas**
4. **Implementar simulación directa**
5. **Analizar complejidad**
6. **Considerar optimizaciones si es necesario**

### Preguntas de Seguimiento Típicas

- "¿Cómo optimizarías para arrays más grandes?"
- "¿Qué pasa si las restricciones cambian?"
- "¿Hay alguna estructura de datos que mejore la eficiencia?"

---

## Bit Manipulation y Potencias de Dos

### Propiedad Fundamental

Una potencia de dos en binario tiene exactamente un bit en 1. Ejemplos:

```
1  -> 0001
2  -> 0010
4  -> 0100
8  -> 1000
```

### Chequeo O(1) de Potencia de Dos

Usando la expresión: `n > 0 && (n & (n - 1)) === 0`

### ¿Por qué funciona?

Restar 1 a una potencia de dos invierte todos los bits desde el bit activo hacia la derecha. El AND resultante siempre es 0.

Ejemplo:

```
8 = 1000
7 = 0111
8 & 7 = 0000
```

### Alternativas

- División iterativa por 2 hasta llegar a 1 (O(log n))
- Logaritmos: `log2(n)` y comprobar entero (problemas de precisión)
- Contar bits en 1 (popcount == 1)

### Edge Cases

- n <= 0 → nunca potencia de dos
- n = 1 → true (2^0)
- Valores grandes cercanos a potencias: 2^k - 1 y 2^k + 1

### Aplicaciones Comunes

- Redimensionamiento de tablas hash
- Alineación de memoria
- Optimizaciones de máscaras de bits
- Fast modulo (x & (m - 1)) cuando m es potencia de dos

---

## Método del Número Mágico para Potencias de Primos

### Concepto Fundamental

**Para detectar potencias de un primo p**: Usar la mayor potencia de p que cabe en el rango de enteros.

**Principio matemático**: Si n es potencia de p, entonces p^max es divisible por n.

### Implementación del Patrón

```typescript
function isPowerOfPrime(n: number, prime: number, maxPower: number): boolean {
  if (n <= 0) return false;
  const magicNumber = Math.pow(prime, maxPower);
  return magicNumber % n === 0;
}
```

### Ejemplo: Power of Three

```typescript
function isPowerOfThree(n: number): boolean {
  if (n <= 0) return false;
  const maxPowerOfThree = Math.pow(3, 19); // 1162261467 para int32
  return maxPowerOfThree % n === 0;
}
```

**¿Por qué 3^19?** Porque 3^20 = 3,486,784,401 > 2^31-1 (límite int32)

### Factorización Prima - Clave del Éxito

**¿Por qué funciona?**

- 3^19 = 3×3×3×...×3 (19 factores de 3)
- Si n = 3^k (k ≤ 19), entonces 3^19 ÷ 3^k = 3^(19-k) = entero
- Si n tiene otros factores primos, la división no es exacta

**Ejemplos:**

```typescript
// Potencias válidas
1162261467 % 1 === 0   ✓ (3^0)
1162261467 % 3 === 0   ✓ (3^1)
1162261467 % 27 === 0  ✓ (3^3)

// Múltiplos NO potencias
1162261467 % 6 === 3   ✗ (6 = 2×3, tiene factor 2)
1162261467 % 15 === 12 ✗ (15 = 3×5, tiene factor 5)
```

### Ventajas del Método

| Aspecto              | Método Mágico | División Iterativa |
| -------------------- | ------------- | ------------------ |
| **Tiempo**           | O(1)          | O(log n)           |
| **Espacio**          | O(1)          | O(1)               |
| **Elegancia**        | ⭐⭐⭐⭐⭐    | ⭐⭐⭐             |
| **Comprensibilidad** | ⭐⭐⭐        | ⭐⭐⭐⭐⭐         |

### Aplicabilidad del Patrón

**Funciona para cualquier primo:**

- **Power of 2**: 2^30 para int32 (pero bit manipulation es mejor)
- **Power of 3**: 3^19 para int32 ✓
- **Power of 5**: 5^13 para int32
- **Power of 7**: 7^10 para int32

**NO funciona para compuestos:**

- Power of 4: Necesita verificación adicional (potencia de 2 + restricción)
- Power of 6: No es primo, no hay "número mágico" único

### Consideraciones de Implementación

**Cálculo de máxima potencia:**

```typescript
// Para encontrar la máxima potencia de p en rango
let maxPower = 0;
let value = 1;
while (value <= MAX_INT / prime) {
  value *= prime;
  maxPower++;
}
// maxPower es la mayor potencia que cabe
```

**Edge cases importantes:**

- n = 1: Siempre potencia (p^0 = 1) ✓
- n ≤ 0: Nunca potencia positiva ✗
- n = prime: Primera potencia no trivial ✓

---

## Optimización Matemática vs Claridad

### Cuándo Usar Cada Enfoque

**Método del número mágico:**

- ✅ Cuando la eficiencia O(1) es crítica
- ✅ Para mostrar conocimiento matemático profundo
- ✅ Responde a preguntas de seguimiento sobre optimización

**División iterativa:**

- ✅ Para explicación inicial e intuición
- ✅ Cuando la legibilidad es prioritaria
- ✅ Fácil de extender a otros casos

**Recursión:**

- ✅ Para demostrar comprensión de recursión
- ❌ Usa stack adicional O(log n)
- ❌ Menos eficiente en práctica

### Patrón de Entrevista Técnica

1. **Empezar simple**: División iterativa para mostrar comprensión
2. **Mencionar optimización**: "¿Podemos hacerlo sin bucles?"
3. **Explicar número mágico**: Demostrar conocimiento avanzado
4. **Comparar enfoques**: Mostrar análisis de trade-offs

---

## Linked Lists (Listas Enlazadas)

### Concepto Fundamental

**Definición:** Estructura de datos lineal donde cada elemento (nodo) contiene un valor y una referencia al siguiente elemento.

```typescript
class ListNode {
  val: number;
  next: ListNode | null;
}
```

### Diferencias con Arrays

| Aspecto       | Array                  | Linked List              |
| ------------- | ---------------------- | ------------------------ |
| **Acceso**    | O(1) por índice        | O(n) secuencial          |
| **Inserción** | O(n) (shift elementos) | O(1) (si tienes el nodo) |
| **Memoria**   | Contigua               | Dispersa                 |
| **Cache**     | Mejor localidad        | Peor localidad           |

### Patrones Fundamentales

#### 1. Nodo Dummy (Nodo Ficticio)

**Problema que resuelve:** Simplifica operaciones al eliminar casos especiales para el primer elemento.

```typescript
const dummy = new ListNode(0); // Valor irrelevante
let current = dummy;

// Construir lista sin casos especiales
while (/* condición */) {
  current.next = nuevoNodo;
  current = current.next;
}

return dummy.next; // Saltar el nodo dummy
```

**Cuándo usar:**

- Construcción de nuevas listas
- Operaciones de merge/split
- Inserción al inicio

#### 2. Dos Punteros

**Problema que resuelve:** Procesar dos listas simultáneamente o encontrar patrones específicos.

```typescript
let p1 = list1;
let p2 = list2;

while (p1 && p2) {
  // Comparar p1.val con p2.val
  // Avanzar el puntero apropiado
}
```

**Aplicaciones:**

- Merge de listas ordenadas
- Detectar ciclos (slow/fast)
- Encontrar intersecciones

#### 3. Recorrido Básico

```typescript
let current = head;
while (current !== null) {
  // Procesar current.val
  current = current.next;
}
```

### Problema: Merge Two Sorted Lists

**Estrategia:** Algoritmo de merge similar al usado en Merge Sort.

```typescript
export function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  const dummy = new ListNode(0);
  let current = dummy;

  // Merge principal: elegir el menor en cada paso
  while (list1 && list2) {
    if (list1.val <= list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }

  // Conectar remanente (una lista ya se agotó)
  current.next = list1 || list2;

  return dummy.next;
}
```

**Por qué funciona:**

1. **Greedy choice:** Elegir siempre el menor elemento es óptimo
2. **Invariante:** La lista resultado siempre está ordenada
3. **Casos edge:** Listas vacías se manejan naturalmente

### Conceptos Algorítmicos

#### Merge de Secuencias Ordenadas

**Patrón universal** usado en:

- Merge Sort
- Merge múltiples listas
- Operaciones en estructuras ordenadas

**Complejidad:**

- Tiempo: O(n + m)
- Espacio: O(1) si reutilizamos nodos

#### Reutilización vs Creación de Nodos

**Reutilización (preferida):**

```typescript
current.next = existingNode; // Reconectar
```

**Creación nueva:**

```typescript
current.next = new ListNode(value); // Más memoria
```

### Edge Cases Comunes

1. **Una o ambas listas vacías**

   - `list1 = null, list2 = [1,2,3]` → retornar `list2`
   - `list1 = null, list2 = null` → retornar `null`

2. **Listas de diferentes tamaños**

   - Manejar remanentes con `current.next = list1 || list2`

3. **Valores duplicados**
   - Usar `<=` para mantener estabilidad del algoritmo

### Aplicaciones Relacionadas

- **Merge k Sorted Lists:** Extensión usando heap o divide & conquer
- **Add Two Numbers:** Suma con carry en listas enlazadas
- **Remove Duplicates:** Uso de punteros para eliminar nodos
- **Reverse Linked List:** Inversión de direcciones de punteros

### Aritmética en Linked Lists

**Concepto:** Realizar operaciones matemáticas usando linked lists como representación de números.

#### Problema: Add Two Numbers (LeetCode 2)

**Escenario:** Números almacenados en orden reverso, un dígito por nodo.

- `342` se representa como `[2,4,3]`
- `465` se representa como `[5,6,4]`
- Suma: `342 + 465 = 807` → `[7,0,8]`

**Ventaja del orden reverso:** Permite procesamiento natural de menor a mayor significancia, facilitando la propagación de carry.

#### Patrón: Simulación de Suma Manual

```typescript
export function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  const dummyHead = new ListNode(0);
  let current = dummyHead;
  let carry = 0;

  // Loop unificado: maneja nodos y carry final
  while (l1 !== null || l2 !== null || carry !== 0) {
    // Tratar nodos null como 0
    const val1 = l1 ? l1.val : 0;
    const val2 = l2 ? l2.val : 0;

    // Aritmética de carry
    const total = val1 + val2 + carry;
    const digit = total % 10;
    carry = total >= 10 ? 1 : 0;

    // Construcción incremental
    current.next = new ListNode(digit);
    current = current.next;

    // Avance seguro
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  return dummyHead.next;
}
```

#### Técnicas Clave de Aritmética

**1. Manejo Unificado de Null:**

```typescript
const val1 = l1 ? l1.val : 0; // Tratar null como 0
```

- Permite listas de diferentes longitudes
- Simplifica la lógica del algoritmo
- Evita casos especiales múltiples

**2. Condición de Loop Integral:**

```typescript
while (l1 !== null || l2 !== null || carry !== 0)
```

- Cubre todos los escenarios en una condición
- Maneja carry final automáticamente
- Ejemplo: `99 + 1 = 100` necesita iteración extra para carry

**3. Aritmética de Carry Optimizada:**

```typescript
const total = val1 + val2 + carry;
const digit = total % 10;
carry = total >= 10 ? 1 : 0; // Más claro que Math.floor(total/10)
```

- Para suma de dígitos, carry siempre es 0 o 1
- `total >= 10 ? 1 : 0` es más expresivo y eficiente
- Manejo directo sin funciones matemáticas complejas

#### Cases Edge Críticos

**1. Carry Final:**

```
99 + 1 = 100 → [9,9] + [1] = [0,0,1]
```

- Requiere nodo adicional al final
- Loop debe continuar aunque ambas listas sean null

**2. Carry en Cadena:**

```
999 + 1 = 1000 → [9,9,9] + [1] = [0,0,0,1]
```

- Propagación de carry a través de múltiples 9s
- Test crítico para verificar lógica de carry

**3. Listas de Longitudes Muy Diferentes:**

```
123456 + 7 = 123463 → [6,5,4,3,2,1] + [7] = [3,6,4,3,2,1]
```

- Una lista se agota rápido
- Tratamiento de null como 0 es esencial

#### Complejidad de Aritmética

- **Tiempo:** O(max(n, m)) - procesamos cada dígito una vez
- **Espacio:** O(max(n, m)) - para la lista resultado
- **Optimalidad:** No se puede mejorar ya que necesitamos visitar cada dígito

#### Extensiones del Patrón

**Multiplicación de Números Grandes:**

- Similar estructura pero carry puede ser > 1
- Requiere manejo más complejo de carry

**Sustracción:**

- Usar complemento a 10 o manejar borrow negativo
- Más complejo por dirección de propagación

**División:**

- Requiere orden normal (no reverso)
- Algoritmo más sofisticado de long division

#### Insights de Diseño

**Orden de Dígitos:**

- **Reverso:** Natural para carry hacia adelante (suma, multiplicación)
- **Normal:** Necesario para división, comparación lexicográfica

**Construcción Incremental:**

- Buildar resultado nodo por nodo es más eficiente
- Evita post-procesamiento o reversión

**State Propagation:**

- Carry actúa como estado que se propaga entre iteraciones
- Patrón aplicable a otros problemas de propagación

### Técnicas de Debugging

1. **Visualización:** Dibujar la lista como cajas conectadas
2. **Invariantes:** Verificar que la lista siempre esté bien formada
3. **Casos pequeños:** Probar con listas de 0, 1, 2 elementos

---

## Sliding Window de Tamaño Fijo

### Concepto

Técnica para procesar subcadenas/subarrays contiguos de longitud constante k recorriendo la estructura una sola vez.

### Cuándo Usar

- Cuando solo importan ventanas de exactamente k elementos.
- Para detectar patrones consecutivos (ej: 3 dígitos iguales, suma fija, caracteres válidos).

### Patrón Básico (k = 3 en nuestro caso)

```typescript
for (let i = 0; i + 2 < s.length; i++) {
  // ventana: s[i], s[i+1], s[i+2]
}
```

### Razones de Eficiencia

- O(n) tiempo porque cada índice inicial se considera una vez.
- O(1) espacio adicional.

### Ejemplo (Largest 3-Same-Digit Number in String)

Condición de ventana válida: `s[i] === s[i+1] && s[i] === s[i+2]`.
Mantener la mejor (máxima lexicográfica) sin almacenar todas.

### Optimizaciones Posibles

- Early exit si se encuentra la ventana óptima máxima posible ("999").
- Evitar creación de substrings usando comparación directa de caracteres.

### Edge Cases

- Longitud < k → no hay ventana.
- Ventanas traslapadas con mismo patrón ("1111").
- Patrones múltiples con diferentes dígitos ("222333").

---

## Geometría y Matemáticas

### Teorema de Pitágoras

**Definición:** En un triángulo rectángulo, el cuadrado de la hipotenusa es igual a la suma de los cuadrados de los catetos.

**Fórmula:** `c² = a² + b²`, donde c es la hipotenusa.

**Para calcular la hipotenusa:** `c = √(a² + b²)`

### Aplicación en Rectángulos

**Diagonal de un rectángulo:** La diagonal forma la hipotenusa de un triángulo rectángulo donde los catetos son la longitud y el ancho.

```typescript
// Dado un rectángulo con dimensiones [length, width]
const diagonal = Math.sqrt(length * length + width * width);

// O usando Math.hypot() para mayor precisión
const diagonal = Math.hypot(length, width);
```

### Math.hypot() - Función Especializada

**Definición:** Calcula la hipotenusa dados los catetos, con mejor manejo de edge cases.

**Ventajas sobre Math.sqrt(a² + b²):**

- Evita overflow/underflow en cálculos intermedios
- Mejor precisión numérica
- Más expresivo semánticamente

```typescript
// Equivalentes pero hypot() es más robusto
Math.hypot(3, 4); // 5
Math.sqrt(3 * 3 + 4 * 4); // 5

// Para casos extremos, hypot() es más confiable
Math.hypot(1e-200, 1e-200); // Correcto
Math.sqrt(1e-200 ** 2 + 1e-200 ** 2); // Puede dar 0 por underflow
```

### Patrón: Comparación por Prioridades Geométricas

**Problema típico:** Encontrar el rectángulo óptimo cuando hay múltiples criterios.

**Estructura del patrón:**

1. **Criterio primario:** Comparar por la propiedad geométrica principal
2. **Criterio de desempate:** Usar segunda propiedad en caso de empate
3. **Variables de seguimiento:** Mantener el mejor valor encontrado

```typescript
let maxPrimaryMetric = 0;
let resultSecondaryMetric = 0;

for (const shape of shapes) {
  const primaryMetric = calculatePrimary(shape);
  const secondaryMetric = calculateSecondary(shape);

  if (primaryMetric > maxPrimaryMetric) {
    // Nuevo mejor en criterio primario
    maxPrimaryMetric = primaryMetric;
    resultSecondaryMetric = secondaryMetric;
  } else if (primaryMetric === maxPrimaryMetric) {
    // Empate: usar criterio de desempate
    resultSecondaryMetric = Math.max(resultSecondaryMetric, secondaryMetric);
  }
}
```

**Ejemplo en Maximum Area of Longest Diagonal Rectangle:**

- **Criterio primario:** Diagonal más larga (Math.hypot)
- **Criterio de desempate:** Mayor área (length × width)

### Análisis de Complejidad Geométrica

**Cálculos básicos:**

- **Área de rectángulo:** O(1) - simple multiplicación
- **Diagonal:** O(1) - Math.hypot es constante
- **Comparaciones:** O(1) - operaciones numéricas simples

**Para n rectángulos:**

- **Tiempo total:** O(n) - un cálculo constante por rectángulo
- **Espacio:** O(1) - solo variables de seguimiento

### Aplicaciones del Patrón Geométrico

- **Maximum Area of Longest Diagonal Rectangle:** diagonal vs área
- **Largest Rectangle in Histogram:** altura vs base
- **Container With Most Water:** distancia vs altura mínima
- **Minimum Area Rectangle:** área vs perímetro

### Consideraciones de Precisión

**Para comparaciones exactas:**

```typescript
// Evitar problemas de floating point
const diagonalSquared = length * length + width * width;
// Comparar cuadrados en lugar de raíces cuando sea posible
```

**Cuándo usar Math.hypot:**

- Cuando necesitas el valor real de la diagonal
- Para evitar overflow en cálculos intermedios
- Cuando la precisión es crítica

**Cuándo comparar cuadrados:**

- Solo necesitas determinar cuál es mayor
- Quieres evitar completamente floating point
- Performance extrema (aunque Math.hypot es muy eficiente)

---

## Comparación de Distancias

**Definición:** Patrón fundamental para resolver problemas de proximidad y optimización geométrica.

### Distancia en Línea Numérica

**Fórmula básica:**

```typescript
const distance = Math.abs(punto1 - punto2);
```

**Aplicaciones:**

- Determinar quién llega primero a un destino
- Encontrar el punto más cercano
- Problemas de meeting point

**Ejemplo - Find Closest Person:**

```typescript
export function findClosestPerson(x: number, y: number, z: number): number {
  const distance1_3 = Math.abs(z - x);
  const distance2_3 = Math.abs(z - y);
  return distance1_3 < distance2_3 ? 1 : distance1_3 > distance2_3 ? 2 : 0;
}
```

### Técnicas de Optimización

**1. Evitar cálculos redundantes:**

```typescript
// ✅ Bueno: calcular una vez, usar múltiples veces
const distance1 = Math.abs(z - x);
const distance2 = Math.abs(z - y);
return distance1 < distance2 ? 1 : distance1 > distance2 ? 2 : 0;

// ❌ Malo: recalcular en cada comparación
return Math.abs(z - x) < Math.abs(z - y)
  ? 1
  : Math.abs(z - x) > Math.abs(z - y)
  ? 2
  : 0;
```

**2. Comparar cuadrados cuando sea apropiado:**

```typescript
// Para evitar Math.sqrt en distancias euclidianas
const distSq1 = (x1 - z) * (x1 - z) + (y1 - z) * (y1 - z);
const distSq2 = (x2 - z) * (x2 - z) + (y2 - z) * (y2 - z);
```

### Variables Semánticamente Descriptivas

**Principio:** El código debe ser auto-documentado a través del naming.

**Ejemplos efectivos:**

```typescript
// ✅ Excelente: indica claramente qué se mide
const distance1_3 = Math.abs(z - x); // distancia de persona 1 a persona 3
const distance2_3 = Math.abs(z - y); // distancia de persona 2 a persona 3

// ❌ Ambiguo: no está claro qué representa
const distance1 = Math.abs(z - x);
const distance2 = Math.abs(z - y);
```

**Beneficios:**

- Código auto-documentado
- Reduce necesidad de comentarios
- Facilita mantenimiento y debugging
- Mejora la colaboración en equipo

### Operadores Ternarios Anidados

**Estructura para múltiples condiciones:**

```typescript
return condicion1 ? valor1 : condicion2 ? valor2 : valorPorDefecto;
```

**Cuándo usar:**

- Múltiples casos mutuamente excluyentes
- Retorno inmediato basado en condiciones
- Alternativa concisa a if-else-if chains

**Ejemplo del patrón comparación-triple:**

```typescript
return distancia1 < distancia2
  ? resultado1
  : distancia1 > distancia2
  ? resultado2
  : resultadoEmpate;
```

### Problemas Relacionados con Distancias

**Patrones comunes:**

- **Closest Points:** Encontrar puntos más cercanos en espacio 2D/3D
- **Meeting Point:** Punto óptimo donde convergen múltiples entidades
- **Two Sum variants:** Minimizar distancia entre sumas objetivo
- **Pathfinding:** Algoritmos como A\* que usan heurísticas de distancia

**Extensiones del patrón:**

- Múltiples dimensiones (distancia euclidiana)
- Diferentes métricas (Manhattan, Chebyshev)
- Múltiples candidatos (encontrar los k más cercanos)
- Restricciones adicionales (obstáculos, pesos)

### Comparación de Strings Lexicográfica

**Definición:** Técnica para comparar strings utilizando el orden lexicográfico natural de JavaScript, especialmente útil para strings que representan números.

**Cuándo es efectiva:**

```typescript
// Para strings de dígitos de igual longitud
"777" > "666"; // true - comparación lexicográfica = comparación numérica
"999" > "123"; // true - funciona perfectamente

// ⚠️ CUIDADO: No funciona para longitudes diferentes
"9" < "10"; // false! Lexicográficamente "9" > "1"
```

**Aplicaciones principales:**

- **Comparar versiones:** Cuando cada segmento se trata como número independiente
- **Strings de dígitos de misma longitud:** Maximizar/minimizar strings numéricos
- **Ordenamiento de identificadores:** Códigos alfanuméricos

**Ejemplo en Compare Version Numbers:**

```typescript
// Cada revision se compara como número independiente
const num1 = parseInt(revision1); // "01" → 1
const num2 = parseInt(revision2); // "10" → 10
// Aquí usamos comparación numérica, no lexicográfica

// Pero para strings de misma longitud numéricamente:
if (candidate > best) {
  // "777" > "333" funciona perfecto
  best = candidate;
}
```

**Pattern de aplicación:**

1. **Identificar el contexto:** ¿Las strings tienen longitud consistente?
2. **Validar equivalencia:** ¿Orden lexicográfico = orden numérico?
3. **Aplicar directamente:** Usar comparadores `<`, `>`, `===` directamente

---

## String Processing y Parsing

### Técnica de Two Pointers para String Parsing

**Definición:** Uso de dos punteros para extraer información de strings sin crear subestructuras auxiliares, optimizando memoria.

**Ventajas principales:**

- **Memoria O(1):** No crear arrays intermedios
- **Una sola pasada:** Procesar cada carácter exactamente una vez
- **Flexibilidad:** Adaptar fácilmente a diferentes delimitadores

**Pattern base:**

```typescript
function extractSegments(str: string): void {
  let pointer1 = 0;
  let pointer2 = 0;

  while (pointer1 < str.length || pointer2 < str.length) {
    // Extraer próximo segmento usando pointer1
    let segment1 = 0;
    while (pointer1 < str.length && str[pointer1] !== delimiter) {
      // Construir valor incrementalmente
      segment1 = segment1 * 10 + parseInt(str[pointer1]);
      pointer1++;
    }
    pointer1++; // Saltar delimitador

    // Repetir para pointer2
    // Procesar segments...
  }
}
```

**Ejemplo en Compare Version Numbers:**

```typescript
export function compareVersion(version1: string, version2: string): number {
  let p1 = 0,
    p2 = 0;

  while (p1 < version1.length || p2 < version2.length) {
    // Extraer número de version1 sin crear substring
    let num1 = 0;
    while (p1 < version1.length && version1[p1] !== ".") {
      num1 = num1 * 10 + parseInt(version1[p1]);
      p1++;
    }
    p1++; // Saltar punto

    // Extraer número de version2
    let num2 = 0;
    while (p2 < version2.length && version2[p2] !== ".") {
      num2 = num2 * 10 + parseInt(version2[p2]);
      p2++;
    }
    p2++; // Saltar punto

    // Comparar números extraídos
    if (num1 > num2) return 1;
    if (num1 < num2) return -1;
  }

  return 0;
}
```

### Construcción Incremental de Números

**Técnica:** Construir números dígito por dígito usando aritmética en lugar de concatenación de strings.

**Formula básica:**

```typescript
// Para construir el número 123 de "123"
let number = 0;
// Procesar '1': number = 0 * 10 + 1 = 1
// Procesar '2': number = 1 * 10 + 2 = 12
// Procesar '3': number = 12 * 10 + 3 = 123
```

**Ventajas sobre parseInt(substring):**

- **No crear substrings:** Evita allocaciones temporales
- **Procesamiento en línea:** Construir mientras se recorre
- **Mejor performance:** Menos overhead de conversión

**Pattern reutilizable:**

```typescript
function parseNumberFromPosition(str: string, start: number): [number, number] {
  let value = 0;
  let position = start;

  while (position < str.length && isDigit(str[position])) {
    value = value * 10 + parseInt(str[position]);
    position++;
  }

  return [value, position]; // [número extraído, nueva posición]
}
```

### Split vs Two Pointers - Trade-offs

| Aspecto                  | Split Approach | Two Pointers |
| ------------------------ | -------------- | ------------ |
| **Legibilidad**          | ⭐⭐⭐⭐⭐     | ⭐⭐⭐⭐     |
| **Complejidad Temporal** | O(n)           | O(n)         |
| **Complejidad Espacial** | O(n)           | **O(1)** ✅  |
| **Facilidad Debug**      | ⭐⭐⭐⭐⭐     | ⭐⭐⭐       |
| **Flexibilidad**         | ⭐⭐⭐         | ⭐⭐⭐⭐⭐   |
| **Casos Edge**           | ⭐⭐⭐⭐       | ⭐⭐⭐       |

**Cuándo usar Split:**

- Prototipado rápido
- Código de lectura crítica
- Cuando memoria no es limitante
- Delimitadores complejos

**Cuándo usar Two Pointers:**

- Optimización de memoria crítica
- Parsing de formatos customizados
- Sistemas con restricciones de memoria
- Cuando necesitas control granular del parsing

### Manejo de Revisiones Faltantes

**Problema:** En strings como "1" vs "1.0.0", ¿cómo tratar las revisiones que no existen?

**Estrategias:**

#### 1. Default a Cero (más común)

```typescript
// Si no hay más caracteres, el valor es 0
let num = 0; // Default value
while (pointer < string.length && string[pointer] !== ".") {
  num = num * 10 + parseInt(string[pointer]);
  pointer++;
}
// Si no se ejecuta el while, num permanece 0
```

#### 2. Padding con Split

```typescript
// Pre-procesar para igualar longitudes
const parts1 = version1.split(".");
const parts2 = version2.split(".");
const maxLength = Math.max(parts1.length, parts2.length);

for (let i = 0; i < maxLength; i++) {
  const num1 = parseInt(parts1[i] || "0"); // Default "0"
  const num2 = parseInt(parts2[i] || "0");
  // Comparar...
}
```

#### 3. Verificación Explícita

```typescript
// Verificar si hay más content antes de procesar
const hasMoreContent1 = p1 < version1.length;
const hasMoreContent2 = p2 < version2.length;

if (!hasMoreContent1 && !hasMoreContent2) break; // Ambos terminaron
```

**Implications:**

- **"1" vs "1.0":** Deben ser iguales (missing parts = 0)
- **"1.1" vs "1.0.0":** 1.1 > 1.0.0 porque segunda revision 1 > 0
- **Performance:** Approach 1 es más eficiente (no pre-processing)

### Micro-optimizaciones en String Processing

#### charAt() vs [index]

```typescript
// Ambos son O(1), pero [index] es más idiomático en JS moderno
const char = str[i]; // ✅ Preferido
const char = str.charAt(i); // ✅ Funciona igual
```

#### parseInt() vs charCodeAt() para Dígitos

```typescript
// Para single digits, charCodeAt puede ser más rápido
const digit1 = parseInt(str[i]); // General
const digit2 = str[i].charCodeAt(0) - 48; // ASCII específico

// '0' tiene código ASCII 48, '1' tiene 49, etc.
// Entonces '3'.charCodeAt(0) - 48 = 51 - 48 = 3
```

**Cuándo usar cada uno:**

- **parseInt():** Más legible, maneja edge cases
- **charCodeAt():** Micro-optimización, solo para single digits garantizados

#### Evitar Repeated String Access

```typescript
// ❌ Acceso repetido
while (p < version.length && version[p] !== ".") {
  num = num * 10 + parseInt(version[p]);
  p++;
}

// ✅ Cache character access
while (p < version.length) {
  const char = version[p];
  if (char === ".") break;
  num = num * 10 + parseInt(char);
  p++;
}
```

---

## Metodología TDD: Red-Green-Refactor Aplicada

### Lessons Learned de Compare Version Numbers

**Proceso exitoso documentado:**

1. **🔴 RED Phase:** Tests colaborativos implementados

   - **Key insight:** Tests vacíos fuerzan colaboración real
   - **Benefit:** Usuario entiende casos edge mientras escribe tests
   - **Result:** Test suite comprensivo desde el inicio

2. **🟢 GREEN Phase:** Implementación incremental

   - **Strategy:** Split first (legibilidad), then optimize
   - **Learning:** Variables descriptivas (`p1`, `p2`) mejoran comprensión
   - **Outcome:** Solución funcional con confianza

3. **🔵 REFACTOR Phase:** Optimización informada
   - **Achievement:** O(n+m) tiempo, O(n+m) → O(1) espacio
   - **Documentation:** Ambos enfoques documentados con trade-offs
   - **Knowledge:** Micro-optimizaciones catalogadas para referencia

### Naming Conventions que Funcionaron

**Pattern exitoso:**

```typescript
// ✅ Descriptivo y específico
let p1 = 0; // pointer para version1
let p2 = 0; // pointer para version2

const num1 = parseInt(parts1[i] || "0"); // número de version1
const num2 = parseInt(parts2[i] || "0"); // número de version2

// vs alternativas menos claras
let i = 0,
  j = 0; // ❌ Genérico
let ptr1 = 0,
  ptr2 = 0; // ❌ Abbreviated
let left = 0,
  right = 0; // ❌ Misleading context
```

**Principles that worked:**

- **Semantic relevance:** Variables named by their purpose
- **Consistent patterns:** Similar naming across related variables
- **Context clarity:** Readable without extensive comments

### Alternative Approaches Documentation

**Value of exploring multiple solutions:**

1. **Educational:** Understand trade-offs between approaches
2. **Interview readiness:** Show depth of algorithmic knowledge
3. **Future reference:** Know when to apply which technique
4. **Code review insights:** Better evaluate others' solutions

**Documentation strategy that worked:**

- **Both solutions preserved:** Split and Two Pointers
- **Trade-offs explicit:** Time/Space complexity comparison
- **Use cases clear:** When to prefer each approach
- **Micro-optimizations noted:** Available but explained

---

## Matrices y Validación con Sets

**Definición:** Uso de Hash Sets para validar múltiples restricciones simultáneamente en estructuras matriciales.

### Patrón: Arrays de Sets para Tracking

**Estructura típica:**

```typescript
const rows: Set<string>[] = Array.from({ length: n }, () => new Set());
const cols: Set<string>[] = Array.from({ length: n }, () => new Set());
const regions: Set<string>[] = Array.from({ length: k }, () => new Set());
```

**Aplicaciones:**

- Validación de Sudoku (filas, columnas, sub-cajas)
- N-Queens (filas, columnas, diagonales)
- Grid illumination (filas, columnas, diagonales)

### Mapeo de Coordenadas 2D a 1D

**Fórmula general para sub-regiones:**

```typescript
const regionIndex = Math.floor(i / size) * groups + Math.floor(j / size);
```

**Ejemplo en Sudoku 9x9 (sub-cajas 3x3):**

```typescript
const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
```

**Visualización del mapeo:**

```
Posiciones (i,j) → Índices de sub-caja:
(0,0)-(2,2) → 0  |  (0,3)-(2,5) → 1  |  (0,6)-(2,8) → 2
(3,0)-(5,2) → 3  |  (3,3)-(5,5) → 4  |  (3,6)-(5,8) → 5
(6,0)-(8,2) → 6  |  (6,3)-(8,5) → 7  |  (6,6)-(8,8) → 8
```

### Sets vs Arrays Booleanos

**Sets (recomendado):**

```typescript
if (rows[i].has(value)) return false;
rows[i].add(value);
```

**Ventajas:**

- API más limpia y expresiva
- Manejo automático de duplicados
- Flexible para diferentes tipos de datos

**Arrays Booleanos:**

```typescript
if (rowSeen[i][value]) return false;
rowSeen[i][value] = true;
```

**Cuándo usar:**

- Valores limitados y conocidos (ej: dígitos 1-9)
- Optimización extrema de memoria
- Acceso por índice directo

### Validación Simultánea de Múltiples Restricciones

**Patrón básico:**

```typescript
// Validar todas las restricciones en una sola pasada
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    const value = matrix[i][j];
    if (shouldValidate(value)) {
      // Calcular índices para cada dimensión de restricción
      const region = calculateRegion(i, j);

      // Verificar violaciones
      if (
        rows[i].has(value) ||
        cols[j].has(value) ||
        regions[region].has(value)
      ) {
        return false; // Early return en violación
      }

      // Actualizar tracking
      rows[i].add(value);
      cols[j].add(value);
      regions[region].add(value);
    }
  }
}
```

### Inicialización Segura de Arrays de Objetos

**Método recomendado:**

```typescript
Array.from({ length: n }, () => new Set());
```

**Método problemático:**

```typescript
new Array(n).fill(new Set()); // ¡Referencia compartida!
```

**Por qué importa:**

- `fill()` usa la misma referencia para todos los elementos
- Cambios en un Set afectan a todos los demás
- `Array.from()` ejecuta la función para cada posición

### Early Return y Optimización

**Estrategias:**

1. **Early termination:** Retornar `false` inmediatamente al detectar violación
2. **Skip empty values:** Evitar procesamiento de celdas vacías
3. **Constant time operations:** Aprovechar O(1) de Sets

**Ejemplo optimizado:**

```typescript
if (value === ".") continue; // Skip vacías
if (violations) return false; // Early exit
// Solo procesar valores relevantes
```

### Análisis de Complejidad en Matrices Fijas

**Para tableros de tamaño fijo (ej: Sudoku 9x9):**

- **Tiempo:** O(1) - siempre 81 celdas, operaciones constantes
- **Espacio:** O(1) - máximo 27 Sets con 9 elementos cada uno

**Para matrices generales n×m:**

- **Tiempo:** O(n×m) - una pasada por toda la matriz
- **Espacio:** O(n+m+k) donde k = número de regiones

### Aplicaciones del Patrón

**Problemas similares:**

- **Valid Sudoku:** 3 tipos de restricciones simultáneas
- **N-Queens:** Filas, columnas y diagonales
- **Grid Illumination:** Tracking de iluminación en múltiples direcciones
- **Word Search:** Tracking de celdas visitadas

**Extensiones:**

- **Sudoku Solver:** Usar backtracking con misma validación
- **Multiple constraint problems:** Agregar más dimensiones de tracking
- **Dynamic validation:** Actualizar/remover elementos de Sets

### Patterns de Coordinate Mapping

**Grid sub-regions (general):**

```typescript
// Para cualquier tamaño de sub-región
const regionIndex =
  Math.floor(i / regionHeight) * regionsPerRow + Math.floor(j / regionWidth);
```

**Diagonales en matrices:**

```typescript
const mainDiagonal = i - j; // Diagonal principal y paralelas
const antiDiagonal = i + j; // Anti-diagonal y paralelas
```

**Aplicaciones en ajedrez/tableros:**

```typescript
// Conversión board position a índice
const squareIndex = i * 8 + j; // Para tablero 8x8
const fileIndex = j; // Columna (a-h)
const rankIndex = i; // Fila (1-8)
```

---

## Construcción por Invariantes y Pares Simétricos

### Pares Simétricos (Symmetric Pairs)

**Definición:** Técnica para generar elementos que se cancelan matemáticamente para mantener una propiedad específica (suma, XOR, etc.).

**Concepto clave:** En lugar de generar elementos aleatorios y validar, construimos garantizando las propiedades deseadas.

**Ejemplo - Suma Cero:**

```typescript
// Para n=5: generar [-2, -1, 0, 1, 2]
const numPairs = Math.floor(n / 2);

// Cada par (-i, +i) suma 0
for (let i = numPairs; i >= 1; i--) {
  result.push(-i); // Negativo
}
// 0 es elemento neutro
if (n % 2 === 1) result.push(0);
for (let i = 1; i <= numPairs; i++) {
  result.push(i); // Positivo
}
```

**Ventajas:**

- Garantiza propiedades por construcción (no necesita validación)
- Matemáticamente elegante y fácil de verificar
- Aplicable a múltiples operaciones (suma, XOR, multiplicación)

**Aplicaciones:**

- Problemas de suma objetivo (Target Sum)
- Balanceamiento de cargas
- Estructuras simétricas (árboles balanceados)

### Elemento Neutro en Algoritmos

**Definición:** Elemento que no afecta el resultado de una operación.

**Elementos neutros comunes:**

- **Suma:** 0 (a + 0 = a)
- **Multiplicación:** 1 (a × 1 = a)
- **XOR:** 0 (a ⊕ 0 = a)
- **OR lógico:** false (a || false = a)
- **AND lógico:** true (a && true = a)

**Uso en construcción:**

```typescript
// Para n impar, agregar elemento neutro
if (n % 2 === 1) {
  result.push(neutralElement); // 0 para suma
}
```

**Estrategia:** Cuando necesitas un número impar de elementos pero trabajas con pares simétricos, usa el elemento neutro.

### Análisis de Paridad (Par/Impar)

**Técnica fundamental:** Dividir problemas según si n es par o impar.

**Patrón común:**

```typescript
const pairs = Math.floor(n / 2); // Cuántos pares necesito
const needsNeutral = n % 2 === 1; // ¿Necesito elemento neutro?
```

**Aplicaciones:**

- División equitativa de recursos
- Algoritmos de apareamiento (matching)
- Optimizaciones específicas por paridad

**Ejemplo - Distribución:**

- n=6: 3 pares perfectos
- n=7: 3 pares + 1 elemento especial

### Pre-allocación y Direct Indexing

**Problema:** Arrays dinámicos pueden requerir redimensionamiento costoso.

**Solución:** Pre-allocar cuando conoces el tamaño final.

```typescript
// ❌ Dinámico - puede redimensionar múltiples veces
const result: number[] = [];
result.push(value);

// ✅ Pre-allocado - una sola allocación
const result = new Array<number>(n);
let index = 0;
result[index++] = value; // Direct indexing
```

**Ventajas:**

- **Performance:** Elimina overhead de redimensionamiento
- **Memory locality:** Acceso secuencial es cache-friendly
- **Predictabilidad:** Tiempo constante por operación

**Cuándo usar:**

- Sabes el tamaño final del array
- Performance es crítica
- Acceso secuencial es el patrón principal

### Property-Based Testing

**Definición:** Testear propiedades/invariantes en lugar de valores específicos.

**Problema:** Funciones con múltiples respuestas válidas.

**Solución tradicional (frágil):**

```typescript
expect(sumZero(3)).toEqual([-1, 0, 1]); // ❌ Solo acepta UNA respuesta
```

**Property-based approach (robusto):**

```typescript
const isValid = (arr: number[], n: number) =>
  arr.length === n && // Longitud correcta
  new Set(arr).size === arr.length && // Elementos únicos
  arr.reduce((sum, x) => sum + x, 0) === 0; // Suma cero

expect(isValid(sumZero(3), 3)).toBe(true); // ✅ Acepta CUALQUIER respuesta válida
```

**Helper functions reutilizables:**

```typescript
const hasCorrectLength = (arr: number[], expected: number) =>
  arr.length === expected;
const hasUniqueElements = (arr: number[]) => new Set(arr).size === arr.length;
const sumsToZero = (arr: number[]) => arr.reduce((sum, x) => sum + x, 0) === 0;
```

**Ventajas:**

- Acepta todas las soluciones válidas
- Debugging más claro (sabes qué propiedad falla)
- Reutilizable en problemas similares
- Tests más robustos a cambios de implementación

### Construcción Ordenada vs Post-procesamiento

**Principio:** Cuando puedes controlar el orden de construcción, hazlo en lugar de ordenar después.

**❌ Generar y ordenar:**

```typescript
// Generar desordenado
for (let i = 1; i <= pairs; i++) {
  result.push(i, -i); // [1, -1, 2, -2, ...]
}
return result.sort((a, b) => a - b); // O(n log n)
```

**✅ Construcción ordenada:**

```typescript
// Generar directamente en orden
for (let i = pairs; i >= 1; i--) result.push(-i); // [-2, -1]
if (odd) result.push(0); // [0]
for (let i = 1; i <= pairs; i++) result.push(i); // [1, 2]
// Resultado: [-2, -1, 0, 1, 2] sin sort() adicional
```

**Ventajas:**

- O(n) en lugar de O(n log n)
- Menos operaciones totales
- Código más directo e intuitivo

**Aplicable cuando:**

- Conoces el orden final deseado
- Puedes generar elementos en secuencia
- El costo de sorting supera el de construcción ordenada

### Micro-optimizaciones de Performance

**Post-increment idiom:**

```typescript
result[index++] = value; // Asignar Y luego incrementar
// Equivale a:
// result[index] = value;
// index = index + 1;
```

**Manual index control:**

```typescript
let index = 0;
// Control total sobre dónde va cada elemento
result[index++] = firstValue;
result[index++] = secondValue;
```

**Pre-allocation vs Dynamic:**

```typescript
// Dinámico: puede requerir múltiples reallocations
const arr: number[] = [];

// Pre-allocado: una sola allocation, tamaño conocido
const arr = new Array<number>(knownSize);
```

**Trade-offs:**

- **Pre-allocation:** Más memoria inicial, mejor performance
- **Dynamic:** Menos memoria inicial, overhead de crecimiento
- **Regla:** Si conoces el tamaño, pre-alloca

---

## Hash Tables y Mapeo Bidireccional

### Mapeo Uno-a-Uno (Bijective Mapping)

**Definición:** Relación donde cada elemento del dominio mapea a exactamente un elemento del codominio, y viceversa.

**Características clave:**

- **Inyectivo (One-to-One):** No hay mapeos uno-a-muchos
- **Sobreyectivo (Onto):** No hay mapeos muchos-a-uno
- **Bijective:** Combinación de ambas propiedades

**Ejemplo - Isomorphic Strings:**

```typescript
// Mapeo válido: "egg" → "add"
// e↔a, g↔d (bidireccional y consistente)

// Mapeo inválido: "foo" → "bar"
// o→a y o→r (viola one-to-one)
```

### Patrón: Dos Maps para Validación Bidireccional

**Problema:** Un solo Map solo previene violaciones en una dirección.

**Solución:** Usar dos Maps para trackear ambas direcciones simultáneamente.

```typescript
const domainToRange = new Map<string, string>(); // A → B
const rangeToDomain = new Map<string, string>(); // B → A

// Validación independiente en cada dirección
if (domainToRange.has(keyA)) {
  if (domainToRange.get(keyA) !== valueB) return false;
} else {
  domainToRange.set(keyA, valueB);
}

if (rangeToDomain.has(keyB)) {
  if (rangeToDomain.get(keyB) !== valueA) return false;
} else {
  rangeToDomain.set(keyB, valueA);
}
```

**Por qué verificaciones independientes:**

- Cada Map puede estar en estado diferente
- No usar `||` porque ambas direcciones deben validarse
- Permite detección temprana de inconsistencias

### Tipos de Violaciones en Mapeos

#### 1. One-to-Many Violation

```typescript
// Un elemento mapea a múltiples destinos
// "foo" → "bar": 'o' mapearía a 'a' y 'r'
sToT.set("o", "a"); // Primera ocurrencia
sToT.set("o", "r"); // ❌ Violación: 'o' ya mapeaba a 'a'
```

#### 2. Many-to-One Violation

```typescript
// Múltiples elementos mapean al mismo destino
// "ab" → "cc": 'a' y 'b' mapearían ambos a 'c'
tToS.set("c", "a"); // Primera ocurrencia
tToS.set("c", "b"); // ❌ Violación: 'c' ya venía de 'a'
```

#### 3. Inconsistencia Bidireccional

```typescript
// Mapeos contradictorios entre direcciones
sToT.set("a", "x"); // a → x
tToS.set("x", "b"); // x ← b
// ❌ Contradicción: a→x pero x←b (debería ser x←a)
```

### Testing Categorizado por Tipo de Fallo

**Estructura organizacional:**

```typescript
describe("Valid isomorphic cases", () => {
  // Casos que deben retornar true
});

describe("Invalid mappings", () => {
  it("should detect one-to-many mapping violation", () => {
    expect(isIsomorphic("foo", "bar")).toBe(false);
  });

  it("should detect many-to-one mapping violation", () => {
    expect(isIsomorphic("ab", "cc")).toBe(false);
  });
});

describe("Edge cases", () => {
  // Casos límite y especiales
});
```

**Ventajas del enfoque categorizado:**

- **Claridad semántica:** Cada test explica QUÉ valida
- **Debugging efectivo:** Fallas pinpoint el tipo exacto de error
- **Cobertura exhaustiva:** Casos válidos, inválidos y edge separados
- **Mantenibilidad:** Fácil agregar casos en categorías apropiadas

### Optimizaciones en Mapeos de Caracteres

#### Variables Descriptivas para Claridad

```typescript
// ✅ Semánticamente claro
const charS = s[i];
const charT = t[i];

// vs

// ❌ Menos claro
const c1 = s[i];
const c2 = t[i];
```

#### Early Termination

```typescript
// Retornar false inmediatamente al detectar inconsistencia
if (sToT.get(charS) !== charT) {
  return false; // No continuar iterando innecesariamente
}
```

#### Evitar Computaciones Redundantes

```typescript
// ✅ Acceso directo a caracteres
for (let i = 0; i < s.length; i++) {
  const charS = s[i];
  const charT = t[i];
  // Usar charS y charT múltiples veces
}

// vs

// ❌ Accesos repetidos
for (let i = 0; i < s.length; i++) {
  if (sToT.has(s[i])) {
    if (sToT.get(s[i]) !== t[i]) // s[i] y t[i] se acceden múltiples veces
  }
}
```

### Análisis de Complejidad en Hash Tables

**Time Complexity: O(n)**

- Una iteración por cada carácter
- Operaciones de Map (has, get, set) son O(1) promedio
- No hay loops anidados ni búsquedas lineales

**Space Complexity: O(min(m, n))**

- m = caracteres únicos en string 1
- n = caracteres únicos en string 2
- Peor caso: O(n) cuando todos los caracteres son únicos
- Limitado por tamaño del alfabeto (256 para ASCII)

**Optimización espacial:**

```typescript
// Para alfabetos fijos, considerar arrays en lugar de Maps
const seen1 = new Array(256).fill(null); // ASCII
const seen2 = new Array(256).fill(null);

// O(1) space para alfabetos acotados
```

### Aplicaciones del Patrón de Mapeo Bidireccional

**Problemas similares:**

- **Word Pattern:** Palabras vs caracteres (bijection)
- **Isomorphic Strings:** Caracteres vs caracteres
- **Group Anagrams:** Strings vs patrones canónicos
- **Two Sum:** Valores vs índices (pero unidireccional)

**Extensiones del concepto:**

- **Graph Isomorphism:** Vértices vs vértices
- **Database Relations:** Foreign keys bidireccionales
- **Caching Systems:** Key-value bidirectional lookup

### Pattern: Character Mapping Validation

**Template reutilizable:**

```typescript
function validateBidirectionalMapping<T>(seq1: T[], seq2: T[]): boolean {
  if (seq1.length !== seq2.length) return false;

  const map1To2 = new Map<T, T>();
  const map2To1 = new Map<T, T>();

  for (let i = 0; i < seq1.length; i++) {
    const elem1 = seq1[i];
    const elem2 = seq2[i];

    // Validate 1 → 2 mapping
    if (map1To2.has(elem1)) {
      if (map1To2.get(elem1) !== elem2) return false;
    } else {
      map1To2.set(elem1, elem2);
    }

    // Validate 2 → 1 mapping
    if (map2To1.has(elem2)) {
      if (map2To1.get(elem2) !== elem1) return false;
    } else {
      map2To1.set(elem2, elem1);
    }
  }

  return true;
}
```

**Aplicable a:**

- Arrays de números
- Sequences de objetos
- Cualquier tipo que implemente equality

### Consideraciones de Implementación

**Type Safety con TypeScript:**

```typescript
const sToT = new Map<string, string>(); // Explícito
// vs
const sToT = new Map(); // TypeScript infiere el tipo
```

**Memory Management:**

```typescript
// Para problemas de múltiples casos, considerar reutilización
sToT.clear();
tToS.clear();
// vs crear nuevos Maps cada vez
```

**Alternative Approaches:**

```typescript
// Enfoque de índices (menos flexible pero más eficiente para ASCII)
const mapping = new Array(256).fill(-1);
for (let i = 0; i < s.length; i++) {
  const codeS = s.charCodeAt(i);
  const codeT = t.charCodeAt(i);
  // Validate using array indices...
}
```

---

## Fuerza Bruta Optimizada con Terminación Temprana

**Definición:** Estrategia exhaustiva que prueba todas las combinaciones posibles pero termina inmediatamente al encontrar la primera solución válida.

**Cuándo usar:**

- Problema garantiza que existe al menos una solución
- El espacio de búsqueda es manejable
- No necesitamos la solución "óptima", cualquier válida sirve
- Early termination hace que sea eficiente en la práctica

**Ejemplo del problema Convert Integer to Sum of Two No-Zero Integers:**

```typescript
export function getNoZeroIntegers(n: number): number[] {
  const isNoZeroInteger = (num: number): boolean => {
    return !num.toString().includes("0");
  };

  for (let i = 1; i < n; i++) {
    let a = i;
    let b = n - i;
    if (isNoZeroInteger(a) && isNoZeroInteger(b)) {
      return [a, b]; // ← Terminación temprana
    }
  }
  return [];
}
```

**Características clave:**

- **Exhaustivo**: Prueba todas las combinaciones sistemáticamente
- **Early termination**: Para tan pronto encuentra una solución válida
- **Predecible**: Siempre encuentra la "primera" solución según el orden de búsqueda
- **Eficiente en promedio**: Muchos problemas se resuelven rápidamente

**Complejidad típica:**

- **Peor caso**: O(n) iteraciones
- **Mejor caso**: O(1) si la primera combinación es válida
- **Caso promedio**: Generalmente muy bueno por early termination

---

## Validación de Dígitos con String Methods

**Definición:** Técnica que convierte números a strings para verificar propiedades de sus dígitos usando métodos de string.

**Ventajas:**

- **Legibilidad**: Código más claro que aritmética manual
- **Simplicidad**: Aprovecha métodos built-in de strings
- **Mantenibilidad**: Fácil de entender y modificar

**Ejemplo - Verificar No-Zero integers:**

```typescript
const isNoZeroInteger = (num: number): boolean => {
  return !num.toString().includes("0");
};

// vs enfoque aritmético:
const hasZeroDigit = (num: number): boolean => {
  while (num > 0) {
    if (num % 10 === 0) return true;
    num = Math.floor(num / 10);
  }
  return false;
};
```

**Casos de uso comunes:**

- Verificar presencia/ausencia de dígitos específicos
- Contar dígitos particulares
- Validar patrones en representación decimal
- Problemas de palíndromos numéricos

**Trade-offs:**

- **Pro**: Código más legible y expresivo
- **Pro**: Menos propenso a errores off-by-one
- **Contra**: Overhead de conversión a string (O(log n))
- **Contra**: Uso adicional de memoria temporal

---

## Patrón "Dos Números que Suman X"

**Definición:** Problema de encontrar dos números que cumplan una condición específica y sumen un valor target.

**Variantes comunes:**

1. **Two Sum clásico**: Encontrar índices en array que sumen target
2. **Two Sum con restricciones**: Números que sumen target pero cumplan condiciones adicionales
3. **Construcción de pares**: Crear dos números que sumen target con propiedades específicas

**Estrategias según el contexto:**

### **Array existente - Hash Map** (O(n))

```typescript
// Two Sum clásico
function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement)!, i];
    }
    map.set(nums[i], i);
  }
  return [];
}
```

### **Array ordenado - Two Pointers** (O(n))

```typescript
function twoSumSorted(nums: number[], target: number): number[] {
  let left = 0,
    right = nums.length - 1;
  while (left < right) {
    const sum = nums[left] + nums[right];
    if (sum === target) return [left, right];
    else if (sum < target) left++;
    else right--;
  }
  return [];
}
```

### **Construcción con restricciones - Fuerza Bruta** (O(n))

```typescript
// Convert Integer to Sum of Two No-Zero Integers
function getNoZeroIntegers(n: number): number[] {
  for (let i = 1; i < n; i++) {
    let a = i;
    let b = n - i; // Garantiza a + b = n
    if (isValid(a) && isValid(b)) return [a, b];
  }
  return [];
}
```

**Principios de diseño:**

- **Garantía matemática**: Si a = i, entonces b = target - i
- **Validación independiente**: Verificar cada número por separado
- **Order dependency**: El orden de búsqueda afecta qué solución se encuentra primero

---

## TDD con Funciones Auxiliares de Validación

**Definición:** Metodología de testing que usa funciones helper para validar múltiples propiedades del resultado de manera modular.

**Estructura típica:**

```typescript
describe("Problem Name", () => {
  // Helper functions para validación
  const isValidProperty = (value: any): boolean => {
    // Verificar una propiedad específica
  };

  const isCompletelyValid = (result: any[], input: any): boolean => {
    const condition1 = /* verificar primera condición */;
    const condition2 = result.every(isValidProperty);
    return condition1 && condition2;
  };

  // Tests específicos
  it("should handle exact known case", () => {
    expect(solution(input)).toEqual(expectedOutput);
  });

  // Tests genéricos con validación
  it("should return valid result for generic case", () => {
    const result = solution(input);
    expect(result).toHaveLength(expectedLength);
    expect(isCompletelyValid(result, input)).toBe(true);
  });
});
```

**Ventajas del approach:**

- **Modularidad**: Cada helper valida una propiedad específica
- **Reutilización**: Las funciones helper se pueden usar en múltiples tests
- **Claridad**: Separa la lógica de validación de la lógica de testing
- **Robustez**: Valida propiedades fundamentales, no solo casos específicos

**Ejemplo del problema No-Zero Integers:**

```typescript
const isNoZeroInteger = (num: number): boolean => !num.toString().includes("0");

const isValidResult = (result: number[], n: number): boolean => {
  const sum = result.reduce((acc, num) => acc + num, 0);
  const allNoZero = result.every(isNoZeroInteger);
  return sum === n && allNoZero;
};
```

**Best practices:**

- **Composición**: Funciones helper pequeñas y específicas
- **Naming**: Nombres descriptivos que indican qué validan
- **Independence**: Cada helper debe ser independiente
- **Coverage**: Combinar tests específicos con tests genéricos de validación

---

## Optimización de Búsquedas: Set vs String

**Definición:** Comparación entre diferentes estructuras de datos para operaciones de búsqueda frecuentes.

### Set para Lookup O(1)

**Cuándo usar:**

- Verificaciones frecuentes de existencia de elementos
- Conjunto pequeño de elementos a buscar (ej: letras del alfabeto)
- Cuando la performance de búsqueda es crítica

**Ejemplo del problema Maximum Number of Words You Can Type:**

```typescript
// ❌ Approach ineficiente - O(k) por búsqueda
const brokenLetters = "aeiou";
if (brokenLetters.includes(letra)) // O(k) donde k = letras rotas

// ✅ Approach optimizado - O(1) por búsqueda
const brokenSet = new Set(brokenLetters);
if (brokenSet.has(letra)) // O(1)
```

**Complejidad comparativa:**

- **String.includes()**: O(k) por búsqueda
- **Set.has()**: O(1) promedio

**Trade-off:**

- **Costo inicial**: O(k) para crear el Set
- **Beneficio**: O(1) por cada búsqueda posterior
- **Break-even**: Cuando hacer más de 1 búsqueda

### Métodos Funcionales para Validación

**Pattern:** Combinar `filter()` + `every()` para verificación de condiciones complejas.

```typescript
// Verificar si todas las palabras cumplen una condición
const validWords = words.filter((word) =>
  [...word].every((letra) => !brokenSet.has(letra))
);
```

**Ventajas de `every()`:**

- **Early exit**: Para en cuanto encuentra un elemento que no cumple
- **Expresivo**: Código declarativo que expresa intención claramente
- **Composable**: Se combina bien con otros métodos funcionales

**Equivalencia con loops:**

```typescript
// Con every() - funcional
const esValida = (word) => [...word].every((letra) => !brokenSet.has(letra));

// Con loop - imperativo
const esValida = (word) => {
  for (const letra of word) {
    if (brokenSet.has(letra)) return false;
  }
  return true;
};
```

## Múltiples Enfoques para un Problema

**Concepto:** Un mismo problema puede resolverse con diferentes algoritmos, cada uno con trade-offs distintos.

### Enfoque 1: Verificación por Elemento (Óptimo)

**Idea:** Para cada elemento, verificar si cumple todas las condiciones.

```typescript
// Maximum Number of Words: verificar cada palabra individualmente
const validWords = words.filter((word) =>
  [...word].every((letra) => !brokenSet.has(letra))
);
```

**Características:**

- **Time Complexity**: O(n × m) donde n=elementos, m=verificaciones por elemento
- **Single pass**: Una sola iteración por los datos principales
- **Memory efficient**: No crea copias intermedias

### Enfoque 2: Eliminación Iterativa (Intuitivo)

**Idea:** Por cada condición, eliminar elementos que no la cumplan.

```typescript
// Maximum Number of Words: eliminar palabras por cada letra rota
let words = text.split(" ");
for (const char of brokenLetters) {
  words = words.filter((word) => !word.includes(char));
}
```

**Características:**

- **Time Complexity**: O(n × k × m) donde k=número de condiciones
- **Multiple passes**: Una iteración por cada condición
- **Memory overhead**: Crea arrays intermedios

### Cuándo Usar Cada Enfoque

**Verificación por Elemento (recomendado cuando):**

- Performance es importante
- Número de condiciones es variable o grande
- Datos de entrada son grandes

**Eliminación Iterativa (recomendado cuando):**

- Claridad del código es prioritaria
- Pocas condiciones a verificar
- Contexto educativo o prototipado rápido
- Datos de entrada son pequeños

### Pattern: Trade-offs de Performance vs Claridad

**Principio:** En algoritmos, frecuentemente existe tensión entre eficiencia y legibilidad.

**Factores para decidir:**

1. **Tamaño de datos esperado**

   - Datos pequeños: Priorizar claridad
   - Datos grandes: Priorizar eficiencia

2. **Frecuencia de ejecución**

   - Código que se ejecuta una vez: Claridad
   - Código en hot paths: Performance

3. **Contexto del proyecto**
   - Entrevistas técnicas: Mostrar conocimiento de optimización
   - Código de producción: Balancear maintainability y performance
   - Código educativo: Priorizar comprensión

**Ejemplo de documentación de trade-offs:**

```typescript
// Solución optimizada - O(n × m)
const efficientSolution = () => {
  /* ... */
};

// Solución intuitiva - O(n × k × m) pero más clara
const intuitiveSolution = () => {
  /* ... */
};

// Elegir basado en contexto:
// - Para producción con datos grandes: efficientSolution
// - Para prototipado o enseñanza: intuitiveSolution
```

**Best Practice:** Documentar ambos approaches cuando la diferencia es significativa, explicando cuándo usar cada uno.

---

## Simulación de División Larga y Detección de Ciclos

### Simulación de División Larga

**Definición:** Técnica que implementa el algoritmo de división larga manualmente para convertir fracciones a representación decimal, detectando patrones cíclicos.

**Concepto fundamental:**

- Simular el proceso que hacíamos en primaria: "bajar ceros" y dividir
- La clave está en que **cuando un resto se repite, la secuencia de dígitos también se repite**

**Algoritmo base:**

```typescript
function simulateLongDivision(numerator: number, denominator: number): string {
  let remainder = numerator % denominator; // Resto inicial
  const digits: string[] = [];
  const remainderMap = new Map<number, number>(); // resto → posición

  while (remainder !== 0) {
    if (remainderMap.has(remainder)) {
      // ¡Ciclo detectado!
      const startIndex = remainderMap.get(remainder)!;
      // Insertar paréntesis alrededor de la parte cíclica
      digits.splice(startIndex, 0, "(");
      digits.push(")");
      break;
    }

    // Trackear posición de este resto
    remainderMap.set(remainder, digits.length);

    // Simular "bajar un 0"
    remainder *= 10;

    // Calcular siguiente dígito
    const nextDigit = Math.floor(remainder / denominator);
    digits.push(nextDigit.toString());

    // Calcular nuevo resto
    remainder %= denominator;
  }

  return digits.join("");
}
```

**Paso a paso con ejemplo 4 ÷ 333:**

```
División manual:      Simulación computacional:
  0.012012...         remainder = 4, digits = []
333 ) 4.000000
      40    (4*10)    remainder = 40, digits = ["0"]
      33              40 ÷ 333 = 0, resto = 40
      --
       70   (40*10)   remainder = 400, digits = ["0", "1"]
       66             400 ÷ 333 = 1, resto = 67
       --
        40  (67*10)   remainder = 4 ← ¡YA LO VIMOS!
                      Insertar paréntesis: ["(", "0", "1", "2", ")"]
```

### Detección de Ciclos con HashMap

**Problema:** Detectar cuándo una secuencia entra en un patrón repetitivo.

**Solución:** Usar HashMap para trackear `elemento → primera_posición_de_aparición`.

**Pattern reutilizable:**

```typescript
function detectCycle<T>(sequence: T[]): [boolean, number] {
  const seen = new Map<T, number>();

  for (let i = 0; i < sequence.length; i++) {
    const element = sequence[i];
    if (seen.has(element)) {
      const cycleStart = seen.get(element)!;
      return [true, cycleStart]; // Ciclo detectado, empieza en cycleStart
    }
    seen.set(element, i);
  }

  return [false, -1]; // No hay ciclo
}
```

**Aplicaciones del patrón:**

- **Fraction to Recurring Decimal:** Detección de restos repetidos
- **Happy Number:** Detección de sumas cíclicas
- **Linked List Cycle:** Detección de nodos repetidos
- **Duplicate Detection:** Encontrar elementos repetidos

### Manipulación de Arrays con Splice

**splice() para inserción:** `array.splice(index, 0, element)` inserta elemento en posición específica.

**Ventajas sobre manipulación de strings:**

```typescript
// ❌ String manipulation - menos intuitivo
let str = "012";
str = str.slice(0, 0) + "(" + str.slice(0) + ")"; // "(012)"

// ✅ Array manipulation - más claro
const digits = ["0", "1", "2"];
digits.splice(0, 0, "("); // Insertar "(" en posición 0
digits.push(")"); // Agregar ")" al final
const result = digits.join(""); // "(012)"
```

**Por qué es mejor con arrays:**

- **Visualización clara:** Cada posición es explícita
- **Operaciones atómicas:** splice() es una operación, no múltiples slices
- **Menos propenso a errores:** Indices más fáciles de razonar
- **Flexibilidad:** Fácil insertar en cualquier posición

### Manejo de Signos con XOR

**Definición:** Técnica elegante para determinar el signo del resultado usando XOR lógico.

```typescript
const isNegative = numerator < 0 !== denominator < 0;
```

**Tabla de verdad:**

| numerator | denominator | numerator < 0 | denominator < 0 | XOR Result | Sign |
| --------- | ----------- | ------------- | --------------- | ---------- | ---- |
| 5         | 2           | false         | false           | false      | +    |
| -5        | 2           | true          | false           | true       | -    |
| 5         | -2          | false         | true            | true       | -    |
| -5        | -2          | true          | true            | false      | +    |

**Ventajas del XOR:**

- **Una línea:** Maneja todos los casos de signos
- **Sin branches:** No necesita múltiples if/else
- **Matemáticamente correcto:** Refleja la regla de signos de división
- **Performante:** Operación bitwise muy rápida

**Alternativas menos elegantes:**

```typescript
// ❌ Múltiples condiciones
const isNegative =
  (numerator < 0 && denominator >= 0) || (numerator >= 0 && denominator < 0);

// ❌ Multiplicación innecesaria
const isNegative = numerator * denominator < 0;
```

### Construcción Incremental vs Post-procesamiento

**Principio:** Construir el resultado final paso a paso es más eficiente que generar y transformar.

**Construcción incremental (recomendada):**

```typescript
// Construir directamente el formato deseado
while (remainder !== 0) {
  // Detectar ciclo Y construir resultado simultáneamente
  if (remainderMap.has(remainder)) {
    digits.splice(startIndex, 0, "(");
    digits.push(")");
    break;
  }
  // Agregar dígitos conforme se calculan
  digits.push(nextDigit.toString());
}
```

**Post-procesamiento (menos eficiente):**

```typescript
// ❌ Generar todo, luego transformar
let decimalPart = generateAllDigits();
let cycleIndex = detectCycleIndex();
decimalPart = insertParentheses(decimalPart, cycleIndex);
```

**Ventajas de construcción incremental:**

- **Menos memoria:** No almacenar estados intermedios innecesarios
- **Early termination:** Parar tan pronto como se detecta el patrón
- **Una sola pasada:** No necesitar múltiples iteraciones
- **Código más directo:** Menos transformaciones de datos

### Pattern: Separación de Parte Entera y Decimal

**Técnica estándar para problemas de conversión numérica:**

```typescript
// 1. Manejar casos especiales
if (numerator % denominator === 0) {
  return (numerator / denominator).toString(); // División exacta
}

// 2. Determinar signo
const isNegative = numerator < 0 !== denominator < 0;

// 3. Trabajar con valores absolutos
numerator = Math.abs(numerator);
denominator = Math.abs(denominator);

// 4. Separar partes
const integerPart = Math.floor(numerator / denominator);
let remainder = numerator % denominator;

// 5. Procesar parte decimal con división larga simulada
// ... algoritmo de división larga

// 6. Ensamblar resultado final
return (isNegative ? "-" : "") + integerPart + "." + decimalPart;
```

**Beneficios del approach:**

- **Modularidad:** Cada paso maneja una responsabilidad específica
- **Claridad:** Código auto-documentado por la separación lógica
- **Debuggabilidad:** Fácil verificar cada parte independientemente
- **Reutilización:** Pattern aplicable a otros problemas de conversión

### Aplicaciones Relacionadas del Pattern

**Problemas que usan simulación similar:**

- **Long Division:** Implementación directa del algoritmo
- **Decimal to Fraction:** Proceso inverso, detectar patrones en decimales
- **Base Conversion:** Convertir números entre bases numéricas
- **Square Root by Long Division:** Calcular raíces cuadradas manualmente

**Problemas que usan detección de ciclos:**

- **Floyd's Cycle Detection:** Algoritmo tortuga y liebre
- **Find Duplicate Number:** Usar array como función, detectar ciclo
- **Happy Number:** Detectar ciclos en sumas de cuadrados de dígitos
- **Valid Sudoku:** Detectar repeticiones (variación del concepto)

### Análisis de Complejidad - División Larga

**Time Complexity: O(d)** donde d = número de dígitos únicos antes de repetición

- En el peor caso, d puede ser hasta el valor del denominador
- Cada operación (HashMap, aritmética) es O(1)
- Una sola iteración hasta detectar ciclo

**Space Complexity: O(d)**

- HashMap almacena hasta d entradas: `resto → posición`
- Array de dígitos almacena hasta d elementos
- Espacio adicional constante para variables

**Optimizaciones posibles:**

- Para denominadores específicos, hay patrones conocidos
- Uso de arrays en lugar de HashMap para restos pequeños
- Early termination al alcanzar precisión deseada

**Comparison con enfoques alternativos:**

- **Floating point division:** Impreciso para fracciones periódicas largas
- **String manipulation:** Más lento que array manipulation
- **Recursive approach:** Más memoria (call stack) sin beneficio de claridad

---

## Dynamic Programming - Triangle Minimum Path Sum

### Problema Triangle (LeetCode 120)

**Contexto:** Encontrar la suma mínima del camino desde la cima hasta la base de un triángulo, moviéndose solo a posiciones adyacentes en cada fila.

### ❌ Enfoque Greedy (Incorrecto)

**Idea:** En cada nivel, elegir siempre el valor mínimo disponible.

**Por qué falla:**

```
    1
   2 3
  10 1 10
```

- **Greedy:** 1 → 2 → 1 = 4 (parece óptimo localmente)
- **Óptimo real:** 1 → 3 → 1 = 5 (mejor globalmente)

**Lección:** Las decisiones greedy locales no garantizan optimalidad global.

### ✅ Enfoque Dynamic Programming (Correcto)

**Bottom-Up Approach:** Calcular desde la base hacia arriba.

**Algoritmo:**

1. **Base:** Última fila = sumas mínimas (ellos mismos)
2. **Para cada fila superior:** `valor + min(izquierda_abajo, derecha_abajo)`
3. **Resultado:** Valor en la cima del triángulo

**Ejemplo paso a paso:**

```
    2
   3 4
  6 5 7
 4 1 8 3
```

1. **Fila 3:** `[4, 1, 8, 3]` (base)
2. **Fila 2:** `[6+min(4,1), 5+min(1,8), 7+min(8,3)] = [7, 6, 10]`
3. **Fila 1:** `[3+min(7,6), 4+min(6,10)] = [9, 10]`
4. **Fila 0:** `[2+min(9,10)] = [11]`

### Optimización Espacial: O(n²) → O(n)

**Problema original:** Copiar todo el triángulo = O(n²) espacio.

**Solución:** Mantener solo la fila anterior.

```typescript
// Solo guardamos la fila anterior
let filaAnterior = [...triangle[triangle.length - 1]];

// En cada iteración calculamos la nueva fila
const filaActual = [];
for (let col = 0; col < triangle[fila].length; col++) {
  const izquierda = filaAnterior[col];
  const derecha = filaAnterior[col + 1];
  filaActual[col] = triangle[fila][col] + Math.min(izquierda, derecha);
}

// La fila actual se convierte en anterior
filaAnterior = filaActual;
```

**Beneficios:**

- **Memoria:** De ~n² elementos a n elementos
- **Performance:** Mejor locality de cache
- **Escalabilidad:** Funciona para triángulos grandes (n=200)

### Complejidad

**Time:** O(n²) - Visitamos cada elemento una vez
**Space:** O(n) - Solo fila anterior en memoria

### Patrones Relacionados

- **Grid Path Problems:** Minimum Path Sum, Unique Paths
- **Bottom-Up DP:** Construir desde subproblemas pequeños
- **Space Optimization:** Mantener solo estado necesario
- **Triangle Problems:** Siempre considerar DP bottom-up

### Casos Edge Importantes

1. **Triángulo vacío:** Retornar 0
2. **Un elemento:** Retornar ese elemento
3. **Números negativos:** Funciona igual (mínimo puede ser negativo)
4. **Números mixtos:** Posibles caminos alternativos

### Lecciones Clave

1. **Greedy ≠ DP:** Verificar contraejemplos antes de asumir optimalidad
2. **Bottom-Up DP:** Excelente para problemas de caminos en estructuras
3. **Space Optimization:** Reducir memoria sin afectar complejidad temporal
4. **TDD Approach:** Tests primero garantizan corrección incremental

---

## Geometría Computacional

### Área de Triángulos con Coordenadas

**Problema tipo:** Largest Triangle Area (LeetCode 812)

**Definición:** Calcular el área de un triángulo dados 3 puntos en el plano cartesiano usando la fórmula del determinante.

### Fórmula del Determinante

Para puntos (x₁,y₁), (x₂,y₂), (x₃,y₃):

```
Área = (1/2) × |x₁(y₂ - y₃) + x₂(y₃ - y₁) + x₃(y₁ - y₂)|
```

**Implementación:**

```typescript
function calculateTriangleArea(
  p1: number[],
  p2: number[],
  p3: number[]
): number {
  const [x1, y1] = p1;
  const [x2, y2] = p2;
  const [x3, y3] = p3;
  return 0.5 * Math.abs(x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2));
}
```

### Ventajas del Método Determinante

1. **No requiere distancias:** Evita calcular √((x₂-x₁)² + (y₂-y₁)²)
2. **No requiere ángulos:** Sin trigonometría ni ley de cosenos
3. **Coordenadas negativas:** Funciona sin modificación
4. **Triángulos degenerados:** Puntos colineales → área = 0 automáticamente
5. **Precisión:** Sin acumulación de errores de punto flotante

### Combinaciones C(n,k)

**Patrón:** Generar todas las combinaciones de k elementos de n elementos totales.

**Para triángulos (k=3):**

```typescript
for (let i = 0; i < n - 2; i++) {
  for (let j = i + 1; j < n - 1; j++) {
    for (let k = j + 1; k < n; k++) {
      // Procesar combinación (i,j,k)
    }
  }
}
```

**Características:**

- **Orden:** i < j < k evita duplicados
- **Límites:** n-2, n-1, n evitan índices inválidos
- **Combinaciones:** C(n,3) = n×(n-1)×(n-2)/6 total

### Fuerza Bruta Geométrica

**Cuándo usar:**

- Espacios pequeños (n ≤ 50-100)
- Geometría simple (áreas, perímetros)
- Sin optimizaciones obvias disponibles

**Ventajas:**

- **Simplicidad:** Fácil implementar y debuggear
- **Exactitud:** Garantiza encontrar el óptimo
- **Predictibilidad:** Complejidad conocida y acotada

**Ejemplo - Maximum Triangle Area (Versión Optimizada):**

```typescript
export function largestTriangleArea(points: number[][]): number {
  const n = points.length;
  let maxArea = 0;

  const area = (p1: number[], p2: number[], p3: number[]) => {
    return (
      Math.abs(
        p1[0] * (p2[1] - p3[1]) +
          p2[0] * (p3[1] - p1[1]) +
          p3[0] * (p1[1] - p2[1])
      ) / 2
    );
  };

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        maxArea = Math.max(maxArea, area(points[i], points[j], points[k]));
      }
    }
  }
  return maxArea;
}
```

### Complejidad Geométrica

**Time Complexity:**

- **C(n,3) generación:** O(n³)
- **Cálculo por triángulo:** O(1)
- **Total:** O(n³)

**Space Complexity:**

- **Variables auxiliares:** O(1)
- **Sin estructuras adicionales:** O(1) total

### Casos Edge Geométricos

1. **Puntos colineales:** Área = 0 (triángulo degenerado)
2. **Coordenadas negativas:** Fórmula funciona igual
3. **Mínimo input (n=3):** Una sola combinación posible
4. **Triángulos muy pequeños:** Precision dentro de 10⁻⁵

### Alternativas No Elegidas

**Heron's Formula:**

```
s = (a + b + c) / 2
Área = √(s(s-a)(s-b)(s-c))
```

**Problemas:**

- Requiere calcular 3 distancias (costoso)
- Múltiples operaciones sqrt() (impreciso)
- Más código y mayor probabilidad de bugs

**Product Vector:**

```
Área = 0.5 × |AB × AC|
```

**Problemas:**

- Requiere implementar producto vectorial 3D
- Más conceptualmente complejo
- Sin ventajas claras sobre determinante

### Patrones Geométricos Identificados

1. **Función auxiliar matemática:** Encapsular fórmulas complejas
2. **Fuerza bruta eficiente:** Viable cuando restricciones son pequeñas
3. **Destructuring de coordenadas:** `[x, y] = point` para claridad
4. **Triple bucle combinatorio:** Patrón estándar para C(n,3)

### Lecciones Clave

1. **Determinante > Distancias:** Para problemas de área, usar álgebra antes que geometría
2. **Restricciones pequeñas:** n ≤ 50 permite O(n³) sin problema
3. **Edge cases automáticos:** Buenos algoritmos manejan casos edge naturalmente
4. **Separación de responsabilidades:** Math helper functions mejoran legibilidad

---

## Optimización y Refactoring de Código

### Evolución de Soluciones

**Problema tipo:** Largest Triangle Area - Caso de estudio de refactoring

**Concepto:** Optimizar código existente para mayor concisión sin sacrificar legibilidad o performance.

### Técnicas de Optimización Aplicadas

#### 1. Arrow Functions vs Function Declarations

**Antes (Verbose):**

```typescript
function calculateTriangleArea(
  p1: number[],
  p2: number[],
  p3: number[]
): number {
  const [x1, y1] = p1;
  const [x2, y2] = p2;
  const [x3, y3] = p3;
  return 0.5 * Math.abs(x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2));
}
```

**Después (Conciso):**

```typescript
const area = (p1: number[], p2: number[], p3: number[]) => {
  return (
    Math.abs(
      p1[0] * (p2[1] - p3[1]) +
        p2[0] * (p3[1] - p1[1]) +
        p3[0] * (p1[1] - p2[1])
    ) / 2
  );
};
```

**Beneficios:**

- **Líneas reducidas:** De 6 líneas a 4 líneas
- **Estilo moderno:** Arrow function más funcional
- **Menos variables:** Sin destructuring innecesario

#### 2. Acceso Directo vs Destructuring

**Cuándo usar destructuring:**

```typescript
const [x1, y1] = point; // Para múltiples accesos
console.log(x1, y1, x1 + y1); // Se usa 3+ veces
```

**Cuándo usar acceso directo:**

```typescript
p1[0] * (p2[1] - p3[1]); // Para accesos únicos
```

**Criterios de decisión:**

- **Una sola vez:** Acceso directo `p[0], p[1]`
- **Múltiples veces:** Destructuring `[x, y] = p`
- **Legibilidad:** Si acceso directo es claro, preferirlo

#### 3. Simplificación de Bucles

**Antes (Límites explícitos):**

```typescript
for (let i = 0; i < n - 2; i++) {
  for (let j = i + 1; j < n - 1; j++) {
    for (let k = j + 1; k < n; k++) {
      // ...
    }
  }
}
```

**Después (Límites naturales):**

```typescript
for (let i = 0; i < n; i++) {
  for (let j = i + 1; j < n; j++) {
    for (let k = j + 1; k < n; k++) {
      // ...
    }
  }
}
```

**Ventajas:**

- **Más legible:** `i < n` es más natural
- **Menos cálculo mental:** No hay que pensar `n-2, n-1`
- **Funcionalmente equivalente:** Las condiciones `j = i+1, k = j+1` garantizan validez

### Criterios de Optimización

#### Cuándo Optimizar

1. **Código repetitivo:** DRY (Don't Repeat Yourself)
2. **Verbosidad excesiva:** Más líneas sin beneficio
3. **Patrones anticuados:** `function` → arrow functions
4. **Variables innecesarias:** Destructuring para un solo uso

#### Qué NO Optimizar

1. **Complejidad algoritmica:** Si ya es óptima (O(n³) necesario)
2. **Legibilidad crítica:** Código que será mantenido por otros
3. **Casos edge complejos:** Donde claridad es más importante
4. **Performance marginal:** Micro-optimizaciones sin impacto real

### Proceso de Refactoring TDD-Safe

1. **🧪 Tests first:** Asegurar cobertura completa antes
2. **🔧 Refactor gradual:** Un cambio a la vez
3. **✅ Verificación continua:** Tests después de cada cambio
4. **📊 Medición:** Confirmar que performance se mantiene
5. **📝 Documentación:** Actualizar explicaciones

### Métricas de Mejora

**Largest Triangle Area - Caso Concreto:**

| Métrica                  | Antes                   | Después        | Mejora      |
| ------------------------ | ----------------------- | -------------- | ----------- |
| **Líneas de código**     | ~25                     | ~15            | -40%        |
| **Variables temporales** | 6 (`x1,y1,x2,y2,x3,y3`) | 0              | -100%       |
| **Funciones declaradas** | 1 (`function`)          | 1 (`const =>`) | Más moderno |
| **Performance**          | O(n³)                   | O(n³)          | Idéntica    |
| **Legibilidad**          | ⭐⭐⭐                  | ⭐⭐⭐⭐       | Mejorada    |

### Patrones de Refactoring Identificados

1. **"Verbose to Concise":** Reducir líneas sin perder claridad
2. **"Modern JS Style":** Arrow functions, const, template literals
3. **"Direct Access":** Eliminar variables intermedias innecesarias
4. **"Natural Loops":** Condiciones de bucle más intuitivas
5. **"TDD-Safe Refactor":** Cambios respaldados por tests completos

### Lecciones de Optimización

1. **Refactor ≠ Rewrite:** Mejorar sin cambiar algoritmo fundamental
2. **Legibilidad first:** Concisión nunca debe sacrificar comprensión
3. **Tests como red de seguridad:** Refactoring seguro con cobertura completa
4. **Medición objetiva:** Contar líneas, variables, complejidad
5. **Estilo consistente:** Adoptar patrones modernos uniformemente

---

## Greedy Algorithms (Algoritmos Voraces)

### Definición y Conceptos

**Algoritmo Greedy**: Estrategia de resolución que hace la elección **óptima local** en cada paso, esperando encontrar un **óptimo global**.

**Características principales:**

- **Elección inmediata:** No reconsideran decisiones pasadas
- **Eficiencia:** Generalmente más rápidos que backtracking
- **No siempre óptimos:** Funcionan solo en problemas con **subestructura óptima**

### Cuándo Usar Greedy

**Condiciones necesarias:**

1. **Subestructura óptima:** La solución óptima contiene soluciones óptimas de subproblemas
2. **Propiedad greedy:** La elección local óptima lleva a la global óptima
3. **Sin dependencias futuras:** Decisiones actuales no afectan opciones futuras

**Example - Largest Perimeter Triangle:**

```typescript
// ✅ CORRECTO: Greedy funciona aquí
nums.sort((a, b) => b - a); // Orden descendente
for (let i = 0; i < nums.length - 2; i++) {
  if (nums[i + 1] + nums[i + 2] > nums[i]) {
    return nums[i] + nums[i + 1] + nums[i + 2]; // Primera válida = óptima
  }
}
```

**¿Por qué funciona?**

- **Sorting estratégico:** Exploramos combinaciones más grandes primero
- **Early termination:** Primera válida es automáticamente máxima
- **Sin backtracking:** No necesitamos reconsiderar

### Patrones Greedy Comunes

#### 1. "Greedy + Sort" Pattern

**Estrategia:** Ordenar datos para que greedy sea óptimo.

```typescript
// Plantilla general
function greedyWithSort<T>(items: T[], compareFn: (a: T, b: T) => number): T {
  items.sort(compareFn); // Orden estratégico

  for (const item of items) {
    if (isValidChoice(item)) {
      return item; // Primera válida = óptima
    }
  }

  return defaultValue;
}
```

**Casos de uso:**

- **Interval scheduling:** Ordenar por tiempo de fin
- **Activity selection:** Elegir actividades por duración
- **Triangle perimeter:** Ordenar por tamaño descendente

#### 2. "Mathematical Insight" Pattern

**Estrategia:** Usar propiedades matemáticas para simplificar greedy.

**Example - Triangle Inequality:**

```typescript
// ❌ Naive: Verificar 3 condiciones
if (a + b > c && a + c > b && b + c > a) {
  /* ... */
}

// ✅ Optimized: Una sola condición (a ≥ b ≥ c después de sort)
if (b + c > a) {
  /* ¡Las otras se cumplen automáticamente! */
}
```

**Insight:** La matemática puede eliminar verificaciones redundantes.

#### 3. "Early Termination" Pattern

**Estrategia:** Parar en cuanto encontramos la respuesta.

```typescript
// Template
function findFirst<T>(items: T[], predicate: (item: T) => boolean): T | null {
  for (const item of items) {
    if (predicate(item)) {
      return item; // ⚡ Early return
    }
  }
  return null;
}
```

**Ventajas:**

- **Eficiencia:** Evita búsquedas innecesarias
- **Simplicidad:** Código más directo
- **Garantía:** Funciona cuando sabemos que primera = óptima

### Triangle-Specific Algorithms

#### Desigualdad Triangular

**Definición:** Para formar un triángulo válido con lados a, b, c:

- `a + b > c`
- `a + c > b`
- `b + c > a`

**Optimización cuando a ≥ b ≥ c:**

```typescript
// ✅ Solo necesitamos verificar UNA condición
if (b + c > a) {
  // Las otras dos se cumplen automáticamente:
  // a + b > c ✓ (porque a ≥ c, entonces a + b > b ≥ c)
  // a + c > b ✓ (porque a ≥ b, entonces a + c > c ≥ b)
}
```

**Insight matemático:** El ordenamiento elimina verificaciones redundantes.

### Lecciones de Greedy Algorithms

#### Key Insights

1. **Sorting como habilitador:** El orden correcto hace que greedy funcione
2. **Matemática simplifica:** Usar propiedades del dominio reduce código
3. **First valid = optimal:** En muchos problemas con sorting
4. **Early termination:** Optimización importante para eficiencia
5. **Proof matters:** Verificar que greedy realmente es óptimo

#### When NOT to Use Greedy

**Problemas donde greedy falla:**

- **0/1 Knapsack:** Greedy por ratio valor/peso no es óptimo
- **Shortest path con pesos negativos:** Necesita Bellman-Ford, no Dijkstra
- **Coin change con denominaciones arbitrarias:** Requiere DP

**Red flags:**

- Decisiones tempranas afectan opciones futuras
- Multiple subproblemas overlapping
- No hay ordenamiento obvio que haga greedy óptimo

---

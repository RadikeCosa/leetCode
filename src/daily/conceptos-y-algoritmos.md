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

**Ventajas sobre conversión a string:**

- Más eficiente en memoria
- Evita conversiones de tipo
- Operaciones matemáticas directas
- Cumple restricciones de "sin usar strings"

**Complejidad típica:**

- Tiempo: O(log n) donde n es el número (cantidad de dígitos)
- Espacio: O(1) solo variables auxiliares

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

---

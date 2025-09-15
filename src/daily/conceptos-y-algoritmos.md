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

---
title: "Fibonacci Sequence"
difficulty: "easy"
topics:
  - Array
  - Math
  - Algorithms
source: "freecodecamp"
series: "daily"
category: "coding interview prep"
createdAt: "2025-12-01"
---

# Fibonacci Sequence - Análisis y Solución

## Análisis del Problema

### Descripción

El problema nos pide implementar una función `fibonacciSequence` que recibe dos parámetros:

- `startSequence`: Un array con los dos primeros números de una secuencia de Fibonacci
- `length`: Un entero que representa la longitud deseada de la secuencia

La función debe retornar un array que contenga la secuencia completa de Fibonacci de la longitud especificada, comenzando con los números proporcionados en `startSequence`.

**Características importantes:**

- La secuencia de Fibonacci se genera sumando los dos números anteriores
- Los números iniciales (`startSequence`) ya son parte de la secuencia
- Si `length` es 0, debe retornar un array vacío
- Si `length` es menor o igual a 2, debe retornar solo los primeros `length` elementos del `startSequence`

### Ejemplos

1. `fibonacciSequence([0, 1], 20)` → `[0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181]`

   - Comienza con [0, 1]
   - Genera 18 números adicionales sumando los dos anteriores
   - Total: 20 números

2. `fibonacciSequence([21, 32], 1)` → `[21]`

   - Solo retorna el primer elemento del startSequence
   - Longitud 1, así que ignora el segundo número

3. `fibonacciSequence([0, 1], 0)` → `[]`

   - Longitud 0 retorna array vacío

4. `fibonacciSequence([10, 20], 2)` → `[10, 20]`

   - Longitud 2, retorna exactamente los dos números iniciales

5. `fibonacciSequence([123456789, 987654321], 5)` → `[123456789, 987654321, 1111111110, 2098765431, 3209876541]`
   - Maneja números grandes correctamente
   - Genera 3 números adicionales: 123456789+987654321=1111111110, etc.

### Restricciones

- `length >= 0`: La longitud siempre será un entero no negativo
- `startSequence.length === 2`: El array inicial siempre tendrá exactamente dos números
- Los números pueden ser grandes (hasta el límite de JavaScript para números enteros)
- No hay restricciones en el rango de los números iniciales (pueden ser positivos, negativos, cero)

## Enfoque

### Idea General

El enfoque consiste en construir iterativamente la secuencia de Fibonacci utilizando los dos números iniciales proporcionados. La estrategia es:

1. **Manejar casos base**: Si `length` es 0, retornar array vacío. Si `length` es 1 o 2, retornar los primeros elementos correspondientes del `startSequence`.

2. **Generar la secuencia completa**: Para `length > 2`, crear un array de la longitud deseada y llenarlo siguiendo la regla de Fibonacci: cada número es la suma de los dos anteriores.

### Algoritmo

**Pasos detallados:**

1. **Validación inicial:**

   - Si `length === 0`, retornar `[]`
   - Si `length === 1`, retornar `[startSequence[0]]`
   - Si `length === 2`, retornar `[startSequence[0], startSequence[1]]`

2. **Construcción de la secuencia:**

   - Crear un array `result` de longitud `length`
   - Asignar `result[0] = startSequence[0]`
   - Asignar `result[1] = startSequence[1]`
   - Para `i` desde 2 hasta `length - 1`:
     - `result[i] = result[i-1] + result[i-2]`

3. **Retorno del resultado:**
   - Retornar el array `result`

**Ventajas de este enfoque:**

- **Simple e intuitivo**: Sigue directamente la definición de secuencia de Fibonacci
- **Eficiente**: Un solo bucle que recorre la secuencia una vez
- **Maneja todos los casos**: Casos base y generación completa
- **Predecible**: Comportamiento claro para cualquier entrada válida

## Complejidad

### Tiempo

**O(n)** - Donde n es el parámetro `length`

**Análisis detallado:**

- Los casos base (`length === 0`, `length === 1`, `length === 2`) son O(1)
- Para `length > 2`, realizamos un bucle que itera exactamente `length - 2` veces
- Cada iteración del bucle realiza operaciones aritméticas constantes (suma)
- Por lo tanto, la complejidad es lineal en relación a la longitud deseada de la secuencia

### Espacio

**O(n)** - Donde n es el parámetro `length`

**Análisis detallado:**

- En los casos base, el espacio es O(1) (retornamos arrays de tamaño fijo o vacío)
- Para `length > 2`, creamos un array de tamaño `length` para almacenar toda la secuencia
- No usamos estructuras de datos adicionales que crezcan con n
- El espacio es proporcional a la longitud de la secuencia que debemos retornar

## Implementación

### Código

```javascript
function fibonacciSequence(startSequence, length) {
  // Casos base: manejar longitudes especiales
  if (length === 0) return [];
  if (length === 1) return [startSequence[0]];
  if (length === 2) return startSequence;

  // Para length > 2, generar la secuencia completa
  const sequence = [...startSequence]; // Copiar los primeros dos números

  // Generar los números restantes usando el patrón de Fibonacci
  for (let i = 2; i < length; i++) {
    sequence[i] = sequence[i - 1] + sequence[i - 2];
  }

  return sequence;
}
```

### Explicación Paso a Paso

1. **Manejo de casos base:**

   - `length === 0`: Retornar array vacío (requisito explícito)
   - `length === 1`: Retornar solo el primer número del startSequence
   - `length === 2`: Retornar el startSequence completo (los dos números iniciales)

2. **Inicialización de la secuencia:**

   - Crear una copia del startSequence usando spread operator `[...startSequence]`
   - Esto nos da un array con los primeros dos números ya posicionados

3. **Generación de la secuencia:**

   - Iniciar el bucle desde `i = 2` (tercer elemento)
   - Para cada posición `i`, calcular `sequence[i] = sequence[i-1] + sequence[i-2]`
   - Continuar hasta `i < length` (llenar todas las posiciones requeridas)

4. **Retorno del resultado:**
   - El array `sequence` ahora contiene exactamente `length` elementos
   - Los primeros dos elementos son los números iniciales
   - Los elementos restantes siguen la regla de Fibonacci

## Casos de Prueba

### Casos Básicos

1. **Secuencia completa (length = 20):**

   - **Input:** `[0, 1], 20`
   - **Expected:** `[0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181]`
   - **Propósito:** Verificar que la función genera correctamente una secuencia larga
   - **Validación:** Los números siguen exactamente la regla de Fibonacci

2. **Secuencia con números diferentes:**
   - **Input:** `[123456789, 987654321], 5`
   - **Expected:** `[123456789, 987654321, 1111111110, 2098765431, 3209876541]`
   - **Propósito:** Verificar que funciona con números grandes y startSequence arbitrario
   - **Validación:** `123456789 + 987654321 = 1111111110`, etc.

### Casos Edge

1. **Longitud cero:**

   - **Input:** `[0, 1], 0`
   - **Expected:** `[]`
   - **Propósito:** Verificar el manejo del caso límite de longitud cero
   - **Validación:** Retorna array vacío según especificación

2. **Longitud uno:**

   - **Input:** `[21, 32], 1`
   - **Expected:** `[21]`
   - **Propósito:** Verificar que retorna solo el primer elemento cuando length = 1
   - **Validación:** Ignora el segundo número del startSequence

3. **Longitud dos (mínima secuencia completa):**
   - **Input:** `[10, 20], 2`
   - **Expected:** `[10, 20]`
   - **Propósito:** Verificar que retorna exactamente el startSequence cuando length = 2
   - **Validación:** Los números iniciales son parte de la secuencia

### Casos Extremos

- **Números grandes:** El test con `[123456789, 987654321]` verifica que JavaScript maneja correctamente sumas que resultan en números grandes
- **Longitud variable:** Los tests cubren desde length = 0 hasta length = 20
- **StartSequence arbitrario:** Los tests usan diferentes pares iniciales para asegurar que no hay dependencia de valores específicos

## Aprendizajes

### Patrones Identificados

1. **Manejo de casos base en algoritmos de secuencias:**

   - Importancia de manejar explícitamente los casos edge (length = 0, 1, 2)
   - Los casos base suelen ser O(1) mientras que el caso general es O(n)

2. **Construcción iterativa de secuencias:**

   - Patrón común: inicializar con valores conocidos, luego generar el resto iterativamente
   - Uso de índices para acceder a elementos anteriores: `array[i-1]` y `array[i-2]`

3. **Uso eficiente de arrays en JavaScript:**

   - Spread operator `[...array]` para copiar arrays
   - Arrays como estructuras de datos principales para algoritmos de secuencia
   - Indexación directa para acceso O(1) a elementos

4. **Validación de entrada implícita:**
   - Confianza en las restricciones del problema (startSequence siempre tiene 2 elementos)
   - Enfoque pragmático: validar solo lo necesario según las constraints

### Conceptos Relacionados

- **Secuencias matemáticas:** Fibonacci, progresiones aritméticas, geométricas
- **Algoritmos iterativos:** Construcción bottom-up de soluciones
- **Complejidad algorítmica:** Análisis de tiempo y espacio en funciones lineales
- **Testing exhaustivo:** Cobertura de casos edge, casos normales y casos extremos
- **Programación defensiva:** Manejo de casos límite en funciones públicas

## Optimizaciones y Enfoques Alternativos

### Optimizaciones del Enfoque Actual

**1. Optimización de Espacio - O(1) Space (Two Variables)**

```javascript
function fibonacciSequenceOptimized(startSequence, length) {
  if (length === 0) return [];
  if (length === 1) return [startSequence[0]];

  const result = [startSequence[0], startSequence[1]];
  let a = startSequence[0],
    b = startSequence[1];

  for (let i = 2; i < length; i++) {
    const next = a + b;
    result.push(next);
    a = b;
    b = next;
  }

  return result;
}
```

**Ventajas:** Mantiene O(n) tiempo pero usa O(1) espacio adicional (solo variables temporales)
**Desventajas:** Aún necesitamos O(n) espacio para el resultado final

**2. Optimización de Espacio - Generador (Lazy Evaluation)**

```javascript
function* fibonacciGenerator(startSequence, length) {
  if (length === 0) return;

  yield startSequence[0];
  if (length === 1) return;

  yield startSequence[1];
  if (length === 2) return;

  let a = startSequence[0],
    b = startSequence[1];
  for (let i = 2; i < length; i++) {
    const next = a + b;
    yield next;
    a = b;
    b = next;
  }
}

function fibonacciSequenceLazy(startSequence, length) {
  return [...fibonacciGenerator(startSequence, length)];
}
```

**Ventajas:** Genera números bajo demanda, mejor para secuencias muy largas
**Desventajas:** Más complejo, requiere conocimiento de generadores

### Enfoques Alternativos

**3. Solución Recursiva (No Recomendada)**

```javascript
function fibonacciRecursive(n, startSequence) {
  if (n === 0) return [];
  if (n === 1) return [startSequence[0]];
  if (n === 2) return startSequence;

  const prev = fibonacciRecursive(n - 1, startSequence);
  const next = prev[prev.length - 1] + prev[prev.length - 2];
  return [...prev, next];
}
```

**Problemas:** O(2^n) tiempo - exponencial, causa stack overflow para n > 1000

**4. Solución con Memoización (Top-Down DP)**

```javascript
function fibonacciMemo(startSequence, length, memo = new Map()) {
  if (length === 0) return [];
  if (length === 1) return [startSequence[0]];
  if (length === 2) return startSequence;

  if (memo.has(length)) return memo.get(length);

  const prev = fibonacciMemo(startSequence, length - 1, memo);
  const result = [...prev, prev[length - 2] + prev[length - 3]];
  memo.set(length, result);
  return result;
}
```

**Ventajas:** Evita recalculos, O(n) tiempo y espacio
**Desventajas:** Más complejo, overhead de memoización

**5. Solución con Matrix Exponentiation (O(log n) tiempo)**

```javascript
// Multiplicación de matrices para Fibonacci
function matrixMultiply(A, B) {
  return [
    [
      A[0][0] * B[0][0] + A[0][1] * B[1][0],
      A[0][0] * B[0][1] + A[0][1] * B[1][1],
    ],
    [
      A[1][0] * B[0][0] + A[1][1] * B[1][0],
      A[1][0] * B[0][1] + A[1][1] * B[1][1],
    ],
  ];
}

function matrixPower(matrix, n) {
  if (n === 1) return matrix;
  if (n % 2 === 0) {
    const half = matrixPower(matrix, n / 2);
    return matrixMultiply(half, half);
  } else {
    return matrixMultiply(matrix, matrixPower(matrix, n - 1));
  }
}

function fibonacciMatrix(startSequence, length) {
  if (length === 0) return [];
  if (length === 1) return [startSequence[0]];
  if (length === 2) return startSequence;

  // Matriz de transformación de Fibonacci
  const transform = [
    [1, 1],
    [1, 0],
  ];
  const powered = matrixPower(transform, length - 2);

  // Calcular términos usando la matriz
  const result = [startSequence[0], startSequence[1]];
  for (let i = 2; i < length; i++) {
    // Aplicar transformación matricial
    const newTerm =
      powered[0][0] * startSequence[1] + powered[0][1] * startSequence[0];
    result.push(newTerm);
    // Actualizar para siguiente iteración (complejo)
  }

  return result;
}
```

**Ventajas:** O(log n) tiempo para secuencias muy largas
**Desventajas:** Muy complejo, difícil de implementar correctamente

### Análisis Comparativo

| Enfoque                | Tiempo   | Espacio    | Complejidad | Casos de Uso          |
|

---------------- | -------- | ---------- | ----------- | --------------------- |
| **Actual (Iterativo)** | O(n)     | O(n)       | Baja        | ✅ General            |
| **Two Variables**      | O(n)     | O(1) extra | Baja        | ✅ Memoria limitada   |
| **Generador**          | O(n)     | O(1)       | Media       | ✅ Streams grandes    |
| **Recursivo**          | O(2^n)   | O(n)       | Baja        | ❌ Nunca              |
| **Memoización**        | O(n)     | O(n)       | Media       | ✅ Cálculos repetidos |
| **Matrix Exp.**        | O(log n) | O(1)       | Alta        | ✅ Secuencias enormes |

### Recomendaciones

**Para este problema específico:**

- La solución actual es **óptima** - simple, eficiente y correcta
- No hay necesidad de optimizar más dado que n ≤ 20 en los tests
- La complejidad O(n) es perfectamente aceptable

**Cuándo optimizar:**

- Si n > 10^6: considerar matrix exponentiation
- Si memoria es crítica: usar generadores o two variables
- Si hay cálculos repetidos: memoización

**Conclusión:** Tu solución actual es excelente. Las optimizaciones solo serían necesarias para casos extremos que no aplican aquí.
---
name: tribonacci-sequence
source: freecodecamp
series: daily
category: daily
createdAt: 2025-09-14
difficulty: easy
topics:
  - Array
  - Math
hasImplementation: true
hasTests: true
hasExplanation: true
hasPostSolution: false
---

# Tribonacci Sequence

## Enunciado del Problema

La secuencia de Tribonacci es una serie de números donde cada número es la suma de los tres números precedentes. Cuando se inicia con 0, 0 y 1, los primeros 10 números de la secuencia son: 0, 0, 1, 1, 2, 4, 7, 13, 24, 44.

Dado un array que contiene los primeros tres números de una secuencia de Tribonacci, y un entero que representa la longitud de la secuencia, se debe retornar un array que contenga la secuencia de la longitud dada.

La función debe manejar secuencias de cualquier longitud mayor o igual a cero. Si la longitud es cero, se debe retornar un array vacío. Los números iniciales son parte de la secuencia.

**Ejemplos de casos de prueba:**

- `tribonacciSequence([0, 0, 1], 20)` → `[0, 0, 1, 1, 2, 4, 7, 13, 24, 44, 81, 149, 274, 504, 927, 1705, 3136, 5768, 10609, 19513]`
- `tribonacciSequence([21, 32, 43], 1)` → `[21]`
- `tribonacciSequence([0, 0, 1], 0)` → `[]`
- `tribonacciSequence([10, 20, 30], 2)` → `[10, 20]`
- `tribonacciSequence([10, 20, 30], 3)` → `[10, 20, 30]`
- `tribonacciSequence([123, 456, 789], 8)` → `[123, 456, 789, 1368, 2613, 4770, 8751, 16134]`

## Análisis Inicial

Este problema requiere generar una secuencia de Tribonacci de longitud variable. A diferencia de la secuencia de Fibonacci (que suma los dos números anteriores), la secuencia de Tribonacci suma los tres números anteriores para generar el siguiente.

**Puntos clave a considerar:**

- Los primeros tres números son dados como parámetro `startSequence`
- La longitud puede ser desde 0 hasta cualquier número positivo
- Para longitudes menores o iguales a 3, simplemente retornamos los primeros n elementos del array inicial
- Para longitudes mayores a 3, necesitamos generar los elementos adicionales
- Los números iniciales son parte de la secuencia final

**Casos edge:**

- `length = 0`: retornar array vacío
- `length = 1`: retornar primer elemento
- `length = 2`: retornar primeros dos elementos
- `length = 3`: retornar el array completo inicial
- `length > 3`: generar elementos adicionales

## Solución Implementada

La implementación utiliza un enfoque iterativo con manejo explícito de casos base:

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

**Explicación del algoritmo:**

- **Casos base explícitos:** Se manejan las longitudes 0, 1, 2 y 3 de manera directa para mayor claridad
- **Copia del array inicial:** Se utiliza el spread operator `[...startSequence]` para crear una copia mutable
- **Generación iterativa:** Se itera desde el índice 3 hasta la longitud deseada, calculando cada nuevo elemento como la suma de los tres anteriores
- **Retorno directo:** Se retorna el array resultante sin necesidad de slicing adicional

## Alternativas Consideradas

**Enfoque recursivo:**

```javascript
function tribonacciRecursive(
  startSequence,
  length,
  current = [...startSequence]
) {
  if (current.length >= length) return current.slice(0, length);

  const nextValue =
    current[current.length - 1] +
    current[current.length - 2] +
    current[current.length - 3];
  current.push(nextValue);

  return tribonacciRecursive(startSequence, length, current);
}
```

**Ventajas:** Código más conciso, fácil de entender
**Desventajas:** Riesgo de stack overflow para secuencias largas, menos eficiente en memoria

**Enfoque funcional con reduce:**

```javascript
function tribonacciFunctional(startSequence, length) {
  if (length <= 0) return [];
  if (length <= 3) return startSequence.slice(0, length);

  return Array.from({ length: length - 3 }, (_, i) => i).reduce(
    (acc) => {
      const next =
        acc[acc.length - 1] + acc[acc.length - 2] + acc[acc.length - 3];
      acc.push(next);
      return acc;
    },
    [...startSequence]
  );
}
```

**Ventajas:** Enfoque funcional puro, inmutable
**Desventajas:** Menos legible, reduce puede ser confuso para principiantes

**La solución implementada es preferible porque:**

- Es clara y fácil de seguir
- Maneja casos edge de manera explícita
- Es eficiente tanto en tiempo como en espacio
- Evita riesgos de recursión profunda

## Complejidad

**Complejidad Temporal: O(n)**

- El algoritmo itera exactamente `length - 3` veces en el peor caso
- Cada iteración realiza operaciones aritméticas constantes (suma de tres números)
- Los casos base (length ≤ 3) son O(1)

**Complejidad Espacial: O(n)**

- Se crea un nuevo array que puede crecer hasta tamaño `length`
- En el peor caso, almacenamos todos los elementos de la secuencia
- No se utiliza memoria adicional significativa más allá del array resultante

**Complejidad por casos:**

- `length = 0`: O(1) tiempo, O(1) espacio
- `length = 1, 2, 3`: O(1) tiempo, O(1) espacio
- `length > 3`: O(n) tiempo, O(n) espacio

## Aprendizajes y Reflexiones

**Patrones identificados:**

- **Manejo explícito de casos base:** Para algoritmos de secuencias, es beneficioso manejar longitudes pequeñas de manera directa
- **Uso del spread operator:** `[...array]` es una forma idiomática de crear copias superficiales en JavaScript moderno
- **Iteración controlada:** El bucle `for` con índice permite un control preciso sobre cuándo detener la generación

**Conceptos reforzados:**

- **Secuencias matemáticas:** La diferencia entre Fibonacci (2 términos anteriores) y Tribonacci (3 términos anteriores)
- **Arrays como acumuladores:** Construir resultados incrementalmente es un patrón común en algoritmos generativos
- **Edge cases:** Importancia de considerar longitudes 0, 1, 2, 3 como casos especiales

**Decisiones de diseño:**

- **Casos base explícitos vs. slice:** Opté por claridad sobre concisión, aunque `result.slice(0, length)` sería más genérico
- **Nombres descriptivos:** Variables como `nextValue` hacen el código autodocumentado
- **Early returns:** Los casos base permiten salidas tempranas, reduciendo indentación

**Posibles mejoras futuras:**

- **Validación de entrada:** Podría agregarse verificación de que `startSequence` tenga exactamente 3 elementos
- **Optimización para memoria:** Para secuencias muy largas, podría implementarse un generador (yield)
- **Soporte para BigInt:** Para secuencias muy largas donde los números excedan Number.MAX_SAFE_INTEGER

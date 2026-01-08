---
title: Sorted Array
source: freeCodeCamp
series: daily
category: january
createdAt: 2026-01-08
difficulty: easy
topics:
  - arrays
  - sorting
blogLink: https://blog-astro-rouge.vercel.app/posts/sorted-array/
problemLink: https://www.freecodecamp.org/learn/daily-coding-challenge/2026-01-08/
---

## Sorted Array - Análisis y Explicación

## Enunciado del Problema

Dado un array de números, determina si el array está ordenado en orden ascendente, descendente o no está ordenado.

Si el array dado está:

- En orden ascendente (de menor a mayor), retorna "Ascending"
- En orden descendente (de mayor a menor), retorna "Descending"
- No está ordenado, retorna "Not sorted"

## Análisis Inicial

### Comprensión del Problema

La función debe analizar un array de números y determinar si todos sus elementos están ordenados de forma estrictamente ascendente, estrictamente descendente, o si no cumplen ninguna de estas condiciones. Es decir, debe recorrer el array y comparar cada elemento con el anterior para identificar el tipo de orden, si existe.

### Casos de Prueba Identificados

1. `[1, 2, 3, 4, 5]` → "Ascending"
2. `[10, 8, 6, 4, 2]` → "Descending"
3. `[1, 3, 2, 4, 5]` → "Not sorted"
4. `[3.14, 2.71, 1.61, 0.57]` → "Descending"
5. `[12.3, 23.4, 34.5, 45.6, 56.7, 67.8, 78.9]` → "Ascending"
6. `[0.4, 0.5, 0.3]` → "Not sorted"

## Desarrollo de la Solución

### Enfoque Elegido

Se utiliza un recorrido lineal del array para verificar simultáneamente si está en orden ascendente o descendente. Se inicializan dos banderas (`isAscending` y `isDescending`) en `true`. Al comparar cada elemento con el anterior:

- Si algún elemento es mayor que el anterior, se descarta la posibilidad de que sea descendente.
- Si algún elemento es menor que el anterior, se descarta la posibilidad de que sea ascendente.
  Al finalizar el recorrido, si alguna bandera sigue siendo `true`, se retorna el tipo de orden correspondiente. Si ambas son `false`, el array no está ordenado.

### Implementación Paso a Paso

1. Inicializar dos variables booleanas: `isAscending` y `isDescending` en `true`.
2. Recorrer el array desde el segundo elemento:

- Si el elemento actual es mayor que el anterior, poner `isDescending = false`.
- Si el elemento actual es menor que el anterior, poner `isAscending = false`.

3. Al terminar el bucle:

- Si `isAscending` es `true`, retornar "Ascending".
- Si `isDescending` es `true`, retornar "Descending".
- Si ambas son `false`, retornar "Not sorted".

## Análisis de Complejidad

### Complejidad Temporal

El algoritmo recorre el array una sola vez, por lo que la complejidad temporal es $O(n)$, donde $n$ es la longitud del array. Cada comparación es de costo constante.

### Complejidad Espacial

La complejidad espacial es $O(1)$, ya que solo se utilizan un par de variables adicionales independientemente del tamaño del array.

### Casos Edge y Consideraciones

- Array vacío: retorna "Ascending" (por convención, un array vacío se considera ordenado ascendente).
- Array de un solo elemento: retorna "Ascending" (un solo elemento se considera ordenado ascendente).
- Arrays con elementos repetidos: si hay elementos iguales consecutivos, el algoritmo los considera parte del orden (no estrictamente creciente/ decreciente, sino no decreciente/no creciente).

## Reflexiones y Aprendizajes

### Conceptos Aplicados

- Recorrido lineal de arrays
- Uso de banderas booleanas para simulación de condiciones
- Comparación de elementos adyacentes

### Posibles Optimizaciones

El algoritmo es óptimo para este problema. Si se requiriera identificar el tipo de orden en arrays muy grandes y se pudiera abortar temprano, se podría retornar "Not sorted" en cuanto ambas banderas sean `false` durante el recorrido, evitando recorrer el resto del array.

## Recursos y Referencias

- [Ordenamiento en arrays - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
- [Patrones de recorrido de arrays](https://javascript.info/array-iteration)

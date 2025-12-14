---
title: Matrix Rotate
source: freecodecamp
series: daily
category: september
createdAt: 2025-12-14
difficulty: medium
topics:
  - arrays
  - matrix
  - simulation
blogLink: https://blog-astro-rouge.vercel.app/posts/matrix-rotate/
problemLink: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-09-06/
---

## Matrix Rotate - Análisis y Explicación

## Enunciado del Problema

Dada una matriz (un array de arrays) rotarla 90 grados en el sentido de las agujas del reloj. Por ejemplo, dada [[1,2],[3,4]], la matriz rotada sería [[3,1],[4,2]].

## Análisis Inicial

### Comprensión del Problema

La función debe tomar una matriz (un array de arrays) y rotarla 90 grados en el sentido de las agujas del reloj. Esto implica que la primera fila de la matriz original se convierte en la última columna de la matriz rotada, la segunda fila se convierte en la penúltima columna, y así sucesivamente.

### Casos de Prueba Identificados

Los siguientes casos de prueba ayudan a entender mejor el problema:

- Caso 1: Matriz 1x1
  - Entrada: [[1]]
  - Salida Esperada: [[1]]
- Caso 2: Matriz 2x2
  - Entrada: [[1, 2], [3, 4]]
  - Salida Esperada: [[3, 1], [4, 2]]
- Caso 3: Matriz 3x3
  - Entrada: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
  - Salida Esperada: [[7, 4, 1], [8, 5, 2], [9, 6, 3]]
- Caso 4: Matriz con ceros
  - Entrada: [[0, 1, 0], [1, 0, 1], [0, 0, 0]]
  - Salida Esperada: [[0, 1, 0], [0, 0, 1], [0, 1, 0]]

## Desarrollo de la Solución

### Enfoque Elegido

El enfoque que elegimos es el que considero mas sencillo para rotar una matriz en sentido horario, que consiste en crear una nueva matriz vacia con las dimensiones adecuadas y luego recorrer cada elemento de la original para ubicarlo en su nueva posicion, especificamente el elemento que se encuentra en la posicion i, j de la matriz original se ubicara en la posicion j, n-1-i de la nueva matriz, donde n es el numero de filas de la matriz original.

### Implementación Paso a Paso

1. Determinar el numero de filas (n) y columnas (m) de la matriz original.
2. crear una nueva matriz vacia con dimensiones m x n.
3. Recorrer cada elemento de la matriz original usando dos bucles anidados.
4. Para cada elemento en la posición (i, j) de la matriz original, asignarlo a la posición (j, n-1-i) de la nueva matriz. Esto se debe a que, al rotar la matriz 90° en sentido horario, la primera fila de la original se convierte en la última columna de la rotada, la segunda fila en la penúltima columna, y así sucesivamente. Por eso, el índice de fila (i) pasa a ser el índice de columna (j) en la nueva matriz, y el índice de columna (j) pasa a ser la fila invertida (n-1-i).
5. Devolver la nueva matriz rotada.

### Codigo Final

```js
function rotate(matrix) {
  const n = matrix.length;
  const m = matrix[0].length;
  const rotated = Array.from({ length: m }, () => Array(n));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      rotated[j][n - 1 - i] = matrix[i][j];
    }
  }
  return rotated;
}
```

## Análisis de Complejidad

### Complejidad Temporal

El algoritmo recorre todos los elementos de la matriz original una sola vez, por lo que la complejidad temporal es O(n \* m), donde n es el número de filas y m el número de columnas.

### Complejidad Espacial

Se utiliza una nueva matriz de tamaño m x n para almacenar el resultado, por lo que la complejidad espacial también es O(n \* m).

## Casos Edge y Consideraciones

- Matriz vacía: Si la matriz está vacía o alguna de sus filas está vacía, la función debe manejarlo correctamente.
- Matriz 1x1: La rotación de una matriz de un solo elemento debe devolver la misma matriz.
- Matriz no cuadrada: El algoritmo funciona para matrices rectangulares, no solo cuadradas.

## Reflexiones y Aprendizajes

### Conceptos Aplicados

- Manipulación de matrices y arrays bidimensionales.
- Uso de bucles anidados para recorrer estructuras complejas.
- Cálculo y transformación de índices para mapear posiciones entre la matriz original y la rotada.
- Análisis de complejidad temporal y espacial.
- Manejo de casos edge y validación de entradas.

### Posibles Optimizaciones

Si la matriz es cuadrada y se permite modificar la matriz original, se puede realizar la rotación in-place (en el mismo arreglo) para ahorrar espacio, primero transponiendo la matriz y luego invirtiendo cada fila. Sin embargo, para matrices no cuadradas o si se requiere preservar la original, el enfoque presentado es el más adecuado.

### Recursos y Referencias

- Documentación de JavaScript sobre arrays: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array
- Explicación visual de rotación de matrices: https://www.geeksforgeeks.org/rotate-matrix-90-degree-without-using-extra-space-set-2/
- Problemas similares en LeetCode: https://leetcode.com/problems/rotate-image/

Este problema es útil para practicar manipulación de matrices y comprensión de índices bidimensionales. Permite reforzar el uso de bucles anidados y el razonamiento sobre cómo se transforman las posiciones de los elementos al rotar una matriz. Además, muestra la importancia de analizar la complejidad y de considerar casos edge en la implementación de algoritmos.

### Conceptos Aplicados

<!-- TODO: ¿Qué patrones/técnicas se usaron? -->

### Posibles Optimizaciones

<!-- TODO: ¿Se puede mejorar? -->

## Recursos y Referencias

<!-- TODO: Links útiles, algoritmos relacionados, etc. -->

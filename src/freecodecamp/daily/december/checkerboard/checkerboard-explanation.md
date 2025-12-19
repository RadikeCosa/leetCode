---
title: Checkerboard
source: freecodecamp
series: daily
category: december
createdAt: 2025-12-18
difficulty: Easy
topics:
  - matrices
  - patrones
  - bucles
blogLink: https://blog-astro-rouge.vercel.app/posts/checkerboard/
problemLink: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-12-18/
---

## Checkerboard - Análisis y Explicación

## Enunciado del Problema

Dado un array con dos números, el primero representa el número de filas y el segundo el número de columnas. Se debe retornar una matriz (array de arrays) llena de "X" y "O" del tamaño especificado.

- Los caracteres deben alternarse como en un tablero de damas.
- El primer carácter en la esquina superior izquierda debe ser siempre "X".

Por ejemplo, dado [3, 3], se debe retornar:

```text
[
  ["X", "0", "X"],
  ["0", "X", "0"],
  ["X", "0", "X"]
]
```

## Análisis Inicial

### Comprensión del Problema

El problema requiere generar una matriz bidimensional con un patrón alternante de "X" y "O", similar a un tablero de damas. El primer elemento (esquina superior izquierda) debe ser siempre "X", y los caracteres deben alternarse correctamente tanto en filas como en columnas para mantener el patrón.

### Casos de Prueba Identificados

1. Matriz cuadrada pequeña ([3, 3]):

- Entrada: [3, 3]
- Salida esperada: [["X", "O", "X"], ["O", "X", "O"], ["X", "O", "X"]]

2. Matriz de una sola columna ([6, 1]):

- Entrada: [6, 1]
- Salida esperada: [["X"], ["O"], ["X"], ["O"], ["X"], ["O"]]

3. Matriz de dos filas y muchas columnas ([2, 10]):

- Entrada: [2, 10]
- Salida esperada: [["X", "O", "X", "O", "X", "O", "X", "O", "X", "O"], ["O", "X", "O", "X", "O", "X", "O", "X", "O", "X"]]

4. Matriz rectangular ([5, 4]):

- Entrada: [5, 4]
- Salida esperada: [["X", "O", "X", "O"], ["O", "X", "O", "X"], ["X", "O", "X", "O"], ["O", "X", "O", "X"], ["X", "O", "X", "O"]]

## Desarrollo de la Solución

### Enfoque Elegido

El enfoque consiste en crear la matriz utilizando `new Array` y llenarla mediante una función que, para cada posición, determine si debe colocarse una "X" o una "O". Esto se logra evaluando la suma de los índices de fila y columna: si la suma es par, se coloca una "X"; si es impar, una "O". Así se garantiza el patrón alternante requerido.

### Implementación Paso a Paso

1. Crear una función `createBoard` que reciba un array `dimensions` con dos elementos: número de filas y número de columnas.
2. Inicializar una matriz vacía utilizando `new Array(rows).fill(null).map(() => new Array(cols))`.
3. Iterar sobre cada fila y columna utilizando bucles anidados.
4. Para cada posición `(i, j)`, verificar si la suma `i + j` es par o impar.
5. Asignar "X" si la suma es par y "O" si es impar.
6. Retornar la matriz completa.

### Implementación Final

```javascript
function createBoard(dimensions) {
  const [rows, cols] = dimensions;
  const board = new Array(rows).fill(null).map(() => new Array(cols));
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      board[i][j] = (i + j) % 2 === 0 ? "X" : "O";
    }
  }
  return board;
}
```

## Análisis de Complejidad

### Complejidad Temporal

La complejidad temporal es O(n \* m), donde n es el número de filas y m el número de columnas. Esto se debe a que recorremos cada celda de la matriz una sola vez para asignar el valor correspondiente.

### Complejidad Espacial

La complejidad espacial también es O(n \* m), ya que se crea una matriz de tamaño proporcional a la cantidad de filas y columnas solicitadas.

## Casos Edge y Consideraciones

- Si alguna de las dimensiones es cero ([0, m] o [n, 0]), la función debe retornar una matriz vacía o arrays vacíos según corresponda.
- Para dimensiones mínimas ([1, 1]), el resultado debe ser [["X"]].
- El algoritmo funciona para cualquier tamaño positivo, incluyendo matrices no cuadradas.

## Reflexiones y Aprendizajes

### Conceptos Aplicados

- Uso de bucles anidados para recorrer matrices.
- Indexación y aritmética modular para alternar valores.
- Inicialización eficiente de arrays bidimensionales en JavaScript.

### Posibles Optimizaciones

La solución es óptima para el problema planteado. No requiere optimizaciones adicionales, ya que cada celda se calcula en tiempo constante y no hay redundancia en el proceso.

## Recursos y Referencias

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
- https://en.wikipedia.org/wiki/Checkerboard

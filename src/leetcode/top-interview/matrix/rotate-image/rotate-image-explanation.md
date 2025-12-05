---
title: Rotate Image
source: leetcode
series: top-interview-150
category: matrix
createdAt: 2025-12-04
difficulty: medium
topics:
  - array
  - math
  - matrix
blogLink: https://blog-astro-rouge.vercel.app/posts/rotate-image/
---

## Rotate Image - Análisis y Explicación

## Enunciado del Problema

Se te proporciona una matriz 2D de `n x n` que representa una imagen. Debes rotar la imagen 90 grados (en sentido horario).

Tienes que rotar la imagen **in-place** (en el lugar), lo que significa que debes modificar directamente la matriz 2D de entrada. **NO** asignes otra matriz 2D y hagas la rotación.

## Análisis Inicial

### Comprensión del Problema

El problema requiere rotar una matriz cuadrada 90 grados en el sentido de las agujas del reloj. La rotación debe hacerse sin utilizar espacio adicional para otra matriz, lo que implica que debemos modificar la matriz original directamente. Para entender la rotacion tenemos que observar el patron de movimiento de los elementos:

- El elemento en la posición `(i, j)` se mueve a la posición `(j, n-1-i)`.
- Esto significa que el primer elemento de la primera fila se convierte en el último elemento de la primera columna, y así sucesivamente.

### Ejemplo Visual

Consideremos la siguiente matriz 3x3:

```Before Rotation:         After Rotation:
1 2 3                   7 4 1
4 5 6       ---->       8 5 2
7 8 9                   9 6 3
```

En este ejemplo, podemos ver cómo cada elemento se mueve a su nueva posición después de la rotación de 90 grados en sentido horario.
El elemento `1` (posición `(0,0)`) se mueve a la posición `(0,2)`, el elemento `2` (posición `(0,1)`) se mueve a la posición `(1,2)`, y así sucesivamente.

### Casos de Prueba Identificados

**Ejemplo 1:**

```
Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[7,4,1],[8,5,2],[9,6,3]]
```

**Ejemplo 2:**

```
Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
```

**Restricciones:**

- `n == matrix.length == matrix[i].length`
- `1 <= n <= 20`
- `-1000 <= matrix[i][j] <= 1000`

## Desarrollo de la Solución

### Enfoque Elegido

Para rotar la matriz y que sea in-place:

1. **Transponer la Matriz**: Intercambiar los elementos `matrix[i][j]` con `matrix[j][i]`.
2. **Invertir Cada Fila**: Después de la transposición, invertir cada fila de la matriz con el fin de completar la rotación de 90 grados en sentido horario.

### Implementación Paso a Paso (siguiendo el código)

el proceso de rotación de la matriz, siguiendo el orden y lógica del código presentado:

1. **Transponer la matriz**  
   El primer bucle recorre la matriz y, para cada elemento `matrix[i][j]` donde $j > i$, intercambia su valor con `matrix[j][i]`. Esto convierte las filas en columnas y viceversa. Por ejemplo, el valor en la posición `(0,1)` se intercambia con el de `(1,0)`, el de `(0,2)` con el de `(2,0)`, y así sucesivamente. Al finalizar este paso, la matriz queda transpuesta.

2. **Invertir cada fila**  
   El segundo bucle recorre cada fila de la matriz. Para cada fila, utiliza dos punteros (`left` y `right`) que empiezan en los extremos de la fila. Se intercambian los valores de ambos extremos y los punteros se acercan hacia el centro, repitiendo el proceso hasta que se crucen. Esto invierte el orden de los elementos en cada fila, completando la rotación de 90 grados en sentido horario.

3. **Matriz final rotada**  
   Al terminar ambos pasos, la matriz original ha sido modificada directamente y ahora representa la imagen rotada 90 grados en sentido horario, cumpliendo con la restricción de hacerlo in-place y sin usar memoria adicional.

## Análisis de Complejidad

### Complejidad Temporal

La solución realiza dos recorridos completos sobre la matriz:

- La transposición recorre aproximadamente la mitad de los elementos ($O(n^2)$).
- La inversión de filas recorre todos los elementos ($O(n^2)$).
  Por lo tanto, la complejidad temporal total es $O(n^2)$.

### Complejidad Espacial

La solución no utiliza espacio adicional significativo, ya que todos los intercambios se realizan in-place sobre la matriz original. Por lo tanto, la complejidad espacial es $O(1)$.

## Casos Edge y Consideraciones

- Matriz de tamaño 1x1: No requiere cambios, ya que rotar una sola celda no altera la matriz.
- Matriz de tamaño par e impar: El algoritmo funciona para ambos casos.
- Elementos negativos o fuera de orden: No afecta la lógica, ya que solo se intercambian posiciones.

## Reflexiones y Aprendizajes

### Conceptos Aplicados

- Transposición de matrices.
- Inversión de arreglos.
- Manipulación in-place para optimizar espacio.

### Posibles Optimizaciones

La solución presentada es óptima en cuanto a complejidad temporal y espacial para el problema planteado. No requiere optimizaciones adicionales.

## Recursos y Referencias

- [Matrices](<https://en.wikipedia.org/wiki/Matrix_(mathematics)>)
- [Transposición de Matrices](https://en.wikipedia.org/wiki/Transpose)

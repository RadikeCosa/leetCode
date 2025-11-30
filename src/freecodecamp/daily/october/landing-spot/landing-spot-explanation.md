---
name: landing-spot
source: freecodecamp
series: daily
category: daily
createdAt: 2025-10-12
difficulty: easy
topics:
  - Array
  - Matrix
hasImplementation: true
hasTests: true
hasExplanation: true
hasPostSolution: false
---

# Explicación

## Análisis del problema

El problema consiste en encontrar el lugar más seguro para aterrizar un rover en una matriz de números, donde cada celda representa un posible sitio de aterrizaje o un peligro. Los ceros (0) son los únicos lugares donde se puede aterrizar, y los números del 1 al 9 representan distintos niveles de peligro (a mayor número, mayor peligro). El objetivo es identificar el cero cuya suma de peligros en sus vecinos directos (arriba, abajo, izquierda, derecha) sea la menor posible. Siempre hay un único lugar más seguro.

## Enfoque y algoritmo

1. Recorrer toda la matriz y localizar las posiciones donde el valor es cero (`0`).
2. Para cada cero, calcular la suma de los valores de sus vecinos directos (arriba, abajo, izquierda, derecha), ignorando diagonales y cualquier vecino fuera de los límites de la matriz.
3. Comparar la suma de peligros de cada cero y guardar la posición con la suma más baja.
4. Retornar los índices `[fila, columna]` del lugar más seguro.

Este proceso garantiza que se evalúan todas las opciones posibles y que se cumple la restricción de que siempre hay un único lugar más seguro.

## Complejidad

La solución recorre toda la matriz una sola vez y, para cada cero, calcula la suma de sus vecinos directos. Como cada suma implica hasta 4 operaciones constantes, la complejidad es:

- **Tiempo:** O(n \* m), donde n es la cantidad de filas y m la cantidad de columnas.
- **Espacio:** O(1), ya que solo se usan variables para la suma mínima y la mejor posición.

## Casos límite y ejemplos

- Matriz de 1x1 con un solo cero: `[[0]]` → `[0, 0]`
- Ceros en esquinas y bordes: `[[0, 9, 9, 0], [9, 9, 9, 9], [0, 9, 9, 0]]` → `[0, 0]`
- Cero rodeado de máximos peligros: `[[9, 9, 9], [9, 0, 9], [9, 9, 9]]` → `[1, 1]`
- Matriz rectangular: `[[1, 2, 3, 0], [4, 5, 6, 7], [0, 8, 9, 1]]` → `[0, 3]`
- Ejemplos del enunciado y otros casos con diferentes distribuciones de ceros y peligros.

## Aprendizajes y patrones

- Uso de recorrido completo de matrices para buscar condiciones óptimas.
- Importancia de considerar los límites de la matriz para evitar errores de acceso.
- Separación de lógica en funciones auxiliares para mayor claridad y reutilización.

## Explicación de la función auxiliar

La función auxiliar `sumarVecinos(matrix, fila, columna)` se encarga de calcular la suma de los valores de los vecinos directos (arriba, abajo, izquierda, derecha) de una celda específica de la matriz. Es fundamental ignorar los vecinos que estén fuera de los límites para evitar errores.

**¿Cómo funciona?**

- Recibe la matriz y la posición `[fila, columna]` del cero.
- Para cada dirección (arriba, abajo, izquierda, derecha), verifica si el vecino existe (no está fuera de la matriz).
- Si existe, suma el valor de ese vecino a la variable `suma`.
- Retorna la suma total de peligros alrededor de ese cero.

Este patrón es muy útil en problemas de matrices donde se requiere analizar el entorno de una celda, y puede adaptarse fácilmente para considerar diagonales o más vecinos si el problema lo requiere.

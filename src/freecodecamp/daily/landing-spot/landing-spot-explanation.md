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

## Casos límite y ejemplos

## Aprendizajes y patrones

---
title: Tic Tac Toe
source: freecodecamp
series: daily
category: january
createdAt: 2026-01-12
difficulty: medium
topics:
  - arrays
  - game
  - simulation
  - matrix
blogLink: https://blog-astro-rouge.vercel.app/posts/tic-tac-toe/
problemLink: https://www.freecodecamp.org/learn/daily-coding-challenge/2026-01-10/
---

## Tic Tac Toe - Análisis y Explicación

## Enunciado del Problema

Dada una matriz (array de arrays) de 3x3 que representa un tablero de TaTeTi completo, debes determinar el ganador.

- Cada elemento en la matriz dad puede ser "X", "O"

Un jugador gana si hay tres de sus caracteres en linea horizontal, vertical o diagonal.

Retorna

- "X wins" si X es el ganador
- "O wins" si O es el ganador
- "Draw" si no hay ganador

## Análisis Inicial

### Comprensión del Problema

El problema nos pide analizar un tablero de tateti y determinar el ganador
basándonos en las posiciones de "X" y "O". Un jugador gana si tiene tres de sus símbolos en línea horizontal, vertical o diagonal. Si ninguno de los jugadores cumple esta condición, el resultado es un empate.

### Casos de Prueba Identificados

Los Casos de prueba identificados son:

- ticTacToe([["X", "O", "X"], ["O", "X", "O"], ["O", "X", "X"]]) → "X wins" (X gana en diagonal)
- ticTacToe([["O", "O", "O"], ["X", "X", "O"], ["X", "O", "X"]]) → "O wins" (O gana en horizontal)
- ticTacToe([["X", "O", "X"], ["O", "X", "O"], ["O", "X", "O"]]) → "Draw" (empate)
- ticTacToe([["X", "X", "X"], ["O", "O", "X"], ["O", "X", "O"]]) → "X wins" (X gana en horizontal)
- ticTacToe([["O", "X", "X"], ["O", "X", "O"], ["O", "X", "O"]]) → "O wins" (O gana en vertical)

## Desarrollo de la Solución

### Enfoque Elegido

Para respñver este problema el enfoque elegido es:

1. Verificar todas las filas para ver si alguna tiene tres "X" o tres "O".
2. Verificar todas las columnas para ver si alguna tiene tres "X" o tres "O".
3. Verificar las dos diagonales para ver si alguna tiene tres "X" o tres "O".
4. Si se encuentra un ganador en cualquiera de estas verificaciones, retornar el resultado correspondiente.
5. Si no se encuentra ningún ganador, retornar "Draw".

### Implementación Paso a Paso

1. Crear una función `ticTacToe` que tome una matriz 3x3 como entrada.
2. Implementar verificaciones para filas, columnas y diagonales.
3. Retornar el resultado basado en las verificaciones.

## Análisis de Complejidad

### Complejidad Temporal

La función recorre todas las filas, columnas y dos diagonales para ambos jugadores. Cada verificación es $O(1)$ porque la matriz es de tamaño fijo (3x3). Por lo tanto, la complejidad temporal es $O(1)$ (constante), ya que la cantidad de operaciones no depende de la entrada.

### Complejidad Espacial

El uso de espacio también es $O(1)$, ya que solo se utilizan variables escalares y no se crean estructuras adicionales proporcionales al tamaño de la entrada.

## Casos Edge y Consideraciones

- Tableros donde ambos jugadores tienen línea ganadora: según la implementación y los tests, se prioriza a "O" si ambos cumplen la condición.
- Tableros con solo un tipo de símbolo: el algoritmo sigue funcionando y retorna el ganador si hay línea, o "Draw" si no.
- Tableros con múltiples líneas ganadoras para el mismo jugador: el resultado sigue siendo correcto.

## Reflexiones y Aprendizajes

### Conceptos Aplicados

- Simulación de juegos de tablero.
- Recorrido sistemático de matrices.
- Separación de lógica en funciones auxiliares para mejorar legibilidad y reutilización.

### Posibles Optimizaciones

Para un tablero 3x3, la solución es óptima y no requiere mejoras. Si el tablero fuera de tamaño variable, se podría generalizar la función para aceptar cualquier dimensión y número de símbolos en línea para ganar.

## Recursos y Referencias

- https://es.wikipedia.org/wiki/Tres_en_l%C3%ADnea
- https://en.wikipedia.org/wiki/Tic-tac-toe

---
title: Rock Paper Scissors
source: freecodecamp
series: daily
category: december
createdAt: 2025-12-27
difficulty: easy
topics:
  - strings
  - comparisons
blogLink: https://blog-astro-rouge.vercel.app/posts/rock-paper-scissors/
problemLink: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-12-27/
---

## Rock Paper Scissors - Análisis y Explicación

### Enunciado del Problema

Dados dos strings, el primero representando la elección del jugador uno y el segundo la del jugador dos en un juego de "Piedra, Papel o Tijeras", determina el ganador.

- Los inputs siempre serán "Rock", "Paper" o "Scissors".
- Rock gana a Scissors
- Paper gana a Rock
- Scissors gana a Paper

Se debe retornar:

- "Player 1 wins" si el jugador uno gana
- "Player 2 wins" si el jugador dos gana
- "Tie" si hay empate

---

## Análisis Inicial

La función debe comparar dos elecciones y decidir el resultado según las reglas clásicas del juego. No hay validaciones extra porque los inputs siempre son válidos.

---

## Casos de Prueba Identificados

1. rockPaperScissors("Rock", "Rock") → "Tie"
2. rockPaperScissors("Rock", "Paper") → "Player 2 wins"
3. rockPaperScissors("Scissors", "Paper") → "Player 1 wins"
4. rockPaperScissors("Rock", "Scissors") → "Player 1 wins"
5. rockPaperScissors("Scissors", "Scissors") → "Tie"
6. rockPaperScissors("Scissors", "Rock") → "Player 2 wins"

Estos cubren todos los posibles resultados y combinaciones.

---

## Desarrollo de la Solución

### Enfoque Elegido

Se utiliza una estructura condicional simple:

- Si ambos jugadores eligen lo mismo, es empate.
- Si la combinación es una de las tres donde el jugador uno gana, retorna "Player 1 wins".
- En cualquier otro caso, gana el jugador dos.

### Implementación Paso a Paso

1. Comparar si player1 === player2 → retornar "Tie".
2. Verificar si (player1, player2) es una de las combinaciones ganadoras para el jugador uno:
   - ("Rock", "Scissors")
   - ("Paper", "Rock")
   - ("Scissors", "Paper")
     Si es así, retornar "Player 1 wins".
3. Si no, retornar "Player 2 wins".

---

## Análisis de Complejidad

### Complejidad Temporal

La función realiza solo comparaciones directas y condicionales simples, por lo que su complejidad es $O(1)$ (constante), independientemente de la entrada.

### Complejidad Espacial

No se utilizan estructuras auxiliares ni almacenamiento adicional relevante, por lo que la complejidad espacial también es $O(1)$.

---

## Casos Edge y Consideraciones

- No hay casos edge fuera de los ya cubiertos, ya que los inputs siempre son válidos y limitados a las tres opciones.

---

## Reflexiones y Aprendizajes

### Conceptos Aplicados

- Comparación de strings
- Condicionales múltiples
- Lógica de juego clásica

### Posibles Optimizaciones

Para este problema, la solución es óptima en legibilidad y eficiencia. Alternativamente, se podría usar un objeto de mapeo para generalizar la lógica, pero para tres opciones, el enfoque actual es el más claro.

---

## Recursos y Referencias

- [Rock Paper Scissors - Wikipedia](https://en.wikipedia.org/wiki/Rock_paper_scissors)

- No hay casos edge fuera de los ya cubiertos, ya que los inputs siempre son válidos y limitados a las tres opciones.
- No edge cases beyond those already covered, since inputs are always valid and limited to the three options.

---

## Reflexiones y Aprendizajes / Reflections and Learnings

### Conceptos Aplicados / Concepts Used

- Comparación de strings
- Condicionales múltiples
- Lógica de juego clásica

- String comparison
- Multiple conditionals
- Classic game logic

### Posibles Optimizaciones / Possible Optimizations

Para este problema, la solución es óptima en legibilidad y eficiencia. Alternativamente, se podría usar un objeto de mapeo para generalizar la lógica, pero para tres opciones, el enfoque actual es el más claro.

For this problem, the solution is optimal in readability and efficiency. Alternatively, a mapping object could be used to generalize the logic, but for three options, the current approach is the clearest.

---

## Recursos y Referencias / Resources

- [Rock Paper Scissors - Wikipedia](https://en.wikipedia.org/wiki/Rock_paper_scissors)

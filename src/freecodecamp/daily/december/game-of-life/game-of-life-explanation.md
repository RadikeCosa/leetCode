---
title: Game Of Life
source: freecodecamp
series: daily
category: december
createdAt: 2025-12-13
difficulty: medium
topics:
  - arrays
  - matrix
  - simulation
  - game-of-life
  - cellular-automaton
blogLink: https://blog-astro-rouge.vercel.app/posts/game-of-life/
problemLink: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-12-13/
---

## Game Of Life - Análisis y Explicación

### ¿Qué es el Juego de la Vida de Conway?

El Juego de la Vida de Conway es un autómata celular desarrollado por el matemático John Horton Conway en 1970. Es un modelo matemático que simula la evolución de una población de células en una cuadrícula bidimensional, donde cada célula puede estar viva o muerta. El estado de cada célula en la siguiente generación depende del estado actual de sus vecinos según reglas específicas. A pesar de su sencillez, el Juego de la Vida es famoso porque puede generar patrones complejos y sorprendentes, y ha sido estudiado en matemáticas, computación y teoría de sistemas complejos como un ejemplo clásico de cómo reglas locales pueden producir comportamientos globales inesperados.

---

## Enunciado del Problema

Dada una matriz (array de arrays) representando el estado actual en el Juego de la Vida de Conway, devolver el próximo estado de la matriz siguiendo las reglas del juego:

- Cada célula es 1 (viva) o 0 (muerta).
- Los vecinos de una célula son las 8 celdas adyacentes (horizontal, vertical y diagonalmente).
- Las células en los bordes tienen menos de 8 vecinos.

_Reglas para actualizar el estado de cada célula:_

- Cualquier célula viva con menos de dos células vivas vecinas muere (subpoblación).
- Cualquier célula viva con dos o tres células vivas vecinas sigue viva.
- Cualquier célula viva con más de tres células vivas vecinas muere (sobrepoblación).
- Cualquier célula muerta con exactamente tres células vecinas vivas se convierte en una célula viva (reproducción).

Por ejemplo, dado el siguiente estado inicial:

```text
[
  [0, 1, 0],
  [0, 0, 1],
  [1, 1, 1],
  [0, 0, 0]
]
```

El siguiente estado será:

```text
[
  [0, 0, 0],
  [1, 0, 1],
  [0, 1, 1],
  [0, 1, 0]
]
```

---

## Comprensión del Problema

El objetivo es simular una generación del Juego de la Vida de Conway a partir de una matriz que representa el estado actual de las células. Para cada celda, debemos contar cuántos de sus ocho vecinos (incluyendo diagonales) están vivos y, según ese conteo, decidir si la celda vivirá, morirá o nacerá en la siguiente generación, siguiendo reglas bien definidas. El desafío principal radica en recorrer la matriz de manera eficiente, identificar correctamente los vecinos de cada celda (especialmente en los bordes y esquinas), y construir una nueva matriz que refleje el estado actualizado sin modificar la original durante el proceso.

---

## Casos de Prueba Identificados

Para asegurar el correcto funcionamiento de la solución, es fundamental identificar y probar distintos casos representativos. A continuación se detallan algunos de los más relevantes:

- **Matriz mínima (1x1):**

  ```text
  [ [1] ] → [ [0] ]
  [ [0] ] → [ [0] ]
  ```

- **Matriz pequeña (2x2) toda viva o toda muerta:**

  ```text
  [ [1, 1],
    [1, 1] ] → [ [1, 1],
                 [1, 1] ]

  [ [0, 0],
    [0, 0] ] → [ [0, 0],
                 [0, 0] ]
  ```

- **Patrón "bloque" (estable):**

  ```text
  [ [1, 1],
    [1, 1] ] → [ [1, 1],
                 [1, 1] ]
  ```

- **Patrón "parpadeador" (oscilador):**

  ```text
  [ [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0] ] → [ [0, 0, 0],
                    [1, 1, 1],
                    [0, 0, 0] ]
  ```

- **Celdas vivas en los bordes o esquinas:**

  ```text
  [ [1, 0, 0],
    [0, 0, 0],
    [0, 0, 1] ] → [ [0, 0, 0],
                    [0, 0, 0],
                    [0, 0, 0] ]
  ```

- **Celda muerta revive por tener exactamente tres vecinos vivos:**

  ```text
  [ [1, 1, 0],
    [0, 0, 1],
    [0, 0, 0] ] → [ [1, 1, 0],
                    [0, 1, 0],
                    [0, 0, 0] ]
  ```

- **Celda viva muere por sobrepoblación o soledad:**
  ```text
  [ [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1] ] → [ [1, 0, 1],
                    [0, 0, 0],
                    [1, 0, 1] ]
  ```

---

## Desarrollo de la Solución

### Enfoque Elegido

Para resolver el problema sin modificar la matriz original, la idea es crear una nueva matriz que represente el siguiente estado, recorriendo la original y calculando el valor de cada celda según las reglas. Se utilizan funciones auxiliares para contar vecinos vivos y para determinar el siguiente estado de una celda, y se construye la nueva matriz con bucles explícitos para mayor claridad y legibilidad.

---

### Implementación Paso a Paso

1. **Función que cuenta vecinos vivos:**

   ```js
   /**
    * Cuenta la cantidad de vecinos vivos de la celda en la posición (i, j).
    * @param {number[][]} matriz - La matriz original del juego.
    * @param {number} i - Fila de la celda actual.
    * @param {number} j - Columna de la celda actual.
    * @returns {number} - Número de vecinos vivos.
    */
   function contarVecinosVivos(matriz, i, j) {
     const filas = matriz.length;
     const columnas = matriz[0].length;
     let vivos = 0;
     for (let dx = -1; dx <= 1; dx++) {
       for (let dy = -1; dy <= 1; dy++) {
         if (dx === 0 && dy === 0) continue;
         const ni = i + dx;
         const nj = j + dy;
         if (ni >= 0 && ni < filas && nj >= 0 && nj < columnas) {
           vivos += matriz[ni][nj];
         }
       }
     }
     return vivos;
   }
   ```

2. **Función que determina el siguiente estado de una celda:**

   ```js
   /**
    * Determina el siguiente estado de una celda según las reglas del Juego de la Vida.
    * @param {number} actual - Estado actual de la celda (1 = viva, 0 = muerta).
    * @param {number} vecinosVivos - Cantidad de vecinos vivos.
    * @returns {number} - Nuevo estado de la celda (1 = viva, 0 = muerta).
    */
   function siguienteEstadoCelda(actual, vecinosVivos) {
     if (actual === 1) {
       if (vecinosVivos < 2 || vecinosVivos > 3) return 0;
       if (vecinosVivos === 2 || vecinosVivos === 3) return 1;
     } else {
       if (vecinosVivos === 3) return 1;
     }
     return 0;
   }
   ```

3. **Función principal para calcular el siguiente estado de la matriz:**

   ```js
   /**
    * Calcula el siguiente estado de la matriz según las reglas del Juego de la Vida de Conway.
    * @param {number[][]} grid - La matriz original (array de arrays de 0s y 1s).
    * @returns {number[][]} - Nueva matriz con el siguiente estado.
    */
   function gameOfLife(grid) {
     const rows = grid.length;
     const cols = grid[0].length;
     const nuevoGrid = [];
     for (let i = 0; i < rows; i++) {
       const nuevaFila = [];
       for (let j = 0; j < cols; j++) {
         const vecinos = contarVecinosVivos(grid, i, j);
         const nuevoEstado = siguienteEstadoCelda(grid[i][j], vecinos);
         nuevaFila.push(nuevoEstado);
       }
       nuevoGrid.push(nuevaFila);
     }
     return nuevoGrid;
   }
   ```

---

## Análisis de Complejidad

- **Complejidad Temporal:**  
  $O(m \times n)$, donde $m$ es la cantidad de filas y $n$ la de columnas, ya que cada celda se recorre una vez y para cada una se revisan hasta 8 vecinos.

- **Complejidad Espacial:**  
  $O(m \times n)$, porque se crea una nueva matriz del mismo tamaño que la original para almacenar el siguiente estado.

---

## Casos Edge y Consideraciones

- Celdas en los bordes y esquinas, que tienen menos de 8 vecinos.
- Matrices muy pequeñas (1x1, 2x2).
- Matrices donde todas las celdas están vivas o muertas.
- Patrones osciladores o estables.

---

## Reflexiones y Aprendizajes

- El uso de funciones auxiliares mejora la legibilidad y modularidad del código.
- Separar la lógica de contar vecinos y de aplicar reglas permite testear y mantener el código más fácilmente.
- La construcción explícita de la nueva matriz ayuda a evitar errores y facilita el debug.

---

## Recursos y Referencias

- [Wikipedia: Conway's Game of Life](https://es.wikipedia.org/wiki/Juego_de_la_vida)
- [freeCodeCamp: Daily Coding Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/)

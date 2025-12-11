---
title: Candlelight
source: freecodecamp
series: daily
category: august
createdAt: 2025-12-11
difficulty: medium
topics:
  - simulation
  - math
blogLink: https://blog-astro-rouge.vercel.app/posts/candlelight/
problemLink: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-08-29/
---

## Candlelight - Análisis y Explicación

## Enunciado del Problema

Dado un entero que representa el numero de velas con el que empezas, y un entero que representa cuantas velas quemadas te toma para crear una nueva, tenes que devolver el numeros de velas que usaras despues de crear y quemar tantas velas como puedas.

Por ejemplo, si empezamos con 7 velas y toma 2 velas quemadas para crear una nueva, el proceso seria el siguiente:

1. Quemamos 7 velas, obteniendo 7 velas quemadas.
2. Usamos 6 de las velas quemadas para crear 3 nuevas velas, quedando 1 vela quemada.
3. Quemamos las 3 nuevas velas, obteniendo 4 velas quemadas (1 que teniamos + 3 nuevas).
4. Usamos 4 velas quemadas para crear 2 nuevas velas, quedando 0 velas quemadas.
5. Quemamos las 2 nuevas velas, obteniendo 2 velas quemadas.
6. Usamos 2 velas quemadas para crear 1 nueva vela, quedando 0 velas quemadas.
7. Quemamos la ultima vela, obteniendo 1 vela quemada.
8. No podemos crear mas velas ya que solo tenemos 1 vela quemada y necesitamos 2.
9. El total de velas quemadas es 7 + 3 + 2 + 1 = 13

## Análisis Inicial

### Comprensión del Problema

El problema nos pide calcular el numero total de velas que se pueden usar partiendo de un numero inicial de velas y un numero que indica cuantas velas quemadas necesitamos para crear una nueva, una vez que se queman las velas, se acumulan y reciclamos tantas velas quemadas como sea posible para crear nuevas velas, repitiendo el proceso hasta que no se puedan crear mas velas nuevas. El objetivo es devolver el total de velas quemadas al final del proceso.

### Casos de Prueba Identificados

Los siguientes casos de prueba permiten validar el correcto funcionamiento de la solución:

1. burnCandles(7, 2) → 13

- Se comienza con 7 velas y se necesitan 2 quemadas para crear una nueva. El resultado esperado es 13 velas quemadas en total.

2. burnCandles(10, 5) → 12

- Se comienza con 10 velas y se necesitan 5 quemadas para crear una nueva. El resultado esperado es 12 velas quemadas en total.

3. burnCandles(20, 3) → 29

- Se comienza con 20 velas y se necesitan 3 quemadas para crear una nueva. El resultado esperado es 29 velas quemadas en total.

4. burnCandles(17, 4) → 22

- Se comienza con 17 velas y se necesitan 4 quemadas para crear una nueva. El resultado esperado es 22 velas quemadas en total.

5. burnCandles(2345, 3) → 3517

- Se comienza con 2345 velas y se necesitan 3 quemadas para crear una nueva. El resultado esperado es 3517 velas quemadas en total.

## Desarrollo de la Solución

### Enfoque Elegido

Para resolver el problema, se pueden considerar dos enfoques principales: uno recursivo y otro iterativo. El enfoque recursivo es intuitivo y refleja el proceso de quemar y reciclar velas, pero puede suceder que genere un stack overflow con números grandes. Por eso, el enfoque que elegimos es el iterativo, utilizando un bucle para simular el proceso de quemar velas y reciclar las quemadas hasta que no sea posible crear más.

### Implementación Paso a Paso

1. Inicializar una variable para el total de velas quemadas con el número inicial de velas.
2. Usar dos variables: una para las velas actuales y otra para las velas quemadas acumuladas.
3. Mientras el número de velas quemadas acumuladas sea suficiente para crear al menos una nueva vela:
   - Calcular cuántas nuevas velas se pueden crear reciclando las velas quemadas.
   - Sumar ese número al total de velas quemadas.
   - Actualizar la cantidad de velas quemadas acumuladas, restando las usadas y sumando las nuevas quemadas.
4. Repetir el proceso hasta que no se puedan crear más velas nuevas.
5. Devolver el total de velas quemadas como resultado final.

## Análisis de Complejidad

### Complejidad Temporal

<!-- TODO: Analizar Big O tiempo -->

### Complejidad Espacial

La complejidad temporal de la solución es O(n), donde n es el número inicial de velas. En cada iteración del bucle, se queman todas las velas disponibles y se calcula cuántas nuevas se pueden crear, por lo que el número de iteraciones es proporcional al número de velas y cómo se reciclan. El proceso termina rápidamente incluso para valores grandes.

La complejidad espacial es O(1), ya que solo se utilizan unas pocas variables para llevar el conteo de velas quemadas y restos, sin estructuras adicionales que crezcan con la entrada.

<!-- TODO: Documentar casos especiales manejados -->

Algunos casos especiales a considerar:

- Si el número inicial de velas es menor que el requerido para reciclar (candles < leftoversNeeded), solo se pueden quemar las velas iniciales.
- Si leftoversNeeded es 1, el proceso sería infinito, por lo que se debe evitar ese caso.
- Si alguno de los parámetros es 0 o negativo, no tiene sentido en el contexto del problema y se puede devolver 0 o lanzar un error.

## Reflexiones y Aprendizajes

### Conceptos Aplicados

Se aplicó simulación iterativa y manejo de acumuladores para modelar el proceso de reciclaje. Se evitó la recursividad para garantizar eficiencia y evitar problemas de stack overflow.

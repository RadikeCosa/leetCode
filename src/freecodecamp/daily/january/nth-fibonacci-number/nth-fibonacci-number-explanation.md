---
title: Nth Fibonacci Number
source: freeCodeCamp
series: daily
category: january
createdAt: 2026-01-02
difficulty: easy
topics:
  - math
blogLink: https://blog-astro-rouge.vercel.app/posts/nth-fibonacci-number/
problemLink: https://www.freecodecamp.org/learn/daily-coding-challenge/2026-01-02/
---

## Nth Fibonacci Number - Análisis y Explicación

## Enunciado del Problema

Dado un entero `n`, devuelve el enésimo número en la serie de Fibonacci.
La serie Fibonacci es una serie de numeros donde cada numero es la suma de los dos anteriores. Los primeros 10 números en la serie son 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.

## Análisis Inicial

### Comprensión del Problema

La función debe recibir un número entero `n` y devolver el enésimo número en la serie de Fibonacci. La serie comienza con 0 y 1, y cada número siguiente es la suma de los dos anteriores.

### Casos de Prueba Identificados

los casos de prueba dados en el problema son:

1. nthFibonacci(4) debería devolver 2.
2. nthFibonacci(10) debería devolver 34.
3. nthFibonacci(15) debería devolver 377.
4. nthFibonacci(40) debería devolver 63245986.
5. nthFibonacci(75) debería devolver 1304969544928657.

## Desarrollo de la Solución

### Enfoque Elegido

Para resolver este problema utilizamos un enfoque iterativo que construye la serie de Fibonacci hasta llegar al enésimo número. Nota: los tests usan posiciones 1-based (p. ej. `n = 1` devuelve `0`, `n = 2` devuelve `1`). Este enfoque es eficiente en tiempo y espacio para valores razonables de `n`.

### Implementación Paso a Paso

1. Inicializar dos variables para almacenar los dos últimos números de la serie de Fibonacci.
2. Utilizar un bucle para calcular los números de Fibonacci hasta llegar al enésimo número.
3. Devolver el enésimo número calculado.

```javascript
function nthFibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  let a = 0,
    b = 1,
    temp;
  for (let i = 2; i <= n; i++) {
    temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}
```

## Análisis de Complejidad

### Complejidad Temporal

La complejidad temporal de esta solución es O(n) ya que iteramos desde 2 hasta `n` para calcular el enésimo número de Fibonacci.

### Complejidad Espacial

La complejidad espacial es O(1) porque solo usamos un número constante de variables auxiliares.

## Casos Edge y Consideraciones

- Si `n` es 0, la función devuelve 0.
- Si `n` es 1, la función devuelve 1.
- Atención a límites numéricos: en JavaScript los enteros precisos están limitados por `Number.MAX_SAFE_INTEGER` (~9e15). El valor para `n = 75` encaja en ese rango, pero para `n` mucho mayores se puede perder precisión. Para entradas muy grandes se recomienda usar `BigInt` o algoritmos en tiempo logarítmico (exponenciación de matrices o multiplicación rápida).

## Reflexiones y Aprendizajes

### Conceptos Aplicados

- Series de Fibonacci
- Iteración
- Complejidad temporal y espacial

### Posibles Optimizaciones

Aunque la solución iterativa es eficiente, para valores extremadamente grandes de `n`, se podrían considerar técnicas como la matriz exponencial o la fórmula de Binet para calcular el enésimo número de Fibonacci en tiempo logarítmico.

## Recursos y Referencias

- [Serie de Fibonacci - Wikipedia](https://es.wikipedia.org/wiki/Sucesi%C3%B3n_de_Fibonacci)
- [freeCodeCamp - Daily Coding Challenge](https://www.freecodecamp.org/learn/daily-coding-challenge/)
- [Big O Notation - GeeksforGeeks](https://www.geeksforgeeks.org/analysis-of-algorithms-set-1-asymptotic-analysis/)

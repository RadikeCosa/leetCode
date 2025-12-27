---
title: Sum Of Divisors
source: freecodecamp
series: daily
category: december
createdAt: 2025-12-26
difficulty: easy
topics:
  - math
  - brute-force
blogLink: https://blog-astro-rouge.vercel.app/posts/sum-of-divisors/
problemLink: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-12-26/
---

## Sum Of Divisors - Enunciado del Problema

Dado un número entero positivo, devuelve la suma de todos sus divisores.

Un divisor es cualquier entero que divide al número de manera exacta (el resto es 0). Solo se debe contar cada divisor una vez.

Por ejemplo, para el número 6, sus divisores son 1, 2, 3 y 6, y la suma de estos es 12.

**Ejemplos:**

- sumOfDivisors(6) → 12
- sumOfDivisors(13) → 14
- sumOfDivisors(28) → 56
- sumOfDivisors(84) → 224
- sumOfDivisors(549) → 806
- sumOfDivisors(9348) → 23520

## Análisis Inicial

### Comprensión del Problema

El problema requiere identificar todos los divisores de un número dado y luego sumar esos divisores. Un divisor de un número n es cualquier entero i tal que n % i === 0.

### Casos de Prueba Identificados

- Para n = 6, los divisores son 1, 2, 3 y 6. La suma es 12.
- Para n = 13 (número primo), los divisores son 1 y 13. La suma es 14.
- Para n = 28, los divisores son 1, 2, 4, 7, 14 y 28. La suma es 56.
- Para n = 84, los divisores son 1, 2, 3, 4, 6, 7, 12, 14, 21, 28, 42 y 84. La suma es 224.
- Para n = 549, los divisores son 1, 3, 9, 61, 183 y 549. La suma es 806.
- Para n = 9348, los divisores son 1, 2, 3, 4, 6, 12, 13, 26, 39, 52, 78, 156, 59, 118, 177, 236, 354, 708, 779, 1558, 2337, 3116, 4674 y 9348. La suma es 23520.

Estos casos cubren números pequeños, primos, compuestos y un valor grande para validar eficiencia y exactitud.

## Desarrollo de la Solución

### Enfoque Elegido

Se utiliza un enfoque directo (fuerza bruta): iterar desde 1 hasta n y sumar todos los valores que dividen a n de manera exacta (n % i === 0). Este método es sencillo, fácil de entender y suficiente para los tamaños de entrada esperados en el problema. No requiere estructuras adicionales y garantiza que todos los divisores se consideren una sola vez.

### Implementación Paso a Paso

1. Inicializar una variable `suma` en 0 para acumular el resultado.
2. Iterar desde 1 hasta n (incluido).
3. En cada iteración, verificar si el número actual `i` es divisor de n (es decir, si n % i === 0).
4. Si es divisor, sumar `i` a la variable `suma`.
5. Al finalizar el bucle, devolver el valor de `suma` como resultado.

Este procedimiento garantiza que se consideran todos los divisores posibles de n y se suman correctamente.

### Código Final

```javascript
function sumOfDivisors(n) {
  let suma = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      suma += i;
    }
  }
  return suma;
}
```

## Análisis de Complejidad

### Complejidad Temporal

El algoritmo recorre todos los números desde 1 hasta n, realizando una operación de módulo y una suma en cada iteración. Por lo tanto, la complejidad temporal es $O(n)$, donde n es el valor de entrada. Esto significa que el tiempo de ejecución crece linealmente con el tamaño del número.

### Complejidad Espacial

La complejidad espacial es $O(1)$, ya que solo se utilizan variables escalares para el acumulador y el índice del bucle, sin estructuras de datos adicionales que crezcan con la entrada.

## Casos Edge y Consideraciones

- Si n = 1, el único divisor es 1, por lo que la función debe devolver 1.
- El problema asume que n siempre es un entero positivo.
- Para números primos, la suma será n + 1 (ya que sus únicos divisores son 1 y n).
- No se consideran números negativos ni cero, según el enunciado.

## Reflexiones y Aprendizajes

### Conceptos Aplicados

- Iteración simple y uso del operador módulo para identificar divisores.
- Acumulación de resultados en una variable.
- Reconocimiento de patrones en números primos y compuestos.

### Posibles Optimizaciones

Para valores de n muy grandes, se puede optimizar iterando solo hasta $\sqrt{n}$ y sumando tanto el divisor como su complemento (si son distintos), lo que reduce la complejidad a $O(\sqrt{n})$. Sin embargo, para los casos de prueba dados y el objetivo didáctico, la solución actual es suficiente y más legible.

## Recursos y Referencias

- [Divisor (Wikipedia)](https://es.wikipedia.org/wiki/Divisor)
- [Sum of Divisors - GeeksforGeeks](https://www.geeksforgeeks.org/sum-of-all-divisors-from-1-to-n/)
- [Teoría de números - FreeCodeCamp](https://www.freecodecamp.org/news/tag/number-theory/)

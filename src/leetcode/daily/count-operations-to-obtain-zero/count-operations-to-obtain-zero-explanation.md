---
title: "Count Operations to Obtain Zero"
difficulty: "easy"
topics:
  - Simulation
  - Math
source: "leetcode"
series: "daily"
category: "daily"
createdAt: "2025-11-09"
blogLink: https://blog-astro-rouge.vercel.app/posts/count-operations-to-obtain-zero-leetcode/
---

## Count Operations to Obtain Zero

## Enunciado

Dados dos enteros no negativos num1 y num2, devuelve el número de operaciones necesarias para que alguno de los dos sea 0.

En una operación, si num1 >= num2 se resta num2 de num1; en caso contrario se resta num1 de num2.

## Intuición

La sustracción repetida hasta que un número se vuelve cero se puede acelerar agrupando las sustracciones repetidas: cuando a >= b, resta b de a tantas veces como quepan (a // b) y usa el resto (a % b). Esto refleja el algoritmo euclidiano para el mcd.

## Enfoque

Mientras ambos números sean mayores que 0, compara el mayor con el menor; si num1 >= num2, cuenta cuántas restas equivalentes se harían con división entera (ops += Math.floor(num1 / num2)) y reemplaza num1 por su resto (num1 = num1 % num2); si no, haz lo mismo intercambiando roles (ops += Math.floor(num2 / num1); num2 = num2 % num1). Repite hasta que uno sea 0 y devuelve el contador acumulado. Esto agrupa restas repetidas y es análogo al algoritmo de Euclides.

## Código

```typescript
export function countOperationsOptimized(num1: number, num2: number): number {
  let ops = 0;
  while (num1 > 0 && num2 > 0) {
    if (num1 >= num2) {
      ops += Math.floor(num1 / num2);
      num1 %= num2;
    } else {
      ops += Math.floor(num2 / num1);
      num2 %= num1;
    }
  }
  return ops;
}
```

## Complejidad

- Tiempo: O(log(min(num1, num2))) amortizado con el enfoque basado en división.
- Espacio: O(1).

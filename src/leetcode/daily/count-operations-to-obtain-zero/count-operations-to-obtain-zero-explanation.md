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

Dados dos enteros no negativos num 1 y num 2, devuelve el número de operaciones necesarias para que alguno de los dos sea 0.

En una operación, si num 1 >= num 2 se resta num 2 de num 1; en caso contrario se resta num 1 de num 2.

## Intuición

La sustracción repetida hasta que un número se vuelve cero se puede acelerar agrupando las sustracciones repetidas: cuando a >= b, resta b de a tantas veces como quepan (a // b) y usa el resto (a % b). Esto refleja el algoritmo euclidiano para el mcd.

## Enfoque

Mientras ambos números sean mayores que 0, compara el mayor con el menor; si num 1 >= num 2, cuenta cuántas restas equivalentes se harían con división entera (ops += Math.floor(num 1 / num 2)) y reemplaza num 1 por su resto (num 1 = num 1 % num 2); si no, haz lo mismo intercambiando roles (ops += Math.floor(num 2 / num 1); num 2 = num 2 % num 1). Repite hasta que uno sea 0 y devuelve el contador acumulado. Esto agrupa restas repetidas y es análogo al algoritmo de Euclides.

## Código

```typescript
export function countOperationsOptimized(num 1: number, num 2: number): number {
 let ops = 0;
 while (num 1 > 0 && num 2 > 0) {
 if (num 1 >= num 2) {
 ops += Math.floor(num 1 / num 2);
 num 1 %= num 2;
 } else {
 ops += Math.floor(num 2 / num 1);
 num 2 %= num 1;
 }
 }
 return ops;
}
```

## Complejidad

- Tiempo: O(log(min(num 1, num 2))) amortizado con el enfoque basado en división.
- Espacio: O(1).

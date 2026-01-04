---
title: "best-time-to-sell-and-buy-stocks-ii"
difficulty: "medium"
topics:
  - Array
  - Greedy
  - Multiple Transactions
source: "leetcode"
series: "top-interview"
category: "top-interview-array-string"
createdAt: "2025-11-26"
blogLink: https://blog-astro-rouge.vercel.app/posts/best-time-to-buy-and-sell-stock-ii/
---

# Best Time To Sell And Buy Stocks II - Análisis y Explicación

**LeetCode #122** | Medium | Top Interview 150 
🔗 [Enlace al problema](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/)

## Enunciado del Problema

You are given an integer array `prices` where `prices[i]` is the price of a given stock on the `i`-th day.

On each day, you may decide to buy and/or sell the stock. You can only hold **at most one** share of the stock at any time. However, you can buy it and then immediately sell it on the same day (this is allowed).

Find and return the **maximum profit** you can achieve.

**Constraints:**

- `1 <= prices.length <= 3 * 10^4`
- `0 <= prices[i] <= 10^4`

**Examples:**

````text
Input: prices = [7,1,5,3,6,4] → Output: 7
Input: prices = [1,2,3,4,5] → Output: 4
Input: prices = [7,6,4,3,1] → Output: 0

## Análisis Inicial

### Comprensión del Problema

Queremos maximizar las ganancias comprando y vendiendo acciones **sin límite** en la cantidad de transacciones, con la única restricción de no poder tener más de una acción al mismo tiempo (pero sí podemos comprar y vender el mismo día).

¡No necesitamos rastrear cuándo compramos o vendimos!
La ganancia máxima se obtiene simplemente **sumando todas las subidas diarias del precio**.

¿Por qué?
Imagina que el precio sube de 1 → 3 → 2 → 4:

- Subida 1→3: +2
- Bajada 3→2: ignoramos
- Subida 2→4: +2
 → Total: 4
 Esto es equivalente a comprar en 1, vender en 3, comprar en 3, vender en 4. ¡Funciona!

## Casos de Prueba Identificados

| Input | Output | Explicación |
|

--------- | ------ | --------------------------------------- |
| `[7,1,5,3,6,4]` | 7 | (5-1) + (6-3) = 4 + 3 = 7 |
| `[1,2,3,4,5]` | 4 | Sube todos los días → suma diaria = 4 |
| `[7,6,4,3,1]` | 0 | Solo baja → no hay ganancia |
| `[1,3,2,4]` | 4 | (3-1) + (4-2) = 2 + 2 = 4 |
| `[2,2,2,2]` | 0 | Precios constantes → 0 |
| `[1]` | 0 | Solo un día → no se puede transaccionar |

## Desarrollo de la Solución

### Enfoque Elegido

**Greedy - Suma de diferencias positivas**
Recorremos el array una sola vez y cada vez que `prices[i] > prices[i-1]`, añadimos esa diferencia al beneficio total.

Este es el enfoque **óptimo** y el más intuitivo para este problema.

### Implementación Paso a Paso

```ts
function maxProfit(prices: number[]): number {
 let totalProfit = 0;

 for (let i = 1; i < prices.length; i++) {
 const dailyChange = prices[i] - prices[i - 1];
 if (dailyChange > 0) {
 totalProfit += dailyChange;
 }
 }

 return totalProfit;
}
````

**Explicación línea por línea:**

1. Inicializamos `totalProfit = 0`
2. Desde el segundo día, calculamos la diferencia con el día anterior
3. Si hay subida (`dailyChange > 0`), la sumamos al beneficio total
4. Al final, devolvemos el acumulado

## Análisis de Complejidad

### Complejidad Temporal

**O(n)** → Solo una pasada lineal por el array.

### Complejidad Espacial

**O(1)** → Solo usamos una variable extra, independientemente del tamaño del input.

¡Es la solución más eficiente posible!

## Casos Edge y Consideraciones

| Caso | Comportamiento esperado | ¿Está cubierto? |
| ------------------------ | ----------------------- | --------------- |
| Array de longitud 1 | Retorna 0 | Sí |
| Precios constantes | Retorna 0 | Sí |
| Todos los días suben | Suma total máxima | Sí |
| Todos los días bajan | Retorna 0 | Sí |
| Subidas y bajadas mixtas | Captura solo subidas | Sí |

**Nota:** No necesitamos manejar array vacío (por constraints: longitud ≥ 1).

## Reflexiones y Aprendizajes

### Conceptos Aplicados

- **Greedy**: Tomar la mejor decisión local (capturar cada subida) lleva a la solución global óptima.
- **Observación clave**: En este problema específico, múltiples transacciones óptimas son equivalentes a sumar todas las subidas.
- **Patrón "Peak Valley" simplificado**: No necesitamos detectar picos y valles explícitamente.

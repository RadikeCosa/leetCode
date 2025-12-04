---
title: "best-time-to-buy-and-sell-stock"
difficulty: "easy"
topics:
  - Array
  - Greedy
  - One Pass
source: "leetcode"
series: "top-interview"
category: "top-interview-array-string"
createdAt: "2025-11-17"
blogLink: "https://blog-astro-rouge.vercel.app/posts/best-time-to-buy-and-sell-stock/"
---

# Best Time To Buy And Sell Stock - Análisis y Explicación

## Enunciado del Problema

### Best Time to Buy and Sell Stock (LeetCode #121)

Se te da un array `prices` donde `prices[i]` representa el precio de una acción en el día `i`.

Tu objetivo es maximizar el beneficio eligiendo **un solo día** para comprar y un día posterior para vender.

Devuelve el **beneficio máximo** posible. Si no hay ganancia, devuelve `0`.

#### Ejemplo 1:

```text
Input: prices = [7,1,5,3,6,4]
Output: 5
Explicación: Compra en el día 1 (precio = 1), vende en el día 4 (precio = 6) → 6-1 = 5
```

#### Ejemplo 2:

```text
Input: prices = [7,6,4,3,1]
Output: 0
Explicación: Los precios solo bajan, no hay ganancia posible.
```

#### Ejemplo 3:

```text
Input: prices = [2,4,1]
Output: 2
```

## Restricciones

- `1 <= prices.length <= 10⁵`
- `0 <= prices[i] <= 10⁴`

## Casos de Prueba Identificados

| Caso | Input | Output | Comentario |
|

----------------- | --------------- | ------ | --------------------------- |
| Caso clásico | `[7,1,5,3,6,4]` | 5 | Múltiples subidas y bajadas |
| Precios decrecientes | `[7,6,4,3,1]` | 0 | Sin ganancia |
| Solo 2 días (sube) | `[1,5]` | 4 | Caso mínimo con ganancia |
| Solo 2 días (baja) | `[5,1]` | 0 | Caso mínimo sin ganancia |
| Un solo día | `[10]` | 0 | Imposible operar |
| Todos precios iguales | `[3,3,3,3]` | 0 | Sin variación |
| Mejor ganancia al final | `[1,2,3,4,5]` | 4 | Compra día 0, vende día 4 |

## Desarrollo de la Solución

### Enfoque Elegido: **One Pass (una sola pasada)**

Este es el enfoque óptimo y el más común en entrevistas.

**Idea principal:**
Mientras recorremos el array, mantenemos:

- El precio **más bajo** visto hasta el momento (`minPrice`)
- El **máximo beneficio** posible hasta ese momento (`maxProfit`)

```typescript
/**
 * @param {number[]} prices
 * @return {number}
 */
export function maxProfit(prices: number[]): number {
  let maxProfit = 0;
  let minPrevPrice = prices[0];

  for (let i = 1; i < prices.length; i++) {
    const maxProfitThatDay = prices[i] - minPrevPrice;

    maxProfit = Math.max(maxProfit, maxProfitThatDay);
    minPrevPrice = Math.min(minPrevPrice, prices[i]);
  }

  return maxProfit;
}
```

### Explicación del Código

1. Inicializamos `maxProfit` en `0` y `minPrevPrice` con el primer precio.
2. Iteramos desde el segundo día hasta el final:
   - Calculamos el beneficio si vendemos ese día: `prices[i] - minPrevPrice`.
   - Actualizamos `maxProfit` si este beneficio es mayor.
   - Actualizamos `minPrevPrice` si encontramos un precio más bajo.
3. Al final, devolvemos `maxProfit`.

### Ejemplo paso a paso con `[7,1,5,3,6,4]`

| Día | Precio | minPrice | Ganancia si vende hoy | maxProfit | Acción              |
| --- | ------ | -------- | --------------------- | --------- | ------------------- |
| 0   | 7      | 7        | -                     | 0         | Inicio              |
| 1   | 1      | **1**    | -                     | 0         | Nuevo mínimo        |
| 2   | 5      | 1        | 5-1=4                 | **4**     | Actualiza beneficio |
| 3   | 3      | 1        | 3-1=2                 | 4         | No mejora           |
| 4   | 6      | 1        | 6-1=5                 | **5**     | ¡Nuevo récord!      |
| 5   | 4      | 1        | 4-1=3                 | 5         | No mejora           |

**Resultado:** 5

## Análisis de Complejidad

### Complejidad Temporal

- **O(n)**: Recorremos el array una sola vez.

### Complejidad Espacial

- **O(1)**: Solo usamos un número constante de variables adicionales.

## Casos Edge y Consideraciones

| Caso                 | Comportamiento del código                            |
| -------------------- | ---------------------------------------------------- |
| Array vacío o `null` | `prices.length < 2` → devuelve `0`                   |
| Un solo elemento     | Mismo manejo → `0`                                   |
| Precios iguales      | `maxProfit` nunca se actualiza → `0`                 |
| Mínimo al final      | Nunca se vende con ganancia → `0`                    |
| Múltiples picos      | Solo importa el mayor salto desde un mínimo anterior |

## Reflexiones y Aprendizajes

### Conceptos Aplicados

- **Greedy:** Siempre mantenemos la mejor opción local (el precio más bajo visto).
- **Estado mínimo:** Solo necesitamos recordar dos valores en todo momento.
- **Optimización de espacio:** Pasamos de O(n) a O(1) sin sacrificar tiempo.

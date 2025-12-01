---
title: "minimum-size-subarray-sum"
difficulty: "medium"
topics:
  - Array
  - Binary Search
  - Sliding Window
  - Prefix Sum
source: "leetcode"
series: "top-interview"
category: "top-interview"
createdAt: "2025-09-03"
---

# Minimum Size Subarray Sum - Análisis y Explicación

## Descripción del Problema

**LeetCode 209: Minimum Size Subarray Sum**

- **Dificultad**: Medium
- **Temas**: Array, Binary Search, Sliding Window, Prefix Sum

### Enunciado

Dado un array de enteros positivos `nums` y un entero positivo `target`, devolver la longitud mínima de un subarray cuya suma sea mayor o igual a `target`. Si no existe tal subarray, devolver 0.

## Análisis del Problema

### Casos de Ejemplo

1. `target = 7, nums = [2,3,1,2,4,3]` → Output: `2`

   - El subarray `[4,3]` tiene longitud 2 y suma 7 ≥ 7

2. `target = 4, nums = [1,4,4]` → Output: `1`

   - El subarray `[4]` tiene longitud 1 y suma 4 ≥ 4

3. `target = 11, nums = [1,1,1,1,1,1,1,1]` → Output: `0`
   - No existe subarray cuya suma sea ≥ 11

### Restricciones

- `1 <= target <= 10^9`
- `1 <= nums.length <= 10^5`
- `1 <= nums[i] <= 10^4`

## Enfoque y Estrategia

### Patrón: Sliding Window (Ventana Deslizante)

Este problema es ideal para el patrón de **sliding window** porque:

- Buscamos un subarray contiguo con una propiedad específica (suma ≥ target)
- Queremos optimizar una métrica (longitud mínima)
- Podemos expandir/contraer la ventana dinámicamente

### Algoritmo Sliding Window Implementado

1. **Inicialización**:

   - `left = 0`, `sum = 0`, `minSubArrayLen = Infinity`
   - `right` se mueve en el bucle for

2. **Expansión** (bucle for con `right`):

   - Agregar `nums[right]` a la suma actual
   - Expandir ventana hacia la derecha

3. **Contracción** (bucle while):

   - Mientras `sum >= target`: la ventana es válida
   - Actualizar longitud mínima: `Math.min(minSubArrayLen, right - left + 1)`
   - Contraer ventana: restar `nums[left]` y mover `left++`

4. **Resultado**:
   - Si `minSubArrayLen === Infinity` → no hay solución (return 0)
   - Caso contrario → return `minSubArrayLen`

### Ejemplo paso a paso: target = 7, nums = [2,3,1,2,4,3]

```
Iteración 1: right=0, left=0, sum=2, ventana=[2]         → sum < 7, continuar
Iteración 2: right=1, left=0, sum=5, ventana=[2,3]       → sum < 7, continuar
Iteración 3: right=2, left=0, sum=6, ventana=[2,3,1]     → sum < 7, continuar
Iteración 4: right=3, left=0, sum=8, ventana=[2,3,1,2]   → sum >= 7, contraer:
  - minLength = min(∞, 4) = 4
  - sum -= 2, left++, sum=6, ventana=[3,1,2]
Iteración 5: right=4, left=1, sum=10, ventana=[3,1,2,4]  → sum >= 7, contraer:
  - minLength = min(4, 4) = 4
  - sum -= 3, left++, sum=7, ventana=[1,2,4]              → sum >= 7, contraer:
  - minLength = min(4, 3) = 3
  - sum -= 1, left++, sum=6, ventana=[2,4]
Iteración 6: right=5, left=3, sum=9, ventana=[2,4,3]     → sum >= 7, contraer:
  - minLength = min(3, 3) = 3
  - sum -= 2, left++, sum=7, ventana=[4,3]                → sum >= 7, contraer:
  - minLength = min(3, 2) = 2 ✅
  - sum -= 4, left++, sum=3, ventana=[3]

Resultado: 2 (subarray [4,3] con suma 7 ≥ 7)
```

### Por qué funciona

- **Cada elemento se visita máximo 2 veces**: una vez por `right`, una vez por `left`
- **Ventana siempre válida**: cuando contraemos, mantenemos la propiedad suma ≥ target
- **Optimización garantizada**: siempre buscamos la longitud mínima posible

## Complejidad

### Complejidad Temporal

- **O(n)**: Cada elemento es visitado máximo 2 veces (una por `right`, una por `left`)

### Complejidad Espacial

- **O(1)**: Solo usamos variables auxiliares constantes

## Conceptos Clave

- **Sliding Window de tamaño variable**
- **Optimización con dos punteros**
- **Suma acumulativa en ventana deslizante**

## Follow-up: Solución O(n log n)

El problema sugiere una solución alternativa usando **Binary Search** sobre **Prefix Sums**, que tendría complejidad O(n log n).
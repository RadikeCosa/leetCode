---
title: "valid-triangle-number"
difficulty: "medium"
topics:
  - Array
  - Two Pointers
  - Sorting
  - Triangle Inequality
source: "leetcode"
series: "daily"
category: "daily"
createdAt: "2025-12-01"
---

# Valid Triangle Number

Dado un arreglo de números enteros nums, retornar el número de tripletas elegidas del arreglo que pueden formar triángulos si se toman como longitudes de los lados de un triángulo.

## Ejemplos

- Input: nums = [2,2,3,4]
- Output: 3
- Explicación: Las combinaciones válidas son: 2,3,4 (usando el primer 2), 2,3,4 (usando el segundo 2), 2,2,3

- Input: nums = [4,2,3,4]
- Output: 4

## Análisis

### Desigualdad Triangular

Para que tres lados `a`, `b`, `c` formen un triángulo válido, deben cumplir la **desigualdad triangular**: la suma de cualquier par de lados debe ser mayor que el tercer lado.

- `a + b > c`
- `a + c > b`
- `b + c > a`

**Optimización clave**: Si ordenamos los lados como `a ≤ b ≤ c`, solo necesitamos verificar `a + b > c`. Las otras dos condiciones se cumplen automáticamente.

### ¿Por qué ordenar ayuda?

1. **Simplifica la validación**: Solo una condición en lugar de tres
2. **Permite usar two pointers**: Podemos buscar eficientemente pares válidos
3. **Optimización de conteo**: Si un par funciona, múltiples combinaciones también funcionan

## Enfoque detallado

### Estrategia: Sort + Two Pointers

1. **Ordenar** el array en orden ascendente
2. **Iterar desde el final** (elemento más grande como lado `c`)
3. **Two pointers** para encontrar todos los pares `(a,b)` donde `a + b > c`

### ¿Por qué funciona la optimización de conteo?

Si `nums[left] + nums[right] > nums[i]`, entonces **todos** los elementos entre `left` y `right-1` también formarán triángulos válidos con `nums[right]` y `nums[i]`.

**Ejemplo**: Array `[2,2,3,4]`, buscando pares para `c=4`

- Si `left=0`, `right=2`: `nums[0] + nums[2] = 2 + 3 = 5 > 4` ✅
- Entonces también: `nums[1] + nums[2] = 2 + 3 = 5 > 4` ✅
- **Total triángulos**: `right - left = 2 - 0 = 2`

### Algoritmo paso a paso

```typescript
for (let i = nums.length - 1; i >= 2; i--) {
  let left = 0,
    right = i - 1;

  while (left < right) {
    if (nums[left] + nums[right] > nums[i]) {
      count += right - left; // Múltiples triángulos válidos
      right--;
    } else {
      left++; // Necesitamos suma más grande
    }
  }
}
```

## Casos extremos

- **Array pequeño**: `nums.length < 3` → return 0
- **Elementos cero**: `[0,0,1]` → no forman triángulos válidos
- **Todos iguales**: `[3,3,3]` → forman triángulo válido
- **Ya ordenado**: El algoritmo funciona sin cambios

## Complejidad

- **Tiempo**: O(n²)

  - Ordenamiento: O(n log n)
  - Bucle externo: O(n)
  - Two pointers interno: O(n) total por cada iteración
  - **Total**: O(n log n) + O(n²) = O(n²)

- **Espacio**: O(1)
  - Solo variables auxiliares (excluyendo el espacio usado por el sorting)
  - Se modifica el array original in-place

## Alternativas consideradas

1. **Fuerza bruta**: O(n³) - probar todas las combinaciones
2. **Binary search**: O(n² log n) - buscar el rango válido para cada par
3. **Two pointers**: O(n²) - solución elegida ✅

La solución con two pointers es la más eficiente y elegante para este problema.

- Time complexity: TBD
- Space complexity: TBD

## Conclusión
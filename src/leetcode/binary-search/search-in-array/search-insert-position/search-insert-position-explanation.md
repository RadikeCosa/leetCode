---
title: "search-insert-position"
difficulty: "easy"
topics:
  - Binary Search
  - Array
  - Insert
source: "leetcode"
series: "search-in-array"
category: "binary-search"
createdAt: "2025-09-07"
---

# Search Insert Position

Encontrar la posición donde insertar un target en un array ordenado (o retornar su índice si ya existe).

## Ejemplos

**Example 1:**

- Input: nums = [1,3,5,6], target = 5
- Output: 2 (target existe en el índice 2)

**Example 2:**

- Input: nums = [1,3,5,6], target = 2
- Output: 1 (target debería insertarse en índice 1)

**Example 3:**

- Input: nums = [1,3,5,6], target = 7
- Output: 4 (target debería insertarse al final)

## Análisis después de la implementación

### Diferencias con Binary Search (704)

**Similitudes**:

- Mismo template base: `left <= right`, mid calculation, pointer updates
- Misma lógica de comparación y ajuste de punteros
- Misma complejidad O(log n)

**Diferencia clave**:

- **Binary Search (704)**: Retorna -1 cuando no encuentra el elemento
- **Search Insert Position (35)**: Retorna la posición de inserción cuando no encuentra

### Template utilizado

Usamos el **template estándar** con una modificación crucial en el return:

```typescript
while (left <= right) {
  const mid = Math.floor(left + (right - left) / 2);
  if (nums[mid] === target) {
    return mid; // Caso: elemento encontrado
  } else if (nums[mid] < target) {
    left = mid + 1;
  } else {
    right = mid - 1;
  }
}
return left; // ¡CLAVE! - Posición de inserción
```

### Insight fundamental

**¿Por qué `return left` funciona?**

Cuando el while loop termina (`left > right`), el puntero `left` siempre apunta a:

- El primer elemento mayor que target, O
- El final del array (si target es mayor que todos)

Esta es exactamente la posición donde target debería insertarse para mantener el orden.

### Casos edge manejados automáticamente

1. **Target < todos los elementos**: `left` termina en 0
2. **Target > todos los elementos**: `left` termina en `nums.length`
3. **Array vacío**: `left` y `right` cruzan inmediatamente, retorna 0
4. **Un solo elemento**: La lógica funciona naturalmente

### Patrón identificado

Este es el patrón **"Lower Bound"** de binary search:

- Encuentra la primera posición donde se puede insertar target
- Muy útil para problemas de inserción ordenada
- Variación del template básico con diferente valor de retorno

### Casos edge identificados

Durante la implementación y testing identificamos estos casos críticos:

1. **Target existe en el array**:

   - Input: `[1,3,5,6], target = 5`
   - Output: `2` (índice exacto)
   - Comportamiento: Igual que binary search estándar

2. **Target menor que el primer elemento**:

   - Input: `[1,3,5,6], target = 0`
   - Output: `0` (insertar al inicio)
   - Comportamiento: `left` nunca se mueve, termina en 0

3. **Target en medio del array**:

   - Input: `[1,3,5,6], target = 2`
   - Output: `1` (insertar entre 1 y 3)
   - Comportamiento: Binary search termina con `left` apuntando a la posición correcta

4. **Target mayor que todos los elementos**:

   - Input: `[1,3,5,6], target = 7`
   - Output: `4` (insertar al final)
   - Comportamiento: `left` se mueve hasta `nums.length`

5. **Array de un solo elemento**:
   - Input: `[1], target = 2`
   - Output: `1` (insertar después del único elemento)
   - Comportamiento: Template maneja correctamente

### Decisiones de implementación

**¿Por qué usar el template estándar `left <= right`?**

- **Consistencia**: Mismo patrón que Binary Search (704)
- **Simplicidad**: No requiere lógica adicional
- **Robustez**: Maneja todos los edge cases automáticamente

**¿Por qué `return left` en lugar de `right`?**

- Cuando el loop termina, `left > right`
- `left` apunta al primer elemento mayor que target
- `right` apunta al último elemento menor que target
- Para inserción necesitamos la posición "mayor", no "menor"

**¿Por qué no usar template alternativo `left < right`?**

- Requeriría lógica post-loop más compleja
- El template estándar es más directo para este caso

## Complejidad

- **Time complexity**: O(log n)

  - Binary search divide el espacio de búsqueda a la mitad en cada iteración
  - En el peor caso, realizamos log₂(n) comparaciones
  - Mismo que Binary Search (704)

- **Space complexity**: O(1)
  - Solo usamos variables adicionales: `left`, `right`, `mid`
  - No dependemos del tamaño del input
  - Algoritmo in-place

## Nuevos conceptos aprendidos

### Patrón Lower Bound

- **Definición**: Encontrar la primera posición donde se puede insertar un valor
- **Aplicación**: Problemas de inserción en arrays ordenados
- **Template**: Mismo que binary search, pero `return left` cuando no se encuentra

### Versatilidad del Template Base

- El template `left <= right` es más versátil de lo esperado
- Con una pequeña modificación (`return left` vs `return -1`) se adapta a diferentes problemas
- Confirmed que es un template robusto y reutilizable

### Invariante de Inserción

- **Invariante**: Cuando binary search termina sin encontrar el target, `left` siempre apunta a la posición de inserción correcta
- **Por qué funciona**: `left` se mueve solo cuando `nums[mid] < target`, manteniendo la propiedad de "primera posición mayor"

### Edge Cases Automáticos

- El template maneja edge cases sin código adicional
- No necesitamos verificaciones especiales para arrays vacíos, targets extremos, etc.
- La lógica matemática del binary search garantiza correctitud
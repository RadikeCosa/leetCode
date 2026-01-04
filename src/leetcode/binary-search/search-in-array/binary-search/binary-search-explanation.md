---
title: "binary-search"
difficulty: "easy"
topics:
  - Binary Search
  - Array
source: "leetcode"
series: "search-in-array"
category: "binary-search"
createdAt: "2025-09-07"
---

# Binary Search - Problema Fundamental

Implementar búsqueda binaria en un array ordenado para encontrar un elemento target.

## Ejemplos

**Example 1:**

- Input: nums = [-1,0,3,5,9,12], target = 9
- Output: 4
- Explanation: 9 exists in nums and its index is 4

**Example 2:**

- Input: nums = [-1,0,3,5,9,12], target = 2
- Output: -1
- Explanation: 2 does not exist in nums so return -1

## Análisis Detallado

### ¿Por qué binary search es aplicable aquí?

1. **Array ordenado**: La propiedad fundamental que permite eliminar la mitad del espacio de búsqueda
2. **Búsqueda exacta**: Necesitamos encontrar un elemento específico, no un rango
3. **Eficiencia requerida**: O(log n) vs O(n) - requisito explícito del problema

### Decisiones de Implementación Tomadas

#### 1. **Template elegido: `left <= right`**

```typescript
while (left <= right) {
 // ...
}
```

**¿Por qué esta condición?**

- ✅ **Incluye casos de un solo elemento**: Cuando `left = right`, aún hay 1 elemento por revisar
- ✅ **Más intuitivo**: Para búsquedas exactas, queremos revisar hasta que no queden elementos
- ✅ **Termina correctamente**: Cuando `left > right`, sabemos que el elemento no existe

**Alternativa rechazada: `left < right`**

- ❌ Se detiene antes de revisar el último elemento
- ❌ Requiere lógica adicional fuera del bucle
- ❌ Más complejo para búsquedas exactas

#### 2. **Inicialización de punteros**

```typescript
let left = 0;
let right = nums.length - 1; // ¡ÍNDICE VÁLIDO!
```

**¿Por qué `nums.length - 1` y no `nums.length`?**

- ✅ **Representa índices válidos**: `right` apunta al último elemento real
- ✅ **Consistente con condición `<=`**: Ambos punteros son índices accesibles
- ✅ **Evita accesos fuera de rango**: Nunca intentamos acceder a `nums[nums.length]`

#### 3. **Cálculo de punto medio**

```typescript
const mid = Math.floor(left + (right - left) / 2);
```

**¿Por qué esta fórmula específica?**

- ✅ **Previene overflow**: `(left + right) / 2` puede desbordarse con números grandes
- ✅ **Matemáticamente equivalente**: `left + (right - left) / 2 = (left + right) / 2`
- ✅ **Siempre progresa**: `mid` siempre está entre `left` y `right`

#### 4. **Lógica de actualización de punteros**

```typescript
if (nums[mid] === target) return mid;
else if (nums[mid] < target) left = mid + 1; // Buscar derecha
else right = mid - 1; // Buscar izquierda
```

**¿Por qué `mid + 1` y `mid - 1`?**

- ✅ **Elimina el elemento ya revisado**: `mid` ya sabemos que no es la respuesta
- ✅ **Garantiza progreso**: El rango siempre se reduce
- ✅ **Evita bucles infinitos**: Nunca quedamos "atascados" en el mismo `mid`

## Casos Edge Implementados y Por Qué

### 1. **Array de un solo elemento (target no encontrado)**

```typescript
nums = [1], target = 0 → -1
```

**Propósito**: Verificar que `left <= right` funciona cuando `left = right = 0`
**Enseñanza**: El template maneja correctamente el caso más simple

### 2. **Target en primera posición**

```typescript
nums = [1,2,3,4,5], target = 1 → 0
```

**Propósito**: Boundary condition del extremo izquierdo
**Enseñanza**: El algoritmo no se "salta" el primer elemento

### 3. **Target en última posición**

```typescript
nums = [1,2,3,4,5], target = 5 → 4
```

**Propósito**: Boundary condition del extremo derecho
**Enseñanza**: El algoritmo alcanza correctamente el final del array

## Análisis de Complejidad

### Temporal: O(log n)

**¿Por qué logarítmica?**

- En cada iteración eliminamos **exactamente la mitad** del espacio de búsqueda
- Para un array de n elementos: n → n/2 → n/4 → n/8 → ... → 1
- Número de iteraciones: log₂(n)

**Ejemplo práctico:**

- Array de 1,000,000 elementos: ~20 comparaciones máximo
- vs Búsqueda lineal: 500,000 comparaciones promedio

### Espacial: O(1)

**¿Por qué constante?**

- Solo usamos 3 variables adicionales: `left`, `right`, `mid`
- No importa el tamaño del array, siempre usamos la misma cantidad de memoria extra

## Invariantes del Algoritmo

### Invariante Principal

> "Si el target existe en el array, debe estar en el rango [left, right]"

**Cómo se mantiene:**

1. **Inicialización**: `[0, nums.length-1]` contiene todo el array
2. **Mantenimiento**: En cada iteración, eliminamos la mitad que no puede contener el target
3. **Terminación**: Cuando `left > right`, sabemos que el target no existe

### Progreso Garantizado

> "En cada iteración, el rango [left, right] se reduce estrictamente"

**Demostración:**

- Caso `nums[mid] < target`: nuevo rango es `[mid+1, right]` (más pequeño)
- Caso `nums[mid] > target`: nuevo rango es `[left, mid-1]` (más pequeño)

## Comparación con Alternativas

### Búsqueda Lineal O(n)

```typescript
// Enfoque naive
for (let i = 0; i < nums.length; i++) {
 if (nums[i] === target) return i;
}
return -1;
```

**Ventajas de Binary Search:**

- 🚀 **Velocidad**: O(log n) vs O(n) - diferencia exponencial
- 🧠 **Elegancia**: Aprovecha la propiedad "ordenado" del array
- 📈 **Escalabilidad**: Mejor rendimiento en arrays grandes

**Cuándo NO usar Binary Search:**

- Array no ordenado (costo de ordenar O(n log n) puede ser mayor)
- Búsquedas muy infrecuentes en arrays pequeños

## Patrones Relacionados en el Study Plan

### 1. **Template Base para Variaciones**

Este template `left <= right` se reutilizará en:

- Search Insert Position (35)
- Find First and Last Position (34)

### 2. **Conceptos Fundamentales**

- **Dividir espacio de búsqueda**: Técnica core de binary search
- **Invariantes de bucle**: Garantizar corrección del algoritmo
- **Boundary conditions**: Manejo de extremos

## Errores Comunes Evitados

### 1. **Overflow en cálculo de mid**

❌ `mid = (left + right) / 2` → Puede desbordarse
✅ `mid = left + (right - left) / 2` → Seguro

### 2. **Condición de bucle incorrecta**

❌ `while (left < right)` → No revisa último elemento
✅ `while (left <= right)` → Revisa todos los elementos

### 3. **Actualización de punteros sin progreso**

❌ `left = mid` o `right = mid` → Posible bucle infinito
✅ `left = mid + 1` y `right = mid - 1` → Siempre progresa

## Lecciones Clave para el Study Plan

1. **Master the template**: Este patrón es la base de todo el study plan
2. **Understand invariants**: Cada variación mantendrá algún tipo de invariante
3. **Edge cases matter**: Los boundary conditions siempre son críticos
4. **Complexity analysis**: O(log n) es la firma de binary search

---

## Próximos Problemas Sugeridos

1. **Search Insert Position (35)**: Variación del template básico
2. **Find First and Last Position (34)**: Múltiples binary searches
3. **Search in Rotated Sorted Array (33)**: Binary search modificado

El dominio de este problema fundamental es **crucial** para el éxito en el resto del study plan. 🎯
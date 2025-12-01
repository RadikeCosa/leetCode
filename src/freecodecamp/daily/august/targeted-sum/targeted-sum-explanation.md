---
title: "Targeted Sum"
difficulty: "easy"
topics:
  - Array
  - String
  - Math
  - Hash Table
  - Set
  - Two Pointers
  - Sorting
source: "freecodecamp"
series: "daily"
category: "daily"
createdAt: "2025-12-01"
---

# Targeted Sum

## Enunciado del Problema

Dado un array de números y un entero target, encontrar dos números únicos en el array que sumen el valor target. Retornar un array con los índices de esos dos números, o "Target not found" si no existen dos números que sumen el target.

# Targeted Sum

**Ejemplos:**

- findTarget([2, 7, 11, 15], 9) → [0, 1]
- findTarget([3, 2, 4, 5], 6) → [1, 2]
- findTarget([1, 3, 5, 6, 7, 8], 15) → [4, 5]
- findTarget([1, 3, 5, 7], 14) → "Target not found"

**Restricciones:**

- Los números pueden ser positivos, negativos o cero
- Solo una solución válida por array
- No usar el mismo elemento dos veces
- Índices deben retornarse en orden ascendente

## Análisis Inicial

Este problema es una variante del clásico "Two Sum" de LeetCode, con dos diferencias principales:

1. **Orden de índices**: Debe retornar índices en orden ascendente
2. **Caso no encontrado**: Retornar string "Target not found" en lugar de array vacío

**Desafíos identificados:**

- Encontrar pares de números que sumen exactamente el target
- Asegurar que los índices estén ordenados
- Manejar el caso donde no existe solución
- Evitar usar el mismo índice dos veces

**Patrones observados en ejemplos:**

- [2, 7, 11, 15], target=9: 2+7=9, índices [0,1] (ya ordenados)
- [3, 2, 4, 5], target=6: 2+4=6, índices [1,2] (ya ordenados)
- [1, 3, 5, 6, 7, 8], target=15: 7+8=15, índices [4,5] (ya ordenados)
- [1, 3, 5, 7], target=14: No hay par que sume 14

**Estrategias posibles:**

### 1. **Enfoque con Hash Map (Optimizado)**

- ✅ **Eficiencia**: O(n) tiempo, O(n) espacio
- ✅ **Simple**: Una sola pasada por el array
- ✅ **Flexible**: Maneja cualquier tipo de números
- ✅ **Perfecto para este problema**: Encuentra solución en orden natural

### 2. **Enfoque con Fuerza Bruta**

- ❌ **Ineficiente**: O(n²) tiempo
- ❌ **No recomendado**: Para arrays grandes

### 3. **Enfoque con Two Pointers (si array ordenado)**

- ✅ **Eficiente**: O(n) tiempo si array está ordenado
- ❌ **No aplica**: El problema no garantiza array ordenado

**Elección del enfoque:** Hash Map es la solución óptima, ya que es O(n) y maneja perfectamente los requisitos del problema.

**Casos borde a considerar:**

- Array con 2 elementos: solución trivial
- Array con números negativos: target puede ser negativo
- Múltiples pares posibles: retornar cualquiera (ordenado)
- No solución: retornar "Target not found"
- Números duplicados: [3,3], target=6 → [0,1]

## Solución Implementada

Se implementó una adaptación del algoritmo Two Sum usando Hash Map:

```javascript
function findTarget(arr, target) {
  // Adaptación del algoritmo Two Sum
  const seen = new Map();

  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i];

    if (seen.has(complement)) {
      // Retornar índices en orden ascendente
      const indices = [seen.get(complement), i].sort((a, b) => a - b);
      return indices;
    }

    seen.set(arr[i], i);
  }

  return "Target not found";
}
```

**Lógica paso a paso:**

1. Crear Map para almacenar números vistos y sus índices
2. Para cada número en el array:
   - Calcular complemento: `target - arr[i]`
   - Si complemento existe en Map, retornar índices ordenados
   - Si no, guardar número actual en Map
3. Si no se encontró solución, retornar "Target not found"

**Ventajas de este enfoque:**

- **Una sola pasada**: O(n) tiempo
- **Espacio eficiente**: O(n) en peor caso
- **Índices ordenados**: `sort()` garantiza orden ascendente
- **Manejo de casos borde**: Incluye validación de no solución
- **Reutilizable**: Algoritmo estándar adaptable

## Alternativas Consideradas

### 1. **Enfoque con Fuerza Bruta - Simple pero ineficiente**

**Cómo funciona:**

```javascript
function findTarget(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j].sort((a, b) => a - b);
      }
    }
  }
  return "Target not found";
}
```

**Cuándo usar:**

- ✅ **Arrays pequeños**: n < 100
- ✅ **Simplicidad**: Lógica inmediata
- ✅ **Sin estructuras auxiliares**: Solo bucles

**Ventajas vs Desventajas:**

- ✅ **Fácil de entender**: Doble bucle anidado
- ✅ **Sin memoria extra**: O(1) espacio
- ❌ **Muy lento**: O(n²) tiempo
- ❌ **No escalable**: Para n=10^4 es 10^8 operaciones

### 2. **Enfoque con Two Pointers - Si array está ordenado**

**Cómo funciona:**

```javascript
function findTarget(arr, target) {
  // Asumiendo array ordenado
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === target) {
      return [left, right]; // Ya ordenados
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return "Target not found";
}
```

**Cuándo usar:**

- ✅ **Array ordenado**: Problemas que garantizan orden
- ✅ **Muy eficiente**: O(n) tiempo, O(1) espacio extra
- ✅ **Óptimo**: Mejor complejidad posible

**Ventajas vs Desventajas:**

- ✅ **Máximo rendimiento**: O(n) tiempo y O(1) espacio
- ✅ **Simple**: Solo dos punteros
- ❌ **Requiere orden**: No aplica a arrays no ordenados
- ❌ **No es este caso**: El problema no ordena el array

### 3. **Enfoque con Set - Variante del Hash Map**

**Cómo funciona:**

```javascript
function findTarget(arr, target) {
  const seen = new Set();

  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i];

    if (seen.has(complement)) {
      // Encontrar índice del complemento (necesita búsqueda adicional)
      const complementIndex = arr.indexOf(complement);
      return [complementIndex, i].sort((a, b) => a - b);
    }

    seen.add(arr[i]);
  }

  return "Target not found";
}
```

**Cuándo usar:**

- ✅ **Solo verificación de existencia**: No necesitas índices
- ✅ **Memoria limitada**: Set usa menos memoria que Map
- ❌ **Ineficiente**: `indexOf()` es O(n)

## Elección del Enfoque Implementado

Se eligió el enfoque con Hash Map por las siguientes razones:

1. **Eficiencia óptima**: O(n) tiempo, mejor que O(n²)
2. **Simplicidad**: Una sola pasada, lógica clara
3. **Flexibilidad**: Maneja cualquier tipo de números
4. **Adaptabilidad**: Fácil modificar para diferentes requisitos
5. **Escalabilidad**: Funciona para arrays grandes (n≤10^4)

**Comparación con Two Sum original:**

- **Similaridad**: 90% del código es idéntico
- **Diferencias**: Orden de índices + mensaje de error
- **Reutilización**: Excelente ejemplo de adaptación de algoritmos

## Complejidad

### Análisis Detallado

**Tiempo: O(n)**

- Una sola iteración por el array: O(n)
- Operaciones de Map: O(1) promedio por operación
- Ordenamiento de índices: O(1) (solo 2 elementos)
- **Total**: O(n) lineal

**Espacio: O(n)**

- Map almacena hasta n elementos en peor caso
- No hay duplicados en el array según restricciones
- **Total**: O(n) espacio auxiliar

### Comparación con otras soluciones

| Enfoque      | Tiempo | Espacio | Mejor para        |
| ------------ | ------ | ------- | ----------------- |
| Hash Map     | O(n)   | O(n)    | **Este problema** |
| Fuerza Bruta | O(n²)  | O(1)    | Arrays pequeños   |
| Two Pointers | O(n)   | O(1)    | Arrays ordenados  |

### Consideraciones Prácticas

- **Para n=10^4**: Hash Map es 10,000 veces más rápido que fuerza bruta
- **Memoria**: O(n) es aceptable para las restricciones
- **JavaScript**: Map es más eficiente que objetos para este caso
- **Orden de índices**: `sort()` es O(1) para 2 elementos

## Aprendizajes y Reflexiones

### Patrones Identificados

1. **Complemento aritmético**: `target - current` es patrón fundamental
2. **Hash Map para búsqueda**: O(1) lookup vs O(n) búsqueda
3. **Trade-off tiempo-espacio**: Cambiar O(n²) por O(n) espacio
4. **Adaptación de algoritmos**: Reutilizar soluciones conocidas

### Mejores Prácticas Aplicadas

- **Nombres descriptivos**: `seen`, `complement`, `indices`
- **Comentarios claros**: Explican la lógica de adaptación
- **Validación robusta**: Manejo del caso "no encontrado"
- **Código reutilizable**: Algoritmo estándar adaptable

### Reflexiones sobre TDD

- Los tests validaron tanto casos positivos como negativos
- La adaptación del algoritmo Two Sum fue directa
- Los casos borde (no solución) fueron cruciales
- La implementación siguió naturalmente de los tests

### Comparación con Two Sum de LeetCode

**Diferencias clave:**

- **Orden de índices**: Two Sum no garantiza orden, este sí
- **Caso no encontrado**: Two Sum asume solución existe, este maneja error
- **Tipo de retorno**: Array vs string de error

**Similitudes:**

- **Algoritmo core**: Hash Map con complemento
- **Complejidad**: O(n) tiempo y espacio
- **Lógica**: Una pasada, lookup de complemento

### Posibles Extensiones

- **Múltiples soluciones**: Retornar todas las parejas válidas
- **Tres números**: Adaptar a "Three Sum"
- **Sin reutilizar elementos**: Ya implementado
- **Mínima diferencia**: Encontrar par más cercano al target

### Conceptos Relacionados

- **Hash Tables**: Estructuras de datos fundamentales
- **Problemas de complemento**: Patrón común en algoritmos
- **Optimización**: Trade-offs entre tiempo y espacio
- **Búsqueda eficiente**: Hash vs búsqueda lineal

Este problema ilustra la importancia de conocer algoritmos clásicos y saber adaptarlos a requisitos específicos, manteniendo la eficiencia y claridad del código.
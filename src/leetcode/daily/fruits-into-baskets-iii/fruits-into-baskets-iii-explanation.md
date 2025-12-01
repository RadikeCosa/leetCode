---
title: "Fruits Into Baskets III"
difficulty: "medium"
topics:
  - Array
  - Binary Search
  - Segment Tree
  - Ordered Set
source: "leetcode"
series: "daily"
category: "daily"
createdAt: "2025-08-06"
---

## Fruits Into Baskets III - Documentación

## Descripción del Problema

**LeetCode 3479 - Medium**  
**Daily Challenge: 6 de Agosto, 2025**

Se nos dan dos arrays de enteros, `fruits` y `baskets`, cada uno de longitud n:

- `fruits[i]` representa la cantidad del i-ésimo tipo de fruta
- `baskets[j]` representa la capacidad de la j-ésima canasta

Debemos colocar las frutas de izquierda a derecha siguiendo estas reglas:

1. Cada tipo de fruta debe colocarse en la canasta disponible más a la izquierda que tenga capacidad mayor o igual a la cantidad de ese tipo de fruta.
2. Cada canasta puede contener solo un tipo de fruta.
3. Si un tipo de fruta no puede colocarse en ninguna canasta, queda sin colocar.

El objetivo es devolver el número de tipos de fruta que quedan sin colocar después de realizar todas las asignaciones posibles.

## Restricciones

- n == fruits.length == baskets.length
- 1 <= n <= 10^5
- 1 <= fruits[i], baskets[i] <= 10^9

**⚠️ Nota importante:** Las restricciones son mucho más grandes que en el problema anterior (Fruits Into Baskets II), lo que sugiere que necesitaremos una solución más eficiente que O(n²).

## Ejemplos y Casos de Prueba

### Ejemplo 1: Una fruta sin colocar

**Input:**

```typescript
fruits = [4, 2, 5];
baskets = [3, 5, 4];
```

**Output esperado:**

```typescript
1;
```

**Explicación paso a paso:**

1. Primera fruta (4) se coloca en la segunda canasta (5)
2. Segunda fruta (2) se coloca en la primera canasta (3)
3. Tercera fruta (5) no puede colocarse en la tercera canasta (4)
   **Resultado:** 1 fruta queda sin colocar

### Ejemplo 2: Todas las frutas colocadas

**Input:**

```typescript
fruits = [3, 6, 1];
baskets = [6, 4, 7];
```

**Output esperado:**

```typescript
0;
```

**Explicación paso a paso:**

1. Primera fruta (3) se coloca en la primera canasta (6)
2. Segunda fruta (6) se coloca en la tercera canasta (7)
3. Tercera fruta (1) se coloca en la segunda canasta (4)
   **Resultado:** Todas las frutas se colocan correctamente

## Conceptos Algorítmicos Avanzados

### Binary Search (Búsqueda Binaria)

**Aplicación:** Encontrar la primera canasta con capacidad suficiente en O(log n)

### Segment Tree

**Aplicación:** Mantener el índice mínimo disponible en un rango de capacidades

### Ordered Set / Multiset

**Aplicación:** Mantener canastas ordenadas por capacidad y permitir eliminación eficiente

---

## Proceso de Implementación

### Paso 1: Solución Ingenua (para entender el problema)

- Implementar la lógica directa O(n²)
- Verificar que funciona con ejemplos pequeños

### Paso 2: Optimización con Binary Search

- Ordenar canastas manteniendo índices
- Usar búsqueda binaria para encontrar candidatos

### Paso 3: Estructura Avanzada

- Implementar Segment Tree o usar estructuras ordenadas
- Optimizar las actualizaciones de estado

---

## Notas para Entrevistas

### Preguntas de Seguimiento Esperadas

1. **"¿Cómo manejarías las restricciones más grandes?"**

   - Explicar por qué O(n²) no funciona
   - Proponer solución con Binary Search + Segment Tree

2. **"¿Qué estructura de datos usarías?"**

   - Comparar opciones: Segment Tree vs Ordered Set
   - Justificar la elección según el contexto

3. **"¿Cómo optimizarías el uso de memoria?"**
   - Discutir trade-offs entre tiempo y espacio
   - Considerar compresión de coordenadas si es necesario

---

## Reflexiones

Este problema es significativamente más complejo que su predecesor, requiriendo:

- **Algoritmos avanzados:** Binary Search, Segment Trees
- **Pensamiento en escalabilidad:** Consideración de restricciones grandes
- **Estructuras de datos complejas:** Más allá de arrays simples

Es un excelente ejemplo de cómo un pequeño cambio en las restricciones puede transformar completamente el enfoque de solución.

---

## Código Correcto para la Regla de "más a la izquierda" (O(n²), válido para n pequeño)

```typescript
export function numOfUnplacedFruits(
  fruits: number[],
  baskets: number[]
): number {
  const n = baskets.length;
  const available = Array.from({ length: n }, (_, i) => i);

  let unplaced = 0;
  for (let i = 0; i < fruits.length; i++) {
    const quantity = fruits[i];
    let placed = false;
    for (let j = 0; j < available.length; j++) {
      const idx = available[j];
      if (baskets[idx] >= quantity) {
        available.splice(j, 1);
        placed = true;
        break;
      }
    }
    if (!placed) unplaced++;
  }
  return unplaced;
}
```

> ⚠️ **Advertencia:** Para n grande, se requiere una estructura avanzada como Segment Tree o Ordered Set para lograr O(n log n).
# Fruits Into Baskets III - Documentación

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

---

## Análisis del Problema

### Diferencias con Fruits Into Baskets II

1. **Escala:** n puede ser hasta 10^5 (vs 100 en el problema anterior)
2. **Valores:** fruits[i] y baskets[i] pueden ser hasta 10^9 (vs 1000 en el anterior)
3. **Complejidad requerida:** O(n²) ya no es viable, necesitamos O(n log n) o mejor

### Pistas del Problema (LeetCode Hints)

1. **Ordenar las canastas:** Ordenar por pares (basket[i], i) en el array
2. **Búsqueda binaria:** Para cada fruta, usar búsqueda binaria para encontrar el primer índice donde basket[i] >= fruit
3. **Segment Tree:** Mantener los índices originales más pequeños donde basket[i] >= fruit
4. **Marcar como usado:** Cuando se encuentra un índice válido, marcarlo como infinito

### Estrategia de Solución Optimizada

La solución ingenua O(n²) no funcionará. Necesitamos:

1. **Preprocesamiento:** Ordenar las canastas manteniendo sus índices originales
2. **Búsqueda eficiente:** Usar búsqueda binaria para encontrar candidatos
3. **Estructura de datos avanzada:** Segment Tree o Ordered Set para mantener disponibilidad
4. **Actualización eficiente:** Marcar canastas usadas sin recorrer todo el array

---

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

_Este documento se actualizará conforme se implemente y refine la solución._

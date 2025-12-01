---
title: "Fruits Into Baskets II"
difficulty: "easy"
topics:
  - "greedy"
  - "simulation"
  - "arrays"
source: "leetcode"
series: "daily"
category: "daily"
createdAt: "2025-08-06"
---

## Fruits Into Baskets II - Proceso de Aprendizaje y Solución

## 🎯 Descripción del Problema

Se nos dan dos arrays de enteros, `fruits` y `baskets`, cada uno de longitud n:

- `fruits[i]` representa la cantidad del i-ésimo tipo de fruta
- `baskets[j]` representa la capacidad de la j-ésima canasta

Debemos colocar las frutas de izquierda a derecha siguiendo estas reglas:

1. **Regla de posición**: Cada tipo de fruta debe colocarse en la canasta disponible **más a la izquierda** que tenga capacidad mayor o igual a la cantidad de ese tipo de fruta
2. **Regla de unicidad**: Cada canasta puede contener solo un tipo de fruta
3. **Regla de disponibilidad**: Si un tipo de fruta no puede colocarse en ninguna canasta, queda sin colocar

**Objetivo**: Devolver el número de tipos de fruta que quedan sin colocar después de realizar todas las asignaciones posibles.

### Restricciones

- `n == fruits.length == baskets.length`
- `1 <= n <= 100`
- `1 <= fruits[i], baskets[i] <= 1000`

## 🔍 Exploración de Enfoques de Implementación

### Estrategias para rastrear cestos ocupados

**Opción 1: Array de booleanos** ⭐ (Elegida)

```typescript
const occupied = new Array(baskets.length).fill(false);
// Ventaja: Acceso O(1) por índice, simple y claro
```

**Opción 2: Set de números**

```typescript
const occupied = new Set<number>();
// Ventaja: Más funcional, pero innecesario para este caso
```

### Estrategias de búsqueda evaluadas

**Opción 1: Loop anidado directo** ⭐ (Elegida)

- Más explícito y fácil de debuggear
- Control total sobre el flujo

**Opción 2: Uso de `findIndex()`**

- Más funcional pero menos control sobre la lógica de `break`

---

## 💡 Solución Final

```typescript
export function numOfUnplacedFruits(
  fruits: number[],
  baskets: number[]
): number {
  // Greedy: for each fruit (left to right) pick the leftmost available basket
  // whose capacity is >= quantity. If none, count it as unplaced.
  // Complexity: O(n^2) worst case (n <= 100 per constraints) -> fine.
  const used: boolean[] = new Array(baskets.length).fill(false);
  let unplaced = 0;

  for (let i = 0; i < fruits.length; i++) {
    const quantity = fruits[i];
    let placed = false;

    for (let j = 0; j < baskets.length; j++) {
      if (!used[j] && baskets[j] >= quantity) {
        used[j] = true;
        placed = true;
        break; // leftmost suitable basket
      }
    }

    if (!placed) unplaced++;
  }

  return unplaced;
}
```

### Análisis de la solución

**Fortalezas del código:**

- ✅ **Comentarios técnicos**: Explica estrategia, complejidad y justificación
- ✅ **Nomenclatura clara**: `used`, `unplaced`, `quantity`, `placed`
- ✅ **Lógica limpia**: El `break` garantiza "leftmost"
- ✅ **Estructura profesional**: Export function, tipos explícitos

**Complejidades:**

- **Temporal**: O(n²) en el peor caso - Aceptable por restricciones (n ≤ 100)
- **Espacial**: O(n) para el array `used`

---

## 🧪 Casos de Prueba y Validación

### Test Case 1: Una fruta sin colocar

```typescript
(fruits = [3, 5, 2]), (baskets = [4, 3, 1]);
// Expected: 1
```

**Trazado:**

- Fruta 3 → Cesto 4 ✅
- Fruta 5 → No cabe en cestos restantes (3, 1) ❌
- Fruta 2 → Cesto 3 ✅
- **Resultado: 1 sin colocar** ✅

### Test Case 2: Todas las frutas colocadas

```typescript
(fruits = [3, 6, 1]), (baskets = [6, 4, 7]);
// Expected: 0
```

### Test Case 3: Múltiples frutas sin colocar

```typescript
(fruits = [1, 6, 6]), (baskets = [9, 4, 3]);
// Expected: 2
```

---

## 🤔 Conceptos de Programación Aplicados

### Estructuras de Datos

- **Array de booleanos**: Para rastrear estado de cestos
- **Variables de control**: Contadores y banderas (`placed`, `unplaced`)

### Paradigmas Algorítmicos

- **Algoritmo Greedy**: Decisiones localmente óptimas
- **Simulación**: Reproducción fiel del proceso descrito
- **Búsqueda lineal**: Para encontrar cestos disponibles

### Patrones de Código

- **Bucles anidados**: Control explícito del flujo
- **Early termination**: `break` para eficiencia
- **State tracking**: Mantenimiento de estado entre iteraciones

---

## 🚀 Reflexiones y Optimizaciones Potenciales

### ¿Es posible optimizar?

**Optimización teórica considerada**: Ordenamiento de cestos

- **Problema**: El ordenamiento cambiaría el significado de "leftmost"
- **Conclusión**: La restricción de "leftmost" hace que el enfoque greedy lineal sea óptimo

### Escalabilidad

- Para n ≤ 100: La solución O(n²) es perfecta
- Para n >> 1000: Se podría considerar estructuras como árboles balanceados
- **Pero**: El constraint del problema hace innecesaria cualquier optimización

---

## 📝 Lecciones Aprendidas - Metodología de Resolución

### Proceso paso a paso aplicado:

1. **Análisis inicial**: Comprensión profunda del enunciado
2. **Identificación de patrones**: Reconocimiento del algoritmo greedy
3. **Exploración de enfoques**: Comparación de alternativas de implementación
4. **Construcción progresiva**: Desarrollo incremental de la solución
5. **Validación**: Testing con casos de prueba diversos

### Habilidades desarrolladas:

- Traducción de reglas naturales a lógica algorítmica
- Selección justificada de estructuras de datos
- Análisis de complejidad temporal y espacial
- Documentación técnica clara y profesional

---

## 🎯 Resumen para Entrevistas Técnicas

**Puntos clave a mencionar:**

- Identificación del patrón greedy de inmediato
- Justificación de decisiones de diseño (boolean[] vs Set)
- Análisis de complejidad y por qué es aceptable
- Capacidad de trazar ejemplos paso a paso
- Código limpio con comentarios técnicos apropiados

**Red flags evitadas:**

- No intentar optimizaciones prematuras
- No complicar innecesariamente la solución
- Respetar todas las restricciones del problema (especialmente "leftmost")
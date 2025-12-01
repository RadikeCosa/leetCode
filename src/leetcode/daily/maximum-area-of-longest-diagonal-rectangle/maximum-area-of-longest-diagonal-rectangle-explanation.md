---
title: "maximum-area-of-longest-diagonal-rectangle"
difficulty: "easy"
topics:
  - Array
  - Math
  - Geometry
  - Sorting
source: "leetcode"
series: "daily"
category: "daily"
createdAt: "2025-08-26"
---

# Maximum Area of Longest Diagonal Rectangle

Dado un array 2D de enteros `dimensions`, donde cada `dimensions[i]` representa `[length, width]` de un rectángulo, retorna el área del rectángulo con la diagonal más larga. Si hay múltiples rectángulos con la misma diagonal más larga, retorna el área del rectángulo con mayor área.

## Ejemplos

### Ejemplo 1:

- Input: `dimensions = [[9,3],[8,6]]`
- Output: `48`
- Explicación:
  - Rectángulo 0: diagonal = √(9² + 3²) = √90 ≈ 9.487
  - Rectángulo 1: diagonal = √(8² + 6²) = √100 = 10
  - El rectángulo 1 tiene la diagonal más larga, área = 8 × 6 = 48

### Ejemplo 2:

- Input: `dimensions = [[3,4],[4,3]]`
- Output: `12`
- Explicación: Ambos tienen diagonal = 5, ambos tienen área = 12

## Análisis

Este problema requiere dos conceptos fundamentales:

1. **Teorema de Pitágoras**: Para calcular la diagonal de un rectángulo con dimensiones `[length, width]`, usamos `diagonal = √(length² + width²)`

2. **Comparación por prioridad**: Primero comparamos por diagonal más larga, en caso de empate decidimos por área mayor.

El patrón clave es mantener dos variables de seguimiento (`maxDiagonal` y `maxArea`) que se actualizan conforme encontramos mejores candidatos.

## Enfoque detallado

### Paso 1: Inicialización

```typescript
let maxDiagonal = 0;
let maxArea = 0;
```

### Paso 2: Recorrido con destructuring

```typescript
for (const [length, width] of dimensions) {
```

Esto es más elegante que usar índices `dimensions[i][0]` y `dimensions[i][1]`.

### Paso 3: Cálculos

```typescript
const diagonal = Math.hypot(length, width); // √(length² + width²)
const area = length * width;
```

`Math.hypot()` es la función perfecta para calcular la hipotenusa.

### Paso 4: Lógica de actualización

```typescript
if (diagonal > maxDiagonal) {
  maxDiagonal = diagonal;
  maxArea = area;
} else if (diagonal === maxDiagonal) {
  maxArea = Math.max(maxArea, area);
}
```

## Casos extremos

- **Un solo rectángulo**: Retorna su área directamente
- **Múltiples rectángulos con misma diagonal**: Elige el de mayor área
- **Dimensiones mínimas** `[1,1]`: Diagonal = √2, área = 1
- **Cuadrados**: Diagonal = lado × √2
- **Rectángulos con una dimensión 0**: Área = 0, diagonal = la otra dimensión

## Complejidad

- **Time complexity**: O(n) - Una sola pasada por el array
- **Space complexity**: O(1) - Solo usamos variables auxiliares constantes

## Conclusión

Solución eficiente que combina:

- **Matemática básica**: Teorema de Pitágoras
- **JavaScript moderno**: Destructuring y `Math.hypot()`
- **Algoritmo simple**: Una pasada con variables de seguimiento

La clave del éxito fue reconocer que `Math.hypot()` simplifica el cálculo de la diagonal y que la lógica de comparación en dos niveles (diagonal primero, área después) resuelve elegantemente el problema de empates.
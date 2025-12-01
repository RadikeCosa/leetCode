---
name: triangle
difficulty: medium
category: daily
topics: [Array, Dynamic Programming, Path Sum]
source: leetcode
series: daily
createdAt: 2025-09-25
---

# LeetCode 120: Triangle

## Análisis del Problema

**Dificultad:** Medium  
**Temas:** Array, Dynamic Programming  
**Enlace:** [LeetCode 120](https://leetcode.com/problems/triangle/)

### Descripción

Dado un array triangular, devolver la suma mínima del camino desde la cima hasta la base. En cada paso, puedes moverte a un número adyacente en la fila inferior. Más formalmente, si estás en el índice i en la fila actual, puedes moverte al índice i o i+1 en la fila siguiente.

**Ejemplo visual:**

```
    2
   3 4
  6 5 7
 4 1 8 3
```

La suma mínima del camino es 2 + 3 + 5 + 1 = 11.

### Ejemplos

**Ejemplo 1:**

```
Input: triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
Output: 11
Explicación: 2 + 3 + 5 + 1 = 11
```

**Ejemplo 2:**

```
Input: triangle = [[-10]]
Output: -10
```

### Restricciones

- `1 <= triangle.length <= 200`
- `triangle[0].length == 1`
- `triangle[i].length == triangle[i-1].length + 1`
- `-10^4 <= triangle[i][j] <= 10^4`

## Enfoques Considerados

### ❌ Enfoque Greedy (Incorrecto)

**Idea inicial:** En cada nivel, elegir siempre el valor mínimo disponible.

**Por qué falla:** El greedy no garantiza el óptimo global. Ejemplo:

```
    1
   2 3
  10 1 10
```

- **Greedy:** 1 → 2 → 1 = 4
- **Óptimo:** 1 → 3 → 1 = 5

El greedy toma decisiones locales sin considerar el impacto futuro.

### ✅ Enfoque Dynamic Programming (Correcto)

**Idea:** Calcular desde abajo hacia arriba, acumulando las sumas mínimas.

**Por qué funciona:** Cada decisión considera todas las posibilidades futuras.

## Proceso TDD (Test-Driven Development)

### 🔴 Fase RED - Tests Fallidos

1. **Análisis conjunto:** Estudiamos el problema y ejemplos
2. **Tests básicos:** Implementamos ejemplos de LeetCode
3. **Casos edge:** Agregamos casos límite (vacío, un elemento, negativos)

### 🟢 Fase GREEN - Implementación Mínima

1. **DP Bottom-Up:** Implementamos el algoritmo básico O(n²) espacio
2. **Verificación:** Todos los tests pasan

### 🔵 Fase REFACTOR - Optimización

1. **Optimización espacial:** Reducimos de O(n²) a O(n) espacio
2. **Refactoring:** Código más limpio y eficiente

## Implementación

### Versión Final Optimizada

```typescript
export function minimumTotal(triangle: number[][]): number {
  const n = triangle.length;

  // Caso base: triángulo vacío
  if (n === 0) {
    return 0;
  }

  // Caso base: solo un elemento
  if (n === 1) {
    return triangle[0][0];
  }

  // Optimización ultra-eficiente: O(n) espacio, modificación in-place
  const dp = [...triangle[n - 1]];

  // Procesamos desde la penúltima fila hacia arriba
  for (let row = n - 2; row >= 0; row--) {
    for (let col = 0; col <= row; col++) {
      // dp[col] y dp[col+1] representan las opciones de la fila inferior
      dp[col] = triangle[row][col] + Math.min(dp[col], dp[col + 1]);
    }
  }

  return dp[0];
}
```

### Explicación Paso a Paso

**Ejemplo:**

```
    2
   3 4
  6 5 7
 4 1 8 3
```

1. **Base:** Última fila `[4, 1, 8, 3]` son las sumas mínimas desde cada posición

2. **Fila 2 `[6, 5, 7]`:**

   - Posición 0: `6 + min(4, 1) = 6 + 1 = 7`
   - Posición 1: `5 + min(1, 8) = 5 + 1 = 6`
   - Posición 2: `7 + min(8, 3) = 7 + 3 = 10`

3. **Fila 1 `[3, 4]`:**

   - Posición 0: `3 + min(7, 6) = 3 + 6 = 9`
   - Posición 1: `4 + min(6, 10) = 4 + 6 = 10`

4. **Fila 0 `[2]`:**
   - Posición 0: `2 + min(9, 10) = 2 + 9 = 11`

**Resultado: 11**

## Análisis de Complejidad

- **Complejidad Temporal:** O(n²)

  - n = número de filas
  - Visitamos cada elemento una vez: 1+2+3+...+n = n(n+1)/2

- **Complejidad Espacial:** O(n)
  - Solo mantenemos la fila anterior en memoria
  - Máximo n elementos simultáneamente

## Casos Edge

1. **Triángulo vacío:** `[]` → 0
2. **Un elemento:** `[[-10]]` → -10
3. **Dos filas:** `[[1], [2, 3]]` → 3 (1+2)
4. **Números negativos:** Todos los elementos negativos
5. **Números mixtos:** Positivos y negativos
6. **Ceros:** Todos los elementos cero
7. **Valores límite:** -10⁴ y 10⁴

## Patrones y Técnicas Utilizadas

### Dynamic Programming Bottom-Up

- **Patrón:** Construir solución desde subproblemas más pequeños
- **Ventaja:** Evita recomputación, garantiza optimalidad

### Optimización Espacial

- **Técnica:** Mantener solo estado necesario (fila anterior)
- **Resultado:** Reducción de O(n²) a O(n) espacio

### Programación Funcional

- **Map/Spread:** Copia defensiva de arrays
- **Math.min:** Operaciones funcionales

## Problemas Relacionados

- **LeetCode 64:** Minimum Path Sum (grid 2D)
- **LeetCode 62:** Unique Paths
- **LeetCode 63:** Unique Paths II
- **LeetCode 931:** Minimum Falling Path Sum

## Lecciones Aprendidas

1. **Greedy ≠ Óptimo:** Siempre verificar con contraejemplos
2. **DP Bottom-Up:** Excelente para problemas de caminos
3. **Optimización Espacial:** Reducir memoria sin afectar tiempo
4. **TDD:** Tests primero garantizan corrección incremental
5. **Casos Edge:** Esenciales para robustez del algoritmo

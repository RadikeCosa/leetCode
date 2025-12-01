---
title: "pacific-atlantic-water-flow"
difficulty: "medium"
topics:
  - DFS
  - BFS
  - Matrix
  - Water Flow
source: "leetcode"
series: "daily"
category: "daily"
createdAt: "2025-12-01"
---

# Pacific Atlantic Water Flow - Análisis Detallado

## Enunciado del Problema

Tenemos una isla rectangular de m x n que está bordeada por el Océano Pacífico (izquierda y arriba) y el Océano Atlántico (derecha y abajo). La isla está dividida en celdas cuadradas con alturas dadas en una matriz `heights`.

El agua de lluvia puede fluir a celdas vecinas (norte, sur, este, oeste) si la altura de la celda vecina es **menor o igual** a la altura actual. El agua puede fluir desde cualquier celda adyacente a un océano hacia el océano.

Necesitamos encontrar todas las coordenadas de celdas `[r, c]` desde las cuales el agua puede fluir tanto al Pacífico como al Atlántico.

## Análisis Inicial

### Comprensión del Problema

- **Condición de flujo**: El agua fluye de una celda A a una celda B si `height[A] >= height[B]`
- **Dirección del flujo**: Siempre hacia abajo o igual altura (nunca hacia arriba)
- **Océanos como sumideros**: Cualquier celda adyacente a un océano puede verter agua en él
- **Objetivo**: Celdas con caminos válidos a AMBOS océanos

### Ejemplo Conceptual

Consideremos esta matriz simple 3x3:

```
Pacífico →  [5, 3, 4]  ← Atlántico
           [1, 2, 6]
           [7, 8, 9]
```

- Celda [0,0] = 5: puede fluir al Pacífico (está en el borde), y al Atlántico vía [0,0]→[1,0]→[2,0]→borde inferior
- Celda [1,1] = 2: puede fluir al Pacífico vía [1,1]→[1,0]→[0,0], y al Atlántico vía [1,1]→[1,2]→borde derecho
- Celda [2,2] = 9: puede fluir al Atlántico (está en el borde), pero NO al Pacífico (no hay camino descendente)

### Casos Especiales

1. **Isla 1x1**: La única celda puede fluir a ambos océanos
2. **Celdas en bordes**: Siempre pueden fluir al océano correspondiente
3. **Celdas internas**: Necesitan caminos descendentes a ambos bordes
4. **Mesetas**: Celdas con misma altura pueden fluir entre sí

## Enfoque y Estrategia

### ¿Por qué NO buscar desde cada celda?

**Enfoque ingenuo**: Para cada celda, intentar encontrar caminos al Pacífico Y al Atlántico

- **Problema**: Complejidad O((m×n)²) en el peor caso
- **Ineficiente**: Tendríamos que explorar múltiples caminos desde cada celda

### Estrategia Óptima: Búsqueda desde los Océanos

**Idea clave**: En lugar de buscar desde las celdas hacia los océanos, buscamos desde los océanos hacia las celdas que pueden alcanzarlos.

**Analogía**: Es como buscar qué casas pueden llegar a la autopista desde la autopista, en lugar de buscar desde cada casa.

### Algoritmo DFS Bidireccional

1. **Inicializar matrices de alcance**:

   - `pacificReachable[m][n]`: celdas que pueden fluir al Pacífico
   - `atlanticReachable[m][n]`: celdas que pueden fluir al Atlántico

2. **DFS desde Pacífico**:

   - Empezar desde: borde izquierdo (columna 0) + borde superior (fila 0)
   - Marcar todas las celdas alcanzables siguiendo el flujo del agua
   - Condición: desde celda actual, ir a vecinas con `altura_vecina <= altura_actual`

3. **DFS desde Atlántico**:

   - Empezar desde: borde derecho (columna n-1) + borde inferior (fila m-1)
   - Marcar todas las celdas alcanzables siguiendo el flujo del agua

4. **Intersección**: Celdas marcadas en ambas matrices

## Implementación Detallada

### Estructuras de Datos

```typescript
const rows = heights.length;
const cols = heights[0].length;
const pacificReachable: boolean[][] = Array.from({ length: rows }, () =>
  Array(cols).fill(false)
);
const atlanticReachable: boolean[][] = Array.from({ length: rows }, () =>
  Array(cols).fill(false)
);
```

### Función DFS

```typescript
const dfs = (row: number, col: number, reachable: boolean[][]) => {
  // Evitar límites y celdas ya visitadas
  if (row < 0 || row >= rows || col < 0 || col >= cols || reachable[row][col]) {
    return;
  }

  reachable[row][col] = true;
  const currentHeight = heights[row][col];

  // Explorar 4 direcciones con condición de flujo
  for (const [dr, dc] of [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ]) {
    const newRow = row + dr;
    const newCol = col + dc;

    if (
      newRow >= 0 &&
      newRow < rows &&
      newCol >= 0 &&
      newCol < cols &&
      heights[newRow][newCol] <= currentHeight &&
      !reachable[newRow][newCol]
    ) {
      dfs(newRow, newCol, reachable);
    }
  }
};
```

### Inicialización de Búsquedas

```typescript
// Desde Pacífico (izquierda + arriba)
for (let row = 0; row < rows; row++) dfs(row, 0, pacificReachable);
for (let col = 0; col < cols; col++) dfs(0, col, pacificReachable);

// Desde Atlántico (derecha + abajo)
for (let row = 0; row < rows; row++) dfs(row, cols - 1, atlanticReachable);
for (let col = 0; col < cols; col++) dfs(rows - 1, col, atlanticReachable);
```

### Recopilación de Resultados

```typescript
const result: number[][] = [];
for (let row = 0; row < rows; row++) {
  for (let col = 0; col < cols; col++) {
    if (pacificReachable[row][col] && atlanticReachable[row][col]) {
      result.push([row, col]);
    }
  }
}
```

## Análisis de Complejidad

### Tiempo: O(rows × cols)

- **Por qué**: Cada celda se visita como máximo 2 veces (una por océano)
- **Razonamiento**: El DFS marca celdas alcanzables, pero no revisita celdas ya marcadas
- **Caso peor**: Toda la isla es alcanzable desde ambos océanos

### Espacio: O(rows × cols)

- **Matrices booleanas**: 2 × (rows × cols) para rastrear alcance
- **Stack de recursión**: O(rows × cols) en el peor caso
- **Optimización posible**: BFS para controlar mejor el stack

## Ejemplos Paso a Paso

### Ejemplo 1: Matriz 5×5

```
Input:
[1, 2, 2, 3, 5]  ← Fila 0 (Pacífico)
[3, 2, 3, 4, 4]  ← Fila 1
[2, 4, 5, 3, 1]  ← Fila 2
[6, 7, 1, 4, 5]  ← Fila 3
[5, 1, 1, 2, 4]  ← Fila 4 (Atlántico)
 ↑         ↑
 Col 0    Col 4
(Pacífico)(Atlántico)
```

**Paso 1: DFS desde Pacífico**

- Marca borde izquierdo: [0,0], [1,0], [2,0], [3,0], [4,0]
- Marca borde superior: [0,0], [0,1], [0,2], [0,3], [0,4]
- Desde [0,4]=5, puede ir a [1,4]=4 ≤ 5, marca [1,4]
- Desde [1,4]=4, puede ir a [1,3]=4 ≤ 4, marca [1,3]
- Desde [1,3]=4, puede ir a [2,3]=3 ≤ 4, marca [2,3]
- Desde [2,3]=3, puede ir a [2,4]=1 ≤ 3, marca [2,4]
- Desde [3,0]=6, puede ir a [3,1]=7? No (7 > 6)
- Desde [4,0]=5, puede ir a [4,1]=1 ≤ 5, marca [4,1]
- Desde [4,1]=1, puede ir a [4,2]=1 ≤ 1, marca [4,2]
- Desde [4,2]=1, puede ir a [4,3]=2? No (2 > 1)

**Paso 2: DFS desde Atlántico**

- Marca borde derecho: [0,4], [1,4], [2,4], [3,4], [4,4]
- Marca borde inferior: [4,0], [4,1], [4,2], [4,3], [4,4]
- Desde [4,3]=2, puede ir a [4,2]=1 ≤ 2, marca [4,2] (ya marcado)
- Desde [4,2]=1, puede ir a [3,2]=1 ≤ 1, marca [3,2]
- Desde [3,2]=1, puede ir a [3,3]=4? No
- Desde [3,4]=5, puede ir a [2,4]=1 ≤ 5, marca [2,4] (ya marcado)
- Desde [2,4]=1, puede ir a [2,3]=3? No

**Paso 3: Intersección**
Celdas marcadas en ambas: [0,4], [1,3], [1,4], [2,2], [3,0], [3,1], [4,0]

### Ejemplo 2: Isla 1×1

```
Input: [[1]]
```

- Pacífico: borde izquierdo y superior → [0,0]
- Atlántico: borde derecho e inferior → [0,0]
- Intersección: [0,0]

## Optimizaciones y Consideraciones

### DFS vs BFS

**DFS (implementado)**:

- ✅ **Ventajas**: Simple, menos código, buen uso de cache
- ✅ **Espacio**: Stack O(m×n) peor caso
- ✅ **LeetCode**: Suficiente para constraints (200×200)

**BFS alternativo**:

- ✅ **Ventajas**: Mejor control de memoria, evita stack overflow
- ✅ **Espacio**: Queue O(m×n) peor caso
- ❌ **Desventajas**: Más código, peor locality

### Optimizaciones de Espacio

1. **Matriz única con estados**: Usar números en lugar de dos matrices booleanas
2. **BFS iterativo**: Para evitar recursión profunda
3. **Direcciones precomputadas**: Array de direcciones para claridad

### Edge Cases Analizados

1. **Matriz 1×1**: Siempre solución [[0,0]]
2. **Fila única**: Todas las celdas pueden fluir a ambos (conectadas)
3. **Columna única**: Todas las celdas pueden fluir a ambos (conectadas)
4. **Terreno plano**: Todas las celdas pueden fluir a ambos
5. **Mesetas**: Celdas con misma altura son transitivas
6. **Celdas aisladas**: Alturas muy altas pueden aislar celdas

## Conclusión

Esta solución demuestra el poder del **cambio de perspectiva** en algoritmos:

- En lugar de buscar desde cada celda (O((m×n)²))
- Buscamos desde los destinos (O(m×n))

El algoritmo DFS bidireccional es elegante, eficiente y captura perfectamente la física del flujo de agua en un terreno discreto.

## Conclusión

Este problema requiere un cambio de perspectiva: en lugar de simular el flujo de agua desde cada celda, simulamos el flujo desde los océanos hacia el interior de la isla. Esta estrategia de "búsqueda inversa" es común en problemas de flujo y conectividad.
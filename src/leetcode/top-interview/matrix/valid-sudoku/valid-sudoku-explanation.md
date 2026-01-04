---
title: "Valid Sudoku"
difficulty: "medium"
topics:
  - Array
  - Hash Table
  - Matrix
source: "leetcode"
series: "top-interview"
category: "matrix"
createdAt: "2025-09-04"
blogLink: "https://blog-astro-rouge.vercel.app/posts/valid-sudoku"
---

## Valid Sudoku - Explicación Detallada

## Descripción del Problema

Este problema nos pide validar si un tablero de Sudoku 9 x 9 es válido según las reglas clásicas del juego. **No necesitamos resolver el Sudoku**, solo verificar que el estado actual no viole las reglas.

### Reglas de Validación

1. **Filas**: Cada fila debe contener dígitos 1-9 sin repetición
2. **Columnas**: Cada columna debe contener dígitos 1-9 sin repetición
3. **Sub-cajas 3 x 3**: Cada una de las 9 sub-cajas debe contener dígitos 1-9 sin repetición

### Características Importantes

- **Tablero parcialmente lleno**: Las celdas vacías se representan con `'.'`
- **Solo validar celdas llenas**: No necesitamos verificar que esté completo
- **Tamaño fijo**: Siempre es 9 x 9, lo que permite optimizaciones

## Análisis del Problema

### Conceptos Clave

1. **Validación de restricciones**: Verificar múltiples condiciones simultáneamente
2. **Mapeo de coordenadas**: Convertir posiciones (i,j) a índices de sub-caja
3. **Detección de duplicados**: Usar estructuras de datos eficientes

### Estrategia de Solución

La clave está en **detectar duplicados eficientemente** en las tres dimensiones del problema: filas, columnas y sub-cajas 3 x 3.

**Enfoque principal:**

1. **Un solo recorrido**: Procesar cada celda una vez
2. **Sets para tracking**: Usar Sets para detectar duplicados automáticamente
3. **Validación simultánea**: Verificar las 3 reglas en paralelo
4. **Early return**: Salir inmediatamente al encontrar violación

**Estructura de datos:**

- `rows[i]`: Set que contiene números ya vistos en la fila `i`
- `cols[j]`: Set que contiene números ya vistos en la columna `j`
- `boxes[k]`: Set que contiene números ya vistos en la sub-caja `k`

## Implementación

```typescript
export function isValidSudoku(board: string[][]): boolean {
 // Crear sets para trackear números ya vistos en cada fila, columna y sub-caja
 const rows: Set<string>[] = Array.from({ length: 9 }, () => new Set());
 const cols: Set<string>[] = Array.from({ length: 9 }, () => new Set());
 const boxes: Set<string>[] = Array.from({ length: 9 }, () => new Set());

 // Recorrer cada celda del tablero 9 x 9
 for (let i = 0; i < 9; i++) {
 for (let j = 0; j < 9; j++) {
 const num = board[i][j];

 // Saltar celdas vacías (representadas por ".")
 if (num !== ".") {
 // Validar fila: verificar si el número ya existe en la fila i
 if (rows[i].has(num)) return false;
 rows[i].add(num);

 // Validar columna: verificar si el número ya existe en la columna j
 if (cols[j].has(num)) return false;
 cols[j].add(num);

 // Validar sub-caja 3 x 3: calcular índice de la caja y verificar duplicados
 const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
 if (boxes[boxIndex].has(num)) return false;
 boxes[boxIndex].add(num);
 }
 }
 }

 return true;
}
```

### El Cálculo Mágico de Sub-cajas 🔥

**LA FÓRMULA CLAVE:** `boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3)`

Esta es la parte más importante de entender. Vamos paso a paso:

#### **Visualización del Tablero 9 x 9:**

```
Posiciones (i,j): Sub-cajas numeradas:
(0,0) (0,1) (0,2) | (0,3) (0,4) (0,5) | (0,6) (0,7) (0,8) 0 0 0 | 1 1 1 | 2 2 2
(1,0) (1,1) (1,2) | (1,3) (1,4) (1,5) | (1,6) (1,7) (1,8) 0 0 0 | 1 1 1 | 2 2 2
(2,0) (2,1) (2,2) | (2,3) (2,4) (2,5) | (2,6) (2,7) (2,8) 0 0 0 | 1 1 1 | 2 2 2

-------------------|---------------------------|-------- ------|-------|------
(3,0) (3,1) (3,2) | (3,3) (3,4) (3,5) | (3,6) (3,7) (3,8) 3 3 3 | 4 4 4 | 5 5 5
(4,0) (4,1) (4,2) | (4,3) (4,4) (4,5) | (4,6) (4,7) (4,8) 3 3 3 | 4 4 4 | 5 5 5
(5,0) (5,1) (5,2) | (5,3) (5,4) (5,5) | (5,6) (5,7) (5,8) 3 3 3 | 4 4 4 | 5 5 5
-------------------------|---------------------------|-------- ------|-------|------
(6,0) (6,1) (6,2) | (6,3) (6,4) (6,5) | (6,6) (6,7) (6,8) 6 6 6 | 7 7 7 | 8 8 8
(7,0) (7,1) (7,2) | (7,3) (7,4) (7,5) | (7,6) (7,7) (7,8) 6 6 6 | 7 7 7 | 8 8 8
(8,0) (8,1) (8,2) | (8,3) (8,4) (8,5) | (8,6) (8,7) (8,8) 6 6 6 | 7 7 7 | 8 8 8
```

#### **Desglose de la Fórmula:**

**Paso 1:** `Math.floor(i / 3)` → Determina la "fila de sub-cajas"

- Filas 0,1,2 → `Math.floor(0/3) = Math.floor(1/3) = Math.floor(2/3) = 0`
- Filas 3,4,5 → `Math.floor(3/3) = Math.floor(4/3) = Math.floor(5/3) = 1`
- Filas 6,7,8 → `Math.floor(6/3) = Math.floor(7/3) = Math.floor(8/3) = 2`

**Paso 2:** `Math.floor(j / 3)` → Determina la "columna de sub-cajas"

- Columnas 0,1,2 → `Math.floor(0/3) = Math.floor(1/3) = Math.floor(2/3) = 0`
- Columnas 3,4,5 → `Math.floor(3/3) = Math.floor(4/3) = Math.floor(5/3) = 1`
- Columnas 6,7,8 → `Math.floor(6/3) = Math.floor(7/3) = Math.floor(8/3) = 2`

**Paso 3:** `fila_subcaja * 3 + columna_subcaja` → Mapea a índice único 0-8

#### **Ejemplos Concretos:**

```typescript
// Posición (1,4) - centro-superior
const boxIndex = Math.floor(1/3) * 3 + Math.floor(4/3)
 = 0 * 3 + 1 = 1 ✅ Sub-caja 1

// Posición (5,7) - centro-derecha
const boxIndex = Math.floor(5/3) * 3 + Math.floor(7/3)
 = 1 * 3 + 2 = 5 ✅ Sub-caja 5

// Posición (8,0) - esquina inferior-izquierda
const boxIndex = Math.floor(8/3) * 3 + Math.floor(0/3)
 = 2 * 3 + 0 = 6 ✅ Sub-caja 6
```

#### **¿Por qué Funciona?**

La fórmula esencialmente trata las sub-cajas como una **matriz 3 x 3 de sub-cajas**:

```
Matriz de sub-cajas:
[0] [1] [2]
[3] [4] [5]
[6] [7] [8]
```

Y mapea cualquier posición (i,j) del tablero 9 x 9 a su sub-caja correspondiente usando:

- **Fila de sub-caja**: `Math.floor(i / 3)` (0, 1, o 2)
- **Columna de sub-caja**: `Math.floor(j / 3)` (0, 1, o 2)
- **Índice final**: `fila * 3 + columna` (convierte coordenadas 2 D a índice 1 D)

### Decisiones de Diseño

1. **Array.from() vs .fill().map()**:

 ```typescript
 // ✅ Preferible - más explícito
 Array.from({ length: 9 }, () => new Set());

 // ❌ Problemático - puede crear referencias compartidas
 new Array(9).fill(new Set());
 ```

2. **Early Return**: Salir inmediatamente al detectar duplicado mejora performance

3. **Variable `num`**: Hace el código más legible que usar `board[i][j]` repetidamente

4. **Types explícitos**: `Set<string>[]` mejora legibilidad y type safety

## Análisis de Complejidad

### Complejidad Temporal

**O(1) - Tiempo constante**

- **Bucles anidados**: 9 × 9 = 81 iteraciones (constante)
- **Operaciones Set**: `.has()` y `.add()` son O(1) promedio
- **Cálculo boxIndex**: Operaciones aritméticas O(1)
- **Total**: 81 × O(1) = O(1)

Aunque hay bucles anidados, como el tamaño es **fijo (9 x 9)**, la complejidad es constante.

### Complejidad Espacial

**O(1) - Espacio constante**

- **27 Sets totales**: 9 filas + 9 columnas + 9 sub-cajas
- **Máximo 9 elementos por Set**: Solo dígitos 1-9
- **Espacio total**: 27 × 9 = 243 elementos máximo (constante)

## Casos Edge

### 1. **Tablero completamente vacío**

```typescript
const board = Array(9)
 .fill(null)
 .map(() => Array(9).fill("."));
// Resultado: true (no hay duplicados)
```

### 2. **Tablero con una sola celda llena**

```typescript
board[4][4] = "5"; // Centro del tablero
// Resultado: true (solo un número, no puede haber duplicados)
```

### 3. **Duplicado en esquinas de sub-cajas diferentes**

```typescript
board[0][0] = "1"; // Sub-caja 0
board[0][8] = "1"; // Sub-caja 2 (misma fila, diferente sub-caja)
// Resultado: false (duplicado en fila 0)
```

### 4. **Caso límite de sub-caja**

```typescript
board[2][2] = "9"; // Esquina de sub-caja 0
board[3][3] = "9"; // Esquina de sub-caja 4
// Resultado: true (diferentes sub-cajas, filas y columnas)
```

## Patrones y Técnicas Utilizadas

### 1. **Hash Set para Detección de Duplicados**

- **Patrón**: Usar Sets para trackear elementos ya vistos
- **Aplicación**: Problemas que requieren detectar duplicados en O(1)
- **Alternativas**: Arrays booleanos, Maps

### 2. **Mapeo de Coordenadas 2 D a 1 D**

- **Fórmula general**: `fila * ancho + columna`
- **En sub-cajas**: `Math.floor(i/size) * grupos + Math.floor(j/size)`
- **Aplicable en**: Matrices, grids, tableros de juegos

### 3. **Validación Simultánea de Múltiples Restricciones**

- **Patrón**: Verificar varias condiciones en una sola pasada
- **Beneficio**: Evita múltiples iteraciones sobre los datos
- **Uso**: Problemas de validación, constraint satisfaction

### 4. **Early Return Optimization**

- **Estrategia**: Retornar `false` tan pronto como se detecte violación
- **Impacto**: Mejora significativa de performance en casos inválidos
- **Aplicable en**: Validaciones, búsquedas, algoritmos de decisión

### 5. **Inicialización Funcional de Arrays**

- **Array.from()**: Crea arrays con funciones generadoras
- **Ventaja**: Evita problemas de referencias compartidas
- **Uso**: Cuando necesitas objetos únicos en cada posición

## Conexiones con Otros Problemas

### Problemas Similares en LeetCode

- **36. Valid Sudoku** (este problema)
- **37. Sudoku Solver**: Extensión que requiere resolución completa
- **1001. Grid Illumination**: Uso de tracking en filas/columnas/diagonales
- **289. Game of Life**: Validación de reglas en grid 2 D

### Patrones Reutilizables

- **Set-based duplicate detection**: Two Sum, Contains Duplicate
- **2 D to 1 D mapping**: Muchos problemas de matrices
- **Multi-constraint validation**: N-Queens, Word Search
- **Grid sub-region processing**: Matrix problems generales

### Extensiones Posibles

- **N×N Sudoku**: Generalizar para tamaños variables
- **Sudoku Solver**: Implementar backtracking para resolución
- **Sudoku Generator**: Crear tableros válidos aleatorios
- **Optimized validation**: Usar bitmasking en lugar de Sets

[Se completará después de implementar la solución]

## Conexiones con Otros Problemas

[Se completará después de implementar la solución]
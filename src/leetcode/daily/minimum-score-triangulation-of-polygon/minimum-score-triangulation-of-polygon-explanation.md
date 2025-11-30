---
name: minimum-score-triangulation-of-polygon
difficulty: medium
category: daily
topics: [Dynamic Programming, Polygon, Interval DP]
source: leetcode
series: daily
createdAt: 2025-11-29
---

# Minimum Score Triangulation of Polygon - Análisis y Explicación

## Comprensión del Problema

### ¿Qué es la triangulación de un polígono?

La triangulación de un polígono es el proceso de dividirlo en triángulos conectados, donde todos los vértices de los triángulos deben ser vértices del polígono original. Para un polígono de n lados, siempre se pueden formar exactamente n-2 triángulos.

En este problema, cada vértice tiene un valor numérico, y el "score" de cada triángulo es el producto de los valores de sus tres vértices. El score total de una triangulación es la suma de los scores de todos los triángulos.

El objetivo es encontrar la triangulación que produzca el score total mínimo posible.

### Análisis de los Ejemplos

**Ejemplo 1: [1,2,3]**

- Es un triángulo simple
- Solo hay una forma de triangularlo
- Score = 1 × 2 × 3 = 6

**Ejemplo 2: [3,7,4,5]**

- Es un cuadrilátero (4 vértices)
- Se pueden formar 4-2 = 2 triángulos
- Dos posibles triangulaciones:
  1. Triángulos: (0,1,3) y (1,2,3) → 3×7×5 + 7×4×5 = 105 + 140 = 245
  2. Triángulos: (0,2,3) y (0,1,2) → 3×4×5 + 3×7×4 = 60 + 84 = 144
- El mínimo es 144

**Ejemplo 3: [1,3,1,4,1,5]**

- Es un hexágono (6 vértices)
- Se pueden formar 6-2 = 4 triángulos
- La triangulación óptima da score = 13

## Enfoque y Estrategia

### Identificación del Patrón

Analizando los ejemplos, observamos que:

1. **Subproblemas más pequeños**: En cualquier triangulación, siempre hay triángulos que comparten aristas con el polígono exterior.

2. **Dividir y conquistar**: Una estrategia común es elegir un triángulo que conecte vértices no adyacentes, dividiendo el problema en subproblemas más pequeños.

3. **Recurrencia**: Si consideramos el polígono como un ciclo, podemos usar programación dinámica donde `dp[i][j]` representa el costo mínimo para triangular desde el vértice i hasta el vértice j.

### Algoritmo Propuesto: Programación Dinámica

La solución óptima usa **programación dinámica** con la siguiente estrategia:

- `dp[i][j]` = costo mínimo para triangular el subpolígono formado por los vértices desde i hasta j
- Para calcular `dp[i][j]`, probamos todas las formas de elegir un vértice k entre i+1 y j-1, formando un triángulo con vértices i, k, j
- El costo sería: `dp[i][k] + dp[k][j] + (valor[i] × valor[k] × valor[j])`
- Tomamos el mínimo sobre todas las posibles elecciones de k

**Casos base:**

- `dp[i][i+1] = 0` (2 vértices no se pueden triangular)
- `dp[i][i+2] = valor[i] × valor[i+1] × valor[i+2]` (triángulo directo)

**Orden de cálculo:** Procesamos subpolígonos de tamaño creciente (3, 4, 5, ..., n vértices)

## Implementación

### Estructura de Datos Utilizada

- **Tabla DP**: Matriz 2D de tamaño n×n donde `dp[i][j]` almacena el costo mínimo para triangular desde vértice i hasta j
- **Inicialización**: Todos los valores se inicializan en 0, pero luego se actualizan según los casos base y la DP

### Explicación del Código

```typescript
const n = values.length;
const dp: number[][] = Array.from({ length: n }, () => Array(n).fill(0));
```

Creamos una tabla DP de n×n para almacenar los resultados de subproblemas.

```typescript
// Caso base: distancias de 2 vértices no se triangulan
for (let i = 0; i < n - 1; i++) {
  dp[i][i + 1] = 0;
}
```

Dos vértices consecutivos no forman un triángulo, por lo tanto su costo es 0.

```typescript
// Caso base: triángulos de 3 vértices
for (let i = 0; i < n - 2; i++) {
  dp[i][i + 2] = values[i] * values[i + 1] * values[i + 2];
}
```

Para tres vértices consecutivos (i, i+1, i+2), solo hay una forma de triangularlos: el triángulo formado por estos tres vértices.

```typescript
// DP para polígonos más grandes
for (let len = 3; len < n; len++) {
  for (let i = 0; i < n - len; i++) {
    const j = i + len;
    dp[i][j] = Infinity; // Inicializar con un valor grande
    for (let k = i + 1; k < j; k++) {
      dp[i][j] = Math.min(
        dp[i][j],
        dp[i][k] + dp[k][j] + values[i] * values[k] * values[j]
      );
    }
  }
}
```

Esta es la parte principal de la DP:

1. **len** representa el tamaño del subpolígono (número de vértices)
2. Para cada subpolígono de tamaño `len`, consideramos todas las posiciones iniciales `i`
3. `j = i + len` es el vértice final del subpolígono
4. Para cada posible vértice `k` entre `i+1` y `j-1`:
   - Formamos un triángulo con vértices `i`, `k`, `j`
   - El costo total sería: costo de triangular `i` a `k` + costo de triangular `k` a `j` + costo del triángulo `i,k,j`
   - Tomamos el mínimo sobre todas las posibles elecciones de `k`

```typescript
return dp[0][n - 1];
```

El resultado final es el costo mínimo para triangular todo el polígono (desde vértice 0 hasta vértice n-1).

## Análisis de Complejidad

### Complejidad Temporal

- **O(n³)**: Tres bucles anidados
  - Bucle externo: `len` de 3 a n-1 → O(n)
  - Bucle medio: `i` de 0 a n-len → O(n)
  - Bucle interno: `k` de i+1 a j-1 → O(n) en el peor caso
- Total: O(n³), aceptable dado que n ≤ 50

### Complejidad Espacial

- **O(n²)**: Tabla DP de n×n elementos
- Se puede optimizar a O(n) usando solo dos filas, pero O(n²) es claro y simple

## Casos Edge y Consideraciones

- **n = 3**: Caso base directo, retorna el producto de los tres valores
- **n = 4**: Solo dos posibles triangulaciones, la DP encuentra automáticamente la mínima
- **Valores grandes**: Los productos pueden ser grandes, pero JavaScript maneja números grandes correctamente
- **Polígono convexo**: El problema asume convexidad, lo que simplifica el cálculo

## Conceptos y Patrones Aprendidos

### Programación Dinámica en Polígonos

- **Subproblemas superpuestos**: Los subpolígonos se solapan de múltiples formas
- **Estructura de intervalo**: DP sobre rangos consecutivos de vértices
- **Elección óptima local**: Para cada triángulo añadido, elegir el vértice k que minimice el costo

### Patrones de DP General

- **Casos base pequeños**: Resolver primero los problemas más simples (2 y 3 vértices)
- **Construcción bottom-up**: Resolver subproblemas en orden de tamaño creciente
- **Memoización implícita**: La tabla DP almacena resultados para evitar recálculo

### Aplicaciones Relacionadas

- **Triangulación de polígonos**: Base para algoritmos de geometría computacional
- **Problemas de partición óptima**: Similar a problemas de cortar cadenas o matrices
- **Problemas de paréntesis**: Estructura similar en expresiones matemáticas

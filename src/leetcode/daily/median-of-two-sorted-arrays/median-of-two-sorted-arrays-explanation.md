---
title: Median Of Two Sorted Arrays
source: leetcode
series: daily
category: december
createdAt: 2025-12-20
difficulty: TODO
topics:
  - array
  - binary-search
  - divide-and-conquer
blogLink: https://blog-astro-rouge.vercel.app/posts/median-of-two-sorted-arrays/
problemLink: https://leetcode.com/problems/median-of-two-sorted-arrays/description/
---

## Median Of Two Sorted Arrays - Análisis y Explicación

## Enunciado del Problema

Dados dos arrays ordenados, `nums1` y `nums2`, de tamaños $m$ y $n$ respectivamente, se pide devolver la mediana del conjunto combinado de ambos arrays, manteniendo el orden. Es requisito que la solución tenga una complejidad temporal de $O(\log(m+n))$.

## Análisis Inicial

### Comprensión del Problema

El objetivo es calcular la mediana de la unión de dos arrays ya ordenados. Esto implica diseñar un algoritmo eficiente que aproveche el orden de los datos para evitar una solución de fuerza bruta, que sería menos eficiente.

### Casos de Prueba Identificados

Al analizar el problema, se identifican los siguientes casos de prueba relevantes:

1. **Ambos arrays tienen la misma longitud y no hay elementos en común:**

- `nums1 = [1, 3]`, `nums2 = [2, 4]` → Mediana: 2.5

2. **Uno de los arrays es mucho más grande que el otro:**

- `nums1 = [1, 2]`, `nums2 = [3, 4, 5, 6, 7]` → Mediana: 4

3. **Uno de los arrays está vacío:**

- `nums1 = []`, `nums2 = [1]` → Mediana: 1
- `nums1 = [2, 3]`, `nums2 = []` → Mediana: 2.5

4. **Arrays con elementos repetidos:**

- `nums1 = [1, 2, 2]`, `nums2 = [2, 2, 3]` → Mediana: 2

5. **Ambos arrays tienen un solo elemento:**

- `nums1 = [1]`, `nums2 = [2]` → Mediana: 1.5

6. **Longitud total impar:**

- `nums1 = [1, 3]`, `nums2 = [2]` → Mediana: 2

7. **Longitud total par:**

- `nums1 = [1, 2]`, `nums2 = [3, 4]` → Mediana: 2.5

Estos casos cubren situaciones típicas, edge cases y combinaciones de tamaños y valores que pueden afectar el cálculo de la mediana.

## Desarrollo de la Solución

### Enfoque Elegido

#### Pseudocódigo de la solución con búsqueda binaria

1. Si `nums1` es más largo que `nums2`, intercambiarlos (así siempre buscamos en el array más corto).
2. Definir `low = 0`, `high = m` (donde `m` es la longitud de `nums1`).
3. Mientras `low <= high`:
   - Calcular `i = (low + high) // 2` (partición en `nums1`).
   - Calcular `j = (m + n + 1) // 2 - i` (partición en `nums2`).
   - Si `i > 0` y `nums1[i-1] > nums2[j]`, mover `high = i - 1`.
   - Si `i < m` y `nums2[j-1] > nums1[i]`, mover `low = i + 1`.
   - Si no, partición válida encontrada:
     - Si la suma de longitudes es impar, mediana = max(`nums1[i-1]`, `nums2[j-1]`).
     - Si es par, mediana = (max(`nums1[i-1]`, `nums2[j-1]`) + min(`nums1[i]`, `nums2[j]`)) / 2.

#### Ejemplo concreto

Supón:
`nums1 = [1, 3, 8]`
`nums2 = [7, 9, 10, 11]`

Total de elementos: 7 (impar). Buscamos una partición tal que haya 3 elementos a la izquierda y 4 a la derecha.

Primer intento:

- `i = (0+3)//2 = 1`, `j = (3+4+1)//2 - 1 = 2`
- Izquierda: `nums1[0] = 1`, `nums2[0,1] = 7,9`
- Derecha: `nums1[1,2] = 3,8`, `nums2[2,3] = 10,11`
- Comprobamos condiciones:
  - `nums1[i-1]=1 <= nums2[j]=10` ✔️
  - `nums2[j-1]=9 > nums1[i]=3` ✖️
  - Debemos aumentar `i`.

Segundo intento:

- `i = 2`, `j = 2`
- Izquierda: `nums1[0,1]=1,3`, `nums2[0,1]=7,9`
- Derecha: `nums1[2]=8`, `nums2[2,3]=10,11`
- `nums1[i-1]=3 <= nums2[j]=10` ✔️
- `nums2[j-1]=9 > nums1[i]=8` ✖️
  - Aumentar `i`.

Tercer intento:

- `i = 3`, `j = 0`
- Izquierda: `nums1[0,1,2]=1,3,8`, `nums2[]`
- Derecha: `nums1[]`, `nums2[0,1,2,3]=7,9,10,11`
- `nums1[i-1]=8 <= nums2[j]=7` ✖️
- Pero como `j=0`, no hay elementos a la izquierda de `nums2`, así que sólo comprobamos `nums1[i-1] <= nums2[j]`.
- Aquí, `8 > 7`, así que reducir `i`.

Finalmente, cuando se encuentra la partición válida, se calcula la mediana según corresponda.

Este proceso garantiza encontrar la mediana en tiempo logarítmico respecto al tamaño del array más pequeño.

### Implementación Paso a Paso

<!-- TODO: Detallar la lógica de implementación -->

## Análisis de Complejidad

### Complejidad Temporal

<!-- TODO: Analizar Big O tiempo -->

### Complejidad Espacial

<!-- TODO: Analizar Big O espacio -->

## Casos Edge y Consideraciones

<!-- TODO: Documentar casos especiales manejados -->

## Reflexiones y Aprendizajes

### Conceptos Aplicados

<!-- TODO: ¿Qué patrones/técnicas se usaron? -->

### Posibles Optimizaciones

<!-- TODO: ¿Se puede mejorar? -->

## Recursos y Referencias

<!-- TODO: Links útiles, algoritmos relacionados, etc. -->

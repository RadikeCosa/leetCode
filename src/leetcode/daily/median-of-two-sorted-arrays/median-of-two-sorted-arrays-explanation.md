---
title: Median Of Two Sorted Arrays
source: leetcode
series: daily
category: december
createdAt: 2025-12-20
difficulty: hard
topics:
  - array
  - binary-search
  - divide-and-conquer
  - two-pointers
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

1. Garantizar que buscamos en el array más pequeño: si `nums1.length > nums2.length` intercambiar los arrays.
2. Hacer una búsqueda binaria sobre el índice de partición `i` en `nums1` entre `0` y `m`.
3. Calcular la partición correspondiente `j = (m + n + 1) // 2 - i` en `nums2` de forma que el lado izquierdo total tenga la mitad (o la mitad +1) de los elementos.
4. Obtener los cuatro valores borde necesarios (usar `-Infinity` / `Infinity` cuando la partición quede en un extremo):

- `nums1LeftMax = i === 0 ? -Infinity : nums1[i-1]`
- `nums1RightMin = i === m ? Infinity : nums1[i]`
- `nums2LeftMax = j === 0 ? -Infinity : nums2[j-1]`
- `nums2RightMin = j === n ? Infinity : nums2[j]`

5. Si `nums1LeftMax <= nums2RightMin && nums2LeftMax <= nums1RightMin` entonces la partición es válida:

- Si `(m + n)` es impar → la mediana es `max(nums1LeftMax, nums2LeftMax)`.
- Si es par → la mediana es `(max(nums1LeftMax, nums2LeftMax) + min(nums1RightMin, nums2RightMin)) / 2`.

6. Si `nums1LeftMax > nums2RightMin` mover `high = i - 1` (desplazar partición i a la izquierda).
7. Si `nums2LeftMax > nums1RightMin` mover `low = i + 1` (desplazar partición i a la derecha).
8. Repetir hasta encontrar la partición válida. El proceso termina en O(log m) pasos.

## Análisis de Complejidad

### Complejidad Temporal

La complejidad temporal es O(log(min(m, n))). Hacemos búsqueda binaria sobre el array más pequeño (`m = min(len(nums1), len(nums2))`). Cada iteración realiza operaciones O(1).

### Complejidad Espacial

La complejidad espacial es O(1) adicional: sólo usamos contadores y constantes temporales para los bordes de partición.

## Casos Edge y Consideraciones

- Si uno de los arrays está vacío, la mediana es la mediana del otro array (el algoritmo maneja esto con `-Infinity`/`Infinity` en los bordes).
- Valores repetidos están soportados sin cambios adicionales.
- Manejo cuidadoso de particiones en los extremos (i = 0, i = m, j = 0, j = n) usando `Infinity`/`-Infinity`.
- Se asume que los arrays están ordenados; si no lo están, el resultado es indefinido (el algoritmo puede lanzar excepción en caso de particiones inválidas).

## Reflexiones y Aprendizajes

### Conceptos Aplicados

- Búsqueda binaria aplicada a la partición de dos arrays ordenados (buscar la partición correcta en el array más corto).
- Uso de sentinelas (`Infinity`, `-Infinity`) para simplificar el manejo de bordes.
- Early exit: devolver la respuesta en cuanto se encuentra una partición válida.

### Posibles Optimizaciones

La solución ya cumple la restricción esperada O(log(min(m,n))). Para casos prácticos con arrays muy desbalanceados, otra alternativa es usar un enfoque de selección (k-th element) que también puede implementarse con particiones y mantener complejidad logarítmica en el menor de los tamaños.

## Recursos y Referencias

- Artículo/explicación clásico: "Median of Two Sorted Arrays" — soluciones que usan particiones y búsqueda binaria.
- LeetCode problem: https://leetcode.com/problems/median-of-two-sorted-arrays/

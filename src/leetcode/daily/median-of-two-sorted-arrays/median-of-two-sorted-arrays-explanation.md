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

# Median Of Two Sorted Arrays - Guía para Principiantes

## ¿Qué nos piden hacer?

Tenemos dos listas de números **ya ordenadas** y necesitamos encontrar **la mediana** como si fueran una sola lista ordenada.

**Ejemplo:**

```
nums1 = [1, 3]
nums2 = [2]

Si los juntamos: [1, 2, 3]
La mediana es: 2 (el del medio)
```

## ¿Qué es la mediana? (Repaso rápido)

La mediana es **el número del medio** cuando ordenas todos los valores:

- **Cantidad impar** de números → el del medio
  - `[1, 2, 3]` → mediana = 2
- **Cantidad par** de números → promedio de los dos del medio
  - `[1, 2, 3, 4]` → mediana = (2 + 3) / 2 = 2.5

## ¿Por qué es difícil este problema?

La solución "fácil" sería:

1. Juntar ambas listas
2. Ordenar todo
3. Sacar el elemento del medio

Pero esto sería **lento** (O(n+m)). El problema pide algo más rápido: **O(log(n+m))**.

## La Idea Clave: El "Corte Mágico"

En lugar de juntar todo, imaginamos un **"corte"** en cada lista que divide todos los números en dos mitades:

```
nums1: [1, 3, 8 | 9, 15]         (izquierda | derecha)
nums2: [7, 11 | 18, 19, 21]

Lado izquierdo: {1, 3, 8, 7, 11}  (5 números)
Lado derecho: {9, 15, 18, 19, 21} (5 números)
```

### ¿Qué hace que un corte sea "correcto"?

Un corte es correcto cuando cumple DOS condiciones:

1. **Ambos lados tienen la misma cantidad** de elementos (o casi, si el total es impar)
2. **Todos los de la izquierda son menores o iguales que todos los de la derecha**

Cuando encontramos el corte correcto, la mediana está justo ahí:

- Si hay cantidad **impar**: el mayor número de la izquierda
- Si hay cantidad **par**: promedio entre el mayor de la izquierda y el menor de la derecha

## Cómo Encontrar el Corte Correcto

Usamos **búsqueda binaria** (como cuando buscas una palabra en el diccionario):

### Paso 1: Elegir dónde cortar

Empezamos probando cortar en la mitad de una de las listas (la más corta, para ser eficientes).

### Paso 2: Calcular el otro corte

Una vez que decidimos dónde cortar la primera lista, el corte en la segunda lista se calcula automáticamente (para que ambos lados tengan la mitad de los elementos).

### Paso 3: Verificar si el corte funciona

Revisamos si los números "cruzan" correctamente:

- ¿El mayor de la izquierda de nums1 es ≤ que el menor de la derecha de nums2? ✓
- ¿El mayor de la izquierda de nums2 es ≤ que el menor de la derecha de nums1? ✓

### Paso 4: Ajustar si no funciona

Si el corte no es válido, lo movemos:

- Si el número de la izquierda de nums1 es muy grande → mover el corte a la izquierda
- Si el número de la derecha de nums1 es muy pequeño → mover el corte a la derecha

## Ejemplo Visual Completo

```
nums1 = [1, 3, 8, 9, 15]
nums2 = [7, 11, 18, 19, 21, 25]
Total: 11 elementos → necesitamos 5 en la izquierda, 6 en la derecha

Intento 1: Cortar nums1 en posición 2
nums1: [1, 3 | 8, 9, 15]          (2 en izq)
nums2: [7, 11, 18 | 19, 21, 25]   (3 en izq)
Total izquierda: 5 ✓

Verificar:
- max(izq nums1) = 3
- min(der nums2) = 19
- 3 ≤ 19 ✓
- max(izq nums2) = 18
- min(der nums1) = 8
- 18 > 8 ✗ → ¡No funciona!

Intento 2: Mover corte de nums1 a la derecha
nums1: [1, 3, 8, 9 | 15]          (4 en izq)
nums2: [7 | 11, 18, 19, 21, 25]   (1 en izq)
Total izquierda: 5 ✓

Verificar:
- max(izq nums1) = 9
- min(der nums2) = 11
- 9 ≤ 11 ✓
- max(izq nums2) = 7
- min(der nums1) = 15
- 7 ≤ 15 ✓

¡Funciona! ✓

Mediana = max(9, 7) = 9 (porque tenemos cantidad impar)
```

## Casos Especiales que Debes Considerar

1. **Un array vacío**: la mediana es del otro array

   ```
   nums1 = []
   nums2 = [1, 2, 3]
   mediana = 2
   ```

2. **Todos los elementos de nums1 son menores que todos los de nums2**:

   ```
   nums1 = [1, 2]
   nums2 = [10, 11]
   mediana = (2 + 10) / 2 = 6
   ```

3. **Arrays de un solo elemento**:
   ```
   nums1 = [1]
   nums2 = [2]
   mediana = (1 + 2) / 2 = 1.5
   ```

## Trucos del Código

### Uso de Infinitos

Cuando el corte está en el extremo (no hay elementos a un lado), usamos infinitos:

- `-Infinity` cuando no hay elementos a la izquierda
- `Infinity` cuando no hay elementos a la derecha

Esto simplifica las comparaciones sin necesidad de casos especiales.

### Siempre buscar en el array más pequeño

Intercambiamos los arrays si es necesario para que `nums1` sea el más corto. Esto hace que la búsqueda binaria sea más rápida.

## ¿Por Qué es O(log(min(m,n)))?

La búsqueda binaria divide el espacio de búsqueda a la mitad en cada paso. Como buscamos en el array más pequeño:

- Si el array pequeño tiene 8 elementos → máximo 3 iteraciones (log₂(8) = 3)
- Si tiene 16 elementos → máximo 4 iteraciones (log₂(16) = 4)

Es **mucho más rápido** que recorrer todos los elementos.

## Resumen en 3 Pasos

1. **Imagina un corte** que divide ambas listas en mitades iguales
2. **Usa búsqueda binaria** para encontrar el corte correcto (donde todos los de la izquierda ≤ todos los de la derecha)
3. **Calcula la mediana** usando los números en la "frontera" del corte

## Consejos para Practicar

- Dibuja los arrays y los cortes en papel mientras practicas
- Prueba con ejemplos pequeños primero (arrays de 2-3 elementos)
- Verifica manualmente que el corte divide correctamente en mitades
- Una vez que entiendas la lógica, el código es solo traducir esa lógica

---

**Complejidad:**

- Tiempo: O(log(min(m, n))) - búsqueda binaria en el array más pequeño
- Espacio: O(1) - solo usamos unas pocas variables

Este es uno de los problemas más difíciles de LeetCode, ¡así que no te desanimes si te toma tiempo entenderlo! La clave está en visualizar el concepto del "corte" y practicar con ejemplos.

# Median Of Two Sorted Arrays - Guía para Principiantes

## ¿Qué nos piden hacer?

Tenemos dos listas de números **ya ordenadas** y necesitamos encontrar **la mediana** como si fueran una sola lista ordenada.

**Ejemplo:**

```
nums1 = [1, 3]
nums2 = [2]

Si los juntamos: [1, 2, 3]
La mediana es: 2 (el del medio)
```

## ¿Qué es la mediana? (Repaso rápido)

La mediana es **el número del medio** cuando ordenas todos los valores:

- **Cantidad impar** de números → el del medio
  - `[1, 2, 3]` → mediana = 2
- **Cantidad par** de números → promedio de los dos del medio
  - `[1, 2, 3, 4]` → mediana = (2 + 3) / 2 = 2.5

## ¿Por qué es difícil este problema?

La solución "fácil" sería:

1. Juntar ambas listas
2. Ordenar todo
3. Sacar el elemento del medio

Pero esto sería **lento** (O(n+m)). El problema pide algo más rápido: **O(log(n+m))**.

## La Idea Clave: El "Corte Mágico"

En lugar de juntar todo, imaginamos un **"corte"** en cada lista que divide todos los números en dos mitades:

```
nums1: [1, 3, 8 | 9, 15]         (izquierda | derecha)
nums2: [7, 11 | 18, 19, 21]

Lado izquierdo: {1, 3, 8, 7, 11}  (5 números)
Lado derecho: {9, 15, 18, 19, 21} (5 números)
```

### ¿Qué hace que un corte sea "correcto"?

Un corte es correcto cuando cumple DOS condiciones:

1. **Ambos lados tienen la misma cantidad** de elementos (o casi, si el total es impar)
2. **Todos los de la izquierda son menores o iguales que todos los de la derecha**

Cuando encontramos el corte correcto, la mediana está justo ahí:

- Si hay cantidad **impar**: el mayor número de la izquierda
- Si hay cantidad **par**: promedio entre el mayor de la izquierda y el menor de la derecha

## Cómo Encontrar el Corte Correcto

Usamos **búsqueda binaria** (como cuando buscas una palabra en el diccionario):

### Paso 1: Elegir dónde cortar

Empezamos probando cortar en la mitad de una de las listas (la más corta, para ser eficientes).

### Paso 2: Calcular el otro corte

Una vez que decidimos dónde cortar la primera lista, el corte en la segunda lista se calcula automáticamente (para que ambos lados tengan la mitad de los elementos).

### Paso 3: Verificar si el corte funciona

Revisamos si los números "cruzan" correctamente:

- ¿El mayor de la izquierda de nums1 es ≤ que el menor de la derecha de nums2? ✓
- ¿El mayor de la izquierda de nums2 es ≤ que el menor de la derecha de nums1? ✓

### Paso 4: Ajustar si no funciona

Si el corte no es válido, lo movemos:

- Si el número de la izquierda de nums1 es muy grande → mover el corte a la izquierda
- Si el número de la derecha de nums1 es muy pequeño → mover el corte a la derecha

## Ejemplo Visual Completo

```
nums1 = [1, 3, 8, 9, 15]
nums2 = [7, 11, 18, 19, 21, 25]
Total: 11 elementos → necesitamos 5 en la izquierda, 6 en la derecha

Intento 1: Cortar nums1 en posición 2
nums1: [1, 3 | 8, 9, 15]          (2 en izq)
nums2: [7, 11, 18 | 19, 21, 25]   (3 en izq)
Total izquierda: 5 ✓

Verificar:
- max(izq nums1) = 3
- min(der nums2) = 19
- 3 ≤ 19 ✓
- max(izq nums2) = 18
- min(der nums1) = 8
- 18 > 8 ✗ → ¡No funciona!

Intento 2: Mover corte de nums1 a la derecha
nums1: [1, 3, 8, 9 | 15]          (4 en izq)
nums2: [7 | 11, 18, 19, 21, 25]   (1 en izq)
Total izquierda: 5 ✓

Verificar:
- max(izq nums1) = 9
- min(der nums2) = 11
- 9 ≤ 11 ✓
- max(izq nums2) = 7
- min(der nums1) = 15
- 7 ≤ 15 ✓

¡Funciona! ✓

Mediana = max(9, 7) = 9 (porque tenemos cantidad impar)
```

## Casos Especiales que Debes Considerar

1. **Un array vacío**: la mediana es del otro array

   ```
   nums1 = []
   nums2 = [1, 2, 3]
   mediana = 2
   ```

2. **Todos los elementos de nums1 son menores que todos los de nums2**:

   ```
   nums1 = [1, 2]
   nums2 = [10, 11]
   mediana = (2 + 10) / 2 = 6
   ```

3. **Arrays de un solo elemento**:
   ```
   nums1 = [1]
   nums2 = [2]
   mediana = (1 + 2) / 2 = 1.5
   ```

## Trucos del Código

### Uso de Infinitos

Cuando el corte está en el extremo (no hay elementos a un lado), usamos infinitos:

- `-Infinity` cuando no hay elementos a la izquierda
- `Infinity` cuando no hay elementos a la derecha

Esto simplifica las comparaciones sin necesidad de casos especiales.

### Siempre buscar en el array más pequeño

Intercambiamos los arrays si es necesario para que `nums1` sea el más corto. Esto hace que la búsqueda binaria sea más rápida.

## ¿Por Qué es O(log(min(m,n)))?

La búsqueda binaria divide el espacio de búsqueda a la mitad en cada paso. Como buscamos en el array más pequeño:

- Si el array pequeño tiene 8 elementos → máximo 3 iteraciones (log₂(8) = 3)
- Si tiene 16 elementos → máximo 4 iteraciones (log₂(16) = 4)

Es **mucho más rápido** que recorrer todos los elementos.

## Resumen en 3 Pasos

1. **Imagina un corte** que divide ambas listas en mitades iguales
2. **Usa búsqueda binaria** para encontrar el corte correcto (donde todos los de la izquierda ≤ todos los de la derecha)
3. **Calcula la mediana** usando los números en la "frontera" del corte

## Consejos para Practicar

- Dibuja los arrays y los cortes en papel mientras practicas
- Prueba con ejemplos pequeños primero (arrays de 2-3 elementos)
- Verifica manualmente que el corte divide correctamente en mitades
- Una vez que entiendas la lógica, el código es solo traducir esa lógica

---

**Complejidad:**

- Tiempo: O(log(min(m, n))) - búsqueda binaria en el array más pequeño
- Espacio: O(1) - solo usamos unas pocas variables

Este es uno de los problemas más difíciles de LeetCode, ¡así que no te desanimes si te toma tiempo entenderlo! La clave está en visualizar el concepto del "corte" y practicar con ejemplos.

```javascript
/**
 * LeetCode Problem: Median Of Two Sorted Arrays
 * Difficulty:
 * Topics:
 *
 * @param {number[]} nums1 - First sorted array
 * @param {number[]} nums2 - Second sorted array
 * @returns {number} The median of the two sorted arrays
 */
export function findMedianSortedArrays(
  nums1: number[],
  nums2: number[]
): number {
  // Ensure nums1 is the smaller array to keep binary search on the smaller side
  if (nums1.length > nums2.length) {
    return findMedianSortedArrays(nums2, nums1);
  }

  const m = nums1.length;
  const n = nums2.length;

  let low = 0;
  let high = m;

  while (low <= high) {
    const i = Math.floor((low + high) / 2); // partition in nums1
    const j = Math.floor((m + n + 1) / 2) - i; // partition in nums2

    const nums1LeftMax = i === 0 ? -Infinity : nums1[i - 1];
    const nums1RightMin = i === m ? Infinity : nums1[i];

    const nums2LeftMax = j === 0 ? -Infinity : nums2[j - 1];
    const nums2RightMin = j === n ? Infinity : nums2[j];

    if (nums1LeftMax <= nums2RightMin && nums2LeftMax <= nums1RightMin) {
      // Correct partition
      if ((m + n) % 2 === 1) {
        return Math.max(nums1LeftMax, nums2LeftMax);
      }
      return (
        (Math.max(nums1LeftMax, nums2LeftMax) +
          Math.min(nums1RightMin, nums2RightMin)) /
        2
      );
    } else if (nums1LeftMax > nums2RightMin) {
      // Move partition i to the left
      high = i - 1;
    } else {
      // nums2LeftMax > nums1RightMin -> move partition i to the right
      low = i + 1;
    }
  }

  // Should never reach here if inputs are valid sorted arrays
  throw new Error("Input arrays are not sorted or invalid");
}
/**
 * LeetCode Problem: Median Of Two Sorted Arrays
 * Difficulty: Hard
 * Topics: Array, Binary Search, Divide and Conquer
 *
 * Encuentra la mediana de dos arrays ordenados en O(log(min(m,n)))
 *
 * @param {number[]} nums1 - Primer array ordenado
 * @param {number[]} nums2 - Segundo array ordenado
 * @returns {number} La mediana de ambos arrays combinados
 */
export function findMedianSortedArrays(
  nums1: number[],
  nums2: number[]
): number {
  // ========================================
  // PASO 1: Asegurar que nums1 sea el más pequeño
  // ========================================
  // Siempre hacemos búsqueda binaria en el array más pequeño
  // para que sea más eficiente O(log(min(m,n)))
  if (nums1.length > nums2.length) {
    return findMedianSortedArrays(nums2, nums1);
  }

  const m = nums1.length; // tamaño del array pequeño
  const n = nums2.length; // tamaño del array grande

  // ========================================
  // PASO 2: Configurar búsqueda binaria
  // ========================================
  // Vamos a buscar la posición correcta del "corte" en nums1
  // low y high representan el rango de posibles cortes
  let low = 0; // mínimo: 0 elementos de nums1 a la izquierda
  let high = m; // máximo: todos los elementos de nums1 a la izquierda

  while (low <= high) {
    // ========================================
    // PASO 3: Calcular las posiciones del corte
    // ========================================
    // i = cuántos elementos de nums1 van a la izquierda
    const i = Math.floor((low + high) / 2);

    // j = cuántos elementos de nums2 van a la izquierda
    // Se calcula para que el total de elementos a la izquierda sea la mitad
    const j = Math.floor((m + n + 1) / 2) - i;

    // ========================================
    // PASO 4: Obtener los valores en los bordes del corte
    // ========================================
    // Para nums1:
    // - nums1LeftMax: el último elemento que va a la izquierda
    // - nums1RightMin: el primer elemento que va a la derecha
    const nums1LeftMax = i === 0 ? -Infinity : nums1[i - 1];
    const nums1RightMin = i === m ? Infinity : nums1[i];

    // Para nums2:
    // - nums2LeftMax: el último elemento que va a la izquierda
    // - nums2RightMin: el primer elemento que va a la derecha
    const nums2LeftMax = j === 0 ? -Infinity : nums2[j - 1];
    const nums2RightMin = j === n ? Infinity : nums2[j];

    // ========================================
    // PASO 5: Verificar si encontramos el corte correcto
    // ========================================
    // El corte es correcto si:
    // - Todo lo de la izquierda de nums1 ≤ todo lo de la derecha de nums2
    // - Todo lo de la izquierda de nums2 ≤ todo lo de la derecha de nums1
    if (nums1LeftMax <= nums2RightMin && nums2LeftMax <= nums1RightMin) {
      // ¡ENCONTRAMOS EL CORTE CORRECTO! 🎉

      // Si la cantidad total es IMPAR:
      // La mediana es el mayor de la izquierda
      if ((m + n) % 2 === 1) {
        return Math.max(nums1LeftMax, nums2LeftMax);
      }

      // Si la cantidad total es PAR:
      // La mediana es el promedio entre:
      // - el mayor de la izquierda
      // - el menor de la derecha
      return (
        (Math.max(nums1LeftMax, nums2LeftMax) +
          Math.min(nums1RightMin, nums2RightMin)) /
        2
      );
    }

    // ========================================
    // PASO 6: Ajustar el corte si no es correcto
    // ========================================
    else if (nums1LeftMax > nums2RightMin) {
      // Problema: el último elemento de la izquierda de nums1 es mayor
      // que el primer elemento de la derecha de nums2
      // Solución: mover el corte de nums1 hacia la IZQUIERDA
      // (tomar menos elementos de nums1)
      high = i - 1;
    } else {
      // Problema: nums2LeftMax > nums1RightMin
      // El último elemento de la izquierda de nums2 es mayor
      // que el primer elemento de la derecha de nums1
      // Solución: mover el corte de nums1 hacia la DERECHA
      // (tomar más elementos de nums1)
      low = i + 1;
    }
  }

  // Este punto nunca debería alcanzarse si los arrays son válidos
  throw new Error("Input arrays are not sorted or invalid");
}
```

💡 La Idea Central: El Juego de los Cortes
Imagina que tienes dos filas de libros ordenados por tamaño. Quieres encontrar el libro que quedaría justo en el medio si juntaras ambas filas en una sola, pero sin mover los libros de su lugar.

Para lograrlo, vamos a poner un "muro" imaginario en cada fila.

1. El Objetivo del Muro
   Queremos colocar los muros de tal forma que:

Haya la misma cantidad de libros a la izquierda de los muros que a la derecha.
Lo más importante: Todos los libros a la izquierda de los muros deben ser más pequeños que todos los libros a la derecha. 2. ¿Cómo sabemos si el muro está bien puesto?
Solo tenemos que mirar los libros que tocan el muro:

El libro más grande a la izquierda en la Fila 1 debe ser menor o igual al más pequeño a la derecha en la Fila 2.
El libro más grande a la izquierda en la Fila 2 debe ser menor o igual al más pequeño a la derecha en la Fila 1.
Si esto se cumple, ¡hemos dividido el universo a la mitad perfectamente!

3. ¿Por qué usamos Búsqueda Binaria?
   En lugar de probar posición por posición (lo cual sería lento), usamos Búsqueda Binaria en la fila más corta.

Si el libro de la izquierda es muy grande, movemos el muro hacia la izquierda.
Si es muy pequeño, lo movemos hacia la derecha.
Esto es lo que hace que el algoritmo sea increíblemente rápido (
O
(
log
⁡
(
min
⁡
(
m
,
n
)
)
)
O(log(min(m,n)))).
🛠️ Paso a Paso de la Solución
Elegir el camino corto: Siempre trabajamos sobre el array más pequeño. Es más rápido encontrar el lugar del muro en una fila de 5 libros que en una de 100.
Partición Equilibrada: Calculamos dónde cae el muro en el segundo array basándonos en dónde pusimos el primero, para que siempre haya "mitad y mitad".
Manejo de Extremos: ¿Qué pasa si el muro queda al puro principio o al puro final? Usamos "infinitos" (-Infinity y Infinity) para que las comparaciones sigan funcionando sin errores.
Calcular la Mediana:
Si el total de libros es impar: La mediana es simplemente el más grande de los que quedaron a la izquierda.
Si el total es par: La mediana es el promedio entre el más grande de la izquierda y el más pequeño de la derecha.

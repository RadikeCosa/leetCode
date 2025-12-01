---
title: "merge-sorted-array"
difficulty: "easy"
topics:
  - Array
  - Two Pointers
  - Sorting
source: "leetcode"
series: "top-interview"
category: "top-interview-array-string"
createdAt: "2025-12-01"
---

# Merge Sorted Array - Análisis y Explicación

## Descripción del Problema

**LeetCode 88: Merge Sorted Array**

- **Dificultad**: Easy
- **Temas**: Array, Two Pointers, Sorting

### Enunciado

Se nos dan dos arrays de enteros `nums1` y `nums2`, ordenados en orden no decreciente, y dos enteros `m` y `n`, que representan el número de elementos en `nums1` y `nums2` respectivamente.

Debemos fusionar `nums1` y `nums2` en un solo array ordenado en orden no decreciente. El array final ordenado no debe ser devuelto por la función, sino que debe almacenarse dentro del array `nums1`.

### Restricciones

- `nums1.length == m + n`
- `nums2.length == n`
- `0 <= m, n <= 200`
- `1 <= m + n <= 200`
- `-10^9 <= nums1[i], nums2[j] <= 10^9`

### Ejemplos

**Ejemplo 1:**

```
Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
```

**Ejemplo 2:**

```
Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
```

**Ejemplo 3:**

```
Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]
```

## Análisis del Problema

### Observaciones Clave

1. **Estructura especial de nums1**: El array `nums1` tiene longitud `m + n`, donde los primeros `m` elementos son válidos y los últimos `n` elementos son ceros que deben ser ignorados.
2. **Modificación in-place**: Debemos modificar `nums1` directamente, no crear un nuevo array.
3. **Arrays ya ordenados**: Ambos arrays de entrada están ordenados, lo cual es una ventaja.

### Casos Edge

- `m = 0`: `nums1` está efectivamente vacío, solo copiamos `nums2`
- `n = 0`: `nums2` está vacío, `nums1` ya está completo
- Elementos duplicados entre arrays
- Elementos negativos

## El Patrón Two Pointers

### ¿Qué es Two Pointers?

**Two Pointers** es un patrón algorítmico que utiliza dos (o más) punteros que se mueven a través de una estructura de datos para resolver problemas de manera eficiente. Es especialmente útil para:

- Arrays ordenados
- Problemas de búsqueda de pares
- Merge de estructuras ordenadas
- Optimización de soluciones O(n²) a O(n)

### Tipos de Two Pointers

1. **Punteros que se acercan** (desde extremos hacia el centro)
2. **Punteros que se alejan** (sliding window)
3. **Punteros de velocidades diferentes** (slow/fast)
4. **Punteros en diferentes arrays** (como en este problema)

## Enfoques Posibles

### Enfoque 1: Merge desde el inicio (❌ requiere espacio extra)

```typescript
// Problema: sobrescribiríamos elementos de nums1
let i = 0,
  j = 0,
  k = 0;
let temp = [];
while (i < m && j < n) {
  if (nums1[i] <= nums2[j]) {
    temp[k++] = nums1[i++];
  } else {
    temp[k++] = nums2[j++];
  }
}
// Copiar de vuelta a nums1...
```

**Problemas**:

- Requiere O(m + n) espacio extra
- Dos pasadas: merge + copy back

### Enfoque 2: Merge desde el final (✅ optimal)

```typescript
// ¡Brillante! Usamos el espacio extra al final de nums1
let lastUsefulIndexOfNums1 = m - 1; // Último elemento válido de nums1
let lastIndexOfNums2 = n - 1; // Último elemento de nums2
let targetIndex = m + n - 1; // Dónde escribimos el resultado
```

**Ventajas**:

- Sin espacio extra - O(1)
- Una sola pasada - O(m + n)
- Sin riesgo de sobrescribir datos importantes

## Aplicación del Two Pointers en este Problema

### Configuración de Punteros

1. **`lastUsefulIndexOfNums1`**: Apunta al último elemento válido de nums1 (posición m-1)
2. **`lastIndexOfNums2`**: Apunta al último elemento de nums2 (posición n-1)
3. **`targetIndex`**: Apunta a donde escribimos el resultado (posición m+n-1)

### Estrategia del Algoritmo

```
nums1: [1, 2, 3, 0, 0, 0]  m=3
                ↑        ↑
          lastUseful  targetIndex
nums2: [2, 5, 6]           n=3
             ↑
        lastIndex
```

**Paso a paso**:

1. Comparamos nums1[lastUseful] vs nums2[lastIndex]
2. El mayor va a nums1[targetIndex]
3. Movemos los punteros correspondientes
4. Repetimos hasta procesar todos los elementos de nums2

### ¿Por qué funciona?

- **Orden preservado**: Siempre tomamos el elemento mayor disponible
- **Sin colisiones**: Escribimos de derecha a izquierda, leyendo de derecha a izquierda
- **Casos edge cubiertos**:
  - Si nums2 se agota primero: nums1 ya está en su lugar
  - Si nums1 se agota primero: copiamos resto de nums2

## Complejidad

- **Tiempo**: O(m + n) - visitamos cada elemento exactamente una vez
- **Espacio**: O(1) - solo usamos variables adicionales, modificación in-place

## Implementación

```typescript
export function merge(
  nums1: number[],
  m: number,
  nums2: number[],
  n: number
): void {
  let lastUsefulIndexOfNums1 = m - 1;
  let lastIndexOfNums2 = n - 1;
  let targetIndex = m + n - 1;

  while (lastIndexOfNums2 >= 0) {
    if (
      lastUsefulIndexOfNums1 >= 0 &&
      nums1[lastUsefulIndexOfNums1] > nums2[lastIndexOfNums2]
    ) {
      nums1[targetIndex] = nums1[lastUsefulIndexOfNums1];
      lastUsefulIndexOfNums1--;
    } else {
      nums1[targetIndex] = nums2[lastIndexOfNums2];
      lastIndexOfNums2--;
    }
    targetIndex--;
  }
}
```

## Patrones de Diseño Utilizados

1. **Two Pointers Pattern**: Múltiples punteros moviéndose estratégicamente
2. **In-place Modification**: Optimización de espacio
3. **Merge Algorithm**: Algoritmo fundamental de merge sort
4. **Greedy Approach**: Decisión local óptima (siempre tomar el mayor)

## Lecciones Aprendidas

1. **Dirección importa**: Mergear desde el final evita sobrescribir datos
2. **Aprovecha las restricciones**: El espacio extra en nums1 es clave
3. **Two Pointers es versátil**: No solo para arrays simples, sino para merge operations
4. **Nombres descriptivos**: Variables claras hacen el algoritmo auto-explicativo
5. **Casos edge**: Siempre considerar arrays vacíos o desbalanceados
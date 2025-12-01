---
title: "maximun-subarray-sum-with-length-divisible-by-k"
difficulty: "medium"
topics:
  - Array
  - Subarray
  - Kadane
  - Prefix Sum
  - Math
source: "leetcode"
series: "daily"
category: "daily"
createdAt: "2025-12-01"
---

# Maximum Subarray Sum With Length Divisible By K

Link: https://leetcode.com/problems/maximum-subarray-sum-with-length-divisible-by-k/

## PRERREQUISITOS

### 1. ¿Qué es un subarray contiguo?

Es un pedacito seguido del array.  
Ej: En `[2, -1, 4, 3]` los subarrays son:  
`[2]`, `[2,-1]`, `[2,-1,4]`, `[-1,4,3]`, `[4]`, etc.  
No vale saltarse elementos.

### 2. Kadane → "la suma máxima de cualquier subarray"

Idea mágica:  
Mientras recorres el array, en cada paso decidís:  
"¿arranco de nuevo aquí o sigo sumando lo anterior?"

```js
let actual = 0;
let mejor = -Infinity;

for (num of nums) {
  actual = Math.max(num, actual + num); // ¿sigo o reinicio?
  mejor = Math.max(mejor, actual);
}
```

Este algoritmo te da la suma máxima sin ninguna restricción.  
Acá SÍ tenemos restricción → no sirve directamente.

### 3. Prefix Sum → "suma acumulada"

Es simplemente ir sumando mientras avanzás:

| índice | valor | prefix |
|

| ----- | ------ |
| 0      |       | 0      |
| 1      | 5     | 5      |
| 2      | -2    | 3      |
| 3      | 7     | 10     |

Con prefix, la suma de cualquier subarray i→j es: `prefix[j] - prefix[i]`

### 4. El truco matemático que lo cambia todo

Queremos longitud múltiplo de k → (j - i) % k == 0  
Esto es lo mismo que decir: **j % k == i % k**  
→ Los dos índices tienen el mismo resto al dividir por k.

Ej: k = 3  
índices con resto 0: 0, 3, 6, 9…  
índices con resto 1: 1, 4, 7…  
índices con resto 2: 2, 5, 8…

Si resto(j) == resto(i) → la longitud entre ellos es múltiplo de 3.

## El problema – Ahora sí, fácil

Queremos la máxima suma de subarray cuya longitud sea múltiplo de k.  
Gracias al truco anterior, eso equivale a:

→ Encontrar dos índices i < j tal que:

- j % k == i % k
- prefix[j] - prefix[i] sea lo más grande posible

Para que la resta sea grande → prefix[i] tiene que ser lo más chico posible.

## La estrategia ganadora

Vamos a pasear por el array de izquierda a derecha.

En cada posición j:

1. Calculo mi prefix actual.
2. Miro el resto de (j+1) % k (porque llevamos j+1 elementos hasta acá).
3. Pregunto: "¿Ya pasé antes por un lugar con este mismo resto?"
   - Si sí → ¡puedo hacer un subarray válido!  
     Resto prefix[j] - el prefix más chico que vi con este resto.
   - Guardo esa suma como candidata a la mejor.
4. Después, actualizo: "si mi prefix actual es más chico que el que tenía guardado para este resto → lo reemplazo".

## Código final

```js
var maxSubarraySumDivByK = function (nums, k) {
  let prefix = 0;
  let max = -Infinity;

  // resto → menor prefix visto con ese resto
  const minPrefix = new Map();
  minPrefix.set(0, 0); // posición 0, prefix 0

  for (let i = 0; i < nums.length; i++) {
    prefix += nums[i];

    const rem = (i + 1) % k; // longitud hasta acá

    if (minPrefix.has(rem)) {
      const candidate = prefix - minPrefix.get(rem);
      max = Math.max(max, candidate);
    }

    // actualizamos solo si es más chico (o primera vez)
    if (!minPrefix.has(rem) || prefix < minPrefix.get(rem)) {
      minPrefix.set(rem, prefix);
    }
  }

  return max === -Infinity ? 0 : max; // por si no hay (raro)
};
```

## Complejidad

- Tiempo: O(n) → un solo paseo
- Espacio: O(k) → máximo 100 normalmente

## Tabla de ejemplo

nums = [1, -2, 3, 4, -1], k = 3

| i   | valor | prefix | i+1 | (i+1)%3 | acción                   | mejor |
| --- | ----- | ------ | --- | ------- | ------------------------ | ----- |
| 0   | 1     | 1      | 1   | 1       | guardo rem1→1            | -     |
| 1   | -2    | -1     | 2   | 2       | guardo rem2→-1           | -     |
| 2   | 3     | 2      | 3   | 0       | uso rem0→0 → 2-0 = 2     | 2     |
| 3   | 4     | 6      | 4   | 1       | uso rem1→1 → 6-1 = 5     | 5     |
| 4   | -1    | 5      | 5   | 2       | uso rem2→-1 → 5-(-1) = 6 | 6     |

Respuesta: 6 → subarray [3,4,-1] (longitud 3)

## Resumen para mi yo del futuro

- Longitud múltiplo de k → mismo resto de índice
- Guardar el prefix más chico por cada resto
- Restar → mayor diferencia posible
- Actualizar después de usar (importante!)
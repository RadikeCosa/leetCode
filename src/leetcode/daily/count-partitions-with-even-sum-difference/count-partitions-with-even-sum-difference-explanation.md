---
title: Count Partitions With Even Sum Difference
source: leetcode
series: daily
category: daily-challenge
createdAt: 2025-12-05
difficulty: easy
topics:
  - Array
  - Math
  - Prefix Sum
blogLink: https://blog-astro-rouge.vercel.app/posts/count-partitions-with-even-sum-difference/
problemLink: https://leetcode.com/problems/count-partitions-with-even-sum-difference/
---

## Count Partitions With Even Sum Difference - Análisis y Explicación

## Enunciado del Problema

Se te da un arreglo de enteros `nums` de longitud `n`.

Una partición se define como un índice `i` donde `0 <= i < n - 1`, dividiendo el arreglo en dos subarreglos no vacíos de la siguiente manera:

- El subarreglo izquierdo contiene los índices `[0, i]`.
- El subarreglo derecho contiene los índices `[i + 1, n - 1]`.

Devuelve el número de particiones donde la diferencia entre la suma de los elementos del subarreglo izquierdo y derecho es par.

### Ejemplo 1

Input: nums = [10,10,3,7,6]
Output: 4
Explicación:
Las 4 particiones son:

- [10], [10, 3, 7, 6] con diferencia de suma 10 - 26 = -16, que es par.
- [10, 10], [3, 7, 6] con diferencia de suma 20 - 16 = 4, que es par.
- [10, 10, 3], [7, 6] con diferencia de suma 23 - 13 = 10, que es par.
- [10, 10, 3, 7], [6] con diferencia de suma 30 - 6 = 24, que es par.

### Ejemplo 2

Input: nums = [1,2,2]
Output: 0
Explicación:
Ninguna partición resulta en una diferencia de suma par.

### Ejemplo 3

Input: nums = [2,4,6,8]
Output: 3
Explicación:
Todas las particiones resultan en una diferencia de suma par.

### Restricciones

- 2 <= n == nums.length <= 100
- 1 <= nums[i] <= 100

## Análisis Inicial

### Comprensión del Problema

Tenemos que contar cuantas particiones posibles de un arreglo resultan en una diferencia par entre la suma de los elementos del subarreglo izquierdo y derecho. Si conocemos la suma total del arreglo y la suma del subarreglo izquierdo delimitado por el `i`-èsimo ìndice, podemos deducir si se cumple la condicion de diferencia par.

### Casos de Prueba Identificados

Para validar la solución, se consideran los siguientes casos de prueba:

- Casos donde todas las particiones cumplen la condición de diferencia par (por ejemplo, un arreglo de solo números pares).
- Casos donde ninguna partición cumple la condición (por ejemplo, cuando la suma total es impar y todos los elementos son impares).
- Casos mixtos, donde solo algunas particiones cumplen la condición.
- Casos mínimos, como arreglos de longitud 2.
- Casos con valores repetidos y con valores máximos permitidos por las restricciones.
  Estos casos permiten asegurar que la solución funciona correctamente en diferentes escenarios y bordes del problema.

## Desarrollo de la Solución

### Enfoque Elegido

Para resolver el problema me parece adecuado comenzar calculando la suma total del array, luego recorrer cada elemento del mismo acumulando la suma parcial de los elementos que vamos recorriendo, en otras palabras la suma del subarray izquierdo. En cada "vuelta" del ciclo calculamos la diferencia de la suma parcial con la suma total menos la suma parcial (que seria la suma del subarray derecho) y verificamos si esta diferencia es par. Si lo es, incrementamos un contador que al final devolveremos como resultado.

### Implementación Paso a Paso

Paso a paso:

1. Calcular la suma total del arreglo `nums`.
2. Inicializar una variable `leftSum` para llevar la suma del subarreglo izquierdo.
3. Inicializar un contador `count` para contar las particiones con diferencia par.
4. Recorrer el arreglo `nums` hasta el penúltimo elemento (índice `n-2`):

- Actualizar `leftSum` sumando el elemento actual.
- Calcular la suma del subarreglo derecho como `rightSum = totalSum - leftSum`.
- Calcular la diferencia `diff = leftSum - rightSum`.
- Verificar si `diff` es par. Si lo es, incrementar `count`.
- Devolver `count` al final del recorrido.

Para verificar si un numero es par podemos usar el operador modulo `%`, si `diff % 2 == 0` entonces es par. Pero hay otros modos mas eficientes de verificar si un numero es par o no, como por ejemplo usando el operador & 1, que verifica el valor del ultimo bit del numero en su representacion binaria, los numeros pares tienen el ultimo bit en 0 por lo que `leftSum - rightSum) & 1` es 0 en los casos pares.

```typescript
export function countPartitions(nums: number[]): number {
  const totalSum = nums.reduce((acc, num) => acc + num, 0);
  let leftSum = 0;
  let count = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    leftSum += nums[i];
    const rightSum = totalSum - leftSum;
    if (((leftSum - rightSum) & 1) === 0) {
      count++;
    }
  }
  return count;
}
```

## Análisis de Complejidad

### Complejidad Temporal

El algoritmo recorre el arreglo una sola vez para calcular la suma total (`O(n)`) y luego otra vez para evaluar cada partición posible (`O(n)`). Por lo tanto, la complejidad temporal total es **O(n)**, donde _n_ es la longitud del arreglo.

### Complejidad Espacial

El algoritmo utiliza solo variables auxiliares (`totalSum`, `leftSum`, `count`), sin estructuras adicionales dependientes del tamaño del arreglo. Por lo tanto, la complejidad espacial es **O(1)**.

## Casos Edge y Consideraciones

El código y los casos de prueba consideran explícitamente los siguientes escenarios especiales:

- Arreglos de longitud mínima (2 elementos), donde solo hay una partición posible.
- Arreglos donde todos los elementos son iguales, tanto pares como impares.
- Arreglos con valores máximos permitidos por las restricciones, para verificar eficiencia y evitar desbordamientos.
- Arreglos donde la suma total es impar, para comprobar que la lógica de paridad funciona correctamente.
- Casos donde la diferencia puede ser negativa, asegurando que la verificación de paridad sigue siendo válida.
- Combinaciones de números pares e impares, y valores repetidos.

Estos casos edge fueron tenidos en cuenta al elaborar los tests, asegurando que la solución sea robusta y cubra todos los escenarios relevantes.

## Reflexiones y Aprendizajes

En este problema pusimos en practica el uso de sumas acumuladas y la verificacion de paridad a traves de un operador bit a bit como `& 1`.

### Conceptos Aplicados

- Suma acumulada (prefix sum) para calcular eficientemente las sumas de subarreglos.
- Verificación de paridad usando operadores bit a bit.
- Recorrido lineal para mantener la eficiencia temporal.
- Análisis de casos edge para asegurar la validez en todos los escenarios posibles.

## Recursos y Referencias

- [Documentación de operadores bit a bit en JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators)
- [Wikipedia sobre Suma Acumulada](https://en.wikipedia.org/wiki/Prefix_sum)
- [LeetCode - Count Partitions With Even Sum Difference](https://leetcode.com/problems/count-partitions-with-even-sum-difference/)

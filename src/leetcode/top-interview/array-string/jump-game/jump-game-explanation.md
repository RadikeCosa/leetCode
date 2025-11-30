---
name: jump-game
difficulty: medium
category: top-interview-array-string
topics: [Array, Greedy, Reachability]
source: leetcode
series: top-interview
createdAt: 2025-11-29
---

# Jump Game - Análisis y Explicación

## Enunciado del Problema

Te es dado un array de enteros _nums_. Inicialmente, estás posicionado en el primer índice del array, y cada elemento en el array representa tu máxima longitud de salto en esa posición.
Devuelve _true_ si puedes alcanzar el último índice, o _false_ en caso contrario.

## Análisis Inicial

### Comprensión del Problema

En este problema, necesitamos determinar si es posible llegar al final de un array dado que cada posición del array indica la máxima distancia que podemos saltar desde esa posición.

### Ejemplos

Example 1:

Input: nums = [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
Example 2:

Input: nums = [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.

### Restricciones

1 <= nums.length <= 10^4
0 <= nums[i] <= 10^5

### Casos de Prueba Identificados

1. Caso base con un solo elemento: [0] → true
2. Caso donde es posible llegar al final: [2,3,1,1,4] → true
3. Caso donde no es posible llegar al final: [3,2,1,0,4] → false
4. Caso con todos los elementos siendo 0 excepto el primero: [1,0,0,0] → false
5. Caso con grandes números: [10000, 0, 0, ..., 0] → true
6. Caso con números decrecientes: [5,4,3,2,1,0] → true
7. Caso con números aleatorios: [2,0,2,0,1] → true
8. Caso con números alternados: [1,2,0,1,0,1] → true
9. Caso con números grandes y ceros intercalados: [10,0,0,0,0,0,0,0,0,1] → true
10. Caso con todos los elementos siendo 1: [1,1,1,1,1] → true

## Desarrollo de la Solución

### Enfoque Elegido

Para resolver este problema, utilizaremos un enfoque greedy (codicioso). La idea es mantener un registro del índice más lejano que podemos alcanzar mientras iteramos a través del array. Si en algún punto el índice actual es mayor que el índice más lejano alcanzable, significa que no podemos avanzar más y retornamos false. Si logramos iterar hasta el final del array, retornamos true.

### Implementación Paso a Paso

1. Inicializamos una variable `maxReach` para rastrear el índice más lejano que podemos alcanzar, comenzando en 0.
2. Iteramos a través del array con un bucle for.
3. En cada iteración, verificamos si el índice actual `i` es mayor que `maxReach`. Si es así, retornamos false.
4. Actualizamos `maxReach` con el máximo entre su valor actual y `i + nums[i]`.
5. Si `maxReach` alcanza o supera el último índice del array, retornamos true.
6. Si el bucle termina sin retornar, retornamos false.

```typescript
function canJump(nums: number[]): boolean {
  let maxReach = 0;
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    if (i > maxReach) {
      return false;
    }
    maxReach = Math.max(maxReach, i + nums[i]);
    if (maxReach >= n - 1) {
      return true;
    }
  }

  return false;
}
```

## Análisis de Complejidad

### Complejidad Temporal

La complejidad temporal de esta solución es O(n), donde n es la longitud del array `nums`. Esto se debe a que el algoritmo itera a través del array una sola vez.

### Complejidad Espacial

La complejidad espacial de esta solución es O(1), ya que solo utilizamos un número constante de variables adicionales independientemente del tamaño del input.

## Reflexiones y Aprendizajes

### Conceptos Aplicados

Hemos aplicado el enfoque greedy para resolver el problema de manera eficiente, manteniendo un seguimiento del índice más lejano alcanzable en cada paso.

### Posibles Optimizaciones

Dado que la solución ya es O(n) en tiempo y O(1) en espacio, no hay optimizaciones significativas adicionales que se puedan realizar para mejorar la eficiencia.

## Recursos y Referencias

- [Greedy Algorithms - GeeksforGeeks](https://www.geeksforgeeks.org/greedy-algorithms/)

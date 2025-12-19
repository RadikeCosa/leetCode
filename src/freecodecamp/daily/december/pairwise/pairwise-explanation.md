---
title: Pairwise
source: freecodecamp
series: daily
category: december
createdAt: 2025-12-19
difficulty: medium
topics:
  - arrays
blogLink: https://blog-astro-rouge.vercel.app/posts/pairwise/
problemLink: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-12-19/
---

## Pairwise - Análisis y Explicación

## Enunciado del Problema

Dado un arreglo de enteros y un número objetivo, se deben encontrar todos los pares de elementos cuyos valores sumen exactamente el número objetivo. Por cada par encontrado, se suman los índices de ambos elementos, y finalmente se retorna la suma total de todos los índices de los pares válidos. Cada elemento del arreglo solo puede ser usado una vez en un par.

Por ejemplo, para el arreglo [2, 3, 4, 6, 8] y el objetivo 10, los pares válidos serían:

- 2 + 8 = 10 (índices 0 y 4)
- 4 + 6 = 10 (índices 2 y 3)

La suma de los índices de estos pares es 0 + 4 + 2 + 3 = 9, que es el valor de retorno.

## Análisis Inicial

### Comprensión del Problema

El objetivo es identificar todos los pares de números en el arreglo que sumen exactamente el valor objetivo, asegurando que cada elemento se utilice como máximo una vez (es decir, no se pueden reutilizar elementos para formar varios pares). Luego, se suman los índices de todos los elementos que forman parte de los pares válidos y se retorna ese total.

### Casos de Prueba Identificados

Los casos de prueba relevantes incluyen:

1. pairwise([2, 3, 4, 6, 8], 10) debe retornar 9.

- Pares: (2,8) → índices 0 y 4; (4,6) → índices 2 y 3; suma total: 0+4+2+3 = 9.

2. pairwise([4, 1, 5, 2, 6, 3], 7) debe retornar 15.

- Pares: (1,6) → 1 y 4; (4,3) → 0 y 5; (5,2) → 2 y 3; suma: 1+4+0+5+2+3 = 15.

3. pairwise([-30, -15, 5, 10, 15, -5, 20, -40], -20) debe retornar 22.

- Pares: (-30,10) → 0 y 3; (-15,-5) → 1 y 5; (20,-40) → 6 y 7; suma: 0+3+1+5+6+7 = 22.

4. pairwise([7, 9, 13, 19, 21, 6, 3, 1, 4, 8, 12, 22], 24) debe retornar 10.

- Pares: (7,17) no existe; (9,15) no existe; (13,11) no existe; (19,5) no existe; (21,3) → 4 y 6; (6,18) no existe; (1,23) no existe; (4,20) no existe; (8,16) no existe; (12,12) no válido; suma: 4+6 = 10.

## Desarrollo de la Solución

### Enfoque Elegido

Para resolver el problema de manera eficiente y sin reutilizar elementos, se puede optar por un enfoque greedy usando un recorrido doble (anidado) sobre el arreglo, marcando los elementos ya emparejados. La idea es:

- Recorrer el arreglo con dos bucles anidados para buscar todos los pares posibles.
- Usar un arreglo auxiliar (por ejemplo, un array de booleanos o un Set de índices) para marcar los elementos ya utilizados en un par, asegurando que cada elemento se use solo una vez.
- Cada vez que se encuentra un par válido (que suma el objetivo y cuyos índices no han sido usados), se suman sus índices al total y se marcan como usados.
- Continuar hasta recorrer todas las combinaciones posibles.

**¿Por qué este enfoque?**

- Es sencillo de implementar y garantiza que no se reutilicen elementos.
- Aunque la complejidad es O(n²), es aceptable para arreglos de tamaño moderado y asegura que se consideran todos los pares posibles.
- Alternativas como el uso de un mapa (hashmap) pueden ser más eficientes en algunos casos, pero requieren lógica adicional para manejar correctamente los índices y evitar reutilización.

**Alternativas consideradas:**

- Usar un hashmap para buscar complementos en O(1), pero esto complica el manejo de índices y la restricción de uso único.
- Algoritmos de dos punteros, útiles si el arreglo está ordenado, pero aquí el orden de los índices es relevante y no se puede modificar el arreglo original.

### Implementación Paso a Paso

1. Inicializar una variable para la suma total de índices.
2. Crear un arreglo auxiliar para marcar los elementos ya usados.
3. Recorrer el arreglo con dos bucles anidados (i y j, con j > i).
4. Para cada par (i, j), verificar:

- Que ninguno de los índices haya sido usado.
- Que la suma de los valores en i y j sea igual al objetivo.

5. Si se cumple, sumar i + j al total y marcar ambos índices como usados.
6. Continuar hasta terminar el recorrido.
7. Retornar la suma total de índices.

### Código Final

```javascript
/**
 * Returns the sum of indices of all pairs whose values add up to the target.
 * Each element can be used at most once.
 * @param {number[]} arr - The input array.
 * @param {number} target - The target sum.
 * @returns {number} - The sum of indices of all valid pairs.
 */
function pairwise(arr, target) {
  let used = new Array(arr.length).fill(false);
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    if (used[i]) continue;
    for (let j = i + 1; j < arr.length; j++) {
      if (!used[j] && arr[i] + arr[j] === target) {
        total += i + j;
        used[i] = true;
        used[j] = true;
        break; // Move to next i after finding a pair for i
      }
    }
  }
  return total;
}
```

## Análisis de Complejidad

### Complejidad Temporal

La complejidad temporal del algoritmo es O(n²), donde n es la longitud del arreglo. Esto se debe a que, en el peor de los casos, para cada elemento se recorre el resto del arreglo buscando un par válido. Aunque no se exploran todas las combinaciones posibles (ya que se salta al siguiente elemento tras encontrar un par), el orden cuadrático se mantiene. Para arreglos pequeños o medianos, este costo es aceptable y garantiza que no se reutilicen elementos.

### Complejidad Espacial

La complejidad espacial es O(n), ya que se utiliza un arreglo auxiliar `used` del mismo tamaño que el arreglo de entrada para marcar los elementos ya emparejados. No se requieren estructuras adicionales significativas.

## Casos Edge y Consideraciones

Algunos casos edge relevantes:

- Arreglo vacío: debe retornar 0.
- Ningún par suma el objetivo: debe retornar 0.
- Elementos repetidos: solo se pueden usar una vez por par, por lo que si hay más repeticiones que pares posibles, los sobrantes no se usan.
- Todos los elementos iguales: si el objetivo es el doble de ese valor, solo se pueden formar pares hasta agotar los elementos.
- Pares con el mismo valor (por ejemplo, objetivo par y hay dos elementos iguales): se permite si ambos índices están disponibles.

## Reflexiones y Aprendizajes

### Conceptos Aplicados

- Recorrido doble (anidado) para búsqueda de pares.
- Uso de un arreglo auxiliar para control de uso único de elementos.
- Greedy: se empareja el primer par válido encontrado para cada elemento.

### Posibles Optimizaciones

Para arreglos muy grandes, se podría intentar un enfoque con hashmap para buscar complementos en O(1), pero habría que gestionar cuidadosamente los índices y la restricción de uso único. En la práctica, la solución cuadrática es más simple y menos propensa a errores para este tipo de problema.

## Recursos y Referencias

- [Explicación oficial FreeCodeCamp (en inglés)](https://forum.freecodecamp.org/t/freecodecamp-algorithm-challenge-guide-pairwise/16015)
- [Artículo de blog sobre pairwise](https://blog-astro-rouge.vercel.app/posts/pairwise/)
- Problemas relacionados: Two Sum, Pair Sum, combinatoria de pares en arreglos.

---
title: Array Duplicates
source: freecodecamp
series: daily
category: august
createdAt: 2025-12-11
difficulty: easy
topics:
  - arrays
  - sorting
blogLink: https://blog-astro-rouge.vercel.app/posts/array-duplicates/
problemLink: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-08-30/
---

## Array Duplicates - Análisis y Explicación

## Enunciado del Problema

Dado un array de enteros retorna un nuevo array de los enteros que aprecen más de una vez en el array original, ordenados en orden ascendente. Si no hay duplicados, retorna un array vacío.
Solo incluye una instancia de cada valor en el array retornado.

## Análisis Inicial

### Comprensión del Problema

El objetivo es identificar todos los números que aparecen más de una vez en un array de enteros. Es importante que cada número duplicado solo aparezca una vez en el resultado, sin importar cuántas veces se repita en el array original. Además, el array de salida debe estar ordenado de menor a mayor. Si no hay duplicados, se debe retornar un array vacío.

Puntos clave:

- Solo se consideran duplicados los números que aparecen al menos dos veces.
- El resultado no debe contener repeticiones.
- El orden del resultado debe ser ascendente.
- Si no hay duplicados, el resultado es un array vacío.

### Casos de Prueba Identificados

1. **Array sin duplicados:**  
   Entrada: `[1, 2, 3, 4, 5]`  
   Salida esperada: `[]`  
   _No hay ningún número que se repita, por lo tanto el resultado es un array vacío._

2. **Array con algunos duplicados:**  
   Entrada: `[1, 2, 3, 4, 1, 2]`  
   Salida esperada: `[1, 2]`  
   _Los números 1 y 2 aparecen más de una vez. El resultado contiene ambos, ordenados._

3. **Array con múltiples duplicados y valores negativos:**  
   Entrada: `[2, 34, 0, 1, -6, 23, 5, 3, 2, 5, 67, -6, 23, 2, 43, 2, 12, 0, 2, 4, 4]`  
   Salida esperada: `[-6, 0, 2, 4, 5, 23]`  
   _Varios números aparecen más de una vez, incluyendo negativos y ceros. El resultado está ordenado y sin repeticiones._

## Desarrollo de la Solución

### Enfoque Elegido

Se utiliza un `Map` para contar la frecuencia de cada número en el array. Esto permite usar números (incluyendo negativos y ceros) como claves sin problemas de conversión a string. Luego, se filtran aquellos números cuya frecuencia es mayor a 1 y se agregan a un array de resultado. Finalmente, este array se ordena en orden ascendente antes de retornarlo.

### Implementación Paso a Paso

1. **Inicializar un Map:**  
   Crear un `Map` vacío para almacenar la frecuencia de cada número del array.

2. **Contar frecuencias:**  
   Recorrer el array original y, por cada número, incrementar su contador en el `Map`. Si el número no existe aún en el `Map`, inicializarlo en 1.

3. **Filtrar duplicados:**  
   Recorrer las entradas del `Map` y seleccionar aquellos números cuya frecuencia sea mayor a 1. Agregar estos números a un nuevo array de resultados.

4. **Ordenar el resultado:**  
   Ordenar el array de duplicados en orden ascendente.

5. **Retornar el array:**  
   Devolver el array resultante. Si no hay duplicados, el array estará vacío.

### Codigo Final

```javascript
/**
 * FreeCodeCamp Problem: Array Duplicates
 * Category: FreeCodeCamp
 *
 * @param {number[]} arr - An array of integers
 * @returns {number[]} An array of integers that appear more than once, sorted in ascending order
 */
function findDuplicates(arr) {
  const frequencyMap = new Map();
  const result = [];

  // Count the frequency of each number in the array
  for (const num of arr) {
    frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
  }

  // Collect numbers that appear more than once
  for (const [num, count] of frequencyMap.entries()) {
    if (count > 1) {
      result.push(num);
    }
  }

  // Sort the result array in ascending order
  result.sort((a, b) => a - b);

  return result;
}

export default findDuplicates;
```

## Análisis de Complejidad

### Complejidad Temporal

- Contar frecuencias en el array toma $O(n)$, donde $n$ es la longitud del array.
- Filtrar los duplicados recorre las claves del `Map`, que en el peor caso es $O(n)$.
- Ordenar el array de duplicados toma $O(k \log k)$, donde $k$ es la cantidad de números duplicados.
- En total, la complejidad temporal es $O(n + k \log k)$.

### Complejidad Espacial

- El `Map` de frecuencias puede almacenar hasta $O(n)$ claves en el peor caso (si todos los números son distintos).
- El array de resultado puede tener hasta $O(n)$ elementos en el peor caso (si todos los números son duplicados).
- Por lo tanto, la complejidad espacial es $O(n)$.

## Casos Edge y Consideraciones

- Array vacío: debe retornar un array vacío.
- Todos los elementos únicos: retorna un array vacío.
- Todos los elementos iguales: retorna un array con ese único valor.
- Números negativos, ceros y positivos: todos deben ser manejados correctamente.
- Arrays muy grandes: el enfoque sigue siendo eficiente.

## Reflexiones y Aprendizajes

### Conceptos Aplicados

- Uso de `Map` para conteo de frecuencias.
- Filtrado de elementos según condición.
- Ordenamiento de arrays numéricos.
- Manejo de casos edge y validación de entrada.

## Recursos y Referencias

- [MDN Web Docs: Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
- [MDN Web Docs: Array.prototype.sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

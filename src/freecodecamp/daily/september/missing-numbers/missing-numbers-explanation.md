---
title: Missing Numbers
source: freecodecamp
series: daily
category: september
createdAt: 2025-12-24
difficulty: easy
topics:
  - arrays
  - counting
blogLink: https://blog-astro-rouge.vercel.app/posts/missing-numbers/
problemLink: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-09-13/
---

## Missing Numbers - Análisis y Explicación

## Enunciado del Problema

Dado un array de enteros del 1 al n inclusive, devuelve un array con todos los números que faltan en el rango entre 1 y n (donde n es el número más grande del array).

- El array dado puede estar desordenado y contener duplicados.
- El array resultante debe estar en orden ascendente.
- Si no faltan números, devuelve un array vacío.

## Análisis Inicial

### Comprensión del Problema

El problema requiere identificar los números que no están presentes en el array dado dentro del rango definido entre 1 y n, donde n es el valor máximo del array.

### Casos de Prueba Identificados

Los casos de prueba identificados cubren distintos escenarios relevantes para asegurar la robustez de la solución:

1. **Caso base (sin faltantes):**

- Input: [1, 2, 3, 4, 5]
- Output esperado: []
- Descripción: El array contiene todos los números del rango, no falta ninguno.

2. **Faltan números intermedios:**

- Input: [1, 3, 5]
- Output esperado: [2, 4]
- Descripción: Faltan algunos valores entre el mínimo y el máximo.

3. **Rango amplio con extremos:**

- Input: [1, 10]
- Output esperado: [2, 3, 4, 5, 6, 7, 8, 9]
- Descripción: Solo están presentes los extremos del rango, faltan todos los intermedios.

4. **Duplicados y desorden:**

- Input: [10, 1, 10, 1, 10, 1]
- Output esperado: [2, 3, 4, 5, 6, 7, 8, 9]
- Descripción: El array tiene duplicados y está desordenado, pero el resultado debe ser correcto.

5. **Faltan valores dispersos:**

- Input: [3, 1, 4, 1, 5, 9]
- Output esperado: [2, 6, 7, 8]
- Descripción: Faltan varios valores no consecutivos dentro del rango.

6. **Caso con valores repetidos y un solo faltante:**

- Input: [1, 2, 3, 4, 5, 7, 8, 9, 10, 12, 6, 8, 9, 3, 2, 10, 7, 4]
- Output esperado: [11]
- Descripción: El array contiene muchos duplicados y solo falta un número dentro del rango.

## Desarrollo de la Solución

### Enfoque Elegido

El enfoque consiste en identificar el número máximo del array, que define el rango de búsqueda de los números faltantes (de 1 a n). Luego, se utiliza una estructura de datos auxiliar (puede ser un array de conteo o un objeto tipo mapa) para registrar la presencia de cada número dentro de ese rango.

El procedimiento es el siguiente:

1. Se determina el valor máximo del array, que será el límite superior del rango.
2. Se inicializa un array o mapa de tamaño igual al valor máximo, donde cada posición representa un número del rango.
3. Se recorre el array original y, por cada número encontrado, se marca su presencia en la estructura auxiliar.
4. Finalmente, se recorren todos los números del rango y se recolectan aquellos que no fueron marcados (es decir, los que tienen conteo cero o no están presentes en el mapa).

Este método es eficiente porque permite identificar los faltantes en una sola pasada sobre el array original y otra sobre el rango, manejando correctamente duplicados y desorden. Además, garantiza que el resultado esté en orden ascendente.

Como alternativa, se podría utilizar un `Set` para registrar los números presentes y luego iterar sobre el rango para identificar los ausentes, pero la idea central es la misma: marcar presencia y recolectar los que faltan.

### Implementación Paso a Paso

1. **Encontrar el máximo valor:**

```javascript
const max = Math.max(...arr);
```

2. **Inicializar la estructura de conteo:**

```javascript
const count = new Array(max + 1).fill(0);
```

3. **Marcar presencia de números:**

```javascript
for (const num of arr) {
  count[num] = 1; // Marca que el número está presente
}
```

4. **Recolectar números faltantes:**

```javascript
const missingNumbers = [];
for (let i = 1; i <= max; i++) {
  if (count[i] === 0) {
    missingNumbers.push(i);
  }
}
return missingNumbers;
```

## Código Final

```javascript
function findMissingNumbers(arr) {
  // Encontrar el valor máximo del array, que define el rango de búsqueda
  const max = Math.max(...arr);

  // Inicializar un array de conteo para registrar la presencia de cada número
  const count = new Array(max + 1).fill(0);

  // Marcar la presencia de cada número del array en la estructura de conteo
  for (const num of arr) {
    count[num] = 1;
  }

  // Recopilar los números faltantes en el rango [1, max]
  const missingNumbers = [];
  for (let i = 1; i <= max; i++) {
    if (count[i] === 0) {
      missingNumbers.push(i);
    }
  }

  // Retornar el array de números faltantes en orden ascendente
  return missingNumbers;
}
```

**Explicación paso a paso:**

1. Se determina el valor máximo del array para establecer el rango de búsqueda.
2. Se crea un array auxiliar (`count`) donde cada índice representa un número del rango. Inicialmente, todos los valores están en 0.
3. Se recorre el array original y se marca con 1 la presencia de cada número en la estructura auxiliar.
4. Se recorre el rango de 1 a `max` y se agregan al resultado aquellos índices que permanecen en 0, es decir, los números que no aparecen en el array original.
5. Finalmente, se retorna el array con los números faltantes, garantizando el orden ascendente.

**Puntos adicionales:**

- **Complejidad Temporal:**  
  La solución recorre el array original una vez ($O(n)$) y luego recorre el rango de 1 a `max` ($O(m)$, donde $m$ es el valor máximo). Por lo tanto, la complejidad temporal es $O(n + m)$.

- **Complejidad Espacial:**  
  Se utiliza un array auxiliar de tamaño $max + 1$, por lo que la complejidad espacial es $O(m)$.

- **Edge Cases y Consideraciones:**

  - Si el array está vacío, la función retorna un array vacío, ya que no hay rango definido.
  - Si el array contiene todos los números del rango, el resultado será un array vacío.
  - El algoritmo maneja correctamente duplicados y desorden en el array de entrada.

- **Posibles Optimizaciones:**  
  Si el rango máximo (`max`) es muy grande en comparación con la cantidad de elementos, se puede usar un `Set` para registrar los presentes y luego iterar solo sobre el rango necesario, ahorrando espacio en algunos casos.

- **Patrones y técnicas aplicadas:**
  - Uso de estructuras de conteo (array o mapa) para marcar presencia.
  - Iteración doble: una para marcar y otra para recolectar los faltantes.
  - Manejo eficiente de duplicados y desorden.

Si necesitas que amplíe algún apartado o agregue referencias, házmelo saber.

---
title: Purge Most Frequent
source: freecodecamp
series: daily
category: december
createdAt: 2025-12-20
difficulty: easy
topics:
  - array
  - hash-map
  - frequency-counting
  - filtering
  - data-structures
blogLink: https://blog-astro-rouge.vercel.app/posts/purge-most-frequent/
problemLink: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-12-20/
---

## Purge Most Frequent - Análisis y Explicación

## Enunciado del Problema

Dado un array de valores, elimina todas las ocurrencias del elemento más frecuente y devuelve el array resultante.

- Si hay múltiples elementos con la misma frecuencia máxima, elimina todos ellos.
- No cambies la ubicación ni el orden de los demás elementos.

## Análisis Inicial

### Comprensión del Problema

El objetivo es identificar el/los elemento(s) que aparecen con mayor frecuencia en el array y eliminar todas sus ocurrencias, manteniendo el orden de los demás elementos.

### Casos de Prueba Identificados

1. `[1, 2, 2, 3]` → `[1, 3]`  
   El elemento más frecuente es `2` (2 veces). Se eliminan todas sus ocurrencias.

2. `["a", "b", "d", "b", "c", "d", "c", "d", "c", "d"]` → `["a", "b", "b", "c", "c", "c"]`  
   El más frecuente es `d` (4 veces). Se eliminan todas las ocurrencias de `d`.

3. `["red", "blue", "green", "red", "blue", "green", "blue"]` → `["red", "green", "red", "green"]`  
   El más frecuente es `blue` (3 veces). Se eliminan todas las ocurrencias de `blue`.

4. `[5, 5, 5, 5]` → `[]`  
   Todos los elementos son el más frecuente. El resultado es un array vacío.

**Casos edge sugeridos:**

- Array vacío: `[]` → `[]`  
  No hay elementos, el resultado es el mismo array vacío.

- Todos los elementos con la misma frecuencia: `[1, 2, 3, 4]` → `[]`  
  Todos aparecen una vez, todos se eliminan.

- Elementos no primitivos: `[{a:1}, {a:1}, {b:2}]`  
  (En JS, objetos distintos nunca son iguales por referencia, así que cada objeto se considera único aunque tenga el mismo contenido.)

- Elementos booleanos: `[true, false, true, false, true]` → `[false, false]`  
  `true` es el más frecuente (3 veces), se eliminan todos los `true`.

## Desarrollo de la Solución

### Enfoque Elegido

El enfoque se divide en dos fases principales:

1. **Contar la frecuencia de cada elemento:**  
   Se recorre el array y se utiliza un objeto (si los elementos son primitivos) o un `Map` para llevar la cuenta de cuántas veces aparece cada valor.

2. **Identificar el/los más frecuentes:**  
   Se determina la frecuencia máxima y se identifican todos los valores que la alcanzan (puede haber empate).

3. **Filtrar el array original:**  
   Se construye un nuevo array excluyendo todos los elementos que sean de los más frecuentes, manteniendo el orden original.

Este enfoque es eficiente y claro, y permite manejar empates y cualquier tipo de dato primitivo.

### Implementación Paso a Paso

1. **Inicializar un contador de frecuencias** (por ejemplo, un objeto vacío o `Map`).
2. **Recorrer el array original** y para cada elemento, incrementar su contador.
3. **Determinar la frecuencia máxima** buscando el valor más alto en el contador.
4. **Identificar todos los valores con frecuencia máxima** (puede ser más de uno).
5. **Filtrar el array original** devolviendo solo los elementos que _no_ están en el conjunto de los más frecuentes.
6. **Devolver el array resultante**.

Este proceso requiere dos recorridos principales sobre el array (uno para contar y otro para filtrar), lo que lo hace eficiente para la mayoría de los casos prácticos.

### Código Completo

```javascript
function purgeMostFrequent(arr) {
  const frequencyMap = new Map();
  // Contar frecuencias
  for (const item of arr) {
    frequencyMap.set(item, (frequencyMap.get(item) || 0) + 1);
  }
  // Encontrar la frecuencia máxima
  let maxFrequency = 0;
  for (const freq of frequencyMap.values()) {
    if (freq > maxFrequency) {
      maxFrequency = freq;
    }
  }
  // Identificar los elementos más frecuentes
  const mostFrequentElements = new Set();
  for (const [item, freq] of frequencyMap.entries()) {
    if (freq === maxFrequency) {
      mostFrequentElements.add(item);
    }
  }
  // Filtrar el array original
  return arr.filter((item) => !mostFrequentElements.has(item));
}
```

## Análisis de Complejidad

### Complejidad Temporal

El algoritmo realiza dos recorridos principales sobre el array de entrada:

1. El primer recorrido cuenta la frecuencia de cada elemento ($O(n)$, donde $n$ es la longitud del array).
2. El segundo recorrido identifica la frecuencia máxima y los elementos más frecuentes ($O(k)$, donde $k$ es el número de elementos únicos; en el peor caso $k = n$).
3. Finalmente, se filtra el array original excluyendo los elementos más frecuentes ($O(n)$).

Por lo tanto, la complejidad temporal total es $O(n + k)$, que en el peor caso (todos los elementos distintos) es $O(2n) = O(n)$.

### Complejidad Espacial

Se utiliza un `Map` para almacenar la frecuencia de cada elemento, lo que requiere $O(k)$ espacio adicional, donde $k$ es el número de elementos únicos en el array. Además, se utiliza un `Set` para los elementos más frecuentes ($O(k)$ en el peor caso). El array resultante puede tener hasta $n$ elementos, pero eso es espacio de salida.

En resumen, la complejidad espacial es $O(k)$.

## Casos Edge y Consideraciones

- **Array vacío:** El algoritmo retorna un array vacío sin errores.
- **Todos los elementos con la misma frecuencia:** Todos se eliminan, resultado vacío.
- **Elementos no primitivos:** En JavaScript, objetos distintos nunca son iguales por referencia, por lo que cada objeto se considera único aunque tenga el mismo contenido.
- **Elementos booleanos, null, undefined:** El algoritmo los maneja correctamente, ya que `Map` y `Set` pueden almacenar cualquier tipo de dato.
- **Inmutabilidad:** El array original no se modifica, se retorna uno nuevo.

## Reflexiones y Aprendizajes

### Conceptos Aplicados

- Uso de estructuras de datos como `Map` y `Set` para conteo y búsqueda eficiente.
- Patrón de filtrado basado en propiedades globales del array (frecuencia).
- Separación clara de fases: conteo, identificación y filtrado.

### Posibles Optimizaciones

- Para arrays muy grandes, si la cantidad de elementos únicos es pequeña, el enfoque es óptimo.
- Si se sabe que los datos son siempre primitivos (strings o números), se podría usar un objeto simple en vez de `Map` para ahorrar algo de overhead, aunque esto no es seguro para otros tipos.
- Si se requiere máxima eficiencia en filtrado, el uso de `Set` para los más frecuentes es preferible a un array.

### Alternativas Consideradas

- Ordenar los elementos por frecuencia y filtrar, pero esto agrega complejidad innecesaria ($O(n \log n)$) y no preserva el orden original.
- Algoritmos de una sola pasada no son viables en el caso general, ya que se necesita conocer la frecuencia máxima antes de filtrar.

## Recursos y Referencias

- [MDN Web Docs: Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
- [MDN Web Docs: Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)
- [Artículo relacionado: "Counting Elements in JavaScript"](https://2ality.com/2015/01/es6-set-operations.html)

---

### Justificación de topics y dificultad

- **Topics:**

  - `array`: el problema se basa en manipulación de arrays.
  - `hash-map` y `frequency-counting`: el conteo eficiente de frecuencias es central.
  - `filtering`: la solución filtra el array original.
  - `data-structures`: uso de `Map` y `Set`.

- **Dificultad:**
  - **Fácil-Media**: es un problema clásico de filtrado y conteo, pero requiere atención a detalles de igualdad y tipos de datos, lo que lo hace ligeramente más desafiante que un simple filtrado.

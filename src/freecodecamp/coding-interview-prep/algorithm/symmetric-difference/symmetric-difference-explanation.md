---
title: "symmetric-difference"
difficulty: "medium"
topics:
  - Set
  - Array
  - Map
source: "freecodecamp"
series: "coding-interview-prep"
category: "algorithm"
createdAt: "2025-10-08"
---

# Explicación

## Análisis del problema

El problema pide calcular la diferencia simétrica entre dos o más arrays. La diferencia simétrica es el conjunto de elementos que están en alguno de los arrays, pero no en ambos (o en todos, si hay más de dos). Es decir, se eliminan los elementos que aparecen en más de un array y se conservan los que son únicos respecto a la comparación entre arrays.

En este contexto, los arrays pueden contener duplicados, pero el resultado debe ser un array de elementos únicos. Además, el algoritmo debe funcionar para cualquier cantidad de arrays, no solo dos.

## Enfoque y algoritmo

Para resolver el problema, se puede aplicar la diferencia simétrica de manera iterativa entre los arrays:

1. Se comienza tomando los dos primeros arrays y calculando la diferencia simétrica entre ellos.
2. El resultado se compara con el siguiente array, y así sucesivamente hasta procesar todos los arrays.
3. Para cada paso, se eliminan los duplicados y se asegura que el resultado final contenga solo elementos únicos.

Una forma eficiente de implementar esto es usando el objeto Set de JavaScript para manejar la unicidad de los elementos y el método filter para comparar los valores entre arrays.

El algoritmo puede estructurarse como una función que recibe un número variable de arrays y aplica la diferencia simétrica de forma acumulativa.

## Complejidad

**Tiempo:** O(n) donde n es el total de elementos en todos los arrays. Cada elemento se procesa una vez al convertir a Set y en cada paso de diferencia simétrica.

**Espacio:** O(n) por los sets intermedios y el array resultado.

## Optimización

La solución actual es eficiente para la mayoría de los casos prácticos, ya que aprovecha la estructura Set para eliminar duplicados y realizar búsquedas rápidas (O(1) por elemento). Sin embargo, si los arrays son muy grandes y hay muchos, se podría optimizar:

- Usando un solo objeto Map para contar ocurrencias y filtrar los elementos que aparecen en más de un array.
- Evitando la conversión repetida entre arrays y sets, procesando los elementos directamente.

## Soluciones alternativas

1. **Con Map y conteo de ocurrencias:**

   - Se recorre cada array y se cuenta cuántas veces aparece cada elemento en todos los arrays.
   - Al final, se filtran los elementos que aparecen en un número impar de arrays (esto es la definición matemática de diferencia simétrica múltiple).

   ```javascript
   function symmetricDifferenceAlt(...args) {
     const count = new Map();
     for (const arr of args) {
       // Usamos un Set para evitar contar duplicados dentro del mismo array
       for (const num of new Set(arr)) {
         count.set(num, (count.get(num) || 0) + 1);
       }
     }
     // Solo los que aparecen en un número impar de arrays
     return Array.from(count.entries())
       .filter(([_, v]) => v % 2 === 1)
       .map(([k]) => k)
       .sort((a, b) => a - b);
   }
   ```

2. **Con operaciones de conjuntos (Set):**

   - Se puede usar una función recursiva que aplique la diferencia simétrica entre dos arrays y la use para reducir el resto.

   ```javascript
   function symDiffArr(arr1, arr2) {
     const setA = new Set(arr1);
     const setB = new Set(arr2);
     const soloA = [...setA].filter((x) => !setB.has(x));
     const soloB = [...setB].filter((x) => !setA.has(x));
     return [...new Set([...soloA, ...soloB])];
   }

   function symmetricDifferenceRecursive(...args) {
     return args
       .reduce((acc, curr) => symDiffArr(acc, curr))
       .sort((a, b) => a - b);
   }
   ```

3. **Sin Sets, solo con arrays:**

   - Se puede usar filter y indexOf, pero la eficiencia baja a O(n^2) por las búsquedas lineales.

   ```javascript
   function symDiffArray(arr1, arr2) {
     const soloA = arr1.filter((x) => arr2.indexOf(x) === -1);
     const soloB = arr2.filter((x) => arr1.indexOf(x) === -1);
     // Eliminar duplicados manualmente
     return [...new Set([...soloA, ...soloB])];
   }

   function symmetricDifferenceNaive(...args) {
     return args
       .reduce((acc, curr) => symDiffArray(acc, curr))
       .sort((a, b) => a - b);
   }
   ```

## Casos límite y ejemplos

- Arrays vacíos: `symmetricDifference([], [])` retorna `[]`.
- Arrays con todos los elementos iguales: `symmetricDifference([1, 1], [1, 1])` retorna `[]`.
- Arrays con duplicados internos: `symmetricDifference([1, 2, 2], [2, 3, 3])` retorna `[1, 3]`.
- Arrays con un solo elemento: `symmetricDifference([1], [2])` retorna `[1, 2]`.
- Más de dos arrays: `symmetricDifference([1, 2], [2, 3], [3, 4])` retorna `[1, 4]`.

**Ejemplo completo:**

```javascript
symmetricDifference([1, 2, 3], [5, 2, 1, 4]); // [3, 4, 5]
symmetricDifference([1, 2, 5], [2, 3, 5], [3, 4, 5]); // [1, 4, 5]
```

## Aprendizajes y patrones

- Uso de la diferencia simétrica como operación fundamental en teoría de conjuntos y algoritmos de arrays.
- Aplicación de estructuras de datos como Set y Map para manejar unicidad y conteo eficiente.
- Reducción iterativa y recursiva para problemas que involucran múltiples colecciones.
- Importancia de eliminar duplicados antes de operar para evitar resultados incorrectos.
- Alternativas de implementación: desde la más eficiente (Set/Map) hasta la más simple (filter/indexOf).
- Reconocimiento de patrones de reducción (`reduce`) para combinar resultados parciales.
- Análisis de complejidad y trade-offs entre legibilidad y eficiencia.

## Análisis comparativo de soluciones

**Solución con Set (principal):**

- Ventajas: Código claro, eficiente en tiempo y espacio, fácil de adaptar a cualquier cantidad de arrays.
- Desventajas: Requiere entender el uso de Sets y operaciones de conjuntos.

**Solución con Map y conteo de ocurrencias:**

- Ventajas: Refleja la definición matemática de diferencia simétrica múltiple, muy eficiente para muchos arrays y valores repetidos.
- Desventajas: El código puede ser menos intuitivo para principiantes, requiere manejo de Map y lógica de conteo.

**Solución recursiva con Sets:**

- Ventajas: Elegante y compacta, fácil de entender si se conoce reduce y recursión.
- Desventajas: Similar eficiencia a la principal, pero puede ser menos legible en problemas más complejos.

**Solución solo con arrays (filter/indexOf):**

- Ventajas: Muy simple, no requiere estructuras avanzadas.
- Desventajas: Ineficiente para arrays grandes (O(n^2)), no recomendable en producción.

**Conclusión:**
La solución con Set es la más equilibrada en claridad y eficiencia para la mayoría de los casos. El enfoque con Map es óptimo si se busca máxima generalidad y eficiencia en problemas con muchos arrays y valores repetidos. Las alternativas recursiva y con arrays simples pueden ser útiles para aprendizaje o casos muy pequeños, pero no escalan bien.
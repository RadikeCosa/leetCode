---
title: "filter-elements-from-array"
difficulty: "easy"
topics:
  - Array
  - Predicate
  - Filter
source: "leetcode"
series: "parte-2-transformacion-de-arrays"
category: "30-days-js"
createdAt: "2025-09-06"
---

# Filter Elements from Array

Implementar una función que filtre elementos de un array basándose en una función de predicado, similar a Array.filter() pero sin usar el método nativo.

## Ejemplos

**Ejemplo 1:**

- Input: arr = [0,10,20,30], fn = function greaterThan10(n) { return n > 10; }
- Output: [20,30]
- Explicación: La función filtra valores que no son mayores que 10.

**Ejemplo 2:**

- Input: arr = [1,2,3], fn = function firstIndex(n, i) { return i === 0; }
- Output: [1]
- Explicación: fn también puede aceptar el índice. La función remueve elementos que no están en el índice 0.

**Ejemplo 3:**

- Input: arr = [-2,-1,0,1,2], fn = function plusOne(n) { return n + 1 }
- Output: [-2,0,1,2]
- Explicación: Valores falsy como 0 deben ser filtrados.

## Análisis

Este problema introduce conceptos importantes sobre:

1. **Truthiness y Falsiness**: Entender qué valores JavaScript considera verdaderos o falsos
2. **Funciones de predicado**: Funciones que evalúan condiciones y retornan valores booleanos (o truthy/falsy)
3. **Filtrado de arrays**: Patrón fundamental para seleccionar elementos que cumplan ciertas condiciones
4. **Flexibilidad de parámetros**: La función puede usar tanto el valor como el índice

## Enfoque detallado

La solución implementa el patrón clásico de filtrado de arrays:

### Paso a paso:

1. **Inicialización**: Crear un array vacío `filteredArr` para almacenar elementos que pasen la condición

   ```typescript
   let filteredArr: number[] = [];
   ```

2. **Iteración**: Recorrer cada elemento del array original usando un bucle `for`

   ```typescript
   for (let i = 0; i < arr.length; i++) {
   ```

3. **Evaluación**: Aplicar la función `fn` al elemento actual y su índice para obtener un valor truthy/falsy

   ```typescript
   if (fn(arr[i], i)) {
   ```

4. **Filtrado**: Solo agregar el elemento original al array resultado si la función retorna truthy

   ```typescript
   filteredArr.push(arr[i]); // ¡Importante: agregamos arr[i], no fn(arr[i], i)!
   ```

5. **Retorno**: Devolver el array con solo los elementos que pasaron el filtro

### Aspectos clave:

- **Truthiness**: JavaScript evalúa automáticamente si `fn(arr[i], i)` es truthy en la condición `if`
- **Elemento original**: Se agrega `arr[i]` al resultado, no el valor retornado por `fn`
- **Tamaño variable**: El array resultado puede tener de 0 a n elementos
- **Flexibilidad**: La función `fn` puede usar valor, índice, o ambos para decidir

## Casos extremos

- Array vacío: debe retornar array vacío
- Todos los elementos pasan el filtro: retorna array idéntico
- Ningún elemento pasa el filtro: retorna array vacío
- Función que retorna valores truthy/falsy (no solo boolean)
- Funciones que usan solo el valor, solo el índice, o ambos

## Complejidad

- Time complexity: O(n) - iteramos una vez por cada elemento
- Space complexity: O(k) - donde k es el número de elementos que pasan el filtro

## Conclusión

Este problema enseña conceptos fundamentales sobre:

1. **Truthiness y Falsiness**: Comprender cómo JavaScript evalúa valores en contextos booleanos

   - Falsy: `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, `NaN`
   - Truthy: Todo lo demás (incluyendo `"0"`, `"false"`, `[]`, `{}`, etc.)

2. **Filtrado de datos**: Patrón esencial para seleccionar subconjuntos de información
3. **Funciones de predicado**: Funciones que evalúan condiciones y retornan valores de decisión
4. **Diferencia con map**: Mientras `map` transforma todos los elementos, `filter` selecciona algunos

La implementación manual de `filter` ayuda a entender:

- Cómo trabajar con arrays de tamaño variable
- La importancia de distinguir entre el valor de evaluación y el valor a conservar
- Los fundamentos de algoritmos de selección de datos

### Lecciones aprendidas:

- El filtrado es una operación fundamental en programación funcional
- La evaluación de truthiness es automática en estructuras de control de JavaScript
- La diferencia entre transformar datos (map) y seleccionar datos (filter)
- La flexibilidad de usar tanto valor como índice en funciones de predicado
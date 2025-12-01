---
title: "apply-transform-over-each-element-in-array"
difficulty: "easy"
topics:
  - Array
  - Higher Order Function
  - Map
source: "leetcode"
series: "parte-2-transformacion-de-arrays"
category: "30-days-js"
createdAt: "2025-12-01"
---

# Apply Transform Over Each Element in Array

Implementar una función que aplique una transformación a cada elemento de un array, similar a Array.map() pero sin usar el método nativo.

## Ejemplos

**Ejemplo 1:**

- Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
- Output: [2,3,4]
- Explicación: La función incrementa cada valor del array en uno.

**Ejemplo 2:**

- Input: arr = [1,2,3], fn = function plusI(n, i) { return n + i; }
- Output: [1,3,5]
- Explicación: La función suma a cada valor su índice correspondiente.

**Ejemplo 3:**

- Input: arr = [10,20,30], fn = function constant() { return 42; }
- Output: [42,42,42]
- Explicación: La función siempre retorna 42, independientemente del input.

## Análisis

Este problema introduce conceptos fundamentales de programación funcional en JavaScript/TypeScript:

1. **Funciones de orden superior**: La función `map` recibe otra función como parámetro
2. **Callback functions**: La función `fn` es ejecutada para cada elemento
3. **Inmutabilidad**: Se crea un nuevo array sin modificar el original
4. **Type safety**: Usando TypeScript para definir tipos de función

## Enfoque detallado

La solución implementada sigue un patrón clásico de transformación de arrays:

### Paso a paso:

1. **Inicialización**: Crear un array vacío `newArr` para almacenar los resultados

   ```typescript
   let newArr: number[] = [];
   ```

2. **Iteración**: Recorrer cada elemento del array original usando un bucle `for`

   ```typescript
   for (let i = 0; i < arr.length; i++) {
   ```

3. **Transformación**: Aplicar la función `fn` al elemento actual y su índice

   ```typescript
   fn(arr[i], i);
   ```

4. **Almacenamiento**: Agregar el resultado transformado al nuevo array

   ```typescript
   newArr.push(fn(arr[i], i));
   ```

5. **Retorno**: Devolver el nuevo array con todas las transformaciones

### Aspectos clave:

- **No mutación**: El array original permanece intacto
- **Flexibilidad**: La función `fn` puede usar tanto el valor como el índice
- **Simplicidad**: Implementación directa sin complejidades innecesarias

## Casos extremos

- Array vacío: debe retornar array vacío
- Array con un solo elemento
- Funciones que no usan el índice
- Funciones que solo usan el índice
- Números negativos y dentro de los límites de las restricciones

## Complejidad

- Time complexity: O(n) - iteramos una vez por cada elemento
- Space complexity: O(n) - creamos un nuevo array del mismo tamaño

## Conclusión

Este problema enseña conceptos fundamentales sobre:

1. **Programación funcional**: Cómo las funciones pueden ser tratadas como valores y pasadas como argumentos
2. **Inmutabilidad**: La importancia de crear nuevas estructuras de datos en lugar de modificar las existentes
3. **Abstracción**: Cómo crear funciones reutilizables que pueden trabajar con diferentes tipos de transformaciones
4. **Patrones de iteración**: La base de muchos métodos de array como `map`, `filter`, `reduce`

La implementación manual de `map` ayuda a entender internamente cómo funcionan estos métodos de alto nivel y prepara para conceptos más avanzados de programación funcional.

### Lecciones aprendidas:

- Los bucles `for` tradicionales son la base de muchas operaciones de array
- TypeScript nos ayuda a definir tipos de función claramente
- La separación entre datos (array) y comportamiento (función) hace el código más flexible y reutilizable
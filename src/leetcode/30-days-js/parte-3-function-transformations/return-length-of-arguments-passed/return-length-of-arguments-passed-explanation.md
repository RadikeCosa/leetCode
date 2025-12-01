---
title: "return-length-of-arguments-passed"
difficulty: "easy"
topics:
  - Rest Parameters
  - Arguments
  - Function
source: "leetcode"
series: "parte-3-function-transformations"
category: "30-days-js"
createdAt: "2025-08-28"
---

# Return Length of Arguments Passed

Implementar una función que retorne la cantidad de argumentos que se le pasan.

## Ejemplos

### Ejemplo 1:

- Input: `args = [5]`
- Output: `1`
- Explicación: `argumentsLength(5);` retorna 1 porque se pasó un valor

### Ejemplo 2:

- Input: `args = [{}, null, "3"]`
- Output: `3`
- Explicación: `argumentsLength({}, null, "3");` retorna 3 porque se pasaron tres valores

## Análisis

Este problema introduce el concepto de **rest parameters** en JavaScript/TypeScript. Los rest parameters permiten que una función acepte un número indefinido de argumentos como un array.

## Enfoque detallado

La solución utiliza la sintaxis de rest parameters (`...args`) para capturar todos los argumentos pasados a la función en un array, luego simplemente retorna la longitud de ese array.

### Codigo

```typescript
export function argumentsLength(...args: any[]): number {
  return args.length; // placeholder
}
```

## Casos extremos

- Sin argumentos (0)
- Un solo argumento
- Múltiples argumentos de diferentes tipos
- Argumentos con valores falsy (null, undefined, false, 0, "")
- Máximo de argumentos según constraints (100)

## Complejidad

- Time complexity: O(1) - operación de tiempo constante
- Space complexity: O(1) - no se usa espacio adicional más allá del array de argumentos

## Conclusión

Este problema enseña conceptos fundamentales de JavaScript como rest parameters y la flexibilidad de las funciones para aceptar múltiples argumentos.
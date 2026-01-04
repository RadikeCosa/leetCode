---
title: "function-composition"
difficulty: "easy"
topics:
  - Function Composition
  - Higher Order Function
  - Array
source: "leetcode"
series: "parte-3-function-transformations"
category: "30-days-js"
createdAt: "2025-08-28"
---

# Function Composition - Solución Completada

Implementar una función que tome un array de funciones y retorne una nueva función que sea la composición de todas ellas.

## Ejemplos

### Ejemplo 1:

- Input: `functions = [x => x + 1, x => x * x, x => 2 * x], x = 4`
- Output: `65`
- Explicación: La evaluación va de derecha a izquierda: 4 → 8 → 64 → 65

### Ejemplo 2:

- Input: `functions = [x => 10 * x, x => 10 * x, x => 10 * x], x = 1`
- Output: `1000`
- Explicación: 1 → 10 → 100 → 1000

### Ejemplo 3:

- Input: `functions = [], x = 42`
- Output: `42`
- Explicación: Array vacío retorna la función identidad

## Análisis

La composición de funciones es un concepto fundamental en programación funcional. El orden de evaluación es **de derecha a izquierda**, similar a la notación matemática f(g(h(x))).

## Enfoque detallado - Solución Implementada

### Paso a paso de la solución:

1. **Validación inicial**:

 ```typescript
 if (functions.length === 0) {
 return (x: number) => x; // Función identidad
 }
 ```

 - Detectamos el caso especial del array vacío
 - Retornamos explícitamente la función identidad

2. **Función de composición**:

 ```typescript
 return function (x: number): number {
 for (let i = functions.length - 1; i >= 0; i--) {
 x = functions[i](x);
 }
 return x;
 };
 ```

 - Retornamos una nueva función que encapsula la lógica
 - Usamos un for loop que va de derecha a izquierda
 - Acumulamos el resultado en la variable `x`

3. **Trace del Ejemplo 1**:
 - `functions = [x => x + 1, x => x * x, x => 2 * x]`, `x = 4`
 - **i=2**: `x = functions[2](4) = (2 * 4) = 8`
 - **i=1**: `x = functions[1](8) = (8 * 8) = 64`
 - **i=0**: `x = functions[0](64) = (64 + 1) = 65` ✅

### ¿Por qué funciona?

- **Orden matemático**: f(g(h(x))) requiere evaluar h primero, luego g, luego f
- **Índices del array**: [f, g, h] significa índice 2 = h, índice 1 = g, índice 0 = f
- **Loop hacia atrás**: `i = length-1` hasta `i = 0` respeta este orden

## Casos extremos

- Array vacío (función identidad) ✅
- Una sola función ✅
- Números negativos ✅
- Valores límite (-1000, 1000) ✅

## Complejidad

- Time complexity: O(n) - donde n es la cantidad de funciones
- Space complexity: O(1) - sin considerar el call stack

## Conclusión

Este problema introduce conceptos clave de programación funcional como composición y funciones de orden superior en JavaScript/TypeScript. La solución con for loop es clara, eficiente y fácil de entender, manejando correctamente todos los casos extremos.

**¡Ejercicio completado exitosamente!** 🎉
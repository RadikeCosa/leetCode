# Create Hello World Function

Write a function createHelloWorld. It should return a new function that always returns "Hello World".

## Ejemplos

- Input: args = []
- Output: "Hello World"
- Explanation: const f = createHelloWorld(); f(); // "Hello World"

- Input: args = [{},null,42]
- Output: "Hello World"
- Explanation: const f = createHelloWorld(); f({}, null, 42); // "Hello World"

## Análisis

Este problema introduce conceptos fundamentales de JavaScript:

1. **Higher-Order Functions**: Funciones que retornan otras funciones
2. **Closures**: La función interna mantiene acceso al contexto externo
3. **Rest Parameters**: Uso de `...args` para capturar argumentos variables
4. **Function Expressions**: Retornar una función anónima

La clave está en entender que necesitamos crear una "función factory" que produzca funciones con comportamiento fijo.

## Enfoque detallado

1. **Definir la función principal**: `createHelloWorld()` no toma parámetros
2. **Retornar una función**: La función retornada debe aceptar cualquier cantidad de argumentos
3. **Ignorar argumentos**: Sin importar qué se pase, siempre retornar "Hello World"
4. **Usar rest parameters**: `...args: any[]` permite flexibilidad total en argumentos

```typescript
export function createHelloWorld(): (...args: any[]) => string {
  return function (...args: any[]): string {
    return "Hello World";
  };
}
```

**Alternativas más concisas:**

```typescript
// Arrow function
export const createHelloWorld =
  () =>
  (...args: any[]) =>
    "Hello World";

// Función inmediatamente invocada
export const createHelloWorld = () => () => "Hello World";
```

## Casos extremos

- **Sin argumentos**: `f()` → "Hello World"
- **Múltiples argumentos**: `f(1, 2, 3)` → "Hello World"
- **Tipos mixtos**: `f({}, null, undefined, [])` → "Hello World"
- **Argumentos máximos**: Hasta 10 argumentos según constraints
- **Valores falsy**: `f(0, "", false, null)` → "Hello World"

## Complejidad

- **Time complexity**: O(1) - tiempo constante para crear y ejecutar la función
- **Space complexity**: O(1) - no se almacena información adicional

## Conclusión

Este problema enseña conceptos fundamentales de programación funcional en JavaScript:

- **Closures**: Mecanismo poderoso para mantener estado
- **Higher-order functions**: Patrón común en JavaScript moderno
- **Function factories**: Crear funciones con comportamiento específico
- **Inmutabilidad**: La función siempre retorna el mismo valor

Es un excelente problema de introducción a conceptos avanzados de JavaScript.

# Allow One Function Call - Solución Completada

Implementar una función que toma otra función y retorna una nueva función que solo puede ser ejecutada una vez.

## Ejemplos

### Ejemplo 1:

- Input: `fn = (a,b,c) => (a + b + c), calls = [[1,2,3],[2,3,6]]`
- Output: `[{"calls":1,"value":6}]`
- Explicación: Primera llamada retorna 6, segunda llamada retorna undefined

### Ejemplo 2:

- Input: `fn = (a,b,c) => (a * b * c), calls = [[5,7,4],[2,3,6],[4,6,8]]`
- Output: `[{"calls":1,"value":140}]`
- Explicación: Solo la primera llamada (5*7*4=140) se ejecuta, el resto retorna undefined

## Análisis

Este problema introduce el patrón **"once"** en programación funcional, donde una función puede ejecutarse máximo una vez. Es útil para:

- Inicialización que debe ocurrir solo una vez
- Eventos que deben dispararse una sola vez
- Prevenir múltiples ejecuciones accidentales
- Optimización de recursos costosos

## Enfoque detallado - Solución Implementada

### Paso a paso de la solución:

1. **Variable de estado**:

   ```typescript
   let called = false;
   ```

   - Flag booleano que rastrea si la función ya fue ejecutada
   - Utiliza closure para persistir entre llamadas

2. **Función wrapper**:

   ```typescript
   return function (...args: any[]): any {
     if (!called) {
       called = true; // ⭐ CRUCIAL: marcar como llamada
       return fn(...args); // Ejecutar función original
     }
     return undefined; // Llamadas subsecuentes
   };
   ```

3. **Lógica de ejecución**:
   - **Primera llamada**: `called = false` → ejecuta función → marca `called = true`
   - **Llamadas subsecuentes**: `called = true` → retorna `undefined`

### ⚠️ **Error común evitado:**

```typescript
// ❌ INCORRECTO - función se ejecuta siempre
if (!called) {
  let result = fn(...args);
  return result;
  // called nunca se marca como true
}

// ✅ CORRECTO - marca el estado antes de retornar
if (!called) {
  called = true; // Marca ANTES del return
  return fn(...args);
}
```

## Casos extremos

- Sin argumentos (0) ✅
- Un solo argumento ✅
- Múltiples argumentos de diferentes tipos ✅
- Función que retorna valores falsy (0, false, null, undefined) ✅
- Función que retorna objetos complejos ✅
- Múltiples llamadas consecutivas ✅

## Complejidad

- Time complexity: O(1) - verificación de estado constante
- Space complexity: O(1) - solo almacena una bandera booleana

## Conclusión

Este problema enseña conceptos importantes de JavaScript como closures, state management, y patrones funcionales para controlar la ejecución de funciones. La clave del éxito está en **marcar correctamente el estado** antes de retornar el resultado.

**¡Ejercicio completado exitosamente!** 🎉

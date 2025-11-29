# Timeout Cancellation

## Descripción del Problema

**LeetCode Problem 2715: Timeout Cancellation**

- **Dificultad:** Easy
- **Temas:** JavaScript, Programación Asíncrona, Closures, setTimeout

### Enunciado

Dada una función `fn`, un array de argumentos `args`, y un timeout `t` en milisegundos, retorna una función de cancelación `cancelFn`.

Después de un retraso de `cancelTimeMs`, la función de cancelación retornada `cancelFn` será invocada.

Inicialmente, la ejecución de la función `fn` debe ser retrasada por `t` milisegundos.

Si, antes del retraso de `t` milisegundos, la función `cancelFn` es invocada, debe cancelar la ejecución retrasada de `fn`. De lo contrario, si `cancelFn` no es invocada dentro del retraso especificado `t`, `fn` debe ser ejecutada con los `args` proporcionados como argumentos.

### Ejemplos

**Ejemplo 1:**

```typescript
Input: (fn = (x) => x * 5), (args = [2]), (t = 20);
Output: [{ time: 20, returned: 10 }];
```

**Ejemplo 2:**

```typescript
Input: (fn = (x) => x ** 2), (args = [2]), (t = 100);
Output: [];
```

**Ejemplo 3:**

```typescript
Input: (fn = (x1, x2) => x1 * x2), (args = [2, 4]), (t = 30);
Output: [{ time: 30, returned: 8 }];
```

### Restricciones

- `fn` es una función
- `args` es un array JSON válido
- `1 <= args.length <= 10`
- `20 <= t <= 1000`
- `10 <= cancelTimeMs <= 1000`

## Enfoque y Análisis

### Pregunta Clave Resuelta

¿Qué observas en los ejemplos? ¿Cuándo se ejecuta la función y cuándo no?

**Respuesta:** La función se ejecuta si el tiempo de cancelación (`cancelTimeMs`) es **mayor** que el tiempo de ejecución (`t`). Si la cancelación ocurre antes, la función no se ejecuta.

### Conceptos Clave Aplicados

1. **setTimeout y clearTimeout**

   - `setTimeout` programa la ejecución de una función después de un retraso
   - `clearTimeout` cancela una ejecución programada usando el timer ID
   - El patrón: guardar el ID y usarlo para cancelar

2. **Closures**

   - La función de cancelación necesita acceso al timer ID
   - El `timerId` queda "capturado" en el closure de la función retornada

3. **Timing y Race Conditions**
   - El orden de los eventos determina si la función se ejecuta o se cancela
   - JavaScript maneja automáticamente la concurrencia

## Análisis de Complejidad

### Complejidad Temporal: O(1)

- Crear el timeout: O(1)
- Cancelar el timeout: O(1)

### Complejidad Espacial: O(1)

- Solo almacenamos el ID del timeout

## Implementación Final

```typescript
export function cancellable(fn: Fn, args: JSONValue[], t: number): Function {
  const timerId = setTimeout(() => {
    fn(...args);
  }, t);

  return () => {
    clearTimeout(timerId);
  };
}
```

### Explicación Paso a Paso:

1. **`setTimeout(() => { fn(...args); }, t)`**

   - Programa la ejecución de `fn` con `args` después de `t` milisegundos
   - `...args` usa spread operator para pasar los argumentos correctamente

2. **`const timerId = setTimeout(...)`**

   - Guarda el ID único del timer para poder cancelarlo después
   - Este ID es crucial para la cancelación

3. **`return () => { clearTimeout(timerId); }`**
   - Retorna una función que puede cancelar la ejecución programada
   - Usa closure para acceder al `timerId`

### ¿Por qué Funciona?

- **Si NO se cancela:** Después de `t` ms, se ejecuta `fn(...args)` automáticamente
- **Si SÍ se cancela:** `clearTimeout(timerId)` elimina la tarea programada antes de que se ejecute
- **Race condition:** El que llegue primero (tiempo `t` o cancelación) determina el resultado

## Pruebas y Casos Edge

### Casos de Prueba Resueltos

1. **✅ Cancelación después del timeout** - la función se ejecuta
   - Ejemplo: `t = 20ms`, `cancelTimeMs = 50ms` → Función se ejecuta en 20ms
2. **✅ Cancelación antes del timeout** - la función no se ejecuta
   - Ejemplo: `t = 100ms`, `cancelTimeMs = 50ms` → Función cancelada antes de ejecutarse
3. **✅ Múltiples argumentos** - verificar que los argumentos se pasan correctamente
   - Spread operator `...args` maneja cualquier cantidad de argumentos

### Casos Edge Manejados

1. **✅ Cancelación inmediata** - Funciona correctamente con timing muy corto
2. **✅ Race conditions** - JavaScript maneja el timing automáticamente
3. **✅ Diferentes tipos de retorno** - La función maneja cualquier tipo de función

## Patrones Relacionados

- Debouncing y Throttling
- Promise cancellation
- AbortController patterns

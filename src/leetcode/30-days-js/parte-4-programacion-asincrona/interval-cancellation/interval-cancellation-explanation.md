---
title: "interval-cancellation"
difficulty: "medium"
topics:
  - Interval
  - Timer
  - Closure
  - Async
source: "leetcode"
series: "parte-4-programacion-asincrona"
category: "30-days-js"
createdAt: "2025-09-12"
---

# Problema: Interval Cancellation (LeetCode 2725)

## Descripción del Problema

Dada una función `fn`, un array de argumentos `args`, y un tiempo de intervalo `t`, retornar una función de cancelación `cancelFn`.

La función `fn` debe ser llamada con `args` inmediatamente y luego llamada nuevamente cada `t` milisegundos hasta que `cancelFn` sea llamada.

## Análisis

### Comprensión del Problema

Este problema combina tres conceptos fundamentales de JavaScript:

1. **Ejecución inmediata**: La función se ejecuta al momento de llamar `cancellable`
2. **Repetición periódica**: La función se ejecuta cada `t` milisegundos usando `setInterval`
3. **Cancelación**: Debe ser posible detener las ejecuciones futuras

### Casos de Ejemplo

**Ejemplo 1:**

- Input: `fn = (x1, x2) => x1 * x2`, `args = [2, 5]`, `t = 30`, `cancelT = 165`
- La función se ejecuta inmediatamente: `2 * 5 = 10`
- Se ejecuta cada 30ms: en t=30, t=60, t=90, t=120, t=150
- Se cancela en t=165, por lo que no hay más ejecuciones

**Ejemplo 2:**

- Input: `fn = (x1) => x1 ** 2`, `args = [2]`, `t = 100`, `cancelT = 50`
- La función se ejecuta inmediatamente: `2 ** 2 = 4`
- Se cancela en t=50, antes del primer intervalo (t=100)
- Solo hay una ejecución

### Restricciones Importantes

- `fn` es una función válida que acepta argumentos de tipo `JSONValue`

## Enfoque de Solución

### Estrategia

La estrategia es diferente al problema "Timeout Cancellation" porque aquí necesitamos:

1. **Ejecución inmediata**: No esperar el primer intervalo
2. **Repetición**: Usar `setInterval` para ejecuciones periódicas
3. **Cancelación**: Usar `clearInterval` para detener futuras ejecuciones

### Algoritmo

1. Ejecutar `fn(...args)` inmediatamente
2. Configurar `setInterval(() => fn(...args), t)` para repetición
3. Guardar el ID del intervalo para poder cancelarlo
4. Retornar función que llame `clearInterval(intervalId)`

### Implementación

```typescript
function cancellable(fn: Fn, args: JSONValue[], t: number): Function {
  // Ejecutar inmediatamente
  fn(...args);

  // Configurar repetición cada t milisegundos
  const intervalId = setInterval(() => {
    fn(...args);
  }, t);

  // Retornar función de cancelación
  return () => {
    clearInterval(intervalId);
  };
}
```

**Puntos clave:**

- **Ejecución inmediata**: `fn(...args)` antes de configurar el intervalo
- **Closure**: `intervalId` está capturado en el scope para la función de cancelación
- **Separación de responsabilidades**: Ejecución inmediata vs. repetición periódica

## Análisis de Complejidad

### Complejidad Temporal

- **Configuración**: O(1) - operaciones constantes
- **Por ejecución**: O(f) donde f es la complejidad de `fn`
- **Cancelación**: O(1) - `clearInterval` es operación constante

### Complejidad Espacial

- **O(1)** - Solo almacenamos el `intervalId` y la función de cancelación
- No depende del número de ejecuciones futuras

## Casos Edge

### Cancelación Inmediata

Si `cancelT < t`, solo se ejecuta la función una vez (inmediatamente):

```typescript
// cancelT = 50, t = 100
// Solo ejecución en t=0, cancelación antes de t=100
```

### Intervalos Muy Pequeños

Con `t = 10` (mínimo), la función se ejecuta cada 10ms hasta la cancelación.

### Funciones con Efectos Secundarios

La función puede modificar estado externo en cada ejecución:

```typescript
let counter = 0;
const fn = () => ++counter;
// counter se incrementa en cada ejecución
```

## Aprendizajes Clave

### Diferencias con Timeout Cancellation

- **Timeout**: Una sola ejecución retrasada
- **Interval**: Ejecución inmediata + repeticiones periódicas

### Gestión de Timers

- `setInterval` vs `setTimeout` para diferentes patrones de timing
- Importancia de `clearInterval` para evitar memory leaks
- Los IDs de timer son únicos y necesarios para cancelación

### Patrones de Closure

- Capturar variables del scope externo para funciones de cancelación
- El `intervalId` debe estar disponible cuando se llame la función de cancelación

### Programación Asíncrona

- Coordinación entre ejecución inmediata y repeticiones
- Manejo de condiciones de carrera entre ejecución y cancelación
- Timing preciso con milisegundos
---
name: promise-time-limit
difficulty: medium
category: 30-days-js
topics: [Promise, Timeout, Async, Race Condition]
source: leetcode
series: parte-4-programacion-asincrona
createdAt: 2025-09-13
---

# Problema: Promise Time Limit (LeetCode 2637)

## Descripción del Problema

Dada una función asíncrona `fn` y un tiempo `t` en milisegundos, retornar una nueva versión con límite de tiempo de la función de entrada. `fn` toma argumentos proporcionados a la función con límite de tiempo.

La función con límite de tiempo debe seguir estas reglas:

- Si `fn` se completa dentro del límite de tiempo de `t` milisegundos, la función con límite de tiempo debe resolver con el resultado
- Si la ejecución de `fn` excede el límite de tiempo, la función con límite de tiempo debe rechazar con el string `"Time Limit Exceeded"`

## Análisis

### Comprensión del Problema

Este problema introduce el concepto de **race conditions** entre:

1. **Ejecución de la función**: `fn(...args)` que puede tomar tiempo variable
2. **Timer de timeout**: Un timeout que rechaza después de `t` milisegundos
3. **El primero que complete determina el resultado**

### Casos de Ejemplo

**Ejemplo 1 - Timeout excedido:**

- `fn` toma 100ms para completarse
- Límite de tiempo: 50ms
- Resultado: Rechaza con "Time Limit Exceeded" en t=50ms

**Ejemplo 2 - Función completa a tiempo:**

- `fn` toma 100ms para completarse
- Límite de tiempo: 150ms
- Resultado: Resuelve con el valor de la función en t=100ms

**Ejemplo 3 - Múltiples argumentos:**

- `fn(5, 10)` toma 120ms
- Límite de tiempo: 150ms
- Resultado: Resuelve con `15` en t=120ms

**Ejemplo 4 - Error inmediato:**

- `fn` lanza error inmediatamente
- Resultado: Rechaza con el error original

### Restricciones Importantes

- `0 <= inputs.length <= 10` (función puede no tener argumentos)
- `0 <= t <= 1000` (timeout entre 0ms y 1 segundo)
- `fn` retorna una Promise

## Enfoque de Solución

### Estrategia

Necesitamos crear una **carrera (race)** entre dos Promise:

1. **Promise original**: `fn(...args)`
2. **Promise de timeout**: Se rechaza después de `t` milisegundos

El primero que se resuelva o rechace determina el resultado final.

### Algoritmo

1. Crear una Promise de timeout que rechace con "Time Limit Exceeded" después de `t` ms
2. Usar `Promise.race()` entre la función original y el timeout
3. El primer resultado (resolución o rechazo) será el resultado final

### Implementación

```typescript
function timeLimit(fn: Fn, t: number): Fn {
  return async function (...args) {
    // Promise de timeout
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject("Time Limit Exceeded"), t);
    });

    // Race entre función original y timeout
    return Promise.race([fn(...args), timeoutPromise]);
  };
}
```

**Puntos clave:**

- **Promise.race()**: El primer Promise que se resuelva/rechace gana
- **Timeout Promise**: Solo rechaza, nunca resuelve
- **Preservación de argumentos**: `...args` mantiene la flexibilidad de argumentos

## Análisis de Complejidad

### Complejidad Temporal

- **Configuración**: O(1) - operaciones constantes
- **Ejecución**: O(f) donde f es la complejidad de `fn`, limitada por `t`
- **Race condition**: O(1) - `Promise.race` es operación constante

### Complejidad Espacial

- **O(1)** - Solo creamos una Promise adicional para el timeout
- No depende del número de argumentos o tiempo de ejecución

## Casos Edge

### Timeout de 0ms

```typescript
const limited = timeLimit(fn, 0);
// Siempre rechaza inmediatamente con "Time Limit Exceeded"
```

### Función que resuelve inmediatamente

```typescript
const fn = async (x) => x; // Sin delay
// Siempre resuelve con el valor, independientemente del timeout
```

### Función que lanza error inmediatamente

```typescript
const fn = async () => {
  throw "Error";
};
// El error original se propaga, no el timeout
```

### Múltiples argumentos y sin argumentos

```typescript
timeLimit(fn, 100)(5, 10, "test"); // Múltiples argumentos
timeLimit(fn, 100)(); // Sin argumentos
```

## Aprendizajes Clave

### Promise.race() Pattern

- Útil para timeout patterns
- El primer Promise que complete determina el resultado
- Otros Promise continúan ejecutándose pero se ignoran

### Timeout con Promises

- `setTimeout` + Promise constructor para crear timeouts
- Pattern común en programación asíncrona
- Importante para evitar operaciones que se cuelguen

### Race Conditions Controladas

- A diferencia de race conditions no deseadas, aquí es intencional
- El timing determina el comportamiento
- Útil para operaciones con límites de tiempo

### Error Handling en Promises

- Errores de la función original se propagan
- Timeout genera su propio tipo de error
- `Promise.race` preserva el tipo de error del ganador

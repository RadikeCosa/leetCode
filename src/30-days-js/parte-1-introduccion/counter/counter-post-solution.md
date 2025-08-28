# Intuition

Al ver este problema, inmediatamente identifiqué que necesitaba **mantener estado entre llamadas de función**. Esto grita "closures" en JavaScript. El reto era entender exactamente cuándo incrementar: ¿antes o después de retornar el valor?

Los ejemplos dejaron claro el patrón:

- Primera llamada: retorna `n` (valor inicial)
- Siguientes llamadas: retorna `n+1, n+2, n+3...`

Esto significa que debo retornar el valor actual y luego preparar el siguiente valor para la próxima llamada.

# Approach

Mi proceso de solución fue evolutivo:

## Solución 1: Enfoque Explícito (Didáctico)

Primero implementé una versión explícita para entender claramente el mecanismo:

```typescript
export function createCounter(n: number): () => number {
  let currentValue = n;
  return function (): number {
    const returnValue = currentValue; // Guardo el valor a retornar
    currentValue++; // Incremento para la próxima llamada
    return returnValue; // Retorno el valor guardado
  };
}
```

Esta versión me ayudó a entender el patrón **post-incremento manual**: guardar primero, incrementar después.

## Solución 2: Enfoque Conciso (Definitiva)

Después descubrí que JavaScript tiene un operador que hace exactamente esto:

```typescript
export function createCounter(n: number): () => number {
  return function (): number {
    return n++; // Post-incremento: retorna n actual, luego incrementa
  };
}
```

**El operador `n++` hace automáticamente:**

1. Evalúa el valor actual de `n`
2. Retorna ese valor
3. Incrementa `n` en 1

## Análisis del mecanismo:

**Closure mechanism:**

- La variable `n` vive en el scope de `createCounter`
- La función interna "captura" una referencia a `n`
- Aunque `createCounter` termine, `n` persiste porque la función interna lo referencia
- Cada llamada a `createCounter` crea un `n` independiente

**Post vs Pre incremento:**

```typescript
let x = 5;
console.log(x++); // Retorna 5, luego x = 6 ✅ (queremos esto)
console.log(++x); // Incrementa a 7, retorna 7 ❌ (no queremos esto)
```

# Complexity

- **Time complexity**: O(1) - Cada llamada al contador es una operación de tiempo constante
- **Space complexity**: O(1) - Solo almacena el valor actual del contador en el closure

No hay estructuras de datos adicionales, solo una variable primitiva mantenida por el closure.

# Code

```ts
export function createCounter(n: number): () => number {
  return function (): number {
    return n++;
  };
}
```

**Alternativa explícita (equivalente):**

```ts
export function createCounter(n: number): () => number {
  let currentValue = n;
  return function (): number {
    const returnValue = currentValue;
    currentValue++;
    return returnValue;
  };
}
```

# Notes

- **Edge cases**: La solución maneja automáticamente valores negativos, cero, y límites de enteros
- **Independent instances**: Cada llamada a `createCounter()` crea un estado completamente independiente
- **Memory management**: El closure mantiene `n` en memoria mientras la función retornada exista
- **JavaScript idioms**: El operador `++` es idiomático para este tipo de problemas
- **Alternative approaches**: Se podría usar un objeto con una propiedad, pero el closure es más elegante

**Conceptos JavaScript dominados:**

- Closures con estado mutable
- Diferencias entre post-incremento (`n++`) y pre-incremento (`++n`)
- Function factories y estado independiente
- Persistent state sin clases

**¿Por qué esta solución es elegante?**

- Aprovecha las características nativas de JavaScript
- Minimal cognitive overhead
- Una línea de lógica que expresa perfectamente la intención
- Demuestra comprensión profunda del lenguaje

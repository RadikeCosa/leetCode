---
title: "counter"
difficulty: "easy"
topics:
  - Closure
  - Function Factory
  - State Management
source: "leetcode"
series: "parte-1-introduccion"
category: "30-days-js"
createdAt: "2025-12-01"
---

# Counter

Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

## Ejemplos

- Input: n = 10, calls = ["call","call","call"]
- Output: [10,11,12]
- Explanation: counter() = 10, counter() = 11, counter() = 12

- Input: n = -2, calls = ["call","call","call","call","call"]

## Análisis

1. **Closures con estado mutable**: La función interna modifica variables del scope externo
2. **Post-incremento (`++`)**: Operador que retorna el valor actual y luego incrementa
3. **Persistencia de estado**: El valor se mantiene entre múltiples llamadas
4. **Function factories**: Crear múltiples contadores independientes

La clave está en entender que necesitamos **mantener estado** entre llamadas de función, algo que los closures de JavaScript manejan perfectamente.

## Enfoque detallado

### Solución 1: Explícita (Didáctica)

```typescript
export function createCounter(n: number): () => number {
  let currentValue = n;
  return function (): number {
    const returnValue = currentValue; // Guarda el valor actual
    currentValue++; // Incrementa para la próxima llamada
    return returnValue; // Retorna el valor guardado
  };
}
```

**Ventajas:**

- ✅ **Claridad**: Cada paso es explícito y fácil de entender
- ✅ **Debugging**: Fácil colocar breakpoints y ver el flujo
- ✅ **Didáctico**: Muestra claramente el patrón post-incremento

### Solución 2: Concisa (Definitiva)

return function (): number {
return n++; // Post-incremento: retorna n, luego incrementa
};
}

```

**Ventajas:**

- ✅ **Concisión**: Una sola línea de lógica
- ✅ **Idiomático**: Uso correcto del operador post-incremento
- ✅ **Eficiencia**: Menos variables temporales

### Comparación de operadores:

// Post-incremento: retorna ANTES de incrementar
console.log(x++); // → 5, luego x = 6

// Pre-incremento: incrementa ANTES de retornar
x = 5;
console.log(++x); // → 6, x = 6

// ¿Por qué ++n no funciona para este problema?
// Porque retornaría n+1 en la primera llamada (11 en lugar de 10)
```

### Trazando la ejecución:

Para `createCounter(10)`:

| Llamada | Estado interno | `n++` evalúa | Retorna | n después |
|

- | -------------- | ------------ | ------- | --------- |
| 1ª      | n = 10         | 10           | 10      | n = 11    |
| 2ª      | n = 11         | 11           | 11      | n = 12    |
| 3ª      | n = 12         | 12           | 12      | n = 13    |

### Mecanismo de Closure:

```typescript
function createCounter(n: number) {
  // n vive en este scope
  return function () {
    // Esta función "cierra" sobre n
    return n++; // Puede leer y modificar n
  };
} // El scope no se destruye porque la función interna lo referencia
```

## Casos extremos

- **Valores negativos**: `createCounter(-2)` → [-2, -1, 0, 1, 2...]
- **Cero**: `createCounter(0)` → [0, 1, 2, 3...]
- **Valores límite**: `createCounter(1000)` funciona correctamente
- **Múltiples instancias**: Cada contador mantiene su propio estado independiente
- **Sin llamadas**: La función se crea pero no se ejecuta hasta ser invocada
- **Memoria persistente**: El closure mantiene la variable `n` en memoria mientras la función exista

## Conclusión

1. **Closures mutables**: Modificar estado del scope externo
2. **Post vs Pre incremento**: Diferencias críticas en el orden de operaciones
3. **Persistent state**: Mantener información entre llamadas de función
4. **Function factories**: Crear múltiples instancias independientes

**Lecciones clave:**

- Los closures pueden mantener y modificar estado
- El operador `++` tiene dos formas con comportamientos diferentes
- JavaScript permite crear funciones "stateful" sin clases
- La simplicidad no siempre significa menos poder
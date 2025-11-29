---
name: add-two-promises
difficulty: easy
category: 30-days-js
topics: [Promise, Async/Await, Concurrency]
source: leetcode
series: parte-4-programacion-asincrona
createdAt: 2025-09-10
---

# Add Two Promises

Dado dos promesas promise1 y promise2, retorna una nueva promesa. promise1 y promise2 se resolverán con un número. La promesa retornada debe resolverse con la suma de los dos números.

## Ejemplos

**Ejemplo 1:**

- Input:
  - promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20))
  - promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60))
- Output: 7
- Explicación: Las dos promesas de entrada se resuelven con los valores 2 y 5 respectivamente. La promesa retornada debe resolverse con 2 + 5 = 7.

**Ejemplo 2:**

- Input:
  - promise1 = new Promise(resolve => setTimeout(() => resolve(10), 50))
  - promise2 = new Promise(resolve => setTimeout(() => resolve(-12), 30))
- Output: -2
- Explicación: Las dos promesas se resuelven con 10 y -12, la suma es 10 + (-12) = -2.

## Análisis

Este problema introduce conceptos fundamentales de **programación asíncrona** en JavaScript:

1. **Promises (Promesas)**: Objetos que representan la eventual finalización (o falla) de una operación asíncrona
2. **Async/Await**: Sintaxis moderna para trabajar con promesas de manera más legible
3. **Promise.all()**: Método para esperar múltiples promesas concurrentemente

**¿Qué observas en los ejemplos?**

- Ambas promesas tienen diferentes tiempos de resolución
- Los valores pueden ser positivos o negativos
- Necesitamos esperar a que AMBAS promesas se resuelvan antes de sumar

**Patrones identificados:**

- Operación asíncrona que depende de múltiples fuentes
- Sincronización de promesas concurrentes
- Transformación de datos una vez disponibles

## Enfoque detallado - Solución Implementada

### Paso a paso de la solución:

1. **Declarar función async**: La función debe ser `async` para poder usar `await`
2. **Esperar primera promesa**: `const valor1 = await promise1;`
3. **Esperar segunda promesa**: `const valor2 = await promise2;`
4. **Retornar suma**: `return valor1 + valor2;`

### Solución elegida: async/await secuencial

```typescript
export async function addTwoPromises(
  promise1: Promise<number>,
  promise2: Promise<number>
): Promise<number> {
  const valor1 = await promise1;
  const valor2 = await promise2;
  return valor1 + valor2;
}
```

### ¿Por qué funciona?

1. **Función async**: Automáticamente envuelve el valor retornado en una `Promise`
2. **await secuencial**: Espera a que cada promesa se resuelva antes de continuar
3. **Simplicidad**: Código legible y fácil de entender
4. **Manejo automático**: TypeScript/JavaScript maneja el wrapping de la promesa

### Alternativa: Promise.all() concurrente

```typescript
export async function addTwoPromises(
  promise1: Promise<number>,
  promise2: Promise<number>
): Promise<number> {
  const [valor1, valor2] = await Promise.all([promise1, promise2]);
  return valor1 + valor2;
}
```

### Comparación de enfoques:

| Aspecto         | Secuencial (await)            | Concurrente (Promise.all)              |
| --------------- | ----------------------------- | -------------------------------------- |
| **Tiempo**      | promise1_time + promise2_time | Math.max(promise1_time, promise2_time) |
| **Legibilidad** | ⭐⭐⭐⭐⭐                    | ⭐⭐⭐⭐                               |
| **Eficiencia**  | ⭐⭐⭐                        | ⭐⭐⭐⭐⭐                             |
| **Simplicidad** | ⭐⭐⭐⭐⭐                    | ⭐⭐⭐⭐                               |

**Para este problema**: Ambos enfoques son válidos. La diferencia de rendimiento es mínima para casos simples.

## Casos extremos

- Números positivos ✓
- Números negativos ✓
- Cero como valor ✓
- Números decimales ✓
- Promesas que se resuelven inmediatamente ✓
- Diferentes tiempos de resolución ✓

## Complejidad

- **Time complexity: O(1)** - Una vez que ambas promesas se resuelven, la suma es una operación constante
- **Space complexity: O(1)** - Solo almacenamos dos variables numéricas

_Nota: La complejidad temporal no considera el tiempo de resolución de las promesas, ya que esto depende de factores externos (red, timers, etc.)_

## Conclusión

Este problema enseña conceptos fundamentales de **programación asíncrona en JavaScript**:

1. **Promises y async/await**: Manejo moderno de operaciones asíncronas
2. **Composición de promesas**: Cómo combinar múltiples operaciones asíncronas
3. **TypeScript con promesas**: Tipado fuerte para operaciones asíncronas

**Lecciones aprendidas:**

- Las funciones `async` automáticamente retornan `Promise`
- `await` pausa la ejecución hasta que la promesa se resuelve
- Ambos enfoques (secuencial vs concurrente) son válidos según el contexto
- El manejo de errores es importante en aplicaciones reales (aunque no requerido aquí)

**¡Ejercicio completado exitosamente!** 🎉

**Próximos pasos**: Explorar `Promise.all()`, manejo de errores con `try/catch`, y patrones más avanzados de programación asíncrona.

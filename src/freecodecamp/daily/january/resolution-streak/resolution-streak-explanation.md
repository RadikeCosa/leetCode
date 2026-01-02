---
title: Resolution Streak
source: freecodecamp
series: daily
category: january
createdAt: 2026-01-01
difficulty: easy
topics:
  - arrays
  - iteration
  - input-validation
blogLink: https://blog-astro-rouge.vercel.app/posts/resolution-streak/
problemLink: https://www.freecodecamp.org/learn/daily-coding-challenge/2026-01-01/
---

## Resolution Streak - Análisis y Explicación

## Enunciado del Problema

Dado un array de arrays, donde cada sub-array representa un dia de tus actividades que te propusiste y contiene 3 enteros: El numero de pasos que caminaste ese dia, el numero de minutos de pantalla que pasaste ese dia y el numero de paginas que leiste, determina si estas manteniendo tus actividades diarias segun lo planeado.

- El primer sub array es dia 1, el segundo es dia 2, y asi sucesivamente.

Un dia es considerado exitoso si las tres de las siguinentes metas estan cumplidas:

- Caminaste al menos 10,000 pasos.
- Tuviste no mas de 120 minutos de tiempo de pantalla.
- Leiste al menos 5 paginas.

So tpdps ñps doas dados son exitosos retorna "Resolution on track: n day streak." donde n es el numero de dias exitosos.

Si uno o mas dias no son exitosos, retorna "Resolution failed on day x: N day streak." donde x es el dia de la primera falla y N es el numero de dias exitosos antes de la falla.

## Análisis Inicial

### Comprensión del Problema

Se recibe una lista de días; cada día es un array con tres enteros: `[steps, screenTime, pagesRead]`.
Hay que comprobar día a día si se cumplen las tres metas (al menos 10000 pasos, como máximo 120 minutos de pantalla y al menos 5 páginas leídas).
Si todos los días dados son exitosos, devolver "Resolution on track: N day streak."; si no, devolver la primera falla con el número de días exitosos antes de esa falla.

### Casos de Prueba Identificados

1. Todos los días cumplen las metas → "Resolution on track: N day streak.".
2. Hay una primera falla en el día X → "Resolution failed on day X: M day streak.", donde M son los días exitosos antes de X.
3. Entrada vacía → "Resolution on track: 0 day streak." (ningún día falló).
4. Valores no numéricos o estructura inválida → lanzar `TypeError` (validación de entrada).

## Desarrollo de la Solución

### Enfoque Elegido

Recorrer la lista de días secuencialmente, mantener un contador de días exitosos y, en el primer día que no cumpla las tres condiciones, devolver el mensaje de fallo con el índice correcto. Si se completa el recorrido sin fallos, devolver el mensaje de éxito con el contador.

La solución es determinista y lineal en el número de días, sin estructuras auxiliares complejas.

### Implementación Paso a Paso

1. Validar que `days` es un array.
2. Para cada elemento, validar que es un array con al menos 3 valores y convertirlos a números.
3. Comprobar las tres condiciones para determinar si el día es exitoso.
4. Si un día falla, devolver inmediatamente el mensaje con el día (1-based) y el streak hasta ese punto.
5. Si se recorren todos los días sin fallos, devolver mensaje de "on track" con el total de días exitosos.

### Implementación (Código)

```javascript
/**
 * FreeCodeCamp Problem: Resolution Streak
 * Category: FreeCodeCamp
 *
 * @param {array[]} days - An array of arrays, where each sub-array represents a day of resolution activities.
 * @returns {string} A message indicating the resolution streak status.
 */
function resolutionStreak(days) {
  // Validate top-level input: expect an array of days
  if (!Array.isArray(days)) {
    throw new TypeError("Expected an array of day arrays");
  }

  // Counter for consecutive successful days processed so far
  let successfulDays = 0;

  // Iterate through each day (0-based index i, but messages use 1-based day numbers)
  for (let i = 0; i < days.length; i++) {
    const day = days[i];

    // Each day must be an array with at least three entries
    if (!Array.isArray(day) || day.length < 3) {
      throw new TypeError(
        `Invalid day at index ${i}: expected [steps, screenTime, pagesRead]`
      );
    }

    // Convert values to numbers in case they're strings; destructure into meaningful names
    const [steps, screenTime, pagesRead] = day.map(Number);

    // Ensure converted values are finite numbers
    if (
      !Number.isFinite(steps) ||
      !Number.isFinite(screenTime) ||
      !Number.isFinite(pagesRead)
    ) {
      throw new TypeError(`Invalid numeric values on day ${i + 1}`);
    }

    // Check the three success conditions for the day:
    // - at least 10,000 steps
    // - at most 120 minutes of screen time
    // - at least 5 pages read
    if (steps >= 10000 && screenTime <= 120 && pagesRead >= 5) {
      // Day is successful: increment the streak counter and continue
      successfulDays++;
    } else {
      // First failed day: return failure message including the day number (1-based)
      // and the number of successful days before this failure
      return `Resolution failed on day ${i + 1}: ${successfulDays} day streak.`;
    }
  }

  // All days were successful: return the on-track message with total successful days
  return `Resolution on track: ${successfulDays} day streak.`;
}

export default resolutionStreak;
```

## Análisis de Complejidad

### Complejidad Temporal

La complejidad temporal es O(n), donde n es el número de días, porque se procesa cada día una sola vez.

### Complejidad Espacial

La complejidad espacial es O(1) adicional: solo se usan variables escalares (`successfulDays`, índices y valores temporales).

## Casos Edge y Consideraciones

- Si `days` está vacío devuelve "Resolution on track: 0 day streak.".
- Si la estructura de `days` no es la esperada (no es un array de arrays de 3 números) la función lanza `TypeError`.
- Se realiza conversión con `Number()` para aceptar valores numéricos en forma de string: si la conversión no produce un número finito, se considera inválido.

## Reflexiones y Aprendizajes

### Conceptos Aplicados

- Recorrido secuencial (pattern: early exit) para detener la ejecución ante la primera falla.
- Validación de entrada para hacer la función más robusta y explícita sobre errores.

### Posibles Optimizaciones

La solución ya es óptima en tiempo y espacio para el problema planteado. Si existiera una definición distinta de "streak" (por ejemplo, contar la máxima racha consecutiva en un array grande), se requeriría una estrategia diferente.

## Recursos y Referencias

- FreeCodeCamp Daily Coding Challenge (problem source)
- Patrones: early-exit, validación de entrada

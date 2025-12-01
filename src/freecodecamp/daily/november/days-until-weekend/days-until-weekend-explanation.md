---
title: "Days Until Weekend"
difficulty: "easy"
topics:
  - String
  - Math
  - Hash Table
  - Validation
source: "freecodecamp"
series: "daily"
category: "daily"
createdAt: "2025-11-15"
---

# Days Until Weekend - Análisis y Explicación

## Enunciado del Problema

The weekend starts on Saturday.
If the given date is Saturday or Sunday, return "It's the weekend!".
Otherwise, return "X days until the weekend.", where X is the number of days until Saturday.
If X is 1, use "day" (singular) instead of "days" (plural).
Make sure the calculation ignores your local timezone.

## Test Cases

Completé los test a partir de los test que muestra fcc para cumplir el enunciado.

1. daysUntilWeekend("2025-11-14") should return "1 day until the weekend.".
2. daysUntilWeekend("2025-01-01") should return "3 days until the weekend.".
3. daysUntilWeekend("2025-12-06") should return "It's the weekend!".
4. daysUntilWeekend("2026-01-27") should return "4 days until the weekend.".
5. daysUntilWeekend("2026-09-07") should return "5 days until the weekend.".
6. daysUntilWeekend("2026-11-29") should return "It's the weekend!".

## Análisis Inicial

### Comprensión del Problema

La función debe calcular cuántos días faltan para que llegue el fin de semana (sábado) a partir de una fecha dada. Si la fecha es sábado o domingo, debe retornar "It's the weekend!". Si no, debe retornar un mensaje indicando cuántos días faltan para el fin de semana, usando "day" en singular si falta un día, o "days" en plural si faltan más.
Para esto mi primer intuicion es crear un objeto Date con la fecha dada y obtener el dia de la semana con getUTCDay(), que devuelve un numero del 0 al 6, siendo 0 domingo y 6 sabado.
A partir de obtener el dia de la semana, puedo calcular cuantos dias faltan para el sabado (6).
y con el dato de cuantos dias faltan con un operador ternario puedo retornar el string correspondiente.

## Desarrollo de la Solución

### Enfoque Elegido

La estrategia utilizada se basa en aprovechar la función getUTCDay() del objeto Date para obtener el día de la semana en formato UTC, lo que evita problemas con zonas horarias locales. Luego, se verifica si el día es sábado (6) o domingo (0) para determinar si ya es fin de semana. Si no, se calcula la diferencia de días hasta el sábado y se construye el mensaje correspondiente, cuidando la singularidad del término "day" cuando falta un solo día.

### Implementación Paso a Paso

1. Crear un objeto `Date` a partir del string de fecha proporcionado.
2. Obtener el día de la semana en formato UTC usando `getUTCDay()`.
3. Verificar si el día es sábado (6) o domingo (0) para determinar si es fin de semana.
4. Calcular la cantidad de días restantes hasta el sábado.
5. Construir y retornar el mensaje adecuado, usando singular o plural según corresponda.

```javascript
function daysUntilWeekend(dateString) {
  const date = new Date(dateString);
  const dayOfWeek = date.getUTCDay();

  if (dayOfWeek === 6 || dayOfWeek === 0) {
    return "It's the weekend!";
  }

  const daysUntilSaturday = 6 - dayOfWeek;
  return daysUntilSaturday === 1
    ? "1 day until the weekend."
    : `${daysUntilSaturday} days until the weekend.`;
}
```

## Análisis de Complejidad

### Complejidad Temporal

- La función realiza operaciones constantes: crear un objeto Date, obtener el día de la semana y realizar comparaciones simples.
- No hay bucles ni recursión.
- **Complejidad temporal:** O(1)

### Complejidad Espacial

- Solo se usan variables escalares y un objeto Date.
- No se crean estructuras adicionales ni listas.
- **Complejidad espacial:** O(1)

## Casos Edge y Consideraciones

- Fechas en sábado y domingo retornan "It's the weekend!" correctamente.
- Fechas en viernes retornan "1 day until the weekend." (singular).
- Fechas en otros días retornan el número correcto de días hasta el sábado.
- El uso de `getUTCDay()` evita problemas de zona horaria.
- Si el string de fecha es inválido, el objeto Date será "Invalid Date" y la función retornará "NaN days until the weekend." (no cubierto en los tests, pero sería un edge case a considerar si se requiere robustez extra).

## Reflexiones y Aprendizajes

### Conceptos Aplicados

- Uso de objetos Date y métodos UTC para evitar problemas de localización.
- Operador ternario para construir el mensaje singular/plural.
- Patrón: "Cálculo directo a partir de propiedades de fecha".

### Posibles Optimizaciones

- El código es claro y directo, no hay redundancias.
- Se podría agregar validación para fechas inválidas si se requiere robustez extra:
  ```js
  if (isNaN(date.getTime())) return "Invalid date.";
  ```
- Si se busca internacionalización, se podría parametrizar el mensaje.
- Para claridad, se puede extraer la construcción del mensaje a una función auxiliar, pero para este caso no aporta mucho.

## Recursos y Referencias

- [MDN Date.prototype.getUTCDay](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCDay)
- [MDN Date constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date)
- [LeetCode: Date problems](https://leetcode.com/tag/date/)
- [MDN Operador ternario (Conditional Operator)](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)
---
title: Par For The Hole
source: freecodecamp
series: daily
category: january
createdAt: 2026-01-12
difficulty: easy
topics:
  - conditionals
  - simulation
  - math
blogLink: https://blog-astro-rouge.vercel.app/posts/par-for-the-hole/
problemLink: https://www.freecodecamp.org/learn/daily-coding-challenge/2026-01-11/
---

## Par For The Hole - Análisis y Explicación

## Enunciado del Problema

Dados dos enteros, el par para un hoyo de golf y el numero de golpes realizados en ese hoyo, devolve el score usando terminos golfisticos.

- "Hole in one!" si se hizo en un solo golpe.
- "Eagle" si se hizo en dos golpes menos que el par.
- "Birdie" si se hizo en un golpe menos que el par.
- "Par" si se hizo en el mismo numero de golpes que el par.
- "Bogey" si se hizo en un golpe mas que el par.
- "Double bogey" si se hizo en dos golpes mas que el par.

## Análisis Inicial

### Comprensión del Problema

El problema requere comparar dos enteros y determinar el retorno en base al resultado de la comparacion.

### Casos de Prueba Identificados

Los casos de prueba identificados son:

- golfScore(3, 3) → "Par"
- golfScore(4, 3) → "Birdie"
- golfScore(3, 1) → "Hole in one!"
- golfScore(5, 7) → "Double bogey"
- golfScore(4, 5) → "Bogey"
- golfScore(5, 3) → "Eagle"

## Desarrollo de la Solución

### Enfoque Elegido

El enfoque consiste en una serie de condicionales que comparan los dos enteros y retornan el string correspondiente segun las reglas del golf.

### Implementación Paso a Paso

1. Definir la función `golfScore` que toma dos parámetros: `par` y `strokes`.
2. Usar una serie de declaraciones `if-else` para comparar `strokes` con `par` y retornar el string adecuado basado en las reglas del golf.

### Código Final

```javascript
/**
 * Determina el score de golf basado en el par y los golpes realizados.
 * @param {number} par - El par para el hoyo.
 * @param {number} strokes - El numero de golpes realizados.
 * @returns {string} El score en terminos golfisticos.
 */
function golfScore(par, strokes) {
  if (strokes === 1) {
    return "Hole in one!";
  } else if (strokes <= par - 2) {
    return "Eagle";
  } else if (strokes === par - 1) {
    return "Birdie";
  } else if (strokes === par) {
    return "Par";
  } else if (strokes === par + 1) {
    return "Bogey";
  } else if (strokes === par + 2) {
    return "Double bogey";
  }
}
```

## Análisis de Complejidad

### Complejidad Temporal

La función realiza una serie de comparaciones condicionales simples, todas en tiempo constante. Por lo tanto, la complejidad temporal es $O(1)$.

### Complejidad Espacial

El uso de espacio es $O(1)$, ya que no se utilizan estructuras adicionales ni variables proporcionales a la entrada.

## Casos Edge y Consideraciones

- Si los golpes son menores a par - 2 (por ejemplo, par 5 y 2 golpes), la función retorna "Eagle"
- Si los golpes son mayores a par + 2, la función no retorna nada (undefined). Según la consigna, solo se consideran hasta "Double bogey".

## Reflexiones y Aprendizajes

### Conceptos Aplicados

- Uso de condicionales encadenados para mapear reglas de negocio simples.
- Simulación de lógica de scoring basada en reglas del dominio (golf).

### Posibles Optimizaciones

Se podría agregar un caso por defecto para manejar valores fuera de los rangos especificados (por ejemplo, retornar "Out of range" o similar para golpes muy bajos o muy altos). También se podría extender para contemplar otros términos de golf si la consigna lo requiriera.

## Recursos y Referencias

- https://en.wikipedia.org/wiki/Par_(score)
- https://en.wikipedia.org/wiki/Glossary_of_golf

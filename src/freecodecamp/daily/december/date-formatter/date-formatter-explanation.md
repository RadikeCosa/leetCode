---
title: Date Formatter
source: freeCodeCamp
series: daily
category: daily
createdAt: 2025-12-06
difficulty: easy
topics:
  - string manipulation
  - date formatting
blogLink: https://blog-astro-rouge.vercel.app/posts/date-formatter/
problemLink: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-12-06/
---

## Date Formatter - Análisis y Explicación

## Enunciado del Problema

Dada una fecha en el formato "Mes día, año", devuelve la fecha en el formato "AAAA-MM-DD".
El mes dado será el nombre completo del mes en inglés. Por ejemplo: "January", "February", etc.
En el valor de retorno, rellena el mes y el día con ceros a la izquierda si es necesario para asegurar dos dígitos.
Por ejemplo, dada la fecha "December 6, 2025", devuelve "2025-12-06".

## Análisis Inicial

### Comprensión del Problema

Mi primer intuicion con respecto al problema seria separar tres variables de la cadena de entrada: mes, dia y año, luego convertir el mes de su forma textual a su forma numérica, y finalmente formatear la salida en el formato deseado.

### Casos de Prueba Identificados

| Entrada             | Salida Esperada | Descripción                           |
| ------------------- | --------------- | ------------------------------------- |
| "December 6, 2025"  | "2025-12-06"    | Fecha con mes y día de un solo dígito |
| "January 15, 2020"  | "2020-01-15"    | Fecha con mes de un solo dígito       |
| "March 3, 1999"     | "1999-03-03"    | Fecha con mes y día de un solo dígito |
| "November 30, 2010" | "2010-11-30"    | Fecha con mes y día de dos dígitos    |

## Desarrollo de la Solución

### Enfoque Elegido

El enfoque elegido es dividir la cadena de entrada en partes utilizando espacios y comas como delimitadores, mapear el nombre del mes a su valor numérico correspondiente, y luego formatear la salida en el formato "AAAA-MM-DD".

### Implementación Paso a Paso

1. Dividir la cadena de entrada en partes utilizando espacios y comas como delimitadores.
2. Mapear el nombre del mes a su valor numérico correspondiente.
3. Formatear el día y el mes para asegurarse de que tengan dos dígitos.
4. Construir la cadena de salida en el formato "AAAA-MM-DD".
5. Retornar la cadena formateada.

## Análisis de Complejidad

### Complejidad Temporal

<!-- TODO: Analizar Big O tiempo -->

### Complejidad Espacial

<!-- TODO: Analizar Big O espacio -->

## Casos Edge y Consideraciones

<!-- TODO: Documentar casos especiales manejados -->

## Reflexiones y Aprendizajes

### Conceptos Aplicados

<!-- TODO: ¿Qué patrones/técnicas se usaron? -->

### Posibles Optimizaciones

<!-- TODO: ¿Se puede mejorar? -->

## Recursos y Referencias

<!-- TODO: Links útiles, algoritmos relacionados, etc. -->

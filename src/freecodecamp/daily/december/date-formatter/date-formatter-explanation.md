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

```javascript
function formatDate(dateString) {
  const day = dateString.split(" ")[1].replace(",", "").padStart(2, "0");
  const year = dateString.split(" ")[2];
  const monthMap = {
    January: "01",
    February: "02",
    March: "03",
    April: "04",
    May: "05",
    June: "06",
    July: "07",
    August: "08",
    September: "09",
    October: "10",
    November: "11",
    December: "12",
  };
  const month = monthMap[dateString.split(" ")[0]];
  dateString = `${year}-${month}-${day}`;

  return dateString;
}
```

## Análisis de Complejidad

### Complejidad Temporal

El algoritmo tiene una complejidad temporal de O(1) ya que las operaciones realizadas (división de cadenas, mapeo y formateo) no dependen del tamaño de la entrada, sino que son constantes.

### Complejidad Espacial

La complejidad espacial también es O(1) ya que el espacio adicional utilizado no crece con el tamaño de la entrada; solo se utilizan unas pocas variables para almacenar partes de la fecha.

## Casos Edge y Consideraciones

### Manejo de Entradas Inválidas

El problema no especifica cómo manejar entradas inválidas, por lo que se asume que la entrada siempre estará en el formato correcto. Sin embargo, en un escenario real, sería prudente agregar validaciones para asegurarse de que la entrada cumple con el formato esperado.

## Reflexiones y Aprendizajes

### Conceptos Aplicados

Este problema permitió practicar la manipulación de cadenas, el uso de objetos para mapeo y el formateo de fechas, habilidades fundamentales en la programación diaria.

### Posibles Optimizaciones

La solucion es bastante eficiente para el problema dado, en cuanto a mayor legibilidad, se podria considerar el uso de expresiones regulares para extraer las partes de la fecha.

## Recursos y Referencias

- [Documentación de JavaScript sobre Manipulación de Cadenas](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)


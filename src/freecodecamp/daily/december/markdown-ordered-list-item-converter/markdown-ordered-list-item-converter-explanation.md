---
title: Markdown Ordered List Item Converter
source: freeCodeCamp
series: daily
category: daily
createdAt: 2025-12-03
difficulty: easy
topics:
  - strings
  - parsing
  - formatting
  - markdown
  - text-processing
  - html
blogLink: https://blog-astro-rouge.vercel.app/posts/markdown-ordered-list-item-converter/
---

## Markdown Ordered List Item Converter - Análisis y Explicación

## Enunciado del Problema

Dado un string que representa un item de lista ordenada en Markdown, devolverlo convertido al string HTML equivalente.
Una lista ordenada en Markdown debe:

- Empezar con cero o mas espacios seguido de
- Un numero (1 o mayor) y un punto (.), seguido de
- Al menos un espacio, y luego
- El texto del item de la lista.
  Si el string no tiene el formato exacto de arriba, devolver "Invalid format". De lo contrario, envolver el texto del item de la lista en etiquetas li y devolver el string.
  Por ejemplo, dado "1. My item", devolver "\<li>My item</li>".

## Análisis Inicial

### Comprensión del Problema

Este problema nos pide primero validar el formato de Markdown adecuado para un item de lista ordenada y luego convertirlo a su representación HTML.
Para ello, debemos identificar los componentes clave del formato Markdown y asegurarnos de que el string de entrada los cumpla.
Los componentes clave son:

1. Espacios iniciales (opcional)
2. Un número seguido de un punto
3. Al menos un espacio después del punto
4. El texto del item de la lista
5. Si el formato es correcto, debemos extraer el texto del item y envolverlo en etiquetas `<li>`.
6. Si el formato es incorrecto, debemos devolver "Invalid format".
7. El número debe ser 1 o mayor.
8. El texto del item puede contener cualquier caracter, incluyendo espacios adicionales.

### Casos de Prueba Identificados

| Entrada                | Salida Esperada              | Descripción                                      |
| ---------------------- | ---------------------------- | ------------------------------------------------ |
| "1. My item"           | "\<li>My item</li>"          | Formato válido simple                            |
| " 2. Another item"     | "\<li>Another item</li>"     | Formato válido con espacios iniciales            |
| "3.Item without space" | "Invalid format"             | Falta espacio después del punto                  |
| "0. Invalid number"    | "Invalid format"             | Número menor que 1                               |
| "4. "                  | "\<li></li>"                 | Formato válido con texto vacío                   |
| "5. Item with spaces"  | "\<li>Item with spaces</li>" | Formato válido con espacios en el texto del item |
| "Not a list item"      | "Invalid format"             | Formato completamente inválido                   |

## Desarrollo de la Solución

### Enfoque Elegido

El enfoque elegido para resolver este problema es utilizar expresiones regulares para validar el formato del string de entrada y extraer el texto del item de la lista. Lo que debemos hacer es buscar coincidencias con el patrón esperado y, si se encuentra una coincidencia, formatear el resultado en HTML. El regex debe capturar:

1. Cualquier cantidad de espacios al inicio (`^\s*`)
2. Un número mayor o igual a 1 seguido de un punto (`([1-9][0-9]*)\.`)
3. Al menos un espacio después del punto (`\s +`)
4. El texto del item de la lista (`(.*)$`)
   La expresión regular completa sería: `/^\s*([1-9][0-9]*)\.\s+(.*)$/`

### Implementación Paso a Paso

1. Definir la función `convertListItem` que toma un string `markdown` como entrada.
2. Crear una expresión regular para validar y capturar los componentes del formato Markdown.
3. Usar el método `match` para aplicar la expresión regular al string de entrada.
4. Si hay una coincidencia, extraer el texto del item y devolverlo envuelto en etiquetas `<li>`.
5. Si no hay coincidencia, devolver "Invalid format".

```javascript
function convertListItem(markdown) {
  const regex = /^\s*([1-9][0-9]*)\.\s+(.*)$/;
  const match = markdown.match(regex);
  if (match) {
    const itemText = match[2];
    return `<li>${itemText}</li>`;
  } else {
    return "Invalid format";
  }
}
```

## Análisis de Complejidad

### Complejidad Temporal

La complejidad temporal de esta solución es O(n), donde n es la longitud del string de entrada. Esto se debe a que la operación de coincidencia con la expresión regular puede requerir examinar cada caracter del string una vez.

### Complejidad Espacial

La complejidad espacial es O(1) en términos de espacio adicional utilizado, ya que solo se almacenan unas pocas variables independientes del tamaño de la entrada. Sin embargo, el espacio utilizado para la cadena de salida puede variar dependiendo del tamaño del texto del item de la lista.

## Reflexiones y Aprendizajes

### Conceptos Aplicados

La solución implementada utiliza conceptos clave como:

- Expresiones regulares para validación y extracción de patrones en strings.
- Manipulación de strings para formatear la salida en HTML.

## Recursos y Referencias

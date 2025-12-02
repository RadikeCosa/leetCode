---
title: "markdown-heading-converter"
difficulty: "easy"
topics:
  - Algorithm
source: "freecodecamp"
series: "daily"
category: "freecodecamp"
createdAt: "2025-11-17"
---

# Markdown Heading Converter - Análisis y Explicación

## Enunciado del Problema

Dado un string que representa un encabezado en formato Markdown, convierte ese encabezado al formato HTML correspondiente.
Un encabezado Markdown debe:

- Comenzar con cero o mas espacios, seguido de
- uno o más caracteres '#' (de 1 a 6) que indican el nivel del encabezado, seguido de:
- al menos un espacio, y finalmente
- el texto del encabezado.

Si el string no cumple con el formato correcto, la función debe devolver "Invalid format".
Por ejemplo, Dado "# My level 1 heading", la función debe devolver "<h1>My level 1 heading</h1>".

## Análisis Inicial

### Casos de Prueba Identificados

1. convert("# My level 1 heading") should return `"<h1>My level 1 heading</h1>"`.
2. convert("My heading") should return `"Invalid format"`.
3. convert("##### My level 5 heading") `should return "<h5>My level 5 heading</h5>"`.
4. convert("#My heading") should return `"Invalid format"`.
5. convert(" ### My level 3 heading") should return `"<h3>My level 3 heading</h3>"`.
6. convert("####### My level 7 heading") should return `"Invalid format"`.
7. convert("## My #2 heading") should return `"<h2>My #2 heading</h2>"`.

## Desarrollo de la Solución

### Enfoque Elegido

La primera intuicion es utilizar una expresión regular para validar y extraer las partes del encabezado Markdown: los espacios iniciales, los caracteres '#' y el texto del encabezado.
Se puede utilizar una expresión regular para verificar si el string cumple con el formato esperado. La expresión regular podría ser algo como `/^(\s*)(#{1,6})\s+(.+)$/`, donde:

- `^(\s*)` captura los espacios iniciales,
- `(#{1,6})` captura entre 1 y 6 caracteres '#',
- `\s+` asegura que haya al menos un espacio después de los '#',
- `(.+)$` captura el texto del encabezado hasta el final de la línea.
  Si la cadena no coincide con esta expresión regular, se puede devolver "Invalid format". Si la cadena coincide con esta expresión regular, se puede extraer el número de '#' para determinar el nivel del encabezado y el texto del encabezado y guardarlos en variables separadas. Luego, se puede construir la cadena HTML correspondiente utilizando estos valores.

### Implementación Paso a Paso

```javascript
function convert(heading) {
  const regex = /^(\s*)(#{1,6})\s+(.+)$/;
  const match = heading.match(regex);

  if (!match) {
    return "Invalid format";
  }

  const level = match[2].length; // Número de '#' determina el nivel
  const text = match[3]; // Texto del encabezado

  return `<h${level}>${text}</h${level}>`;
}
```

## Análisis de Complejidad

### Complejidad Temporal

La complejidad temporal de la función `convert` es O(n), donde n es la longitud del string de entrada. Esto se debe a que la operación principal que afecta el tiempo de ejecución es la coincidencia con la expresión regular, que en el peor caso puede recorrer todo el string.

### Complejidad Espacial

La complejidad espacial es O(n) debido a que la función puede almacenar una copia del string de entrada en la variable `match` y también construye un nuevo string para el encabezado HTML.

## Casos Edge y Consideraciones

Los casos edge incluyen:

- Encabezados con más de 6 caracteres '#'.
- Encabezados sin espacio después de los '#'.
- Encabezados con solo espacios y sin texto.
- Encabezados con caracteres especiales o símbolos en el texto.
  Todos estos casos estan manejados por la expresión regular utilizada en la función.

### Conceptos Aplicados

Para resolver este problema, se aplicaron los siguientes conceptos:

- Expresiones Regulares: Para validar y extraer partes del string de entrada.
- Template Literals: Para construir el string HTML de salida.
- Manejo de Errores: Para devolver un mensaje claro cuando el formato es inválido.

### Posibles Optimizaciones

La solución actual es bastante eficiente para el problema dado. Sin embargo, si se espera procesar un gran número de encabezados, se podría considerar precompilar la expresión regular para mejorar el rendimiento. Precompilar es el proceso de crear una instancia de la expresión regular una sola vez y reutilizarla, en lugar de crearla cada vez que se llama a la función, pero para los alcances de este problema, la optimización no es estrictamente necesaria.

## Recursos y Referencias

- [Documentación de Expresiones Regulares en JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
- [Documentación de Template Literals en JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

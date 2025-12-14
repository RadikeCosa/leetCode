---
title: Capitalize It
source: freecodecamp
series: daily
category: december
createdAt: 2025-12-14
difficulty: easy
topics:
  - strings
  - manipulation
blogLink: https://blog-astro-rouge.vercel.app/posts/capitalize-it/
problemLink: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-12-14/
---

## Capitalize It - Análisis y Explicación

## Enunciado del Problema

Dado un string que representa un titulo devolve un nuevo string formateado en "title case" usando las siguientes reglas:

- Pasa a mayúscula la primera letra de cada palabra.
- Pasa a minúscula todas las demás letras de cada palabra.
- Las palabras siempre están separadas por un solo espacio.

## Análisis Inicial

### Comprensión del Problema

El problema nos pide manipular el string que recibimos para que cada palabra comience con mayuscula, siga con minusculas y que las palabras esten separadas por un espacio.

### Casos de Prueba Identificados

Los Casos de prueba significativos que identificamos son:

1. titleCase("hello world") should return "Hello World".
2. titleCase("the quick brown fox") should return "The Quick Brown Fox".
3. titleCase("JAVASCRIPT AND PYTHON") should return "Javascript And Python".
4. titleCase("AvOcAdO tOAst fOr brEAkfAst") should return "Avocado Toast For Breakfast".
5. titleCase("") should return "".
6. titleCase("a") should return "A".
7. titleCase("A") should return "A".
8. titleCase("multiple spaces") should return "Multiple Spaces".
9. titleCase(" leading and trailing ") should return "Leading And Trailing".

## Desarrollo de la Solución

### Enfoque Elegido

El problema nos pide manipular strings de modo tal que independientemente de como venga el string original el resultado sea un string con 'Title Case'.

### Implementación Paso a Paso

El primer paso es dividir el string en palabras usando el espacio como separador luego pasamos a minusculas todo el string, luego cortamos con slice el primer caracter de cada palabras y lo convertimos a mayuscula y lo concatenamos con el resto de la palabra ya en minusculas. Finalmente unimos todas las palabras con join usando un espacio como separador.

```javascript
function titleCase(title) {
  return title
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
```

## Análisis de Complejidad

### Complejidad Temporal

La función recorre el string una vez para pasarlo a minúsculas, luego lo divide en palabras y recorre cada palabra para capitalizar la primera letra. Por lo tanto, la complejidad temporal es $O(n)$, donde $n$ es la longitud del string de entrada.

### Complejidad Espacial

Se crean nuevos arrays y strings intermedios (por ejemplo, el array de palabras y el array resultante del map), por lo que la complejidad espacial también es $O(n)$.

## Casos Edge y Consideraciones

- Si el string está vacío, retorna una cadena vacía.
- Si hay espacios múltiples entre palabras, el método split(" ") generará palabras vacías, que se capitalizan como cadenas vacías (no afecta el resultado final si se espera un solo espacio entre palabras).
- Si hay espacios al inicio o al final, se generan palabras vacías al dividir, pero el resultado final mantiene la estructura esperada.
- Si la palabra es de un solo carácter, se capitaliza correctamente.

## Reflexiones y Aprendizajes

### Conceptos Aplicados

- Manipulación de strings con métodos como toLowerCase, split, map, charAt, slice y join.
- Uso de funciones de orden superior (map) para transformar colecciones.
- Composición de funciones para lograr una transformación paso a paso.

### Posibles Optimizaciones

- Se podría usar una expresión regular para dividir por uno o más espacios y así evitar palabras vacías en el array:

```javascript
function titleCase(title) {
  return title
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
```

- También se puede usar trim() para eliminar espacios al inicio y al final antes de procesar.

## Recursos y Referencias

- [String.prototype.toLowerCase() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)
- [String.prototype.split() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
- [Array.prototype.map() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [String.prototype.charAt() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt)
- [String.prototype.slice() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice)
- [String.prototype.join() - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

---
title: Reverse Sentence
source: freecodecamp
series: daily
category: september
createdAt: 2025-12-22
difficulty: TODO
topics:
  - TODO
blogLink: https://blog-astro-rouge.vercel.app/posts/reverse-sentence/
problemLink: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-09-11/
---

## Reverse Sentence - Análisis y Explicación

## Enunciado del Problema

Dado un string de palabras, devuelve un nuevo string con las palabras en orden inverso. Por ejemplo, la primera palabra debe estar al final del string retornado y la última palabra debe estar al principio.

- En la cadena dada, las palabras pueden estar separadas por uno o más espacios.
- La cadena retornada debe tener solo un espacio entre cada palabra.

## Análisis Inicial

### Comprensión del Problema

El problema requiere invertir el orden de las palabras en una cadena dada y normalizar los espacios entre ellas. Esto implica dos tareas principales:

1. Dividir la cadena en palabras, gestionando correctamente los posibles espacios múltiples o consecutivos.
2. Reordenar las palabras en orden inverso y unirlas utilizando un solo espacio como separador.

Para ello, los métodos `split` y `join` de JavaScript resultan útiles: `split` permite obtener un arreglo de palabras ignorando los espacios extra, y `join` facilita reconstruir la cadena final con la separación adecuada.

### Casos de Prueba Identificados

Se han identificado los siguientes casos de prueba para validar el correcto funcionamiento de la función:

- Si la entrada es "world hello", la salida debe ser "hello world".
- Si la entrada es "push commit git", la salida debe ser "git commit push".
- Si la entrada es "npm install sudo" (con espacios múltiples entre palabras), la salida debe ser "sudo install npm", asegurando que solo haya un espacio entre palabras en la salida.
- Si la entrada es "import default function export" (con varios espacios entre palabras), la salida debe ser "export function default import", también con un solo espacio entre palabras.

Estos casos cubren tanto el orden inverso de las palabras como la normalización de los espacios en la cadena resultante.

## Desarrollo de la Solución

### Enfoque Elegido

El enfoque consiste en dividir la cadena en palabras utilizando una expresión regular para manejar múltiples espacios, invertir el arreglo resultante y unir las palabras con un solo espacio. Así se garantiza tanto el orden inverso como la normalización de los espacios en la salida.

### Implementación Paso a Paso

1. Utilizar una expresión regular con `split(/\s+/)` para dividir la cadena en un arreglo de palabras, eliminando espacios extra o múltiples.
2. Invertir el arreglo de palabras resultante para obtener el orden deseado.
3. Unir las palabras usando `join(' ')` para formar la cadena final, asegurando que solo haya un espacio entre cada palabra.

```javascript
function reverseSentence(sentence) {
  return sentence
    .trim() // Elimina espacios al inicio y al final
    .split(/\s+/) // Divide la cadena en palabras, manejando múltiples espacios
    .reverse() // Invierte el arreglo de palabras
    .join(" "); // Une las palabras con un solo espacio
}
```

## Análisis de Complejidad

### Complejidad Temporal

La complejidad temporal es $O(n)$, donde $n$ es la longitud de la cadena de entrada. Cada operación principal (`trim`, `split`, `reverse`, `join`) recorre la cadena o el arreglo de palabras una vez, por lo que el tiempo total es lineal respecto al tamaño de la entrada.

### Complejidad Espacial

La complejidad espacial también es $O(n)$, ya que se crean estructuras auxiliares (arreglo de palabras y cadena resultante) proporcionales al tamaño de la entrada.

## Casos Edge y Consideraciones

- Cadenas vacías: Si la entrada es una cadena vacía o solo contiene espacios, la función retorna una cadena vacía.
- Espacios al inicio o al final: Se eliminan correctamente gracias a `trim()`.
- Múltiples espacios entre palabras: Se normalizan a un solo espacio en la salida.
- Una sola palabra: La función retorna la misma palabra, sin espacios adicionales.

## Reflexiones y Aprendizajes

### Conceptos Aplicados

- Manipulación de strings y arreglos en JavaScript.
- Uso de expresiones regulares para el manejo robusto de espacios.
- Composición de métodos funcionales (`split`, `reverse`, `join`) para lograr una solución concisa y eficiente.

### Posibles Optimizaciones

La solución es óptima para el problema planteado. No se identifican optimizaciones relevantes, ya que todas las operaciones son lineales y la legibilidad es alta.

## Recursos y Referencias

- [Documentación de String.prototype.split() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/split)
- [Documentación de Array.prototype.reverse() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)
- [Documentación de Array.prototype.join() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

---
title: Pangram
source: freeCodeCamp
series: daily
category: september
createdAt: 2025-12-11
difficulty: easy
topics:
  - strings
  - sets
blogLink: https://blog-astro-rouge.vercel.app/posts/pangram/
problemLink: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-09-03/
---

## Pangram - Análisis y Explicación

## Enunciado del Problema

Dada una palabra o frase y un string de letras en minúscula, determina si la palabra o frase utiliza todas las letras del conjunto dado al menos una vez y no utiliza ninguna otra letra.
Ignora mayúsculas, espacios y puntuación.

## Análisis Inicial

### Comprensión del Problema

La función debe recibir dos parámetros:

1. Una palabra o frase (puede contener mayúsculas, espacios y signos de puntuación).
2. Un string con un conjunto de letras en minúscula.

El objetivo es determinar si la palabra o frase:

- Utiliza todas las letras del conjunto dado al menos una vez.
- No utiliza ninguna letra fuera de ese conjunto.
- Se deben ignorar mayúsculas, espacios y signos de puntuación.

### Casos de Prueba Identificados

1. Entrada: frase = "abc cab", letras = "abc"

- Salida esperada: true (usa solo a, b, c y todas al menos una vez)

2. Entrada: frase = "aabbcc", letras = "abc"

- Salida esperada: true (usa solo a, b, c y todas al menos una vez)

3. Entrada: frase = "abcx", letras = "abc"

- Salida esperada: false (usa una letra fuera del conjunto)

4. Entrada: frase = "ab cab", letras = "abc"

- Salida esperada: true (usa solo a, b, c y todas al menos una vez)

5. Entrada: frase = "aabb", letras = "abc"

- Salida esperada: false (falta la letra c)

6. Entrada: frase = "", letras = "abc"

- Salida esperada: false (no hay letras)

7. Entrada: frase = "a b c!", letras = "abc"

- Salida esperada: true (ignora espacios y signos)

## Desarrollo de la Solución

### Enfoque Elegido

Utilizaremos `Set` para resolver el problema de forma eficiente. El enfoque consiste en:

- Limpiar la frase, convirtiéndola a minúsculas y eliminando todos los caracteres que no sean letras.
- Crear un Set con las letras únicas de la frase.
- Crear un Set con las letras permitidas.
- Verificar que el Set de la frase sea igual al Set de letras permitidas: esto asegura que se usen todas las letras requeridas al menos una vez y que no haya letras extra.

### Implementación Paso a Paso

1. Convertir la frase a minúsculas.
2. Eliminar todos los caracteres que no sean letras (ignorando espacios, signos y mayúsculas).
3. Crear un Set con las letras únicas de la frase limpia.
4. Crear un Set con las letras permitidas.
5. Comparar ambos Sets:
   - Si tienen el mismo tamaño y todos los elementos del Set de la frase están en el Set de letras permitidas, devolver true.
   - En caso contrario, devolver false.

### Código Final

```javascript
/**
 * FreeCodeCamp Problem: Pangram
 * Category: FreeCodeCamp
 *
 * @param {string} sentence - The sentence to check
 * @param {string} letters - The string of lowercase letters to check against
 * @returns {boolean} True if the sentence uses all the letters from the given set at least once and no other letters, false otherwise
 */
function isPangram(sentence, letters) {
  // Normalize the sentence to lowercase and remove non-alphabetical characters
  const normalizedSentence = sentence.toLowerCase().replace(/[^a-z]/g, "");

  // Create a set of unique letters from the normalized sentence
  const sentenceSet = new Set(normalizedSentence);

  // Create a set of unique letters from the given letters
  const lettersSet = new Set(letters);

  // Check if both sets are equal
  if (sentenceSet.size !== lettersSet.size) {
    return false;
  }
  return [...sentenceSet].every((letter) => lettersSet.has(letter));
}

export default isPangram;
```

## Análisis de Complejidad

### Complejidad Temporal

La complejidad temporal es O(n + m), donde n es la longitud de la frase y m es la longitud del string de letras permitidas. Se recorre la frase una vez para limpiar y extraer las letras, y se recorre el conjunto de letras permitidas para comparar.

### Complejidad Espacial

La complejidad espacial es O(m), ya que se utilizan dos Sets que almacenan como máximo m letras (las permitidas y las presentes en la frase).

## Casos Edge y Consideraciones

- Si la frase está vacía, el resultado es false.
- Si falta alguna letra del conjunto permitido, el resultado es false.
- Si hay alguna letra en la frase que no está en el conjunto permitido, el resultado es false.
- Se ignoran mayúsculas, espacios y signos de puntuación.
- Si el conjunto de letras permitidas es vacío, el resultado es false.

## Reflexiones y Aprendizajes

### Conceptos Aplicados

- Uso de estructuras Set para manejo eficiente de elementos únicos.
- Filtrado y normalización de strings.
- Comparación de conjuntos para validar condiciones exactas.

### Posibles Optimizaciones

- El enfoque con Set ya es eficiente para este tipo de problema.
- Si se requiere validar muchas frases contra el mismo conjunto de letras, se puede precalcular el Set de letras permitidas una sola vez.

## Recursos y Referencias

- [Documentación de Set en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Set)
- [Expresiones regulares en JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions)

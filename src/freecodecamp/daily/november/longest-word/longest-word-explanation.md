---
title: "longest-word"
difficulty: "easy"
topics:
  - strings
  - regex
source: "freecodecamp"
series: "daily"
category: "freecodecamp"
createdAt: "2025-11-20"
blogLink: https://blog-astro-rouge.vercel.app/posts/longest-word/
---

# Longest Word - Análisis y Explicación

## Enunciado del Problema

Dado un string que contiene una frase, encuentra y devuelve la palabra más larga en esa frase.

- Las palabras están separadas por un espacio.
- Solo se consideran caracteres alfabéticos (a-z, sin discriminar mayusculas) como parte de las palabras.
- Si hay múltiples palabras con la misma longitud máxima, devuelve la primera que aparezca en la frase.
- Retorna la palabra como apararece en el string dado con los signos de puntuacion removidos.

## Análisis Inicial

### Comprensión del Problema

El problema ofrece pasos claros para comenzar a construir la solucion, en primer lugar se debe dividir el string en palabras individuales, para ese fin se puede utilizar el metodo `split(' ')` de JavaScript, pasandole un espacio como delimitador. Una vez que se tiene un array de palabras hay que remover los signos de puntuacion de cada palabra, se puede utilizar una expresion regular para esto, especificamente `/[^\w]/g` que coincide con cualquier caracter que no sea una letra o un numero. Luego de limpiar las palabras, se podria iterar sobre el array para encontrar la palabra mas larga, comparando la longitud de cada palabra con la longitud maxima encontrada hasta el momento. Si se encuentra una palabra mas larga, se actualiza la palabra mas larga y su longitud. Al final del proceso, se devuelve la palabra mas larga encontrada.

### Casos de Prueba Identificados

1. longestWord("The quick red fox") should return "quick".
2. longestWord("Hello coding challenge.") should return "challenge".
3. longestWord("Do Try This At Home.") should return "This".
4. longestWord("This sentence... has commas, ellipses, and an exlamation point!") should return "exlamation".
5. longestWord("A tie? No way!") should return "tie".
6. longestWord("Wouldn't you like to know.") should return "Wouldnt".

## Desarrollo de la Solución

### Enfoque Elegido

1- Dividir el string en palabras usando `split(' ')`.  
2- Limpiar cada palabra de signos de puntuacion usando una expresion regular.  
3- Iterar sobre las palabras limpias para encontrar la mas larga.
4- Devolver la palabra mas larga encontrada.

```javascript
function longestWord(sentence) {
  const words = sentence.split(" ");
  let longest = "";

  for (let word of words) {
    const cleanWord = word.replace(/[^\w]/g, "");
    if (cleanWord.length > longest.length) {
      longest = cleanWord;
    }
  }

  return longest;
}
```

## Análisis de Complejidad

### Complejidad Temporal

La complejidad temporal de esta solución es O(n \* m), donde n es el número de palabras en la frase y m es la longitud promedio de las palabras. Esto se debe a que se itera sobre cada palabra (O(n)) y para cada palabra se realiza una operación de reemplazo que puede tomar hasta O(m) en el peor de los casos.

### Complejidad Espacial

La complejidad espacial es O(m), donde m es la longitud de la palabra más larga. Esto se debe a que se almacena la palabra más larga encontrada hasta el momento.

## Casos Edge y Consideraciones

Algunos casos edge a considerar incluyen:

- Frases vacías: Debería devolver una cadena vacía.
- Frases con solo signos de puntuacion: Debería devolver una cadena vacía.
- Frases con múltiples palabras de la misma longitud maxima: Debería devolver la primera que aparezca.
- Palabras con caracteres especiales o numeros: Solo se consideran caracteres alfabéticos.
- Frases con espacios multiples entre palabras: Deberia manejarse correctamente al dividir las palabras.
- Palabras con apóstrofes: Deberían ser limpiadas correctamente.
- Frases con mayúsculas y minúsculas: No debería afectar la longitud de las palabras.
  Todos estos casos son correctamente manejados por la solución propuesta.

## Reflexiones y Aprendizajes

### Conceptos Aplicados

- Manipulación de strings: Uso de métodos como `split` y `replace` para procesar cadenas de texto.
- Expresiones regulares: Uso de regex para limpiar palabras de signos de puntuacion.
- Iteración y comparación: Uso de bucles para encontrar la palabra más larga en una lista.

### Posibles Optimizaciones

Dado el enfoque actual, la solución es bastante eficiente para la mayoría de los casos prácticos. Sin embargo, si se espera trabajar con frases extremadamente largas o con un gran número de palabras, se podrían considerar optimizaciones adicionales, como evitar la creación de nuevas cadenas innecesarias durante la limpieza de palabras, o utilizar estructuras de datos más eficientes para almacenar y comparar las palabras.

## Recursos y Referencias

- [MDN Web Docs - String.prototype.split()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
- [MDN Web Docs - String.prototype.replace()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
- [MDN Web Docs - Regular Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)

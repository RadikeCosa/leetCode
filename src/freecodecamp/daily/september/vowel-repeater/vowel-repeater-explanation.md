---
title: Vowel Repeater
source: freecodecamp
series: daily
category: september
createdAt: 2025-12-12
difficulty: easy
topics:
  - strings
  - loops
  - case-manipulation
blogLink: https://blog-astro-rouge.vercel.app/posts/vowel-repeater/
problemLink: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-09-04/
---

## Vowel Repeater - Análisis y Explicación

## Enunciado del Problema

Dado un string, tenes que devolver una nueva version del string donde cada vocal se repite una vez mas que la vocal anterior que encontraste. Por ejemplo, la primera vocal en la oracion debe permanecer sin cambios. La segunda vocal debe aparecer dos veces seguidas. La tercera vocal debe aparecer tres veces seguidas, y asi sucesivamente.

## Análisis Inicial

### Comprensión del Problema

La consigna nos pide manipular un string de modo tal que cada vocal encontrada se repita un numero creciente de veces dependiendo de su posicion en la secuencia de vocales del string.

- La primera vocal encontrada no se repite.
- La segunda vocal encontrada se repite dos veces.
- La tercera vocal encontrada se repite tres veces.
- Las vocales deben mantener su caso original.
- Los caracteres no vocales deben permanecer sin cambios.

### Casos de Prueba Identificados

1. repeatVowels("hello world") debería devolver "helloo wooorld".
2. repeatVowels("freeCodeCamp") debería devolver "freeeCooodeeeeCaaaaamp".
3. repeatVowels("AEIOU") debería devolver "AEeIiiOoooUuuuu".
4. repeatVowels("I like eating ice cream in Iceland") debería devolver "I liikeee eeeeaaaaatiiiiiing iiiiiiiceeeeeeee creeeeeeeeeaaaaaaaaaam iiiiiiiiiiin Iiiiiiiiiiiiceeeeeeeeeeeeelaaaaaaaaaaaaaand"

## Desarrollo de la Solución

### Enfoque Elegido

El enfoque elegido consiste en recorrer el string carácter por carácter utilizando un bucle. Se utiliza un contador que se incrementa cada vez que se encuentra una vocal. Por cada vocal encontrada, se repite dicha vocal tantas veces como indique el contador (la primera vez una vez, la segunda dos veces, y así sucesivamente). Los caracteres que no son vocales se agregan al resultado sin modificaciones. De esta manera, se logra que cada vocal se repita una vez más que la anterior, manteniendo el caso original y el orden de los caracteres en el string.

### Implementación Paso a Paso

1. Definir una función `repeatVowels` que tome un string como parámetro.
2. Inicializar una variable `result` como un string vacío para almacenar el resultado final.
3. Inicializar un contador `vowelCount` en 0 para llevar la cuenta de las vocales encontradas.
4. Definir un conjunto de vocales para facilitar la verificación.
5. Recorrer cada carácter del string:
   - Si el carácter es una vocal:
     - Incrementar `vowelCount`.
     - Agregar la vocal repetida `vowelCount` veces al `result`.
     - Si el carácter no es una vocal, agregarlo tal cual al `result`.
6. Al finalizar el recorrido, devolver el string `result`.

**Consideración importante sobre el case:**
Según el enunciado y los tests, la primera aparición de cada vocal debe mantener su case original, pero las repeticiones adicionales deben ser siempre en minúscula. Por ejemplo, si encontramos una "I" y es la quinta vocal, el resultado debe ser "Iiiii" (una "I" mayúscula y cuatro "i" minúsculas). Para lograr esto, al construir la parte repetida de la vocal, se concatena la vocal original y luego se agregan las repeticiones extra usando `char.toLowerCase().repeat(vowelCount - 1)`. Así, solo la primera mantiene el case y el resto es minúscula.

### Código Final

```javascript
function repeatVowels(str) {
  let result = "";
  let vowelCount = 0;
  const vowels = "aeiouAEIOU";

  for (let char of str) {
    if (vowels.includes(char)) {
      vowelCount++;
      // La primera aparición mantiene el case, las repeticiones extra son minúsculas
      result += char + char.toLowerCase().repeat(vowelCount - 1);
    } else {
      result += char;
    }
  }

  return result;
}
```

## Análisis de Complejidad

### Complejidad Temporal

La complejidad temporal es **O(n)**, donde n es la longitud del string de entrada. Se recorre el string una sola vez y las operaciones de verificación y concatenación son O(1) para cada carácter.

### Complejidad Espacial

La complejidad espacial es **O(n)**, ya que el string de resultado puede llegar a ser proporcionalmente más grande que el de entrada si hay muchas vocales. No se utilizan estructuras auxiliares significativas aparte del string de salida.

## Casos Edge y Consideraciones

- String vacío: retorna string vacío.
- Sin vocales: retorna el string original.
- Todas vocales: cada vocal se repite progresivamente más veces.
- Vocales mayúsculas y minúsculas: ambas se consideran, pero las repeticiones extra siempre son minúsculas.
- Caracteres especiales, números y espacios: se mantienen sin cambios.

## Reflexiones y Aprendizajes

### Conceptos Aplicados

- Recorrido secuencial de strings
- Uso de contador incremental para lógica progresiva
- Manipulación de strings y control de case

### Posibles Optimizaciones

- Se podría usar un array para construir el resultado y luego unirlo con `join('')` para mejorar la eficiencia en strings muy largos.
- Si se quisiera soportar otros alfabetos o vocales acentuadas, bastaría con ajustar la constante de vocales o usar una expresión regular más flexible.

## Recursos y Referencias

- [MDN Web Docs: String.prototype.repeat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat)
- [MDN Web Docs: String.prototype.toLowerCase()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)

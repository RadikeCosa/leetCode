---
title: Snowflake Generator
source: freecodecamp
series: daily
category: december
createdAt: 2025-12-25
difficulty: easy
topics:
  - string-manipulation
blogLink: https://blog-astro-rouge.vercel.app/posts/snowflake-generator/
problemLink: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-12-25/
---

## Snowflake Generator - Análisis y Explicación

## Enunciado del Problema

Dado un string multilínea que utiliza caracteres de salto de línea (\n) para representar los cortes de línea, devuelve un nuevo string donde cada línea se refleja horizontalmente y se adjunta al final de la línea original.

Reflejar una línea significa invertir todos sus caracteres, incluidos los espacios.
Por ejemplo, dado "_ \n _\n\* ", que se muestra en consola como:

```text

*
 *
*

```

Debes devolver "\* _\n \*\* \n_ \*", que se muestra en consola como:

```text
*  *
 **
*  *
```

Presta especial atención a los espacios en blanco en el string dado y en el resultado. No debes eliminar ni modificar ninguno de ellos.

## Análisis Inicial

### Comprensión del Problema

La función debe tomar un string que representa un patrón de copo de nieve, donde cada línea está separada por un salto de línea (\n). El objetivo es devolver un nuevo string en el que cada línea original se concatene con su versión reflejada horizontalmente (es decir, invertida carácter por carácter, incluyendo espacios). Es fundamental mantener todos los espacios y saltos de línea tal como aparecen en el input, sin recortar ni modificar.

### Casos de Prueba Identificados

- Entrada: "_ \n _\n* "  
  Salida esperada: "* _\n \*\* \n_ \*"

- Entrada: "X=~"  
  Salida esperada: "X=~~=X"

- Entrada: " X \n v \nX--=\n ^ \n X "  
  Salida esperada: " X X \n v v \nX--==--X\n ^ ^ \n X X "

- Entrada: "\* _\n _ _ \n_ \* _\n _ _ \n_ _"  
  Salida esperada: "_ ** _\n _ \* \* _ \n_ \* ** \* _\n _ \* \* _ \n_ \*\* \*"

- Entrada: "_ -\n _ -\n* -"  
  Salida esperada: "* -- _\n _ -- _ \n_ -- \*"

Estos casos cubren patrones con distintos caracteres, espacios y longitudes de línea, asegurando que la función maneje correctamente la inversión y la concatenación.

### Enfoque Elegido

El enfoque consiste en dividir el string de entrada en líneas usando el carácter de salto de línea (\n). Para cada línea, se genera su versión invertida utilizando una función de reversa de string. Luego, se concatena la línea original con su reflejo y se reconstruye el string final uniendo todas las líneas con saltos de línea. Este método garantiza que se respeten los espacios y el formato original, cumpliendo con los requisitos del problema.

### Implementación Paso a Paso

1. **Dividir el string en líneas:**  
   Utilizamos el método `split('\n')` para obtener un array donde cada elemento representa una línea del patrón original.

2. **Reflejar cada línea:**  
   Para cada línea, generamos su versión reflejada invirtiendo el orden de los caracteres. Esto se puede lograr usando `split('')` para convertir la línea en un array de caracteres, luego `reverse()` y finalmente `join('')` para reconstruir la línea invertida.

3. **Concatenar original y reflejo:**  
   Para cada línea, concatenamos la versión original con la reflejada, formando la nueva línea expandida.

4. **Reconstruir el string final:**  
   Unimos todas las líneas resultantes usando `join('\n')` para obtener el string final con el formato requerido.

Este proceso asegura que cada línea se refleje correctamente y que el formato (espacios y saltos de línea) se mantenga igual que en el input, cumpliendo con las restricciones del problema.

### Implementación del Código

```javascript
/**
 * FreeCodeCamp Problem: Snowflake Generator
 * @param {string} crystals - A multi-line string representing the snowflake pattern
 * @returns {string} A new string where each line is mirrored horizontally and attached to the end of the original line
 */
function generateSnowflake(crystals) {
  // Dividir el string en líneas
  const lines = crystals.split("\n");
  // Reflejar cada línea y concatenar
  const mirroredLines = lines.map((line) => {
    const reflected = line.split("").reverse().join("");
    return line + reflected;
  });
  // Reconstruir el string final
  return mirroredLines.join("\n");
}
export default generateSnowflake;
```

## Análisis de Complejidad

### Complejidad Temporal

El algoritmo recorre todas las líneas del string de entrada y, para cada línea, invierte sus caracteres.  
Si $n$ es el número de líneas y $m$ la longitud máxima de una línea, la complejidad temporal es $O(n \cdot m)$, ya que cada línea se procesa y se invierte individualmente.

### Complejidad Espacial

La complejidad espacial también es $O(n \cdot m)$, ya que se genera un nuevo array de líneas reflejadas y luego se reconstruye el string final, duplicando el tamaño de cada línea respecto al original.

## Casos Edge y Consideraciones

- Líneas vacías: El algoritmo las refleja correctamente, generando líneas duplicadas vacías.
- Espacios: Se preservan todos los espacios, tanto al inicio como al final de cada línea.
- Input sin saltos de línea: Se trata como un solo patrón y se refleja normalmente.
- Caracteres especiales: No hay restricciones, cualquier carácter se refleja.

## Reflexiones y Aprendizajes

### Conceptos Aplicados

- Manipulación de strings y arrays en JavaScript.
- Uso de métodos como `split`, `reverse` y `join` para invertir y reconstruir líneas.
- Respeto por el formato y los espacios, clave en problemas de manipulación de texto.

## Recursos y Referencias

- [Documentación MDN: String.prototype.split](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/split)
- [Documentación MDN: Array.prototype.reverse](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)
- [Documentación MDN: Array.prototype.join](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

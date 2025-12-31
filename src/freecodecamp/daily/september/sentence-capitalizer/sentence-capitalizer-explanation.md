---
title: Sentence Capitalizer
source: freecodecamp
series: daily
category: september
createdAt: 2025-12-31
difficulty: easy
topics:
  - strings
  - regex
  - text manipulation
blogLink: https://blog-astro-rouge.vercel.app/posts/sentence-capitalizer/
---

## Sentence Capitalizer - Análisis y Explicación

## Enunciado del Problema

Dado un párrafo, retorna un nuevo párrafo donde la primera letra de cada oración esté en mayúscula.

- Todos los demás caracteres deben permanecer igual.
- Las oraciones pueden terminar con un punto (`.`), uno o más signos de interrogación (`?`), o uno o más signos de exclamación (`!`).

## Análisis Inicial

### Comprensión del Problema

El desafío consiste en identificar el inicio de cada oración dentro de un bloque de texto. Una oración comienza en dos situaciones posibles:

1. Al principio del párrafo.
2. Inmediatamente después de un signo de puntuación final (`.`, `?`, `!`), pudiendo haber espacios de por medio.

Debemos transformar únicamente el primer carácter alfabético de cada oración a mayúscula, manteniendo el resto del texto intacto.

### Casos de Prueba Identificados

1. **Inicio de párrafo:** `this is...` -> `This is...`
2. **Múltiples oraciones con espacios:** `hello world. how are you?` -> `Hello world. How are you?`
3. **Puntuación repetida (elipsis/exclamaciones):** `challenge... it was fun!!` -> `challenge... It was fun!!`
4. **Sin espacios entre oraciones:** `crazy!!!strange` -> `Crazy!!!Strange`
5. **Espacios antes de la puntuación:** `. why` -> `. Why`

## Desarrollo de la Solución

### Enfoque Elegido

La forma más eficiente de resolver esto es mediante **Expresiones Regulares (RegExp)**. Utilizaremos el método `replace()` de JavaScript con una función de _callback_ para transformar solo la letra capturada.

La RegExp debe buscar:

- El inicio del string (`^`).
- O una secuencia de signos de puntuación final (`[.?!]+`) seguida opcionalmente de espacios (`\s*`).
- Seguido de una letra minúscula (`[a-z]`).

### Implementación Paso a Paso

```javascript
function capitalize(paragraph) {
  // Expresión regular:
  // (^|[.?!]+\s*) -> Grupo 1: Inicio de línea O puntuación final + espacios opcionales
  // ([a-z])       -> Grupo 2: La primera letra minúscula que sigue
  return paragraph.replace(/(^|[.?!]+\s*)([a-z])/g, (match, p1, p2) => {
    return p1 + p2.toUpperCase();
  });
}
```

1. **Definición del patrón:** El patrón `(^|[.?!]+\s*)([a-z])` captura el contexto previo a la letra en el Grupo 1 y la letra misma en el Grupo 2.
2. **Uso de `replace` global:** La bandera `g` asegura que procesemos todas las oraciones del párrafo.
3. **Transformación:** La función de reemplazo concatena el contexto original (`p1`) con la versión en mayúscula de la letra (`p2.toUpperCase()`).

## Análisis de Complejidad

### Complejidad Temporal

**O(N)**, donde **N** es la longitud del párrafo. El motor de expresiones regulares recorre el string una sola vez para identificar y reemplazar las coincidencias.

### Complejidad Espacial

**O(N)**. JavaScript crea un nuevo string para el resultado del `replace`, cuyo tamaño es proporcional al string de entrada.

## Casos Edge y Consideraciones

- **Puntuación múltiple:** El uso de `+` en `[.?!]+` permite manejar correctamente casos como `...` o `!!!`.
- **Ausencia de espacios:** La expresión `\s*` permite que las oraciones se capitalicen incluso si el usuario olvidó poner un espacio después del punto.
- **Caracteres no alfabéticos:** Si una oración comienza con un número o símbolo, la RegExp no coincidirá con `[a-z]`, lo cual es correcto ya que no se pueden capitalizar.

## Reflexiones y Aprendizajes

### Conceptos Aplicados

- **Capturing Groups:** Permiten separar el "ancla" de la oración (puntuación/inicio) del carácter que realmente queremos modificar.
- **Regex Alternation (`|`):** Fundamental para manejar el caso especial del inicio del string junto con los delimitadores de oración.

### Posibles Optimizaciones

Para párrafos extremadamente grandes, se podría considerar un bucle manual que recorra el string para evitar la sobrecarga de las RegExp, aunque para el uso general en aplicaciones web, la solución con `replace` es óptima y mucho más mantenible.

## Recursos y Referencias

- [MDN - String.prototype.replace()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
- [Regex101](https://regex101.com/) - Herramienta para testear y explicar expresiones regulares.

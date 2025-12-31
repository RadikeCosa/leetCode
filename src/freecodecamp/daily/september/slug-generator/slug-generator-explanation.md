---
title: Slug Generator
source: freecodecamp
series: daily
category: september
createdAt: 2025-12-31
difficulty: easy
topics:
  - strings
  - regex
  - text manipulation
blogLink: https://blog-astro-rouge.vercel.app/posts/slug-generator/
problemLink: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-09-17/
---

## Slug Generator - Análisis y Explicación

## Enunciado del Problema (traducción corregida)

Dada una cadena de texto, devuelve una versión apta para usar en una URL aplicando estas reglas:

- Todas las letras deben estar en minúscula.
- Elimina todos los caracteres que no sean letras, números o espacios.
- Reemplaza los espacios por su equivalente URL-encoded `%20`.
- Espacios consecutivos deben ser reemplazados por un solo `%20`.
- No debe quedar `%20` al inicio ni al final del slug.

## Análisis Inicial

### Comprensión del Problema

Necesitamos transformar texto libre en una cadena adecuada para usar en URLs respetando reglas simples de normalización: limpieza de caracteres inválidos, normalización de mayúsculas/minúsculas y manejo de espacios.

### Casos de Prueba Identificados

- "Hello World!" -> "hello%20world"
- " Multiple spaces " -> "multiple%20spaces"
- "Café & résumé" -> "caf%20rsum" (nota: la implementación actual elimina acentos; si se quisiera mantener/normalizar, habría que hacer una normalización Unicode adicional)
- "" (string vacío) -> ""
- "123 go!" -> "123%20go"

## Desarrollo de la Solución

### Enfoque Elegido

Usar una secuencia de transformaciones sobre el string:

1. Pasar a minúsculas.
2. Eliminar caracteres no permitidos mediante una RegExp.
3. Trim y colapsar secuencias de espacios a uno solo.
4. Reemplazar espacios por `%20`.

Este enfoque es simple, eficiente y fácil de razonar, y evita manipulación manual caracter-por-caracter innecesaria.

### Implementación Paso a Paso

```javascript
function generateSlug(str) {
  if (!str) return "";

  // 1. Lowercase
  let s = String(str).toLowerCase();

  // 2. Remove characters that are not letters, numbers or spaces
  s = s.replace(/[^a-z0-9 ]+/g, "");

  // 3. Trim and collapse consecutive spaces into one
  s = s.trim().replace(/\s+/g, " ");

  // 4. Replace spaces with URL-encoded %20
  if (s === "") return "";
  return s.replace(/ /g, "%20");
}
```

## Análisis de Complejidad

- **Temporal:** O(N) — cada operación `replace` recorre el string; en conjunto la complejidad es lineal en la longitud de la entrada.
- **Espacial:** O(N) — se crea un nuevo string con la transformación.

## Casos Edge y Consideraciones

- **Acentos y diacríticos:** La RegExp actual elimina caracteres fuera del rango `[a-z0-9 ]`, por lo que letras con acentos (`é`, `ñ`) se pierden. Si se desea preservar o transliterar estos caracteres (`é` → `e`), se puede normalizar antes con `String.prototype.normalize('NFD')` y eliminar marcas diacríticas.
- **Unicode y emojis:** Serán eliminados con la RegExp actual. Para soportarlos habría que ajustar la política de caracteres permitidos.
- **Cadena vacía o sólo caracteres inválidos:** Si después de filtrar no queda texto, la función devuelve "".
- **Espacios iniciales/finales y múltiples espacios:** Se eliminan y se colapsan en un solo `%20`.

## Reflexiones y Posibles Mejoras

- La solución es intencionalmente simple y adecuada para slugs básicos. Para slugs más robustos considerar:
  - Normalización Unicode y transliteración (`normalize('NFD')` + eliminar marcas diacríticas).
  - Control de longitud máxima del slug.
  - Reemplazar espacios con `-` en lugar de `%20` si se prefiere el estilo tradicional de slugs.
  - Usar `encodeURIComponent` cuando se quiera preservar más caracteres pero aún URL-encodearlos (aunque `encodeURIComponent` dejará `%` y otros símbolos codificados y no realiza limpieza de caracteres no deseados).

## Recursos y Referencias

- [MDN - String.prototype.replace()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
- [MDN - String.normalize()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize)
- [MDN - encodeURIComponent()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent)

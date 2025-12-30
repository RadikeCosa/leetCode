---
title: Sum The String
source: freecodecamp
series: daily
category: december
createdAt: 2025-12-30
difficulty: easy
topics:
  - strings
  - parsing
  - regex
  - math
blogLink: https://blog-astro-rouge.vercel.app/posts/sum-the-string/
problemLink: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-12-30/
---

## Sum The String - Análisis y Explicación

## Enunciado

Dado un string que contiene dígitos y otros caracteres, retorna la suma de todos los números presentes en el string.

- Los números consecutivos forman un solo número. Por ejemplo, `"13"` cuenta como 13, no como $1 + 3$.
- Se deben ignorar el resto de los caracteres no numéricos.

## Análisis inicial

### Comprensión del problema

El objetivo es extraer y sumar todos los números enteros positivos que se encuentren dentro de una cadena de texto. La clave reside en identificar secuencias ininterrumpidas de dígitos como una única unidad numérica.

### Casos de prueba identificados

Los casos de prueba base son:

1. `stringSum("3apples2bananas")` → `5` ($3 + 2$).
2. `stringSum("10cats5dogs2birds")` → `17` ($10 + 5 + 2$).
3. `stringSum("125344")` → `125344`.
4. `stringSum("a1b20c300")` → `321` ($1 + 20 + 300$).
5. `stringSum("a12b34c56d78e90f123g456h789i0j1k2l3m4n5")` → `1653`.

Casos borde adicionales:

- `stringSum("")` → `0` (string vacío).
- `stringSum("abc")` → `0` (sin números).
- `stringSum("0a0b0")` → `0` (ceros explícitos).

## Desarrollo de la solución

### Enfoque elegido

Utilizaremos una **expresión regular** (`/\d+/g`) para capturar todas las secuencias de uno o más dígitos. Este enfoque es el más eficiente y legible en JavaScript para tareas de extracción de patrones.

### Implementación paso a paso

1. **Definir el patrón**: Usamos `\d+` para buscar uno o más dígitos consecutivos y el flag `g` (global) para encontrar todas las ocurrencias.
2. **Extraer coincidencias**: El método `match()` nos devolverá un array de strings con los números encontrados.
3. **Validar resultados**: Si no hay coincidencias, `match()` devuelve `null`, por lo que debemos retornar `0`.
4. **Sumar**: Transformamos cada string a número (usando `Number()` o `parseInt()`) y acumulamos el total con `reduce()`.

### Código final

```javascript
function stringSum(str) {
  const matches = str.match(/\d+/g);

  if (!matches) return 0;

  return matches.reduce((acc, num) => acc + Number(num), 0);
}

export default stringSum;
```

## Análisis de complejidad

### Complejidad temporal

- **O(n)**: Donde $n$ es la longitud de la cadena de entrada. El motor de expresiones regulares debe recorrer el string completo una vez para encontrar todas las coincidencias. Posteriormente, el método `reduce` recorre las coincidencias encontradas, lo cual es proporcional a $n$ en el peor de los casos (ej. `"1 2 3 4..."`).

### Complejidad espacial

- **O(n)**: En el peor de los casos (un string compuesto solo por números separados por un carácter no numérico), el array de coincidencias podría ocupar un espacio proporcional al tamaño de la cadena original.

## Casos borde y consideraciones

- **Sin números**: Si el string no contiene dígitos, `match` devuelve `null`. Manejamos esto retornando `0` inmediatamente.
- **Números grandes**: JavaScript maneja números enteros de forma segura hasta $2^{53} - 1$. Si el string contiene números que superan este límite, se perdería precisión, aunque para este tipo de retos se asume que están dentro del rango.
- **Ceros**: Los ceros a la izquierda en secuencias como `"007"` son tratados correctamente por `Number()` como `7`.

## Reflexiones y aprendizajes

### Conceptos aplicados

- **RegExp (Regular Expressions)**: Uso de cuantificadores (`+`) y flags (`g`) para búsqueda global.
- **Higher-Order Functions**: Uso de `reduce` para acumulaciones limpias y declarativas.
- **Coerción de tipos**: Conversión explícita de `string` a `number`.

## Recursos y referencias

- [MDN - RegExp.prototype.exec() / match()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/match)
- [MDN - Array.prototype.reduce()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
- [MDN - Number()](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Number)

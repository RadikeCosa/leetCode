---
title: Email Chain Count
source: freecodecamp
series: daily
category: december
createdAt: 2025-12-23
difficulty: easy
topics:
  - strings
  - regex
blogLink: https://blog-astro-rouge.vercel.app/posts/email-chain-count/
problemLink: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-12-23/
---

## Email Chain Count - Análisis y Explicación

## Enunciado del Problema

Dado un string que representa el asunto de un email, determina cuantas veces fue reenviado o respondido.
Por simplicidad consideramos que un email fue reenviado o respondido cuando el string cotiene cualquiera de los siguientes marcadores (independientemente de mayúsculas o minúsculas):

- "FWD:"
- "FW:"
- "RE:"

## Análisis Inicial

### Comprensión del Problema

El problema requiere identificar y contar las ocurrencias de ciertos prefijos en un string que indican que un email ha sido reenviado o respondido.

### Casos de Prueba Identificados

1. Caso Básico:
   - Input: "RE: Meeting Tomorrow"
   - Output: 1
   - Explicación: El email ha sido respondido una vez.
2. Caso con Múltiples Prefijos:
   - Input: "FWD: RE: Fw: Project Update"
   - Output: 3
   - Explicación: El email ha sido reenviado dos veces y respondido una vez.
3. Caso sin Prefijos:
   - Input: "Project Update"
   - Output: 0
   - Explicación: El email no ha sido reenviado ni respondido.
4. Caso con Diferentes Mayúsculas/Minúsculas:
   - Input: "fWd: rE: fW: Important Notice"
   - Output: 3
   - Explicación: El email ha sido reenviado dos veces y respondido una vez, sin importar las mayúsculas o minúsculas.

## Desarrollo de la Solución

### Enfoque Elegido

Para este problema elegimos un enfoque basado en la busqueda de patrones utilizando expresiones regulares. Esto nos permitirá identificar y contar fácilmente las ocurrencias de los prefijos especificados.

### Implementación Paso a Paso

1. Definir una expresión regular que capture los prefijos "FWD:", "FW:", y "RE:" sin importar mayúsculas o minúsculas.
2. Utilizar la función de búsqueda global para encontrar todas las ocurrencias de estos prefijos en el string dado.
3. Contar el número de coincidencias encontradas y devolver ese valor.

### Código Final

```javascript
function emailChainCount(subject) {
  // Expresión regular para encontrar los prefijos
  const regex = /(FWD:|FW:|RE:)/gi;
  // Buscar todas las coincidencias y almacenarlas en la variable matches
  const matches = subject.match(regex);
  // devolver el conteo de coincidencias, o 0 si no hay ninguna
  return matches ? matches.length : 0;
}
```

## Análisis de Complejidad

### Complejidad Temporal

La expresión regular recorre el string una sola vez para buscar coincidencias, por lo que la complejidad temporal es $O(n)$, donde $n$ es la longitud del string de entrada. La búsqueda global con regex es eficiente para patrones simples como estos.

### Complejidad Espacial

El espacio adicional utilizado depende del número de coincidencias encontradas, ya que el método `match` devuelve un array con todas las ocurrencias. En el peor caso (todos los tokens son prefijos), el espacio es $O(k)$, donde $k$ es el número de coincidencias, pero en la práctica suele ser mucho menor que $n$.

## Casos Edge y Consideraciones

- Asuntos con espacios entre el prefijo y los dos puntos (ej: "FW :") **no** cuentan como válidos.
- Prefijos anidados o repetidos ("RE: RE: RE:") se cuentan individualmente.
- Prefijos en cualquier posición del asunto, no solo al inicio, son válidos.
- Prefijos con otros caracteres o sin los dos puntos (ej: "FW", "RE-") **no** se consideran.
- El conteo es insensible a mayúsculas/minúsculas.

## Reflexiones y Aprendizajes

### Conceptos Aplicados

- Uso de expresiones regulares para búsqueda de patrones en strings.
- Manejo de insensibilidad a mayúsculas/minúsculas con el flag `i`.
- Uso de métodos nativos de JavaScript para manipulación de cadenas y arrays.

## Recursos y Referencias

- [MDN Web Docs: String.prototype.match()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match)
- [MDN Web Docs: Expresiones Regulares](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions)

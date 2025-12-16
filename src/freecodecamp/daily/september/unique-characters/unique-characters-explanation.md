---
title: Unique Characters
source: freecodecamp
series: daily
category: september
createdAt: 2025-12-16
difficulty: easy
topics:
  - strings
  - hash tables
blogLink: https://blog-astro-rouge.vercel.app/posts/unique-characters/
problemLink: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-09-09/
---

## Unique Characters - Análisis y Explicación

## Enunciado del Problema

Dado un string determina si todos los caracteres en el string son únicos.

- Los caracteres en mayúscula y minúscula deben ser considerados diferentes.

## Análisis Inicial

### Comprensión del Problema

El objetivo es verificar si una cadena dada contiene solo caracteres únicos, es decir, sin repeticiones.

### Casos de Prueba Identificados

Los casos de prueba identificados son:

1. Entrada: "abc" → Salida Esperada: true
2. Entrada: "aA" → Salida Esperada: true
3. Entrada: "QwErTy123!@" → Salida Esperada: true
4. Entrada: "~!@#$%^&\*()\_+" → Salida Esperada: true
5. Entrada: "hello" → Salida Esperada: false
6. Entrada: "freeCodeCamp" → Salida Esperada: false
7. Entrada: "!@#_$%^&_()aA" → Salida Esperada: false

## Desarrollo de la Solución

### Enfoque Elegido

La solución más eficiente es utilizar un `Set` para almacenar los caracteres ya vistos. Si encontramos un carácter repetido, retornamos `false` inmediatamente. Si terminamos de recorrer la cadena sin encontrar repeticiones, retornamos `true`.

### Implementación Paso a Paso

1. Inicializar un `Set` vacío para los caracteres vistos.
2. Recorrer cada carácter de la cadena:

- Si el carácter ya está en el `Set`, retornar `false`.
- Si no, agregarlo al `Set`.

3. Si se recorre toda la cadena sin repeticiones, retornar `true`.

## Análisis de Complejidad

### Complejidad Temporal

El algoritmo recorre la cadena una sola vez, realizando operaciones de inserción y búsqueda en el `Set` en tiempo constante. Por lo tanto, la complejidad temporal es $O(n)$, donde $n$ es la longitud de la cadena.

### Complejidad Espacial

En el peor de los casos, todos los caracteres son únicos y el `Set` almacenará $n$ elementos, por lo que la complejidad espacial también es $O(n)$.

## Casos Edge y Consideraciones

- Si la cadena está vacía, el resultado es `true` (no hay repeticiones).
- Caracteres especiales, números y letras se consideran distintos.
- Mayúsculas y minúsculas se consideran diferentes ("a" ≠ "A").
- Cadenas largas con todos los caracteres únicos consumen más memoria.

## Reflexiones y Aprendizajes

### Conceptos Aplicados

- Uso de `Set` para búsquedas rápidas y almacenamiento de elementos únicos.
- Recorrido eficiente de cadenas.
- Detección temprana de duplicados para optimizar el tiempo de ejecución.

## Recursos y Referencias

- [Set en JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Set)

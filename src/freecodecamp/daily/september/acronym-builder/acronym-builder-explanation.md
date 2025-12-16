---
title: Acronym Builder
source: freecodecamp
series: daily
category: september
createdAt: 2025-12-16
difficulty: easy
topics:
  - strings
  - arrays
blogLink: https://blog-astro-rouge.vercel.app/posts/acronym-builder/
problemLink: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-09-08/
---

## Acronym Builder - Análisis y Explicación

## Enunciado del Problema

Dada una cadena que contiene una o mas palabras, retornar el acronimo de las palabras usando las siguientes reglas:

- El acronimo debe consistir en la primer letra de cada palabra en mayúscula a menos que se indique lo contrario.
- Los Acronimos deben ignorar la primer letra de las siguientes palabras a menos que sean la primer palabra:

  - a
  - for
  - an
  - and
  - by
  - of

- Las letras del acronimo deben estar en el mismo orden que las palabras en la cadena original.
- El Acronimo no debe contener espacios.

## Análisis Inicial

### Comprensión del Problema

El propósito es construir un acronimo a partir de una cadena de palabras, siguiendo reglas específicas sobre qué letras incluir y cómo formatearlas.

### Casos de Prueba Identificados

Los casos de prueba identificados son:

1. Entrada: "Search Engine Optimization" → Salida Esperada: "SEO"
2. Entrada: "Frequently Asked Questions" → Salida Esperada: "FAQ"
3. Entrada: "National Aeronautics and Space Administration" → Salida Esperada: "NASA"
4. Entrada: "Federal Bureau of Investigation" → Salida Esperada: "FBI"
5. Entrada: "For your information" → Salida Esperada: "FYI"
6. Entrada: "By the way" → Salida Esperada: "BTW"
7. Entrada: "An unstoppable herd of waddling penguins overtakes the icy mountains and sings happily" → Salida Esperada: "AUHWPOTIMSH"

## Desarrollo de la Solución

### Enfoque Elegido

El enfoque consiste en dividir la cadena en palabras, iterar sobre ellas y construir el acronimo según las reglas especificadas.

### Implementación Paso a Paso

1. Dividir la cadena de entrada en un array de palabras usando el espacio como delimitador.
2. Inicializar una cadena vacía para almacenar el acronimo.
3. Definir un conjunto de palabras a ignorar (a, for, an, and, by, of).
4. Iterar sobre el array de palabras:
   - Si la palabra es la primera o no está en el conjunto de palabras a ignorar
     - Agregar la primera letra de la palabra en mayúscula al acronimo.
     - Si la palabra está en el conjunto de palabras a ignorar y no es la primera, omitirla.
5. Retornar el acronimo construido.

## Ventaja de Usar Set en ignoreWords

En la implementación, se utiliza un `Set` para almacenar las palabras a ignorar (`ignoreWords`).  
La principal ventaja de usar un `Set` es que permite verificar si una palabra debe ser ignorada en tiempo constante $O(1)$, mientras que si se usara un array, la búsqueda sería $O(n)$ (donde $n$ es la cantidad de palabras a ignorar).  
Esto hace que el código sea más eficiente, especialmente si la lista de palabras a ignorar crece.  
Además, el `Set` evita duplicados automáticamente y su sintaxis es clara para operaciones de pertenencia.

## Análisis de Complejidad

### Complejidad Temporal

El algoritmo recorre todas las palabras de la cadena una sola vez, realizando operaciones de acceso y comparación constantes por palabra. Por lo tanto, la complejidad temporal es $O(n)$, donde $n$ es el número de palabras en la cadena de entrada.

### Complejidad Espacial

Se utiliza espacio adicional para almacenar el conjunto de palabras a ignorar y el acrónimo resultante, ambos de tamaño proporcional al número de palabras, por lo que la complejidad espacial también es $O(n)$ en el peor caso.

## Casos Edge y Consideraciones

Algunos casos especiales a considerar:

- Si la cadena está vacía, el resultado debe ser una cadena vacía.
- Si todas las palabras son del conjunto a ignorar, solo se toma la primera.
- Palabras con mayúsculas/minúsculas mezcladas: el algoritmo convierte a minúsculas para comparar.
- Múltiples espacios consecutivos pueden generar palabras vacías; se puede filtrar antes de procesar.
- Caracteres especiales o signos de puntuación no se consideran en la lógica actual.

## Reflexiones y Aprendizajes

### Conceptos Aplicados

- Manipulación de cadenas y arrays.
- Control de flujo para aplicar reglas condicionales.

### Posibles Optimizaciones

- Se podría mejorar la robustez eliminando signos de puntuación o normalizando espacios.
- Permitir una lista de palabras a ignorar configurable.

## Recursos y Referencias

- [Documentación de String.prototype.split() en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/split)

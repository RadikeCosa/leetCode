---
title: Consonant Count
source: freeCodeCamp
series: daily
category: december
createdAt: 2025-12-16
difficulty: easy
topics:
  - strings
  - counting
blogLink: https://blog-astro-rouge.vercel.app/posts/consonant-count/
problemLink: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-12-16/
---

## Consonant Count - Análisis y Explicación

## Enunciado del Problema

dado un string y un entero "objetivo" determinar si el string tiene exactamente el número de consonantes especificado por el entero "objetivo".

- consonantes son todas las letras del alfabeto excepto las vocales (a, e, i, o, u).
- ignorar digitos, signos de puntuación, espacios y cualquier otro caracter no alfabético.

## Análisis Inicial

### Comprensión del Problema

Debemos comparar el string dado con el número de consonantes que contiene y verificar si coincide con el entero objetivo proporcionado.

### Casos de Prueba Identificados

Los casos de prueba relevantes incluyen:

1. Cadena con consonantes que coincide con el objetivo.
2. Cadena con consonantes que no coincide con el objetivo.
3. Cadena sin consonantes.
4. Cadena con caracteres especiales y dígitos.
5. Cadena vacía.

## Desarrollo de la Solución

### Enfoque Elegido

El enfoque consiste en iterar sobre cada caracter del string, durante el recorrido se verifica si el caracter es una volcal o no y si es una letra del alfabeto, si no es vocal y es letra se cuenta como consonante. Al final se compara el conteo de consonantes con el objetivo.

### Implementación Paso a Paso

1. Inicializar un contador de consonantes en 0.
2. Recorrer cada caracter del string:
   - Convertir el caracter a minúscula para facilitar la comparación.
   - Verificar si el caracter es una letra del alfabeto.
   - Si es una letra y no es una vocal, incrementar el contador de consonantes.
3. Al finalizar el recorrido, comparar el contador de consonantes con el entero objetivo.

### Código Final

```javascript
function hasConsonantCount(text, target) {
  let consonantCount = 0;
  const vowels = "aeiou";
  for (let char of text.toLowerCase()) {
    if (char >= "a" && char <= "z" && !vowels.includes(char)) {
      consonantCount++;
    }
  }
  return consonantCount === target;
}
```

## Análisis de Complejidad

### Complejidad Temporal

El algoritmo recorre el string una sola vez, realizando operaciones de comparación y conteo en cada iteración. Por lo tanto, la complejidad temporal es O(n), donde n es la longitud del string de entrada.

### Complejidad Espacial

El espacio adicional utilizado es constante, O(1), ya que solo se emplean variables simples para el conteo y la referencia a las vocales. No se utilizan estructuras de datos proporcionales al tamaño de la entrada.
ocumentar casos especiales manejados -->

## Reflexiones y Aprendizajes

### Conceptos Aplicados

- Manipulación de strings y recorrido carácter por carácter.
- Uso de condiciones lógicas para filtrar caracteres relevantes.
- Comparación insensible a mayúsculas para simplificar la lógica.

### Posibles Optimizaciones

<!-- TODO: ¿Se puede mejorar? -->

## Recursos y Referencias

<!-- TODO: Links útiles, algoritmos relacionados, etc. -->

---
title: Longest Palindromic Substring
source: leetcode
series: daily
category: january
createdAt: 2026-01-03
difficulty: medium
topics:
  - strings
  - dynamic-programming
  - two-pointers
blogLink: https://blog-astro-rouge.vercel.app/posts/longest-palindromic-substring/
problemLink: https://leetcode.com/problems/longest-palindromic-substring/description/
---

## Longest Palindromic Substring - Análisis y Explicación

## Enunciado del Problema

Dado un string `s`, retorna el substring palindrómico más largo dentro de `s`. (un substring es palindromico si se lee igual de izquierda a derecha que de derecha a izquierda).

## Análisis Inicial

### Comprensión del Problema

El problema nos pide encontrar palindromos dentro de un string y determinar cual es el mas largo.

### Ejemplo 1

- **Input:** s = "babad"
- **Output:** "bab"
- **Explicación:** "aba" también es una respuesta válida.

### Ejemplo 2

- **Input:** s = "cbbd"
- **Output:** "bb"

### Restricciones

- `1 <= s.length <= 1000`
- `s` consiste solo de dígitos y letras (mayúsculas y minúsculas).

**Pista 1:** Como se puede reusar un palindromo ya calculado para calcular uno mas largo?
**Pista 2:** Si "aba" es un palindromo, "xabax" lo es? y "xabay" ?
**Pista 3:** Pista basada en la complejidad:
Si usamos fuerza bruta y comprobamos si para cada par inicio‑fin un substring es palíndromo, tenemos $O(n^2)$ pares inicio‑fin y comprobaciones de palíndromo de $O(n)$. ¿Podemos reducir el tiempo de comprobación de palíndromos a $O(1)$ reutilizando algún cálculo previo?

### Casos de Prueba Identificados

A continuación se describen los casos relevantes que cubren escenarios típicos y bordes:

- Caso A — Palíndromo central impar:

```js
// Entrada
s = "babad";
// Salida esperada (una de las válidas): "bab" o "aba"
```

- Caso B — Palíndromo central par:

```js
// Entrada
s = "cbbd";
// Salida esperada: "bb"
```

- Caso C — Todos caracteres iguales:

```js
// Entrada
s = "aaaa";
// Salida esperada: "aaaa" (todo el string)
```

- Caso D — No hay palíndromos largos (solo individuales):

```js
// Entrada
s = "abcde";
// Salida esperada: cualquiera de los caracteres individuales, p. ej. "a" (longitud 1)
```

- Caso E — Palíndromo en los extremos:

```js
// Entrada
s = "racecarxyz";
// Salida esperada: "racecar"
```

- Caso F — Cadena corta / límites:

```js
// Entrada
s = "a"; // longitud mínima
// Salida esperada: "a"

// Entrada
s = "ab"; // sin palíndromo de longitud > 1
// Salida esperada: "a" o "b"
```

Notas sobre los casos de prueba:

- Cubren palíndromos de longitud par e impar.
- Incluyen palíndromos que ocupan todo el string y palíndromos localizados en los extremos.
- Incluyen casos triviales (longitud 1) y cadenas homogéneas para validar comportamiento óptimo.

## Desarrollo de la Solución

### Enfoque Elegido

La primera intuicion es usar un enfoque de **Expansion desde el Centro**. Esto es, para cada caracter en el string intentamos expandir hacia ambos lados para encontrar el palindomo mas largo posible con ese caracter (o par de caracteres) como centro.

### Implementación Paso a Paso

1. **Función de Expansión:** Crear una función auxiliar que tome un índice (o dos para el caso par) y expanda hacia ambos lados mientras los caracteres coincidan.
2. **Iterar sobre el String:** Para cada índice en el string, llamar a la función de expansión dos veces (una para palíndromos impares y otra para pares).
3. **Actualizar el Máximo:** Mantener un registro del palíndromo más largo encontrado durante las expansiones.
4. **Retornar el Resultado:** Al final, retornar el substring correspondiente al palíndromo más largo.

## Análisis de Complejidad

### Complejidad Temporal

<!-- TODO: Analizar Big O tiempo -->

### Complejidad Espacial

<!-- TODO: Analizar Big O espacio -->

## Casos Edge y Consideraciones

<!-- TODO: Documentar casos especiales manejados -->

## Reflexiones y Aprendizajes

### Conceptos Aplicados

<!-- TODO: ¿Qué patrones/técnicas se usaron? -->

### Posibles Optimizaciones

<!-- TODO: ¿Se puede mejorar? -->

## Recursos y Referencias

<!-- TODO: Links útiles, algoritmos relacionados, etc. -->

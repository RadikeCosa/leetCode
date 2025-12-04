---
title: "count-rectangles"
difficulty: "easy"
topics:
  - Algorithm
source: "freecodecamp"
series: "daily"
category: "freecodecamp"
createdAt: "2025-11-17"
blogLink: https://blog-astro-rouge.vercel.app/posts/count-rectangles/
---

# Count Rectangles — Análisis y Explicación

## Enunciado del Problema

### Rectangle Count (EN)

Given two positive integers representing the width and height of a rectangle, determine how many axis-aligned rectangles with integer width and height exist inside it.

Example: for `1` and `3`, return `6`: three `1×1`, two `1×2`, and one `1×3`.

### Conteo de Rectángulos (ES)

Dado un ancho y una altura enteros positivos de un rectángulo, determina cuántos rectángulos (alineados a los ejes) con dimensiones enteras existen dentro de él.

Ejemplo: para `w = 1` y `h = 3`, el resultado es `6`: tres `1×1`, dos `1×2` y uno `1×3`.

## Análisis Inicial

### Comprensión del Problema

Se deben contar todos los rectángulos posibles con lados paralelos a los ejes dentro de un rectángulo de dimensiones enteras `w × h`. Cada rectángulo debe tener ancho y alto enteros.

- Fórmula general: el número total de rectángulos es

  $$
  R(w,h) = \frac{w\,(w+1)}{2} \cdot \frac{h\,(h+1)}{2} = \binom{w+1}{2}\,\binom{h+1}{2}.
  $$

  Intuición: hay `w + 1` líneas verticales y `h + 1` líneas horizontales; elegir 2 verticales y 2 horizontales determina un rectángulo.

- Ejemplo numérico: para $w=1$ y $h=3$,

  $$
  R(1,3) = \frac{1\cdot 2}{2} \cdot \frac{3\cdot 4}{2} = 1 \cdot 6 = 6.
  $$

## Análisis de Complejidad

- **Tiempo:** $O(1)$ — se realiza un número constante de operaciones aritméticas.
- **Espacio:** $O(1)$ — uso constante de memoria adicional.
- **Nota numérica:** en JavaScript, `Number` es de doble precisión; si $w$ y $h$ son muy grandes puede haber pérdida de precisión. Para valores enormes, considera una versión con `BigInt`.

## Desarrollo de la Solución

### Enfoque Elegido

Combinatorio directo: seleccionar 2 líneas verticales entre $w+1$ y 2 líneas horizontales entre $h+1$. El producto de ambas elecciones da el total de rectángulos.

### Implementación Paso a Paso

- Calcular $T_w = \frac{w(w+1)}{2}$ y $T_h = \frac{h(h+1)}{2}$.
- Devolver $R = T_w \cdot T_h$.

## Casos de Prueba Identificados

- `(1, 3) → 6`
- `(3, 2) → 18`
- `(1, 2) → 3`
- `(5, 4) → 150`
- `(11, 19) → 12540`

## Casos Edge y Consideraciones

- Entradas positivas: el enunciado asume $w, h \in \mathbb{Z}^+$.
- Precisión numérica para valores grandes (posible uso de `BigInt`).

## Reflexiones y Aprendizajes

### Conceptos Aplicados

- Conteo combinatorio, números triangulares, elección de líneas.

### Posibles Optimizaciones

- Si se requiere precisión arbitraria: implementar versión con `BigInt`.

## Recursos y Referencias

- Identidad combinatoria: $\binom{n}{2} = \frac{n(n-1)}{2}$.

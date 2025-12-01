---
title: "Sum of Squares"
difficulty: "easy"
topics:
  - Array
  - Math
source: "freecodecamp"
series: "daily"
category: "daily"
createdAt: "2025-10-27"
---

## Enunciado del Problema

Dado un array de números, retornar la suma de los cuadrados de cada elemento.

**Ejemplo:**

- sumOfSquares([1, 2, 3]) → 14
- sumOfSquares([0, 4, 5]) → 41
- sumOfSquares([-1, -2]) → 5

## Análisis Inicial

Este problema es un clásico de reducción y transformación de arrays. El objetivo es elevar al cuadrado cada elemento y sumar los resultados.

**Desafíos identificados:**

- Manejo de números negativos
- Manejo de array vacío

## Estrategias posibles

### 1. Enfoque con map y reduce

- Funcional
- Conciso
- Legible

### 2. Enfoque con bucle for

- Control total
- Eficiente

## Solución Implementada

```javascript
function sumOfSquares(arr) {
  return arr.map((x) => x * x).reduce((a, b) => a + b, 0);
}
```

**Lógica paso a paso:**

1. Usar `map` para elevar cada elemento al cuadrado
2. Usar `reduce` para sumar los resultados
3. Retornar suma

## Alternativas Consideradas

### 1. Enfoque con bucle for

```javascript
function sumOfSquares(arr) {
  let sum = 0;
  for (const x of arr) {
    sum += x * x;
  }
  return sum;
}
```

- Más explícito
- Fácil de entender

### 2. Enfoque con forEach

```javascript
function sumOfSquares(arr) {
  let sum = 0;
  arr.forEach((x) => (sum += x * x));
  return sum;
}
```

- Similar al bucle for

## Elección del Enfoque

Se eligió el enfoque funcional por su concisión y legibilidad.

## Complejidad

- Tiempo: O(n) donde n es la longitud del array
- Espacio: O(n) por el array intermedio de `map`

## Aprendizajes

- La combinación de `map` y `reduce` es poderosa para transformaciones y agregaciones en arrays
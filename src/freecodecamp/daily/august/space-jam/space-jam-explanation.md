---
title: Space Jam
source: freecodecamp
series: daily
category: daily
difficulty: easy
topics:
  - String
createdAt: 2025-10-30
---

## Enunciado del Problema

Dado un string, eliminar todos los espacios y retornar el string resultante.

**Ejemplo:**

- spaceJam("hello world") → "helloworld"
- spaceJam("a b c d e") → "abcde"
- spaceJam("no_spaces") → "no_spaces"

## Análisis Inicial

Este problema es un clásico de manipulación de strings. El objetivo es eliminar todos los espacios del input.

**Desafíos identificados:**

- Manejo de espacios múltiples
- Manejo de string vacío
- Preservar otros caracteres

## Estrategias posibles

### 1. Enfoque con replace

- Simple y directo
- Eficiente
- Legible

### 2. Enfoque con split/join

- Funcional
- Conciso

## Solución Implementada

```javascript
function spaceJam(str) {
  return str.replace(/\s/g, "");
}
```

**Lógica paso a paso:**

1. Usar regex `/\s/g` para encontrar todos los espacios
2. Reemplazar por string vacío
3. Retornar resultado

## Alternativas Consideradas

### 1. Enfoque con split/join

```javascript
function spaceJam(str) {
  return str.split(" ").join("");
}
```

- Funciona para espacios simples
- No elimina otros tipos de espacio (tab, newline)

### 2. Enfoque con bucle for

```javascript
function spaceJam(str) {
  let result = "";
  for (const char of str) {
    if (char !== " ") result += char;
  }
  return result;
}
```

- Control total
- Menos eficiente

## Elección del Enfoque

Se eligió el enfoque con regex por su eficiencia y capacidad de eliminar todos los espacios (incluyendo tabs y newlines).

## Complejidad

- Tiempo: O(n) donde n es la longitud del string
- Espacio: O(n)

## Aprendizajes

- Manipulación de strings con regex es poderosa y eficiente en JavaScript
- El método `replace` es ideal para transformaciones simples

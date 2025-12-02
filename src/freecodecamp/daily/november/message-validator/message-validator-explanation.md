---
title: "message-validator"
difficulty: "easy"
topics:
  - Algorithm
source: "freecodecamp"
series: "daily"
category: "freecodecamp"
createdAt: "2025-11-18"
---

# Message Validator - Análisis y Explicación

## Enunciado del Problema

Dado un string de mensaje y un string de validación, determina si el mensaje es válido.
Un mensaje es válido si cada palabra en el mensaje comienza con la letra correspondiente en el string de validación, en orden.
Las letras no distinguen entre mayúsculas y minúsculas.
Las palabras en el mensaje están separadas por espacios simples.

## Análisis Inicial

### Comprensión del Problema

- El mensaje se divide en palabras usando espacios como separadores.
- Cada palabra debe comenzar con la letra correspondiente en el string de validación.
- La comparación es insensible a mayúsculas y minúsculas.
- El número de palabras en el mensaje debe coincidir con la longitud del string de validación.
- Si alguna palabra no cumple con la condición, el mensaje es inválido.
- Si todas las palabras cumplen, el mensaje es válido.
- Retornar `true` si el mensaje es válido, `false` en caso contrario.

### Casos de Prueba Identificados

| Entrada | Salida Esperada | Cumple |
|

-------------------------------------------------------- | --------------- | ------ |
| `"hello world", "hw"` | `true` | Yes |
| `"ALL CAPITAL LETTERS", "acl"` | `true` | Yes |
| `"Coding challenge are boring.", "cca"` | `false` | Yes |
| `"The quick brown fox jumps over the lazy dog.", "TQBFJOTLD"` | `true` | Yes |
| `"The quick brown fox jumps over the lazy dog.", "TQBFJOTLDT"` | `false` | Yes |

## Desarrollo de la Solución

### Enfoque Elegido

### Implementación Paso a Paso

<!-- TODO: Detallar la lógica de implementación -->

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

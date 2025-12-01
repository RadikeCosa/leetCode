---
title: "Character Limit"
difficulty: "easy"
topics:
  - String
source: "freecodecamp"
series: "daily"
category: "daily"
createdAt: "2025-12-01"
---

# Character Limit

## Enunciado

En este desafío, se te da un string y debes determinar si cabe en una publicación de red social. Devuelve los siguientes strings según las reglas dadas:

- "short post" si cabe dentro de un límite de 40 caracteres.
- "long post" si es mayor a 40 caracteres y cabe dentro de un límite de 80 caracteres.
- "invalid post" si es demasiado largo para caber en cualquiera de los límites.

## Ejemplos

1. `canPost("Hello world")` debe retornar `"short post"`.
2. `canPost("This is a longer message but still under eighty characters.")` debe retornar `"long post"`.
3. `canPost("This message is too long to fit into either of los character limits for a social media post.")` debe retornar `"invalid post"`.

## Constraints

- El input siempre será un string.
- Los límites son inclusivos: 40 y 80 caracteres.
- No hay restricciones sobre el contenido del string (puede incluir espacios, símbolos, etc.).

## Análisis y Aprendizaje

La solución consiste en comparar la longitud del string con los límites dados usando condicionales simples. Es un patrón clásico de clasificación por rangos.

- **Complejidad temporal:** O(1), ya que solo se consulta la longitud y se hacen comparaciones.
- **Complejidad espacial:** O(1), no se usan estructuras adicionales.

Este tipo de problemas ayuda a practicar la lectura de requisitos y la implementación directa de reglas de negocio con condicionales.

**Patrón aprendido:**

- Clasificación por rangos usando condicionales.
- Validación de límites inclusivos.
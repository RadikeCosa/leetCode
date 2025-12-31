---
title: Thermostat Adjuster
source: freecodecamp
series: daily
category: september
createdAt: 2025-12-31
difficulty: easy
topics:
  - logic
  - conditionals
  - math
blogLink: https://blog-astro-rouge.vercel.app/posts/thermostat-adjuster/
problemLink: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-09-15/
---

## Thermostat Adjuster - Análisis y Explicación

## Enunciado del Problema

Dada la actual temperatura de una sala y una temperatura objetivo, retorna un string indicando como ajustar la temperatura basado en las siguientes reglas:

- retorna "heat" si la temperatura actual es menor que la temperatura objetivo
- retorna "cool" si la temperatura actual es mayor que la temperatura objetivo
- retorna "hold" si la temperatura actual es igual a la temperatura objetivo

## Análisis Inicial

### Comprensión del Problema

El problema requiere implementar la lógica básica de un termostato. Debemos comparar dos valores numéricos (`temp` y `target`) y devolver una instrucción de acción en formato de texto. Es un ejercicio fundamental de estructuras de control condicionales.

### Casos de Prueba Identificados

1. **Calentar:** `temp < target` (ej: 68 < 72) -> `"heat"`.
2. **Enfriar:** `temp > target` (ej: 75 > 72) -> `"cool"`.
3. **Mantener:** `temp === target` (ej: 72 === 72) -> `"hold"`.
4. **Números Negativos:** La lógica debe funcionar igual con temperaturas bajo cero.
5. **Decimales:** La comparación debe ser precisa con números flotantes.

## Desarrollo de la Solución

### Enfoque Elegido

El enfoque más directo es utilizar una estructura `if...else if...else` o múltiples sentencias `if` con retornos tempranos (_early returns_). Dado que las tres condiciones son mutuamente excluyentes, cualquiera de estas opciones es eficiente y legible.

### Implementación Paso a Paso

1. **Comparación de Calentamiento:** Si `temp` es estrictamente menor que `target`, retornamos `"heat"`.
2. **Comparación de Enfriamiento:** Si `temp` es estrictamente mayor que `target`, retornamos `"cool"`.
3. **Caso por Defecto:** Si ninguna de las anteriores se cumple, significa que las temperaturas son iguales, por lo que retornamos `"hold"`.

```javascript
function adjustThermostat(temp, target) {
  if (temp < target) {
    return "heat";
  }
  if (temp > target) {
    return "cool";
  }
  return "hold";
}
```

## Análisis de Complejidad

### Complejidad Temporal

**O(1)**. La función realiza un número constante de comparaciones (máximo 2) independientemente de la magnitud de los valores de entrada.

### Complejidad Espacial

**O(1)**. No se utiliza memoria adicional que dependa del tamaño de la entrada; solo se devuelve un string literal.

## Casos Edge y Consideraciones

- **Precisión de punto flotante:** En JavaScript, las comparaciones de números decimales son directas. El problema no especifica un margen de error (_epsilon_), por lo que asumimos igualdad estricta.
- **Valores extremos:** La lógica maneja correctamente valores muy altos, muy bajos o cero.

## Reflexiones y Aprendizajes

### Conceptos Aplicados

- **Estructuras de Control:** Uso de condicionales para la toma de decisiones.
- **Early Returns:** Técnica de retornar apenas se cumple una condición para evitar anidamientos innecesarios y mejorar la legibilidad.

### Posibles Optimizaciones

Para un código más conciso, se podría utilizar el operador ternario encadenado, aunque en este caso la estructura `if` es más clara para representar la lógica de un dispositivo físico.

## Recursos y Referencias

- [MDN - if...else](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/if...else)
- [MDN - Operadores de comparación](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Comparison_Operators)

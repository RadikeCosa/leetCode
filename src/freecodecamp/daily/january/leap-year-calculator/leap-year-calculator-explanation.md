---
title: Leap Year Calculator
source: freecodecamp
series: daily
category: january
createdAt: 2026-01-04
difficulty: easy
topics:
  - calendar
  - date
  - math
blogLink: https://blog-astro-rouge.vercel.app/posts/leap-year-calculator/
problemLink: https://www.freecodecamp.org/learn/daily-coding-challenge/2026-01-04/
---

## Leap Year Calculator - Análisis y Explicación

## Enunciado del Problema

Dado un año, determina si es un año bisiesto.

Un año es bisiesto si satisface las siguientes condiciones:

- Es divisible por 4.
- Sin embargo, si el año es divisible por 100, no es un año bisiesto,
- a menos que también sea divisible por 400.

## Análisis Inicial

### Comprensión del Problema

El problema requiere implementar una función que tome un año como entrada (un número entero) y devuelva un valor booleano indicando si ese año es bisiesto según las reglas del calendario gregoriano. Estas reglas son estándar y se basan en la necesidad de ajustar el calendario solar para que coincida con el año tropical.

La lógica se basa en divisibilidad: un año es bisiesto si es divisible por 4, pero con excepciones para años divisibles por 100 (que no son bisiestos a menos que también sean divisibles por 400). Esto asegura que el calendario se mantenga alineado con las estaciones.

### Casos de Prueba Identificados

Basándonos en las reglas, identificamos los siguientes casos de prueba clave:

1. **Año divisible por 4 pero no por 100**: Bisiesto (ej. 2024, 2028).
2. **Año divisible por 100 pero no por 400**: No bisiesto (ej. 1900, 2100).
3. **Año divisible por 400**: Bisiesto (ej. 2000, 2400).
4. **Año no divisible por 4**: No bisiesto (ej. 2023, 2025).
5. **Casos edge**: Años como 0, años negativos (aunque el problema asume años positivos, es bueno considerar validación).

Estos casos cubren todas las ramas de la lógica condicional.

## Desarrollo de la Solución

### Enfoque Elegido

Elegimos un enfoque directo basado en las reglas de divisibilidad, implementado con una expresión lógica concisa. Esto prioriza la legibilidad y eficiencia, ya que las operaciones de módulo son rápidas y no requieren bucles ni estructuras complejas.

Alternativas consideradas:

- **Enfoque con if-else anidados**: Más verboso, pero claro para principiantes. Tradeoff: Mayor cantidad de código, pero fácil de seguir paso a paso.
- **Expresión lógica**: Más compacta, reduce el riesgo de errores en la lógica anidada.

### Implementación Paso a Paso

1. **Evaluar divisibilidad por 4**: Si el año no es divisible por 4, no es bisiesto.
2. **Excepción para divisibilidad por 100**: Si es divisible por 4, pero también por 100, verificar si es divisible por 400.
3. **Resultado final**: Combinar las condiciones en una expresión booleana que devuelva `true` si es bisiesto, `false` en caso contrario.

La implementación final es:

```javascript
return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
```

Esta expresión captura exactamente las reglas: bisiesto si (divisible por 4 y no por 100) o divisible por 400.

## Análisis de Complejidad

### Complejidad Temporal

La función realiza un número constante de operaciones aritméticas (módulo y comparaciones), independientemente del tamaño del año de entrada. Por lo tanto, la complejidad temporal es O(1), lo que significa que el tiempo de ejecución es constante y eficiente, incluso para años muy grandes. Esto es ideal para este tipo de problema de validación simple.

### Complejidad Espacial

No se utiliza memoria adicional más allá de las variables de entrada y unas pocas operaciones temporales. La complejidad espacial es O(1), ya que no hay arrays, objetos o estructuras de datos dinámicas involucradas.

## Reflexiones y Aprendizajes

### Conceptos Aplicados

- **Operadores lógicos y aritméticos**: Uso de `%` para divisibilidad y `&&`, `||` para combinar condiciones.
- **Legibilidad vs. Concisión**: Elegimos una solución balanceada que es fácil de entender y mantener.

## Recursos y Referencias

- [Reglas de años bisiestos en Wikipedia](https://es.wikipedia.org/wiki/A%C 3%B 1 o_bisiesto)
- [FreeCodeCamp: Leap Year Calculator](https://www.freecodecamp.org/learn/daily-coding-challenge/2026-01-04/)
- Algoritmos relacionados: Validación de fechas, cálculos de calendario.

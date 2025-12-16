---
title: Roman Numeral Parser
source: freecodecamp
series: daily
category: september
createdAt: 2025-12-15
difficulty: easy
topics:
  - strings
  - parsing
blogLink: https://blog-astro-rouge.vercel.app/posts/roman-numeral-parser/
problemLink: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-09-07/
---

## Roman Numeral Parser - Análisis y Explicación

## Enunciado del Problema

Dado un string representando un numero Romano, devolve su valor entero.
Los numeros Romanos se representan con las siguientes letras:

| Letra | Valor |
| ----- | ----- |
| I     | 1     |
| V     | 5     |
| X     | 10    |
| L     | 50    |
| C     | 100   |
| D     | 500   |
| M     | 1000  |

- Los numeros Romanos se escriben sumando los valores de las letras, excepto en los casos donde una letra de menor valor precede a una de mayor valor, en cuyo caso se resta el valor menor del mayor.

## Análisis Inicial

### Comprensión del Problema

El problema nos pide convertir numeros romanos a su equivalente en enteros. Debemos tener en cuenta las reglas de suma y resta basadas en la posición de las letras.

### Casos de Prueba Identificados

Los casos de prueba significativos que consideramos son:

1. Entrada: "III" → Salida Esperada: 3
2. Entrada: "IV" → Salida Esperada: 4
3. Entrada: "IX" → Salida Esperada: 9
4. Entrada: "LVIII" → Salida Esperada: 58
5. Entrada: "MCMXCIV" → Salida Esperada: 1994
6. Entrada: "XLII" → Salida Esperada: 42
7. Entrada: "CDXLIV" → Salida Esperada: 444
8. Entrada: "MMXXI" → Salida Esperada: 2021
9. Entrada: "DCCC" → Salida Esperada: 800

## Desarrollo de la Solución

### Enfoque Elegido

El enfoque que elegimos para resolver el problema es iterar a través del string de numeros romanos, comparando el valor de cada letra con la siguiente para decidir si sumar o restar su valor al total.

### Implementación Paso a Paso

1. Crear un mapa que asocie cada letra romana con su valor entero.
2. Inicializar una variable para almacenar el total.
3. Iterar a través del string de numeros romanos:
   - Si el valor de la letra actual es menor que el valor de la siguiente letra, restar su valor del total.
   - De lo contrario, sumar su valor al total.
4. Devolver el total al final de la iteración.

## Análisis de Complejidad

### Complejidad Temporal

La complejidad temporal de este algoritmo es O(n), donde n es la longitud del string de numeros romanos. Esto se debe a que iteramos una sola vez a través del string para calcular el valor total.

### Complejidad Espacial

La complejidad espacial es O(1) ya que el espacio adicional utilizado (el mapa de valores) es constante y no depende del tamaño de la entrada.

## Casos Edge y Consideraciones

Los casos edge que consideramos incluyen:

1. Entrada vacía: Devolver 0.
2. Numeros romanos invalidos: Asumimos que la entrada siempre sera valida segun las reglas de los numeros romanos.
3. Numeros romanos muy largos: El algoritmo sigue siendo eficiente debido a su complejidad lineal.

## Reflexiones y Aprendizajes

### Conceptos Aplicados

- Mapeo de caracteres a valores.
- Iteración y comparación de valores.
- Manejo de condiciones para sumar o restar valores.

## Recursos y Referencias

- [FreeCodeCamp - Roman Numeral Parser](https://www.freecodecamp.org/learn/daily-coding-challenge/2025-09-07/)
- [Wikipedia - Roman Numerals](https://en.wikipedia.org/wiki/Roman_numerals)

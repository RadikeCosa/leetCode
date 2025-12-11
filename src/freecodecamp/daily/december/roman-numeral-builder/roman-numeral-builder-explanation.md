---
title: Roman Numeral Builder
source: freecodecamp
series: daily
category: december
createdAt: 2025-12-11
difficulty: medium
topics:
  - greedy
  - lookup table
  - string manipulation
  - math
blogLink: https://blog-astro-rouge.vercel.app/posts/roman-numeral-builder/
problemLink: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-12-11/
---

## Roman Numeral Builder - Análisis y Explicación

## Enunciado del Problema

Dado un entero, devuelve su valor equivalente en números romanos.

Los números romanos usan estos símbolos:

Símbolo - Valor
I - 1
V - 5
X - 10
L - 50
C - 100
D - 500
M - 1000
Los números romanos se escriben de mayor a menor, de izquierda a derecha, utilizando las siguientes reglas:

La adición se usa cuando un símbolo es seguido por otro de igual o menor valor. Por ejemplo, 18 se escribe como XVIII (10 + 5 + 1 + 1 + 1 = 18).
La sustracción se usa cuando un símbolo menor aparece antes de uno mayor, para representar 4 o 9 en cualquier valor posicional. Por ejemplo, 19 se escribe como XIX (10 + (10 - 1)).
No se puede repetir un símbolo más de tres veces seguidas. La sustracción se usa cuando de otro modo necesitarías escribir un símbolo más de tres veces seguidas. Por lo tanto, el número más grande que puedes escribir es 3999.
Aquí hay un ejemplo más: dado 1464, devuelve "MCDLXIV" (1000 + (500 - 100) + 50 + 10 + (5 - 1)).

## Análisis Inicial

### Comprensión del Problema

El objetivo de este problema es transformar un número entero dado en su representación equivalente utilizando la notación de números romanos. Para lograrlo, es necesario comprender las reglas de construcción de los números romanos, que combinan símbolos específicos y aplican tanto sumas como restas según la posición y el valor relativo de los símbolos. La función debe manejar correctamente los casos en los que se requiere sustracción (como 4, 9, 40, 90, etc.), evitar repeticiones indebidas de símbolos y asegurar que el resultado siga las convenciones estándar de la numeración romana. En resumen, se trata de convertir un valor decimal en una cadena que represente fielmente su valor en el sistema romano.

### Casos de Prueba Identificados

Para asegurar el correcto funcionamiento de la función, se han identificado varios casos de prueba que cubren diferentes escenarios relevantes:

- Números que solo requieren suma de símbolos, como 18 → "XVIII".
- Números que requieren el uso de la regla de sustracción, como 19 → "XIX".
- Números con combinaciones de suma y sustracción en distintas posiciones, como 1464 → "MCDLXIV".
- Números grandes que utilizan varios símbolos, como 2025 → "MMXXV".
- El caso límite superior permitido, 3999 → "MMMCMXCIX".

Estos casos permiten verificar que la función maneja correctamente tanto la construcción básica como las reglas especiales de la numeración romana.

## Desarrollo de la Solución

### Enfoque Elegido

El enfoque más eficiente consiste en utilizar un arreglo ordenado de pares valor-símbolo, que incluya tanto los valores estándar (1000, 500, 100, etc.) como los valores que representan las reglas de sustracción (900, 400, 90, 40, 9, 4). Se recorre este arreglo de mayor a menor y, mientras el número sea mayor o igual al valor actual, se agrega el símbolo correspondiente al resultado y se resta ese valor al número. De esta manera, se manejan automáticamente tanto las sumas como las sustracciones requeridas por la notación romana, garantizando que la conversión sea correcta y eficiente.

### Implementación Paso a Paso

#### Código completo de la función

```js
function toRoman(num) {
  const romanMap = [
    { value: 1000, symbol: "M" },
    { value: 900, symbol: "CM" },
    { value: 500, symbol: "D" },
    { value: 400, symbol: "CD" },
    { value: 100, symbol: "C" },
    { value: 90, symbol: "XC" },
    { value: 50, symbol: "L" },
    { value: 40, symbol: "XL" },
    { value: 10, symbol: "X" },
    { value: 9, symbol: "IX" },
    { value: 5, symbol: "V" },
    { value: 4, symbol: "IV" },
    { value: 1, symbol: "I" },
  ];
  let result = "";
  for (const { value, symbol } of romanMap) {
    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }
  return result;
}
```

1. Definir un arreglo de pares valor-símbolo, ordenado de mayor a menor, incluyendo los valores de sustracción (por ejemplo, 900: "CM", 400: "CD", etc.).
2. Inicializar una cadena vacía para construir el resultado.
3. Recorrer el arreglo de pares. Para cada par, mientras el número de entrada sea mayor o igual al valor actual, agregar el símbolo correspondiente al resultado y restar ese valor al número.
4. Repetir el proceso hasta que el número llegue a cero.
5. Retornar la cadena resultante, que contendrá la representación romana del número original.

## Análisis de Complejidad

### Complejidad Temporal

La complejidad temporal de este algoritmo es O(1), ya que el número de iteraciones está acotado por la cantidad de símbolos romanos definidos (13 pares valor-símbolo). Para cualquier número dentro del rango permitido (1 a 3999), el ciclo recorre una cantidad constante de elementos y realiza operaciones simples.

### Complejidad Espacial

La complejidad espacial también es O(1), ya que el espacio utilizado no depende del tamaño del número de entrada, sino que es constante: solo se almacena la cadena resultado y la tabla de símbolos, ambos de tamaño fijo.

## Casos Edge y Consideraciones

Algunos casos especiales a considerar:

- El valor mínimo permitido es 1 ("I").
- El valor máximo permitido es 3999 ("MMMCMXCIX").
- No se permiten números menores a 1 ni mayores a 3999 según la notación romana estándar.
- El algoritmo asume que la entrada siempre es un entero válido dentro del rango.

## Reflexiones y Aprendizajes

### Conceptos Aplicados

Se aplicó el patrón de tabla de búsqueda (lookup table) para mapear valores decimales a símbolos romanos, y el patrón greedy para construir la representación romana eligiendo siempre el mayor valor posible en cada paso.

## Recursos y Referencias

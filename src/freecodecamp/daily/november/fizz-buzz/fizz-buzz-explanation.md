---
title: "fizz-buzz"
difficulty: "easy"
topics:
  - Algorithm
source: "freecodecamp"
series: "daily"
category: "freecodecamp"
createdAt: "2025-11-23"
---

# Fizz Buzz - Análisis y Explicación

## Enunciado del Problema

### FizzBuzz

Dado un entero (n), devuelve un array de enteros desde 1 hasta n (inclusive), reemplazando los números que son múltiplos de:

- 3 por "Fizz".
- 5 por "Buzz".
- 3 y 5 por "FizzBuzz".

## Análisis Inicial

### Comprensión del Problema

La clave de este problema es identificar los múltiplos de 3 y 5 dentro del rango dado y reemplazarlos con las cadenas correspondientes.

### Casos de Prueba Identificados

Tests

1. fizzBuzz(2) should return [1, 2].
2. fizzBuzz(4) should return [1, 2, "Fizz", 4].
3. fizzBuzz(8) should return [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8].
4. fizzBuzz(20) should return [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz", 16, 17, "Fizz", 19, "Buzz"].
5. fizzBuzz(50) should return [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz", 16, 17, "Fizz", 19, "Buzz", "Fizz", 22, 23, "Fizz", "Buzz", 26, "Fizz", 28, 29, "FizzBuzz", 31, 32, "Fizz", 34, "Buzz", "Fizz", 37, 38, "Fizz", "Buzz", 41, "Fizz", 43, 44, "FizzBuzz", 46, 47, "Fizz", 49, "Buzz"].

## Desarrollo de la Solución

1. Inicializar un array vacío para almacenar los resultados.
2. Iterar desde 1 hasta n (inclusive).
3. Para cada número:
   - Si es múltiplo de 3 y 5, agregar "FizzBuzz" al array.
   - Si es múltiplo de solo 3, agregar "Fizz" al array.
   - Si es múltiplo de solo 5, agregar "Buzz" al array.
   - Si no es múltiplo de ninguno, agregar el número al array.
   - Devolver el array resultante.

Para determinar si un número es múltiplo de otro, se utiliza el operador módulo (%). Si `num % divisor === 0`, entonces `num` es múltiplo de `divisor`.

### Enfoque Elegido

function fizzBuzz(n) {
const result = [];
for (let i = 1; i <= n; i++) {
if (i % 3 === 0 && i % 5 === 0) {
result.push("FizzBuzz");
} else if (i % 3 === 0) {
result.push("Fizz");
} else if (i % 5 === 0) {
result.push("Buzz");
} else {
result.push(i);
}
}

return result;
}

## Análisis de Complejidad

### Complejidad Temporal

La complejidad temporal de esta solución es O(n), donde n es el número de enteros desde 1 hasta n. Esto se debe a que el algoritmo itera una vez a través de todos los números en el rango, realizando un número constante de operaciones para cada número (verificar múltiplos y agregar al array).

### Complejidad Espacial

La complejidad espacial también es O(n) en el peor de los casos, ya que se almacena un array que contiene n elementos (ya sea números o cadenas) en la memoria.

## Reflexiones y Aprendizajes

### Conceptos Aplicados

- Uso del operador módulo (%) para determinar múltiplos.
- Estructuras de control (bucles y condicionales) para iterar y tomar decisiones basadas en condiciones.
- Manipulación de arrays para almacenar y devolver resultados.
- Importancia de considerar casos especiales (múltiplos de ambos 3 y 5).

### Posibles Optimizaciones

Dado que el problema requiere generar una lista completa de resultados, la optimización en términos de complejidad temporal y espacial es limitada. Sin embargo, se podrían considerar enfoques alternativos para reducir la cantidad de verificaciones realizadas, aunque esto podría complicar el código sin un beneficio significativo en este caso específico.

## Recursos y Referencias

- [Documentación de JavaScript sobre el operador módulo](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Remainder)
- [Artículo sobre FizzBuzz en Wikipedia](https://es.wikipedia.org/wiki/Fizz_buzz)

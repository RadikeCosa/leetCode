---
name: gcd
source: freecodecamp
series: daily
category: freecodecamp
difficulty: easy
topics: []
createdAt: 2025-11-05
---

# Gcd - Análisis y Explicación

## Enunciado del Problema

**EN:**
Given two positive integers, return their greatest common divisor (GCD).
The GCD of two integers is the largest number that divides evenly into both numbers without leaving a remainder.
For example, the divisors of 4 are 1, 2, and 4. The divisors of 6 are 1, 2, 3, and 6. So given 4 and 6, return 2, the largest number that appears in both sets of divisors.

**ES:**
Dados dos enteros positivos, devuelve su máximo común divisor (MCD).
El MCD de dos enteros es el número más grande que divide ambos números sin dejar residuo.
Por ejemplo, los divisores de 4 son 1, 2 y 4. Los divisores de 6 son 1, 2, 3 y 6. Entonces, dado 4 y 6, devuelve 2, el número más grande que aparece en ambos conjuntos de divisores.

## Análisis Inicial

### Comprensión del Problema

El objetivo es encontrar el mayor número que divide a dos enteros positivos sin dejar residuo. Aunque existen métodos como listar todos los divisores y buscar el mayor común, el algoritmo de Euclides es el más eficiente y universalmente aceptado para este propósito.

El algoritmo de Euclides se basa en el principio de que el MCD de dos números también divide su diferencia. La versión original emplea restas sucesivas: se resta el menor al mayor hasta que ambos números sean iguales, obteniendo así el MCD. Sin embargo, la versión moderna utiliza el operador módulo, lo que permite reducir el problema de forma mucho más rápida y eficiente.

La formulación matemática del algoritmo de Euclides moderno es:

- Si $b = 0$, entonces $\gcd(a, b) = a$.
- En caso contrario, $\gcd(a, b) = \gcd(b, a \bmod b)$.

Esta versión con módulo es considerablemente más eficiente que la variante de restas sucesivas y es la que se utiliza habitualmente en programación y matemáticas computacionales.

### Casos de Prueba Identificados

Los siguientes casos de prueba cubren distintos escenarios relevantes:

- Números pequeños con divisor común: `gcd(4, 6) → 2`
- Números donde uno es múltiplo del otro: `gcd(20, 15) → 5`
- Números primos entre sí: `gcd(13, 17) → 1`
- Números grandes: `gcd(654, 456) → 6`
- Números con gran divisor común: `gcd(3456, 4320) → 864`

Ejemplo de tests:

```typescript
describe("Gcd", () => {
  it("gcd(4, 6) should return 2.", () => {
    expect(gcd(4, 6)).toBe(2);
  });
  it("gcd(20, 15) should return 5.", () => {
    expect(gcd(20, 15)).toBe(5);
  });
  it("gcd(13, 17) should return 1.", () => {
    expect(gcd(13, 17)).toBe(1);
  });
  it("gcd(654, 456) should return 6.", () => {
    expect(gcd(654, 456)).toBe(6);
  });
  it("gcd(3456, 4320) should return 864.", () => {
    expect(gcd(3456, 4320)).toBe(864);
  });
});
```

## Desarrollo de la Solución

### Enfoque Iterativo

Además de la versión recursiva, el algoritmo de Euclides puede implementarse de forma iterativa. Esto evita el uso de llamadas recursivas y es útil cuando los números son muy grandes.

#### Código iterativo

```javascript
function gcdIterative(x, y) {
  while (y !== 0) {
    let temp = y;
    y = x % y;
    x = temp;
  }
  return x;
}
```

#### Explicación para principiantes

1. Mientras el segundo número (`y`) no sea 0, repetimos el proceso:
   - Guardamos el valor de `y` en una variable temporal.
   - Calculamos el resto de dividir `x` entre `y` y lo guardamos en `y`.
   - Ponemos el valor temporal en `x`.
2. Cuando `y` sea 0, el resultado está en `x`.

Este método hace lo mismo que la versión recursiva, pero usando un bucle en vez de llamar a la función varias veces. Es más seguro para casos con números muy grandes porque no depende del límite de recursión del lenguaje.

### Enfoque Elegido

Se utilizará el algoritmo de Euclides en su versión con módulo, por su eficiencia y simplicidad. La función se implementará de forma recursiva o iterativa, según convenga para claridad y rendimiento.

### Implementación Paso a Paso

La función implementada recibe dos enteros positivos y aplica el algoritmo de Euclides de forma recursiva:

```javascript
function gcd(x, y) {
  if (y === 0) {
    return x;
  }
  return gcd(y, x % y);
}
```

La recursión termina cuando el segundo número es 0, devolviendo el primero como resultado. En cada llamada, se reduce el problema a un par de números más pequeños, garantizando eficiencia y claridad.

2. Aplicar el algoritmo de Euclides:

- Si el segundo número es 0, devolver el primero.
- Si no, llamar recursivamente a la función con el segundo número y el resto de la división del primero entre el segundo.

3. Retornar el resultado como el MCD.

## Análisis de Complejidad

### Complejidad Temporal

El algoritmo de Euclides tiene una complejidad temporal de $O(\log(\text{min}(a, b)))$, ya que en cada paso reduce significativamente el tamaño de los números involucrados.

### Complejidad Espacial

Si se implementa de forma iterativa, el espacio adicional es $O(1)$. Si se implementa de forma recursiva, el espacio es $O(\text{profundidad})$, que en el peor caso es $O(\log(\text{min}(a, b)))$ por el stack de llamadas.

## Casos Edge y Consideraciones

Algunas consideraciones importantes:

- El enunciado especifica números positivos, pero si se recibe un 0, por convención matemática, $\gcd(a, 0) = a$.
- Si ambos números son iguales, el resultado es el propio número.
- Si los números son primos, el resultado será 1.
- No se consideran números negativos ni decimales en este problema.

## Reflexiones y Aprendizajes

### Conceptos Aplicados

- Algoritmo de Euclides: patrón clásico para problemas de divisibilidad.
- Recursión: simplifica la lógica y reduce el código.
- Análisis de complejidad: permite justificar la eficiencia de la solución.

### Aprendizajes

Este problema refuerza la importancia de conocer algoritmos clásicos y sus variantes. La recursión es útil y elegante, pero en casos de inputs muy grandes, la versión iterativa puede ser preferible para evitar desbordamiento de stack.

### Posibles Optimizaciones

El algoritmo de Euclides ya es óptimo para este problema. Alternativamente, se podría implementar la versión iterativa para evitar el stack de llamadas recursivas en lenguajes donde la recursión profunda puede ser problemática.

<!-- TODO: ¿Se puede mejorar? -->

## Recursos y Referencias

- [Wikipedia: Algoritmo de Euclides](https://es.wikipedia.org/wiki/Algoritmo_de_Euclides)

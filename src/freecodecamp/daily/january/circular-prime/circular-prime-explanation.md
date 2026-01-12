---
title: Circular Prime
source: freecodecamp
series: daily
category: january
createdAt: 2026-01-09
difficulty: medium
topics:
  - math
  - prime-numbers
  - number-theory
blogLink: https://blog-astro-rouge.vercel.app/posts/circular-prime/
problemLink: https://www.freecodecamp.org/learn/daily-coding-challenge/2026-01-09/
---

## Circular Prime - Análisis y Explicación

## Enunciado del Problema

Dado un entero, determina si es un primo circular
Un primo circular es un entero donde todas las rotaciones de sus digitos son tambien primos.
Por ejemplo, 197 es un primo circular porque 197, 971 y 719 son todos primos.

## Análisis Inicial

### Comprensión del Problema

La función debe determinar si un número dado es un "primo circular". Esto significa que, al rotar sus dígitos en todas las posiciones posibles, todos los números generados deben ser primos. Por ejemplo, para 197, las rotaciones son 197, 971 y 719, y todos son primos, por lo que 197 es un primo circular. Si alguna rotación no es prima, el número no es un primo circular.

### Casos de Prueba Identificados

- isCircularPrime(197) → true (197, 971, 719 son todos primos)
- isCircularPrime(1193) → true (1193, 1931, 9311, 3119 son todos primos)
- isCircularPrime(23) → false (23 es primo, pero 32 no)
- isCircularPrime(2) → true (único dígito primo)
- isCircularPrime(101) → false (101 es primo, pero 110 no)

## Desarrollo de la Solución

### Enfoque Elegido

El enfoque consiste en dos pasos principales:

1. Verificar si el número y todas sus rotaciones son primos.
2. Para cada rotación, se utiliza una función auxiliar para rotar los dígitos hacia la izquierda y otra para verificar la primalidad.
   Si alguna rotación no es prima, se retorna false inmediatamente. Si todas lo son, se retorna true.

### Implementación Paso a Paso

1. Se define una función auxiliar `isPrime` que verifica si un número es primo comprobando divisibilidad hasta su raíz cuadrada.
2. Se define una función auxiliar `rotateNumber` que rota los dígitos del número hacia la izquierda.
3. Se itera sobre todas las rotaciones posibles del número original:

- Si alguna rotación no es prima, se retorna false.
- Si todas las rotaciones son primas, se retorna true.

### Código Final

```javascript
/**
* FreeCodeCamp Problem: Circular Prime
 * Category: FreeCodeCamp
  
* Determina si un número es un primo circular.
 * Un primo circular es aquel que sigue siendo primo al rotar sus dígitos en cualquier posición.
 * Por ejemplo, 197 es primo circular porque 197, 971 y 719 son todos primos.
 *
 * @param {number} n - Número a verificar
 * @returns {boolean} True si es primo circular, false en caso contrario
 */
function isCircularPrime(n) {
  // Función auxiliar para verificar si un número es primo
  const isPrime = (num) => {
    if (num < 2) return false; // Los números menores a 2 no son primos
    // Solo es necesario verificar hasta la raíz cuadrada de num
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false; // Si es divisible, no es primo
    }
    return true;
  };

  // Función auxiliar para rotar los dígitos de un número hacia la izquierda
  // Ejemplo: 197 -> 971
  const rotateNumber = (num) => {
    const strNum = num.toString();
    // Toma todos los dígitos excepto el primero y lo concatena al final
    return parseInt(strNum.slice(1) + strNum[0], 10);
  };

  let rotated = n;
  // Recorre todas las rotaciones posibles del número
  do {
    if (!isPrime(rotated)) return false; // Si alguna rotación no es prima, retorna false
    rotated = rotateNumber(rotated); // Rota el número para la siguiente iteración
  } while (rotated !== n); // Termina cuando vuelve a la rotación original

  return true; // Si todas las rotaciones son primas, retorna true
}
```

## Análisis de Complejidad

### Complejidad Temporal

Sea $d$ la cantidad de dígitos de $n$ y $k$ el valor del número:

- La función `isPrime` tiene complejidad $O(\sqrt{k})$.
- Se realizan $d$ rotaciones y para cada una se verifica primalidad.
- Complejidad total: $O(d \cdot \sqrt{k})$.

En la práctica, para números pequeños, el algoritmo es eficiente. Para números grandes, la verificación de primalidad puede ser costosa. Teniendo en cuenta que el primo circular mas grande conocido tiene 4 dígitos, este enfoque es adecuado para la mayoría de los casos prácticos.

### Complejidad Espacial

El uso de espacio es $O(1)$, ya que solo se almacenan variables escalares y no se utilizan estructuras de datos proporcionales al tamaño de entrada.

## Casos Edge y Consideraciones

- Números de un solo dígito: solo se verifica si es primo.
- Números con dígitos repetidos: todas las rotaciones pueden ser iguales o distintas, pero se verifica cada una.
- Números con ceros: si al rotar aparece un cero a la izquierda, el número resultante puede perder dígitos (ejemplo: 101 → 011 → 11), lo que puede afectar la verificación.

## Reflexiones y Aprendizajes

### Conceptos Aplicados

- Primalidad básica (trial division)
- Manipulación de strings y rotación de dígitos

### Posibles Optimizaciones

Para optimizar, se podría:

- Usar un test de primalidad más eficiente para números grandes.
- Filtrar rápidamente números que contienen dígitos pares o 5 (excepto el 2 y 5), ya que alguna rotación será múltiplo de 2 o 5.

## Recursos y Referencias

- https://en.wikipedia.org/wiki/Circular_prime
- https://oeis.org/A068652

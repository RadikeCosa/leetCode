---
title: Unorder Of Operations
source: freecodecamp
series: daily
category: august
createdAt: 2025-12-09
difficulty: easy
topics:
  - arithmetic
  - arrays
  - simulation
blogLink: https://blog-astro-rouge.vercel.app/posts/unorder-of-operations/
problemLink: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-08-27/
---

## Unorder Of Operations - Análisis y Explicación

## Enunciado del Problema

Dado un arreglo de números enteros y un arreglo de operadores en forma de cadenas, aplica las operaciones a los números secuencialmente de izquierda a derecha. Repite los operadores según sea necesario hasta que todos los números hayan sido utilizados. Devuelve el resultado final.

Por ejemplo, dado:

- Números: $[1,\, 2,\, 3,\, 4,\, 5]$
- Operadores: $['+',\, '*']$

Debes evaluar la expresión de izquierda a derecha, ignorando la precedencia estándar de los operadores:

$$
1 + 2 * 3 + 4 * 5
$$

Esto significa que se realiza cada operación en orden, sin importar si es suma o multiplicación.

Los operadores válidos son: $+$, $-$, $\times$, $\div$, y $\%$ (módulo).

## Análisis Inicial

### Comprensión del Problema

La función debe recorrer el arreglo de números y aplicar los operadores dados de forma secuencial, de izquierda a derecha, ignorando la precedencia matemática habitual. Los operadores se repiten en orden si hay más números que operadores. El resultado se obtiene realizando cada operación en el orden en que aparecen los números y operadores, hasta procesar todos los elementos del arreglo.

### Casos de Prueba Identificados

Para asegurar el correcto funcionamiento de la función, se han considerado los siguientes escenarios:

- Secuencias donde los operadores se repiten y deben aplicarse estrictamente de izquierda a derecha, sin respetar la precedencia matemática estándar.
- Uso de todos los operadores válidos: suma ($+$), resta ($-$), multiplicación ($\times$), división ($\div$) y módulo ($\%$).
- Arreglos de números y operadores de diferentes longitudes, verificando que los operadores se repiten en orden cuando es necesario.
- Casos donde el resultado puede ser negativo o involucra operaciones de módulo y división.

A continuación se listan los casos de prueba extraídos del enunciado:

- $\texttt{evaluate([5,\, 6,\, 7,\, 8,\, 9],\ ['+',\ '-'])}$ debe retornar $3$
- $\texttt{evaluate([17,\, 61,\, 40,\, 24,\, 38,\, 14],\ ['+',\ '%'])}$ debe retornar $38$
- $\texttt{evaluate([20,\, 2,\, 4,\, 24,\, 12,\, 3],\ ['*',\ '/'])}$ debe retornar $60$
- $\texttt{evaluate([11,\, 4,\, 10,\, 17,\, 2],\ ['*',\ '*',\ '%'])}$ debe retornar $30$
- $\texttt{evaluate([33,\, 11,\, 29,\, 13],\ ['/',\ '-'])}$ debe retornar $-2$

## Desarrollo de la Solución

### Enfoque Elegido

El enfoque consiste en recorrer el arreglo de números y aplicar los operadores de forma secuencial, ignorando la precedencia matemática estándar. Se utiliza un acumulador que comienza con el primer número y, en cada iteración, se aplica el operador correspondiente (de manera cíclica) entre el acumulador y el siguiente número. Este proceso se repite hasta procesar todos los números del arreglo.

### Implementación Paso a Paso

1. Inicializar el resultado con el primer número del arreglo.
2. Recorrer el resto de los números, desde el segundo elemento.
3. Para cada número, seleccionar el operador correspondiente usando el índice actual, repitiendo los operadores si es necesario.
4. Aplicar la operación entre el resultado acumulado y el número actual.
5. Continuar hasta procesar todos los números.
6. Retornar el resultado final.

Código completo:

```javascript
/**
 * Aplica operaciones aritméticas secuencialmente de izquierda a derecha sobre un arreglo de números,
 * ignorando la precedencia estándar de operadores. Repite los operadores según sea necesario hasta
 * consumir todos los números.
 *
 * @param {number[]} numbers - Arreglo de números enteros a evaluar.
 * @param {string[]} operators - Arreglo de operadores aritméticos ('+', '-', '*', '/', '%') que se aplican en orden y se repiten si es necesario.
 * @returns {number} El resultado final de aplicar las operaciones secuencialmente de izquierda a derecha.
 */
function evaluate(numbers, operators) {
  let result = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    const op = operators[(i - 1) % operators.length];
    const num = numbers[i];
    switch (op) {
      case "+":
        result += num;
        break;
      case "-":
        result -= num;
        break;
      case "*":
        result *= num;
        break;
      case "/":
        result = Math.trunc(result / num);
        break;
      case "%":
        result %= num;
        break;
    }
  }
  return result;
}

export default evaluate;
```

**Explicación del código:**  
Se utiliza un bucle `for` para recorrer los números y aplicar el operador correspondiente en cada paso. El operador se selecciona de forma cíclica usando el índice y el operador actual. El bloque `switch` permite aplicar de manera clara y eficiente cada operación aritmética según el operador recibido, facilitando la lectura y el mantenimiento del código. El uso de `Math.trunc` en la división asegura que el resultado sea un número entero, tal como se espera en la mayoría de los problemas de este tipo. Finalmente, la función retorna el resultado acumulado.

---

## Análisis de Complejidad

### Complejidad Temporal

La complejidad temporal es $\mathcal{O}(n)$, donde $n$ es la cantidad de números en el arreglo, ya que se recorre una vez el arreglo de números.

### Complejidad Espacial

La complejidad espacial es $\mathcal{O}(1)$, ya que solo se utiliza una variable para acumular el resultado y no se requiere espacio adicional proporcional al tamaño de la entrada.

---

## Casos Edge y Consideraciones

- Si el arreglo de operadores es más corto que el de números, los operadores se repiten en orden.
- Se asume que los datos de entrada son válidos y no hay divisiones por cero ni operadores inválidos.
- El resultado de la división se trunca hacia cero para mantener la consistencia con los ejemplos.

---

## Reflexiones y Aprendizajes

### Conceptos Aplicados

Se aplicaron técnicas de simulación y manejo de arreglos, así como el uso de estructuras de control como el bucle `for` y el bloque `switch` para seleccionar operaciones dinámicamente.

### Posibles Optimizaciones

Dado que la solución es lineal y utiliza espacio constante, no se requieren optimizaciones adicionales para este problema. Si se quisiera soportar validaciones de entrada o manejo de errores, se podrían agregar comprobaciones extra.

---

## Recursos y Referencias

- [Operadores aritméticos en JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators)
- [Math.trunc en JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc)
- Problema original en [freeCodeCamp](https://www.freecodecamp.org/learn/daily-coding-challenge/2025-08-27/)

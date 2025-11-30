---
name: is-fizz-buzz
source: freecodecamp
series: daily
category: daily
difficulty: easy
topics: []
createdAt: 2025-11-26
---

# Is Fizz Buzz - Análisis y Explicación

## Enunciado del Problema

Dado un array determina si es una cadena válida de Fizz Buzz desde el 1 hasta el ultimo numero del array. Una cadena válida de Fizz Buzz sigue las siguientes reglas:

- Si el número es divisible por 3, debe ser reemplazado por "Fizz".
- Si el número es divisible por 5, debe ser reemplazado por "Buzz".
- Si el número es divisible por ambos 3 y 5, debe ser reemplazado por "FizzBuzz".
- Los demás números deben aparecer como enteros en orden ascendente, comenzando desde 1.
- La secuencia debe comenzar en 1 y no debe tener elementos faltantes o adicionales.

## Análisis Inicial

### Comprensión del Problema

El problema nos pide chequear una secuencia para verificar si sigue las reglas del juego Fizz Buzz. Esto implica comparar cada elemento de la secuencia con el valor esperado basado en su posición (índice + 1).

### Casos de Prueba Identificados

1. Secuencia válida: [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]
2. Secuencia inválida (número incorrecto): [1, 2, 3, 4]
3. Secuencia inválida (elemento faltante): [1, 2, "Fizz", 4, "Buzz", 7]
4. Secuencia inválida (elemento adicional): [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, "FizzBuzz", 16]
5. Secuencia vacía: []
6. Secuencia con un solo elemento: [1]
7. Secuencia con un solo elemento inválido: ["Fizz"]
8. Secuencia larga válida: [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz", 16, 17, "Fizz", 19, "Buzz", "Fizz", 22, 23, "Fizz", "Buzz", 26, "Fizz", 28, 29, "FizzBuzz", 31, 32, "Fizz", 34, "Buzz", "Fizz", 37, 38, "Fizz", "Buzz", 41, "Fizz", 43, 44, "FizzBuzz", 46, 47, "Fizz", 49, "Buzz"]
9. Secuencia larga inválida (error en el medio): [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, "Buzz", 16, 17, "Fizz", 19, "Buzz", "Fizz", 22, 23, "Fizz", "Buzz", 26, "Fizz", 28, 29, "FizzBuzz", 31, 32, "Fizz", 34, "Buzz", "Fizz", 37, 38, "Fizz", "Buzz", 41, "Fizz", 43, 44, "FizzBuzz", 46, 47, "Fizz", 49, "Buzz"]

## Desarrollo de la Solución

### Enfoque Elegido

Para resolver el problema, recorreremos la secuencia y para cada índice calcularemos el valor esperado según las reglas de Fizz Buzz. Compararemos este valor esperado con el valor real en la secuencia. Si encontramos alguna discrepancia, retornaremos false. Si completamos la verificación sin discrepancias, retornaremos true.

### Implementación Paso a Paso

1. **Recorrer la secuencia**  
   Iterar sobre cada elemento del array, usando el índice para determinar el número esperado (índice + 1).

2. **Calcular el valor esperado según Fizz Buzz**  
   Para cada posición:

   - Si el número esperado es divisible por 3 y 5, el valor esperado es `"FizzBuzz"`.
   - Si solo es divisible por 3, el valor esperado es `"Fizz"`.
   - Si solo es divisible por 5, el valor esperado es `"Buzz"`.
   - Si no es divisible por ninguno, el valor esperado es el número mismo.

3. **Comparar el valor esperado con el valor real**  
   Si el elemento en la secuencia no coincide exactamente con el valor esperado, retornar `false` inmediatamente.

4. **Verificar longitud y orden**  
   La secuencia debe comenzar en 1 y no tener elementos faltantes ni adicionales. Si el recorrido termina sin discrepancias, retornar `true`.

```javascript
function isFizzBuzz(sequence) {
  for (let i = 0; i < sequence.length; i++) {
    const num = i + 1;
    let expected;

    if (num % 3 === 0 && num % 5 === 0) {
      expected = "FizzBuzz";
    } else if (num % 3 === 0) {
      expected = "Fizz";
    } else if (num % 5 === 0) {
      expected = "Buzz";
    } else {
      expected = num;
    }

    if (sequence[i] !== expected) {
      return false;
    }
  }

  return true;
}
```

## Análisis de Complejidad

### Complejidad Temporal

La complejidad temporal es O(n), donde n es la longitud de la secuencia. Esto se debe a que recorremos la secuencia una sola vez, realizando operaciones constantes para cada elemento.

### Complejidad Espacial

La complejidad espacial es O(1), ya que utilizamos una cantidad constante de espacio adicional independientemente del tamaño de la secuencia de entrada.

## Reflexiones y Aprendizajes

### Conceptos Aplicados

- Uso de estructuras de control (bucles y condicionales).
- Comprensión de divisibilidad y modularidad.
- Validación de secuencias y patrones.

### Posibles Optimizaciones

Dado que la solución ya es lineal en tiempo y constante en espacio, no hay optimizaciones significativas que se puedan aplicar para lograr mejoras significativas en rendimiento

## Recursos y Referencias

- [Fizz Buzz en Wikipedia](https://en.wikipedia.org/wiki/Fizz_buzz)

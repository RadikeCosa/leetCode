---
title: "word-guesser"
difficulty: "easy"
topics:
  - Algorithm
source: "freecodecamp"
series: "daily"
category: "freecodecamp"
createdAt: "2025-11-29"
---

# Word Guesser - Análisis y Explicación

## Enunciado del Problema

Te dan dos cadenas de la misma longitud, una palabra secreta y una suposición. Compara la suposición con la palabra secreta usando las siguientes reglas:

La palabra secreta y la suposición solo consistirán en letras mayúsculas ("A" a "Z");  
Por cada letra en la suposición, reemplázala con un número según cómo coincida con la palabra secreta:  
"2" si la letra está en la palabra secreta y en la posición correcta.  
"1" si la letra está en la palabra secreta pero en la posición incorrecta.  
"0" si la letra no está en la palabra secreta.
Cada letra en la palabra secreta puede usarse como máximo una vez.
Las coincidencias exactas ("2") se asignan primero, luego las coincidencias parciales ("1") se asignan de izquierda a derecha para las letras restantes.
Si una letra aparece varias veces en la suposición, solo puede coincidir tantas veces como aparece en la palabra secreta.
Por ejemplo, dada una palabra secreta "APPLE" y una suposición "POPPA", devuelve "10201":
La "P" está en la palabra secreta pero en la posición incorrecta ("1"), la "O" no está en la palabra secreta ("0"), la segunda "P" está en la posición correcta ("2"), la segunda "P" es un cero ("0") porque las dos "P" en la palabra secreta ya se han usado, y la "A" está en la posición incorrecta ("1").

## Análisis Inicial

### Comprensión del Problema

En un primer analissis, el problema requiere comparar dos cadenas de igual longitud y asignar valores numéricos basados en la coincidencia de letras y sus posiciones.

### Casos de Prueba Identificados

1. Palabra secreta: "APPLE", Suposición: "POPPA" → Resultado esperado: "10201"
2. Palabra secreta: "BANANA", Suposición: "ANANAB" → Resultado esperado: "121210"
3. Palabra secreta: "ORANGE", Suposición: "ORANGE" → Resultado esperado: "222222"
4. Palabra secreta: "GRAPE", Suposición: "PEARG" → Resultado esperado: "11111"
5. Palabra secreta: "MANGO", Suposición: "GAMON" → Resultado esperado: "11111"
6. Palabra secreta: "PEACH", Suposición: "CHEAP" → Resultado esperado: "11111"
7. Palabra secreta: "KIWI", Suposición: "WIKI" → Resultado esperado: "1212"
8. Palabra secreta: "STRAWBERRY", Suposición: "BERRYSTRAY" → Resultado esperado: "1111111111"

## Desarrollo de la Solución

### Enfoque Elegido

El enfoque elegido es iterar a través de ambas cadenas para identificar coincidencias exactas y parciales, utilizando estructuras de datos auxiliares para rastrear las letras ya coincidentes.

### Implementación Paso a Paso

el primer paso es identificar las coincidencias exactas ("2") y marcar esas letras como usadas. Luego, en un segundo paso, se buscan las coincidencias parciales ("1") entre las letras restantes.
Aquí tienes la solución en JavaScript, explicada línea por línea:

```javascript
function wordGuesser(secret, guess) {
  const result = Array(secret.length).fill("0"); // Inicializamos el resultado con '0's
  const secretUsed = Array(secret.length).fill(false); // Marcamos letras usadas en la palabra secreta
  const guessUsed = Array(guess.length).fill(false); // Marcamos letras usadas en la suposición

  // Primer paso: encontrar coincidencias exactas
  for (let i = 0; i < secret.length; i++) {
    if (guess[i] === secret[i]) {
      result[i] = "2"; // Coincidencia exacta
      secretUsed[i] = true; // Marcamos la letra como usada en la palabra secreta
      guessUsed[i] = true; // Marcamos la letra como usada en la suposición
    }
  }
  // Segundo paso: encontrar coincidencias parciales
  for (let i = 0; i < guess.length; i++) {
    if (!guessUsed[i]) {
      // Solo consideramos letras no usadas en la suposición
      for (let j = 0; j < secret.length; j++) {
        if (!secretUsed[j] && guess[i] === secret[j]) {
          result[i] = "1"; // Coincidencia parcial
          secretUsed[j] = true; // Marcamos la letra como usada en la palabra secreta
          break; // Salimos del bucle interno una vez que encontramos una coincidencia
        }
      }
    }
  }
  return result.join("");
}
```

## Análisis de Complejidad

### Complejidad Temporal

La complejidad temporal de esta solución es O(n^2) en el peor de los casos, donde n es la longitud de las cadenas. Esto se debe a que en el segundo paso, para cada letra en la suposición, podemos tener que recorrer toda la palabra secreta para encontrar coincidencias parciales.

### Complejidad Espacial

La complejidad espacial es O(n) debido al uso de arrays auxiliares para rastrear las letras usadas en la palabra secreta y en la suposición.

## Reflexiones y Aprendizajes

### Conceptos Aplicados

<!-- TODO: ¿Qué patrones/técnicas se usaron? -->

### Posibles Optimizaciones

Nuestra solución actual tiene una complejidad temporal de O(n^2). Una posible optimización sería utilizar un mapa de frecuencias para rastrear las letras restantes en la palabra secreta después de identificar las coincidencias exactas. Esto podría reducir la complejidad temporal a O(n).

```javascript
function wordGuesserOptimized(secret, guess) {
  const result = Array(secret.length).fill("0");
  const secretFreq = {};
  // Primer paso: encontrar coincidencias exactas y construir el mapa de frecuencias
  for (let i = 0; i < secret.length; i++) {
    if (guess[i] === secret[i]) {
      result[i] = "2";
    } else {
      secretFreq[secret[i]] = (secretFreq[secret[i]] || 0) + 1;
    }
  }
  // Segundo paso: encontrar coincidencias parciales usando el mapa de frecuencias
  for (let i = 0; i < guess.length; i++) {
    if (result[i] === "0" && secretFreq[guess[i]] > 0) {
      result[i] = "1";
      secretFreq[guess[i]]--;
    }
  }
  return result.join("");
}
```

## Analisis de complejidad de la versión optimizada

### Complejidad Temporal Optimizada

La complejidad temporal de la versión optimizada es O(n), ya que recorremos ambas cadenas una sola vez.

### Complejidad Espacial Optimizada

La complejidad espacial sigue siendo O(n) en el peor de los casos debido al mapa de frecuencias.

## Recursos y Referencias

- [Documentación de JavaScript sobre Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
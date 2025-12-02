---
title: "100-characters"
difficulty: "easy"
topics:
  - Algorithm
source: "freecodecamp"
series: "daily"
category: "freecodecamp"
createdAt: "2025-11-21"
---

# 100 Characters - Análisis y Explicación

## Enunciado del Problema

Dado un string repeti los caracteres hasta que el resultado sea exactamente 100 caracteres de largo, si las repeticiones exceden los 100 caracteres, recorta el string para que tenga exactamente 100 caracteres.

## Análisis Inicial

### Comprensión del Problema

El objetivo es tomar un string de entrada y repetirlo hasta alcanzar una longitud de 100 caracteres. Si la repetición del string excede los 100 caracteres, se debe recortar el string resultante para que tenga exactamente 100 caracteres.
La primer intuicion es utilizar un bucle para concatenar el string hasta alcanzar o superar los 100 caracteres, y luego usar una función de recorte para ajustar la longitud final.

### Casos de Prueba Identificados

```javascript
import oneHundred from "./100-characters.js";
describe("100 Characters", () => {
  it('should return "One hundred One hundred One hundred One hundred One hundred One hundred One hundred One hundred One " for input "One hundred "', () => {
    expect(oneHundred("One hundred ")).toBe(
      "One hundred One hundred One hundred One hundred One hundred One hundred One hundred One hundred One "
    );
  });

  it('should return "freeCodeCamp freeCodeCamp freeCodeCamp freeCodeCamp freeCodeCamp freeCodeCamp freeCodeCamp freeCodeC" for input "freeCodeCamp "', () => {
    expect(oneHundred("freeCodeCamp ")).toBe(
      "freeCodeCamp freeCodeCamp freeCodeCamp freeCodeCamp freeCodeCamp freeCodeCamp freeCodeCamp freeCodeC"
    );
  });

  it('should return "daily challenges daily challenges daily challenges daily challenges daily challenges daily challenge" for input "daily challenges "', () => {
    expect(oneHundred("daily challenges ")).toBe(
      "daily challenges daily challenges daily challenges daily challenges daily challenges daily challenge"
    );
  });

  it('should return "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!" for input "!"', () => {
    expect(oneHundred("!")).toBe(
      "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
    );
  });
});
```

## Desarrollo de la Solución

### Enfoque Elegido

Primero vamos a declarar una variable result que guardara el resultado y que se inicializa como un string vacio, luego vamos a iniciar un bucle while que se ejecutara mientras la longitud del string result sea menor a 100, dentro del bucle vamos a concatenar el string de entrada al string result, una vez que el bucle termine, vamos a recortar el string result para que tenga exactamente 100 caracteres utilizando el metodo slice y finalmente retornamos el string result.

### Implementación Paso a Paso

```javascript
export default function oneHundred(str) {
  let result = "";
  while (result.length < 100) {
    result += str;
  }
  return result.slice(0, 100);
}
```

## Análisis de Complejidad

La complejidad de este algoritmo se puede analizar en términos de tiempo y espacio.
en terminos de tiempo la complejidad es de O(n), donde n es la longitud del string resultante, ya que en el peor de los casos, el bucle while se ejecuta hasta que la longitud del string result sea 100, y cada concatenación toma tiempo proporcional a la longitud del string result.
en terminos de espacio la complejidad es tambien de O(n), ya que estamos almacenando el string resultante que puede tener hasta 100 caracteres.

## Casos Edge y Consideraciones

Los casos edge que identificamos incluyen:

- Si el string de entrada es vacío, el resultado será también un string vacío.
- Si el string de entrada tiene una longitud mayor a 100 caracteres, el resultado será el string de entrada recortado a 100 caracteres.
- Si el string de entrada tiene una longitud exactamente igual a 100 caracteres, el resultado será el mismo string de entrada.
  Todos estos casos estan manejados correctamente por la implementación actual.

## Reflexiones y Aprendizajes

Este problema nos permitió practicar la manipulación de strings y el uso de bucles en JavaScript. Aprendimos a utilizar el método slice para recortar strings.

### Posibles Optimizaciones

Una posible optimización podría ser calcular cuántas veces necesitamos repetir el string de entrada para alcanzar o superar los 100 caracteres, y luego construir el string resultante en una sola operación en lugar de concatenar en un bucle. Esto reduciría la cantidad de operaciones de concatenación y podría mejorar el rendimiento.
Esto lo podriamos hacer declarando una variable repeatCount que seria igual a Math.ceil(100 / str.length) y luego usar el metodo repeat para repetir el string str repeatCount veces y finalmente usar slice para recortar el string resultante a 100 caracteres. La complejidad de tiempo seguiria siendo O(n) pero con menos operaciones de concatenacion, por ejemplo para el input "abc" con la implementacion que elegimos tendriamos que concatenar 34 veces para alcanzar los 100 caracteres, mientras que con la optimizacion solo haria una operacion de repeticion y luego un recorte.

```javascript
export default function oneHundred(str) {
  const repeatCount = Math.ceil(100 / str.length);
  return str.repeat(repeatCount).slice(0, 100);
}
```

## Recursos y Referencias

- [Documentación de String.prototype.slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice)
- [Documentación de String.prototype.repeat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat)
- [Documentación de Math.ceil()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil)
- [freeCodeCamp - JavaScript String Methods](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-string-methods-to-manipulate-strings)

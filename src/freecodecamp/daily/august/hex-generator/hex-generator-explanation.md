---
title: Hex Generator
source: freeCodeCamp
series: daily
category: august
createdAt: 2025-12-11
difficulty: easy
topics:
  - strings
  - random
  - colors
blogLink: https://blog-astro-rouge.vercel.app/posts/hex-generator/
problemLink: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-08-31/
---

## Hex Generator - Análisis y Explicación

## Enunciado del Problema

Dada una cadena que representa un color CSS ("red", "green" o "blue"), implementa una función que genere un código hexadecimal de color aleatorio de seis caracteres, donde el color dominante corresponda al color indicado en la entrada. Si la entrada no es uno de los colores válidos, la función debe devolver "Invalid color".

- La función debe aceptar únicamente "red", "green" o "blue" (en minúsculas).
- El valor hexadecimal generado debe ser aleatorio, pero el componente correspondiente al color dominante debe ser mayor que los otros dos.
- Si la entrada no es válida, retorna exactamente "Invalid color".

## Comprensión del Problema

### Qué son los Colores Hexadecimales?

Los colores hexadecimales son una forma de representar colores en formato digital utilizando el sistema de numeración hexadecimal. Un color hexadecimal típico se compone de seis dígitos, donde cada par de dígitos representa la intensidad de los componentes rojo (RR), verde (GG) y azul (BB) en el modelo RGB. Por ejemplo, el color `#FF0000` representa el rojo puro, ya que el valor máximo (`FF` en hexadecimal, equivalente a 255 en decimal) está en el componente rojo, mientras que los otros dos componentes están en cero. Este formato es ampliamente utilizado en desarrollo web y diseño gráfico para especificar colores de manera precisa y compacta.

La función debe generar un string hexadecimal de seis caracteres (por ejemplo, "FF00AA") que represente un color RGB. El color dominante (rojo, verde o azul) debe tener un valor numérico mayor que los otros dos componentes. Por ejemplo, si la entrada es "red", el valor de rojo (los dos primeros caracteres) debe ser mayor que el de verde y azul. Si la entrada no es válida, la función debe indicar el error devolviendo "Invalid color".

## Casos de Prueba Identificados

- Si la entrada es "yellow", la función debe devolver "Invalid color".
- Si la entrada es "red", la función debe devolver un string de seis caracteres.
- Si la entrada es "red", la función debe devolver un string hexadecimal válido de seis caracteres.
- Si la entrada es "red", el valor de rojo debe ser mayor que el de verde y azul.
- Si se llama dos veces con "red", ambos resultados deben ser diferentes y ambos deben ser dominados por el rojo.
- Si se llama dos veces con "green", ambos resultados deben ser diferentes y ambos deben ser dominados por el verde.
- Si se llama dos veces con "blue", ambos resultados deben ser diferentes y ambos deben ser dominados por el azul.

## Desarrollo de la Solución

### Enfoque Elegido

La estrategia que elegi en este problema consiste en validar primero las entradas sean uno de los colores permitidos ("red", "green" o "blue"). Si la entrada es inválida, se retorna "Invalid color". Si la entrada es válida, se generan tres valores numéricos aleatorios entre 0 y 255 para los componentes RGB, asegurando que el componente correspondiente al color dominante sea estrictamente mayor que los otros dos. Finalmente, se convierte cada componente a su representación hexadecimal de dos dígitos y se concatenan para formar el string de seis caracteres que representa el color en formato hexadecimal.

### Implementación Paso a Paso

1. Validar la entrada: Comprobar si el string recibido es uno de los valores permitidos ("red", "green" o "blue"). Si no lo es, retornar "Invalid color".
2. Generar los valores RGB: Crear tres valores aleatorios entre 0 y 255 para los componentes rojo, verde y azul.
3. Asegurar la dominancia: Modificar el valor correspondiente al color dominante para que sea estrictamente mayor que los otros dos. Por ejemplo, si el color es "red", asegurarse de que el valor de rojo sea mayor que el de verde y azul.
4. Convertir a hexadecimal: Transformar cada componente numérico a su representación hexadecimal de dos dígitos, rellenando con ceros a la izquierda si es necesario.
5. Concatenar los componentes: Unir los tres valores hexadecimales en el orden RGB para formar el string final de seis caracteres.
6. Retornar el resultado: Devolver el string generado como el código de color hexadecimal dominante.

## Análisis de Complejidad

#### Complejidad Temporal

La función realiza una cantidad constante de operaciones, independientemente de la entrada, ya que solo genera dos números aleatorios, calcula el dominante y convierte tres valores a hexadecimal. Por lo tanto, la complejidad temporal es **O(1)**.

#### Complejidad Espacial

La función utiliza una cantidad fija de variables y no depende del tamaño de la entrada, por lo que la complejidad espacial también es **O(1)**.

## Casos Edge y Consideraciones

- Si la entrada no es exactamente "red", "green" o "blue" (en minúsculas), la función retorna "Invalid color".
- El valor dominante nunca supera 255, ya que se ajusta si es necesario.
- Los valores generados pueden ser iguales entre sí, excepto el dominante, que siempre será estrictamente mayor.
- El resultado siempre es un string de seis caracteres en mayúsculas, válido como color hexadecimal.

## Reflexiones y Aprendizajes

### Conceptos Aplicados

- Validación de entradas.
- Generación de números aleatorios.
- Conversión de números a formato hexadecimal con padding.
- Manipulación de strings y arrays.
- Garantizar condiciones de dominancia en valores RGB.

## Recursos y Referencias

- [Colores hexadecimales en CSS - MDN](https://developer.mozilla.org/es/docs/Web/CSS/color_value)
- [Math.random() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
- [Método toString(radix) - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Number/toString)

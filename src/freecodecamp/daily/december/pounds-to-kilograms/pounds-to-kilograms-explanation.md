---
title: Pounds To Kilograms
source: freecodecamp
series: daily
category: daily
createdAt: 2025-12-08
difficulty: easy
topics:
  - conversion
  - math
  - strings
  - formatting
  - rounding
blogLink: https://blog-astro-rouge.vercel.app/posts/pounds-to-kilograms/
problemLink: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-12-08/
---

## Pounds To Kilograms - Análisis y Explicación

## Enunciado del Problema

Dado un peso en libras como numero, devolvé el string "(lbs) pounds equals (kgs) kilograms.".
Reemplazá "(lbs)" con el numero de entrada.
Reemplazá "(kgs)" con el valor convertido a kilogramos, redondeado a dos decimales e incluyendo siempre dos decimales en el valor.
1 libra equivale a 0.453592 kilogramos.
Si la entrada es 1, usá "pound" en lugar de "pounds".
Si el valor convertido es 1, usá "kilogram" en lugar de "kilograms".

## Análisis Inicial

### Comprensión del Problema

La función recibe un número que representa un peso en libras. Debe convertir ese valor a kilogramos usando la equivalencia 1 libra = 0.453592 kilogramos. El resultado debe ser un string con el formato:

"(lbs) pounds equals (kgs) kilograms."

- "(lbs)" se reemplaza por el número de entrada.
- "(kgs)" se reemplaza por el valor convertido, redondeado a dos decimales y siempre mostrando dos decimales.
- Si la entrada es 1, se usa "pound" en singular.
- Si el valor convertido es exactamente 1, se usa "kilogram" en singular.

Además, se debe cuidar el formateo correcto de los decimales y el uso adecuado del singular/plural según corresponda.

### Casos de Prueba Identificados

Se identificaron los siguientes casos de prueba para asegurar el correcto funcionamiento de la función:

- Cuando la entrada es 1, debe devolver "1 pound equals 0.45 kilograms." (singular en "pound").
- Cuando la entrada es 0, debe devolver "0 pounds equals 0.00 kilograms." (valor nulo y formato decimal correcto).
- Cuando la entrada es 100, debe devolver "100 pounds equals 45.36 kilograms." (valor grande y formato decimal).
- Cuando la entrada es 2.5, debe devolver "2.5 pounds equals 1.13 kilograms." (número decimal).
- Cuando la entrada es 2.20462, debe devolver "2.20462 pounds equals 1.00 kilogram." (el valor convertido es exactamente 1, por lo que se usa el singular "kilogram").

Estos casos cubren entradas singulares, cero, valores decimales, valores grandes y el caso especial donde el resultado convertido es exactamente 1.

## Desarrollo de la Solución

### Enfoque Elegido

El enfoque consiste en realizar la conversión directa multiplicando el valor en libras por el factor de conversión (0.453592) para obtener el peso en kilogramos. Luego, se redondea el resultado a dos decimales y se asegura que siempre se muestren dos cifras decimales en el string resultante. Finalmente, se construye la frase de salida aplicando las reglas de singular/plural tanto para "pound(s)" como para "kilogram(s)", según corresponda. Este método es simple, eficiente y permite manejar correctamente los casos especiales y el formateo requerido.

### Implementación Paso a Paso

1. Recibir el número de libras como entrada.
2. Calcular el valor en kilogramos multiplicando las libras por 0.453592.
3. Redondear el resultado a dos decimales y formatearlo para que siempre muestre dos cifras decimales.
4. Determinar si se debe usar "pound" o "pounds" según si la entrada es 1 o no.
5. Determinar si se debe usar "kilogram" o "kilograms" según si el valor convertido es exactamente 1 o no.
6. Construir y devolver el string final con el formato requerido, reemplazando los valores y palabras según corresponda.

### Código Final

```javascript
function poundsToKilograms(lbs) {
  const kgs = lbs * 0.453592;
  const roundedKgs = kgs.toFixed(2);
  const poundWord = lbs === 1 ? "pound" : "pounds";
  const kilogramWord = parseFloat(roundedKgs) === 1 ? "kilogram" : "kilograms";
  return `${lbs} ${poundWord} equals ${roundedKgs} ${kilogramWord}.`;
}
```

## Análisis de Complejidad

### Complejidad Temporal

La función realiza una multiplicación, un redondeo y algunas comparaciones y concatenaciones de strings, todas operaciones de tiempo constante. Por lo tanto, la complejidad temporal es **O(1)**.

### Complejidad Espacial

No se utilizan estructuras de datos adicionales ni se almacena información relevante más allá de variables escalares. La complejidad espacial también es **O(1)**.

## Casos Edge y Consideraciones

- Entrada igual a 0: debe devolver "0 pounds equals 0.00 kilograms."
- Entrada igual a 1: debe usar "pound" en singular.
- Resultado convertido igual a 1: debe usar "kilogram" en singular.
- Números decimales y grandes: el formato y redondeo deben ser correctos.
- El resultado siempre debe mostrar dos decimales, incluso si son ceros.

## Reflexiones y Aprendizajes

### Conceptos Aplicados

- Conversión de unidades y formateo de números.
- Uso de condicionales para el manejo de singular/plural.
- Redondeo y formateo de decimales en strings.

### Posibles Optimizaciones

Dado que la función ya es de tiempo y espacio constante, no existen optimizaciones relevantes para el rendimiento. Se podría mejorar la legibilidad o reutilizar la lógica de formateo si se usara en otros contextos.

## Recursos y Referencias

- [Documentación de Number.prototype.toFixed() en MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed)
- [Conversión de unidades en Wikipedia](https://es.wikipedia.org/wiki/Conversi%C3%B3n_de_unidades)

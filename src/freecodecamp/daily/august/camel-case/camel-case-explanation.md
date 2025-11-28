# Camel Case - Análisis y Explicación

## Enunciado del Problema

CamelCase
Dado un string, devolve su version en camel case usando las siguientes reglas:
Las palabras en el string estan separadas por uno o mas caracteres del siguiente conjunto: espacio ( ), guion (-) o guion bajo (\_). Cualquier secuencia de estos debe ser tratada como un limite de palabra.
Cada palabra subsecuente debe comenzar con una letra mayuscula, con el resto en minuscula.
Todas los espacios y separadores deben ser removidos.

## Análisis Inicial

### Comprensión del Problema

Basicamente debemos convertir a camel case el string que nos den, eliminando los separadores y capitalizando las palabras subsecuentes.
El enunciado aclara que los seperaadores pueden ser multiples y de distintos tipos, por lo que debemos tener en cuenta esto al momento de dividir el string en palabras. Regex puede ser util aqui.

### Casos de Prueba Identificados

Tests
Waiting:1. toCamelCase("hello world") should return "helloWorld".
Waiting:2. toCamelCase("HELLO WORLD") should return "helloWorld".
Waiting:3. toCamelCase("secret agent-X") should return "secretAgentX".
Waiting:4. toCamelCase("FREE cODE cAMP") should return "freeCodeCamp".
Waiting:5. toCamelCase("ye old-_-sea faring_buccaneer_-_with a - peg\_\_leg----and a_parrot_ \_named- \_squawk") should return "yeOldSeaFaringBuccaneerWithAPegLegAndAParrotNamedSquawk".

## Desarrollo de la Solución

### Enfoque Elegido

Primero sepramos el string en palabras usando una expresion regular que considere los distintos separadores.
Luego, convertimos la primera palabra a minusculas y las siguientes palabras las capitalizamos.
Finalmente, concatenamos todas las palabras para obtener el resultado final.

### Implementación Paso a Paso

```javascript
function toCamelCase(s) {
  let words = s
    .toLowerCase()
    .split(/[\s-_]+/)
    .filter(Boolean);

  for (let i = 1; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }

  return words.join("");
}

export default toCamelCase;
```

El detalle que le da un toque de magia a la solucion es el uso de filter(Boolean) para eliminar cualquier palabra vacia que pueda surgir de multiples separadores consecutivos.

## Análisis de Complejidad

### Complejidad Temporal

La complejidad temporal es O(n), donde n es la longitud del string de entrada. Esto se debe a que recorremos el string varias veces: una para convertir a minusculas, otra para dividir en palabras, y otra para capitalizar las palabras subsecuentes.

### Complejidad Espacial

La complejidad espacial es O(n), donde n es la longitud del string de entrada. Esto se debe a que almacenamos una lista de palabras derivadas del string original, y luego modificamos esta lista para formar el resultado final.

## Casos Edge y Consideraciones

Los casos edge incluyen strings vacios, strings con solo separadores, y strings con caracteres especiales. La implementacion actual maneja estos casos adecuadamente gracias al uso de filter(Boolean) y la division basada en regex.

## Reflexiones y Aprendizajes

Este problema es un buen ejercicio para practicar el manejo de strings y el uso de expresiones regulares en JavaScript. Ademas, resalta la importancia de considerar casos edge y validar la entrada para evitar errores inesperados.

### Conceptos Aplicados

- Manipulación de Strings
- Expresiones Regulares
- Complejidad Algorítmica
- Manejo de Casos Edge

### Posibles Optimizaciones

Dado que la complejidad temporal y espacial ya es O(n), no hay optimizaciones significativas que se puedan hacer sin comprometer la legibilidad del código. Sin embargo, se podria considerar el uso de metodos mas avanzados de manipulación de strings si se busca una solucion mas compacta.
Por ejemplo, se podria usar el metodo replace con una funcion de callback para capitalizar las palabras en una sola pasada.

```javascript
function toCamelCase(s) {
  return s
    .toLowerCase()
    .replace(/[\s-_]+(.)/g, (match, group1) => group1.toUpperCase());
}
```

Pero no se me ocurre un caso en el que sea tan necesario optimizarlo, asi que me quedo con mi solucion mas elegante y facil de entender.

## Recursos y Referencias

- [Camel Case en Wikipedia](https://en.wikipedia.org/wiki/Camel_case)
- [Documentación de String en MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
- [Expresiones Regulares en JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)

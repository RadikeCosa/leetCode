---
title: "Miles To Kilometers"
difficulty: "easy"
topics:
  - Math
  - Conversion
source: "freecodecamp"
series: "daily"
category: "daily"
createdAt: "2025-12-01"
---

## Miles To Kilometers - Análisis y Explicación

### Enunciado del Problema

Dada una distancia en millas en forma de número, retorna la distancia equivalente en kilómetros.  
La entrada siempre será un número no negativo.  
1 milla equivale a 1.60934 kilómetros.  
Redondea el resultado a dos decimales.

## Desarrollo de la Solución

### Enfoque Elegido

1. Declarar una constante para la tasa de conversión.
2. Multiplicar el número de millas por la tasa para obtener kilómetros.
3. Redondear el resultado a dos decimales usando `toFixed(2)` y convertirlo a número con `parseFloat`.
4. Retornar el resultado.

### Implementación Paso a Paso

```js
function convertToKm(miles) {
  const kilometersPerMile = 1.60934;
  let result = miles * kilometersPerMile;
  result = parseFloat(result.toFixed(2));
  return result;
}
```

---

## Análisis de Complejidad

### Complejidad Temporal

La función realiza operaciones aritméticas simples y redondeo, por lo que su complejidad temporal es **O(1)**.

### Complejidad Espacial

No se utilizan estructuras de datos adicionales, solo variables escalares.  
La complejidad espacial es **O(1)**.

---

## Casos Edge y Consideraciones

- Si la entrada es 0, el resultado será 0.
- Si la entrada es un número decimal, la conversión y el redondeo funcionan correctamente.
- No se manejan valores negativos ni entradas no numéricas, ya que el enunciado garantiza entradas válidas.

---

## Reflexiones y Aprendizajes

### Conceptos Aplicados

- Conversión de unidades.
- Redondeo de números decimales.
- Buenas prácticas en la declaración de constantes.

### Posibles Optimizaciones

La solución es óptima para el problema planteado.  
Si se requiriera mayor precisión, se podría usar una librería de manejo de decimales.

---

## Recursos y Referencias

- [MDN: Number.prototype.toFixed()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed)
- [Conversión de unidades en Wikipedia](https://es.wikipedia.org/wiki/Conversi%C3%B3n_de_unidades)
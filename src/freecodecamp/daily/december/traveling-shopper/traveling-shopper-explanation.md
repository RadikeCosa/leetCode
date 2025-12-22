---
title: Traveling Shopper
source: freecodecamp
series: daily
category: december
createdAt: 2025-12-22
difficulty: easy
topics:
  - arrays
  - simulation
  - math
  - greedy
blogLink: https://blog-astro-rouge.vercel.app/posts/traveling-shopper/
problemLink: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-12-22/
---

## Traveling Shopper - Análisis y Explicación

## Enunciado del Problema

Dada una cantidad de dinero que tenés y un array de ítems que querés comprar, determiná cuántos de ellos podés adquirir.

- El monto dado estará en el formato ["Amount", "Currency Code"], por ejemplo ["50.00", "USD"] o ["6000", "JPY"].
- Cada ítem del array que querés comprar estará en el mismo formato.

Usá la siguiente tabla de cambio para convertir los valores:

| Moneda | Equivalente en USD |
| ------ | ------------------ |
| USD    | 1.00 USD           |
| EUR    | 1.10 USD           |
| GBP    | 1.25 USD           |
| JPY    | 0.0070 USD         |
| CAD    | 0.75 USD           |

- Si podés comprar todos los ítems, devolvé "Buy them all!"
- De lo contrario, devolvé "Buy the first x items", donde x es la cantidad de ítems que podés adquirir comprándolos en el orden dado.

## Análisis Inicial

### Comprensión del Problema

El objetivo es determinar cuántos ítems de una lista se pueden comprar con un monto inicial, considerando que tanto el monto como los precios pueden estar en distintas monedas. Para comparar correctamente los valores, es necesario convertir todos los montos a una misma moneda utilizando la tabla de cambio provista. La forma más directa y precisa es convertir tanto el monto inicial como los precios de los ítems a dólares estadounidenses (USD), ya que todas las tasas de conversión están expresadas en relación al dólar. Convertir todo a USD evita errores de redondeo y simplifica los cálculos, mientras que convertir a la moneda original del monto podría introducir imprecisiones adicionales y requerir cálculos inversos para cada tipo de moneda.

### Casos de Prueba Identificados

A partir de la consigna y los tests proporcionados, se identifican los siguientes casos de prueba relevantes:

- Caso en el que el monto alcanza para algunos, pero no todos los ítems, y se debe devolver la cantidad máxima de ítems comprables en orden.
- Caso en el que el monto alcanza exactamente para todos los ítems, devolviendo "Buy them all!".
- Casos donde el monto y/o los ítems están expresados en distintas monedas, lo que requiere una conversión correcta antes de comparar.
- Casos con monedas menos comunes (por ejemplo, JPY o CAD) para verificar la robustez de la conversión.
- Caso donde el monto inicial es insuficiente para comprar siquiera el primer ítem (no presente en los tests actuales, pero relevante como edge case).
- Caso donde el monto alcanza para todos los ítems y sobra dinero.

Estos casos cubren tanto la lógica principal como posibles situaciones límite relacionadas con la conversión de monedas y el orden de compra.

## Desarrollo de la Solución

### Enfoque Elegido

La estrategia consiste en convertir tanto el monto inicial como los precios de todos los ítems a dólares estadounidenses (USD) utilizando la tabla de cambio provista. Una vez convertidos, se simula la compra secuencial de los ítems en el orden dado, restando el precio de cada uno al presupuesto disponible. Si en algún momento el presupuesto no alcanza para el siguiente ítem, se detiene el proceso y se devuelve la cantidad de ítems comprados hasta ese punto. Si el presupuesto alcanza para todos, se retorna el mensaje correspondiente. Este enfoque es directo, fácil de implementar y minimiza errores de conversión, ya que todas las operaciones se realizan en una única moneda de referencia.

### Implementación Paso a Paso

1. Definir un objeto con las tasas de conversión de cada moneda a USD.
2. Convertir el monto inicial a USD utilizando la tasa correspondiente.
3. Recorrer la lista de ítems, convirtiendo el precio de cada uno a USD.
4. Simular la compra secuencial: restar el precio de cada ítem al presupuesto disponible.
5. Si el presupuesto no alcanza para el siguiente ítem, detenerse y devolver la cantidad de ítems comprados.
6. Si se pueden comprar todos los ítems, devolver el mensaje correspondiente.

Ejemplo de implementación en JavaScript:

```js
const rates = {
  USD: 1.0,
  EUR: 1.1,
  GBP: 1.25,
  JPY: 0.007,
  CAD: 0.75,
};

export default function buyItems(amount, items) {
  // Convertir monto inicial a USD
  let budget = parseFloat(amount[0]) * rates[amount[1]];
  let count = 0;

  for (const [price, currency] of items) {
    const priceUSD = parseFloat(price) * rates[currency];
    if (budget >= priceUSD) {
      budget -= priceUSD;
      count++;
    } else {
      return `Buy the first ${count} items.`;
    }
  }
  return "Buy them all!";
}
```

## Análisis de Complejidad

### Complejidad Temporal

El algoritmo recorre la lista de ítems una sola vez, realizando para cada uno una conversión y una resta, ambas operaciones de tiempo constante. Por lo tanto, la complejidad temporal es $O(n)$, donde $n$ es la cantidad de ítems en la lista. No hay bucles anidados ni operaciones costosas adicionales.

### Complejidad Espacial

El espacio adicional utilizado es constante ($O(1)$), ya que solo se almacenan algunas variables auxiliares (el presupuesto, el contador y las tasas de conversión). No se crean estructuras de datos proporcionales al tamaño de la entrada.

## Casos Edge y Consideraciones

- Si el monto inicial es insuficiente para comprar siquiera el primer ítem, la función debe devolver "Buy the first 0 items.".
- Si el monto alcanza exactamente para todos los ítems, debe devolver "Buy them all!".
- Si el monto alcanza para todos los ítems y sobra dinero, también debe devolver "Buy them all!".
- Los precios y el monto pueden estar en cualquier moneda de la tabla; la función debe manejar correctamente todas las conversiones.
- Es importante convertir siempre a la misma moneda de referencia (USD) para evitar errores de comparación.
- Los valores pueden ser decimales o enteros, por lo que se debe usar `parseFloat` para asegurar la precisión.

## Reflexiones y Aprendizajes

### Conceptos Aplicados

- Destructuring para acceder fácilmente a los valores de cada ítem.
- Conversión de monedas usando una tabla de tasas fija.
- Simulación secuencial de compras (patrón greedy simple).
- Uso de operaciones aritméticas básicas y control de flujo.

### Posibles Optimizaciones

Dado que la solución ya es lineal y de espacio constante, no existen optimizaciones significativas para el caso general. Si la tabla de monedas fuera mucho más grande o las tasas cambiaran dinámicamente, se podría considerar el uso de un sistema de cacheo o una estructura de datos más eficiente para las conversiones. En este contexto, la implementación es óptima y clara.

## Recursos y Referencias

- [Conversión de monedas - Wikipedia](https://es.wikipedia.org/wiki/Tipo_de_cambio)
- [Documentación oficial de parseFloat (MDN)](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/parseFloat)
- [Greedy Algorithms - GeeksforGeeks](https://www.geeksforgeeks.org/greedy-algorithms/)

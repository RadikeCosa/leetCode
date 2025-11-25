# Recipe Scale - Análisis y Explicación

## Enunciado del Problema

Dado un array de ingredientes de una receta y un número para escalar la receta, devuelve un array con las cantidades escaladas en consecuencia.

Cada item en el array dado será una cadena en el formato: "cantidad unidad ingrediente". Por ejemplo "2 C Harina".
Escala la cantidad por el número dado. No incluyas ceros a la derecha y no conviertas ninguna unidad.
Devuelve los items escalados en el mismo orden en que se dan.

## Análisis Inicial

### Comprensión del Problema

El problema requiere tomar una lista de ingredientes con cantidades específicas y escalar esas cantidades por un factor dado. La salida debe mantener el formato original, pero con las cantidades ajustadas.
El primer paso es entender cómo dividir cada cadena en sus componentes: cantidad, unidad e ingrediente. Luego, se debe multiplicar la cantidad por el factor de escala y reconstruir la cadena.
Para dividir la cadena se puede usar el metodo `split(" ")`, lo que nos dará un array con los tres componentes y usando deconstrucción de arrays podemos asignar cada componente a una variable, luego multiplicamos la cantidad por el factor de escala y finalmente usamos template literals para reconstruir la cadena.

### Casos de Prueba Identificados

1. scaleRecipe(["2 C Flour", "1.5 T Sugar"], 2) should return ["4 C Flour", "3 T Sugar"].
2. scaleRecipe(["4 T Flour", "1 C Milk", "2 T Oil"], 1.5) should return ["6 T Flour", "1.5 C Milk", "3 T Oil"].
3. scaleRecipe(["3 C Milk", "2 C Oats"], 0.5) should return ["1.5 C Milk", "1 C Oats"].
4. scaleRecipe(["2 C All-purpose Flour", "1 t Baking Soda", "1 t Salt", "1 C Butter", "0.5 C Sugar", "0.5 C Brown Sugar", "1 t Vanilla Extract", "2 C Chocolate Chips"], 2.5) should return ["5 C All-purpose Flour", "2.5 t Baking Soda", "2.5 t Salt", "2.5 C Butter", "1.25 C Sugar", "1.25 C Brown Sugar", "2.5 t Vanilla Extract", "5 C Chocolate Chips"].

## Desarrollo de la Solución

### Enfoque Elegido

El enfoque elegido es iterar sobre cada ingrediente en el array, dividir la cadena en sus componentes, escalar la cantidad y luego reconstruir la cadena con la nueva cantidad.

### Implementación Paso a Paso

iteramos sobre cada elemento del array de ingredientes usando un bucle for. Dentro del bucle, dividimos cada cadena en sus componentes usando `split(" ")` y deconstrucción de arrays para asignar la cantidad, unidad e ingrediente a variables separadas. Luego, convertimos la cantidad a un número flotante y la multiplicamos por el factor de escala. Finalmente, reconstruimos la cadena usando template literals y actualizamos el array original con la nueva cadena escalada.

`function scaleRecipe(ingredients, scale) {
  for (let i = 0; i < ingredients.length; i++) {
    const [quantity, unit, ...ingredientParts] = ingredients[i].split(" ");
    const ingredient = ingredientParts.join(" ");
    const scaledQuantity = parseFloat(quantity) * scale;
    ingredients[i] =`${scaledQuantity} ${unit} ${ingredient}`;
  }
return ingredients;
}`

### Complejidad Temporal

El algoritmo itera sobre cada ingrediente una vez, realizando operaciones constantes para cada uno. Por lo tanto, la complejidad temporal es O(n), donde n es el número de ingredientes en la receta.

### Complejidad Espacial

El algoritmo modifica el array de ingredientes en su lugar, por lo que no utiliza espacio adicional significativo más allá del espacio necesario para almacenar el array de entrada. Por lo tanto, la complejidad espacial es O(1).

## Reflexiones y Aprendizajes

### Conceptos Aplicados

- Manipulación de cadenas: Uso de `split`, `join` y template literals.
- Estructuras de datos: Uso de arrays para almacenar y modificar los ingredientes.
- Bucles: Iteración sobre arrays con un bucle for.
- Conversión de tipos: Uso de `parseFloat` para convertir cadenas a números.

### Posibles Optimizaciones

- Validación de entrada: Añadir validaciones para asegurar que las cantidades sean números válidos.
- Manejo de unidades: Implementar lógica para convertir unidades si es necesario.
- Reducción de decimales: Formatear las cantidades escaladas para evitar demasiados decimales.
- Uso de métodos funcionales: Utilizar `map` en lugar de un bucle for para una solución más declarativa.
- Manejo de errores: Añadir manejo de errores para entradas no válidas.
- Soporte para fracciones: Implementar lógica para manejar cantidades en formato de fracción.
- Internacionalización: Adaptar el formato de números según la localización del usuario.

## Recursos y Referencias

- Documentación de JavaScript sobre manipulación de cadenas: [MDN Web Docs - String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
- Documentación de JavaScript sobre arrays: [MDN Web Docs - Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- Documentación de JavaScript sobre bucles: [MDN Web Docs - Loops and iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)
- Documentación de JavaScript sobre conversión de tipos: [MDN Web Docs - Global Objects - parseFloat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat)

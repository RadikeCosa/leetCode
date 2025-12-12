---
title: Inventory Update
source: freecodecamp
series: daily
category: december
createdAt: 2025-12-12
difficulty: medium
topics:
  - arrays
  - hashmap
  - data manipulation
blogLink: https://blog-astro-rouge.vercel.app/posts/inventory-update/
problemLink: https://www.freecodecamp.org/learn/daily-coding-challenge/2025-12-12/
---

## Inventory Update - Análisis y Explicación

## Enunciado del Problema

Dado un array bidimensional que representa el inventario de tu tienda y otro array bidimensional que representa una nueva entrega de productos, devolve tu inventrario actualizado

- Cada elemento de los arrays tendrá el formato `[cantidad, nombre del producto]`, donde `cantidad` es un número entero y `nombre del producto` es una cadena de texto.
- Actualiza los items en el inventario sumando las cantidades de los productos que ya existen.
- Si un producto de la nueva entrega no existe en el inventario, agrégalo.
- Devuelve el inventario en el orden que fue dado con los nuevos items añadidos al final en el orden que aparecen en la nueva entrega.

Por ejemplo, dado el inventario de [[2, 'apples'], [5, 'bananas']] y una nueva entrega de [[1, 'apples'], [3, 'bananas'],], el inventario actualizado sería [[3, 'apples'], [8, 'bananas']].

## Análisis Inicial

### Comprensión del Problema

El objetivo de este problema es actualizar el inventario de una tienda a partir de una nueva entrega de productos. Se reciben dos listas bidimensionales: una con el inventario actual y otra con los productos de la nueva entrega. Cada elemento de estas listas contiene la cantidad y el nombre del producto.

La función debe recorrer ambos arreglos y sumar las cantidades de los productos que ya existen en el inventario. Si un producto de la nueva entrega no está en el inventario, debe agregarse al final de la lista. El resultado debe mantener el orden original de los productos del inventario, añadiendo los nuevos productos al final en el orden en que aparecen en la entrega.

### Casos de Prueba Identificados

Se identificaron los siguientes casos de prueba relevantes:

1. **Actualizar productos existentes:**

- Inventario y entrega contienen los mismos productos. Se deben sumar las cantidades.
- Ejemplo: `[[2, "apples"], [5, "bananas"]]` y `[[1, "apples"], [3, "bananas"]]` → `[[3, "apples"], [8, "bananas"]]`.

2. **Agregar nuevos productos:**

- La entrega incluye productos que no están en el inventario. Se agregan al final, en el orden recibido.
- Ejemplo: `[[2, "apples"], [5, "bananas"]]` y `[[1, "apples"], [3, "bananas"], [4, "oranges"]]` → `[[3, "apples"], [8, "bananas"], [4, "oranges"]]`.

3. **Inventario vacío:**

- Si el inventario está vacío, el resultado es igual a la entrega.
- Ejemplo: `[]` y `[[10, "apples"], [30, "bananas"], [20, "oranges"]]` → `[[10, "apples"], [30, "bananas"], [20, "oranges"]]`.

4. **Inventario con cantidades cero y entrega con productos nuevos y existentes:**

- Se actualizan productos existentes (aunque tengan cantidad cero) y se agregan nuevos productos.
- Ejemplo: `[[0, "Bowling Ball"], [0, "Dirty Socks"], [0, "Hair Pin"], [0, "Microphone"]]` y `[[1, "Hair Pin"], [1, "Half-Eaten Apple"], [1, "Bowling Ball"], [1, "Toothpaste"]]` → `[[1, "Bowling Ball"], [0, "Dirty Socks"], [1, "Hair Pin"], [0, "Microphone"], [1, "Half-Eaten Apple"], [1, "Toothpaste"]]`.

## Desarrollo de la Solución

### Enfoque Elegido

Para resolver el problema de manera eficiente, se puede utilizar una estructura de datos tipo Map (o un objeto en JavaScript) para almacenar los productos y sus cantidades.

1. Recorrer el array de inventario original y agregar cada producto al Map, usando el nombre del producto como clave y la cantidad como valor.
2. Recorrer el array de la nueva entrega (shipment):

- Si el producto ya existe en el Map, sumar la cantidad recibida a la existente.
- Si el producto no existe, agregarlo al Map con su cantidad y registrar el orden de aparición para añadirlo al final.

3. Finalmente, reconstruir el array de inventario actualizado:

- Primero, incluir los productos en el orden original del inventario.
- Luego, añadir los nuevos productos en el orden en que aparecen en la entrega.

Este enfoque permite actualizar y consultar productos en tiempo constante, logrando una solución eficiente tanto en tiempo como en claridad de código.

### Implementación Paso a Paso

1. Crear un Map (o un objeto) para almacenar los productos y sus cantidades.
2. Recorrer el array de inventario original:

- Por cada elemento, agregar el nombre del producto como clave y la cantidad como valor en el Map.
- Guardar el orden original de los productos en una lista auxiliar.

3. Recorrer el array de la nueva entrega (shipment):

- Si el producto ya existe en el Map, sumar la cantidad recibida a la existente.
- Si el producto no existe, agregarlo al Map y registrar su nombre en una lista de nuevos productos.

4. Construir el array de inventario actualizado:

- Primero, recorrer la lista de productos originales y armar el array con las cantidades actualizadas desde el Map.
- Luego, recorrer la lista de nuevos productos y agregarlos al array final con sus cantidades.

5. Devolver el array resultante, que representa el inventario actualizado en el orden requerido.

## Análisis de Complejidad

### Complejidad Temporal

El algoritmo recorre ambos arreglos (inventario y shipment) una sola vez y realiza operaciones de inserción/búsqueda en el Map, que son O(1) en promedio.

Por lo tanto, la complejidad temporal es:

$$
O(n + m)
$$

donde $n$ es la cantidad de productos en el inventario y $m$ la cantidad de productos en la entrega.

### Complejidad Espacial

Se utiliza espacio adicional para el Map y para las listas auxiliares de productos. En el peor caso, se almacenan todos los productos de ambos arreglos.

Por lo tanto, la complejidad espacial es:

$$
O(n + m)
$$

## Casos Edge y Consideraciones

- Inventario vacío o entrega vacía.
- Productos con cantidad cero.
- Productos repetidos en la entrega (no especificado, pero el algoritmo los suma).
- Nombres de productos sensibles a mayúsculas/minúsculas.
- Orden de los productos: se respeta el orden original y se agregan nuevos al final.

## Reflexiones y Aprendizajes

### Conceptos Aplicados

- Uso de Map para acceso eficiente por clave.
- Recorridos lineales de arreglos.
- Manipulación de estructuras de datos.

### Posibles Optimizaciones

El enfoque es eficiente para la mayoría de los casos prácticos. Si los datos fueran extremadamente grandes y la memoria fuera una limitación, se podría optimizar el uso de espacio evitando estructuras auxiliares, pero a costa de claridad y eficiencia.

## Recursos y Referencias

- [Documentación de Map en JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Map)
- [Manipulación de arrays en JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array)

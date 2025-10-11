# Explicación

## Análisis del problema

El problema consiste en actualizar un inventario representado como un array de pares [cantidad, nombre] usando una segunda entrega de productos. Si el producto ya existe en el inventario, se suma la cantidad; si no existe, se agrega como nuevo. El resultado debe estar ordenado alfabéticamente por nombre de producto.

Se deben contemplar casos donde el inventario inicial esté vacío, la entrega esté vacía, o haya productos repetidos en la entrega. El formato de entrada y salida es siempre un array de pares.

## Enfoque y algoritmo

Para resolver el problema de forma eficiente:

1. Crear un objeto Map para el inventario actual, usando el nombre como clave y la cantidad como valor.
2. Recorrer la entrega y actualizar el Map: si el producto existe, sumar la cantidad; si no, agregarlo.
3. Convertir el Map a un array de pares [cantidad, nombre].
4. Ordenar el array resultante alfabéticamente por nombre de producto.

Este enfoque permite búsquedas y actualizaciones rápidas (O(1) por producto) y facilita la ordenación final.

## Complejidad

**Tiempo:**
O(n + m + k log k), donde n es la cantidad de elementos en arr1, m en arr2 y k el total de productos únicos después de la actualización. El recorrido de ambos arrays es lineal y la ordenación final es logarítmica respecto al total de productos.

**Espacio:**
O(k), ya que se almacena el inventario actualizado en un Map y luego en el array resultado.

## Optimización

La solución actual es eficiente y clara, pero puede optimizarse en casos donde arr2 tiene productos repetidos:

Otras optimizaciones posibles:

- **Uso de hash/object:**
  Si el inventario y la entrega son ambos muy grandes, usar un objeto plano (hash) en vez de Map puede ser más eficiente en JavaScript puro, ya que el acceso y actualización por clave es O(1) y la estructura es más ligera en memoria. Esto es especialmente útil cuando los nombres de los productos son strings simples y no hay colisiones.

  **Ejemplo de código:**

  ```javascript
  function updateInventoryHash(arr1, arr2) {
    const inventory = {};
    // Cargar inventario actual
    for (const [quantity, item] of arr1) {
      inventory[item] = quantity;
    }
    // Actualizar con la entrega
    for (const [quantity, item] of arr2) {
      inventory[item] = (inventory[item] || 0) + quantity;
    }
    // Convertir a array y ordenar
    return Object.entries(inventory)
      .map(([item, quantity]) => [Number(quantity), item])
      .sort((a, b) => a[1].localeCompare(b[1]));
  }
  ```

- Si se requiere alta concurrencia (actualizaciones simultáneas), se puede usar una estructura concurrente o dividir el inventario en fragmentos para procesamiento paralelo.
  **Ejemplo de agrupamiento previo:**

```javascript
function groupDelivery(arr2) {
  const grouped = new Map();
  for (let [quantity, item] of arr2) {
    grouped.set(item, (grouped.get(item) || 0) + quantity);
  }
  return Array.from(grouped.entries()).map(([item, quantity]) => [
    quantity,
    item,
  ]);
}
```

Otras optimizaciones posibles:

- Si el inventario y la entrega son ambos muy grandes, se puede usar una estructura tipo hash para reducir aún más el tiempo de acceso y actualización.
- Si se requiere alta concurrencia (actualizaciones simultáneas), se puede usar una estructura concurrente o dividir el inventario en fragmentos para procesamiento paralelo.

## Casos límite y ejemplos

- Inventario y entrega vacíos: `updateInventory([], [])` retorna `[]`.
- Inventario vacío, entrega con productos repetidos: `updateInventory([], [[2, "A"], [3, "A"]])` retorna `[[5, "A"]]`.
- Inventario con productos, entrega vacía: `updateInventory([[1, "A"]], [])` retorna `[[1, "A"]]`.
- Producto con cantidad cero en inventario y entrega: `updateInventory([[0, "A"]], [[0, "A"]])` retorna `[[0, "A"]]`.
- Producto con nombre especial o string vacío: `updateInventory([[1, ""]], [[2, ""]])` retorna `[[3, ""]]`.

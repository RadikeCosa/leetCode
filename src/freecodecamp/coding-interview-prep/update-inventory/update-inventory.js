/**
 * FreeCodeCamp Problem: Inventory Update
 * Category: Coding Interview Prep
 * Difficulty: Medium
 * Topics: Array, Sorting, Map
 *
 * Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.
 *
 * Time Complexity: O(n + m + k log k) - n: items in arr1, m: items in arr2, k: total items after merge
 * Space Complexity: O(k) - result array
 */
function updateInventory(arr1, arr2) {
  // Mapa para almacenar el inventario actualizado
  let inventoryMap = new Map();
  // Agregar inventario actual al mapa
  for (let [quantity, item] of arr1) {
    inventoryMap.set(item, quantity);
  }

  // Actualizar el inventario con la nueva entrega
  for (let [quantity, item] of arr2) {
    if (inventoryMap.has(item)) {
      inventoryMap.set(item, inventoryMap.get(item) + quantity);
    } else {
      inventoryMap.set(item, quantity);
    }
  }

  // Convertir el mapa de inventario actualizado a un array en formato [cantidad, nombre]
  let updatedInventory = Array.from(inventoryMap.entries()).map(
    ([item, quantity]) => [quantity, item]
  );

  // Ordenar el inventario actualizado alfabéticamente por nombre de artículo
  updatedInventory.sort((a, b) => a[1].localeCompare(b[1]));

  return updatedInventory;
}

module.exports = updateInventory;

/**
 * FreeCodeCamp Problem: Inventory Update
 * Category: FreeCodeCamp
 *
 * @param {array} inventory - The current inventory as a 2D array
 * @param {array} shipment - The new shipment as a 2D array
 * @returns {array} The updated inventory
 */
function updateInventory(inventory, shipment) {
  const inventoryMap = new Map();

  // Populate the map with current inventory
  for (const [quantity, item] of inventory) {
    inventoryMap.set(item, quantity);
  }
  // Update inventory with shipment
  for (const [quantity, item] of shipment) {
    if (inventoryMap.has(item)) {
      inventoryMap.set(item, inventoryMap.get(item) + quantity);
    } else {
      inventoryMap.set(item, quantity);
    }
  }
  // Convert map back to 2D array
  const updatedInventory = [];
  for (const [item, quantity] of inventoryMap) {
    updatedInventory.push([quantity, item]);
  }
  return updatedInventory;
}

export default updateInventory;

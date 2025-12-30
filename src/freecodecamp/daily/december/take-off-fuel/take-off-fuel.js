/**
 * FreeCodeCamp Problem: Take Off Fuel
 * Category: FreeCodeCamp
 *
 * @param {number} currentGallons - Combustible actual en galones
 * @param {number} requiredLiters - Combustible necesario en litros
 * @returns {number} Cantidad de galones enteros a añadir
 */
function fuelToAdd(currentGallons, requiredLiters) {
  const LITERS_PER_GALLON = 3.78541;
  const requiredGallons = requiredLiters / LITERS_PER_GALLON;
  const needed = requiredGallons - currentGallons;

  return needed <= 0 ? 0 : Math.ceil(needed);
}

export default fuelToAdd;

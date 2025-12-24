/**
 * Calcula el costo total para llenar un tanque de combustible.
 *
 * @param {number} tankSize - Capacidad total del tanque en galones.
 * @param {number} fuelLevel - Cantidad actual de combustible en el tanque (galones).
 * @param {number} pricePerGallon - Precio por galón de combustible.
 * @returns {string} Costo total para llenar el tanque, formateado como "$d.dd".
 */
function costToFill(tankSize, fuelLevel, pricePerGallon) {
  const gallonsNeeded = tankSize - fuelLevel;

  if (gallonsNeeded <= 0 || pricePerGallon === 0) {
    return "$0.00";
  }
  const totalCost = gallonsNeeded * pricePerGallon;
  const roundedCost = totalCost.toFixed(2);
  return `$${roundedCost}`;
}

export default costToFill;

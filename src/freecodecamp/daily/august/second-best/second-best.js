/**
 * FreeCodeCamp Problem: Second Best
 * Category: FreeCodeCamp
 *
 * @param {number[]} laptops - Array de precios de laptops
 * @param {number} budget - Presupuesto disponible
 * @returns {number} El precio del segundo mejor laptop dentro del presupuesto, o el mejor, o 0
 */
function getLaptopCost(laptops, budget) {
  const uniquePrices = Array.from(new Set(laptops));
  uniquePrices.sort((a, b) => b - a);

  // Filtrar los precios que están dentro del presupuesto
  const affordable = uniquePrices.filter((price) => price <= budget);

  if (affordable.length === 0) {
    return 0;
  }

  // Si el más caro está dentro del presupuesto y hay al menos dos, devolver el segundo más caro
  if (affordable[0] === uniquePrices[0] && affordable.length >= 2) {
    return affordable[1];
  }

  // Si el más caro está fuera del presupuesto, devolver el más caro que sí entra
  return affordable[0];
}

export default getLaptopCost;

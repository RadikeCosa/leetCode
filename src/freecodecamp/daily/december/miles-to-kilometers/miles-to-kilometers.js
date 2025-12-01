/**
 * Convierte millas a kilómetros, redondeando a dos decimales.
 * @param {number} miles - Distancia en millas (número no negativo).
 * @returns {number} Distancia equivalente en kilómetros, redondeada a dos decimales.
 */
function convertToKm(miles) {
  // 1 milla equivale a 1.60934 kilómetros
  const kilometersPerMile = 1.60934;
  // Multiplicamos y redondeamos a dos decimales
  let result = miles * kilometersPerMile;
  result = parseFloat(result.toFixed(2));
  return result;
}

export default convertToKm;

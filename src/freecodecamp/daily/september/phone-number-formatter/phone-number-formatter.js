/**
 * FreeCodeCamp Problem: Phone Number Formatter
 * Category: Daily
 *
 * Given a string of eleven digits, return the string as a phone number in this format: "+D (DDD) DDD-DDDD".
 *
 * @param {string} number - String de 11 dígitos a formatear
 * @returns {string} - Número de teléfono formateado
 *
 * Complejidad Temporal: O(1) - operaciones de slice son constantes para longitud fija
 * Complejidad Espacial: O(1) - solo creamos variables para partes del string
 */

function formatNumber(number) {
  // Optimización: podemos extraer las partes directamente en el template string
  // para eliminar variables intermedias y hacer el código más conciso
  return `+${number.slice(0, 1)} (${number.slice(1, 4)}) ${number.slice(
    4,
    7
  )}-${number.slice(7)}`;
}

export default formatNumber;

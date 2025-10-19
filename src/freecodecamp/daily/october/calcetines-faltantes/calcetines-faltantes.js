/**
 * FreeCodeCamp Problem: Calcetines Faltantes
 * Category: Daily
 *
 * Dado un número entero que representa la cantidad de pares de calcetines con los que comenzó
 * y otro número entero que representa cuántos ciclos de lavado ha realizado, devuelva la cantidad
 * de pares de calcetines completos que tiene actualmente utilizando las siguientes restricciones:
 *
 * - Cada 2 ciclos de lavado, se pierde un solo calcetín.
 * - Cada 3 ciclos de lavado, encuentras un solo calcetín faltante.
 * - Cada 5 ciclos de lavado, se desgasta un calcetín y debe desecharse.
 * - Cada 10 ciclos de lavado, compras un par de calcetines.
 * - Nunca puedes tener menos de cero calcetines en total.
 * - Las reglas pueden superponerse.
 *
 * @param {number} pairs - Cantidad inicial de pares de calcetines
 * @param {number} cycles - Número de ciclos de lavado realizados
 * @returns {number} - Número de pares completos de calcetines
 */
function sockPairs(pairs, cycles) {
  // Calcular el total de calcetines iniciales
  let totalSocks = pairs * 2;
  // Calcular los calcetines perdidos, encontrados, desechados y comprados
  const socksLost = Math.floor(cycles / 2);
  const socksFound = Math.floor(cycles / 3);
  const socksDiscarded = Math.floor(cycles / 5);
  const socksBought = Math.floor(cycles / 10) * 2;

  // Calcular el total de calcetines después de aplicar todas las reglas
  totalSocks =
    totalSocks - socksLost + socksFound - socksDiscarded + socksBought;

  // Asegurarse de que el total de calcetines no sea negativo
  totalSocks = Math.max(totalSocks, 0);

  // Devolver el número de pares completos de calcetines
  return Math.floor(totalSocks / 2);
}

export default sockPairs;

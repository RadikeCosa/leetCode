/**
 * FreeCodeCamp Problem: Stellar Classification
 * Difficulty: Easy
 * Topics: Functions, Conditionals
 *
 * October 4th marks the beginning of World Space Week. The next seven days will bring you astronomy-themed coding challenges.
 *
 * For today's challenge, you are given the surface temperature of a star in Kelvin (K) and need to determine its stellar classification based on the following ranges:
 *
 * "O": 30,000 K or higher
 *
 * "B": 10,000 K - 29,999 K
 *
 * "A": 7,500 K - 9,999 K
 *
 * "F": 6,000 K - 7,499 K
 *
 * "G": 5,200 K - 5,999 K
 *
 * "K": 3,700 K - 5,199 K
 *
 * "M": 0 K - 3,699 K
 *
 * Return the classification of the given star.
 *
 * Time Complexity: O(1) - Máximo 7 iteraciones (constante)
 * Space Complexity: O(1) - Map con 7 elementos fijos
 */
function stellarClassification(temp) {
  // Crear Map con temperaturas mínimas como keys y clasificaciones como values
  // El orden de inserción es crítico: de mayor a menor temperatura mínima
  let classification = new Map([
    [30000, "O"], // O: ≥ 30,000 K (estrellas más calientes)
    [10000, "B"], // B: 10,000 - 29,999 K
    [7500, "A"], // A: 7,500 - 9,999 K
    [6000, "F"], // F: 6,000 - 7,499 K
    [5200, "G"], // G: 5,200 - 5,999 K (como el Sol)
    [3700, "K"], // K: 3,700 - 5,199 K
    [0, "M"], // M: 0 - 3,699 K (caso por defecto)
  ]);

  // Iterar sobre el Map (mantiene orden de inserción)
  // Encontrar la primera temperatura mínima que sea <= temp
  for (let [key, value] of classification) {
    if (temp >= key) {
      return value;
    }
  }

  // Este caso nunca debería ocurrir con temperaturas válidas
  return "Unknown";
}

module.exports = stellarClassification;

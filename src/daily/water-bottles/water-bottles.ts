/**
 * LeetCode Problem 1518: Water Bottles
 * Difficulty: Easy
 * Topics: Math, Simulation
 *
 * There are n water bottles that are initially full of water. You can exchange k empty water bottles for one full water bottle.
 * The operation can be performed any number of times until you cannot exchange enough empty bottles to get a new full bottle.
 *
 * Return the maximum number of water bottles you can drink.
 *
 * Time Complexity: O(log n) - cada intercambio reduce las botellas vacías, máximo log_k(n) iteraciones
 * Space Complexity: O(1) - solo usamos variables auxiliares constantes
 */
export function numWaterBottles(
  numBottles: number,
  numExchange: number
): number {
  // Inicializamos el total bebido con las botellas iniciales
  let totalDrunk = numBottles;
  // Al beber las botellas iniciales, obtenemos el mismo número de botellas vacías
  let emptyBottles = numBottles;

  // Mientras tengamos suficientes botellas vacías para hacer intercambios
  while (emptyBottles >= numExchange) {
    // Calculamos cuántas botellas nuevas podemos obtener del intercambio
    const newFullBottles = Math.floor(emptyBottles / numExchange);
    // Sumamos las nuevas botellas al total bebido
    totalDrunk += newFullBottles;
    // Actualizamos las botellas vacías: resto del intercambio + las nuevas que acabamos de beber
    emptyBottles = (emptyBottles % numExchange) + newFullBottles;
  }

  return totalDrunk;
}

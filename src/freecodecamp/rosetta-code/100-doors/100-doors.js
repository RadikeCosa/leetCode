/**
 * FreeCodeCamp Problem: 100 Doors
 * Category: Rosetta Code
 *
 * There are 100 doors in a row that are all initially closed. You make 100 passes by the doors.
 * The first time through, visit every door and 'toggle' the door (if the door is closed, open it;
 * if it is open, close it). The second time, only visit every 2nd door (i.e., door #2, #4, #6, ...)
 * and toggle it. The third time, visit every 3rd door (i.e., door #3, #6, #9, ...), etc.,
 * until you only visit the 100th door.
 *
 * Implement a function to determine the state of the doors after the last pass.
 * Return the final result in an array, with only the door number included in the array if it is open.
 *
 * @param {number} numDoors - The number of doors (and number of passes)
 * @returns {number[]} - Array containing only the numbers of doors that are open
 */

/**
 * VERSIÓN 1: Simulación Directa - O(n²)
 * Enfoque educativo que simula exactamente el proceso descrito en el problema
 */
function getFinalOpenedDoorsSimulation(numDoors) {
  // Edge case: sin puertas
  if (numDoors === 0) return [];

  // Crear array de puertas: índice 0 no se usa, índices 1-n representan las puertas
  // false = cerrada, true = abierta
  const doors = new Array(numDoors + 1).fill(false);

  // Realizar las n pasadas
  for (let pass = 1; pass <= numDoors; pass++) {
    // En la pasada k, visitar múltiplos de k: k, 2k, 3k, ...
    for (let door = pass; door <= numDoors; door += pass) {
      // Toggle: cambiar estado de la puerta
      doors[door] = !doors[door];
    }
  }

  // Recopilar solo las puertas que quedaron abiertas
  const openDoors = [];
  for (let i = 1; i <= numDoors; i++) {
    if (doors[i]) {
      openDoors.push(i);
    }
  }

  return openDoors;
}

/**
 * VERSIÓN 2: Insight Matemático - O(√n)
 * Optimización elegante basada en el descubrimiento de que solo
 * los cuadrados perfectos quedan abiertos
 */
function getFinalOpenedDoorsOptimized(numDoors) {
  // Edge case: sin puertas
  if (numDoors === 0) return [];

  const openDoors = [];
  let i = 1;
  let perfectSquare = i * i;

  // Generar cuadrados perfectos: 1², 2², 3², ... hasta que i² > numDoors
  while (perfectSquare <= numDoors) {
    openDoors.push(perfectSquare);
    i++;
    perfectSquare = i * i;
  }

  return openDoors;
}

// Exportar la versión optimizada como función principal
// pero mantener ambas disponibles para comparación educativa
function getFinalOpenedDoors(numDoors) {
  return getFinalOpenedDoorsOptimized(numDoors);
}

// Exportar ambas versiones para testing y comparación
export { getFinalOpenedDoorsSimulation, getFinalOpenedDoorsOptimized };
export default getFinalOpenedDoors;

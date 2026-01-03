/**
 * FreeCodeCamp Problem: Left Handed Seat At The Table
 * Category: FreeCodeCamp
 *
 * Determina cuántos asientos pueden ser ocupados por una persona zurda en una mesa de 4x2.
 * Una persona zurda no puede sentarse donde haya una persona diestra inmediatamente a su izquierda.
 *
 * - Los asientos en la fila superior (índice 0) están orientados hacia abajo
 * - Los asientos en la fila inferior (índice 1) están orientados hacia arriba
 * - La "izquierda" es relativa a la orientación del asiento
 * - Los asientos de las esquinas solo tienen un vecino lateral
 *
 * @param {string[][]} table - Matriz 4x2 representando los asientos.
 *                             "R" = diestro, "L" = zurdo, "U" = vacío
 * @returns {number} Número de asientos vacíos disponibles para una persona zurda
 *
 * @example
 * findLeftHandedSeats([
 *   ["U", "R", "U", "L"],
 *   ["U", "R", "R", "R"]
 * ]) // returns 2
 */
function findLeftHandedSeats(table) {
  let count = 0;

  for (let row = 0; row < table.length; row++) {
    for (let seat = 0; seat < table[row].length; seat++) {
      if (table[row][seat] === "U") {
        if (row === 0) {
          // Fila superior (mirando hacia abajo): izquierda física = índice siguiente (seat + 1)
          // Última columna es esquina (no tiene vecino izquierdo)
          if (seat === table[row].length - 1 || table[row][seat + 1] !== "R") {
            count++;
          }
        } else {
          // Fila inferior (mirando hacia arriba): izquierda física = índice anterior (seat - 1)
          // Primera columna es esquina (no tiene vecino izquierdo)
          if (seat === 0 || table[row][seat - 1] !== "R") {
            count++;
          }
        }
      }
    }
  }
  return count;
}

export default findLeftHandedSeats;

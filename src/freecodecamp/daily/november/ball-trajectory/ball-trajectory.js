/**
 * FreeCodeCamp Problem: Ball Trajectory
 * Category: FreeCodeCamp
 *
 *  TODO: Implement the getNextLocation function that calculates the next position of a ball
 *  based on its current and previous positions in a 2D matrix.
 * @param {Array<Array<number>>} matrix - A 2D array representing the current and previous positions of the ball
 * @returns {Array} The next position of the ball as [row, column]
 */
function getNextLocation(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  let current = null;
  let previous = null;

  // Buscar posiciones actual y previa
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (matrix[r][c] === 2) current = [r, c];
      if (matrix[r][c] === 1) previous = [r, c];
    }
  }

  if (!current || !previous) return null;

  // Calcular dirección del movimiento
  let moveRow = current[0] - previous[0];
  let moveCol = current[1] - previous[1];

  // Calcular próxima posición
  let nextRow = current[0] + moveRow;
  let nextCol = current[1] + moveCol;

  // Rebote en bordes
  if (nextRow < 0 || nextRow >= rows) {
    moveRow *= -1;
    nextRow = current[0] + moveRow;
  }
  if (nextCol < 0 || nextCol >= cols) {
    moveCol *= -1;
    nextCol = current[1] + moveCol;
  }

  return [nextRow, nextCol];
}

export default getNextLocation;

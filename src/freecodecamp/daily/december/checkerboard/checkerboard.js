/**
 * FreeCodeCamp Problem: Checkerboard
 * Category: FreeCodeCamp
 *
 * @param {Array<number>} dimensions - An array where the first element is the number of rows and the second is the number of columns.
 * @returns {Array<Array<string>>} A matrix representing the checkerboard pattern.
 */
function createBoard(dimensions) {
  const [rows, cols] = dimensions;
  const board = new Array(rows).fill(null).map(() => new Array(cols));
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      board[i][j] = (i + j) % 2 === 0 ? "X" : "O";
    }
  }
  return board;
}
export default createBoard;

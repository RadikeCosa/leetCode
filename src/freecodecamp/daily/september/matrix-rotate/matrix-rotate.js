/**
 * FreeCodeCamp Problem: Matrix Rotate
 * Category: FreeCodeCamp
 *
 * @param {number[][]} matrix - The matrix to rotate
 * @returns {number[][]} The rotated matrix
 */
function rotate(matrix) {
  const n = matrix.length;
  const m = matrix[0].length;
  const rotated = Array.from({ length: m }, () => Array(n));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      rotated[j][n - 1 - i] = matrix[i][j];
    }
  }
  return rotated;
}

export default rotate;

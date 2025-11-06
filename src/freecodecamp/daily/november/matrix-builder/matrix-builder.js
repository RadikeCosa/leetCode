/**
 * FreeCodeCamp Problem: Matrix Builder
 * Category: Daily
 */
function buildMatrix(rows, cols) {
  return Array.from({ length: rows }, () =>
    Array.from({ length: cols }, () => 0)
  );
}

export default buildMatrix;

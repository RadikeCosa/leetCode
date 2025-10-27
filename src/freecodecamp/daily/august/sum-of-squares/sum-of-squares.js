/**
 * FreeCodeCamp Problem: Sum of Squares
 * Category: Daily
 */
function sumOfSquares(n) {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += i * i;
  }

  return sum;
}

export default sumOfSquares;

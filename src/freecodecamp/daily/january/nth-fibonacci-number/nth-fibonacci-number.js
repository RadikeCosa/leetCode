/**
 * FreeCodeCamp Problem: Nth Fibonacci Number
 * Category: FreeCodeCamp
 *
 * @param {number} n - The position in the Fibonacci sequence
 * @returns {number} The nth Fibonacci number
 */
function nthFibonacci(n) {
  // The tests expect 1-based positions:
  // n = 1 -> 0, n = 2 -> 1, n = 3 -> 1, etc.
  if (n <= 1) return 0;
  if (n === 2) return 1;
  let a = 0,
    b = 1;
  for (let i = 3; i <= n; i++) {
    const temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}

export default nthFibonacci;

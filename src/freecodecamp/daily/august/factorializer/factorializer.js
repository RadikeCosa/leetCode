/**
 * FreeCodeCamp Problem: Factorializer
 * Category: Daily
 */
function factorial(n) {
  if (n === 0) return 1;

  for (let i = n - 1; i > 0; i--) {
    n *= i;
  }

  return n;
}

export default factorial;

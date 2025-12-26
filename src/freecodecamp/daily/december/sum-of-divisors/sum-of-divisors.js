/**
 * FreeCodeCamp Problem: Sum Of Divisors
 * Category: FreeCodeCamp
 *
 * @param {number} n - The number for which to sum the divisors
 * @returns {number} The sum of all divisors of n
 */
function sumDivisors(n) {
  let suma = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      suma += i;
    }
  }
  return suma;
}

export default sumDivisors;

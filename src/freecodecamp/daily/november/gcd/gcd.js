/**
 * FreeCodeCamp Problem: Gcd
 * Category: FreeCodeCamp
 *
 * @param {number} x - First positive integer
 * @param {number} y - Second positive integer
 * @returns {number} The greatest common divisor of x and y
 */
function gcd(x, y) {
  if (y === 0) {
    return x;
  }
  return gcd(y, x % y);
}

export default gcd;

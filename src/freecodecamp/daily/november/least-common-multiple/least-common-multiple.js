/**
 * FreeCodeCamp Problem: Least Common Multiple
 * Category: FreeCodeCamp
 *
 * @param {number} a - The first integer
 * @param {number} b - The second integer
 * @returns {number} The least common multiple of a and b
 */
function lcm(a, b) {
  // funcion auxiliar para calcular el máximo común divisor (mcd)
  function gcd(x, y) {
    while (y !== 0) {
      [x, y] = [y, x % y];
    }
    return Math.abs(x);
  }

  if (a === 0 || b === 0) {
    throw new Error("MCM no está definido para 0");
  }
  return Math.abs(a * b) / gcd(a, b);
}

export default lcm;

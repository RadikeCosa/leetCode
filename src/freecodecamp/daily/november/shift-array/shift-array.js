/**
 * FreeCodeCamp Problem: Shift Array
 * Category: FreeCodeCamp
 *
 * @param {Array} arr - The array to be shifted
 * @param {number} n - The number of positions to shift the array
 * @returns {Array} The shifted array
 */
function shiftArray(arr, n) {
  const length = arr.length;
  if (length === 0) return arr;

  // Normalize n to be within the bounds of the array length
  n = n % length;
  if (n < 0) {
    n += length; // Convert negative shifts to positive equivalent
  }

  // Split and concatenate the array
  const part1 = arr.slice(n);
  const part2 = arr.slice(0, n);
  return part1.concat(part2);
}

export default shiftArray;

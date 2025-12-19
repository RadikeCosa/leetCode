/**
 * FreeCodeCamp Problem: Pairwise
 * Category: FreeCodeCamp
 *
 * @param {Array<number>} arr - The array of integers to search for pairs.
 * @param {number} target - The target sum for the pairs.
 * @returns {number} The sum of the indices of the pairs that add up to the target.
 */
function pairwise(arr, target) {
  let used = new Array(arr.length).fill(false);
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    if (used[i]) continue;
    for (let j = i + 1; j < arr.length; j++) {
      if (!used[j] && arr[i] + arr[j] === target) {
        total += i + j;
        used[i] = true;
        used[j] = true;
        break; // Move to next i after finding a pair for i
      }
    }
  }
  return total;
}
export default pairwise;

/**
 * FreeCodeCamp Problem: Sorted Array
 * Category: FreeCodeCamp
 *
 * @param {number[]} arr - The array of numbers to check
 * @returns {string} A string indicating if the array is "Ascending", "Descending", or "Not sorted"
 */
function isSorted(arr) {
  let isAscending = true;
  let isDescending = true;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
      isDescending = false;
    } else if (arr[i] < arr[i - 1]) {
      isAscending = false;
    }
  }
  if (isAscending) return "Ascending";
  if (isDescending) return "Descending";
  return "Not sorted";
}

export default isSorted;

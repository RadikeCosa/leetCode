/**
 * FreeCodeCamp Problem: Array Diff
 * Category: FreeCodeCamp
 *
 * @param {string[]} arr1 - First array of strings
 * @param {string[]} arr2 - Second array of strings
 * @returns {string[]} Array containing strings that appear in only one of the two arrays, sorted alphabetically
 */
function arrayDiff(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);
  const result = [];

  for (const item of set1) {
    if (!set2.has(item)) {
      result.push(item);
    }
  }

  for (const item of set2) {
    if (!set1.has(item)) {
      result.push(item);
    }
  }

  return result.sort();
}

export default arrayDiff;

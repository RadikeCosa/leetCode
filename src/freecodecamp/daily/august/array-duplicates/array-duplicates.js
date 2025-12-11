/**
 * FreeCodeCamp Problem: Array Duplicates
 * Category: FreeCodeCamp
 *
 * @param {number[]} arr - An array of integers
 * @returns {number[]} An array of integers that appear more than once, sorted in ascending order
 */
function findDuplicates(arr) {
  const frequencyMap = new Map();
  const result = [];

  // Count the frequency of each number in the array
  for (const num of arr) {
    frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
  }

  // Collect numbers that appear more than once
  for (const [num, count] of frequencyMap.entries()) {
    if (count > 1) {
      result.push(num);
    }
  }

  // Sort the result array in ascending order
  result.sort((a, b) => a - b);

  return result;
}

export default findDuplicates;

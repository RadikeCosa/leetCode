/**
 * FreeCodeCamp Problem: Missing Numbers
 * Category: FreeCodeCamp
 *
 * @param {Number[]} arr - An array of integers from 1 to n, inclusive
 * @returns {Number[]} An array of missing integers between 1 and n
 */
function findMissingNumbers(arr) {
  const max = Math.max(...arr);
  const count = new Array(max + 1).fill(0);
  for (const num of arr) {
    count[num] = 1;
  }
  const missingNumbers = [];
  for (let i = 1; i <= max; i++) {
    if (count[i] === 0) {
      missingNumbers.push(i);
    }
  }
  return missingNumbers;
}

export default findMissingNumbers;

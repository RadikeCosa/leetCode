/**
 * FreeCodeCamp Problem: Most Frequent
 * Category: FreeCodeCamp
 *
 * @param {string[]} arr - An array of elements to find the most frequent element from
 * @returns {any} The element that appears most frequently in the array
 */
function mostFrequent(arr) {
  const freq = new Map();
  let maxCount = 0;
  let result;
  for (const el of arr) {
    const count = (freq.get(el) || 0) + 1;
    freq.set(el, count);
    if (count > maxCount) {
      maxCount = count;
      result = el;
    }
  }
  return result;
}

export default mostFrequent;

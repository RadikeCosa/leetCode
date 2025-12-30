/**
 * FreeCodeCamp Problem: Sum The String
 * Category: FreeCodeCamp
 *
 * @param {string} str - The input string containing digits and other characters
 * @returns {number} The sum of all numbers found in the string
 */
function stringSum(str) {
  const matches = str.match(/\d+/g);

  if (!matches) return 0;

  return matches.reduce((acc, num) => acc + Number(num), 0);
}

export default stringSum;

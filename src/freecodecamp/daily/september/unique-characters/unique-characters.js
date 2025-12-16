/**
 * FreeCodeCamp Problem: Unique Characters
 * Category: FreeCodeCamp
 *
 * @param {string} str - The input string to check for unique characters
 * @returns {boolean} Returns true if all characters are unique, false otherwise
 */
function allUnique(str) {
  const charSet = new Set();

  for (let char of str) {
    if (charSet.has(char)) {
      return false; // Duplicate character found
    }
    charSet.add(char);
  }

  return true; // All characters are unique
}

export default allUnique;

/**
 * FreeCodeCamp Problem: Consonant Count
 * Category: FreeCodeCamp
 *
 * @param {string} text - The input string to be evaluated
 * @param {number} target - The target number of consonants to match
 * @returns {boolean} True if the number of consonants in the text matches the target, otherwise false
 */
function hasConsonantCount(text, target) {
  let consonantCount = 0;
  const vowels = "aeiou";
  for (let char of text.toLowerCase()) {
    if (char >= "a" && char <= "z" && !vowels.includes(char)) {
      consonantCount++;
    }
  }
  return consonantCount === target;
}

export default hasConsonantCount;

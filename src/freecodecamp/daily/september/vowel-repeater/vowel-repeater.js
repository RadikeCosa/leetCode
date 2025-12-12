/**
 * FreeCodeCamp Problem: Vowel Repeater
 * Category: FreeCodeCamp
 *
 * @param {string} str - The input string to process
 * @returns {string} The processed string with vowels repeated accordingly
 */

function repeatVowels(str) {
  let result = "";
  let vowelCount = 0;
  const vowels = "aeiouAEIOU";

  for (let char of str) {
    if (vowels.includes(char)) {
      vowelCount++;
      // La primera aparición mantiene el case, las repeticiones extra son minúsculas
      result += char + char.toLowerCase().repeat(vowelCount - 1);
    } else {
      result += char;
    }
  }

  return result;
}

export default repeatVowels;

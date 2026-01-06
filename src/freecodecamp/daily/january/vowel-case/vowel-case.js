/**
 * FreeCodeCamp Problem: Vowel Case
 * Category: FreeCodeCamp
 *
 * @param {string} str - The input string to be transformed
 * @returns {string} The transformed string with vowels in uppercase and other letters in lowercase
 */
function vowelCase(str) {
  return str
    .split("")
    .map((char) => {
      if (/[aeiou]/i.test(char)) {
        return char.toUpperCase();
      } else if (/[a-z]/i.test(char)) {
        return char.toLowerCase();
      } else {
        return char;
      }
    })
    .join("");
}

export default vowelCase;

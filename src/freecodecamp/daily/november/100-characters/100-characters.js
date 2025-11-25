/**
 * FreeCodeCamp Problem: 100 Characters
 * Category: FreeCodeCamp
 *
 * @param {string} chars - The input string to be repeated and trimmed to 100 characters
 * @returns {string} A string exactly 100 characters long, formed by repeating and trimming the input string
 */
function oneHundred(chars) {
  let result = "";
  while (result.length < 100) {
    result += chars;
  }
  return result.slice(0, 100);
}

export default oneHundred;

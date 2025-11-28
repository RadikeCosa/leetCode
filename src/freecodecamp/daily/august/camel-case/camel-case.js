/**
 * FreeCodeCamp Problem: Camel Case
 * Category: FreeCodeCamp
 *
 * @param {string} s - The input string to be converted to camel case
 * @returns {string} The camel case version of the input string
 */
function toCamelCase(s) {
  let words = s
    .toLowerCase()
    .split(/[\s-_]+/)
    .filter(Boolean);

  for (let i = 1; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }

  return words.join("");
}

export default toCamelCase;

/**
 * Devuelve la cantidad de vocales y consonantes en un string.
 *
 * @param {string} str - Texto a analizar.
 * @returns {[number, number]} [vocales, consonantes]
 * @example
 *   count("Hello World!") // [3, 7]
 */
function count(str) {
  const vowels = str.match(/[aeiou]/gi);
  const consonants = str.match(/[bcdfghjklmnpqrstvwxyz]/gi);
  return [vowels ? vowels.length : 0, consonants ? consonants.length : 0];
}

export default count;

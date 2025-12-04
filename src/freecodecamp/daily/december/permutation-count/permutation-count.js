/**
 * FreeCodeCamp Problem: Permutation Count
 * Category: FreeCodeCamp
 *
 * @param {string} str - The input string for which to count unique permutations
 * @returns {number} The number of distinct permutations of the input string
 */
function countPermutations(str) {
  // Función para calcular el factorial
  function factorial(n) {
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }
  // Contar la frecuencia de cada caracter
  const freq = {};
  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }
  // Calcular el factorial del total de caracteres
  const n = str.length;
  let numerator = factorial(n);
  // Calcular el factorial de las frecuencias
  let denominator = 1;
  for (let key in freq) {
    denominator *= factorial(freq[key]);
  }
  // Calcular el número de permutaciones únicas
  const permutations = numerator / denominator;

  return permutations;
}

export default countPermutations;

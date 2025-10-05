/**
 * FreeCodeCamp Problem: Vowel Balance
 * Difficulty: Easy
 * Topics: Strings, Conditionals
 *
 * Given a string, determine whether the number of vowels in the first half of the string is equal to the number of vowels in the second half.
 *
 * The string can contain any characters.
 * The letters a, e, i, o, and u, in either uppercase or lowercase, are considered vowels.
 * If there's an odd number of characters in the string, ignore the center character.
 *
 * Time Complexity: O(n) - Un solo loop que recorre toda la string, verificación de vocales O(1)
 * Space Complexity: O(1) - Solo variables contadoras y string constante de vocales
 */
function isBalanced(s) {
  // String constante con todas las vocales (mayúsculas y minúsculas)
  let vowels = "aeiouAEIOU";

  // Contadores para vocales en cada mitad
  let leftVowelCount = 0;
  let rightVowelCount = 0;

  // Cálculos iniciales
  let length = s.length;
  let mid = Math.floor(length / 2); // Punto medio (redondeado hacia abajo)
  let isOdd = length % 2 === 1; // Flag para saber si la longitud es impar

  // Loop único que recorre toda la string
  for (let i = 0; i < length; i++) {
    // Solo procesar si el caracter actual es una vocal
    if (vowels.includes(s[i])) {
      if (i < mid) {
        // Primera mitad: siempre contar
        leftVowelCount++;
      } else if (i > mid || !isOdd) {
        // Segunda mitad: contar si i > mid, o si es par (cualquier i >= mid)
        rightVowelCount++;
      }
      // Si i === mid y es impar: se ignora (no entra en ningún contador)
    }
  }

  // Retornar true si ambas mitades tienen igual cantidad de vocales
  return leftVowelCount === rightVowelCount;
}

export default isBalanced;

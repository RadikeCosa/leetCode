/**
 * LeetCode Problem: Longest Palindromic Substring
 * Dificultad: Medium
 * Temas: strings, two-pointers, expansión desde el centro
 *
 * Dado un string s, retorna el substring palindrómico más largo dentro de s.
 * Un substring es palíndromo si se lee igual de izquierda a derecha que de derecha a izquierda.
 *
 * Ejemplo:
 *   Input: "babad"
 *   Output: "bab" (o "aba", ambas son válidas)
 *
 * Restricciones:
 *   - 1 <= s.length <= 1000
 *   - s consiste solo de letras y/o dígitos (mayúsculas y minúsculas)
 *
 * @param {string} s - Cadena de entrada sobre la que se busca el palíndromo más largo.
 * @returns {string} El substring palindrómico más largo encontrado en s.
 */
export function longestPalindromic(s: string): string {
  let maxPalindrome = "";

  // Funcion auxliar que expande desde el centro y retorna el palindromo mas largo encontrado
  function expandAroundCenter(left: number, right: number): string {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return s.slice(left + 1, right);
  }

  for (let i = 0; i < s.length; i++) {
    // Palíndromo impar (centro en i)
    const palindrome1 = expandAroundCenter(i, i);
    // Palíndromo par (centro entre i y i+1)
    const palindrome2 = expandAroundCenter(i, i + 1);

    // Elegimos el más largo de los dos
    const longerPalindrome =
      palindrome1.length > palindrome2.length ? palindrome1 : palindrome2;

    // Si es más largo que el máximo actual, lo actualizamos
    if (longerPalindrome.length > maxPalindrome.length) {
      maxPalindrome = longerPalindrome;
    }
  }

  return maxPalindrome;
}

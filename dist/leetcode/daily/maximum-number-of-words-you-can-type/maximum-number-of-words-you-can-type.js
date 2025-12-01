/**
 * LeetCode Problem 1935: Maximum Number of Words You Can Type
 * Difficulty: Easy
 * Topics: Hash Table, String
 *
 * There is a malfunctioning keyboard where some letter keys do not work.
 * All other keys on the keyboard work properly.
 * Given a string text of words separated by a single space and a string
 * brokenLetters of all distinct letter keys that are broken, return the
 * number of words in text you can fully type using this keyboard.
 *
 * Time Complexity: O(n × m) - donde n es el número de palabras y m es la longitud promedio de palabras
 * Space Complexity: O(n + k) - donde n es para arrays intermedios y k ≤ 26 para brokenSet
 */
export function canBeTypedWords(text, brokenLetters) {
    const words = text.split(" ");
    const brokenSet = new Set(brokenLetters);
    const validWords = words.filter((word) => [...word].every((letra) => !brokenSet.has(letra)));
    return validWords.length;
}
/*
// Solución alternativa - más intuitiva pero menos eficiente
// Time Complexity: O(n × k × m) donde k = letras rotas
// Space Complexity: O(n × k) por arrays intermedios
export function canBeTypedWordsAlternative(text: string, brokenLetters: string): number {
  let words = text.split(' ')
  for(const char of brokenLetters) {
    words = words.filter((word) => !(word.includes(char)))
  }
  return words.length
}
*/

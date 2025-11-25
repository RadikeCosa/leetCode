/**
 * FreeCodeCamp Problem: Character Count
 * Category: FreeCodeCamp
 *
 * @param {string} sentence - The input sentence to count characters from
 * @returns {string[]} An array of strings representing each character and its count in the format "letter count"
 */ function countCharacters(sentence) {
  // Array fijo de 26 posiciones: índice 0 = 'a', 1 = 'b', ..., 25 = 'z'
  const counts = new Array(26).fill(0);

  // Normalizamos una sola vez
  const lower = sentence.toLowerCase();

  // Fase 1: Contar letras (O(n))
  for (const char of lower) {
    if (char >= "a" && char <= "z") {
      const index = char.charCodeAt(0) - 97; // 'a' → 0
      counts[index]++;
    }
  }

  // Fase 2: Construir resultado (orden natural, O(26) = O(1))
  const result = [];
  for (let i = 0; i < 26; i++) {
    if (counts[i] > 0) {
      const letter = String.fromCharCode(97 + i);
      result.push(`${letter} ${counts[i]}`);
    }
  }

  return result;
}
export default countCharacters;

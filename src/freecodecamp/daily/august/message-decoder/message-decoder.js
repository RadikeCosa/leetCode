/**
 * FreeCodeCamp Problem: Message Decoder
 * Category: Daily August
 *
 * Decode a secret message by shifting letters in the alphabet.
 * Rules:
 * - Positive shift means forward in alphabet
 * - Negative shift means backward in alphabet
 * - Preserve case (upper/lower)
 * - Don't decode non-alphabetical characters
 *
 * @param {string} message - The encoded message
 * @param {number} shift - Number of positions to shift (can be negative)
 * @return {string} - The decoded message
 */
const decode = (message, shift) => {
  const alphabetSize = 26;

  return message
    .split("")
    .map((char) => {
      if (/[a-z]/.test(char)) {
        // Para minúsculas: calcular índice con charCode, restar shift, ajustar con módulo
        const base = "a".charCodeAt(0);
        const index = char.charCodeAt(0) - base;
        const newIndex = (index - shift + alphabetSize) % alphabetSize;
        return String.fromCharCode(newIndex + base);
      } else if (/[A-Z]/.test(char)) {
        // Para mayúsculas: mismo proceso
        const base = "A".charCodeAt(0);
        const index = char.charCodeAt(0) - base;
        const newIndex = (index - shift + alphabetSize) % alphabetSize;
        return String.fromCharCode(newIndex + base);
      }
      // Caracteres no alfabéticos permanecen igual
      return char;
    })
    .join("");
};

export default decode;

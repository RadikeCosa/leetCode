/**
 * FreeCodeCamp Problem: S P A C E J A M
 * Category: Daily
 *
 * Given a string, remove all spaces from the string, insert two spaces between every character,
 * convert all alphabetical letters to uppercase, and return the result.
 *
 * - Non-alphabetical characters should remain unchanged (except for spaces).
 *
 * @param {string} s - The input string to transform
 * @returns {string} - The transformed string with spaces removed, characters uppercased, and double-spaced
 */
function spaceJam(s) {
  return s
    .replace(/\s+/g, "") // Eliminar espacios
    .toUpperCase() // Convertir a mayúsculas
    .split("") // Separar caracteres
    .join("  "); // Unir con doble espacio
}

export default spaceJam;

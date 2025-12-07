/**
 * FreeCodeCamp Problem: String Compression
 * Category: FreeCodeCamp
 *
 * @param {string} sentence - The input string to be compressed
 * @returns {string} The compressed string
 */
function compressString(sentence) {
  // 1. Eliminar signos de puntuación y dividir en palabras
  const words = sentence
    .replace(/[.,!?;:]/g, "")
    .split(" ")
    .filter(Boolean);

  if (words.length === 0) return "";

  // 2. Usar reduce para comprimir palabras consecutivas
  const compressed = words.reduce(
    (acc, word, idx, arr) => {
      if (word === acc.prev) {
        acc.count++;
      } else {
        if (acc.prev !== null) {
          acc.result.push(
            acc.count > 1 ? `${acc.prev}(${acc.count})` : acc.prev
          );
        }
        acc.prev = word;
        acc.count = 1;
      }
      // Al llegar al final, agregar la última palabra
      if (idx === arr.length - 1) {
        acc.result.push(acc.count > 1 ? `${acc.prev}(${acc.count})` : acc.prev);
      }
      return acc;
    },
    { result: [], prev: null, count: 0 }
  );

  // 3. Unir el resultado
  return compressed.result.join(" ");
}
export default compressString;

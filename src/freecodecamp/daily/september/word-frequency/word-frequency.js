/**
 * FreeCodeCamp Problem: Word Frequency
 * Category: FreeCodeCamp
 *
 * @param {string} paragraph - The input paragraph to analyze
 * @returns {string[]} An array of the three most frequently occurring words
 */
function getWords(paragraph) {
  if (!paragraph || typeof paragraph !== "string") return [];

  // Normalizar a minúsculas y eliminar puntuación específica (.,!)
  const words = paragraph
    .toLowerCase()
    .replace(/[.,!]/g, "")
    .split(/\s+/)
    .filter((word) => word.length > 0);

  const frequencyMap = {};
  for (const word of words) {
    frequencyMap[word] = (frequencyMap[word] || 0) + 1;
  }

  // Ordenar por frecuencia descendente
  // En caso de empate, usamos orden alfabético para mantener consistencia
  return Object.keys(frequencyMap)
    .sort((a, b) => {
      const freqDiff = frequencyMap[b] - frequencyMap[a];
      if (freqDiff !== 0) return freqDiff;
      return a.localeCompare(b);
    })
    .slice(0, 3);
}

export default getWords;

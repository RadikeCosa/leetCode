/**
 * FreeCodeCamp Problem: Purge Most Frequent
 * Category: FreeCodeCamp
 *
 * @param {any} param - TODO: Define parameter and description
 * @returns {any} TODO: Define return type and description
 */
function purgeMostFrequent(arr) {
  const frequencyMap = new Map();
  // Contar frecuencias
  for (const item of arr) {
    frequencyMap.set(item, (frequencyMap.get(item) || 0) + 1);
  }
  // Encontrar la frecuencia máxima
  let maxFrequency = 0;
  for (const freq of frequencyMap.values()) {
    if (freq > maxFrequency) {
      maxFrequency = freq;
    }
  }
  // Identificar los elementos más frecuentes
  const mostFrequentElements = new Set();
  for (const [item, freq] of frequencyMap.entries()) {
    if (freq === maxFrequency) {
      mostFrequentElements.add(item);
    }
  }
  // Filtrar el array original
  return arr.filter((item) => !mostFrequentElements.has(item));
}
export default purgeMostFrequent;

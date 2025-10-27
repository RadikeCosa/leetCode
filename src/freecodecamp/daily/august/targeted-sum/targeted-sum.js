/**
 * FreeCodeCamp Problem: Targeted Sum
 * Category: Daily
 */
function findTarget(arr, target) {
  // Adaptación del algoritmo Two Sum
  const seen = new Map();

  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i];

    if (seen.has(complement)) {
      // Retornar índices en orden ascendente
      const indices = [seen.get(complement), i].sort((a, b) => a - b);
      return indices;
    }

    seen.set(arr[i], i);
  }

  return "Target not found";
}

export default findTarget;

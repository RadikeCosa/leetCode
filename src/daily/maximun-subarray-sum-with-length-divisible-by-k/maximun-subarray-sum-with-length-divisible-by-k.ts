/**
 * LeetCode Problem: Maximun Subarray Sum With Length Divisible By K
 * Difficulty:
 * Topics:
 *
 * @param {any} param - TODO: Define parameter type and description
 * @returns {any} TODO: Define return type and description
 */
export function maxSubarraySum(nums: number[], k: number): number {
  let prefixSum = 0;
  let maxSum = -Infinity;

  // Guardamos el MENOR prefix visto por cada resto posible
  const minPrefix = new Array(k).fill(Infinity);
  minPrefix[0] = 0; // antes de empezar: longitud 0, suma 0

  for (let i = 0; i < nums.length; i++) {
    prefixSum += nums[i];
    const remainder = (i + 1) % k;

    // Si ya vimos este resto → hay subarray válido
    if (minPrefix[remainder] !== Infinity) {
      const candidate = prefixSum - minPrefix[remainder];
      maxSum = Math.max(maxSum, candidate);
    }

    // Actualizamos el menor prefix para este resto
    minPrefix[remainder] = Math.min(minPrefix[remainder], prefixSum);
  }

  return maxSum === -Infinity ? 0 : maxSum;
}

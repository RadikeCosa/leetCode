/**
 * LeetCode Problem 209: Minimum Size Subarray Sum
 * Difficulty: Medium
 * Topics: Array, Binary Search, Sliding Window, Prefix Sum
 *
 * Given an array of positive integers nums and a positive integer target,
 * return the minimal length of a subarray whose sum is greater than or equal to target.
 * If there is no such subarray, return 0 instead.
 *
 * Example: target = 7, nums = [2,3,1,2,4,3] → Output: 2
 * Explanation: The subarray [4,3] has minimal length 2 with sum 7 ≥ 7
 *
 * Algorithm: Variable-size sliding window
 * - Expand: Move right pointer to include elements
 * - Contract: Move left pointer when sum ≥ target to minimize length
 *
 * Time Complexity: O(n) - each element visited at most twice
 * Space Complex  ity: O(1) - only using constant extra space
 */
export function minSubArrayLen(target: number, nums: number[]): number {
  let left = 0; // Puntero izquierdo de la ventana
  let sum = 0; // Suma actual de la ventana
  let minSubArrayLen = Infinity; // Longitud mínima encontrada

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right]; // Agregar el valor actual al sum
    while (sum >= target) {
      // Mientras la suma sea mayor o igual al objetivo
      minSubArrayLen = Math.min(minSubArrayLen, right - left + 1); // Actualizar la longitud mínima
      sum -= nums[left]; // Restar el valor del puntero izquierdo
      left++; // Mover el puntero izquierdo hacia la derecha
    }
  }
  return minSubArrayLen === Infinity ? 0 : minSubArrayLen;
}

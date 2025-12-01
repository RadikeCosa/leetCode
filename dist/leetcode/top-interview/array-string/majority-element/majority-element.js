/**
 * LeetCode Problem: Majority Element
 * Difficulty:
 * Topics:
 *
 * @param {number[]} nums - Array of integers
 * @returns {number} The majority element
 */
/**
 * LeetCode Problem: Majority Element
 * Boyer-Moore Majority Vote Algorithm
 *
 * @param {number[]} nums - Array of integers
 * @returns {number} The majority element
 */
export function majorityElement(nums) {
    let candidate = null;
    let count = 0;
    for (const num of nums) {
        if (count === 0) {
            candidate = num;
            count = 1;
        }
        else if (num === candidate) {
            count++;
        }
        else {
            count--;
        }
    }
    // Asume que siempre existe un elemento mayoritario
    return candidate;
}
/* export function majorityElement(nums: number[]): number {
  const hashMap: Record<number, number> = {};
  const n = nums.length;
  for (const num of nums) {
    hashMap[num] = (hashMap[num] || 0) + 1;
    if (hashMap[num] > Math.floor(n / 2)) {
      return num;
    }
  }
  return -1;
}
 */

/**
 * LeetCode Problem: Jump Game #55
 *
 * Problem Statement:
 * Given an array of non-negative integers nums, you are initially positioned at the first index of the array.
 * Each element in the array represents your maximum jump length at that position.
 * Determine if you are able to reach the last index.
 * Difficulty: medium
 * Topics: array, greedy
 *
 * @param {number[]} nums - The input array representing the maximum jump length at each position
 * @returns {boolean} Returns true if you can reach the last index, otherwise false
 */
export function canJump(nums: number[]): boolean {
  let maxReach = 0;
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    if (i > maxReach) {
      return false;
    }
    maxReach = Math.max(maxReach, i + nums[i]);
    if (maxReach >= n - 1) {
      return true;
    }
  }

  return false;
}

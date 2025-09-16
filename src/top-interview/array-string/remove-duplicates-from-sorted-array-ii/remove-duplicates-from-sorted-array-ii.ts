/**
 * LeetCode Problem 80: Remove Duplicates from Sorted Array II
 * Difficulty: Medium
 * Topics: Array, Two Pointers
 *
 * Given an integer array nums sorted in non-decreasing order, remove some
 * duplicates in-place such that each unique element appears at most twice.
 *
 * Time Complexity: O(n) - single pass through array, constant operations per element
 * Space Complexity: O(1) - only uses constant extra variables (count, writeIndex)
 */
export function removeDuplicates(nums: number[]): number {
  let count = 0;
  let writeIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i === 0 || nums[i] !== nums[i - 1]) {
      count = 1;
      nums[writeIndex] = nums[i];
      writeIndex++;
    } else if (count < 2) {
      count++;
      nums[writeIndex] = nums[i];
      writeIndex++;
    }
  }

  return writeIndex;
}

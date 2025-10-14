/**
 * LeetCode Problem 3349: Adjacent Increasing Subarrays Detection I
 * Difficulty: Easy
 * Topics: Array
 *
 * Given an array nums of n integers and an integer k, determine whether there exist two adjacent
 * subarrays of length k such that both subarrays are strictly increasing. Specifically, check if
 * there are two subarrays starting at indices a and b (a < b), where:
 *
 * • Both subarrays nums[a..a + k - 1] and nums[b..b + k - 1] are strictly increasing.
 * • The subarrays must be adjacent, meaning b = a + k.
 *
 * Return true if it is possible to find two such subarrays, and false otherwise.
 *
 * Example 1:
 * Input: nums = [2,5,7,8,9,2,3,4,3,1], k = 3
 * Output: true
 * Explanation:
 * • The subarray starting at index 2 is [7, 8, 9], which is strictly increasing.
 * • The subarray starting at index 5 is [2, 3, 4], which is also strictly increasing.
 * • These two subarrays are adjacent, so the result is true.
 *
 * Example 2:
 * Input: nums = [1,2,3,4,4,4,4,5,6,7], k = 5
 * Output: false
 *
 * Constraints:
 * • 2 <= nums.length <= 100
 * • 1 < 2 * k <= nums.length
 * • -1000 <= nums[i] <= 1000
 */
import { describe, it, expect } from "vitest";
import { hasIncreasingSubarrays } from "./adjacent-increasing-subarrays-detection-i";

describe("Adjacent Increasing Subarrays Detection I", () => {
  it("Example 1", () => {
    const nums = [2, 5, 7, 8, 9, 2, 3, 4, 3, 1];
    const k = 3;
    const expected = true;
    expect(hasIncreasingSubarrays(nums, k)).toBe(expected);
  });

  it("Example 2", () => {
    const nums = [1, 2, 3, 4, 4, 4, 4, 5, 6, 7];
    const k = 5;
    const expected = false;
    expect(hasIncreasingSubarrays(nums, k)).toBe(expected);
  });

  it("Custom Test Case 1", () => {
    const nums = [1, 2, 3, 4, 5, 6];
    const k = 2;
    const expected = true;
    expect(hasIncreasingSubarrays(nums, k)).toBe(expected);
  });
  it("Custom Test Case 2", () => {
    const nums = [5, 4, 3, 2, 1];
    const k = 2;
    const expected = false;
    expect(hasIncreasingSubarrays(nums, k)).toBe(expected);
  });
  it("Custom Test Case 3", () => {
    const nums = [1, 3, 2, 4, 6, 5];
    const k = 2;
    const expected = true; // [1,3] y [2,4] son ambos crecientes y adyacentes
    expect(hasIncreasingSubarrays(nums, k)).toBe(expected);
  });
});

/**
 * LeetCode Problem 704: Binary Search
 * Difficulty: Easy
 * Topics: Array, Binary Search
 *
 * Given an array of integers nums which is sorted in ascending order, and an integer target,
 * write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.
 *
 * You must write an algorithm with O(log n) runtime complexity.
 *
 * Example 1:
 * Input: nums = [-1,0,3,5,9,12], target = 9
 * Output: 4
 * Explanation: 9 exists in nums and its index is 4
 *
 * Example 2:
 * Input: nums = [-1,0,3,5,9,12], target = 2
 * Output: -1
 * Explanation: 2 does not exist in nums so return -1
 *
 * Constraints:
 * - 1 <= nums.length <= 10^4
 * - -10^4 < nums[i], target < 10^4
 * - All the integers in nums are unique.
 * - nums is sorted in ascending order.
 */
import { describe, it, expect } from "vitest";
import { search } from "./binary-search";

describe("Binary Search", () => {
  it("should return 4 in the first example", () => {
    const nums = [-1, 0, 3, 5, 9, 12];
    const target = 9;
    expect(search(nums, target)).toBe(4);
  });

  it("should return -1 in the second example", () => {
    const nums = [-1, 0, 3, 5, 9, 12];
    const target = 2;
    expect(search(nums, target)).toBe(-1);
  });
  it("should return -1 when target not found in single element array", () => {
    const nums = [1];
    const target = 0;
    expect(search(nums, target)).toBe(-1);
  });
  it("should return 0 when the target is in the first position", () => {
    const nums = [1, 2, 3, 4, 5];
    const target = 1;
    expect(search(nums, target)).toBe(0);
  });
  it("should return the last index when the target is in the last position", () => {
    const nums = [1, 2, 3, 4, 5];
    const target = 5;
    expect(search(nums, target)).toBe(4);
  });
});

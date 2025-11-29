/**
 * LeetCode Problem 209: Minimum Size Subarray Sum
 * Difficulty: Medium
 * Topics: Array, Binary Search, Sliding Window, Prefix Sum
 *
 * Given an array of positive integers nums and a positive integer target,
 * return the minimal length of a subarray whose sum is greater than or equal to target.
 * If there is no such subarray, return 0 instead.
 *
 * Example 1:
 * Input: target = 7, nums = [2,3,1,2,4,3]
 * Output: 2
 * Explanation: The subarray [4,3] has the minimal length under the problem constraint.
 *
 * Example 2:
 * Input: target = 4, nums = [1,4,4]
 * Output: 1
 *
 * Example 3:
 * Input: target = 11, nums = [1,1,1,1,1,1,1,1]
 * Output: 0
 *
 * Constraints:
 * - 1 <= target <= 10^9
 * - 1 <= nums.length <= 10^5
 * - 1 <= nums[i] <= 10^4
 *
 * Follow up: If you have figured out the O(n) solution, try coding another solution of which the time complexity is O(n log(n)).
 */
import { describe, it, expect } from "vitest";
import { minSubArrayLen } from "./minimum-size-subarray-sum";

describe("Minimum Size Subarray Sum", () => {
  it("first example should return 2", () => {
    expect(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])).toBe(2);
  });
  it("second example should return 1", () => {
    expect(minSubArrayLen(4, [1, 4, 4])).toBe(1);
  });
  it("third example should return 0", () => {
    expect(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1])).toBe(0);
  });
});

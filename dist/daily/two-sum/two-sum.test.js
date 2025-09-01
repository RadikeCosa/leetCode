/**
 * LeetCode Problem 1: Two Sum
 *
 * Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 *
 * Constraints:
 * - 2 <= nums.length <= 10^4
 * - -10^9 <= nums[i] <= 10^9
 * - -10^9 <= target <= 10^9
 * - Only one valid answer exists.
 *
 * Follow-up: Can you come up with an algorithm that is less than O(n^2) time complexity?
 */
import { describe, it, expect } from "vitest";
import { twoSum } from "./two-sum";
describe("Two Sum", () => {
    it("should return indices [0,1] for nums=[2,7,11,15] and target=9", () => {
        const nums = [2, 7, 11, 15];
        const target = 9;
        const result = twoSum(nums, target);
        expect(result).toEqual([0, 1]);
    });
    it("should return indices [1,2] for nums=[3,2,4] and target=6", () => {
        const nums = [3, 2, 4];
        const target = 6;
        const result = twoSum(nums, target);
        expect(result).toEqual([1, 2]);
    });
    it("should return indices [0,1] for nums=[3,3] and target=6", () => {
        const nums = [3, 3];
        const target = 6;
        const result = twoSum(nums, target);
        expect(result).toEqual([0, 1]);
    });
    it("should handle negative numbers", () => {
        const nums = [-1, -2, -3, -4, -5];
        const target = -8;
        const result = twoSum(nums, target);
        expect(result).toEqual([2, 4]);
    });
    it("should handle mixed positive and negative numbers", () => {
        const nums = [-3, 4, 3, 90];
        const target = 0;
        const result = twoSum(nums, target);
        expect(result).toEqual([0, 2]);
    });
    it("should handle minimum array size", () => {
        const nums = [1, 2];
        const target = 3;
        const result = twoSum(nums, target);
        expect(result).toEqual([0, 1]);
    });
    it("should handle large numbers within constraints", () => {
        const nums = [1000000000, -1000000000, 999999999];
        const target = 1999999999;
        const result = twoSum(nums, target);
        expect(result).toEqual([0, 2]);
    });
});

/**
 * LeetCode Problem 35: Search Insert Position
 * Difficulty: Easy
 * Topics: Array, Binary Search
 *
 * Given a sorted array of distinct integers and a target value, return the index if the target is found.
 * If not, return the index where it would be if it were inserted in order.
 *
 * You must write an algorithm with O(log n) runtime complexity.
 *
 * Example 1:
 * Input: nums = [1,3,5,6], target = 5
 * Output: 2
 *
 * Example 2:
 * Input: nums = [1,3,5,6], target = 2
 * Output: 1
 *
 * Example 3:
 * Input: nums = [1,3,5,6], target = 7
 * Output: 4
 *
 * Constraints:
 * - 1 <= nums.length <= 10^4
 * - -10^4 <= nums[i] <= 10^4
 * - nums contains distinct values sorted in ascending order.
 * - -10^4 <= target <= 10^4
 */
import { describe, it, expect } from "vitest";
import { searchInsert } from "./search-insert-position";
describe("Search Insert Position", () => {
    it("should return 2 in the first example", () => {
        const nums = [1, 3, 5, 6];
        const target = 5;
        expect(searchInsert(nums, target)).toBe(2);
    });
    it("should return 1 in the second example", () => {
        const nums = [1, 3, 5, 6];
        const target = 2;
        expect(searchInsert(nums, target)).toBe(1);
    });
    it("should return 4 in the third example", () => {
        const nums = [1, 3, 5, 6];
        const target = 7;
        expect(searchInsert(nums, target)).toBe(4);
    });
});

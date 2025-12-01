/**
 * LeetCode Problem 26: Remove Duplicates from Sorted Array
 *
 * Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place
 * such that each unique element appears only once. The relative order of the elements should
 * be kept the same. Then return the number of unique elements in nums.
 *
 * Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:
 * - Change the array nums such that the first k elements of nums contain the unique elements
 *   in the order they were present in nums initially. The remaining elements of nums are not
 *   important as well as the size of nums.
 * - Return k.
 *
 * Constraints:
 * - 1 <= nums.length <= 3 * 10^4
 * - -100 <= nums[i] <= 100
 * - nums is sorted in non-decreasing order.
 */
import { describe, it, expect } from "vitest";
import { removeDuplicates } from "./remove-duplicates-from-sorted-array";
describe("Remove Duplicates from Sorted Array", () => {
    it("should return 2 for [1,1,2] and modify array to [1,2,_]", () => {
        const nums = [1, 1, 2];
        const k = removeDuplicates(nums);
        expect(k).toBe(2);
        expect(nums.slice(0, k)).toEqual([1, 2]);
    });
    it("should return 5 for [0,0,1,1,1,2,2,3,3,4] and modify array to [0,1,2,3,4,_,_,_,_,_]", () => {
        const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
        const k = removeDuplicates(nums);
        expect(k).toBe(5);
        expect(nums.slice(0, k)).toEqual([0, 1, 2, 3, 4]);
    });
    it("should handle single element array", () => {
        const nums = [1];
        const k = removeDuplicates(nums);
        expect(k).toBe(1);
        expect(nums.slice(0, k)).toEqual([1]);
    });
    it("should handle array with all same elements", () => {
        const nums = [1, 1, 1, 1];
        const k = removeDuplicates(nums);
        expect(k).toBe(1);
        expect(nums.slice(0, k)).toEqual([1]);
    });
    it("should handle array with no duplicates", () => {
        const nums = [1, 2, 3, 4, 5];
        const k = removeDuplicates(nums);
        expect(k).toBe(5);
        expect(nums.slice(0, k)).toEqual([1, 2, 3, 4, 5]);
    });
    it("should handle negative numbers", () => {
        const nums = [-100, -100, -99, -99, 0, 0, 1];
        const k = removeDuplicates(nums);
        expect(k).toBe(4);
        expect(nums.slice(0, k)).toEqual([-100, -99, 0, 1]);
    });
    it("should handle maximum constraints", () => {
        const nums = Array(30000).fill(1);
        const k = removeDuplicates(nums);
        expect(k).toBe(1);
        expect(nums.slice(0, k)).toEqual([1]);
    });
});

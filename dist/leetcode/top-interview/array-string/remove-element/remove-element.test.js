/**
 * LeetCode Problem 27: Remove Element
 *
 * Given an integer array nums and an integer val, remove all occurrences of val in nums in-place.
 * The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.
 *
 * Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:
 * - Change the array nums such that the first k elements of nums contain the elements which are not equal to val.
 * - The remaining elements of nums are not important as well as the size of nums.
 * - Return k.
 *
 * Constraints:
 * - 0 <= nums.length <= 100
 * - 0 <= nums[i] <= 50
 * - 0 <= val <= 100
 */
import { describe, it, expect } from "vitest";
import { removeElement } from "./remove-element";
describe("Remove Elements", () => {
    it("expect to remove all occurrences of 3 from [3,2,2,3]", () => {
        const nums = [3, 2, 2, 3];
        const val = 3;
        expect(removeElement(nums, val)).toBe(2);
        const firstKElements = nums.slice(0, 2);
        expect(firstKElements).toEqual([2, 2]);
    });
    it("expect to remove all occurrences of 2 from [0,1,2,2,3,0,4,2]", () => {
        const nums = [0, 1, 2, 2, 3, 0, 4, 2];
        const val = 2;
        expect(removeElement(nums, val)).toBe(5);
        const firstKElements = nums.slice(0, 5);
        expect(firstKElements).toEqual([0, 1, 3, 0, 4]);
    });
    // Edge Cases
    it("should handle empty array", () => {
        const nums = [];
        const val = 1;
        expect(removeElement(nums, val)).toBe(0);
    });
    it("should handle all elements equal to val", () => {
        const nums = [7, 7, 7, 7];
        const val = 7;
        expect(removeElement(nums, val)).toBe(0);
    });
    it("should handle no elements equal to val", () => {
        const nums = [1, 2, 3, 4];
        const val = 5;
        expect(removeElement(nums, val)).toBe(4);
        expect(nums.slice(0, 4)).toEqual([1, 2, 3, 4]);
    });
});

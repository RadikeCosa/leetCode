/**
 * LeetCode Problem 2626: Array Reduce Transformation
 *
 * Given an integer array nums, a reducer function fn, and an initial value init,
 * return the final result obtained by executing the fn function on each element
 * of the array, sequentially, passing in the return value from the calculation
 * on the preceding element.
 *
 * Example 1:
 * Input: nums = [1,2,3,4], fn = function sum(accum, curr) { return accum + curr; }, init = 0
 * Output: 10
 * Explanation: (0) + 1 = 1, (1) + 2 = 3, (3) + 3 = 6, (6) + 4 = 10
 *
 * Example 2:
 * Input: nums = [1,2,3,4], fn = function sum(accum, curr) { return accum + curr * curr; }, init = 100
 * Output: 130
 * Explanation: (100) + 1*1 = 101, (101) + 2*2 = 105, (105) + 3*3 = 114, (114) + 4*4 = 130
 *
 * Example 3:
 * Input: nums = [], fn = function sum(accum, curr) { return 0; }, init = 25
 * Output: 25
 * Explanation: For empty arrays, the answer is always init.
 *
 * Constraints:
 * - 0 <= nums.length <= 1000
 * - 0 <= nums[i] <= 1000
 * - 0 <= init <= 1000
 */
import { describe, it, expect } from "vitest";
import { reduce } from "./array-reduce-transformation";
describe("Array Reduce Transformation", () => {
    it("should sum all elements starting from 0", () => {
        const nums = [1, 2, 3, 4];
        const fn = function sum(accum, curr) {
            return accum + curr;
        };
        const init = 0;
        const result = reduce(nums, fn, init);
        expect(result).toBe(10); // 0 + 1 + 2 + 3 + 4 = 10
    });
    it("should sum squares starting from 100", () => {
        const nums = [1, 2, 3, 4];
        const fn = function sumSquares(accum, curr) {
            return accum + curr * curr;
        };
        const init = 100;
        const result = reduce(nums, fn, init);
        expect(result).toBe(130); // 100 + 1 + 4 + 9 + 16 = 130
    });
    it("should return init for empty array", () => {
        const nums = [];
        const fn = function sum(accum, curr) {
            return 0;
        };
        const init = 25;
        const result = reduce(nums, fn, init);
        expect(result).toBe(25);
    });
    it("should handle multiplication operation", () => {
        const nums = [1, 2, 3, 4];
        const fn = function multiply(accum, curr) {
            return accum * curr;
        };
        const init = 1;
        const result = reduce(nums, fn, init);
        expect(result).toBe(24); // 1 * 1 * 2 * 3 * 4 = 24
    });
    it("should handle subtraction operation", () => {
        const nums = [1, 2, 3];
        const fn = function subtract(accum, curr) {
            return accum - curr;
        };
        const init = 10;
        const result = reduce(nums, fn, init);
        expect(result).toBe(4); // 10 - 1 - 2 - 3 = 4
    });
    it("should handle single element array", () => {
        const nums = [5];
        const fn = function add(accum, curr) {
            return accum + curr;
        };
        const init = 3;
        const result = reduce(nums, fn, init);
        expect(result).toBe(8); // 3 + 5 = 8
    });
    it("should handle max operation", () => {
        const nums = [1, 5, 2, 8, 3];
        const fn = function max(accum, curr) {
            return Math.max(accum, curr);
        };
        const init = 0;
        const result = reduce(nums, fn, init);
        expect(result).toBe(8);
    });
    it("should handle min operation", () => {
        const nums = [5, 2, 8, 1, 9];
        const fn = function min(accum, curr) {
            return Math.min(accum, curr);
        };
        const init = 10;
        const result = reduce(nums, fn, init);
        expect(result).toBe(1);
    });
    it("should handle complex operation", () => {
        const nums = [1, 2, 3];
        const fn = function complex(accum, curr) {
            return accum + curr * 2 + 1;
        };
        const init = 0;
        const result = reduce(nums, fn, init);
        // Step by step: 0 -> fn(0,1) = 0+1*2+1 = 3 -> fn(3,2) = 3+2*2+1 = 8 -> fn(8,3) = 8+3*2+1 = 15
        expect(result).toBe(15);
    });
    it("should handle zero init with multiplication", () => {
        const nums = [1, 2, 3];
        const fn = function multiply(accum, curr) {
            return accum * curr;
        };
        const init = 0;
        const result = reduce(nums, fn, init);
        expect(result).toBe(0); // 0 * anything = 0
    });
});

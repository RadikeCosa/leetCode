/**
 * LeetCode Problem 2221: Find Triangular Sum of an Array
 * Difficulty: Medium
 * Topics: Array, Math, Simulation, Combinatorics
 *
 * You are given a 0-indexed integer array nums, where nums[i] is a digit between 0 and 9 (inclusive).
 *
 * The triangular sum of nums is the value of the only element present in nums after the following process terminates:
 *
 * 1. Let nums comprise of n elements. If n == 1, end the process. Otherwise, create a new 0-indexed integer array newNums of length n - 1.
 * 2. For each index i, where 0 <= i < n - 1, assign the value of newNums[i] as (nums[i] + nums[i+1]) % 10, where % denotes modulo operator.
 * 3. Replace the array nums with newNums.
 * 4. Repeat the entire process starting from step 1.
 *
 * Return the triangular sum of nums.
 *
 * Example 1:
 * Input: nums = [1,2,3,4,5]
 * Output: 8
 * Explanation:
 * The above diagram depicts the process from which we obtain the triangular sum
 * of the array.
 *
 * Example 2:
 * Input: nums = [5]
 * Output: 5
 * Explanation:
 * Since there is only one element in nums, the triangular sum is the value of
 * that element itself.
 *
 * Constraints:
 * - 1 <= nums.length <= 1000
 * - 0 <= nums[i] <= 9
 *
 * Hints:
 * - Try simulating the entire process.
 * - To reduce space, use a temporary array to update nums in every step instead of
 * creating a new array at each step.
 */
import { describe, it, expect } from "vitest";
import { triangularSum } from "./find-triangular-sum-of-an-array";
describe("Find Triangular Sum of an Array", () => {
    it("should return 8 for [1,2,3,4,5] - complete triangular sum process through multiple iterations", () => {
        expect(triangularSum([1, 2, 3, 4, 5])).toBe(8);
    });
    it("should return 5 for single element array [5] - base case with one element", () => {
        expect(triangularSum([5])).toBe(5);
    });
    it("should return 3 for two element array [1,2] - single iteration", () => {
        expect(triangularSum([1, 2])).toBe(3);
    });
    it("should return 0 for all zeros array [0,0,0] - zeros propagation", () => {
        expect(triangularSum([0, 0, 0])).toBe(0);
    });
    it("should handle modulo correctly for [5,6] - sum exceeds 10", () => {
        expect(triangularSum([5, 6])).toBe(1); // (5+6) % 10 = 11 % 10 = 1
    });
    it("should handle larger array [1,2,3,4,5,6,7,8,9,0] - multiple iterations", () => {
        expect(triangularSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toBe(6);
    });
});

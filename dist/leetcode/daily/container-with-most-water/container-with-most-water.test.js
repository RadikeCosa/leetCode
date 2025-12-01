/**
 * LeetCode Problem 11: Container With Most Water
 * Difficulty: Medium
 * Topics: Array, Two Pointers, Greedy
 *
 * You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
 *
 * Find two lines that together with the x-axis form a container, such that the container contains the most water.
 *
 * Return the maximum amount of water a container can store.
 *
 * Notice that you may not slant the container.
 *
 * Example 1:
 * Input: height = [1,8,6,2,5,4,8,3,7]
 * Output: 49
 * Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
 *
 * Example 2:
 * Input: height = [1,1]
 * Output: 1
 *
 * Constraints:
 * - n == height.length
 * - 2 <= n <= 10^5
 * - 0 <= height[i] <= 10^4
 *
 * Hints:
 * - If you simulate the problem, it will be O(n^2) which is not efficient.
 * - Try to use two-pointers. Set one pointer to the left and one to the right of the array. Always move the pointer that points to the lower line.
 * - How can you calculate the amount of water at each step?
 */
import { describe, it, expect } from "vitest";
import { maxArea } from "./container-with-most-water";
describe("Container With Most Water", () => {
    it("shold return 49 for [1,8,6,2,5,4,8,3,7]", () => {
        expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
    });
    it("should return 1 for [1,1]", () => {
        expect(maxArea([1, 1])).toBe(1);
    });
    // Casos extremos
    it("should handle array with zeros", () => {
        expect(maxArea([0, 2, 0, 3, 0])).toBe(4); // max entre índices 1 y 3: min(2,3) * (3-1) = 4
    });
    it("should handle all equal heights", () => {
        expect(maxArea([3, 3, 3, 3])).toBe(9); // cualquier par: min(3,3) * (3-0) = 9
    });
    it("should handle increasing order", () => {
        expect(maxArea([1, 2, 3, 4, 5])).toBe(6); // extremos: min(1,5) * (4-0) = 4, o índices 1-4: min(2,5)*(4-1)=6
    });
    it("should handle decreasing order", () => {
        expect(maxArea([5, 4, 3, 2, 1])).toBe(6); // extremos: min(5,1) * (4-0) = 4, o índices 0-3: min(5,2)*(3-0)=6
    });
    it("should handle large numbers near constraint limit", () => {
        expect(maxArea([10000, 5000, 10000])).toBe(20000); // índices 0-2: min(10000,10000) * (2-0) = 20000
    });
    it("should handle minimum heights", () => {
        expect(maxArea([0, 1, 0])).toBe(0); // cualquier combinación con 0 da área 0
    });
    it("should handle alternating heights", () => {
        expect(maxArea([1, 3, 1, 3, 1])).toBe(6); // índices 1-3: min(3,3) * (3-1) = 6
    });
});

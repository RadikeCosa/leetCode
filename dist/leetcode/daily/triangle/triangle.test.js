/**
 * LeetCode Problem 120: Triangle
 * Difficulty: Medium
 * Topics: Array, Dynamic Programming
 *
 * Given a triangle array, return the minimum path sum from top to bottom.
 *
 * For each step, you may move to an adjacent number of the row below. More formally, if you are on index i on the current row, you may move to either index i or index i + 1 on the next row.
 *
 * Example 1:
 * Input: triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
 * Output: 11
 * Explanation: The triangle looks like:
 *    2
 *   3 4
 *  6 5 7
 * 4 1 8 3
 * The minimum path sum from top to bottom is 2 + 3 + 5 + 1 = 11 (underlined above).
 *
 * Example 2:
 * Input: triangle = [[-10]]
 * Output: -10
 *
 * Constraints:
 * - 1 <= triangle.length <= 200
 * - triangle[0].length == 1
 * - triangle[i].length == triangle[i - 1].length + 1
 * - -10^4 <= triangle[i][j] <= 10^4
 *
 * Follow up: Could you do this using only O(n) extra space, where n is the total number of rows in the triangle?
 */
import { describe, it, expect } from "vitest";
import { minimumTotal } from "./triangle";
describe("Triangle", () => {
    it("should return 11 in example 1", () => {
        expect(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]])).toBe(11);
    });
    it("should return -10 on example 2", () => {
        expect(minimumTotal([[-10]])).toBe(-10);
    });
    it("should return 0 for empty triangle", () => {
        expect(minimumTotal([])).toBe(0);
    });
    // Casos edge adicionales
    it("should handle triangle with two rows", () => {
        expect(minimumTotal([[1], [2, 3]])).toBe(3); // 1 + 2 = 3
    });
    it("should handle all negative numbers", () => {
        expect(minimumTotal([[-1], [-2, -3], [-4, -5, -6]])).toBe(-10); // -1 + -3 + -6 = -10
    });
    it("should handle mixed positive and negative numbers", () => {
        expect(minimumTotal([[5], [-2, 4], [3, 1, -1]])).toBe(4); // 5 + (-2) + (-1) = 4 (camino óptimo: 5 → -2 → -1)
    });
    it("should handle triangle with all zeros", () => {
        expect(minimumTotal([[0], [0, 0], [0, 0, 0]])).toBe(0);
    });
    it("should handle maximum constraints (large negative)", () => {
        expect(minimumTotal([[-10000], [-5000, -8000]])).toBe(-18000); // -10000 + (-8000) = -18000
    });
    it("should handle triangle where best path goes through different routes", () => {
        expect(minimumTotal([[100], [1, 2], [1, 1, 1]])).toBe(102); // 100 + 1 + 1 = 102 (ruta izquierda)
    });
});

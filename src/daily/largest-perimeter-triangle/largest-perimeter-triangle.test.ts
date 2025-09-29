/**
 * LeetCode Problem 976: Largest Perimeter Triangle
 * Difficulty: Easy
 * Topics: Array, Math, Greedy, Sorting
 *
 * Given an integer array nums, return the largest perimeter of a triangle with a non-zero area,
 * formed from three of these lengths. If it is impossible to form any triangle of a non-zero area, return 0.
 *
 * Example 1:
 * Input: nums = [2,1,2]
 * Output: 5
 * Explanation: You can form a triangle with three side lengths: 1, 2, and 2.
 *
 * Example 2:
 * Input: nums = [1,2,1,10]
 * Output: 0
 * Explanation:
 * You cannot use the side lengths 1, 1, and 2 to form a triangle.
 * You cannot use the side lengths 1, 1, and 10 to form a triangle.
 * You cannot use the side lengths 1, 2, and 10 to form a triangle.
 * As we cannot use any three side lengths to form a triangle of non-zero area, we return 0.
 *
 * Constraints:
 * - 3 <= nums.length <= 10^4
 * - 1 <= nums[i] <= 10^6
 */
import { describe, it, expect } from "vitest";
import { largestPerimeter } from "./largest-perimeter-triangle";

describe("Largest Perimeter Triangle", () => {
  it("should return perimeter 5 for valid triangle with sides [1,2,2] from array [2,1,2]", () => {
    // Triangle inequality: 1+2=3 > 2 ✓, 1+2=3 > 2 ✓, 2+2=4 > 1 ✓
    // Perimeter: 1+2+2 = 5
    expect(largestPerimeter([2, 1, 2])).toBe(5);
  });

  it("should return 0 when no valid triangle can be formed from [1,2,1,10]", () => {
    // No combination satisfies triangle inequality:
    // [1,1,2]: 1+1=2 ≯ 2 ✗
    // [1,1,10]: 1+1=2 ≯ 10 ✗
    // [1,2,10]: 1+2=3 ≯ 10 ✗
    expect(largestPerimeter([1, 2, 1, 10])).toBe(0);
  });

  // Edge Cases
  it("should handle minimum array size (exactly 3 elements) - valid triangle", () => {
    // Minimum constraint: 3 elements, forms valid triangle
    // Triangle: [3,4,5] → 3+4=7 > 5 ✓
    expect(largestPerimeter([3, 4, 5])).toBe(12);
  });

  it("should handle minimum array size (exactly 3 elements) - invalid triangle", () => {
    // Three elements but no valid triangle: 1+2=3 ≯ 3 ✗
    expect(largestPerimeter([1, 2, 3])).toBe(0);
  });

  it("should choose largest valid triangle when multiple options exist", () => {
    // Multiple valid triangles: [5,4,3] and smaller ones
    // Should prioritize largest: 5+4+3=12
    expect(largestPerimeter([5, 4, 3, 2, 1])).toBe(12);
  });

  it("should handle edge case: triangle inequality barely satisfied", () => {
    // Edge case: 3+4=7 > 6 (just barely valid)
    expect(largestPerimeter([6, 4, 3])).toBe(13);
  });

  it("should handle edge case: triangle inequality barely fails", () => {
    // Edge case: 1+1=2 ≯ 2 (equality fails triangle inequality)
    expect(largestPerimeter([2, 1, 1])).toBe(0);
  });

  it("should handle all identical values (valid equilateral triangle)", () => {
    // All sides equal: 5+5=10 > 5 ✓
    expect(largestPerimeter([5, 5, 5, 5])).toBe(15);
  });

  it("should handle large numbers within constraints", () => {
    // Test with constraint limits: 1 <= nums[i] <= 10^6
    expect(largestPerimeter([1000000, 999999, 999998])).toBe(2999997);
  });

  it("should skip invalid combinations and find valid one deeper in array", () => {
    // Array: [10, 8, 4, 3, 2] (already sorted)
    // Check [10, 8, 4]: 8+4=12 > 10 ✓ → Valid triangle!
    // Perimeter: 10+8+4 = 22
    expect(largestPerimeter([10, 8, 4, 3, 2])).toBe(22);
  });
});

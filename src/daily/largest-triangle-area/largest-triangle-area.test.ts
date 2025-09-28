/**
 * LeetCode Problem 812: Largest Triangle Area
 * Difficulty: Easy
 * Topics: Array, Math, Geometry
 *
 * Given an array of points on the X-Y plane points where points[i] = [xi, yi],
 * return the area of the largest triangle that can be formed by any three different points.
 * Answers within 10^-5 of the actual answer will be accepted.
 *
 * Example 1:
 * Input: points = [[0,0],[0,1],[1,0],[0,2],[2,0]]
 * Output: 2.00000
 * Explanation: The five points are shown in the above figure. The red triangle is the largest.
 *
 * Example 2:
 * Input: points = [[1,0],[0,0],[0,1]]
 * Output: 0.50000
 *
 * Constraints:
 * - 3 <= points.length <= 50
 * - -50 <= xi, yi <= 50
 * - All the given points are unique.
 */
import { describe, it, expect } from "vitest";
import { largestTriangleArea } from "./largest-triangle-area";

describe("Largest Triangle Area", () => {
  it("should return '2.0000' in example 1", () => {
    expect(
      largestTriangleArea([
        [0, 0],
        [0, 1],
        [1, 0],
        [0, 2],
        [2, 0],
      ])
    ).toBe(2.0);
  });
  it("should return '0.5000' in example 2 ", () => {
    expect(
      largestTriangleArea([
        [1, 0],
        [0, 0],
        [0, 1],
      ])
    ).toBe(0.5);
  });

  // Edge Cases
  it("should return 0 for collinear points", () => {
    expect(
      largestTriangleArea([
        [0, 0],
        [1, 1],
        [2, 2],
      ])
    ).toBe(0);
  });

  it("should handle negative coordinates", () => {
    expect(
      largestTriangleArea([
        [-1, 0],
        [1, 0],
        [0, 1],
      ])
    ).toBe(1.0);
  });

  it("should handle minimum case with exactly 3 points", () => {
    expect(
      largestTriangleArea([
        [0, 0],
        [1, 0],
        [0, 1],
      ])
    ).toBe(0.5);
  });
});

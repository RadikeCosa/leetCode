/**
 * LeetCode Problem 1304: Find N Unique Integers Sum up to Zero
 * Difficulty: Easy
 * Topics: Array, Math
 *
 * Given an integer n, return any array containing n unique integers such that they add up to 0.
 *
 * Example 1:
 * Input: n = 5
 * Output: [-7,-1,1,3,4]
 * Explanation: These arrays also are accepted [-5,-1,1,2,3] , [-3,-1,2,-2,4].
 *
 * Example 2:
 * Input: n = 3
 * Output: [-1,0,1]
 *
 * Example 3:
 * Input: n = 1
 * Output: [0]
 *
 * Constraints:
 * - 1 <= n <= 1000
 *
 * Hints:
 * - Return an array where the values are symmetric. (+x , -x).
 * - If n is odd, append value 0 in your returned array.
 */
import { describe, it, expect } from "vitest";
import { sumZero } from "./find-n-unique-integers-sum-up-to-zero";

describe("Find N Unique Integers Sum up to Zero", () => {
  // Helper functions para validar propiedades
  const hasCorrectLength = (arr: number[], expectedLength: number): boolean => {
    return arr.length === expectedLength;
  };

  const hasUniqueElements = (arr: number[]): boolean => {
    const uniqueSet = new Set(arr);
    return uniqueSet.size === arr.length;
  };

  const sumsToZero = (arr: number[]): boolean => {
    const sum = arr.reduce((acc, num) => acc + num, 0);
    return sum === 0;
  };

  const isValidSolution = (arr: number[], n: number): boolean => {
    return (
      hasCorrectLength(arr, n) && hasUniqueElements(arr) && sumsToZero(arr)
    );
  };

  // Tests using property-based approach
  it("should return valid solution for n = 1 (edge case)", () => {
    const result = sumZero(1);
    expect(isValidSolution(result, 1)).toBe(true);

    // Para n=1, también podemos verificar que el único elemento sea 0
    expect(result[0]).toBe(0);
  });

  it("should return valid solution for n = 3", () => {
    const result = sumZero(3);
    expect(isValidSolution(result, 3)).toBe(true);
  });
});

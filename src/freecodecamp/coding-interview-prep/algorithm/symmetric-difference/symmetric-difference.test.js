/**
 * FreeCodeCamp Problem: Symmetric Difference
 * Category: Daily
 * Difficulty: Medium
 * Topics: Array, Set, Math
 *
 * Given two or more arrays, return an array of the symmetric difference of the provided arrays.
 * The symmetric difference of two sets is the set of elements that are in either of the sets, but not in both.
 *
 * Example 1:
 * Input: [1, 2, 3], [5, 2, 1, 4]
 * Output: [3, 4, 5]
 *
 * Constraints:
 * - All inputs are arrays of numbers
 * - No duplicate values within a single array
 */
/**
 * Ejemplos para implementar:
 *
 * 1. sym([1, 2, 3], [5, 2, 1, 4]) should return [3, 4, 5].
 * 2. sym([1, 2, 3], [5, 2, 1, 4]) should contain only three elements.
 * 3. sym([1, 2, 3, 3], [5, 2, 1, 4]) should return [3, 4, 5].
 * 4. sym([1, 2, 3, 3], [5, 2, 1, 4]) should contain only three elements.
 * 5. sym([1, 2, 3], [5, 2, 1, 4, 5]) should return [3, 4, 5].
 * 6. sym([1, 2, 3], [5, 2, 1, 4, 5]) should contain only three elements.
 * 7. sym([1, 2, 5], [2, 3, 5], [3, 4, 5]) should return [1, 4, 5].
 * 8. sym([1, 2, 5], [2, 3, 5], [3, 4, 5]) should contain only three elements.
 * 9. sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]) should return [1, 4, 5].
 * 10. sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]) should contain only three elements.
 * 11. sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]) should return [2, 3, 4, 6, 7].
 * 12. sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]) should contain only five elements.
 * 13. sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]) should return [1, 2, 4, 5, 6, 7, 8, 9].
 * 14. sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]) should contain only eight elements.
 */
import { describe, it, expect } from "vitest";
import { symmetricDifference } from "./symmetric-difference";

describe("Symmetric Difference", () => {
  it("should return [3, 4, 5] for input [1, 2, 3], [5, 2, 1, 4]", () => {
    expect(symmetricDifference([1, 2, 3], [5, 2, 1, 4])).toEqual([3, 4, 5]);
  });
  it("should manage a two arrays without duplicates", () => {
    expect(symmetricDifference([1, 2, 3], [5, 2, 1, 4])).toHaveLength(3);
  });
  it("should return [3, 4, 5] for input [1, 2, 3, 3], [5, 2, 1, 4]", () => {
    expect(symmetricDifference([1, 2, 3, 3], [5, 2, 1, 4])).toEqual([3, 4, 5]);
  });
  it("should manage a three arrays without duplicates", () => {
    expect(symmetricDifference([1, 2, 5], [2, 3, 5], [3, 4, 5])).toHaveLength(
      3
    );
  });
  it("should return [1, 4, 5] for input [1, 2, 5], [2, 3, 5], [3, 4, 5]", () => {
    expect(symmetricDifference([1, 2, 5], [2, 3, 5], [3, 4, 5])).toEqual([
      1, 4, 5,
    ]);
  });
});

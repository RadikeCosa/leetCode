import difference from "./symmetric-difference-daily";
import { describe, it, expect } from "vitest";
/**
 * Symmetric Difference
Given two arrays, return a new array containing the symmetric difference of them.

The symmetric difference between two sets is the set of values that appear in either set, but not both.
Return the values in the order they first appear in the input arrays.
Tests
1. difference([1, 2, 3], [3, 4, 5]) should return [1, 2, 4, 5].
2. difference(["a", "b"], ["c", "b"]) should return ["a", "c"].
3. difference([1, "a", 2], [2, "b", "a"]) should return [1, "b"].
4. difference([1, 3, 5, 7, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9]) should return [2, 4, 6, 8].
 */

describe("Symmetric Difference Daily", () => {
  it("should return [1, 2, 4, 5] for difference([1, 2, 3], [3, 4, 5])", () => {
    expect(difference([1, 2, 3], [3, 4, 5])).toEqual([1, 2, 4, 5]);
  });

  it('should return ["a", "c"] for difference(["a", "b"], ["c", "b"])', () => {
    expect(difference(["a", "b"], ["c", "b"])).toEqual(["a", "c"]);
  });

  it('should return [1, "b"] for difference([1, "a", 2], [2, "b", "a"])', () => {
    expect(difference([1, "a", 2], [2, "b", "a"])).toEqual([1, "b"]);
  });

  it("should return [2, 4, 6, 8] for difference([1, 3, 5, 7, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9])", () => {
    expect(difference([1, 3, 5, 7, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9])).toEqual([
      2, 4, 6, 8,
    ]);
  });
});

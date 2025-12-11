import findDuplicates from "./array-duplicates";
import { describe, it, expect } from "vitest";

/**
 Array Duplicates
Given an array of integers, return an array of integers that appear more than once in the initial array, sorted in ascending order. If no values appear more than once, return an empty array.

Only include one instance of each value in the returned array.
Tests

1. findDuplicates([1, 2, 3, 4, 5]) should return [].
2. findDuplicates([1, 2, 3, 4, 1, 2]) should return [1, 2].
3. findDuplicates([2, 34, 0, 1, -6, 23, 5, 3, 2, 5, 67, -6, 23, 2, 43, 2, 12, 0, 2, 4, 4]) should return [-6, 0, 2, 4, 5, 23].
 */

describe("Array Duplicates", () => {
  it("should return an empty array when there are no duplicates", () => {
    expect(findDuplicates([1, 2, 3, 4, 5])).toEqual([]);
  });

  it("should return an array of duplicates sorted in ascending order", () => {
    expect(findDuplicates([1, 2, 3, 4, 1, 2])).toEqual([1, 2]);
  });
  it("should handle negative numbers and zeros correctly", () => {
    expect(
      findDuplicates([
        2, 34, 0, 1, -6, 23, 5, 3, 2, 5, 67, -6, 23, 2, 43, 2, 12, 0, 2, 4, 4,
      ])
    ).toEqual([-6, 0, 2, 4, 5, 23]);
  });
});

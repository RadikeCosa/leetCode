/**
 * FreeCodeCamp Problem: Targeted Sum
 * Category: Daily
 *
 * Given an array of numbers and an integer target, find two unique numbers in the array that add up to the target value. Return an array with the indices of those two numbers, or "Target not found" if no two numbers sum up to the target.
 *
 * The returned array should have the indices in ascending order.
 *
 * Tests:
 * 1. findTarget([2, 7, 11, 15], 9) should return [0, 1].
 * 2. findTarget([3, 2, 4, 5], 6) should return [1, 2].
 * 3. findTarget([1, 3, 5, 6, 7, 8], 15) should return [4, 5].
 * 4. findTarget([1, 3, 5, 7], 14) should return "Target not found".
 */

import { describe, it, expect } from "vitest";
import findTarget from "./targeted-sum.js";

describe("Targeted Sum", () => {
  it("should return [0, 1] for input [2, 7, 11, 15] and target 9", () => {
    expect(findTarget([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });

  it("should return [1, 2] for input [3, 2, 4, 5] and target 6", () => {
    expect(findTarget([3, 2, 4, 5], 6)).toEqual([1, 2]);
  });

  it("should return [4, 5] for input [1, 3, 5, 6, 7, 8] and target 15", () => {
    expect(findTarget([1, 3, 5, 6, 7, 8], 15)).toEqual([4, 5]);
  });

  it("should return 'Target not found' for input [1, 3, 5, 7] and target 14", () => {
    expect(findTarget([1, 3, 5, 7], 14)).toEqual("Target not found");
  });
});

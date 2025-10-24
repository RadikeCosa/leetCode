import secondLargest from "./second-largest.js";

/*
2nd Largest

Given an array, return the second largest distinct number.

Tests

Waiting:1. secondLargest([1, 2, 3, 4]) should return 3.
Waiting:2. secondLargest([20, 139, 94, 67, 31]) should return 94.
Waiting:3. secondLargest([2, 3, 4, 6, 6]) should return 4.
Waiting:4. secondLargest([10, -17, 55.5, 44, 91, 0]) should return 55.5.
Waiting:5. secondLargest([1, 0, -1, 0, 1, 0, -1, 1, 0]) should return 0.
*/
import { describe, it, expect } from "vitest";
describe("2nd Largest", () => {
  it("should return 3 for [1, 2, 3, 4]", () => {
    expect(secondLargest([1, 2, 3, 4])).toBe(3);
  });
  it("should return 94 for [20, 139, 94, 67, 31]", () => {
    expect(secondLargest([20, 139, 94, 67, 31])).toBe(94);
  });
  it("should return 4 for [2, 3, 4, 6, 6]", () => {
    expect(secondLargest([2, 3, 4, 6, 6])).toBe(4);
  });
  it("should return 55.5 for [10, -17, 55.5, 44, 91, 0]", () => {
    expect(secondLargest([10, -17, 55.5, 44, 91, 0])).toBe(55.5);
  });
  it("should return 0 for [1, 0, -1, 0, 1, 0, -1, 1, 0]", () => {
    expect(secondLargest([1, 0, -1, 0, 1, 0, -1, 1, 0])).toBe(0);
  });
});

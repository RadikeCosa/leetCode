/**
 * LeetCode Problem 3000: Maximum Area of Longest Diagonal Rectangle
 *
 * You are given a 2D 0-indexed integer array dimensions.
 * For all indices i, 0 <= i < dimensions.length, dimensions[i][0] represents
 * the length and dimensions[i][1] represents the width of rectangle i.
 *
 * Return the area of the rectangle having the longest diagonal. If there are
 * multiple rectangles with the longest diagonal, return the area of the
 * rectangle having the maximum area.
 *
 * Constraints:
 * • 1 <= dimensions.length <= 100
 * • dimensions[i].length == 2
 * • 1 <= dimensions[i][0], dimensions[i][1] <= 100
 */
import { describe, it, expect } from "vitest";
import { areaOfMaxDiagonal } from "./maximum-area-of-longest-diagonal-rectangle";

describe("Maximum Area of Longest Diagonal Rectangle", () => {
  it("should return 48 for [[9,3],[8,6]]", () => {
    const dimensions = [
      [9, 3],
      [8, 6],
    ];
    expect(areaOfMaxDiagonal(dimensions)).toBe(48);
  });

  it("should return 12 for [[3,4],[4,3]]", () => {
    const dimensions = [
      [3, 4],
      [4, 3],
    ];
    expect(areaOfMaxDiagonal(dimensions)).toBe(12);
  });

  it("should handle single rectangle", () => {
    const dimensions = [[5, 12]];
    expect(areaOfMaxDiagonal(dimensions)).toBe(60);
  });

  it("should handle squares", () => {
    const dimensions = [
      [3, 3],
      [4, 4],
      [5, 5],
    ];
    expect(areaOfMaxDiagonal(dimensions)).toBe(25);
  });

  it("should handle multiple rectangles with same diagonal", () => {
    const dimensions = [
      [6, 8],
      [5, 12],
      [10, 0],
    ];
    // 6,8 -> diagonal = 10, area = 48
    // 5,12 -> diagonal = 13, area = 60
    // 10,0 -> diagonal = 10, area = 0
    expect(areaOfMaxDiagonal(dimensions)).toBe(60);
  });

  it("should handle minimum constraints", () => {
    const dimensions = [[1, 1]];
    expect(areaOfMaxDiagonal(dimensions)).toBe(1);
  });

  it("should handle maximum individual dimensions", () => {
    const dimensions = [
      [100, 100],
      [99, 99],
    ];
    expect(areaOfMaxDiagonal(dimensions)).toBe(10000);
  });

  it("should prefer maximum area when diagonals are equal", () => {
    const dimensions = [
      [3, 4],
      [5, 0],
    ];
    // Both have diagonal = 5, but 3*4 = 12 > 5*0 = 0
    expect(areaOfMaxDiagonal(dimensions)).toBe(12);
  });
});

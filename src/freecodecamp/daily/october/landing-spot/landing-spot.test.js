/**
 * FreeCodeCamp Problem: Landing Spot
 * Category: Daily
 * Difficulty: Medium
 * Topics: Matrix, Array, Search
 *
 * Given a matrix of numbers (array of arrays), representing potential landing spots for your rover.
 * Find the safest landing spot based on the following rules:
 * - Each spot in the matrix will contain a number from 0-9, inclusive.
 * - Any 0 represents a potential landing spot.
 * - Any number other than 0 is too dangerous to land. The higher the number, the more dangerous.
 * - The safest spot is defined as the 0 cell whose surrounding cells (up to 4 neighbors, ignore diagonals) have the lowest total danger.
 * - Ignore out-of-bounds neighbors (corners and edges just have fewer neighbors).
 * - Return the indices of the safest landing spot. There will always only be one safest spot.
 *
 * Example 1:
 * Input: [[1, 0], [2, 0]]
 * Output: [0, 1]
 *
 * Example 2:
 * Input: [[9, 0, 3], [7, 0, 4], [8, 0, 5]]
 * Output: [1, 1]
 *
 * Example 3:
 * Input: [[1, 2, 1], [0, 0, 2], [3, 0, 0]]
 * Output: [2, 2]
 *
 * Example 4:
 * Input: [[9, 6, 0, 8], [7, 1, 1, 0], [3, 0, 3, 9], [8, 6, 0, 9]]
 * Output: [2, 1]
 *
 * Constraints:
 * - All numbers are integers from 0 to 9
 * - There is always exactly one safest spot
 */

import { describe, it, expect } from "vitest";
import findLandingSpot from "./landing-spot.js";

describe("Landing Spot", () => {
  it("should return [0, 1] for input [[1, 0], [2, 0]]", () => {
    const matrix = [
      [1, 0],
      [2, 0],
    ];
    expect(findLandingSpot(matrix)).toEqual([0, 1]);
  });
  it("should return [1, 1] for input [[9, 0, 3], [7, 0, 4], [8, 0, 5]]", () => {
    const matrix = [
      [9, 0, 3],
      [7, 0, 4],
      [8, 0, 5],
    ];
    expect(findLandingSpot(matrix)).toEqual([1, 1]);
  });
  it("should return [2, 2] for input [[1, 2, 1], [0, 0, 2], [3, 0, 0]]", () => {
    const matrix = [
      [1, 2, 1],
      [0, 0, 2],
      [3, 0, 0],
    ];
    expect(findLandingSpot(matrix)).toEqual([2, 2]);
  });
  it("should return [2, 1] for input [[9, 6, 0, 8], [7, 1, 1, 0], [3, 0, 3, 9], [8, 6, 0, 9]]", () => {
    const matrix = [
      [9, 6, 0, 8],
      [7, 1, 1, 0],
      [3, 0, 3, 9],
      [8, 6, 0, 9],
    ];
    expect(findLandingSpot(matrix)).toEqual([2, 1]);
  });
  it("should manage a 1x1 matrix with a 0", () => {
    const matrix = [[0]];
    expect(findLandingSpot(matrix)).toEqual([0, 0]);
  });
  it("should manage a matrix with all zeros in corners", () => {
    const matrix = [
      [0, 9, 9, 0],
      [9, 9, 9, 9],
      [0, 9, 9, 0],
    ];
    expect(findLandingSpot(matrix)).toEqual([0, 0]);
  });
  it("should manage a matrix with all 9 neigbours of 0s", () => {
    const matrix = [
      [9, 9, 9],
      [9, 0, 9],
      [9, 9, 9],
    ];
    expect(findLandingSpot(matrix)).toEqual([1, 1]);
  });

  it("should manage a rectangular matrix", () => {
    const matrix = [
      [1, 2, 3, 0],
      [4, 5, 6, 7],
      [0, 8, 9, 1],
    ];
    expect(findLandingSpot(matrix)).toEqual([0, 3]);
  });
});

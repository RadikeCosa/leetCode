/**
 * Matrix Builder
 * Given two integers (a number of rows and a number of columns), return a matrix (an array of arrays) filled with zeros (0) of the given size.
 *
 * For example, given 2 and 3, return:
 * [
 *   [0, 0, 0],
 *   [0, 0, 0]
 * ]
 *
 * Tests
 * 1. buildMatrix(2, 3) should return [[0, 0, 0], [0, 0, 0]].
 * 2. buildMatrix(3, 2) should return [[0, 0], [0, 0], [0, 0]].
 * 3. buildMatrix(4, 3) should return [[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]].
 * 4. buildMatrix(9, 1) should return [[0], [0], [0], [0], [0], [0], [0], [0], [0]].
 */

import buildMatrix from "./matrix-builder.js";
import { describe, expect, it } from "vitest";

describe("Matrix Builder", () => {
  it("should return [[0, 0, 0], [0, 0, 0]] for 2 rows and 3 columns", () => {
    expect(buildMatrix(2, 3)).toEqual([
      [0, 0, 0],
      [0, 0, 0],
    ]);
  });

  it("should return [[0, 0], [0, 0], [0, 0]] for 3 rows and 2 columns", () => {
    expect(buildMatrix(3, 2)).toEqual([
      [0, 0],
      [0, 0],
      [0, 0],
    ]);
  });

  it("should return 4 rows of [0, 0, 0] for 4 rows and 3 columns", () => {
    expect(buildMatrix(4, 3)).toEqual([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ]);
  });

  it("should return 9 rows of [0] for 9 rows and 1 column", () => {
    expect(buildMatrix(9, 1)).toEqual([
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
      [0],
    ]);
  });
});

/**
 * FreeCodeCamp Problem: Sum of Squares
 * Category: Daily
 *
 * Given a positive integer up to 1,000, return the sum of all the integers squared from 1 up to the number.
 *
 * Tests:
 * - sumOfSquares(5) should return 55 (1² + 2² + 3² + 4² + 5² = 1 + 4 + 9 + 16 + 25 = 55)
 * - sumOfSquares(10) should return 385
 * - sumOfSquares(25) should return 5525
 * - sumOfSquares(500) should return 41791750
 * - sumOfSquares(1000) should return 333833500
 */

import { describe, it, expect } from "vitest";
import sumOfSquares from "./sum-of-squares.js";

describe("Sum of Squares", () => {
  it("should return 55 for sumOfSquares(5)", () => {
    expect(sumOfSquares(5)).toBe(55);
  });

  it("should return 385 for sumOfSquares(10)", () => {
    expect(sumOfSquares(10)).toBe(385);
  });

  it("should return 5525 for sumOfSquares(25)", () => {
    expect(sumOfSquares(25)).toBe(5525);
  });

  it("should return 41791750 for sumOfSquares(500)", () => {
    expect(sumOfSquares(500)).toBe(41791750);
  });

  it("should return 333833500 for sumOfSquares(1000)", () => {
    expect(sumOfSquares(1000)).toBe(333833500);
  });
});

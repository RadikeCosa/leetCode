/**
 * FreeCodeCamp Problem: 3 Strikes
 * Category: Daily
 *
 * Given an integer between 1 and 10,000, return a count of how many numbers from 1 up to that integer whose square contains at least one digit 3.
 *
 * Tests:
 * - squaresWithThree(1) should return 0
 * - squaresWithThree(10) should return 1
 * - squaresWithThree(100) should return 19
 * - squaresWithThree(1000) should return 326
 * - squaresWithThree(10000) should return 4531
 */

import { describe, it, expect } from "vitest";
import squaresWithThree from "./3-strikes.js";

describe("3 Strikes", () => {
  it("squaresWithThree(1) should return 0", () => {
    expect(squaresWithThree(1)).toBe(0);
  });

  it("squaresWithThree(10) should return 1", () => {
    expect(squaresWithThree(10)).toBe(1);
  });
  it("squaresWithThree(100) should return 19", () => {
    expect(squaresWithThree(100)).toBe(19);
  });

  it("squaresWithThree(1000) should return 326", () => {
    expect(squaresWithThree(1000)).toBe(326);
  });

  it("squaresWithThree(10000) should return 4531", () => {
    expect(squaresWithThree(10000)).toBe(4531);
  });
});

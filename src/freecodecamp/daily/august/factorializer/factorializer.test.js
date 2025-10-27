/**
 * FreeCodeCamp Problem: Factorializer
 * Category: Daily
 *
 * Given an integer from zero to 20, return the factorial of that number.
 * The factorial of a number is the product of all the numbers between 1 and the given number.
 *
 * The factorial of zero is 1.
 *
 * Tests:
 * - factorial(0) should return 1
 * - factorial(5) should return 120
 * - factorial(20) should return 2432902008176640000
 */

import { describe, it, expect } from "vitest";
import factorial from "./factorializer.js";

describe("Factorializer", () => {
  it("should return 1 for factorial(0)", () => {
    expect(factorial(0)).toBe(1);
  });

  it("should return 120 for factorial(5)", () => {
    expect(factorial(5)).toBe(120);
  });

  it("should return 2432902008176640000 for factorial(20)", () => {
    expect(factorial(20)).toBe(2432902008176640000);
  });
});

/**
 * Project Euler Problem 3: Largest prime factor
 * Category: Project Euler
 * Difficulty: Medium
 * Topics: Math, Prime Numbers
 *
 * The prime factors of 13195 are 5, 7, 13 and 29.
 *
 * What is the largest prime factor of the given number?
 *
 * Example:
 * largestPrimeFactor(13195) should return 29
 * largestPrimeFactor(600851475143) should return 6857
 *
 * Constraints:
 * - The number will be a positive integer greater than 1
 * - The number can be very large (up to 600851475143)
 */
import { describe, it, expect } from "vitest";
const largestPrimeFactor = require("./largest-prime-factor");

describe("Largest Prime Factor", () => {
  it("should return a number for input 2", () => {
    const result = largestPrimeFactor(2);
    expect(typeof result).toBe("number");
  });

  it("should return 2 for input 2", () => {
    expect(largestPrimeFactor(2)).toBe(2);
  });

  it("should return 3 for input 3", () => {
    expect(largestPrimeFactor(3)).toBe(3);
  });

  it("should return 5 for input 5", () => {
    expect(largestPrimeFactor(5)).toBe(5);
  });

  it("should return 7 for input 7", () => {
    expect(largestPrimeFactor(7)).toBe(7);
  });

  it("should return 2 for input 8", () => {
    expect(largestPrimeFactor(8)).toBe(2);
  });

  it("should return 29 for 13195", () => {
    expect(largestPrimeFactor(13195)).toBe(29);
  });

  it("should return 6857 for 600851475143", () => {
    expect(largestPrimeFactor(600851475143)).toBe(6857);
  });
});

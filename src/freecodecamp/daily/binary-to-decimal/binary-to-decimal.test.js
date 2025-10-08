/**
 * FreeCodeCamp Problem: Binary to Decimal
 * Category: Daily
 * Difficulty: Easy
 * Topics: Math, String, Conversion
 *
 * Given a string representing a binary number, return its decimal equivalent as a number.
 *
 * Example 1:
 * Input: "101"
 * Output: 5
 *
 * Example 2:
 * Input: "1010"
 * Output: 10
 *
 * Example 3:
 * Input: "10010"
 * Output: 18
 *
 * Example 4:
 * Input: "1010101"
 * Output: 85
 *
 * Constraints:
 * - The input string contains only '0' and '1'
 */
import { describe, it, expect } from "vitest";
import toDecimal from "./binary-to-decimal.js";

describe("Binary to Decimal", () => {
  it('should return 5 for input "101"', () => {
    expect(toDecimal("101")).toBe(5);
  });
  it('should return 10 for input "1010"', () => {
    expect(toDecimal("1010")).toBe(10);
  });
  it('should return 18 for input "10010"', () => {
    expect(toDecimal("10010")).toBe(18);
  });
  it('should return 85 for input "1010101"', () => {
    expect(toDecimal("1010101")).toBe(85);
  });
});

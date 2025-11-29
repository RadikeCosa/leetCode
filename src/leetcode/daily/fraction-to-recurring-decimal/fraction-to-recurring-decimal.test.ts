/**
 * LeetCode Problem 166: Fraction to Recurring Decimal
 * Difficulty: Medium
 * Topics: Hash Table, Math, String
 *
 * Given two integers representing the numerator and denominator of a fraction, return the fraction in string format.
 *
 * If the fractional part is repeating, enclose the repeating part in parentheses.
 *
 * If multiple answers are possible, return any of them.
 *
 * It is guaranteed that the length of the answer string is less than 10^4 for all the given inputs.
 *
 * Example 1:
 * Input: numerator = 1, denominator = 2
 * Output: "0.5"
 *
 * Example 2:
 * Input: numerator = 2, denominator = 1
 * Output: "2"
 *
 * Example 3:
 * Input: numerator = 4, denominator = 333
 * Output: "0.(012)"
 *
 * Constraints:
 * - -2^31 <= numerator, denominator <= 2^31 - 1
 * - denominator != 0
 *
 * Hints:
 * - No scary math, just apply elementary math knowledge. Still remember how to perform a long division?
 * - Try a long division on 4/9, the repeating part is obvious. Now try 4/333. Do you see a pattern?
 * - Notice that once the remainder starts repeating, so does the divided result.
 * - Be wary of edge cases! List out as many test cases as you can think of and test your code thoroughly.
 */
import { describe, it, expect } from "vitest";
import { fractionToDecimal } from "./fraction-to-recurring-decimal";

describe("Fraction to Recurring Decimal", () => {
  it("should return '0.5' for numerator = 1 and denominator = 2", () => {
    expect(fractionToDecimal(1, 2)).toBe("0.5");
  });
  it("should return '2' for numerator = 2 and denominator = 1", () => {
    expect(fractionToDecimal(2, 1)).toBe("2");
  });
  it("should return '0.(012)' for numerator = 4 and denominator = 333", () => {
    expect(fractionToDecimal(4, 333)).toBe("0.(012)");
  });
  it("should return '-0.5' for numerator = -1 and denominator = 2", () => {
    expect(fractionToDecimal(-1, 2)).toBe("-0.5");
  });

  // Casos edge adicionales: Más números negativos
  it("should handle negative denominator: 1/-2 = '-0.5'", () => {
    expect(fractionToDecimal(1, -2)).toBe("-0.5");
  });
  it("should handle both negative: -1/-2 = '0.5'", () => {
    expect(fractionToDecimal(-1, -2)).toBe("0.5");
  });

  // Casos edge: Cero
  it("should handle zero numerator: 0/1 = '0'", () => {
    expect(fractionToDecimal(0, 1)).toBe("0");
  });
  it("should handle zero numerator with negative denominator: 0/-1 = '0'", () => {
    expect(fractionToDecimal(0, -1)).toBe("0");
  });

  // Casos edge: Repetición simple
  it("should handle simple repetition: 1/3 = '0.(3)'", () => {
    expect(fractionToDecimal(1, 3)).toBe("0.(3)");
  });
  it("should handle 2/3 = '0.(6)'", () => {
    expect(fractionToDecimal(2, 3)).toBe("0.(6)");
  });
  it("should handle decimal + repetition: 1/6 = '0.1(6)'", () => {
    expect(fractionToDecimal(1, 6)).toBe("0.1(6)");
  });

  // Casos edge: División exacta con negativos
  it("should handle exact division with negatives: -4/-2 = '2'", () => {
    expect(fractionToDecimal(-4, -2)).toBe("2");
  });
  it("should handle exact negative division: -4/2 = '-2'", () => {
    expect(fractionToDecimal(-4, 2)).toBe("-2");
  });

  // Casos edge: Repeticiones más complejas
  it("should handle complex repetition: 7/12 = '0.58(3)'", () => {
    expect(fractionToDecimal(7, 12)).toBe("0.58(3)");
  });
  it("should handle long repetition: 1/7 = '0.(142857)'", () => {
    expect(fractionToDecimal(1, 7)).toBe("0.(142857)");
  });

  // Casos edge: Repetición inmediata vs tardía
  it("should handle immediate repetition: 4/9 = '0.(4)'", () => {
    expect(fractionToDecimal(4, 9)).toBe("0.(4)");
  });
});

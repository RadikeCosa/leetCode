/**
 * LeetCode Problem 13: Roman to Integer
 *
 * Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
 * Given a roman numeral, convert it to an integer.
 *
 * Roman numerals are usually written largest to smallest from left to right.
 * However, the numeral for four is not IIII. Instead, the number four is written as IV.
 * Because the one is before the five we subtract it making four. The same principle
 * applies to the number nine, which is written as IX. There are six instances where
 * subtraction is used:
 *
 * - I can be placed before V (5) and X (10) to make 4 and 9.
 * - X can be placed before L (50) and C (100) to make 40 and 90.
 * - C can be placed before D (500) and M (1000) to make 400 and 900.
 *
 * Example 1:
 * Input: s = "III"
 * Output: 3
 * Explanation: III = 3.
 *
 * Example 2:
 * Input: s = "LVIII"
 * Output: 58
 * Explanation: L = 50, V= 5, III = 3.
 *
 * Example 3:
 * Input: s = "MCMXCIV"
 * Output: 1994
 * Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 *
 * Constraints:
 * - 1 <= s.length <= 15
 * - s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
 * - It is guaranteed that s is a valid roman numeral in the range [1, 3999].
 */
import { describe, it, expect } from "vitest";
import { romanToInt } from "./roman-to-integer";

describe("Roman to Integer", () => {
  it("should return 3 for III", () => {
    expect(romanToInt("III")).toBe(3);
  });

  it("should return 58 for LVIII", () => {
    expect(romanToInt("LVIII")).toBe(58);
  });

  it("should return 1994 for MCMXCIV", () => {
    expect(romanToInt("MCMXCIV")).toBe(1994);
  });

  it("should handle single character", () => {
    expect(romanToInt("I")).toBe(1);
    expect(romanToInt("V")).toBe(5);
    expect(romanToInt("X")).toBe(10);
    expect(romanToInt("L")).toBe(50);
    expect(romanToInt("C")).toBe(100);
    expect(romanToInt("D")).toBe(500);
    expect(romanToInt("M")).toBe(1000);
  });

  it("should handle subtraction cases", () => {
    expect(romanToInt("IV")).toBe(4);
    expect(romanToInt("IX")).toBe(9);
    expect(romanToInt("XL")).toBe(40);
    expect(romanToInt("XC")).toBe(90);
    expect(romanToInt("CD")).toBe(400);
    expect(romanToInt("CM")).toBe(900);
  });

  it("should handle complex combinations", () => {
    expect(romanToInt("MCMLIV")).toBe(1954); // M + CM + L + IV = 1000 + 900 + 50 + 4
    expect(romanToInt("MCDXLIV")).toBe(1444); // M + CD + XL + IV = 1000 + 400 + 40 + 4
  });

  it("should handle edge cases", () => {
    expect(romanToInt("MMMCMXCIX")).toBe(3999); // Maximum value
    expect(romanToInt("MMMDCCCLXXXVIII")).toBe(3888);
  });
});

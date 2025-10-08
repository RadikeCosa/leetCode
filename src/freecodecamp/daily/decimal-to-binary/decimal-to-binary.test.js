/**
 * FreeCodeCamp Problem: Decimal to Binary
 * Difficulty: Easy
 * Topics: Numbers, Strings, Math
 *
 * Given a non-negative integer, return its binary representation as a string.
 *
 * A binary number uses only the digits 0 and 1 to represent any number. To convert
 * a decimal number to binary, repeatedly divide the number by 2 and record the
 * remainder. Repeat until the number is zero. Read the remainders last recorded
 * to first. For example, to convert 12 to binary:
 *
 * 12 ÷ 2 = 6 remainder 0
 * 6 ÷ 2 = 3 remainder 0
 * 3 ÷ 2 = 1 remainder 1
 * 1 ÷ 2 = 0 remainder 1
 * 12 in binary is 1100.
 *
 * Example 1:
 * Input: 5
 * Output: "101"
 * Explanation: 5 in binary is 101
 *
 * Example 2:
 * Input: 12
 * Output: "1100"
 * Explanation: 12 in binary is 1100
 *
 * Constraints:
 * - Input will be a non-negative integer
 * - 0 ≤ decimal ≤ 1000000 (reasonable upper bound for this problem)
 */
import { describe, it, expect } from "vitest";
import toBinary from "./decimal-to-binary.js";

describe("Decimal to Binary", () => {
  it("should convert 5 to binary", () => {
    expect(toBinary(5)).toBe("101");
  });

  it("should convert 12 to binary", () => {
    expect(toBinary(12)).toBe("1100");
  });

  it("should convert 50 to binary", () => {
    expect(toBinary(50)).toBe("110010");
  });

  it("should convert 99 to binary", () => {
    expect(toBinary(99)).toBe("1100011");
  });
});

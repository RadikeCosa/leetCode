/**
 * FreeCodeCamp Problem: Hex to Decimal
 * Category: Daily
 * Difficulty: Easy
 * Topics: Math, String, Base Conversion
 *
 * Given a string representing a hexadecimal number (base 16), return its decimal (base 10) value as an integer.
 *
 * Hexadecimal is a number system that uses 16 digits:
 * 0-9 represent values 0 through 9.
 * A-F represent values 10 through 15.
 *
 * The string will only contain characters 0–9 and A–F.
 *
 * Examples:
 * - hexToDecimal("A") should return 10
 * - hexToDecimal("15") should return 21
 * - hexToDecimal("2E") should return 46
 * - hexToDecimal("FF") should return 255
 * - hexToDecimal("A3F") should return 2623
 */
import { describe, it, expect } from "vitest";
import hexToDecimal from "./hex-to-decimal.js";

describe("Hex to Decimal", () => {
  it("should return 10 for input 'A'", () => {
    expect(hexToDecimal("A")).toBe(10);
  });
  it("should return 21 for input '15'", () => {
    expect(hexToDecimal("15")).toBe(21);
  });
  it("should return 46 for input '2E'", () => {
    expect(hexToDecimal("2E")).toBe(46);
  });
  it("should return 255 for input 'FF'", () => {
    expect(hexToDecimal("FF")).toBe(255);
  });
  it("should return 2623 for input 'A3F'", () => {
    expect(hexToDecimal("A3F")).toBe(2623);
  });
});

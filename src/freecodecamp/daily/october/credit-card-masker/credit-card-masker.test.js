/**
 * FreeCodeCamp Problem: Credit Card Masker
 * Category: Daily
 * Difficulty: Easy
 * Topics: Strings, Regular Expressions, Arrays
 *
 * Given a string of credit card numbers, return a masked version of it using the following constraints:
 *
 * The string will contain four sets of four digits (0-9), with all sets being separated by a single space, or a single hyphen (-).
 * Replace all numbers, except the last four, with an asterisk (*).
 * Leave the remaining characters unchanged.
 * For example, given "4012-8888-8888-1881" return "****-****-****-1881".
 *
 * Example 1:
 * mask("4012-8888-8888-1881") should return "****-****-****-1881".
 *
 * Example 2:
 * mask("5105 1051 0510 5100") should return "**** **** **** 5100".
 *
 * Example 3:
 * mask("6011 1111 1111 1117") should return "**** **** **** 1117".
 *
 * Example 4:
 * mask("2223-0000-4845-0010") should return "****-****-****-0010".
 *
 * Constraints:
 * - Input will always be a valid credit card format
 * - Four groups of four digits each
 * - Groups separated by single space or single hyphen
 * - Only digits 0-9 and separators allowed
 */
import { describe, it, expect } from "vitest";
import mask from "./credit-card-masker.js";

describe("Credit Card Masker", () => {
  it('should return "****-****-****-1881" for input "4012-8888-8888-1881"', () => {
    expect(mask("4012-8888-8888-1881")).toBe("****-****-****-1881");
  });
  it('should return "**** **** **** 5100" for input "5105 1051 0510 5100"', () => {
    expect(mask("5105 1051 0510 5100")).toBe("**** **** **** 5100");
  });
  it('should return "**** **** **** 1117" for input "6011 1111 1111 1117"', () => {
    expect(mask("6011 1111 1111 1117")).toBe("**** **** **** 1117");
  });
  it('should return "****-****-****-0010" for input "2223-0000-4845-0010"', () => {
    expect(mask("2223-0000-4845-0010")).toBe("****-****-****-0010");
  });
});

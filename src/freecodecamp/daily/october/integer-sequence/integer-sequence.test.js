/**
 * FreeCodeCamp Problem: Integer Sequence
 * Category: Daily
 *
 * Given a positive integer, return a string with all of the integers from 1 up to, and including, the given number, in numerical order.
 *
 * For example, given 5, return "12345".
 *
 * Tests:
 * 1. sequence(5) should return "12345".
 * 2. sequence(10) should return "12345678910".
 * 3. sequence(1) should return "1".
 * 4. sequence(27) should return "123456789101112131415161718192021222324252627".
 */

import { describe, it, expect } from "vitest";
import sequence from "./integer-sequence.js";

describe("Integer Sequence", () => {
  it("should return '12345' for input 5", () => {
    expect(sequence(5)).toBe("12345");
  });
  it("should return '12345678910' for input 10", () => {
    expect(sequence(10)).toBe("12345678910");
  });
  it("should return '1' for input 1", () => {
    expect(sequence(1)).toBe("1");
  });
  it("should return '123456789101112131415161718192021222324252627' for input 27", () => {
    expect(sequence(27)).toBe("123456789101112131415161718192021222324252627");
  });
});

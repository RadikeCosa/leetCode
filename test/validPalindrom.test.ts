import { describe, it, expect } from "vitest";
import { isPalindrome } from "../src/validPalindrome";

describe("isPalindrome", () => {
  it('should return true for "A man, a plan, a canal: Panama"', () => {
    expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true);
  });

  it('should return false for "race a car"', () => {
    expect(isPalindrome("race a car")).toBe(false);
  });

  it("should return true for an empty string", () => {
    expect(isPalindrome("")).toBe(true);
  });

  it("should return true for a single character", () => {
    expect(isPalindrome("a")).toBe(true);
  });

  it('should return true for "1aA1"', () => {
    expect(isPalindrome("1aA1")).toBe(true);
  });
});
//

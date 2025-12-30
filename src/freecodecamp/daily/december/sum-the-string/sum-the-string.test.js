import stringSum from "./sum-the-string";

/**
 Sum the String
Given a string containing digits and other characters, return the sum of all numbers in the string.

Treat consecutive digits as a single number. For example, "13" counts as 13, not 1 + 3.
Ignore any non-digit characters.
Tests
1. stringSum("3apples2bananas") should return 5.
2. stringSum("10cats5dogs2birds") should return 17.
3. stringSum("125344") should return 125344.
4. stringSum("a1b20c300") should return 321.
5. stringSum("a12b34c56d78e90f123g456h789i0j1k2l3m4n5") should return 1653.
 */

describe("Sum The String", () => {
  it('should return 5 for input "3apples2bananas"', () => {
    expect(stringSum("3apples2bananas")).toBe(5);
  });

  it('should return 17 for input "10cats5dogs2birds"', () => {
    expect(stringSum("10cats5dogs2birds")).toBe(17);
  });

  it('should return 125344 for input "125344"', () => {
    expect(stringSum("125344")).toBe(125344);
  });

  it('should return 321 for input "a1b20c300"', () => {
    expect(stringSum("a1b20c300")).toBe(321);
  });
  it('should return 1653 for input "a12b34c56d78e90f123g456h789i0j1k2l3m4n5"', () => {
    expect(stringSum("a12b34c56d78e90f123g456h789i0j1k2l3m4n5")).toBe(1653);
  });

  describe("Edge Cases", () => {
    it("should return 0 for an empty string", () => {
      expect(stringSum("")).toBe(0);
    });

    it("should return 0 for a string with no digits", () => {
      expect(stringSum("abc")).toBe(0);
    });

    it("should return 0 for a string with only zeros", () => {
      expect(stringSum("0a0b0")).toBe(0);
    });

    it("should handle leading zeros correctly", () => {
      expect(stringSum("007bond008")).toBe(15);
    });
  });
});

import isCircularPrimecircularPrime from "./circular-prime";

/**
 Circular Prime
Given an integer, determine if it is a circular prime.

A circular prime is an integer where all rotations of its digits are themselves prime.

For example, 197 is a circular prime because all rotations of its digits: 197, 971, and 719, are prime numbers.

ests
1. isCircularPrime(197) should return true.
2. isCircularPrime(23) should return false.
3. isCircularPrime(13) should return true.
4. isCircularPrime(89) should return false.
5. isCircularPrime(1193) should return true.
 */

describe("Circular Prime", () => {
  it("test case 1", () => {
    expect(isCircularPrimecircularPrime(197)).toBe(true);
  });

  it("test case 2", () => {
    expect(isCircularPrimecircularPrime(23)).toBe(false);
  });

  it("test case 3", () => {
    expect(isCircularPrimecircularPrime(13)).toBe(true);
  });
  it("test case 4", () => {
    expect(isCircularPrimecircularPrime(89)).toBe(false);
  });

  it("test case 5", () => {
    expect(isCircularPrimecircularPrime(1193)).toBe(true);
  });
});

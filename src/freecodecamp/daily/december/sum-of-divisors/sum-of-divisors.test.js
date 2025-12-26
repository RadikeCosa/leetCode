import sumOfDivisors from "./sum-of-divisors";

/**
Sum of Divisors
Given a positive integer, return the sum of all its divisors.

A divisor is any integer that divides the number evenly (the remainder is 0).
Only count each divisor once.
For example, given 6, return 12 because the divisors of 6 are 1, 2, 3, and 6, and the sum of those is 12.

Tests
1. sumDivisors(6) should return 12.
2. sumDivisors(13) should return 14.
3. sumDivisors(28) should return 56.
4. sumDivisors(84) should return 224.
5. sumDivisors(549) should return 806.
6. sumDivisors(9348) should return 23520.
 */

describe("Sum Of Divisors", () => {
  it("Test Case 1", () => {
    expect(sumOfDivisors(6)).toBe(12);
  });

  it("Test Case 2", () => {
    expect(sumOfDivisors(13)).toBe(14);
  });

  it("Test Case 3", () => {
    expect(sumOfDivisors(28)).toBe(56);
  });
  it("Test Case 4", () => {
    expect(sumOfDivisors(84)).toBe(224);
  });
  it("Test Case 5", () => {
    expect(sumOfDivisors(549)).toBe(806);
  });
  it("Test Case 6", () => {
    expect(sumOfDivisors(9348)).toBe(23520);
  });
});

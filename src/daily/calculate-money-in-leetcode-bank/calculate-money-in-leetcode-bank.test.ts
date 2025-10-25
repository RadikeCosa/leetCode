/**
 * LeetCode 1716: Calculate Money in LeetCode Bank
 * Difficulty: Easy
 * Topics: Math
 *
 * Hercy wants to save money for his first car. He puts money in the Leetcode bank every day.
 *
 * He starts by putting in $1 on Monday, the first day. Every day from Tuesday to Sunday,
 * he will put in $1 more than the day before. On every subsequent Monday, he will put in
 * $1 more than the previous Monday.
 *
 * Given n, return the total amount of money he will have in the Leetcode bank at the end of the nth day.
 *
 * Example 1:
 * Input: n = 4
 * Output: 10
 * Explanation: After the 4th day, the total is 1 + 2 + 3 + 4 = 10.
 *
 * Example 2:
 * Input: n = 10
 * Output: 37
 * Explanation: After the 10th day, the total is (1 + 2 + 3 + 4 + 5 + 6 + 7) + (2 + 3 + 4) = 37.
 *
 * Example 3:
 * Input: n = 20
 * Output: 96
 *
 * Constraints:
 * 1 <= n <= 1000
 */
import { describe, it, expect } from "vitest";
import { totalMoney } from "./calculate-money-in-leetcode-bank";

describe("Calculate Money in LeetCode Bank", () => {
  it("should return 10 for n = 4", () => {
    expect(totalMoney(4)).toBe(10);
  });

  it("should return 37 for n = 10", () => {
    expect(totalMoney(10)).toBe(37);
  });

  it("should return 96 for n = 20", () => {
    expect(totalMoney(20)).toBe(96);
  });
});

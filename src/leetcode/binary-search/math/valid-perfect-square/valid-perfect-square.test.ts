/**
 * LeetCode Problem 367: Valid Perfect Square
 * Difficulty: Easy
 * Topics: Math, Binary Search
 *
 * Given a positive integer num, return true if num is a perfect square or false otherwise.
 *
 * A perfect square is an integer that is the square of an integer. In other words, it is the
 * product of some integer with itself.
 *
 * You must not use any built-in library function, such as sqrt.
 *
 * Example 1:
 * Input: num = 16
 * Output: true
 * Explanation: We return true because 4 * 4 = 16 and 4 is an integer.
 *
 * Example 2:
 * Input: num = 14
 * Output: false
 * Explanation: We return false because 3.742 * 3.742 = 14 and 3.742 is not an integer.
 *
 * Constraints:
 * - 1 <= num <= 2^31 - 1
 */
import { describe, it, expect } from "vitest";
import { isPerfectSquare } from "./valid-perfect-square";

describe("Valid Perfect Square", () => {
  it("it should return true for perfect squares", () => {
    expect(isPerfectSquare(1)).toBe(true);
    expect(isPerfectSquare(4)).toBe(true);
    expect(isPerfectSquare(9)).toBe(true);
    expect(isPerfectSquare(16)).toBe(true);
    expect(isPerfectSquare(25)).toBe(true);
    expect(isPerfectSquare(100)).toBe(true);
    expect(isPerfectSquare(144)).toBe(true);
    expect(isPerfectSquare(10000)).toBe(true);
    expect(isPerfectSquare(2147395600)).toBe(true); // 46340 * 46340
  });

  it("it should return false for non-perfect squares", () => {
    expect(isPerfectSquare(2)).toBe(false);
    expect(isPerfectSquare(3)).toBe(false);
    expect(isPerfectSquare(5)).toBe(false);
    expect(isPerfectSquare(10)).toBe(false);
    expect(isPerfectSquare(15)).toBe(false);
    expect(isPerfectSquare(26)).toBe(false);
    expect(isPerfectSquare(99)).toBe(false);
    expect(isPerfectSquare(150)).toBe(false);
    expect(isPerfectSquare(2147483647)).toBe(false); // Max 32-bit signed int
  });
});

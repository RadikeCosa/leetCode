import { describe, it, expect } from "vitest";
import { isPalindrome } from "./palindrome-number";

/*
LeetCode Problem: 9. Palindrome Number
Daily Challenge: August 14, 2025
Difficulty: Easy
Topics: Math

Given an integer x, return true if x is a palindrome, and false otherwise.

Examples:
Input: x = 121
Output: true
Explanation: 121 reads the same backward as forward.

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

Constraints:
-2^31 <= x <= 2^31 - 1

Follow up: Could you solve it without converting the integer to a string?
*/

describe("Palindrome Number", () => {
  it("should return true for positive palindrome", () => {
    expect(isPalindrome(121)).toBe(true);
  });

  it("should return false for negative numbers", () => {
    expect(isPalindrome(-121)).toBe(false);
  });

  it("should return false for numbers ending in zero (except 0)", () => {
    expect(isPalindrome(10)).toBe(false);
  });

  it("should return true for single digit numbers", () => {
    expect(isPalindrome(7)).toBe(true);
    expect(isPalindrome(0)).toBe(true);
  });

  it("should handle larger palindromes", () => {
    expect(isPalindrome(1221)).toBe(true);
    expect(isPalindrome(12321)).toBe(true);
  });

  it("should return false for non-palindromes", () => {
    expect(isPalindrome(123)).toBe(false);
    expect(isPalindrome(1234)).toBe(false);
  });
});

import { describe, it, expect } from "vitest";
import { isPowerOfTwo } from "./power-of-two";
/*
LeetCode Problem: 231. Power of Two
Daily Challenge: August 9, 2025
Difficulty: Easy
Topics: Math, Bit Manipulation, Recursion

Given an integer n, return true if it is a power of two. Otherwise, return false.

An integer n is a power of two if there exists an integer x such that n == 2^x.

Examples:
Input: n = 1
Output: true
Explanation: 2^0 = 1

Input: n = 16
Output: true
Explanation: 2^4 = 16

Input: n = 3
Output: false

Constraints:
-2^31 <= n <= 2^31 - 1

Follow up: Could you solve it without loops/recursion?
*/
describe("Power of Two", () => {
    it("should return true for 1 (2^0)", () => {
        expect(isPowerOfTwo(1)).toBe(true);
    });
    it("should return true for 16 (2^4)", () => {
        expect(isPowerOfTwo(16)).toBe(true);
    });
    it("should return false for 3", () => {
        expect(isPowerOfTwo(3)).toBe(false);
    });
    it("should return false for 0", () => {
        expect(isPowerOfTwo(0)).toBe(false);
    });
    it("should return false for negative numbers", () => {
        expect(isPowerOfTwo(-8)).toBe(false);
    });
    it("should return true for large power of two (2^30)", () => {
        expect(isPowerOfTwo(1 << 30)).toBe(true);
    });
});

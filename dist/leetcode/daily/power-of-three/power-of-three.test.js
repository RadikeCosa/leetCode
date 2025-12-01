import { describe, it, expect } from "vitest";
import { isPowerOfThree } from "./power-of-three";
/*
LeetCode 326: Power of Three
Daily Challenge: 13 de Agosto, 2025
Difficulty: Easy
Topics: Math, Recursion

Given an integer n, return true if it is a power of three. Otherwise, return false.
An integer n is a power of three, if there exists an integer x such that n == 3^x.

Constraints:
- -2^31 <= n <= 2^31 - 1

Follow up: Could you solve it without using any loop or recursion?
*/
describe("Power of Three", () => {
    it("should return true for valid powers of three", () => {
        expect(isPowerOfThree(27)).toBe(true); // 3^3 = 27
        expect(isPowerOfThree(1)).toBe(true); // 3^0 = 1
        expect(isPowerOfThree(3)).toBe(true); // 3^1 = 3
        expect(isPowerOfThree(9)).toBe(true); // 3^2 = 9
    });
    it("should return false for non-powers of three", () => {
        expect(isPowerOfThree(0)).toBe(false);
        expect(isPowerOfThree(2)).toBe(false);
        expect(isPowerOfThree(8)).toBe(false);
        expect(isPowerOfThree(45)).toBe(false);
    });
    it("should handle negative numbers", () => {
        expect(isPowerOfThree(-1)).toBe(false);
        expect(isPowerOfThree(-27)).toBe(false);
    });
    it("should handle edge cases", () => {
        expect(isPowerOfThree(1)).toBe(true); // 3^0
        expect(isPowerOfThree(2147483647)).toBe(false); // max int
        expect(isPowerOfThree(-2147483648)).toBe(false); // min int
    });
});

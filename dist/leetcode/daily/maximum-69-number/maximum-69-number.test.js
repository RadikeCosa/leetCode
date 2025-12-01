import { describe, it, expect } from "vitest";
import { maximum69Number } from "./maximum-69-number";
/*
LeetCode Problem: 1323. Maximum 69 Number
Daily Challenge: August 16, 2025
Difficulty: Easy
Topics: Math, Greedy

Problem Statement:
Given a positive integer num consisting only of digits 6 and 9.
Return the maximum number you can get by changing at most one digit
(6 becomes 9, and 9 becomes 6).

Constraints:
- 1 <= num <= 10^4
- num consists of only 6's and 9's

Examples:
Example 1:
Input: num = 9669
Output: 9969
Explanation: Changing the first 6 to 9 gives the maximum number.

Example 2:
Input: num = 9996
Output: 9999
Explanation: Changing the last 6 to 9 gives the maximum number.

Example 3:
Input: num = 9999
Output: 9999
Explanation: It is better not to apply any change.
*/
describe("Maximum 69 Number", () => {
    describe("Casos de ejemplo de LeetCode", () => {
        it("should handle example 1: 9669 → 9969", () => {
            expect(maximum69Number(9669)).toBe(9969);
        });
        it("should handle example 2: 9996 → 9999", () => {
            expect(maximum69Number(9996)).toBe(9999);
        });
        it("should handle example 3: 9999 → 9999", () => {
            expect(maximum69Number(9999)).toBe(9999);
        });
    });
    describe("Casos extremos", () => {
        it("should handle single digit 6", () => {
            expect(maximum69Number(6)).toBe(9);
        });
        it("should handle single digit 9", () => {
            expect(maximum69Number(9)).toBe(9);
        });
        it("should handle all 6's", () => {
            expect(maximum69Number(6666)).toBe(9666);
        });
        it("should handle alternating pattern starting with 6", () => {
            expect(maximum69Number(6969)).toBe(9969);
        });
        it("should handle alternating pattern starting with 9", () => {
            expect(maximum69Number(9696)).toBe(9996);
        });
    });
    describe("Casos de análisis estratégico", () => {
        it("should prioritize leftmost 6 for maximum impact", () => {
            // ¿Por qué cambiar el primer 6 es mejor que el último?
            expect(maximum69Number(6699)).toBe(9699);
        });
        it("should not change anything if all digits are 9", () => {
            // ¿Cuándo es mejor no hacer ningún cambio?
            expect(maximum69Number(999)).toBe(999);
        });
    });
});

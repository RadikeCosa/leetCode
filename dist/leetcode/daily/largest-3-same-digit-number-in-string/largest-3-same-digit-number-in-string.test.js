import { describe, it, expect } from "vitest";
import { largestGoodInteger } from "./largest-3-same-digit-number-in-string";
/*
LeetCode Problem: 2264. Largest 3-Same-Digit Number in String
Daily Challenge: 2025-08-14
Difficulty: Easy
Topics: String, Sliding Window, Counting

You are given a string num consisting of only digits.
A string is called a good integer if it is a substring of num and it contains only one unique digit.
Return the maximum good integer as a string or an empty string "" if no such substring exists.
A good integer must be of length 3.

Examples:
Input: num = "6777133339"
Output: "777"
Explanation: There are two distinct good integers: "777" and "333". "777" is the largest.

Input: num = "2300019"
Output: "000"
Explanation: "000" is the only good integer.

Input: num = "42352338"
Output: ""
Explanation: No substring of length 3 consists of only one unique digit.

Constraints:
3 <= num.length <= 1000
num consists of digits only.
*/
describe("Largest 3-Same-Digit Number in String", () => {
    it("Example 1: should return '777'", () => {
        expect(largestGoodInteger("6777133339")).toBe("777");
    });
    it("Example 2: should return '000'", () => {
        expect(largestGoodInteger("2300019")).toBe("000");
    });
    it("Example 3: should return '' when no good integer", () => {
        expect(largestGoodInteger("42352338")).toBe("");
    });
    it("Edge: all same digit string returns first 3", () => {
        expect(largestGoodInteger("99999")).toBe("999");
    });
    it("Edge: minimal length 3 with valid triple", () => {
        expect(largestGoodInteger("000")).toBe("000");
    });
    it("Edge: minimal length 3 without triple returns empty", () => {
        expect(largestGoodInteger("012")).toBe("");
    });
});

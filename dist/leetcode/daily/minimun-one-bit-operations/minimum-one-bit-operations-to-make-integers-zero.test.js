import { minimumOneBitOperations } from "./minimum-one-bit-operations-to-make-integers-zero";
import { describe, it, expect } from "vitest";
// LeetCode Problem: Minimum One Bit Operations to Make Integers Zero
// Difficulty: Hard
// Topics: Bit Manipulation, Dynamic Programming
//
// Statement:
// Given an integer n, you must transform it to 0 using the following operation any number of times:
// - Choose an integer i >= 0 such that the ith bit of n is 1.
// - Flip the ith bit and all higher bits (i.e., bits j >= i).
// Return the minimum number of operations to transform n to 0.
//
// Examples:
// 1. minimumOneBitOperations(3) should return 2.
// 2. minimumOneBitOperations(6) should return 4.
//
// Constraints:
// - 0 <= n <= 10^9
describe("Minimum One Bit Operations to Make Integers Zero", () => {
    it("should return the minimum number of operations to transform n to 0", () => {
        expect(minimumOneBitOperations(3)).toBe(2);
    });
    it("should return the minimum number of operations to transform n to 0", () => {
        expect(minimumOneBitOperations(6)).toBe(4);
    });
});

import { describe, it, expect } from "vitest";
import { isSubsequence } from "./is-subsequence";
/*
LeetCode Problem: 392. Is Subsequence
Top Interview 150: Two Pointers
Difficulty: Easy
Topics: Two Pointers, String, Dynamic Programming

Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting
some (can be none) of the characters without disturbing the relative positions of the remaining characters.
(i.e., "ace" is a subsequence of "azbzcde" while "aec" is not).

Examples:
Input: s = "abc", t = "ahbgdc"
Output: true
Explanation: "abc" is a subsequence of "ahbgdc"

Input: s = "axc", t = "ahbgdc"
Output: false
Explanation: "axc" is not a subsequence of "ahbgdc"

Constraints:
- 0 <= s.length <= 100
- 0 <= t.length <= 10^4
- s and t consist only of lowercase English letters.

Follow up: Suppose there are lots of incoming s, say s1, s2, ..., sk where k >= 10^9,
and you want to check one by one to see if t has its subsequence. In this scenario,
how would you change your code?
*/
describe("Is Subsequence", () => {
    it("should return true for abc in ahbgdc", () => {
        const s = "abc";
        const t = "ahbgdc";
        const result = isSubsequence(s, t);
        expect(result).toBe(true);
    });
    it("should return false for axc in ahbgdc", () => {
        const s = "axc";
        const t = "ahbgdc";
        const result = isSubsequence(s, t);
        expect(result).toBe(false);
    });
    it("should return true for empty string s", () => {
        const s = "";
        const t = "ahbgdc";
        const result = isSubsequence(s, t);
        expect(result).toBe(true);
    });
    it("should return false when t is empty but s is not", () => {
        const s = "a";
        const t = "";
        const result = isSubsequence(s, t);
        expect(result).toBe(false);
    });
    it("should return true when both strings are empty", () => {
        const s = "";
        const t = "";
        const result = isSubsequence(s, t);
        expect(result).toBe(true);
    });
    it("should return true when s equals t", () => {
        const s = "abc";
        const t = "abc";
        const result = isSubsequence(s, t);
        expect(result).toBe(true);
    });
    it("should return true for single character match", () => {
        const s = "b";
        const t = "abc";
        const result = isSubsequence(s, t);
        expect(result).toBe(true);
    });
    it("should return false when characters are in wrong order", () => {
        const s = "acb";
        const t = "abc";
        const result = isSubsequence(s, t);
        expect(result).toBe(false);
    });
});

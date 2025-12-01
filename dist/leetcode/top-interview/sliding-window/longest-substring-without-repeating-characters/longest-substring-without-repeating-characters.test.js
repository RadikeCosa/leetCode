/**
 * LeetCode Problem 3: Longest Substring Without Repeating Characters
 * Difficulty: Medium
 * Topics: Hash Table, String, Sliding Window
 *
 * Given a string s, find the length of the longest substring without repeating characters.
 *
 * Example 1:
 * Input: s = "abcabcbb"
 * Output: 3
 * Explanation: The answer is "abc", with the length of 3.
 *
 * Example 2:
 * Input: s = "bbbbb"
 * Output: 1
 * Explanation: The answer is "b", with the length of 1.
 *
 * Example 3:
 * Input: s = "pwwkew"
 * Output: 3
 * Explanation: The answer is "wke", with the length of 3.
 * Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 *
 * Constraints:
 * - 0 <= s.length <= 5 * 10^4
 * - s consists of English letters, digits, symbols and spaces.
 */
import { describe, it, expect } from "vitest";
import { lengthOfLongestSubstring } from "./longest-substring-without-repeating-characters";
describe("Longest Substring Without Repeating Characters", () => {
    // LeetCode examples
    it('should return 3 for input "abcabcbb"', () => {
        expect(lengthOfLongestSubstring("abcabcbb")).toBe(3);
    });
    it('should return 1 for input "bbbbb"', () => {
        expect(lengthOfLongestSubstring("bbbbb")).toBe(1);
    });
    it('should return 3 for input "pwwkew"', () => {
        expect(lengthOfLongestSubstring("pwwkew")).toBe(3);
    });
    // Edge cases
    it("should return 0 for empty string", () => {
        expect(lengthOfLongestSubstring("")).toBe(0);
    });
    it("should return 1 for single character", () => {
        expect(lengthOfLongestSubstring("a")).toBe(1);
    });
    it("should return 1 for single repeated character", () => {
        expect(lengthOfLongestSubstring("aaaaaaa")).toBe(1);
    });
    // No duplicates
    it("should return full length when no duplicates exist", () => {
        expect(lengthOfLongestSubstring("abcdef")).toBe(6);
        expect(lengthOfLongestSubstring("abcdefghijklmnop")).toBe(16);
    });
    // Special characters and spaces
    it("should handle special characters and spaces", () => {
        expect(lengthOfLongestSubstring("a b!@#$%")).toBe(8);
        expect(lengthOfLongestSubstring(" !@# $%^")).toBe(7);
        expect(lengthOfLongestSubstring("(){}[]")).toBe(6);
    });
    // Complex patterns
    it("should handle complex repeating patterns", () => {
        expect(lengthOfLongestSubstring("abcba")).toBe(3); // "abc"
        expect(lengthOfLongestSubstring("abccba")).toBe(3); // "abc"
        expect(lengthOfLongestSubstring("tmmzuxt")).toBe(5); // "mzuxt"
    });
    // Mixed case and numbers
    it("should handle mixed case letters and numbers", () => {
        expect(lengthOfLongestSubstring("aA1")).toBe(3);
        expect(lengthOfLongestSubstring("Aa1Bb2")).toBe(6); // All characters are unique: A,a,1,B,b,2
        expect(lengthOfLongestSubstring("123321")).toBe(3); // "123"
    });
    // Sliding window edge cases
    it("should handle cases where start needs to jump forward significantly", () => {
        expect(lengthOfLongestSubstring("abcdefga")).toBe(7); // "bcdefga"
        expect(lengthOfLongestSubstring("dvdf")).toBe(3); // "vdf"
    });
    // Unicode characters
    it("should handle unicode characters", () => {
        expect(lengthOfLongestSubstring("αβγδεα")).toBe(5); // "βγδεα"
        expect(lengthOfLongestSubstring("abcα")).toBe(4); // Simple unicode mixing
    });
    // Performance test case
    it("should handle longer strings efficiently", () => {
        const longString = "abcdefghijklmnopqrstuvwxyz".repeat(100);
        expect(lengthOfLongestSubstring(longString)).toBe(26);
    });
});

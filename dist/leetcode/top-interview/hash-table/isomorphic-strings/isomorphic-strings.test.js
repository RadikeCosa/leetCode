/**
 * LeetCode Problem 205: Isomorphic Strings
 * Difficulty: Easy
 * Topics: Hash Table, String
 *
 * Given two strings s and t, determine if they are isomorphic.
 * Two strings s and t are isomorphic if the characters in s can be replaced to get t.
 * All occurrences of a character must be replaced with another character while preserving the order of characters.
 * No two characters may map to the same character, but a character may map to itself.
 *
 * Example 1:
 * Input: s = "egg", t = "add"
 * Output: true
 * Explanation:
 * The strings s and t can be made identical by:
 * • Mapping 'e' to 'a'.
 * • Mapping 'g' to 'd'.
 *
 * Example 2:
 * Input: s = "foo", t = "bar"
 * Output: false
 * Explanation:
 * The strings s and t can not be made identical as 'o' needs to be mapped to both 'a' and 'r'.
 *
 * Example 3:
 * Input: s = "paper", t = "title"
 * Output: true
 *
 * Constraints:
 * - 1 <= s.length <= 5 * 10^4
 * - t.length == s.length
 * - s and t consist of any valid ascii character.
 */
import { describe, it, expect } from "vitest";
import { isIsomorphic } from "./isomorphic-strings";
describe("Isomorphic Strings", () => {
    describe("Valid isomorphic cases", () => {
        it("should handle identical characters mapping", () => {
            expect(isIsomorphic("egg", "add")).toBe(true);
        });
        it("should handle complex mappings", () => {
            expect(isIsomorphic("paper", "title")).toBe(true);
        });
        it("should handle self-mapping", () => {
            expect(isIsomorphic("abc", "abc")).toBe(true);
        });
    });
    describe("Invalid mappings", () => {
        it("should detect one-to-many mapping violation", () => {
            // 'o' maps to both 'a' and 'r'
            expect(isIsomorphic("foo", "bar")).toBe(false);
        });
        it("should detect many-to-one mapping violation", () => {
            // Both 'a' and 'b' would map to 'c'
            expect(isIsomorphic("ab", "cc")).toBe(false);
        });
    });
    describe("Edge cases", () => {
        it("should handle single character", () => {
            expect(isIsomorphic("a", "b")).toBe(true);
        });
        it("should handle identical strings", () => {
            expect(isIsomorphic("abc", "abc")).toBe(true);
        });
    });
});

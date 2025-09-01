/**
 * 14. Longest Common Prefix - Easy
 *
 * Write a function to find the longest common prefix string amongst an array of strings.
 * If there is no common prefix, return an empty string "".
 *
 * Example 1:
 * Input: strs = ["flower","flow","flight"]
 * Output: "fl"
 *
 * Example 2:
 * Input: strs = ["dog","racecar","car"]
 * Output: ""
 * Explanation: There is no common prefix among the input strings.
 *
 * Constraints:
 * - 1 <= strs.length <= 200
 * - 0 <= strs[i].length <= 200
 * - strs[i] consists of only lowercase English letters if it is non-empty.
 */
import { describe, test, expect } from "vitest";
import { longestCommonPrefix } from "./longest-common-prefix";
describe("Longest Common Prefix", () => {
    test('Example 1: ["flower","flow","flight"] should return "fl"', () => {
        expect(longestCommonPrefix(["flower", "flow", "flight"])).toBe("fl");
    });
    test('Example 2: ["dog","racecar","car"] should return ""', () => {
        expect(longestCommonPrefix(["dog", "racecar", "car"])).toBe("");
    });
    test("Single string should return the string itself", () => {
        expect(longestCommonPrefix(["single"])).toBe("single");
    });
    test("All strings are identical should return the string", () => {
        expect(longestCommonPrefix(["test", "test", "test"])).toBe("test");
    });
    test("Empty string in array should return empty string", () => {
        expect(longestCommonPrefix(["abc", "", "ab"])).toBe("");
    });
    test("No common prefix should return empty string", () => {
        expect(longestCommonPrefix(["abc", "def", "ghi"])).toBe("");
    });
    test("One character common prefix", () => {
        expect(longestCommonPrefix(["a", "aa", "aaa"])).toBe("a");
    });
    test("Two strings with partial common prefix", () => {
        expect(longestCommonPrefix(["interspecies", "interstellar"])).toBe("inters");
    });
});

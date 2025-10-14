/**
 * LeetCode Problem 2273: Find Resultant Array After Removing Anagrams
 * Difficulty: Easy
 * Topics: Array, Hash Table, String, Sorting
 *
 * You are given a 0-indexed string array words, where words[i] consists of lowercase English letters.
 *
 * In one operation, select any index i such that 0 < i < words.length and words[i - 1] and words[i] are anagrams,
 * and delete words[i] from words. Keep performing this operation as long as you can select an index that satisfies the conditions.
 *
 * Return words after performing all operations. It can be shown that selecting the indices for each operation in any arbitrary order will lead to the same result.
 *
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase using all the original letters exactly once.
 * For example, "dacb" is an anagram of "dabc".
 *
 * Example 1:
 * Input: words = ["abba","baba","bbaa","cd","cd"]
 * Output: ["abba","cd"]
 * Explanation:
 * One of the ways we can obtain the resultant array is by using the following operations:
 * - Since words[2] = "bbaa" and words[1] = "baba" are anagrams, we choose index 2 and delete words[2].
 *   Now words = ["abba","baba","cd","cd"].
 * - Since words[1] = "baba" and words[0] = "abba" are anagrams, we choose index 1 and delete words[1].
 *   Now words = ["abba","cd","cd"].
 * - Since words[2] = "cd" and words[1] = "cd" are anagrams, we choose index 2 and delete words[2].
 *   Now words = ["abba","cd"].
 * We can no longer perform any operations, so ["abba","cd"] is the final answer.
 *
 * Example 2:
 * Input: words = ["a","b","c","d","e"]
 * Output: ["a","b","c","d","e"]
 * Explanation:
 * No two adjacent strings in words are anagrams of each other, so no operations are performed.
 *
 * Constraints:
 * - 1 <= words.length <= 100
 * - 1 <= words[i].length <= 10
 * - words[i] consists of lowercase English letters.
 *
 * Hints:
 * - Instead of removing each repeating anagram, try to find all the strings in words which will not be present in the final answer.
 * - For every index i, find the largest index j < i such that words[j] will be present in the final answer.
 * - Check if words[i] and words[j] are anagrams. If they are, then it can be confirmed that words[i] will not be present in the final answer.
 */
import { describe, it, expect } from "vitest";
import { findResultantArrayAfterRemovingAnagrams } from "./find-resultant-array-after-removing-anagrams";

describe("Find Resultant Array After Removing Anagrams", () => {
  it("Example 1", () => {
    const words = ["abba", "baba", "bbaa", "cd", "cd"];
    const expected = ["abba", "cd"];
    expect(findResultantArrayAfterRemovingAnagrams(words)).toEqual(expected);
  });

  it("Example 2", () => {
    const words = ["a", "b", "c", "d", "e"];
    const expected = ["a", "b", "c", "d", "e"];
    expect(findResultantArrayAfterRemovingAnagrams(words)).toEqual(expected);
  });

  it("Test case that was failing: non-adjacent duplicates", () => {
    const words = ["a", "b", "a"];
    const expected = ["a", "b", "a"];
    expect(findResultantArrayAfterRemovingAnagrams(words)).toEqual(expected);
  });

  it("All anagrams get reduced to first element", () => {
    const words = ["abc", "bac", "cab", "acb"];
    const expected = ["abc"];
    expect(findResultantArrayAfterRemovingAnagrams(words)).toEqual(expected);
  });

  it("Single element", () => {
    const words = ["hello"];
    const expected = ["hello"];
    expect(findResultantArrayAfterRemovingAnagrams(words)).toEqual(expected);
  });

  it("Empty array", () => {
    const words: string[] = [];
    const expected: string[] = [];
    expect(findResultantArrayAfterRemovingAnagrams(words)).toEqual(expected);
  });
});

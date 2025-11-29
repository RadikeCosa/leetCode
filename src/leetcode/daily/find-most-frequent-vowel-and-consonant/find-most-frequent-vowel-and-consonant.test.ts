/**
 * LeetCode Problem 3541: Find Most Frequent Vowel and Consonant
 * Difficulty: Easy
 * Topics: Hash Table, String, Counting
 *
 * You are given a string s consisting of lowercase English letters ('a' to 'z').
 * Your task is to:
 * • Find the vowel (one of 'a', 'e', 'i', 'o', or 'u') with the maximum frequency.
 * • Find the consonant (all other letters excluding vowels) with the maximum frequency.
 * Return the sum of the two frequencies.
 *
 * Note: If multiple vowels or consonants have the same maximum frequency, you may
 * choose any one of them. If there are no vowels or no consonants in the string,
 * consider their frequency as 0.
 *
 * The frequency of a letter x is the number of times it occurs in the string.
 *
 * Example 1:
 * Input: s = "successes"
 * Output: 6
 * Explanation:
 * • The vowels are: 'u' (frequency 1), 'e' (frequency 2). The maximum frequency is 2.
 * • The consonants are: 's' (frequency 4), 'c' (frequency 2). The maximum frequency is 4.
 * • The output is 2 + 4 = 6.
 *
 * Example 2:
 * Input: s = "aeiaeia"
 * Output: 3
 * Explanation:
 * • The vowels are: 'a' (frequency 3), 'e' (frequency 2), 'i' (frequency 2). The maximum frequency is 3.
 * • There are no consonants in s. Hence, maximum consonant frequency = 0.
 * • The output is 3 + 0 = 3.
 *
 * Constraints:
 * - 1 <= s.length <= 100
 * - s consists of lowercase English letters only.
 *
 * Hints:
 * - Use a hashmap
 * - Simulate as described
 */
import { describe, it, expect } from "vitest";
import { findMostFrequentVowelAndConsonant } from "./find-most-frequent-vowel-and-consonant";

describe("Find Most Frequent Vowel and Consonant", () => {
  it("should return 6 for example 1", () => {
    const s = "successes";
    expect(findMostFrequentVowelAndConsonant(s)).toBe(6);
  });

  it("should return 3 for example 2", () => {
    const s = "aeiaeia";
    expect(findMostFrequentVowelAndConsonant(s)).toBe(3);
  });

  // Casos edge adicionales
  it("should return 1 for single character vowel", () => {
    const s = "a";
    expect(findMostFrequentVowelAndConsonant(s)).toBe(1); // vowel=1, consonant=0
  });

  it("should return 1 for single character consonant", () => {
    const s = "b";
    expect(findMostFrequentVowelAndConsonant(s)).toBe(1); // vowel=0, consonant=1
  });

  it("should handle only consonants", () => {
    const s = "bcdfg";
    expect(findMostFrequentVowelAndConsonant(s)).toBe(1); // vowel=0, consonant=1 (cada consonante aparece 1 vez)
  });

  it("should handle only vowels", () => {
    const s = "aeiou";
    expect(findMostFrequentVowelAndConsonant(s)).toBe(1); // vowel=1 (cada vocal aparece 1 vez), consonant=0
  });

  it("should handle repeated characters", () => {
    const s = "aaaa";
    expect(findMostFrequentVowelAndConsonant(s)).toBe(4); // vowel=4, consonant=0
  });

  it("should handle mixed with high frequencies", () => {
    const s = "programming";
    // vowels: o(1), a(1), i(1) -> max = 1
    // consonants: p(1), r(2), g(2), m(2), n(1) -> max = 2
    expect(findMostFrequentVowelAndConsonant(s)).toBe(3); // 1 + 2 = 3
  });

  it("should handle case with equal frequencies", () => {
    const s = "abcde";
    // vowels: a(1), e(1) -> max = 1
    // consonants: b(1), c(1), d(1) -> max = 1
    expect(findMostFrequentVowelAndConsonant(s)).toBe(2); // 1 + 1 = 2
  });
});

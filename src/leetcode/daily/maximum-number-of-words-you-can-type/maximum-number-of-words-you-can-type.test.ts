/**
 * LeetCode Problem 1935: Maximum Number of Words You Can Type
 * Difficulty: Easy
 * Topics: Hash Table, String
 *
 * There is a malfunctioning keyboard where some letter keys do not work. All other
 * keys on the keyboard work properly.
 *
 * Given a string text of words separated by a single space (no leading or trailing spaces) and a
 * string brokenLetters of all distinct letter keys that are broken, return the number of words in text you can fully type using this keyboard.
 *
 * Example 1:
 * Input: text = "hello world", brokenLetters = "ad"
 * Output: 1
 * Explanation: We cannot type "world" because the 'd' key is broken.
 *
 * Example 2:
 * Input: text = "leet code", brokenLetters = "lt"
 * Output: 1
 * Explanation: We cannot type "leet" because the 'l' and 't' keys are broken.
 *
 * Example 3:
 * Input: text = "leet code", brokenLetters = "e"
 * Output: 0
 * Explanation: We cannot type either word because the 'e' key is broken.
 *
 * Constraints:
 * - 1 <= text.length <= 10^4
 * - 0 <= brokenLetters.length <= 26
 * - text consists of words separated by a single space without any leading or trailing spaces.
 * - Each word only consists of lowercase English letters.
 * - brokenLetters consists of distinct lowercase English letters.
 *
 * Hints:
 * - Hint 1: Check each word separately if it can be typed.
 * - Hint 2: A word can be typed if all its letters are not broken.
 */
import { describe, it, expect } from "vitest";
import { canBeTypedWords } from "./maximum-number-of-words-you-can-type";

describe("Maximum Number of Words You Can Type", () => {
  it("should return 1 in example 1", () => {
    // "hello" can be typed (no broken letters), "world" cannot (contains 'd')
    const text = "hello world";
    const brokenLetters = "ad";
    expect(canBeTypedWords(text, brokenLetters)).toBe(1);
  });

  it("should return 1 in example 2", () => {
    // "leet" cannot be typed (contains 'l' and 't'), "code" can be typed
    const text = "leet code";
    const brokenLetters = "lt";
    expect(canBeTypedWords(text, brokenLetters)).toBe(1);
  });

  it("should return 0 in example 3", () => {
    // Both "leet" and "code" contain 'e', so neither can be typed
    const text = "leet code";
    const brokenLetters = "e";
    expect(canBeTypedWords(text, brokenLetters)).toBe(0);
  });
  it("should return 3 when no letters are broken", () => {
    // All words can be typed when brokenLetters is empty
    const text = "no broken letters";
    const brokenLetters = "";
    expect(canBeTypedWords(text, brokenLetters)).toBe(3);
  });
});

/**
 * LeetCode Problem 383: Ransom Note
 *
 * Given two strings ransomNote and magazine, return true if ransomNote
 * can be constructed by using the letters from magazine and false otherwise.
 * Each letter in magazine can only be used once in ransomNote.
 *
 * Constraints:
 * - 1 <= ransomNote.length, magazine.length <= 10^5
 * - ransomNote and magazine consist of lowercase English letters.
 */
import { describe, it, expect } from "vitest";
import { canConstruct } from "./ransom-note";

describe("Ransom Note", () => {
  it("should return false with ransom note 'a' and magazine 'b'", () => {
    expect(canConstruct("a", "b")).toBe(false);
  });
  it("should return true with ransom note 'aa' and magazine 'ab'", () => {
    expect(canConstruct("aa", "ab")).toBe(false);
  });
  it("should return true with ransom note 'aa' and magazine 'aab'", () => {
    expect(canConstruct("aa", "aab")).toBe(true);
  });
});

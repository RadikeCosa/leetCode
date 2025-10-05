/**
 * FreeCodeCamp Problem: Vowel Balance
 * Difficulty: Easy
 * Topics: Strings, Conditionals
 *
 * Given a string, determine whether the number of vowels in the first half of the string is equal to the number of vowels in the second half.
 *
 * The string can contain any characters.
 * The letters a, e, i, o, and u, in either uppercase or lowercase, are considered vowels.
 * If there's an odd number of characters in the string, ignore the center character.
 *
 * Tests
 * Waiting:1. isBalanced("racecar") should return true.
 * Waiting:2. isBalanced("Lorem Ipsum") should return true.
 * Waiting:3. isBalanced("Kitty Ipsum") should return false.
 * Waiting:4. isBalanced("string") should return false.
 * Waiting:5. isBalanced(" ") should return true.
 * Waiting:6. isBalanced("abcdefghijklmnopqrstuvwxyz") should return false.
 * Waiting:7. isBalanced("123A#b!E&*456-o.U") should return true.
 */
import { describe, it, expect } from "vitest";
import isBalanced from "./vowel-balance.js";

describe("Vowel Balance", () => {
  it('isBalanced("racecar") should return true', () => {
    expect(isBalanced("racecar")).toBe(true);
  });

  it('isBalanced("Lorem Ipsum") should return true', () => {
    expect(isBalanced("Lorem Ipsum")).toBe(true);
  });

  it('isBalanced("Kitty Ipsum") should return false', () => {
    expect(isBalanced("Kitty Ipsum")).toBe(false);
  });

  it('isBalanced("string") should return false', () => {
    expect(isBalanced("string")).toBe(false);
  });

  it('isBalanced(" ") should return true', () => {
    expect(isBalanced(" ")).toBe(true);
  });

  it('isBalanced("abcdefghijklmnopqrstuvwxyz") should return false', () => {
    expect(isBalanced("abcdefghijklmnopqrstuvwxyz")).toBe(false);
  });

  it('isBalanced("123A#b!E&*456-o.U") should return true', () => {
    expect(isBalanced("123A#b!E&*456-o.U")).toBe(true);
  });
});

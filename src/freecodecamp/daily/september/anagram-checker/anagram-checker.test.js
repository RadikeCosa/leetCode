/**
 * FreeCodeCamp Problem: Anagram Checker
 * Category: Daily
 *
 * Given two strings, determine if they are anagrams of each other (contain the same characters in any order).
 *
 * Ignore casing and white space.
 *
 * Tests:
 * 1. areAnagrams("listen", "silent") should return true.
 * 2. areAnagrams("School master", "The classroom") should return true.
 * 3. areAnagrams("A gentleman", "Elegant man") should return true.
 * 4. areAnagrams("Hello", "World") should return false.
 * 5. areAnagrams("apple", "banana") should return false.
 * 6. areAnagrams("cat", "dog") should return false.
 */

import { describe, it, expect } from "vitest";
import areAnagrams from "./anagram-checker.js";

describe("Anagram Checker", () => {
  it("should return true for 'listen' and 'silent'", () => {
    expect(areAnagrams("listen", "silent")).toBe(true);
  });

  it("should return true for 'School master' and 'The classroom'", () => {
    expect(areAnagrams("School master", "The classroom")).toBe(true);
  });

  it("should return true for 'A gentleman' and 'Elegant man'", () => {
    expect(areAnagrams("A gentleman", "Elegant man")).toBe(true);
  });

  it("should return false for 'Hello' and 'World'", () => {
    expect(areAnagrams("Hello", "World")).toBe(false);
  });

  it("should return false for 'apple' and 'banana'", () => {
    expect(areAnagrams("apple", "banana")).toBe(false);
  });

  it("should return false for 'cat' and 'dog'", () => {
    expect(areAnagrams("cat", "dog")).toBe(false);
  });
});

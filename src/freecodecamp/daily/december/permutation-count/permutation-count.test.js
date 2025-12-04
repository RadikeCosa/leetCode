import countPermutations from "./permutation-count";
import { describe, it, expect } from "vitest";
/**
 Permutation Count
Given a string, return the number of distinct permutations that can be formed from its characters.

A permutation is any reordering of the characters in the string.
Do not count duplicate permutations.
If the string contains repeated characters, repeated arrangements should only be counted once.
The string will contain only letters (A-Z, a-z).
For example, given "abb", return 3 because there's three unique ways to arrange the letters: "abb", "bab", and "bba".

Tests
1. countPermutations("abb") should return 3.
2. countPermutations("abc") should return 6.
3. countPermutations("racecar") should return 630.
4. countPermutations("freecodecamp") should return 39916800.*/

describe("Permutation Count", () => {
  it("should return 3 for 'abb'", () => {
    expect(countPermutations("abb")).toBe(3);
  });

  it("should return 6 for 'abc'", () => {
    expect(countPermutations("abc")).toBe(6);
  });

  it("should return 630 for 'racecar'", () => {
    expect(countPermutations("racecar")).toBe(630);
  });

  it("should return 39916800 for 'freecodecamp'", () => {
    expect(countPermutations("freecodecamp")).toBe(39916800);
  });
});

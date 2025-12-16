import hasConsonantCount from "./consonant-count";

/**
 * Consonant Count
Given a string and a target number, determine whether the string contains exactly the target number of consonants.

Consonants are all alphabetic characters except "a", "e", "i", "o", and "u" in any case.
Ignore digits, punctuation, spaces, and other non-letter characters when counting.
Tests
1. hasConsonantCount("helloworld", 7) should return true.
2. hasConsonantCount("eieio", 5) should return false.
3. hasConsonantCount("freeCodeCamp Rocks!", 11) should return true.
4. hasConsonantCount("Th3 Qu!ck Br0wn F0x Jump5 0ver Th3 L@zy D0g.", 24) should return false.
5. hasConsonantCount("Th3 Qu!ck Br0wn F0x Jump5 0ver Th3 L@zy D0g.", 23) should return true.
 */

describe("Consonant Count", () => {
  it("hasConsonantCount('helloworld', 7) should return true", () => {
    expect(hasConsonantCount("helloworld", 7)).toBe(true);
  });

  it("hasConsonantCount('eieio', 5) should return false", () => {
    expect(hasConsonantCount("eieio", 5)).toBe(false);
  });

  it("hasConsonantCount('freeCodeCamp Rocks!', 11) should return true", () => {
    expect(hasConsonantCount("freeCodeCamp Rocks!", 11)).toBe(true);
  });

  it("hasConsonantCount('Th3 Qu!ck Br0wn F0x Jump5 0ver Th3 L@zy D0g.', 24) should return false", () => {
    expect(
      hasConsonantCount("Th3 Qu!ck Br0wn F0x Jump5 0ver Th3 L@zy D0g.", 24)
    ).toBe(false);
  });
});

import vowelCase from "./vowel-case";

/**
vOwElcAsE
Given a string, return a new string where all vowels are converted to uppercase and all other alphabetical characters are converted to lowercase.

Vowels are "a", "e", "i", "o", and "u" in any case.
Non-alphabetical characters should remain unchanged.

Test Cases:
1. vowelCase("vowelcase") should return "vOwElcAsE".
2. vowelCase("coding is fun") should return "cOdIng Is fUn".
3. vowelCase("HELLO, world!") should return "hEllO, wOrld!".
4. vowelCase("git cherry-pick") should return "gIt chErry-pIck".
5. vowelCase("HEAD~1") should return "hEAd~1".
 */

describe("Vowel Case", () => {
  it("test case 1", () => {
    expect(vowelCase("vowelcase")).toBe("vOwElcAsE");
  });

  it("test case 2", () => {
    expect(vowelCase("coding is fun")).toBe("cOdIng Is fUn");
  });

  it("test case 3", () => {
    expect(vowelCase("HELLO, world!")).toBe("hEllO, wOrld!");
  });

  it("test case 4", () => {
    expect(vowelCase("git cherry-pick")).toBe("gIt chErry-pIck");
  });

  it("test case 5", () => {
    expect(vowelCase("HEAD~1")).toBe("hEAd~1");
  });
});

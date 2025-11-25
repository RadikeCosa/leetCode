import longestWord from "./longest-word";
import { describe, it, expect } from "vitest";

/**
1. longestWord("The quick red fox") should return "quick".
2. longestWord("Hello coding challenge.") should return "challenge".
3. longestWord("Do Try This At Home.") should return "This".
4. longestWord("This sentence... has commas, ellipses, and an exlamation point!") should return "exlamation".
5. longestWord("A tie? No way!") should return "tie".
6. longestWord("Wouldn't you like to know.") should return "Wouldnt".
*/

describe("Longest Word", () => {
  it('should return "quick" for "The quick red fox"', () => {
    expect(longestWord("The quick red fox")).toBe("quick");
  });

  it('should return "challenge" for "Hello coding challenge."', () => {
    expect(longestWord("Hello coding challenge.")).toBe("challenge");
  });

  it('should return "This" for "Do Try This At Home."', () => {
    expect(longestWord("Do Try This At Home.")).toBe("This");
  });

  it('should return "exlamation" for "This sentence... has commas, ellipses, and an exlamation point!"', () => {
    expect(
      longestWord(
        "This sentence... has commas, ellipses, and an exlamation point!"
      )
    ).toBe("exlamation");
  });

  it('should return "tie" for "A tie? No way!"', () => {
    expect(longestWord("A tie? No way!")).toBe("tie");
  });

  it('should return "Wouldnt" for "Wouldn\'t you like to know."', () => {
    expect(longestWord("Wouldn't you like to know.")).toBe("Wouldnt");
  });
});

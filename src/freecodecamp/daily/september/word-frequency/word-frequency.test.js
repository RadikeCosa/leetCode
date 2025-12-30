import getWords from "./word-frequency";

/**
 Word Frequency
Given a paragraph, return an array of the three most frequently occurring words.

Words in the paragraph will be separated by spaces.
Ignore case in the given paragraph. For example, treat Hello and hello as the same word.
Ignore punctuation in the given paragraph. Punctuation consists of commas (,), periods (.), and exclamation points (!).
The returned array should have all lowercase words.
The returned array should be in descending order with the most frequently occurring word first.
Tests
1. getWords("Coding in Python is fun because coding Python allows for coding in Python easily while coding") should return ["coding", "python", "in"].
2. getWords("I like coding. I like testing. I love debugging!") should return ["i", "like", "coding"].
3. getWords("Debug, test, deploy. Debug, debug, test, deploy. Debug, test, test, deploy!") should return ["debug", "test", "deploy"].
 */

describe("Word Frequency", () => {
  it("Test Case 1", () => {
    const paragraph =
      "Coding in Python is fun because coding Python allows for coding in Python easily while coding";
    const result = getWords(paragraph);
    expect(result).toEqual(["coding", "python", "in"]);
  });

  it("Test Case 2", () => {
    const paragraph = "I like coding. I like testing. I love debugging!";
    const result = getWords(paragraph);
    expect(result).toEqual(["i", "like", "coding"]);
  });

  it("Test Case 3", () => {
    const paragraph =
      "Debug, test, deploy. Debug, debug, test, deploy. Debug, test, test, deploy!";
    const result = getWords(paragraph);
    expect(result).toEqual(["debug", "test", "deploy"]);
  });

  it("should return an empty array for an empty string", () => {
    expect(getWords("")).toEqual([]);
  });

  it("should handle paragraphs with fewer than three unique words", () => {
    expect(getWords("hello hello world")).toEqual(["hello", "world"]);
  });

  it("should ignore multiple spaces and only specified punctuation", () => {
    const paragraph = "  Apple!  apple,   orange...  ";
    // Note: the problem says punctuation is , . and !
    // "orange..." becomes "orange.." if we only replace once, but /[.,!]/g handles all
    expect(getWords(paragraph)).toEqual(["apple", "orange"]);
  });

  it("should handle ties alphabetically", () => {
    const paragraph = "b a c b a";
    // b: 2, a: 2, c: 1
    // Ties between b and a -> a comes first alphabetically?
    // Wait, my implementation uses a.localeCompare(b) which puts 'a' before 'b'.
    // So ["a", "b", "c"]? Let's check my logic:
    // freqDiff = 2 - 2 = 0. return a.localeCompare(b).
    // "a".localeCompare("b") is -1. So "a" comes before "b".
    // If I want "a" before "b", it should return -1.
    expect(getWords(paragraph)).toEqual(["a", "b", "c"]);
  });
});

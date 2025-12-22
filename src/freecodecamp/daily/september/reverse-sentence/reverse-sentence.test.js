import reverseSentence from "./reverse-sentence";

/**
 Reverse Sentence
Given a string of words, return a new string with the words in reverse order. For example, the first word should be at the end of the returned string, and the last word should be at the beginning of the returned string.

In the given string, words can be separated by one or more spaces.
The returned string should only have one space between words.

Tests
1. reverseSentence("world hello") should return "hello world".
2. reverseSentence("push commit git") should return "git commit push".
3. reverseSentence("npm  install  sudo") should return "sudo install npm".
4. reverseSentence("import    default   function  export") should return "export function default import".
 */

describe("Reverse Sentence", () => {
  it("test 1", () => {
    const input = "world hello";
    const expectedOutput = "hello world";
    expect(reverseSentence(input)).toBe(expectedOutput);
  });

  it("test 2", () => {
    const input = "push commit git";
    const expectedOutput = "git commit push";
    expect(reverseSentence(input)).toBe(expectedOutput);
  });

  it("test 3", () => {
    const input = "npm  install  sudo";
    const expectedOutput = "sudo install npm";
    expect(reverseSentence(input)).toBe(expectedOutput);
  });

  it("test 4", () => {
    const input = "import    default   function  export";
    const expectedOutput = "export function default import";
    expect(reverseSentence(input)).toBe(expectedOutput);
  });
});

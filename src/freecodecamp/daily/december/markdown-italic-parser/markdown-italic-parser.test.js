import parseItalic from "./markdown-italic-parser";

/**
 Markdown Italic Parser
Given a string that may include some italic text in Markdown, return the equivalent HTML string.

Italic text in Markdown is any text that starts and ends with a single asterisk (*) or a single underscore (_).
There cannot be any spaces between the text and the asterisk or underscore, but there can be spaces in the text itself.
Convert all italic occurrences to HTML i tags and return the string.
For example, given "*This is italic*", return "<i>This is italic</i>".

Note: The console may not display HTML tags in strings when logging messages. Check the browser console to see logs with tags included.

Tests
1. parseItalic("*This is italic*") should return "<i>This is italic</i>".
2. parseItalic("_This is also italic_") should return "<i>This is also italic</i>".
3. parseItalic("*This is not italic *") should return "*This is not italic *".
4. parseItalic("_ This is also not italic_") should return "_ This is also not italic_".
5. parseItalic("The *quick* brown fox _jumps_ over the *lazy* dog.") should return "The <i>quick</i> brown fox <i>jumps</i> over the <i>lazy</i> dog.".
 */

describe("Markdown Italic Parser", () => {
  it("Test Case 1", () => {
    const input = "*This is italic*";
    const expectedOutput = "<i>This is italic</i>";
    expect(parseItalic(input)).toBe(expectedOutput);
  });

  it("Test Case 2", () => {
    const input = "_This is also italic_";
    const expectedOutput = "<i>This is also italic</i>";
    expect(parseItalic(input)).toBe(expectedOutput);
  });
  it("Test Case 3", () => {
    const input = "*This is not italic *";
    const expectedOutput = "*This is not italic *";
    expect(parseItalic(input)).toBe(expectedOutput);
  });

  it("Test Case 4", () => {
    const input = "_ This is also not italic_";
    const expectedOutput = "_ This is also not italic_";
    expect(parseItalic(input)).toBe(expectedOutput);
  });

  it("Test Case 5", () => {
    const input = "The *quick* brown fox _jumps_ over the *lazy* dog.";
    const expectedOutput =
      "The <i>quick</i> brown fox <i>jumps</i> over the <i>lazy</i> dog.";
    expect(parseItalic(input)).toBe(expectedOutput);
  });
});

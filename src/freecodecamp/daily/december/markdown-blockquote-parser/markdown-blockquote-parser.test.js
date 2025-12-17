import parseBlockquote from "./markdown-blockquote-parser";

/**
Markdown Blockquote Parser
Given a string that includes a blockquote in Markdown, return the 
equivalent HTML string.

A blockquote in Markdown is any line that:

Starts with zero or more spaces
Followed by a greater-than sign (>)
Then, one or more spaces
And finally, the blockquote text.
Return the blockquote text surrounded by opening and closing HTML blockquote tags.

For example, given "> This is a quote", return <blockquote>This is a quote</blockquote>.

Note: The console may not display HTML tags in strings when logging messages. Check the browser console to see logs with tags included.

Tests
1. parseBlockquote("> This is a quote") should return "<blockquote>This is a quote</blockquote>".
2. parseBlockquote(" > This is also a quote") should return "<blockquote>This is also a quote</blockquote>".
3. parseBlockquote("  >    So  Is  This") should return "<blockquote>So  Is  This</blockquote>".

 */

describe("Markdown Blockquote Parser", () => {
  it("parseBlockquote('> This is a quote') should return '<blockquote>This is a quote</blockquote>'.", () => {
    expect(parseBlockquote("> This is a quote")).toEqual(
      "<blockquote>This is a quote</blockquote>"
    );
  });

  it("parseBlockquote(' > This is also a quote') should return '<blockquote>This is also a quote</blockquote>'.", () => {
    expect(parseBlockquote(" > This is also a quote")).toEqual(
      "<blockquote>This is also a quote</blockquote>"
    );
  });

  it("parseBlockquote('  >    So  Is  This') should return '<blockquote>So  Is  This</blockquote>'.", () => {
    expect(parseBlockquote("  >    So  Is  This")).toEqual(
      "<blockquote>So  Is  This</blockquote>"
    );
  });
});

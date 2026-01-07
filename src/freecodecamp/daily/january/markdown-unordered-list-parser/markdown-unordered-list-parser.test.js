import parseUnorderedList from "./markdown-unordered-list-parser";

/**
 Markdown Unordered List Parser
Given the string of a valid unordered list in Markdown, return the equivalent HTML string.

An unordered list consists of one or more list items. A valid list item appears on its own line and:

Starts with a dash ("-"), followed by
At least one space, and then
The list item text.
The list is given as a single string with new lines separated by the newline character ("\n"). Do not include the newline characters in the item text.

Wrap each list item in HTML li tags, and the whole list of items in ul tags.

For example, given "- Item A\n- Item B", return "<ul><li>Item A</li><li>Item B</li></ul>".

Note: The console may not display HTML tags in strings when logging messages. Check the browser console to see logs with tags included.

1. parseUnorderedList("- Item A\n- Item B") should return "<ul><li>Item A</li><li>Item B</li></ul>".
2. parseUnorderedList("-  JavaScript\n-  Python") should return "<ul><li>JavaScript</li><li>Python</li></ul>".
3. parseUnorderedList("- 2 C Flour\n- 1/2 C Sugar\n- 1 Tsp Vanilla") should return "<ul><li>2 C Flour</li><li>1/2 C Sugar</li><li>1 Tsp Vanilla</li></ul>".
4. parseUnorderedList("- A-1\n- A-2\n- B-1") should return "<ul><li>A-1</li><li>A-2</li><li>B-1</li></ul>".
 */

describe("Markdown Unordered List Parser", () => {
  it("test case 1", () => {
    const input = "- Item A\n- Item B";
    const expectedOutput = "<ul><li>Item A</li><li>Item B</li></ul>";
    expect(parseUnorderedList(input)).toBe(expectedOutput);
  });

  it("test case 2", () => {
    const input = "-  JavaScript\n-  Python";
    const expectedOutput = "<ul><li>JavaScript</li><li>Python</li></ul>";
    expect(parseUnorderedList(input)).toBe(expectedOutput);
  });

  it("test case 3", () => {
    const input = "- 2 C Flour\n- 1/2 C Sugar\n- 1 Tsp Vanilla";
    const expectedOutput =
      "<ul><li>2 C Flour</li><li>1/2 C Sugar</li><li>1 Tsp Vanilla</li></ul>";
    expect(parseUnorderedList(input)).toBe(expectedOutput);
  });

  it("test case 4", () => {
    const input = "- A-1\n- A-2\n- B-1";
    const expectedOutput = "<ul><li>A-1</li><li>A-2</li><li>B-1</li></ul>";
    expect(parseUnorderedList(input)).toBe(expectedOutput);
  });
});

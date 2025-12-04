import convertListItem from "./markdown-ordered-list-item-converter";
import { describe, it, expect } from "vitest";

/**
* Markdown Ordered List Item Converter
Given a string representing an ordered list item in Markdown, return the equivalent HTML string.
A valid ordered list item in Markdown must:
Start with zero or more spaces, followed by
A number (1 or greater) and a period (.), followed by
At least one space, and then
The list item text.
If the string doesn't have the exact format above, return "Invalid format". Otherwise, wrap the list item text in li tags and return the string.
For example, given "1. My item", return "<li>My item</li>"
Tests
1. convertListItem("1. My item") should return "<li>My item</li>".
2. convertListItem(" 1.  Another item") should return "<li>Another item</li>".
3. convertListItem("1 . invalid item") should return "Invalid format".
4. convertListItem("2. list item text") should return "<li>list item text</li>".
5. convertListItem(". invalid again") should return "Invalid format".
6. convertListItem("A. last invalid") should return "Invalid format".
*/

describe("Markdown Ordered List Item Converter", () => {
  it("should return '<li>My item</li>' for input '1. My item'", () => {
    expect(convertListItem("1. My item")).toBe("<li>My item</li>");
  });

  it("should return '<li>Another item</li>' for input ' 1.  Another item'", () => {
    expect(convertListItem(" 1.  Another item")).toBe("<li>Another item</li>");
  });

  it("should return 'Invalid format' for input '1 . invalid item'", () => {
    expect(convertListItem("1 . invalid item")).toBe("Invalid format");
  });
  it("should return '<li>list item text</li>' for input '2. list item text'", () => {
    expect(convertListItem("2. list item text")).toBe(
      "<li>list item text</li>"
    );
  });

  it("should return 'Invalid format' for input '. invalid again'", () => {
    expect(convertListItem(". invalid again")).toBe("Invalid format");
  });

  it("should return 'Invalid format' for input 'A. last invalid'", () => {
    expect(convertListItem("A. last invalid")).toBe("Invalid format");
  });
});

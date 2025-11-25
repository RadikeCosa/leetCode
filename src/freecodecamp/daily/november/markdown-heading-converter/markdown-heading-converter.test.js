import convert from "./markdown-heading-converter";
import { describe, it, expect } from "vitest";
/**
1. convert("# My level 1 heading") should return "<h1>My level 1 heading</h1>".
2. convert("My heading") should return "Invalid format".
3. convert("##### My level 5 heading") should return "<h5>My level 5 heading</h5>".
4. convert("#My heading") should return "Invalid format".
5. convert("  ###  My level 3 heading") should return "<h3>My level 3 heading</h3>".
6. convert("####### My level 7 heading") should return "Invalid format".
7. convert("## My #2 heading") should return "<h2>My #2 heading</h2>".
 */

describe("Markdown Heading Converter", () => {
  it("should convert level 1 heading", () => {
    expect(convert("# My level 1 heading")).toBe("<h1>My level 1 heading</h1>");
  });

  it("should return 'Invalid format' for missing #", () => {
    expect(convert("My heading")).toBe("Invalid format");
  });

  it("should convert level 5 heading", () => {
    expect(convert("##### My level 5 heading")).toBe(
      "<h5>My level 5 heading</h5>"
    );
  });

  it("should return 'Invalid format' for no space after #", () => {
    expect(convert("#My heading")).toBe("Invalid format");
  });

  it("should convert level 3 heading with extra spaces", () => {
    expect(convert("  ###  My level 3 heading")).toBe(
      "<h3>My level 3 heading</h3>"
    );
  });

  it("should return 'Invalid format' for level greater than 6", () => {
    expect(convert("####### My level 7 heading")).toBe("Invalid format");
  });

  it("should convert level 2 heading with special characters", () => {
    expect(convert("## My #2 heading")).toBe("<h2>My #2 heading</h2>");
  });
});

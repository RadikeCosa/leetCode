import getExtension from "./extension-extractor";
import { describe, it, expect } from "vitest";

/**
Tests
Waiting:1. getExtension("document.txt") should return "txt".
Waiting:2. getExtension("README") should return "none".
Waiting:3. getExtension("image.PNG") should return "PNG".
Waiting:4. getExtension(".gitignore") should return "gitignore".
Waiting:5. getExtension("archive.tar.gz") should return "gz".
Waiting:6. getExtension("final.draft.") should return "none".
*/

describe("Extension Extractor", () => {
  it('should return "txt" for "document.txt"', () => {
    expect(getExtension("document.txt")).toBe("txt");
  });

  it('should return "none" for "README"', () => {
    expect(getExtension("README")).toBe("none");
  });

  it('should return "PNG" for "image.PNG"', () => {
    expect(getExtension("image.PNG")).toBe("PNG");
  });

  it('should return "gitignore" for ".gitignore"', () => {
    expect(getExtension(".gitignore")).toBe("gitignore");
  });

  it('should return "gz" for "archive.tar.gz"', () => {
    expect(getExtension("archive.tar.gz")).toBe("gz");
  });

  it('should return "none" for "final.draft."', () => {
    expect(getExtension("final.draft.")).toBe("none");
  });
});

import generateSlug from "./slug-generator";

/**
 Tests
1. generateSlug("helloWorld") should return "helloworld".
2. generateSlug("hello world!") should return "hello%20world".
3. generateSlug(" hello-world ") should return "helloworld".
4. generateSlug("hello  world") should return "hello%20world".
5. generateSlug("  ?H^3-1*1]0! W[0%R#1]D  ") should return "h3110%20w0r1d".
 */

describe("Slug Generator", () => {
  it("test case 1", () => {
    expect(generateSlug("helloWorld")).toBe("helloworld");
  });

  it("test case 2", () => {
    expect(generateSlug("hello world!")).toBe("hello%20world");
  });

  it("test case 3", () => {
    expect(generateSlug(" hello-world ")).toBe("helloworld");
  });
  it("test case 4", () => {
    expect(generateSlug("hello  world")).toBe("hello%20world");
  });
  it("test case 5", () => {
    expect(generateSlug("  ?H^3-1*1]0! W[0%R#1]D  ")).toBe("h3110%20w0r1d");
  });
});

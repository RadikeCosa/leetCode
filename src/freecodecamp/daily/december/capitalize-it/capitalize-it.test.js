import capitalizeIt from "./capitalize-it";

/**
 Capitalize It
Given a string title, return a new string formatted in title case using the following rules:

Capitalize the first letter of each word.
Make all other letters in each word lowercase.
Words are always separated by a single space.
Tests
1. titleCase("hello world") should return "Hello World".
2. titleCase("the quick brown fox") should return "The Quick Brown Fox".
3. titleCase("JAVASCRIPT AND PYTHON") should return "Javascript And Python".
4. titleCase("AvOcAdO tOAst fOr brEAkfAst") should return "Avocado Toast For Breakfast".
 */

describe("Capitalize It", () => {
  it("should manage test case 1", () => {
    expect(capitalizeIt("hello world")).toBe("Hello World");
  });

  it("should manage test case 2", () => {
    expect(capitalizeIt("the quick brown fox")).toBe("The Quick Brown Fox");
  });

  it("should manage test case 3", () => {
    expect(capitalizeIt("JAVASCRIPT AND PYTHON")).toBe("Javascript And Python");
  });
  it("should manage test case 4", () => {
    expect(capitalizeIt("AvOcAdO tOAst fOr brEAkfAst")).toBe(
      "Avocado Toast For Breakfast"
    );
  });
});

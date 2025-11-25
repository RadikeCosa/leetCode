import oneHundred from "./100-characters";
import { describe, it, expect } from "vitest";

/**
1. oneHundred("One hundred ") should return "One hundred One hundred One hundred One hundred One hundred One hundred One hundred One hundred One ".
2. oneHundred("freeCodeCamp ") should return "freeCodeCamp freeCodeCamp freeCodeCamp freeCodeCamp freeCodeCamp freeCodeCamp freeCodeCamp freeCodeC".
3. oneHundred("daily challenges ") should return "daily challenges daily challenges daily challenges daily challenges daily challenges daily challenge".
4. oneHundred("!") should return "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!".
*/

describe("100 Characters", () => {
  it('should return "One hundred One hundred One hundred One hundred One hundred One hundred One hundred One hundred One " for input "One hundred "', () => {
    expect(oneHundred("One hundred ")).toBe(
      "One hundred One hundred One hundred One hundred One hundred One hundred One hundred One hundred One "
    );
  });

  it('should return "freeCodeCamp freeCodeCamp freeCodeCamp freeCodeCamp freeCodeCamp freeCodeCamp freeCodeCamp freeCodeC" for input "freeCodeCamp "', () => {
    expect(oneHundred("freeCodeCamp ")).toBe(
      "freeCodeCamp freeCodeCamp freeCodeCamp freeCodeCamp freeCodeCamp freeCodeCamp freeCodeCamp freeCodeC"
    );
  });

  it('should return "daily challenges daily challenges daily challenges daily challenges daily challenges daily challenge" for input "daily challenges "', () => {
    expect(oneHundred("daily challenges ")).toBe(
      "daily challenges daily challenges daily challenges daily challenges daily challenges daily challenge"
    );
  });

  it('should return "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!" for input "!"', () => {
    expect(oneHundred("!")).toBe(
      "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
    );
  });
});

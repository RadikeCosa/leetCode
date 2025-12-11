import isPangram from "./pangram";
import { describe, it, expect } from "vitest";

/**
 Pangram
Given a word or sentence and a string of lowercase letters, determine if the word or sentence uses all the letters from the given set at least once and no other letters.

Ignore non-alphabetical characters in the word or sentence.
Ignore letter casing in the word or sentence.

Tests
1. isPangram("hello", "helo") should return true
2. isPangram("hello", "hel") should return false
3. isPangram("hello", "helow") should return false
4. isPangram("hello world", "helowrd") should return true
5. isPangram("Hello World!", "helowrd") should return true
6. isPangram("Hello World!", "heliowrd") should return false
7. isPangram("freeCodeCamp", "frcdmp") should return false
8. isPangram("The quick brown fox jumps over the lazy dog.", "abcdefghijklmnopqrstuvwxyz") should return true
 */

describe("Pangram", () => {
  it("isPangram('hello', 'helo') should return true", () => {
    expect(isPangram("hello", "helo")).toBe(true);
  });

  it("isPangram('hello', 'hel') should return false", () => {
    expect(isPangram("hello", "hel")).toBe(false);
  });

  it("isPangram('hello', 'helow') should return false", () => {
    expect(isPangram("hello", "helow")).toBe(false);
  });

  it("isPangram('hello world', 'helowrd') should return true", () => {
    expect(isPangram("hello world", "helowrd")).toBe(true);
  });
  it("isPangram('Hello World!', 'helowrd') should return true", () => {
    expect(isPangram("Hello World!", "helowrd")).toBe(true);
  });

  it("isPangram('Hello World!', 'heliowrd') should return false", () => {
    expect(isPangram("Hello World!", "heliowrd")).toBe(false);
  });

  it("isPangram('freeCodeCamp', 'frcdmp') should return false", () => {
    expect(isPangram("freeCodeCamp", "frcdmp")).toBe(false);
  });
  it("isPangram('The quick brown fox jumps over the lazy dog.', 'abcdefghijklmnopqrstuvwxyz') should return true", () => {
    expect(
      isPangram(
        "The quick brown fox jumps over the lazy dog.",
        "abcdefghijklmnopqrstuvwxyz"
      )
    ).toBe(true);
  });
});

/**
 * FreeCodeCamp Problem: Jumbled Text
 * Category: Daily
 *
 * Given a string, return a jumbled version of that string where each word is transformed using the following constraints:
 *
 * The first and last letters of the words remain in place
 * All letters between the first and last letter are sorted alphabetically.
 * The input strings will contain no punctuation, and will be entirely lowercase.
 *
 * Tests:
 * 1. jbelmu("hello world") should return "hello wlord".
 * 2. jbelmu("i love jumbled text") should return "i love jbelmud text".
 * 3. jbelmu("freecodecamp is my favorite place to learn to code") should return "faccdeeemorp is my faiortve pacle to laern to cdoe".
 * 4. jbelmu("the quick brown fox jumps over the lazy dog") should return "the qciuk borwn fox jmpus oevr the lazy dog".
 */

import { describe, it, expect } from "vitest";
import jbelmu from "./jumbled-text.js";

describe("Jumbled Text", () => {
  it("should return 'hello wlord' for input 'hello world'", () => {
    expect(jbelmu("hello world")).toBe("hello wlord");
  });

  it("should return 'i love jbelmud text' for input 'i love jumbled text'", () => {
    expect(jbelmu("i love jumbled text")).toBe("i love jbelmud text");
  });

  it("should return 'faccdeeemorp is my faiortve pacle to laern to cdoe' for input 'freecodecamp is my favorite place to learn to code'", () => {
    expect(jbelmu("freecodecamp is my favorite place to learn to code")).toBe(
      "faccdeeemorp is my faiortve pacle to laern to cdoe"
    );
  });

  it("should return 'the qciuk borwn fox jmpus oevr the lazy dog' for input 'the quick brown fox jumps over the lazy dog'", () => {
    expect(jbelmu("the quick brown fox jumps over the lazy dog")).toBe(
      "the qciuk borwn fox jmpus oevr the lazy dog"
    );
  });
});

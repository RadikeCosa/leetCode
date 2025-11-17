import isMatch from "./is-match";
import { describe, it, expect } from "vitest";

/**
1. isMatch("helloworld", "helloworld") should return true.
2. isMatch("helloworld", "helloworlds") should return false.
3. isMatch("helloworld", "jelloworld") should return true.
4. isMatch("thequickbrownfoxjumpsoverthelazydog", "thequickbrownfoxjumpsoverthelazydog") should return true.
5. isMatch("theslickbrownfoxjumpsoverthelazydog", "thequickbrownfoxjumpsoverthehazydog") should return true.
6. isMatch("thequickbrownfoxjumpsoverthelazydog", "thequickbrownfoxjumpsoverthehazycat") should return false.
 */

describe("Is Match", () => {
  it("should return true for identical strings", () => {
    expect(isMatch("helloworld", "helloworld")).toBe(true);
  });

  it("should return false for strings of different lengths", () => {
    expect(isMatch("helloworld", "helloworlds")).toBe(false);
  });

  it("should return true for strings differing by one character within 10% threshold", () => {
    expect(isMatch("helloworld", "jelloworld")).toBe(true);
  });

  it("should return true for identical long strings", () => {
    expect(
      isMatch(
        "thequickbrownfoxjumpsoverthelazydog",
        "thequickbrownfoxjumpsoverthelazydog"
      )
    ).toBe(true);
  });

  it("should return true for long strings differing by a few characters within 10% threshold", () => {
    expect(
      isMatch(
        "theslickbrownfoxjumpsoverthelazydog",
        "thequickbrownfoxjumpsoverthehazydog"
      )
    ).toBe(true);
  });

  it("should return false for long strings differing by more than 10% threshold", () => {
    expect(
      isMatch(
        "thequickbrownfoxjumpsoverthelazydog",
        "thequickbrownfoxjumpsoverthehazycat"
      )
    ).toBe(false);
  });
});

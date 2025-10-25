/**
 * FreeCodeCamp Problem: String Mirror
 * Given two strings, determine if the second string is a mirror of the first.
 *
 * A string is considered a mirror if it contains the same letters in reverse order.
 * Treat uppercase and lowercase letters as distinct.
 * Ignore all non-alphabetical characters.
 *
 * Tests:
 * 1. isMirror("helloworld", "helloworld") should return false.
 * 2. isMirror("Hello World", "dlroW olleH") should return true.
 * 3. isMirror("RaceCar", "raCecaR") should return true.
 * 4. isMirror("RaceCar", "RaceCar") should return false.
 * 5. isMirror("Mirror", "rorrim") should return false.
 * 6. isMirror("Hello World", "dlroW-olleH") should return true.
 * 7. isMirror("Hello World", "!dlroW !olleH") should return true.
 */
import isMirror from "./string-mirror.js";
import { describe, it, expect } from "vitest";

describe("String Mirror", () => {
  it('should return false for isMirror("helloworld", "helloworld")', () => {
    expect(isMirror("helloworld", "helloworld")).toBe(false);
  });
  it('should return true for isMirror("Hello World", "dlroW olleH")', () => {
    expect(isMirror("Hello World", "dlroW olleH")).toBe(true);
  });
  it('should return true for isMirror("RaceCar", "raCecaR")', () => {
    expect(isMirror("RaceCar", "raCecaR")).toBe(true);
  });
  it('should return false for isMirror("RaceCar", "RaceCar")', () => {
    expect(isMirror("RaceCar", "RaceCar")).toBe(false);
  });
  it('should return false for isMirror("Mirror", "rorrim")', () => {
    expect(isMirror("Mirror", "rorrim")).toBe(false);
  });
  it('should return true for isMirror("Hello World", "dlroW-olleH")', () => {
    expect(isMirror("Hello World", "dlroW-olleH")).toBe(true);
  });
  it('should return true for isMirror("Hello World", "!dlroW !olleH")', () => {
    expect(isMirror("Hello World", "!dlroW !olleH")).toBe(true);
  });
});

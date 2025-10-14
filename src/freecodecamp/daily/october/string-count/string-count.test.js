/**
 * FreeCodeCamp Problem: String Count
 * Category: Daily
 * Difficulty: Easy
 * Topics: Strings, Algorithms
 *
 * Given two strings, determine how many times the second string appears in the first.
 *
 * The pattern string can overlap in the first string. For example, "aaa" contains "aa" twice. The first two a's and the second two a's.
 *
 * Examples:
 * count('abcdefg', 'def') should return 1.
 * count('hello', 'world') should return 0.
 * count('mississippi', 'iss') should return 2.
 * count('she sells seashells by the seashore', 'sh') should return 3.
 * count('101010101010101010101', '101') should return 10.
 */
import { describe, it, expect } from "vitest";
import count from "./string-count.js";

describe("String Count", () => {
  it("should return 1 when 'def' is in 'abcdefg'", () => {
    expect(count("abcdefg", "def")).toBe(1);
  });
  it("should return 0 when 'world' is in 'hello'", () => {
    expect(count("hello", "world")).toBe(0);
  });
  it("should return 2 when 'iss' is in 'mississippi'", () => {
    expect(count("mississippi", "iss")).toBe(2);
  });
  it("should return 3 when 'sh' is in 'she sells seashells by the seashore'", () => {
    expect(count("she sells seashells by the seashore", "sh")).toBe(3);
  });
  it("should return 10 when '101' is in '101010101010101010101'", () => {
    expect(count("101010101010101010101", "101")).toBe(10);
  });
});

import count from "./vowels-and-consonants";
import { describe, it, expect } from "vitest";
/**
 * TODO: Add complete problem statement here
 *
 * Problem statement word-for-word:
 *
 * 1. count("Hello World") should return [3, 7].
 * 2. count("JavaScript") should return [3, 7].
 * 3. count("Python") should return [1, 5].
 * 4. count("freeCodeCamp") should return [5, 7].
 * 5. count("Hello, World!") should return [3, 7].
 * 6. count("The quick brown fox jumps over the lazy dog.") should return [11, 24].
 *
 */

describe("Vowels And Consonants", () => {
  it("should return [3,7] for input 'Hello World'", () => {
    expect(count("Hello World")).toEqual([3, 7]);
  });
  it("should return [3,7] for input 'JavaScript'", () => {
    expect(count("JavaScript")).toEqual([3, 7]);
  });
  it("should return [1,5] for input 'Python'", () => {
    expect(count("Python")).toEqual([1, 5]);
  });
  it("should return [5,7] for input 'freeCodeCamp'", () => {
    expect(count("freeCodeCamp")).toEqual([5, 7]);
  });
  it("should return [3,7] for input 'Hello, World!'", () => {
    expect(count("Hello, World!")).toEqual([3, 7]);
  });
  it("should return [11,24] for input 'The quick brown fox jumps over the lazy dog.'", () => {
    expect(count("The quick brown fox jumps over the lazy dog.")).toEqual([
      11, 24,
    ]);
  });
});

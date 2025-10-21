/**
 * Tests for Longest Word
 *
 * Problem Statement:
 * Given a sentence, return the longest word in the sentence.
 *
 * Rules:
 * - Ignore periods (.) when determining word length
 * - If multiple words are ties for the longest, return the first one that occurs
 *
 * Test Cases:
 * 1. getLongestWord("coding is fun") should return "coding"
 * 2. getLongestWord("Coding challenges are fun and educational.") should return "educational"
 * 3. getLongestWord("This sentence has multiple long words.") should return "sentence"
 */

import { it, describe, expect } from "vitest";
import getLongestWord from "./longest-word.js";

describe("Longest Word", () => {
  it('should return "coding" for the input "coding is fun"', () => {
    expect(getLongestWord("coding is fun")).toBe("coding");
  });
  it('should return "educational" for the input "Coding challenges are fun and educational."', () => {
    expect(getLongestWord("Coding challenges are fun and educational.")).toBe(
      "educational"
    );
  });
});

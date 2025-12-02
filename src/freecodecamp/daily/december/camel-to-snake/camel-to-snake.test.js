import toSnake from "./camel-to-snake";
import { describe, it, expect, should } from "vitest";
/**
 * Camel to Snake
Given a string in camel case, return the snake case version of the string using the following rules:

The input string will contain only letters (A-Z and a-z) and will always start with a lowercase letter.
Every uppercase letter in the camel case string starts a new word.
Convert all letters to lowercase.
Separate words with an underscore (_).

Tests
1. toSnake("helloWorld") should return "hello_world".
2. toSnake("myVariableName") should return "my_variable_name".
3. toSnake("freecodecampDailyChallenges") should return "freecodecamp_daily_challenges".
 */

describe("Camel To Snake", () => {
  it("should convert camel case to snake case", () => {
    expect(toSnake("helloWorld")).toBe("hello_world");
  });

  it("should convert camel case to snake case", () => {
    expect(toSnake("myVariableName")).toBe("my_variable_name");
  });

  it("should convert camel case to snake case", () => {
    expect(toSnake("freecodecampDailyChallenges")).toBe(
      "freecodecamp_daily_challenges"
    );
  });
});

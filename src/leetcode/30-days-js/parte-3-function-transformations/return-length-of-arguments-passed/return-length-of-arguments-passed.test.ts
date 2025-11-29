/**
 * LeetCode Problem 2703: Return Length of Arguments Passed
 *
 * Write a function argumentsLength that returns the count of arguments passed to it.
 *
 * Example 1:
 * Input: args = [5]
 * Output: 1
 * Explanation: argumentsLength(5); // 1
 * One value was passed to the function so it should return 1.
 *
 * Example 2:
 * Input: args = [{}, null, "3"]
 * Output: 3
 * Explanation: argumentsLength({}, null, "3"); // 3
 * Three values were passed to the function so it should return 3.
 *
 * Constraints:
 * - args is a valid JSON array
 * - 0 <= args.length <= 100
 */

import { describe, it, expect } from "vitest";
import { argumentsLength } from "./return-length-of-arguments-passed";

describe("Return Length of Arguments Passed", () => {
  it("should return 1 for single argument - example 1", () => {
    const result = argumentsLength(5);
    expect(result).toBe(1);
  });

  it("should return 3 for three arguments - example 2", () => {
    const result = argumentsLength({}, null, "3");
    expect(result).toBe(3);
  });

  it("should return 0 for no arguments", () => {
    const result = argumentsLength();
    expect(result).toBe(0);
  });

  it("should handle multiple different types", () => {
    const result = argumentsLength(1, "hello", true, [], {}, null, undefined);
    expect(result).toBe(7);
  });

  it("should handle maximum constraint (100 args)", () => {
    const args = new Array(100).fill(0);
    const result = argumentsLength(...args);
    expect(result).toBe(100);
  });

  it("should handle various data types", () => {
    const result = argumentsLength(
      42,
      "string",
      true,
      false,
      null,
      undefined,
      [1, 2, 3],
      { key: "value" },
      function () {},
      Symbol("test")
    );
    expect(result).toBe(10);
  });
});

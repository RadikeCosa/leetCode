/**
 * LeetCode Problem 2629: Function Composition
 *
 * Given an array of functions [f1, f2, f3, ..., fn], return a new function fn
 * that is the function composition of the array of functions.
 *
 * The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).
 * The function composition of an empty list of functions is the identity function f(x) = x.
 * You may assume each function in the array accepts one integer as input and returns one integer as output.
 *
 * Example 1:
 * Input: functions = [x => x + 1, x => x * x, x => 2 * x], x = 4
 * Output: 65
 * Explanation:
 * Evaluating from right to left ...
 * Starting with x = 4.
 * 2 * (4) = 8
 * (8) * (8) = 64
 * (64) + 1 = 65
 *
 * Example 2:
 * Input: functions = [x => 10 * x, x => 10 * x, x => 10 * x], x = 1
 * Output: 1000
 * Explanation:
 * Evaluating from right to left ...
 * 10 * (1) = 10
 * 10 * (10) = 100
 * 10 * (100) = 1000
 *
 * Example 3:
 * Input: functions = [], x = 42
 * Output: 42
 * Explanation:
 * The composition of zero functions is the identity function
 *
 * Constraints:
 * - -1000 <= x <= 1000
 * - 0 <= functions.length <= 1000
 * - all functions accept and return a single integer
 */

import { describe, it, expect } from "vitest";
import { compose } from "./function-composition";

describe("Function Composition", () => {
  it("should compose functions from right to left - example 1", () => {
    const functions = [
      (x: number) => x + 1,
      (x: number) => x * x,
      (x: number) => 2 * x,
    ];
    const composedFn = compose(functions);
    const result = composedFn(4);
    expect(result).toBe(65);
    // 4 -> 2*4=8 -> 8*8=64 -> 64+1=65
  });

  it("should compose multiple identical functions - example 2", () => {
    const functions = [
      (x: number) => 10 * x,
      (x: number) => 10 * x,
      (x: number) => 10 * x,
    ];
    const composedFn = compose(functions);
    const result = composedFn(1);
    expect(result).toBe(1000);
    // 1 -> 10*1=10 -> 10*10=100 -> 10*100=1000
  });

  it("should return identity function for empty array - example 3", () => {
    const functions: ((x: number) => number)[] = [];
    const composedFn = compose(functions);
    const result = composedFn(42);
    expect(result).toBe(42);
  });

  it("should handle single function", () => {
    const functions = [(x: number) => x * 2];
    const composedFn = compose(functions);
    const result = composedFn(5);
    expect(result).toBe(10);
  });

  it("should handle negative numbers", () => {
    const functions = [(x: number) => x + 10, (x: number) => x * -1];
    const composedFn = compose(functions);
    const result = composedFn(5);
    expect(result).toBe(5); // 5 -> -5 -> -5+10 = 5
  });

  it("should handle boundary values", () => {
    const functions = [(x: number) => x];
    const composedFn = compose(functions);

    expect(composedFn(1000)).toBe(1000);
    expect(composedFn(-1000)).toBe(-1000);
    expect(composedFn(0)).toBe(0);
  });
});

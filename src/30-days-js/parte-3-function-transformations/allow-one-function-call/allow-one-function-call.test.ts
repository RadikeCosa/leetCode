/**
 * LeetCode Problem 2666: Allow One Function Call
 *
 * Given a function fn, return a new function that is identical to the original function
 * except that it ensures fn is called at most once.
 *
 * - The first time the returned function is called, it should return the same result as fn.
 * - Every subsequent time it is called, it should return undefined.
 *
 * Example 1:
 * Input: fn = (a,b,c) => (a + b + c), calls = [[1,2,3],[2,3,6]]
 * Output: [{"calls":1,"value":6}]
 * Explanation:
 * const onceFn = once(fn);
 * onceFn(1, 2, 3); // 6
 * onceFn(2, 3, 6); // undefined, fn was not called
 *
 * Example 2:
 * Input: fn = (a,b,c) => (a * b * c), calls = [[5,7,4],[2,3,6],[4,6,8]]
 * Output: [{"calls":1,"value":140}]
 * Explanation:
 * const onceFn = once(fn);
 * onceFn(5, 7, 4); // 140
 * onceFn(2, 3, 6); // undefined, fn was not called
 * onceFn(4, 6, 8); // undefined, fn was not called
 *
 * Constraints:
 * - calls is a valid JSON array
 * - 1 <= calls.length <= 10
 * - 1 <= calls[i].length <= 100
 * - 2 <= JSON.stringify(calls).length <= 1000
 */

import { describe, it, expect } from "vitest";
import { once } from "./allow-one-function-call";

describe("Allow One Function Call", () => {
  it("should return result on first call and undefined on subsequent calls - example 1", () => {
    const fn = (a: number, b: number, c: number) => a + b + c;
    const onceFn = once(fn);

    // First call should return the result
    expect(onceFn(1, 2, 3)).toBe(6);

    // Subsequent calls should return undefined
    expect(onceFn(2, 3, 6)).toBeUndefined();
    expect(onceFn(1, 1, 1)).toBeUndefined();
  });

  it("should work with multiplication function - example 2", () => {
    const fn = (a: number, b: number, c: number) => a * b * c;
    const onceFn = once(fn);

    // First call should return the result
    expect(onceFn(5, 7, 4)).toBe(140);

    // Subsequent calls should return undefined
    expect(onceFn(2, 3, 6)).toBeUndefined();
    expect(onceFn(4, 6, 8)).toBeUndefined();
  });

  it("should work with no-argument function", () => {
    const fn = () => "hello world";
    const onceFn = once(fn);

    expect(onceFn()).toBe("hello world");
    expect(onceFn()).toBeUndefined();
  });

  it("should work with single argument function", () => {
    const fn = (x: number) => x * 2;
    const onceFn = once(fn);

    expect(onceFn(5)).toBe(10);
    expect(onceFn(10)).toBeUndefined();
  });

  it("should preserve function that returns falsy values", () => {
    const fn = () => 0;
    const onceFn = once(fn);

    expect(onceFn()).toBe(0);
    expect(onceFn()).toBeUndefined();
  });

  it("should work with functions that return undefined", () => {
    const fn = () => undefined;
    const onceFn = once(fn);

    expect(onceFn()).toBeUndefined();
    // Second call should still be undefined, but for different reason
    expect(onceFn()).toBeUndefined();
  });

  it("should handle complex return types", () => {
    const fn = (name: string) => ({ greeting: `Hello ${name}` });
    const onceFn = once(fn);

    expect(onceFn("Alice")).toEqual({ greeting: "Hello Alice" });
    expect(onceFn("Bob")).toBeUndefined();
  });
});

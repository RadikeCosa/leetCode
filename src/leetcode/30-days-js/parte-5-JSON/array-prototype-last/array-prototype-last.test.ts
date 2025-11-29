/**
 * LeetCode Problem 2619: Array Prototype Last
 * Difficulty: Easy
 * Topics: Array, JavaScript
 *
 * Write code that enhances all arrays such that you can call the array.last()
 * method on any array and it will return the last element. If there are no
 * elements in the array, it should return -1.
 *
 * You may assume the array is the output of JSON.parse.
 *
 * Example 1:
 * Input: nums = [null, {}, 3]
 * Output: 3
 * Explanation: Calling nums.last() should return the last element: 3.
 *
 * Example 2:
 * Input: nums = []
 * Output: -1
 * Explanation: Because there are no elements, return -1.
 *
 * Constraints:
 * - arr is a valid JSON array
 * - 0 <= arr.length <= 1000
 *
 * Hints:
 * - Inside the Array.prototype.last function body, you have access to the "this" keyword. "this" is equal to the contents of the array in this case.
 * - You can access elements in the array via this[0], this[1], etc. You can also access properties and method like this.length, this.forEach, etc.
 */
import { describe, it, expect } from "vitest";
import "./array-prototype-last";

describe("Array Prototype Last", () => {
  it("should return the last element of the array, 3 in example 1 ", () => {
    const nums = [null, {}, 3];
    expect(nums.last()).toBe(3);
  });

  it("should return -1 for an empty array", () => {
    const emptyArray: any[] = [];
    expect(emptyArray.last()).toBe(-1);
  });
  it("should return the last element of a single-element array", () => {
    const singleElementArray = [42];
    expect(singleElementArray.last()).toBe(42);
  });
  it("should handle undefined elements correctly", () => {
    const arrayWithUndefined = [1, 2, undefined];
    expect(arrayWithUndefined.last()).toBe(undefined);
  });
  it("should handle null elements correctly", () => {
    const arrayWithNull = [1, 2, null];
    expect(arrayWithNull.last()).toBe(null);
  });
  it("should return the last element of a number array", () => {
    const numberArray = [1, 2, 3];
    expect(numberArray.last()).toBe(3);
  });
  it("should return the last element of a string array", () => {
    const stringArray = ["a", "b", "c"];
    expect(stringArray.last()).toBe("c");
  });
  it("should return the last element of a mixed array", () => {
    const mixedArray = [1, "two", { three: 3 }, [4]];
    expect(mixedArray.last()).toEqual([4]);
  });
  it("should handle complex objects", () => {
    const complexArray = [{ a: 1 }, { b: 2 }, { c: 3 }];
    expect(complexArray.last()).toEqual({ c: 3 });
  });
});

/**
 * LeetCode Problem 2635: Apply Transform Over Each Element in Array
 *
 * Given an integer array arr and a mapping function fn, return a new array
 * with a transformation applied to each element.
 * The returned array should be created such that returnedArray[i] = fn(arr[i], i).
 * Please solve it without the built-in Array.map method.
 *
 * Example 1:
 * Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
 * Output: [2,3,4]
 * Explanation: The function increases each value in the array by one.
 *
 * Example 2:
 * Input: arr = [1,2,3], fn = function plusI(n, i) { return n + i; }
 * Output: [1,3,5]
 * Explanation: The function increases each value by the index it resides in.
 *
 * Example 3:
 * Input: arr = [10,20,30], fn = function constant() { return 42; }
 * Output: [42,42,42]
 * Explanation: The function always returns 42.
 *
 * Constraints:
 * - 0 <= arr.length <= 1000
 * - -10^9 <= arr[i] <= 10^9
 * - fn returns an integer
 */
import { describe, it, expect } from "vitest";
import { map } from "./apply-transform-over-each-element-in-array";
describe("Apply Transform Over Each Element in Array", () => {
    it("should apply plusone function correctly", () => {
        const arr = [1, 2, 3];
        const fn = function plusone(n) {
            return n + 1;
        };
        const result = map(arr, fn);
        expect(result).toEqual([2, 3, 4]);
    });
    it("should apply function that uses index", () => {
        const arr = [1, 2, 3];
        const fn = function plusI(n, i) {
            return n + i;
        };
        const result = map(arr, fn);
        expect(result).toEqual([1, 3, 5]);
    });
    it("should apply constant function", () => {
        const arr = [10, 20, 30];
        const fn = function constant() {
            return 42;
        };
        const result = map(arr, fn);
        expect(result).toEqual([42, 42, 42]);
    });
    it("should handle empty array", () => {
        const arr = [];
        const fn = function plusone(n) {
            return n + 1;
        };
        const result = map(arr, fn);
        expect(result).toEqual([]);
    });
    it("should handle single element array", () => {
        const arr = [5];
        const fn = function double(n) {
            return n * 2;
        };
        const result = map(arr, fn);
        expect(result).toEqual([10]);
    });
    it("should handle negative numbers", () => {
        const arr = [-1, -2, -3];
        const fn = function abs(n) {
            return Math.abs(n);
        };
        const result = map(arr, fn);
        expect(result).toEqual([1, 2, 3]);
    });
    it("should handle large numbers within constraints", () => {
        const arr = [1000000000, -1000000000];
        const fn = function identity(n) {
            return n;
        };
        const result = map(arr, fn);
        expect(result).toEqual([1000000000, -1000000000]);
    });
});

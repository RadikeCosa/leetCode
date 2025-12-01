/**
 * LeetCode Problem 2634: Filter Elements from Array
 *
 * Given an integer array arr and a filtering function fn, return a filtered array filteredArr.
 * The fn function takes one or two arguments: arr[i] and i (index).
 * filteredArr should only contain elements from arr for which fn(arr[i], i) evaluates to a truthy value.
 * Please solve it without the built-in Array.filter method.
 *
 * Example 1:
 * Input: arr = [0,10,20,30], fn = function greaterThan10(n) { return n > 10; }
 * Output: [20,30]
 * Explanation: The function filters out values that are not greater than 10
 *
 * Example 2:
 * Input: arr = [1,2,3], fn = function firstIndex(n, i) { return i === 0; }
 * Output: [1]
 * Explanation: fn can also accept the index. The function removes elements not at index 0
 *
 * Example 3:
 * Input: arr = [-2,-1,0,1,2], fn = function plusOne(n) { return n + 1 }
 * Output: [-2,0,1,2]
 * Explanation: Falsey values such as 0 should be filtered out
 *
 * Constraints:
 * - 0 <= arr.length <= 1000
 * - -10^9 <= arr[i] <= 10^9
 */
import { describe, it, expect } from "vitest";
import { filter } from "./filter-elements-from-array";
describe("Filter Elements from Array", () => {
    it("should filter values greater than 10", () => {
        const arr = [0, 10, 20, 30];
        const fn = function greaterThan10(n) {
            return n > 10;
        };
        const result = filter(arr, fn);
        expect(result).toEqual([20, 30]);
    });
    it("should filter by index position", () => {
        const arr = [1, 2, 3];
        const fn = function firstIndex(n, i) {
            return i === 0;
        };
        const result = filter(arr, fn);
        expect(result).toEqual([1]);
    });
    it("should filter out falsy values", () => {
        const arr = [-2, -1, 0, 1, 2];
        const fn = function plusOne(n) {
            return n + 1;
        };
        const result = filter(arr, fn);
        expect(result).toEqual([-2, 0, 1, 2]);
    });
    it("should handle empty array", () => {
        const arr = [];
        const fn = function alwaysTrue() {
            return true;
        };
        const result = filter(arr, fn);
        expect(result).toEqual([]);
    });
    it("should handle all elements being filtered out", () => {
        const arr = [1, 2, 3, 4, 5];
        const fn = function alwaysFalse() {
            return false;
        };
        const result = filter(arr, fn);
        expect(result).toEqual([]);
    });
    it("should handle all elements passing filter", () => {
        const arr = [1, 2, 3, 4, 5];
        const fn = function alwaysTrue() {
            return true;
        };
        const result = filter(arr, fn);
        expect(result).toEqual([1, 2, 3, 4, 5]);
    });
    it("should handle even numbers filter", () => {
        const arr = [1, 2, 3, 4, 5, 6];
        const fn = function isEven(n) {
            return n % 2 === 0;
        };
        const result = filter(arr, fn);
        expect(result).toEqual([2, 4, 6]);
    });
    it("should handle truthy and falsy values correctly", () => {
        const arr = [0, 1, -1, 5];
        const fn = function identity(n) {
            return n;
        };
        const result = filter(arr, fn);
        expect(result).toEqual([1, -1, 5]); // 0 is falsy, others are truthy
    });
    it("should handle negative numbers", () => {
        const arr = [-5, -3, -1, 1, 3, 5];
        const fn = function positive(n) {
            return n > 0;
        };
        const result = filter(arr, fn);
        expect(result).toEqual([1, 3, 5]);
    });
    it("should handle index-based filtering with multiple conditions", () => {
        const arr = [10, 20, 30, 40, 50];
        const fn = function evenIndexAndGreaterThan25(n, i) {
            return i % 2 === 0 && n > 25;
        };
        const result = filter(arr, fn);
        expect(result).toEqual([30, 50]); // indices 2 and 4, values > 25
    });
});

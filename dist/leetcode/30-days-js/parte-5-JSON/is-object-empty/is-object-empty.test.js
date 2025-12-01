/**
 * LeetCode Problem 2727: Is Object Empty
 * Difficulty: Easy
 * Topics: JSON
 *
 * Given an object or an array, return if it is empty.
 *
 * • An empty object contains no key-value pairs.
 * • An empty array contains no elements.
 *
 * You may assume the object or array is the output of JSON.parse.
 *
 * Example 1:
 * Input: obj = {"x": 5, "y": 42}
 * Output: false
 * Explanation: The object has 2 key-value pairs so it is not empty.
 *
 * Example 2:
 * Input: obj = {}
 * Output: true
 * Explanation: The object doesn't have any key-value pairs so it is empty.
 *
 * Example 3:
 * Input: obj = [null, false, 0]
 * Output: false
 * Explanation: The array has 3 elements so it is not empty.
 *
 * Constraints:
 * - obj is a valid JSON object or array
 * - 2 <= JSON.stringify(obj).length <= 10^5
 *
 * Can you solve it in O(1) time?
 */
import { describe, it, expect } from "vitest";
import { isEmpty } from "./is-object-empty";
describe("Is Object Empty", () => {
    it("should return false on first example", () => {
        expect(isEmpty({ x: 5, y: 42 })).toBe(false);
    });
    it("should return true on second example", () => {
        expect(isEmpty({})).toBe(true);
    });
    it("should return false on third example", () => {
        expect(isEmpty([null, false, 0])).toBe(false);
    });
});

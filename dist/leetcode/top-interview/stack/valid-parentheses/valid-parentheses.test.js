/**
 * LeetCode Problem 20: Valid Parentheses
 * Difficulty: Easy
 * Topics: String, Stack
 *
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 *
 * An input string is valid if:
 * 1. Open brackets must be closed by the same type of brackets.
 * 2. Open brackets must be closed in the correct order.
 * 3. Every close bracket has a corresponding open bracket of the same type.
 *
 * Example 1:
 * Input: s = "()"
 * Output: true
 *
 * Example 2:
 * Input: s = "()[]{}"
 * Output: true
 *
 * Example 3:
 * Input: s = "(]"
 * Output: false
 *
 * Example 4:
 * Input: s = "([])"
 * Output: true
 *
 * Example 5:
 * Input: s = "([)]"
 * Output: false
 *
 * Constraints:
 * - 1 <= s.length <= 10^4
 * - s consists of parentheses only '()[]{}'.
 *
 * Hints:
 * - Hint 1: Use a stack of characters.
 * - Hint 2: When you encounter an opening bracket, push it to the top of the stack.
 * - Hint 3: When you encounter a closing bracket, check if the top of the stack was the opening for it. If yes, pop it from the stack. Otherwise, return false.
 */
import { describe, it, expect } from "vitest";
import { isValid } from "./valid-parentheses";
describe("Valid Parentheses", () => {
    it("Should return true for input '()'", () => {
        expect(isValid("()")).toBe(true);
    });
    it("Should return true for input '()[]{}'", () => {
        expect(isValid("()[]{}")).toBe(true);
    });
    it("Should return false for input '(]'", () => {
        expect(isValid("(]")).toBe(false);
    });
    it("Should return true for input '([])'", () => {
        expect(isValid("([])")).toBe(true);
    });
    it("Should return false for input '([)]'", () => {
        expect(isValid("([)]")).toBe(false);
    });
});

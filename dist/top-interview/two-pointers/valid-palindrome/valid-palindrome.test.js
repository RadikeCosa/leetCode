import { describe, it, expect } from "vitest";
import { isPalindrome } from "./valid-palindrome";
/*
LeetCode Problem: 125. Valid Palindrome
Top Interview 150: Two Pointers
Difficulty: Easy
Topics: Two Pointers, String

A phrase is a palindrome if, after converting all uppercase letters into lowercase
letters and removing all non-alphanumeric characters, it reads the same forward and backward.

Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

Examples:
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.

Constraints:
- 1 <= s.length <= 2 * 10^5
- s consists only of printable ASCII characters.

Follow up: Could you solve it without using additional memory for string transformation?
*/
describe("Valid Palindrome", () => {
    it("Should return true for A man, a plan, a canal: Panama", () => {
        const s = "A man, a plan, a canal: Panama";
        const result = isPalindrome(s);
        expect(result).toBe(true);
    });
    it("Should return false for race a car", () => {
        const s = "race a car";
        const result = isPalindrome(s);
        expect(result).toBe(false);
    });
    it("Should return true for empty string", () => {
        const s = "";
        const result = isPalindrome(s);
        expect(result).toBe(true);
    });
});

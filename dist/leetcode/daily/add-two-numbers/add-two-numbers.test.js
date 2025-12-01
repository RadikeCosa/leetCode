/**
 * LeetCode Problem 2: Add Two Numbers
 * Difficulty: Medium
 * Topics: Linked List, Math, Recursion
 *
 * You are given two non-empty linked lists representing two non-negative integers.
 * The digits are stored in reverse order, and each of their nodes contains a single digit.
 * Add the two numbers and return the sum as a linked list.
 *
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 *
 * Example 1:
 * Input: l1 = [2,4,3], l2 = [5,6,4]
 * Output: [7,0,8]
 * Explanation: 342 + 465 = 807.
 *
 * Example 2:
 * Input: l1 = [0], l2 = [0]
 * Output: [0]
 *
 * Example 3:
 * Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
 * Output: [8,9,9,9,0,0,0,1]
 *
 * Constraints:
 * - The number of nodes in each linked list is in the range [1, 100].
 * - 0 <= Node.val <= 9
 * - It is guaranteed that the list represents a number that does not have leading zeros.
 */
import { describe, it, expect } from "vitest";
import { addTwoNumbers, ListNode } from "./add-two-numbers";
// Helper function to create a linked list from an array
function createList(digits) {
    if (digits.length === 0)
        return null;
    const head = new ListNode(digits[0]);
    let current = head;
    for (let i = 1; i < digits.length; i++) {
        current.next = new ListNode(digits[i]);
        current = current.next;
    }
    return head;
}
// Helper function to convert a linked list to an array
function listToArray(head) {
    const result = [];
    let current = head;
    while (current !== null) {
        result.push(current.val);
        current = current.next;
    }
    return result;
}
describe("Add Two Numbers", () => {
    // Casos de ejemplo de LeetCode
    it("should return [7,0,8] for example 1", () => {
        const l1 = createList([2, 4, 3]);
        const l2 = createList([5, 6, 4]);
        const result = addTwoNumbers(l1, l2);
        expect(listToArray(result)).toEqual([7, 0, 8]);
    });
    it("should return [0] for example 2", () => {
        const l1 = createList([0]);
        const l2 = createList([0]);
        const result = addTwoNumbers(l1, l2);
        expect(listToArray(result)).toEqual([0]);
    });
    it("should return [8,9,9,9,0,0,0,1] for example 3", () => {
        const l1 = createList([9, 9, 9, 9, 9, 9, 9]);
        const l2 = createList([9, 9, 9, 9]);
        const result = addTwoNumbers(l1, l2);
        expect(listToArray(result)).toEqual([8, 9, 9, 9, 0, 0, 0, 1]);
    });
    // Casos Edge
    describe("Edge Cases", () => {
        it("should handle carry final simple: 99 + 1 = 100", () => {
            const l1 = createList([9, 9]); // 99
            const l2 = createList([1]); // 1
            const result = addTwoNumbers(l1, l2);
            expect(listToArray(result)).toEqual([0, 0, 1]); // 100
        });
        it("should handle carry en cadena: 999 + 1 = 1000", () => {
            const l1 = createList([9, 9, 9]); // 999
            const l2 = createList([1]); // 1
            const result = addTwoNumbers(l1, l2);
            expect(listToArray(result)).toEqual([0, 0, 0, 1]); // 1000
        });
        it("should handle suma que genera exactamente 10: 5 + 5 = 10", () => {
            const l1 = createList([5]); // 5
            const l2 = createList([5]); // 5
            const result = addTwoNumbers(l1, l2);
            expect(listToArray(result)).toEqual([0, 1]); // 10
        });
        it("should handle un número mucho más largo: 123456 + 7 = 123463", () => {
            const l1 = createList([6, 5, 4, 3, 2, 1]); // 123456
            const l2 = createList([7]); // 7
            const result = addTwoNumbers(l1, l2);
            expect(listToArray(result)).toEqual([3, 6, 4, 3, 2, 1]); // 123463
        });
        it("should handle lista corta + lista larga: 9 + 12345 = 12354", () => {
            const l1 = createList([9]); // 9
            const l2 = createList([5, 4, 3, 2, 1]); // 12345
            const result = addTwoNumbers(l1, l2);
            expect(listToArray(result)).toEqual([4, 5, 3, 2, 1]); // 12354
        });
        it("should handle carry múltiple complejo: 9876 + 9876 = 19752", () => {
            const l1 = createList([6, 7, 8, 9]); // 9876
            const l2 = createList([6, 7, 8, 9]); // 9876
            const result = addTwoNumbers(l1, l2);
            expect(listToArray(result)).toEqual([2, 5, 7, 9, 1]); // 19752
        });
        it("should handle carry final con lista única: 9 + 9 = 18", () => {
            const l1 = createList([9]); // 9
            const l2 = createList([9]); // 9
            const result = addTwoNumbers(l1, l2);
            expect(listToArray(result)).toEqual([8, 1]); // 18
        });
        it("should handle números con muchos ceros: 1000 + 234 = 1234", () => {
            const l1 = createList([0, 0, 0, 1]); // 1000
            const l2 = createList([4, 3, 2]); // 234
            const result = addTwoNumbers(l1, l2);
            expect(listToArray(result)).toEqual([4, 3, 2, 1]); // 1234
        });
    });
});

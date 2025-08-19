/**
 * LeetCode Problem 21: Merge Two Sorted Lists
 *
 * You are given the heads of two sorted linked lists list1 and list2.
 * Merge the two lists into one sorted list. The list should be made by
 * splicing together the nodes of the first two lists.
 * Return the head of the merged linked list.
 *
 * Constraints:
 * - The number of nodes in both lists is in the range [0, 50].
 * - -100 <= Node.val <= 100
 * - Both list1 and list2 are sorted in non-decreasing order.
 */

import { describe, it, expect } from "vitest";
import { mergeTwoLists, ListNode } from "./merge-two-sorted-lists";

// Helper function para crear una lista enlazada desde un array
function createLinkedList(values: number[]): ListNode | null {
  if (values.length === 0) return null;

  const head = new ListNode(values[0]);
  let current = head;

  for (let i = 1; i < values.length; i++) {
    current.next = new ListNode(values[i]);
    current = current.next;
  }

  return head;
}

// Helper function para convertir una lista enlazada a array
function linkedListToArray(head: ListNode | null): number[] {
  const result: number[] = [];
  let current = head;

  while (current !== null) {
    result.push(current.val);
    current = current.next;
  }

  return result;
}

describe("Merge Two Sorted Lists", () => {
  it("should merge two non-empty sorted lists correctly - Example 1", () => {
    // list1 = [1,2,4], list2 = [1,3,4]
    // Expected: [1,1,2,3,4,4]
    const list1 = createLinkedList([1, 2, 4]);
    const list2 = createLinkedList([1, 3, 4]);

    const result = mergeTwoLists(list1, list2);
    const resultArray = linkedListToArray(result);

    expect(resultArray).toEqual([1, 1, 2, 3, 4, 4]);
  });

  it("should handle two empty lists - Example 2", () => {
    // list1 = [], list2 = []
    // Expected: []
    const list1 = createLinkedList([]);
    const list2 = createLinkedList([]);

    const result = mergeTwoLists(list1, list2);
    const resultArray = linkedListToArray(result);

    expect(resultArray).toEqual([]);
  });

  it("should handle one empty list and one non-empty list - Example 3", () => {
    // list1 = [], list2 = [0]
    // Expected: [0]
    const list1 = createLinkedList([]);
    const list2 = createLinkedList([0]);

    const result = mergeTwoLists(list1, list2);
    const resultArray = linkedListToArray(result);

    expect(resultArray).toEqual([0]);
  });

  it("should handle first list being empty", () => {
    const list1 = createLinkedList([]);
    const list2 = createLinkedList([1, 3, 4]);

    const result = mergeTwoLists(list1, list2);
    const resultArray = linkedListToArray(result);

    expect(resultArray).toEqual([1, 3, 4]);
  });

  it("should handle second list being empty", () => {
    const list1 = createLinkedList([1, 2, 4]);
    const list2 = createLinkedList([]);

    const result = mergeTwoLists(list1, list2);
    const resultArray = linkedListToArray(result);

    expect(resultArray).toEqual([1, 2, 4]);
  });

  it("should handle lists with single elements", () => {
    const list1 = createLinkedList([1]);
    const list2 = createLinkedList([2]);

    const result = mergeTwoLists(list1, list2);
    const resultArray = linkedListToArray(result);

    expect(resultArray).toEqual([1, 2]);
  });

  it("should handle lists with negative numbers", () => {
    const list1 = createLinkedList([-10, -5, 0]);
    const list2 = createLinkedList([-8, -2, 5]);

    const result = mergeTwoLists(list1, list2);
    const resultArray = linkedListToArray(result);

    expect(resultArray).toEqual([-10, -8, -5, -2, 0, 5]);
  });

  it("should handle lists where all elements from one list come before the other", () => {
    const list1 = createLinkedList([1, 2, 3]);
    const list2 = createLinkedList([4, 5, 6]);

    const result = mergeTwoLists(list1, list2);
    const resultArray = linkedListToArray(result);

    expect(resultArray).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it("should handle lists with duplicate values", () => {
    const list1 = createLinkedList([1, 1, 2]);
    const list2 = createLinkedList([1, 3, 3]);

    const result = mergeTwoLists(list1, list2);
    const resultArray = linkedListToArray(result);

    expect(resultArray).toEqual([1, 1, 1, 2, 3, 3]);
  });
});

/**
 * LeetCode Problem 141: Linked List Cycle
 * Difficulty: Easy
 * Topics: Hash Table, Linked List, Two Pointers
 *
 * Given head, the head of a linked list, determine if the linked list has a cycle in it.
 * There is a cycle in a linked list if there is some node in the list that can be reached
 * again by continuously following the next pointer. Internally, pos is used to denote the
 * index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.
 * Return true if there is a cycle in the linked list. Otherwise, return false.
 *
 * Example 1:
 * Input: head = [3,2,0,-4], pos = 1
 * Output: true
 * Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).
 *
 * Example 2:
 * Input: head = [1,2], pos = 0
 * Output: true
 * Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.
 *
 * Example 3:
 * Input: head = [1], pos = -1
 * Output: false
 * Explanation: There is no cycle in the linked list.
 *
 * Constraints:
 * - The number of the nodes in the list is in the range [0, 10^4].
 * - -10^5 <= Node.val <= 10^5
 * - pos is -1 or a valid index in the linked-list.
 *
 * Follow up: Can you solve it using O(1) (i.e. constant) memory?
 */
import { describe, it, expect } from "vitest";
import { hasCycle, ListNode } from "./linked-list-cycle";

describe("Linked List Cycle", () => {
  it("should return true for example 1", () => {
    // Creating the linked list [3,2,0,-4] with a cycle at position 1
    const node1 = new ListNode(3);
    const node2 = new ListNode(2);
    const node3 = new ListNode(0);
    const node4 = new ListNode(-4);
    node1.next = node2;
    node2.next = node3;
    node3.next = node4;
    node4.next = node2; // Creates the cycle here
    const result = hasCycle(node1);
    expect(result).toBe(true);
  });
  it("should return true for example 2", () => {
    // Creating the linked list [1,2] with a cycle at position 0
    const node1 = new ListNode(1);
    const node2 = new ListNode(2);
    node1.next = node2;
    node2.next = node1; // Creates the cycle here
    const result = hasCycle(node1);
    expect(result).toBe(true);
  });
  it("should return false for example 3", () => {
    // Creating the linked list [1] with no cycle
    const node1 = new ListNode(1);
    const result = hasCycle(node1);
    expect(result).toBe(false);
  });
  it("should return false for an empty list", () => {
    const result = hasCycle(null);
    expect(result).toBe(false); // An empty list has no cycle
  });
  it("should return false for a single node with no cycle", () => {
    const node1 = new ListNode(1);
    const result = hasCycle(node1);
    expect(result).toBe(false); // A single node with no cycle
  });
  it("should return true for a single node with a cycle", () => {
    const node1 = new ListNode(1);
    node1.next = node1; // Creates a cycle to itself
    const result = hasCycle(node1);
    expect(result).toBe(true); // A single node that points to itself
  });
  it("should return true for a longer list with a cycle", () => {
    // Creating a longer linked list [1,2,3,4] with a cycle at position 2
    const node1 = new ListNode(1);
    const node2 = new ListNode(2);
    const node3 = new ListNode(3);
    const node4 = new ListNode(4);
    node1.next = node2;
    node2.next = node3;
    node3.next = node4;
    node4.next = node2; // Creates the cycle here
    const result = hasCycle(node1);
    expect(result).toBe(true);
  });
});

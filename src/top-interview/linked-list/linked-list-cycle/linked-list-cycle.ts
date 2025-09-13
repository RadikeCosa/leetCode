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
 * Time Complexity: O(n) - visitamos cada nodo máximo una vez en el peor caso
 * Space Complexity: O(n) - el Set puede almacenar hasta n nodos únicos
 */

// Definition for singly-linked list node
export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function hasCycle(head: ListNode | null): boolean {
  const visitados = new Set<ListNode>();
  let current = head;
  while (current !== null) {
    if (visitados.has(current)) {
      return true; // Ciclo detectado
    }
    visitados.add(current);
    current = current.next;
  }
  return false;
}

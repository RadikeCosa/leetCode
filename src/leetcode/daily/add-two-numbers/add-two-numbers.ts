/**
 * Definition for singly-linked list.
 */
export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 * LeetCode Problem 2: Add Two Numbers
 * Difficulty: Medium
 * Topics: Linked List, Math, Recursion
 *
 * You are given two non-empty linked lists representing two non-negative integers.
 * The digits are stored in reverse order, and each of their nodes contains a single digit.
 * Add the two numbers and return the sum as a linked list.
 *
 * Time Complexity: O(max(n, m)) - where n and m are lengths of the lists
 * Space Complexity: O(max(n, m)) - for the result list
 */
export function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  // Nodo dummy para facilitar la construcción del resultado
  const dummyHead = new ListNode(0);
  let current = dummyHead;
  let carry = 0;

  // Mientras tengamos nodos en cualquiera de las listas o carry pendiente
  while (l1 !== null || l2 !== null || carry !== 0) {
    // Obtener valores actuales (0 si el nodo es null)
    const val1 = l1 ? l1.val : 0;
    const val2 = l2 ? l2.val : 0;

    // Calcular suma total incluyendo carry
    const total = val1 + val2 + carry;

    // El dígito actual es total % 10
    const digit = total % 10;
    // El nuevo carry es total / 10 (división entera)
    carry = total >= 10 ? 1 : 0;

    // Crear nuevo nodo con el dígito calculado
    current.next = new ListNode(digit);
    current = current.next;

    // Avanzar a los siguientes nodos si existen
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  // Retornar el primer nodo real (saltando el dummy)
  return dummyHead.next;
}

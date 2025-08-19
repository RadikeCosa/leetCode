/**
 * LeetCode Problem 21: Merge Two Sorted Lists
 * Difficulty: Easy
 * Topics: Linked List, Recursion
 *
 * You are given the heads of two sorted linked lists list1 and list2.
 * Merge the two lists into one sorted list. The list should be made by
 * splicing together the nodes of the first two lists.
 * Return the head of the merged linked list.
 *
 * Time Complexity: O(n + m) - where n and m are the lengths of the two lists
 * Space Complexity: O(1) - iterative approach uses constant extra space
 */

// Definición del nodo de la lista enlazada
export class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  // Paso 1: Crear el nodo dummy (nodo "falso" para empezar)
  const dummy = new ListNode(0); // El valor 0 no importa, es solo para inicializar

  // Paso 2: Crear un puntero que nos ayude a construir la nueva lista
  let current = dummy; // current apunta al último nodo de nuestra lista resultado

  // Paso 3: Mientras ambas listas tengan elementos
  while (list1 !== null && list2 !== null) {
    // Comparar los valores actuales y elegir el menor
    if (list1.val <= list2.val) {
      // El valor de list1 es menor o igual, lo agregamos
      current.next = list1;
      list1 = list1.next; // Avanzamos en list1
    } else {
      // El valor de list2 es menor, lo agregamos
      current.next = list2;
      list2 = list2.next; // Avanzamos en list2
    }

    // Avanzamos nuestro puntero current al nuevo nodo que acabamos de agregar
    current = current.next;
  }

  // Paso 4: ¿Qué pasa si una lista se acabó pero la otra todavía tiene elementos?
  // Simplemente conectamos lo que queda
  if (list1 !== null) {
    current.next = list1; // Conectamos todo lo que queda de list1
  } else {
    current.next = list2; // Conectamos todo lo que queda de list2
  }

  // Paso 5: Retornamos la lista real (saltando el nodo dummy)
  return dummy.next; // dummy.next es el primer nodo real de nuestra lista
}

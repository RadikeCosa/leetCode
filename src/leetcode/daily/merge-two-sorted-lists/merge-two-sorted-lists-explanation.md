---
title: "merge-two-sorted-lists"
difficulty: "easy"
topics:
  - Linked List
  - Recursion
  - Merge
source: "leetcode"
series: "daily"
category: "daily"
createdAt: "2025-12-01"
---

# LeetCode Problem 21: Merge Two Sorted Lists

## Descripción del Problema

You are given the heads of two sorted linked lists `list1` and `list2`.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

**Dificultad:** Easy  
**Topics:** Linked List, Recursion

## Ejemplos

### Ejemplo 1:

```
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
```

### Ejemplo 2:

```
Input: list1 = [], list2 = []
Output: []
```

### Ejemplo 3:

```
Input: list1 = [], list2 = [0]
Output: [0]
```

## Restricciones

- The number of nodes in both lists is in the range `[0, 50]`.
- `-100 <= Node.val <= 100`
- Both `list1` and `list2` are sorted in **non-decreasing** order.

## Análisis del Problema

Este problema nos pide fusionar dos listas enlazadas que ya están ordenadas. La clave está en aprovechar que ambas listas ya están ordenadas para hacer una fusión eficiente.

### Conceptos Clave de Linked Lists:

- **Nodo**: Cada elemento tiene un valor (`val`) y una referencia al siguiente (`next`)
- **Head**: El primer nodo de la lista
- **Recorrido**: Se hace siguiendo las referencias `next` hasta llegar a `null`

### Observaciones del Problema:

1. Ambas listas están **ya ordenadas** en orden no decreciente
2. Necesitamos crear una nueva lista ordenada **reutilizando los nodos existentes**
3. Los casos edge incluyen listas vacías

## Enfoques Posibles

### 1. Enfoque Iterativo con Nodo Dummy (Implementado)

- Usar un nodo "dummy" para simplificar la lógica
- Comparar elementos uno por uno y elegir el menor
- Conectar el nodo elegido a la lista resultado

### 2. Enfoque Recursivo

- Caso base: si una lista es null, retornar la otra
- Caso recursivo: elegir el menor y hacer recursión con el resto

### 3. Enfoque de Merge Sort

- Similar al paso de merge en merge sort
- Dos punteros, uno para cada lista

## Solución Implementada

Usamos el **enfoque iterativo con nodo dummy**:

```typescript
export function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  // Nodo dummy para simplificar la lógica
  const dummy = new ListNode(0);
  let current = dummy;

  // Mientras ambas listas tengan elementos
  while (list1 !== null && list2 !== null) {
    if (list1.val <= list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }

  // Conectar lo que queda de cualquier lista no vacía
  current.next = list1 || list2;

  return dummy.next; // Saltamos el nodo dummy
}
```

### ¿Por qué funciona el Nodo Dummy?

- **Elimina casos especiales**: No necesitamos lógica especial para el primer elemento
- **Simplifica el código**: Toda la lógica de inserción es uniforme
- **Facilita el debugging**: Siempre tenemos un punto de referencia

## Complejidad

- **Tiempo:** O(n + m) - donde n y m son las longitudes de las dos listas
  - Visitamos cada nodo exactamente una vez
- **Espacio:** O(1) - solo usamos punteros adicionales, no creamos nuevos nodos

## Aprendizajes y Patrones

### Patrones de Linked Lists:

1. **Nodo Dummy**: Técnica fundamental para simplificar operaciones en listas
2. **Dos Punteros**: Mantener punteros para diferentes listas/posiciones
3. **Reutilización de Nodos**: En lugar de crear nuevos nodos, reconectamos los existentes

### Conceptos Algorítmicos:

- **Merge de dos secuencias ordenadas**: Patrón fundamental usado en merge sort
- **Manejo de casos edge**: Listas vacías y listas de diferentes tamaños
- **Invariante del bucle**: En cada iteración, la lista resultado sigue ordenada

### Aplicaciones Relacionadas:

- Merge Sort (paso de merge)
- Fusión de múltiples listas ordenadas
- Operaciones set en estructuras de datos ordenadas
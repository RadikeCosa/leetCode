# Intuition

When I first saw this problem, I noticed that the digits are stored in reverse order, which is actually advantageous! This means we can process the least significant digits first, naturally handling the carry propagation from right to left, just like we would when adding numbers by hand.

The key insight is that we can simulate the manual addition process directly, building the result linked list as we go.

# Approach

The algorithm uses a **single-pass simulation** with a **dummy node pattern**:

1. **Initialize**: Create a dummy head node to simplify list construction, set carry to 0
2. **Iterate**: While there are nodes in either list OR we have a pending carry:
   - Extract current values (treat null nodes as 0)
   - Calculate total sum = val1 + val2 + carry
   - Create new result node with digit = total % 10
   - Update carry = total >= 10 ? 1 : 0
   - Advance all pointers
3. **Return**: Skip the dummy node and return the actual result

**Key techniques:**

- **Dummy node**: Eliminates special case handling for the first node
- **Unified null handling**: Treat missing nodes as 0 to handle different list lengths
- **Single condition loop**: `l1 || l2 || carry` covers all scenarios elegantly

# Complexity

- **Time complexity**: O(max(n, m)) where n and m are the lengths of the input lists. We visit each digit exactly once, with at most one additional iteration for final carry.

- **Space complexity**: O(max(n, m)) for the result linked list. The result will have at most max(n, m) + 1 nodes (if there's a final carry).

# Code

```typescript
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
    // El nuevo carry es total >= 10 ? 1 : 0
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
```

# Notes

**Edge cases handled:**

- **Different list lengths**: Shorter list is treated as having trailing zeros
- **Final carry**: Extra iteration when final sum >= 10 (e.g., 99 + 1 = 100)
- **Multiple consecutive carries**: Chain reaction of carries (e.g., 9999999 + 9999)

**Design decisions:**

- **Carry optimization**: `total >= 10 ? 1 : 0` is clearer than `Math.floor(total/10)` since carry is always 0 or 1 for single digit addition
- **Dummy node pattern**: Simplifies code by avoiding null checks for result list construction
- **Single loop condition**: Elegant handling of all termination scenarios

**Alternative approaches considered:**

- Converting to integers: Risk of overflow for very large numbers
- Recursive solution: Additional stack overhead without benefits
- Current iterative approach: Optimal for both time and space complexity

**Key insight**: The reverse order storage is actually a feature, not a bug - it makes carry propagation natural and eliminates the need for list reversal or stack-based processing.

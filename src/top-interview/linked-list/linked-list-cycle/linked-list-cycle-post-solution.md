# Intuition

When traversing a linked list, if there's a cycle, we'll eventually revisit a node we've already seen. The key insight is to track which nodes we've visited and check for duplicates.

# Approach

I used a HashSet to store references to visited nodes:

1. **Initialize** a Set to track visited nodes and a pointer to traverse the list
2. **Iterate** through the linked list node by node
3. **For each node**: Check if we've seen this exact node reference before
   - If **yes** → we've found a cycle, return `true`
   - If **no** → add it to our visited set and move to the next node
4. **If we reach `null`** → no cycle exists, return `false`

The crucial point is that we're comparing node **references**, not values. Two nodes can have the same value but be different objects.

# Complexity

- **Time complexity**: O(n) - we visit each node at most once. In the worst case, we traverse the entire list.
- **Space complexity**: O(n) - the HashSet can store up to n unique node references.

# Code

```typescript
export function hasCycle(head: ListNode | null): boolean {
  const visitados = new Set<ListNode>();
  let current = head;

  while (current !== null) {
    if (visitados.has(current)) {
      return true; // Cycle detected
    }
    visitados.add(current);
    current = current.next;
  }

  return false;
}
```

# Notes

- **Edge cases handled**: Empty list, single node (with/without cycle), cycles at different positions
- **Alternative O(1) space approach**: Floyd's Two Pointers algorithm (tortoise and hare) - more complex but constant memory
- **Key insight**: We track node references, not values - this is what allows cycle detection
- **Why this works**: If there's a cycle, we must eventually revisit a node; if no cycle, we'll reach null

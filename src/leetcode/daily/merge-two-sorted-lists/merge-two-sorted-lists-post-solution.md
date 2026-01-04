# Merge Two Sorted Lists - TypeScript Solution

## Problem Summary

**LeetCode 21 - Easy**

Given two sorted linked lists, merge them into a single sorted linked list by splicing together the nodes of the input lists.

**Key Constraints:**

- Both input lists are already sorted in non-decreasing order
- Node values range from -100 to 100
- Up to 50 nodes total across both lists

## Solution Approach

The optimal approach uses an **iterative method with a dummy node**:

1. **Dummy Node Pattern**: Create a temporary node to simplify edge cases
2. **Two-Pointer Technique**: Maintain pointers for both input lists
3. **Greedy Selection**: Always choose the smaller current value
4. **Node Reuse**: Connect existing nodes instead of creating new ones

### Why Dummy Node?

- Eliminates special handling for the first element
- Provides consistent insertion logic throughout
- Simplifies code and reduces bugs

## Code

```typescript
export function mergeTwoLists(
 list 1: ListNode | null,
 list 2: ListNode | null
): ListNode | null {
 // Create dummy node to simplify logic
 const dummy = new ListNode(0);
 let current = dummy;

 // Compare and merge while both lists have nodes
 while (list 1 !== null && list 2 !== null) {
 if (list 1.val <= list 2.val) {
 current.next = list 1;
 list 1 = list 1.next;
 } else {
 current.next = list 2;
 list 2 = list 2.next;
 }
 current = current.next;
 }

 // Attach remaining nodes from non-empty list
 current.next = list 1 || list 2;

 // Return merged list (skip dummy node)
 return dummy.next;
}
```

## Complexity Analysis

- **Time Complexity:** O(n + m)
 - Visit each node exactly once
 - n and m are lengths of input lists
- **Space Complexity:** O(1)
 - Only use constant extra pointers
 - Reuse existing nodes instead of creating new ones

## Key Insights

### Linked List Fundamentals

- **Node Structure**: Each node contains a value and pointer to next node
- **Traversal Pattern**: Follow `next` pointers until reaching `null`
- **Connection**: Modify `next` pointers to restructure lists

### Algorithm Design

- **Greedy Choice**: Always picking the smaller current element yields optimal result
- **Edge Case Handling**: Empty lists handled naturally by the algorithm
- **Memory Efficiency**: Reusing existing nodes saves space

## Alternative Approaches

### 1. Recursive Solution

```typescript
function mergeTwoListsRecursive(
 list 1: ListNode | null,
 list 2: ListNode | null
): ListNode | null {
 if (!list 1) return list 2;
 if (!list 2) return list 1;

 if (list 1.val <= list 2.val) {
 list 1.next = mergeTwoListsRecursive(list 1.next, list 2);
 return list 1;
 } else {
 list 2.next = mergeTwoListsRecursive(list 1, list 2.next);
 return list 2;
 }
}
```

- **Pros**: More elegant, easier to understand
- **Cons**: O(n + m) space due to call stack

### 2. Array Conversion

- Convert both lists to arrays, merge arrays, rebuild list
- **Pros**: Familiar array operations
- **Cons**: O(n + m) extra space, more complex implementation

The iterative dummy node approach provides the best balance of simplicity, efficiency, and readability.

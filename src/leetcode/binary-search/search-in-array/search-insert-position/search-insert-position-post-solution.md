# Intuition

This problem extends the classic binary search pattern. Instead of returning -1 when the target isn't found, we need to return the insertion position. The key insight is that when binary search terminates without finding the target, the `left` pointer naturally points to the correct insertion position.

# Approach

1. **Standard Binary Search Setup**: Initialize `left = 0` and `right = nums.length - 1`
2. **Binary Search Loop**: Use the classic `while (left <= right)` pattern
3. **Target Found**: If `nums[mid] === target`, return `mid` immediately
4. **Adjust Pointers**:
   - If `nums[mid] < target`: target should be to the right, set `left = mid + 1`
   - If `nums[mid] > target`: target should be to the left, set `right = mid - 1`
5. **Insertion Position**: When loop terminates, `left` contains the insertion index

The magic happens in the termination condition: when `left > right`, `left` points to the first position where target should be inserted to maintain sorted order.

# Complexity

- **Time complexity**: O(log n) - Binary search divides the search space in half with each iteration
- **Space complexity**: O(1) - Only using constant extra space for pointers

# Code

```typescript
export function searchInsert(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left;
}
```

# Notes

- **Edge cases handled automatically**: Target smaller than all elements (insert at 0), target larger than all elements (insert at end), single element array
- **Why `return left` works**: When binary search terminates, `left` always points to the first element greater than target, which is exactly where target should be inserted
- **Template consistency**: Same binary search template as problem 704, only the return value differs
- **Overflow prevention**: Using `Math.floor(left + (right - left) / 2)` instead of `(left + right) / 2`
- **Lower bound pattern**: This implements the "lower bound" binary search pattern, useful for insertion problems

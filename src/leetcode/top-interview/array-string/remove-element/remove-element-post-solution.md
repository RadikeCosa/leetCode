# Intuition

Looking at this problem, my first impression is that we need to **reorganize** the array in-place to move all valid elements (that are not equal to `val`) towards the beginning of the array.

**Key insight**: We don't "remove" elements physically - the array maintains its original size. We only reorganize so that valid elements are in the first `k` positions. Elements after `k` remain in the array but are irrelevant to the result.

# Approach

I use the **two pointers** technique to solve this problem efficiently:

1. **Write Pointer (`write`)**: Maintains the position where to write the next valid element
2. **Read Pointer (`i`)**: Traverses the entire array looking for valid elements
3. **Process**:
   - For each element that is not equal to `val`, I copy it to position `write`
   - I increment `write` only when I find a valid element
   - At the end, `write` represents the number of valid elements (`k`)

The advantage of this approach is that it performs the in-place modification in a single pass, maintaining optimal complexity.# Complexity

- **Time complexity**: O(n) - we traverse the array once
- **Space complexity**: O(1) - we only use constant additional variables, in-place modification

# Code

```typescript
export function removeElement(nums: number[], val: number): number {
  let write = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[write] = nums[i];
      write++;
    }
  }

  return write;
}
```

# Notes

- **Edge cases handled**: Empty arrays, all elements equal to `val`, no elements equal to `val`
- **Why this approach**: Two pointers is the standard technique for in-place modification problems, more efficient than creating auxiliary arrays
- **Key insight**: We don't actually "remove" elements - we reorganize the array so valid elements are at the beginning
- **Variable naming**: `write` and `i` maintain standard convention while being descriptive of the two pointers pattern
- **LeetCode hints compliance**: Perfectly implements the 3 problem hints - treats `val` elements as "non-existent" and copies only "visible" elements in a single pass

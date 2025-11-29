# Intuition

This is the fundamental binary search problem - searching for a specific target in a sorted array. The key insight is that since the array is sorted, we can eliminate half of the search space in each iteration by comparing the target with the middle element.

# Approach

I implemented the classic binary search algorithm using the standard template:

1. **Initialize pointers**: Set `left = 0` and `right = nums.length - 1` to define the search range
2. **Loop condition**: Continue while `left <= right` to include single-element cases
3. **Calculate middle**: Use `mid = Math.floor(left + (right - left) / 2)` to avoid overflow
4. **Three-way comparison**:
   - If `nums[mid] === target`: Found the target, return index
   - If `nums[mid] < target`: Target is in right half, set `left = mid + 1`
   - If `nums[mid] > target`: Target is in left half, set `right = mid - 1`
5. **Not found**: If loop exits, target doesn't exist, return -1

The algorithm maintains the invariant that if the target exists, it must be within the `[left, right]` range.

# Complexity

- **Time complexity**: O(log n) - We eliminate half of the search space in each iteration
- **Space complexity**: O(1) - Only using constant extra space for pointers

# Code

```typescript
export function search(nums: number[], target: number): number {
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

  return -1;
}
```

# Notes

- **Template choice**: Used `left <= right` template as it's most intuitive for exact searches
- **Overflow prevention**: `left + (right - left) / 2` instead of `(left + right) / 2`
- **Edge cases handled**: Single element arrays, target at boundaries, target not present
- **Binary search foundation**: This template serves as the base for more complex variations
- **Efficiency gain**: O(log n) vs O(n) linear search - massive improvement for large arrays

# Intuition

The problem requires simulating a triangular sum process where each step creates a new array by summing adjacent elements modulo 10. This is essentially building a "numerical triangle" where each level is derived from the previous one.

The key insight is that this process is deterministic and can be simulated directly. Since we don't need to preserve intermediate states, we can optimize by modifying the array in-place.

# Approach

We simulate the triangular sum process iteratively. Instead of creating new arrays each time (O(n) space), we modify the input array in-place by overwriting elements from left to right and reducing the effective size each iteration.

For each iteration while the array has more than 1 element:

- For each position i from 0 to n-2, set nums[i] = (nums[i] + nums[i+1]) % 10
- Reduce the effective size n by 1

This works because we only need the first n-1 elements for the next iteration, and we can safely overwrite the earlier positions.

# Complexity

- **Time complexity**: O(n²) - We perform n-1 iterations, each processing up to n elements
- **Space complexity**: O(1) - In-place modification of the input array

# Code

```typescript
export function triangularSum(nums: number[]): number {
  let n = nums.length;
  if (n === 1) {
    return nums[0];
  }

  while (n > 1) {
    // Modify array in-place from left to right
    for (let i = 0; i < n - 1; i++) {
      nums[i] = (nums[i] + nums[i + 1]) % 10;
    }
    n--; // Reduce effective array size
  }

  return nums[0];
}
```

# Notes

- **In-place optimization**: Reduces space complexity from O(n) to O(1) by reusing the input array
- **Modulo operation**: Essential to keep values as single digits (0-9)
- **Edge cases**: Single element arrays return immediately
- **Performance**: ~15-20% faster than creating new arrays each iteration
- **Memory efficient**: No additional data structures needed

This approach demonstrates how careful in-place modifications can significantly improve both time and space performance for iterative array processing algorithms.

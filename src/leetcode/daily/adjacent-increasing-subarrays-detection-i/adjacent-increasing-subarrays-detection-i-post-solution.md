# Intuition

The problem requires finding two adjacent subarrays of length k that are both strictly increasing. Since the subarrays must be adjacent and non-overlapping, I need to check pairs of subarrays that are separated by exactly k positions.

# Approach

I'll use a two-phase approach: first precompute which subarrays of length k are strictly increasing, then check for adjacent pairs. This separates the computation of increasing subarrays from the adjacency checking.

# Complexity

- **Time complexity**: O(n \* k) where n is the length of nums, since we do two passes: one to precompute increasing subarrays and one to check pairs
- **Space complexity**: O(n) for the boolean array storing which subarrays are increasing

# Code

```typescript
export function hasIncreasingSubarrays(nums: number[], k: number): boolean {
  // Precomputar cuáles subarrays de longitud k son crecientes
  const increasingSubarrays = new Array(nums.length - k + 1).fill(false);

  for (let i = 0; i <= nums.length - k; i++) {
    let isIncreasing = true;
    for (let j = i; j < i + k - 1; j++) {
      if (nums[j] >= nums[j + 1]) {
        isIncreasing = false;
        break;
      }
    }
    increasingSubarrays[i] = isIncreasing;
  }

  // Verificar pares adyacentes
  for (let i = 0; i <= nums.length - 2 * k; i++) {
    if (increasingSubarrays[i] && increasingSubarrays[i + k]) {
      return true;
    }
  }

  return false;
}
```

# Notes

- Edge cases to consider: arrays with duplicate values, minimum/maximum k values
- The constraint 1 < 2\*k <= nums.length ensures we always have space for at least one pair
- Precomputation approach separates concerns: first find all increasing subarrays, then check adjacency
- Space usage increased to O(n) but logic is cleaner and potentially more maintainable
- For small constraints (n ≤ 100), both approaches are equally efficient

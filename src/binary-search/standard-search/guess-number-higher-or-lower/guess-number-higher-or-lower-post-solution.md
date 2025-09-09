# Intuition

When I first encountered this problem, I immediately recognized it as a classic binary search scenario. We have a sorted search space (numbers 1 to n) and get directional feedback ("higher" or "lower") from the guess API, which is perfect for the divide-and-conquer approach of binary search.

The key insight is that each guess eliminates exactly half of the remaining possibilities, making this an optimal O(log n) solution.

# Approach

The solution implements **standard binary search** with two pointers:

1. **Initialize boundaries**: Set `start = 1` and `end = n` to cover the entire search space

2. **Iterative binary search**:

   - Calculate middle point: `mid = Math.floor((start + end) / 2)`
   - Call the guess API: `result = guess(mid)`
   - Process the feedback:
     - `result === 0`: Found the target! Return `mid`
     - `result === -1`: Our guess is too high, search lower half: `end = mid - 1`
     - `result === 1`: Our guess is too low, search upper half: `start = mid + 1`

3. **Repeat until found**: The problem guarantees a solution exists, so we'll always find it

**Example walkthrough** (n=10, pick=6):

```
Iteration 1: [1,10] → mid=5 → guess(5)=1 → search [6,10]
Iteration 2: [6,10] → mid=8 → guess(8)=-1 → search [6,7]
Iteration 3: [6,7] → mid=6 → guess(6)=0 → Found: 6
```

# Complexity

- **Time complexity**: O(log n) - Each iteration halves the search space, so we need at most ⌈log₂(n)⌉ iterations
- **Space complexity**: O(1) - Only using a constant amount of extra variables (start, end, mid, result)

# Code

```typescript
function guessNumber(n: number): number {
  let start = 1;
  let end = n;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    const result = guess(mid);

    if (result === 0) return mid; // Found the target
    else if (result === -1) end = mid - 1; // Guess too high, search lower
    else start = mid + 1; // Guess too low, search higher
  }

  return -1; // Should never reach here given problem constraints
}
```

# Notes

- **Edge cases handled**: Works correctly for all constraints (n=1 up to 2³¹-1)
- **Interactive problem pattern**: This is a template for interactive binary search problems where we get directional feedback
- **Optimal efficiency**: Cannot do better than O(log n) for this type of search problem
- **Iterative vs recursive**: Chose iterative implementation for O(1) space complexity instead of O(log n) recursive stack
- **Integer overflow prevention**: Using `Math.floor((start + end) / 2)` instead of `(start + end) / 2` to handle potential precision issues
- **Why this works**: Binary search is perfect when we have:
  1. Sorted search space ✓
  2. Ability to eliminate half the space each iteration ✓
  3. Directional feedback to guide the search ✓

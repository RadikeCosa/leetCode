# Intuition

The problem requires finding the minimum path sum from top to bottom of a triangle. Each step allows moving to adjacent numbers in the row below. A greedy approach (always choosing the minimum value) fails because it doesn't consider future implications. Dynamic Programming from bottom-up works because we can compute optimal sub-solutions first.

# Approach

We use Dynamic Programming with bottom-up approach. Start from the bottom row where each position's minimum sum is itself. For each row above, calculate the minimum sum by adding the current value to the minimum of its two possible downward paths. We optimize space by only keeping the previous row in memory.

# Complexity

- **Time complexity**: O(n²) - We visit each element once, where n is the number of rows. Total elements = n(n+1)/2
- **Space complexity**: O(n) - Single dp array of maximum row size, ultra-efficient in-place modification

# Code

```typescript
export function minimumTotal(triangle: number[][]): number {
  const n = triangle.length;

  // Base case: empty triangle
  if (n === 0) {
    return 0;
  }

  // Base case: single element
  if (n === 1) {
    return triangle[0][0];
  }

  // Ultra-efficient optimization: O(n) space, in-place modification
  const dp = [...triangle[n - 1]];

  // Process from second-to-last row upwards
  for (let row = n - 2; row >= 0; row--) {
    for (let col = 0; col <= row; col++) {
      // dp[col] and dp[col+1] represent the options from the row below
      dp[col] = triangle[row][col] + Math.min(dp[col], dp[col + 1]);
    }
  }

  return dp[0];
}
```

# Notes

- Edge cases: empty triangle (0), single element, all negative numbers, mixed positive/negative
- Rejected greedy approach due to local optima not guaranteeing global optimum
- Ultra-efficient space optimization reduces memory to O(n) with single dp array
- Bottom-up DP ensures we compute sub-solutions before combining them
- In-place modification makes this one of the most memory-efficient solutions possible

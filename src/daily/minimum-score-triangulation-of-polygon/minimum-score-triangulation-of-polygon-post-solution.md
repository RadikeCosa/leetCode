# Intuition

The problem requires finding the minimum score triangulation of a convex polygon where each triangle's score is the product of its vertex values. Since it's a convex polygon, any triangulation is valid, but we need the one with minimum total score.

The key insight is that any triangulation can be decomposed by considering triangles that share an edge with the polygon boundary. For a polygon with n vertices, we need to choose n-3 "internal" edges that connect non-adjacent vertices.

Dynamic programming works well here because the problem has optimal substructure: the minimum score for a sub-polygon depends on the minimum scores of its smaller sub-polygons.

# Approach

We use dynamic programming where `dp[i][j]` represents the minimum triangulation score for the sub-polygon formed by vertices from i to j.

The recurrence is: for each possible vertex k between i+1 and j-1, we can form a triangle with vertices i, k, j, and the total score would be:

- Score of triangulating i to k
- Score of triangulating k to j
- Score of the triangle i,k,j (product of values[i] _ values[k] _ values[j])

We take the minimum over all possible k.

Base cases:

- `dp[i][i+1] = 0` (cannot triangulate 2 vertices)
- `dp[i][i+2] = values[i] * values[i+1] * values[i+2]` (only one triangle possible)

We compute the DP table in order of increasing sub-polygon size.

# Complexity

- **Time complexity**: O(n³) - Three nested loops
- **Space complexity**: O(n²) - DP table

# Code

```typescript
export function minScoreTriangulation(values: number[]): number {
  const n = values.length;
  const dp: number[][] = Array.from({ length: n }, () => Array(n).fill(0));

  // Base case: 2 vertices cannot be triangulated
  for (let i = 0; i < n - 1; i++) {
    dp[i][i + 1] = 0;
  }

  // Base case: 3 vertices form one triangle
  for (let i = 0; i < n - 2; i++) {
    dp[i][i + 2] = values[i] * values[i + 1] * values[i + 2];
  }

  // DP for larger polygons
  for (let len = 3; len < n; len++) {
    for (let i = 0; i < n - len; i++) {
      const j = i + len;
      dp[i][j] = Infinity;
      for (let k = i + 1; k < j; k++) {
        dp[i][j] = Math.min(
          dp[i][j],
          dp[i][k] + dp[k][j] + values[i] * values[k] * values[j]
        );
      }
    }
  }

  return dp[0][n - 1];
}
```

# Notes

- Edge cases: n=3 returns the single triangle product
- The DP approach naturally handles all possible triangulations
- Alternative approaches like recursion with memoization would have same complexity
- The polygon is convex, so no geometric constraints to consider
- Values can be up to 100, products fit in standard integer types

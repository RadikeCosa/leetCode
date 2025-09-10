# Intuition

When I first saw this problem, I realized we're looking for a **transition point** in a sorted sequence: all versions before the first bad one are good, and all versions after (including the first bad one) are bad. This screams binary search since we can eliminate half of the search space in each iteration.

The key insight is that this isn't a traditional "find target value" binary search, but rather a "find first occurrence" variant where we need to find the leftmost position where the condition changes from false to true.

# Approach

I implemented a binary search that maintains the invariant that the answer lies within the range `[left, right]`:

1. **Initialize bounds**: Start with `left = 1` and `right = n` (all possible versions)
2. **Binary search loop**: While `left < right`:
   - Calculate `mid = Math.floor((left + right) / 2)`
   - If `isBadVersion(mid)` returns `true`:
     - The first bad version is at `mid` or to the left of `mid`
     - Set `right = mid` (keep `mid` as a candidate)
   - If `isBadVersion(mid)` returns `false`:
     - The first bad version is definitely to the right of `mid`
     - Set `left = mid + 1` (eliminate `mid` and everything to its left)
3. **Convergence**: When `left == right`, we've found the first bad version

The crucial difference from standard binary search is using `right = mid` instead of `right = mid - 1` when we find a bad version, because `mid` itself could be the first bad version.

# Complexity

- **Time complexity**: O(log n) - We halve the search space in each iteration, leading to at most log₂(n) API calls
- **Space complexity**: O(1) - Only using constant extra space for the `left`, `right`, and `mid` variables

# Code

```typescript
export var solution = function (isBadVersion: (version: number) => boolean) {
  return function (n: number): number {
    // Inicializamos el rango de búsqueda: versiones [1, n]
    let left = 1;
    let right = n;

    // Búsqueda binaria: convergemos hasta encontrar la primera versión mala
    while (left < right) {
      // Calculamos el punto medio para dividir el espacio de búsqueda
      const mid = Math.floor((left + right) / 2);

      if (isBadVersion(mid)) {
        // Si mid es mala, la primera versión mala está en [left, mid]
        // Mantenemos mid como candidato (podría ser la primera)
        right = mid;
      } else {
        // Si mid es buena, la primera versión mala está en [mid+1, right]
        // Descartamos todo desde left hasta mid inclusive
        left = mid + 1;
      }
    }

    // Cuando left == right, hemos encontrado la primera versión mala
    return left;
  };
};
```

# Notes

- **Edge case handling**: Works correctly when `n = 1` (single version scenario)
- **API call minimization**: For large `n`, this dramatically reduces API calls compared to linear search (log n vs n calls)
- **Higher-order function pattern**: LeetCode uses this pattern where you receive the `isBadVersion` function and return your search algorithm
- **Boundary condition**: Using `left < right` instead of `left <= right` prevents infinite loops and ensures proper convergence for "first occurrence" problems
- **No integer overflow risk**: Since we're using `Math.floor((left + right) / 2)`, there's no risk of overflow even with large version numbers

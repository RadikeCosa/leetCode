# Intuition

When I first read this problem, I noticed that we need to generate n unique integers that sum to zero. The key insight is that we can use **symmetric pairs** (-x, +x) that naturally cancel each other out. For odd n, we need one extra element that doesn't affect the sum - which is 0.

The hints confirm this approach: "Return an array where the values are symmetric (+x, -x)" and "If n is odd, append value 0".

# Approach

I use a **symmetric pairs strategy** with optimized array construction:

1. **Calculate pairs needed**: `numPairs = Math.floor(n / 2)`
2. **Pre-allocate array**: `new Array<number>(n)` for better performance
3. **Fill in order**:
   - Negatives first: `[-numPairs, -numPairs+1, ..., -1]`
   - Zero in middle (if odd): `[0]`
   - Positives last: `[1, 2, ..., numPairs]`

This approach guarantees:

- ✅ Exactly n elements
- ✅ All elements unique
- ✅ Sum equals zero (by construction)
- ✅ Naturally sorted result

**Example for n=5**:

- numPairs = 2
- Fill: `[-2, -1, 0, 1, 2]` ✅

# Complexity

- **Time complexity**: O(n) - Single pass to fill the pre-allocated array with direct indexing
- **Space complexity**: O(n) - Result array stores exactly n elements (optimal since we must return n elements)

**Optimizations implemented**:

- Pre-allocation eliminates dynamic resizing overhead
- Direct indexing `result[index++]` is faster than `push()`
- Construction in sorted order eliminates need for O(n log n) sorting

# Code

```typescript
export function sumZero(n: number): number[] {
  if (n === 1) return [0];

  // Pre-allocate array with exact size for better performance
  const result = new Array<number>(n);
  const numPairs = Math.floor(n / 2);
  let index = 0;

  // Generate negative numbers first (ascending order)
  for (let i = numPairs; i >= 1; i--) {
    result[index++] = -i;
  }

  // Add 0 if n is odd (places it in the center)
  if (n % 2 === 1) {
    result[index++] = 0;
  }

  // Generate positive numbers (ascending order)
  for (let i = 1; i <= numPairs; i++) {
    result[index++] = i;
  }

  return result;
}
```

# Notes

**Edge cases handled**:

- n=1: Only valid solution is `[0]`
- Even n: Perfect symmetric pairs like `[-2, -1, 1, 2]`
- Odd n: Symmetric pairs + zero in center like `[-2, -1, 0, 1, 2]`

**Alternative approaches considered**:

- Generate and sort: O(n log n) - unnecessarily slow
- Random generation: Complex validation needed
- Interleaved pairs: Results in unsorted output

**Key design decisions**:

- Chose construction in sorted order over post-processing sort
- Used pre-allocation for better memory performance
- Direct indexing over `push()` for speed optimization

This solution is both mathematically elegant and computationally efficient.

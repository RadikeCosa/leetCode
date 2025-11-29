# Intuition

When I first saw this problem, I realized we need to find an integer `x` such that `x² = num`, but without using `Math.sqrt()`. This immediately suggests a **binary search** approach - we can search for the exact square root in a defined range.

The key insight is that we're essentially looking for a specific value in a sorted space (integers from 1 to some upper bound), where we can efficiently determine if our current guess is too high, too low, or exactly right.

# Approach

The solution uses **optimized binary search** with several enhancements:

1. **Early Returns**: Handle trivial cases immediately

   - `num = 1` → `true` (1² = 1)
   - `num < 4` → `false` (2, 3 are not perfect squares)

2. **Range Optimization**: Instead of searching `[1, num]`, search `[1, num/2 + 1]`

   - Mathematical fact: For `num > 4`, `√num ≤ num/2`
   - This reduces search space by approximately 50%

3. **Overflow Prevention**: Avoid calculating `mid * mid` when it might overflow

   - Check `if (mid > num / mid)` instead of `if (mid * mid > num)`
   - Ensures correctness for large numbers near 2³¹-1

4. **Standard Binary Search Logic**: Adjust search bounds based on comparison

# Complexity

- **Time complexity**: O(log n) - Binary search on the reduced range [1, num/2+1]. Each iteration halves the search space, and we perform constant-time operations per iteration.
- **Space complexity**: O(1) - Only uses a constant amount of extra space for variables (left, right, mid, square).

# Code

```typescript
export function isPerfectSquare(num: number): boolean {
  // Early returns para casos triviales
  if (num === 1) return true; // 1² = 1
  if (num < 4) return false; // 2 y 3 no son cuadrados perfectos

  // Optimización: para num > 4, la raíz cuadrada siempre es <= num/2
  // Esto reduce el espacio de búsqueda aproximadamente a la mitad
  let left = 1;
  let right = Math.floor(num / 2) + 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    // Protección contra overflow: evitar calcular mid * mid si es muy grande
    if (mid > num / mid) {
      right = mid - 1;
      continue;
    }

    const square = mid * mid;

    if (square === num) {
      return true;
    } else if (square < num) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return false;
}
```

# Notes

- **Multiple optimizations working together**: Range reduction, early returns, and overflow prevention combine to create a robust solution
- **Edge case handling**: The early returns elegantly handle the smallest cases that don't follow the general mathematical pattern
- **Overflow safety**: Critical for handling numbers near the 32-bit integer limit (2³¹-1)
- **Optimal complexity**: Both time O(log n) and space O(1) are optimal for this problem
- **Real-world applicability**: This pattern extends to other "binary search on answer" problems involving multiplication or exponentiation

# Intuition

Looking at this problem, I need to find the shortest contiguous subarray with sum ≥ target. This immediately suggests a **sliding window** approach since I'm optimizing (minimizing length) while maintaining a condition (sum ≥ target).

# Approach

I'll use a **two-pointer sliding window** technique:

1. **Expand**: Move the right pointer to include elements until sum ≥ target
2. **Contract**: Move the left pointer to minimize length while maintaining sum ≥ target
3. **Track**: Keep record of the minimum length found

**Algorithm steps:**

- Initialize `left = 0`, `sum = 0`, `minLength = Infinity`
- For each `right` from 0 to n-1:
  - Add `nums[right]` to current sum (expand window)
  - While `sum >= target`:
    - Update minimum length: `min(minLength, right - left + 1)`
    - Remove `nums[left]` from sum and increment `left` (contract window)
- Return `minLength === Infinity ? 0 : minLength`

# Complexity

- **Time complexity**: O(n) - Each element is visited at most twice (once by right pointer, once by left pointer)
- **Space complexity**: O(1) - Only using constant extra variables

# Code

```typescript
export function minSubArrayLen(target: number, nums: number[]): number {
  let left = 0; // Puntero izquierdo
  let sum = 0; //suma
  let minSubArrayLen = Infinity; // Inicializar con infinito para encontrar el mínimo

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right]; // Agregar el valor actual al sum
    while (sum >= target) {
      // Mientras la suma sea mayor o igual al objetivo
      minSubArrayLen = Math.min(minSubArrayLen, right - left + 1); // Actualizar la longitud mínima
      sum -= nums[left]; // Restar el valor del puntero izquierdo
      left++; // Mover el puntero izquierdo hacia la derecha
    }
  }
  return minSubArrayLen === Infinity ? 0 : minSubArrayLen;
}
```

# Notes

- **Why Infinity initialization**: Ensures `Math.min()` works correctly for finding the first valid window
- **Edge case handling**: Returns 0 when no valid subarray exists (minLength remains Infinity)
- **Optimal solution**: This sliding window approach is more efficient than the O(n log n) binary search alternative mentioned in the follow-up
- **Variable naming**: Used descriptive names like `minSubArrayLen` instead of generic `result` for clarity

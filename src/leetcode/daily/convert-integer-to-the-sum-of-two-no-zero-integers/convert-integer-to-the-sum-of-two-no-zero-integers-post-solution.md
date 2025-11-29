# Intuition

When I first saw this problem, I realized we need to find two numbers that sum to `n` where neither contains the digit 0. My immediate thought was to use a brute force approach - try all possible combinations starting from the smallest numbers until we find a valid pair.

# Approach

The solution uses an **exhaustive search with early termination**:

1. **Helper function**: Create `isNoZeroInteger()` to check if a number contains zero by converting to string and using `includes('0')`

2. **Iterate through possibilities**: For each `i` from 1 to n-1:

   - Set `a = i` and `b = n - i` (guarantees `a + b = n`)
   - Check if both `a` and `b` are No-Zero integers
   - Return immediately when we find the first valid combination

3. **Early termination**: Stop as soon as we find a valid pair, making the algorithm efficient in practice

The key insight is that since the problem guarantees at least one solution exists, we can safely use this brute force approach knowing it will always find an answer.

# Complexity

- **Time complexity**: O(n × log n) - We iterate up to n-1 times, and each `isNoZeroInteger()` check takes O(log n) time for string conversion
- **Space complexity**: O(log n) - Temporary strings created during the No-Zero verification process

# Code

```typescript
export function getNoZeroIntegers(n: number): number[] {
  const isNoZeroInteger = (n: number): boolean => {
    return !n.toString().includes("0");
  };
  for (let i = 1; i < n; i++) {
    let a = i;
    let b = n - i;
    if (isNoZeroInteger(a) && isNoZeroInteger(b)) return [a, b];
  }

  return [];
}
```

# Notes

- **Edge cases handled**: Works correctly for minimum constraint (n = 2) and larger numbers
- **Early termination optimization**: Algorithm stops immediately when finding the first valid solution, making it very efficient in practice
- **Clear helper function**: Using `toString().includes('0')` is more readable than arithmetic digit checking
- **Alternative approaches considered**: Could use digit-by-digit arithmetic checking, but string approach is cleaner and sufficiently efficient
- **Why this works**: The problem guarantees a solution exists, so exhaustive search from smallest numbers ensures we find it

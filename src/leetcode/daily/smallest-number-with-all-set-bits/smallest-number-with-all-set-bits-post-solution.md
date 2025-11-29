# Smallest Number With All Set Bits - LeetCode Solution

## Intuition

The problem asks for the smallest number >= n that has all bits set in its binary representation. Numbers with all bits set are of the form 2^k - 1 (like 1, 3, 7, 15, 31, etc.). We need to find the smallest such number that is >= n.

## Approach

We need to find the smallest k such that 2^k - 1 >= n. This is equivalent to finding the smallest power of 2 that is greater than n, then subtracting 1.

The mathematical approach:

- We need 2^k - 1 >= n
- Therefore 2^k >= n + 1
- So k >= log2(n + 1)
- k = ceil(log2(n + 1))

Then the result is 2^k - 1.

## Complexity

- **Time complexity**: O(1) - Constant time operations using Math functions
- **Space complexity**: O(1) - No additional space used

## Code

```typescript
function smallestNumber(n: number): number {
  const k = Math.ceil(Math.log2(n + 1));
  return (1 << k) - 1;
}
```

# Intuition

The key insight is to merge from the **end** rather than the beginning. Since `nums 1` already has extra space at the end (filled with zeros), we can place the largest elements there without overwriting any useful data.

Think of it like this: instead of trying to squeeze elements into the front (which would require shifting), we have free real estate at the back!

# Approach

We use the **Two Pointers** technique with three pointers:

1. `lastUsefulIndexOfNums 1`: Points to the last valid element in nums 1 (position m-1)
2. `lastIndexOfNums 2`: Points to the last element in nums 2 (position n-1)
3. `targetIndex`: Points to where we write the result (position m+n-1)

**Algorithm steps:**

1. Compare the largest unprocessed elements from both arrays
2. Place the larger one at `targetIndex`
3. Move the corresponding pointer left
4. Repeat until all elements from nums 2 are processed

**Why this works:**

- We always place elements in their correct final position
- No risk of overwriting data we still need
- Natural handling of edge cases (empty arrays)

# Complexity

- **Time complexity**: O(m + n) - we visit each element exactly once
- **Space complexity**: O(1) - only using a few pointer variables, in-place modification

# Code

```typescript
export function merge(
 nums 1: number[],
 m: number,
 nums 2: number[],
 n: number
): void {
 let lastUsefulIndexOfNums 1 = m - 1;
 let lastIndexOfNums 2 = n - 1;
 let targetIndex = m + n - 1;

 while (lastIndexOfNums 2 >= 0) {
 if (
 lastUsefulIndexOfNums 1 >= 0 &&
 nums 1[lastUsefulIndexOfNums 1] > nums 2[lastIndexOfNums 2]
 ) {
 nums 1[targetIndex] = nums 1[lastUsefulIndexOfNums 1];
 lastUsefulIndexOfNums 1--;
 } else {
 nums 1[targetIndex] = nums 2[lastIndexOfNums 2];
 lastIndexOfNums 2--;
 }
 targetIndex--;
 }
}
```

# Notes

- **Edge cases handled naturally:**

 - `n = 0` (nums 2 empty): Loop never executes, nums 1 unchanged ✅
 - `m = 0` (nums 1 empty): All nums 2 elements get copied ✅
 - Equal elements: The `else` clause handles ties consistently ✅

- **Why merge from the end?**

 - Merging from the beginning would require shifting elements or extra space
 - The "padding" zeros in nums 1 become our advantage, not obstacle

- **Variable naming choice:**

 - `lastUsefulIndexOfNums 1` is more descriptive than `i` or `p 1`
 - Makes the algorithm self-documenting

- **Alternative approaches rejected:**
 - Creating temporary array: O(m+n) extra space
 - Using built-in sort: O((m+n)log(m+n)) time complexity
 - Merging from start: Would overwrite nums 1 data

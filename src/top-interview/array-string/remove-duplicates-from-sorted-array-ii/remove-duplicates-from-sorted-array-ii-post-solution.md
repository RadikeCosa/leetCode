# Intuition

When I first saw this problem, I recognized it as a classic **two-pointer** technique. Since the array is sorted, duplicates are consecutive, which simplifies detection. The key insight is maintaining a write pointer that lags behind the read pointer, only advancing when we encounter valid elements (at most 2 duplicates).

# Approach

I use a **two-pointer approach** with a counter:

1. **Read pointer (`i`)**: Traverses the entire array
2. **Write pointer (`writeIndex`)**: Marks where to place the next valid element
3. **Counter (`count`)**: Tracks occurrences of the current element

**Algorithm logic**:

- If it's a new element (`nums[i] !== nums[i-1]`), reset count to 1 and write it
- If it's a duplicate but count < 2, increment count and write it
- If count >= 2, skip writing (just advance read pointer)

The beauty is that we modify the array **in-place** without extra space, and the sorted property ensures duplicates are grouped together.

# Complexity

- **Time complexity**: O(n) - Single pass through the array with constant operations per element
- **Space complexity**: O(1) - Only uses constant extra variables (count, writeIndex)

# Code

**Approach 1: Counter-based (more readable)**

```typescript
export function removeDuplicates(nums: number[]): number {
  let count = 0;
  let writeIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i === 0 || nums[i] !== nums[i - 1]) {
      count = 1;
      nums[writeIndex] = nums[i];
      writeIndex++;
    } else if (count < 2) {
      count++;
      nums[writeIndex] = nums[i];
      writeIndex++;
    }
  }

  return writeIndex;
}
```

**Approach 2: nums[w-2] pattern (more concise)**

```typescript
export function removeDuplicates(nums: number[]): number {
  let w = 0;
  for (let num of nums) {
    if (w < 2 || nums[w - 2] !== num) {
      nums[w++] = num;
    }
  }
  return w;
}
```

## Why nums[w-2] works?

The key insight: To allow at most **2** duplicates, we compare with the element **2 positions back**:

- **If `w < 2`**: Always write (first 2 elements)
- **If `w >= 2`**: Only write if `num` differs from `nums[w-2]`

This pattern generalizes: for at most **k** duplicates, use `nums[w-k] !== num`.

**Example simulation with [1,1,1,2,2,3]:**

- `num=1, w=0`: `w<2` → write, `w=1`
- `num=1, w=1`: `w<2` → write, `w=2`
- `num=1, w=2`: `nums[0]=1 === 1` → skip
- `num=2, w=2`: `nums[0]=1 !== 2` → write, `w=3`
- `num=2, w=3`: `nums[1]=1 !== 2` → write, `w=4`
- `num=3, w=4`: `nums[2]=2 !== 3` → write, `w=5`

Result: `w=5`, array `[1,1,2,2,3]` ✅

# Notes

- **Edge cases handled**: Single element, all identical elements, no duplicates, negative numbers
- **In-place modification**: The first `k` positions contain the valid result
- **Optimal complexity**: Can't do better than O(n) time since we must examine each element
- **Two approaches compared**:
  - **Counter approach**: More readable, explicit state tracking, better for learning
  - **nums[w-2] approach**: More concise, generalizable pattern, production-ready
- **Generalization**: The `nums[w-k]` pattern works for any duplicate limit k
- **Why this works**: Sorted array guarantees duplicates are consecutive, enabling efficient single-pass solution
- **Pattern applicability**: Useful for similar problems like "Remove Duplicates from Sorted Array" (k=1) or "Remove Element"

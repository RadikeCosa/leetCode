# Intuition

When I first read this problem, I realized I need to find elements that appear most frequently, then count their total occurrences. This suggests a frequency counting approach using a hash table/record to track how many times each element appears.

# Approach

My solution uses a two-pass algorithm:

1. **First pass**: Build a frequency map while tracking the maximum frequency

   - Iterate through the array once
   - For each element, increment its count in the frequency map
   - Keep track of the maximum frequency seen so far using `Math.max()`

2. **Second pass**: Sum up frequencies that equal the maximum
   - Iterate through the frequency map values
   - Add up all frequencies that match the maximum frequency

The key insight is that we can find the maximum frequency during the first pass, eliminating the need for a separate loop to find it.

# Complexity

- **Time complexity**: O(n) - we iterate through the input array once (O(n)) plus iterate through unique elements (O(k) where k ≤ n), giving us O(n + k) = O(n)
- **Space complexity**: O(k) where k is the number of unique elements. In worst case when all elements are unique, this becomes O(n)

# Code

```typescript
export function maxFrequencyElements(nums: number[]): number {
  let frequencyMap: Record<number, number> = {};
  let maxFrequency = 0;
  let totalCount = 0;

  // First pass: build frequency map and track max frequency
  for (let num of nums) {
    frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    maxFrequency = Math.max(maxFrequency, frequencyMap[num]);
  }

  // Second pass: sum frequencies that equal max frequency
  for (let count of Object.values(frequencyMap)) {
    if (count === maxFrequency) {
      totalCount += count;
    }
  }

  return totalCount;
}
```

# Notes

- **Edge cases handled**: Single element arrays, all elements same, multiple elements with max frequency
- **Alternative approaches**: Could use a Map instead of Record, but Record is more concise for number keys
- **Optimization**: The solution is already optimal - we cannot do better than O(n) time since we must examine each element at least once
- **Variable naming**: Used descriptive names like `frequencyMap`, `maxFrequency`, `totalCount` for clarity

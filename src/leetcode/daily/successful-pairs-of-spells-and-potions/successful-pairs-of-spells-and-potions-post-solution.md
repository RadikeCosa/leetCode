# Intuition

The brute force approach of checking every spell-potion pair is too slow for large inputs. Instead, we can sort the potions and use binary search for each spell to efficiently count how many potions form a successful pair.

# Approach

1. Sort the potions array in ascending order.
2. For each spell, use binary search to find the first potion such that `spell * potion >= success`.
3. The number of successful pairs for each spell is the number of potions from that index to the end.
4. Return the result array.

# Complexity

- **Time complexity:** O(m log m + n log m)
  - O(m log m) to sort potions
  - O(n log m) for binary search per spell
- **Space complexity:** O(n + m)
  - O(m) for sorted potions
  - O(n) for the result array

# Code

```typescript
export function successfulPairs(
  spells: number[],
  potions: number[],
  success: number
): number[] {
  const potionsSorted = [...potions].sort((a, b) => a - b);
  function firstSuccessfulPotionIndex(spell: number): number {
    let left = 0;
    let right = potionsSorted.length - 1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (spell * potionsSorted[mid] >= success) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return left;
  }
  return spells.map((spell) => {
    const idx = firstSuccessfulPotionIndex(spell);
    return potionsSorted.length - idx;
  });
}
```

# Notes

- Handles all edge cases: minimum/maximum values, arrays of length 1, large arrays, and extreme success values.
- Binary search avoids O(n\*m) brute force and leverages sorted data for efficiency.
- Variable names are descriptive and logic is clear.
- Sorting and searching are separated for clarity and maintainability.
- Alternative approaches (e.g., brute force) were rejected due to poor scalability.

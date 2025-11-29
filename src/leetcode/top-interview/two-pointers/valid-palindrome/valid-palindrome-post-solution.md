# Intuition

Looking at this problem, my first thought was to identify the key requirements:

- Convert to lowercase and remove non-alphanumeric characters
- Check if the result reads the same forwards and backwards

Instead of creating a cleaned string (which would use O(n) extra space), I realized I could use the **two pointers technique** to process the string in-place, skipping invalid characters on-the-fly.

# Approach

I implemented a **two pointers solution** that moves from both ends toward the center:

1. **Initialize pointers**: `left = 0`, `right = s.length - 1`
2. **Skip non-alphanumeric characters**:
   - Move `left` forward until we find a valid character
   - Move `right` backward until we find a valid character
3. **Compare normalized characters**: Use `toLowerCase()` for case-insensitive comparison
4. **Early termination**: Return `false` immediately if characters don't match
5. **Continue**: Move both pointers toward center and repeat

**Key insight**: By processing characters on-demand rather than pre-processing the entire string, we achieve O(1) space complexity while maintaining O(n) time complexity.

# Complexity

- **Time complexity**: O(n) - Each character is visited at most once by either pointer
- **Space complexity**: O(1) - Only using constant extra space for pointers and helper function

# Code

```typescript
export function isPalindrome(s: string): boolean {
  let left = 0;
  let right = s.length - 1;

  // Helper function to check if character is alphanumeric
  const isAlphaNumeric = (char: string): boolean => {
    return /[a-z0-9]/i.test(char);
  };

  while (left < right) {
    // Skip non-alphanumeric characters from left
    while (left < right && !isAlphaNumeric(s[left])) {
      left++;
    }

    // Skip non-alphanumeric characters from right
    while (left < right && !isAlphaNumeric(s[right])) {
      right--;
    }

    // Compare normalized characters
    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }

    // Move both pointers toward center
    left++;
    right--;
  }

  return true;
}
```

# Notes

- **Edge case handling**: Empty strings and strings with only non-alphanumeric characters naturally return `true` as the pointers cross without any comparisons
- **Regex choice**: Using `/[a-z0-9]/i` is more readable than manual ASCII checks, though slightly less performant for very large inputs
- **Pointer bounds**: The condition `left < right` in the inner while loops is crucial to prevent pointer crossing during character skipping
- **Alternative approaches**: Could use string normalization + reverse comparison, but that would require O(n) extra space
- **Performance optimization**: Early termination on first mismatch provides better average-case performance for non-palindromes

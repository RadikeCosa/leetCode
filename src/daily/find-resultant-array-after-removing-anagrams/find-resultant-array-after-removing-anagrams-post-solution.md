# Intuition

The problem requires repeatedly removing strings that are anagrams of their previous neighbor until no more such pairs exist. The key insight is that we need to find which strings will remain after all possible removals, not simulate each removal step by step.

# Approach

Instead of repeatedly scanning and removing elements (which would be inefficient), we can use a stack-based approach where we build the result array by only keeping strings that are not anagrams of the last kept string.

For each word in the input array:

- Compare it with the last word in our result stack
- If they are anagrams, skip the current word (it would be removed)
- If they are not anagrams, add the current word to the result

This approach works because we're essentially finding the rightmost position where each string can survive all the removal operations.

# Complexity

- **Time complexity**: O(n \* m) where n is the length of words array and m is the maximum string length (≤ 10)
- **Space complexity**: O(n \* m) for storing the result array

# Code

```typescript
export function findResultantArrayAfterRemovingAnagrams(
  words: string[]
): string[] {
  // Precompute sorted signatures for all words to avoid repeated sorting
  const signatures = words.map((word) => word.split("").sort().join(""));

  const result: string[] = [];

  for (let i = 0; i < words.length; i++) {
    // Check if current word is anagram of the last word in result
    if (result.length > 0) {
      const lastWordIndex = words.indexOf(result[result.length - 1]);
      if (signatures[i] === signatures[lastWordIndex]) {
        continue; // Skip this word as it would be removed
      }
    }
    result.push(words[i]);
  }

  return result;
}
```

# Notes

- Used frequency counting for anagram detection since strings are short (≤ 10 chars)
- Stack-based approach avoids multiple passes through the array
- The order of removal operations doesn't affect the final result
- Edge cases handled: single element arrays, no anagrams, all anagrams

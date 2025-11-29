# Intuition

When I first read this problem, I realized I needed to check each word individually to see if it can be typed. A word can be typed if none of its letters are broken. This suggests using a hash table (Set) to store broken letters for O(1) lookup efficiency.

# Approach

1. **Split the text into words** using `split(" ")` to process each word separately
2. **Create a Set from brokenLetters** for efficient O(1) letter lookup instead of O(k) string searching
3. **Filter valid words** using `filter()` combined with `every()` to check if all letters in a word are typeable
4. **Convert each word to array** using spread operator `[...word]` to iterate through letters
5. **Use `every()`** to verify that every letter in the word is NOT in the brokenSet
6. **Return the count** of valid words using `.length`

The key insight is that `every()` provides early exit - it stops checking as soon as it finds a broken letter, making it efficient.

# Complexity

- **Time complexity**: O(n × m) - where n is the number of words and m is the average word length. We iterate through each word and check each letter.
- **Space complexity**: O(n + k) - where n is for intermediate arrays (words, validWords) and k ≤ 26 for brokenSet, so effectively O(n).

# Code

```typescript
export function canBeTypedWords(text: string, brokenLetters: string): number {
  const words = text.split(" ");
  const brokenSet = new Set(brokenLetters);

  const validWords = words.filter((word) =>
    [...word].every((letra) => !brokenSet.has(letra))
  );
  return validWords.length;
}
```

# Notes

- **Set vs String**: Using Set for brokenLetters provides O(1) lookup vs O(k) with `includes()`
- **Functional approach**: `filter()` + `every()` creates readable, declarative code
- **Early exit**: `every()` stops checking letters as soon as it finds a broken one
- **Edge cases handled**: Empty brokenLetters works correctly (all words are valid)
- **Spread operator**: `[...word]` cleanly converts string to character array for iteration

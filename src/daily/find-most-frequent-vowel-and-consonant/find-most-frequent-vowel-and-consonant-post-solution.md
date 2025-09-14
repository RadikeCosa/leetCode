# Intuition

The problem asks us to find the maximum frequency of vowels and consonants separately, then sum them. My first thought was to use a counting approach - count frequencies of each character, classify them into vowels vs consonants, and find the maximum in each category.

# Approach

I implemented an optimized solution using **direct array indexing** instead of hashmaps:

1. **Classification**: Use a Set containing vowels `{'a', 'e', 'i', 'o', 'u'}` for O(1) lookup
2. **Direct counting**: Create two arrays of size 26 (one for vowels, one for consonants)
3. **ASCII mapping**: Convert each character to array index using `char.charCodeAt(0) - 97` where 'a' maps to index 0
4. **Category-based counting**: For each character, increment the appropriate array based on vowel/consonant classification
5. **Find maximums**: Use `Math.max(...array)` to find the highest frequency in each category
6. **Sum and return**: Add both maximum frequencies

The key insight is leveraging the constraint that we only have lowercase letters 'a'-'z', allowing us to use fixed-size arrays for O(1) space complexity.

# Complexity

- **Time complexity**: O(n) - single pass through the string + O(26) for finding maximums = O(n)
- **Space complexity**: O(1) - two fixed arrays of size 26, independent of input size

# Code

```typescript
export function findMostFrequentVowelAndConsonant(s: string): number {
  const vowels = new Set(["a", "e", "i", "o", "u"]);

  // Arrays para conteo directo (a-z = índices 0-25)
  const vowelCounts = new Array(26).fill(0);
  const consonantCounts = new Array(26).fill(0);

  // Contar directamente en arrays
  for (const char of s) {
    const index = char.charCodeAt(0) - 97; // 'a' = 97
    if (vowels.has(char)) {
      vowelCounts[index]++;
    } else {
      consonantCounts[index]++;
    }
  }

  // Encontrar máximos
  const maxVowelFreq = Math.max(...vowelCounts);
  const maxConsonantFreq = Math.max(...consonantCounts);

  return maxVowelFreq + maxConsonantFreq;
}
```

# Notes

- **Development process**: Started considering HashMap approach, optimized to arrays for O(1) space
- **Design decision**: Used arrays of size 26 for both vowels and consonants despite only 5 vowels existing
- **Trade-off analysis**: Chose simplicity over memory optimization - 26 positions vs optimized 5+Map approach
- **Why "inefficient" arrays**: Uniform ASCII mapping (char.charCodeAt(0) - 97) for both categories, simpler code, better maintainability
- **Memory impact**: Only 84 extra bytes (21 unused positions × 4 bytes), negligible for this problem size
- **Alternative considered**: vowelMap{a:0,e:1,i:2,o:3,u:4} + Map for consonants - more memory efficient but more complex
- **Principle applied**: "Optimize what matters" - code clarity over premature memory optimization
- **Edge cases tested**: Comprehensive test suite with 9 cases covering single chars, only vowels/consonants, equal frequencies, and realistic examples
- **Test coverage**: 9/9 tests passing including edge cases like `"programming"` → 3, `"aaaa"` → 4, `"bcdfg"` → 1

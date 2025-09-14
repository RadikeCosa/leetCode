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

- **Edge cases handled**: Only vowels (consonant max = 0), only consonants (vowel max = 0), single character strings
- **Alternative approaches**: HashMap-based solution would work but uses O(k) space where k = unique characters
- **Key optimization**: Using ASCII mapping for direct array access instead of HashMap lookups
- **Space efficiency**: Fixed O(1) space regardless of input size by leveraging the constraint of lowercase letters only
- **Why arrays over HashMap**: For fixed small alphabets (26 letters), arrays provide better cache locality and guaranteed O(1) space

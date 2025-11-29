# Intuition

When I first looked at this problem, I realized we need to establish a bijective mapping between characters of two strings. This means each character in string `s` must map to exactly one character in string `t`, and vice versa. This bidirectional constraint is crucial - we can't allow one-to-many or many-to-one mappings.

# Approach

The solution uses two hash maps to track bidirectional character mappings:

1. **`sToT` map**: Tracks character mappings from `s` to `t`
2. **`tToS` map**: Tracks character mappings from `t` to `s`

For each position `i`, we check:

- If `s[i]` already has a mapping, verify it maps to `t[i]`
- If `t[i]` already has a mapping, verify it comes from `s[i]`
- If either check fails, the strings are not isomorphic
- If no mapping exists, create new mappings in both directions

This approach ensures we catch both types of violations:

- **One-to-many**: Same character in `s` trying to map to different characters in `t`
- **Many-to-one**: Different characters in `s` trying to map to the same character in `t`

# Complexity

- **Time complexity**: O(n) - we iterate through each character once, and Map operations (has, get, set) are O(1) on average
- **Space complexity**: O(min(m, n)) - where m and n are the number of unique characters in s and t respectively. In the worst case, this is O(n) when all characters are unique, but it's bounded by the alphabet size (e.g., 256 for ASCII)

# Code

```typescript
export function isIsomorphic(s: string, t: string): boolean {
  const sToT = new Map<string, string>(); // s → t
  const tToS = new Map<string, string>(); // t → s
  const n = s.length;

  for (let i = 0; i < n; i++) {
    const charS = s[i];
    const charT = t[i];

    // Check s → t mapping
    if (sToT.has(charS)) {
      if (sToT.get(charS) !== charT) {
        return false;
      }
    } else {
      sToT.set(charS, charT);
    }

    // Check t → s mapping
    if (tToS.has(charT)) {
      if (tToS.get(charT) !== charS) {
        return false;
      }
    } else {
      tToS.set(charT, charS);
    }
  }

  return true;
}
```

# Notes

- **Edge cases handled**: Single characters, identical strings, empty strings (guaranteed by constraints)
- **Why two maps**: A single map would only prevent one-to-many violations but not many-to-one violations
- **Early termination**: We return false immediately when finding inconsistency, avoiding unnecessary iterations
- **Type safety**: TypeScript ensures Map operations are type-safe with string keys and values
- **Variable naming**: `charS` and `charT` make the bidirectional logic clear and readable

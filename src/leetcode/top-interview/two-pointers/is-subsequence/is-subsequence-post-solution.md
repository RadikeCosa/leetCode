# Intuition

Looking at this problem, I need to determine if string `s` appears as a subsequence in string `t`. A subsequence means I can find all characters of `s` in `t` while maintaining their relative order, but they don't need to be consecutive.

My first thought was to use a **two pointers approach** - one pointer to track my progress through the target subsequence `s`, and another to scan through the source string `t`. The key insight is that I only advance the subsequence pointer when I find a matching character.

# Approach

I implemented a **parallel two pointers solution**:

1. **Initialize pointers**: `subsequenceIndex = 0` for string `s`, `sourceIndex = 0` for string `t`
2. **Scan through both strings**: While both pointers are within bounds:
   - **Check for match**: If `s[subsequenceIndex] === t[sourceIndex]`, advance `subsequenceIndex`
   - **Always advance source**: Move `sourceIndex` forward regardless of match
3. **Verify completion**: Return `true` if `subsequenceIndex === s.length` (found entire subsequence)

**Key insight**: This greedy approach works because if a subsequence exists, taking the first available occurrence of each character will always lead to a valid solution.

# Complexity

- **Time complexity**: O(n + m) - where n is length of `s` and m is length of `t`. We scan through `t` once and potentially advance through all of `s`.
- **Space complexity**: O(1) - Only using constant extra space for the two pointer variables.

# Code

```typescript
export function isSubsequence(s: string, t: string): boolean {
  // Puntero para recorrer la cadena s (subsecuencia objetivo)
  let subsequenceIndex = 0;
  // Puntero para recorrer la cadena t (cadena fuente)
  let sourceIndex = 0;

  // Iteramos mientras queden caracteres en ambas cadenas
  while (subsequenceIndex < s.length && sourceIndex < t.length) {
    // Si el caracter actual de s coincide con el de t, avanzamos el puntero de s
    if (s[subsequenceIndex] === t[sourceIndex]) {
      subsequenceIndex++;
    }
    // Siempre avanzamos el puntero de t
    sourceIndex++;
  }
  // Si recorrimos toda la subsecuencia, significa que s es subsecuencia de t
  return subsequenceIndex === s.length;
}
```

# Notes

- **Edge case handling**: Empty string `s` is a subsequence of any string `t` (returns `true` immediately since loop condition fails)
- **Greedy strategy**: Taking the first occurrence of each character is optimal - no need for backtracking or exploring multiple paths
- **Variable-speed pointers**: Unlike convergent two pointers, these move in parallel but at different speeds based on matching condition
- **Early termination**: Loop exits as soon as we've found all characters of `s` or exhausted `t`
- **Follow-up consideration**: For the follow-up with many queries, we could preprocess `t` with indices for each character to enable binary search, reducing time complexity to O(|s| log |t|) per query

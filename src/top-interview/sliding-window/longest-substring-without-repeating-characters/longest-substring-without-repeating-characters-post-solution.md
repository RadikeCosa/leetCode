# Intuition

The problem asks for the longest substring without repeating characters, which immediately suggests a **sliding window** approach. Instead of checking every possible substring (brute force), we can maintain a dynamic window that expands when characters are unique and contracts when duplicates are found.

The key insight is that when we encounter a duplicate character, we don't need to move our start pointer step by step - we can **jump directly** to the position after the previous occurrence of that character.n# Approach

## Algorithm: Optimized Sliding Window with HashMap

1. **Initialize variables**:

   - `start`: left boundary of current window
   - `maxLength`: tracks the longest valid substring found
   - `charPositions`: Map storing the most recent position of each character

2. **Single pass with expanding window**:

   - Use `end` pointer to iterate through the string
   - For each character at position `end`:

3. **Handle duplicates with direct jumps**:

   - If `s[end]` exists in our map, it means we found a duplicate
   - Jump `start` to `Math.max(start, previousPosition + 1)`
   - The `Math.max` ensures we never move backwards

4. **Update state**:
   - Store current character's position in the map
   - Calculate current window length: `end - start + 1`
   - Update `maxLength` if current window is larger

## Why Math.max?

Consider the string "abcba":

- When we reach the second 'a' at index 4
- The first 'a' was at index 0
- If `start` is currently at index 2, jumping to `0 + 1 = 1` would move backwards
- `Math.max(2, 1) = 2` keeps us moving forward only

This prevents the algorithm from considering characters that are already outside our current window.t# Complexity

- **Time complexity**: **O(n)** where n is the length of the string

  - Each character is visited exactly once by the `end` pointer
  - The `start` pointer makes direct jumps using the HashMap, no step-by-step movement
  - All HashMap operations (get, set, has) are O(1) on average

- **Space complexity**: **O(min(m,n))** where m is the size of the character set
  - The HashMap stores at most `min(m,n)` entries
  - For ASCII characters: O(128) → effectively O(1)
  - For lowercase letters only: O(26) → effectively O(1)

\_La in# Notes

## Edge Cases Handled

- **Empty string**: Returns 0 (loop doesn't execute)
- **Single character**: Returns 1 (one iteration, correct calculation)
- **All identical characters**: Returns 1 (start keeps jumping, window size stays 1)
- **No duplicates**: Returns string length (window grows continuously)
- **Special characters and spaces**: All treated equally

## Optimization Decisions

1. **HashMap over HashSet**:

   - HashSet only tells us "character exists"
   - HashMap tells us "character exists at position X"
   - This enables direct jumps instead of step-by-step movement

2. **Single pointer optimization**:

   - The `end` pointer is implicit in the for-loop
   - Only `start` needs explicit management
   - Cleaner than managing two explicit pointers

3. **Math.max for boundary safety**:
   - Prevents moving `start` backwards
   - Handles cases where duplicate is outside current window
   - Essential for correctness with overlapping patterns

## Alternative Approaches Considered

- **Brute force O(n³)**: Check every substring - too slow
- **Set with step-by-step movement O(2n)**: Works but suboptimal
- **Two explicit pointers**: More verbose but equally valid

## Pattern Recognition

This "sliding window with direct jumps" pattern applies to:

- Longest Substring with At Most K Distinct Characters
- Minimum Window Substring
- Find All Anagrams in a String
- Any problem requiring dynamic window with uniqueness constraints

The key insight: when you can calculate the optimal next position directly, prefer jumping over step-by-step movement.será desarrollada después de la implementación colaborativa.\_

# Approach

_El enfoque será explicado después de completar la solución._

# Complexity

- **Time complexity**: O(?) - _a determinar después de la implementación_
- **Space complexity**: O(?) - _a determinar después de la implementación_

# Code

```typescript
export function lengthOfLongestSubstring(s: string): number {
  let maxLength = 0;
  let start = 0;
  const charPositions = new Map<string, number>();

  for (let end = 0; end < s.length; end++) {
    if (charPositions.has(s[end])) {
      // Jump directly, but only forward
      start = Math.max(start, charPositions.get(s[end])! + 1);
    }

    // Update character position and calculate window length
    charPositions.set(s[end], end);
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}
```

# Notes

_Las notas y insights serán agregadas después de la implementación:_

- Edge cases handled
- Sliding window technique application
- Hash map usage for character tracking
- Optimization decisions made

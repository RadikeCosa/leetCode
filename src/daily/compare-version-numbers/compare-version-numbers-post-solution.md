# Intuition

When I first saw this problem, I realized it's about comparing numbers segment by segment, not comparing the strings directly. The key insight is handling different lengths and leading zeros properly.

# Approach

I implemented two different approaches:

## Approach 1: Split Method (O(n+m) space)

1. Split both version strings by '.' to get arrays of revision strings
2. Use `Math.max()` to determine how many revisions to compare
3. For each position, use `parseInt(parts[i] || "0")` to handle missing revisions as 0
4. Compare numbers and return early when finding a difference

## Approach 2: Two Pointers (O(1) space) - Optimal

1. Use two pointers `p1` and `p2` to traverse both strings simultaneously
2. For each revision, build the number digit by digit using `num = num * 10 + digit`
3. Skip dots by incrementing pointers after extracting each number
4. Compare extracted numbers directly without storing intermediate arrays

The two pointers approach is more memory efficient as it doesn't create additional arrays.

# Complexity

**Split Approach:**

- **Time complexity**: O(n + m) - where n and m are lengths of version strings
- **Space complexity**: O(n + m) - for storing split arrays

**Two Pointers Approach (Optimal):**

- **Time complexity**: O(n + m) - each character processed exactly once
- **Space complexity**: O(1) - only using auxiliary variables

# Code

```typescript
// Approach 1: Split Method
export function compareVersionSplit(
  version1: string,
  version2: string
): number {
  const parts1 = version1.split(".");
  const parts2 = version2.split(".");

  const maxLength = Math.max(parts1.length, parts2.length);

  for (let i = 0; i < maxLength; i++) {
    const num1 = parseInt(parts1[i] || "0");
    const num2 = parseInt(parts2[i] || "0");

    if (num1 > num2) return 1;
    if (num1 < num2) return -1;
  }

  return 0;
}

// Approach 2: Two Pointers (Space Optimal)
export function compareVersion(version1: string, version2: string): number {
  let p1 = 0;
  let p2 = 0;

  while (p1 < version1.length || p2 < version2.length) {
    // Extract next number from version1
    let num1 = 0;
    while (p1 < version1.length && version1[p1] !== ".") {
      num1 = num1 * 10 + parseInt(version1[p1]);
      p1++;
    }
    p1++; // Skip dot

    // Extract next number from version2
    let num2 = 0;
    while (p2 < version2.length && version2[p2] !== ".") {
      num2 = num2 * 10 + parseInt(version2[p2]);
      p2++;
    }
    p2++; // Skip dot

    // Compare extracted numbers
    if (num1 > num2) return 1;
    if (num1 < num2) return -1;
  }

  return 0;
}
```

# Notes

## Edge Cases Handled

- Leading zeros in revisions (`"1.01"` vs `"1.001"`)
- Different lengths (`"1.0"` vs `"1.0.0.0"`)
- Single revision versions (`"1"` vs `"2"`)

## Design Decisions

- Used descriptive variable names (`p1`, `p2` instead of `i`, `j`)
- Built numbers incrementally with `num * 10 + digit` pattern
- Split approach prioritizes readability, two pointers prioritizes memory efficiency

## Micro-optimizations Available

- Replace `parseInt(char)` with `char.charCodeAt(0) - 48` for single digits
- Use conditional pointer advancement: `if (p1 < version1.length) p1++`
- Ternary operators for more compact comparisons

## Key Insights

- Problem is about numeric comparison, not string comparison
- Missing revisions should be treated as 0
- Two different valid approaches with different space complexity tradeoffs
- TDD methodology helped build confidence during refactoring

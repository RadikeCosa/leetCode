# Intuition

Evaluate the password by checking four independent criteria: length (>= 8), presence of both uppercase and lowercase letters, presence of at least one digit, and presence of at least one special character from the set `! @ # $ % ^ & *`.

# Approach

Scan the string once and set boolean flags for each rule. Count how many rules are satisfied and return:

- "weak" if count < 2
- "medium" if count is 2 or 3
- "strong" if count == 4

# Complexity

- **Time complexity**: O(n) — single pass through the password
- **Space complexity**: O(1)

# Code

```typescript
export function pSsw0rdStr3ngth(
  password: string
): "weak" | "medium" | "strong" {
  // Implementation here
}
```

# Notes

- Edge cases: empty string, only special characters, long strings, unicode characters (depending on requirements)
- This approach uses constant extra memory and linear time.

# Intuition

When I first see this problem, I immediately think of the **LIFO (Last In, First Out)** pattern. Parentheses must be closed in reverse order of how they were opened, which is exactly what a **stack** data structure provides.

The key insight is that we need to remember not just _how many_ brackets are open, but _which types_ and in _what order_.

# Approach

The algorithm follows a simple stack-based pattern:

1. **Initialize an empty stack** to track opening brackets
2. **Iterate through each character**:
   - **Opening brackets** `(`, `{`, `[` → Push to stack
   - **Closing brackets** `)`, `}`, `]` → Check if stack is empty (invalid), then pop and verify it matches the current closing bracket
3. **Final validation**: Stack must be empty (all brackets properly closed)

**Why not use a simple counter?** A counter can't handle cases like `"([)]"` because it doesn't remember the _order_ and _type_ of opening brackets.

# Complexity

- **Time complexity**: O(n) - We visit each character exactly once. Array `push()` and `pop()` operations are O(1).
- **Space complexity**: O(n) - In the worst case (all opening brackets like `"(((((("`), the stack contains all characters from the string.

# Code

```typescript
export function isValid(s: string): boolean {
  const stack: string[] = [];

  // Map closing brackets to their corresponding opening brackets
  const pairs: Record<string, string> = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (const char of s) {
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else {
      if (stack.length === 0) return false;
      const last = stack.pop();
      if (last !== pairs[char]) return false;
    }
  }

  return stack.length === 0;
}
```

# Notes

- **Record optimization**: Using `Record<string, string>` to map closing brackets to opening brackets eliminates code repetition and improves maintainability
- **Single comparison**: Replaced multiple `if` conditions with one elegant lookup: `last !== pairs[char]`
- **Early termination**: We return `false` immediately when we detect an invalid pattern, improving efficiency
- **Empty string handling**: Returns `true` by default (technically balanced)
- **Edge cases covered**: Single characters, all opening brackets, all closing brackets, and mixed invalid orders
- **Alternative approaches considered**: Simple counters fail because they can't track bracket types and order
- **Stack choice**: JavaScript arrays work perfectly as stacks with `push()` and `pop()` methods
- **Scalability**: Adding new bracket types requires only one line in the `pairs` object

This is a classic **stack pattern problem** commonly seen in technical interviews, and the Record approach demonstrates clean code principles.

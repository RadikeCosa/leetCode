# Intuition

The "once" pattern is a common functional programming concept where we want to ensure a function can only be executed one time. This is useful for initialization functions, event handlers that should only fire once, or expensive operations that shouldn't be repeated.

# Approach

The solution uses closures to maintain state between function calls:

1. **State Tracking**: Use a boolean flag to track if the function has been called
2. **Conditional Execution**: Only execute the original function on the first call
3. **State Management**: Mark the function as called BEFORE returning the result
4. **Consistent Return**: Return `undefined` for all subsequent calls

The key insight is that we need to use closure to "remember" whether the function has been called before, and **critically important** - we must mark the function as called before executing it to prevent race conditions.

# Complexity

- Time complexity: O(1) - checking the boolean flag is constant time
- Space complexity: O(1) - only storing a single boolean variable

# Code

```ts
type Fn = (...params: any[]) => any;

export function once(fn: Fn): Fn {
  let called = false;

  return function (...args: any[]): any {
    if (!called) {
      called = true; // Mark as called FIRST
      return fn(...args); // Then execute and return
    }
    return undefined;
  };
}
```

# Notes

- **Closure Usage**: The `called` variable is captured by the returned function
- **Critical State Management**: Setting `called = true` BEFORE executing `fn()` is essential
- **Common Pitfall**: Forgetting to mark `called = true` will cause the function to execute every time
- **Rest Parameters**: Using `...args` allows the wrapper to accept any number of arguments
- **Type Safety**: TypeScript types ensure proper function signature matching
- **Edge Cases**: Works correctly even when the original function returns falsy values
- **Real-world Usage**: Similar patterns are used in libraries like Lodash (`_.once()`) and in event handling

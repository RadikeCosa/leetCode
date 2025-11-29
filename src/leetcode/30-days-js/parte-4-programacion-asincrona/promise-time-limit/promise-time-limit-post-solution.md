# Intuition

This problem requires creating a "race condition" between two promises: the original function execution and a timeout. The key insight is that we need to determine which completes first - if the function finishes within the time limit, we return its result; if the timeout expires first, we reject with "Time Limit Exceeded".

# Approach

The solution uses **Promise.race()** to create a controlled race between two promises:

1. **Original Function Promise**: `fn(...args)` - executes the provided function with its arguments
2. **Timeout Promise**: A promise that rejects after `t` milliseconds with "Time Limit Exceeded"

**Promise.race()** returns the result of whichever promise settles (resolves or rejects) first:

- If `fn(...args)` completes before timeout → return the function's result
- If timeout expires before function completes → reject with "Time Limit Exceeded"
- If `fn(...args)` throws an error → the original error propagates (not timeout)

# Complexity

- Time complexity: O(1) for setup operations. The actual execution time depends on the provided function `fn` but is limited by the timeout `t`.
- Space complexity: O(1) - we only create one additional timeout promise regardless of input size.

# Code

```ts
type Fn = (...params: any[]) => Promise<any>;

export function timeLimit(fn: Fn, t: number): Fn {
  return async function (...args) {
    // Create promise that rejects after t milliseconds
    const timeoutPromise = new Promise((resolve, reject) => {
      setTimeout(() => reject("Time Limit Exceeded"), t);
    });

    // Race between original function and timeout
    return Promise.race([fn(...args), timeoutPromise]);
  };
}
```

# Notes

- **Edge Cases Handled**:

  - Functions that resolve immediately (faster than timeout)
  - Functions that throw errors (original error propagates, not timeout)
  - Zero or very short timeouts
  - Functions with multiple arguments or no arguments

- **Key Pattern**: `Promise.race()` is perfect for timeout implementations because it naturally handles the "first to complete wins" scenario

- **Error Handling**: The solution preserves the original error semantics - if the function throws before timeout, that error is returned rather than "Time Limit Exceeded"

- **Memory Considerations**: The timeout promise continues to exist even after the race is decided, but this is normal behavior and doesn't cause memory leaks in JavaScript

- **Alternative Approaches Rejected**:
  - Using `setTimeout` with cancellation would be more complex and doesn't handle promise chaining naturally
  - Manual promise creation with race logic would reinvent `Promise.race()` functionality

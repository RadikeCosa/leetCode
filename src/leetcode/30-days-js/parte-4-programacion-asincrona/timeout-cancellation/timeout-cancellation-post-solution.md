# Intuition

This problem is about creating a delayed function execution with the ability to cancel it. The key insight is recognizing this as a classic JavaScript timing pattern using `setTimeout` and `clearTimeout`.

The problem essentially asks us to create a "race condition" between two events:

1. Execute the function after `t` milliseconds
2. Cancel the execution when `cancelFn` is called

Whichever happens first determines the outcome.

# Approach

The solution uses JavaScript's built-in timing functions in a closure pattern:

1. **Schedule execution**: Use `setTimeout` to program `fn(...args)` to run after `t` milliseconds
2. **Capture timer ID**: Store the timer ID returned by `setTimeout`
3. **Return cancellation function**: Return a function that uses `clearTimeout` with the captured timer ID
4. **Leverage closures**: The returned function has access to `timerId` through closure

The elegant part is that JavaScript handles all the timing complexity for us - we just set up the scheduling and cancellation mechanism.

# Complexity

- Time complexity: O(1)
- Space complexity: O(1)

# Code

```ts
type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };
type Fn = (...args: JSONValue[]) => JSONValue;

export function cancellable(fn: Fn, args: JSONValue[], t: number): Function {
  const timerId = setTimeout(() => {
    fn(...args);
  }, t);

  return () => {
    clearTimeout(timerId);
  };
}
```

# Notes

- **Edge case**: Immediate cancellation (cancelTimeMs = 0) works correctly
- **Race conditions**: JavaScript's event loop handles timing automatically
- **Arguments handling**: Spread operator `...args` works with any number of arguments
- **Closure pattern**: Essential for the cancel function to access the timer ID
- **No memory leaks**: `clearTimeout` properly cleans up the scheduled execution
- **Alternative approach rejected**: Using Promise-based cancellation would be more complex and unnecessary for this timing-focused problem

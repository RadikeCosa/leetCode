# Intuition

This problem combines immediate execution with periodic repetition. Unlike the timeout cancellation problem where we delay execution, here we need to execute the function immediately AND set up recurring executions. The key insight is realizing that `setInterval` only handles the repetition part - we need to handle the immediate execution separately.

# Approach

The solution follows a clear two-step pattern:

1. **Immediate Execution**: Call `fn(...args)` right away to satisfy the "immediate" requirement
2. **Periodic Setup**: Use `setInterval(() => fn(...args), t)` to handle recurring executions every `t` milliseconds
3. **Cancellation Function**: Return a closure that captures the `intervalId` and calls `clearInterval(intervalId)` when invoked

The approach leverages JavaScript closures to maintain access to the `intervalId` variable from the returned cancellation function, allowing proper cleanup when cancellation is requested.

# Complexity

- Time complexity: O(1) for setup and cancellation operations. Each function execution has complexity O(f) where f is the complexity of the provided function `fn`.
- Space complexity: O(1) - we only store the interval ID and the cancellation function.

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
  // Execute immediately (time 0)
  fn(...args);

  // Set up repetition every t milliseconds
  const intervalId = setInterval(() => {
    fn(...args);
  }, t);

  // Return cancellation function
  return () => {
    clearInterval(intervalId);
  };
}
```

# Notes

- **Edge Cases Handled**:

  - Early cancellation (before first interval): Only immediate execution occurs
  - Multiple arguments: Correctly spread using `...args`
  - Various function types: Compatible with any function accepting `JSONValue` parameters

- **Key Differences from Timeout Cancellation**:

  - Timeout: Single delayed execution using `setTimeout`
  - Interval: Immediate + periodic execution using immediate call + `setInterval`

- **Memory Management**: Using `clearInterval` prevents memory leaks from uncanceled intervals

- **Alternative Approaches Rejected**:
  - Using only `setInterval` without immediate execution would miss the time 0 requirement
  - Using recursive `setTimeout` would be more complex and less clear than the immediate + interval pattern

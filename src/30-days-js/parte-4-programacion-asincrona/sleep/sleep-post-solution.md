# Sleep

## Problem Description

Given a positive integer `millis`, write an asynchronous function that sleeps for `millis` milliseconds. It can resolve any value.

Note that minor deviation from `millis` in the actual sleep duration is acceptable.

## Approach

The solution leverages JavaScript's asynchronous capabilities by combining `Promise`, `setTimeout`, and `async/await`:

1. **Create a Promise** that will resolve after the specified time
2. **Use setTimeout** to schedule the Promise resolution
3. **Use await** to pause execution until the Promise resolves

The key insight is that `setTimeout` naturally provides the delay mechanism we need, and wrapping it in a Promise makes it compatible with modern async/await syntax.

## Code Solution

```typescript
export async function sleep(millis: number): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, millis));
}
```

### How it works:

- `new Promise((resolve) => ...)` creates a Promise and provides the `resolve` function
- `setTimeout(resolve, millis)` schedules `resolve` to be called after `millis` milliseconds
- `await` pauses the function execution until `resolve()` is called
- When the timer fires, `resolve()` is executed, the Promise completes, and the function continues

## Complexity Analysis

- **Time Complexity**: O(1) - Constant time operation regardless of the `millis` value
- **Space Complexity**: O(1) - Only creates one temporary Promise object

Note: While the function "waits" for `millis` milliseconds, this is not processing time but actual delay time, so it's still O(1) in algorithmic terms.

## Key Insights

1. **Promise Constructor Pattern**: The Promise constructor takes an "executor" function that receives `resolve` and `reject` callbacks
2. **setTimeout Integration**: `setTimeout` can directly accept the `resolve` function as its callback
3. **Async/Await Elegance**: Modern syntax makes asynchronous code look synchronous
4. **Non-blocking Sleep**: Unlike traditional blocking sleep functions, this doesn't freeze the JavaScript event loop
5. **Timer Precision**: JavaScript timers aren't perfectly precise, which is why the problem allows for minor deviations

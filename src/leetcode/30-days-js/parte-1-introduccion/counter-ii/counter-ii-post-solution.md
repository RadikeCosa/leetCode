# Intuition

When I first saw this problem, I recognized it as a classic **closure** problem. We need to create a function that returns an object with methods that share and modify the same private state. The key insight is that JavaScript closures allow inner functions to "remember" variables from their outer scope even after the outer function has finished executing.

This is essentially implementing a simple **stateful object** using functional programming concepts rather than classes.

# Approach

I used the **factory function pattern** with closures:

1. **Define the return type** - Create a type for the Counter object interface
2. **Initialize private state** - Create a local variable `count` that will be captured by the closure
3. **Return object with methods** - Each method accesses and modifies the shared `count` variable
4. **Use concise syntax** - Leverage pre-increment/decrement operators and assignment expressions

The key is that all three methods (`increment`, `decrement`, `reset`) close over the same variables (`count` and `init`), creating a shared private state that persists between method calls.

**Why closures work here:**

- Each call to `createCounter()` creates a new execution context
- The returned methods "capture" this specific context
- Even after `createCounter` finishes, the context stays alive because the methods reference it
- This gives us true encapsulation - `count` is completely private

# Complexity

- **Time complexity**: O(1) - All operations (increment, decrement, assignment) are constant time
- **Space complexity**: O(1) per instance - Each counter only stores two numbers in its closure

# Code

```typescript
type Counter = {
  increment: () => number;
  decrement: () => number;
  reset: () => number;
};

export function createCounter(init: number): Counter {
  let count = init;

  return {
    increment: () => ++count,
    decrement: () => --count,
    reset: () => (count = init),
  };
}
```

# Notes

- **Pre-increment/decrement** (`++count`, `--count`) first modify then return, which is exactly what we need
- **Assignment expression** `(count = init)` assigns and returns the assigned value in one line
- **Type safety** - Using TypeScript ensures the returned object matches the expected interface
- **Independent instances** - Each `createCounter()` call creates a completely separate closure
- **Encapsulation** - No way to access `count` directly from outside, only through the provided methods
- **Memory efficiency** - Closures only keep alive the variables that are actually referenced

This approach showcases the power of **functional programming** in JavaScript, achieving object-like behavior without classes.

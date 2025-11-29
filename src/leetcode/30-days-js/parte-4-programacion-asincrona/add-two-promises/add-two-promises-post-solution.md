# Intuition

The problem asks us to combine two promises that resolve to numbers and return their sum. Since we need both values before we can calculate the sum, we must wait for both promises to resolve. The most straightforward approach is using `async/await` to handle the asynchronous operations sequentially.

# Approach

1. **Use async function**: Declare the function as `async` so it automatically returns a Promise
2. **Await both promises**: Use `await` to wait for each promise to resolve and extract their values
3. **Return the sum**: Add the two resolved values and return the result

The `async` function automatically wraps the returned value in a Promise, so we don't need to manually create one.

**Alternative approach**: We could use `Promise.all()` for concurrent execution:

```typescript
const [value1, value2] = await Promise.all([promise1, promise2]);
return value1 + value2;
```

Both approaches are valid, with `Promise.all()` being slightly more efficient for promises with different resolution times.

# Complexity

- **Time complexity: O(1)** - The addition operation is constant time once both promises resolve
- **Space complexity: O(1)** - We only store two numeric variables

_Note: Time complexity doesn't account for promise resolution time, which depends on external factors_

# Code

```ts
export async function addTwoPromises(
  promise1: Promise<number>,
  promise2: Promise<number>
): Promise<number> {
  const valor1 = await promise1;
  const valor2 = await promise2;
  return valor1 + valor2;
}
```

# Notes

- **Sequential vs Concurrent**: Our solution waits for `promise1` before starting to wait for `promise2`. For better performance with independent promises, consider `Promise.all()`
- **Error Handling**: In production code, wrap in `try/catch` to handle promise rejections
- **TypeScript Benefits**: Strong typing ensures we're working with numbers and returning the correct Promise type
- **Automatic Promise Wrapping**: The `async` function automatically converts the returned number into `Promise<number>`

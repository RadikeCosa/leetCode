# Intuition

When I first read this problem, I immediately recognized it as a classic memoization implementation. The key insight is that we need to cache function results and avoid redundant calculations by returning cached values for previously seen inputs.

# Approach

The algorithm uses a closure to maintain a private cache (Map) that stores function results:

1. **Cache Setup**: Create a Map to store input-output pairs
2. **Key Generation**: Convert function arguments to a unique string key using JSON.stringify
3. **Cache Check**: Before calling the original function, check if the result exists in cache
4. **Cache or Compute**: If cached, return the stored result; otherwise, call the function and cache the result
5. **Return Memoized Function**: The returned function has access to the cache via closure

The key insight is using `JSON.stringify(args)` to create unique keys that preserve argument order, ensuring `(2,3)` and `(3,2)` are treated as different cache entries.

# Complexity

- **Time complexity**: O(1) for cached results, O(f(n)) for new calculations where f(n) is the complexity of the original function
- **Space complexity**: O(k) where k is the number of unique input combinations stored in cache

# Code

```ts
type Fn = (...params: number[]) => number;

export function memoize(fn: Fn): Fn {
  const cache = new Map<string, number>();

  return function (...args: number[]): number {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      return cache.get(key)!;
    }

    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}
```

# Notes

- **Edge Cases**: Works correctly with single arguments, zero values, and large numbers
- **Key Generation**: JSON.stringify ensures deterministic, unique keys that preserve argument order
- **Memory Management**: Cache grows with unique input combinations but bounded by problem constraints
- **Alternative Approaches**: Could use object instead of Map, but Map provides better performance for this use case
- **Why This Works**: Closures maintain the cache state between function calls, making it persistent yet private

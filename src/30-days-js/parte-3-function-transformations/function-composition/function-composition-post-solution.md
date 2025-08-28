# Intuition

Function composition is a fundamental concept in functional programming where we combine multiple functions to create a new function. The key insight is that composition works from right to left, just like mathematical function notation f(g(h(x))). When we have an array of functions, we need to apply them in reverse order.

# Approach

The algorithm handles two main cases:

1. **Empty array**: Return the identity function `(x) => x` explicitly
2. **Non-empty array**: Iterate through functions from right to left using a for loop

The solution uses a straightforward iterative approach:

- Start with the input value `x`
- Loop backwards through the functions array (from last to first)
- Apply each function to the accumulated result
- Return the final result

This approach is clear, efficient, and easy to understand.

# Complexity

- Time complexity: O(n) - where n is the number of functions in the array
- Space complexity: O(1) - excluding the call stack for function calls

# Code

```ts
type F = (x: number) => number;

export function compose(functions: F[]): F {
  if (functions.length === 0) {
    return (x: number) => x; // Identity function
  }

  return function (x: number): number {
    for (let i = functions.length - 1; i >= 0; i--) {
      x = functions[i](x);
    }
    return x;
  };
}
```

# Notes

- **Edge case**: Empty array is handled explicitly by returning the identity function
- **Clear logic**: The for loop makes the right-to-left evaluation obvious
- **Alternative approaches**: Could use `reduceRight()` for a more functional style
- **Performance**: The iterative approach is efficient and has good readability
- **Type safety**: TypeScript ensures proper function signatures throughout

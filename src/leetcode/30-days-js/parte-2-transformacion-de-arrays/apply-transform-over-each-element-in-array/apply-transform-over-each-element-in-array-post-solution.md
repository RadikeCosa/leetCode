# Intuition

The problem asks us to implement a custom `map` function that applies a transformation to each element of an array. This is essentially recreating the built-in `Array.map()` method from scratch. The key insight is that we need to iterate through each element, apply the given function, and collect the results in a new array.

# Approach

The solution follows a straightforward iterative approach:

1. **Initialize**: Create an empty array to store the transformed results
2. **Iterate**: Loop through each element of the input array using its index
3. **Transform**: Apply the provided function `fn` to each element and its index
4. **Collect**: Push each transformed result to the new array
5. **Return**: Return the completed array with all transformations

The function signature ensures type safety by defining `Fn` as a function that takes a number and index, returning a number.

# Complexity

- Time complexity: O(n) - We iterate through the array exactly once
- Space complexity: O(n) - We create a new array of the same size as the input

# Code

```ts
type Fn = (n: number, i: number) => number;

export function map(arr: number[], fn: Fn): number[] {
  let newArr: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(fn(arr[i], i));
  }
  return newArr;
}
```

# Notes

- **Edge cases handled**: Empty arrays, single elements, negative numbers, and large numbers within constraints
- **No built-in methods**: Solution avoids using `Array.map()` as required
- **Functional programming**: Demonstrates higher-order functions and immutability principles
- **TypeScript benefits**: Strong typing prevents runtime errors and improves code clarity
- **Alternative approach**: Could use `while` loop or `for...of` with manual index tracking, but traditional `for` loop is most straightforward for this use case

# Intuition

The problem asks us to implement a custom `filter` function that selects elements from an array based on a predicate function. This is essentially recreating the built-in `Array.filter()` method. The key insight is that we need to evaluate each element with the given function and only keep those that return a truthy value.

# Approach

The solution follows a conditional accumulation pattern:

1. **Initialize**: Create an empty array to collect elements that pass the filter
2. **Iterate**: Loop through each element of the input array using its index
3. **Evaluate**: Apply the provided function `fn` to each element and its index
4. **Filter**: Only add elements to the result array when `fn` returns a truthy value
5. **Return**: Return the array containing only the filtered elements

The key difference from `map` is that we conditionally add elements, resulting in a potentially smaller array.

# Complexity

- Time complexity: O(n) - We iterate through the array exactly once
- Space complexity: O(k) - Where k is the number of elements that pass the filter (0 ≤ k ≤ n)

# Code

```ts
type Fn = (n: number, i: number) => any;

export function filter(arr: number[], fn: Fn): number[] {
  let filteredArr: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
}
```

# Notes

- **Truthiness evaluation**: JavaScript automatically evaluates `fn(arr[i], i)` in the `if` condition
- **Original values preserved**: We push `arr[i]` (original element), not `fn(arr[i], i)` (evaluation result)
- **Variable size output**: Unlike `map`, the result array can be smaller than the input
- **Edge cases handled**: Empty arrays, all elements filtered out, all elements pass
- **Flexible predicate**: Function can use value only, index only, or both for filtering decisions
- **No built-in methods**: Solution avoids using `Array.filter()` as required
- **Alternative approaches**: Could use `while` loop or `for...of` with manual index tracking

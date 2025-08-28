# Intuition

The problem asks us to implement a custom `reduce` function that combines all elements of an array into a single value. This is the most fundamental operation in functional programming - taking many values and "reducing" them to one. The key insight is maintaining an accumulator that gets updated by applying the reducer function to the current accumulator and each array element sequentially.

# Approach

The solution follows the classic accumulator pattern:

1. **Initialize**: Start with the provided initial value as our accumulator
2. **Iterate**: Loop through each element of the input array
3. **Reduce**: Apply the reducer function to the current accumulator and current element
4. **Update**: The result becomes the new accumulator value
5. **Return**: Return the final accumulator value

The beauty of reduce is that it handles empty arrays naturally - if there are no elements to process, we simply return the initial value.

# Complexity

- Time complexity: O(n) - We iterate through the array exactly once
- Space complexity: O(1) - We only use a single accumulator variable, no additional data structures

# Code

```ts
type Fn = (accum: number, curr: number) => number;

export function reduce(nums: number[], fn: Fn, init: number): number {
  let acc = init;
  for (let i = 0; i < nums.length; i++) {
    acc = fn(acc, nums[i]);
  }
  return acc;
}
```

# Notes

- **Sequential processing**: Each element is processed in order, with the result of one step feeding into the next
- **Accumulator pattern**: Essential pattern for iterative algorithms and state management
- **Empty array handling**: Naturally handled by the loop structure - returns init when no iterations occur
- **Flexibility**: Can implement sum, product, max, min, string concatenation, or any binary operation
- **Functional programming foundation**: Reduce is the most general array operation - map and filter can be implemented using reduce
- **No built-in methods**: Solution avoids using `Array.reduce()` as required
- **Pure function**: No side effects, deterministic output based solely on inputs

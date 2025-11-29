# Intuition

Since the array is sorted, duplicate elements are grouped together consecutively. This gives us a clear advantage: we only need to compare each element with its immediate predecessor to detect duplicates. We can use a two-pointer approach where one pointer reads through the array and another marks where to write unique elements.

# Approach

We use the **Two Pointers** technique with an in-place modification strategy:

1. **Edge Case**: Handle arrays with ≤1 elements by returning their length directly
2. **Initialize**: Set `write = 1` since the first element is always unique
3. **Iterate**: Use `read` pointer from index 1 to scan the entire array
4. **Compare**: If `nums[read] !== nums[read-1]`, we found a new unique element
5. **Copy**: Write the unique element to `nums[write]` and increment `write`
6. **Return**: The `write` pointer represents the count of unique elements

The key insight is comparing `nums[read]` with `nums[read-1]` rather than `nums[write-1]`, which is more intuitive and works equally well since we're processing a sorted array.

# Complexity

- **Time complexity**: O(n) - Single pass through the array with each element visited exactly once
- **Space complexity**: O(1) - Only using a constant amount of extra space for pointer variables, modifying the array in-place

# Code

```typescript
export function removeDuplicates(nums: number[]): number {
  // Si el array tiene 0 o 1 elementos, no hay duplicados
  if (nums.length <= 1) return nums.length;

  // Puntero para la posición del próximo valor único
  let write = 1;

  // Recorremos el array desde la segunda posición
  for (let read = 1; read < nums.length; read++) {
    // Si encontramos un valor distinto al anterior
    if (nums[read] !== nums[read - 1]) {
      // Copiamos el valor único en la posición 'write'
      nums[write] = nums[read];
      // Avanzamos el puntero 'write'
      write++;
    }
    // Si es igual, simplemente seguimos
  }

  // Retornamos la cantidad de valores únicos
  return write;
}
```

# Notes

- **Edge cases handled**: Single element arrays, all elements equal, no duplicates, two elements (equal/different)
- **Why start write=1**: The first element is always unique by definition
- **Comparison strategy**: Using `nums[read] !== nums[read-1]` is more intuitive than comparing with `nums[write-1]`
- **In-place requirement**: We modify the original array structure rather than creating a new one
- **Array invariant**: After each iteration, the first `write` elements contain all unique values in sorted order

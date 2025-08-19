# Intuition

The key insight is that since the array is **sorted**, all duplicate elements are grouped together consecutively. This means we can use a **two-pointer technique** to efficiently remove duplicates in a single pass without using extra space.

The idea is to maintain one pointer for reading (`read`) and another for writing (`write`) unique elements. We only advance the write pointer when we encounter a new unique element.

# Approach

1. **Edge case**: If the array has 0 or 1 elements, return its length directly.

2. **Two-pointer setup**:

   - `write = 1`: Points to the position where the next unique element should be placed
   - `read = 1`: Iterates through the array starting from index 1

3. **Main algorithm**:

   - Compare `nums[read]` with `nums[read-1]`
   - If they are **different**: we found a new unique element
     - Copy it to `nums[write]`
     - Increment `write`
   - If they are **equal**: skip (it's a duplicate)

4. **Return**: The `write` pointer gives us the count of unique elements

The beauty of this approach is that it modifies the array in-place while maintaining the relative order of unique elements.

# Complexity

- **Time complexity: O(n)** - Single pass through the array
- **Space complexity: O(1)** - Only using constant extra variables

# Code

```ts
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

- **Edge cases handled**: Empty arrays, single elements, all duplicates, no duplicates
- **Why this works**: The sorted property ensures duplicates are adjacent, allowing us to detect them by comparing consecutive elements
- **In-place modification**: We overwrite duplicate positions with unique values, satisfying the problem's space constraint
- **Alternative approaches rejected**:
  - Using a Set would require O(n) extra space
  - Creating a new array would violate the in-place requirement
- **Pattern recognition**: This is a classic two-pointer problem, similar to "Remove Element" and other in-place array modifications

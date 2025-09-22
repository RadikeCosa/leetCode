# Intuition

The problem asks us to extend the Array prototype with a `last()` method that returns the last element of an array, or -1 if the array is empty. This is a straightforward prototype extension problem that requires understanding how JavaScript's prototype system works.

# Approach

The solution involves extending the Array prototype by adding a `last()` method. The method needs to:

1. Check if the array is empty (`this.length === 0`)
2. If empty, return -1 as specified
3. If not empty, return the element at index `this.length - 1`

We use TypeScript's global declaration to properly type the new method, ensuring type safety while extending the native Array interface.

# Complexity

- **Time complexity**: O(1) - Direct array access by index is constant time
- **Space complexity**: O(1) - No additional space is required

# Code

```typescript
declare global {
  interface Array<T> {
    last(): T | -1;
  }
}

Array.prototype.last = function () {
  if (this.length === 0) {
    return -1;
  }
  return this[this.length - 1];
};
```

# Notes

- **Edge Case Handling**: The method correctly handles empty arrays by returning -1
- **Type Safety**: Using TypeScript's global declaration ensures proper typing
- **this Context**: Inside the prototype method, `this` refers to the array instance
- **Prototype Extension**: This approach makes the method available on all Array instances
- **JSON Compatibility**: Works with any valid JSON array as specified in the problem
- **Data Type Flexibility**: Handles all JavaScript data types correctly:
  - Primitive values (numbers, strings, booleans)
  - Special values (null, undefined)
  - Complex objects and arrays
  - Mixed-type arrays
- **Comprehensive Testing**: Solution tested with various edge cases including single-element arrays, falsy values, and different data types

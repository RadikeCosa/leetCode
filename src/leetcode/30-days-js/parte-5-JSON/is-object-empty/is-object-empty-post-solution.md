# Intuition

At first glance, this seems like a simple problem - just check if an object or array is empty. However, the challenge "Can you solve it in O(1) time?" reveals that there are multiple approaches with different performance characteristics. The key insight is that we need to distinguish between arrays and objects, and more importantly, we need to avoid counting ALL properties when we only need to know if ANY property exists.

# Approach

There are essentially two viable approaches for this problem:

## Approach 1: Simple but O(n) - `Object.keys()`

```typescript
function isEmpty(obj: Obj): boolean {
  return Object.keys(obj).length === 0;
}
```

**Why this works:** `Object.keys()` works on both arrays and objects because arrays are objects in JavaScript. For arrays like `[1,2,3]`, it returns `["0","1","2"]` (indices as string keys).

**Why it's O(n):** `Object.keys()` must enumerate and collect ALL properties before returning the array, making it O(n) where n = number of properties.

## Approach 2: Optimized O(1) - Early Termination

```typescript
function isEmpty(obj: Record<string, any> | any[]): boolean {
  if (Array.isArray(obj)) {
    return obj.length === 0; // O(1) - direct property access
  }

  for (let key in obj) {
    return false; // O(1) - stops at first property found
  }
  return true; // O(1) - never entered loop (empty object)
}
```

**Why this is truly O(1):**

- **Arrays**: `length` property is maintained internally and accessed in constant time
- **Objects**: `for...in` either finds the first property immediately (→ `false`) or never executes (→ `true`)

We chose **Approach 2** because the problem specifically challenges us to achieve O(1) time complexity.

# Complexity

- **Time complexity**: O(1) - The `for...in` loop either never executes (empty) or returns immediately on the first property/index found, regardless of total size.
- **Space complexity**: O(1) - We only use a constant amount of additional memory regardless of input size.

# Code

```typescript
export function isEmpty(obj: Record<string, any> | any[]): boolean {
  // Para arrays y objetos: usar for...in que se rompe en la primera iteración (O(1) verdadero)
  for (let key in obj) {
    return false; // Si encontramos cualquier propiedad/índice, no está vacío
  }
  return true; // Si nunca entró al loop, está vacío
}
```

# Notes

- **Why not just use `Object.keys()` everywhere?** While simpler and more readable, it's O(n) because it must enumerate all properties. For large objects (1000+ properties), the performance difference would be significant.

- **Why separate array handling?** Although `Object.keys([1,2,3])` returns `["0","1","2"]` and works, using `Array.isArray()` + `length` is more semantically clear and avoids the O(n) enumeration entirely.

- **Real-world impact:** In most cases with small objects (< 100 properties), the simpler `Object.keys()` approach would be fine. However, this optimization becomes crucial when:

  - Processing thousands of objects in loops
  - Working with large configuration objects
  - Building performance-critical libraries

- **Alternative considered:** We could use `JSON.stringify(obj) === "{}" || JSON.stringify(obj) === "[]"` but this would be extremely inefficient (O(n) serialization).

- **Key pattern learned:** The "early termination with `for...in`" pattern is a powerful technique for "existence checking" problems where you need to know if ANY item exists rather than counting ALL items.

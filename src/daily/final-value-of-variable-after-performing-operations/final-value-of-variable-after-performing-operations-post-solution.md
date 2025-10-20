# Final Value of Variable After Performing Operations - Post Solution

## Intuition

This problem simulates a simple programming language with only four operations on a variable X. The key insight is that **for the final result, the position of X doesn't matter** - only whether the operation is an increment (`++`) or decrement (`--`).

In traditional programming languages, there's a difference between pre-increment (`++X`) and post-increment (`X++`):

- `++X` increments X and returns the new value
- `X++` increments X but returns the old value

However, since we only care about the **final value** of X after all operations (not intermediate return values), both `++X` and `X++` have the same effect: they both add 1 to X.

The problem becomes: **count how many increment operations vs decrement operations** we have, then calculate `increments - decrements`.

**Simple pattern recognition:**

- Operations containing `"++"` → +1 to final result
- Operations containing `"--"` → -1 to final result

## Approach

Based on our intuition, we can solve this problem using **simple counting** instead of actual simulation:

### Method 1: Direct Simulation (Straightforward)

**Algorithm:**

1. Initialize variable `X = 0`
2. Iterate through each operation in the array
3. For each operation:
   - If operation contains `"++"` → increment X by 1
   - If operation contains `"--"` → decrement X by 1
4. Return final value of X

```typescript
function finalValueAfterOperations(operations: string[]): number {
  let X = 0;
  for (const op of operations) {
    if (op.includes("++")) {
      X++;
    } else if (op.includes("--")) {
      X--;
    }
  }
  return X;
}
```

### Method 2: Mathematical Counting (Optimized)

**Algorithm:**

1. Count total increment operations (containing `"++"`)
2. Count total decrement operations (containing `"--"`)
3. Return `incrementCount - decrementCount`

```typescript
function finalValueAfterOperations(operations: string[]): number {
  let incrementCount = 0;
  let decrementCount = 0;

  for (const op of operations) {
    if (op.includes("++")) {
      incrementCount++;
    } else {
      decrementCount++;
    }
  }

  return incrementCount - decrementCount;
}
```

### Method 3: One-liner with Reduce (Functional)

**Algorithm:**
Use `reduce` to accumulate the result directly:

```typescript
function finalValueAfterOperations(operations: string[]): number {
  return operations.reduce((X, op) => {
    return op.includes("++") ? X + 1 : X - 1;
  }, 0);
}
```

**All three methods are equivalent** - choose based on readability preference. Method 1 is most intuitive, Method 2 makes the counting explicit, Method 3 is most concise.

## Complexity

**Time Complexity: O(n)**

- We iterate through the operations array exactly once
- Each operation requires O(1) time for string comparison/checking
- Total: O(n) where n = length of operations array

**Space Complexity: O(1)**

- We only use a constant amount of extra space
- One variable to track the current value of X
- No additional data structures that scale with input size

**All three methods have identical complexity:**

- **Method 1 (Direct Simulation)**: O(n) time, O(1) space
- **Method 2 (Mathematical Counting)**: O(n) time, O(1) space
- **Method 3 (Functional Reduce)**: O(n) time, O(1) space

This is **optimal** since we must examine each operation at least once to determine the final result.

## Code

**Final Implementation (Optimized Direct Comparison):**

```typescript
function finalValueAfterOperations(operations: string[]): number {
  let x = 0;
  for (const op of operations) {
    if (op === "++X" || op === "X++") {
      x++;
    } else {
      x--;
    }
  }
  return x;
}
```

**Key improvements over the approach examples:**

1. **Exact comparison** (`===`) instead of `includes()` - more precise and efficient
2. **Handles all valid cases** - since constraints guarantee only 4 possible operations
3. **Simple else clause** - if not increment, must be decrement (given constraints)
4. **Clean variable naming** - lowercase `x` follows TypeScript conventions

**Alternative implementations:**

```typescript
// More explicit (but unnecessarily verbose given constraints)
function finalValueAfterOperations(operations: string[]): number {
  let x = 0;
  for (const op of operations) {
    if (op === "++X" || op === "X++") {
      x++;
    } else if (op === "--X" || op === "X--") {
      x--;
    }
  }
  return x;
}

// Functional one-liner
const finalValueAfterOperations = (operations: string[]): number =>
  operations.reduce((x, op) => (op.includes("++") ? x + 1 : x - 1), 0);
```

## Notes

**Important insights:**

1. **Pre/Post increment equivalence**: For final values, `++X` and `X++` are identical - the difference only matters when using the return value of the operation.

2. **Constraint leveraging**: Since we're guaranteed only 4 valid operations, we can use simple else logic instead of explicit checking for decrements.

3. **String comparison efficiency**: Direct `===` comparison is faster than `includes()` for this specific case with fixed-length strings.

4. **Problem pattern**: This represents a common pattern in programming - **simulation vs mathematical insight**. While we could simulate each step, recognizing the counting pattern leads to cleaner code.

5. **Edge cases handling**: The solution naturally handles edge cases:

   - Single operation arrays
   - All increments or all decrements
   - Balanced operations (result = 0)
   - Negative final values

6. **Real-world applications**: Similar patterns appear in:
   - Financial transaction processing (debits/credits)
   - Game score calculations (points gained/lost)
   - Inventory management (items added/removed)

**Follow-up considerations:**

- What if there were more operation types?
- How would you handle invalid operations?
- Could this be optimized further for very large arrays?

The beauty of this problem is its simplicity - sometimes the most elegant solution is the most straightforward one.

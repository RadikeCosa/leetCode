# Intuition

When looking at this problem, I need to find the **largest perimeter** of a valid triangle. My first insight is that if I want the largest perimeter, I should try the **largest numbers first**. Also, for three sides to form a triangle, they must satisfy the **triangle inequality**: the sum of any two sides must be greater than the third side.

The key insight is that if I sort the array in descending order and check consecutive triplets, the **first valid triangle** I find will automatically have the **largest perimeter**.

# Approach

I use a **greedy algorithm** combined with **sorting**:

1. **Sort the array in descending order** to prioritize larger numbers
2. **Iterate through consecutive triplets** of elements
3. **Check triangle inequality** for each triplet
4. **Return the perimeter** of the first valid triangle found
5. **Return 0** if no valid triangle exists

**Mathematical optimization**: For three sides a ≥ b ≥ c (after sorting), I only need to check `b + c > a`. The other two inequalities (`a + b > c` and `a + c > b`) are automatically satisfied when a ≥ b ≥ c.

**Why greedy works**: Since we check larger combinations first, the first valid triangle we encounter will have the maximum possible perimeter.

# Complexity

- **Time complexity**: O(n log n) - dominated by sorting the array
- **Space complexity**: O(1) - only using constant extra space for variables

The sorting step dominates the complexity, while the iteration is O(n) in the worst case.

# Code

```typescript
export function largestPerimeter(nums: number[]): number {
  // Sort in descending order to check largest combinations first
  nums.sort((a, b) => b - a);

  // Find first valid triangle using greedy approach
  for (let i = 0; i < nums.length - 2; i++) {
    const [a, b, c] = [nums[i], nums[i + 1], nums[i + 2]];

    // Triangle inequality: sum of two smaller sides > largest side
    if (b + c > a) {
      return a + b + c; // Return perimeter of valid triangle
    }
  }

  return 0; // No valid triangle found
}
```

# Notes

- **Edge cases handled**: Arrays with exactly 3 elements, impossible triangles, boundary conditions where triangle inequality barely holds
- **Algorithm choice**: Greedy approach is optimal here because sorting allows us to find the maximum perimeter in one pass
- **Mathematical insight**: Simplified triangle inequality check (only one condition instead of three) significantly reduces complexity
- **Code style**: Used destructuring assignment `[a, b, c]` for better readability and semantic meaning (a = largest, b and c = smaller sides)

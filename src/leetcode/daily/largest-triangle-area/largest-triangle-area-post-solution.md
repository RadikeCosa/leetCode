# Intuition

When I first saw this problem, I realized we need to find the **largest possible triangle** from all combinations of 3 points. Since the constraints are small (n ≤ 50), a brute force approach checking all C(n,3) combinations would be efficient enough.

The key insight is using the **determinant formula** for triangle area instead of calculating distances and angles, which simplifies the math significantly.

# Approach

My approach uses **exhaustive search** with an optimized geometric calculation:

1. **Helper function**: Create `calculateTriangleArea()` that implements the determinant formula for triangle area
2. **Triple nested loops**: Generate all possible combinations of 3 points using indices i < j < k
3. **Track maximum**: Keep updating `maxArea` with the largest area found
4. **Mathematical formula**: Use `Area = (1/2) × |x₁(y₂ - y₃) + x₂(y₃ - y₁) + x₃(y₁ - y₂)|`

The determinant formula is derived from the cross product of vectors and avoids the complexity of computing distances, making it both mathematically elegant and computationally efficient.

**Why this works**: Every triangle is uniquely determined by 3 non-collinear points, and the determinant formula gives us the exact area regardless of coordinate signs or triangle orientation.

# Complexity

- **Time complexity**: **O(n³)** where n is the number of points

  - We generate C(n,3) = n×(n-1)×(n-2)/6 combinations using triple nested loops
  - Each area calculation is O(1) using the determinant formula
  - With n ≤ 50, this results in at most ~19,600 operations, which is very manageable

- **Space complexity**: **O(1)** - Constant extra space
  - Only using local variables for coordinates and tracking maximum area
  - The helper function doesn't create additional data structures
  - No recursion or dynamic arrays needed

# Code

```typescript
export function largestTriangleArea(points: number[][]): number {
  const n = points.length;
  let maxArea = 0;

  const area = (p1: number[], p2: number[], p3: number[]) => {
    return (
      Math.abs(
        p1[0] * (p2[1] - p3[1]) +
          p2[0] * (p3[1] - p1[1]) +
          p3[0] * (p1[1] - p2[1])
      ) / 2
    );
  };

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        maxArea = Math.max(maxArea, area(points[i], points[j], points[k]));
      }
    }
  }
  return maxArea;
}
```

# Notes

- **Edge cases handled**: Collinear points naturally return area = 0, negative coordinates work seamlessly with the determinant formula
- **Alternative approaches rejected**: Using distance calculations + Heron's formula would be more complex and prone to floating-point precision issues
- **Key insights**: The determinant approach is mathematically clean and avoids trigonometry entirely
- **Code optimization journey**: Evolved from verbose `calculateTriangleArea()` function to concise arrow function `area = (p1, p2, p3) =>` for better readability
- **Direct coordinate access**: Using `p1[0], p1[1]` instead of destructuring `[x1, y1] = p1` reduces variable assignments and improves conciseness
- **Simplified loop bounds**: `i < n` instead of `i < n-2` makes the code more natural to read while `j = i+1, k = j+1` ensures valid combinations
- **Modern functional style**: Arrow functions and `const` declarations align with contemporary JavaScript best practices

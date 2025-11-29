# Intuition

The problem asks to find two vertical lines that can form a container holding the maximum water. The key insight is that the water volume is determined by the shorter line's height multiplied by the distance between the lines.

# Approach

Use two pointers starting from both ends of the array. At each step, calculate the area between the current pointers and move the pointer pointing to the shorter line inward. This greedy approach works because moving the taller line wouldn't increase the area (width decreases), and moving the shorter line gives a chance to find a taller line that could form a larger area.

# Complexity

- Time complexity: O(n) - Single pass through the array
- Space complexity: O(1) - Only constant variables used

# Code

```typescript
export function maxArea(height: number[]): number {
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;

  while (left < right) {
    const width = right - left;
    const minHeight = Math.min(height[left], height[right]);
    maxArea = Math.max(maxArea, width * minHeight);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
}
```

# Notes

- Edge cases handled: arrays of length 2, arrays with zeros, increasing/decreasing sequences
- Why alternative approaches were rejected: Brute force O(n²) is too slow for n ≤ 10⁵
- Key insights: The greedy pointer movement preserves optimality by eliminating impossible better solutions
- Variable naming: Used descriptive names like `minHeight` and `width` for clarity

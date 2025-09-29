/**
 * LeetCode Problem 976: Largest Perimeter Triangle
 * Difficulty: Easy
 * Topics: Array, Math, Greedy, Sorting
 *
 * Given an integer array nums, return the largest perimeter of a triangle with a non-zero area,
 * formed from three of these lengths. If it is impossible to form any triangle of a non-zero area, return 0.
 *
 * Time Complexity: O(n log n) - Dominated by sorting
 * Space Complexity: O(1) - In-place sorting, constant extra space
 */
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

/**
 * LeetCode Problem 11: Container With Most Water
 * Difficulty: Medium
 * Topics: Array, Two Pointers, Greedy
 *
 * You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
 *
 * Find two lines that together with the x-axis form a container, such that the container contains the most water.
 *
 * Return the maximum amount of water a container can store.
 *
 * Notice that you may not slant the container.
 *
 * Time Complexity: O(n) - Single pass with two pointers
 * Space Complexity: O(1) - Constant extra space
 */
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

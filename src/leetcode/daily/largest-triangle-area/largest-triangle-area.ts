/**
 * LeetCode Problem 812: Largest Triangle Area
 * Difficulty: Easy
 * Topics: Array, Math, Geometry
 *
 * Given an array of points on the X-Y plane points where points[i] = [xi, yi],
 * return the area of the largest triangle that can be formed by any three different points.
 * Answers within 10^-5 of the actual answer will be accepted.
 *
 * Time Complexity: O(n³) where n is the number of points
 * Space Complexity: O(1) - Constant extra space
 */
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

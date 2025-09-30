/**
 * LeetCode Problem 1039: Minimum Score Triangulation of Polygon
 * Difficulty: Medium
 * Topics: Array, Dynamic Programming
 *
 * You have a convex n-sided polygon where each vertex has an integer value. You are given an integer
 * array values where values[i] is the value of the ith vertex in clockwise order.
 *
 * Polygon triangulation is a process where you divide a polygon into a set of triangles and the
 * vertices of each triangle must also be vertices of the original polygon. Note that no
 * other shapes other than triangles are allowed in the division. This process will
 * result in n - 2 triangles.
 *
 * You will triangulate the polygon. For each triangle, the weight of that triangle is the product of the values at its vertices. The total score
 * of the triangulation is the sum of these weights over all n - 2 triangles.
 *
 * Return the minimum possible score that you can achieve with some triangulation of the polygon.
 *
 * Example 1:
 * Input: values = [1,2,3]
 * Output: 6
 * Explanation: The polygon is already triangulated, and the score of the only triangle is 6.
 *
 * Example 2:
 * Input: values = [3,7,4,5]
 * Output: 144
 * Explanation: There are two triangulations, with possible scores: 3*7*5 + 4*5*7 = 245, or
 * 3*4*5 + 3*4*7 = 144. The minimum score is 144.
 *
 * Example 3:
 * Input: values = [1,3,1,4,1,5]
 * Output: 13
 * Explanation: The minimum score triangulation is 1*1*3 + 1*1*4 + 1*1*5 + 1*1*1 = 13.
 *
 * Constraints:
 * - n == values.length
 * - 3 <= n <= 50
 * - 1 <= values[i] <= 100
 *
 * Hints:
 * - Without loss of generality, there is a triangle that uses adjacent vertices A[0]
 *   and A[N-1] (where N = A.length). Depending on your choice K of it, this breaks
 *   down the triangulation into two subproblems A[1:K] and A[K+1:N-1].
 */
import { describe, it, expect } from "vitest";
import { minScoreTriangulation } from "./minimum-score-triangulation-of-polygon";

describe("Minimum Score Triangulation of Polygon", () => {
  it("should return 6 for triangle [1,2,3] - single triangle case", () => {
    expect(minScoreTriangulation([1, 2, 3])).toBe(6);
  });

  it("should return 144 for quadrilateral [3,7,4,5] - minimum of two possible triangulations", () => {
    expect(minScoreTriangulation([3, 7, 4, 5])).toBe(144);
  });

  it("should return 13 for hexagon [1,3,1,4,1,5] - complex polygon with multiple triangulation options", () => {
    expect(minScoreTriangulation([1, 3, 1, 4, 1, 5])).toBe(13);
  });
});

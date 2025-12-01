/**
 * LeetCode Problem 417: Pacific Atlantic Water Flow
 * Difficulty: Medium
 * Topics: Array, Depth-First Search, Breadth-First Search, Matrix
 *
 * There is an m x n rectangular island that borders both the Pacific Ocean
 * and Atlantic Ocean. The Pacific Ocean touches the island's left and top
 * edges, and the Atlantic Ocean touches the island's right and bottom edges.
 *
 * The island is partitioned into a grid of square cells. You are given an
 * m x n integer matrix heights where heights[r][c] represents the height
 * above sea level of the cell at coordinate (r, c).
 *
 * The island receives a lot of rain, and the rain water can flow to neighboring
 * cells directly north, south, east, and west if the neighboring cell's height
 * is less than or equal to the current cell's height. Water can flow from any
 * cell adjacent to an ocean into the ocean.
 *
 * Return a 2D list of grid coordinates result where result[i] = [ri, ci]
 * denotes that rain water can flow from cell (ri, ci) to both the Pacific
 * and Atlantic oceans.
 *
 * Example 1:
 * Input: heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]
 * Output: [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]
 * Explanation: The following cells can flow to the Pacific and Atlantic oceans, as shown
 * below:
 * [0,4]: [0,4] -> Pacific Ocean
 *        [0,4] -> Atlantic Ocean
 * [1,3]: [1,3] -> [0,3] -> Pacific Ocean
 *        [1,3] -> [1,4] -> Atlantic Ocean
 * [1,4]: [1,4] -> [1,3] -> [0,3] -> Pacific Ocean
 *        [1,4] -> Atlantic Ocean
 * [2,2]: [2,2] -> [1,2] -> [0,2] -> Pacific Ocean
 *        [2,2] -> [2,3] -> [2,4] -> Atlantic Ocean
 * [3,0]: [3,0] -> Pacific Ocean
 *        [3,0] -> [4,0] -> Atlantic Ocean
 * [3,1]: [3,1] -> [3,0] -> Pacific Ocean
 *        [3,1] -> [4,1] -> Atlantic Ocean
 * [4,0]: [4,0] -> Pacific Ocean
 *        [4,0] -> Atlantic Ocean
 * Note that there are other possible paths for these cells to flow to the Pacific and Atlantic oceans.
 *
 * Example 2:
 * Input: heights = [[1]]
 * Output: [[0,0]]
 * Explanation: The water can flow from the only cell to the Pacific and Atlantic oceans.
 *
 * Constraints:
 * - m == heights.length
 * - n == heights[r].length
 * - 1 <= m, n <= 200
 * - 0 <= heights[r][c] <= 10^5
 */
import { describe, it, expect } from "vitest";
import { pacificAtlantic } from "./pacific-atlantic-water-flow";
describe("Pacific Atlantic Water Flow", () => {
    it("should return cells that can flow to both Pacific and Atlantic oceans for 5x5 matrix", () => {
        // Test the main example with a 5x5 matrix containing various heights
        // Expected result should be sorted by row, then by column as per LeetCode convention
        const heights = [
            [1, 2, 2, 3, 5],
            [3, 2, 3, 4, 4],
            [2, 4, 5, 3, 1],
            [6, 7, 1, 4, 5],
            [5, 1, 1, 2, 4],
        ];
        const result = pacificAtlantic(heights);
        expect(result).toEqual([
            [0, 4],
            [1, 3],
            [1, 4],
            [2, 2],
            [3, 0],
            [3, 1],
            [4, 0],
        ]);
    });
    it("should return the single cell for 1x1 matrix", () => {
        // Edge case: smallest possible matrix (1x1)
        // The only cell can flow to both oceans since it's on all borders
        const heights = [[1]];
        const result = pacificAtlantic(heights);
        expect(result).toEqual([[0, 0]]);
    });
    it("should handle single row matrix", () => {
        // Edge case: 1x4 matrix (single row)
        // All cells can flow to both oceans since they're connected
        const heights = [[3, 2, 1, 4]];
        const result = pacificAtlantic(heights);
        expect(result).toEqual([
            [0, 0],
            [0, 1],
            [0, 2],
            [0, 3],
        ]);
    });
    it("should handle single column matrix", () => {
        // Edge case: 4x1 matrix (single column)
        // All cells can flow to both oceans since they're connected
        const heights = [[3], [2], [1], [4]];
        const result = pacificAtlantic(heights);
        expect(result).toEqual([
            [0, 0],
            [1, 0],
            [2, 0],
            [3, 0],
        ]);
    });
    it("should handle matrix where all cells can flow to both oceans", () => {
        // Edge case: despite varying heights, all cells can reach both oceans
        // through different paths to the borders
        const heights = [
            [5, 5, 5],
            [1, 1, 1],
            [5, 5, 5],
        ];
        const result = pacificAtlantic(heights);
        expect(result).toEqual([
            [0, 0],
            [0, 1],
            [0, 2],
            [1, 0],
            [1, 1],
            [1, 2],
            [2, 0],
            [2, 1],
            [2, 2],
        ]);
    });
    it("should handle flat terrain matrix", () => {
        // Edge case: flat terrain allows all cells to flow to both oceans
        const heights = [
            [1, 1, 1],
            [1, 1, 1],
            [1, 1, 1],
        ];
        const result = pacificAtlantic(heights);
        expect(result).toEqual([
            [0, 0],
            [0, 1],
            [0, 2],
            [1, 0],
            [1, 1],
            [1, 2],
            [2, 0],
            [2, 1],
            [2, 2],
        ]);
    });
});

# Intuition

This problem requires finding all cells on an island from which rainwater can flow to both the Pacific Ocean (left and top borders) and Atlantic Ocean (right and bottom borders). The key insight is to reverse the flow direction: instead of checking if each cell can reach the oceans, we start from the ocean borders and find all cells that can flow to each ocean.

# Approach

We use a DFS-based approach starting from both ocean borders simultaneously:

1. **Initialize reachability matrices**: Two boolean matrices to track cells reachable from Pacific and Atlantic
2. **DFS from Pacific borders**: Start from left edge (column 0) and top edge (row 0), marking all cells reachable following water flow rules
3. **DFS from Atlantic borders**: Start from right edge (column n-1) and bottom edge (row m-1), marking all cells reachable
4. **Find intersection**: Cells marked as reachable from both oceans are the solution

The water flow condition is: from cell A to cell B, water can flow if `height[B] <= height[A]`. When searching from oceans, we follow this same rule to find cells that can reach the oceans.

# Complexity

- **Time complexity**: O(m×n) - Each cell is visited at most twice (once per ocean DFS)
- **Space complexity**: O(m×n) - Two boolean matrices plus recursion stack

# Code

```typescript
export function pacificAtlantic(heights: number[][]): number[][] {
  const rows = heights.length;
  const cols = heights[0].length;
  const pacificReachable: boolean[][] = Array.from({ length: rows }, () =>
    Array(cols).fill(false)
  );
  const atlanticReachable: boolean[][] = Array.from({ length: rows }, () =>
    Array(cols).fill(false)
  );

  const dfs = (row: number, col: number, reachable: boolean[][]) => {
    if (
      row < 0 ||
      row >= rows ||
      col < 0 ||
      col >= cols ||
      reachable[row][col]
    ) {
      return;
    }

    reachable[row][col] = true;
    const currentHeight = heights[row][col];

    const directions = [
      [0, 1], // right
      [0, -1], // left
      [1, 0], // down
      [-1, 0], // up
    ];

    for (const [dr, dc] of directions) {
      const newRow = row + dr;
      const newCol = col + dc;

      if (
        newRow >= 0 &&
        newRow < rows &&
        newCol >= 0 &&
        newCol < cols &&
        heights[newRow][newCol] <= currentHeight &&
        !reachable[newRow][newCol]
      ) {
        dfs(newRow, newCol, reachable);
      }
    }
  };

  // Start DFS from Pacific Ocean borders (left and top edges)
  for (let row = 0; row < rows; row++) {
    dfs(row, 0, pacificReachable);
  }
  for (let col = 0; col < cols; col++) {
    dfs(0, col, pacificReachable);
  }

  // Start DFS from Atlantic Ocean borders (right and bottom edges)
  for (let row = 0; row < rows; row++) {
    dfs(row, cols - 1, atlanticReachable);
  }
  for (let col = 0; col < cols; col++) {
    dfs(rows - 1, col, atlanticReachable);
  }

  // Collect cells reachable from both oceans
  const result: number[][] = [];
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (pacificReachable[row][col] && atlanticReachable[row][col]) {
        result.push([row, col]);
      }
    }
  }

  return result;
}
```

# Notes

- **Reverse flow thinking**: Starting from destinations (oceans) instead of sources (cells) reduces complexity from O((m×n)²) to O(m×n)
- **Water flow physics**: Water always flows to equal or lower heights, never uphill
- **Boundary handling**: Ocean-adjacent cells are automatically reachable from their respective oceans
- **Edge cases**: 1×1 matrices always return [[0,0]], connected terrains allow all cells to reach both oceans
- **Alternative implementation**: BFS could be used instead of DFS for better memory control in very large matrices

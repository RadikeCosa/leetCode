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
 * Time Complexity: O(rows * cols) - Each cell is visited at most twice (once per ocean)
 * Space Complexity: O(rows * cols) - Two boolean matrices plus recursion stack
 */
export function pacificAtlantic(heights: number[][]): number[][] {
  const rows = heights.length;
  const cols = heights[0].length;
  const pacificReachable: boolean[][] = Array.from({ length: rows }, () =>
    Array(cols).fill(false)
  );
  const atlanticReachable: boolean[][] = Array.from({ length: rows }, () =>
    Array(cols).fill(false)
  );

  /**
   * DFS para explorar celdas alcanzables desde un océano
   * @param row Fila actual
   * @param col Columna actual
   * @param reachable Matriz que marca celdas alcanzables
   */
  const dfs = (row: number, col: number, reachable: boolean[][]) => {
    // Validar límites y si ya fue visitada
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

    // Explorar las 4 direcciones posibles
    // Solo nos movemos a celdas con altura >= altura actual
    const directions = [
      [0, 1], // derecha
      [0, -1], // izquierda
      [1, 0], // abajo
      [-1, 0], // arriba
    ];

    for (const [dr, dc] of directions) {
      const newRow = row + dr;
      const newCol = col + dc;

      // Solo explorar si la celda vecina tiene altura >= altura actual
      if (
        newRow >= 0 &&
        newRow < rows &&
        newCol >= 0 &&
        newCol < cols &&
        heights[newRow][newCol] >= currentHeight &&
        !reachable[newRow][newCol]
      ) {
        dfs(newRow, newCol, reachable);
      }
    }
  };

  // Iniciar DFS desde las costas del Pacífico (borde izquierdo y superior)
  // Borde izquierdo (columna 0)
  for (let row = 0; row < rows; row++) {
    dfs(row, 0, pacificReachable);
  }
  // Borde superior (fila 0)
  for (let col = 0; col < cols; col++) {
    dfs(0, col, pacificReachable);
  }

  // Iniciar DFS desde las costas del Atlántico (borde derecho e inferior)
  // Borde derecho (columna cols-1)
  for (let row = 0; row < rows; row++) {
    dfs(row, cols - 1, atlanticReachable);
  }
  // Borde inferior (fila rows-1)
  for (let col = 0; col < cols; col++) {
    dfs(rows - 1, col, atlanticReachable);
  }

  // Recopilar celdas que pueden alcanzar ambos océanos
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

/**
 * LeetCode Problem 36: Valid Sudoku
 * Difficulty: Medium
 * Topics: Array, Hash Table, Matrix
 *
 * Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:
 * 1. Each row must contain the digits 1-9 without repetition.
 * 2. Each column must contain the digits 1-9 without repetition.
 * 3. Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
 *
 * Note:
 * - A Sudoku board (partially filled) could be valid but is not necessarily solvable.
 * - Only the filled cells need to be validated according to the mentioned rules.
 *
 * Time Complexity: O(1) - fixed 9x9 board size
 * Space Complexity: O(1) - fixed space for validation sets
 */
export function isValidSudoku(board: string[][]): boolean {
  // Crear sets para trackear números ya vistos en cada fila, columna y sub-caja
  const rows: Set<string>[] = Array.from({ length: 9 }, () => new Set());
  const cols: Set<string>[] = Array.from({ length: 9 }, () => new Set());
  const boxes: Set<string>[] = Array.from({ length: 9 }, () => new Set());

  // Recorrer cada celda del tablero 9x9
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const num = board[i][j];

      // Saltar celdas vacías (representadas por ".")
      if (num !== ".") {
        // Validar fila: verificar si el número ya existe en la fila i
        if (rows[i].has(num)) return false;
        rows[i].add(num);

        // Validar columna: verificar si el número ya existe en la columna j
        if (cols[j].has(num)) return false;
        cols[j].add(num);

        // Validar sub-caja 3x3: calcular índice de la caja y verificar duplicados
        // Fórmula: Math.floor(i/3)*3 + Math.floor(j/3) mapea (i,j) a índice 0-8
        const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
        if (boxes[boxIndex].has(num)) return false;
        boxes[boxIndex].add(num);
      }
    }
  }

  // Si llegamos aquí, no se encontraron duplicados
  return true;
}

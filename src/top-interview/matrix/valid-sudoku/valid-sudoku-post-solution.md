# Intuition

The problem asks us to validate a Sudoku board according to three rules: no duplicates in rows, columns, and 3x3 sub-boxes. Since we only need to check validity (not solve), we can use hash sets to efficiently track seen numbers and detect duplicates in a single pass.

# Approach

The solution uses **three arrays of Sets** to track numbers seen in each row, column, and 3x3 sub-box:

1. **Initialize tracking structures**: Create 9 Sets each for rows, columns, and boxes
2. **Single pass iteration**: Loop through each cell in the 9x9 board
3. **Skip empty cells**: Ignore cells containing '.' (empty)
4. **Validate three rules simultaneously**:
   - Check if number exists in current row's Set
   - Check if number exists in current column's Set
   - Check if number exists in current sub-box's Set
5. **Early termination**: Return `false` immediately upon finding any duplicate
6. **Add to tracking**: If no duplicates found, add number to all three relevant Sets

**Key insight**: The sub-box index is calculated using `Math.floor(i/3) * 3 + Math.floor(j/3)`, which maps any (i,j) coordinate to one of 9 sub-box indices (0-8).

# Complexity

- **Time complexity**: O(1) - We always process exactly 81 cells with constant-time Set operations
- **Space complexity**: O(1) - We use exactly 27 Sets with at most 9 elements each, totaling constant space

# Code

```typescript
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
```

# Notes

- **Set behavior**: Sets automatically handle duplicates without throwing errors, but we check `.has()` first to detect violations
- **Box index formula**: The expression `Math.floor(i/3) * 3 + Math.floor(j/3)` elegantly maps any board position to its corresponding 3x3 sub-box
- **Early termination**: Returning `false` immediately upon finding a duplicate makes the algorithm efficient
- **Fixed complexity**: Since Sudoku boards are always 9x9, this is technically O(1) despite the nested loops
- **TypeScript types**: Using `Set<string>[]` provides type safety and clear intent
- **Single pass efficiency**: We validate all three rules in one iteration, avoiding multiple board traversals

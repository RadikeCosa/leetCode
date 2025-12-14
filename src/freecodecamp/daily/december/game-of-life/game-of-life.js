/**
 * FreeCodeCamp Problem: Game Of Life
 * Category: FreeCodeCamp
 *
 * @param {number[][]} grid - The current state of the game board, a 2D array where each element is 0 (dead) or 1 (alive).
 * @returns {number[][]} The next state of the game board after applying the Game of Life rules.
 */
function gameOfLife(grid) {
  const rows = grid.length;
  const cols = grid[0].length;

  function contarVecinosVivos(matriz, i, j) {
    let vivos = 0;
    for (let dx = -1; dx <= 1; dx++) {
      for (let dy = -1; dy <= 1; dy++) {
        if (dx === 0 && dy === 0) continue;
        const ni = i + dx;
        const nj = j + dy;
        if (ni >= 0 && ni < rows && nj >= 0 && nj < cols) {
          vivos += matriz[ni][nj];
        }
      }
    }
    return vivos;
  }

  function siguienteEstadoCelda(actual, vecinosVivos) {
    if (actual === 1) {
      if (vecinosVivos < 2 || vecinosVivos > 3) return 0;
      if (vecinosVivos === 2 || vecinosVivos === 3) return 1;
    } else {
      if (vecinosVivos === 3) return 1;
    }
    return 0;
  }

  // Construcción explícita de la nueva matriz
  const nuevoGrid = [];
  for (let i = 0; i < rows; i++) {
    const nuevaFila = [];
    for (let j = 0; j < cols; j++) {
      const vecinos = contarVecinosVivos(grid, i, j);
      const nuevoEstado = siguienteEstadoCelda(grid[i][j], vecinos);
      nuevaFila.push(nuevoEstado);
    }
    nuevoGrid.push(nuevaFila);
  }
  return nuevoGrid;
}

export default gameOfLife;

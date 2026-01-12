/**
 * FreeCodeCamp Problem: Tic Tac Toe
 * Category: FreeCodeCamp
 *
 * @param {string[][]} board - A 3x3 matrix representing the Tic Tac Toe board
 * @returns {string} Result of the game: "X wins", "O wins", or "Draw"
 */
function ticTacToe(board) {
  // Función auxiliar para verificar si un jugador ha ganado
  const checkWinner = (player) => {
    // Verificar filas
    for (let row = 0; row < 3; row++) {
      if (
        board[row][0] === player &&
        board[row][1] === player &&
        board[row][2] === player
      ) {
        return true;
      }
    }
    // Verificar columnas
    for (let col = 0; col < 3; col++) {
      if (
        board[0][col] === player &&
        board[1][col] === player &&
        board[2][col] === player
      ) {
        return true;
      }
    }
    // Verificar diagonales
    if (
      board[0][0] === player &&
      board[1][1] === player &&
      board[2][2] === player
    ) {
      return true;
    }
    if (
      board[0][2] === player &&
      board[1][1] === player &&
      board[2][0] === player
    ) {
      return true;
    }
    return false;
  };

  // Verificar si "O" ha ganado primero (según los tests)
  if (checkWinner("O")) {
    return "O wins";
  }
  // Verificar si "X" ha ganado
  if (checkWinner("X")) {
    return "X wins";
  }
  // Si nadie ha ganado, es un empate
  return "Draw";
}

export default ticTacToe;

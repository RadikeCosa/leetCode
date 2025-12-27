/**
 * FreeCodeCamp Problem: Rock Paper Scissors
 * Category: FreeCodeCamp
 *
 * @param {string} player1 - Choice of player 1 ("Rock", "Paper", or "Scissors")
 *
 * @param {string} player2 - Choice of player 2 ("Rock", "Paper", or "Scissors")
 * @returns {string} Result of the game ("Player 1 wins", "Player 2 wins", or "Tie")
 */
function rockPaperScissors(player1, player2) {
  if (player1 === player2) {
    return "Tie";
  }

  if (
    (player1 === "Rock" && player2 === "Scissors") ||
    (player1 === "Paper" && player2 === "Rock") ||
    (player1 === "Scissors" && player2 === "Paper")
  ) {
    return "Player 1 wins";
  } else {
    return "Player 2 wins";
  }
}

export default rockPaperScissors;

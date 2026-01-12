import ticTacToe from "./tic-tac-toe";

/**
 Tic-Tac-Toe
Given a 3×3 matrix (an array of arrays) representing a completed Tic-Tac-Toe game, determine the winner.

Each element in the given matrix is either an "X" or "O".
A player wins if they have three of their characters in a row - horizontally, vertically, or diagonally.

Return:

"X wins" if player X has three in a row.
"O wins" if player O has three in a row.
"Draw" if no player has three in a row.
Tests
1. ticTacToe([["X", "X", "X"], ["O", "O", "X"], ["O", "X", "O"]]) should return "X wins".
2. ticTacToe([["X", "O", "X"], ["X", "O", "X"], ["O", "O", "X"]]) should return "O wins".
3. ticTacToe([["X", "O", "X"], ["O", "X", "O"], ["O", "X", "O"]]) should return "Draw".
4. ticTacToe([["X", "X", "O"], ["X", "O", "X"], ["O", "X", "X"]]) should return "O wins".
5. ticTacToe([["X", "O", "O"], ["O", "X", "O"], ["O", "X", "X"]]) should return "X wins".
6. ticTacToe([["O", "X", "X"], ["X", "O", "O"], ["X", "O", "X"]]) should return "Draw".
 */

describe("Tic Tac Toe", () => {
  it("test case 1", () => {
    const board = [
      ["X", "X", "X"],
      ["O", "O", "X"],
      ["O", "X", "O"],
    ];
    expect(ticTacToe(board)).toBe("X wins");
  });

  it("test case 2", () => {
    const board = [
      ["X", "O", "X"],
      ["X", "O", "X"],
      ["O", "O", "X"],
    ];
    expect(ticTacToe(board)).toBe("O wins");
  });
  it("test case 3", () => {
    const board = [
      ["X", "O", "X"],
      ["O", "X", "O"],
      ["O", "X", "O"],
    ];
    expect(ticTacToe(board)).toBe("Draw");
  });
  it("test case 4", () => {
    const board = [
      ["X", "X", "O"],
      ["X", "O", "X"],
      ["O", "X", "X"],
    ];
    expect(ticTacToe(board)).toBe("O wins");
  });
  it("test case 5", () => {
    const board = [
      ["X", "O", "O"],
      ["O", "X", "O"],
      ["O", "X", "X"],
    ];
    expect(ticTacToe(board)).toBe("X wins");
  });
  it("test case 6", () => {
    const board = [
      ["O", "X", "X"],
      ["X", "O", "O"],
      ["X", "O", "X"],
    ];
    expect(ticTacToe(board)).toBe("Draw");
  });
});

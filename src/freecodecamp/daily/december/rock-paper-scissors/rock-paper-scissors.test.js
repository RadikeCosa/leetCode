import rockPaperScissors from "./rock-paper-scissors";

/**
 Rock, Paper, Scissors
Given two strings, the first representing Player 1 and the second representing Player 2, determine the winner of a match of Rock, Paper, Scissors.

The input strings will always be "Rock", "Paper", or "Scissors".
"Rock" beats "Scissors".
"Paper" beats "Rock".
"Scissors" beats "Paper".
Return:

"Player 1 wins" if Player 1 wins.
"Player 2 wins" if Player 2 wins.
"Tie" if both players choose the same option.
Tests
1. rockPaperScissors("Rock", "Rock") should return "Tie".
2. rockPaperScissors("Rock", "Paper") should return "Player 2 wins".
3. rockPaperScissors("Scissors", "Paper") should return "Player 1 wins".
4. rockPaperScissors("Rock", "Scissors") should return "Player 1 wins".
5. rockPaperScissors("Scissors", "Scissors") should return "Tie".
6. rockPaperScissors("Scissors", "Rock") should return "Player 2 wins".
 */

describe("Rock Paper Scissors", () => {
  it("Test Case 1", () => {
    expect(rockPaperScissors("Rock", "Rock")).toBe("Tie");
  });

  it("Test Case 2", () => {
    expect(rockPaperScissors("Rock", "Paper")).toBe("Player 2 wins");
  });

  it("Test Case 3", () => {
    expect(rockPaperScissors("Scissors", "Paper")).toBe("Player 1 wins");
  });

  it("Test Case 4", () => {
    expect(rockPaperScissors("Rock", "Scissors")).toBe("Player 1 wins");
  });

  it("Test Case 5", () => {
    expect(rockPaperScissors("Scissors", "Scissors")).toBe("Tie");
  });

  it("Test Case 6", () => {
    expect(rockPaperScissors("Scissors", "Rock")).toBe("Player 2 wins");
  });
});

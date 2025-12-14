import gameOfLife from "./game-of-life";
/**
Game of Life
Given a matrix (array of arrays) representing the current state in Conway's Game of Life, return the next state of the matrix using these rules:

Each cell is either 1 (alive) or 0 (dead).
A cell's neighbors are the up to eight surrounding cells (vertically, horizontally, and diagonally).
Cells on the edges have fewer than eight neighbors.
Rules for updating each cell:

Any live cell with fewer than two live neighbors dies (underpopulation).
Any live cell with two or three live neighbors lives on.
Any live cell with more than three live neighbors dies (overpopulation).
Any dead cell with exactly three live neighbors becomes alive (reproduction).
For example, given:

[
  [0, 1, 0],
  [0, 1, 1],
  [1, 1, 0]
]
return:

[
  [0, 1, 1],
  [0, 0, 1],
  [1, 1, 1]
]
Each cell updates according to the number of live neighbors. For instance, [0][0] stays dead (2 live neighbors), [0][1] stays alive (2 live neighbors), [0][2] dies (3 live neighbors), and so on.

Tests
1. gameOfLife([[0, 1, 0], [0, 1, 1], [1, 1, 0]]) should return [[0, 1, 1], [0, 0, 1], [1, 1, 1]].

2. gameOfLife([[1, 1, 0, 0], [1, 0, 1, 0], [0, 1, 1, 1], [0, 0, 1, 0]]) should return [[1, 1, 0, 0], [1, 0, 0, 1], [0, 0, 0, 1], [0, 1, 1, 1]].

3. gameOfLife([[1, 0, 0], [0, 1, 0], [0, 0, 1]]) should return [[0, 0, 0], [0, 1, 0], [0, 0, 0]].

4. gameOfLife([[0, 1, 1, 0], [1, 1, 0, 1], [0, 1, 1, 0], [0, 0, 1, 0]]) should return [[1, 1, 1, 0], [1, 0, 0, 1], [1, 0, 0, 1], [0, 1, 1, 0]].
 */

describe("Game Of Life", () => {
  it("Test Case 1", () => {
    const input = [
      [0, 1, 0],
      [0, 1, 1],
      [1, 1, 0],
    ];
    const expectedOutput = [
      [0, 1, 1],
      [0, 0, 1],
      [1, 1, 1],
    ];
    expect(gameOfLife(input)).toEqual(expectedOutput);
  });

  it("Test Case 2", () => {
    const input = [
      [1, 1, 0, 0],
      [1, 0, 1, 0],
      [0, 1, 1, 1],
      [0, 0, 1, 0],
    ];
    const expectedOutput = [
      [1, 1, 0, 0],
      [1, 0, 0, 1],
      [0, 0, 0, 1],
      [0, 1, 1, 1],
    ];
    expect(gameOfLife(input)).toEqual(expectedOutput);
  });

  it("Test Case 3", () => {
    const input = [
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 1],
    ];
    const expectedOutput = [
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0],
    ];
    expect(gameOfLife(input)).toEqual(expectedOutput);
  });

  it("Test Case 4", () => {
    const input = [
      [0, 1, 1, 0],
      [1, 1, 0, 1],
      [0, 1, 1, 0],
      [0, 0, 1, 0],
    ];
    const expectedOutput = [
      [1, 1, 1, 0],
      [1, 0, 0, 1],
      [1, 0, 0, 1],
      [0, 1, 1, 0],
    ];
    expect(gameOfLife(input)).toEqual(expectedOutput);
  });
});

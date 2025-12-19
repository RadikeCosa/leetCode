import createBoard from "./checkerboard";

/**
 * Checkerboard
Given an array with two numbers, the first being the number of rows and the second being the number of columns, return a matrix (an array of arrays) filled with "X" and "O" characters of the given size.

The characters should alternate like a checkerboard.
The top-left cell must always be "X".
For example, given [3, 3], return:

[
  ["X", "O", "X"],
  ["O", "X", "O"],
  ["X", "O", "X"]
]
Tests
1. createBoard([3, 3]) should return [["X", "O", "X"], ["O", "X", "O"], ["X", "O", "X"]].
2. createBoard([6, 1]) should return [["X"], ["O"], ["X"], ["O"], ["X"], ["O"]].
3. createBoard([2, 10]) should return [["X", "O", "X", "O", "X", "O", "X", "O", "X", "O"], ["O", "X", "O", "X", "O", "X", "O", "X", "O", "X"]].
4. createBoard([5, 4]) should return [["X", "O", "X", "O"], ["O", "X", "O", "X"], ["X", "O", "X", "O"], ["O", "X", "O", "X"], ["X", "O", "X", "O"]].
 */

describe("Checkerboard", () => {
  it("should return a 3x3 checkerboard", () => {
    const result = createBoard([3, 3]);
    const expected = [
      ["X", "O", "X"],
      ["O", "X", "O"],
      ["X", "O", "X"],
    ];
    expect(result).toEqual(expected);
  });

  it("should return a 6x1 checkerboard", () => {
    const result = createBoard([6, 1]);
    const expected = [["X"], ["O"], ["X"], ["O"], ["X"], ["O"]];
    expect(result).toEqual(expected);
  });

  it("should return a 2x10 checkerboard", () => {
    const result = createBoard([2, 10]);
    const expected = [
      ["X", "O", "X", "O", "X", "O", "X", "O", "X", "O"],
      ["O", "X", "O", "X", "O", "X", "O", "X", "O", "X"],
    ];
    expect(result).toEqual(expected);
  });
  it("should return a 5x4 checkerboard", () => {
    const result = createBoard([5, 4]);
    const expected = [
      ["X", "O", "X", "O"],
      ["O", "X", "O", "X"],
      ["X", "O", "X", "O"],
      ["O", "X", "O", "X"],
      ["X", "O", "X", "O"],
    ];
    expect(result).toEqual(expected);
  });
});

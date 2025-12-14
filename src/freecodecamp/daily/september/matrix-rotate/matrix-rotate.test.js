import rotate from "./matrix-rotate";

/**
 * Matrix Rotate
Given a matrix (an array of arrays), rotate the matrix 90 degrees clockwise and return it. For instance, given [[1, 2], [3, 4]], which looks like this:

1	2
3	4
You should return [[3, 1], [4, 2]], which looks like this:

3	1
4	2
Tests
1. rotate([[1]]) should return [[1]].
2. rotate([[1, 2], [3, 4]]) should return [[3, 1], [4, 2]].
3. rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]]) should return [[7, 4, 1], [8, 5, 2], [9, 6, 3]].
4. rotate([[0, 1, 0], [1, 0, 1], [0, 0, 0]]) should return [[0, 1, 0], [0, 0, 1], [0, 1, 0]].
 */

describe("Matrix Rotate", () => {
  it("should return [[1]] for input [[1]]", () => {
    expect(rotate([[1]])).toEqual([[1]]);
  });

  it("should return [[3, 1], [4, 2]] for input [[1, 2], [3, 4]]", () => {
    expect(
      rotate([
        [1, 2],
        [3, 4],
      ])
    ).toEqual([
      [3, 1],
      [4, 2],
    ]);
  });

  it("should return [[7, 4, 1], [8, 5, 2], [9, 6, 3]] for input [[1, 2, 3], [4, 5, 6], [7, 8, 9]]", () => {
    expect(
      rotate([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ])
    ).toEqual([
      [7, 4, 1],
      [8, 5, 2],
      [9, 6, 3],
    ]);
  });

  it("should return [[0, 1, 0], [0, 0, 1], [0, 1, 0]] for input [[0, 1, 0], [1, 0, 1], [0, 0, 0]]", () => {
    expect(
      rotate([
        [0, 1, 0],
        [1, 0, 1],
        [0, 0, 0],
      ])
    ).toEqual([
      [0, 1, 0],
      [0, 0, 1],
      [0, 1, 0],
    ]);
  });
});

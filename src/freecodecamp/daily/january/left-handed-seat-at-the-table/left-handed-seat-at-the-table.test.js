import { it } from "vitest";
import findLeftHandedSeats from "./left-handed-seat-at-the-table";

/**
 Left-Handed Seat at the Table
Given a 4x2 matrix (array of arrays) representing the seating arrangement for a meal, determine how many seats a left-handed person can sit at.

A left-handed person cannot sit where a right-handed person would be in the seat to the immediate left of them.
In the given matrix:

An "R" is a seat occupied by a right-handed person.
An "L" is a seat occupied by a left-handed person.
An "U" is an unoccupied seat.
Only unoccupied seats are available to sit at.
The seats in the top row are facing "down", and the seats in the bottom row are facing "up" (like a table), so left and right are relative to the seat's orientation.
Corner seats only have one seat next to them.
For example, in the given matrix:

[
  ["U", "R", "U", "L"],
  ["U", "R", "R", "R"]
]
The top-left seat is cannot be sat in because there's a right-handed person to the left. The other two open seats can be sat in because there isn't a right-handed person to the left.

Tests
1. findLeftHandedSeats([["U", "R", "U", "L"], ["U", "R", "R", "R"]]) should return 2.
2. findLeftHandedSeats([["U", "U", "U", "U"], ["U", "U", "U", "U"]]) should return 8.
3. findLeftHandedSeats([["U", "R", "U", "R"], ["L", "R", "R", "U"]]) should return 0.
4. findLeftHandedSeats([["L", "U", "R", "R"], ["L", "U", "R", "R"]]) should return 1.
5. findLeftHandedSeats([["U", "R", "U", "U"], ["U", "U", "L", "U"]]) should return 5.

 */

describe("Left Handed Seat At The Table", () => {
  it("test case 1", () => {
    const input = [
      ["U", "R", "U", "L"],
      ["U", "R", "R", "R"],
    ];
    const output = 2;
    expect(findLeftHandedSeats(input)).toEqual(output);
  });

  it("test case 2", () => {
    const input = [
      ["U", "U", "U", "U"],
      ["U", "U", "U", "U"],
    ];
    const output = 8;
    expect(findLeftHandedSeats(input)).toEqual(output);
  });

  it("test case 3", () => {
    const input = [
      ["U", "R", "U", "R"],
      ["L", "R", "R", "U"],
    ];
    const output = 0;
    expect(findLeftHandedSeats(input)).toEqual(output);
  });

  it("test case 4", () => {
    const input = [
      ["L", "U", "R", "R"],
      ["L", "U", "R", "R"],
    ];
    const output = 1;
    expect(findLeftHandedSeats(input)).toEqual(output);
  });

  it("test case 5", () => {
    const input = [
      ["U", "R", "U", "U"],
      ["U", "U", "L", "U"],
    ];
    const output = 5;
    expect(findLeftHandedSeats(input)).toEqual(output);
  });
});

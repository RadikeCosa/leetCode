/*
Counting Cards

Problem:
A standard deck of playing cards has 13 unique cards in each suit. Given an integer representing the number of cards to pick from the deck, return the number of unique combinations of cards you can pick.

Order does not matter. Picking card A then card B is the same as picking card B then card A.

Examples:
- combinations(52) should return 1.
- combinations(1) should return 52.
- combinations(2) should return 1326.
- combinations(5) should return 2598960.
- combinations(10) should return 15820024220.
- combinations(50) should return 1326.

Constraints:
- Deck size is 52 cards.
- Input is an integer between 0 and 52.

*/

import combinations from "./counting-cards";
import { it, expect, describe } from "vitest";

describe("Counting Cards", () => {
  it("should return 1 for combinations(52)", () => {
    expect(combinations(52)).toBe(1);
  });

  it("should return 52 for combinations(1)", () => {
    expect(combinations(1)).toBe(52);
  });

  it("should return 1326 for combinations(2)", () => {
    expect(combinations(2)).toBe(1326);
  });

  it("should return 2598960 for combinations(5)", () => {
    expect(combinations(5)).toBe(2598960);
  });

  it("should return 15820024220 for combinations(10)", () => {
    expect(combinations(10)).toBe(15820024220);
  });

  it("should return 1326 for combinations(50)", () => {
    expect(combinations(50)).toBe(1326);
  });
});

import findWord from "./word-search";
import { describe, it, expect } from "vitest";

describe("Word Search", () => {
  it("should find the word 'cat'", () => {
    const result = findWord(
      [
        ["a", "c", "t"],
        ["t", "a", "t"],
        ["c", "t", "c"],
      ],
      "cat"
    );
    expect(result).toEqual([
      [0, 1],
      [2, 1],
    ]);
  });
  it("should find the word 'dog'", () => {
    const result = findWord(
      [
        ["d", "o", "g"],
        ["o", "g", "d"],
        ["d", "g", "o"],
      ],
      "dog"
    );
    expect(result).toEqual([
      [0, 0],
      [0, 2],
    ]);
  });
  it("should find the word 'fish'", () => {
    const result = findWord(
      [
        ["h", "i", "s", "h"],
        ["i", "s", "f", "s"],
        ["f", "s", "i", "i"],
        ["s", "h", "i", "f"],
      ],
      "fish"
    );
    expect(result).toEqual([
      [3, 3],
      [0, 3],
    ]);
  });
  it("should find the word 'fox'", () => {
    const result = findWord(
      [
        ["f", "x", "o", "x"],
        ["o", "x", "o", "f"],
        ["f", "o", "f", "x"],
        ["f", "x", "x", "o"],
      ],
      "fox"
    );
    expect(result).toEqual([
      [1, 3],
      [1, 1],
    ]);
  });

  // TODO: Collaborative test writing starts here
  // Ask: "¿Qué casos de prueba ves en el ejemplo 1?"
  // User implements each it() and expect()
});

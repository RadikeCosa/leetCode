import shiftArray from "./shift-array";
import { describe, it, expect } from "vitest";
/**
 * TODO: Add complete problem statement here
 * 
 * Problem statement word-for-word:
 * - [ ] Add problem description
 * - [ ] Add all examples
 * - [ ] Add all constraints  
 * - [ ] Add hints if they exist
 * - [ ] Add tags and difficulty
shiftArray([1, 2, 3], 1) should return [2, 3, 1].
shiftArray([1, 2, 3], -1) should return [3, 1, 2].
shiftArray(["alpha", "bravo", "charlie"], 5) should return ["charlie", "alpha", "bravo"].
shiftArray(["alpha", "bravo", "charlie"], -11) should return ["bravo", "charlie", "alpha"].
shiftArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 15) should return [5, 6, 7, 8, 9, 0, 1, 2, 3, 4].
 */
describe("Shift Array", () => {
  it("should return [2, 3, 1] for shiftArray([1, 2, 3], 1)", () => {
    expect(shiftArray([1, 2, 3], 1)).toEqual([2, 3, 1]);
  });

  it("should return [3, 1, 2] for shiftArray([1, 2, 3], -1)", () => {
    expect(shiftArray([1, 2, 3], -1)).toEqual([3, 1, 2]);
  });

  it('should return ["charlie", "alpha", "bravo"] for shiftArray(["alpha", "bravo", "charlie"], 5)', () => {
    expect(shiftArray(["alpha", "bravo", "charlie"], 5)).toEqual([
      "charlie",
      "alpha",
      "bravo",
    ]);
  });

  it('should return ["bravo", "charlie", "alpha"] for shiftArray(["alpha", "bravo", "charlie"], -11)', () => {
    expect(shiftArray(["alpha", "bravo", "charlie"], -11)).toEqual([
      "bravo",
      "charlie",
      "alpha",
    ]);
  });

  it("should return [5, 6, 7, 8, 9, 0, 1, 2, 3, 4] for shiftArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 15)", () => {
    expect(shiftArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 15)).toEqual([
      5, 6, 7, 8, 9, 0, 1, 2, 3, 4,
    ]);
  });
});

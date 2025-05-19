import { describe, it, expect } from "vitest";
import { combinationSum } from "../src/combinationSum";

function sortResult(arr: number[][]): number[][] {
  return arr.map((comb) => [...comb].sort((a, b) => a - b)).sort();
}

describe("combinationSum", () => {
  it("devuelve combinaciones para [2,3,6,7] y target 7", () => {
    const res = combinationSum([2, 3, 6, 7], 7);
    expect(sortResult(res)).toEqual(sortResult([[2, 2, 3], [7]]));
  });

  it("devuelve combinaciones para [2,3,5] y target 8", () => {
    const res = combinationSum([2, 3, 5], 8);
    expect(sortResult(res)).toEqual(
      sortResult([
        [2, 2, 2, 2],
        [2, 3, 3],
        [3, 5],
      ])
    );
  });

  it("devuelve [] cuando no hay combinaciones posibles", () => {
    const res = combinationSum([2], 1);
    expect(res).toEqual([]);
  });

  it("devuelve combinaciones únicas (sin permutaciones repetidas)", () => {
    const res = combinationSum([1], 2);
    expect(sortResult(res)).toEqual([[1, 1]]);
  });

  it("maneja array vacío", () => {
    const res = combinationSum([], 7);
    expect(res).toEqual([]);
  });
});

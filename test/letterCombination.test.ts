import { describe, it, expect } from "vitest";
import { letterCombinations } from "../src/letterCombination";

describe("letterCombinations", () => {
  it("devuelve combinaciones para '23'", () => {
    const result = letterCombinations("23");
    expect(result.sort()).toEqual(
      ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].sort()
    );
  });

  it("devuelve [] para ''", () => {
    expect(letterCombinations("")).toEqual([]);
  });

  it("devuelve letras individuales para un solo dígito", () => {
    expect(letterCombinations("2").sort()).toEqual(["a", "b", "c"].sort());
  });

  it("devuelve combinaciones para '7'", () => {
    expect(letterCombinations("7").sort()).toEqual(["p", "q", "r", "s"].sort());
  });

  it("devuelve combinaciones para '79'", () => {
    const result = letterCombinations("79");
    expect(result.length).toBe(16); // 4 letras para 7 × 4 letras para 9
  });
});

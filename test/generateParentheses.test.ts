import { describe, it, expect } from "vitest";
import { generateParenthesis } from "../src/generateParentheses";

function sortResult(arr: string[]): string[] {
  return arr.slice().sort();
}

describe("generateParenthesis", () => {
  it("genera combinaciones válidas para n = 1", () => {
    const res = generateParenthesis(1);
    expect(sortResult(res)).toEqual(["()"]);
  });

  it("genera combinaciones válidas para n = 2", () => {
    const res = generateParenthesis(2);
    expect(sortResult(res)).toEqual(["(())", "()()"]);
  });

  it("genera combinaciones válidas para n = 3", () => {
    const res = generateParenthesis(3);
    expect(sortResult(res)).toEqual([
      "((()))",
      "(()())",
      "(())()",
      "()(())",
      "()()()",
    ]);
  });

  it("devuelve [] si n = 0", () => {
    const res = generateParenthesis(0);
    expect(res).toEqual([""]);
  });
});

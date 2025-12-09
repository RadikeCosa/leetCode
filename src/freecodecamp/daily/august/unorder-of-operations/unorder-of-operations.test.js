import evaluate from "./unorder-of-operations";
import { describe, it, expect } from "vitest";

describe("Unorder Of Operations", () => {
  it("should return 3 for [5, 6, 7, 8, 9] and ['+', '-']", () => {
    expect(evaluate([5, 6, 7, 8, 9], ["+", "-"])).toBe(3);
  });

  it("should return 38 for [17, 61, 40, 24, 38, 14] and ['+', '%']", () => {
    expect(evaluate([17, 61, 40, 24, 38, 14], ["+", "%"])).toBe(38);
  });

  it("should return 60 for [20, 2, 4, 24, 12, 3] and ['*', '/']", () => {
    expect(evaluate([20, 2, 4, 24, 12, 3], ["*", "/"])).toBe(60);
  });

  it("should return 30 for [11, 4, 10, 17, 2] and ['*', '*', '%']", () => {
    expect(evaluate([11, 4, 10, 17, 2], ["*", "*", "%"])).toBe(30);
  });

  it("should return -2 for [33, 11, 29, 13] and ['/', '-']", () => {
    expect(evaluate([33, 11, 29, 13], ["/", "-"])).toBe(-2);
  });
});

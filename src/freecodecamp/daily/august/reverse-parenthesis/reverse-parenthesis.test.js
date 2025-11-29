import { it, expect, describe } from "vitest";
import decode from "./reverse-parenthesis";

/**
 Tests
1. decode("(f(b(dc)e)a)") should return "abcdef".
2. decode("((is?)(a(t d)h)e(n y( uo)r)aC)") should return "Can you read this?".
3. decode("f(Ce(re))o((e(aC)m)d)p") should return "freeCodeCamp".
 */

describe("Reverse Parenthesis", () => {
  it("should manage test case 1", () => {
    expect(decode("(f(b(dc)e)a)")).toBe("abcdef");
  });

  it("should manage test case 2", () => {
    expect(decode("((is?)(a(t d)h)e(n y( uo)r)aC)")).toBe("Can you read this?");
  });

  it("should manage test case 3", () => {
    expect(decode("f(Ce(re))o((e(aC)m)d)p")).toBe("freeCodeCamp");
  });
});

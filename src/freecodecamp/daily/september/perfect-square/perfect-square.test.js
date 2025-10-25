import isPerfectSquare from "./perfect-square.js";

/*
Perfect Square

Given an integer, determine if it is a perfect square.

A number is a perfect square if you can multiply an integer by itself to achieve the number. For example, 9 is a perfect square because you can multiply 3 by itself to get it.

Tests

Waiting:1. isPerfectSquare(9) should return true.
Waiting:2. isPerfectSquare(49) should return true.
Waiting:3. isPerfectSquare(1) should return true.
Waiting:4. isPerfectSquare(2) should return false.
Waiting:5. isPerfectSquare(99) should return false.
Waiting:6. isPerfectSquare(-9) should return false.
Waiting:7. isPerfectSquare(0) should return true.
Waiting:8. isPerfectSquare(25281) should return true.
*/

import { describe, it, expect } from "vitest";
import isPerfectSquare from "./perfect-square.js";

describe("Perfect Square", () => {
  it("isPerfectSquare(9) should return true", () => {
    expect(isPerfectSquare(9)).toBe(true);
  });
  it("isPerfectSquare(49) should return true", () => {
    expect(isPerfectSquare(49)).toBe(true);
  });
  it("isPerfectSquare(1) should return true", () => {
    expect(isPerfectSquare(1)).toBe(true);
  });
  it("isPerfectSquare(2) should return false", () => {
    expect(isPerfectSquare(2)).toBe(false);
  });
  it("isPerfectSquare(99) should return false", () => {
    expect(isPerfectSquare(99)).toBe(false);
  });
  it("isPerfectSquare(-9) should return false", () => {
    expect(isPerfectSquare(-9)).toBe(false);
  });
  it("isPerfectSquare(0) should return true", () => {
    expect(isPerfectSquare(0)).toBe(true);
  });
  it("isPerfectSquare(25281) should return true", () => {
    expect(isPerfectSquare(25281)).toBe(true);
  });
});

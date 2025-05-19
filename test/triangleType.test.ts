import { describe, it, expect } from "vitest";
import { triangleType } from "../src/triangleType";

describe("triangleType", () => {
  it('devuelve "equilateral" para [3, 3, 3]', () => {
    expect(triangleType([3, 3, 3])).toBe("equilateral");
  });

  it('devuelve "scalene" para [3, 4, 5]', () => {
    expect(triangleType([3, 4, 5])).toBe("scalene");
  });

  it('devuelve "isosceles" para [3, 3, 4]', () => {
    expect(triangleType([3, 3, 4])).toBe("isosceles");
  });

  it('devuelve "none" para [1, 2, 3] (no forma triángulo)', () => {
    expect(triangleType([1, 2, 3])).toBe("none");
  });

  it('devuelve "none" para [5, 1, 1] (no forma triángulo)', () => {
    expect(triangleType([5, 1, 1])).toBe("none");
  });

  it('devuelve "isosceles" para [5, 5, 8]', () => {
    expect(triangleType([5, 5, 8])).toBe("isosceles");
  });

  it('devuelve "scalene" para [7, 10, 5]', () => {
    expect(triangleType([7, 10, 5])).toBe("scalene");
  });
});

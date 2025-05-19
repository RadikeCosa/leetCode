import { describe, it, expect } from "vitest";
import { isValid } from "../src/validParentheses";

describe("isValid", () => {
  it('devuelve true para "()"', () => {
    expect(isValid("()")).toBe(true);
  });

  it('devuelve true para "()[]{}"', () => {
    expect(isValid("()[]{}")).toBe(true);
  });

  it('devuelve false para "(]"', () => {
    expect(isValid("(]")).toBe(false);
  });

  it('devuelve true para "([])"', () => {
    expect(isValid("([])")).toBe(true);
  });

  it('devuelve false para "([)]"', () => {
    expect(isValid("([)]")).toBe(false);
  });

  it('devuelve false para "("', () => {
    expect(isValid("(")).toBe(false);
  });

  it('devuelve true para "" (string vacío)', () => {
    expect(isValid("")).toBe(true);
  });
});

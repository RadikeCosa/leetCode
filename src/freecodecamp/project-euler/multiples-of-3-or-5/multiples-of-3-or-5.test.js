/**
 * FreeCodeCamp Problem: Multiples of 3 or 5
 * Category: Project Euler
 * Difficulty: Easy
 * Topics: Mathematics, Loops, Arithmetic
 *
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
 *
 * Find the sum of all the multiples of 3 or 5 below the provided parameter value number.
 *
 * Example 1:
 * Input: multiplesOf3Or5(10)
 * Output: 23
 * Explanation: Multiples of 3 or 5 below 10: 3, 5, 6, 9. Sum = 23
 *
 * Example 2:
 * Input: multiplesOf3Or5(49)
 * Output: 543
 *
 * Example 3:
 * Input: multiplesOf3Or5(1000)
 * Output: 233168
 *
 * Example 4:
 * Input: multiplesOf3Or5(8456)
 * Output: 16687353
 *
 * Example 5:
 * Input: multiplesOf3Or5(19564)
 * Output: 89301183
 *
 * Constraints:
 * - The parameter number will be a positive integer greater than 0.
 * - The function should return the sum of all multiples of 3 or 5 below the given number.
 * - Multiples should not be counted twice (e.g., 15 is a multiple of both 3 and 5, but should be counted only once).
 */
import { describe, it, expect } from "vitest";
import multiplesOf3Or5 from "./multiples-of-3-or-5";

describe("Multiples of 3 or 5", () => {
  // Casos de ejemplo del problema
  it("debería retornar 23 para multiplesOf3Or5(10)", () => {
    expect(multiplesOf3Or5(10)).toBe(23);
  });
  it("debería retornar 543 para multiplesOf3Or5(49)", () => {
    expect(multiplesOf3Or5(49)).toBe(543);
  });
  it("debería retornar 233168 para multiplesOf3Or5(1000)", () => {
    expect(multiplesOf3Or5(1000)).toBe(233168);
  });
  it("debería retornar 16687353 para multiplesOf3Or5(8456)", () => {
    expect(multiplesOf3Or5(8456)).toBe(16687353);
  });
  it("debería retornar 89301183 para multiplesOf3Or5(19564)", () => {
    expect(multiplesOf3Or5(19564)).toBe(89301183);
  });

  // Casos límite (edge cases)
  it("debería retornar 0 para multiplesOf3Or5(0) - sin números por debajo de 0", () => {
    expect(multiplesOf3Or5(0)).toBe(0);
  });
  it("debería retornar 0 para multiplesOf3Or5(1) - sin múltiplos por debajo de 1", () => {
    expect(multiplesOf3Or5(1)).toBe(0);
  });
  it("debería retornar 0 para multiplesOf3Or5(3) - sin múltiplos por debajo de 3", () => {
    expect(multiplesOf3Or5(3)).toBe(0);
  });
  it("debería retornar 3 para multiplesOf3Or5(4) - mismo resultado que 3", () => {
    expect(multiplesOf3Or5(4)).toBe(3);
  });
  it("debería retornar 8 para multiplesOf3Or5(6) - 3 + 5", () => {
    expect(multiplesOf3Or5(6)).toBe(8);
  });
  it("debería retornar 45 para multiplesOf3Or5(15) - múltiplos por debajo de 15", () => {
    expect(multiplesOf3Or5(15)).toBe(45);
  });
  it("debería retornar 60 para multiplesOf3Or5(16) - mismo que 15", () => {
    expect(multiplesOf3Or5(16)).toBe(60);
  });
});

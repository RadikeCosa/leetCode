import mostFrequent from "./most-frequent";
import { describe, it, expect } from "vitest";
/**
 * Most Frequent
Given an array of elements, return the element that appears most frequently.

There will always be a single most frequent element.

1. mostFrequent(["a", "b", "a", "c"]) should return "a".
2. mostFrequent([2, 3, 5, 2, 6, 3, 2, 7, 2, 9]) should return 2.
3. mostFrequent([true, false, "false", "true", false]) should return false.
4. mostFrequent([40, 20, 70, 30, 10, 40, 10, 50, 40, 60]) should return 40.
 */

describe("Most Frequent", () => {
  // Caso base: string más frecuente
  it("should return 'a' for ['a', 'b', 'a', 'c']", () => {
    expect(mostFrequent(["a", "b", "a", "c"])).toBe("a");
  });

  // Caso base: número más frecuente
  it("should return 2 for [2, 3, 5, 2, 6, 3, 2, 7, 2, 9]", () => {
    expect(mostFrequent([2, 3, 5, 2, 6, 3, 2, 7, 2, 9])).toBe(2);
  });

  // Caso mixto: booleanos y strings, verifica distinción de tipos
  it("should return false for [true, false, 'false', 'true', false]", () => {
    expect(mostFrequent([true, false, "false", "true", false])).toBe(false);
  });

  // Caso: número más frecuente en distintas posiciones
  it("should return 40 for [40, 20, 70, 30, 10, 40, 10, 50, 40, 60]", () => {
    expect(mostFrequent([40, 20, 70, 30, 10, 40, 10, 50, 40, 60])).toBe(40);
  });

  // Caso adicional: string repetido varias veces
  it("should return 'x' for ['x', 'y', 'x', 'z', 'x']", () => {
    expect(mostFrequent(["x", "y", "x", "z", "x"])).toBe("x");
  });

  // Caso adicional: todos los elementos iguales menos algunos
  it("should return 5 for [5, 5, 5, 1, 2, 3]", () => {
    expect(mostFrequent([5, 5, 5, 1, 2, 3])).toBe(5);
  });

  // Caso adicional: booleanos, true más frecuente
  it("should return true for [true, true, false, false, true]", () => {
    expect(mostFrequent([true, true, false, false, true])).toBe(true);
  });

  // Caso adicional: string más frecuente entre varios strings
  it("should return 'hello' for ['hello', 'world', 'hello', 'test']", () => {
    expect(mostFrequent(["hello", "world", "hello", "test"])).toBe("hello");
  });

  // Caso adicional: cero como valor más frecuente
  it("should return 0 for [0, 1, 0, 2, 0, 3]", () => {
    expect(mostFrequent([0, 1, 0, 2, 0, 3])).toBe(0);
  });
});

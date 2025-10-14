/**
 * FreeCodeCamp Problem: Goldilocks Zone
 * Category: Daily
 * Difficulty: Easy
 * Topics: Math, Astronomy
 *
 * Given the mass of a star, return an array with the start and end distances of its Goldilocks Zone in Astronomical Units.
 *
 * To calculate the Goldilocks Zone:
 * - Find the luminosity of the star by raising its mass to the power of 3.5.
 * - The start of the zone is 0.95 times the square root of its luminosity.
 * - The end of the zone is 1.37 times the square root of its luminosity.
 * - Return the distances rounded to two decimal places.
 *
 * Example 1:
 * Input: 1
 * Output: [0.95, 1.37]
 *
 * Example 2:
 * Input: 0.5
 * Output: [0.28, 0.41]
 *
 * Example 3:
 * Input: 6
 * Output: [21.85, 31.51]
 *
 * Example 4:
 * Input: 3.7
 * Output: [9.38, 13.52]
 *
 * Example 5:
 * Input: 20
 * Output: [179.69, 259.13]
 *
 * Constraints:
 * - mass is a positive real number
 */
import { describe, it, expect } from "vitest";
import goldilocksZone from "./goldilocks-zone.js";

describe("Goldilocks Zone", () => {
  it("should return an Output: [0.95, 1.37] for Input: 1", () => {
    expect(goldilocksZone(1)).toEqual([0.95, 1.37]);
  });
  it("should return an Output: [0.28, 0.41] for Input: 0.5", () => {
    expect(goldilocksZone(0.5)).toEqual([0.28, 0.41]);
  });
  it("should return an Output: [21.85, 31.51] for Input: 6", () => {
    expect(goldilocksZone(6)).toEqual([21.85, 31.51]);
  });
  it("should return an Output: [9.38, 13.52] for Input: 3.7", () => {
    expect(goldilocksZone(3.7)).toEqual([9.38, 13.52]);
  });
  it("should return an Output: [179.69, 259.13] for Input: 20", () => {
    expect(goldilocksZone(20)).toEqual([179.69, 259.13]);
  });
});

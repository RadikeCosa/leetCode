/**
 * FreeCodeCamp Problem: Space Week Day 3: Phone Home
 * Difficulty: Easy
 * Topics: Array, Math
 *
 * You are given an array of numbers representing distances (in kilometers) between yourself, satellites, and your home planet in a communication route. Determine how long it will take a message sent through the route to reach its destination planet using the following constraints:
 *
 * The first value in the array is the distance from your location to the first satellite.
 * Each subsequent value, except for the last, is the distance to the next satellite.
 * The last value in the array is the distance from the previous satellite to your home planet.
 * The message travels at 300,000 km/s.
 * Each satellite the message passes through adds a 0.5 second transmission delay.
 * Return a number rounded to 4 decimal places, with trailing zeros removed.
 *
 * Example 1:
 * Input: [300000, 300000]
 * Output: 2.5
 * Explanation: [if provided]
 *
 * Example 2:
 * Input: [384400, 384400]
 * Output: 3.0627
 * Explanation: [if provided]
 *
 * Example 3:
 * Input: [54600000, 54600000]
 * Output: 364.5
 * Explanation: [if provided]
 *
 * Example 4:
 * Input: [1000000, 500000000, 1000000]
 * Output: 1674.3333
 * Explanation: [if provided]
 *
 * Example 5:
 * Input: [10000, 21339, 50000, 31243, 10000]
 * Output: 2.4086
 * Explanation: [if provided]
 *
 * Example 6:
 * Input: [802101, 725994, 112808, 3625770, 481239]
 * Output: 21.1597
 * Explanation: [if provided]
 *
 * Constraints:
 * - [All constraints from FreeCodeCamp exactly as written]
 * - [Include ALL constraints listed]
 *
 * Hints: [If FreeCodeCamp provides hints, include them]
 * - [Exact hint text]
 */
import { describe, it, expect } from "vitest";
import sendMessage from "./phone-home.js";

describe("Space Week Day 3: Phone Home", () => {
  it("should return 2.5 for route [300000, 300000] with one satellite (300000km to satellite + 300000km to home + 0.5s delay)", () => {
    expect(sendMessage([300000, 300000])).toBe(2.5);
  });
  it("should return 3.0627 for route [384400, 384400] with one satellite (384400km to satellite + 384400km to home + 0.5s delay)", () => {
    expect(sendMessage([384400, 384400])).toBe(3.0627);
  });
  it("should return 364.5 for route [54600000, 54600000] with one satellite (54600000km to satellite + 54600000km to home + 0.5s delay)", () => {
    expect(sendMessage([54600000, 54600000])).toBe(364.5);
  });
  it("should return 1674.3333 for route [1000000, 500000000, 1000000] with two satellites (1000000km to first satellite + 500000000km to second satellite + 1000000km to home + 1s delay)", () => {
    expect(sendMessage([1000000, 500000000, 1000000])).toBe(1674.3333);
  });
  it("should return 2.4086 for route [10000, 21339, 50000, 31243, 10000] with four satellites (10000km to first satellite + 21339km to second satellite + 50000km to third satellite + 31243km to fourth satellite + 10000km to home + 2s delay)", () => {
    expect(sendMessage([10000, 21339, 50000, 31243, 10000])).toBe(2.4086);
  });
  it("should return 21.1597 for route [802101, 725994, 112808, 3625770, 481239] with four satellites (802101km to first satellite + 725994km to second satellite + 112808km to third satellite + 3625770km to fourth satellite + 481239km to home + 2s delay)", () => {
    expect(sendMessage([802101, 725994, 112808, 3625770, 481239])).toBe(
      21.1597
    );
  });
});

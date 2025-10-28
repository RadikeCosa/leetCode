/**
 * FreeCodeCamp Problem: Mile Pace
 * Category: Daily
 *
 * Given a number of miles ran, and a time in "MM:SS" (minutes:seconds) it took to run those miles,
 * return a string for the average time it took to run each mile in the format "MM:SS".
 *
 * Add leading zeros when needed.
 *
 * Examples:
 * - milePace(3, "24:00") should return "08:00"
 * - milePace(1, "06:45") should return "06:45"
 * - milePace(2, "07:00") should return "03:30"
 * - milePace(26.2, "120:35") should return "04:36"
 *
 * Constraints:
 * - First parameter is a number (can be decimal)
 * - Second parameter is a string in "MM:SS" format
 * - Result must be in "MM:SS" format with leading zeros
 * - No specific range restrictions on values
 */

import milePace from "./mile-pace.js";
import { describe, it, expect } from "vitest";

describe("Mile Pace", () => {
  it('milePace(3, "24:00") should return "08:00"', () => {
    expect(milePace(3, "24:00")).toBe("08:00");
  });

  it('milePace(1, "06:45") should return "06:45"', () => {
    expect(milePace(1, "06:45")).toBe("06:45");
  });

  it('milePace(2, "07:00") should return "03:30"', () => {
    expect(milePace(2, "07:00")).toBe("03:30");
  });

  it('milePace(26.2, "120:35") should return "04:36"', () => {
    expect(milePace(26.2, "120:35")).toBe("04:36");
  });
});

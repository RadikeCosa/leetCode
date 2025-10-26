/**
 * FreeCodeCamp Problem: Duration Formatter
 * Category: Daily
 *
 * Given an integer number of seconds, return a string representing the same duration
 * in the format "H:MM:SS", where "H" is the number of hours, "MM" is the number of minutes,
 * and "SS" is the number of seconds. Return the time using the following rules:
 *
 * Seconds: Should always be two digits.
 * Minutes: Should omit leading zeros when they aren't needed. Use "0" if the duration is less than one minute.
 * Hours: Should be included only if they're greater than zero.
 *
 * Examples:
 * - format(500) should return "8:20"
 * - format(4000) should return "1:06:40"
 * - format(1) should return "0:01"
 * - format(5555) should return "1:32:35"
 * - format(99999) should return "27:46:39"
 */

import { describe, it, expect } from "vitest";
import format from "./duration-formatter.js";

describe("Duration Formatter", () => {
  it("should return '8:20' for 500 seconds", () => {
    expect(format(500)).toBe("8:20");
  });
  it("should return '1:06:40' for 4000 seconds", () => {
    expect(format(4000)).toBe("1:06:40");
  });
  it("should return '0:01' for 1 second", () => {
    expect(format(1)).toBe("0:01");
  });
  it("should return '1:32:35' for 5555 seconds", () => {
    expect(format(5555)).toBe("1:32:35");
  });
  it("should return '27:46:39' for 99999 seconds", () => {
    expect(format(99999)).toBe("27:46:39");
  });
});

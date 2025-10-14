/**
 * FreeCodeCamp Problem: 24 to 12
 * Category: Daily
 * Difficulty: Easy
 * Topics: Strings, Time, Formatting
 *
 * Given a string representing a time of the day in the 24-hour format of "HHMM",
 * return the time in its equivalent 12-hour format of "H:MM AM" or "H:MM PM".
 *
 * The given input will always be a four-digit string in 24-hour time format, from "0000" to "2359".
 *
 * Tests:
 * 1. to12("1124") should return "11:24 AM".
 * 2. to12("0900") should return "9:00 AM".
 * 3. to12("1455") should return "2:55 PM".
 * 4. to12("2346") should return "11:46 PM".
 * 5. to12("0030") should return "12:30 AM".
 */
import { describe, it, expect } from "vitest";
import to12 from "./24-to-12.js";

describe("24 to 12", () => {
  it('to12("1124") should return "11:24 AM"', () => {
    expect(to12("1124")).toBe("11:24 AM");
  });
  it('to12("0900") should return "9:00 AM"', () => {
    expect(to12("0900")).toBe("9:00 AM");
  });
  it('to12("1455") should return "2:55 PM"', () => {
    expect(to12("1455")).toBe("2:55 PM");
  });
  it('to12("2346") should return "11:46 PM"', () => {
    expect(to12("2346")).toBe("11:46 PM");
  });
  it('to12("0030") should return "12:30 AM"', () => {
    expect(to12("0030")).toBe("12:30 AM");
  });
});

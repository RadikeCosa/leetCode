// FreeCodeCamp Problem: Weekday Finder
// Category: Daily
import { describe, it, expect } from "vitest";
import getWeekday from "./weekday-finder";

describe("Weekday Finder", () => {
  it("should return the correct day for a given date", () => {
    expect(getWeekday("2025-11-06")).toBe("Thursday");
  });
});

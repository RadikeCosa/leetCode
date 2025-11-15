import daysUntilWeekend from "./days-until-weekend";
import { describe, expect, test } from "vitest";
/**
test 1 = daysUntilWeekend("2025-11-14") should return "1 day until the weekend.".
test 2 = daysUntilWeekend("2025-01-01") should return "3 days until the weekend.".
test 3 = daysUntilWeekend("2025-12-06") should return "It's the weekend!".
test 4 = daysUntilWeekend("2026-01-27") should return "4 days until the weekend.".
test 5 = daysUntilWeekend("2026-09-07") should return "5 days until the weekend.".
test 6 = daysUntilWeekend("2026-11-29") should return "It's the weekend!".
 */

describe("Days Until Weekend", () => {
  test('should return "1 day until the weekend." for 2025-11-14', () => {
    expect(daysUntilWeekend("2025-11-14")).toBe("1 day until the weekend.");
  });

  test('should return "3 days until the weekend." for 2025-01-01', () => {
    expect(daysUntilWeekend("2025-01-01")).toBe("3 days until the weekend.");
  });

  test('should return "It\'s the weekend!" for 2025-12-06', () => {
    expect(daysUntilWeekend("2025-12-06")).toBe("It's the weekend!");
  });

  test('should return "4 days until the weekend." for 2026-01-27', () => {
    expect(daysUntilWeekend("2026-01-27")).toBe("4 days until the weekend.");
  });
  test('should return "5 days until the weekend." for 2026-09-07', () => {
    expect(daysUntilWeekend("2026-09-07")).toBe("5 days until the weekend.");
  });

  test('should return "It\'s the weekend!" for 2026-11-29', () => {
    expect(daysUntilWeekend("2026-11-29")).toBe("It's the weekend!");
  });
});

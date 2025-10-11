/**
 * FreeCodeCamp Problem: Space Week Day 6: Moon Phase
 * Category: Daily
 * Difficulty: Medium
 * Topics: Date, Math, String
 *
 * For day six of Space Week, you will be given a date in the format "YYYY-MM-DD" and need to determine the phase of the moon for that day using the following rules:
 *
 * Use a simplified lunar cycle of 28 days, divided into four equal phases:
 *
 * "New": days 1 - 7
 * "Waxing": days 8 - 14
 * "Full": days 15 - 21
 * "Waning": days 22 - 28
 * After day 28, the cycle repeats with day 1, a new moon.
 *
 * Use "2000-01-06" as a reference new moon (day 1 of the cycle) to determine the phase of the given day.
 * You will not be given any dates before the reference date.
 * Return the correct phase as a string.
 *
 * Example:
 * moonPhase("2000-01-12") should return "New"
 * moonPhase("2000-01-13") should return "Waxing"
 * moonPhase("2014-10-15") should return "Full"
 * moonPhase("2012-10-21") should return "Waning"
 * moonPhase("2022-12-14") should return "New"
 *
 * Constraints:
 * - date es un string en formato "YYYY-MM-DD"
 * - No se darán fechas anteriores a "2000-01-06"
 */
const { describe, it, expect } = require("vitest");
const moonPhase = require("./moon-phase");

describe("Moon Phase", () => {
  // Tests to be implemented collaboratively with user
});

import isLeapYear from "./leap-year-calculator";
import leapYearCalculator from "./leap-year-calculator";

/**
 Leap Year Calculator
Given an integer year, determine whether it is a leap year.

A year is a leap year if it satisfies the following rules:

The year is evenly divisible by 4, and
The year is not evenly divisible by 100, unless
The year is evenly divisible by 400.
Tests
1. isLeapYear(2024) should return true.
2. isLeapYear(2023) should return false.
3. isLeapYear(2100) should return false.
4. isLeapYear(2000) should return true.
5. isLeapYear(1999) should return false.
6. isLeapYear(2040) should return true.
7. isLeapYear(2026) should return false.
 */

describe("Leap Year Calculator", () => {
  test("Test Case 1: isLeapYear(2024) should return true", () => {
    expect(isLeapYear(2024)).toBe(true);
  });

  test("Test Case 2: isLeapYear(2023) should return false", () => {
    expect(isLeapYear(2023)).toBe(false);
  });

  test("Test Case 3: isLeapYear(2100) should return false", () => {
    expect(isLeapYear(2100)).toBe(false);
  });
  test("Test Case 4: isLeapYear(2000) should return true", () => {
    expect(isLeapYear(2000)).toBe(true);
  });

  test("Test Case 5: isLeapYear(1999) should return false", () => {
    expect(isLeapYear(1999)).toBe(false);
  });

  test("Test Case 6: isLeapYear(2040) should return true", () => {
    expect(isLeapYear(2040)).toBe(true);
  });

  test("Test Case 7: isLeapYear(2026) should return false", () => {
    expect(isLeapYear(2026)).toBe(false);
  });
});

import formatDate from "./date-formatter";
import { describe, it, expect } from "vitest";
/**
 * Date Formatter
Given a date in the format "Month day, year", return the date in the format "YYYY-MM-DD".

The given month will be the full English month name. For example: "January", "February", etc.
In the return value, pad the month and day with leading zeros if necessary to ensure two digits.
For example, given "December 6, 2025", return "2025-12-06".

Tests
1. formatDate("December 6, 2025") should return "2025-12-06".
2. formatDate("January 1, 2000") should return "2000-01-01".
3. formatDate("November 11, 1111") should return "1111-11-11".
4. formatDate("September 7, 512") should return "512-09-07".
5. formatDate("May 4, 1950") should return "1950-05-04".
6. formatDate("February 29, 1992") should return "1992-02-29".
 */

describe("Date Formatter", () => {
  it('formatDate("December 6, 2025") should return "2025-12-06"', () => {
    expect(formatDate("December 6, 2025")).toBe("2025-12-06");
  });
  it('formatDate("January 1, 2000") should return "2000-01-01"', () => {
    expect(formatDate("January 1, 2000")).toBe("2000-01-01");
  });
  it('formatDate("November 11, 1111") should return "1111-11-11"', () => {
    expect(formatDate("November 11, 1111")).toBe("1111-11-11");
  });
  it('formatDate("September 7, 512") should return "512-09-07"', () => {
    expect(formatDate("September 7, 512")).toBe("512-09-07");
  });
  it('formatDate("May 4, 1950") should return "1950-05-04"', () => {
    expect(formatDate("May 4, 1950")).toBe("1950-05-04");
  });
  it('formatDate("February 29, 1992") should return "1992-02-29"', () => {
    expect(formatDate("February 29, 1992")).toBe("1992-02-29");
  });
});

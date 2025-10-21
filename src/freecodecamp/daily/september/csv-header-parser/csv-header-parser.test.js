import getHeadings from "./csv-header-parser.js";

/**
 * FreeCodeCamp Problem: CSV Header Parser
 * Category: Daily
 *
 * Given the first line of a comma-separated values (CSV) file, return an array containing the headings.
 *
 * The first line of a CSV file contains headings separated by commas.
 * Remove any leading or trailing whitespace from each heading.
 *
 * Tests:
 * 1. getHeadings("name,age,city") should return ["name", "age", "city"].
 * 2. getHeadings("first name,last name,phone") should return ["first name", "last name", "phone"].
 * 3. getHeadings("username , email , signup date ") should return ["username", "email", "signup date"].
 */
import { it, describe, expect } from "vitest";
import getHeadings from "./csv-header-parser.js";

describe("CSV Header Parser", () => {
  it("should return headings as an array", () => {
    expect(getHeadings("name,age,city")).toEqual(["name", "age", "city"]);
  });
  it("should handle headings with spaces", () => {
    expect(getHeadings("first name,last name,phone")).toEqual([
      "first name",
      "last name",
      "phone",
    ]);
  });
  it("should trim whitespace from headings", () => {
    expect(getHeadings("username , email , signup date ")).toEqual([
      "username",
      "email",
      "signup date",
    ]);
  });
});

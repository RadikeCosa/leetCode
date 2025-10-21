/**
 * Tests for Phone Number Formatter
 *
 * Problem Statement:
 * Given a string of ten digits, return the string as a phone number in this format: "+D (DDD) DDD-DDDD".
 *
 * Test Cases:
 * 1. formatNumber("05552340182") should return "+0 (555) 234-0182"
 * 2. formatNumber("15554354792") should return "+1 (555) 435-4792"
 */

import { it, describe, expect } from "vitest";
import formatNumber from "./phone-number-formatter.js";

describe("Phone Number Formatter", () => {
  it("should format the phone number correctly for the first test case", () => {
    expect(formatNumber("05552340182")).toBe("+0 (555) 234-0182");
  });

  it("should format the phone number correctly for the second test case", () => {
    expect(formatNumber("15554354792")).toBe("+1 (555) 435-4792");
  });
  it("should format the phone number correctly for a generic case", () => {
    expect(formatNumber("12345678900")).toBe("+1 (234) 567-8900");
  });
});

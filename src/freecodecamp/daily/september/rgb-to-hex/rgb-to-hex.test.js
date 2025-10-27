/**
 * FreeCodeCamp Problem: RGB to Hex
 * Category: Daily
 *
 * Given a CSS rgb(r, g, b) color string, return its hexadecimal equivalent.
 *
 * Here are some example outputs for a given input:
 *
 * Input	Output
 * "rgb(255, 255, 255)"	"#ffffff"
 * "rgb(1, 2, 3)"	"#010203"
 * Make any letters lowercase.
 * Return a # followed by six characters. Don't use any shorthand values.
 *
 * Tests:
 * 1. rgbToHex("rgb(255, 255, 255)") should return "#ffffff".
 * 2. rgbToHex("rgb(1, 11, 111)") should return "#010b6f".
 * 3. rgbToHex("rgb(173, 216, 230)") should return "#add8e6".
 * 4. rgbToHex("rgb(79, 123, 201)") should return "#4f7bc9".
 */

import { describe, it, expect } from "vitest";
import rgbToHex from "./rgb-to-hex.js";

describe("RGB to Hex", () => {
  it('should return "#ffffff" for "rgb(255, 255, 255)"', () => {
    expect(rgbToHex("rgb(255, 255, 255)")).toBe("#ffffff");
  });
  it('should return "#010b6f" for "rgb(1, 11, 111)"', () => {
    expect(rgbToHex("rgb(1, 11, 111)")).toBe("#010b6f");
  });
  it('should return "#add8e6" for "rgb(173, 216, 230)"', () => {
    expect(rgbToHex("rgb(173, 216, 230)")).toBe("#add8e6");
  });
  it('should return "#4f7bc9" for "rgb(79, 123, 201)"', () => {
    expect(rgbToHex("rgb(79, 123, 201)")).toBe("#4f7bc9");
  });
});

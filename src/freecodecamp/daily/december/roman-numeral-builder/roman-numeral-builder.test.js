import toRoman from "./roman-numeral-builder";
import { describe, it, expect } from "vitest";
/**
 Roman Numeral Builder
Given an integer, return its equivalent value in Roman numerals.

Roman numerals use these symbols:

Symbol	Value
I	1
V	5
X	10
L	50
C	100
D	500
M	1000
Roman numerals are written from largest to smallest, left to right using the following rules:

Addition is used when a symbol is followed by one of equal or smaller value. For example, 18 is written as XVIII (10 + 5 + 1 + 1 + 1 = 18).
Subtraction is used when a smaller symbol appears before a larger one, to represent 4 or 9 in any place value. For example, 19 is written as XIX (10 + (10 - 1)).
No symbol may be repeated more than three times in a row. Subtraction is used when you would otherwise need to write a symbol more than three times in a row. So the largest number you can write is 3999.
Here's one more example: given 1464, return "MCDLXIV" (1000 + (500 - 100) + 50 + 10 + (5 - 1)).

1. toRoman(18) should return "XVIII".
2. toRoman(19) should return "XIX".
3. toRoman(1464) should return "MCDLXIV".
4. toRoman(2025) should return "MMXXV".
5. toRoman(3999) should return "MMMCMXCIX".
 */

describe("Roman Numeral Builder", () => {
  it("toRoman(18) should return 'XVIII'", () => {
    expect(toRoman(18)).toBe("XVIII");
  });

  it("toRoman(19) should return 'XIX'", () => {
    expect(toRoman(19)).toBe("XIX");
  });

  it("toRoman(1464) should return 'MCDLXIV'", () => {
    expect(toRoman(1464)).toBe("MCDLXIV");
  });

  it("toRoman(2025) should return 'MMXXV'", () => {
    expect(toRoman(2025)).toBe("MMXXV");
  });

  it("toRoman(3999) should return 'MMMCMXCIX'", () => {
    expect(toRoman(3999)).toBe("MMMCMXCIX");
  });
});

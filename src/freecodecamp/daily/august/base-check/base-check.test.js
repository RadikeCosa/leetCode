/**
 * FreeCodeCamp Problem: Base Check
 * Category: Coding Interview Prep
 * Difficulty: Easy
 * Topics: String, Base Conversion, Validation
 *
 * Given a string representing a number, and an integer base from 2 to 36, determine whether the number is valid in that base.
 *
 * The string may contain integers, and uppercase or lowercase characters.
 * The check should be case-insensitive.
 * The base can be any number 2-36.
 * A number is valid if every character is a valid digit in the given base.
 * Example of valid digits for bases:
 * Base 2: 0-1
 * Base 8: 0-7
 * Base 10: 0-9
 * Base 16: 0-9 and A-F
 * Base 36: 0-9 and A-Z
 *
 * Example 1:
 * Input: isValidNumber("10101", 2)
 * Output: true
 *
 * Example 2:
 * Input: isValidNumber("10201", 2)
 * Output: false
 *
 * Example 3:
 * Input: isValidNumber("76543210", 8)
 * Output: true
 *
 * Example 4:
 * Input: isValidNumber("9876543210", 8)
 * Output: false
 *
 * Example 5:
 * Input: isValidNumber("9876543210", 10)
 * Output: true
 *
 * Example 6:
 * Input: isValidNumber("ABC", 10)
 * Output: false
 *
 * Example 7:
 * Input: isValidNumber("ABC", 16)
 * Output: true
 *
 * Example 8:
 * Input: isValidNumber("Z", 36)
 * Output: true
 *
 * Example 9:
 * Input: isValidNumber("ABC", 20)
 * Output: true
 *
 * Example 10:
 * Input: isValidNumber("4B4BA9", 16)
 * Output: true
 *
 * Example 11:
 * Input: isValidNumber("5G3F8F", 16)
 * Output: false
 *
 * Example 12:
 * Input: isValidNumber("5G3F8F", 17)
 * Output: true
 *
 * Example 13:
 * Input: isValidNumber("abc", 10)
 * Output: false
 *
 * Example 14:
 * Input: isValidNumber("abc", 16)
 * Output: true
 *
 * Example 15:
 * Input: isValidNumber("AbC", 16)
 * Output: true
 *
 * Example 16:
 * Input: isValidNumber("z", 36)
 * Output: true
 *
 * Constraints:
 * - The base is an integer between 2 and 36 inclusive.
 * - The string n may contain digits (0-9) and letters (a-z, A-Z).
 * - The check should be case-insensitive.
 */
import { describe, it, expect } from "vitest";
import isValidNumber from "./base-check";

describe("Base Check", () => {
  it('debería retornar true para "10101" en base 2', () => {
    expect(isValidNumber("10101", 2)).toBe(true);
  });

  it('debería retornar false para "10201" en base 2 (el dígito 2 no es válido)', () => {
    expect(isValidNumber("10201", 2)).toBe(false);
  });

  it('debería retornar true para "76543210" en base 8', () => {
    expect(isValidNumber("76543210", 8)).toBe(true);
  });

  it('debería retornar false para "9876543210" en base 8 (dígitos 8 y 9 no son válidos)', () => {
    expect(isValidNumber("9876543210", 8)).toBe(false);
  });

  it('debería retornar true para "9876543210" en base 10', () => {
    expect(isValidNumber("9876543210", 10)).toBe(true);
  });

  it('debería retornar false para "ABC" en base 10 (letras no válidas en base 10)', () => {
    expect(isValidNumber("ABC", 10)).toBe(false);
  });

  it('debería retornar true para "ABC" en base 16 (letras válidas en base 16)', () => {
    expect(isValidNumber("ABC", 16)).toBe(true);
  });

  it('debería retornar true para "Z" en base 36 (Z es válido en base 36)', () => {
    expect(isValidNumber("Z", 36)).toBe(true);
  });

  it('debería retornar true para "ABC" en base 20 (A, B, C válidos en base 20)', () => {
    expect(isValidNumber("ABC", 20)).toBe(true);
  });

  it('debería retornar true para "4B4BA9" en base 16', () => {
    expect(isValidNumber("4B4BA9", 16)).toBe(true);
  });

  it('debería retornar false para "5G3F8F" en base 16 (G no es válido en base 16)', () => {
    expect(isValidNumber("5G3F8F", 16)).toBe(false);
  });

  it('debería retornar true para "5G3F8F" en base 17 (G es válido en base 17)', () => {
    expect(isValidNumber("5G3F8F", 17)).toBe(true);
  });

  it('debería retornar false para "abc" en base 10 (letras no válidas en base 10)', () => {
    expect(isValidNumber("abc", 10)).toBe(false);
  });

  it('debería retornar true para "abc" en base 16 (letras válidas en base 16)', () => {
    expect(isValidNumber("abc", 16)).toBe(true);
  });

  it('debería retornar true para "AbC" en base 16 (mayúsculas/minúsculas válidas)', () => {
    expect(isValidNumber("AbC", 16)).toBe(true);
  });

  it('debería retornar true para "z" en base 36', () => {
    expect(isValidNumber("z", 36)).toBe(true);
  });
});

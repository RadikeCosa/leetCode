import allUnique from "./unique-characters";

/**
 * Unique Characters
Given a string, determine if all the characters in the string are unique.

Uppercase and lowercase letters should be considered different characters.
Tests
1. allUnique("abc") should return true.
2. allUnique("aA") should return true.
3. allUnique("QwErTy123!@") should return true.
4. allUnique("~!@#$%^&*()_+") should return true.
5. allUnique("hello") should return false.
6. allUnique("freeCodeCamp") should return false.
7. allUnique("!@#*$%^&*()aA") should return false.
 */

describe("Unique Characters", () => {
  test('allUnique("abc") should return true.', () => {
    expect(allUnique("abc")).toBe(true);
  });

  test('allUnique("aA") should return true.', () => {
    expect(allUnique("aA")).toBe(true);
  });

  test('allUnique("QwErTy123!@") should return true.', () => {
    expect(allUnique("QwErTy123!@")).toBe(true);
  });

  test('allUnique("~!@#$%^&*()_+") should return true.', () => {
    expect(allUnique("~!@#$%^&*()_+")).toBe(true);
  });
  test('allUnique("hello") should return false.', () => {
    expect(allUnique("hello")).toBe(false);
  });

  test('allUnique("freeCodeCamp") should return false.', () => {
    expect(allUnique("freeCodeCamp")).toBe(false);
  });

  test('allUnique("!@#*$%^&*()aA") should return false.', () => {
    expect(allUnique("!@#*$%^&*()aA")).toBe(false);
  });
});

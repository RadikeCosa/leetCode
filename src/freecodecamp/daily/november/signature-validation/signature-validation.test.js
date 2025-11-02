// [IMPORTS]
// [COMPLETE PROBLEM STATEMENT IN COMMENT]

/**
 * Given a message string, a secret key string, and a signature number, determine if the signature is valid using this encoding method:
 *
 * Letters in the message and secret key have these values:
 * a to z have values 1 to 26 respectively.
 * A to Z have values 27 to 52 respectively.
 * All other characters have no value.
 * Compute the signature by taking the sum of the message plus the sum of the secret key.
 * For example, given the message "foo" and the secret key "bar", the signature would be 57:
 *
 * f (6) + o (15) + o (15) = 36
 * b (2) + a (1) + r (18) = 21
 * 36 + 21 = 57
 * Check if the computed signature matches the provided signature.
 */
import { describe, it, expect } from "vitest";
import verify from "./signature-validation.js";

describe("Signature Validation", () => {
  it("should validate correct signatures", () => {
    expect(verify("foo", "bar", 57)).toBe(true); // f(6)+o(15)+o(15)=36, b(2)+a(1)+r(18)=21, total=57
    expect(verify("hello", "world", 124)).toBe(true); // h(8)+e(5)+l(12)+l(12)+o(15)=52, w(23)+o(15)+r(18)+l(12)+d(4)=72, total=124
  });

  it("should invalidate incorrect signatures", () => {
    expect(verify("foo", "bar", 56)).toBe(false);
    expect(verify("hello", "world", 123)).toBe(false);
  });

  it("should handle empty strings", () => {
    expect(verify("", "", 0)).toBe(true);
    expect(verify("", "abc", 6)).toBe(true); // a(1)+b(2)+c(3)=6
    expect(verify("abc", "", 6)).toBe(true); // a(1)+b(2)+c(3)=6
    expect(verify("", "", 1)).toBe(false);
  });

  it("should ignore non-alphabetic characters", () => {
    expect(verify("foo!", "bar@", 57)).toBe(true); // Símbolos tienen valor 0
    expect(verify("123", "456", 0)).toBe(true); // Números tienen valor 0
    expect(verify("foo123", "bar456", 57)).toBe(true); // Solo letras cuentan
  });

  it("should handle mixed case letters", () => {
    // Las mayúsculas tienen el mismo valor que sus minúsculas según el ejemplo
    expect(verify("Foo", "Bar", 57)).toBe(true); // F(6)+o(15)+o(15)=36, B(2)+a(1)+r(18)=21, total=57
    expect(verify("Foo", "bar", 57)).toBe(true);
    expect(verify("foo", "Bar", 57)).toBe(true);
    expect(verify("fOo", "bAr", 57)).toBe(true);
  });
});

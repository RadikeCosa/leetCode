/**
 * FreeCodeCamp Problem: P@ssw0rd Str3ngth!
 * Difficulty: Easy
 * Topics: String, Validation
 *
 * Given a password string, return "weak", "medium", or "strong" based on the strength of the password.
 *
 * A password is evaluated according to the following rules:
 *
 * It is at least 8 characters long.
 * It contains both uppercase and lowercase letters.
 * It contains at least one number.
 * It contains at least one special character from this set: !, @, #, $, %, ^, &, or *.
 * Return "weak" if the password meets fewer than two of the rules. Return "medium" if the password meets 2 or 3 of the rules. Return "strong" if the password meets all 4 rules.
 *
 * Example 1:
 * Input: "123456"
 * Output: "weak"
 * Explanation: [if provided]
 *
 * Example 2:
 * Input: "pass!!!"
 * Output: "weak"
 * Explanation: [if provided]
 *
 * Example 3:
 * Input: "Qwerty"
 * Output: "weak"
 * Explanation: [if provided]
 *
 * Example 4:
 * Input: "PASSWORD"
 * Output: "weak"
 * Explanation: [if provided]
 *
 * Example 5:
 * Input: "PASSWORD!"
 * Output: "medium"
 * Explanation: [if provided]
 *
 * Example 6:
 * Input: "PassWord%^!"
 * Output: "medium"
 * Explanation: [if provided]
 *
 * Example 7:
 * Input: "qwerty12345"
 * Output: "medium"
 * Explanation: [if provided]
 *
 * Example 8:
 * Input: "PASSWORD!"
 * Output: "medium"
 * Explanation: [if provided]
 *
 * Example 9:
 * Input: "PASSWORD!"
 * Output: "medium"
 * Explanation: [if provided]
 *
 * Example 10:
 * Input: "S3cur3P@ssw0rd"
 * Output: "strong"
 * Explanation: [if provided]
 *
 * Example 11:
 * Input: "C0d3&Fun!"
 * Output: "strong"
 * Explanation: [if provided]
 *
 * Constraints:
 * - [All constraints from FreeCodeCamp exactly as written]
 * - [Include ALL constraints listed]
 *
 * Hints: [If FreeCodeCamp provides hints, include them]
 * - [Exact hint text]
 */
import { describe, it, expect } from "vitest";
import checkStrength from "./password-strength.js";

describe("P@ssw0rd Str3ngth!", () => {
  it('should return "weak" for password "123456" (only one rule met: contains at least one number)', () => {
    expect(checkStrength("123456")).toBe("weak");
  });
  it('should return "weak" for password "pass!!!" (only one rule met: contains at least one special character)', () => {
    expect(checkStrength("pass!!!")).toBe("weak");
  });
  it('should return "weak" for password "Qwerty" (only one rule met: contains both uppercase and lowercase letters)', () => {
    expect(checkStrength("Qwerty")).toBe("weak");
  });
  it('should return "weak" for password "PASSWORD" (only one rule met: at least 8 characters long)', () => {
    expect(checkStrength("PASSWORD")).toBe("weak");
  });
  it('should return "medium" for password "PASSWORD!" (two rules met: at least 8 characters long, contains at least one special character)', () => {
    expect(checkStrength("PASSWORD!")).toBe("medium");
  });
  it('should return "medium" for password "PassWord%^!" (three rules met: at least 8 characters long, contains both uppercase and lowercase letters, contains at least one special character)', () => {
    expect(checkStrength("PassWord%^!")).toBe("medium");
  });
  it('should return "medium" for password "qwerty12345" (two rules met: at least 8 characters long, contains at least one number)', () => {
    expect(checkStrength("qwerty12345")).toBe("medium");
  });
  it('should return "medium" for password "PASSWORD!" (two rules met: at least 8 characters long, contains at least one special character)', () => {
    expect(checkStrength("PASSWORD!")).toBe("medium");
  });
  it("should return 'strong' for password 'S3cur3P@ssw0rd' (all four rules met)", () => {
    expect(checkStrength("S3cur3P@ssw0rd")).toBe("strong");
  });
  it("should return 'strong' for password 'C0d3&Fun!' (all four rules met)", () => {
    expect(checkStrength("C0d3&Fun!")).toBe("strong");
  });
});

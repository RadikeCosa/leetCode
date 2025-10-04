/**
 * freeCodeCamp Problem: P@ssw0rd Str3ngth! (2025-10-03)
 * Full problem statement copied below — tests must be implemented collaboratively
 */

/**
Given a password string, return "weak", "medium", or "strong" based on the strength of the password.

A password is evaluated according to the following rules:

• It is at least 8 characters long.
• It contains both uppercase and lowercase letters.
• It contains at least one number.
• It contains at least one special character from this set: !, @, #, $, %, ^, &, or *.

Return "weak" if the password meets fewer than two of the rules. Return "medium" if the password meets 2 or 3 of the rules. Return "strong" if the password meets all 4 rules.

Examples / Tests (from freeCodeCamp):
- `checkStrength("123456")` should return `"weak"`.
- `checkStrength("pass!!!")` should return `"weak"`.
- `checkStrength("Qwerty")` should return `"weak"`.
- `checkStrength("PASSWORD")` should return `"weak"`.
- `checkStrength("PASSWORD!")` should return `"medium"`.
- `checkStrength("PassWord%^!")` should return `"medium"`.
- `checkStrength("qwerty12345")` should return `"medium"`.
- `checkStrength("S3cur3P@ssw0rd")` should return `"strong"`.
- `checkStrength("C0d3&Fun!")` should return `"strong"`.
*/

import { describe } from "vitest";
import { pSsw0rdStr3ngth } from "./p-ssw0rd-str3ngth";

describe("freeCodeCamp - P@ssw0rd Str3ngth!", () => {
  // Tests to be added collaboratively with the mentor rules in `.github/copilot-instructions.md`
});

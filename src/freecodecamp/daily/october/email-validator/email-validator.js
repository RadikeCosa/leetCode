/**
 * FreeCodeCamp Problem: Email Validator
 * Category: Coding Interview Prep
 * Difficulty: Medium
 * Topics: Strings, Validation, Regular Expressions
 *
 * Given a string, determine if it is a valid email address using the following constraints:
 *
 * It must contain exactly one @ symbol.
 * The local part (before the @):
 * Can only contain letters (a-z, A-Z), digits (0-9), dots (.), underscores (_), or hyphens (-).
 * Cannot start or end with a dot.
 * The domain part (after the @):
 * Must contain at least one dot.
 * Must end with a dot followed by at least two letters.
 * Neither the local or domain part can have two dots in a row.
 *
 * Tests
 * Waiting:1. validate("a@b.cd") should return true.
 * Waiting:2. validate("hell.-w.rld@example.com") should return true.
 * Waiting:3. validate(".b@sh.rc") should return false.
 * Waiting:4. validate("example@test.c0") should return false.
 * Waiting:5. validate("freecodecamp.org") should return false.
 * Waiting:6. validate("develop.ment_user@c0D!NG.R.CKS") should return true.
 * Waiting:7. validate("hello.@wo.rld") should return false.
 * Waiting:8. validate("hello@world..com") should return false.
 * Waiting:9. validate("git@commit@push.io") should return false.
 */
function validate(email) {
  // Expresión regular corregida para evitar puntos consecutivos en dominio
  const emailRegex =
    /^[a-zA-Z0-9_-]+(?:\.[a-zA-Z0-9_-]+)*@[a-zA-Z0-9_!-]+(?:\.[a-zA-Z0-9_!-]+)*\.[a-zA-Z]{2,}$/;

  return emailRegex.test(email);
}

export default validate;

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
import { it, expect, describe } from "vitest";
import validate from "./email-validator.js";

describe("Email Validator", () => {
  it("should return true for a@b.cd", () => {
    expect(validate("a@b.cd")).toBe(true);
  });
  it("it should return true for hell.-w.rld@example.com", () => {
    expect(validate("hell.-w.rld@example.com")).toBe(true);
  });
  it("should return false for .b@sh.rc", () => {
    expect(validate(".b@sh.rc")).toBe(false);
  });
  it("should return false for example@test.c0", () => {
    expect(validate("example@test.c0")).toBe(false);
  });
  it("should return false for freecodecamp.org", () => {
    expect(validate("freecodecamp.org")).toBe(false);
  });
  it("should return true for develop.ment_user@c0D!NG.R.CKS", () => {
    expect(validate("develop.ment_user@c0D!NG.R.CKS")).toBe(true);
  });
  it("should return false for hello.@wo.rld", () => {
    expect(validate("hello.@wo.rld")).toBe(false);
  });
  it("should return false for hello@world..com", () => {
    expect(validate("hello@world..com")).toBe(false);
  });
  it("should return false for git@commit@push.io", () => {
    expect(validate("git@commit@push.io")).toBe(false);
  });
});

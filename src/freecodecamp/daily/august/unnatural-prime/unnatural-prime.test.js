// [IMPORTS]
// [COMPLETE PROBLEM STATEMENT IN COMMENT]

/**
 * FreeCodeCamp Problem: Unnatural Prime
 * Given an integer, determine if that number is a prime number or a negative prime number.
 *
 * A prime number is a positive integer greater than 1 that is only divisible by 1 and itself.
 * A negative prime number is the negative version of a positive prime number.
 * 1 and 0 are not considered prime numbers.
 */

import { describe, it, expect } from "vitest";
import isUnnaturalPrime from "./unnatural-prime.js";

describe("Unnatural Prime", () => {
  // EMPTY - collaborative test writing starts here
  it("should return false for 1", () => {
    expect(isUnnaturalPrime(1)).toBe(false);
  });

  it("should return false for -1", () => {
    expect(isUnnaturalPrime(-1)).toBe(false);
  });

  it("should return true for 19", () => {
    expect(isUnnaturalPrime(19)).toBe(true);
  });

  it("should return true for -23", () => {
    expect(isUnnaturalPrime(-23)).toBe(true);
  });

  it("should return false for 0", () => {
    expect(isUnnaturalPrime(0)).toBe(false);
  });

  it("should return true for 97", () => {
    expect(isUnnaturalPrime(97)).toBe(true);
  });

  it("should return true for -61", () => {
    expect(isUnnaturalPrime(-61)).toBe(true);
  });

  it("should return false for 99", () => {
    expect(isUnnaturalPrime(99)).toBe(false);
  });

  it("should return false for -44", () => {
    expect(isUnnaturalPrime(-44)).toBe(false);
  });
});

import { describe, it, expect } from "vitest";
import nthPrime from "./nth-prime.js";

/*
Nth Prime
A prime number is a positive integer greater than 1 that is divisible only by 1 and itself. The first five prime numbers are 2, 3, 5, 7, and 11.

Given a positive integer n, return the nth prime number. For example, given 5 return the 5th prime number: 11.

Run the Tests (Ctrl + Enter)
Reset this lesson
Get Help
Tests
Waiting:1. nthPrime(5) should return 11.
Waiting:2. nthPrime(10) should return 29.
Waiting:3. nthPrime(16) should return 53.
Waiting:4. nthPrime(99) should return 523.
Waiting:5. nthPrime(1000) should return 7919.
*/

describe("Nth Prime", () => {
  it("should return the 5th prime number", () => {
    expect(nthPrime(5)).toBe(11);
  });
  it("should return the 10th prime number", () => {
    expect(nthPrime(10)).toBe(29);
  });
  it("should return the 16th prime number", () => {
    expect(nthPrime(16)).toBe(53);
  });
  it("should return the 99th prime number", () => {
    expect(nthPrime(99)).toBe(523);
  });
  it("should return the 1000th prime number", () => {
    expect(nthPrime(1000)).toBe(7919);
  });
});

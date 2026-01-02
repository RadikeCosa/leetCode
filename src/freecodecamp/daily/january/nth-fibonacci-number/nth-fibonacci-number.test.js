import { expect, it } from "vitest";
import nthFibonacci from "./nth-fibonacci-number";

/**
 Nth Fibonacci Number
Given an integer n, return the nth number in the fibonacci sequence.

The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones. The first 10 numbers in the sequence are 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.

Tests
1. nthFibonacci(4) should return 2.
2. nthFibonacci(10) should return 34.
3. nthFibonacci(15) should return 377.
4. nthFibonacci(40) should return 63245986.
5. nthFibonacci(75) should return 1304969544928657.
 */

describe("Nth Fibonacci Number", () => {
  it("test case 1", () => {
    expect(nthFibonacci(4)).toBe(2);
  });

  it("test case 2", () => {
    expect(nthFibonacci(10)).toBe(34);
  });

  it("test case 3", () => {
    expect(nthFibonacci(15)).toBe(377);
  });

  it("test case 4", () => {
    expect(nthFibonacci(40)).toBe(63245986);
  });

  it("test case 5", () => {
    expect(nthFibonacci(75)).toBe(1304969544928657);
  });
});

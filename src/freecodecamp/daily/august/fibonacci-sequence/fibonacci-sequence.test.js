/**
 * FreeCodeCamp Problem: Fibonacci Sequence
 * Category: Coding Interview Prep
 * Difficulty: Easy
 * Topics: Array, Math, Algorithms
 *
 * The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones. When starting with 0 and 1, the first 10 numbers in the sequence are 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.
 *
 * Given an array containing the first two numbers of a Fibonacci sequence, and an integer representing the length of the sequence, return an array containing the sequence of the given length.
 *
 * Your function should handle sequences of any length greater than or equal to zero.
 * If the length is zero, return an empty array.
 * Note that the starting numbers are part of the sequence.
 *
 * Example 1:
 * fibonacciSequence([0, 1], 20) should return [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181].
 *
 * Example 2:
 * fibonacciSequence([21, 32], 1) should return [21].
 *
 * Example 3:
 * fibonacciSequence([0, 1], 0) should return [].
 *
 * Example 4:
 * fibonacciSequence([10, 20], 2) should return [10, 20].
 *
 * Example 5:
 * fibonacciSequence([123456789, 987654321], 5) should return [123456789, 987654321, 1111111110, 2098765431, 3209876541].
 *
 * Constraints:
 * - The length parameter will be a non-negative integer (length >= 0)
 * - The startSequence array will contain exactly two numbers
 */
import { describe, it, expect } from "vitest";
import fibonacciSequence from "./fibonacci-sequence.js";

describe("Fibonacci Sequence", () => {
  it("should return [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181] with inputs [0,1], 20", () => {
    expect(fibonacciSequence([0, 1], 20)).toEqual([
      0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597,
      2584, 4181,
    ]);
  });
  it("should return [21] with inputs [21,32], 1", () => {
    expect(fibonacciSequence([21, 32], 1)).toEqual([21]);
  });
  it("should return [] with inputs [0,1], 0", () => {
    expect(fibonacciSequence([0, 1], 0)).toEqual([]);
  });
  it("should return [10, 20] with inputs [10,20], 2", () => {
    expect(fibonacciSequence([10, 20], 2)).toEqual([10, 20]);
  });
  it("should return [123456789, 987654321, 1111111110, 2098765431, 3209876541] with inputs [123456789, 987654321], 5", () => {
    expect(fibonacciSequence([123456789, 987654321], 5)).toEqual([
      123456789, 987654321, 1111111110, 2098765431, 3209876541,
    ]);
  });
});

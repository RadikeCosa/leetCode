/**
 * LeetCode Problem 2723: Add Two Promises
 *
 * Given two promises promise1 and promise2, return a new promise.
 * promise1 and promise2 will both resolve with a number.
 * The returned promise should resolve with the sum of the two numbers.
 *
 * Example 1:
 * Input:
 * promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20)),
 * promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60))
 * Output: 7
 * Explanation: The two input promises resolve with the values of 2 and 5 respectively.
 * The returned promise should resolve with a value of 2 + 5 = 7.
 * The time the returned promise resolves is not judged for this problem.
 *
 * Example 2:
 * Input:
 * promise1 = new Promise(resolve => setTimeout(() => resolve(10), 50)),
 * promise2 = new Promise(resolve => setTimeout(() => resolve(-12), 30))
 * Output: -2
 * Explanation: The two input promises resolve with the values of 10 and -12 respectively.
 * The returned promise should resolve with a value of 10 + -12 = -2.
 *
 * Constraints:
 * • promise1 and promise2 are promises that resolve with a number
 */

import { describe, it, expect } from "vitest";
import { addTwoPromises } from "./add-two-promises";

describe("Add Two Promises", () => {
  it("should return the sum when both promises resolve - example 1", async () => {
    const promise1 = new Promise<number>((resolve) =>
      setTimeout(() => resolve(2), 20)
    );
    const promise2 = new Promise<number>((resolve) =>
      setTimeout(() => resolve(5), 60)
    );

    const result = await addTwoPromises(promise1, promise2);
    expect(result).toBe(7);
  });

  it("should return the sum with negative numbers - example 2", async () => {
    const promise1 = new Promise<number>((resolve) =>
      setTimeout(() => resolve(10), 50)
    );
    const promise2 = new Promise<number>((resolve) =>
      setTimeout(() => resolve(-12), 30)
    );

    const result = await addTwoPromises(promise1, promise2);
    expect(result).toBe(-2);
  });

  it("should handle promises that resolve immediately", async () => {
    const promise1 = Promise.resolve(3);
    const promise2 = Promise.resolve(7);

    const result = await addTwoPromises(promise1, promise2);
    expect(result).toBe(10);
  });

  it("should handle zero values", async () => {
    const promise1 = Promise.resolve(0);
    const promise2 = Promise.resolve(0);

    const result = await addTwoPromises(promise1, promise2);
    expect(result).toBe(0);
  });

  it("should handle one positive and one zero", async () => {
    const promise1 = Promise.resolve(5);
    const promise2 = Promise.resolve(0);

    const result = await addTwoPromises(promise1, promise2);
    expect(result).toBe(5);
  });

  it("should handle large numbers", async () => {
    const promise1 = Promise.resolve(1000000);
    const promise2 = Promise.resolve(999999);

    const result = await addTwoPromises(promise1, promise2);
    expect(result).toBe(1999999);
  });

  it("should handle different resolution times", async () => {
    const promise1 = new Promise<number>((resolve) =>
      setTimeout(() => resolve(100), 10)
    );
    const promise2 = new Promise<number>((resolve) =>
      setTimeout(() => resolve(200), 100)
    );

    const result = await addTwoPromises(promise1, promise2);
    expect(result).toBe(300);
  });

  it("should handle both negative numbers", async () => {
    const promise1 = Promise.resolve(-5);
    const promise2 = Promise.resolve(-3);

    const result = await addTwoPromises(promise1, promise2);
    expect(result).toBe(-8);
  });

  it("should handle decimal numbers", async () => {
    const promise1 = Promise.resolve(1.5);
    const promise2 = Promise.resolve(2.7);

    const result = await addTwoPromises(promise1, promise2);
    expect(result).toBeCloseTo(4.2);
  });
});

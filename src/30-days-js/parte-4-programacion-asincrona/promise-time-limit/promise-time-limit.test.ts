/**
 * LeetCode Problem 2637: Promise Time Limit    const result = await limited(5);
    const time = Math.floor(performance.now() - start);

    expect(result).toBe(25);
    expect(time).toBeGreaterThanOrEqual(90);  // Allow more tolerance
    expect(time).toBeLessThanOrEqual(120);    // Allow more tolerance * Given an asynchronous function fn and a time t in milliseconds, return a new time limited version of the input function.
 * fn takes arguments provided to the time limited function.
 *
 * The time limited function should follow these rules:
 * - If the fn completes within the time limit of t milliseconds, the time limited function should resolve with the result.
 * - If the execution of the fn exceeds the time limit, the time limited function should reject with the string "Time Limit Exceeded".
 *
 * Constraints:
 * - 0 <= inputs.length <= 10
 * - 0 <= t <= 1000
 * - fn returns a promise
 */

import { describe, it, expect } from "vitest";
import { timeLimit } from "./promise-time-limit";

describe("Promise Time Limit", () => {
  it("should reject with 'Time Limit Exceeded' when function takes longer than time limit - Example 1", async () => {
    const fn = async (n: number) => {
      await new Promise((res) => setTimeout(res, 100));
      return n * n;
    };

    const limited = timeLimit(fn, 50);
    const start = performance.now();

    try {
      await limited(5);
      expect.fail("Should have rejected");
    } catch (err) {
      const time = Math.floor(performance.now() - start);
      expect(err).toBe("Time Limit Exceeded");
      expect(time).toBeGreaterThanOrEqual(40); // Allow more tolerance
      expect(time).toBeLessThanOrEqual(70); // Allow more tolerance
    }
  });

  it("should resolve with result when function completes within time limit - Example 2", async () => {
    const fn = async (n: number) => {
      await new Promise((res) => setTimeout(res, 100));
      return n * n;
    };

    const limited = timeLimit(fn, 150);
    const start = performance.now();

    const result = await limited(5);
    const time = Math.floor(performance.now() - start);

    expect(result).toBe(25);
    expect(time).toBeGreaterThanOrEqual(95); // Allow some tolerance
    expect(time).toBeLessThanOrEqual(110);
  });

  it("should resolve with result for multiple arguments - Example 3", async () => {
    const fn = async (a: number, b: number) => {
      await new Promise((res) => setTimeout(res, 120));
      return a + b;
    };

    const limited = timeLimit(fn, 150);
    const start = performance.now();

    const result = await limited(5, 10);
    const time = Math.floor(performance.now() - start);

    expect(result).toBe(15);
    expect(time).toBeGreaterThanOrEqual(110); // Allow more tolerance
    expect(time).toBeLessThanOrEqual(140); // Allow more tolerance
  });

  it("should immediately reject when function throws error - Example 4", async () => {
    const fn = async () => {
      throw "Error";
    };

    const limited = timeLimit(fn, 1000);
    const start = performance.now();

    try {
      await limited();
      expect.fail("Should have rejected");
    } catch (err) {
      const time = Math.floor(performance.now() - start);
      expect(err).toBe("Error");
      expect(time).toBeLessThanOrEqual(5); // Should be immediate
    }
  });

  it("should return a function when called", () => {
    const fn = async () => "test";
    const limited = timeLimit(fn, 100);

    expect(typeof limited).toBe("function");
  });

  it("should handle function that resolves immediately", async () => {
    const fn = async (value: string) => value;
    const limited = timeLimit(fn, 100);

    const result = await limited("immediate");
    expect(result).toBe("immediate");
  });

  it("should handle very short time limits", async () => {
    const fn = async () => {
      await new Promise((res) => setTimeout(res, 50));
      return "delayed";
    };

    const limited = timeLimit(fn, 10);

    try {
      await limited();
      expect.fail("Should have rejected");
    } catch (err) {
      expect(err).toBe("Time Limit Exceeded");
    }
  });
});

/**
 * LeetCode Problem 2725: Interval Cancellation
 *
 * Given a function fn, an array of arguments args, and an interval time t,
 * return a cancel function cancelFn.
 *
 * The function fn should be called with args immediately and then called again
 * every t milliseconds until cancelFn is called.
 *
 * Constraints:
 * - fn is a function
 * - args is a valid JSON array
 * - 1 <= args.length <= 10
 * - 30 <= t <= 100
 * - 10 <= cancelTimeMs <= 500
 */

import { describe, it, expect } from "vitest";
import { cancellable } from "./interval-cancellation";

type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };

describe("Interval Cancellation", () => {
  it("should execute function immediately and every t milliseconds - Example 1", async () => {
    const fn = (x: JSONValue): JSONValue => (x as number) * 2;
    const args: JSONValue[] = [4];
    const t = 35;
    const cancelTimeMs = 190;

    const results: Array<{ time: number; returned: JSONValue }> = [];
    const startTime = Date.now();

    const cancelFn = cancellable(
      (...fnArgs: JSONValue[]): JSONValue => {
        const result = fn(fnArgs[0]);
        results.push({
          time: Math.round(Date.now() - startTime),
          returned: result,
        });
        return result;
      },
      args,
      t
    );

    setTimeout(cancelFn, cancelTimeMs);

    // Wait for completion
    await new Promise((resolve) => setTimeout(resolve, cancelTimeMs + 50));

    // Should have approximately 6 calls: 0, 35, 70, 105, 140, 175ms
    expect(results.length).toBeGreaterThanOrEqual(5);
    expect(results.length).toBeLessThanOrEqual(7);

    // Check first call is immediate
    expect(results[0].time).toBeLessThan(10);
    expect(results[0].returned).toBe(8);

    // Check all results are correct
    results.forEach((result) => {
      expect(result.returned).toBe(8);
    });
  });

  it("should execute with multiple arguments - Example 2", async () => {
    const fn = (x1: JSONValue, x2: JSONValue): JSONValue =>
      (x1 as number) * (x2 as number);
    const args: JSONValue[] = [2, 5];
    const t = 30;
    const cancelTimeMs = 165;

    const results: Array<{ time: number; returned: JSONValue }> = [];
    const startTime = Date.now();

    const cancelFn = cancellable(
      (...fnArgs: JSONValue[]): JSONValue => {
        const result = fn(fnArgs[0], fnArgs[1]);
        results.push({
          time: Math.round(Date.now() - startTime),
          returned: result,
        });
        return result;
      },
      args,
      t
    );

    setTimeout(cancelFn, cancelTimeMs);

    await new Promise((resolve) => setTimeout(resolve, cancelTimeMs + 50));

    // Should have approximately 6 calls: 0, 30, 60, 90, 120, 150ms
    expect(results.length).toBeGreaterThanOrEqual(5);
    expect(results.length).toBeLessThanOrEqual(7);

    // Check first call is immediate
    expect(results[0].time).toBeLessThan(10);
    expect(results[0].returned).toBe(10);

    // Check all results are correct
    results.forEach((result) => {
      expect(result.returned).toBe(10);
    });
  });

  it("should execute with three arguments - Example 3", async () => {
    const fn = (x1: JSONValue, x2: JSONValue, x3: JSONValue): JSONValue =>
      (x1 as number) + (x2 as number) + (x3 as number);
    const args: JSONValue[] = [5, 1, 3];
    const t = 50;
    const cancelTimeMs = 180;

    const results: Array<{ time: number; returned: JSONValue }> = [];
    const startTime = Date.now();

    const cancelFn = cancellable(
      (...fnArgs: JSONValue[]): JSONValue => {
        const result = fn(fnArgs[0], fnArgs[1], fnArgs[2]);
        results.push({
          time: Math.round(Date.now() - startTime),
          returned: result,
        });
        return result;
      },
      args,
      t
    );

    setTimeout(cancelFn, cancelTimeMs);

    await new Promise((resolve) => setTimeout(resolve, cancelTimeMs + 50));

    // Should have approximately 4 calls: 0, 50, 100, 150ms
    expect(results.length).toBeGreaterThanOrEqual(3);
    expect(results.length).toBeLessThanOrEqual(5);

    // Check first call is immediate
    expect(results[0].time).toBeLessThan(10);
    expect(results[0].returned).toBe(9);

    // Check all results are correct
    results.forEach((result) => {
      expect(result.returned).toBe(9);
    });
  });

  it("should return a function when called", () => {
    const fn = (...args: JSONValue[]): JSONValue => args[0];
    const args: JSONValue[] = [1];
    const t = 50;

    const cancelFn = cancellable(fn, args, t);

    expect(typeof cancelFn).toBe("function");
  });

  it("should stop execution when cancelled", async () => {
    const fn = (...args: JSONValue[]): JSONValue => (args[0] as number) + 1;
    const args: JSONValue[] = [5];
    const t = 40;
    const cancelTimeMs = 50; // Cancel after ~1-2 executions

    const results: Array<{ time: number; returned: JSONValue }> = [];
    const startTime = Date.now();

    const cancelFn = cancellable(
      (...fnArgs: JSONValue[]): JSONValue => {
        const result = fn(fnArgs[0]);
        results.push({
          time: Math.round(Date.now() - startTime),
          returned: result,
        });
        return result;
      },
      args,
      t
    );

    setTimeout(cancelFn, cancelTimeMs);

    // Wait longer than cancellation to ensure no more executions
    await new Promise((resolve) => setTimeout(resolve, cancelTimeMs + 100));

    // Should have stopped executing after cancellation
    expect(results.length).toBeLessThanOrEqual(3);

    // All results should be correct
    results.forEach((result) => {
      expect(result.returned).toBe(6);
    });
  });
});

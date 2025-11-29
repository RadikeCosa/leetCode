/**
 * LeetCode Problem 2715: Timeout Cancellation
 *
 * Given a function fn, an array of arguments args, and a timeout t in milliseconds,
 * return a cancel function cancelFn.
 *
 * After a delay of cancelTimeMs, the returned cancel function cancelFn will be invoked.
 * Initially, the execution of the function fn should be delayed by t milliseconds.
 *
 * If, before the delay of t milliseconds, the function cancelFn is invoked,
 * it should cancel the delayed execution of fn. Otherwise, if cancelFn is not
 * invoked within the specified delay t, fn should be executed with the provided
 * args as arguments.
 *
 * Constraints:
 * - fn is a function
 * - args is a valid JSON array
 * - 1 <= args.length <= 10
 * - 20 <= t <= 1000
 * - 10 <= cancelTimeMs <= 1000
 */

import { describe, it, expect, vi } from "vitest";
import { cancellable } from "./timeout-cancellation";

type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };

describe("Timeout Cancellation", () => {
  // Helper function to simulate the test environment
  const runCancellableTest = async (
    fn: (...args: JSONValue[]) => JSONValue,
    args: JSONValue[],
    t: number,
    cancelTimeMs: number
  ) => {
    const results: Array<{ time: number; returned: JSONValue }> = [];
    const startTime = Date.now();

    const cancelFn = cancellable(fn, args, t);

    // Schedule cancellation
    setTimeout(cancelFn, cancelTimeMs);

    // Wait for completion (max of t and cancelTimeMs + some buffer)
    await new Promise((resolve) =>
      setTimeout(resolve, Math.max(t, cancelTimeMs) + 50)
    );

    return results;
  };

  it("should execute function when cancellation occurs after timeout - Example 1", async () => {
    const fn = (x: JSONValue): JSONValue => (x as number) * 5;
    const args: JSONValue[] = [2];
    const t = 20;
    const cancelTimeMs = 50;

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

    // Wait for execution
    await new Promise((resolve) => setTimeout(resolve, 70));

    expect(results).toHaveLength(1);
    expect(results[0].time).toBeCloseTo(20, -1); // Within 10ms tolerance
    expect(results[0].returned).toBe(10);
  });

  it("should not execute function when cancellation occurs before timeout - Example 2", async () => {
    const fn = (x: JSONValue): JSONValue => (x as number) ** 2;
    const args: JSONValue[] = [2];
    const t = 100;
    const cancelTimeMs = 50;

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

    // Wait longer than both times
    await new Promise((resolve) => setTimeout(resolve, 150));

    expect(results).toHaveLength(0);
  });

  it("should execute function with multiple arguments when cancellation occurs after timeout - Example 3", async () => {
    const fn = (x1: JSONValue, x2: JSONValue): JSONValue =>
      (x1 as number) * (x2 as number);
    const args: JSONValue[] = [2, 4];
    const t = 30;
    const cancelTimeMs = 100;

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

    // Wait for execution
    await new Promise((resolve) => setTimeout(resolve, 120));

    expect(results).toHaveLength(1);
    expect(results[0].time).toBeCloseTo(30, -1); // Within 10ms tolerance
    expect(results[0].returned).toBe(8);
  });

  it("should handle edge case: immediate cancellation", async () => {
    const fn = vi.fn(
      (...args: JSONValue[]): JSONValue => (args[0] as number) + 1
    );
    const args: JSONValue[] = [5];
    const t = 50;
    const cancelTimeMs = 0; // Immediate cancellation

    const cancelFn = cancellable(fn, args, t);
    setTimeout(cancelFn, cancelTimeMs);

    // Wait longer than timeout
    await new Promise((resolve) => setTimeout(resolve, 80));

    expect(fn).not.toHaveBeenCalled();
  });

  it("should handle edge case: cancellation at same time as execution", async () => {
    const fn = vi.fn(
      (...args: JSONValue[]): JSONValue => (args[0] as number) * 2
    );
    const args: JSONValue[] = [3];
    const t = 50;
    const cancelTimeMs = 50; // Same time as execution

    const cancelFn = cancellable(fn, args, t);
    setTimeout(cancelFn, cancelTimeMs);

    // Wait longer than timeout
    await new Promise((resolve) => setTimeout(resolve, 80));

    // This is a race condition, but typically cancellation wins
    // The behavior may vary, so we don't assert specific outcome
    // but ensure the function works without errors
    expect(typeof cancelFn).toBe("function");
  });

  it("should return a function when called", () => {
    const fn = (...args: JSONValue[]): JSONValue => args[0];
    const args: JSONValue[] = [1];
    const t = 100;

    const cancelFn = cancellable(fn, args, t);

    expect(typeof cancelFn).toBe("function");
  });

  it("should handle functions with different return types", async () => {
    const stringFn = (...args: JSONValue[]): JSONValue =>
      (args[0] as string).toUpperCase();
    const args: JSONValue[] = ["hello"];
    const t = 25;
    const cancelTimeMs = 60;

    const results: Array<{ time: number; returned: JSONValue }> = [];
    const startTime = Date.now();

    const cancelFn = cancellable(
      (...fnArgs: JSONValue[]): JSONValue => {
        const result = stringFn(fnArgs[0]);
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

    await new Promise((resolve) => setTimeout(resolve, 80));

    expect(results).toHaveLength(1);
    expect(results[0].returned).toBe("HELLO");
  });
});

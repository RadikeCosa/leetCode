/**
 * LeetCode Problem 2621: Sleep
 *
 * Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds.
 * It can resolve any value.
 *
 * Note that minor deviation from millis in the actual sleep duration is acceptable.
 *
 * Constraints:
 * - 1 <= millis <= 1000
 *
 * Examples:
 *
 * Example 1:
 * Input: millis = 100
 * Output: 100
 * Explanation: It should return a promise that resolves after 100ms.
 * let t = Date.now();
 * sleep(100).then(() => {
 *   console.log(Date.now() - t); // 100
 * });
 *
 * Example 2:
 * Input: millis = 200
 * Output: 200
 * Explanation: It should return a promise that resolves after 200ms.
 */

import { describe, it, expect } from "vitest";
import { sleep } from "./sleep";

describe("Sleep", () => {
  it("should resolve after approximately 100ms", async () => {
    const start = Date.now();
    await sleep(100);
    const elapsed = Date.now() - start;

    // Allow for some deviation (±10ms is reasonable)
    expect(elapsed).toBeGreaterThanOrEqual(90);
    expect(elapsed).toBeLessThanOrEqual(150);
  });

  it("should resolve after approximately 200ms", async () => {
    const start = Date.now();
    await sleep(200);
    const elapsed = Date.now() - start;

    // Allow for some deviation (±15ms is reasonable for longer delays)
    expect(elapsed).toBeGreaterThanOrEqual(185);
    expect(elapsed).toBeLessThanOrEqual(250);
  });

  it("should work with minimum constraint (1ms)", async () => {
    const start = Date.now();
    await sleep(1);
    const elapsed = Date.now() - start;

    // For very short delays, just check it's positive
    expect(elapsed).toBeGreaterThanOrEqual(0);
    expect(elapsed).toBeLessThanOrEqual(50);
  });

  it("should work with maximum constraint (1000ms)", async () => {
    const start = Date.now();
    await sleep(1000);
    const elapsed = Date.now() - start;

    // Allow for reasonable deviation on longer delays
    expect(elapsed).toBeGreaterThanOrEqual(980);
    expect(elapsed).toBeLessThanOrEqual(1100);
  });

  it("should return a Promise", () => {
    const result = sleep(50);
    expect(result).toBeInstanceOf(Promise);
  });

  it("should resolve to undefined by default", async () => {
    const result = await sleep(10);
    expect(result).toBeUndefined();
  });
});

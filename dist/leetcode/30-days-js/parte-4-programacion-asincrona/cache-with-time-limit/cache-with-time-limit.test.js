/**
 * LeetCode Problem 2622: Cache With Time Limit
 *
 * Write a class that allows getting and setting key-value pairs, however a time until expiration
 * is associated with each key.
 *
 * The class has three public methods:
 * - set(key, value, duration): accepts an integer key, an integer value, and a duration in milliseconds.
 *   Once the duration has elapsed, the key should be inaccessible. The method should return true if
 *   the same un-expired key already exists and false otherwise. Both the value and duration should
 *   be overwritten if the key already exists.
 * - get(key): if an un-expired key exists, it should return the associated value. Otherwise it should return -1.
 * - count(): returns the count of un-expired keys.
 *
 * Constraints:
 * - 0 <= key, value <= 10^9
 * - 0 <= duration <= 1000
 * - 1 <= actions.length <= 100
 * - actions.length === values.length
 * - actions.length === timeDelays.length
 * - 0 <= timeDelays[i] <= 1450
 * - actions[i] is one of "TimeLimitedCache", "set", "get" and "count"
 * - First action is always "TimeLimitedCache" and must be executed immediately, with a 0-millisecond delay
 */
import { describe, it, expect, beforeEach, vi, afterEach } from "vitest";
import { TimeLimitedCache } from "./cache-with-time-limit";
describe("Cache With Time Limit", () => {
    let cache;
    beforeEach(() => {
        vi.useFakeTimers();
        cache = new TimeLimitedCache();
    });
    afterEach(() => {
        vi.useRealTimers();
    });
    it("should handle basic set and get operations - Example 1", () => {
        // At t=0, set key=1, value=42, duration=100ms
        const result1 = cache.set(1, 42, 100);
        expect(result1).toBe(false); // Key didn't exist before
        // At t=50, get key=1
        vi.advanceTimersByTime(50);
        const result2 = cache.get(1);
        expect(result2).toBe(42); // Key still exists
        // At t=50, count active keys
        const result3 = cache.count();
        expect(result3).toBe(1); // One active key
        // At t=150, get key=1 (after expiration at t=100)
        vi.advanceTimersByTime(100); // Total time: 150ms
        const result4 = cache.get(1);
        expect(result4).toBe(-1); // Key expired
    });
    it("should handle key overwriting - Example 2", () => {
        // At t=0, set key=1, value=42, duration=50ms
        const result1 = cache.set(1, 42, 50);
        expect(result1).toBe(false); // Key didn't exist before
        // At t=40, set key=1, value=50, duration=100ms (overwrite)
        vi.advanceTimersByTime(40);
        const result2 = cache.set(1, 50, 100);
        expect(result2).toBe(true); // Key already existed
        // At t=50, get key=1
        vi.advanceTimersByTime(10); // Total: 50ms
        const result3 = cache.get(1);
        expect(result3).toBe(50); // New value, not expired
        // At t=120, get key=1
        vi.advanceTimersByTime(70); // Total: 120ms
        const result4 = cache.get(1);
        expect(result4).toBe(50); // Still not expired (expires at t=140)
        // At t=200, get key=1 (after expiration at t=140)
        vi.advanceTimersByTime(80); // Total: 200ms
        const result5 = cache.get(1);
        expect(result5).toBe(-1); // Key expired
        // At t=250, count active keys
        vi.advanceTimersByTime(50); // Total: 250ms
        const result6 = cache.count();
        expect(result6).toBe(0); // No active keys
    });
    it("should handle multiple keys with different expiration times", () => {
        // Set multiple keys with different durations
        cache.set(1, 100, 100); // Expires at t=100
        cache.set(2, 200, 200); // Expires at t=200
        cache.set(3, 300, 50); // Expires at t=50
        expect(cache.count()).toBe(3); // All keys active
        // At t=60, key 3 should be expired
        vi.advanceTimersByTime(60);
        expect(cache.get(1)).toBe(100); // Still active
        expect(cache.get(2)).toBe(200); // Still active
        expect(cache.get(3)).toBe(-1); // Expired
        expect(cache.count()).toBe(2);
        // At t=150, key 1 should be expired
        vi.advanceTimersByTime(90); // Total: 150ms
        expect(cache.get(1)).toBe(-1); // Expired
        expect(cache.get(2)).toBe(200); // Still active
        expect(cache.count()).toBe(1);
        // At t=250, all keys should be expired
        vi.advanceTimersByTime(100); // Total: 250ms
        expect(cache.get(2)).toBe(-1); // Expired
        expect(cache.count()).toBe(0);
    });
    it("should handle immediate expiration (duration = 0)", () => {
        const result = cache.set(1, 42, 0);
        expect(result).toBe(false);
        // Key should expire immediately
        vi.runAllTimers();
        expect(cache.get(1)).toBe(-1);
        expect(cache.count()).toBe(0);
    });
    it("should return TimeLimitedCache instance", () => {
        expect(cache).toBeInstanceOf(TimeLimitedCache);
    });
    it("should handle edge case with same key set multiple times", () => {
        // Set key initially
        expect(cache.set(5, 100, 100)).toBe(false);
        // Overwrite before expiration
        vi.advanceTimersByTime(50);
        expect(cache.set(5, 200, 100)).toBe(true);
        // Overwrite again
        vi.advanceTimersByTime(25);
        expect(cache.set(5, 300, 100)).toBe(true);
        // Check final value
        expect(cache.get(5)).toBe(300);
        expect(cache.count()).toBe(1);
    });
    it("should handle getting non-existent keys", () => {
        expect(cache.get(999)).toBe(-1);
        expect(cache.count()).toBe(0);
        cache.set(1, 42, 100);
        expect(cache.get(999)).toBe(-1); // Different key
        expect(cache.get(1)).toBe(42); // Existing key
    });
});

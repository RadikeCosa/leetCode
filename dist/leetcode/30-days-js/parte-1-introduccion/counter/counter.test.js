/**
 * LeetCode Problem 2620: Counter
 *
 * Given an integer n, return a counter function. This counter function initially returns n
 * and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).
 *
 * Constraints:
 * • -1000 <= n <= 1000
 * • 0 <= calls.length <= 1000
 * • calls[i] === "call"
 *
 * Examples:
 * Example 1:
 * Input: n = 10, calls = ["call","call","call"]
 * Output: [10,11,12]
 * Explanation: counter() = 10, counter() = 11, counter() = 12
 *
 * Example 2:
 * Input: n = -2, calls = ["call","call","call","call","call"]
 * Output: [-2,-1,0,1,2]
 * Explanation: counter() initially returns -2. Then increases after each subsequent call.
 */
import { describe, it, expect } from "vitest";
import { createCounter } from "./counter";
describe("Counter", () => {
    it("should return initial value n on first call", () => {
        const counter = createCounter(10);
        expect(counter()).toBe(10);
    });
    it("should increment by 1 on each subsequent call", () => {
        const counter = createCounter(10);
        expect(counter()).toBe(10); // First call
        expect(counter()).toBe(11); // Second call
        expect(counter()).toBe(12); // Third call
    });
    it("should work with negative initial values", () => {
        const counter = createCounter(-2);
        expect(counter()).toBe(-2);
        expect(counter()).toBe(-1);
        expect(counter()).toBe(0);
        expect(counter()).toBe(1);
        expect(counter()).toBe(2);
    });
    it("should work with zero as initial value", () => {
        const counter = createCounter(0);
        expect(counter()).toBe(0);
        expect(counter()).toBe(1);
        expect(counter()).toBe(2);
    });
    it("should maintain independent state for different counter instances", () => {
        const counter1 = createCounter(5);
        const counter2 = createCounter(100);
        expect(counter1()).toBe(5);
        expect(counter2()).toBe(100);
        expect(counter1()).toBe(6);
        expect(counter2()).toBe(101);
        expect(counter1()).toBe(7);
        expect(counter2()).toBe(102);
    });
    it("should handle maximum constraint values", () => {
        const maxCounter = createCounter(1000);
        expect(maxCounter()).toBe(1000);
        expect(maxCounter()).toBe(1001);
        const minCounter = createCounter(-1000);
        expect(minCounter()).toBe(-1000);
        expect(minCounter()).toBe(-999);
    });
    it("should work with no calls (just creation)", () => {
        const counter = createCounter(42);
        // Counter created but not called yet
        expect(typeof counter).toBe("function");
    });
    it("should maintain count across many calls", () => {
        const counter = createCounter(0);
        const results = [];
        // Call counter 10 times
        for (let i = 0; i < 10; i++) {
            results.push(counter());
        }
        expect(results).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
});

/**
 * LeetCode Problem 2667: Create Hello World Function
 *
 * Write a function createHelloWorld. It should return a new function that always returns "Hello World".
 *
 * Constraints:
 * • 0 <= args.length <= 10
 *
 * Examples:
 * Example 1:
 * Input: args = []
 * Output: "Hello World"
 * Explanation: const f = createHelloWorld(); f(); // "Hello World"
 *
 * Example 2:
 * Input: args = [{},null,42]
 * Output: "Hello World"
 * Explanation: const f = createHelloWorld(); f({}, null, 42); // "Hello World"
 */
import { describe, it, expect } from "vitest";
import { createHelloWorld } from "./create-hello-world-function";
describe("Create Hello World Function", () => {
    it("should return 'Hello World' when called with no arguments", () => {
        const f = createHelloWorld();
        const result = f();
        expect(result).toBe("Hello World");
    });
    it("should return 'Hello World' when called with multiple arguments", () => {
        const f = createHelloWorld();
        const result = f({}, null, 42);
        expect(result).toBe("Hello World");
    });
    it("should return 'Hello World' when called with a single argument", () => {
        const f = createHelloWorld();
        const result = f("test");
        expect(result).toBe("Hello World");
    });
    it("should return 'Hello World' when called with maximum allowed arguments", () => {
        const f = createHelloWorld();
        const result = f(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
        expect(result).toBe("Hello World");
    });
    it("should return 'Hello World' regardless of argument types", () => {
        const f = createHelloWorld();
        expect(f(true, false)).toBe("Hello World");
        expect(f([1, 2, 3])).toBe("Hello World");
        expect(f({ key: "value" })).toBe("Hello World");
        expect(f(undefined)).toBe("Hello World");
    });
    it("should always return the same function behavior", () => {
        const f1 = createHelloWorld();
        const f2 = createHelloWorld();
        expect(f1()).toBe("Hello World");
        expect(f2()).toBe("Hello World");
        expect(f1("different", "args")).toBe("Hello World");
        expect(f2("other", "params")).toBe("Hello World");
    });
});

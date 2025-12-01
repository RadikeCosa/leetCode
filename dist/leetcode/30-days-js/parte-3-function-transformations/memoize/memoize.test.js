/**
 * LeetCode Problem 2623: Memoize
 *
 * Given a function fn, return a memoized version of that function.
 * A memoized function is a function that will never be called twice with the same inputs.
 * Instead it will return a cached value.
 *
 * You can assume there are 3 possible input functions: sum, fib, and factorial.
 *
 * - sum accepts two integers a and b and returns a + b.
 *   Assume that if a value has already been cached for the arguments (b, a) where a != b,
 *   it cannot be used for the arguments (a, b).
 *
 * - fib accepts a single integer n and returns 1 if n <= 1 or fib(n - 1) + fib(n - 2) otherwise.
 *
 * - factorial accepts a single integer n and returns 1 if n <= 1 or factorial(n - 1) * n otherwise.
 *
 * Constraints:
 * - 0 <= a, b <= 10^5
 * - 1 <= n <= 10
 * - 1 <= actions.length <= 10^5
 * - actions.length === values.length
 * - actions[i] is one of "call" and "getCallCount"
 * - fnName is one of "sum", "factorial" and "fib"
 */
import { describe, it, expect } from "vitest";
import { memoize } from "./memoize";
describe("Memoize", () => {
    it("should memoize sum function correctly", () => {
        let callCount = 0;
        const sum = (a, b) => {
            callCount += 1;
            return a + b;
        };
        const memoizedSum = memoize(sum);
        // Primera llamada con (2, 2)
        expect(memoizedSum(2, 2)).toBe(4);
        expect(callCount).toBe(1);
        // Segunda llamada con (2, 2) - debería usar caché
        expect(memoizedSum(2, 2)).toBe(4);
        expect(callCount).toBe(1);
        // Llamada con (1, 2) - nueva combinación
        expect(memoizedSum(1, 2)).toBe(3);
        expect(callCount).toBe(2);
    });
    it("should memoize factorial function correctly", () => {
        let callCount = 0;
        const factorial = (n) => {
            callCount += 1;
            return n <= 1 ? 1 : n * factorial(n - 1);
        };
        const memoFactorial = memoize(factorial);
        // Primera llamada con 2
        expect(memoFactorial(2)).toBe(2);
        const firstCallCount = callCount;
        // Llamada con 3
        expect(memoFactorial(3)).toBe(6);
        const secondCallCount = callCount;
        // Segunda llamada con 2 - debería usar caché
        expect(memoFactorial(2)).toBe(2);
        expect(callCount).toBe(secondCallCount); // No debería incrementar
        // Segunda llamada con 3 - debería usar caché
        expect(memoFactorial(3)).toBe(6);
        expect(callCount).toBe(secondCallCount); // No debería incrementar
    });
    it("should memoize fibonacci function correctly", () => {
        let callCount = 0;
        const fib = (n) => {
            callCount += 1;
            return n <= 1 ? 1 : fib(n - 1) + fib(n - 2);
        };
        const memoFib = memoize(fib);
        // Primera llamada con 5
        expect(memoFib(5)).toBe(8);
        const firstCallCount = callCount;
        // Segunda llamada con 5 - debería usar caché
        expect(memoFib(5)).toBe(8);
        expect(callCount).toBe(firstCallCount); // No debería incrementar
        // Nueva llamada con número diferente
        expect(memoFib(4)).toBe(5);
        // callCount puede incrementar porque 4 no estaba en el caché top-level
    });
    it("should handle different argument orders for sum", () => {
        let callCount = 0;
        const sum = (a, b) => {
            callCount += 1;
            return a + b;
        };
        const memoizedSum = memoize(sum);
        // (3, 2) y (2, 3) deben ser tratados como diferentes
        expect(memoizedSum(3, 2)).toBe(5);
        expect(callCount).toBe(1);
        expect(memoizedSum(2, 3)).toBe(5);
        expect(callCount).toBe(2); // Nueva llamada
    });
    it("should handle edge cases", () => {
        let callCount = 0;
        const sum = (a, b) => {
            callCount += 1;
            return a + b;
        };
        const memoizedSum = memoize(sum);
        // Casos con ceros
        expect(memoizedSum(0, 0)).toBe(0);
        expect(callCount).toBe(1);
        expect(memoizedSum(0, 0)).toBe(0);
        expect(callCount).toBe(1); // Debe usar caché
        // Casos con números grandes
        expect(memoizedSum(100000, 0)).toBe(100000);
        expect(callCount).toBe(2);
    });
    it("should work with single argument functions", () => {
        let callCount = 0;
        const square = (n) => {
            callCount += 1;
            return n * n;
        };
        const memoSquare = memoize(square);
        expect(memoSquare(4)).toBe(16);
        expect(callCount).toBe(1);
        expect(memoSquare(4)).toBe(16);
        expect(callCount).toBe(1); // Debe usar caché
        expect(memoSquare(5)).toBe(25);
        expect(callCount).toBe(2);
    });
});

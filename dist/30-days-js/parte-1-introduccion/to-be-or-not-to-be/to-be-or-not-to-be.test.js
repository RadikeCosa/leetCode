/**
 * LeetCode Problem 2704: To Be Or Not To Be
 *
 * Write a function expect that helps developers test their code. It should take in any value val
 * and return an object with the following two functions:
 * • toBe(val) accepts another value and returns true if the two values === each other.
 *   If they are not equal, it should throw an error "Not Equal".
 * • notToBe(val) accepts another value and returns true if the two values !== each other.
 *   If they are equal, it should throw an error "Equal".
 *
 * Examples:
 * Example 1:
 * Input: func = () => expect(5).toBe(5)
 * Output: {"value": true}
 * Explanation: 5 === 5 so this expression returns true.
 *
 * Example 2:
 * Input: func = () => expect(5).toBe(null)
 * Output: {"error": "Not Equal"}
 * Explanation: 5 !== null so this expression throw the error "Not Equal".
 *
 * Example 3:
 * Input: func = () => expect(5).notToBe(null)
 * Output: {"value": true}
 * Explanation: 5 !== null so this expression returns true.
 */
import { describe, it, expect as vitestExpect } from "vitest";
import { expect } from "./to-be-or-not-to-be";
describe("To Be Or Not To Be", () => {
    describe("toBe method", () => {
        it("should return true when values are strictly equal", () => {
            const result = expect(5).toBe(5);
            vitestExpect(result).toBe(true);
        });
        it("should return true for same string values", () => {
            const result = expect("hello").toBe("hello");
            vitestExpect(result).toBe(true);
        });
        it("should return true for same boolean values", () => {
            const result = expect(true).toBe(true);
            vitestExpect(result).toBe(true);
        });
        it("should return true for same object reference", () => {
            const obj = { a: 1 };
            const result = expect(obj).toBe(obj);
            vitestExpect(result).toBe(true);
        });
        it("should throw 'Not Equal' error when values are different", () => {
            vitestExpect(() => {
                expect(5).toBe(null);
            }).toThrow("Not Equal");
        });
        it("should throw 'Not Equal' error for different numbers", () => {
            vitestExpect(() => {
                expect(5).toBe(10);
            }).toThrow("Not Equal");
        });
        it("should throw 'Not Equal' error for different types", () => {
            vitestExpect(() => {
                expect(5).toBe("5");
            }).toThrow("Not Equal");
        });
        it("should throw 'Not Equal' error for different objects with same content", () => {
            vitestExpect(() => {
                expect({ a: 1 }).toBe({ a: 1 });
            }).toThrow("Not Equal");
        });
    });
    describe("notToBe method", () => {
        it("should return true when values are not equal", () => {
            const result = expect(5).notToBe(null);
            vitestExpect(result).toBe(true);
        });
        it("should return true for different numbers", () => {
            const result = expect(5).notToBe(10);
            vitestExpect(result).toBe(true);
        });
        it("should return true for different types", () => {
            const result = expect(5).notToBe("5");
            vitestExpect(result).toBe(true);
        });
        it("should return true for different objects with same content", () => {
            const result = expect({ a: 1 }).notToBe({ a: 1 });
            vitestExpect(result).toBe(true);
        });
        it("should throw 'Equal' error when values are strictly equal", () => {
            vitestExpect(() => {
                expect(5).notToBe(5);
            }).toThrow("Equal");
        });
        it("should throw 'Equal' error for same string values", () => {
            vitestExpect(() => {
                expect("hello").notToBe("hello");
            }).toThrow("Equal");
        });
        it("should throw 'Equal' error for same boolean values", () => {
            vitestExpect(() => {
                expect(false).notToBe(false);
            }).toThrow("Equal");
        });
        it("should throw 'Equal' error for same object reference", () => {
            const obj = { a: 1 };
            vitestExpect(() => {
                expect(obj).notToBe(obj);
            }).toThrow("Equal");
        });
    });
    describe("edge cases", () => {
        it("should handle null and undefined correctly", () => {
            const result1 = expect(null).notToBe(undefined);
            const result2 = expect(undefined).notToBe(null);
            vitestExpect(result1).toBe(true);
            vitestExpect(result2).toBe(true);
        });
        it("should handle zero and false correctly (strict comparison)", () => {
            const result1 = expect(0).notToBe(false);
            const result2 = expect("").notToBe(false);
            vitestExpect(result1).toBe(true);
            vitestExpect(result2).toBe(true);
        });
        it("should handle NaN correctly", () => {
            // NaN !== NaN in JavaScript
            const result = expect(NaN).notToBe(NaN);
            vitestExpect(result).toBe(true);
        });
    });
});

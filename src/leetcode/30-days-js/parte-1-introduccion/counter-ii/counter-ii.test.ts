/**
 * LeetCode Problem 2665: Counter II
 *
 * Write a function createCounter. It should accept an initial integer init.
 * It should return an object with three functions:
 * • increment() increases the current value by 1 and then returns it.
 * • decrement() reduces the current value by 1 and then returns it.
 * • reset() sets the current value to init and then returns it.
 *
 * Constraints:
 * • -1000 <= init <= 1000
 * • 0 <= calls.length <= 1000
 * • calls[i] is one of "increment", "decrement" and "reset"
 */
import { describe, it, expect } from "vitest";
import { createCounter } from "./counter-ii";

describe("Counter II", () => {
  it("should handle example 1: init=5, calls=[increment,reset,decrement]", () => {
    const counter = createCounter(5);
    const results = [
      counter.increment(), // 6
      counter.reset(), // 5
      counter.decrement(), // 4
    ];
    expect(results).toEqual([6, 5, 4]);
  });

  it("should handle example 2: init=0, calls=[increment,increment,decrement,reset,reset]", () => {
    const counter = createCounter(0);
    const results = [
      counter.increment(), // 1
      counter.increment(), // 2
      counter.decrement(), // 1
      counter.reset(), // 0
      counter.reset(), // 0
    ];
    expect(results).toEqual([1, 2, 1, 0, 0]);
  });

  it("should work with negative initial value", () => {
    const counter = createCounter(-10);
    expect(counter.increment()).toBe(-9);
    expect(counter.increment()).toBe(-8);
    expect(counter.decrement()).toBe(-9);
    expect(counter.reset()).toBe(-10);
  });

  it("should maintain state across multiple operations", () => {
    const counter = createCounter(100);

    // Increments
    expect(counter.increment()).toBe(101);
    expect(counter.increment()).toBe(102);
    expect(counter.increment()).toBe(103);

    // Decrements
    expect(counter.decrement()).toBe(102);
    expect(counter.decrement()).toBe(101);

    // Reset
    expect(counter.reset()).toBe(100);

    // Continue after reset
    expect(counter.decrement()).toBe(99);
    expect(counter.increment()).toBe(100);
  });

  it("should handle edge case: init at minimum constraint", () => {
    const counter = createCounter(-1000);
    expect(counter.increment()).toBe(-999);
    expect(counter.reset()).toBe(-1000);
    expect(counter.decrement()).toBe(-1001);
  });

  it("should handle edge case: init at maximum constraint", () => {
    const counter = createCounter(1000);
    expect(counter.decrement()).toBe(999);
    expect(counter.reset()).toBe(1000);
    expect(counter.increment()).toBe(1001);
  });

  it("should handle multiple resets", () => {
    const counter = createCounter(42);
    counter.increment(); // 43
    counter.increment(); // 44
    counter.decrement(); // 43

    expect(counter.reset()).toBe(42);
    expect(counter.reset()).toBe(42);
    expect(counter.reset()).toBe(42);
  });

  it("should handle zero initialization", () => {
    const counter = createCounter(0);
    expect(counter.increment()).toBe(1);
    expect(counter.decrement()).toBe(0);
    expect(counter.decrement()).toBe(-1);
    expect(counter.reset()).toBe(0);
  });

  it("should create independent counter instances", () => {
    const counter1 = createCounter(5);
    const counter2 = createCounter(10);

    counter1.increment(); // 6
    counter2.increment(); // 11

    expect(counter1.increment()).toBe(7);
    expect(counter2.decrement()).toBe(10);

    expect(counter1.reset()).toBe(5);
    expect(counter2.reset()).toBe(10);
  });
});

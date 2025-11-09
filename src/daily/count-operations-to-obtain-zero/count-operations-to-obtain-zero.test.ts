import { countOperations } from "./count-operations-to-obtain-zero";
import { describe, it, expect } from "vitest";
/*
Problem: Count Operations to Obtain Zero

Given two non-negative integers num1 and num2, return the number of operations
to make either of the numbers equal to 0.

In one operation, if num1 >= num2, you must subtract num2 from num1,
otherwise subtract num1 from num2.

Examples:
Example 1:
Input: num1 = 2, num2 = 3
Output: 3
Explanation:
2,3 -> 2,1 -> 1,1 -> 0,1

Example 2:
Input: num1 = 10, num2 = 10
Output: 1
Explanation:
10,10 -> 0,10

Constraints:
0 <= num1, num2 <= 10^5

Tags: Math, Simulation
Difficulty: Easy
*/

describe("Count Operations to Obtain Zero", () => {
  it("Example 1", () => {
    const num1 = 2;
    const num2 = 3;
    const expected = 3;
    expect(countOperations(num1, num2)).toBe(expected);
  });

  it("Example 2", () => {
    const num1 = 10;
    const num2 = 10;
    const expected = 1;
    expect(countOperations(num1, num2)).toBe(expected);
  });
});

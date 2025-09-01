import { describe, it, expect } from "vitest";
import { numOfUnplacedFruits } from "./fruits-into-baskets-ii";
/*
You are given two arrays of integers, fruits and baskets, each of length n, where fruits[i] represents the quantity of the ith type of fruit, and baskets[j] represents the capacity of the jth basket.

From left to right, place the fruits according to these rules:

Each fruit type must be placed in the leftmost available basket with a capacity greater than or equal to the quantity of that fruit type.
Each basket can hold only one type of fruit.
If a fruit type cannot be placed in any basket, it remains unplaced.
Return the number of fruit types that remain unplaced after all possible allocations are made.

 

n == fruits.length == baskets.length
1 <= n <= 100
1 <= fruits[i], baskets[i] <= 1000
*/
describe("Fruits Into Baskets II", () => {
    it("Example 1: should return 1 unplaced fruit", () => {
        expect(numOfUnplacedFruits([3, 5, 2], [4, 3, 1])).toBe(1);
    });
    it("Example 2: should return 0 unplaced fruit", () => {
        expect(numOfUnplacedFruits([3, 6, 1], [6, 4, 7])).toBe(0);
    });
    it("example 2: should return 2 unplaced fruit", () => {
        expect(numOfUnplacedFruits([1, 6, 6], [9, 4, 3])).toBe(2);
    });
});

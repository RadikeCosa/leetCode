/**
 * LeetCode Problem 1518: Water Bottles
 * Difficulty: Easy
 * Topics: Math, Simulation
 *
 * There are n water bottles that are initially full of water. You can exchange k empty water bottles for one full water bottle.
 * The operation can be performed any number of times until you cannot exchange enough empty bottles to get a new full bottle.
 *
 * Return the maximum number of water bottles you can drink.
 *
 * Example 1:
 * Input: numBottles = 9, numExchange = 3
 * Output: 13
 * Explanation: You can drink 9 bottles to get 9 empty bottles. Exchange 3 empty bottles for 1 full bottle. Now you have 6 empty bottles and 1 full bottle. Drink it, now you have 7 empty bottles. Exchange 3 empty bottles for 1 full bottle. Now you have 4 empty bottles and 1 full bottle. Drink it, now you have 5 empty bottles. Exchange 3 empty bottles for 1 full bottle. Now you have 2 empty bottles and 1 full bottle. Drink it, now you have 3 empty bottles. Exchange 3 empty bottles for 1 full bottle. Now you have 0 empty bottles and 1 full bottle. Drink it, now you have 1 empty bottle. You cannot exchange anymore.
 *
 * Example 2:
 * Input: numBottles = 15, numExchange = 4
 * Output: 19
 * Explanation: You can drink 15 bottles to get 15 empty bottles. Exchange 4 empty bottles for 1 full bottle. Now you have 12 empty bottles and 1 full bottle. Drink it, now you have 13 empty bottles. Exchange 4 empty bottles for 1 full bottle. Now you have 9 empty bottles and 1 full bottle. Drink it, now you have 10 empty bottles. Exchange 4 empty bottles for 1 full bottle. Now you have 7 empty bottles and 1 full bottle. Drink it, now you have 8 empty bottles. Exchange 4 empty bottles for 1 full bottle. Now you have 5 empty bottles and 1 full bottle. Drink it, now you have 6 empty bottles. Exchange 4 empty bottles for 1 full bottle. Now you have 3 empty bottles and 1 full bottle. Drink it, now you have 4 empty bottles. Exchange 4 empty bottles for 1 full bottle. Now you have 0 empty bottles and 1 full bottle. Drink it, now you have 1 empty bottle. You cannot exchange anymore.
 *
 * Constraints:
 * - 1 <= numBottles <= 100
 * - 2 <= numExchange <= 100
 */
import { describe, it, expect } from "vitest";
import { numWaterBottles } from "./water-bottles";
describe("Water Bottles", () => {
    it("should return 13 in example 1 with numBottles = 9 and numExchange = 3", () => {
        expect(numWaterBottles(9, 3)).toBe(13);
    });
    it("should return 19 in example 2 with numBottles = 15 and numExchange = 4", () => {
        expect(numWaterBottles(15, 4)).toBe(19);
    });
    // Casos edge
    it("should return 1 when only one bottle and cannot exchange (minimum case)", () => {
        expect(numWaterBottles(1, 2)).toBe(1);
    });
    it("should return 3 when 2 bottles with exchange rate 2", () => {
        expect(numWaterBottles(2, 2)).toBe(3);
    });
    it("should handle maximum exchange rate (100)", () => {
        expect(numWaterBottles(100, 100)).toBe(101);
    });
    it("should handle case where exchange rate equals initial bottles", () => {
        expect(numWaterBottles(5, 5)).toBe(6);
    });
    it("should handle case with high exchange rate relative to bottles", () => {
        expect(numWaterBottles(10, 50)).toBe(10);
    });
    it("should handle maximum bottles (100) with minimum exchange (2)", () => {
        expect(numWaterBottles(100, 2)).toBe(199);
    });
});

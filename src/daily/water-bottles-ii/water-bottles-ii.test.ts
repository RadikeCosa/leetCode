/**
 * LeetCode Problem 3100: Water Bottles II
 * Difficulty: Medium
 * Topics: Math, Simulation
 *
 * You are given two integers numBottles and numExchange.
 *
 * numBottles represents the number of full water bottles that you initially have.
 * In one operation, you can perform one of the following operations:
 *
 * • Drink any number of full water bottles turning them into empty bottles.
 * • Exchange numExchange empty bottles with one full water bottle.
 *   Then, increase numExchange by one.
 *
 * Note that you cannot exchange multiple batches of empty bottles for the same
 * value of numExchange. For example, if numBottles == 3 and numExchange == 1,
 * you cannot exchange 3 empty water bottles for 3 full bottles.
 *
 * Return the maximum number of water bottles you can drink.
 *
 * Example 1:
 * Input: numBottles = 13, numExchange = 6
 * Output: 15
 * Explanation: The table above shows the number of full water bottles, empty water bottles,
 * the value of numExchange, and the number of bottles drunk.
 *
 * Example 2:
 * Input: numBottles = 10, numExchange = 3
 * Output: 13
 * Explanation: The table above shows the number of full water bottles, empty water bottles,
 * the value of numExchange, and the number of bottles drunk.
 *
 * Constraints:
 * - 1 <= numBottles <= 100
 * - 1 <= numExchange <= 100
 *
 * Hints:
 * - Simulate the process step by step. At each step, drink numExchange bottles of water then exchange them for a full bottle. Keep repeating this step until you cannot exchange bottles anymore.
 */
import { describe, it, expect } from "vitest";
import { maxWaterBottles } from "./water-bottles-ii";

describe("Water Bottles II", () => {
  it("it should return the maximum number of water bottles that can be drunk", () => {
    expect(maxWaterBottles(13, 6)).toBe(15);
    expect(maxWaterBottles(10, 3)).toBe(13);
    expect(maxWaterBottles(1, 1)).toBe(2);
    expect(maxWaterBottles(5, 10)).toBe(5);
  });
});

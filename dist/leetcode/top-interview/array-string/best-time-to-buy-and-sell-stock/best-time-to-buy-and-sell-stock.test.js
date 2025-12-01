import { maxProfit } from "./best-time-to-buy-and-sell-stock";
import { describe, expect, it } from "vitest";
describe("Best Time To Buy And Sell Stock", () => {
    it("Example 1", () => {
        const prices = [7, 1, 5, 3, 6, 4];
        const result = maxProfit(prices);
        expect(result).toBe(5);
    });
    it("Example 2", () => {
        const prices = [7, 6, 4, 3, 1];
        const result = maxProfit(prices);
        expect(result).toBe(0);
    });
    it("Single day (no transaction possible)", () => {
        const prices = [5];
        const result = maxProfit(prices);
        expect(result).toBe(0);
    });
    it("All prices equal (no profit)", () => {
        const prices = [3, 3, 3, 3, 3];
        const result = maxProfit(prices);
        expect(result).toBe(0);
    });
    it("Profit at the end", () => {
        const prices = [2, 1, 2, 1, 5];
        const result = maxProfit(prices);
        expect(result).toBe(4);
    });
    it("Profit at the beginning", () => {
        const prices = [1, 10, 2, 3, 4];
        const result = maxProfit(prices);
        expect(result).toBe(9);
    });
});

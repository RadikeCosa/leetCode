import { maxProfit } from "./best-time-to-sell-and-buy-stocks-ii";
import { describe, expect, it } from "vitest";
/**
 Example 1:
Input: prices = [7,1,5,3,6,4]
Output: 7
Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
Total profit is 4 + 3 = 7.

Example 2:
Input: prices = [1,2,3,4,5]
Output: 4
Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
Total profit is 4.

Example 3:
Input: prices = [7,6,4,3,1]
Output: 0
Explanation: There is no way to make a positive profit, so we never buy the stock to achieve the maximum profit of 0.
 
 */
describe("Best Time To Sell And Buy Stocks Ii", () => {
    it("Example 1", () => {
        const prices = [7, 1, 5, 3, 6, 4];
        const result = maxProfit(prices);
        expect(result).toBe(7);
    });
    it("Example 2", () => {
        const prices = [1, 2, 3, 4, 5];
        const result = maxProfit(prices);
        expect(result).toBe(4);
    });
    it("Example 3", () => {
        const prices = [7, 6, 4, 3, 1];
        const result = maxProfit(prices);
        expect(result).toBe(0);
    });
});

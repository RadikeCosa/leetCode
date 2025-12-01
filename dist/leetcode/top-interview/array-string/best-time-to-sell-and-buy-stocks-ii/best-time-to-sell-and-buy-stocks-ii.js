/**
 * LeetCode Problem: Best Time To Sell And Buy Stocks Ii
 * Difficulty: Medium
 * Topics: Array, Greedy
 *
 * @param {number[]} prices - Array of stock prices
 * @returns {number} Maximum profit achievable
 */
export function maxProfit(prices) {
    let maxProfit = 0;
    for (let i = 1; i < prices.length; i++) {
        const profitThatDay = prices[i] - prices[i - 1];
        if (profitThatDay > 0) {
            maxProfit += profitThatDay;
        }
    }
    return maxProfit;
}

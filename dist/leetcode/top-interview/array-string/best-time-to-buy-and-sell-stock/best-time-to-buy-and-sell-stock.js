/**
 * @param {number[]} prices
 * @return {number}
 */
export function maxProfit(prices) {
    let maxProfit = 0;
    let minPrevPrice = prices[0];
    for (let i = 1; i < prices.length; i++) {
        const maxProfitThatDay = prices[i] - minPrevPrice;
        maxProfit = Math.max(maxProfit, maxProfitThatDay);
        minPrevPrice = Math.min(minPrevPrice, prices[i]);
    }
    return maxProfit;
}

/**
 * FreeCodeCamp Problem: Traveling Shopper
 * Category: FreeCodeCamp
 *
 * @param {Array} funds - The amount of money available, formatted as ["Amount", "Currency Code"]
 * @param {Array} items - An array of items to purchase, each formatted as ["Amount", "Currency Code"]
 * @returns {string} A message indicating whether all items can be bought or how many can be bought
 */
function buyItems(amount, items) {
  // Convertir monto inicial a USD
  let budget = parseFloat(amount[0]) * rates[amount[1]];
  let count = 0;

  for (const [price, currency] of items) {
    const priceUSD = parseFloat(price) * rates[currency];
    if (budget >= priceUSD) {
      budget -= priceUSD;
      count++;
    } else {
      return `Buy the first ${count} items.`;
    }
  }
  return "Buy them all!";
}

const rates = {
  USD: 1.0,
  EUR: 1.1,
  GBP: 1.25,
  JPY: 0.007,
  CAD: 0.75,
};

export default buyItems;

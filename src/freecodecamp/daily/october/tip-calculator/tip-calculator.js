/**
 * FreeCodeCamp Problem: Tip Calculator
 * Category: Daily
 *
 * Given the price of your meal and a custom tip percent, return an array with three tip values;
 * 15%, 20%, and the custom amount.
 *
 * - Prices will be given in the format: "$N.NN".
 * - Custom tip percents will be given in this format: "25%".
 * - Return amounts in the same "$N.NN" format, rounded to two decimal places.
 * - For example, given a "$10.00" meal price, and a "25%" custom tip value, return ["$1.50", "$2.00", "$2.50"].
 *
 * @param {string} mealPrice - The price of the meal in format "$N.NN"
 * @param {string} customTip - The custom tip percentage in format "N%"
 * @returns {string[]} - Array of three tip amounts: [15%, 20%, custom%] in "$N.NN" format
 */
function calculateTips(mealPrice, customTip) {
  const price = parseFloat(mealPrice.slice(1)); // Convertir "$N.NN" a número
  const customPercent = parseFloat(customTip.slice(0, -1)) / 100; // Convertir "N%" a decimal

  const tips = [
    (price * 0.15).toFixed(2),
    (price * 0.2).toFixed(2),
    (price * customPercent).toFixed(2),
  ];

  return tips.map((tip) => `$${tip}`);
}

export default calculateTips;

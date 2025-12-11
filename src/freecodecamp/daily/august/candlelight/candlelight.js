/**
 * FreeCodeCamp Problem: Candlelight
 * Category: FreeCodeCamp
 *
 * @param {number} candles - The initial number of candles
 * @param {number} leftoversNeeded - The number of burned candles needed to create a new one
 * @returns {number} The total number of candles burned
 */
function burnCandles(candles, leftoversNeeded) {
  let totalBurned = 0;
  let leftovers = 0;

  while (candles > 0) {
    totalBurned += candles;
    leftovers += candles;
    candles = Math.floor(leftovers / leftoversNeeded);
    leftovers = leftovers % leftoversNeeded;
  }
  return totalBurned;
}

export default burnCandles;

/**
 * FreeCodeCamp Problem: Roman Numeral Parser
 * Category: FreeCodeCamp
 *
 * @param {string} numeral - The Roman numeral string to parse
 * @returns {number} The integer value of the Roman numeral
 */
function parseRomanNumeral(numeral) {
  const romanToInt = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total = 0;

  for (let i = 0; i < numeral.length; i++) {
    const currentVal = romanToInt[numeral[i]];
    const nextVal = romanToInt[numeral[i + 1]];

    if (nextVal && currentVal < nextVal) {
      total -= currentVal;
    } else {
      total += currentVal;
    }
  }

  return total;
}

export default parseRomanNumeral;

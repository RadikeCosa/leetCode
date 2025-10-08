/**
 * FreeCodeCamp Problem: Binary to Decimal
 * Category: Daily
 * Difficulty: Easy
 * Topics: Math, String, Conversion
 *
 * Given a string representing a binary number, return its decimal equivalent as a number.
 *
 * A binary number uses only the digits 0 and 1 to represent any number. To convert binary to decimal, multiply each digit by a power of 2 and add them together. Start by multiplying the rightmost digit by 2^0, the next digit to the left by 2^1, and so on. Once all digits have been multiplied by a power of 2, add the result together.
 *
 * Time Complexity: O(n) - n is the length of the string
 * Space Complexity: O(1) - constant extra space
 */
function toDecimal(binary) {
  let decimal = 0;
  const length = binary.length;
  for (let i = 0; i < length; i++) {
    // Convert each character to a number and multiply by the corresponding power of 2
    decimal += Number(binary[length - 1 - i]) * Math.pow(2, i);
  }
  return decimal;
}

module.exports = toDecimal;

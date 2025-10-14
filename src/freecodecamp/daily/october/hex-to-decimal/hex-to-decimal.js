/**
 * FreeCodeCamp Problem: Hex to Decimal
 * Category: Daily
 * Difficulty: Easy
 * Topics: Math, String, Base Conversion
 *
 * Given a string representing a hexadecimal number (base 16), return its decimal (base 10) value as an integer.
 *
 * Hexadecimal is a number system that uses 16 digits:
 * 0-9 represent values 0 through 9.
 * A-F represent values 10 through 15.
 *
 * The string will only contain characters 0–9 and A–F.
 *
 * Examples:
 * - hexToDecimal("A") should return 10
 * - hexToDecimal("15") should return 21
 * - hexToDecimal("2E") should return 46
 * - hexToDecimal("FF") should return 255
 * - hexToDecimal("A3F") should return 2623
 */
function hexToDecimal(hex) {
  function charToValue(char) {
    if (char >= "0" && char <= "9") {
      return char.charCodeAt(0) - "0".charCodeAt(0);
    } else if (char >= "A" && char <= "F") {
      return char.charCodeAt(0) - "A".charCodeAt(0) + 10;
    }
    return -1; // Valor no válido
  }

  let decimalValue = 0;
  const hexLength = hex.length;

  for (let i = 0; i < hexLength; i++) {
    const charValue = charToValue(hex[i]);
    if (charValue === -1) {
      throw new Error("Invalid hexadecimal character");
    }
    decimalValue = decimalValue * 16 + charValue;
  }

  return decimalValue;
}

module.exports = hexToDecimal;

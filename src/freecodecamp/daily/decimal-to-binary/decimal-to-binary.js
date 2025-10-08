/**
 * FreeCodeCamp Problem: Decimal to Binary
 * Difficulty: Easy
 * Topics: Numbers, Strings, Math
 *
 * Given a non-negative integer, return its binary representation as a string.
 *
 * A binary number uses only the digits 0 and 1 to represent any number. To convert
 * a decimal number to binary, repeatedly divide the number by 2 and record the
 * remainder. Repeat until the number is zero. Read the remainders last recorded
 * to first. For example, to convert 12 to binary:
 *
 * 12 ÷ 2 = 6 remainder 0
 * 6 ÷ 2 = 3 remainder 0
 * 3 ÷ 2 = 1 remainder 1
 * 1 ÷ 2 = 0 remainder 1
 * 12 in binary is 1100.
 *
 * Example 1:
 * Input: 5
 * Output: "101"
 * Explanation: 5 in binary is 101
 *
 * Example 2:
 * Input: 12
 * Output: "1100"
 * Explanation: 12 in binary is 1100
 *
 * Constraints:
 * - Input will be a non-negative integer
 * - 0 ≤ decimal ≤ 1000000 (reasonable upper bound for this problem)
 */
function toBinary(decimal) {
  if (decimal === 0) return "0";
  let binary = "";
  while (decimal > 0) {
    binary = (decimal % 2) + binary; // Prepend remainder
    decimal = Math.floor(decimal / 2); // Update decimal
  }
  return binary;
}

export default toBinary;

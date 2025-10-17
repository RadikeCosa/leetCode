/**
 * FreeCodeCamp Problem: Credit Card Masker
 * Category: Daily
 * Difficulty: Easy
 * Topics: Strings, Regular Expressions, Arrays
 *
 * Given a string of credit card numbers, return a masked version of it using the following constraints:
 *
 * The string will contain four sets of four digits (0-9), with all sets being separated by a single space, or a single hyphen (-).
 * Replace all numbers, except the last four, with an asterisk (*).
 * Leave the remaining characters unchanged.
 * For example, given "4012-8888-8888-1881" return "****-****-****-1881".
 *
 * Time Complexity: O(n) - Linear scan to detect separator, split/join operations
 * Space Complexity: O(n) - Creates temporary array of 4 groups during processing
 */
function mask(card) {
  const separator = card.includes(" ") ? " " : "-";
  const groups = card.split(separator);
  const masked = groups.map((group, i) => (i < 3 ? "****" : group));
  return masked.join(separator);
}

export default mask;

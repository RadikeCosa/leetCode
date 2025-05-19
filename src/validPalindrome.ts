/**
 * Leetcode #125 - Valid Palindrome
 *
 * A phrase is a palindrome if, after converting all uppercase letters into
 * lowercase letters and removing all non-alphanumeric characters, it reads
 * the same forward and backward.
 *
 * Examples:
 * Input: "A man, a plan, a canal: Panama" => Output: true
 * Input: "race a car" => Output: false
 * Input: " " => Output: true
 */

export function isPalindrome(s: string): boolean {
  let left = 0;
  let right = s.length - 1;

  const isAlphaNumeric = (char: string): boolean => /[a-z0-9]/i.test(char);

  while (left < right) {
    while (left < right && !isAlphaNumeric(s[left])) {
      left++;
    }

    while (left < right && !isAlphaNumeric(s[right])) {
      right--;
    }

    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}
// Test cases

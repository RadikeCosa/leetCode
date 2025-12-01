/**
 * LeetCode 1323: Maximum 69 Number
 * Difficulty: Easy
 * Topics: Math, Greedy
 *
 * Given a positive integer num consisting only of digits 6 and 9.
 * Return the maximum number you can get by changing at most one digit
 * (6 becomes 9, and 9 becomes 6).
 *
 * Time Complexity: O(log n) - where n is the input number (number of digits)
 * Space Complexity: O(log n) - for the digits array
 */
export function maximum69Number(num) {
    // Convert number to array of digits for easy manipulation
    const digits = num.toString().split("").map(Number);
    // Find the first (leftmost) 6 and change it to 9 for maximum impact
    // Using greedy approach: leftmost digit has the highest positional value
    for (let i = 0; i < digits.length; i++) {
        if (digits[i] === 6) {
            digits[i] = 9;
            break; // Only change the first 6 found (at most one digit)
        }
    }
    // Convert array back to number
    return parseInt(digits.join(""), 10);
}

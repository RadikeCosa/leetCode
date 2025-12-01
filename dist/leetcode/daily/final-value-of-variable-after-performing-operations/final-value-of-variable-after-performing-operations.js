/**
 * LeetCode Problem 2011: Final Value of Variable After Performing Operations
 * Difficulty: Easy
 * Topics: Array, String, Simulation
 * Daily Challenge: 20 Oct 2025
 */
/**
 * There is a programming language with only four operations and one variable X:
 * - ++X and X++ increments the value of the variable X by 1.
 * - --X and X-- decrements the value of the variable X by 1.
 *
 * Initially, the value of X is 0.
 * Given an array of strings operations containing a list of operations,
 * return the final value of X after performing all the operations.
 *
 * @param operations - Array of strings containing operations
 * @returns Final value of X after all operations
 *
 * Time Complexity: O(n) - where n is the length of operations array
 * Space Complexity: O(1) - only using a variable to track X
 */
function finalValueAfterOperations(operations) {
    let x = 0;
    for (const op of operations) {
        if (op === "++X" || op === "X++") {
            x++;
        }
        else {
            x--;
        }
    }
    return x;
}
export default finalValueAfterOperations;

/**
 * LeetCode Problem: Count Operations to Obtain Zero
 * Difficulty: Easy
 * Topics: Math, Simulation
 *
 * Given two non-negative integers num1 and num2, return the number of operations
 * to make either of the numbers equal to 0.
 *
 * In one operation, if num1 >= num2, you must subtract num2 from num1,
 * otherwise subtract num1 from num2.
 *
 * TODO: Implement solution
 *
 * @param {number} num1
 * @param {number} num2
 * @returns {number} number of operations to make either num1 or num2 zero
 */
export function countOperations(num1, num2) {
    let ops = 0;
    while (num1 > 0 && num2 > 0) {
        if (num1 >= num2) {
            num1 -= num2;
        }
        else {
            num2 -= num1;
        }
        ops++;
    }
    return ops;
}

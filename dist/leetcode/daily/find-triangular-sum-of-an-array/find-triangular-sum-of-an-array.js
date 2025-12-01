/**
 * LeetCode Problem 2221: Find Triangular Sum of an Array
 * Difficulty: Medium
 * Topics: Array, Math, Simulation, Combinatorics
 *
 * You are given a 0-indexed integer array nums, where nums[i] is a digit between 0 and 9 (inclusive).
 *
 * The triangular sum of nums is the value of the only element present in nums after the following process terminates:
 *
 * 1. Let nums comprise of n elements. If n == 1, end the process. Otherwise, create a new 0-indexed integer array newNums of length n - 1.
 * 2. For each index i, where 0 <= i < n - 1, assign the value of newNums[i] as (nums[i] + nums[i+1]) % 10, where % denotes modulo operator.
 * 3. Replace the array nums with newNums.
 * 4. Repeat the entire process starting from step 1.
 *
 * Return the triangular sum of nums.
 *
 * Time Complexity: O(n²) - n iterations, each processing up to n elements
 * Space Complexity: O(1) - in-place modification of input array
 */
export function triangularSum(nums) {
    let n = nums.length;
    if (n === 1) {
        return nums[0];
    }
    while (n > 1) {
        // Modificar el array desde la posición n-2 hacia atrás
        for (let i = 0; i < n - 1; i++) {
            nums[i] = (nums[i] + nums[i + 1]) % 10;
        }
        n--; // Reducir el tamaño efectivo del array
    }
    return nums[0];
}

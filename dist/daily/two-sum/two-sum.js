/**
 * LeetCode Problem 1: Two Sum
 * Difficulty: Easy
 * Topics: Array, Hash Table
 *
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 *
 * Time Complexity: O(n) - single pass through the array
 * Space Complexity: O(n) - hash map to store values and indices
 */
export function twoSum(nums, target) {
    // Map para recordar: valor -> índice
    const seen = new Map();
    for (let i = 0; i < nums.length; i++) {
        const currentNum = nums[i];
        const complement = target - currentNum;
        // ¿Ya vi el número que necesito?
        if (seen.has(complement)) {
            // ¡Encontré la pareja! Regreso los índices
            return [seen.get(complement), i];
        }
        // Guardo el número actual para futuras referencias
        seen.set(currentNum, i);
    }
    return []; // Nunca debería llegar aquí según el problema
}

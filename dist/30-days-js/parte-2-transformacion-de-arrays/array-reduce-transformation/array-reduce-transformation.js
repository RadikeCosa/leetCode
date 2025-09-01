/**
 * LeetCode Problem 2626: Array Reduce Transformation
 * Difficulty: Easy
 * Topics: Array, Function
 *
 * Given an integer array nums, a reducer function fn, and an initial value init,
 * return the final result obtained by executing the fn function on each element
 * of the array, sequentially, passing in the return value from the calculation
 * on the preceding element.
 *
 * This result is achieved through: val = fn(init, nums[0]), val = fn(val, nums[1]), etc.
 * If the array length is 0, return init.
 * Please solve it without using the built-in Array.reduce method.
 *
 * Time Complexity: O(n) - we need to iterate through each element once
 * Space Complexity: O(1) - we only use a single accumulator variable
 */
export function reduce(nums, fn, init) {
    // TODO: Implementar la función que reduce el array a un valor usando la función fn
    // Empezar con init y aplicar fn secuencialmente a cada elemento
    let acc = init;
    for (let i = 0; i < nums.length; i++) {
        acc = fn(acc, nums[i]);
    }
    return acc;
}

/**
 * LeetCode Problem 2665: Counter II
 * Difficulty: Easy
 * Topics: JavaScript, Closures, Function Return
 *
 * Write a function createCounter. It should accept an initial integer init.
 * It should return an object with three functions:
 * • increment() increases the current value by 1 and then returns it.
 * • decrement() reduces the current value by 1 and then returns it.
 * • reset() sets the current value to init and then returns it.
 *
 * Time Complexity: O(1) - todas las operaciones son constantes
 * Space Complexity: O(1) - solo almacena variables de estado
 */
export function createCounter(init) {
    let count = init;
    return {
        increment: () => ++count,
        decrement: () => --count,
        reset: () => (count = init),
    };
}

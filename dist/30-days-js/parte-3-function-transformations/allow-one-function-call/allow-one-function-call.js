/**
 * LeetCode Problem 2666: Allow One Function Call
 * Difficulty: Easy
 * Topics: Function, JavaScript, TypeScript, Closures
 *
 * Given a function fn, return a new function that is identical to the original function
 * except that it ensures fn is called at most once.
 *
 * - The first time the returned function is called, it should return the same result as fn.
 * - Every subsequent time it is called, it should return undefined.
 *
 * Time Complexity: O(1) - constant time operation
 * Space Complexity: O(1) - only storing a boolean flag
 */
export function once(fn) {
    let called = false;
    return function (...args) {
        if (!called) {
            called = true;
            return fn(...args);
        }
        return undefined;
    };
}

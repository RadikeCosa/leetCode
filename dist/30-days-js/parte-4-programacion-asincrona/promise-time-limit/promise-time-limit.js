/**
 * LeetCode Problem 2637: Promise Time Limit
 * Difficulty: Medium
 * Topics: JavaScript, Asynchronous Programming, Promises, Race Conditions
 *
 * Given an asynchronous function fn and a time t in milliseconds, return a new
 * time limited version of the input function. fn takes arguments provided to
 * the time limited function.
 *
 * The time limited function should follow these rules:
 * - If the fn completes within the time limit of t milliseconds, resolve with result
 * - If execution exceeds the time limit, reject with "Time Limit Exceeded"
 *
 * Time Complexity: O(1) - constant time operations for setup
 * Space Complexity: O(1) - constant space usage
 */
export function timeLimit(fn, t) {
    return async function (...args) {
        // Crear promise que rechaza después de t milisegundos
        const timeoutPromise = new Promise((resolve, reject) => {
            setTimeout(() => reject("Time Limit Exceeded"), t);
        });
        // Carrera entre función original y timeout
        return Promise.race([fn(...args), timeoutPromise]);
    };
}

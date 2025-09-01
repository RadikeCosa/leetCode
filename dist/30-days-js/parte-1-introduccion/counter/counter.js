/**
 * LeetCode Problem 2620: Counter
 * Difficulty: Easy
 * Topics: Function, Closures
 *
 * Given an integer n, return a counter function. This counter function initially returns n
 * and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).
 *
 * Time Complexity: O(1) - constant time for each counter call
 * Space Complexity: O(1) - only stores the current count value
 */
export function createCounter(n) {
    // Closure que mantiene el valor de n entre llamadas
    // Post-incremento: retorna el valor actual, luego incrementa
    return function () {
        return n++;
    };
}

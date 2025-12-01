/**
 * LeetCode Problem 2619: Array Prototype Last
 * Difficulty: Easy
 * Topics: Array, JavaScript
 *
 * Write code that enhances all arrays such that you can call the array.last()
 * method on any array and it will return the last element. If there are no
 * elements in the array, it should return -1.
 *
 * You may assume the array is the output of JSON.parse.
 *
 * Time Complexity: O(1) - accessing last element is constant time
 * Space Complexity: O(1) - no additional space needed
 */
Array.prototype.last = function () {
    // Si el array está vacío, retornar -1
    if (this.length === 0) {
        return -1;
    }
    // Retornar el último elemento usando índice length - 1
    return this[this.length - 1];
};
export {};

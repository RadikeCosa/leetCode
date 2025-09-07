/**
 * LeetCode Problem 1304: Find N Unique Integers Sum up to Zero
 * Difficulty: Easy
 * Topics: Array, Math
 *
 * Given an integer n, return any array containing n unique integers such that they add up to 0.
 *
 * Time Complexity: O(n) - explanation to be added after implementation
 * Space Complexity: O(n) - explanation to be added after implementation
 */
export function sumZero(n) {
    if (n === 0)
        return [];
    if (n === 1)
        return [0];
    if (n % 2 === 0) {
        const result = [];
        for (let i = 1; i <= n / 2; i++) {
            result.push(i, -i);
        }
        return result;
    }
    const result = [];
    for (let i = 1; i <= (n - 1) / 2; i++) {
        result.push(i, -i);
    }
    // Insertar 0 en el medio del array
    const middleIndex = Math.floor(result.length / 2);
    result.splice(middleIndex, 0, 0);
    return result;
}

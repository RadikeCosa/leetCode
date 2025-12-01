/**
 * LeetCode Problem 1304: Find N Unique Integers Sum up to Zero
 * Difficulty: Easy
 * Topics: Array, Math
 *
 * Given an integer n, return any array containing n unique integers such that they add up to 0.
 *
 * Algorithm: Uses symmetric pairs (-x, +x) that cancel each other out, with 0 as neutral element for odd numbers.
 * Result is always sorted in ascending order with 0 centered for odd n.
 * Optimized with pre-allocated array and direct indexing.
 *
 * Time Complexity: O(n) - Single pass to fill pre-allocated array
 * Space Complexity: O(n) - Result array stores exactly n elements
 */
export function sumZero(n) {
    if (n === 1)
        return [0];
    // Pre-allocar array con tamaño exacto para mejor performance
    const result = new Array(n);
    const numPairs = Math.floor(n / 2);
    let index = 0;
    // Generar números negativos primero (de menor a mayor)
    for (let i = numPairs; i >= 1; i--) {
        result[index++] = -i;
    }
    // Agregar 0 si n es impar (queda en el centro)
    if (n % 2 === 1) {
        result[index++] = 0;
    }
    // Generar números positivos (de menor a mayor)
    for (let i = 1; i <= numPairs; i++) {
        result[index++] = i;
    }
    return result;
}

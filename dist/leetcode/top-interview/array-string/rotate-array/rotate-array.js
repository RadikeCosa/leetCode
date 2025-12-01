/**
 * LeetCode Problem: Rotate Array
 * Difficulty:
 * Topics:
 *
 * @param {number[]} nums - The array of numbers to rotate
 * @param {number} k - The number of steps to rotate the array
 * @returns {void} Modifies the input array in-place
 */
export function rotate(nums, k) {
    const n = nums.length;
    // Si el array es vacío o k es múltiplo de n, no hay nada que hacer
    if (n === 0)
        return;
    // Reducimos k para evitar rotaciones innecesarias
    k = k % n;
    // Si k === 0 después de la reducción, no rotamos
    if (k === 0)
        return;
    // Usamos slice + spread para reasignar el array in-place
    // Últimos k elementos + primeros n-k elementos
    nums.splice(0, n, ...nums.slice(-k), ...nums.slice(0, -k));
}

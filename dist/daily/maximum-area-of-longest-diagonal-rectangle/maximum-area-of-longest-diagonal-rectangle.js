/**
 * LeetCode Problem 3000: Maximum Area of Longest Diagonal Rectangle
 * Difficulty: Easy
 * Topics: Array
 *
 * You are given a 2D 0-indexed integer array dimensions.
 * For all indices i, 0 <= i < dimensions.length, dimensions[i][0] represents
 * the length and dimensions[i][1] represents the width of rectangle i.
 *
 * Return the area of the rectangle having the longest diagonal. If there are
 * multiple rectangles with the longest diagonal, return the area of the
 * rectangle having the maximum area.
 *
 * Time Complexity: O(n) - una sola pasada por el array dimensions
 * Space Complexity: O(1) - solo usamos variables auxiliares constantes
 */
export function areaOfMaxDiagonal(dimensions) {
    // Tu implementación aquí
    let maxDiagonal = 0;
    let maxArea = 0;
    for (const [length, width] of dimensions) {
        const diagonal = Math.hypot(length, width);
        const area = length * width;
        if (diagonal > maxDiagonal) {
            maxDiagonal = diagonal;
            maxArea = area;
        }
        else if (diagonal === maxDiagonal) {
            maxArea = Math.max(maxArea, area);
        }
    }
    return maxArea;
}

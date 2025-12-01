/**
 * LeetCode Problem 120: Triangle
 * Difficulty: Medium
 * Topics: Array, Dynamic Programming
 *
 * Given a triangle array, return the minimum path sum from top to bottom.
 * For each step, you may move to an adjacent number of the row below.
 * More formally, if you are on index i on the current row, you may move to either index i or index i + 1 on the next row.
 *
 * Time Complexity: O(n²) - donde n es el número de filas. Visitamos cada elemento del triángulo una vez (1+2+3+...+n = n(n+1)/2 elementos)
 * Space Complexity: O(n) - un solo array dp del tamaño de la fila más grande, modificación in-place ultra-eficiente
 */
export function minimumTotal(triangle) {
    const n = triangle.length;
    // Caso base: triángulo vacío
    if (n === 0) {
        return 0;
    }
    // Caso base: solo un elemento
    if (n === 1) {
        return triangle[0][0];
    }
    // Optimización ultra-eficiente: O(n) espacio, modificación in-place
    const dp = [...triangle[n - 1]];
    // Procesamos desde la penúltima fila hacia arriba
    for (let row = n - 2; row >= 0; row--) {
        for (let col = 0; col <= row; col++) {
            // dp[col] y dp[col+1] representan las opciones de la fila inferior
            dp[col] = triangle[row][col] + Math.min(dp[col], dp[col + 1]);
        }
    }
    return dp[0];
}

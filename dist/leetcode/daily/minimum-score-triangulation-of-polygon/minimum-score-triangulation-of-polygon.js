/**
 * LeetCode Problem 1039: Minimum Score Triangulation of Polygon
 * Difficulty: Medium
 * Topics: Array, Dynamic Programming
 *
 * You have a convex n-sided polygon where each vertex has an integer value.
 * You are given an integer array values where values[i] is the value of the
 * ith vertex in clockwise order.
 *
 * Polygon triangulation is a process where you divide a polygon into a set of
 * triangles and the vertices of each triangle must also be vertices of the
 * original polygon. Note that no other shapes other than triangles are allowed
 * in the division. This process will result in n - 2 triangles.
 *
 * You will triangulate the polygon. For each triangle, the weight of that
 * triangle is the product of the values at its vertices. The total score of
 * the triangulation is the sum of these weights over all n - 2 triangles.
 *
 * Return the minimum possible score that you can achieve with some triangulation
 * of the polygon.
 *
 * Time Complexity: O(n³) - Three nested loops over n
 * Space Complexity: O(n²) - DP table of size n×n
 */
export function minScoreTriangulation(values) {
    const n = values.length;
    const dp = Array.from({ length: n }, () => Array(n).fill(0));
    // Caso base: distancias de 2 vértices no se triangulan
    for (let i = 0; i < n - 1; i++) {
        dp[i][i + 1] = 0;
    }
    // Caso base: triángulos de 3 vértices
    for (let i = 0; i < n - 2; i++) {
        dp[i][i + 2] = values[i] * values[i + 1] * values[i + 2];
    }
    // DP para polígonos más grandes
    for (let len = 3; len < n; len++) {
        for (let i = 0; i < n - len; i++) {
            const j = i + len;
            dp[i][j] = Infinity; // Inicializar con un valor grande
            for (let k = i + 1; k < j; k++) {
                dp[i][j] = Math.min(dp[i][j], dp[i][k] + dp[k][j] + values[i] * values[k] * values[j]);
            }
        }
    }
    return dp[0][n - 1];
}

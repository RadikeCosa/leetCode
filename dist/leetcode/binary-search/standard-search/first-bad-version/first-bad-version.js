/**
 * LeetCode Problem 278: First Bad Version
 * Difficulty: Easy
 * Topics: Binary Search, Interactive
 *
 * You are a product manager and currently leading a team to develop a new product.
 * Unfortunately, the latest version of your product fails the quality check.
 * Since each version is developed based on the previous version, all the versions
 * after a bad version are also bad. You are given an API bool isBadVersion(version)
 * which returns whether version is bad. Implement a function to find the first bad version.
 * You should minimize the number of calls to the API.
 *
 * Time Complexity: O(log n) - Binary search reduces search space by half each iteration.
 *                                For n versions, we need at most log₂(n) API calls.
 * Space Complexity: O(1) - Only uses constant extra space (left, right, mid variables).
 */
export var solution = function (isBadVersion) {
    return function (n) {
        // Inicializamos el rango de búsqueda: versiones [1, n]
        let left = 1;
        let right = n;
        // Búsqueda binaria: convergemos hasta encontrar la primera versión mala
        while (left < right) {
            // Calculamos el punto medio para dividir el espacio de búsqueda
            const mid = Math.floor((left + right) / 2);
            if (isBadVersion(mid)) {
                // Si mid es mala, la primera versión mala está en [left, mid]
                // Mantenemos mid como candidato (podría ser la primera)
                right = mid;
            }
            else {
                // Si mid es buena, la primera versión mala está en [mid+1, right]
                // Descartamos todo desde left hasta mid inclusive
                left = mid + 1;
            }
        }
        // Cuando left == right, hemos encontrado la primera versión mala
        return left;
    };
};

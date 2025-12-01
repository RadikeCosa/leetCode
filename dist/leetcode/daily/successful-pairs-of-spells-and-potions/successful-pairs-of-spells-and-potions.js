/**
 * LeetCode Problem 2300: Successful Pairs of Spells and Potions
 * Difficulty: Medium
 * Topics: Array, Two Pointers, Binary Search, Sorting
 *
 * You are given two positive integer arrays `spells` and `potions`, of length `n`
 * and `m` respectively, where `spells[i]` represents the strength of the
 * `i`th spell and `potions[j]` represents the strength of the `j`th potion.
 *
 * You are also given an integer `success`. A spell and potion pair is
 * considered successful if the product of their strengths is at least
 * `success`.
 *
 * Return an integer array `pairs` of length `n` where `pairs[i]` is the number
 * of potions that will form a successful pair with the `i`th spell.
 *
 * Time Complexity: O(n log m) when using binary search per spell (expected)
 * Space Complexity: O(n)
 */
/**
 * LeetCode Problem 2300: Successful Pairs of Spells and Potions
 * Difficulty: Medium
 * Topics: Array, Two Pointers, Binary Search, Sorting
 *
 * You are given two positive integer arrays `spells` and `potions`, of length `n`
 * and `m` respectively, where `spells[i]` represents the strength of the
 * `i`th spell and `potions[j]` represents the strength of the `j`th potion.
 *
 * You are also given an integer `success`. A spell and potion pair is
 * considered successful if the product of their strengths is at least
 * `success`.
 *
 * Return an integer array `pairs` of length `n` where `pairs[i]` is the number
 * of potions that will form a successful pair with the `i`th spell.
 *
 * Time Complexity: O(m log m + n log m)
 *   - O(m log m) para ordenar el array de pociones
 *   - O(n log m) para realizar búsqueda binaria por cada hechizo
 *   - Total: O(m log m + n log m)
 * Space Complexity: O(n + m)
 *   - O(m) para la copia ordenada de pociones
 *   - O(n) para el array de respuesta
 *   - Total: O(n + m)
 */
export function successfulPairs(spells, potions, success) {
    // Ordenamos las pociones para aplicar búsqueda binaria
    const potionsSorted = [...potions].sort((a, b) => a - b);
    /**
     * Busca el índice mínimo en potionsSorted donde spell * potion >= success.
     * Si no existe, retorna potionsSorted.length.
     * Utiliza búsqueda binaria clásica.
     * @param spell Fuerza del hechizo actual
     * @returns Índice del primer elemento válido
     */
    function firstSuccessfulPotionIndex(spell) {
        let left = 0;
        let right = potionsSorted.length - 1;
        // Búsqueda binaria para encontrar el primer índice válido
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            // Si el producto cumple la condición, buscamos a la izquierda
            if (spell * potionsSorted[mid] >= success) {
                right = mid - 1;
            }
            else {
                left = mid + 1;
            }
        }
        // left es el primer índice válido, si existe
        return left;
    }
    // Calculamos el número de pociones exitosas para cada hechizo
    return spells.map((spell) => {
        const idx = firstSuccessfulPotionIndex(spell);
        // Si idx está fuera del rango, no hay pociones exitosas
        return potionsSorted.length - idx;
    });
}

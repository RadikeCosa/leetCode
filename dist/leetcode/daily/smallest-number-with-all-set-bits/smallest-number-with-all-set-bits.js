/**
 * LeetCode Problem 3370: Smallest Number With All Set Bits
 * Difficulty: Easy
 * Topics: Math, Bit Manipulation
 *
 * Complejidad Temporal: O(1) - Operaciones matemáticas constantes
 * Complejidad Espacial: O(1) - Sin uso adicional de memoria
 */
export function smallestNumber(n) {
    // Encontrar el exponente k tal que 2^k - 1 >= n
    // Esto es equivalente a encontrar el techo de log2(n+1)
    const k = Math.ceil(Math.log2(n + 1));
    // Calcular el número con todos los bits establecidos: 2^k - 1
    return (1 << k) - 1;
}

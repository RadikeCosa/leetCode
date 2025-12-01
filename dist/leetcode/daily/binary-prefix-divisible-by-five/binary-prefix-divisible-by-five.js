/**
 * LeetCode Problem: Binary Prefix Divisible By Five
 * Difficulty:
 * Topics:
 *
 * @param {any} param - TODO: Define parameter type and description
 * @returns {any} TODO: Define return type and description
 */
export function prefixesDivBy5(nums) {
    const result = [];
    let remainder = 0; // Este será siempre nuestro número actual % 5
    for (const bit of nums) {
        // Actualizamos el resto: (remainder * 2 + bit) % 5
        // Es como si hiciéramos: numero = numero * 2 + bit, pero solo guardamos el módulo 5
        remainder = (remainder * 2 + bit) % 5;
        // Si el resto es 0, el número formado hasta ahora es divisible por 5
        result.push(remainder === 0);
    }
    return result;
}

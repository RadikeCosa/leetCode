/**
 * Dado un string de dígitos del 2 al 9, retorna todas las combinaciones posibles
 * que las letras podrían representar en un teclado telefónico.
 *
 * Estrategia: backtracking.
 * - Por cada dígito, probamos todas sus letras posibles en orden.
 * - Se construyen las combinaciones una letra a la vez, recursivamente.
 *
 * Complejidad:
 * - Tiempo: O(3^n * 4^m), donde n es la cantidad de dígitos con 3 letras (como 2, 3, 4, 5, 6, 8)
 *   y m es la cantidad de dígitos con 4 letras (como 7 y 9).
 * - Espacio: O(n) para el stack de llamadas recursivas.
 */
export function letterCombinations(digits) {
    if (!digits)
        return [];
    const mapping = {
        "2": ["a", "b", "c"],
        "3": ["d", "e", "f"],
        "4": ["g", "h", "i"],
        "5": ["j", "k", "l"],
        "6": ["m", "n", "o"],
        "7": ["p", "q", "r", "s"],
        "8": ["t", "u", "v"],
        "9": ["w", "x", "y", "z"],
    };
    const result = [];
    function backtrack(index, current) {
        if (index === digits.length) {
            result.push(current);
            return;
        }
        const digit = digits[index];
        const letters = mapping[digit];
        for (const letter of letters) {
            backtrack(index + 1, current + letter);
        }
    }
    backtrack(0, "");
    return result;
}

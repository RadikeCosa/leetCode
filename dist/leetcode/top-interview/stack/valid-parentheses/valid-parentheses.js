/**
 * LeetCode Problem 20: Valid Parentheses
 * Difficulty: Easy
 * Topics: String, Stack
 *
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
 * determine if the input string is valid.
 *
 * Time Complexity: O(n) - iteramos sobre cada carácter de la cadena una vez.
 * Las operaciones push() y pop() en arrays son O(1).
 *
 * Space Complexity: O(n) - en el peor caso, el stack puede contener todos los
 * caracteres de la cadena (ej: "(((((("). Un contador simple no funciona aquí
 * porque necesitamos recordar el orden y tipo específico de paréntesis abiertos.
 */
// SOLUCIÓN INICIAL - VERSIÓN DIRECTA
// export function isValid(s: string): boolean {
//   let stack: string[] = [];
//   for (let char of s) {
//     if (char === "(" || char === "{" || char === "[") {
//       stack.push(char);
//     } else {
//       if (stack.length === 0) return false;
//       const last = stack.pop();
//       if (
//         (char === ")" && last !== "(") ||
//         (char === "}" && last !== "{") ||
//         (char === "]" && last !== "[")
//       ) {
//         return false;
//       }
//     }
//   }
//   return stack.length === 0;
// }
// SOLUCIÓN REFACTORIZADA - VERSIÓN CON RECORD
export function isValid(s) {
    const stack = [];
    // Mapeo de caracteres de cierre a sus correspondientes de apertura
    const pairs = {
        ")": "(",
        "}": "{",
        "]": "[",
    };
    for (const char of s) {
        // Si es carácter de apertura, lo agregamos al stack
        if (char === "(" || char === "{" || char === "[") {
            stack.push(char);
        }
        else {
            // Si es carácter de cierre, verificamos el emparejamiento
            if (stack.length === 0)
                return false;
            const last = stack.pop();
            if (last !== pairs[char])
                return false;
        }
    }
    return stack.length === 0;
}

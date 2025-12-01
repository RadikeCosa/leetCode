/**
 * LeetCode Problem 392: Is Subsequence
 * Difficulty: Easy
 * Topics: Two Pointers, String, Dynamic Programming
 *
 * Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
 * A subsequence of a string is a new string that is formed from the original string by deleting
 * some (can be none) of the characters without disturbing the relative positions of the remaining characters.
 *
 * Time Complexity: O(n + m) - where n is length of s and m is length of t
 * Space Complexity: O(1) - only using constant extra space for pointers
 */
export function isSubsequence(s, t) {
    // Puntero para recorrer la cadena s (subsecuencia objetivo)
    let subsequenceIndex = 0;
    // Puntero para recorrer la cadena t (cadena fuente)
    let sourceIndex = 0;
    // Iteramos mientras queden caracteres en ambas cadenas
    while (subsequenceIndex < s.length && sourceIndex < t.length) {
        // Si el caracter actual de s coincide con el de t, avanzamos el puntero de s
        if (s[subsequenceIndex] === t[sourceIndex]) {
            subsequenceIndex++;
        }
        // Siempre avanzamos el puntero de t
        sourceIndex++;
    }
    // Si recorrimos toda la subsecuencia, significa que s es subsecuencia de t
    return subsequenceIndex === s.length;
}

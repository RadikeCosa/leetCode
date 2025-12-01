/**
 * LeetCode Problem 125: Valid Palindrome
 * Difficulty: Easy
 * Topics: Two Pointers, String
 *
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase
 * letters and removing all non-alphanumeric characters, it reads the same forward and backward.
 *
 * Time Complexity: O(n) - where n is the length of the string
 * Space Complexity: O(1) - only using constant extra space for pointers
 */
export function isPalindrome(s) {
    let left = 0;
    let right = s.length - 1;
    // Función auxiliar para verificar si un carácter es alfanumérico
    const isAlphaNumeric = (char) => {
        return /[a-z0-9]/i.test(char);
    };
    while (left < right) {
        // Saltar caracteres no alfanuméricos desde la izquierda
        while (left < right && !isAlphaNumeric(s[left])) {
            left++;
        }
        // Saltar caracteres no alfanuméricos desde la derecha
        while (left < right && !isAlphaNumeric(s[right])) {
            right--;
        }
        // Comparar caracteres normalizados (lowercase)
        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        }
        // Avanzar ambos punteros hacia el centro
        left++;
        right--;
    }
    return true;
}

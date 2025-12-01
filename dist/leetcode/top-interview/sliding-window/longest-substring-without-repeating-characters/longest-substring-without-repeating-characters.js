/**
 * LeetCode Problem 3: Longest Substring Without Repeating Characters
 * Difficulty: Medium
 * Topics: Hash Table, String, Sliding Window
 *
 * Given a string s, find the length of the longest substring without repeating characters.
 *
 * Time Complexity: O(n) - Cada carácter es visitado exactamente una vez.
 *                          Sliding window optimizado con saltos directos.
 * Space Complexity: O(min(m,n)) - Map almacena posiciones de caracteres únicos.
 *                                  m=tamaño_alfabeto, n=longitud_string
 */
export function lengthOfLongestSubstring(s) {
    if (s.length <= 1)
        return s.length;
    let maxLength = 0;
    let start = 0;
    const charPositions = new Map(); // En lugar de let
    for (let end = 0; end < s.length; end++) {
        if (charPositions.has(s[end])) {
            start = Math.max(start, charPositions.get(s[end]) + 1);
        }
        charPositions.set(s[end], end);
        maxLength = Math.max(maxLength, end - start + 1);
    }
    return maxLength;
}

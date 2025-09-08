/**
 * LeetCode Problem 205: Isomorphic Strings
 * Difficulty: Easy
 * Topics: Hash Table, String
 *
 * Given two strings s and t, determine if they are isomorphic.
 * Two strings s and t are isomorphic if the characters in s can be replaced to get t.
 * All occurrences of a character must be replaced with another character while preserving the order of characters.
 * No two characters may map to the same character, but a character may map to itself.
 *
 * Time Complexity: O(n) - recorremos cada carácter una vez, operaciones de Map son O(1)
 * Space Complexity: O(min(m, n)) - donde m y n son caracteres únicos en s y t respectivamente
 */
export function isIsomorphic(s: string, t: string): boolean {
  const sToT = new Map<string, string>(); // s → t
  const tToS = new Map<string, string>(); // t → s
  const n = s.length;

  for (let i = 0; i < n; i++) {
    const charS = s[i];
    const charT = t[i];

    if (sToT.has(charS)) {
      if (sToT.get(charS) !== charT) {
        return false;
      }
    } else {
      sToT.set(charS, charT);
    }

    if (tToS.has(charT)) {
      if (tToS.get(charT) !== charS) {
        return false;
      }
    } else {
      tToS.set(charT, charS);
    }
  }

  return true;
}

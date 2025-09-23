/**
 * LeetCode Problem 165: Compare Version Numbers - Split Approach
 * Difficulty: Medium
 * Topics: Two Pointers, String
 *
 * Given two version strings, version1 and version2, compare them.
 * A version string consists of revisions separated by dots '.'.
 * The value of the revision is its integer conversion ignoring leading zeros.
 *
 * This implementation uses split() to divide strings into arrays and then
 * compares revision by revision, padding shorter arrays with zeros.
 *
 * Time Complexity: O(n + m) - where n and m are lengths of version strings
 * Space Complexity: O(n + m) - for storing split arrays
 */
export function compareVersionSplit(
  version1: string,
  version2: string
): number {
  const parts1 = version1.split(".");
  const parts2 = version2.split(".");

  const maxLength = Math.max(parts1.length, parts2.length);

  for (let i = 0; i < maxLength; i++) {
    const num1 = parseInt(parts1[i] || "0");
    const num2 = parseInt(parts2[i] || "0");
    if (num1 > num2) return 1;
    if (num2 > num1) return -1;
  }
  return 0;
}

/**
 * LeetCode Problem 165: Compare Version Numbers - Two Pointers Approach
 * Difficulty: Medium
 * Topics: Two Pointers, String
 *
 * Time Complexity: O(n + m) - where n and m are lengths of version strings
 * Space Complexity: O(1) - using only constant extra space
 */
export function compareVersion(version1: string, version2: string): number {
  let p1 = 0;
  let p2 = 0;

  while (p1 < version1.length || p2 < version2.length) {
    // Extraer número de version1
    let num1 = 0;
    while (p1 < version1.length && version1[p1] !== ".") {
      num1 = num1 * 10 + parseInt(version1[p1]);
      p1++;
    }
    p1++; // Saltar el punto

    // Extraer número de version2
    let num2 = 0;
    while (p2 < version2.length && version2[p2] !== ".") {
      num2 = num2 * 10 + parseInt(version2[p2]);
      p2++;
    }
    p2++; // Saltar el punto

    // Comparar números
    if (num1 > num2) return 1;
    if (num1 < num2) return -1;
    // Si son iguales, continuar al siguiente segmento
  }

  return 0; // Todas las revisiones son iguales
}

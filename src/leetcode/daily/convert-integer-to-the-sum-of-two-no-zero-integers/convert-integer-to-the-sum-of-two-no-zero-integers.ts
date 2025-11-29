/**
 * LeetCode Problem 1317: Convert Integer to the Sum of Two No-Zero Integers
 * Difficulty: Easy
 * Topics: Math
 *
 * No-Zero integer is a positive integer that does not contain any 0 in its decimal representation.
 * Given an integer n, return a list of two integers [a, b] where:
 * - a and b are No-Zero integers.
 * - a + b = n
 *
 * Time Complexity: O(n × log n) - Loop hasta n-1 iteraciones, cada verificación O(log n)
 * Space Complexity: O(log n) - String temporal para toString() de cada número
 */
export function getNoZeroIntegers(n: number): number[] {
  const isNoZeroInteger = (n: number): boolean => {
    return !n.toString().includes("0");
  };
  for (let i = 1; i < n; i++) {
    let a = i;
    let b = n - i;
    if (isNoZeroInteger(a) && isNoZeroInteger(b)) return [a, b];
  }

  return [];
}

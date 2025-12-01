/**
 * LeetCode Problem: Minimum One Bit Operations to Make Integers Zero
 * Difficulty: Hard
 * Topics: Bit Manipulation, Dynamic Programming
 */
export function minimumOneBitOperations(n: number): number {
  // Interpretamos n como un código Gray y calculamos su inverso (Gray -> binary).
  // Esto produce el número mínimo de operaciones.
  let result = 0;
  while (n > 0) {
    result ^= n;
    n >>= 1;
  }
  return result;
}

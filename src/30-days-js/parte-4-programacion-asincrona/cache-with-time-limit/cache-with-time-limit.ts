/**
 * LeetCode Problem 2622: Cache With Time Limit
 * Difficulty: Medium
 * Topics: JavaScript, Object-Oriented Programming, Hash Table, Timers
 *
 * Write a class that allows getting and setting key-value pairs, however a time
 * until expiration is associated with each key.
 *
 * The class has three public methods:
 * - set(key, value, duration): Returns true if key already exists, false otherwise
 * - get(key): Returns value if key exists and not expired, -1 otherwise
 * - count(): Returns count of un-expired keys
 *
 * Time Complexity: O(1) for all operations
 * Space Complexity: O(n) where n is the number of stored keys
 */

export class TimeLimitedCache {
  // TODO: Implementar después del análisis

  constructor() {
    // Tu inicialización aquí
  }

  set(key: number, value: number, duration: number): boolean {
    // Tu implementación aquí
    return false;
  }

  get(key: number): number {
    // Tu implementación aquí
    return -1;
  }

  count(): number {
    // Tu implementación aquí
    return 0;
  }
}

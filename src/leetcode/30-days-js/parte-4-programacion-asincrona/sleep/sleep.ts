/**
 * LeetCode Problem 2621: Sleep
 * Difficulty: Easy
 * Topics: Asynchronous Programming, Promise, setTimeout
 *
 * Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds.
 * It can resolve any value.
 *
 * Note that minor deviation from millis in the actual sleep duration is acceptable.
 *
 * Time Complexity: O(1) - constant time operation
 * Space Complexity: O(1) - no additional space needed
 */
export async function sleep(millis: number): Promise<void> {
  // Tu implementación aquí
  // Pista: Necesitas usar setTimeout y Promise
  await new Promise((resolve) => setTimeout(resolve, millis));
}

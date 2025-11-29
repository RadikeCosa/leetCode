/**
 * LeetCode Problem 3516: Find Closest Person
 * Difficulty: Easy
 * Topics: Math
 *
 * You are given three integers x, y, and z, representing the positions of three people on a number line:
 * - x is the position of Person 1.
 * - y is the position of Person 2.
 * - z is the position of Person 3, who does not move.
 *
 * Both Person 1 and Person 2 move toward Person 3 at the same speed.
 *
 * Determine which person reaches Person 3 first:
 * - Return 1 if Person 1 arrives first.
 * - Return 2 if Person 2 arrives first.
 * - Return 0 if both arrive at the same time.
 *
 * Time Complexity: O(1) - constant time operations
 * Space Complexity: O(1) - constant space usage
 */
export function findClosestPerson(x: number, y: number, z: number): number {
  const distance1_3 = Math.abs(z - x);
  const distance2_3 = Math.abs(z - y);
  return distance1_3 < distance2_3 ? 1 : distance1_3 > distance2_3 ? 2 : 0;
}

/**
 * LeetCode Problem 2727: Is Object Empty
 * Difficulty: Easy
 * Topics: JSON
 *
 * Given an object or an array, return if it is empty.
 * - An empty object contains no key-value pairs.
 * - An empty array contains no elements.
 * You may assume the object or array is the output of JSON.parse.
 *
 * Time Complexity: O(1) - checking if object/array is empty
 * Space Complexity: O(1) - constant space usage
 */
export function isEmpty(obj: Record<string, any> | any[]): boolean {
  // Para arrays y objetos: usar for...in que se rompe en la primera iteración (O(1) verdadero)
  for (let key in obj) {
    return false; // Si encontramos cualquier propiedad/índice, no está vacío
  }
  return true; // Si nunca entró al loop, está vacío
}

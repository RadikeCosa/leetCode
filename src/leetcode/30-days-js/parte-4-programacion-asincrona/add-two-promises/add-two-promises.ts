/**
 * LeetCode Problem 2723: Add Two Promises
 * Difficulty: Easy
 * Topics: Promise, Async/Await, Asynchronous Programming
 *
 * Given two promises promise1 and promise2, return a new promise.
 * promise1 and promise2 will both resolve with a number.
 * The returned promise should resolve with the sum of the two numbers.
 *
 * Time Complexity: O(1) - constant time after both promises resolve
 * Space Complexity: O(1) - no additional space complexity
 */

/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
export async function addTwoPromises(
  promise1: Promise<number>,
  promise2: Promise<number>
): Promise<number> {
  // TODO: Implementar la función que suma los valores de dos promesas
  // Pista: Necesitas esperar a que ambas promesas se resuelvan
  // y luego retornar la suma de sus valores
  const valor1 = await promise1;
  const valor2 = await promise2;

  // Tu implementación aquí
  return valor1 + valor2;
  // La función async ya retorna una promesa automáticamente
  // No necesitas hacer nada adicional, el valor retornado será envuelto en una promesa
}

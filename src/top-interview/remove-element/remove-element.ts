/**
 * LeetCode Problem 27: Remove Element
 * Difficulty: Easy
 * Topics: Array, Two Pointers
 *
 * Given an integer array nums and an integer val, remove all occurrences of val in nums in-place.
 * The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.
 *
 * IMPORTANTE: "Remove" NO significa eliminar físicamente del array. El array mantiene su tamaño original.
 * Solo reorganizamos para que los elementos válidos estén en las primeras k posiciones.
 *
 * Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:
 * - Change the array nums such that the first k elements of nums contain the elements which are not equal to val.
 * - The remaining elements of nums are not important as well as the size of nums.
 * - Return k.
 *
 * Time Complexity: O(n) - una sola pasada por el array
 * Space Complexity: O(1) - operación in-place, sin espacio adicional
 */
export function removeElement(nums: number[], val: number): number {
  let write = 0; // Posición donde escribir el próximo elemento válido

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      // Elemento "visible" (no es val)
      nums[write] = nums[i]; // Reorganizar: copiar elemento válido al inicio
      write++; // Avanzar posición de escritura
    }
    // Elementos == val se tratan como "non-existent" (hint 3 de LeetCode)
  }

  return write; // Número de elementos válidos (k)
}

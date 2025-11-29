/**
 * LeetCode Problem 26: Remove Duplicates from Sorted Array
 * Difficulty: Easy
 * Topics: Array, Two Pointers
 *
 * Given an integer array nums sorted in non-decreasing order, remove the duplicates
 * in-place such that each unique element appears only once. The relative order of
 * the elements should be kept the same. Then return the number of unique elements in nums.
 *
 * Time Complexity: O(n) - single pass through the array
 * Space Complexity: O(1) - in-place modification
 */
export function removeDuplicates(nums: number[]): number {
  // Si el array tiene 0 o 1 elementos, no hay duplicados
  if (nums.length <= 1) return nums.length;

  // Puntero para la posición del próximo valor único
  let write = 1;

  // Recorremos el array desde la segunda posición
  for (let read = 1; read < nums.length; read++) {
    // Si encontramos un valor distinto al anterior
    if (nums[read] !== nums[read - 1]) {
      // Copiamos el valor único en la posición 'write'
      nums[write] = nums[read];
      // Avanzamos el puntero 'write'
      write++;
    }
    // Si es igual, simplemente seguimos
  }

  // Retornamos la cantidad de valores únicos
  return write;
}

/**
 * LeetCode Problem 611: Valid Triangle Number
 * Difficulty: Medium
 * Topics: Array, Two Pointers, Binary Search, Greedy, Sorting
 *
 * Given an integer array nums, return the number of triplets chosen from the array
 * that can make triangles if we take them as side lengths of a triangle.
 *
 * Time Complexity: O(n²) - O(n log n) for sorting + O(n²) for two pointers
 * Space Complexity: O(1) - Only using constant extra space (excluding sorting space)
 */
export function triangleNumber(nums: number[]): number {
  // Ordenar el array in-place en orden ascendente
  nums.sort((a, b) => a - b);
  let count = 0;

  // Iterar desde el final (lado más largo) hacia atrás
  for (let i = nums.length - 1; i >= 2; i--) {
    let left = 0;
    let right = i - 1;

    // Two pointers: buscar pares que sumen más que nums[i]
    while (left < right) {
      if (nums[left] + nums[right] > nums[i]) {
        // Si el par actual funciona, todos los elementos entre left y right-1 también funcionan
        count += right - left;
        right--;
      } else {
        // Si la suma es muy pequeña, aumentamos el lado menor
        left++;
      }
    }
  }
  return count;
}

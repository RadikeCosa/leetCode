/**
 * LeetCode Problem 80: Remove Duplicates from Sorted Array II
 * Difficulty: Medium
 * Topics: Array, Two Pointers
 *
 * Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice. The relative order of the elements should be kept the same.
 *
 * Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.
 *
 * Return k after placing the final result in the first k slots of nums.
 *
 * Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.
 *
 * Custom Judge:
 * The judge will test your solution with the following code:
 * int[] nums = [...]; // Input array
 * int[] expectedNums = [...]; // The expected answer with correct length
 * int k = removeDuplicates(nums); // Calls your implementation
 * assert k == expectedNums.length;
 * for (int i = 0; i < k; i++) {
 *     assert nums[i] == expectedNums[i];
 * }
 * If all assertions pass, then your solution will be accepted.
 *
 * Example 1:
 * Input: nums = [1,1,1,2,2,3]
 * Output: 5, nums = [1,1,2,2,3,_]
 * Explanation: Your function should return k = 5, with the first five elements of nums being 1, 1, 2, 2 and 3 respectively. It does not matter what you leave beyond the returned k (hence they are underscores).
 *
 * Example 2:
 * Input: nums = [0,0,1,1,1,1,2,3,3]
 * Output: 7, nums = [0,0,1,1,2,3,3,_,_]
 * Explanation: Your function should return k = 7, with the first seven elements of nums being 0, 0, 1, 1, 2, 3 and 3 respectively. It does not matter what you leave beyond the returned k (hence they are underscores).
 *
 * Constraints:
 * - 1 <= nums.length <= 3 * 10^4
 * - -10^4 <= nums[i] <= 10^4
 * - nums is sorted in non-decreasing order.
 */
import { describe, it, expect } from "vitest";
import { removeDuplicates } from "./remove-duplicates-from-sorted-array-ii";

describe("Remove Duplicates from Sorted Array II", () => {
  it("should remove duplicates and return correct length for example 1", () => {
    // Arrange: Array con 3 unos, 2 doses, 1 tres → debería quedar 2+2+1=5 elementos
    const nums = [1, 1, 1, 2, 2, 3];

    // Act: Ejecutar la función que modifica in-place
    const k = removeDuplicates(nums);

    // Assert: Verificar el length retornado (número de elementos válidos)
    expect(k).toBe(5);

    // Assert: Verificar que los primeros k elementos contengan máximo 2 de cada número
    expect(nums.slice(0, k)).toEqual([1, 1, 2, 2, 3]);
  });

  it("should handle multiple consecutive duplicates for example 2", () => {
    // Arrange: Array con 4 unos consecutivos → solo 2 deberían permanecer
    const nums = [0, 0, 1, 1, 1, 1, 2, 3, 3];

    // Act: Remover duplicates manteniendo máximo 2 de cada elemento
    const k = removeDuplicates(nums);

    // Assert: 2 ceros + 2 unos + 1 dos + 2 treses = 7 elementos
    expect(k).toBe(7);

    // Assert: Verificar el contenido correcto in-place
    expect(nums.slice(0, k)).toEqual([0, 0, 1, 1, 2, 3, 3]);
  });
  it("should handle a single element array", () => {
    const nums = [5];
    const k = removeDuplicates(nums);
    expect(k).toBe(1);
    expect(nums.slice(0, k)).toEqual([5]);
  });
  it("should handle an array with two identical elements", () => {
    const nums = [2, 2];
    const k = removeDuplicates(nums);
    expect(k).toBe(2);
    expect(nums.slice(0, k)).toEqual([2, 2]);
  });
  it("should handle an array with all identical elements", () => {
    const nums = [3, 3, 3, 3, 3];
    const k = removeDuplicates(nums);
    expect(k).toBe(2);
    expect(nums.slice(0, k)).toEqual([3, 3]);
  });
  it("should handle an array with no duplicates", () => {
    const nums = [1, 2, 3, 4, 5];
    const k = removeDuplicates(nums);
    expect(k).toBe(5);
    expect(nums.slice(0, k)).toEqual([1, 2, 3, 4, 5]);
  });
  it("should handle an empty array", () => {
    const nums: number[] = [];
    const k = removeDuplicates(nums);
    expect(k).toBe(0);
    expect(nums.slice(0, k)).toEqual([]);
  });
  it("should handle an array with negative and positive numbers", () => {
    const nums = [-1, -1, 0, 0, 0, 1, 1, 2];
    const k = removeDuplicates(nums);
    expect(k).toBe(7);
    expect(nums.slice(0, k)).toEqual([-1, -1, 0, 0, 1, 1, 2]);
  });
});

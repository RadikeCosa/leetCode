/**
 * LeetCode Problem 27: Remove Element
 * Difficulty: Easy
 * Topics: Array, Two Pointers
 *
 * Given an integer array nums and an integer val, remove all occurrences of val in nums in-place.
 * The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.
 *
 * Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:
 * - Change the array nums such that the first k elements of nums contain the elements which are not equal to val.
 * - The remaining elements of nums are not important as well as the size of nums.
 * - Return k.
 *
 * Time Complexity: O(n) - donde n es la longitud del array
 * Space Complexity: O(1) - operación in-place, sin espacio adicional
 */
export function removeElement(nums, val) {
    let write = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[write] = nums[i];
            write++;
        }
    }
    return write;
}

/**
 * LeetCode Problem 88: Merge Sorted Array
 * Difficulty: Easy
 * Topics: Array, Two Pointers, Sorting
 *
 * You are given two integer arrays nums1 and nums2, sorted in non-decreasing order,
 * and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
 *
 * Merge nums1 and nums2 into a single array sorted in non-decreasing order.
 * The final sorted array should not be returned by the function, but instead be
 * stored inside the array nums1.
 *
 * Time Complexity: O(m + n) - explanation pending
 * Space Complexity: O(1) - explanation pending
 */
export function merge(nums1, m, nums2, n) {
    let lastUsefulIndexOfNums1 = m - 1;
    let lastIndexOfNums2 = n - 1;
    let targetIndex = m + n - 1;
    while (lastIndexOfNums2 >= 0) {
        if (lastUsefulIndexOfNums1 >= 0 &&
            nums1[lastUsefulIndexOfNums1] > nums2[lastIndexOfNums2]) {
            nums1[targetIndex] = nums1[lastUsefulIndexOfNums1];
            lastUsefulIndexOfNums1--;
        }
        else {
            nums1[targetIndex] = nums2[lastIndexOfNums2];
            lastIndexOfNums2--;
        }
        targetIndex--;
    }
}

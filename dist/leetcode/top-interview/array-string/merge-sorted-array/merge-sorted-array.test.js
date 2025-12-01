/**
 * LeetCode Problem 88: Merge Sorted Array
 *
 * You are given two integer arrays nums1 and nums2, sorted in non-decreasing order,
 * and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
 *
 * Merge nums1 and nums2 into a single array sorted in non-decreasing order.
 * The final sorted array should not be returned by the function, but instead be
 * stored inside the array nums1. To accommodate this, nums1 has a length of m + n,
 * where the first m elements denote the elements that should be merged, and the last
 * n elements are set to 0 and should be ignored. nums2 has a length of n.
 *
 * Constraints:
 * - nums1.length == m + n
 * - nums2.length == n
 * - 0 <= m, n <= 200
 * - 1 <= m + n <= 200
 * - -10^9 <= nums1[i], nums2[j] <= 10^9
 *
 * Examples:
 * Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
 * Output: [1,2,2,3,5,6]
 *
 * Input: nums1 = [1], m = 1, nums2 = [], n = 0
 * Output: [1]
 *
 * Input: nums1 = [0], m = 0, nums2 = [1], n = 1
 * Output: [1]
 */
import { describe, it, expect } from "vitest";
import { merge } from "./merge-sorted-array";
describe("Merge Sorted Array", () => {
    it("should merge example 1 correctly", () => {
        const nums1 = [1, 2, 3, 0, 0, 0];
        const nums2 = [2, 5, 6];
        merge(nums1, 3, nums2, 3);
        expect(nums1).toEqual([1, 2, 2, 3, 5, 6]);
    });
    it("should handle empty nums2 array", () => {
        const nums1 = [1];
        const nums2 = [];
        merge(nums1, 1, nums2, 0);
        expect(nums1).toEqual([1]);
    });
    it("should handle empty nums1 array correctly", () => {
        const nums1 = [0];
        const nums2 = [1];
        merge(nums1, 0, nums2, 1);
        expect(nums1).toEqual([1]);
    });
});

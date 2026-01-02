/**
 * LeetCode Problem: Median Of Two Sorted Arrays
 * Difficulty:
 * Topics:
 *
 * @param {number[]} nums1 - First sorted array
 * @param {number[]} nums2 - Second sorted array
 * @returns {number} The median of the two sorted arrays
 */
export function findMedianSortedArrays(
  nums1: number[],
  nums2: number[]
): number {
  // Ensure nums1 is the smaller array to keep binary search on the smaller side
  if (nums1.length > nums2.length) {
    return findMedianSortedArrays(nums2, nums1);
  }

  const m = nums1.length;
  const n = nums2.length;

  let low = 0;
  let high = m;

  while (low <= high) {
    const i = Math.floor((low + high) / 2); // partition in nums1
    const j = Math.floor((m + n + 1) / 2) - i; // partition in nums2

    const nums1LeftMax = i === 0 ? -Infinity : nums1[i - 1];
    const nums1RightMin = i === m ? Infinity : nums1[i];

    const nums2LeftMax = j === 0 ? -Infinity : nums2[j - 1];
    const nums2RightMin = j === n ? Infinity : nums2[j];

    if (nums1LeftMax <= nums2RightMin && nums2LeftMax <= nums1RightMin) {
      // Correct partition
      if ((m + n) % 2 === 1) {
        return Math.max(nums1LeftMax, nums2LeftMax);
      }
      return (
        (Math.max(nums1LeftMax, nums2LeftMax) +
          Math.min(nums1RightMin, nums2RightMin)) /
        2
      );
    } else if (nums1LeftMax > nums2RightMin) {
      // Move partition i to the left
      high = i - 1;
    } else {
      // nums2LeftMax > nums1RightMin -> move partition i to the right
      low = i + 1;
    }
  }

  // Should never reach here if inputs are valid sorted arrays
  throw new Error("Input arrays are not sorted or invalid");
}

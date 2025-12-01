/**
 * LeetCode Problem 704: Binary Search
 * Difficulty: Easy
 * Topics: Array, Binary Search
 *
 * Given an array of integers nums which is sorted in ascending order, and an integer target,
 * write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.
 *
 * You must write an algorithm with O(log n) runtime complexity.
 *
 * Time Complexity: O(log n) - Binary search halves search space each iteration
 * Space Complexity: O(1) - Only using constant extra space for pointers
 */
export function search(nums, target) {
    // Implementation to be completed following TDD approach
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        const mid = Math.floor(left + (right - left) / 2);
        if (nums[mid] === target)
            return mid;
        else if (nums[mid] < target)
            left = mid + 1;
        else
            right = mid - 1;
    }
    return -1;
}

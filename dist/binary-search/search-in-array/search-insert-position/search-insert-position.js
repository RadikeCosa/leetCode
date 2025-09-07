/**
 * LeetCode Problem 35: Search Insert Position
 * Difficulty: Easy
 * Topics: Array, Binary Search
 *
 * Given a sorted array of distinct integers and a target value, return the index if the target is found.
 * If not, return the index where it would be if it were inserted in order.
 *
 * You must write an algorithm with O(log n) runtime complexity.
 *
 * Time Complexity: O(log n) - Binary search halves search space each iteration
 * Space Complexity: O(1) - Only using constant extra space for pointers
 */
export function searchInsert(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        const mid = Math.floor(left + (right - left) / 2);
        if (nums[mid] === target) {
            return mid;
        }
        else if (nums[mid] < target) {
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }
    }
    return left;
}

/**
 * LeetCode Problem 228: Summary Ranges
 * Difficulty: Easy
 * Topics: Array
 *
 * You are given a sorted unique integer array nums.
 * A range [a,b] is the set of all integers from a to b (inclusive).
 * Return the smallest sorted list of ranges that cover all the numbers in the array exactly.
 * That is, each element of nums is covered by exactly one of the ranges, and there is no integer x
 * such that x is in one of the ranges but not in nums.
 *
 * Each range [a,b] in the list should be output as:
 * • "a->b" if a != b
 * • "a" if a == b
 *
 * Time Complexity: O(n) - Single pass through the array. Each element is visited exactly once
 *                              as the start pointer only moves forward.
 * Space Complexity: O(1) - Only constant extra space for variables (start, end, rangeStart, rangeEnd).
 *                          Output array doesn't count toward auxiliary space.
 */
export function summaryRanges(nums: number[]): string[] {
  let start = 0;
  let end = nums.length - 1;
  const result: string[] = [];

  while (start <= end) {
    let rangeStart = nums[start];
    let rangeEnd = rangeStart;
    while (start < end && nums[start] + 1 === nums[start + 1]) {
      start++;
    }
    rangeEnd = nums[start];
    if (rangeStart === rangeEnd) {
      result.push(`${rangeStart}`);
    } else {
      result.push(`${rangeStart}->${rangeEnd}`);
    }
    start++;
  }
  return result;
}

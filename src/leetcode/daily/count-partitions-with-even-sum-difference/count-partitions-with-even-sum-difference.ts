/**
 * LeetCode Problem: Count Partitios With Even Sum Difference
 * Difficulty:
 * Topics:
 *
 * @param {number[]} nums - The input array of integers
 * @returns {number} The count of partitions with even sum difference
 */
export function countPartitions(nums: number[]): number {
  const totalSum = nums.reduce((acc, num) => acc + num, 0);
  let leftSum = 0;
  let count = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    leftSum += nums[i];
    const rightSum = totalSum - leftSum;
    if (((leftSum - rightSum) & 1) === 0) {
      count++;
    }
  }
  return count;
}

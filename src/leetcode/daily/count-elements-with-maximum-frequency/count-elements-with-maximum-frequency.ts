/**
 * LeetCode Problem 3005: Count Elements With Maximum Frequency
 * Difficulty: Easy
 * Topics: Array, Hash Table, Counting
 *
 * You are given an array nums consisting of positive integers.
 *
 * Return the total frequencies of elements in nums such that those elements all have the maximum frequency.
 *
 * The frequency of an element is the number of occurrences of that element in the array.
 *
 * Time Complexity: O(n) - recorremos el array una vez + iteramos sobre elementos únicos
 * Space Complexity: O(k) - donde k es el número de elementos únicos (worst case: O(n))
 */
export function maxFrequencyElements(nums: number[]): number {
  let frequencyMap: Record<number, number> = {};
  let maxFrequency = 0;
  let totalCount = 0;
  for (let num of nums) {
    frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    maxFrequency = Math.max(maxFrequency, frequencyMap[num]);
  }
  for (let count of Object.values(frequencyMap)) {
    if (count === maxFrequency) {
      totalCount += count;
    }
  }
  return totalCount;
}

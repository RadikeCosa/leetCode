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
 * Example 1:
 * Input: nums = [1,2,2,3,1,4]
 * Output: 4
 * Explanation: The elements 1 and 2 have a frequency of 2 which is the maximum frequency in
 * the array. So the number of elements in the array with maximum frequency is 4.
 *
 * Example 2:
 * Input: nums = [1,2,3,4,5]
 * Output: 5
 * Explanation: All elements of the array have a frequency of 1 which is the maximum.
 * So the number of elements in the array with maximum frequency is 5.
 *
 * Constraints:
 * - 1 <= nums.length <= 100
 * - 1 <= nums[i] <= 100
 *
 * Hints:
 * - Find frequencies of all elements of the array.
 * - Find the elements that have the maximum frequencies and count their total occurrences.
 */
import { describe, it, expect } from "vitest";
import { maxFrequencyElements } from "./count-elements-with-maximum-frequency";

describe("Count Elements With Maximum Frequency", () => {
  it("Example 1", () => {
    const nums = [1, 2, 2, 3, 1, 4];
    const result = maxFrequencyElements(nums);
    expect(result).toBe(4);
  });

  it("Example 2", () => {
    const nums = [1, 2, 3, 4, 5];
    const result = maxFrequencyElements(nums);
    expect(result).toBe(5);
  });

  // Edge Cases
  it("should handle single element array", () => {
    const nums = [42];
    const result = maxFrequencyElements(nums);
    expect(result).toBe(1);
  });

  it("should handle array where all elements are the same", () => {
    const nums = [5, 5, 5, 5];
    const result = maxFrequencyElements(nums);
    expect(result).toBe(4);
  });

  it("should handle array with one element having maximum frequency", () => {
    const nums = [1, 1, 1, 2, 2, 3];
    const result = maxFrequencyElements(nums);
    expect(result).toBe(3); // Only element 1 has frequency 3
  });

  it("should handle multiple elements with same maximum frequency", () => {
    const nums = [1, 2, 3, 1, 2, 3];
    const result = maxFrequencyElements(nums);
    expect(result).toBe(6); // Elements 1, 2, 3 each appear 2 times: 2+2+2=6
  });

  it("should handle minimum constraint (length 1)", () => {
    const nums = [100];
    const result = maxFrequencyElements(nums);
    expect(result).toBe(1);
  });

  it("should handle maximum element value constraint", () => {
    const nums = [100, 100, 99, 98];
    const result = maxFrequencyElements(nums);
    expect(result).toBe(2); // Element 100 appears 2 times
  });
});

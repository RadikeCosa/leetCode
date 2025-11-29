/**
 * LeetCode Problem 2300: Successful Pairs of Spells and Potions
 * Difficulty: Medium
 * Topics: Array, Two Pointers, Binary Search, Sorting
 *
 * You are given two positive integer arrays `spells` and `potions`, of length `n`
 * and `m` respectively, where `spells[i]` represents the strength of the
 * `i`th spell and `potions[j]` represents the strength of the `j`th potion.
 *
 * You are also given an integer `success`. A spell and potion pair is
 * considered successful if the product of their strengths is at least
 * `success`.
 *
 * Return an integer array `pairs` of length `n` where `pairs[i]` is the number
 * of potions that will form a successful pair with the `i`th spell.
 *
 * Example 1:
 * Input: spells = [5,1,3], potions = [1,2,3,4,5], success = 7
 * Output: [4,0,3]
 *
 * Example 2:
 * Input: spells = [3,1,2], potions = [8,5,8], success = 16
 * Output: [2,0,2]
 *
 * Constraints:
 * - n == spells.length
 * - m == potions.length
 * - 1 <= n, m <= 10^5
 * - 1 <= spells[i], potions[i] <= 10^5
 * - 1 <= success <= 10^10
 */
import { describe, expect, it } from "vitest";
import { successfulPairs } from "./successful-pairs-of-spells-and-potions";

describe("Successful Pairs of Spells and Potions", () => {
  it("should return [4,0,3] for spells = [5,1,3], potions = [1,2,3,4,5], success = 7", () => {
    const spells = [5, 1, 3];
    const potions = [1, 2, 3, 4, 5];
    const success = 7;
    const result = successfulPairs(spells, potions, success);
    expect(result).toEqual([4, 0, 3]);
  });
  it("should return [2,0,2] for spells = [3,1,2], potions = [8,5,8], success = 16", () => {
    const spells = [3, 1, 2];
    const potions = [8, 5, 8];
    const success = 16;
    const result = successfulPairs(spells, potions, success);
    expect(result).toEqual([2, 0, 2]);
  });
  it("should return [0,0,0] for spells = [1,1,1], potions = [1,1,1], success = 2", () => {
    const spells = [1, 1, 1];
    const potions = [1, 1, 1];
    const success = 2;
    const result = successfulPairs(spells, potions, success);
    expect(result).toEqual([0, 0, 0]);
  });
  it("should manage large inputs efficiently", () => {
    const n = 100000;
    const m = 100000;
    const spells = Array(n).fill(100000);
    const potions = Array(m).fill(100000);
    const success = 10 ** 10;
    const result = successfulPairs(spells, potions, success);
    expect(result).toEqual(Array(n).fill(m));
  });
  it("should manage edge case with success = 1", () => {
    const spells = [1, 2, 3];
    const potions = [1, 2, 3];
    const success = 1;
    const result = successfulPairs(spells, potions, success);
    expect(result).toEqual([3, 3, 3]);
  });
  it("should manage edge case with maximum values", () => {
    const spells = [100000];
    const potions = [100000];
    const success = 10 ** 10;
    const result = successfulPairs(spells, potions, success);
    expect(result).toEqual([1]);
  });
  it("should manage 1 spell 1 potion 1 success", () => {
    const spells = [1];
    const potions = [1];
    const success = 1;
    const result = successfulPairs(spells, potions, success);
    expect(result).toEqual([1]);
  });
  it("should manage spells 1 potions 1 success 2", () => {
    const spells = [1];
    const potions = [1];
    const success = 2;
    const result = successfulPairs(spells, potions, success);
    expect(result).toEqual([0]);
  });
  it("should manage spells 100000 potions 1 success 100000", () => {
    const spells = [100000];
    const potions = [1];
    const success = 100000;
    const result = successfulPairs(spells, potions, success);
    expect(result).toEqual([1]);
  });
});

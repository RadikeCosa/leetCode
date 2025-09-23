/**
 * LeetCode Problem 165: Compare Version Numbers
 * Difficulty: Medium
 * Topics: Two Pointers, String
 *
 * Given two version strings, version1 and version2, compare them.
 * A version string consists of revisions separated by dots '.'.
 * The value of the revision is its integer conversion ignoring leading zeros.
 *
 * To compare version strings, compare their revision values in left-to-right order.
 * If one of the version strings has fewer revisions, treat the missing revision values as 0.
 *
 * Return the following:
 * • If version1 < version2, return -1.
 * • If version1 > version2, return 1.
 * • Otherwise, return 0.
 *
 * Example 1:
 * Input: version1 = "1.2", version2 = "1.10"
 * Output: -1
 * Explanation: version1's second revision is "2" and version2's second revision is "10": 2 < 10, so version1 < version2.
 *
 * Example 2:
 * Input: version1 = "1.01", version2 = "1.001"
 * Output: 0
 * Explanation: Ignoring leading zeroes, both "01" and "001" represent the same integer "1".
 *
 * Example 3:
 * Input: version1 = "1.0", version2 = "1.0.0.0"
 * Output: 0
 * Explanation: version1 has less revisions, which means every missing revision are treated as "0".
 *
 * Constraints:
 * - 1 <= version1.length, version2.length <= 500
 * - version1 and version2 only contain digits and '.'.
 * - version1 and version2 are valid version numbers.
 * - All the given revisions in version1 and version2 can be stored in a 32-bit integer.
 *
 * Hints:
 * - You can use two pointers for each version string to traverse them together while comparing the corresponding segments.
 * - Utilize the substring method to extract each version segment delimited by '.'. Ensure you're extracting the segments correctly by adjusting the start and end indices accordingly.
 */
import { describe, it, expect } from "vitest";
import { compareVersion } from "./compare-version-numbers";

describe("Compare Version Numbers", () => {
  it("should return -1 for example 1", () => {
    expect(compareVersion("1.2", "1.10")).toBe(-1);
  });

  it("should return 0 for example 2", () => {
    expect(compareVersion("1.01", "1.001")).toBe(0);
  });

  it("should return 0 for example 3", () => {
    expect(compareVersion("1.0", "1.0.0.0")).toBe(0);
  });

  it("it should handle multiple leading zeros", () => {
    expect(compareVersion("1.000", "1.0")).toBe(0);
  });

  it("should handle very different lengths", () => {
    expect(compareVersion("1", "1.0.0.0.0")).toBe(0);
    expect(compareVersion("1.1", "1.0.0.0.0")).toBe(1);
    expect(compareVersion("1.0.0.0.0", "1.1")).toBe(-1);
  });
});

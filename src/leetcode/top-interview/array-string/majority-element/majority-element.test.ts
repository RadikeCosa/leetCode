import { majorityElement } from "./majority-element";
import { describe, it, expect } from "vitest";
/**
 Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2
 */

describe("Majority Element", () => {
  it("Example 1", () => {
    const nums = [3, 2, 3];
    const result = majorityElement(nums);
    expect(result).toBe(3);
  });

  it("Example 2", () => {
    const nums = [2, 2, 1, 1, 1, 2, 2];
    const result = majorityElement(nums);
    expect(result).toBe(2);
  });
});

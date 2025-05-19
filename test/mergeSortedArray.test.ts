import { describe, it, expect } from "vitest";
import { mergeSortedArray } from "../src/mergeSortedArray";

describe("mergeSortedArray", () => {
  it("combina [1,2,3] y [2,5,6]", () => {
    const nums1 = [1, 2, 3, 0, 0, 0];
    const nums2 = [2, 5, 6];
    mergeSortedArray(nums1, 3, nums2, 3);
    expect(nums1).toEqual([1, 2, 2, 3, 5, 6]);
  });

  it("combina [1] y []", () => {
    const nums1 = [1];
    const nums2: number[] = [];
    mergeSortedArray(nums1, 1, nums2, 0);
    expect(nums1).toEqual([1]);
  });

  it("combina [] y [1]", () => {
    const nums1 = [0];
    const nums2 = [1];
    mergeSortedArray(nums1, 0, nums2, 1);
    expect(nums1).toEqual([1]);
  });

  it("combina [2,0] y [1]", () => {
    const nums1 = [2, 0];
    const nums2 = [1];
    mergeSortedArray(nums1, 1, nums2, 1);
    expect(nums1).toEqual([1, 2]);
  });
});

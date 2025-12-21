import { describe, it, expect } from "vitest";
import { findMedianSortedArrays } from "./median-of-two-sorted-arrays";

/**
 
 */

describe("Median Of Two Sorted Arrays", () => {
  // Casos básicos y edge cases identificados en la explicación

  it("Ambos arrays tienen la misma longitud y no hay elementos en común", () => {
    expect(findMedianSortedArrays([1, 3], [2, 4])).toBe(2.5);
  });

  it("Uno de los arrays es mucho más grande que el otro", () => {
    expect(findMedianSortedArrays([1, 2], [3, 4, 5, 6, 7])).toBe(4);
  });

  it("Uno de los arrays está vacío (nums1 vacío)", () => {
    expect(findMedianSortedArrays([], [1])).toBe(1);
  });

  it("Uno de los arrays está vacío (nums2 vacío)", () => {
    expect(findMedianSortedArrays([2, 3], [])).toBe(2.5);
  });

  it("Arrays con elementos repetidos", () => {
    expect(findMedianSortedArrays([1, 2, 2], [2, 2, 3])).toBe(2);
  });

  it("Ambos arrays tienen un solo elemento", () => {
    expect(findMedianSortedArrays([1], [2])).toBe(1.5);
  });

  it("Longitud total impar", () => {
    expect(findMedianSortedArrays([1, 3], [2])).toBe(2);
  });

  it("Longitud total par", () => {
    expect(findMedianSortedArrays([1, 2], [3, 4])).toBe(2.5);
  });

  // Puedes agregar más casos colaborativamente según se detecten edge cases adicionales
});

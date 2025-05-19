import { describe, it, expect } from "vitest";
import { sortColors } from "../src/sortColors";

describe("sortColors", () => {
  it("should sort [2,0,2,1,1,0] into [0,0,1,1,2,2]", () => {
    const arr = [2, 0, 2, 1, 1, 0];
    sortColors(arr);
    expect(arr).toEqual([0, 0, 1, 1, 2, 2]);
  });

  it("should sort [2,0,1] into [0,1,2]", () => {
    const arr = [2, 0, 1];
    sortColors(arr);
    expect(arr).toEqual([0, 1, 2]);
  });

  it("should handle an already sorted array", () => {
    const arr = [0, 0, 1, 1, 2, 2];
    sortColors(arr);
    expect(arr).toEqual([0, 0, 1, 1, 2, 2]);
  });

  it("should handle a single element array", () => {
    const arr = [1];
    sortColors(arr);
    expect(arr).toEqual([1]);
  });

  it("should handle an array with all the same element", () => {
    const arr = [2, 2, 2];
    sortColors(arr);
    expect(arr).toEqual([2, 2, 2]);
  });
});

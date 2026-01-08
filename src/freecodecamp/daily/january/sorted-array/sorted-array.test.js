import isSorted from "./sorted-array";

/**
 Sorted Array?
Given an array of numbers, determine if the numbers are sorted in ascending order, descending order, or neither.

If the given array is:

In ascending order (lowest to highest), return "Ascending".
In descending order (highest to lowest), return "Descending".
Not sorted in ascending or descending order, return "Not sorted".

Tests
1. isSorted([1, 2, 3, 4, 5]) should return "Ascending".
2. isSorted([10, 8, 6, 4, 2]) should return "Descending".
3. isSorted([1, 3, 2, 4, 5]) should return "Not sorted".
4. isSorted([3.14, 2.71, 1.61, 0.57]) should return "Descending".5. isSorted([12.3, 23.4, 34.5, 45.6, 56.7, 67.8, 78.9]) should return "Ascending".
6. isSorted([0.4, 0.5, 0.3]) should return "Not sorted".
 */

describe("Sorted Array", () => {
  it("Test Case 1", () => {
    expect(isSorted([1, 2, 3, 4, 5])).toBe("Ascending");
  });

  it("Test Case 2", () => {
    expect(isSorted([10, 8, 6, 4, 2])).toBe("Descending");
  });

  it("Test Case 3", () => {
    expect(isSorted([1, 3, 2, 4, 5])).toBe("Not sorted");
  });
  it("Test Case 4", () => {
    expect(isSorted([3.14, 2.71, 1.61, 0.57])).toBe("Descending");
  });
  it("Test Case 5", () => {
    expect(isSorted([12.3, 23.4, 34.5, 45.6, 56.7, 67.8, 78.9])).toBe(
      "Ascending"
    );
  });
  it("Test Case 6", () => {
    expect(isSorted([0.4, 0.5, 0.3])).toBe("Not sorted");
  });
});

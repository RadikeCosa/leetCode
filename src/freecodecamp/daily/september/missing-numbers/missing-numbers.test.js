import findMissingNumbers from "./missing-numbers";

/**
 * Missing Numbers
Given an array of integers from 1 to n, inclusive, return an array of all the missing integers between 1 and n (where n is the largest number in the given array).

The given array may be unsorted and may contain duplicates.
The returned array should be in ascending order.
If no integers are missing, return an empty array.

Tests
1. findMissingNumbers([1, 3, 5]) should return [2, 4].
2. findMissingNumbers([1, 2, 3, 4, 5]) should return [].
3. findMissingNumbers([1, 10]) should return [2, 3, 4, 5, 6, 7, 8, 9].
4. findMissingNumbers([10, 1, 10, 1, 10, 1]) should return [2, 3, 4, 5, 6, 7, 8, 9].
5. findMissingNumbers([3, 1, 4, 1, 5, 9]) should return [2, 6, 7, 8].
6. findMissingNumbers([1, 2, 3, 4, 5, 7, 8, 9, 10, 12, 6, 8, 9, 3, 2, 10, 7, 4]) should return [11].
 */

describe("Missing Numbers", () => {
  it("Test Case 1", () => {
    const input = [1, 3, 5];
    const expectedOutput = [2, 4];
    expect(findMissingNumbers(input)).toEqual(expectedOutput);
  });

  it("Test Case 2", () => {
    const input = [1, 2, 3, 4, 5];
    const expectedOutput = [];
    expect(findMissingNumbers(input)).toEqual(expectedOutput);
  });

  it("Test Case 3", () => {
    const input = [1, 10];
    const expectedOutput = [2, 3, 4, 5, 6, 7, 8, 9];
    expect(findMissingNumbers(input)).toEqual(expectedOutput);
  });
  it("Test Case 4", () => {
    const input = [10, 1, 10, 1, 10, 1];
    const expectedOutput = [2, 3, 4, 5, 6, 7, 8, 9];
    expect(findMissingNumbers(input)).toEqual(expectedOutput);
  });
  it("Test Case 5", () => {
    const input = [3, 1, 4, 1, 5, 9];
    const expectedOutput = [2, 6, 7, 8];
    expect(findMissingNumbers(input)).toEqual(expectedOutput);
  });
  it("Test Case 6", () => {
    const input = [1, 2, 3, 4, 5, 7, 8, 9, 10, 12, 6, 8, 9, 3, 2, 10, 7, 4];
    const expectedOutput = [11];
    expect(findMissingNumbers(input)).toEqual(expectedOutput);
  });
});

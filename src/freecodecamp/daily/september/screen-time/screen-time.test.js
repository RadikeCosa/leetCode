import tooMuchScreenTime from "./screen-time";

/**
 * Screen Time
Given an input array of seven integers, representing a week's time, where each integer is the amount of hours spent on your phone that day, determine if it is too much screen time based on these constraints:

If any single day has 10 hours or more, it's too much.
If the average of any three days in a row is greater than or equal to 8 hours, it’s too much.
If the average of the seven days is greater than or equal to 6 hours, it's too much.

Tests
1. tooMuchScreenTime([1, 2, 3, 4, 5, 6, 7]) should return false.
2. tooMuchScreenTime([7, 8, 8, 4, 2, 2, 3]) should return false.
3. tooMuchScreenTime([5, 6, 6, 6, 6, 6, 6]) should return false.
4. tooMuchScreenTime([1, 2, 3, 11, 1, 3, 4]) should return true.
5. tooMuchScreenTime([1, 2, 3, 10, 2, 1, 0]) should return true.
6. tooMuchScreenTime([3, 3, 5, 8, 8, 9, 4]) should return true.
7. tooMuchScreenTime([3, 9, 4, 8, 5, 7, 6]) should return true.
 */

describe("Screen Time", () => {
  it("test case 1", () => {
    expect(tooMuchScreenTime([1, 2, 3, 4, 5, 6, 7])).toBe(false);
  });

  it("test case 2", () => {
    expect(tooMuchScreenTime([7, 8, 8, 4, 2, 2, 3])).toBe(false);
  });

  it("test case 3", () => {
    expect(tooMuchScreenTime([5, 6, 6, 6, 6, 6, 6])).toBe(false);
  });

  it("test case 4", () => {
    expect(tooMuchScreenTime([1, 2, 3, 11, 1, 3, 4])).toBe(true);
  });

  it("test case 5", () => {
    expect(tooMuchScreenTime([1, 2, 3, 10, 2, 1, 0])).toBe(true);
  });

  it("test case 6", () => {
    expect(tooMuchScreenTime([3, 3, 5, 8, 8, 9, 4])).toBe(true);
  });
  it("test case 7", () => {
    expect(tooMuchScreenTime([3, 9, 4, 8, 5, 7, 6])).toBe(true);
  });
});

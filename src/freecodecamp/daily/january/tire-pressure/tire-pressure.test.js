import tireStatus from "./tire-pressure";

/**
 Tire Pressure
Given an array with four numbers representing the tire pressures in psi of the four tires in your vehicle, and another array of two numbers representing the minimum and maximum pressure for your tires in bar, return an array of four strings describing each tire's status.

1 bar equal 14.5038 psi.
Return an array with the following values for each tire:

"Low" if the tire pressure is below the minimum allowed.
"Good" if it's between the minimum and maximum allowed.
"High" if it's above the maximum allowed.
Tests
1. tireStatus([32, 28, 35, 29], [2, 3]) should return ["Good", "Low", "Good", "Low"].
2. tireStatus([32, 28, 35, 30], [2, 2.3]) should return ["Good", "Low", "High", "Good"].
3. tireStatus([29, 26, 31, 28], [2.1, 2.5]) should return ["Low", "Low", "Good", "Low"].
4. tireStatus([31, 31, 30, 29], [1.5, 2]) should return ["High", "High", "High", "Good"].
5. tireStatus([30, 28, 30, 29], [1.9, 2.1]) should return ["Good", "Good", "Good", "Good"].
 */

describe("Tire Status", () => {
  it("Test Case 1", () => {
    expect(tireStatus([32, 28, 35, 29], [2, 3])).toEqual([
      "Good",
      "Low",
      "Good",
      "Low",
    ]);
  });

  it("Test Case 2", () => {
    expect(tireStatus([32, 28, 35, 30], [2, 2.3])).toEqual([
      "Good",
      "Low",
      "High",
      "Good",
    ]);
  });

  it("Test Case 3", () => {
    expect(tireStatus([29, 26, 31, 28], [2.1, 2.5])).toEqual([
      "Low",
      "Low",
      "Good",
      "Low",
    ]);
  });

  it("Test Case 4", () => {
    expect(tireStatus([31, 31, 30, 29], [1.5, 2])).toEqual([
      "High",
      "High",
      "High",
      "Good",
    ]);
  });

  it("Test Case 5", () => {
    expect(tireStatus([30, 28, 30, 29], [1.9, 2.1])).toEqual([
      "Good",
      "Good",
      "Good",
      "Good",
    ]);
  });
});

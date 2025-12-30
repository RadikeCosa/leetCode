import fuelToAdd from "./take-off-fuel";

/**
 * Takeoff Fuel
Given the numbers of gallons of fuel currently in your airplane, and the required number of liters of fuel to reach your destination, determine how many additional gallons of fuel you should add.

1 gallon equals 3.78541 liters.
If the airplane already has enough fuel, return 0.
You can only add whole gallons.
Do not include decimals in the return number.
Tests
1. fuelToAdd(0, 1) should return 1.
2. fuelToAdd(5, 40) should return 6.
3. fuelToAdd(10, 30) should return 0.
4. fuelToAdd(896, 20500) should return 4520.
5. fuelToAdd(1000, 50000) should return 12209.
 */

describe("Take Off Fuel", () => {
  it("Test Case 1", () => {
    expect(fuelToAdd(0, 1)).toBe(1);
  });

  it("Test Case 2", () => {
    expect(fuelToAdd(5, 40)).toBe(6);
  });

  it("Test Case 3", () => {
    expect(fuelToAdd(10, 30)).toBe(0);
  });

  it("Test Case 4", () => {
    expect(fuelToAdd(896, 20500)).toBe(4520);
  });

  it("Test Case 5", () => {
    expect(fuelToAdd(1000, 50000)).toBe(12209);
  });
});

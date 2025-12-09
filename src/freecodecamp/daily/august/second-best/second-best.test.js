import getLaptopCost from "./second-best";
import { describe, it, expect } from "vitest";
/**
 Second Best
Given an array of integers representing the price of different laptops, and an integer representing your budget, return:

The second most expensive laptop if it is within your budget, or
The most expensive laptop that is within your budget, or
0 if no laptops are within your budget.
Duplicate prices should be ignored.

Tests
1. getLaptopCost([1500, 2000, 1800, 1400], 1900) should return 1800
2. getLaptopCost([1500, 2000, 2000, 1800, 1400], 1900) should return 1800
3. getLaptopCost([2099, 1599, 1899, 1499], 2200) should return 1899
4. getLaptopCost([2099, 1599, 1899, 1499], 1000) should return 0
5. getLaptopCost([1200, 1500, 1600, 1800, 1400, 2000], 1450) should return 1400
 */

describe("Second Best", () => {
  it("Test Case 1", () => {
    expect(getLaptopCost([1500, 2000, 1800, 1400], 1900)).toBe(1800);
  });

  it("Test Case 2", () => {
    expect(getLaptopCost([1500, 2000, 2000, 1800, 1400], 1900)).toBe(1800);
  });
  it("Test Case 3", () => {
    expect(getLaptopCost([2099, 1599, 1899, 1499], 2200)).toBe(1899);
  });
  it("Test Case 4", () => {
    expect(getLaptopCost([2099, 1599, 1899, 1499], 1000)).toBe(0);
  });
  it("Test Case 5", () => {
    expect(getLaptopCost([1200, 1500, 1600, 1800, 1400, 2000], 1450)).toBe(
      1400
    );
  });
  it("should return 1800 for [1500, 2000, 1800, 1400] with budget 1900", () => {
    expect(getLaptopCost([1500, 2000, 1800, 1400], 1900)).toBe(1800);
  });
  it("should return 1800 for [1500, 2000, 2000, 1800, 1400] with budget 1900", () => {
    expect(getLaptopCost([1500, 2000, 2000, 1800, 1400], 1900)).toBe(1800);
  });
  it("should return 1899 for [2099, 1599, 1899, 1499] with budget 2200", () => {
    expect(getLaptopCost([2099, 1599, 1899, 1499], 2200)).toBe(1899);
  });
  it("should return 0 for [2099, 1599, 1899, 1499] with budget 1000", () => {
    expect(getLaptopCost([2099, 1599, 1899, 1499], 1000)).toBe(0);
  });
  it("should return 1400 for [1200, 1500, 1600, 1800, 1400, 2000] with budget 1450", () => {
    expect(getLaptopCost([1200, 1500, 1600, 1800, 1400, 2000], 1450)).toBe(
      1400
    );
  });
  // Caso adicional: ambos más caros dentro del presupuesto
  it("should return 1300 for [1000, 1200, 1300, 1400] with budget 1500", () => {
    expect(getLaptopCost([1000, 1200, 1300, 1400], 1500)).toBe(1300);
  });
});

import getNumberOfPlants from "./plant-the-crop";

/**
 Plant the Crop
Given an integer representing the size of your farm field, and "acres" or "hectares" representing the unit for the size of your farm field, and a type of crop, determine how many plants of that type you can fit in your field.

1 acre equals 4046.86 square meters.
1 hectare equals 10,000 square meters.
Here's a list of crops that will be given as input and how much space a single plant takes:

Crop	Space per plant
"corn"	1 square meter
"wheat"	0.1 square meters
"soybeans"	0.5 square meters
"tomatoes"	0.25 square meters
"lettuce"	0.2 square meters
Return the number of plants that fit in the field, rounded down to the nearest whole plant.

Tests
1. getNumberOfPlants(1, "acres", "corn") should return 4046.
2. getNumberOfPlants(2, "hectares", "lettuce") should return 100000.
3. getNumberOfPlants(20, "acres", "soybeans") should return 161874.
4. getNumberOfPlants(3.75, "hectares", "tomatoes") should return 150000.
5. getNumberOfPlants(16.75, "acres", "tomatoes") should return 271139.
 */

describe("Plant The Crop", () => {
  it("test case 1", () => {
    expect(getNumberOfPlants(1, "acres", "corn")).toBe(4046);
  });

  it("test case 2", () => {
    expect(getNumberOfPlants(2, "hectares", "lettuce")).toBe(100000);
  });

  it("test case 3", () => {
    expect(getNumberOfPlants(20, "acres", "soybeans")).toBe(161874);
  });

  it("test case 4", () => {
    expect(getNumberOfPlants(3.75, "hectares", "tomatoes")).toBe(150000);
  });

  it("test case 5", () => {
    expect(getNumberOfPlants(16.75, "acres", "tomatoes")).toBe(271139);
  });
});

import costToFill from "./fill-the-tank";

/**
 * Fill The Tank
 *
 * Given the size of a fuel tank, the current fuel level, and the price per gallon, return the cost to fill the tank all the way.
 *
 * tankSize: total capacity of the tank in gallons.
 * fuelLevel: current amount of fuel in the tank in gallons.
 * pricePerGallon: cost of one gallon of fuel.
 * The returned value should be rounded to two decimal places in the format: "$d.dd".
 *
 * Tests:
 * 1. costToFill(20, 0, 4.00) should return "$80.00".
 * 2. costToFill(15, 10, 3.50) should return "$17.50".
 * 3. costToFill(18, 9, 3.25) should return "$29.25".
 * 4. costToFill(12, 12, 4.99) should return "$0.00".
 * 5. costToFill(15, 9.5, 3.98) should return "$21.89".
 */

describe("Fill The Tank", () => {
  it("costToFill(20, 0, 4.00) should return '$80.00'", () => {
    expect(costToFill(20, 0, 4.0)).toBe("$80.00");
  });

  it("costToFill(15, 10, 3.50) should return '$17.50'", () => {
    expect(costToFill(15, 10, 3.5)).toBe("$17.50");
  });

  it("costToFill(18, 9, 3.25) should return '$29.25'", () => {
    expect(costToFill(18, 9, 3.25)).toBe("$29.25");
  });

  it("costToFill(12, 12, 4.99) should return '$0.00'", () => {
    expect(costToFill(12, 12, 4.99)).toBe("$0.00");
  });

  it("costToFill(15, 9.5, 3.98) should return '$21.89'", () => {
    expect(costToFill(15, 9.5, 3.98)).toBe("$21.89");
  });
});

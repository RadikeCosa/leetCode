import adjustThermostat from "./thermostat-adjuster";

/**
 Thermostat Adjuster
Given the current temperature of a room and a target temperature, return a string indicating how to adjust the room temperature based on these constraints:

Return "heat" if the current temperature is below the target.
Return "cool" if the current temperature is above the target.
Return "hold" if the current temperature is equal to the target.
Tests
1. adjustThermostat(68, 72) should return "heat".
2. adjustThermostat(75, 72) should return "cool".
3. adjustThermostat(72, 72) should return "hold".
4. adjustThermostat(-20.5, -10.1) should return "heat".
5. adjustThermostat(100, 99.9) should return "cool".
6. adjustThermostat(0.0, 0.0) should return "hold".
 */

describe("Thermostat Adjuster", () => {
  it("test case 1", () => {
    expect(adjustThermostat(68, 72)).toBe("heat");
  });

  it("test case 2", () => {
    expect(adjustThermostat(75, 72)).toBe("cool");
  });

  it("test case 3", () => {
    expect(adjustThermostat(72, 72)).toBe("hold");
  });

  it("test case 4", () => {
    expect(adjustThermostat(-20.5, -10.1)).toBe("heat");
  });
  it("test case 5", () => {
    expect(adjustThermostat(100, 99.9)).toBe("cool");
  });
  it("test case 6", () => {
    expect(adjustThermostat(0.0, 0.0)).toBe("hold");
  });
});

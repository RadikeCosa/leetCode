/**
 * Tests for Thermostat Adjuster 2
 *
 * Problem Statement:
 * Given the current temperature of a room in Fahrenheit and a target temperature in Celsius,
 * return a string indicating how to adjust the room temperature.
 *
 * Rules:
 * - Return "Heat: X degrees Fahrenheit" if current < target (rounded to 1 decimal place)
 * - Return "Cool: X degrees Fahrenheit" if current > target (rounded to 1 decimal place)
 * - Return "Hold" if current equals target
 * - Conversion: F = (C * 1.8) + 32
 *
 * Test Cases:
 * 1. adjustThermostat(32, 0) should return "Hold"
 * 2. adjustThermostat(70, 25) should return "Heat: 7.0 degrees Fahrenheit"
 * 3. adjustThermostat(72, 18) should return "Cool: 7.6 degrees Fahrenheit"
 * 4. adjustThermostat(212, 100) should return "Hold"
 * 5. adjustThermostat(59, 22) should return "Heat: 12.6 degrees Fahrenheit"
 */

import { it, describe, expect } from "vitest";
import adjustThermostat from "./thermostat-adjuster-2.js";

describe("Thermostat Adjuster 2", () => {
  // Casos originales de FreeCodeCamp
  it("should return 'Hold' if current equals target (freezing point)", () => {
    expect(adjustThermostat(32, 0)).toBe("Hold");
  });

  it("should return 'Heat: X degrees Fahrenheit' if current < target", () => {
    expect(adjustThermostat(70, 25)).toBe("Heat: 7.0 degrees Fahrenheit");
  });

  it("should return 'Cool: X degrees Fahrenheit' if current > target", () => {
    expect(adjustThermostat(72, 18)).toBe("Cool: 7.6 degrees Fahrenheit");
  });

  it("should return 'Hold' if current equals target (boiling point)", () => {
    expect(adjustThermostat(212, 100)).toBe("Hold");
  });

  it("should return 'Heat: X degrees Fahrenheit' if current < target", () => {
    expect(adjustThermostat(59, 22)).toBe("Heat: 12.6 degrees Fahrenheit");
  });

  // Casos límite adicionales
  describe("Edge Cases", () => {
    it("should handle negative Celsius temperatures", () => {
      // -10°C = 14°F, current 20°F → Cool: 6.0°F
      expect(adjustThermostat(20, -10)).toBe("Cool: 6.0 degrees Fahrenheit");
    });

    it("should handle very small differences requiring rounding", () => {
      // 21°C = 69.8°F, current 70°F → Cool: 0.2°F
      expect(adjustThermostat(70, 21)).toBe("Cool: 0.2 degrees Fahrenheit");
    });

    it("should handle rounding to exact decimal (.5 cases)", () => {
      // 20.5°C = 68.9°F, current 70°F → Cool: 1.1°F
      expect(adjustThermostat(70, 20.5)).toBe("Cool: 1.1 degrees Fahrenheit");
    });

    it("should handle very close temperatures that round to 0.0", () => {
      // 20.06°C = 68.108°F ≈ 68.1°F, current 68°F → Heat: 0.1°F
      expect(adjustThermostat(68, 20.06)).toBe("Heat: 0.1 degrees Fahrenheit");
    });

    it("should handle room temperature scenarios", () => {
      // 23°C = 73.4°F, current 72°F → Heat: 1.4°F
      expect(adjustThermostat(72, 23)).toBe("Heat: 1.4 degrees Fahrenheit");
    });

    it("should handle high temperature differences", () => {
      // 40°C = 104°F, current 80°F → Heat: 24.0°F
      expect(adjustThermostat(80, 40)).toBe("Heat: 24.0 degrees Fahrenheit");
    });

    it("should handle fractional Celsius with complex conversion", () => {
      // 15.3°C = 59.54°F ≈ 59.5°F, current 60°F → Cool: 0.5°F
      expect(adjustThermostat(60, 15.3)).toBe("Cool: 0.5 degrees Fahrenheit");
    });
  });
});

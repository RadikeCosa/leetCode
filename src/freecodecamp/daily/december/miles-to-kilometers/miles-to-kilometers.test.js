import { it, describe, expect } from "vitest";
import convertToKm from "./miles-to-kilometers";

/**
 * Pruebas unitarias para la función convertToKm.
 * Verifica la conversión y el redondeo correcto.
 */
describe("Miles To Kilometers", () => {
  it("convertToKm(1) should return 1.61", () => {
    expect(convertToKm(1)).toBe(1.61);
  });

  it("convertToKm(21) should return 33.8", () => {
    expect(convertToKm(21)).toBe(33.8);
  });

  it("convertToKm(3.5) should return 5.63", () => {
    expect(convertToKm(3.5)).toBe(5.63);
  });

  it("convertToKm(0) should return 0", () => {
    expect(convertToKm(0)).toBe(0);
  });

  it("convertToKm(0.621371) should return 1", () => {
    expect(convertToKm(0.621371)).toBe(1);
  });
});

/**
 * FreeCodeCamp Problem: Exoplanet Search
 * Difficulty: Easy
     // Caso que sí detecta exoplaneta con transición dígito-letra
    expect(hasExoplanet("5A")).toBe(true); // 5,10: promedio=7.5, threshold=6, 5<=6
    expect(hasExoplanet("4A")).toBe(true); // 4,10: promedio=7, threshold=5.6, 4<=5.6opics: Strings, Math, Arrays
 *
 * For the second day of Space Week, you are given a string where each character represents the luminosity reading of a star. Determine if the readings have detected an exoplanet using the transit method. The transit method is when a planet passes in front of a star, reducing its observed luminosity.
 *
 * Luminosity readings only comprise of characters 0-9 and A-Z where each reading corresponds to the following numerical values:
 * Characters 0-9 correspond to luminosity levels 0-9.
 * Characters A-Z correspond to luminosity levels 10-35.
 * A star is considered to have an exoplanet if any single reading is less than or equal to 80% of the average of all readings. For example, if the average luminosity of a star is 10, it would be considered to have a exoplanet if any single reading is 8 or less.
 *
 * Tests
 * Waiting:1. hasExoplanet("665544554") should return false.
 * Waiting:2. hasExoplanet("FGFFCFFGG") should return true.
 * Waiting:3. hasExoplanet("MONOPLONOMONPLNOMPNOMP") should return false.
 * Waiting:4. hasExoplanet("FREECODECAMP") should return true.
 * Waiting:5. hasExoplanet("9AB98AB9BC98A") should return false.
 * Waiting:6. hasExoplanet("ZXXWYZXYWYXZEGZXWYZXYGEE") should return true.
 */
import { describe, it, expect, should } from "vitest";
import hasExoplanet from "./exoplanet-search.js";

describe("Exoplanet Search", () => {
  it("should return false for readings without an exoplanet", () => {
    expect(hasExoplanet("665544554")).toBe(false);
    expect(hasExoplanet("MONOPLONOMONPLNOMPNOMP")).toBe(false);
    expect(hasExoplanet("9AB98AB9BC98A")).toBe(false);
  });

  it("should return true for readings with an exoplanet", () => {
    expect(hasExoplanet("FGFFCFFGG")).toBe(true);
    expect(hasExoplanet("FREECODECAMP")).toBe(true);
    expect(hasExoplanet("ZXXWYZXYWYXZEGZXWYZXYGEE")).toBe(true);
  });

  it("should handle edge cases", () => {
    // String vacío - no hay lecturas, no hay exoplaneta
    expect(hasExoplanet("")).toBe(false);

    // Un solo caracter - promedio = valor, threshold = valor * 0.8
    // Como valor <= valor * 0.8 nunca es true para valores positivos, siempre false
    expect(hasExoplanet("5")).toBe(false);
    expect(hasExoplanet("A")).toBe(false);

    // Todos los valores iguales - ningún valor puede ser < 80% del promedio
    expect(hasExoplanet("AAA")).toBe(false);
    expect(hasExoplanet("555")).toBe(false);

    // Valores muy bajos (cerca del threshold)
    expect(hasExoplanet("000")).toBe(true); // promedio = 0, threshold = 0, 0 <= 0

    // Valores mixtos con uno justo en el threshold
    expect(hasExoplanet("28")).toBe(true); // 2 y 8: promedio = 5, threshold = 4, 2 <= 4

    // Caso donde el promedio hace que el threshold sea exacto
    expect(hasExoplanet("125")).toBe(true); // 1,2,5: promedio = 8/3≈2.67, threshold≈2.13, 1<=2.13
  });

  it("should handle boundary values", () => {
    // Máximo valor posible (Z=35)
    expect(hasExoplanet("ZZZ")).toBe(false); // promedio=35, threshold=28, 35>28

    // Mínimo valor posible (0)
    expect(hasExoplanet("000")).toBe(true);

    // Transición dígito-letra (9=9, A=10)
    // 9,10: promedio=9.5, threshold=7.6, ni 9 ni 10 <= 7.6
    expect(hasExoplanet("9A")).toBe(false);

    expect(hasExoplanet("6A")).toBe(true); // 6,10: promedio=8, threshold=6.4, 6<=6.4

    // Caso con decimales exactos
    expect(hasExoplanet("24")).toBe(true); // 2,4: promedio=3, threshold=2.4, 2<=2.4
  });
});

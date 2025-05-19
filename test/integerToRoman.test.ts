import { describe, it, expect } from "vitest";
import { intToRoman } from "../src/integerToRoman";

describe("intToRoman", () => {
  it("debería convertir números simples sin forma restativa", () => {
    expect(intToRoman(3)).toBe("III"); // 1 + 1 + 1
    expect(intToRoman(8)).toBe("VIII"); // 5 + 1 + 1 + 1
    expect(intToRoman(60)).toBe("LX"); // 50 + 10
  });

  it("debería convertir números con formas restativas", () => {
    expect(intToRoman(4)).toBe("IV"); // 5 - 1
    expect(intToRoman(9)).toBe("IX"); // 10 - 1
    expect(intToRoman(40)).toBe("XL"); // 50 - 10
    expect(intToRoman(90)).toBe("XC"); // 100 - 10
    expect(intToRoman(400)).toBe("CD"); // 500 - 100
    expect(intToRoman(900)).toBe("CM"); // 1000 - 100
  });

  it("debería convertir combinaciones de valores", () => {
    expect(intToRoman(58)).toBe("LVIII");
    // L = 50, V = 5, III = 3 → LVIII

    expect(intToRoman(1994)).toBe("MCMXCIV");
    // M = 1000, CM = 900, XC = 90, IV = 4

    expect(intToRoman(3749)).toBe("MMMDCCXLIX");
    // MMM = 3000, DCC = 700, XL = 40, IX = 9
  });

  it("debería manejar el límite inferior y superior", () => {
    expect(intToRoman(1)).toBe("I"); // mínimo
    expect(intToRoman(3999)).toBe("MMMCMXCIX"); // máximo
  });
});

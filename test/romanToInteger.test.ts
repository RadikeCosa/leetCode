import { describe, it, expect } from "vitest";
import { romanToInt } from "../src/romanToInteger";

describe("romanToInt", () => {
  it("debería convertir números simples (sin reglas de resta)", () => {
    expect(romanToInt("III")).toBe(3); // 1 + 1 + 1
    expect(romanToInt("VIII")).toBe(8); // 5 + 1 + 1 + 1
    expect(romanToInt("LX")).toBe(60); // 50 + 10
  });

  it("debería convertir números con una regla de resta", () => {
    expect(romanToInt("IV")).toBe(4); // 5 - 1
    expect(romanToInt("IX")).toBe(9); // 10 - 1
    expect(romanToInt("XL")).toBe(40); // 50 - 10
    expect(romanToInt("XC")).toBe(90); // 100 - 10
    expect(romanToInt("CD")).toBe(400); // 500 - 100
    expect(romanToInt("CM")).toBe(900); // 1000 - 100
  });

  it("debería convertir combinaciones de suma y resta", () => {
    expect(romanToInt("MCMXCIV")).toBe(1994);
    // M = 1000
    // CM = 900 (1000 - 100)
    // XC = 90 (100 - 10)
    // IV = 4 (5 - 1)
    // Total = 1000 + 900 + 90 + 4 = 1994

    expect(romanToInt("LVIII")).toBe(58);
    // L = 50, V = 5, III = 3 → 50 + 5 + 3 = 58
  });

  it("debería manejar el caso mínimo y máximo dentro del rango", () => {
    expect(romanToInt("I")).toBe(1); // mínimo válido
    expect(romanToInt("MMMCMXCIX")).toBe(3999);
    // M (1000) * 3 = 3000
    // CM = 900
    // XC = 90
    // IX = 9
    // Total = 3000 + 900 + 90 + 9 = 3999
  });
});

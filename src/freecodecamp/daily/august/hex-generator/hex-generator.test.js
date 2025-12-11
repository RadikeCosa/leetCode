import generateHex from "./hex-generator";
import { it, describe, expect } from "vitest";
/**
 Hex Generator
Given a named CSS color string, generate a random hexadecimal (hex) color code that is dominant in the given color.

The function should handle "red", "green", or "blue" as an input argument.
If the input is not one of those, the function should return "Invalid color".
The function should return a random six-character hex color code where the input color value is greater than any of the others.
Example of valid outputs for a given input:
Input	Output
"red"	"FF0000"
"green"	"00FF00"
"blue"	"0000FF"

Tests
1. generateHex("yellow") should return "Invalid color".
2. generateHex("red") should return a six-character string.
3. generateHex("red") should return a valid six-character hex color code.
4. generateHex("red") should return a valid hex color with a higher red value than other colors.
5. Calling generateHex("red") twice should return two different hex color values where red is dominant.
6. Calling generateHex("green") twice should return two different hex color values where green is dominant.
7. Calling generateHex("blue") twice should return two different hex color values where blue is dominant.*/

// Helper para extraer los valores RGB de un string hexadecimal
function getRGB(hex) {
  return [
    parseInt(hex.slice(0, 2), 16),
    parseInt(hex.slice(2, 4), 16),
    parseInt(hex.slice(4, 6), 16),
  ];
}

// Helper para verificar si un color es dominante
function isDominant([r, g, b], color) {
  if (color === "red") return r > g && r > b;
  if (color === "green") return g > r && g > b;
  if (color === "blue") return b > r && b > g;
  return false;
}

describe("Hex Generator", () => {
  // Test 1: Si el color no es válido, debe devolver "Invalid color"
  it('should return "Invalid color" for invalid input', () => {
    expect(generateHex("yellow")).toBe("Invalid color");
  });

  // Test 2: Para "red", debe devolver un string de 6 caracteres
  it('should return a six-character string for "red"', () => {
    const result = generateHex("red");
    expect(result).toHaveLength(6);
  });

  // Test 3: Para "red", debe devolver un string hexadecimal válido de 6 caracteres
  it('should return a valid six-character hex color code for "red"', () => {
    const result = generateHex("red");
    expect(result).toMatch(/^[0-9A-Fa-f]{6}$/);
  });

  // Test 4: Para "red", el valor rojo debe ser mayor que el verde y el azul
  it('should return a hex color with a higher red value than green and blue for "red"', () => {
    const rgb = getRGB(generateHex("red"));
    expect(isDominant(rgb, "red")).toBe(true);
  });

  // Test 5: Dos llamadas a "red" deben devolver valores distintos y ambos deben ser dominados por rojo
  it('should return two different hex values for "red" and both should be red dominant', () => {
    const res1 = generateHex("red");
    const res2 = generateHex("red");
    expect(res1).not.toBe(res2); // Deben ser diferentes
    expect(isDominant(getRGB(res1), "red")).toBe(true);
    expect(isDominant(getRGB(res2), "red")).toBe(true);
  });

  // Test 6: Dos llamadas a "green" deben devolver valores distintos y ambos deben ser dominados por verde
  it('should return two different hex values for "green" and both should be green dominant', () => {
    const res1 = generateHex("green");
    const res2 = generateHex("green");
    expect(res1).not.toBe(res2); // Deben ser diferentes
    expect(isDominant(getRGB(res1), "green")).toBe(true);
    expect(isDominant(getRGB(res2), "green")).toBe(true);
  });

  // Test 7: Dos llamadas a "blue" deben devolver valores distintos y ambos deben ser dominados por azul
  it('should return two different hex values for "blue" and both should be blue dominant', () => {
    const res1 = generateHex("blue");
    const res2 = generateHex("blue");
    expect(res1).not.toBe(res2); // Deben ser diferentes
    expect(isDominant(getRGB(res1), "blue")).toBe(true);
    expect(isDominant(getRGB(res2), "blue")).toBe(true);
  });
});

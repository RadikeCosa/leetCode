/**
 * FreeCodeCamp Problem: Tip Calculator
 *
 * Given the price of your meal and a custom tip percent, return an array with three tip values;
 * 15%, 20%, and the custom amount.
 *
 * - Prices will be given in the format: "$N.NN".
 * - Custom tip percents will be given in this format: "25%".
 * - Return amounts in the same "$N.NN" format, rounded to two decimal places.
 * - For example, given a "$10.00" meal price, and a "25%" custom tip value, return ["$1.50", "$2.00", "$2.50"].
 *
 * Ejemplos de prueba:
 * - calculateTips("$10.00", "25%") should return ["$1.50", "$2.00", "$2.50"]
 * - calculateTips("$89.67", "26%") should return ["$13.45", "$17.93", "$23.31"]
 * - calculateTips("$19.85", "9%") should return ["$2.98", "$3.97", "$1.79"]
 */
import { it, describe, expect } from "vitest";
import calculateTips from "./tip-calculator.js";

describe("Tip Calculator", () => {
  it("should return ['$1.50', '$2.00', '$2.50'] for calculateTips('$10.00', '25%')", () => {
    expect(calculateTips("$10.00", "25%")).toEqual(["$1.50", "$2.00", "$2.50"]);
  });
  it("should return ['$13.45', '$17.93', '$23.31'] for calculateTips('$89.67', '26%')", () => {
    expect(calculateTips("$89.67", "26%")).toEqual([
      "$13.45",
      "$17.93",
      "$23.31",
    ]);
  });
  it("should return ['$2.98', '$3.97', '$1.79'] for calculateTips('$19.85', '9%')", () => {
    expect(calculateTips("$19.85", "9%")).toEqual(["$2.98", "$3.97", "$1.79"]);
  });
});

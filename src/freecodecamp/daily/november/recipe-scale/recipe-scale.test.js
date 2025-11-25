import scaleRecipe from "./recipe-scale";
import { describe, it, expect } from "vitest";

/**
 1. scaleRecipe(["2 C Flour", "1.5 T Sugar"], 2) should return ["4 C Flour", "3 T Sugar"].
2. scaleRecipe(["4 T Flour", "1 C Milk", "2 T Oil"], 1.5) should return ["6 T Flour", "1.5 C Milk", "3 T Oil"].
3. scaleRecipe(["3 C Milk", "2 C Oats"], 0.5) should return ["1.5 C Milk", "1 C Oats"].
4. scaleRecipe(["2 C All-purpose Flour", "1 t Baking Soda", "1 t Salt", "1 C Butter", "0.5 C Sugar", "0.5 C Brown Sugar", "1 t Vanilla Extract", "2 C Chocolate Chips"], 2.5) should return ["5 C All-purpose Flour", "2.5 t Baking Soda", "2.5 t Salt", "2.5 C Butter", "1.25 C Sugar", "1.25 C Brown Sugar", "2.5 t Vanilla Extract", "5 C Chocolate Chips"].
 */

describe("Recipe Scale", () => {
  it("Should manage example 1 ", () => {
    expect(scaleRecipe(["2 C Flour", "1.5 T Sugar"], 2)).toEqual([
      "4 C Flour",
      "3 T Sugar",
    ]);
  });

  it("Should manage example 2 ", () => {
    expect(scaleRecipe(["4 T Flour", "1 C Milk", "2 T Oil"], 1.5)).toEqual([
      "6 T Flour",
      "1.5 C Milk",
      "3 T Oil",
    ]);
  });

  it("Should manage example 3 ", () => {
    expect(scaleRecipe(["3 C Milk", "2 C Oats"], 0.5)).toEqual([
      "1.5 C Milk",
      "1 C Oats",
    ]);
  });

  it("Should manage example 4 ", () => {
    expect(
      scaleRecipe(
        [
          "2 C All-purpose Flour",
          "1 t Baking Soda",
          "1 t Salt",
          "1 C Butter",
          "0.5 C Sugar",
          "0.5 C Brown Sugar",
          "1 t Vanilla Extract",
          "2 C Chocolate Chips",
        ],
        2.5
      )
    ).toEqual([
      "5 C All-purpose Flour",
      "2.5 t Baking Soda",
      "2.5 t Salt",
      "2.5 C Butter",
      "1.25 C Sugar",
      "1.25 C Brown Sugar",
      "2.5 t Vanilla Extract",
      "5 C Chocolate Chips",
    ]);
  });
});

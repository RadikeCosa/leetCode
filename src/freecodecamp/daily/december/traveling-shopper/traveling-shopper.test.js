import { expect, it } from "vitest";
import buyItems from "./traveling-shopper";

/**
 * Traveling Shopper
Given an amount of money you have, and an array of items you want to buy, determine how many of them you can afford.

The given amount will be in the format ["Amount", "Currency Code"]. For example: ["150.00", "USD"] or ["6000", "JPY"].
Each array item you want to purchase will be in the same format.
Use the following exchange rates to convert values:

Currency	1 Unit Equals
USD	1.00 USD
EUR	1.10 USD
GBP	1.25 USD
JPY	0.0070 USD
CAD	0.75 USD
If you can afford all the items in the list, return "Buy them all!".
Otherwise, return "Buy the first X items.", where X is the number of items you can afford when purchased in the order given.

Tests
1. buyItems(["150.00", "USD"], [["50.00", "USD"], ["75.00", "USD"], ["30.00", "USD"]]) should return "Buy the first 2 items.".
2. buyItems(["200.00", "EUR"], [["50.00", "USD"], ["50.00", "USD"]]) should return "Buy them all!".
3. buyItems(["100.00", "CAD"], [["20.00", "USD"], ["15.00", "EUR"], ["10.00", "GBP"], ["6000", "JPY"], ["5.00", "CAD"], ["10.00", "USD"]]) should return "Buy the first 3 items.".
4. buyItems(["5000", "JPY"], [["3.00", "USD"], ["1000", "JPY"], ["5.00", "CAD"], ["2.00", "EUR"], ["4.00", "USD"], ["2000", "JPY"]]) should return "Buy them all!".
5. buyItems(["200.00", "USD"], [["50.00", "USD"], ["40.00", "EUR"], ["30.00", "GBP"], ["5000", "JPY"], ["25.00", "CAD"], ["20.00", "USD"]]) should return "Buy the first 5 items.".
 */

describe("Traveling Shopper", () => {
  it("Test Case 1", () => {
    expect(
      buyItems(
        ["150.00", "USD"],
        [
          ["50.00", "USD"],
          ["75.00", "USD"],
          ["30.00", "USD"],
        ]
      )
    ).toBe("Buy the first 2 items.");
  });
  it("Test Case 2", () => {
    expect(
      buyItems(
        ["200.00", "EUR"],
        [
          ["50.00", "USD"],
          ["50.00", "USD"],
        ]
      )
    ).toBe("Buy them all!");
  });
  it("Test Case 3", () => {
    expect(
      buyItems(
        ["100.00", "CAD"],
        [
          ["20.00", "USD"],
          ["15.00", "EUR"],
          ["10.00", "GBP"],
          ["6000", "JPY"],
          ["5.00", "CAD"],
          ["10.00", "USD"],
        ]
      )
    ).toBe("Buy the first 3 items.");
  });
  it("Test Case 4", () => {
    expect(
      buyItems(
        ["5000", "JPY"],
        [
          ["3.00", "USD"],
          ["1000", "JPY"],
          ["5.00", "CAD"],
          ["2.00", "EUR"],
          ["4.00", "USD"],
          ["2000", "JPY"],
        ]
      )
    ).toBe("Buy them all!");
  });
  it("Test Case 5", () => {
    expect(
      buyItems(
        ["200.00", "USD"],
        [
          ["50.00", "USD"],
          ["40.00", "EUR"],
          ["30.00", "GBP"],
          ["5000", "JPY"],
          ["25.00", "CAD"],
          ["20.00", "USD"],
        ]
      )
    ).toBe("Buy the first 5 items.");
  });
});

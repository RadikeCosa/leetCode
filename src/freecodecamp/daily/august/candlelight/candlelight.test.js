import burnCandles from "./candlelight";
import { expect, it, describe } from "vitest";
/**
 Candlelight
Given an integer representing the number of candles you start with, and an integer representing how many burned candles it takes to create a new one, return the number of candles you will have used after creating and burning as many as you can.

For example, if given 7 candles and it takes 2 burned candles to make a new one:

Burn 7 candles to get 7 leftovers,
Recycle 6 leftovers into 3 new candles (1 leftover remains),
Burn 3 candles to get 3 more leftovers (4 total),
Recycle 4 leftovers into 2 new candles,
Burn 2 candles to get 2 leftovers,
Recycle 2 leftovers into 1 new candle,
Burn 1 candle.
You will have burned 13 total candles in the example.

Tests
1. burnCandles(7, 2) should return 13
2. burnCandles(10, 5) should return 12
3. burnCandles(20, 3) should return 29
4. burnCandles(17, 4) should return 22
5. burnCandles(2345, 3) should return 3517
*/

describe("Candlelight", () => {
  it("burnCandles(7, 2) should return 13", () => {
    expect(burnCandles(7, 2)).toBe(13);
  });

  it("burnCandles(10, 5) should return 12", () => {
    expect(burnCandles(10, 5)).toBe(12);
  });

  it("burnCandles(20, 3) should return 29", () => {
    expect(burnCandles(20, 3)).toBe(29);
  });
  it("burnCandles(17, 4) should return 22", () => {
    expect(burnCandles(17, 4)).toBe(22);
  });
  it("burnCandles(2345, 3) should return 3517", () => {
    expect(burnCandles(2345, 3)).toBe(3517);
  });
});

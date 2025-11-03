import infected from "./infected";
import { describe, it, expect } from "vitest";

/**
 * Infected
 *
 * On November 2nd, 1988, the first major internet worm was released, infecting about 10% of
 * computers connected to the internet after only a day.
 *
 * Given a number of days that have passed since an internet worm was released, determine
 * how many computers are infected using the following rules:
 *
 * Rules:
 * 1. On day 0, the first computer is infected
 * 2. Each subsequent day, the number of infected computers doubles
 * 3. Every 3rd day, a patch is applied after the virus spreads and reduces the number
 *    of infected computers by 20%. Round the number of patched computers up to the nearest whole number.
 *
 * Example progression:
 * - Day 0: 1 total computer is infected
 * - Day 1: 2 total computers are infected
 * - Day 2: 4 total computers are infected
 * - Day 3: 8 total computers are infected. Then, apply the patch:
 *   8 infected * 20% = 1.6 patched. Round 1.6 up to 2.
 *   8 computers infected - 2 patched = 6 total computers infected after day 3
 *
 * Tests:
 * 1. infected(1) should return 2
 * 2. infected(3) should return 6
 * 3. infected(8) should return 152
 * 4. infected(17) should return 39808
 * 5. infected(25) should return 5217638
 */
describe("Infected", () => {
  it("should return 2 with input 1", () => {
    expect(infected(1)).toBe(2);
  });

  it("should return 6 with input 3", () => {
    expect(infected(3)).toBe(6);
  });

  it("should return 152 with input 8", () => {
    expect(infected(8)).toBe(152);
  });

  it("should return 39808 with input 17", () => {
    expect(infected(17)).toBe(39808);
  });

  it("should return 5217638 with input 25", () => {
    expect(infected(25)).toBe(5217638);
  });
});

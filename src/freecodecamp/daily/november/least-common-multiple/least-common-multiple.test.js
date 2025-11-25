import leastCommonMultiple from "./least-common-multiple";

/**
 Tests
1. lcm(4, 6) should return 12.
2. lcm(9, 6) should return 18.
3. lcm(10, 100) should return 100.
4. lcm(13, 17) should return 221.
5. lcm(45, 70) should return 630.
*/

describe("Least Common Multiple", () => {
  it("lcm(4, 6) should return 12", () => {
    expect(leastCommonMultiple(4, 6)).toBe(12);
  });

  it("lcm(9, 6) should return 18", () => {
    expect(leastCommonMultiple(9, 6)).toBe(18);
  });

  it("lcm(10, 100) should return 100", () => {
    expect(leastCommonMultiple(10, 100)).toBe(100);
  });

  it("lcm(13, 17) should return 221", () => {
    expect(leastCommonMultiple(13, 17)).toBe(221);
  });

  it("lcm(45, 70) should return 630", () => {
    expect(leastCommonMultiple(45, 70)).toBe(630);
  });
});

import calculateAge from "./whats-my-age-again";
import { describe, it, expect } from "vitest";
/**
 Tests
1. calculateAge("2000-11-20") should return 25.
2. calculateAge("2000-12-01") should return 24.
3. calculateAge("2014-10-25") should return 11.
4. calculateAge("1994-01-06") should return 31.
5. calculateAge("1994-12-14") should return 30.
 */

describe("Whats My Age Again", () => {
  it("calculateAge('2000-11-20') should return 25", () => {
    expect(calculateAge("2000-11-20")).toBe(25);
  });

  it("calculateAge('2000-12-01') should return 24", () => {
    expect(calculateAge("2000-12-01")).toBe(24);
  });

  it("calculateAge('2014-10-25') should return 11", () => {
    expect(calculateAge("2014-10-25")).toBe(11);
  });

  it("calculateAge('1994-01-06') should return 31", () => {
    expect(calculateAge("1994-01-06")).toBe(31);
  });

  it("calculateAge('1994-12-14') should return 30", () => {
    expect(calculateAge("1994-12-14")).toBe(30);
  });
});

import spookify from "./spooky-case";
import { describe, it, expect } from "vitest";

/**
 * SpOoKy~CaSe
 *
 * Given a string representing a variable name, convert it to "spooky case" using the following constraints:
 *
 * 1. Replace all underscores (_), and hyphens (-) with a tilde (~).
 * 2. Capitalize the first letter of the string, and every other letter after that.
 * 3. Ignore the tilde character when counting for capitalization pattern.
 *
 * Examples:
 * - hello_world -> HeLlO~wOrLd
 * - Spooky_Case -> SpOoKy~CaSe
 * - TRICK-or-TREAT -> TrIcK~oR~tReAt
 * - c_a-n_d-y_-b-o_w_l -> C~a~N~d~Y~~b~O~w~L
 * - thE_hAUntEd-hOUsE-Is-fUll_Of_ghOsts -> ThE~hAuNtEd~HoUsE~iS~fUlL~oF~gHoStS
 *
 * Tests:
 * 1. spookify("hello_world") should return "HeLlO~wOrLd"
 * 2. spookify("Spooky_Case") should return "SpOoKy~CaSe"
 * 3. spookify("TRICK-or-TREAT") should return "TrIcK~oR~tReAt"
 * 4. spookify("c_a-n_d-y_-b-o_w_l") should return "C~a~N~d~Y~~b~O~w~L"
 * 5. spookify("thE_hAUntEd-hOUsE-Is-fUll_Of_ghOsts") should return "ThE~hAuNtEd~HoUsE~iS~fUlL~oF~gHoStS"
 */
describe("SpOoKy~CaSe", () => {
  it("should convert hello_world to HeLlO~wOrLd", () => {
    expect(spookify("hello_world")).toBe("HeLlO~wOrLd");
  });

  it("should convert Spooky_Case to SpOoKy~CaSe", () => {
    expect(spookify("Spooky_Case")).toBe("SpOoKy~CaSe");
  });

  it("should convert TRICK-or-TREAT to TrIcK~oR~tReAt", () => {
    expect(spookify("TRICK-or-TREAT")).toBe("TrIcK~oR~tReAt");
  });

  it("should convert c_a-n_d-y_-b-o_w_l to C~a~N~d~Y~~b~O~w~L", () => {
    expect(spookify("c_a-n_d-y_-b-o_w_l")).toBe("C~a~N~d~Y~~b~O~w~L");
  });

  it("should convert thE_hAUntEd-hOUsE-Is-fUll_Of_ghOsts to ThE~hAuNtEd~HoUsE~iS~fUlL~oF~gHoStS", () => {
    expect(spookify("thE_hAUntEd-hOUsE-Is-fUll_Of_ghOsts")).toBe(
      "ThE~hAuNtEd~HoUsE~iS~fUlL~oF~gHoStS"
    );
  });
});

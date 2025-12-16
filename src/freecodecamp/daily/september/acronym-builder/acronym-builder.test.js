import { it } from "vitest";
import buildAcronym from "./acronym-builder";

/**
  Acronym Builder
Given a string containing one or more words, return an acronym of the words using the following constraints:

The acronym should consist of the first letter of each word capitalized, unless otherwise noted.
The acronym should ignore the first letter of these words unless they are the first word of the given string: a, for, an, and, by, and of.
The acronym letters should be returned in the order they are given.
The acronym should not contain any spaces.
Tests
1. buildAcronym("Search Engine Optimization") should return "SEO".
2. buildAcronym("Frequently Asked Questions") should return "FAQ".
3. buildAcronym("National Aeronautics and Space Administration") should return "NASA".
4. buildAcronym("Federal Bureau of Investigation") should return "FBI".
5. buildAcronym("For your information") should return "FYI".
6. buildAcronym("By the way") should return "BTW".
7. buildAcronym("An unstoppable herd of waddling penguins overtakes the icy mountains and sings happily") should return "AUHWPOTIMSH".
 */

describe("Acronym Builder", () => {
  it("should return 'SEO' for input 'Search Engine Optimization'", () => {
    expect(buildAcronym("Search Engine Optimization")).toBe("SEO");
  });

  it("should return 'FAQ' for input 'Frequently Asked Questions'", () => {
    expect(buildAcronym("Frequently Asked Questions")).toBe("FAQ");
  });

  it("should return 'NASA' for input 'National Aeronautics and Space Administration'", () => {
    expect(buildAcronym("National Aeronautics and Space Administration")).toBe(
      "NASA"
    );
  });

  it("should return 'FBI' for input 'Federal Bureau of Investigation'", () => {
    expect(buildAcronym("Federal Bureau of Investigation")).toBe("FBI");
  });
  it("should return 'FYI' for input 'For your information'", () => {
    expect(buildAcronym("For your information")).toBe("FYI");
  });
  it("should return 'BTW' for input 'By the way'", () => {
    expect(buildAcronym("By the way")).toBe("BTW");
  });
  it("should return 'AUHWPOTIMSH' for a long input", () => {
    expect(
      buildAcronym(
        "An unstoppable herd of waddling penguins overtakes the icy mountains and sings happily"
      )
    ).toBe("AUHWPOTIMSH");
  });
});

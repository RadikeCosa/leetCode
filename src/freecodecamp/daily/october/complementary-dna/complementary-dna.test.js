import complementaryDNA from "./complementary-dna.js";

/*
Complementary DNA

Given a string representing a DNA sequence, return its complementary strand using the following rules:

DNA consists of the letters "A", "C", "G", and "T".
The letters "A" and "T" complement each other.
The letters "C" and "G" complement each other.
For example, given "ACGT", return "TGCA".

Tests

Waiting:1. complementaryDNA("ACGT") should return "TGCA".
Waiting:2. complementaryDNA("ATGCGTACGTTAGC") should return "TACGCATGCAATCG".
Waiting:3. complementaryDNA("GGCTTACGATCGAAG") should return "CCGAATGCTAGCTTC".
Waiting:4. complementaryDNA("GATCTAGCTAGGCTAGCTAG") should return "CTAGATCGATCCGATCGATC".
*/
import { describe, it, expect } from "vitest";
import complementaryDNA from "./complementary-dna.js";

describe("Complementary DNA", () => {
  it("should return TGCA for ACGT", () => {
    expect(complementaryDNA("ACGT")).toBe("TGCA");
  });
  it("should return TACGCATGCAATCG for ATGCGTACGTTAGC", () => {
    expect(complementaryDNA("ATGCGTACGTTAGC")).toBe("TACGCATGCAATCG");
  });
  it("should return CCGAATGCTAGCTTC for GGCTTACGATCGAAG", () => {
    expect(complementaryDNA("GGCTTACGATCGAAG")).toBe("CCGAATGCTAGCTTC");
  });
  it("should return CTAGATCGATCCGATCGATC for GATCTAGCTAGGCTAGCTAG", () => {
    expect(complementaryDNA("GATCTAGCTAGGCTAGCTAG")).toBe(
      "CTAGATCGATCCGATCGATC"
    );
  });
});

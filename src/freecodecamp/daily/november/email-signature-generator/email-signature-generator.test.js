import generatesSignature from "./email-signature-generator";
import { describe, it, expect } from "vitest";
/**
 * TODO: Add complete problem statement here
 *
 * 1. generateSignature("Quinn Waverly", "Founder and CEO", "TechCo") should return "--Quinn Waverly, Founder and CEO at TechCo".
 * 2. generateSignature("Alice Reed", "Engineer", "TechCo") should return ">>Alice Reed, Engineer at TechCo".
 * 3. generateSignature("Tina Vaughn", "Developer", "example.com") should return "::Tina Vaughn,Developer at example.com".
 * 4. generateSignature("B. B.", "Product Tester", "AcmeCorp") should return ">>B. B., Product Tester at AcmeCorp".
 * 5. generateSignature("windstorm", "Cloud Architect", "Atmospheronics") should return "::windstorm, Cloud Architect at Atmospheronics"
 * Problem statement word-for-word:
 *
 */

describe("Email Signature Generator", () => {
  it("should generate correct signature for Quinn Waverly", () => {
    expect(
      generatesSignature("Quinn Waverly", "Founder and CEO", "TechCo")
    ).toBe("--Quinn Waverly, Founder and CEO at TechCo");
  });

  it("should generate correct signature for Alice Reed", () => {
    expect(generatesSignature("Alice Reed", "Engineer", "TechCo")).toBe(
      ">>Alice Reed, Engineer at TechCo"
    );
  });

  it("should generate correct signature for Tina Vaughn", () => {
    expect(generatesSignature("Tina Vaughn", "Developer", "example.com")).toBe(
      "::Tina Vaughn, Developer at example.com"
    );
  });

  it("should generate correct signature for B. B.", () => {
    expect(generatesSignature("B. B.", "Product Tester", "AcmeCorp")).toBe(
      ">>B. B., Product Tester at AcmeCorp"
    );
  });

  it("should generate correct signature for windstorm", () => {
    expect(
      generatesSignature("windstorm", "Cloud Architect", "Atmospheronics")
    ).toBe("::windstorm, Cloud Architect at Atmospheronics");
  });
});

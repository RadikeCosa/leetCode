import toCamelCase from "./camel-case";
import { describe, it, expect } from "vitest";

/**
 Tests
1. toCamelCase("hello world") should return "helloWorld".
2. toCamelCase("HELLO WORLD") should return "helloWorld".
3. toCamelCase("secret agent-X") should return "secretAgentX".
4. toCamelCase("FREE cODE cAMP") should return "freeCodeCamp".
5. toCamelCase("ye old-_-sea  faring_buccaneer_-_with a - peg__leg----and a_parrot_ _named- _squawk") should return "yeOldSeaFaringBuccaneerWithAPegLegAndAParrotNamedSquawk".
 */

describe("Camel Case", () => {
  it('toCamelCase("hello world") should return "helloWorld"', () => {
    expect(toCamelCase("hello world")).toBe("helloWorld");
  });

  it('toCamelCase("HELLO WORLD") should return "helloWorld"', () => {
    expect(toCamelCase("HELLO WORLD")).toBe("helloWorld");
  });

  it('toCamelCase("secret agent-X") should return "secretAgentX"', () => {
    expect(toCamelCase("secret agent-X")).toBe("secretAgentX");
  });

  it('toCamelCase("FREE cODE cAMP") should return "freeCodeCamp"', () => {
    expect(toCamelCase("FREE cODE cAMP")).toBe("freeCodeCamp");
  });

  it('toCamelCase("ye old-_-sea  faring_buccaneer_-_with a - peg__leg----and a_parrot_ _named- _squawk") should return "yeOldSeaFaringBuccaneerWithAPegLegAndAParrotNamedSquawk"', () => {
    expect(
      toCamelCase(
        "ye old-_-sea  faring_buccaneer_-_with a - peg__leg----and a_parrot_ _named- _squawk"
      )
    ).toBe("yeOldSeaFaringBuccaneerWithAPegLegAndAParrotNamedSquawk");
  });
});

import compare from "./word-guesser";
import { describe, it, expect } from "vitest";

/**
 Tests
1. compare("APPLE", "POPPA") should return "10201".
2. compare("REACT", "TRACE") should return "11221".
3. compare("DEBUGS", "PYTHON") should return "000000".
4. compare("JAVASCRIPT", "TYPESCRIPT") should return "0000222222".
5. compare("ORANGE", "ROUNDS") should return "110200".
6. compare("WIRELESS", "ETHERNET") should return "10021000".
 */

describe("Word Guesser", () => {
  it('compare("APPLE", "POPPA") should return "10201"', () => {
    expect(compare("APPLE", "POPPA")).toBe("10201");
  });

  it('compare("REACT", "TRACE") should return "11221"', () => {
    expect(compare("REACT", "TRACE")).toBe("11221");
  });

  it('compare("DEBUGS", "PYTHON") should return "000000"', () => {
    expect(compare("DEBUGS", "PYTHON")).toBe("000000");
  });

  it('compare("JAVASCRIPT", "TYPESCRIPT") should return "0000222222"', () => {
    expect(compare("JAVASCRIPT", "TYPESCRIPT")).toBe("0000222222");
  });

  it('compare("ORANGE", "ROUNDS") should return "110200"', () => {
    expect(compare("ORANGE", "ROUNDS")).toBe("110200");
  });

  it('compare("WIRELESS", "ETHERNET") should return "10021000"', () => {
    expect(compare("WIRELESS", "ETHERNET")).toBe("10021000");
  });
});

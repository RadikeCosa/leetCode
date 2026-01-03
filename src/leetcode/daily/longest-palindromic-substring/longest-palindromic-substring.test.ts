import { describe, it, expect } from "vitest";
import { longestPalindromic } from "./longest-palindromic-substring";

describe("Longest Palindromic Substring", () => {
  it("Caso A - palíndromo central impar (babad)", () => {
    const s = "babad";
    const res = longestPalindromic(s);
    expect(["bab", "aba"]).toContain(res);
  });

  it("Caso B - palíndromo central par (cbbd)", () => {
    const s = "cbbd";
    const res = longestPalindromic(s);
    expect(res).toBe("bb");
  });

  it("Caso C - todos caracteres iguales (aaaa)", () => {
    const s = "aaaa";
    const res = longestPalindromic(s);
    expect(res).toBe("aaaa");
  });

  it("Caso D - sin palíndromos largos (abcde)", () => {
    const s = "abcde";
    const res = longestPalindromic(s);
    // cualquier carácter individual es válido
    expect(["a", "b", "c", "d", "e"]).toContain(res);
  });

  it("Caso E - palíndromo en los extremos (racecarxyz)", () => {
    const s = "racecarxyz";
    const res = longestPalindromic(s);
    expect(res).toBe("racecar");
  });

  it("Caso F - cadenas cortas / límites", () => {
    expect(longestPalindromic("a")).toBe("a");
    const two = longestPalindromic("ab");
    expect(["a", "b"]).toContain(two);
  });
});

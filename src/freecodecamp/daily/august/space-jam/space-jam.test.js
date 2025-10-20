/**
 * FreeCodeCamp Problem: S P A C E J A M
 *
 * Given a string, remove all spaces from the string, insert two spaces between every character,
 * convert all alphabetical letters to uppercase, and return the result.
 *
 * - Non-alphabetical characters should remain unchanged (except for spaces).
 *
 * Ejemplos de prueba:
 * - spaceJam("freeCodeCamp") should return "F  R  E  E  C  O  D  E  C  A  M  P"
 * - spaceJam("   free   Code   Camp   ") should return "F  R  E  E  C  O  D  E  C  A  M  P"
 * - spaceJam("Hello World?!") should return "H  E  L  L  O  W  O  R  L  D  ?  !"
 * - spaceJam("C@t$ & D0g$") should return "C  @  T  $  &  D  0  G  $"
 * - spaceJam("allyourbase") should return "A  L  L  Y  O  U  R  B  A  S  E"
 */
import { it, describe, expect } from "vitest";
import spaceJam from "./space-jam.js";

describe("S P A C E J A M", () => {
  it('should return "F  R  E  E  C  O  D  E  C  A  M  P" for "freeCodeCamp"', () => {
    expect(spaceJam("freeCodeCamp")).toBe("F  R  E  E  C  O  D  E  C  A  M  P");
  });
  it('should return "F  R  E  E  C  O  D  E  C  A  M  P" for "   free   Code   Camp   "', () => {
    expect(spaceJam("   free   Code   Camp   ")).toBe(
      "F  R  E  E  C  O  D  E  C  A  M  P"
    );
  });
  it('should return "H  E  L  L  O  W  O  R  L  D  ?  !" for "Hello World?!"', () => {
    expect(spaceJam("Hello World?!")).toBe(
      "H  E  L  L  O  W  O  R  L  D  ?  !"
    );
  });
  it('should return "C  @  T  $  &  D  0  G  $" for "C@t$ & D0g$"', () => {
    expect(spaceJam("C@t$ & D0g$")).toBe("C  @  T  $  &  D  0  G  $");
  });
  it('should return "A  L  L  Y  O  U  R  B  A  S  E" for "allyourbase"', () => {
    expect(spaceJam("allyourbase")).toBe("A  L  L  Y  O  U  R  B  A  S  E");
  });
});

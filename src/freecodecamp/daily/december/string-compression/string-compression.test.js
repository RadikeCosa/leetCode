import compressString from "./string-compression";
import { describe, it, expect } from "vitest";

/** String Compression
Given a string sentence, return a compressed version of the sentence where consecutive duplicate words are replaced by the word followed with the number of times it repeats in parentheses.

Only consecutive duplicates are compressed.
Words are separated by single spaces.
For example, given "yes yes yes please", return "yes(3) please".

Tests
1. compressString("yes yes yes please") should return "yes(3) please".
2. compressString("I have have have apples") should return "I have(3) apples".
3. compressString("one one three and to the the the the") should return "one(2) three and to the(4)".
4. compressString("route route route route route route tee tee tee tee tee tee") should return "route(6) tee(6)".


- Una cadena sin palabras repetidas ("a b c d" → "a b c d").
- Una cadena con una sola palabra ("hello" → "hello").
- Una cadena vacía ("" → "").
- Palabras repetidas no consecutivas ("a b a a" → "a b a(2)").
 */

describe("String Compression", () => {
  it('compressString("yes yes yes please") should return "yes(3) please"', () => {
    expect(compressString("yes yes yes please")).toBe("yes(3) please");
  });

  it('compressString("I have have have apples") should return "I have(3) apples"', () => {
    expect(compressString("I have have have apples")).toBe("I have(3) apples");
  });
  it('compressString("one one three and to the the the the") should return "one(2) three and to the(4)"', () => {
    expect(compressString("one one three and to the the the the")).toBe(
      "one(2) three and to the(4)"
    );
  });

  it('compressString("route route route route route route tee tee tee tee tee tee") should return "route(6) tee(6)"', () => {
    expect(
      compressString(
        "route route route route route route tee tee tee tee tee tee"
      )
    ).toBe("route(6) tee(6)");
  });

  it("should manage a string without repeated words", () => {
    expect(compressString("a b c d")).toBe("a b c d");
  });

  it("should manage a string with a single word", () => {
    expect(compressString("hello")).toBe("hello");
  });

  it("should manage an empty string", () => {
    expect(compressString("")).toBe("");
  });

  it("should manage non-consecutive repeated words", () => {
    expect(compressString("a b a a")).toBe("a b a(2)");
  });
});

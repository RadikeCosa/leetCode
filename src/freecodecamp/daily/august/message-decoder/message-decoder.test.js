import decode from "./message-decoder";
import { describe, it, expect } from "vitest";

/**
 * Message Decoder
 *
 * Given a secret message string, and an integer representing the number of letters
 * that were used to shift the message to encode it, return the decoded string.
 *
 * Rules:
 * 1. A positive number means the message was shifted forward in the alphabet
 * 2. A negative number means the message was shifted backward in the alphabet
 * 3. Case matters, decoded characters should retain the case of their encoded counterparts
 * 4. Non-alphabetical characters should not get decoded
 *
 * Examples:
 * - decode("Xlmw mw e wigvix qiwweki.", 4) → "This is a secret message."
 * - decode("Byffi Qilfx!", 20) → "Hello World!"
 * - decode("Zqd xnt njzx?", -1) → "Are you okay?"
 * - decode("oannLxmnLjvy", 9) → "freeCodeCamp"
 */
describe("Message Decoder", () => {
  it("should manage a long phrase with spaces and punctuation signs", () => {
    expect(decode("Xlmw mw e wigvix qiwweki.", 4)).toBe(
      "This is a secret message."
    );
  });
  it("should manage big shift", () => {
    expect(decode("Byffi Qilfx!", 20)).toBe("Hello World!");
  });
  it("should manage negative shift", () => {
    expect(decode("Zqd xnt njzx?", -1)).toBe("Are you okay?");
  });
  it("should return freeCodeCamp with input 'oannLxmnLjvy', 9", () => {
    expect(decode("oannLxmnLjvy", 9)).toBe("freeCodeCamp");
  });
});

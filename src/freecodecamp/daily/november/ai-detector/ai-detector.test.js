import detectAI from "./ai-detector";
import { describe, it, expect } from "vitest";
/**
 Tests
1. detectAI("The quick brown fox jumped over the lazy dog.") should return "Human".
2. detectAI("The hypersonic brown fox - jumped (over) the lazy dog.") should return "Human".
3. detectAI("Yes - you're right! I made a mistake there - let me try again.") should return "AI".
4. detectAI("The extraordinary students were studying vivaciously.") should return "AI".
5. detectAI("The (excited) student was (coding) in the library.") should return "AI".

 */

describe("Ai Detector", () => {
  it("should return 'Human' for text without AI indicators", () => {
    expect(detectAI("The quick brown fox jumped over the lazy dog.")).toBe(
      "Human"
    );
  });

  it("should return 'Human' for text with one dash and one parenthesis", () => {
    expect(
      detectAI("The hypersonic brown fox - jumped (over) the lazy dog.")
    ).toBe("Human");
  });
  it("should return 'AI' for text with two dashes", () => {
    expect(
      detectAI("Yes - you're right! I made a mistake there - let me try again.")
    ).toBe("AI");
  });

  it("should return 'AI' for text with three long words", () => {
    expect(
      detectAI("The extraordinary students were studying vivaciously.")
    ).toBe("AI");
  });

  it("should return 'AI' for text with two parentheses", () => {
    expect(detectAI("The (excited) student was (coding) in the library.")).toBe(
      "AI"
    );
  });
});

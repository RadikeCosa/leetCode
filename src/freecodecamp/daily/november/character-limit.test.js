import canPost from "./character-limit.js";
import { describe, it, expect } from "vitest";

// Character Limit
// In this challenge, you are given a string and need to determine if it fits in a social media post. Return the following strings based on the rules given:
//
// "short post" if it fits within a 40-character limit.
// "long post" if it's greater than 40 characters and fits within an 80-character limit.
// "invalid post" if it's too long to fit within either limit.
//
// Examples:
// 1. canPost("Hello world") should return "short post".
// 2. canPost("This is a longer message but still under eighty characters.") should return "long post".
// 3. canPost("This message is too long to fit into either of the character limits for a social media post.") should return "invalid post".

describe("Character Limit", () => {
  it("should return 'short post' for messages within 40 characters", () => {
    expect(canPost("Hello world")).toBe("short post");
    expect(canPost("This is a short message.")).toBe("short post");
  });
  it("should return 'long post' for messages between 41 and 80 characters", () => {
    expect(
      canPost("This is a longer message but still under eighty characters.")
    ).toBe("long post");
    expect(
      canPost("Just a bit more than forty characters to test the limit.")
    ).toBe("long post");
  });
  it("should return 'invalid post' for messages over 80 characters", () => {
    expect(
      canPost(
        "This message is too long to fit into either of the character limits for a social media post."
      )
    ).toBe("invalid post");
  });
});

import wiseSpeak from "./speak-wisely-you-must.js";

/**
 * FreeCodeCamp Problem: Speak Wisely, You Must
 * Category: Daily
 *
 * Given a sentence, return a version of it that sounds like advice from a wise teacher using the following rules:
 *
 * Words are separated by a single space.
 * Find the first occurrence of one of the following words in the sentence: "have", "must", "are", "will", "can".
 * Move all words before and including that word to the end of the sentence and:
 * Preserve the order of the words when you move them.
 * Make them all lowercase.
 * And add a comma and space before them.
 * Capitalize the first letter of the new first word of the sentence.
 * All given sentences will end with a single punctuation mark. Keep the original punctuation of the sentence and move it to the end of the new sentence.
 * Return the new sentence, make sure there's a single space between each word and no spaces at the beginning or end of the sentence.
 *
 * Tests:
 * 1. wiseSpeak("You must speak wisely.") should return "Speak wisely, you must."
 * 2. wiseSpeak("You can do it!") should return "Do it, you can!"
 * 3. wiseSpeak("Do you think you will complete this?") should return "Complete this, do you think you will?"
 * 4. wiseSpeak("All your base are belong to us.") should return "Belong to us, all your base are."
 * 5. wiseSpeak("You have much to learn.") should return "Much to learn, you have."
 */
import { it, describe, expect } from "vitest";
import wiseSpeak from "./speak-wisely-you-must.js";

describe("Speak Wisely, You Must", () => {
  it('should return "Speak wisely, you must." for the input "You must speak wisely."', () => {
    expect(wiseSpeak("You must speak wisely.")).toBe("Speak wisely, you must.");
  });
  it('should return "Do it, you can!" for the input "You can do it!"', () => {
    expect(wiseSpeak("You can do it!")).toBe("Do it, you can!");
  });
  it('should return "Complete this, do you think you will?" for the input "Do you think you will complete this?"', () => {
    expect(wiseSpeak("Do you think you will complete this?")).toBe(
      "Complete this, do you think you will?"
    );
  });
  it('should return "Belong to us, all your base are." for the input "All your base are belong to us."', () => {
    expect(wiseSpeak("All your base are belong to us.")).toBe(
      "Belong to us, all your base are."
    );
  });
  it('should return "Much to learn, you have." for the input "You have much to learn."', () => {
    expect(wiseSpeak("You have much to learn.")).toBe(
      "Much to learn, you have."
    );
  });
});

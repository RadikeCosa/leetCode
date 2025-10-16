/**
 * FreeCodeCamp Problem: HTML Tag Stripper
 * Category: Coding Interview Prep
 * Difficulty: Medium
 * Topics: Strings, HTML, Regular Expressions
 *
 * Given a string of HTML code, remove the tags and return the plain text content.
 *
 * The input string will contain only valid HTML.
 * HTML tags may be nested.
 * Remove the tags and any attributes.
 * For example, '<a href="#">Click here</a>' should return "Click here".
 *
 * Tests
 * Waiting:1. stripTags('<a href="#">Click here</a>') should return "Click here".
 * Waiting:2. stripTags('<p class="center">Hello <b>World</b>!</p>') should return "Hello World!".
 * Waiting:3. stripTags('<img src="cat.jpg" alt="Cat">') should return an empty string ("").
 * Waiting:4. stripTags('<main id="main"><section class="section">section</section><section class="section">section</section></main>') should return sectionsection.
 */
import { it, expect, describe } from "vitest";
import stripTags from "./html-tag-stripper.js";

describe("HTML Tag Stripper", () => {
  it("should return 'Click here' for <a href=\"#\">Click here</a>", () => {
    expect(stripTags('<a href="#">Click here</a>')).toBe("Click here");
  });
  it("should return 'Hello World!' for <p class=\"center\">Hello <b>World</b>!</p>", () => {
    expect(stripTags('<p class="center">Hello <b>World</b>!</p>')).toBe(
      "Hello World!"
    );
  });
  it('should return an empty string for <img src="cat.jpg" alt="Cat">', () => {
    expect(stripTags('<img src="cat.jpg" alt="Cat">')).toBe("");
  });
  it('should return \'sectionsection\' for <main id="main"><section class="section">section</section><section class="section">section</section></main>', () => {
    expect(
      stripTags(
        '<main id="main"><section class="section">section</section><section class="section">section</section></main>'
      )
    ).toBe("sectionsection");
  });
});

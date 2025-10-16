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
function stripTags(html) {
  return html.replace(/<[^>]*>/g, "");
  // This regex matches any substring that starts with '<', followed by any characters except '>', and ends with '>'.
  // The 'g' flag ensures that all occurrences in the string are replaced, not just the first one.
}

export default stripTags;

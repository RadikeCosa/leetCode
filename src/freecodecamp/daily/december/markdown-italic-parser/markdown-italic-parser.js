/**
 * FreeCodeCamp Problem: Markdown Italic Parser
 * Category: FreeCodeCamp
 *
 * @param {string} markdown - The markdown string to parse for italic text
 * @returns {string} The HTML string with italic text converted to <i> tags
 */
function parseItalics(markdown) {
  // Regex explanation:
  // (\*|_)       -> Capture group 1: matches either * or _
  // (?!\s)       -> Negative lookahead: ensures the next character is not a space
  // (.+?)        -> Capture group 2: matches any character (non-greedy)
  // (?<!\s)      -> Negative lookbehind: ensures the previous character was not a space
  // \1           -> Backreference: matches the same character captured in group 1
  const italicRegex = /(\*|_)(?!\s)(.+?)(?<!\s)\1/g;

  return markdown.replace(italicRegex, "<i>$2</i>");
}

export default parseItalics;

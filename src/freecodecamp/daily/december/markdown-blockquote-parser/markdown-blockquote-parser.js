/**
 * FreeCodeCamp Problem: Markdown Blockquote Parser
 * Category: FreeCodeCamp
 *
 * @param {any} param - TODO: Define parameter and description
 * @returns {any} TODO: Define return type and description
 */
function parseBlockquotesMultiline(markdown) {
  return markdown
    .split("\n")
    .map((line) => {
      const match = line.match(/^\s*>+\s*(.*)$/);
      if (match) {
        return `<blockquote>${match[1].trim()}</blockquote>`;
      }
      return line;
    })
    .join("\n");
}
export default parseBlockquotesMultiline;

/**
 * FreeCodeCamp Problem: Markdown Bold Parser
 * Category: FreeCodeCamp
 *
 * @param {string} markdown - The input string containing Markdown bold syntax
 * @returns {string} The input string with Markdown bold converted to HTML bold tags
 */
function parseBold(markdown) {
  // Regular expression to match bold text in Markdown
  const boldRegex = /(\*\*|__)(\S(?:.*?\S)?)\1/g;

  // Replace Markdown bold with HTML <b> tags
  markdown = markdown.replace(boldRegex, (_, delimiter, content) => {
    return `<b>${content}</b>`;
  });

  return markdown;
}

export default parseBold;

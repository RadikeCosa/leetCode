/**
 * FreeCodeCamp Problem: Markdown Unordered List Parser
 * Category: FreeCodeCamp
 *
 * @param {string} markdown - A string representing a valid Markdown unordered list
 * @returns {string} The equivalent HTML string representing the unordered list
 */
function parseUnorderedList(markdown) {
  const lines = markdown.split("\n");
  const listItems = lines.map((line) => {
    // Remove the leading "- " from each line
    const itemText = line.replace(/^-+\s+/, "");
    return `<li>${itemText}</li>`;
  });
  return `<ul>${listItems.join("")}</ul>`;
}

export default parseUnorderedList;

/**
 * FreeCodeCamp Problem: Markdown Ordered List Item Converter
 * Category: FreeCodeCamp
 *
 * @param {string} markdown - The markdown string to convert
 * @returns {string} The converted list item
 */
function convertListItem(markdown) {
  const regex = /^\s*([1-9][0-9]*)\.\s+(.*)$/;
  const match = markdown.match(regex);
  if (match) {
    const itemText = match[2];
    return `<li>${itemText}</li>`;
  } else {
    return "Invalid format";
  }
}

export default convertListItem;

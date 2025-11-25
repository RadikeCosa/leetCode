/**
 * FreeCodeCamp Problem: Markdown Heading Converter
 * Category: FreeCodeCamp
 *
 * @param {string} heading - A string representing a Markdown heading
 * @returns {string} The corresponding HTML heading or "Invalid format" if the input is not a valid Markdown heading
 */
function convert(heading) {
  const regex = /^(\s*)(#{1,6})\s+(.+)$/;
  const match = heading.match(regex);

  if (!match) {
    return "Invalid format";
  }

  const level = match[2].length;
  const text = match[3].trim();

  return `<h${level}>${text}</h${level}>`;
}

export default convert;
